(()=>{'use strict';
const old=window.renderDemo;let key='';
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function frame(id){const f=document.getElementById(id||'notification-frame');try{return f?.contentWindow?.getModuleDemo?f:null}catch{return null}}
function notice(){const mini=document.getElementById('sc-notification');if(mini&&mini.classList.contains('show')&&getComputedStyle(mini).display!=='none')return frame('notification-frame');const el=document.getElementById('sc-family-notice');return el&&el.getClientRects().length&&getComputedStyle(el).display!=='none'?frame('baseline-notice-frame'):null}
function helpModal(){const overlay=document.getElementById('hf-overlay');return overlay&&!overlay.hidden&&getComputedStyle(overlay).display!=='none'?document.getElementById('hf-dialog-title')?.textContent:null}
function feedbackGuide(role){
 const common='【问答规则】每条反馈由用户提交一次，受理方回复一次。新记录状态为“待回复”，收到回复后变为“已回复”，本条问答结束。后续问题请新增反馈。提交后正文和附件只读。正文最多500字，最多9张图片，每张不超过10MB。';
 const teacher='【教师提交】反馈类型上方显示只读基本信息卡，回显当前教师角色任职学校和教师名称。提交时核对教师身份、学校任职关系及该校反馈提交权限。教师列表只显示本人当前教师角色提交的记录，同校其他教师记录不可见。';
 const parent='【家长提交】反馈类型上方显示只读基本信息卡，回显当前选中孩子的学校和姓名。提交时复核家长身份、所选孩子关系及孩子状态；沿用现有规则，仅“在读”状态允许新建，毕业、离校或状态无法确认时阻止提交。Web未列明具体状态字典时不另造状态名称。家长列表显示本人当前家长角色提交的记录，不按当前选中孩子筛选；同家庭其他家长记录不可见。';
 return (role==='teacher'?teacher:parent)+common+'\n【取消与异常】取消不新增反馈；内容为空或超过字数上限时保留表单内容并提示。身份或关联信息缺失时不允许提交。此原型使用本地演示数据，未接入真实登录、权限和服务端保存，刷新后新增记录会重置。';
}
function detailGuide(){return '反馈编号、反馈类型、状态、完整正文和附件均可查看。沟通记录展示首个“提交”动作及受理方至多一条“回复”，按时间倒序排列，最新消息在上，消息时间靠右。待回复时等待回复；收到一次回复后状态为已回复，本条记录结束。详情只读，不提供修改、删除、追问或撤回；后续问题请从列表新增反馈。详情不展示学校或学生快照。'}
window.renderDemo=function(){
 const f=notice(),title=helpModal();
 if(f){const cfg=f.contentWindow.getModuleDemo();if(cfg){const actions=cfg.actions.map((a,i)=>'<button type="button" data-notice-action="'+i+'">'+escape(a.label)+'</button>').join('');demoPanelRender({key:cfg.key,t:escape(cfg.title),d:escape(cfg.intro)+'\n'+cfg.sections.map(s=>'【'+escape(s.title)+'】'+escape(s.text)).join('\n'),acts:actions,gen:''});document.querySelectorAll('#demo-pop [data-notice-action]').forEach(btn=>btn.addEventListener('click',()=>{const action=cfg.actions[Number(btn.dataset.noticeAction)];if(action)noticeDemoAction(action.id)},{once:true}));return}}
 if(title){const role=window.ZXH_HELP_ROLE||'',kind=title==='提交反馈'||title==='反馈建议'?'提交反馈':title==='反馈截图'?'反馈附件原图':title;const copy={'提交反馈':feedbackGuide(role),'反馈详情':detailGuide(),'反馈附件原图':'只预览当前反馈图片。关闭后返回当前详情。','联系客服':'展示当前学校配置的客服联系人及拨打入口；离线演示不会实际拨出电话。'}[kind]||'帮助与反馈页面说明。关闭后返回当前页面。';demoPanelRender({key:'help-modal/'+role+'/'+kind,t:escape(title),d:copy,acts:'',gen:''});return}
 old?.()
};
window.noticeDemoAction=id=>{const f=notice();if(f)f.contentWindow.demoAction(id);renderDemo()};
setInterval(()=>{const f=notice(),cfg=f?.contentWindow.getModuleDemo(),next=cfg?.key||helpModal()||location.hash;if(next!==key){key=next;if(document.getElementById('demo-pop')?.classList.contains('show'))renderDemo()}},250);
document.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)&&e.target.matches('#demo-pop .dp-sh,#dp-all,#demo-pop .dp-more')){e.preventDefault();e.target.click()}});
})();