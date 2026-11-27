/* Query dialog adapter. No message body or contact data is stored in the URL. */
(()=>{'use strict';
const E=FeedbackV5,W=FeedbackWebV5;
let queued=false,restoring=false;
const pages=['feedback.replies','feedback.detail','school-feedback','agent-feedback'];
const isPage=page=>pages.includes(page);
function changed(){
  if(queued||restoring||window.QueryRouter?.isApplying())return;
  queued=true;
  queueMicrotask(()=>{
    queued=false;
    if(restoring||!window.QueryRouter||QueryRouter.isApplying())return;
    const q=QueryRouter.parameters();
    if(!isPage(q.page))return;
    for(const key of ['dialog','view','id','message'])delete q[key];
    const context=W.U.context||{};
    if(W.U.dialog){
      if(W.U.pending){
        const previous=W.U.pending.context||{};
        q.dialog='confirm';
        q.view=previous.kind||'detail';
        if(previous.id)q.id=previous.id;
      }else{
        q.dialog=context.kind||(context.id?'detail':'');
        if(context.id)q.id=context.id;
        if(context.messageId||context.replyId)q.message=context.messageId||context.replyId;
      }
    }
    if(new URLSearchParams(q).toString()!==location.search.slice(1))QueryRouter.write(q);
  });
}
function rememberList(){
  if(restoring||!window.QueryRouter||QueryRouter.isApplying()||!W.U.host?.isConnected)return;
  const page=QueryRouter.parameters().page;
  if(isPage(page))sessionStorage.setItem('feedback-list-'+E.role+'-'+page,JSON.stringify({q:W.U.q,page:W.U.page,size:W.U.size}));
}
function restore(q,options={}){
  restoring=true;
  try{
    let saved;
    try{saved=JSON.parse(sessionStorage.getItem('feedback-list-'+E.role+'-'+q.page))}catch{}
    if(saved&&!options.resetList){
      W.U.q=FeedbackRegion.clean(saved.q||{});
      W.U.selection={...W.U.q};
      W.U.page=saved.page||1;
      W.U.size=[10,20,50,100,500,1000].includes(saved.size)?saved.size:10;
      W.draw();
    }
    W.close(true);
    if(!q.dialog&&!q.view){
      if(q.id||q.message)throw Error('记录参数缺少对应视图');
      return;
    }
    const kind=q.dialog||q.view;
    const incoming=(E.role==='enterprise'&&q.page==='feedback.replies')||(E.role==='agent'&&q.page==='school-feedback');
    const own=(E.role==='school'&&q.page==='school-feedback')||(E.role==='agent'&&q.page==='agent-feedback');
    if(kind==='notice-result'||kind==='notify')throw Error('通知已改为回复成功后自动触发');
    if(kind==='create'){
      if(!own)throw Error('当前页面不可新增反馈');
      W.form('create');
      return;
    }
    if(kind==='confirm'){
      if(q.view==='create'&&own){W.form('create');return;}
      if(!q.id)throw Error('确认操作缺少反馈记录');
      if(q.view==='reply'&&incoming){
        const t=E.ticket(q.id);
        if(!t||!E.incoming(t)||!E.pending(t))throw Error('该记录当前不在待回复状态');
        W.form('reply',q.id);
        return;
      }
      if(q.view==='follow'&&own){
        const t=E.ticket(q.id);
        if(!t||!E.canAskNext(t))throw Error('运营尚未回复，当前不能继续提问');
        W.form('follow',q.id);
        return;
      }
      W.details(q.id);
      return;
    }
    if(!q.id)throw Error('缺少反馈记录参数');
    const t=E.ticket(q.id);
    if(!t||!E.canView(t))throw Error('反馈记录不存在或无权访问');
    if(kind==='detail'){W.details(q.id);return;}
    if(kind==='reply'){
      if(!incoming||!E.incoming(t)||!E.pending(t))throw Error('该记录当前不在待回复状态');
      W.form('reply',q.id);
      return;
    }
    if(kind==='follow'){
      if(E.role!=='agent'||q.page!=='agent-feedback'||!E.submitterScope(t)||!E.canAskNext(t))throw Error('只有代理商自有反馈收到运营答复后才能继续提问');
      W.form('follow',q.id);
      return;
    }
    throw Error('反馈弹窗不存在');
  }finally{restoring=false;}
}
function resetList(page){if(!isPage(page))return;W.U.key=page;W.U.q={};W.U.selection=null;W.U.page=1;W.U.size=10;try{sessionStorage.removeItem("feedback-list-"+E.role+"-"+page)}catch{}}
window.FeedbackNavigation={changed,restore,isPage,rememberList,resetList};
})();
