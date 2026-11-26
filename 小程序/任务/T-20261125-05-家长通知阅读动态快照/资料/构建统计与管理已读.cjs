const fs=require('fs'),p=require('path'),m=JSON.parse(fs.readFileSync(p.join(__dirname,'配置.json'),'utf8'));const read=f=>fs.readFileSync(f,'utf8');
const stats=`function statsPage(){reload();const n=get(S.id);if(!n)return emptyHtml('通知已不存在');if(role!=='teacher'||!C.canManage(me(),n)||n.status!=='published')return emptyHtml('当前无权查看阅读统计');
 const r=C.recipients(n),rs=Object.values(n.receipts||{}),ack=n.config.ack,lab=ack==='confirm'?'已确认':'已签字',done=x=>ack==='read'?!!x.readAt:ack==='confirm'?!!x.confirmAt:!!x.signatures?.length;
 const kinds=[['student','学生',r.students],['teacher','教师',r.teachers]].filter(k=>k[2].length);if(!kinds.some(k=>k[0]===S.statsKind))S.statsKind=kinds[0]?.[0]||'student';
 const ids=(kinds.find(k=>k[0]===S.statsKind)||[0,0,[]])[2],recs=id=>rs.filter(x=>x.kind===S.statsKind&&x.recipientId===id);
 const group={unread:ids.filter(id=>!recs(id).some(x=>x.readAt)),read:ids.filter(id=>recs(id).some(x=>x.readAt)&&(ack==='read'||!recs(id).some(done))),done:ack==='read'?[]:ids.filter(id=>recs(id).some(done))};
 const filters=[['unread','未读'],['read',ack==='read'?'已读':'已读未'+(ack==='confirm'?'确认':'签字')]].concat(ack==='read'?[]:[['done',lab]]);if(!filters.some(f=>f[0]===S.statsFilter))S.statsFilter='unread';
 const student=S.statsKind==='student',name=id=>student?(C.students.find(s=>s.id===id)?.name||id):(C.teachers.find(t=>t.id===id)?.name||id),sub=id=>student?(C.classes.find(c=>c.id===C.students.find(s=>s.id===id)?.classId)?.name||'未分班'):(C.teachers.find(t=>t.id===id)?.dept||'');
 const row=id=>{const list=recs(id),unread=student&&S.statsFilter==='unread';return '<div class="nm-srow'+(unread?' nm-srow-open':'')+'" '+(unread?'role="button" tabindex="0" data-a="guardian-status" data-v="'+esc(id)+'"':'')+'><div class="nm-av">'+esc(name(id).slice(-2))+'</div><div class="nm-srow-m"><b>'+esc(name(id))+'</b><small>'+esc(sub(id))+'</small>'+(student&&list.length?'<div class="nm-guard">'+list.map(x=>'<span>'+esc(x.guardianNameSnapshot||x.guardian||'家长')+'：'+(done(x)&&ack!=='read'?lab:x.readAt?'已读':'未读')+(x.readAt?' '+fShort(done(x)&&ack==='confirm'?x.confirmAt:done(x)&&ack==='sign'?x.signatures[0].at:x.readAt):'')+'</span>').join('')+'</div>':'')+'</div>'+(student&&S.statsFilter==='done'?btn('guardian-details','明细','receipt-detail','data-v="'+esc(id)+'"'):'<em class="'+(S.statsFilter==='unread'?'todo':'')+'">'+(S.statsFilter==='unread'?'未读':S.statsFilter==='done'?lab:'已读')+'</em>')+(unread?ico('right','sm nm-stat-arrow'):'')+'</div>';};
 const visible=group[S.statsFilter].slice().sort((a,b)=>zh(name(a),name(b)));let rows='';
 if(student){const classes=new Map();for(const id of visible){const cid=C.students.find(s=>s.id===id)?.classId||'unknown';if(!classes.has(cid))classes.set(cid,[]);classes.get(cid).push(id);}S.statsCollapsed??={};rows=[...classes].sort(([a],[b])=>zh(C.classes.find(c=>c.id===a)?.name||a,C.classes.find(c=>c.id===b)?.name||b)).map(([cid,items])=>{const closed=!!S.statsCollapsed[S.id+'|'+cid],label=C.classes.find(c=>c.id===cid)?.name||'未分班';return '<section class="nm-stat-class"><button type="button" class="nm-stat-class-head" data-a="stats-group" data-v="'+esc(cid)+'" aria-expanded="'+!closed+'">'+ico(closed?'right':'down','sm')+'<span>'+esc(label)+'（'+items.length+'）</span></button>'+(closed?'':'<div class="nm-stat-class-list">'+items.map(row).join('')+'</div>')+'</section>';}).join('');}
 else rows=visible.map(row).join('');
 const canRemind=n.status==='published'&&group.unread.length>0;
 return '<div class="nm-page"><div class="nm-top">'+(kinds.length>1?'<div class="nm-seg">'+kinds.map(k=>'<button type="button" class="'+(S.statsKind===k[0]?'on':'')+'" data-a="stats-kind" data-v="'+k[0]+'">'+k[1]+'（'+k[2].length+'）</button>').join('')+'</div>':'')+'<div class="nm-chips">'+filters.map(f=>'<button type="button" class="'+(S.statsFilter===f[0]?'on':'')+'" data-a="stats-filter" data-v="'+f[0]+'">'+f[1]+' '+group[f[0]].length+'</button>').join('')+'</div></div><div class="nm-scroll nm-slist">'+(student?'<p class="nm-tip">学生按任一家长完成计算；未读学生可查看家长状态，完成学生点击明细。</p>':'')+(rows||emptyHtml('暂无人员'))+'</div>'+(canRemind?'<div class="nm-foot">'+btn('remind',ico('bell','sm')+'提醒未读（'+(C.unreadRecipientIds(n,'student').length+C.unreadRecipientIds(n,'teacher').length)+'）','primary block')+'</div>':'')+'</div>';
}
`;
const summary=`function statLine(n){const c=C.counts(n),ack=n.config.ack,lab=ack==='confirm'?'已确认':ack==='sign'?'已签字':'';
 const groups=[['学生',c.students],['教师',c.teachers]].filter(([,v])=>v.total),cell=(label,v)=>'<div class="nm-stat-summary-line">'+(groups.length>1?'<small>'+label+'：</small>':'')+'<span>已读<em>'+v.read+'</em>人</span><span>未读<em>'+Math.max(0,v.total-v.read)+'</em>人</span>'+(lab?'<span>'+lab+'<em>'+v.done+'</em>人</span>':'')+'</div>';
 return '<button type="button" class="nm-statcard nm-stat-summary" data-a="stats"><div class="nm-stat-h"><b>阅读统计</b><span>点击查看'+ico('right','sm')+'</span></div><div class="nm-stat-summary-body">'+groups.map(([label,v])=>cell(label,v)).join('')+'</div></button>';}
`;
const statusModal=`
function guardianStatusAccess(n,studentId){return role==='teacher'&&n?.status==='published'&&C.canManage(me(),n)&&C.recipients(n).students.includes(studentId);}
function guardianStatusModal(n,studentId){if(!guardianStatusAccess(n,studentId))return sheet('家长状态',emptyHtml('当前无权查看'));
 const student=C.students.find(s=>s.id===studentId),cls=C.classes.find(c=>c.id===student?.classId),parents=[...new Map(C.bindings(DB).filter(b=>b.active&&b.schoolId===n.schoolId&&b.childId===studentId).map(b=>[b.guardianId,b])).values()].sort((a,b)=>zh(a.name||a.guardianId,b.name||b.guardianId));
 const rows=parents.map(parent=>{const rs=Object.values(n.receipts||{}).filter(r=>r.kind==='student'&&r.recipientId===studentId&&r.guardianId===parent.guardianId),read=rs.some(r=>r.readAt),complete=n.config.ack==='confirm'?rs.some(r=>r.confirmAt):n.config.ack==='sign'?rs.some(r=>r.signatures?.length):read,status=complete?(n.config.ack==='confirm'?'已确认收到':n.config.ack==='sign'?'已签字':'已读'):read?'已读':'未读',name=parent.name||'家长',relation=parent.relationship||parent.relation||parent.rel||'';
 return '<div class="nm-guardian-status-row"><div class="nm-av">'+esc(name.slice(-1))+'</div><div><b>'+esc(name)+'</b>'+(relation?'<small>'+esc(relation)+'</small>':'')+'</div><span class="'+(!read?'todo':complete?'done':'read')+'">'+status+'</span></div>';}).join('');
 return sheet(esc(student?.name||studentId)+(cls?' <small class="nm-guardian-status-class">'+esc(cls.name)+'</small>':''),rows||'<p class="nm-guardian-status-empty">暂无绑定家长</p>','','nm-guardian-status-sheet');
}
`;
for(const role of ['家长','教师']){const dir=p.join(m.dest,'端-'+role),coreFile=p.join(dir,'assets/notification-mini/core.js');let core=read(coreFile);
core=core.replace("teacher=r.kind==='teacher'","teacher=r.kind==='teacher'||r.kind==='manager'");core=core.replace("!['student','teacher'].includes(r.kind)","!['student','teacher','manager'].includes(r.kind)");
core=core.replace("    if(a.role==='parent'&&!bindings(db)","    const managerRead=a.role==='teacher'&&action==='read'&&n?.status==='published'&&canManage(a,n);\n    if(a.role==='parent'&&!bindings(db)");
core=core.replace("if(!n||(!teacherReceiver&&(a.role!=='parent'||!canView(a,n))))","if(!n||(!teacherReceiver&&!managerRead&&(a.role!=='parent'||!canView(a,n))))");
core=core.replace("const recipientId=teacherReceiver?a.id:child;","const recipientId=teacherReceiver||managerRead?a.id:child;");core=core.replace("kind:teacherReceiver?'teacher':'student',signatures:[]};const firstRead", "kind:teacherReceiver?'teacher':managerRead?'manager':'student',signatures:[]};if(teacherReceiver&&r.kind==='manager')r.kind='teacher';const firstRead");
fs.writeFileSync(coreFile,core);const dupCore=p.join(dir,'notification-mini/core.js');if(fs.existsSync(dupCore))fs.copyFileSync(coreFile,dupCore);
let app=read(p.join(dir,'assets/notification-mini/app.js'));app=app.replace("if(!n||n.status!=='published'||!C.canView(me(),n))return '';","if(!n||n.status!=='published'||!C.canView(me(),n)||(role==='teacher'&&!isReceiver(n)))return '';");
app=app.replace("if(isReceiver(n)&&!myReceipt(n).readAt){", "const manager=role==='teacher'&&n.status==='published'&&C.canManage(me(),n),read=role==='teacher'?Object.values(n.receipts||{}).some(r=>['teacher','manager'].includes(r.kind)&&r.recipientId===me().id&&r.guardianId===me().id&&r.readAt):!!myReceipt(n).readAt;\n if((isReceiver(n)||manager)&&!read){");
const start=app.indexOf('function statsPage(){'),end=app.indexOf('function guardianRecords(',start);if(start<0||end<0)throw Error('统计函数位置缺失');app=app.slice(0,start)+stats+'\n'+statusModal+'\n'+app.slice(end);
const s0=app.indexOf('function statLine('),s1=app.indexOf('function detailPage(',s0);if(s0<0||s1<0)throw Error('统计卡片位置缺失');app=app.slice(0,s0)+summary+app.slice(s1);
app=app.replace("if(m.type==='audience')return audienceModal();","if(m.type==='guardian-status')return guardianStatusModal(n,m.studentId);\n if(m.type==='audience')return audienceModal();");
app=app.replace("case 'stats-kind':", "case 'guardian-status':{reload();const current=get(S.id);if(!guardianStatusAccess(current,v)){toast('当前无权查看家长状态');return;}setModal({type:'guardian-status',studentId:v});return;}\n case 'stats-group':S.statsCollapsed??={};S.statsCollapsed[S.id+'|'+v]=!S.statsCollapsed[S.id+'|'+v];render();return;\n case 'stats-kind':");
app=app.replace("if(['guardian-details','guardian-image'].includes(S.modal?.type)){const sb=", "if(S.modal?.type==='guardian-status'||['guardian-details','guardian-image'].includes(S.modal?.type)){const sb=");
app=app.replace("if(e.key==='Escape'&&['guardian-details','guardian-image'].includes(S.modal?.type))", "if(e.key==='Escape'&&(S.modal?.type==='guardian-status'||['guardian-details','guardian-image'].includes(S.modal?.type)))");
app=app.replace("root.addEventListener('click',click);", "root.addEventListener('click',click);\nroot.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)&&e.target.matches('.nm-srow-open')){e.preventDefault();click(e);}});");
app=app.replace("if(p==='stats')return '阅读情况';", "if(p==='stats')return '阅读统计';");
app=app.replace("L.push('【即时状态】", "if(role==='teacher')L.push('【管理查看】发布人管理查看已发布通知也记录本人首次已读，并锁定编辑。名单外的管理已读不参加接收范围统计、不展示个人阅读动态。其他名单外教师只浏览本校通知，无个人阅读动态。统计完整范围与家长弹窗仍仅发布人可见。');\n if(S.modal?.type==='guardian-status')L.push('【未读学生家长状态】展示当前有效绑定家长及查收状态，无绑定显示暂无绑定家长；不新增关注公众号状态或电话功能。关闭返回原统计筛选。');\n L.push('【即时状态】");
fs.writeFileSync(p.join(dir,'assets/notification-mini/app.js'),app);const dup=p.join(dir,'notification-mini/app.js');if(fs.existsSync(dup))fs.copyFileSync(p.join(dir,'assets/notification-mini/app.js'),dup);
fs.appendFileSync(p.join(dir,'assets/notification-mini.css'),`\n/* 统计卡片与班级分组：仅调整通知统计，保留原蓝色框架。 */
#notification-mini-root .nm-stat-summary{display:block!important;background:#fff;border-radius:12px;margin:14px 0;overflow:hidden}
#notification-mini-root .nm-stat-summary .nm-stat-h{padding:12px 12px 6px;border:0}
#notification-mini-root .nm-stat-summary .nm-stat-h b{font-size:14px;font-weight:600}
#notification-mini-root .nm-stat-summary .nm-stat-h>span{color:var(--nb);font-size:12px;display:flex;align-items:center}
#notification-mini-root .nm-stat-summary-body{padding:0 12px 12px}
#notification-mini-root .nm-stat-summary-line{display:flex;flex-wrap:wrap;gap:4px 10px;font-size:12px;line-height:1.7;color:var(--sub)}
#notification-mini-root .nm-stat-summary-line small{font-size:12px}.nm-stat-summary-line em{font-style:normal;color:var(--nb)}
#notification-mini-root .nm-stat-class{background:#fff;margin:0 0 10px}
#notification-mini-root .nm-stat-class-head{display:flex;gap:7px;align-items:center;width:100%;padding:14px 16px;color:var(--ink);font-size:14px;border-bottom:1px solid var(--line)}
#notification-mini-root .nm-stat-class-list .nm-srow{margin:0 16px;padding-left:0;padding-right:0;align-items:center}
#notification-mini-root .nm-stat-class-list .nm-srow:last-child{border-bottom:0}
#notification-mini-root .nm-srow-open{cursor:pointer}.nm-stat-arrow{color:var(--mute);margin-top:7px}
#notification-mini-root .nm-guardian-status-class{color:var(--mute);font-size:12px;font-weight:400;margin-left:6px}
#notification-mini-root .nm-guardian-status-sheet .nm-sheet-b{min-height:180px}
#notification-mini-root .nm-guardian-status-row{display:flex;align-items:center;gap:10px;padding:14px 2px;border-bottom:1px solid var(--line)}
#notification-mini-root .nm-guardian-status-row>div:nth-child(2){flex:1;min-width:0;display:flex;flex-direction:column}
#notification-mini-root .nm-guardian-status-row b{font-size:14px;font-weight:500;color:var(--ink)}
#notification-mini-root .nm-guardian-status-row small{font-size:12px;color:var(--mute)}
#notification-mini-root .nm-guardian-status-row>span{font-size:13px;color:var(--sub)}
#notification-mini-root .nm-guardian-status-row>span.todo{color:var(--warn)}
#notification-mini-root .nm-guardian-status-row>span.done{color:var(--ok)}
#notification-mini-root .nm-guardian-status-empty{padding:25px 0;text-align:center;color:var(--mute);font-size:13px}
`);
}
fs.writeFileSync(p.join(m.task,'资料/已确认Q31-Q35.md'),'# Q31—Q35\n\n31 完整范围统计和家长明细仍仅发布人；校园通知仍全部本校通知，教师不在范围不展示个人阅读动态，仅范围内教师有本人动态。\n32 卡片留白层级参考图片，保留原蓝色、字号和顶部框架。\n33 增加班级分组和未读学生家长状态弹窗。\n34 不新增公众号关注状态或拨号业务。\n35 用户明确修订建议：管理人查看也记录自己已读，当前接受因此容易查看后锁编辑。实现发布人管理查看记录、锁编辑；名单外管理记录不计入范围统计，仍不展示个人动态。\n');
console.log('已接入班级分组、未读弹窗、统计卡片与管理已读规则');
