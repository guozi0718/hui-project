/* Single validated URL source. Navigation guards run once before tab/URL mutation. */
(()=>{'use strict';let previous=location.href,applying=false,renderedPage='',navigationEpoch=0;
let historyIndex=Number.isInteger(history.state?.schoolNavIndex)?history.state.schoolNavIndex:0,correcting=false,pendingDelta=0,allowTravel=false;
history.replaceState({...history.state,schoolNavIndex:historyIndex},'',location.href);
const parameters=()=>Object.fromEntries(new URLSearchParams(location.search));
function write(params,replace=false){params={...params,content:'1'};replace=true;const u=new URL(location.href);u.search=new URLSearchParams(params).toString();u.hash='';if(!replace)historyIndex++;history[replace?'replaceState':'pushState']({schoolNavIndex:historyIndex},'',u.href);previous=u.href}
function apply(){applying=true;const q=parameters();try{
 if(Object.hasOwn(q,'page')&&!q.page)throw Error('页面参数不能为空，请从菜单选择页面');
 if(!q.page&&Object.keys(q).length)throw Error('缺少页面参数，请从菜单选择页面');
 if(q.businessMode&&!['agency','direct'].includes(q.businessMode))throw Error('页面模式参数无效');
 if(q.businessMode&&q.page!=='family-notice')throw Error('当前页面不支持模式参数');
 window.EndpointRouter.render(q);renderedPage=q.page||'';
 if(window.FeedbackNavigation?.isPage(q.page))FeedbackNavigation.restore(q);
 else if(q.dialog||q.view||q.id||q.message)throw Error('当前页面未登记此详情或弹窗参数');
}catch(error){window.FeedbackWebV5?.close(true);window.EndpointRouter.error(error.message)}finally{applying=false}}
function guard(fn){
 if(window.FeedbackWebV5?.U.dirty){FeedbackWebV5.requestLeave(fn);if(FeedbackWebV5.U.pending)FeedbackWebV5.U.pending.navigationGuard=true;return false}
 if(window.CSUI?.dirty){CSUI.requestLeave(fn);return false}
 fn();return true;
}
function closeDialogs(){const U=window.FeedbackWebV5?.U;window.FeedbackWebV5?.close(true);if(U){U.pending?.previous?.remove();U.pending=null;U.context=null;U.dirty=false}window.CSUI?.forceClose()}
function navigate(page,params={},replace=false,alreadyGuarded=false){
 const epoch=++navigationEpoch;
 const go=()=>{if(epoch!==navigationEpoch)return;applying=true;try{closeDialogs();write({page,...params},replace);apply()}finally{applying=false}};
 if(alreadyGuarded)go();else guard(go);
}
function retry(){const q=parameters();navigate(q.page||'',Object.fromEntries(Object.entries(q).filter(([k])=>k!=='page')),true)}
window.QueryRouter={write,isApplying:()=>applying,isGuarding:()=>!!window.FeedbackWebV5?.U.pending?.navigationGuard,rememberURL(){previous=location.href},navigate,parameters,apply,guard,retry,customerPage:'customer-service.list'};
window.addEventListener('popstate',()=>{
 if(correcting){correcting=false;guard(()=>{allowTravel=true;history.go(pendingDelta)});return}
 const next=location.href,restore=previous,targetIndex=history.state?.schoolNavIndex,epoch=++navigationEpoch;
 if(allowTravel){allowTravel=false;historyIndex=Number.isInteger(targetIndex)?targetIndex:historyIndex;previous=next;applying=true;closeDialogs();apply();return}
 // Reverse the travel before prompting, so cancellation preserves both URL and history position.
 if(window.FeedbackWebV5?.U.dirty||window.CSUI?.dirty){
  if(Number.isInteger(targetIndex)&&targetIndex!==historyIndex){pendingDelta=targetIndex-historyIndex;correcting=true;history.go(-pendingDelta);return}
  history.replaceState({schoolNavIndex:historyIndex},'',restore);
  guard(()=>{if(epoch!==navigationEpoch)return;applying=true;closeDialogs();history.replaceState({schoolNavIndex:historyIndex},'',next);previous=next;apply()});return;
 }
 historyIndex=Number.isInteger(targetIndex)?targetIndex:historyIndex;previous=next;applying=true;closeDialogs();apply();
});
document.addEventListener('DOMContentLoaded',apply);
})();
