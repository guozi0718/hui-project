/* 独立文件入口与参数路由；复用共享运行时，同页切换使用replaceState。 */
(()=>{'use strict';
const cfg=window.ZXH_PAGE_ROUTES;if(!cfg)return;
const nativeReplace=history.replaceState.bind(history),hashParams=new URLSearchParams(location.hash.slice(1)),params=hashParams.has('route')?hashParams:new URLSearchParams(location.search),entry=hashParams.get('route')||window.ZXH_PAGE_ENTRY||location.pathname.split('/').pop();
const requested=cfg.routes.find(x=>x.file===entry),legacy=location.hash.match(/^#(sc-[\w-]+)$/)?.[1];
let restoring=true,activeAction=null,context=null,initialized=false;
const controllers=new Map(),urlFor=(screen)=>cfg.routes.find(r=>r.screen===screen&&!r.view)?.file||'home.html';
const encode=value=>{if(value instanceof Element){if(value.id)return {elementId:value.id};const data=Object.entries(value.dataset);return data.length?{elementData:data}:null;}if(value===undefined)return null;try{return JSON.parse(JSON.stringify(value))}catch{return null}};
const decode=value=>{if(value?.elementId)return document.getElementById(value.elementId);if(value?.elementData)return [...document.querySelectorAll('[data-id], [data-key], [data-name], [data-student], [data-ev]')].find(el=>value.elementData.every(([k,v])=>el.dataset[k]===v))||null;return value;};
function current(){return document.querySelector('.screen.show')?.id||'sc-home';}
function sync(){if(restoring)return;const screen=current(),q=new URLSearchParams();let file=urlFor(screen);
 if(screen==='sc-notification'&&window.NotificationMini?.routeState){const state=NotificationMini.routeState;file=cfg.routes.find(r=>r.view===state.view)?.file||'notification.html';for(const [key,value] of Object.entries(state))if(key!=='view'&&value!==undefined&&value!==null&&value!=='')q.set(key,String(value));}
 else {const ctx=activeAction||context;if(ctx?.screen===screen){q.set('action',ctx.name);q.set('args',JSON.stringify(ctx.args));if(['string','number'].includes(typeof ctx.args[0]))q.set('id',String(ctx.args[0]));}else if(screen===requested?.screen){for(const key of ['id','action','args','params'])if(params.has(key))q.set(key,params.get(key));}}
 const next=file+(q.size?'?'+q:'');try{nativeReplace({screen},'',next)}catch(error){if(location.protocol!=='file:')throw error;nativeReplace({screen},'','#route='+file+(q.size?'&'+q:''));}document.documentElement.dataset.pageRoute=file;
}
function installControllers(){for(const key of Object.keys(window)){let descriptor;try{descriptor=Object.getOwnPropertyDescriptor(window,key)}catch{continue}if(!descriptor||typeof descriptor.value!=='function'||controllers.has(key)||/^(go|render|init|demo|closeDemo|toggleDemo|setTimeout|setInterval)/i.test(key))continue;
 const original=descriptor.value,source=Function.prototype.toString.call(original),targets=[...source.matchAll(/\bgo\(['"](sc-[\w-]+)['"]/g)].map(m=>m[1]);if(!targets.length||!cfg.routes.some(r=>targets.includes(r.screen)))continue;
 controllers.set(key,{original,targets});window[key]=function(...args){const action={name:key,args:args.map(encode),screen:''},previous=activeAction;activeAction=action;try{const result=original.apply(this,args);const screen=current();if(targets.includes(screen)){action.screen=screen;context=action;sync();}return result;}finally{activeAction=previous;}};
}}
const originalGo=window.go;window.go=function(screen,...args){const result=originalGo.apply(this,[screen,...args]);const actual=current();if(activeAction){activeAction.screen=actual;context=activeAction;}else if(args.length)context={name:'go',args:[actual,...args].map(encode),screen:actual};else if(context?.screen!==actual)context=null;sync();return result;};
function missing(screen,message){try{window.go(screen)}catch{document.querySelectorAll('.screen').forEach(el=>el.classList.toggle('show',el.id===screen));window.curScreen=screen;}const el=document.getElementById(screen),body=el?.querySelector('.body');if(body){body.replaceChildren();const block=document.createElement('div');block.style.cssText='padding:28px 18px;text-align:center;color:#6B778C;font-size:14px';block.textContent=message||'缺少记录参数或记录已不可访问，请返回列表重新选择。';const back=document.createElement('button');back.textContent='返回首页';back.className='btn pri';back.style.cssText='display:block;margin:20px auto';back.onclick=()=>window.go('sc-home');block.append(back);body.append(block);}}
async function boot(){if(initialized)return;initialized=true;installControllers();const screen=requested?.screen||legacy||'sc-home';
 try{if(screen==='sc-notification'){
  if(!window.NotificationMini)await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('通知模块尚未就绪，请刷新重试')),12000);window.addEventListener('zxh-notice-ready',()=>{clearTimeout(timer);resolve()},{once:true});});
  window.go('sc-notification');NotificationMini.restoreRoute({view:requested?.view||params.get('view')||'list',...Object.fromEntries(params)});
 }else {const action=params.get('action'),argsRaw=params.get('args');if(action&&controllers.has(action)){const handler=controllers.get(action);if(!handler.targets.includes(screen))throw Error('页面与对象参数不匹配');let args;try{args=JSON.parse(argsRaw||'[]')}catch{throw Error('页面对象参数无效')}if(!Array.isArray(args)||args.length>12)throw Error('页面对象参数无效');window[action](...args.map(decode));if(current()!==screen)throw Error('记录已不可访问，请返回列表重新选择。');}
  else if(action==='go'){const args=JSON.parse(argsRaw||'[]');if(!Array.isArray(args)||args[0]!==screen)throw Error('页面参数无效');window.go(...args);}
  else if(params.has('params')){const args=JSON.parse(params.get('params'));if(!Array.isArray(args))throw Error('页面参数无效');window.go(screen,...args);}
  else if(/detail|edit|audit|tevdt|evaldt|tchduty|claimparents|attstu/.test(screen)||screen==='sc-child'){missing(screen,'缺少记录参数，请从对应列表选择具体记录。');}
  else window.go(screen);
 }}catch(error){if(screen==='sc-notification'&&window.NotificationMini)NotificationMini.routeError(error.message);else missing(screen,error.message);}
 finally{restoring=false;sync();window.dispatchEvent(new Event('zxh-route-ready'));}
}
window.ZXHPageRouter={sync,installControllers,get ready(){return !restoring&&initialized}};
window.addEventListener('zxh-notice-change',()=>{if(current()==='sc-notification')sync()});window.addEventListener('zxh-notice-ready',()=>{if(!initialized)boot()});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
