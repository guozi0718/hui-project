/* 本轮八条批注的布局与保存复核；原有页面/菜单不增加。 */
(() => {
const G=window.ZxhRegions,base=window.ZxhBase;
const beforeEntity=window.ZxhDocValidators.entity;
window.ZxhDocValidators.entity=function(kind,d,old){
 const existing=beforeEntity(kind,d,old);if(existing)return existing;
 if(kind==='customer'&&!G.valid(d.region,G.depth(d.type)))return '请选择客户类型对应的完整区域';
 if(kind==='contract'){
  const client=d.customer===''?null:base.models.customer[+d.customer];if(!client)return '请选择所属客户';
  const [p,c]=G.parts(client.region);
  if(client.type==='省厅客户'&&!['全部',...G.cities(p).map(x=>x.name)].includes(d.cityRange))return '请选择该省的生效地市';
  if(client.type==='地市客户'){
   const values=['全部',...G.counties(p,c).map(x=>x.name)],selected=d.counties||[];
   if(!selected.length||selected.some(x=>!values.includes(x))||new Set(selected).size!==selected.length||selected.includes('全部')&&selected.length!==1)return '请选择当前地市的生效区县，全部与具体区县互斥';
  }
 }
 return '';
};
const beforeRender=render;render=function(){beforeRender();const card=document.querySelector('.content .card'),header=card?.querySelector('.contract-page-header');if(header){card.before(header);card.classList.add('contract-form-card');header.querySelector('button').setAttribute('aria-label','返回合同列表');}};
document.addEventListener('click',e=>{for(const picker of document.querySelectorAll('[data-county-picker][open]'))if(!picker.contains(e.target))picker.open=false;});
render();
})();
