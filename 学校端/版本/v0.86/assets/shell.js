(()=>{'use strict';
const end=document.body.dataset.end,L=(id,t,route)=>({id,t,route}),G=(t,ic,c)=>({t,ic,c});
const menus={agent:[G('校务管理','school',[L('school-feedback','学校反馈','school-feedback'),L('agent-feedback','问题反馈','agent-feedback')]),G('智能校徽','badge',[L('badge-style','校徽款式'),L('handle-stats','办理统计'),L('handle-list','办理明细'),L('refunds','退款管理')]),G('资金结算','money',[L('withdrawals','提现管理')]),G('系统管理','settings',[L('op-log','操作日志','op-log'),L('cs','客服管理','cs')])],school:[G('数据看板','home',[L('attendance-board','考勤数据看板'),L('dropout-board','控辍保学看板'),L('morality-board','德育数据看板')]),G('学校管理','school',[L('school-profile','学校档案'),L('grades','年级管理'),L('classes','班级管理'),L('students','学生管理'),L('teachers','教师管理'),L('positions','职务管理')]),G('考勤管理','calendar',[G('学生考勤','',[L('daily-attendance','每日考勤'),L('punch-records','打卡记录'),L('class-attendance','班级考勤统计')]),L('leave','请假管理'),G('考勤设置','',[L('sessions','班次设置'),L('schedule','排班表设置'),L('special-schedule','特殊日期排班')]),L('pickup','接送设置'),L('dismissal-records','放学记录'),L('dismissal-code','放学二维码')]),G('控辍保学管理','badge',[L('dropout-register','控辍保学台账'),L('dropout-warnings','控辍保学预警'),L('warning-settings','预警设置')]),G('德育评价','award',[L('morality-records','评价记录'),L('morality-reports','评价报告'),L('morality-items','评价项目管理')]),G('班级评价','calendar',[L('class-summary','班级评价概览'),L('class-records','班级评价记录'),L('inspection-items','检查项目管理'),L('class-settings','班级评价设置')]),L('devices','设备管理'),L('school-feedback','学校反馈','school-feedback'),G('校务管理','school',[L('family-notice','家校通知')]),G('系统设置','settings',[L('personal','个人中心'),L('roles','角色管理'),L('users','用户管理'),L('sync','值周教师管理'),L('wechat','公众号消息推送设置'),L('op-log','操作日志','op-log')])]};
const icons={home:'<path d="m3 10 9-7 9 7v11H3Z"/><path d="M9 21v-8h6v8"/>',school:'<path d="M3 21V9l9-6 9 6v12H3Z"/><path d="M9 21v-8h6v8M7 9h2m6 0h2"/>',badge:'<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="m7 12 3 3 7-7"/>',money:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m9 9 3 3 3-3m-3 3v5m-4-3h8"/>',settings:'<path d="m8 3-5 9 5 9h8l5-9-5-9Z"/><circle cx="12" cy="12" r="3"/>',calendar:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M7 2v4m10-4v4M3 9h18m-13 6 3 3 5-6"/>',award:'<circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/>'};
const menu=menus[end],leaves=[],parents=new Map();let seq=0;function walk(ns,ps=[]){ns.forEach(n=>{if(n.c){n.key='g'+seq++;walk(n.c,[...ps,n])}else{leaves.push(n);parents.set(n.id,ps)}})}walk(menu);
const nav=document.getElementById('navigation'),ws=document.getElementById('workspace'),tabbar=document.getElementById('tabs');
let current='',tabs=[],opened=new Set(),generation=0,cleanup=()=>{};
document.getElementById('endName').textContent='学校后台';
const svg=k=>'<svg viewBox="0 0 24 24" aria-hidden="true">'+(icons[k]||icons.settings)+'</svg>';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function paint(){
 const row=(n,lv)=>n.c?'<button class="mi lv'+lv+(opened.has(n.key)?' open':'')+(parents.get(current)?.includes(n)?' grp-act':'')+'" data-group="'+n.key+'" aria-expanded="'+opened.has(n.key)+'">'+(lv===0?svg(n.ic):'')+'<span>'+esc(n.t)+'</span><svg class="arr" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></button><div class="sub '+(opened.has(n.key)?'open':'')+'">'+n.c.map(c=>row(c,lv+1)).join('')+'</div>':'<a class="mi lv'+lv+(current===n.id?' act':'')+'" data-page="'+esc(n.id)+'" href="index.html?'+new URLSearchParams({page:n.id})+'"'+(current===n.id?' aria-current="page"':'')+'>'+(lv===0?svg('settings'):'')+'<span>'+esc(n.t)+'</span></a>';
 nav.innerHTML=menu.map(n=>row(n,0)).join('');
 tabbar.setAttribute('role','tablist');tabbar.setAttribute('aria-label','已打开页面');
 tabbar.innerHTML=tabs.map(id=>'<span role="tab" tabindex="0" aria-selected="'+(id===current)+'" class="tab '+(id===current?'act':'')+'" data-page="'+esc(id)+'">'+esc(leaves.find(n=>n.id===id).t)+'<button class="x" data-close="'+esc(id)+'" aria-label="关闭'+esc(leaves.find(n=>n.id===id).t)+'页签">×</button></span>').join('');
 window.FeedbackWebV5?.draw();
}
function clearWorkspace(){
 generation++;cleanup();cleanup=()=>{};
 const U=window.FeedbackWebV5?.U;if(U){U.host=null;U.pending?.previous?.remove();U.pending=null;U.context=null;U.dirty=false;}
 ws.replaceChildren();ws.classList.remove('school-family-notice-workspace');document.body.classList.remove('family-notice-open');
 document.body.style.overflow='';
}
function state(title,message,retry,parent=ws){
 const box=document.createElement('div');box.className='shell-state';box.setAttribute('role','status');
 const h=document.createElement('h2');h.textContent=title;const p=document.createElement('p');p.textContent=message;box.append(h,p);
 if(retry){const b=document.createElement('button');b.type='button';b.textContent='重试';b.addEventListener('click',retry);box.append(b)}parent.append(box);return box;
}
function resetList(id){if(window.FeedbackNavigation?.isPage(id))FeedbackNavigation.resetList(id)}
function resetScroll(){document.scrollingElement?.scrollTo({top:0,left:0});ws.scrollTop=0;document.querySelector('.content')?.scrollTo({top:0,left:0})}
function linkURL(entry,q){
 const url=new URL(entry.url,location.href);if(url.origin!==location.origin)throw Error('页面链接未登记为同源入口');
 const params=new URLSearchParams({role:'school',school:q.businessMode==='direct'?'s2':'s1',embedded:'1'});
 for(const k of ['noticeView','noticeId','noticeDialog','noticeDialogId'])if(q[k])params.set(k,q[k]);url.search=params.toString();return url.href;
}
async function mountLink(entry,q,token){
 let timer;cleanup=()=>clearTimeout(timer);
 const host=document.createElement('div');host.className='family-notice-host shell-link-host';ws.append(host);
 const loading=state('正在加载页面','请稍候。',null,host);
 const frame=document.createElement('iframe');frame.className='family-notice-embed-frame';frame.title='家校通知';frame.referrerPolicy='no-referrer';frame.hidden=true;
 const help=document.createElement('div');help.className='shell-frame-help';help.hidden=true;
 const text=document.createElement('span');text.textContent='页面显示异常时可重新加载';const retry=document.createElement('button');retry.textContent='重新加载';retry.type='button';retry.onclick=()=>QueryRouter.retry();help.append(text,retry);host.append(frame,help);
 const fail=()=>{if(token!==generation)return;clearTimeout(timer);frame.remove();help.remove();loading.remove();state('页面加载失败','请重试；你仍可使用其他菜单和页签。',()=>QueryRouter.retry(),host)};
 const revealWhenReady=()=>{if(token!==generation||!frame.isConnected)return;let ready=false;try{ready=!!frame.contentDocument?.body?.textContent?.trim()}catch{}if(ready){clearTimeout(timer);loading.remove();frame.hidden=false;help.hidden=false;return}if(Date.now()>=deadline){fail();return}setTimeout(revealWhenReady,100)};
 const deadline=Date.now()+12000;timer=setTimeout(fail,15000);frame.onerror=fail;frame.onload=revealWhenReady;frame.src=linkURL(entry,q);
}function open(id,q={}){
 const n=leaves.find(n=>n.id===id);if(!n)throw Error('页面不存在：'+id);
 const switched=current!==id;
 if(switched){resetList(current);resetList(id)}
 clearWorkspace();current=id;ws.hidden=false;if(!tabs.includes(id))tabs.push(id);for(const p of parents.get(id)||[])opened.add(p.key);paint();
 const entry=window.SchoolPageLinks?.pages[id];
 if(entry?.kind==='native'&&entry.adapter==='feedback'){
  if(!window.FeedbackWebV5)throw Error('功能页面组件加载失败');
  const host=document.createElement('div');host.className='fb-native';ws.append(host);FeedbackWebV5.mount(host,id);
 }else if(entry?.kind==='native'&&entry.adapter==='operation-log'){if(!window.SchoolOperationLog)throw Error('操作日志页面组件未能加载');const host=document.createElement('div');host.className='school-oplog-host';ws.append(host);SchoolOperationLog.mount(host);
  }else if(entry?.kind==='link'){
  document.body.classList.toggle('family-notice-open',id==='family-notice');mountLink(entry,q,generation);
 }else state('尚未接入','“'+n.t+'”尚未登记功能页面链接。',()=>QueryRouter.retry());
 document.title=n.t+' · 智小徽学校后台';
 tabbar.querySelector('.tab.act')?.scrollIntoView({block:'nearest',inline:'nearest'});
 nav.querySelector('.mi.act')?.scrollIntoView({block:'nearest'});if(switched)resetScroll();
}
function empty(){resetList(current);clearWorkspace();current='';ws.hidden=true;paint();document.title='智小徽学校后台'}
function closeTab(id){
 const index=tabs.indexOf(id);if(index<0)return;
 const go=()=>{
  const active=current===id;tabs=tabs.filter(k=>k!==id);
  if(!active){paint();return}
  const target=tabs[index-1]||tabs[index]||leaves[0]?.id;
  QueryRouter.navigate(target,{},false,true);
 };
 if(id===current)QueryRouter.guard(go);else go();
}
document.addEventListener('click',e=>{
 const c=e.target.closest('[data-close]');if(c){e.preventDefault();e.stopPropagation();closeTab(c.dataset.close);return}
 const g=e.target.closest('[data-group]');if(g){opened.has(g.dataset.group)?opened.delete(g.dataset.group):opened.add(g.dataset.group);paint();return}
 const p=e.target.closest('#navigation [data-page],#tabs [data-page]');if(p){e.preventDefault();QueryRouter.navigate(p.dataset.page)}
});
tabbar.addEventListener('keydown',e=>{if(e.target!==e.target.closest('[role="tab"]'))return;if(['Enter',' '].includes(e.key)){e.preventDefault();QueryRouter.navigate(e.target.dataset.page)}});
window.ZxhShell={end,menu,leaves,open,empty,closeTab,get current(){return current},get tabs(){return [...tabs]},
 familyNoticeMode(){return QueryRouter.parameters().businessMode==='direct'?'direct':'agency'},
 setFamilyNoticeMode(mode){if(!['agency','direct'].includes(mode)||current!=='family-notice')return false;QueryRouter.navigate('family-notice',{businessMode:mode},true);return true}
};
window.EndpointRouter={render(q){if(!q.page){empty();return}open(q.page,q)},error(message){
 clearWorkspace();ws.hidden=false;paint();state('页面无法打开',message,()=>QueryRouter.retry());
}};
paint();ws.hidden=true;
})();
