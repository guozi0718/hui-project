const fs=require('fs'),p=require('path'),m=JSON.parse(fs.readFileSync(p.join(__dirname,'配置.json'),'utf8'));const read=f=>fs.readFileSync(f,'utf8');
const helpers=`
  const ACTION_LABELS={read:'已读',confirm:'已确认收到',sign:'已签字'};
  function actionSnapshot(db,n,r,action,at,a=null){
    const legacy=!a,teacher=r.kind==='teacher',signature=(r.signatures||[]).filter(s=>Number.isFinite(Number(s.at))).slice().sort((x,y)=>x.at-y.at)[0];
    const binding=!legacy&&!teacher?bindings(db).find(b=>b.schoolId===n.schoolId&&b.childId===r.recipientId&&b.guardianId===r.guardianId):null;
    const read=action==='read',old=read?r.readSnapshot:(action==='confirm'?r.confirmSnapshot:signature?.snapshot);
    const studentNameSnapshot=teacher?'':legacy?(old?.studentNameSnapshot||(read?r.readStudentNameSnapshot:r.studentNameSnapshot)||''):(students.find(s=>s.id===r.recipientId)?.name||'');
    const relationshipSnapshot=teacher?'':legacy?(old?.relationshipSnapshot||(read?r.readGuardianRelationSnapshot:r.guardianRelationSnapshot)||''):(a.relationship||a.relation||binding?.relationship||binding?.relation||binding?.rel||'');
    const actorId=r.guardianId||r.recipientId,actorRole=teacher?'teacher':'parent';
    const operationId=legacy?'legacy:'+([n.id,r.recipientId,actorRole,actorId,action,at].map(encodeURIComponent).join(':')):uid('receipt-action');
    return {operationId,operationIdSource:legacy?'legacy-derived':'captured',noticeId:n.id,schoolId:n.schoolId,recipientId:r.recipientId,actorId,actorRole,action,occurredAt:Number(at),noticeVersion:read?(r.readVersion||null):action==='confirm'?(r.confirmVersion||n.version):(signature?.version||n.version),studentNameSnapshot,relationshipSnapshot,guardianNameSnapshot:teacher?'':(legacy?(r.guardianNameSnapshot||r.guardian||''):a.name),teacherNameSnapshot:teacher?(legacy?(r.teacherNameSnapshot||r.guardian||''):a.name):'',snapshotSource:legacy?'retained-legacy':'captured-at-action'};
  }
  function ensureReceiptActions(db){let changed=false;for(const n of db.notices||[])for(const r of Object.values(n.receipts||{})){
    if(!['student','teacher'].includes(r.kind))continue;
    const signature=(r.signatures||[]).filter(s=>Number.isFinite(Number(s.at))).slice().sort((a,b)=>a.at-b.at)[0];
    const actions=[['read',r.readAt],['confirm',r.confirmAt],['sign',signature?.at]].filter(([,at])=>Number.isFinite(Number(at))&&Number(at)>0);
    if(!actions.length)continue;
    if(!r.receiptActions||Array.isArray(r.receiptActions)||typeof r.receiptActions!=='object'){r.receiptActions={};changed=true;}
    for(const [kind,at] of actions)if(!r.receiptActions[kind]){r.receiptActions[kind]=actionSnapshot(db,n,r,kind,at);changed=true;}
  }return changed;}
  function receiptActions(n,kind,recipientId){const rows=[];for(const r of Object.values(n.receipts||{})){if(r.kind!==kind||r.recipientId!==recipientId)continue;for(const event of Object.values(r.receiptActions||{}))if(event&&ACTION_LABELS[event.action]&&event.noticeId===n.id&&event.recipientId===recipientId&&event.actorRole===(kind==='student'?'parent':'teacher'))rows.push(clone(event));}const seen=new Set();return rows.filter(e=>{const key=[e.noticeId,e.recipientId,e.actorRole,e.actorId,e.action].join('|');if(seen.has(key))return false;seen.add(key);return true;});}
`;
for(const role of ['家长','教师']){const dir=p.join(m.dest,'端-'+role),coreFile=p.join(dir,'assets/notification-mini/core.js');let core=read(coreFile);
core=core.replace('  function receipt(db,id,a,action,signature,at=Date.now()){',helpers+'\n  function receipt(db,id,a,action,signature,at=Date.now()){');
core=core.replace("if(a.role==='parent'&&['confirm','sign'].includes(action)","if(['confirm','sign'].includes(action)");
core=core.replace("const r=old?clone(old):{recipientId,guardianId:a.id,guardian:a.name,kind:teacherReceiver?'teacher':'student',signatures:[]};r.signatures??=[];r.readAt||=at;", "const r=old?clone(old):{recipientId,guardianId:a.id,guardian:a.name,kind:teacherReceiver?'teacher':'student',signatures:[]};const firstRead=!r.readAt;r.signatures??=[];r.readAt||=at;r.readVersion||=n.version;");
const tail="    n.receipts[key]=r;db.revision++;return {ok:true,notice:clone(n)};";
if(!core.includes(tail))throw Error('查收写入位置缺失');
core=core.replace(tail,`    r.receiptActions??={};
    if(firstRead&&!r.receiptActions.read)r.receiptActions.read=actionSnapshot(db,n,r,'read',r.readAt,a);
    if(['confirm','sign'].includes(action)&&!r.receiptActions[action]){r.receiptActions[action]=actionSnapshot(db,n,r,action,action==='confirm'?r.confirmAt:r.signatures[0].at,a);if(action==='sign')r.signatures[0].operationId=r.receiptActions.sign.operationId;}
    n.receipts[key]=r;ensureReceiptActions(db);db.revision++;return {ok:true,notice:clone(n)};`);
core=core.replace('const api={clone,','const api={ACTION_LABELS,ensureReceiptActions,receiptActions,clone,');fs.writeFileSync(coreFile,core);const dup=p.join(dir,'notification-mini/core.js');if(fs.existsSync(dup))fs.copyFileSync(coreFile,dup);
let app=read(p.join(dir,'assets/notification-mini/app.js'));
app=app.replace("childId:S.messageChild||CHILD};}","childId:S.messageChild||CHILD,relationship:typeof myRel==='string'?myRel:''};}");
app=app.replace('const msgChanged=C.syncMessages(d);if(!stored||migrate||msgChanged)', 'const actionsChanged=C.ensureReceiptActions(d),msgChanged=C.syncMessages(d);if(!stored||migrate||msgChanged||actionsChanged)');
app=app.replace('const d=C.seed();C.syncMessages(d);','const d=C.seed();C.ensureReceiptActions(d);C.syncMessages(d);');
fs.writeFileSync(p.join(dir,'assets/notification-mini/app.js'),app);const appDup=p.join(dir,'notification-mini/app.js');if(fs.existsSync(appDup))fs.copyFileSync(p.join(dir,'assets/notification-mini/app.js'),appDup);
}
fs.writeFileSync(p.join(m.task,'资料/已确认Q26-Q30.md'),'# Q26—Q30\n\n26 最新在上，YYYY-MM-DD HH:mm。\n27 家长端替换原行；教师端在阅读统计后增加阅读动态，仅本人信息；具体统计权限及图片中其他交互待Q31—Q35。\n28 确认收到分别首次已读与已确认收到，仅读只首次已读；签字另有首次已签字。\n29 历史缺失关系快照不以当前关系倒填，用户指定占位文案暂无绑定家长。\n30 操作ID保存不展示，动态不展示签字图片。\n');
console.log('已实现动作记录与逐动作快照；显示层及统计边界继续按确认落实');
