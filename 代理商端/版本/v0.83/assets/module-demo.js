/* Shared adapter: trusted configurations/actions; no arbitrary script from URLs or messages. */
(()=>{'use strict';if(document.body.classList.contains('unified-outer'))return;const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mini=!!$('.phone'),isNotice=!!window.NoticeDemo;let mirrorOnly=false;try{mirrorOnly=isNotice&&parent!==window&&!!parent.document.querySelector('.phone')}catch{}let undo=[],scene='',last='',interval,noticeState=null;
const visible=n=>!!n?.isConnected&&n.getClientRects().length>0&&getComputedStyle(n).visibility!=='hidden'&&getComputedStyle(n).display!=='none';
function ctx(){const q=Object.fromEntries(new URLSearchParams(location.search)),masks=$$('.mask,.cs-mask,.v5-mask,#hf-overlay,.modal-backdrop,.modal-overlay,.dialog-mask').filter(visible),root=masks.at(-1);const n=window.NoticeDemo?.context||noticeState;
 let module=isNotice?'notice':/customer-service|^cs$/.test(q.page||'')?'customer':/feedback|school-feedback|agent-feedback/.test(q.page||'')?'feedback':null;
 if(mini&&!isNotice){const active=$$('.screen.active,.screen.on,.screen.show').find(visible)||$$('.screen').find(visible),id=active?.id||location.hash.slice(1);if(/^sc-(help|fblist|fbdetail|cs)/.test(id))module='help';else if(id==='sc-family-notice')module='embedded-notice';q.screen=id;}
 const role=document.body.dataset.end||window.ZXH_HELP_ROLE||n?.role||'enterprise';let mode=q.dialog||q.view||n?.page||'list';if(root)mode=/确认|删除|放弃/.test(root.querySelector('.cs-dh,.dh,h2,h3,.modal-title')?.textContent||'')?'confirm':q.dialog||n?.modal||'detail';
 const tab=$$('[role=tab][aria-selected=true],.v5-tab.on,.v5-tabs .active,.tab-btn.active,.subtab.active,.hf-filter.on').filter(visible).map(n=>n.textContent.trim()).join(' / ');
 const title=root?.querySelector('.cs-dh,.dh,.modal-title,.dialog-head h2,h2,h3')?.textContent.replace(/×|✕/g,'').trim()||window.UnifiedPages?.pages[q.page]?.title||({customer:'客服管理',feedback:q.page==='feedback.user-data'?'用户数据查询':q.page==='feedback.faqs'?'常见问题配置':q.page==='agent-feedback'?'代理商反馈':'学校反馈',notice:mode==='edit'?'通知编辑':mode==='detail'?'通知详情':mode==='print'?'通知打印':'家校通知',help:q.screen==='sc-help'?'帮助与反馈':q.screen==='sc-fbdetail'?'反馈详情':'我的反馈'})[module]||document.title;
 const key=[role,module,q.page||q.screen,mode,n?.tab||'',n?.parentTab||'',n?.statsKind||'',tab,root?.querySelector('.cs-dh,.dh,.modal-title,.dialog-head h2,h2,h3')?.textContent||'',q.id||n?.id||''].join('/');return {q,module,role,mode,root:root||$('#feedback-native-host')||$('#cs-host')||$('#workspace')||$('.workspace')||$('.screen.active')||document.body,title,key,tab,n};}
function restore(){undo.reverse().forEach(fn=>fn());undo=[];scene='';}
function preview(id){restore();const c=ctx();if(id==='restore'){renderDemo();return}const actions=getConfig(c)?.actions||[];if(!actions.some(a=>a.id===id))return;scene=id;const body=c.root.querySelector('.cs-db,.db,.modal-body,.dialog-body,.hf-dialog-body')||c.root;const box=document.createElement('section');box.className='module-demo-result';box.setAttribute('role',/required|conflict|permission|submit|format/.test(id)?'alert':'status');
 let text={empty:'暂无数据。','no-match':'暂无符合筛选条件的记录。',loading:'正在加载，请稍候。',failed:'加载失败，请重试。',timeout:'加载超时，请重试。',permission:'当前访问权限已失效，请返回后重新核对。',gone:'当前记录不存在或已失效。',required:'请填写当前页面的必填内容。',conflict:'记录已更新，请重新核对后操作。',submit:'本次操作未完成，请稍后重试。',unknown:'提交结果尚未确认，请先核对处理结果。',format:'附件格式或大小不符合当前页面要求，请重新选择。',duplicate:'该操作已处理，请重新核对当前状态。'}[id];if(c.module==='feedback'&&id==='submit')text='请检查必填内容、字数和附件规则；当前输入保留，内容尚未提交。';if(c.module==='feedback'&&id==='failed')text=c.mode==='list'?'反馈列表查询失败或超时，请保留筛选条件后手动重试。':'反馈操作未完成，请核对记录和权限后再继续。';
 box.innerHTML='<b>'+escape(text||'当前内容暂不可用。')+'</b><button type="button" onclick="demoAction(\'restore\')">恢复默认</button>';
 if(['empty','no-match','loading','failed','timeout','permission','gone'].includes(id)){
  let targets=[...body.children].filter(x=>!x.matches('#demo-fab,#demo-pop,.module-demo-result')&&!x.contains($('#demo-pop')));if(['empty','no-match'].includes(id)){const tables=[...body.querySelectorAll('.tw,.cs-table-wrap,table,.pager,.cs-pager,.v5-pager,.feedback-list')];if(tables.length)targets=tables.filter(n=>!tables.some(t=>t!==n&&t.contains(n)));}
  for(const el of targets){const old=el.getAttribute('style');el.style.setProperty('display','none','important');undo.push(()=>old===null?el.removeAttribute('style'):el.setAttribute('style',old))}
 }
 body.prepend(box);undo.push(()=>box.remove());renderDemo();}
function currentFields(c){return [...new Set([...c.root.querySelectorAll('label,.cs-field>span,.fi>label,th,.form-label')].filter(visible).map(x=>x.textContent.trim()).filter(x=>x&&x.length<35))].slice(0,24).join('、')}
function getConfig(c){if(!c.module)return null;
 const sections=[],add=(title,text)=>sections.push({title,text});let intro='',actions=[];
 const A=(id,label)=>({id,label});const list=['list','search','faq-list'].includes(c.mode)&&!c.root.matches('.mask,.cs-mask');const editor=/create|edit|reply|follow|report|relay/.test(c.mode),confirm=c.mode==='confirm';
 if(c.module==='customer'){
 intro='在当前授权范围内维护客服资料、默认客服及学校关联；当前'+(c.role==='agent'?'代理商端':'运营端')+'操作以实际页面权限为准。';
 add('入口与返回','从客服菜单进入列表，查看、编辑、关联均针对所选客服。关闭弹窗回到原列表；菜单或页签重新进入时恢复初始查询和分页。');
 if(editor)add('资料与校验','姓名去两端空白后1—50字；联系电话仅支持数字、不限制位数，同一负责机构范围内不能与其他有效客服重复。工作时间只支持一组，至少选择一个星期，结束必须晚于开始；已建客服类型及归属不可修改。编辑读取原版本，提交前复验身份、权限和版本；失败保留输入。');
 if(/schools/.test(c.mode))add('学校选择','查询只筛选候选学校，选择与全选独立；全选/全不选只作用于当前筛选结果，跨组已选项保留，无结果禁用。一所学校可以关联多位专属客服。');
 if(/agents/.test(c.mode))add('代理商关联','按实际选择顺序保存代理商；取消后重选排在末尾。关联变化及仅重排均先确认，再按模块规则保存并记录原、新顺序。');
 if(/default/.test(c.mode)||list)add('默认客服与兜底','有学校专属客服时优先展示专属名单；没有专属时按所属负责机构的默认客服或已确认联系人兜底。平台默认必须存在；更换和删除按当前模块提交校验执行，不通过演示绕过。');
 if(confirm||/delete/.test(c.mode))add('确认与资格复验','取消返回原输入/选择；确认时复验当前对象、权限、关联与默认引用，不能因弹窗已打开就跳过保护。失败不删除原数据。');

 add('范围与失败','只读和失权状态禁用写操作；读取权限回收后不继续展示受保护内容。失效记录、加载失败与空结果分别提示，权限恢复不自动重放旧提交。');
 }else if(c.module==='feedback'){
 intro='用户反馈包含学校反馈和代理商反馈。学校反馈只处理当前代理商负责且采用代理模式的学校、教师、家长问题；代理商反馈只处理当前代理商本人或组织提交给运营的问题。';
 if(c.q.page==='feedback.user-data'){
 add('用户定位','按当前查询条件查找用户，再按稳定用户ID查看资料。同名或改名用户不得串联；资料按对应用户ID展示，缺少的字段不补造。');add('当前资料页签',c.tab?'当前页签：'+c.tab+'。按当前选中用户查询对应资料，没有匹配记录显示空态。':'基础信息、订单信息、退款信息、反馈信息分别读取当前用户关联资料，不混用其他账号记录。');
 }else if(c.q.page==='feedback.faqs')add('常见问题','按当前分类查看问题；新增或编辑标题最多30字、答案最多500字。删除前确认对象，保存时再次检查；取消不改变原记录。');
 else{
 const own=c.q.page==='agent-feedback';
 add('入口、范围与返回',own?'从用户反馈下的代理商反馈进入，只查看本人或当前代理组织有权查看的代理商自有记录；关闭弹窗回到原列表。':'从用户反馈下的学校反馈进入，只查看当前代理商负责学校且采用代理模式的学校、教师、家长反馈；直营模式记录由运营处理，不在此列表显示。关闭详情或回复弹窗回到原列表。');
 add('筛选、字段与排序',own?'按反馈类型、状态和反馈时间筛选；类型为功能建议或问题反馈。列表展示来源、反馈人、联系电话、区域、所属单位、类型、内容、首次反馈时间和状态；按最近更新时间从新到旧排序。查询失败保留筛选和当前页，无结果显示空态。':'所在地区选项取当前负责区域与负责学校所在地区的合集，所属学校随地区范围收窄；可按反馈人、联系电话、反馈类型和状态筛选。列表展示来源、反馈人、联系电话、区域、学校、类型、内容、首次反馈时间和状态；按最近更新时间从新到旧排序。查询失败保留筛选和当前页，无结果显示空态。');
 add('状态与可用操作',own?'代理商首问后状态为待回复，只能查看并等待运营答复；最近一条消息来自运营时状态为已回复，才显示追问。每条追问提交后回到待回复，双方按一问一答交替，不设轮次上限。':'待回复的学校、教师或家长来源反馈只显示回复；代理商成功答复后显示已回复并只提供查看。该记录仅能由代理商答复一次，不产生后续追问。查看不改变状态和排序。');
 add('详情、消息与附件','详情展示当前记录身份、来源、反馈人、状态、正文及附件。时间线最新消息在上，每条消息独立显示发送方、时间、正文和本条附件；平台端回复署名统一为平台客服，不显示客服姓名。图片单张无法打开时，其余正文和附件仍可用。已提交反馈及消息不可修改。');
 if(editor)add('字段与提交校验',own?(c.mode==='create'?'新增代理商反馈须选择功能建议或问题反馈，标题1—50字、正文1—200字；可添加JPEG、JPG、PNG图片，最多9张、单张不超过10MB。':'追问正文必填，限1—1000字；可添加JPEG、JPG、PNG图片，最多9张、单张不超过10MB。提交前复核最新一条消息来自运营。'):'回复正文必填，限1—1000字；可用快捷回复填入草稿，快捷回复不会直接发送。可添加JPEG、JPG、PNG图片，最多9张、单张不超过10MB。提交前复核代理商仍负责该学校、仍为代理模式且记录仍等待代理商答复。');
 add('自动通知与操作日志','学校来源反馈由代理商成功回复后，系统向原提交账号及来源端触发一次固定模板通知。代理商自有反馈由运营成功答复后通知代理商；每轮成功答复各触发一次。反馈列表没有手动通知或行内日志按钮；操作日志只读，统一从系统管理下的操作日志进入。通知仅记录触发，不展示送达、失败或已读状态，不自动重试。');
 add('权限、状态变化与异常','查询失败或超时保留筛选条件，不以旧数据冒充新结果；当前页失效时回到可用页并提示列表已更新。失去负责关系、转为直营、记录失效或账号无权时，阻止查看和提交，不显示其他学校或代理商资料。回复/追问表单打开后如记录状态、最新消息方向或权限变化，提交前再次校验并阻止重复或越权操作，保留草稿供核对。必填缺失、全空格、超字数、附件类型错误、超过9张、单张超过10MB或读取未完成时阻止提交并保留有效输入。请求结果不明时先核对记录和日志，不自动重复提交。');
 }
 add('返回与恢复','详情、回复、追问和确认窗口关闭后回到所属列表；详情返回保留原筛选、页码及滚动位置。菜单或页签重新进入时按主菜单规则重新加载。未提交的正文或附件离开前二次确认：继续编辑保留输入，确认离开才丢弃。');

 }else if(c.module==='notice'){
 const n=c.n||{},role=n.role||c.role;intro='家校通知当前'+({teacher:'教师',parent:'家长',school:'学校',agent:'代理商',ops:'运营'}[role]||'')+'视图；当前页面和弹窗只展示该角色与通知对象允许的操作。';
 add('入口与对象','从家校通知菜单或小程序通知入口进入；学校、通知ID及当前身份共同确定可见对象。合法子页面与弹窗由已登记参数恢复；无权或对象失效不能替换成其他通知。');
 if(role==='parent'){
 add('孩子与通知',(n.parentTab==='todo'?'当前“待办”仅显示当前孩子尚未完成处理的通知；已完成的通知不在待办中。':'当前“全部通知”展示当前孩子接收范围内的通知，包含未读、待确认/签字和已完成记录。')+'切换孩子需重新核对接收对象。阅读、确认及签名按当前通知要求展示；已处理不能重复提交，无需确认的通知不增加确认流程。');add('内容与附件','按发布快照查看文本、图片、视频、音频、链接和附件。预览失败只提示对应资源，不伪造已读或确认成功。');
 }else{
 add('列表和当前Tab',(n.tab?'当前Tab：'+n.tab+'。':'')+'查询与状态筛选只作用于当前授权学校的通知；空结果和加载失败分开显示。编辑、查看、删除、打印、阅读统计按当前身份和状态控制，当前业务没有撤回操作。');
 if(n.page==='edit')add('编辑与发布','标题必填且最多40字；至少有一段有效内容，正文文本合计最多5000字、图片最多60张。链接须以http://或https://开头，图片/视频/音频须已选素材。附件最多10个、单个不超过20MB。接收对象须有效且在管理范围内；查收方式为只需阅读查看、需确认收到、需签字确认。代发使用学校名义，教师须有对应授权。保存/发布前复验权限、素材与版本；失败保留输入，不静默覆盖。');
 add('查看与统计','详情关联当前通知；阅读与确认统计以同一通知及当前筛选对象计算。打印和预览不代替发布，不把模拟阅读数据说成真实家长回执。');
 if(confirm||/delete/.test(c.mode))add('删除确认','删除按当前角色、状态和关联要求复验；取消不改变原通知。删除后的隐藏按现有规则展示，不额外创造撤回业务。');
 }
 add('返回与异常','关闭资源预览或业务弹窗回到原通知上下文；返回列表不重复创建列表。只恢复合法视图，URL不触发发布、删除或签收等写操作。');
 }else if(c.module==='help'){
 intro='当前'+(c.role==='teacher'?'教师':'家长')+'小程序的帮助、客服及反馈功能；沿用当前完整小程序的角色和页面规则。';
 add('客服电话','学校只配置一人时，帮助页展示客服电话与工作时间；配置多人时进入名单选择拨打。多客服按负责机构分组展示，取号由当前角色与学校关系决定；原型拨号只做本地演示，不拨打真实号码。');
 add('常见问题','教师与家长沿用当前Web配置的离线回显；问题默认收起，点击展开当前答案，不改变页面导航栈。');
 add('我的反馈','记录按当前角色隔离，状态筛选在同一页切换；点击记录查看对应全文、截图和回复进展，无匹配显示空态。新增反馈提交后回到当前反馈列表，当前HTML示例记录刷新重置。');
 add('提交反馈与校验','问题类型为功能建议、问题反馈；正文必填，截图选填，最多5张、每张10MB；读取未完成不得提交。详情不可用或提交失败时保留可恢复上下文，不把本地模拟提交当真实受理。');
 }
 const fields=currentFields(c);if(fields)add('当前区域与字段','当前界面包含：'+fields+'。字段顺序、默认值和只读状态以实际页面为准；演示说明不会替换业务字段或更改其权限。');
 add('演示边界与恢复','本页场景只改变当前页面的本地演示显示，不调用真实通知、拨号或写入服务。互斥场景替换；“恢复默认”恢复原DOM及输入，离开当前上下文或刷新恢复正常。共享业务示例仍遵循各模块自身的存储规则。');
 if(c.module==='feedback')actions=list?[A('no-match','预览 · 无匹配'),A('failed','预览 · 查询异常'),A('permission','预览 · 无权限'),A('gone','预览 · 记录失效')]:editor?[A('submit','预览 · 提交校验'),A('permission','预览 · 无权限'),A('conflict','预览 · 记录已变化'),A('failed','预览 · 提交失败')]:[A('permission','预览 · 无权限'),A('gone','预览 · 记录失效'),A('failed','预览 · 加载异常')];else if(c.module!=='help')actions=list?[A('empty','预览 · 无数据'),A('no-match','预览 · 无匹配'),A('loading','预览 · 加载中'),A('failed','预览 · 加载失败'),A('timeout','预览 · 加载超时'),A('permission','预览 · 无权限')]:[A('failed','预览 · 加载失败'),A('permission','预览 · 权限失效'),A('gone','预览 · 对象失效'),...(editor?[A('required','预览 · 必填校验')]:[]),...(editor||confirm?[A('conflict','预览 · 版本冲突'),A('submit','预览 · 提交失败'),A('unknown','预览 · 结果未知')]:[]),...(c.module==='notice'&&c.n?.page==='edit'?[A('format','预览 · 附件校验')]:[])];
 if(actions.length)actions.push(A('restore','恢复默认'));
 return {key:c.key+(scene?'/'+scene:''),title:c.title,intro,sections,actions};}
window.getModuleDemo=()=>getConfig(ctx());window.demoAction=id=>{if(scene&&id==='restore'){restore();renderDemo();return}preview(id)};
function renderDemo(){if(mirrorOnly)return;const c=getConfig(ctx());if(!c)return;demoPanelRender({key:c.key,t:escape(c.title),d:escape(c.intro)+'\n'+c.sections.map(s=>'【'+escape(s.title)+'】'+escape(s.text)).join('\n'),acts:c.actions.map(a=>'<button type="button" onclick="demoAction(\''+a.id+'\')">'+escape(a.label)+(scene===a.id?' ✓':'')+'</button>').join(''),gen:''})}
function ensure(){if(mini&&!isNotice)return;if($('#demo-pop'))return;const b=document.createElement('div');b.id='demo-fab';b.innerHTML='<button type="button" class="module-demo-entry" onclick="toggleDemo()">演示说明</button><aside id="demo-pop" class="demo-pop" aria-label="演示说明"></aside>';document.body.append(b)}
function fitBusinessChrome(c){const pane=$('#demo-pop');if(!pane?.classList.contains('show')||mini||!c.root.matches('.mask,.cs-mask,.v5-mask,.dialog-mask'))return;const h=c.root.querySelector('.dh,.cs-dh,.dialog-head'),f=c.root.querySelector('.df,.cs-df,.dialog-foot');const min=h?h.getBoundingClientRect().bottom+8:12,max=f?f.getBoundingClientRect().top-8:innerHeight-12;const top=Math.max(min,Math.min(pane.getBoundingClientRect().top,max-120));pane.style.top=top+'px';pane.style.maxHeight=Math.max(80,max-top)+'px';}
function contentBridge(){if(parent===window)return;let previous='';function report(){if(window.NoticeDemo)return;const q=Object.fromEntries(new URLSearchParams(location.search));const key=location.search;if(key!==previous){previous=key;parent.postMessage({channel:'zxh-content-v1',type:'route',notice:false,params:q},location.origin)}}
 function requestLeave(fn){if(window.CSUI?.dirty){CSUI.requestLeave(fn);return}if(window.FeedbackWebV5?.U.dirty){FeedbackWebV5.requestLeave(fn);return}if(window.SystemFieldsPage?.isDirty?.()){SystemFieldsPage.requestLeave(fn);return}if(window.NoticeDemo?.context?.dirty){NoticeDemo.requestLeave(fn);return}fn()}
 window.UnifiedContent={requestLeave};const started=Date.now();function ready(){const region=$('#cs-host')||$('#feedback-native-host')||$('#workspace')||$('.workspace')||$('.content .card')||$('#app');const shadow=[...document.querySelectorAll('*')].some(el=>el.shadowRoot?.querySelector('main,table,form')?.textContent.trim());const nested=[...document.querySelectorAll('iframe')].some(frame=>{try{const doc=frame.contentDocument;return !!(doc?.body?.children.length&&doc.body.textContent.trim())}catch{return false}});if(shadow||region&&region.children.length&&(region.textContent.trim()||nested)){document.body.dataset.unifiedReady='true';parent.postMessage({channel:'zxh-content-v1',type:'ready'},location.origin);return}if(Date.now()-started<7000){setTimeout(ready,80);return}parent.postMessage({channel:'zxh-content-v1',type:'error',message:'功能页面没有显示有效内容，请重试。'},location.origin)}ready();setInterval(report,300);
 if(new URLSearchParams(location.search).get('content')==='1'&&window.QueryRouter){const write=QueryRouter.write;QueryRouter.write=(q)=>write({...q,content:'1'},true);}
}
function boot(){if(!mirrorOnly){ensure();if(!mini||isNotice){window.renderDemo=renderDemo;interval=setInterval(()=>{const c=ctx();if(!c.module){$('#demo-fab')?.setAttribute('hidden','');return}$('#demo-fab')?.removeAttribute('hidden');if(last&&last!==c.key)restore();if(last!==c.key){last=c.key;if($('#demo-pop')?.classList.contains('show')){renderDemo();if(c.root.matches('.mask,.cs-mask,.dialog-mask')&&!$('#demo-pop').classList.contains('dp-mini'))dpMinimize()}}fitBusinessChrome(c)},250);renderDemo()}}
 if(new URLSearchParams(location.search).get('content')==='1')document.body.classList.add('unified-content');contentBridge();}
document.addEventListener('click',e=>{if(!scene||e.target.closest('#demo-pop,.module-demo-result'))return;const el=e.target.closest('[data-cs],[data-v5],[data-action]');if(el&&/save|submit|confirm-yes|publish|delete-yes|send-notice/.test(el.dataset.cs||el.dataset.v5||el.dataset.action||'')){e.preventDefault();e.stopImmediatePropagation();preview('submit')}},true);
addEventListener('keydown',e=>{if(e.key==='Escape'&&$$('.mask,.cs-mask,.v5-mask,.modal-backdrop,.modal-overlay,.dialog-mask').some(visible))e.businessLayer=true},true);
addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)&&e.target.matches('#demo-pop .dp-sh,#dp-all,#demo-pop .dp-more')){e.preventDefault();e.target.click();return}if(e.key!=='Escape'||e.businessLayer||!$('#demo-pop')?.classList.contains('show'))return;e.preventDefault();closeDemo(1)});
addEventListener('pagehide',()=>{clearInterval(interval);restore()});
document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.ctrlKey||e.metaKey||!new URLSearchParams(location.search).has('content'))return;const u=new URL(a.href,location.href);if(u.origin===location.origin&&u.pathname===location.pathname&&u.searchParams.has('page')){e.preventDefault();e.stopImmediatePropagation();const q=Object.fromEntries(u.searchParams),page=q.page;delete q.page;QueryRouter.navigate(page,q)}},true);
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();


