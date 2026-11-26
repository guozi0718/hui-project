/* Shared adapter: trusted configurations/actions; no arbitrary script from URLs or messages. */
(()=>{'use strict';if(document.body.classList.contains('unified-outer'))return;const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const mini=!!$('.phone'),isNotice=!!window.NoticeDemo;let mirrorOnly=false;try{mirrorOnly=isNotice&&parent!==window&&!!parent.document.querySelector('.phone')}catch{}let undo=[],scene='',last='',interval,noticeState=null;
const visible=n=>!!n?.isConnected&&n.getClientRects().length>0&&getComputedStyle(n).visibility!=='hidden'&&getComputedStyle(n).display!=='none';
function ctx(){const q=Object.fromEntries(new URLSearchParams(location.search)),masks=$$('.mask,.cs-mask,.v5-mask,#hf-overlay,.modal-backdrop,.modal-overlay,.dialog-mask').filter(visible),root=masks.at(-1);const n=window.NoticeDemo?.context||noticeState;
 let module=isNotice?'notice':/customer-service|^cs$/.test(q.page||'')?'customer':/feedback|school-feedback|agent-feedback/.test(q.page||'')?'feedback':null;
 if(mini&&!isNotice){const active=$$('.screen.active,.screen.on,.screen.show').find(visible)||$$('.screen').find(visible),id=active?.id||location.hash.slice(1);if(/^sc-(help|fblist|fbdetail|cs)/.test(id))module='help';else if(id==='sc-family-notice')module='embedded-notice';q.screen=id;}
 const role=document.body.dataset.end||window.ZXH_HELP_ROLE||n?.role||'enterprise';let mode=q.dialog||q.view||n?.page||'list';if(root)mode=/确认|删除|放弃/.test(root.querySelector('.cs-dh,.dh,h2,h3,.modal-title')?.textContent||'')?'confirm':q.dialog||n?.modal||'detail';
 const tab=$$('[role=tab][aria-selected=true],.v5-tab.on,.v5-tabs .active,.tab-btn.active,.subtab.active,.hf-filter.on').filter(visible).map(n=>n.textContent.trim()).join(' / ');
 const title=root?.querySelector('.cs-dh,.dh,.modal-title,.dialog-head h2,h2,h3')?.textContent.replace(/×|✕/g,'').trim()||window.UnifiedPages?.pages[q.page]?.title||({customer:'客服管理',feedback:q.page==='feedback.user-data'?'用户数据查询':q.page==='feedback.faqs'?'常见问题配置':'问题反馈',notice:mode==='edit'?'通知编辑':mode==='detail'?'通知详情':mode==='print'?'通知打印':'家校通知',help:q.screen==='sc-help'?'帮助与反馈':q.screen==='sc-fbdetail'?'反馈详情':'我的反馈'})[module]||document.title;
 const key=[role,module,q.page||q.screen,mode,n?.tab||'',n?.parentTab||'',n?.statsKind||'',tab,root?.querySelector('.cs-dh,.dh,.modal-title,.dialog-head h2,h2,h3')?.textContent||'',q.id||n?.id||''].join('/');return {q,module,role,mode,root:root||$('#feedback-native-host')||$('#cs-host')||$('#workspace')||$('.workspace')||$('.screen.active')||document.body,title,key,tab,n};}
function restore(){undo.reverse().forEach(fn=>fn());undo=[];scene='';}
function preview(id){restore();const c=ctx();if(id==='restore'){renderDemo();return}const actions=getConfig(c)?.actions||[];if(!actions.some(a=>a.id===id))return;scene=id;const body=c.root.querySelector('.cs-db,.db,.modal-body,.dialog-body,.hf-dialog-body')||c.root;const box=document.createElement('section');box.className='module-demo-result';box.setAttribute('role',/required|conflict|permission|submit|format/.test(id)?'alert':'status');
 const text={empty:'暂无数据。','no-match':'暂无符合筛选条件的记录。',loading:'正在加载，请稍候。',failed:'加载失败，请重试。',timeout:'加载超时，请重试。',permission:'当前访问权限已失效，请返回后重新核对。',gone:'当前记录不存在或已失效。',required:'请填写当前页面的必填内容。',conflict:'记录已更新，请重新核对后操作。',submit:'本次操作未完成，请稍后重试。',unknown:'提交结果尚未确认，请先核对处理结果。',format:'附件格式或大小不符合当前页面要求，请重新选择。',duplicate:'该操作已处理，请重新核对当前状态。','fb-required':'回复或问题内容不能为空；本次未提交，请补齐必填内容。','fb-permission':'当前账号无权查看或处理该记录，受保护内容不会展示。','fb-conflict':'记录已发生变化，本次提交被阻止，草稿仍保留，请重新核对。','fb-query':'反馈列表查询失败，筛选条件保持不变，请重新查询。'}[id];
 box.innerHTML='<b>'+escape(text||'当前内容暂不可用。')+'</b><button type="button" onclick="demoAction(\'restore\')">恢复默认</button>';
 if(['empty','no-match','loading','failed','timeout','permission','gone','fb-permission','fb-query'].includes(id)){
  let targets=[...body.children].filter(x=>!x.matches('#demo-fab,#demo-pop,.module-demo-result')&&!x.contains($('#demo-pop')));if(['empty','no-match'].includes(id)){const tables=[...body.querySelectorAll('.tw,.cs-table-wrap,table,.pager,.cs-pager,.v5-pager,.feedback-list')];if(tables.length)targets=tables.filter(n=>!tables.some(t=>t!==n&&t.contains(n)));}
  for(const el of targets){const old=el.getAttribute('style');el.style.setProperty('display','none','important');undo.push(()=>old===null?el.removeAttribute('style'):el.setAttribute('style',old))}
 }
 body.prepend(box);undo.push(()=>box.remove());renderDemo();}
function currentFields(c){return [...new Set([...c.root.querySelectorAll('label,.cs-field>span,.fi>label,th,.form-label')].filter(visible).map(x=>x.textContent.trim()).filter(x=>x&&x.length<35))].slice(0,24).join('、')}
function getConfig(c){if(!c.module)return null;
 const sections=[],add=(title,text)=>sections.push({title,text});let intro='',actions=[];
 const A=(id,label)=>({id,label});const list=['list','search','faq-list'].includes(c.mode)&&!c.root.matches('.mask,.cs-mask');const editor=/create|edit|reply|follow/.test(c.mode),confirm=c.mode==='confirm';
 if(c.module==='customer'){
 intro='在当前授权范围内维护客服资料、默认客服及学校关联；当前'+(c.role==='agent'?'代理商端':'运营端')+'操作以实际页面权限为准。';
 add('入口与返回','从客服菜单进入列表，查看、编辑、关联和日志均针对所选客服。关闭弹窗回到原列表；菜单或页签重新进入时恢复初始查询和分页。');
 if(editor)add('资料与校验','姓名去两端空白后1—30字；联系电话只支持1—11位数字，同一负责机构范围内不能与其他有效客服重复。工作时间只支持一组，至少选择一个星期，结束必须晚于开始；已建客服类型及归属不可修改。编辑读取原版本，提交前复验身份、权限和版本；失败保留输入。');
 if(/schools/.test(c.mode))add('学校选择','查询只筛选候选学校，选择与全选独立；全选/全不选只作用于当前筛选结果，跨组已选项保留，无结果禁用。一所学校可以关联多位专属客服。');
 if(/agents/.test(c.mode))add('代理商关联','按实际选择顺序保存代理商；取消后重选排在末尾。关联变化及仅重排均先确认，再按模块规则保存并记录原、新顺序。');
 if(/default/.test(c.mode)||list)add('默认客服与兜底','有学校专属客服时优先展示专属名单；没有专属时按所属负责机构的默认客服或已确认联系人兜底。平台默认必须存在；更换和删除按当前模块提交校验执行，不通过演示绕过。');
 if(confirm||/delete/.test(c.mode))add('确认与资格复验','取消返回原输入/选择；确认时复验当前对象、权限、关联与默认引用，不能因弹窗已打开就跳过保护。失败不删除原数据。');
 if(/logs/.test(c.mode))add('日志','只读展示当前授权范围内的时间、操作模块、操作内容和操作人名称快照；缺失字段不反查当前姓名补造历史。');
 add('范围与失败','只读和失权状态禁用写操作；读取权限回收后不继续展示受保护内容。失效记录、加载失败与空结果分别提示，权限恢复不自动重放旧提交。');
 }else if(c.module==='feedback'){
 intro='查看和处理当前角色、单位授权范围内的反馈；列表、详情和每条沟通消息保持同一记录关联。';
 if(c.q.page==='feedback.user-data'){
 add('用户定位','按当前查询条件查找用户，再按稳定用户ID查看资料。同名、改名用户不得串联；姓名等历史资料按记录快照展示，缺字段不补造。');add('当前资料页签',c.tab?'当前页签：'+c.tab+'。按当前选中用户查询对应资料，没有匹配记录显示空态。':'基础信息、订单信息、退款信息、反馈信息分别读取当前用户关联资料，不混用其他账号记录。');
 }else if(c.q.page==='feedback.faqs')add('常见问题','按当前分类查看问题；新增/编辑标题最多30字、答案最多500字。删除先确认对象，提交时复验，取消不改变原记录。');
 else{
 add('处理路线','学校端、教师端、家长端反馈按学校受理模式流转：代理模式由代理商处理，直营模式由运营后台处理。代理商自己提交的反馈由运营后台处理。');add('来源样例与字段回写','来源样例统一标记学校端、教师端、家长端。学校端反馈人员均归属于当前学校，所在区域和所属单位信息不在学校端筛选项、列表或详情中展示；教师反馈的学校归属取提交时任职学校，家长反馈关联提交时对应学生快照。代理商自有反馈的单位及地区信息仅按对应端规则展示。样例仅用于页面评审，不扩大真实账号的数据权限。');
 add('问答规则与状态','学校、老师、家长来源的每条反馈只允许一条处理回复，回复后本记录结束问答。代理商自有反馈由运营后台处理，可不限轮次往返；必须严格按“一问、一答、一问、一答”交替，代理商只有在收到运营回复后才能再次提问。待回复表示轮到处理方，已回复表示轮到反馈方。');
 add('列表排序与时间线','列表按记录最后更新时间从新到旧排列；新建问题、处理方回复或代理商后续提问都会更新记录时间。详情消息按发生时间从新到旧展示。');
 if(editor)add('字段与附件',c.mode==='create'?'类型必选；标题必填1—50字；正文必填1—200字；附件选填，仅JPEG/JPG/PNG，最多9张，每张不超过10MB。反馈来源和处理路线由当前角色及学校受理模式确定。':'问题或回复正文必填，最多1000字；附件选填，仅JPEG/JPG/PNG，最多9张，每张不超过10MB。问题、回复提交后均不可修改。');
 add('操作按钮与通知','处理方在待回复记录上可查看、回复；回复后可查看并按需发起通知。反馈人侧待回复时查看；只有代理商自有反馈收到运营回复后才可继续提问。通知是单独的手动下发操作，不展示送达结果、不自动重试，也不改变问答状态。所有已提交的问题和回复保持原样。');
 add('异常处理','处理模式或接收对象不匹配时，不允许越权查看或回复；非当前等待方提交问题/回复、重复提交回复、代理商未收到运营答复就再次提问时，阻止提交并保留当前输入。正文为空、仅空格或超过字数上限时阻止提交；附件格式错误、超过9张或单张超过10MB时阻止提交并提示原因。提交过程中记录已变化时提示刷新查看，避免覆盖其他人的新消息。');
 add('通知结果说明','确认通知后仅记录发起操作；短信/小程序实际送达、失败状态均不在本期页面展示，不自动重试。');
 }}else if(c.module==='notice'){
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
 add('演示边界与恢复',c.module==='feedback'?'异常模拟开关互斥：提交校验、无权限、记录已变化、查询异常一次只显示一种；切换即替换提示，恢复默认后回到列表。模拟只改变本地演示显示，不提交或改写反馈记录；离开页面或刷新恢复正常。来源样例仅为评审覆盖，不扩大真实数据权限。':'本页场景只改变当前页面的本地演示显示，不调用真实通知、拨号或写入服务。互斥场景替换；“恢复默认”恢复原DOM及输入，离开当前上下文或刷新恢复正常。共享业务示例仍遵循各模块自身的存储规则。');
 if(c.module!=='help'){if(list){actions=[A('empty','预览 · 无数据'),A('no-match','预览 · 无匹配'),A('loading','预览 · 加载中'),A('failed',c.module==='feedback'?'异常模拟开关 · 查询异常':'预览 · 加载失败'),A('timeout','预览 · 加载超时'),A('permission',c.module==='feedback'?'异常模拟开关 · 无权限':'预览 · 无权限')];if(c.module==='feedback')actions.unshift(A('fb-required','异常模拟开关 · 提交校验'),A('fb-conflict','异常模拟开关 · 记录已变化'));}else{actions=[A('failed','预览 · 加载失败'),A('permission','预览 · 权限失效'),A('gone','预览 · 对象失效'),...(editor?[A('required',c.module==='feedback'?'异常模拟开关 · 提交校验':'预览 · 必填校验')]:[]),...(editor||confirm?[A('conflict',c.module==='feedback'?'异常模拟开关 · 记录已变化':'预览 · 版本冲突'),A('submit','预览 · 提交失败'),A('unknown','预览 · 结果未知')]:[]),...((c.module==='feedback'&&/create|follow|report/.test(c.mode))||(c.module==='notice'&&c.n?.page==='edit')?[A('format','预览 · 附件校验')]:[])];if(c.module==='feedback')actions.push(A('fb-permission','异常模拟开关 · 无权限'),A('fb-query','异常模拟开关 · 查询异常'));}}
 if(actions.length)actions.push(A('restore','恢复默认'));
 return {key:c.key+(scene?'/'+scene:''),title:c.title,intro,sections,actions};}
window.getModuleDemo=()=>getConfig(ctx());window.demoAction=id=>{if(scene&&id==='restore'){restore();renderDemo();return}preview(id)};
function renderDemo(){if(mirrorOnly)return;const c=getConfig(ctx());if(!c)return;demoPanelRender({key:c.key,t:escape(c.title),d:escape(c.intro)+'\n'+c.sections.map(s=>'【'+escape(s.title)+'】'+escape(s.text)).join('\n'),acts:c.actions.map(a=>'<button type="button" onclick="demoAction(\''+a.id+'\')">'+escape(a.label)+(scene===a.id?' ✓':'')+'</button>').join(''),gen:''})}
function ensure(){if(mini&&!isNotice)return;if($('#demo-pop'))return;const b=document.createElement('div');b.id='demo-fab';b.innerHTML='<button type="button" class="module-demo-entry" onclick="toggleDemo()">演示说明</button><aside id="demo-pop" class="demo-pop" aria-label="演示说明"></aside>';document.body.append(b)}
function fitBusinessChrome(c){const pane=$('#demo-pop');if(!pane?.classList.contains('show')||mini||!c.root.matches('.mask,.cs-mask,.v5-mask,.dialog-mask'))return;const h=c.root.querySelector('.dh,.cs-dh,.dialog-head'),f=c.root.querySelector('.df,.cs-df,.dialog-foot');const min=h?h.getBoundingClientRect().bottom+8:12,max=f?f.getBoundingClientRect().top-8:innerHeight-12;const top=Math.max(min,Math.min(pane.getBoundingClientRect().top,max-120));pane.style.top=top+'px';pane.style.maxHeight=Math.max(80,max-top)+'px';}
function contentBridge(){if(parent===window)return;let previous='';function report(){if(window.NoticeDemo)return;const q=Object.fromEntries(new URLSearchParams(location.search));const key=location.search;if(key!==previous){previous=key;parent.postMessage({channel:'zxh-content-v1',type:'route',notice:false,params:q},location.origin)}}
 function requestLeave(fn){if(window.CSUI?.dirty){CSUI.requestLeave(fn);return}if(window.FeedbackWebV5?.U.dirty){FeedbackWebV5.requestLeave(fn);return}if(window.SystemFieldsPage?.isDirty?.()){SystemFieldsPage.requestLeave(fn);return}if(window.NoticeDemo?.context?.dirty){NoticeDemo.requestLeave(fn);return}fn()}
 window.UnifiedContent={requestLeave};const started=Date.now();function ready(){const region=$('#cs-host')||$('#feedback-native-host')||$('#workspace')||$('.workspace')||$('.content .card')||$('#app');const shadow=[...document.querySelectorAll('*')].some(el=>el.shadowRoot?.querySelector('main,table,form')?.textContent.trim());if(shadow||region&&region.textContent.trim()&&region.children.length){document.body.dataset.unifiedReady='true';parent.postMessage({channel:'zxh-content-v1',type:'ready'},location.origin);return}if(Date.now()-started<7000){setTimeout(ready,80);return}parent.postMessage({channel:'zxh-content-v1',type:'error',message:'功能页面没有显示有效内容，请重试。'},location.origin)}ready();setInterval(report,300);
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
