/* 当前用户附图的监管编辑冻结，及文档明示的后续编辑只读约束。 */
(()=>{
const B=window.ZxhBase,locked=['customer','contract','type','region','username'];
function normalize(){const C=B.context;if(state.active==='regulatoryUserUpdate'&&C.kind==='regulatory'&&C.index!==null){for(const key of ['customer','contract','type','region0','region1','region2','username']){const el=document.querySelector('.card [data-field="'+key+'"]');if(el)el.disabled=true;}window.ZxhSearchCombo?.enhance();}}
const previousRender=render;render=function(){previousRender();normalize()};
const previousEntity=window.ZxhDocValidators.entity;window.ZxhDocValidators.entity=function(kind,d,old){if(kind==='regulatory'){if(!String(d.phone||'').trim())return '此项必填：手机号';if(!/^1\d{10}$/.test(d.phone))return '手机号格式错误';if(old&&locked.some(key=>String(d[key]??'')!==String(old[key]??'')))return '所属客户、关联合同、监管类型、管辖区域、监管用户名不可修改';}return previousEntity(kind,d,old);};
const previousShareSave=shareSave;shareSave=function(){const original=shares[UX.shareIndex],draft=UX.shareDraft;if(!original||!draft)return error('请选择分享配置');if(draft.name!==original.name||draft.end!==original.end)return error('场景名称和分享发起端不可修改');return previousShareSave();};
const previousHolidaySave=holidaySave;holidaySave=function(){const current=holidayYears[UX.holidayYear||0]?.days[UX.holidayDay];if(!current||current.start<=today())return error('已过期和当前日期不可编辑');return previousHolidaySave();};
const previousDialog=openDialog;openDialog=function(key){return previousDialog(key)};
window.ZxhEditLocks={locked,normalize};normalize();
})();
