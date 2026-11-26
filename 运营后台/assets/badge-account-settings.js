(()=>{
"use strict";
const B=window.ZxhBase;if(!B)return;
const M=B.models,C=B.context;
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
const arr=v=>Array.isArray(v)?v:(()=>{try{const p=JSON.parse(v||"[]");return Array.isArray(p)?p:[]}catch{return []}})();
const normRegion=v=>String(v||"").replace(/\s*\/\s*/g," ").replace(/\s+/g," ").trim();
const kindLabel=v=>v==="student-terminal"?"学生终端":"学生卡";
function byRegId(id){return M.regulatory.find(r=>!r.deleted&&String(r.id)===String(id))||null}
function resolveRegionReg(region){const value=normRegion(region);if(!value)return null;const hits=M.regulatory.filter(r=>!r.deleted&&normRegion(r.region)&&normRegion(r.region)!=="全部"&&(value===normRegion(r.region)||value.startsWith(normRegion(r.region)+" ")));hits.sort((a,b)=>normRegion(b.region).length-normRegion(a.region).length);return hits[0]||M.regulatory.find(r=>!r.deleted&&normRegion(r.region)==="全部")||null}
function owner(s){const explicit=s?.regulatoryId||s?.supervisorId||s?.supervisor;const direct=byRegId(explicit)||M.regulatory.find(r=>!r.deleted&&String(r.name)===String(explicit));return direct||resolveRegionReg(s?.region)}
function children(r){if(!r?.id)return [];return M.school.filter(s=>!s.deleted&&String(owner(s)?.id||"")===String(r.id))}
function ids(r){return arr(r?.badgeSelectedSchoolIds).map(String)}
function excluded(r){return arr(r?.badgeExcludedSchoolIds).map(String)}
function namesFor(r){const selected=new Set(ids(r));return children(r).filter(s=>selected.has(String(s.id)))}
function ensureDefaultSchoolScope(r){if(!r)return;const selected=ids(r),skip=excluded(r);if(!selected.length&&!skip.length)r.badgeSelectedSchoolIds=children(r).map(s=>String(s.id))}
function seed(){
 for(const s of M.school){if(!s.regulatoryId){const r=resolveRegionReg(s.region);if(r)s.regulatoryId=r.id}}
 for(const r of M.regulatory){if(r.badgeReplaceEnabled===undefined)r.badgeReplaceEnabled=false;if(!["student-terminal","student-card"].includes(r.badgeReplaceType))r.badgeReplaceType="student-card";if(r.badgeSyncAllSchools===undefined)r.badgeSyncAllSchools=true;if(!Array.isArray(r.badgeExcludedSchoolIds))r.badgeExcludedSchoolIds=[];if(!Array.isArray(r.badgeSelectedSchoolIds))r.badgeSelectedSchoolIds=children(r).map(s=>String(s.id));ensureDefaultSchoolScope(r)}
 for(const s of M.school){if(s.badgeReplaceEnabled===undefined)s.badgeReplaceEnabled=false;if(!["student-terminal","student-card"].includes(s.badgeReplaceType))s.badgeReplaceType="student-card"}
}
function reconcile(){
 for(const r of M.regulatory){if(r.deleted)continue;if(r.badgeReplaceEnabled===undefined)r.badgeReplaceEnabled=false;if(!["student-terminal","student-card"].includes(r.badgeReplaceType))r.badgeReplaceType="student-card";if(r.badgeSyncAllSchools===undefined)r.badgeSyncAllSchools=true;r.badgeSelectedSchoolIds=ids(r);r.badgeExcludedSchoolIds=excluded(r);const childRows=children(r),picked=new Set(ids(r)),skip=new Set(excluded(r));
  for(const s of childRows){const id=String(s.id);if(r.badgeSyncAllSchools){applyLock(s,r);continue}if(picked.has(id)){applyLock(s,r);continue}if(!skip.has(id)){r.badgeSelectedSchoolIds.push(id);picked.add(id);applyLock(s,r);continue}if(String(s.badgeLockSourceId||"")===String(r.id))resetSchool(s)}
 }
}
function applyLock(s,r){s.badgeLockSourceId=String(r.id);s.badgeReplaceEnabled=!!r.badgeReplaceEnabled;s.badgeReplaceType=r.badgeReplaceType||"student-card"}
function resetSchool(s){s.badgeLockSourceId="";s.badgeReplaceEnabled=false;s.badgeReplaceType="student-card"}
function currentPageForm(){return document.querySelector(".content .card .frm")||document.querySelector(".card>.frm")}
function field(label,control,required=false){return '<div class="fr badge-account-row"><label class="'+(required?'req':'')+'">'+label+'</label><div class="ctl">'+control+'</div></div>'}
function switchControl(key,on,disabled){return '<label class="badge-account-switch '+(disabled?'is-disabled':'')+'"><input type="checkbox" role="switch" data-field="'+key+'" '+(on?'checked ':'')+(disabled?'disabled ':'')+'><span class="badge-switch-track" aria-hidden="true"><i></i></span><span class="badge-switch-state">'+(on?'开启':'关闭')+'</span></label>'}
function typeControl(value,disabled){return '<select class="sel badge-account-type" data-field="badgeReplaceType" '+(disabled?'disabled':'')+'><option value="student-terminal" '+(value==='student-terminal'?'selected':'')+'>学生终端</option><option value="student-card" '+(value!=='student-terminal'?'selected':'')+'>学生卡</option></select>'}
function primarySettingRow(setting,disabled){return '<div class="fr badge-account-row badge-primary-row"><label class="req">是否开启校徽文案替换</label><div class="ctl badge-primary-controls">'+switchControl('badgeReplaceEnabled',setting.enabled,disabled)+'<span class="badge-inline-label">替换类型</span>'+typeControl(setting.type,disabled||!setting.enabled)+'</div></div>'}
function schoolSummary(rows){const names=rows.map(s=>String(s.name||'')).filter(Boolean),full=names.join('、');return '<span class="badge-school-summary" title="'+esc(full||'暂无学校')+'">已选 '+rows.length+' 所'+(full?'：'+esc(full):'：暂无学校')+'</span>'}
function secondaryRegulatoryRow(d,masterEnabled){const on=!!d.badgeSyncAllSchools,selected=namesFor(d),disabled=!masterEnabled;return '<div class="fr badge-account-row badge-regulatory-secondary-row"><label>是否同步下级所有学校</label><div class="ctl badge-regulatory-controls">'+switchControl('badgeSyncAllSchools',on,disabled)+(!on?'<span class="badge-inline-label badge-applicable-label">适用学校</span><button type="button" class="btn" data-badge-action="pick" '+(disabled?'disabled':'')+'>选择学校</button>'+schoolSummary(selected):'')+'</div></div>'}
function formSection(kind,d,lock,reg){
 const setting=lock?{enabled:!!reg.badgeReplaceEnabled,type:reg.badgeReplaceType||"student-card"}:{enabled:!!d.badgeReplaceEnabled,type:d.badgeReplaceType||"student-card"};
 let html=kind==='school'?'':'<div class="grp-t badge-settings-heading">校徽文案管理</div>';
 html+=primarySettingRow(setting,lock);
 if(kind==='regulatory')html+=secondaryRegulatoryRow(d,setting.enabled);
 return html;
}
function schoolSettings(regId,d,isNew){
 const r=byRegId(regId);if(!r)return{locked:false,reg:null,enabled:!!d.badgeReplaceEnabled,type:d.badgeReplaceType||"student-card"};
 const list=new Set(ids(r)),denied=new Set(excluded(r)),id=String(d.id||"");
 const applies=!!r.badgeSyncAllSchools||((id&&list.has(id))||(!id&&!denied.has(id)));
 return applies?{locked:true,reg:r,enabled:!!r.badgeReplaceEnabled,type:r.badgeReplaceType||"student-card"}:{locked:false,reg:r,enabled:!!d.badgeReplaceEnabled,type:d.badgeReplaceType||"student-card"};
}
function decorateRegForm(frm){
 const d=C.draft;if(!d)return;
 if(d.badgeReplaceEnabled===undefined)d.badgeReplaceEnabled=false;if(!["student-terminal","student-card"].includes(d.badgeReplaceType))d.badgeReplaceType="student-card";if(d.badgeSyncAllSchools===undefined)d.badgeSyncAllSchools=true;
  d.badgeSelectedSchoolIds=arr(d.badgeSelectedSchoolIds);d.badgeExcludedSchoolIds=arr(d.badgeExcludedSchoolIds);ensureDefaultSchoolScope(d);
 frm.querySelectorAll('.badge-account-block,.badge-account-heading,.badge-account-hidden').forEach(x=>x.remove());
 const oldRows=[...frm.children].filter(x=>x.classList.contains('fr'));
 const tips=[...frm.children].filter(x=>x.matches('p.tip'));
 if(!oldRows.length)return;
 const basic=document.createElement('div');basic.className='grp-t badge-account-heading';basic.textContent='基础信息';frm.insertBefore(basic,oldRows[0]);
 const audit=document.createElement('div');audit.className='grp-t badge-account-heading';audit.textContent='审核配置';frm.append(audit);
 const block=document.createElement('div');block.className='badge-account-block';block.innerHTML=formSection('regulatory',d,false,d);frm.append(block);
}
function decorateSchoolForm(frm){
 const d=C.draft;if(!d)return;
 if(d.badgeReplaceEnabled===undefined)d.badgeReplaceEnabled=false;if(!["student-terminal","student-card"].includes(d.badgeReplaceType))d.badgeReplaceType="student-card";
 const form=frm;
 let reg=owner({id:d.id,regulatoryId:d.regulatoryId,supervisorId:d.supervisorId,supervisor:d.supervisor,region:d.region});
 if(!d.regulatoryId&&reg)d.regulatoryId=reg.id;
 const lock=schoolSettings(d.regulatoryId||reg?.id,d, C.index===null);
 if(lock.locked){d.badgeReplaceEnabled=lock.enabled;d.badgeReplaceType=lock.type;d.badgeLockSourceId=lock.reg.id}else if(C.index!==null&&d.badgeLockSourceId){d.badgeLockSourceId=''}
 form.querySelectorAll('.badge-account-block,.badge-account-hidden').forEach(x=>x.remove());
 const audit=[...form.querySelectorAll(':scope>.grp-t')].find(x=>x.textContent.trim()==='审核配置');
 const reviews=[...form.querySelectorAll('[data-review]')].map(x=>x.closest('.fr')).filter(Boolean);
 const block=document.createElement('div');block.className='badge-account-block school-badge-account-block';block.innerHTML=formSection('school',d,lock.locked,lock.reg||d);
 const hidden=document.createElement('div');hidden.className='badge-account-hidden';hidden.hidden=true;hidden.innerHTML='<input type="hidden" data-field="regulatoryId" value="'+esc(d.regulatoryId||'')+'"><input type="hidden" data-field="badgeLockSourceId" value="'+esc(d.badgeLockSourceId||'')+'">';
 const anchor=reviews.at(-1)||audit;if(anchor)anchor.after(block,hidden);else form.append(block,hidden);
}
function readonlyRow(label,value,extraClass=''){return '<div class="fr badge-account-display '+extraClass+'"><label>'+label+'：</label><div class="ctl">'+(value||'--')+'</div></div>'}
function readonlyPrimaryRow(enabled,type,extraClass=''){return '<div class="fr badge-account-display badge-primary-row '+extraClass+'"><label>是否开启校徽文案替换：</label><div class="ctl badge-primary-controls"><span>'+enabled+'</span><span class="badge-inline-label">替换类型</span><span class="badge-readonly-type">'+esc(type)+'</span></div></div>'}
function readonlyRegulatorySecondaryRow(x){const on=!!x.badgeSyncAllSchools,selected=namesFor(x),names=selected.map(s=>String(s.name||'')).filter(Boolean),summary=names.length?names.join('、'):'暂无学校';return '<div class="fr badge-account-display badge-regulatory-secondary-row"><label>是否同步下级所有学校：</label><div class="ctl badge-regulatory-controls"><span>'+ (on?'是':'否') +'</span>'+(!on?'<span class="badge-inline-label badge-applicable-label">适用学校：</span><span class="badge-school-summary" title="'+esc(summary)+'">已选 '+selected.length+' 所：'+esc(summary)+'</span>':'')+'</div></div>'}
function decorateDetail(frm){
 if(frm.dataset.badgeDone==='1')return;
 const selected=window.ZxhAccountViewState?.selected,kind=selected?.kind,index=selected?.index,x=M[kind]?.[index];if(!x)return;
 if(kind==='regulatory'){
   const first=frm.firstElementChild;if(first){const h=document.createElement('div');h.className='grp-t';h.textContent='基础信息';frm.insertBefore(h,first)}
   const h=document.createElement('div');h.className='grp-t';h.textContent='审核配置';frm.append(h);
   frm.insertAdjacentHTML('beforeend','<div class="grp-t badge-settings-heading">校徽文案管理</div>'+readonlyPrimaryRow(x.badgeReplaceEnabled?'开启':'关闭',kindLabel(x.badgeReplaceType))+readonlyRegulatorySecondaryRow(x));
 }else{
   const setting=schoolSettings(x.regulatoryId||owner(x)?.id,x,false);
   const audit=[...frm.querySelectorAll(':scope>.grp-t')].find(h=>h.textContent.trim()==='审核配置');
    const html=readonlyPrimaryRow(setting.enabled?'开启':'关闭',kindLabel(setting.type),'school-badge-account-row');
   if(audit)audit.insertAdjacentHTML('afterend',html);else frm.insertAdjacentHTML('beforeend','<div class="grp-t">审核配置</div>'+html);
 }
 frm.dataset.badgeDone='1';
}
function decorate(){
 const detail=document.querySelector('.account-view-form');if(detail){decorateDetail(detail);return}
 if(!B.context?.draft)return;
 const form=currentPageForm();if(!form)return;
 if(state.active==='regulatoryUserUpdate'&&B.context.kind==='regulatory')decorateRegForm(form);
 if(state.active==='schoolUserUpdate'&&B.context.kind==='school')decorateSchoolForm(form);
}
function openPicker(){
 const d=C.draft;if(!d||C.kind!=='regulatory'||!d.badgeReplaceEnabled||d.badgeSyncAllSchools)return;
 window.ZxhBase.read();d.badgeSelectedSchoolIds=arr(d.badgeSelectedSchoolIds);d.badgeExcludedSchoolIds=arr(d.badgeExcludedSchoolIds);
 const r=C.index===null?null:M.regulatory[C.index],rows=children(r);
  ensureDefaultSchoolScope(d);const selected=new Set(ids(d));
 document.querySelector('#badgeSchoolDialog')?.remove();
 const dialog=document.createElement('dialog');dialog.id='badgeSchoolDialog';dialog.className='badge-school-dialog';
 dialog.innerHTML='<header><h2>选择学校</h2><button type="button" class="badge-dialog-x" data-badge-action="cancel" aria-label="关闭">×</button></header><div class="badge-school-dialog-body"><p>共 '+rows.length+' 所学校</p><div class="badge-school-options">'+(rows.length?rows.map(s=>'<label><input type="checkbox" value="'+esc(s.id)+'" '+(selected.has(String(s.id))?'checked':'')+'><span>'+esc(s.name)+'</span><small>'+esc(s.region||'')+'</small></label>').join(''):'<div class="badge-school-empty">该监管下暂无学校</div>')+'</div></div><footer><button type="button" class="btn" data-badge-action="cancel">取消</button><button type="button" class="btn primary" data-badge-action="confirm">确定</button></footer>';
 document.body.append(dialog);dialog.showModal();
}
function finishPicker(ok){
 const dialog=document.querySelector('#badgeSchoolDialog');if(!dialog)return;
 if(ok){const d=C.draft,r=C.index===null?null:M.regulatory[C.index];const valid=new Set(children(r).map(s=>String(s.id))),prev=new Set(ids(d)),next=[...dialog.querySelectorAll('.badge-school-options input:checked')].map(x=>String(x.value)).filter(id=>valid.has(id));const nextSet=new Set(next),ex=new Set(excluded(d));for(const id of prev)if(valid.has(id)&&!nextSet.has(id))ex.add(id);for(const id of next)ex.delete(id);d.badgeSelectedSchoolIds=next;d.badgeExcludedSchoolIds=[...ex];C.dirty=true;}
 dialog.close();dialog.remove();if(ok)render();
}
const oldRender=render;render=function(){reconcile();oldRender();decorate()};
const prevEntity=window.ZxhDocValidators.entity;window.ZxhDocValidators.entity=function(kind,d,old){
 if(kind==='regulatory'){
  d.badgeReplaceEnabled=!!d.badgeReplaceEnabled;if(!['student-terminal','student-card'].includes(d.badgeReplaceType))d.badgeReplaceType='student-card';if(d.badgeSyncAllSchools===undefined)d.badgeSyncAllSchools=true;d.badgeSyncAllSchools=!!d.badgeSyncAllSchools;d.badgeSelectedSchoolIds=arr(d.badgeSelectedSchoolIds);d.badgeExcludedSchoolIds=arr(d.badgeExcludedSchoolIds);
  const parent=old||d,available=new Set(children(parent).map(s=>String(s.id)));d.badgeSelectedSchoolIds=d.badgeSelectedSchoolIds.map(String).filter(id=>available.has(id));d.badgeExcludedSchoolIds=d.badgeExcludedSchoolIds.map(String).filter(id=>available.has(id));
 }
 if(kind==='school'){
  let r=owner({id:d.id,regulatoryId:d.regulatoryId,supervisorId:d.supervisorId,supervisor:d.supervisor,region:d.region});if(!d.regulatoryId&&r)d.regulatoryId=r.id;
  const lock=schoolSettings(d.regulatoryId||r?.id,d,old==null);if(lock.locked){d.badgeReplaceEnabled=lock.enabled;d.badgeReplaceType=lock.type;d.badgeLockSourceId=String(lock.reg.id)}else{d.badgeReplaceEnabled=!!d.badgeReplaceEnabled;if(!['student-terminal','student-card'].includes(d.badgeReplaceType))d.badgeReplaceType='student-card';d.badgeLockSourceId=''}
 }
 return prevEntity(kind,d,old);
};
document.addEventListener('change',e=>{
 const el=e.target;if(!el.matches('[data-field="badgeReplaceEnabled"],[data-field="badgeReplaceType"],[data-field="badgeSyncAllSchools"]'))return;
 const kind=C.kind,d=C.draft;if(!d||!['school','regulatory'].includes(kind)||el.disabled)return;if(kind==='regulatory'&&el.dataset.field!=='badgeReplaceEnabled'&&!d.badgeReplaceEnabled)return;
 const was=!!d.badgeSyncAllSchools;B.read();if(kind==='regulatory'){d.badgeSelectedSchoolIds=arr(d.badgeSelectedSchoolIds);d.badgeExcludedSchoolIds=arr(d.badgeExcludedSchoolIds);if(el.dataset.field==='badgeSyncAllSchools'&&was&&!d.badgeSyncAllSchools){const r=C.index===null?null:M.regulatory[C.index],ex=new Set(excluded(d));d.badgeSelectedSchoolIds=children(r).map(s=>String(s.id)).filter(id=>!ex.has(id));}}
 render();
},true);
document.addEventListener('click',e=>{
 const el=e.target.closest('[data-badge-action]');if(!el)return;const action=el.dataset.badgeAction;
 if(action==='pick'){e.preventDefault();openPicker()}else if(action==='confirm'){e.preventDefault();finishPicker(true)}else if(action==='cancel'){e.preventDefault();finishPicker(false)}
});
seed();reconcile();
const readyRender=render;render=function(){reconcile();readyRender()};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',decorate,{once:true});else decorate();
})();
