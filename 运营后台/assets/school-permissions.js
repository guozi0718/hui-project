/* 本轮用户附图：学校端准确权限树。仅应用合同权限中的学校管理端。 */
(()=>{
const leaf=t=>({t}),group=(t,c)=>({t,c:c.map(x=>typeof x==='string'?leaf(x):x)}),locked=(t,c)=>({t,locked:true,...(c?{c:c.map(x=>typeof x==='string'?{t:x,locked:true}:x)}:{})});
const tree=[
group('学校管理',[group('学校档案',['添加收货信息']),group('年级管理',['新增','修改','删除']),group('班级管理',['新增','批量新增','修改','删除','恢复']),group('学生管理',['新增','修改','删除','批量导入','批量离校','批量转班','修改家长','核实','删除家长','注册审核','导出','还原']),group('教师管理',['新增','修改','删除','审核']),group('职务管理',['新增职务','修改权限','删除'])]),
group('考勤管理',[group('学生考勤表',[group('日考勤表',['导出']),group('打卡记录',['导出']),group('班级考勤统计',['导出'])]),group('请假管理',['导出']),group('考勤设置',[group('班次设置',['新增班次','修改','删除','修改记录','查看记录']),group('排班表设置',['新增班次','修改','删除']),group('特殊日期排班',['新增','查看','修改','删除']),'接送设置']),group('放学记录',['导出']),group('放学二维码',['批量生成','批量下载','导出','下载二维码','重新生成'])]),
group('控辍保学管理',[group('控辍保学台账',['详情','编辑','删除','导出','新增劝返记录']),group('控辍保学预警',['详情','处理','导出']),group('预警配置',['保存配置','恢复默认'])]),
group('德育评价',[group('评价记录',['批量删除','导入点评','删除']),group('评价报告',['生成评价报告']),group('评价项管理',['导入点评项','添加点评项','新增指标','指标操作','编辑点评项','删除点评项','批量修改','批量删除','调整顺序'])]),
group('班级评价',['班级评价概览',group('班级评价记录',['删除']),group('检查项管理',['导入检查项','新增检查项','新增指标','指标操作','编辑检查项','删除检查项','批量修改','调整顺序']),group('班级评价设置',['保存设置'])]),
leaf('设备管理'),
{t:'基础设置',locked:true,c:[leaf('个人中心'),locked('角色管理',['新增角色','编辑角色','删除角色','配置权限web']),locked('用户管理',['新增管理员','编辑管理员','重置密码','启用/禁用','删除管理员']),group('值周老师管理',['新增分组','编辑分组','删除分组']),group('公众号信息推送设置',['保存'])]}
];
const county=[leaf('考勤管理'),group('控辍保学管理',[group('控辍保学台账',['详情','导出']),group('控辍保学预警',['详情','导出']),group('预警配置',['保存配置','恢复默认','开关'])]),leaf('德育管理'),leaf('学校管理'),{t:'系统设置',locked:true,c:[leaf('个人中心'),locked('角色管理',['新增角色','编辑角色','删除角色','配置权限web']),locked('用户管理',['新增管理员','编辑管理员','重置密码','启用/禁用','删除管理员'])]}];
const higher=county.map(n=>n.t==='控辍保学管理'?{...n,c:n.c.filter(x=>x.t!=='预警配置')}:n);
const roleName=()=>String(UX.origin?.cells?.[0]||P[state.active]?.role||'');
const isReg=()=>/区县|地市|省|部委/.test(roleName());
const currentTree=()=>/学校/.test(roleName())?tree:/区县/.test(roleName())?county:higher;
const auth=P.contractAuth,oldRows=auth.rows;auth.rows=i=>i===4?['部委教育局端','--','',dt(10)]:oldRows(i===5?4:i);auth.total=6;if(auth._data){auth._data.splice(4,0,auth.rows(4));}
P.contractAuthEdit.parent='contractAuth';P.contractAuthView.parent='contractAuth';let active=false;
const isSchool=k=>['contractAuthEdit','contractAuthView'].includes(k)&&(UX.origin?.cells?.[0]||P[k].role)==='学校管理端';
const supported=k=>['contractAuthEdit','contractAuthView'].includes(k)&&(isSchool(k)||isReg());
const key=()=> 'school-v07:'+permKey()+':'+roleName();
function nodesHTML(nodes,prefix='',edit){return nodes.map((n,i)=>{const id=prefix?prefix+'/'+i:String(i),has=!!n.c?.length;return '<div class="permission-branch"><div class="node '+(n.locked||!edit?'permission-disabled':'')+'">'+(has?'<button class="ar open" type="button" data-school-toggle aria-expanded="true" aria-label="收起'+n.t+'">›</button>':'<span class="ar"></span>')+'<label class="chk"><input type="checkbox" data-school-permission="'+id+'" '+(n.locked?'data-locked ':'')+(n.locked||!edit?'disabled ':'')+'checked>'+n.t+'</label></div>'+(has?'<div class="kids open">'+nodesHTML(n.c,id,edit)+'</div>':'')+'</div>';}).join('')}
const previous=CUSTOM.perm;CUSTOM.perm=(k,c)=>{if(!supported(k))return previous(k,c);return backbar(c,c.edit?'<button class="btn" data-act="back">取消</button><button class="btn pri" data-act="submit">确定</button>':'')+'<div class="tree school-permission-tree" '+(!c.edit?'aria-label="管理端权限（只读）"':'aria-label="管理端权限"')+'>'+nodesHTML(currentTree(),'',!!c.edit)+'</div>';};
function aggregate(){for(const branch of [...document.querySelectorAll('.school-permission-tree .permission-branch')].reverse()){const input=branch.querySelector(':scope>.node input'),kids=[...branch.querySelectorAll(':scope>.kids input')];if(!kids.length||input.hasAttribute('data-locked'))continue;input.checked=kids.every(x=>x.checked);input.indeterminate=!input.checked&&kids.some(x=>x.checked||x.indeterminate);}}
function restore(){active=supported(state.active);if(!active)return;const saved=perms[key()];for(const x of document.querySelectorAll('[data-school-permission]')){x.disabled=x.hasAttribute('data-locked')||!P[state.active].edit;x.checked=x.hasAttribute('data-locked')||saved?.[x.dataset.schoolPermission]!==false;}aggregate();}
const beforeRender=render;render=function(){beforeRender();restore();};
window.addEventListener('click',e=>{const toggle=e.target.closest('[data-school-toggle]');if(toggle){e.preventDefault();e.stopImmediatePropagation();const open=toggle.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',(open?'收起':'展开')+toggle.parentElement.querySelector('label').textContent);toggle.parentElement.nextElementSibling.classList.toggle('open',open);return;}if(!active||!e.target.closest('[data-act="submit"]'))return;e.preventDefault();e.stopImmediatePropagation();if(!P[state.active].edit)return;const saved={};for(const x of document.querySelectorAll('[data-school-permission]'))saved[x.dataset.schoolPermission]=x.hasAttribute('data-locked')||x.checked;perms[key()]=saved;toast('权限已保存（本地演示）');},true);
window.addEventListener('change',e=>{const x=e.target.closest('[data-school-permission]');if(!x)return;e.stopImmediatePropagation();if(!P[state.active].edit||x.hasAttribute('data-locked')){restore();return;}for(const child of x.closest('.node').nextElementSibling?.querySelectorAll('input:not(:disabled)')||[])child.checked=x.checked;aggregate();},true);
window.ZxhSchoolPermissions={tree,county,higher,isSchool,currentTree,restore};restore();
})();


