const fs=require('fs'),p=require('path'),m=JSON.parse(fs.readFileSync(p.join(__dirname,'配置.json'),'utf8'));const read=f=>fs.readFileSync(f,'utf8');
const component=`
function readingActivity(n){
 if(!n||n.status!=='published'||!C.canView(me(),n))return '';
 const student=role==='parent',id=student?me().childId:me().id;
 if(student&&!C.bindings(DB).some(b=>b.active&&b.schoolId===SCHOOL&&b.childId===id&&b.guardianId===me().id))return '';
 const rows=C.receiptActions(n,student?'student':'teacher',id).sort((a,b)=>b.occurredAt-a.occurredAt||({sign:3,confirm:2,read:1}[b.action]-{sign:3,confirm:2,read:1}[a.action])||zh(a.operationId,b.operationId));
 return '<section class="nm-reading-activity" aria-label="阅读动态"><h3>阅读动态</h3><div class="nm-reading-events">'+(rows.length?rows.map(event=>{
   const person=student?(event.relationshipSnapshot?((event.studentNameSnapshot||'学生姓名未记录')+' '+event.relationshipSnapshot):'暂无绑定家长'):(event.teacherNameSnapshot||'教师姓名未记录');
   return '<div class="nm-reading-event"><time datetime="'+new Date(event.occurredAt).toISOString()+'">'+esc(fTime(event.occurredAt))+'</time><span>'+esc(person+' '+C.ACTION_LABELS[event.action])+'</span></div>';
 }).join(''):'<p class="nm-reading-empty">暂无阅读动态</p>')+'</div></section>';
}
function activityDemo(changed=false){
 const id=inject('reading-activity',{title:'研学活动安全告知书',ack:'sign',classes:['c52'],teachers:['t1']});
 transact(db=>{const n=db.notices.find(n=>n.id===id);n.receipts={};const start=Date.now()-20*60000;const actors=[{id:'p1',name:'家长A',relationship:'妈妈'},{id:'activity-parent-b',name:'家长B',relationship:'爸爸'},{id:'activity-parent-c',name:'家长C',relationship:'爷爷'}].map(a=>({...C.actor('parent',SCHOOL),...a,childId:CHILD}));
 for(const a of actors){if(!C.bindings(db).some(b=>b.guardianId===a.id&&b.childId===CHILD&&b.schoolId===SCHOOL))db.guardianBindings.push({schoolId:SCHOOL,childId:CHILD,guardianId:a.id,name:a.name,relationship:a.relationship,active:true});}
 actors.forEach((a,i)=>{C.receipt(db,id,a,'read',null,start+i*4*60000);if(i)C.receipt(db,id,a,'sign','assets/signature.svg',start+(i*4+1)*60000);});
 if(changed){const b=db.guardianBindings.find(b=>b.guardianId===actors[1].id&&b.childId===CHILD);b.relationship='爷爷';b.name='家长B已改名';}
 return {ok:true};});reload();openId(id,role==='teacher'?'receive':'all');}
`;
for(const role of ['家长','教师']){const dir=p.join(m.dest,'端-'+role),file=p.join(dir,'assets/notification-mini/app.js');let app=read(file);app=app.replace('/* ---------- 详情 ---------- */',component+'\n/* ---------- 详情 ---------- */');
const info=" const info='<div class=\"nm-a-info\"><span>'+esc(C.ackNames[n.config.ack])+'</span>'+(n.status==='scheduled'?'<span>定时 '+fFull(Date.parse(n.config.scheduledAt))+'</span>':'')+'</div>';";
let replaced=false;app=app.split('\n').map(line=>{if(!replaced&&line===info){replaced=true;return " const info=role==='parent'?readingActivity(n):'<div class=\"nm-a-info\"><span>'+esc(C.ackNames[n.config.ack])+'</span>'+(n.status==='scheduled'?'<span>定时 '+fFull(Date.parse(n.config.scheduledAt))+'</span>':'')+'</div>';";}return line;}).join('\n');if(!replaced)throw Error('详情信息行缺失');
const anchor="+(mine&&n.status==='published'?statLine(n):'')";if(!app.includes(anchor))throw Error('统计插入位置缺失');app=app.replace(anchor,anchor+"+(role==='teacher'&&n.status==='published'?readingActivity(n):'')");
app=app.replace("'r-sign-one':['1位家长签字明细'", "'activity-three':['阅读动态 · 三位家长',()=>activityDemo(false)],\n 'activity-snapshot':['阅读动态 · 关系修改后快照不变',()=>activityDemo(true)],\n 'r-sign-one':['1位家长签字明细'");
app=app.replace("if(T&&p==='list')k=k.concat(","if(p==='detail'||p==='list')k=k.concat(['activity-three','activity-snapshot']);\n if(T&&p==='list')k=k.concat(");
app=app.replace("L.push('【即时状态】", "L.push('【阅读动态】家长仅查看本通知当前学生的所有家长动作；教师仅展示本人动作。首次阅读、确认、签字各一条，最新在上，时间为年月日时分。记录操作ID、账号/学生ID及逐动作姓名/关系快照，页面不展示操作ID或签字图片。修改关系与姓名不改变已记录快照；旧关系快照缺失按要求显示暂无绑定家长，不拿当前关系补写。');\n L.push('【即时状态】");
fs.writeFileSync(file,app);const dup=p.join(dir,'notification-mini/app.js');if(fs.existsSync(dup))fs.copyFileSync(file,dup);
fs.appendFileSync(p.join(dir,'assets/notification-mini.css'),`\n/* 阅读动态：沿用原卡片、字号与颜色，时间和动作分列。 */
#notification-mini-root .nm-reading-activity{margin:14px 0;padding:12px;border-radius:12px;background:#fff;box-shadow:0 0 0 1px rgba(35,48,71,.04)}
#notification-mini-root .nm-reading-activity h3{margin:0 0 10px;font-size:14px;line-height:1.5;font-weight:600;color:var(--ink)}
#notification-mini-root .nm-reading-event{display:flex;align-items:flex-start;gap:14px;padding:4px 0;color:var(--mute);font-size:12px;line-height:1.6}
#notification-mini-root .nm-reading-event time{flex:none;white-space:nowrap;font-size:12px}
#notification-mini-root .nm-reading-event>span{min-width:0;overflow-wrap:anywhere}
#notification-mini-root .nm-reading-empty{margin:0;color:var(--mute);font-size:12px;line-height:1.6}
`);
}
console.log('阅读动态已接入：逐动作、时间倒序、快照及操作ID不回写');
