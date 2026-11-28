/* 同一份通知模型供 Web、老师、代发和家长端使用。仅为本地交互原型。 */
(function (root) {
  'use strict';
  const clone = value => JSON.parse(JSON.stringify(value));
  const uid = prefix => prefix + '-' + (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2));
  const schools = [
    { id: 's1', name: '明德小学', mode: 'agency', partner: '徽育科技', authorized: true },
    { id: 's2', name: '启航小学', mode: 'direct', partner: '平台运营中心', authorized: true },
    { id: 's3', name: '海棠小学', mode: 'agency', partner: '徽育科技', authorized: true },
    { id: 's4', name: '青禾小学', mode: 'direct', partner: '平台运营中心', authorized: true },
    { id: 's5', name: '远山小学', mode: 'agency', partner: '其他代理商', authorized: false }
  ];
  const classes = [{id:'c52',name:'五年级2班',count:12},{id:'c51',name:'五年级1班',count:8},{id:'c32',name:'三年级2班',count:8},{id:'c11',name:'一年级1班',count:6}];
  const teachers = [{id:'t1',name:'王雅琴',dept:'五年级组'},{id:'t2',name:'李建国',dept:'五年级组'},{id:'t3',name:'孙丽华',dept:'德育处'},{id:'t4',name:'周敏',dept:'教务处'},{id:'t5',name:'陈晓峰',dept:'三年级组'},{id:'t6',name:'刘芳',dept:'三年级组'},{id:'t7',name:'赵明',dept:'一年级组'},{id:'t8',name:'马志远',dept:'校领导'}];
  const students = classes.flatMap(c=>Array.from({length:c.count},(_,i)=>({id:c.id+'-'+(i+1),classId:c.id,name:(c.id==='c52'&&i===0?'周子豪':c.id==='c32'&&i===0?'周子萱':c.id==='c52'&&i===1?'王子轩':c.id==='c52'&&i===2?'刘欣怡':c.id==='c52'&&i===3?'徐明轩':['陈','李','张','林','刘','吴','赵','徐'][i%8]+['思远','可欣','明轩','雨桐','梓涵','欣悦','沐阳','嘉宁'][Math.floor(i/2)%8])}))); 
  const children = [{id:'c52-1',name:'周子豪',classId:'c52'},{id:'c32-1',name:'周子萱',classId:'c32'}];
  const accounts = {school:{name:'陈老师',label:'学校管理员',id:'admin'},teacher:{name:'王雅琴',label:'任课老师',id:'t1'},agent:{name:'林悦',label:'代理商',id:'agent1'},ops:{name:'陈晨',label:'平台运营',id:'ops1'},parent:{name:'周女士',label:'学生家长',id:'p1'}};
  const ackNames={read:'只需阅读查看',confirm:'需确认收到',sign:'需签字确认'};
  const stateNames={published:'已发布',scheduled:'待发送',draft:'草稿',deleted:'已删除',expired:'已截止'};
  const roleNames={school:'学校 Web',teacher:'老师小程序',agent:'代理商后台',ops:'运营后台',parent:'家长小程序'};
  const fail=(code,message,extra={})=>({ok:false,code,message,...extra});
  function actor(role,schoolId){return {...accounts[role],role,schoolId,classes:['c52','c32'],schoolNameAllowed:true};}
  function school(id){return schools.find(s=>s.id===id);}
  const DAY_MS=86400000;
  function deliveryUntil(n){return Infinity;} // 通知无截止限制；已有截止数据也不再限制查收
  function rosterSnapshot(n,at=Date.now()){const ids=new Set((n.config.studentIds||[]).filter(id=>students.some(s=>s.id===id)));(n.config.classes||[]).forEach(cid=>students.filter(s=>s.classId===cid).forEach(s=>ids.add(s.id)));const tids=[...new Set((n.config.teachers||[]).filter(id=>teachers.some(t=>t.id===id)))];return {studentIds:[...ids],teacherIds:tids,capturedAt:at};}
  function recipients(n,at=Date.now()){
    if(n.status==='published'&&n.rosterSnapshot){
      const sids=[...new Set(n.rosterSnapshot.studentIds||[])];
      const tids=[...new Set(Array.isArray(n.rosterSnapshot.teacherIds)?n.rosterSnapshot.teacherIds:(n.config.teachers||[]))];
      return {students:sids,teachers:tids};
    }
    const ids=new Set((n.config.studentIds||[]).filter(id=>students.some(s=>s.id===id)));
    (n.config.classes||[]).forEach(cid=>students.filter(s=>s.classId===cid).forEach(s=>ids.add(s.id)));
    return {students:[...ids],teachers:[...new Set((n.config.teachers||[]).filter(id=>teachers.some(t=>t.id===id)))]};
  }
  function allowedSchool(a,id){const s=school(id);if(!s||a.schoolId!==id)return false;if(a.role==='agent')return s.mode==='agency'&&s.authorized;if(a.role==='ops')return s.mode==='direct'&&s.authorized;return ['school','teacher','parent'].includes(a.role);}
  function allowedAudience(a,n){if(a.role!=='teacher')return true;const ids=recipients(n).students;return ids.every(id=>a.classes.includes(students.find(s=>s.id===id)?.classId))&&(n.config.teachers||[]).every(id=>(a.teacherScope||['t1','t2']).includes(id));}
  function canView(a,n){if(!allowedSchool(a,n.schoolId))return false;if(['school','agent','ops'].includes(a.role)&&['deleted','draft'].includes(n.status))return false;if(a.role==='parent')return n.status==='published'&&recipients(n).students.includes(a.childId||'c52-1');if(a.role==='teacher')return n.status!=='deleted'&&(teacherOwner(a,n)||n.status==='published');return true;}
  function teacherOwner(a,n){return a.role==='teacher'&&allowedSchool(a,n.schoolId)&&n.origin==='teacher'&&n.creator===a.id;}
  function canManage(a,n){if(a.role==='teacher')return teacherOwner(a,n)&&n.status!=='deleted';return a.role!=='parent'&&canView(a,n)&&allowedAudience(a,n)&&n.status!=='deleted';}
  function canDelete(a,n){return a.role==='teacher'?teacherOwner(a,n)&&n.status!=='deleted':canManage(a,n);}
  function canEdit(a,n,at=Date.now()){if(a.role==='teacher')return teacherOwner(a,n)&&['draft','scheduled','published'].includes(n.status)&&(n.status!=='published'||!locked(n));const permitted=canManage(a,n);return permitted&&(n.status!=='published'||(!locked(n)&&at<=deliveryUntil(n)));}
  function counts(n){const r=recipients(n);const rs=Object.values(n.receipts||{});const complete=x=>n.config.ack==='read'?!!x.readAt:n.config.ack==='confirm'?!!x.confirmAt:!!x.signatures?.length;const metric=(ids,kind)=>({total:ids.length,read:ids.filter(id=>rs.some(x=>x.kind===kind&&x.recipientId===id&&x.readAt)).length,done:ids.filter(id=>rs.some(x=>x.kind===kind&&x.recipientId===id&&complete(x))).length});return {students:metric(r.students,'student'),teachers:metric(r.teachers,'teacher')};}
  function unreadRecipientIds(n,kind){const ids=kind==='student'?recipients(n).students:kind==='teacher'?recipients(n).teachers:[];const rs=Object.values(n.receipts||{});return ids.filter(id=>!rs.some(x=>x.kind===kind&&x.recipientId===id&&x.readAt));}
  function locked(n){return Object.values(n.receipts||{}).some(r=>r.kind!=='manager'&&(r.readAt||r.confirmAt||r.signatures?.length));}
  function writeLog(n,a,action,at,detail){n.history??=[];n.history.unshift({id:uid('log'),at,actor:a.name,role:a.role,action,version:n.version,detail:detail||'',snapshot:clone({title:n.title,blocks:n.blocks,attachments:n.attachments,config:n.config,supplements:n.supplements,cover:n.cover,theme:n.theme,music:n.music})});}
  function textBlock(text){return {id:uid('b'),type:'text',text};}
  function empty(a){return {id:uid('n'),schoolId:a.schoolId,title:'',cover:'',theme:'plain',music:'',blocks:[textBlock('')],attachments:[],config:{classes:[],studentIds:[],teachers:[],ack:'read',schoolName:['school','agent','ops'].includes(a.role),scheduleEnabled:false,scheduledAt:'',deadlineAt:''},rosterSnapshot:{studentIds:[],capturedAt:null},deliveryWindow:null,status:'draft',version:0,creator:a.id,creatorName:a.name,origin:a.role,receipts:{},supplements:[],history:[],createdAt:Date.now(),updatedAt:Date.now(),updated:false};}
  function validate(n,a,publish,at){const plainText=v=>String(v||'').replace(/<br\s*\/?\s*>/gi,'\n').replace(/<\/(?:div|p|li)>/gi,'\n').replace(/<[^>]*>/g,'').replace(/&nbsp;|&#160;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'\"').replace(/&#39;/gi,"'");
    if(!n.title.trim())return fail('TITLE','请填写通知标题');
    const maxTitleLength=['school','agent','ops'].includes(a.role)?50:40;
    if(n.title.length>maxTitleLength)return fail('TITLE','通知标题最多'+maxTitleLength+'字');
    if(!Array.isArray(n.blocks))return fail('CONTENT','通知内容格式无效');
    if(!n.blocks.some(b=>b.type==='text'?plainText(b.text).trim():b.type==='link'?b.url?.trim():b.src||b.asset))return fail('CONTENT','请至少添加一段文本、一张图片、一个视频或一个链接');
    if(n.noticeKind!=='beautiful'){if(n.blocks.filter(b=>b.type==='text').reduce((s,b)=>s+plainText(b.text).length,0)>5000)return fail('CONTENT','正文文本合计最多5000字');
    if(n.blocks.filter(b=>b.type!=='text').length>9)return fail('CONTENT','附件合计最多9份');}
    if(n.noticeKind==='beautiful'&&(n.attBlocks||[]).length>9)return fail('CONTENT','附件合计最多9份');
    for(const b of n.blocks){if(b.type==='link'&&!/^https?:\/\//i.test(b.url||''))return fail('CONTENT','链接须以 https:// 或 http:// 开头');if(['image','video','audio'].includes(b.type)&&!b.src&&!b.asset)return fail('CONTENT','请为'+({image:'图片',video:'视频',audio:'录音'}[b.type])+'选择素材');}
    if(a.role==='teacher'&&n.noticeKind!=='beautiful'){if(n.attachments.length>5||n.attachments.some(f=>f.size>20*1024*1024))return fail('FILES','PDF文件最多5个，每个不超过20MB');if(n.attachments.some(f=>!/\.pdf$/i.test(f.name||'')))return fail('FILES','附件仅支持PDF文件');}else{if(n.attachments.length>9||n.attachments.some(f=>f.size>20*1024*1024))return fail('FILES','附件最多9份，每份不超过20MB');if(n.attachments.some(f=>!/\.(pdf|docx?|xlsx?|jpe?g|png)$/i.test(f.name||'')))return fail('FILES','附件仅支持PDF、Word、Excel及JPEG、JPG、PNG格式');}
    if((n.config.classes||[]).some(id=>!classes.some(c=>c.id===id))||(n.config.studentIds||[]).some(id=>!students.some(s=>s.id===id))||(n.config.teachers||[]).some(id=>!teachers.some(t=>t.id===id)))return fail('AUDIENCE','发布对象包含无效的班级或人员');
    if(!allowedAudience(a,n))return fail('PERMISSION','接收对象超出当前账号可管理范围，不能覆盖其他班级的内容');
    if(!['read','confirm','sign'].includes(n.config.ack))return fail('CONFIG','请选择有效的查收方式');
    if(n.config.schoolName&&!a.schoolNameAllowed)return fail('PERMISSION','当前老师未获学校名义发布权限，请使用老师名义');
    if(['agent','ops'].includes(a.role)&&!n.config.schoolName)return fail('PERMISSION','代发必须使用学校名义');
    if(publish){const r=recipients(n);if(!r.students.length&&!r.teachers.length)return fail('AUDIENCE','请选择发布对象');const scheduleOn=n.config.scheduleEnabled===undefined?!!n.config.scheduledAt:!!n.config.scheduleEnabled,schedule=Date.parse(n.config.scheduledAt||'');if(scheduleOn&&(!Number.isFinite(schedule)||schedule<=at))return fail('SCHEDULE','请填写有效的定时发送时间，格式为 YYYY-MM-DD HH:mm:ss');if(n.config.scheduledAt&&!Number.isFinite(schedule))return fail('SCHEDULE','定时发送时间格式为 YYYY-MM-DD HH:mm:ss');n.config.deadlineAt='';}
    return {ok:true};
  }
  function save(db,draft,a,baseVersion,intent='save',at=Date.now()){
    const old=db.notices.find(x=>x.id===draft.id);
    if(!allowedSchool(a,draft.schoolId)||a.role==='parent')return fail('PERMISSION','当前账号无权操作这所学校');
    if(old&&(!canEdit(a,old)||old.schoolId!==draft.schoolId))return fail('PERMISSION','当前通知不在可编辑范围内');
    if(old&&old.version!==baseVersion)return fail('CONFLICT','已被修改，本次修改无法提交',{current:clone(old)});
    if(old&&old.status==='published'&&locked(old))return fail('LOCKED','已有人阅读，通知无法修改');
    const n=clone(draft);n.config.deadlineAt='';
    const sameLockedSettings=(next,prev)=>{const a=clone(next),b=clone(prev);a.schoolName=b.schoolName;return JSON.stringify(a)===JSON.stringify(b);};
    if(old&&['published','scheduled'].includes(old.status)&&!sameLockedSettings(n.config,old.config))return fail('CONFIG_LOCKED','发布对象、查收方式和发布时间不能修改');
    if(old&&old.status==='published'){
      n.status='published';n.receipts=clone(old.receipts);n.supplements=clone(old.supplements);n.publishedAt=old.publishedAt;
      n.rosterSnapshot=clone(old.rosterSnapshot||rosterSnapshot(old,old.publishedAt||old.createdAt));
      n.config.deadlineAt=old.config.deadlineAt||'';n.deliveryWindow={startedAt:at,untilAt:Number.isFinite(Date.parse(n.config.deadlineAt))?Date.parse(n.config.deadlineAt):at+30*DAY_MS};
    }else if(old&&old.status==='scheduled'){
      n.status='scheduled';n.rosterSnapshot=clone(old.rosterSnapshot||{studentIds:[],capturedAt:null});n.deliveryWindow=clone(old.deliveryWindow||null);
    }else if(intent==='draft'){n.status='draft';n.config={classes:[],studentIds:[],teachers:[],ack:'read',schoolName:['school','agent','ops'].includes(a.role),scheduleEnabled:false,scheduledAt:'',deadlineAt:''};n.rosterSnapshot={studentIds:[],capturedAt:null};n.deliveryWindow=null;}else if(intent==='publish'||old?.status==='scheduled'){
      n.status=n.config.scheduledAt?'scheduled':'published';
      if(n.status==='published'){n.publishedAt=at;n.rosterSnapshot=rosterSnapshot(n,at);n.deliveryWindow={startedAt:at,untilAt:Number.isFinite(Date.parse(n.config.deadlineAt||''))?Date.parse(n.config.deadlineAt):at+30*DAY_MS};}
    }
    const check=validate(n,a,n.status!=='draft',at);if(!check.ok)return check;
    n.version=(old?.version||0)+1;n.createdAt=old?.createdAt||at;n.updatedAt=at;n.creator=old?.creator||a.id;n.creatorName=old?.creatorName||a.name;n.origin=old?.origin||a.role;n.lastEditor=a.name;n.lastEditorRole=a.role;
    n.updated=old?.updated||!!(old?.status==='published'&&(counts(old).students.read+counts(old).teachers.read)>0);
    n.history=clone(old?.history||[]);
    writeLog(n,a,old?(old.status==='draft'&&n.status!=='draft'?'发布通知':'修改通知'):(n.status==='draft'?'保存草稿':'发布通知'),at,old?'跨端共用同一通知；保留创建来源与回执':'通知归属 '+school(n.schoolId).name);
    if(old)db.notices[db.notices.indexOf(old)]=n;else db.notices.unshift(n);syncMessages(db,at);db.revision++;return {ok:true,notice:clone(n)};
  }
  function manage(db,id,a,version,action,payload={},at=Date.now()){
    const n=db.notices.find(x=>x.id===id);if(!n||!canManage(a,n))return fail('PERMISSION','无权执行此操作');if(['delete','cancel'].includes(action)&&!canDelete(a,n))return fail('PERMISSION','仅通知发布人可以删除或取消定时');if(n.version!==version)return fail('CONFLICT','通知已变化，请刷新后重试',{current:clone(n)});
    if(action==='supplement') {if(n.status!=='published')return fail('STATE','仅已发布通知可补充说明');if(!payload.text?.trim())return fail('CONTENT','请填写补充说明');n.supplements.push({id:uid('sup'),text:payload.text.trim(),at,by:a.name,role:a.role});}
    else if(action==='delete'){
      const index=db.notices.indexOf(n),snapshot=clone(n);
      snapshot.version++;snapshot.updatedAt=at;snapshot.deletedAt=at;snapshot.deletedBy={id:a.id,name:a.name,role:a.role};
      snapshot.lastEditor=a.name;snapshot.lastEditorRole=a.role;
      writeLog(snapshot,a,'删除通知',at,'保留删除时通知内容、发布设置、对象范围和阅读回执记录');
      db.deletedArchive??=[];
      db.deletedArchive.push({id:n.id,schoolId:n.schoolId,sourceStatus:n.status,deletedAt:at,deletedBy:{id:a.id,name:a.name,role:a.role},snapshot});
      if(index>=0)db.notices.splice(index,1);
      db.revision++;return {ok:true,notice:clone(snapshot)};
    }
    else if(action==='cancel'){if(n.status!=='scheduled')return fail('STATE','仅待发送通知可取消定时');n.status='draft';n.config.scheduledAt='';}
    else if(action==='remind'){
      if(n.status!=='published')return fail('STATE','仅已发布通知可以提醒');
      
      // 本次只调整三个 Web 端的提醒入口；老师小程序保留此前原型交互。
      if(a.role==='teacher'){
        n.reminders??=[];n.reminders.push({at,by:a.name,target:payload.target||'unread'});
      }else{
      if(!['student','teacher'].includes(payload.kind))return fail('TARGET','请选择未读学生或未读教师');
      const recipientIds=unreadRecipientIds(n,payload.kind);
      if(!recipientIds.length)return fail('NO_UNREAD','当前没有未读对象');
      n.reminders??=[];n.reminders.push({at,by:a.name,target:payload.kind==='student'?'students-unread':'teachers-unread',recipientIds,guardianScope:payload.kind==='student'?'全部关联家长':undefined});
      }
    }
    else return fail('ACTION','未知操作');
    n.version++;n.updatedAt=at;n.lastEditor=a.name;n.lastEditorRole=a.role;writeLog(n,a,{supplement:'补充说明',cancel:'取消定时',remind:'提醒未读对象'}[action],at,payload.text||payload.kind||'保留阅读与回执记录');db.revision++;return {ok:true,notice:clone(n)};
  }

  const ACTION_LABELS={read:'已读',confirm:'已确认收到',sign:'已签字'};
  function actionSnapshot(db,n,r,action,at,a=null){
    const legacy=!a,teacher=r.kind==='teacher'||r.kind==='manager',signature=(r.signatures||[]).filter(s=>Number.isFinite(Number(s.at))&&Number(s.at)>0).slice().sort((x,y)=>x.at-y.at)[0];
    const binding=!legacy&&!teacher?bindings(db).find(b=>b.schoolId===n.schoolId&&b.childId===r.recipientId&&b.guardianId===r.guardianId):null;
    const read=action==='read',old=read?r.readSnapshot:(action==='confirm'?r.confirmSnapshot:signature?.snapshot);
    const studentNameSnapshot=teacher?'':legacy?(old?.studentNameSnapshot||(read?r.readStudentNameSnapshot:r.studentNameSnapshot)||''):(students.find(s=>s.id===r.recipientId)?.name||'');
    const relationshipSnapshot=teacher?'':legacy?(old?.relationshipSnapshot||(read?r.readGuardianRelationSnapshot:r.guardianRelationSnapshot)||''):(a.relationship||a.relation||binding?.relationship||binding?.relation||binding?.rel||'');
    const actorId=r.guardianId||r.recipientId,actorRole=teacher?'teacher':'parent';
    const operationId=legacy?'legacy:'+([n.id,r.recipientId,actorRole,actorId,action,at].map(encodeURIComponent).join(':')):uid('receipt-action');
    return {operationId,operationIdSource:legacy?'legacy-derived':'captured',noticeId:n.id,schoolId:n.schoolId,recipientId:r.recipientId,actorId,actorRole,action,occurredAt:Number(at),noticeVersion:read?(r.readVersion||null):action==='confirm'?(r.confirmVersion||n.version):(signature?.version||n.version),studentNameSnapshot,relationshipSnapshot,guardianNameSnapshot:teacher?'':(legacy?(r.guardianNameSnapshot||r.guardian||''):a.name),teacherNameSnapshot:teacher?(legacy?(r.teacherNameSnapshot||r.guardian||''):a.name):'',snapshotSource:legacy?'retained-legacy':'captured-at-action'};
  }
  function ensureReceiptActions(db){let changed=false;for(const n of db.notices||[])for(const r of Object.values(n.receipts||{})){
    if(!r||typeof r!=='object'||!['student','teacher','manager'].includes(r.kind))continue;
    const signature=(r.signatures||[]).filter(s=>Number.isFinite(Number(s.at))&&Number(s.at)>0).slice().sort((a,b)=>a.at-b.at)[0];
    const actions=[['read',r.readAt],['confirm',r.confirmAt],['sign',signature?.at]].filter(([,at])=>Number.isFinite(Number(at))&&Number(at)>0);
    if(!actions.length)continue;
    if(!r.receiptActions||Array.isArray(r.receiptActions)||typeof r.receiptActions!=='object'){r.receiptActions={};changed=true;}
    for(const [kind,at] of actions)if(!r.receiptActions[kind]){r.receiptActions[kind]=actionSnapshot(db,n,r,kind,at);changed=true;}
  }return changed;}
  function receiptActions(n,kind,recipientId){const rows=[];for(const r of Object.values(n.receipts||{})){if(r.kind!==kind||r.recipientId!==recipientId)continue;for(const event of Object.values(r.receiptActions||{}))if(event&&ACTION_LABELS[event.action]&&event.noticeId===n.id&&event.recipientId===recipientId&&event.actorRole===(kind==='student'?'parent':'teacher'))rows.push(clone(event));}const seen=new Set();rows.sort((a,b)=>a.occurredAt-b.occurredAt||String(a.operationId).localeCompare(String(b.operationId)));return rows.filter(e=>{const key=[e.noticeId,e.recipientId,e.actorRole,e.actorId,e.action].join('|');if(seen.has(key))return false;seen.add(key);return true;});}

  function receipt(db,id,a,action,signature,at=Date.now()){
    const n=db.notices.find(x=>x.id===id);const child=a.childId||'c52-1';
    const teacherReceiver=a.role==='teacher'&&allowedSchool(a,n?.schoolId)&&n?.status==='published'&&recipients(n).teachers.includes(a.id);
    const managerRead=a.role==='teacher'&&action==='read'&&n?.status==='published'&&canManage(a,n);
    if(a.role==='parent'&&!bindings(db).some(b=>b.active&&b.schoolId===a.schoolId&&b.childId===child&&b.guardianId===a.id))return fail('PERMISSION','当前学生关联已失效，不能提交查收');
    if(!n||(!teacherReceiver&&!managerRead&&(a.role!=='parent'||!canView(a,n))))return fail('PERMISSION','当前接收人不可查看此通知');
    const recipientId=teacherReceiver||managerRead?a.id:child;const key=recipientId+':'+a.id;
    const old=n.receipts[key];
    if(['confirm','sign'].includes(action)&&(old?.confirmAt||old?.signatures?.length))return fail('ALREADY_DONE','你已提交过此通知，不能重复提交或修改');
    const r=old?clone(old):{recipientId,guardianId:a.id,guardian:a.name,kind:teacherReceiver?'teacher':managerRead?'manager':'student',signatures:[]};if(teacherReceiver&&r.kind==='manager')r.kind='teacher';const firstRead=!r.readAt;r.signatures??=[];r.readAt||=at;r.readVersion||=n.version;
    if(['confirm','sign'].includes(action)){r.guardianNameSnapshot??=a.name;r.guardianRelationSnapshot??=a.relationship||a.relation||'';}
    if(action==='confirm'){if(n.config.ack!=='confirm')return fail('STATE','该通知无需确认收到');r.confirmAt||=at;r.confirmVersion||=n.version;}
    if(action==='sign'){if(n.config.ack!=='sign'||!signature)return fail('SIGN','请先手写签名');r.signatures.push({at,version:n.version,image:signature});}
    r.receiptActions??={};
    if(firstRead&&!r.receiptActions.read)r.receiptActions.read=actionSnapshot(db,n,r,'read',r.readAt,a);
    if(['confirm','sign'].includes(action)&&!r.receiptActions[action]){r.receiptActions[action]=actionSnapshot(db,n,r,action,action==='confirm'?r.confirmAt:r.signatures[0].at,a);if(action==='sign')r.signatures[0].operationId=r.receiptActions.sign.operationId;}
    n.receipts[key]=r;ensureReceiptActions(db);db.revision++;return {ok:true,notice:clone(n)};
  }
  function due(db,at=Date.now(),schoolId=null) {let changed=false;db.notices.forEach(n=>{if((!schoolId||n.schoolId===schoolId)&&n.status==='scheduled'&&Date.parse(n.config.scheduledAt)<=at){n.status='published';n.version++;n.publishedAt=at;n.rosterSnapshot=rosterSnapshot(n,at);n.deliveryWindow={startedAt:at,untilAt:Number.isFinite(Date.parse(n.config.deadlineAt||''))?Date.parse(n.config.deadlineAt):at+30*DAY_MS};writeLog(n,{name:'定时任务',role:'system'},'定时发布',at);changed=true;}});if(changed){syncMessages(db,at);db.revision++;}return changed;}

  function bindings(db){
    const presets=[
      {schoolId:'s1',childId:'c52-1',guardianId:'p1',name:'周女士',relationship:'妈妈',active:true},
      {schoolId:'s1',childId:'c52-1',guardianId:'p-c52-1-2',name:'周先生',relationship:'爸爸',active:true},
      {schoolId:'s1',childId:'c52-1',guardianId:'p-c52-1-3',name:'周爷爷',relationship:'爷爷',active:true},
      {schoolId:'s1',childId:'c52-1',guardianId:'p-c52-1-4',name:'周奶奶',relationship:'奶奶',active:true},
      {schoolId:'s1',childId:'c52-1',guardianId:'p-c52-1-5',name:'李外婆',relationship:'外婆',active:true},
      {schoolId:'s1',childId:'c52-2',guardianId:'p-c52-2-1',name:'王女士',relationship:'妈妈',active:true},
      {schoolId:'s1',childId:'c52-2',guardianId:'p-c52-2-2',name:'王先生',relationship:'爸爸',active:true},
      {schoolId:'s1',childId:'c52-2',guardianId:'p-c52-2-3',name:'王爷爷',relationship:'爷爷',active:true},
      {schoolId:'s1',childId:'c52-3',guardianId:'p-c52-3-1',name:'刘女士',relationship:'妈妈',active:true},
      {schoolId:'s1',childId:'c52-3',guardianId:'p-c52-3-2',name:'刘先生',relationship:'爸爸',active:true},
      {schoolId:'s1',childId:'c32-1',guardianId:'p1',name:'周女士',relationship:'妈妈',active:true}
    ];
    if(!db.guardianBindings){
      db.guardianBindings=students.filter(s=>!['c52-1','c52-2','c52-3'].includes(s.id)).map(s=>({schoolId:'s1',childId:s.id,guardianId:'guardian-'+s.id,name:'家长',relationship:'家长',active:true})).concat(presets);
    }else{
      db.guardianBindings=db.guardianBindings.filter(b=>!['guardian-c52-1','guardian-c52-2','guardian-c52-3'].includes(b.guardianId));
      for(const p of presets){
        const cur=db.guardianBindings.find(b=>b.schoolId===p.schoolId&&b.childId===p.childId&&b.guardianId===p.guardianId);
        if(!cur)db.guardianBindings.push({...p});
        else if(!cur.relationship)cur.relationship=p.relationship;
      }
    }
    return db.guardianBindings;
  }
  function syncMessages(db,at=Date.now()){
    db.noticeMessages??=[];const bound=bindings(db);let changed=false;
    for(const n of db.notices.filter(n=>n.status==='published')){
      const audience=recipients(n,at),targets=audience.teachers.map(id=>({role:'teacher',accountId:id,childId:'',name:teachers.find(t=>t.id===id)?.name||id}));
      for(const b of bound)if(b.active&&b.schoolId===n.schoolId&&audience.students.includes(b.childId))targets.push({role:'parent',accountId:b.guardianId,childId:b.childId,name:b.name});
      for(const t of targets){const key=[n.schoolId,n.id,t.role,t.accountId,t.childId].join('|');let m=db.noticeMessages.find(m=>m.key===key);if(!m&&at>deliveryUntil(n))continue;
        if(!m){m={key,noticeId:n.id,schoolId:n.schoolId,role:t.role,accountId:t.accountId,childId:t.childId,createdAt:at,readAt:null,channels:{mini:'available',service:'simulated'}};db.noticeMessages.push(m);changed=true;}
        if(m.title!==n.title||m.ack!==n.config.ack){m.title=n.title;m.ack=n.config.ack;m.source=n.config.schoolName?(school(n.schoolId)?.name||'学校'):n.creatorName;m.publishedAt=n.publishedAt;changed=true;}
      }
    }
    for(const arch of db.deletedArchive||[]){
      const sn=arch?.snapshot;
      if(!sn||sn.id!=='s1-n9')continue;
      const key=[sn.schoolId,sn.id,'parent','p1','c52-1'].join('|');
      if(!db.noticeMessages.some(m=>m.key===key)){
        db.noticeMessages.push({key,noticeId:sn.id,schoolId:sn.schoolId,role:'parent',accountId:'p1',childId:'c52-1',title:sn.title,ack:sn.config?.ack||'read',source:sn.config?.schoolName?(school(sn.schoolId)?.name||'学校'):(sn.creatorName||'老师'),publishedAt:sn.publishedAt||sn.createdAt,createdAt:sn.publishedAt||sn.createdAt||at,readAt:null,channels:{mini:'available',service:'simulated'}});
        changed=true;
      }
    }
    return changed;
  }

  function seed(){
    const at=Date.now(),db={schema:8,revision:1,notices:[],deletedArchive:[],templates:[]};
    for(const s of schools.filter(s=>s.authorized)){
      const proxyRole= s.mode==='agency'?'agent':'ops';
      const examples=[
        ['家校携手，赴一场秋日之约','confirm','school',['c52','c32'],'published',false],
        ['秋季研学活动安全告知书','sign','teacher',['c52'],'published',true],
        ['一分钟看懂校园安全','read',proxyRole,['c52','c32'],'published',false],
        ['明日美术课，请带好这些材料','read','teacher',['c52'],'published',false],
        ['家庭教育公益课 · 在线学习入口','read',proxyRole,['c52'],'published',false],
        ['期中家长会时间提醒','confirm','teacher',['c52'],'scheduled',false],
        ['冬季校服订购通知','confirm','school',['c52'],'draft',false],
        ['教职工家校沟通培训','sign','school',[],'published',true],
        ['已取消的社团活动安排','read','school',['c52'],'deleted',false]
      ];
      examples.forEach((ex,i)=>{
        const [title,ack,role,cls,status,withReceipt]=ex,a=actor(role,s.id),n=empty(a);n.id=s.id+'-n'+(i+1);n.title=title;n.version=1;n.status=status;n.createdAt=at-(i+1)*3600000;n.updatedAt=n.createdAt;n.publishedAt=n.createdAt;n.config={classes:cls,studentIds:[],teachers:i===0?['t1','t2']:i===7?teachers.map(t=>t.id):[],ack,schoolName:role!=='teacher',scheduledAt:status==='scheduled'?new Date(at+86400000).toISOString():'',deadlineAt:''};
        if(i===0){n.cover='assets/campus.svg';n.blocks=[textBlock('亲爱的家长：\n教育是一场温暖的同行。诚邀您参加本周的校园开放日，一起走进孩子的学习日常。'),{id:uid('b'),type:'image',src:'assets/campus.svg',caption:'秋日校园，期待与您相见'},textBlock('活动时间：本周五 14:30—16:30\n活动地点：学校报告厅及各班教室\n温馨提示：请提前10分钟到校，入校时出示预约信息。'),{id:uid('b'),type:'link',title:'查看校园开放日活动安排',url:'https://www.moe.gov.cn/'}];n.attachments=[{id:uid('f'),name:'校园开放日活动安排.pdf',size:690,src:'assets/活动安排.pdf'}];}
        if(i===1)n.blocks=[textBlock('为保障研学活动顺利开展，请家长和孩子共同阅读安全须知：\n1. 按时集合，服从带队老师安排。\n2. 文明出行，不独自离队。\n3. 如有身体不适，请及时告知班主任。\n请阅读后签字确认。')];
        if(i===2)n.blocks=[textBlock('用一分钟，和孩子一起学习课间与出行安全。'),{id:uid('b'),type:'video',src:'assets/安全课堂.mp4',poster:'assets/campus.svg',caption:'校园安全小课堂 · 演示视频'}];
        if(i===3)n.blocks=[textBlock('各位家长，明日美术课请为孩子准备：\n• 一盒彩笔\n• 两个干净的废旧纸盒\n• 一把儿童安全剪刀\n材料装入收纳袋并写好姓名，谢谢配合。')];
        if(i===4)n.blocks=[{id:uid('b'),type:'link',title:'家庭教育公益课 · 点击查看',url:'https://www.moe.gov.cn/'}];
        if(i>=5)n.blocks=[textBlock(i===5?'本周五召开期中家长会，请合理安排时间。具体教室安排以班主任后续通知为准。':i===7?'本周三16:30开展家校沟通专题培训，请各位教师阅读并签字确认。':'请各位家长查看本次安排，感谢您的支持与配合。')];
        if(['published','deleted'].includes(status)){n.rosterSnapshot=rosterSnapshot(n,n.publishedAt);n.deliveryWindow={startedAt:n.publishedAt,untilAt:n.publishedAt+30*DAY_MS};}
        if(i<5&&i!==3){recipients(n).students.slice(0,4).forEach((id,j)=>{n.receipts[id+':seed']={kind:'student',recipientId:id,guardianId:'other',guardian:j?'家长':'爸爸',readAt:at-1200000,signatures:withReceipt?[{at:at-900000,version:1,image:'assets/signature.svg'}]:[]};});}
        if(i===7)n.receipts['t2:seed']={kind:'teacher',recipientId:'t2',guardianId:'t2',guardian:'李建国',readAt:at-600000,signatures:[{at:at-600000,version:1,image:'assets/signature.svg'}]};
        writeLog(n,a,status==='draft'?'保存草稿':'发布通知',n.createdAt,'原型示例数据');
        if(status==='deleted')db.deletedArchive.push({id:n.id,schoolId:n.schoolId,sourceStatus:'已删除示例记录',deletedAt:n.updatedAt,deletedBy:{id:'seed',name:'演示数据',role:'system'},snapshot:clone(n)});else db.notices.push(n);
      });
    }
    return db;
  }
  const api={ACTION_LABELS,ensureReceiptActions,receiptActions,clone,uid,schools,school,classes,teachers,students,children,accounts,ackNames,stateNames,roleNames,actor,recipients,allowedSchool,allowedAudience,canView,canManage,canDelete,canEdit,counts,unreadRecipientIds,locked,deliveryUntil,bindings,syncMessages,empty,save,manage,receipt,due,seed,textBlock};
  root.NoticeCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
