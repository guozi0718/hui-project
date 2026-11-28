(()=>{'use strict';
const end=document.body.dataset.end,L=(id,t,route)=>({id,t,route}),G=(t,ic,c)=>({t,ic,c});
const menus={agent:[G('校务管理','school',[L('family-notice','家校通知'),L('school-feedback','学校反馈','school-feedback'),L('agent-feedback','问题反馈','agent-feedback')]),G('智能校徽','badge',[L('badge-style','校徽款式'),L('handle-stats','办理统计'),L('handle-list','办理明细'),L('refunds','退款管理')]),G('资金结算','money',[L('withdrawals','提现管理')]),G('系统管理','settings',[L('op-log','操作日志','op-log'),L('cs','客服管理','cs')])],school:[G('数据看板','home',[L('attendance-board','考勤数据看板'),L('dropout-board','控辍保学看板'),L('morality-board','德育数据看板')]),G('学校管理','school',[L('school-profile','学校档案'),L('grades','年级管理'),L('classes','班级管理'),L('students','学生管理'),L('teachers','教师管理'),L('positions','职务管理')]),G('考勤管理','calendar',[G('学生考勤','',[L('daily-attendance','每日考勤'),L('punch-records','打卡记录'),L('class-attendance','班级考勤统计')]),L('leave','请假管理'),G('考勤设置','',[L('sessions','班次设置'),L('schedule','排班表设置'),L('special-schedule','特殊日期排班')]),L('pickup','接送设置'),L('dismissal-records','放学记录'),L('dismissal-code','放学二维码')]),G('控辍保学管理','badge',[L('dropout-register','控辍保学台账'),L('dropout-warnings','控辍保学预警'),L('warning-settings','预警设置')]),G('德育评价','award',[L('morality-records','评价记录'),L('morality-reports','评价报告'),L('morality-items','评价项目管理')]),G('班级评价','calendar',[L('class-summary','班级评价概览'),L('class-records','班级评价记录'),L('inspection-items','检查项目管理'),L('class-settings','班级评价设置')]),L('devices','设备管理'),L('school-feedback','问题反馈','school-feedback'),G('基础设置','settings',[L('personal','个人中心'),L('roles','角色管理'),L('users','用户管理'),L('sync','值周教师管理'),L('wechat','公众号消息推送设置')])]};
const icons={home:'<path d="m3 10 9-7 9 7v11H3Z"/><path d="M9 21v-8h6v8"/>',school:'<path d="M3 21V9l9-6 9 6v12H3Z"/><path d="M9 21v-8h6v8M7 9h2m6 0h2"/>',badge:'<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="m7 12 3 3 7-7"/>',money:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m9 9 3 3 3-3m-3 3v5m-4-3h8"/>',settings:'<path d="m8 3-5 9 5 9h8l5-9-5-9Z"/><circle cx="12" cy="12" r="3"/>',calendar:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M7 2v4m10-4v4M3 9h18m-13 6 3 3 5-6"/>',award:'<circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/>'};
const menu=window.AgentPageRegistry.menu,leaves=[],parents=new Map();let seq=0;function walk(ns,ps=[]){ns.forEach(n=>{if(n.c){n.key='g'+seq++;walk(n.c,[...ps,n])}else{leaves.push(n);parents.set(n.id,ps)}})}walk(menu);
const nav=document.getElementById('navigation'),ws=document.getElementById('workspace'),tabHost=document.getElementById('tabs');
let current='',tabs=[],opened=new Set(menu.filter(n=>n.c).map(n=>n.key)),generation=0,dispose=()=>{};
document.getElementById('endName').textContent='代理商后台';
tabHost.setAttribute('role','tablist');tabHost.setAttribute('aria-label','已打开页面');
const svg=k=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+(icons[k]||icons.settings)+'</svg>';
function paint(){
 const row=(n,lv)=>n.c?'<button class="mi lv'+lv+(opened.has(n.key)?' open':'')+(parents.get(current)?.includes(n)?' grp-act':'')+'" data-group="'+n.key+'" aria-expanded="'+opened.has(n.key)+'">'+(lv===0?svg(n.ic):'')+'<span>'+n.t+'</span><svg class="arr" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button><div class="sub '+(opened.has(n.key)?'open':'')+'">'+n.c.map(c=>row(c,lv+1)).join('')+'</div>':'<a class="mi lv'+lv+(current===n.id?' act':'')+'" data-page="'+n.id+'" href="index.html?'+new URLSearchParams({page:n.id})+'"'+(current===n.id?' aria-current="page"':'')+'>'+(lv===0?svg('settings'):'')+'<span>'+n.t+'</span></a>';
 nav.innerHTML=menu.map(n=>row(n,0)).join('');window.FeedbackWebV5?.draw();
 tabHost.innerHTML=tabs.map(id=>'<span role="tab" tabindex="0" aria-selected="'+(id===current)+'" class="tab '+(id===current?'act':'')+'" data-page="'+id+'">'+leaves.find(n=>n.id===id).t+'<button type="button" class="x" data-close="'+id+'" aria-label="关闭'+leaves.find(n=>n.id===id).t+'页签">×</button></span>').join('');
}
function clear(){dispose();dispose=()=>{};generation++;ws.replaceChildren();document.body.classList.remove('family-notice-open')}
function state(title,text,retry,container=ws){
 const box=document.createElement('div');box.className='shell-state';box.setAttribute('role',retry?'alert':'status');
 const heading=document.createElement('h2'),body=document.createElement('p');heading.textContent=title;body.textContent=text;box.append(heading,body);
 if(retry){const button=document.createElement('button');button.type='button';button.textContent='重试';button.addEventListener('click',retry);box.append(button)}container.append(box);return box;
}
function resetList(id){
 if(id==='cs')window.CSUI?.resetList();
 if(['school-feedback','agent-feedback'].includes(id)&&window.FeedbackWebV5){const U=FeedbackWebV5.U;U.key=id;U.q={};U.selection=null;U.page=1;U.size=10;sessionStorage.removeItem('feedback-list-'+FeedbackV5.role+'-'+id)}
 window.scrollTo({top:0,left:0,behavior:'instant'});ws.scrollTop=0;ws.scrollLeft=0;
}
function retry(){const q=QueryRouter.parameters();QueryRouter.navigate(q.page,q,true)}
function embedded(entry){
 const host=document.createElement('div');host.className='family-notice-host';ws.append(host);document.body.classList.add('family-notice-open');
 const loading=state('页面加载中','正在打开'+entry.title+'，请稍候。',null,host),frame=document.createElement('iframe');
 frame.className='family-notice-embed-frame';frame.title=entry.title;frame.referrerPolicy='no-referrer';frame.hidden=true;host.append(frame);
 const token=generation,controller=new AbortController();let timer,failed=false;
 const active=()=>token===generation&&host.isConnected;
 const fail=()=>{if(!active()||failed)return;failed=true;clearTimeout(timer);controller.abort();host.replaceChildren();state('页面加载失败','暂时无法打开'+entry.title+'，请重试或切换其他菜单。',retry,host)};
 dispose=()=>{controller.abort();clearTimeout(timer)};
 const url=new URL(entry.url);if(!['http:','https:'].includes(url.protocol))throw Error('页面链接不合法');url.search=new URLSearchParams(entry.parameters||{});for(const k of ['noticeView','noticeId','noticeDialog','noticeDialogId']){const v=new URLSearchParams(location.search).get(k);if(v)url.searchParams.set(k,v);}
 frame.addEventListener('error',fail);frame.addEventListener('load',()=>{if(!active()||failed)return;clearTimeout(timer);loading.remove();frame.hidden=false});
 timer=setTimeout(fail,12000);
 // Cross-origin contents are owned by the function project. This detects unavailable services;
 // a future cross-origin ready/error protocol must be registered before using business readiness.
 fetch(url.href,{mode:'no-cors',cache:'no-store',credentials:'omit',signal:controller.signal}).then(response=>{if(!active()||failed)return;if(response.type!=='opaque'&&!response.ok){fail();return}frame.src=url.href}).catch(()=>{if(active())fail()});
}
function open(id,options={}){
 const n=leaves.find(n=>n.id===id);if(!n)throw Error('页面不存在');
 const reload=options.reset||current!==id||ws.hidden||!ws.firstElementChild||!!ws.querySelector('.shell-state[role=alert]');
 if(!reload){paint();return {resetList:false}}
 clear();current=id;ws.hidden=false;if(!tabs.includes(id))tabs.push(id);for(const p of parents.get(id)||[])opened.add(p.key);
 resetList(id);paint();document.title=n.t+' · 智小徽代理商后台';
 const entry=AgentPageRegistry.pages[id];if(!entry)throw Error('页面链接未登记');
 if(entry.kind==='native'&&entry.module==='customer'){
  if(!window.CSUI)throw Error('客服管理页面未能加载');const h=document.createElement('div');h.className='cs-native';ws.append(h);CSUI.mount(h);if(!h.firstElementChild)throw Error('客服管理页面未能显示');
 }else if(entry.kind==='native'&&entry.module==='feedback'){
  if(!window.FeedbackWebV5)throw Error('反馈页面未能加载');const h=document.createElement('div');h.className='fb-native';ws.append(h);FeedbackWebV5.mount(h,id);if(!h.firstElementChild)throw Error('反馈页面未能显示');
 }else if(entry.kind==='embedded'){embedded(entry)}
 else if(entry.kind==='legacy'){
  if(!window.LegacyOperationLogHTML)throw Error('操作日志页面未能加载');const frame=document.createElement('iframe');frame.className='workspace-frame';frame.title=n.t;frame.srcdoc=LegacyOperationLogHTML;ws.append(frame);
 }else{state(n.t+'尚未接入','该功能页面的链接尚未登记，请切换其他菜单。',null)}
 document.querySelector('.tab.act')?.scrollIntoView({block:'nearest',inline:'nearest'});return {resetList:true};
}
function closeTab(id){
 const index=tabs.indexOf(id);if(index<0)return;
 const remaining=tabs.filter(k=>k!==id);
 if(id!==current){tabs=remaining;paint();return}
 const next=tabs[index-1]||remaining[0]||leaves[0]?.id;
 // Mutate tabs only after the single shared unsaved-content guard permits navigation.
 QueryRouter.navigate(next,{},false,()=>{tabs=remaining});
}
document.addEventListener('click',e=>{
 const close=e.target.closest('[data-close]');if(close&&tabHost.contains(close)){e.preventDefault();e.stopPropagation();closeTab(close.dataset.close);return}
 const group=e.target.closest('[data-group]');if(group&&nav.contains(group)){opened.has(group.dataset.group)?opened.delete(group.dataset.group):opened.add(group.dataset.group);paint();return}
 const page=e.target.closest('[data-page]');if(page&&(nav.contains(page)||tabHost.contains(page))){if(e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;e.preventDefault();QueryRouter.navigate(page.dataset.page)}
});
tabHost.addEventListener('keydown',e=>{if(e.target.matches('[role=tab]')&&['Enter',' '].includes(e.key)){e.preventDefault();QueryRouter.navigate(e.target.dataset.page)}});
window.ZxhShell={end,menu,leaves,open,closeTab};paint();ws.hidden=true;
window.EndpointRouter={render(q,options={}){
 if(Object.prototype.hasOwnProperty.call(q,'page')&&!q.page)throw Error('页面参数不能为空');
 if(!q.page){clear();current='';tabs=[];ws.hidden=true;paint();tabHost.replaceChildren();document.title='智小徽代理商后台';return {resetList:false}}
 const result=open(q.page,options);
 if(q.page==='op-log'&&q.dialog==='operation-log'){
  if(!/^\d+$/.test(q.id||''))throw Error('缺少合法的操作记录参数');
  const frame=ws.querySelector('.workspace-frame'),restore=()=>{if(frame.isConnected)frame.contentWindow.postMessage({kind:'oplog-restore',index:+q.id},'*')};
  frame.addEventListener('load',restore,{once:true});restore();
 }
 return result;
},error(message){
 clear();const q=QueryRouter.parameters();current=leaves.some(n=>n.id===q.page)?q.page:'';ws.hidden=false;paint();state('页面无法显示',message||'页面加载失败，请重试。',retry);
}};
window.addEventListener('message',e=>{
 const frame=ws.querySelector('.workspace-frame');if(!frame||e.source!==frame.contentWindow)return;const q=QueryRouter.parameters();if(q.page!=='op-log')return;
 if(e.data?.kind==='oplog-detail'){q.dialog='operation-log';q.id=String(e.data.index)}
 else if(e.data?.kind==='oplog-close'&&q.dialog==='operation-log'){delete q.dialog;delete q.id}
 else if(e.data?.kind==='oplog-error'){EndpointRouter.error('操作记录不存在');return}else return;
 QueryRouter.write(q);
});
})();
