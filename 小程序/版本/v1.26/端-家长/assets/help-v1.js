/* 小程序反馈建议表单与演示说明补齐v0.7：独立离线演示模型，不连接生产服务。 */
(function(){
 'use strict';
 const role=window.ZXH_HELP_ROLE,config=window.ZXH_HELP_CONFIG,$=id=>document.getElementById(id);
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const overlay=$('hf-overlay'),dialog=$('hf-dialog'),notice=$('hf-notice');
 document.querySelector('.phone').append(overlay,notice);
 const requestedScene=new URLSearchParams(location.search).get('service');
 let scene=['none','single','multi'].includes(requestedScene)?requestedScene:'single';
 let serviceContext=config.serviceContext||null;
 let serviceOverride=null,filter='all',emptyPreview=false,upload=[],uploadSession=0,type='问题反馈',timer,previousFocus=null,detailKey='',formDirty=false,detailImages=[];
 const actor={
  role,
  accountId:role==='teacher'?'DEMO-ACCOUNT-TEACHER-001':'DEMO-ACCOUNT-PARENT-001',
  nameSnapshot:role==='teacher'?'王老师':'林晓乐家长',
  phoneSnapshot:role==='teacher'?'138****0002':'138****0001'
 };
 const schoolByName=name=>({
  '市实验一小':{schoolId:'DEMO-SCHOOL-001',schoolNameSnapshot:'市实验一小',regionId:'DEMO-REGION-XM-SM',regionNameSnapshot:'厦门市思明区'},
  '市实验二小':{schoolId:'DEMO-SCHOOL-002',schoolNameSnapshot:'市实验二小',regionId:'DEMO-REGION-XM-HL',regionNameSnapshot:'厦门市湖里区'}
 }[name]||{schoolId:'DEMO-SCHOOL-001',schoolNameSnapshot:name||'市实验一小',regionId:'DEMO-REGION-XM-SM',regionNameSnapshot:'厦门市思明区'});
 function studentSnapshot(name){
  const parentContext=role==='parent'&&typeof curKid!=='undefined'&&typeof kidInfo!=='undefined'&&kidInfo[curKid];
  const studentName=name||(parentContext?curKid:'林晓乐');
  const profile=typeof kidInfo!=='undefined'&&kidInfo[studentName];
  const schoolName=profile?.[4]||'市实验一小';
  return {studentId:'DEMO-STUDENT-'+(studentName||'UNKNOWN').replace(/[^\u4e00-\u9fa5A-Za-z0-9]/g,''),studentNameSnapshot:studentName,studentGradeClassSnapshot:profile?.[1]||'3年级-2班',...schoolByName(schoolName),studentStatusSnapshot:studentName==='林晓帆'?'离校生':studentName==='林晓晴'?'毕业生':'在读生'};
 }
 function timeLabel(date){return new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(date).replace('/','-');}
 const serviceFor=schoolName=>schoolName==='市实验二小'?{receiverRole:'operations',receiverOrganizationId:'DEMO-OPS-ORG-001',receiverOrganizationName:'运营平台'}:{receiverRole:'agent',receiverOrganizationId:'DEMO-AGENT-ORG-001',receiverOrganizationName:'代理商'};
 function attachmentRef({feedbackNo,messageId,index=0,fileName='反馈截图.jpg',mimeType='image/jpeg',byteSize=184320,previewSrc='assets/photo-cap.jpg',localPreview=false},now){
  const attachmentId=feedbackNo+'-ATT-'+String(index+1).padStart(2,'0');
  return {attachmentId,feedbackNo,messageId,fileName,mimeType,byteSize,checksum:localPreview?null:'demo-sha256-'+attachmentId.toLowerCase(),storageKey:localPreview?null:'demo://feedback/'+feedbackNo+'/'+attachmentId,uploadedAt:now,retentionExpiresAt:null,uploadState:localPreview?'local_preview':'available',accessPolicy:'submitter_or_current_receiver',previewSrc};
 }
 function makeRecord({feedbackNo,feedbackType,content,status,createdAt,displayTime,schoolName='市实验一小',studentName=null,reply=null,replyAt=null,withImage=false,transferredFrom=null}){
  const school=schoolByName(schoolName),student=role==='parent'?studentSnapshot(studentName):null,receiver=serviceFor(schoolName),requestId='DEMO-REQ-'+feedbackNo+'-CREATE';
  const initialMessageId=feedbackNo+'-MSG-001',attachments=withImage?[attachmentRef({feedbackNo,messageId:initialMessageId},createdAt)]:[];
  const initialMessage={messageId:initialMessageId,feedbackNo,messageType:'首条反馈',authorAccountId:actor.accountId,authorRole:role,authorNameSnapshot:actor.nameSnapshot,receiverAccountId:null,receiverOrganizationId:transferredFrom?.organizationId||receiver.receiverOrganizationId,content,attachments,serverSequence:1,createdAt,displayTime,version:1,readFact:'已读',requestId};
  const messages=[initialMessage];
  if(reply){
   const messageId=feedbackNo+'-MSG-002',replyRequestId='DEMO-REQ-'+feedbackNo+'-REPLY';
   messages.push({messageId,feedbackNo,messageType:'回复',authorAccountId:'DEMO-SERVICE-ACCOUNT-001',authorRole:receiver.receiverRole,authorNameSnapshot:receiver.receiverOrganizationName+'客服',receiverAccountId:actor.accountId,receiverOrganizationId:null,content:reply,attachments:[],serverSequence:2,createdAt:replyAt,displayTime:timeLabel(new Date(replyAt)),version:2,readFact:'未查看',requestId:replyRequestId});
  }
  const receiverHistory=[{assignmentId:feedbackNo+'-ASG-001',fromOrganizationId:null,toOrganizationId:transferredFrom?.organizationId||receiver.receiverOrganizationId,toRole:transferredFrom?.role||receiver.receiverRole,schoolConfigVersion:'DEMO-SCHOOL-CONFIG-V1',reason:'首次提交受理分配',assignedAt:createdAt,eventId:feedbackNo+'-EVT-ASSIGN-001'}];
  if(transferredFrom)receiverHistory.push({assignmentId:feedbackNo+'-ASG-002',fromOrganizationId:transferredFrom.organizationId,toOrganizationId:receiver.receiverOrganizationId,toRole:receiver.receiverRole,schoolConfigVersion:'DEMO-SCHOOL-CONFIG-V2',reason:'学校负责方配置变更；待回复记录转派',assignedAt:new Date(new Date(createdAt).getTime()+3600000).toISOString(),eventId:feedbackNo+'-EVT-ASSIGN-002'});
  const auditEvents=[{eventId:feedbackNo+'-EVT-CREATE',feedbackNo,messageId:initialMessageId,actorAccountId:actor.accountId,actorNameSnapshot:actor.nameSnapshot,actorRole:role,sourceChannel:'mini-program',action:'feedback_created',occurredAt:createdAt,result:'success',previousVersion:null,newVersion:1,requestId}];
  if(reply)auditEvents.push({eventId:feedbackNo+'-EVT-REPLY',feedbackNo,messageId:feedbackNo+'-MSG-002',actorAccountId:'DEMO-SERVICE-ACCOUNT-001',actorNameSnapshot:receiver.receiverOrganizationName+'客服',actorRole:receiver.receiverRole,sourceChannel:'web',action:'message_replied',occurredAt:replyAt,result:'success',previousVersion:1,newVersion:2,requestId:'DEMO-REQ-'+feedbackNo+'-REPLY'});
  if(transferredFrom)auditEvents.push({eventId:feedbackNo+'-EVT-ASSIGN-002',feedbackNo,actorAccountId:'DEMO-SYSTEM',actorNameSnapshot:'系统',actorRole:'system',sourceChannel:'system',action:'receiver_reassigned',occurredAt:receiverHistory[1].assignedAt,result:'success',previousVersion:1,newVersion:2,requestId:'DEMO-REQ-'+feedbackNo+'-REASSIGN',fromOrganizationId:transferredFrom.organizationId,toOrganizationId:receiver.receiverOrganizationId});
  const notifications=reply?[{notificationId:feedbackNo+'-NOTICE-001',requestId:'DEMO-REQ-'+feedbackNo+'-NOTICE',feedbackNo,messageId:feedbackNo+'-MSG-002',recipientAccountId:actor.accountId,channel:'mini_program',templateVersion:'DEMO-TPL-V1',providerRequestId:'DEMO-PROVIDER-001',status:'sent',createdAt:replyAt,operatorAccountId:'DEMO-SERVICE-ACCOUNT-001',failureCode:null}]:[];
  return {feedbackNo,sourceRole:role,sourceChannel:'mini-program',submitterAccountId:actor.accountId,submitterNameSnapshot:actor.nameSnapshot,submitterPhoneSnapshot:actor.phoneSnapshot,regionId:school.regionId,regionNameSnapshot:school.regionNameSnapshot,schoolId:school.schoolId,schoolNameSnapshot:school.schoolNameSnapshot,studentId:student?.studentId||null,studentNameSnapshot:student?.studentNameSnapshot||null,studentSnapshot:student,feedbackType,title:null,firstContent:content,attachments,createdAt,updatedAt:[createdAt,replyAt,transferredFrom?receiverHistory[1].assignedAt:null].filter(Boolean).sort().at(-1),status,version:1+(reply?1:0)+(transferredFrom?1:0),receiverRole:receiver.receiverRole,receiverOrganizationId:receiver.receiverOrganizationId,receiverOrganizationName:receiver.receiverOrganizationName,receiverAccountId:null,receiverHistory,messages,notifications,auditEvents,requestId};
 }
 const seed=role==='teacher'?[
  ['open',{feedbackNo:'TJ2600001',feedbackType:'功能建议',content:'希望能按班级导出考勤汇总，便于核对学生出勤情况。',status:'待回复',createdAt:'2026-07-02T09:21:00+08:00',displayTime:'今天 09:21',transferredFrom:{organizationId:'DEMO-AGENT-ORG-OLD',role:'agent'}}],
  ['replied',{feedbackNo:'TW2600002',feedbackType:'问题反馈',content:'有学生已到校，但考勤记录延迟显示，请协助核查。',status:'已回复',createdAt:'2026-07-02T19:45:00+08:00',displayTime:'07-02 19:45',reply:'您好，已核查该时段记录上传情况。如再次遇到，请提供班级及发生时间，方便进一步排查。',replyAt:'2026-07-03T15:26:00+08:00',withImage:true}],

 ].map(([key,value])=>[key,makeRecord(value)]):[
  ['open',{feedbackNo:'PJ2600001',feedbackType:'功能建议',content:'放学播报希望能提前 5 分钟提醒我出发接孩子。',status:'待回复',createdAt:'2026-07-02T09:21:00+08:00',displayTime:'今天 09:21',studentName:'林晓乐',transferredFrom:{organizationId:'DEMO-AGENT-ORG-OLD',role:'agent'}}],
  ['replied',{feedbackNo:'PW2600002',feedbackType:'问题反馈',content:'孩子明明 7:40 就进校了，到校提醒 8 点才收到，最近一周有两三次这样，麻烦看看。',status:'已回复',createdAt:'2026-07-02T19:45:00+08:00',displayTime:'07-02 19:45',studentName:'林晓宁',schoolName:'市实验二小',reply:'您好，经排查为雨天网络波动导致个别到校记录延迟上传，已于 7月3日优化重传策略；如再遇到延迟欢迎随时反馈。',replyAt:'2026-07-03T15:26:00+08:00',withImage:true}],

 ].map(([key,value])=>[key,makeRecord(value)]);
 const records=Object.fromEntries(seed.map(([,record])=>[record.feedbackNo,record])),order=seed.map(([,record])=>record.feedbackNo);
 function notify(message){clearTimeout(timer);notice.textContent=message;notice.hidden=false;timer=setTimeout(()=>notice.hidden=true,2400);}
 function clearDialogMode(){overlay.classList.remove('hf-feedback-overlay');dialog.classList.remove('hf-feedback-page');}
 function show(title,body){clearDialogMode();previousFocus=document.activeElement;dialog.innerHTML='<div class="hf-dialog-head"><span id="hf-dialog-title">'+esc(title)+'</span><button class="hf-close" aria-label="关闭弹窗" onclick="hfClose()">×</button></div>'+'<div class="hf-dialog-body">'+body+'</div>';const footer=dialog.querySelector('.hf-form-actions');if(footer)dialog.append(footer);dialog.setAttribute('aria-labelledby','hf-dialog-title');overlay.hidden=false;dialog.focus();}
 function currentSubmitIdentity(){
  if(role==='teacher'){const schoolName=String(config?.school||'').trim(),personName=String(actor.nameSnapshot||'').trim();return {schoolName,personName,personLabel:'老师名称',studentName:null,valid:!!schoolName&&!!personName};}
  const studentName=typeof curKid!=='undefined'?String(curKid||'').trim():'',profile=studentName&&typeof kidInfo!=='undefined'?kidInfo[studentName]:null,schoolName=String(profile?.[4]||config?.school||'').trim(),studentStatus=profile?.[2]===0?'在读':profile?.[2]===1?'毕业':profile?.[2]===2?'离校':'无法确认';
  return {schoolName,personName:studentName,personLabel:'学生名称',studentName,studentStatus,valid:!!profile&&!!schoolName&&!!studentName&&studentStatus==='在读'};
 }
 function showFeedbackPage(){
  const identity=currentSubmitIdentity();
  previousFocus=document.activeElement;overlay.classList.add('hf-feedback-overlay');dialog.classList.add('hf-feedback-page');
  dialog.innerHTML=`<div class="hf-submit-page"><div class="hf-submit-top"><div class="hf-submit-status"><span>17:05</span><span aria-hidden="true">▮ ▮ ◉ ▰</span></div><header class="hf-submit-head"><button aria-label="返回" onclick="hfClose()">‹</button><b id="hf-dialog-title">提交反馈</b><span class="hf-submit-capsule" aria-hidden="true"><i>•••</i><i>◎</i></span></header></div><div class="hf-submit-scroll"><section class="hf-submit-card"><div class="hf-submit-label"><i></i><span>反馈类型</span></div><div class="hf-submit-types"><button class="selected" aria-pressed="true" onclick="hfType(this,'问题反馈')"><span class="hf-type-icon">?</span>问题反馈</button><button aria-pressed="false" onclick="hfType(this,'功能建议')"><span class="hf-type-icon">✎</span>功能建议</button></div></section><section class="hf-submit-card"><div class="hf-submit-label"><i></i><span>反馈内容</span><small>必填</small></div><div class="hf-submit-text-wrap"><textarea id="fb-txt" rows="6" maxlength="500" aria-label="反馈内容，必填，最多500字" placeholder="请详细描述您遇到的问题或建议，我们会尽快处理" oninput="hfCountContent(this)"></textarea><span id="fb-count" aria-live="polite">0/500</span></div></section><section class="hf-submit-card hf-submit-attachments"><div class="hf-submit-label"><i></i><span>附件图片</span><small>最多 9 张，每张不超过 10MB</small></div><div id="hf-uploads" class="hf-submit-upload-grid"></div><input id="hf-file" type="file" accept="image/jpeg,image/png" multiple hidden></section></div><footer class="hf-submit-footer"><button class="hf-secondary" onclick="hfClose()">取消</button><button class="hf-primary" id="hf-submit" onclick="feedbackSubmit()">提交</button></footer></div>`;
  formDirty=false;
  const basicCard='<section class="hf-submit-card hf-submit-basic-info"><div class="hf-submit-label"><i></i><span>基本信息</span></div><div class="hf-basic-info-row"><span>学校名称</span><b id="hf-basic-school">'+esc(identity.schoolName||'—')+'</b></div><div class="hf-basic-info-row"><span>'+esc(identity.personLabel)+'</span><b id="hf-basic-person">'+esc(identity.personName||'—')+'</b></div>'+(identity.valid?'':'<div class="hf-basic-info-error">'+(role==='parent'&&identity.studentStatus!=='在读'?'所选孩子当前状态为'+esc(identity.studentStatus)+'，暂不能提交':'当前登录信息不完整，暂不能提交')+'</div>')+'</section>';const typeAnchor='<section class="hf-submit-card"><div class="hf-submit-label"><i></i><span>反馈类型</span></div>';dialog.innerHTML=dialog.innerHTML.replace(typeAnchor,basicCard+typeAnchor);const submitButton=$('hf-submit');if(submitButton&&!identity.valid)submitButton.disabled=true;
  dialog.setAttribute('aria-labelledby','hf-dialog-title');overlay.hidden=false;dialog.focus();
 }
  function showDiscardPrompt(){
  let layer=dialog.querySelector('.hf-discard-overlay');
  if(!layer){
   layer=document.createElement('div');
   layer.className='hf-discard-overlay';
   layer.innerHTML='<section class="hf-discard-sheet" role="alertdialog" aria-modal="true" aria-labelledby="hf-discard-title" aria-describedby="hf-discard-copy"><b id="hf-discard-title">放弃编辑</b><p id="hf-discard-copy">确认放弃当前编辑内容吗？确认后将清空内容，不可恢复。</p><footer class="hf-discard-actions"><button type="button" class="hf-discard-cancel" onclick="hfCancelDiscard()">取消</button><button type="button" class="hf-discard-confirm" onclick="hfConfirmDiscard()">确认放弃</button></footer></section>';
   dialog.append(layer);
  }
  layer.hidden=false;
  layer.querySelector('.hf-discard-cancel')?.focus();
 }
 window.hfCancelDiscard=function(){const layer=dialog.querySelector('.hf-discard-overlay');if(layer)layer.hidden=true;dialog.querySelector('.hf-submit-head>button')?.focus();};
 window.hfConfirmDiscard=function(){window.hfClose(true);};
 window.hfClose=function(force=false){const wasForm=dialog.classList.contains('hf-feedback-page');if(wasForm&&formDirty&&!force){showDiscardPrompt();return false;}overlay.hidden=true;clearDialogMode();if(wasForm){uploadSession++;formDirty=false;upload=[];const url=new URL(location.href);if(url.searchParams.get('view')==='feedback-submit'){url.searchParams.delete('view');history.replaceState(null,'',url.pathname+url.search+url.hash);}}if(previousFocus?.isConnected)previousFocus.focus();return true;};overlay.addEventListener('click',e=>{if(e.target===overlay)hfClose();});
 document.addEventListener('keydown',e=>{
  if(overlay.hidden)return;
  if(e.key==='Escape'){e.preventDefault();const discard=dialog.querySelector('.hf-discard-overlay:not([hidden])');if(discard)hfCancelDiscard();else hfClose();}
  if(e.key==='Tab'){
   const discard=dialog.querySelector('.hf-discard-overlay:not([hidden])');const focusRoot=discard||dialog;const focusable=[...focusRoot.querySelectorAll('button,input,textarea,a[href]')].filter(el=>!el.hidden&&el.getClientRects().length);
   if(!focusable.length){e.preventDefault();dialog.focus();return;}
   const first=focusable[0],last=focusable.at(-1);
   if(e.shiftKey&&(document.activeElement===first||document.activeElement===dialog)){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&(document.activeElement===last||document.activeElement===dialog)){e.preventDefault();first.focus();}
  }
 }); function renderHelp(){
  $('hf-faqs').innerHTML=config.faqs.map((f,i)=>'<div class="hf-faq"><button class="hf-question" aria-expanded="false" aria-controls="hf-answer-'+i+'" onclick="hfFaq(this)"><span>'+esc(f.question)+'</span><i aria-hidden="true">+</i></button><div id="hf-answer-'+i+'" class="hf-answer" hidden>'+esc(f.answer)+'</div></div>').join('');
  renderService();
 }
 window.hfFaq=function(button){const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));button.querySelector('i').textContent=open?'−':'+';button.nextElementSibling.hidden=!open;};
 window.__setFinalServiceContext=function(ctx){serviceContext=ctx;hfClose();renderService();};
 function agentHasNoCreatedService(){return serviceContext?.responsibleType==='agent'&&Number.isInteger(serviceContext.agentCreatedServiceCount)&&serviceContext.agentCreatedServiceCount===0;}
 function services(){if(agentHasNoCreatedService())return [];return serviceOverride||config.services[scene]||[];}
 function orderedServices(){const collator=new Intl.Collator('zh-CN',{numeric:true,sensitivity:'base'});return services().map((agent,index)=>({...agent,_sourceOrder:index})).sort((a,b)=>{const ar=a.group==='代理商客服'?0:1,br=b.group==='代理商客服'?0:1;return ar-br||collator.compare(a.name||'',b.name||'')||String(a.phone||'').replace(/\D/g,'').localeCompare(String(b.phone||'').replace(/\D/g,''),'en',{numeric:true})||String(a.hours||'').localeCompare(String(b.hours||''))||a._sourceOrder-b._sourceOrder;});}
 function displayServicePhone(value){const number=String(value??'');const digits=number.replace(/\D/g,'');return digits.length===10?digits.slice(0,3)+'-'+digits.slice(3,6)+'-'+digits.slice(6):number;}
 function renderService(){$('hf-service').innerHTML='<img src="assets/help-phone.svg" alt=""><span>客服电话</span>'+(agentHasNoCreatedService()?'<small class="hf-agent-empty">暂无客服信息</small>':'');}
 window.hfSetService=function(value){scene=['none','single','multi'].includes(value)?value:'single';serviceOverride=null;const url=new URL(location.href);url.searchParams.set('service',scene);if(typeof curScreen==='undefined'||curScreen==='sc-help')url.searchParams.set('view','help');history.replaceState(null,'',url);hfClose();renderService();notify(scene==='none'?'已切换为无客服演示':scene==='single'?'已切换为单客服演示':'已切换为多客服演示');};
 window.hfPreviewAgentNoService=function(){serviceContext={responsibleType:'agent',agentCreatedServiceCount:0};hfClose();renderService();notify('代理商未创建客服，当前学校暂无客服信息');};
 window.hfRestoreServiceContext=function(){serviceContext=config.serviceContext||null;hfClose();renderService();notify('已恢复当前学校客服场景');};
 window.hfContact=function(){
  const agents=orderedServices();if(!agents.length){notify('暂无客服信息');return;}
  show('联系客服','<div class="hf-service-card hf-service-list">'+agents.map((a,i)=>'<div class="hf-agent"><div class="hf-agent-name"><b>'+esc(a.name)+'</b><span>'+esc(displayServicePhone(a.phone))+'</span></div><button class="hf-dial" onclick="hfDial('+i+')" aria-label="拨打'+esc(a.name)+'的电话">拨打</button><small>'+esc(a.hours)+'</small></div>').join('')+'</div>');
 };
 window.hfDial=function(i){const agent=orderedServices()[i];if(!agent)return;/* 离线原型模拟拨号，不拨打参考图中的演示号码。 */notify('演示拨号：'+agent.phone);window.dispatchEvent(new CustomEvent('zxh:help-dial',{detail:{phone:agent.phone,role}}));};
 function canReadAsSubmitter(record){return !!record&&record.sourceRole===role&&record.submitterAccountId===actor.accountId;}
 function visibleRecords(){return order.map(key=>records[key]).filter(canReadAsSubmitter);}
 function badge(record){const css=record.status==='已回复'?' replied':'';return '<span class="hf-badge'+css+'">'+esc(record.status)+'</span>';}
 function renderList(){
  const all=emptyPreview?[]:visibleRecords(),visible=all.filter(record=>filter==='all'||record.status===filter);
  $('fb-fbar').hidden=!all.length;$('fb-empty').hidden=all.length>0;$('fb-nores').hidden=!all.length||visible.length>0;
  $('fb-list').innerHTML=visible.map(record=>'<button class="hf-card hf-record" data-record="'+esc(record.feedbackNo)+'" onclick="openFbDetail(\''+esc(record.feedbackNo)+'\')"><div class="hf-record-head"><b>'+esc(record.feedbackType)+'</b>'+badge(record)+'</div><div class="hf-record-summary">'+esc(record.firstContent)+'</div><div class="hf-record-time"><span>'+esc(record.messages.at(-1)?.displayTime||timeLabel(new Date(record.createdAt)))+'</span></div></button>').join('');
  document.querySelectorAll('#fb-fbar button').forEach(button=>button.classList.toggle('on',(button.dataset.status||'all')===filter));
 }
 window.fbFilterPick=function(value){filter=['all','待回复','已回复'].includes(value)?value:'all';renderList();};
 window.fbApplyFilter=renderList;window.fbFilterReset=function(){filter='all';renderList();};
 window.fbEmptyToggle=function(){emptyPreview=!emptyPreview;filter='all';renderList();};
 function renderAttachments(items){if(!items?.length)return '';return '<div class="hf-images">'+items.map(item=>{const image=item.previewSrc||'assets/photo-cap.jpg',index=detailImages.push(image)-1;return '<button type="button" onclick="hfPreview('+index+')" aria-label="查看反馈图片"><img src="'+esc(image)+'" alt="反馈图片"></button>';}).join('')+'</div>';}
