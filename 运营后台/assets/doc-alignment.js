/* 文档复核：只实现已明确的现有页面规则；回写入口用于本地事件核验，不发起真实退款。 */
(() => {
'use strict';
const Base=window.ZxhBase,M=Base.models,F=window.ZxhFinance;
// 本地权限结果可替换为平台授权结果；默认仅包含本原型的示例学校。
window.ZxhDataAccess={canSchool:i=>Number.isInteger(i)&&!!M.school[i],schoolActive:i=>!!M.school[i]&&!M.school[i].deleted&&M.school[i].disabled!==true};
const refundStates=['退款中','退款成功','退款异常','退款关闭'];
const records=[],snapshots=new Map(),paid=o=>o.badges.reduce((n,b)=>n+b.price,0);
const snapshot=o=>{if(!snapshots.has(o.id))snapshots.set(o.id,copy(o.snapshot.badges||o.badges));return snapshots.get(o.id)};
orders.forEach(snapshot);
const moneyState=o=>{const bs=snapshot(o).filter(b=>!b.gift&&b.price>0);return bs.length&&bs.some(b=>o.badges.find(x=>x.id===b.id)?.refund)?'已退款':'已支付'};
const ofOrder=id=>records.filter(r=>r.orderId===id),ofParent=i=>{const ids=new Set(parentOrders(i).map(o=>o.id));return records.filter(r=>ids.has(r.orderId))};
const sortRecords=xs=>[...xs].sort((a,b)=>b.created.localeCompare(a.created)||a.id.localeCompare(b.id));
function recordError(message){return {ok:false,message}}
function addRecord(payload){
 const o=orders.find(o=>o.id===payload.orderId);if(!o)return recordError('办理记录不存在');
 if(!payload.id||records.some(r=>r.id===payload.id))return recordError('退款单编号重复');
 const ids=[...(payload.badgeIds||[])];if(new Set(ids).size!==ids.length||ids.some(id=>!snapshot(o).some(b=>b.id===id)))return recordError('退款校徽关联不正确');
 const max=ids.reduce((n,id)=>n+Math.round(snapshot(o).find(b=>b.id===id).price*100),0);
 const amount=payload.amount==null?max:payload.amount;if(!Number.isSafeInteger(amount)||amount<0||ids.length&&amount!==max)return recordError('退款金额须与选中校徽的下单金额一致');
 const state=payload.state||'退款中';if(!refundStates.includes(state))return recordError('文档未列明此退款状态');
 const r={id:payload.id,orderId:o.id,badgeIds:ids,amount,state:state==='退款成功'?'退款中':state,created:payload.created||now(),operator:payload.operator||'演示运营',type:payload.type||'运管部分',refundId:payload.refundId||'DEMO-WX-'+payload.id,flowId:payload.flowId||'DEMO-RT-'+payload.id,applied:false};
 if(!['家长取消全额','家长部分','运管部分','运管全额'].includes(r.type))return recordError('文档未列明此退款类型');records.push(r);
 if(state==='退款成功'){const result=applyResult(r.id,state,{completedAt:payload.completedAt||r.created,render:false});if(!result.ok){records.pop();return result;}}
 return {ok:true,record:r};
}
function applyResult(id,state,options={}){
 const r=records.find(r=>r.id===id);if(!r)return recordError('退款单不存在');
 if(!refundStates.includes(state))return recordError('文档未列明此退款状态');
 if(r.applied)return {ok:true,changed:false,record:r}; // 成功结果不可被重复通知或晚到失败回退。
 const o=orders.find(o=>o.id===r.orderId);
 if(state==='退款成功'){
  if(!r.badgeIds.length)return recordError('缺少退款校徽关联，不能回写数量');
  if(r.badgeIds.some(id=>o.badges.find(b=>b.id===id)?.refund))return recordError('校徽已在其他退款记录中成功处理，不能重复扣减');
  const success=ofOrder(o.id).filter(x=>x.applied),used=new Set(success.flatMap(x=>x.badgeIds));
  if(used.size+r.badgeIds.length>snapshot(o).length)return recordError('累计退款数量不能超过原办理张数');
  const total=Math.round(snapshot(o).reduce((n,b)=>n+b.price,0)*100),previous=success.reduce((n,x)=>n+x.amount,0);
  if(previous+r.amount>total)return recordError('累计退款金额不能超过原实付金额');
  const forwardFee=F.fee(total),returned=success.reduce((n,x)=>n+Math.abs(x.fee||0),0);
  r.fee=F.refundFee(r.amount,total-previous-r.amount,forwardFee,returned);
  r.state=state;r.completedAt=options.completedAt||now();r.applied=true;
  r.badgeIds.forEach(id=>{const b=o.badges.find(b=>b.id===id);b.refund=true;b.refundRecordId=r.id;b.refundTime=r.completedAt});
  if(r.amount>0&&!F.local.some(x=>x.merchant===r.flowId)){
   const local={merchant:r.flowId,channelId:r.refundId,created:r.completedAt,kind:'退款',order:-r.amount,amount:-r.amount,fee:r.fee,school:SCH[o.school],payer:o.parent,record:o.id,state:'退款成功',callback:{source:'本地退款结果示例',demo:true}};
   F.local.push(local);F.channel.push({...copy(local),state:'REFUND',refundState:'SUCCESS'});
  }
 }else r.state=state;
 if(options.render!==false){render();if(layer?.querySelector('[data-do="prodQuery"],[data-do="p:prodQuery"]'))renderProd();}
 return {ok:true,changed:true,record:r};
}
// 导入原示例中的已申请金额；只有有明确校徽关联的成功结果可影响办理数量。
for(const row of F.orderRows){
 const previous=copy(row.refunds),refunded=row.source.badges.filter(b=>b.refund);
 previous.forEach((r,i)=>records.push({id:r.id,orderId:row.id,badgeIds:r.state==='退款成功'&&refunded[i]?[refunded[i].id]:r.state==='退款中'?[row.source.badges.find(b=>!b.refund&&!b.gift&&Math.round(b.price*100)===r.amount)?.id].filter(Boolean):[],amount:r.amount,state:r.state,created:r.created,completedAt:r.state==='退款成功'?r.created:null,operator:'演示运营',type:'运管部分',flowId:'DEMO-RT-'+r.id,refundId:'DEMO-WX-'+r.id,applied:r.state==='退款成功',fee:r.state==='退款成功'?F.refundFee(r.amount,row.paid-r.amount,F.fee(row.paid),0):0}));
 Object.defineProperty(row,'refunds',{configurable:true,get:()=>ofOrder(row.id).map(r=>({id:r.id,amount:r.amount,state:r.state,created:r.created}))});
}
// 增加文档里的“3张退1张”示例；不改变其他订单的下单快照。
const partial=orders.find(o=>o.status==='待生产'&&o.badges.length===3&&o.school===1);
if(partial){const b=partial.badges.find(b=>!b.gift&&!b.refund);addRecord({id:'DEMO-RO-部分退款',orderId:partial.id,badgeIds:[b.id],state:'退款成功',created:partial.created});const next=partial.badges.find(b=>!b.gift&&!b.refund);if(next)addRecord({id:'DEMO-RO-退款中',orderId:partial.id,badgeIds:[next.id],state:'退款中',created:partial.created});}
window.ZxhRefunds={records,addRecord,applyResult,ofOrder,ofParent,moneyState,snapshot};

// 退款单、退款流水、家长聚合页共用退款记录；不添加文档未规定的发起/审核按钮。
function tablePage(cols,rows){const s=listState();s.total=rows.length;s.page=Math.min(s.page,Math.max(1,Math.ceil(rows.length/s.size)));return gridTable(cols,rows.slice((s.page-1)*s.size,s.page*s.size))+pager(rows.length)}
function statCards(items){return `<div class="stats" style="grid-template-columns:repeat(${items.length},1fr)">${items.map(([name,value])=>`<div class="stat" style="--c:#01a239"><div class="n">${name}</div><div class="v">${value}</div></div>`).join('')}</div>`}
function refundRows(flows=false){const s=listState(),q=s.q;return sortRecords(records).filter(r=>{const o=orders.find(o=>o.id===r.orderId);return window.ZxhDataAccess.canSchool(o.school)&&(!s.orderIds||s.orderIds.includes(r.orderId))&&Object.entries(q).every(([key,v])=>!v||(key==='关键词'?[r.id,r.flowId,r.refundId,o.id,o.student,o.parent].some(x=>String(x).includes(v)):key==='全部类型'?r.type===v:key==='时间范围'?v==='自定义'||new Date(r.created+'+08:00').valueOf()>=Date.now()-(v==='近7天'?7:v==='近90天'?90:30)*86400000:key==='自定义起'?r.created.slice(0,10)>=v:key==='自定义止'?r.created.slice(0,10)<=v:true));})}
const statusTag=s=>tag(s,s==='退款成功'?'g':s==='退款中'?'b':'r');
function refundList(flows){const list=refundRows(flows),rows=list.map(r=>{const o=orders.find(o=>o.id===r.orderId);return flows?[r.flowId,r.refundId,A(r.id,'d:refund:'+r.id),A('DEMO-PM-'+o.id,'d:pay:'+o.id),'微信',yuan(r.amount/100),statusTag(r.state),r.created,r.completedAt||'—',A('详情','d:flow:'+r.id)]:[r.id,A(o.id,'d:order:'+o.id),SCH[o.school],yuan(r.amount/100),r.type,r.badgeIds.length||'—',statusTag(r.state),r.operator,r.created,A('详情','d:refund:'+r.id)]});const names=flows?refundStates:['退款中','退款异常','退款关闭','退款成功'];return statCards(names.map(name=>[name,records.filter(r=>r.state===name).length]))+compactHTML(P[flows?'refundTransaction':'refundOrder'],listState())+tablePage([...P[flows?'refundTransaction':'refundOrder'].cols,'操作'],rows)}
function paymentList(){const q=listState().q,list=orders.filter(o=>window.ZxhDataAccess.canSchool(o.school)&&Object.entries(q).every(([k,v])=>!v||(k==='关键词'?[o.id,'DEMO-PM-'+o.id,o.parent].some(x=>x.includes(v)):k==='全部学校'?SCH[o.school]===v:k==='自定义起'?o.created.slice(0,10)>=v:k==='自定义止'?o.created.slice(0,10)<=v:k==='时间范围'?v==='自定义'||new Date(o.created+'+08:00').valueOf()>=Date.now()-(v==='近7天'?7:v==='近90天'?90:30)*86400000:true))).sort((a,b)=>b.created.localeCompare(a.created)||a.id.localeCompare(b.id));return statCards([['支付单数',orders.length],['已完成',orders.length],['支付金额（元）',orders.reduce((n,o)=>n+paid(o),0).toFixed(2)],['关联办理记录',orders.length]])+compactHTML(P.payOrder,listState())+tablePage([...P.payOrder.cols,'操作'],list.map(o=>['DEMO-PM-'+o.id,A(o.id,'d:order:'+o.id),SCH[o.school],o.parent,yuan(paid(o)),tag('已完成'),tag('SUCCESS'),o.created,A('详情','d:pay:'+o.id)]))}
const previousList=renderList;renderList=function(k,c){return k==='refundOrder'?refundList(false):k==='refundTransaction'?refundList(true):k==='payOrder'?paymentList():previousList(k,c)};
function paymentDetail(id){const o=orders.find(o=>o.id===id);if(!o)return;modal('支付单',kv([['支付单编号','DEMO-PM-'+o.id],['办理记录编号',o.id],['学校',SCH[o.school]],['支付人',o.parent],['金额',yuan(paid(o))],['支付单状态','已完成'],['渠道交易状态','SUCCESS'],['支付成功时间',o.created]]),[['关闭','close']],2)}
function refundDetail(id,flow=false){const r=records.find(r=>r.id===id);if(!r)return;const o=orders.find(o=>o.id===r.orderId);if(!window.ZxhDataAccess.canSchool(o.school))return toast('无权查看该学校退款记录');modal(flow?'退款流水单':'退款单',kv([['退款单编号',r.id],...(flow?[['退款流水单编号',r.flowId],['微信退款单号',r.refundId]]:[]),['办理记录编号',o.id],['学校',SCH[o.school]],['学生',o.student],['退款金额',yuan(r.amount/100)],['退款类型',r.type],['退款枚数',r.badgeIds.length||'—'],['退款单状态',statusTag(r.state)],['操作人',r.operator],['发起时间',r.created],['退款成功时间',r.completedAt||'—']])+gridTable(['校徽编号','EPC编号','是否赠送','下单单价','当前状态'],r.badgeIds.map(id=>{const b=o.badges.find(b=>b.id===id);return [b.id,b.epc,b.gift?'是':'否',yuan(snapshot(o).find(x=>x.id===id).price),b.refund?(b.gift?'校徽回收':'已退款'):r.state]})),[['关闭','close']],2)}
refundPanel=function(){const q=UX.parentRefundQ||{},list=sortRecords(ofParent(UX.selectedParent)).filter(r=>(!q['办理记录编号']||r.orderId.includes(q['办理记录编号']))&&(!q['退款单编号']||(window.ZxhSupplement?.displayRefundId(r)||r.id).includes(q['退款单编号'])));return filtersHTML({filters:[I('办理记录编号'),I('退款单编号')]},q).replaceAll('data-do="query"','data-do="parentRefundQuery"').replaceAll('data-do="reset"','data-do="parentRefundReset"')+gridTable(['序号','退款单编号','关联办理记录编号','退款金额','退款类型','退款枚数','退款单状态','操作人','发起时间'],pageSlice(list,'parentRefundPage').map((r,j)=>[j+1+(UX.parentRefundPage.page-1)*UX.parentRefundPage.size,A(window.ZxhSupplement?.displayRefundId(r)||r.id,'d:refund:'+r.id),A(r.orderId,'d:order:'+r.orderId),yuan(r.amount/100),r.type,r.badgeIds.length||'—',statusTag(r.state),r.operator,r.created]))+pager(list.length,'parentRefundPage')};
const previousParent=parentDetail;
parentDetail=function(p,i){let html=previousParent(p,i);if(UX.queryTab===2)return html;const box=document.createElement('div');box.innerHTML=html;
 if(UX.queryTab===0){const phone=[...box.querySelectorAll('dt')].find(e=>e.textContent==='手机号');if(phone)phone.nextElementSibling.innerHTML=esc(p.phone.replace(/(\d{3})\d{4}/,'$1****'))+' '+A('👁 查看','d:phone:'+i);const r=ofParent(i),cards=box.querySelectorAll('.stats .stat');if(cards[2]){cards[2].querySelector('.v').textContent=r.length;cards[2].querySelector('.d').innerHTML=['退款中','退款成功','退款异常','退款关闭'].map(s=>s+' '+r.filter(x=>x.state===s).length).join('　')+' '+A('去处理','parentRefundList');}if(cards[1])cards[1].querySelector('.d').textContent='待支付 0　已支付 '+parentOrders(i).filter(o=>moneyState(o)==='已支付').length+'　已退款 '+parentOrders(i).filter(o=>moneyState(o)==='已退款').length;}
 if(UX.queryTab===1){const q=UX.parentOrderQ||{},list=parentOrders(i).filter(o=>(!q['学校']||SCH[o.school]===q['学校'])&&(!q['订单编号']||o.id.includes(q['订单编号']))&&(!q['批次号']||o.batch.includes(q['批次号']))&&(!q['办理状态']||o.status===q['办理状态'])&&(!q['订单状态']||moneyState(o)===q['订单状态'])).sort((a,b)=>b.created.localeCompare(a.created)||a.id.localeCompare(b.id));const body=box.querySelector('tbody'),s=UX.parentOrderPage||={page:1,size:10};s.page=Math.min(s.page,Math.max(1,Math.ceil(list.length/s.size)));body.innerHTML=list.length?list.slice((s.page-1)*s.size,s.page*s.size).map((o,j)=>`<tr>${[j+1+(s.page-1)*s.size,o.id,o.batch||'—',o.created,o.student,o.snapshot.gradeName+'-'+o.snapshot.className,yuan(paid(o)),snapshot(o).length,snapshot(o).filter(b=>b.gift).length,snapshot(o).filter(b=>!b.gift).length,tag(moneyState(o)),tag(o.status),A('查看校徽','badgeView:'+orders.indexOf(o))].map(x=>`<td>${x}</td>`).join('')}</tr>`).join(''):'<tr><td colspan="13" class="empty">暂无数据</td></tr>';const pagerEl=box.querySelector('[data-pager="parentOrderPage"]');if(pagerEl)pagerEl.outerHTML=pager(list.length,'parentOrderPage');}
 return box.innerHTML;
};
const previousBadgeView=badgeView;badgeView=function(i){previousBadgeView(i);const o=orders[i],dt=[...layer.querySelectorAll('dt')].find(e=>e.textContent==='支付状态');if(dt)dt.nextElementSibling.textContent=moneyState(o);layer.querySelectorAll('tbody tr').forEach((tr,j)=>{const b=o.badges[j];if(b?.refund&&b.gift)tr.children[3].textContent='校徽回收';})};
const previousTx=CUSTOM.txView;CUSTOM.txView=function(k,c){const html=previousTx(k,c),box=document.createElement('div');box.innerHTML=html;const id=plain(UX.txRow?.cells?.[0]||UX.origin?.cells?.[0]||''),o=orders.find(o=>o.id===id);if(o){for(const dt of box.querySelectorAll('dt'))if(['应付金额','实付金额'].includes(dt.textContent))dt.nextElementSibling.textContent=yuan(paid(o));box.querySelectorAll('tbody tr').forEach((tr,j)=>{if(o.badges[j]?.refund&&o.badges[j].gift)tr.lastElementChild.textContent='校徽回收';});}return box.innerHTML};

// 文档规定按敏感信息权限查看；不自行指定角色、默认授予或新增权限管理模块。
window.ZxhSensitiveAccess={canViewPhone:()=>false};
window.addEventListener('click',e=>{const el=e.target.closest('[data-do^="d:"]');if(!el)return;e.preventDefault();e.stopImmediatePropagation();const [,a,...rest]=el.dataset.do.split(':'),id=rest.join(':');if(window.ZxhSupplement){if(a==='refund'||a==='flow')return window.ZxhSupplement.showRefund(id,a==='flow');if(a==='pay')return window.ZxhSupplement.showPayment(id);if(a==='order')return window.ZxhSupplement.showOrder(id)}if(a==='refund'||a==='flow')return refundDetail(id,a==='flow');if(a==='pay')return paymentDetail(id);if(a==='order'){const o=orders.find(o=>o.id===id);UX.txRow={cells:[o.id]};openPage('transactionDetailsView');return;}if(a==='phone'){const i=+id;if(!window.ZxhSensitiveAccess.canViewPhone(parents[i]))return toast('当前未取得敏感信息查看权限');const dt=[...document.querySelectorAll('.panel dt')].find(e=>e.textContent==='手机号');if(dt)dt.nextElementSibling.textContent=parents[i].phone;else{const value=document.querySelector('[data-parent-phone]');if(value)value.textContent=parents[i].phone;}}},true);

// 反馈成功、失败和并发均按文档处理，保留失败时的输入，不把一次点击视为成功。
window.ZxhFeedbackDelivery={send:()=>true};
sendReply=function(){const f=feedbacks[UX.feedbackIndex];if(f.reply)return error('该反馈已回复，请刷新后查看');if(f.sending)return;const reply=vals().reply.trim();if(!reply)return error('请填写回复内容');const commit=ok=>{f.sending=false;if(f.reply)return error('该反馈已回复，请刷新后查看');if(!ok)return error('发送失败，请重新发送');Object.assign(f,{reply,replyTime:now(),operator:'演示客服'});logDemo('回复反馈',parents[f.parent].id,reply);closeLayer();render();toast('回复已保存（本地演示，未发送至家长端）')};f.sending=true;try{const sent=window.ZxhFeedbackDelivery.send({feedback:f,reply});if(sent&&typeof sent.then==='function')sent.then(commit).catch(()=>commit(false));else commit(sent!==false)}catch{commit(false)}};

// 保存前重新检查已有套餐、跨字段边界和数据引用；不依赖HTML控件约束。
function packageProblem(p,index,packages){const allowed=new Set(['全部年级',...(M.school[UX.school]?.grades||[]).filter(g=>g.available).map(g=>g.id)]);if(!styles.includes(p.style))return '请选择校徽款式';if(!p.name.trim())return '请输入套餐名称';if(packages.some((x,i)=>i!==index&&x.name.trim()===p.name.trim()))return '套餐名称已存在，请重新输入';if(!/^\d+(\.\d{1,2})?$/.test(String(p.price)))return '请输入正确的销售单价';if(!p.preview)return '请上传制作样式';if(!p.grades.length||p.grades.some(g=>!allowed.has(g)))return '请选择当前学校的适用年级';if(!p.files[requiredLayout(UX.configDraft)])return '请上传当前必传版式的矢量文件';return '';}
const priorPackageSave=savePackage;savePackage=function(){packageValues();const errorText=packageProblem(UX.packageDraft,UX.packageIndex,UX.configDraft.packages);if(errorText)return error(errorText);return priorPackageSave()};
const priorConfigSave=configSave;configSave=function(){saveDraft();const d=UX.configDraft;if(!['minQty','defaultQty','maxQty'].every(k=>/^[1-9]\d*$/.test(String(d[k]))&&+d[k]<=10))return error('购买数量必须为1至10的整数');if(!['start','end'].every(k=>/^[1-9]\d*$/.test(String(d[k]))&&+d[k]<=31))return error('每月办理日期必须为1至31的整数');for(let i=0;i<d.packages.length;i++){const problem=packageProblem(d.packages[i],i,d.packages);if(problem)return error(problem);}return priorConfigSave()};
function signature(group){return group.map(o=>[o.id,o.status,liveBadges(o).map(b=>[b.id,b.price])])}
const beforeConfirm=confirmBatch;confirmBatch=function(i){beforeConfirm(i);UX.confirmGroup=UX.group;UX.confirmSignature=JSON.stringify(signature(UX.group))};
const beforeSaveBatch=saveBatch;saveBatch=function(){if(UX.group?.some(o=>!liveBadges(o).length))return error('订单已全部退款，请刷新后重试');if(UX.confirmGroup===UX.group&&UX.confirmSignature!==JSON.stringify(signature(UX.group)))return error('订单数据已更新，请刷新后重试');return beforeSaveBatch()};
window.ZxhDocValidators={entity:(kind,d,old)=>{if(kind==='customer'&&!OPTS['客户类型'].includes(d.type))return '请选择文档规定的客户类型';if(kind==='contract'){if(!M.customer[+d.customer]||M.customer[+d.customer].deleted)return '所属客户不可用';if(!OPTS['合同类型'].includes(d.type)||!OPTS['合同到期提醒时间'].includes(d.notice))return '请选择文档规定的合同类型和提醒时间';if(!d.people.length||d.people.some(p=>p.name.trim().length>15))return '销售跟进人必填且最多15字';}if(['school','regulatory'].includes(kind)){if(!M.customer[+d.customer]||M.customer[+d.customer].deleted||!M.contract[+d.contract]||M.contract[+d.contract].deleted)return '所属客户或关联合同不可用';if(kind==='school'){if(d.stages.some(x=>!['小学','初中','高中'].includes(x))||!['六三制','五四制'].includes(d.system))return '学段或学制不正确';}if(kind==='regulatory'&&!OPTS['监管类型'].includes(d.type))return '请选择文档规定的监管类型';}if(kind==='user'){if(!M.role[+d.role]||M.role[+d.role].deleted)return '请选择有效角色';}return ''},packageProblem};

// 用文档已给的退款类型，不把“运管/家长取消全额”等原型示意项当成最终字典。
const previousCompact=compactHTML;compactHTML=function(c,s){if(state.active!=='refundOrder')return previousCompact(c,s);return `<div class="compact">${inp('关键词',s.q['关键词']||'',`placeholder="${esc(c.compact.ph)}" style="width:320px"`)}${sel('全部类型',['运管部分','运管全额'],s.q['全部类型']||'','全部类型')}${sel('时间范围',['近30天','近7天','近90天','自定义'],s.q['时间范围']||'近30天',null)}${B('查询','query',true)}${B('重置','reset')}<span style="flex:1"></span>${B('导出','exportTable')}</div>${s.q['时间范围']==='自定义'?`<div class="filters custom-dates">${inp('自定义起',s.q['自定义起']||'','type="date"')} 至 ${inp('自定义止',s.q['自定义止']||'','type="date"')}</div>`:''}`};
const previousRender=render;render=function(){previousRender();const label=document.querySelector('.proto-tag');if(label)label.textContent='原型 v0.19 · 本地演示';};
// 用户本轮确认的完整枚举与顺序；两个筛选不级联。
OPTS['问题类型']=['功能建议','问题反馈'];feedbacks.forEach((f,i)=>f.type=OPTS['问题类型'][Math.floor(i/2)%2]);
// 聚合页不受学校范围限制；跳转后的业务菜单必须重新检查范围。
const previousAction=action;action=function(name){const a=name.split(':')[0];if(['parentSelect','parentReset','parentQuery'].includes(a)){UX.parentRefundQ={};UX.parentRefundPage={page:1,size:10};}if(a==='parentRefundList'){const ids=parentOrders(UX.selectedParent).filter(o=>ofOrder(o.id).length&&window.ZxhDataAccess.canSchool(o.school)).map(o=>o.id);openPage('refundOrder');listState().q={};listState().page=1;listState().orderIds=ids;render();return;}if(a==='feedback'&&!window.ZxhDataAccess.canSchool(feedbacks[+name.split(':')[1]]?.school))return toast('无权查看该学校反馈');return previousAction(name)};
const previousSchoolHTML=CUSTOM.schoolConfig;CUSTOM.schoolConfig=function(){return window.ZxhDataAccess.canSchool(UX.school)&&window.ZxhDataAccess.schoolActive(UX.school)?previousSchoolHTML():backbar({t:'校徽活动配置'})+'<div class="empty">无权访问或学校账号不存在</div>'};
const saveWithSchoolGuard=configSave;configSave=function(){if(!window.ZxhDataAccess.canSchool(UX.school)||!window.ZxhDataAccess.schoolActive(UX.school))return error('无权访问或学校账号不存在');return saveWithSchoolGuard()};
const previousFAQSave=faqSave;faqSave=function(){const v=vals();if(v.faqTitle.length>30||v.faqAnswer.length>500)return error('问题标题最多30个字符，答案最多500个字符');if(!faqCats.includes(v.faqCat))return error('请选择文档规定的问题分类');return previousFAQSave()};
// 家长学生卡片按认领关系展示，拒绝/核实未通过不计入孩子数。
const childClaims=new Map();
function parentChildren(i){const seen=new Set();return parentOrders(i).filter(o=>{const key=o.school+':'+o.studentId;if(seen.has(key))return false;seen.add(key);return !['已拒绝','核实未通过'].includes(childClaims.get(i+':'+key)||'已认领')})}
const claimOf=(i,o)=>childClaims.get(i+':'+o.school+':'+o.studentId)||'已认领';
window.ZxhParentClaims={set(parent,school,studentId,value){if(!['已认领','待认领','待核实','核实通过待认领','已拒绝','核实未通过'].includes(value))return false;childClaims.set(parent+':'+school+':'+studentId,value);return true;},visible:parentChildren};
studentCards=function(i){return parentChildren(i).map(o=>{const relation=window.ZxhPhase4.relations.find(r=>r.school===o.school&&r.studentId===o.studentId&&r.year===2026),enrolled=relation?.state==='在读',claim=claimOf(i,o);return `<div class="sec"><h4>${esc(o.student)}　${tag(enrolled?'在读':'已毕业',enrolled?'g':'gr')}　${tag(claim,'b')}</h4>${kv([['学校',SCH[o.school]],['年级-班级',o.grade+'-'+o.cls],['所在区域',REG[o.school]],['添加时间',o.created],['添加方式',o.studentSource||'—'],['性别','示例未提供'],['入学级',o.entryYear+'级']])}${enrolled&&claim==='已认领'?A('查看考勤 →','attendance:'+orders.indexOf(o)):!enrolled?'<p class="tip">已毕业，考勤数据已清空</p>':''}</div>`}).join('')};
const parentBeforeClaims=parentDetail;parentDetail=function(p,i){const box=document.createElement('div');box.innerHTML=parentBeforeClaims(p,i);if(UX.queryTab===0){const value=box.querySelector('.stats .stat .v');if(value)value.textContent=parentChildren(i).length;}return box.innerHTML};
const actionBeforeClaims=action;action=function(name){if(name.startsWith('attendance:')){const o=orders[+name.split(':')[1]],relation=o&&window.ZxhPhase4.relations.find(r=>r.school===o.school&&r.studentId===o.studentId&&r.year===2026);if(!o||relation?.state!=='在读'||claimOf(UX.selectedParent,o)!=='已认领')return toast('仅在读且已认领学生可查看考勤');}return actionBeforeClaims(name)};
render();
})();
