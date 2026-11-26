/* FAQ query restoration: restore a view only, never submit a deletion or save. */
(()=>{'use strict';if(document.body.dataset.end!=='enterprise')return;let restoring=false;const oldAction=action,oldClose=closeLayer,oldRender=EndpointRouter.render.bind(EndpointRouter);
const page=()=>QueryRouter.parameters().page==='feedback.faqs';
function route(kind,id){if(restoring||!page())return;const q=QueryRouter.parameters();delete q.dialog;delete q.id;delete q.view;if(kind)q.dialog=kind;if(id!=null)q.id='faq-'+id;QueryRouter.write(q);}
function index(q){if(!/^faq-\d+$/.test(q.id||''))throw Error('常见问题记录参数无效');const i=+q.id.slice(4);if(!faqs[i]||faqs[i].deleted)throw Error('常见问题不存在或已删除');return i;}
action=function(name){const result=oldAction.apply(this,arguments);if(page()){const [a,id]=String(name).split(':');if(a==='faqNew')route('faq-create');else if(a==='faqEdit')route('faq-edit',+id);else if(a==='faqDelete')route('faq-delete',+id)}return result;};
closeLayer=function(){const result=oldClose.apply(this,arguments);if(page()&&!restoring&&/^faq-/.test(QueryRouter.parameters().dialog||''))route(null);return result;};
EndpointRouter.render=function(q){restoring=true;try{if(q.page==='feedback.faqs')oldClose();const result=oldRender(q);if(q.page==='feedback.faqs'&&q.dialog){if(q.dialog==='faq-create'){if(q.id)throw Error('新增问题不接受记录参数');faqDialog();}else if(q.dialog==='faq-edit')faqDialog(index(q));else if(q.dialog==='faq-delete')oldAction('faqDelete:'+index(q));else throw Error('常见问题弹窗参数无效');}return result;}finally{restoring=false}};
})();