function renderFeedbackSummary(record){
 const firstMessage=(record.messages||[]).find(message=>message.messageType==='首条反馈');
 const content=record.firstContent||firstMessage?.content||'';
 const attachments=firstMessage?.attachments||record.attachments||[];
 return '<section class="hf-card hf-detail-summary"><div class="hf-feedback-number"><span>反馈编号</span><b>'+esc(record.feedbackNo)+'</b></div><div class="hf-feedback-type"><span>'+esc(record.feedbackType)+'</span>'+badge(record)+'</div><div class="hf-detail-text">'+esc(content)+'</div>'+renderAttachments(attachments)+'</section>';
}
function renderMessageTimeline(record){
 const isVisible=message=>!message.internal&&!message.isInternal&&message.kind!=='internal'&&message.visibility!=='internal'&&message.messageType!=='内部处理';
 const sourceMessages=(record.messages||[]).filter(isVisible);
 if(!sourceMessages.some(message=>message.messageType==='首条反馈')&&record.firstContent){
  sourceMessages.push({messageType:'首条反馈',authorNameSnapshot:record.submitterNameSnapshot||'提交人',content:record.firstContent,attachments:record.attachments||[],createdAt:record.createdAt,displayTime:record.createdAt?timeLabel(new Date(record.createdAt)):'—',serverSequence:0});
 }
 const items=sourceMessages.map((message,index)=>{
  const initial=message.messageType==='首条反馈';
  return {...message,__index:index,__initial:initial,messageType:initial?'提交':message.messageType};
 });
 items.sort((a,b)=>(Date.parse(b.createdAt||'')||0)-(Date.parse(a.createdAt||'')||0)||(b.serverSequence||0)-(a.serverSequence||0)||(b.__index||0)-(a.__index||0));
 if(!items.length)return '';
 return '<section class="hf-card hf-conversation-card"><h3>沟通记录</h3><div class="hf-timeline">'+items.map(message=>{
  const body=message.content;
  const attachments=message.attachments||[];
  const time=message.displayTime||(message.createdAt?timeLabel(new Date(message.createdAt)):'—');
  const isPlatformReply=message.messageType==='回复'&&['operations','agent'].includes(message.authorRole);
  const displayAuthor=isPlatformReply?'平台客服':(message.authorNameSnapshot||'提交人');
  return '<article class="hf-message"><header class="hf-message-header"><div class="hf-message-meta"><b>'+esc(displayAuthor)+'</b><span>'+esc(message.messageType||'沟通消息')+'</span></div><time>'+esc(time)+'</time></header><p>'+esc(body||'')+'</p>'+renderAttachments(attachments)+'</article>';
 }).join('')+'</div></section>';
}
function renderFeedbackDetail(record){detailImages=[];detailKey=record.feedbackNo;$('fbd-body').innerHTML=renderFeedbackSummary(record)+renderMessageTimeline(record);}
window.openFbDetail=function(feedbackNo){const record=records[feedbackNo];if(!canReadAsSubmitter(record)){notify('该反馈记录不可查看');return;}renderFeedbackDetail(record);go('sc-fbdetail');};
window.hfPreview=function(i){const image=detailImages[i]||(records[detailKey]?.attachments||[])[i]?.previewSrc;if(image)show('反馈图片','<img class="hf-image-large" src="'+esc(image)+'" alt="反馈图片大图">');};
window.fbShot=function(){hfPreview(0);};
 function bindUploadInput(session){
  const fileInput=$('hf-file');
  if(!fileInput)return;
  fileInput.addEventListener('change',async event=>{
   const submit=$('hf-submit');
   if(submit)submit.disabled=true;
   try{
    for(const file of Array.from(event.target.files||[])){
     if(session!==uploadSession)return;
     if(upload.length>=9){notify('最多上传9张图片');break;}
     if(!/^image\/(jpeg|png)$/.test(file.type)){notify('请选择JPG、JPEG或PNG图片');continue;}
     if(file.size>10*1024*1024){notify('单张图片不能超过10MB');continue;}
     const previewSrc=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=reject;reader.readAsDataURL(file);});
     if(session!==uploadSession)return;
     upload.push({previewSrc,fileName:file.name,mimeType:file.type,byteSize:file.size});
     formDirty=true;
    }
   }catch{if(session===uploadSession)notify('图片读取失败，请重试');}
   finally{
    event.target.value='';
    if(session===uploadSession){
     const currentSubmit=$('hf-submit');
     if(currentSubmit)currentSubmit.disabled=!currentSubmitIdentity().valid;
     if(!overlay.hidden)renderUploads();
    }
   }
  });
 } window.feedbackSheet=function(){
  formDirty=false;type='问题反馈';upload=[];const session=++uploadSession;
  showFeedbackPage();bindUploadInput(session);renderUploads();hfCountContent($('fb-txt'),false);
 }; window.hfType=function(button,value){type=value;formDirty=true;dialog.querySelectorAll('.hf-submit-types button').forEach(b=>{const selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});};
 window.hfCountContent=function(input,markDirty=true){const count=Array.from(input.value).length;const counter=$('fb-count');if(counter)counter.textContent=count+'/500';if(markDirty)formDirty=true;};
 function renderUploads(){$('hf-uploads').innerHTML=upload.map((item,i)=>'<div class="hf-upload-item"><img src="'+esc(item.previewSrc)+'" alt="待提交截图"><button aria-label="移除第'+(i+1)+'张图片" onclick="hfRemoveUpload('+i+')">×</button></div>').join('')+(upload.length<9?'<button class="hf-upload-add" aria-label="添加图片" onclick="document.getElementById(\'hf-file\').click()">＋</button>':'');} window.hfRemoveUpload=function(i){upload.splice(i,1);formDirty=true;renderUploads();};
 window.feedbackSubmit=function(){
  const identity=currentSubmitIdentity();if(!identity.valid){notify(role==='parent'?(identity.studentStatus==='在读'?'当前家长或孩子关联信息不完整，暂不能提交':'所选孩子当前状态为'+identity.studentStatus+'，暂不能提交'):'无法读取当前教师信息，暂不能提交');return;}
  if($('hf-basic-school')?.textContent!==identity.schoolName||$('hf-basic-person')?.textContent!==identity.personName){notify('当前登录信息已变化，请重新打开表单');return;}
  const input=$('fb-txt'),text=input.value.trim();if(!text){notify('请填写反馈内容');input.focus();return;}if(Array.from(input.value).length>500){notify('反馈内容最多500字');input.focus();return;}
  const now=new Date(),createdAt=now.toISOString(),feedbackNo=(role==='teacher'?'T':'P')+(type==='问题反馈'?'W':'J')+String(now.getFullYear()).slice(-2)+String(order.length+1).padStart(5,'0'),messageId=feedbackNo+'-MSG-001',requestId='DEMO-REQ-'+feedbackNo+'-CREATE',schoolName=identity.schoolName,school=schoolByName(schoolName),student=role==='parent'?studentSnapshot(identity.studentName):null,receiver=serviceFor(school.schoolNameSnapshot);
  const attachments=upload.map((item,index)=>attachmentRef({feedbackNo,messageId,index,fileName:item.fileName,mimeType:item.mimeType,byteSize:item.byteSize,previewSrc:item.previewSrc,localPreview:true},createdAt));
  const firstMessage={messageId,feedbackNo,messageType:'首条反馈',authorAccountId:actor.accountId,authorRole:role,authorNameSnapshot:actor.nameSnapshot,receiverAccountId:null,receiverOrganizationId:receiver.receiverOrganizationId,content:text,attachments,serverSequence:1,createdAt,displayTime:timeLabel(now),version:1,readFact:'已读',requestId};
  records[feedbackNo]={feedbackNo,sourceRole:role,sourceChannel:'mini-program',submitterAccountId:actor.accountId,submitterNameSnapshot:actor.nameSnapshot,submitterPhoneSnapshot:actor.phoneSnapshot,regionId:school.regionId,regionNameSnapshot:school.regionNameSnapshot,schoolId:school.schoolId,schoolNameSnapshot:school.schoolNameSnapshot,studentId:student?.studentId||null,studentNameSnapshot:student?.studentNameSnapshot||null,studentSnapshot:student,feedbackType:type,title:null,firstContent:text,attachments,createdAt,updatedAt:createdAt,status:'待回复',version:1,receiverRole:receiver.receiverRole,receiverOrganizationId:receiver.receiverOrganizationId,receiverOrganizationName:receiver.receiverOrganizationName,receiverAccountId:null,receiverHistory:[{assignmentId:feedbackNo+'-ASG-001',fromOrganizationId:null,toOrganizationId:receiver.receiverOrganizationId,toRole:receiver.receiverRole,schoolConfigVersion:'DEMO-SCHOOL-CONFIG-V1',reason:'首次提交受理分配',assignedAt:createdAt,eventId:feedbackNo+'-EVT-ASSIGN-001'}],messages:[firstMessage],notifications:[],auditEvents:[{eventId:feedbackNo+'-EVT-CREATE',feedbackNo,messageId,actorAccountId:actor.accountId,actorNameSnapshot:actor.nameSnapshot,actorRole:role,sourceChannel:'mini-program',action:'feedback_created',occurredAt:createdAt,result:'success',previousVersion:null,newVersion:1,requestId}],requestId};
  order.unshift(feedbackNo);emptyPreview=false;filter='all';formDirty=false;hfClose(true);go('sc-fblist');renderList();notify('反馈已提交（离线演示，编号仅供原型展示）');
 }; const originalGo=window.go;window.go=function(id){if(!overlay.hidden&&!hfClose())return;originalGo(id);if(id==='sc-fblist')renderList();};
 window.hfBackToMe=()=>{
  if(typeof window.go!=='function')return;
  window.go('sc-me');
  if(location.hash==='#sc-me'){
   const url=new URL(location.href);
   url.searchParams.delete('view');
   url.searchParams.delete('service');
   history.replaceState(null,'',url.pathname+url.search+url.hash);
  }
 };
 window.csEntryOn=()=>false;window.applyCsEntry=()=>{$('help-cs-btn').style.display='none';};window.toggleCsEntry=()=>{};
 const description=`「我的」Tab 保持第一期原样。本页FAQ与帮助内容沿用同一套Web配置回显；教师和家长使用当前身份对应的客服数据。
【客服电话】客服集合为空时点击客服电话不打开弹窗并提示“暂无客服信息”；有1名或多名客服时点击均打开“联系客服”弹窗，展示全部客服姓名、联系电话、工作时间和拨打按钮，不展示平台客服或代理商客服标签。客服姓名与联系电话左对齐，姓名与号码间隔12px；拨打按钮占用客服姓名/号码所在的第一行，不占工作时间行高；工作时间独占下一行并可换行，完整显示、不省略。客服展示字号参照家长端「我的-添加孩子」：页面标题16px、卡片标题14.5px、正文文字13px、说明文字12px、按钮14px。联系电话使用统一正文色，不使用绿色字体。工作日按周一至周日逐项显示，不压缩连续日期；示例：单日“每周一 8:30-17:30”，连续“每周一、周二、周三、周四、周五 09:00-18:00”，跳日“每周一、周三、周五 09:00-17:30”，连续加跳日“每周一、周三、周四、周五、周六、周日 8:30-17:30”，全周“每周一、周二、周三、周四、周五、周六、周日 8:30-17:30”。稳定排序为代理商客服优先于平台客服；同类按客服姓名拼音升序，再按联系电话升序；字段仍完全相同的记录保留来源顺序。拨打在离线原型中只模拟事件。
【反馈建议】反馈编号是唯一记录ID；状态只有“待回复”和“已回复”；新记录初态为“待回复”。每条反馈仅有用户首条提交和受理方一次回复；回复后本条记录结束，不提供修改、删除、追问或撤回，后续问题需新增独立反馈。沟通时间线按时间倒序展示“提交”和至多一条“回复”。详情不展示学校或学生快照。在线客服不属于本反馈优化范围。刷新后本地模拟数据重置。`;
 const roleScope=role==='teacher'
  ?'教师本人列表按当前教师角色+提交账号查询；不按学校过滤本人记录，同校其他教师账号不可见。教师记录不关联学生。'
  :'家长本人列表按当前家长角色+提交账号查询；不按当前孩子过滤本人记录，同家庭其他家长账号不可见。孩子解绑、转校、移出当前列表或超过既有一年入口期后，家长仍可查本人历史记录。';
 const submitDemo=role==='teacher'
  ?'提交时校验当前登录教师身份、学校任职关系及学校反馈提交权限；提交表单只读展示学校名称和当前教师名称。离线演示不接入真实权限服务，也不虚构权限码。'
  :'提交时复核家长身份、所选孩子关系及孩子状态。沿用现有规则，仅“在读”状态允许新建；毕业、离校或状态无法确认时阻止提交。Web未列明具体状态字典时不另造状态名称；基本信息卡只读展示当前孩子所在学校和孩子名称，详情不回显学校/学生快照。';
 const detailDescription=`反馈详情先展示反馈编号；反馈类型与当前状态处于同一行，状态靠右对齐。完整首条内容和图片在反馈信息卡中展示。沟通记录展示首条“提交”动作及至多一条受理方“回复”，按时间倒序排列，消息时间靠右对齐。来自运营后台或代理商的回复统一显示为“平台客服 回复”，不显示客服姓名；沿用原文字样式。不单独展示提交时间，不回显学校/学生快照或内部处理信息。提交内容只读。待回复记录等待受理方答复；收到一次答复后状态变为已回复，本条结束。后续问题需新增反馈。正文最多500字，最多9张图片、每张不超过10MB。`;
 if(typeof demoInfo!=='undefined'){
  demoInfo['sc-help']={t:'帮助与反馈',d:description,a:[['异常场景 · 无客服',"hfSetService('none')"],['场景 · 单客服',"hfSetService('single')"],['场景 · 多客服',"hfSetService('multi')"]]};
  demoInfo['sc-fblist']={t:'我的反馈',d:`${roleScope}${submitDemo}筛选和标签仅有待回复、已回复。点击本人记录进入详情。两条本地样例分别演示待回复和已回复；已回复后一问一答结束，后续通过新增记录提交。刷新后数据重置。`,a:[['切换空态预览','fbEmptyToggle()']]};
  const openId=role==='teacher'?'TJ2600001':'PJ2600001',repliedId=role==='teacher'?'TW2600002':'PW2600002';
  demoInfo['sc-fbdetail']={t:'反馈详情',d:detailDescription,a:[['打开待回复样例',"openFbDetail('"+openId+"')"],['打开已回复样例',"openFbDetail('"+repliedId+"')"]]};
 }
function listResponse(){const items=visibleRecords().map(record=>({feedbackNo:record.feedbackNo,sourceRole:record.sourceRole,status:record.status,feedbackType:record.feedbackType,title:record.title,contentSummary:record.firstContent.slice(0,80),createdAt:record.createdAt,updatedAt:record.updatedAt,studentSnapshot:record.studentSnapshot,version:record.version}));return {items,total:items.length,pageNo:1,pageSize:20,hasMore:false,requestId:'DEMO-REQ-LIST-'+role+'-'+Date.now(),scope:{sourceRole:role,submitterAccountId:actor.accountId}};}
 window.ZXH_HELP_PREVIEW={role,getRecords:()=>visibleRecords().map(record=>JSON.parse(JSON.stringify(record))),getListResponse:listResponse,getScene:()=>scene,setServices:agents=>{serviceOverride=agents;renderService();}};
 renderHelp();renderList();if(location.hash==='#sc-fbdetail')openFbDetail(order[0]);
})();




 const previewParams=new URLSearchParams(location.search);if(previewParams.get('view')==='feedback-submit')requestAnimationFrame(()=>window.feedbackSheet?.());else if(previewParams.get('view')==='help')requestAnimationFrame(()=>window.go?.('sc-help'));





;(()=>{if(typeof demoInfo!=='undefined'&&demoInfo['sc-help']){demoInfo['sc-help'].d+='\n【代理商未创建客服】当前学校由代理商负责且代理商创建客服数为0时，直接无客服展示，不使用运营后台默认客服或其他学校缓存号码兜底。此规则优先于单/多客服场景数据。';demoInfo['sc-help'].a.push(['代理商未创建客服（不兜底）','hfPreviewAgentNoService()'],['恢复学校客服上下文','hfRestoreServiceContext()']);}if(typeof demoInfo!=='undefined'&&demoInfo['sc-order']){demoInfo['sc-order'].d+='\n【电话客服】所有办理记录详情中的「电话客服」均与「帮助与反馈 → 客服电话」共用同一套《联系客服》弹窗及规则：无客服时不打开弹窗并轻提示“暂无客服信息”（含代理商自建客服为0不兜底）；有1名或多名客服时统一打开《联系客服》弹窗，展示全部客服姓名、联系电话、工作时间与独立拨打按钮。';demoInfo['sc-order'].a=[['客服 · 无客服',"hfSetService('none')"],['客服 · 单客服',"hfSetService('single')"],['客服 · 多客服',"hfSetService('multi')"]].concat(demoInfo['sc-order'].a||[]);}if(window.ZXH_HELP_PREVIEW)window.ZXH_HELP_PREVIEW.setServiceContext=function(ctx){hfRestoreServiceContext();window.__setFinalServiceContext?.(ctx);};})();
