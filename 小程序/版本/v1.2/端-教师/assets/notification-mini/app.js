/* 智小徽小程序 · 家校通知模块 v0.16（T-20261120-01 重做界面层）
 * 只负责 sc-notification 内容区的界面与交互；数据规则沿用 core.js（与学校/代理商/运营 Web 共用）。
 * 本地交互原型：不接真实后端、微信分享、推送和文件上传服务。 */
(()=>{'use strict';
const root=document.getElementById('notification-mini-root');
if(!root||!window.NoticeCore)return;
const C=window.NoticeCore,KEY='campus-notice-v6-20261102',SCHOOL='s1';
const role=root.classList.contains('notice-module-teacher')?'teacher':'parent';
const CHILD='c52-1';
const THEMES=[{id:'plain',name:'简洁白底'},{id:'green',name:'清新绿底'},{id:'paper',name:'暖色浅底'}];
const LIMIT={title:40,text:3000,images:9,videoSec:600};
const S={page:'list',tab:role==='teacher'?'campus':'all',query:'',applied:'',filters:{status:'',ack:'',kind:''},
 draft:null,base:0,dirty:false,origin:'kind',id:'',modal:null,tplCat:'热门推荐',tplQuery:'',tplId:'',
 statsKind:'student',statsFilter:'unread',errors:{},toastTimer:null,mode:'new',demo:{},failNext:'',landingMode:'stranger',landingPrev:null,landingDone:false};

/* ---------- 工具 ---------- */
const $=s=>root.querySelector(s),clone=C.clone;
const esc=v=>String(v??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const plain=v=>String(v||'').replace(/<br\s*\/?>/gi,'\n').replace(/<[^>]*>/g,'');
const IMAGE_HINT='通知的封面图、内容中的图片建议采用360*240px，图片自动以宽度对齐、居中显示';
function indentParagraphs(value){return String(value??'').split(/\r?\n/).map(line=>{if(!line.trim()||line.startsWith('　　')||/^[ \t\u00a0]{2}/.test(line))return line;if(line.startsWith('　'))return '　'+line;if(/^[ \t\u00a0]/.test(line))return line;return '　　'+line;}).join('\n');}
function prepareBodyIndent(n){if(!n||n.bodyIndentVersion==='paragraph-v1')return;n.blocks=(n.blocks||[]).map(b=>b.type==='text'?{...b,text:indentParagraphs(plain(b.text))}:b);n.bodyIndentVersion='paragraph-v1';}
const parts=at=>{try{return Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(new Date(at)).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]))}catch{return null}};
const fDate=at=>{const p=at&&parts(at);return p?p.year+'-'+p.month+'-'+p.day:'—'};
const fTime=at=>{const p=at&&parts(at);return p?p.year+'-'+p.month+'-'+p.day+' '+p.hour+':'+p.minute:'—'};
const fFull=at=>{const p=at&&parts(at);return p?p.year+'-'+p.month+'-'+p.day+' '+p.hour+':'+p.minute+':'+p.second:'—'};
const fShort=at=>{const p=at&&parts(at);return p?p.month+'-'+p.day+' '+p.hour+':'+p.minute:'—'};
const toInput=iso=>{const p=iso&&parts(Date.parse(iso));return p?p.year+'-'+p.month+'-'+p.day+'T'+p.hour+':'+p.minute+':'+p.second:''};
const fromInput=v=>{const m=/^(\d{4}-\d\d-\d\d)T(\d\d:\d\d)(?::(\d\d))?$/.exec(String(v||''));if(!m)return '';const t=Date.parse(m[1]+'T'+m[2]+':'+(m[3]||'00')+'+08:00');return Number.isFinite(t)?new Date(t).toISOString():''};
const tomorrow9=()=>{const p=parts(Date.now()+86400000);return new Date(Date.parse(p.year+'-'+p.month+'-'+p.day+'T09:00:00+08:00')).toISOString()};
const zh=(a,b)=>String(a).localeCompare(String(b),'zh-Hans-CN-u-co-pinyin');
const I={
 back:'<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
 right:'<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
 search:'<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></svg>',
 filter:'<svg viewBox="0 0 24 24"><path d="M4 5h16l-6 7.5V19l-4-2v-4.5z"/></svg>',
 image:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.6"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17"/></svg>',
 video:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M10.5 9.3v5.4l4.6-2.7z"/></svg>',
 link:'<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
 text:'<svg viewBox="0 0 24 24"><path d="M5 6h14M12 6v13M8.5 19h7"/></svg>',
 camera:'<svg viewBox="0 0 24 24"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h1.8l1.4-2h4.6l1.4 2h1.8A2.5 2.5 0 0 1 20 8.5v8A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5z"/><circle cx="12" cy="12.5" r="3.4"/></svg>',
 plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
 close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
 up:'<svg viewBox="0 0 24 24"><path d="M6 14l6-6 6 6"/></svg>',
 down:'<svg viewBox="0 0 24 24"><path d="M6 10l6 6 6-6"/></svg>',
 check:'<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
 file:'<svg viewBox="0 0 24 24"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z"/><path d="M14 3.5V8h4"/></svg>',
 draft:'<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="14" rx="2.5"/><path d="M4 13h4.5l1.5 2h4l1.5-2H20"/></svg>',
 normal:'<svg viewBox="0 0 24 24"><path d="M7 3.5h7l4 4V20a.5.5 0 0 1-.5.5h-10A.5.5 0 0 1 7 20z"/><path d="M9.5 12h5M9.5 15.5h5"/></svg>',
 beauty:'<svg viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M3.5 8l8.5 5.5L20.5 8"/></svg>',
 bell:'<svg viewBox="0 0 24 24"><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 1.5h-15z"/><path d="M10 20.5h4"/></svg>',
 clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.5 2"/></svg>',
 share:'<svg viewBox="0 0 24 24"><circle cx="17.5" cy="6" r="2.5"/><circle cx="6.5" cy="12" r="2.5"/><circle cx="17.5" cy="18" r="2.5"/><path d="M8.7 10.9l6.6-3.7M8.7 13.1l6.6 3.7"/></svg>',
 more:'<svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="18" cy="12" r="1.4"/></svg>',
 edit:'<svg viewBox="0 0 24 24"><path d="M5 19h3.5L19 8.5 15.5 5 5 15.5z"/></svg>',
 trash:'<svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4.5h6V7m3 0-.8 13H6.8L6 7m3.5 3v6m5-6v6"/></svg>',
 layers:'<svg viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5"/></svg>',
 stats:'<svg viewBox="0 0 24 24"><path d="M4 20V11m5 9V5m5 15v-7m5 7V8"/></svg>',
 sign:'<svg viewBox="0 0 24 24"><path d="M4 18c3-1 4.5-9 7-9 2 0 0 7 2.5 7 1.5 0 2.5-3 3.5-3s1 2 3 2"/></svg>',
 empty:'<svg viewBox="0 0 64 64"><rect x="12" y="14" width="40" height="36" rx="5"/><path d="M12 30h12l3 5h10l3-5h12"/></svg>'
};
const ico=(n,cls='')=>'<i class="nm-i '+cls+'">'+(I[n]||'')+'</i>';
const btn=(a,label,cls='',extra='')=>'<button type="button" class="nm-btn '+cls+'" data-a="'+a+'" '+extra+'>'+label+'</button>';

/* ---------- 账号与数据 ---------- */
function me(){return role==='teacher'?{...C.actor('teacher',SCHOOL),id:'t1',name:'王贵贵老师',classes:C.classes.map(c=>c.id),teacherScope:C.teachers.map(t=>t.id)}:{...C.actor('parent',SCHOOL),id:'p1',name:'周女士',childId:S.messageChild||CHILD};}
function load(){try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d&&Number(d.schema)>=6){const migrate=Number(d.schema)<8;if(Number(d.schema)<7){const now=Date.now();for(const n of d.notices||[]){n.rosterSnapshot=n.rosterSnapshot||{studentIds:[...new Set([...(n.config?.studentIds||[]),...(n.config?.classes||[]).flatMap(cid=>C.students.filter(x=>x.classId===cid).map(x=>x.id))])],capturedAt:n.publishedAt||n.createdAt};if(['published','deleted'].includes(n.status))n.deliveryWindow=n.deliveryWindow||{startedAt:n.publishedAt||n.createdAt,untilAt:(Number(n.publishedAt)||Number(n.createdAt)||now)+30*86400000};}d.schema=7;}if(Number(d.schema)<8){d.deletedArchive=Array.isArray(d.deletedArchive)?d.deletedArchive:[];const keep=[];for(const n of Array.isArray(d.notices)?d.notices:[]){if(n.status==='deleted'){d.deletedArchive.push({id:n.id,schoolId:n.schoolId,sourceStatus:'历史删除记录',deletedAt:n.deletedAt||n.updatedAt||Date.now(),deletedBy:n.deletedBy||{id:'unknown',name:'历史删除操作人',role:'unknown'},snapshot:C.clone(n)});}else keep.push(n);}d.notices=keep;d.schema=8;}const msgChanged=C.syncMessages(d);if(migrate||msgChanged)localStorage.setItem(KEY,JSON.stringify(d));return d;}}catch{}const d=C.seed();C.syncMessages(d);try{localStorage.setItem(KEY,JSON.stringify(d))}catch{}return d;}
let DB=load();
let channel=null;try{if(typeof BroadcastChannel!=='undefined')channel=new BroadcastChannel(KEY)}catch{channel=null}
const reload=()=>{DB=load()};
function transact(work){if(S.failNext){const f=S.failNext;S.failNext='';if(f==='unclear'){const r0=transact(work);return r0?.ok?{ok:false,code:'UNCLEAR',message:'提交结果不明确'}:r0;}return {ok:false,code:f==='storage'?'STORAGE':'NETWORK',message:f==='storage'?'本地存储空间不足，草稿未保存；当前内容已保留在编辑页':'网络异常，提交失败；当前内容已保留，请稍后重试'};}const d=load();let r;try{r=work(d)}catch(e){r={ok:false,message:'保存失败，请稍后重试。'}}if(r===true||r?.ok){C.syncMessages(d);try{localStorage.setItem(KEY,JSON.stringify(d));DB=d;try{channel?.postMessage({revision:d.revision})}catch{}}catch{r={ok:false,message:'浏览器本地空间不足，当前内容未保存。'}}}else DB=d;return r;}
const get=id=>DB.notices.find(n=>n.id===id);
function tpl(id){const key=String(id||'');if(key.startsWith('my:')){const x=(DB.templates||[]).find(t=>t.id===key.slice(3)&&(t.ownerId?t.ownerId===me().id&&(!t.ownerRole||t.ownerRole===me().role):t.by===me().name&&t.schoolId===me().schoolId));return x?{...x,id:key,category:'我的模板',cover:x.cover||'',articleCoverUrl:x.cover||'',blocks:x.blocks||[],noticeKind:x.kind||'beautiful',isUserTemplate:true}:null;}return (window.NotificationCatalog?.templates||[]).find(t=>t.id===id);}
const expired=n=>n.status==='published'&&Date.now()>C.deliveryUntil(n);
const isMine=n=>n.origin===role&&n.creator===me().id;
const isBeauty=n=>n?.noticeKind==='beautiful';const imageLimit=n=>isBeauty(n)?60:LIMIT.images;
const sortTime=n=>n.status==='scheduled'?Date.parse(n.config?.scheduledAt||'')||n.updatedAt:(n.status==='draft'?n.updatedAt:(n.publishedAt||n.updatedAt));
function source(n){if(n.config?.schoolName)return C.school(n.schoolId)?.name||'学校';if(isMine(n))return me().name+'（我）';const name=n.creatorName||'老师';return /老师$/.test(name)?name:name+'老师';}
function cover(n){return n.cover||(n.blocks||[]).find(b=>b.type==='image'&&b.src)?.src||'';}
function myReceipt(n){const a=me();const rs=Object.values(n.receipts||{}).filter(x=>role==='teacher'?(x.kind==='teacher'&&x.recipientId===a.id):(x.kind==='student'&&x.recipientId===me().childId&&x.guardianId===a.id));return {readAt:rs.find(x=>x.readAt)?.readAt,confirmAt:rs.find(x=>x.confirmAt)?.confirmAt,signatures:rs.flatMap(x=>x.signatures||[])};}
const isReceiver=n=>role==='parent'||(n.status==='published'&&(n.config?.teachers||[]).includes(me().id));
/* 本人查收状态：PRD PAR-02 / TCH-02 文案 */
function own(n){const r=myReceipt(n),ack=n.config?.ack||'read',late=expired(n);
 if(ack==='read')return r.readAt?{t:'已读',done:true}:{t:'请阅读通知',todo:true};
 if(ack==='confirm')return r.confirmAt?{t:'已确认',done:true}:late?{t:'已截止',late:true}:{t:'请点击确认',todo:true};
 return r.signatures.length?{t:'已签字',done:true}:late?{t:'已截止',late:true}:{t:'请签字确认',todo:true};}
function pubState(n){if(n.status==='draft')return {t:'草稿 · 最后编辑 '+fShort(n.updatedAt)};if(n.status==='scheduled')return {t:'待发送 · '+fShort(Date.parse(n.config?.scheduledAt||'')),todo:true};if(expired(n))return {t:'已截止',late:true};return {t:'已发布',done:true};}
function ownerCardState(n){const c=C.counts(n),total=c.students.total+c.teachers.total;if(!total)return pubState(n);const read=c.students.read+c.teachers.read,lines=['未读：'+Math.max(0,total-read)+'/'+total+'人'];if(n.config.ack==='confirm')lines.push('已确认：'+(c.students.done+c.teachers.done)+'/'+total+'人');else if(n.config.ack==='sign')lines.push('已签字：'+(c.students.done+c.teachers.done)+'/'+total+'人');return {ownerMetrics:lines};}
function stateName(n){return n.status==='draft'?'草稿':n.status==='scheduled'?'待发送':expired(n)?'已截止':'已发布';}

/* ---------- 列表数据 ---------- */
function teacherSets(){const a=me(),all=DB.notices.filter(n=>n.schoolId===SCHOOL&&C.canView(a,n));
 return {campus:all.filter(n=>n.status==='published'||(n.status==='scheduled'&&isMine(n))),
  mine:all.filter(n=>isMine(n)&&n.status!=='draft'),
  receive:all.filter(n=>n.status==='published'&&(n.config?.teachers||[]).includes(a.id)),
  draft:all.filter(n=>isMine(n)&&n.status==='draft')};}
function parentSets(){const a=me(),all=DB.notices.filter(n=>n.schoolId===SCHOOL&&C.canView(a,n));return {all,todo:all.filter(n=>own(n).todo)};}
function match(n,q){q=String(q||'').trim();if(!q)return true;return (n.title||'').includes(q)||source(n).includes(q)||(n.creatorName||'').includes(q);}
function passFilter(n){const f=S.filters;if(f.status&&stateName(n)!==f.status)return false;if(f.ack&&n.config?.ack!==f.ack)return false;if(f.kind&&(f.kind==='beautiful')!==isBeauty(n))return false;return true;}
const sorted=list=>list.slice().sort((x,y)=>sortTime(y)-sortTime(x));

/* ---------- 演示说明 ---------- */
function demo(){const L=[];const p=S.page;
 if(p==='list'&&role==='teacher')L.push('【入口与页面栈】首页“通知”入口进入；顶部返回回首页。四个页签、搜索、筛选、详情、编辑和弹层都在 sc-notification 内切换，不新增小程序路由。','【页签】校园通知=本校已发布通知（含本人待发送）；我发布=本人已发布/待发送；我接收=发送对象包含本人的通知；草稿箱=本人草稿（含当时填写的全部设置）。括号内为当前搜索/筛选后的数量。校园通知、我发布、草稿箱底部固定“发布通知”按钮；我接收不显示按钮。','【卡片】校园通知/我发布的已发布通知显示汇总未读人数；需确认/需签字通知追加对应完成数，只需阅读只显示未读数。待发送卡片显示待发送时间；我接收、草稿箱维持本人状态行。阅读统计明细在详情页查看。');
 else if(p==='list')L.push('【入口与页面栈】家长首页“通知”入口进入；顶部返回回首页。全部/待办、搜索、详情、确认和签字都在 sc-notification 内切换。','【范围】只显示当前登录学生的通知，无切换孩子模块（PRD PAR-01）。待办=本人尚未完成阅读/确认/签字的通知。','【卡片】封面、标题、来源、日期和本人操作状态；橙色为待办，灰色为已完成（PRD PAR-02）。搜索点击“搜索”后生效。');
 else if(p==='kind')L.push('【模板中心】顶部为普通通知、美文通知两个入口；不提供独立链接通知（PRD TCH-06）。','【模板数据】138张源卡片按分类展示；已采集正文块按记录回显，图片资源位均已填入缓存原图（本轮未逐项源UI核验）；正文采集缺口继续按模板状态说明显示，不以截图或仿写补造。模板仅用于美文通知。');
 else if(p==='tpl')L.push('【模板预览】当前模板：'+(tpl(S.tplId)?.title||'—')+'。使用后进入美文通知编辑，标题、封面、正文均可修改。');
 else if(p==='edit')L.push('【普通通知】标题必填≤40字；正文合计≤3000字；图片≤9张；单个视频≤10分钟；链接地址只校验以 http:// 或 https:// 开头；附件仅PDF，最多5份、每份≤20MB（PRD TCH-03）。','【发布设置】发布对象（学生/教师）、查收方式、以学校名义、定时发送（开启默认次日09:00:00）。','【草稿】保存草稿直接保存当前内容和已填写的发布设置，不校验标题、正文等字段；重新编辑时全部回显。预览和正式发布仍执行字段校验。');
 else if(p==='beauty')L.push('【美文通知】用 ⊕ 在任意位置插入文字/图片/视频/链接模块；每个内容块顶部显示模块类型及“上移、下移、删除”，每次移动一格，首尾不可移动时按钮置灰；删除前二次确认。模块顺序即接收端显示顺序（PRD TCH-04）。','【下一步】至少一个有效模块才可预览；保存草稿跳过字段内容校验，预览与发布仍校验。');
 else if(p==='preview')L.push('【美文预览】按当前背景只读展示；“选择背景”打开底部弹层：简洁白底、清新绿底、暖色浅底（PRD TCH-07）。“上一步”返回编辑，“下一步”进入发布设置。');
 else if(p==='settings')L.push('【发布对象选择】学生按年级、班级、在读学生三级树展示；班级文字缩进一级，学生姓名与班级文字左对齐。年级/班级可展开选择；教师页签的全选与全不选即时切换并同步选中人数。勾选整班后的范围续接说明位于已选人数下方。','【发布设置】必须明确发布对象、查收方式、学校名义和发送方式；通知不设截止时间，也无默认30天限制。定时发送选择年月日及精确到秒的时分秒，须晚于当前时间；正式发布时才生成两渠道消息。');
  else if(p==='landing')L.push('【分享落地页】复用当前通知详情正文；陌生访客、有账号已登录、有账号未登录三种入口均在 sc-notification 内切换，顶部标题居中并用关闭按钮返回来源视图，不新增页面栈。');
 else if(p==='detail'){const n=get(S.id);L.push('【通知详情】打开即记录本人已读，重复打开不重复计数。'+(n&&expired(n)?'当前通知已截止：可查看，不能再确认或签字。':''),role==='teacher'?'【发布人操作】校园通知/我发布的通知仅发布人可编辑、删除；本人已发布通知底部提供分享通知、更多操作；更多操作为删除通知、修改通知、存为模板、阅读统计。修改通知回显全部内容和发布设置；仅读、确认、签字三种方式均在任一人阅读后锁定编辑；无人阅读可编辑。删除不受已读与截止限制。存为模板只保存通知内容，按当前登录教师身份归入“我的模板”。本人待发送定时通知底部只显示等宽“编辑通知”和“删除通知”；编辑直接回显内容与发布设置并可修改，删除需二次确认，不提供更多操作入口。校园通知展示本校教师、学校端、代理商及平台发布的所有通知；非发布人仅查看及在本人接收范围内查收，无编辑、删除或阅读统计按钮。接收详情底栏按钮等宽，完成后保留分享通知并显示已阅读、已确认收到或已签字确认。草稿卡片“删除、编辑”文字居中。':'【查收操作】仅阅读：详情加载完成即记录已读；需确认：点击“确认收到”直接提交；需签字：手写完成后点击提交直接记录。未完成时显示当前状态，完成后收起操作按钮并显示已阅读/已确认收到/已签字确认。');}
 else if(p==='stats')L.push('【阅读情况】每次打开重新读取当前回执，不使用发布时的固定快照统计；通知无截止时间。按学生汇总：任一绑定家长完成即算完成。只有一种对象时隐藏顶部学生/教师页签，两种对象保留切换。完成学生行右侧“明细”打开底部弹窗，仅列已提交家长，按时间逆序；签字可看缩略图和可关闭原图，确认无图片。提交时姓名、关系和签字保留，解绑不删除历史快照。教师按个人统计。提醒只发给未读对象。');
 L.push('【一次提交】同一通知、同一学生、同一家长只能成功确认或签字一次；成功后无修改/再次提交。重复点击、刷新、分享入口、结果不明确时均核对已存回执，不追加记录。');
 if(['guardian-details','guardian-image'].includes(S.modal?.type))L.push('【当前明细弹层】仅通知发布人可查看；只列成功提交记录，每位家长一条，按时间逆序。关闭原图返回原明细弹层和滚动位置；关闭明细返回当前统计筛选。');
 L.push('【分享落地页演示】陌生访客、有账号已登录、有账号未登录三个按钮都展示同一通知正文；关闭按钮返回进入前的视图，全部在 sc-notification 内切换，不增加页面栈。');
 L.push('【演示场景】下方按钮会在当前原型页面上直接复现对应情况（异常、校验拦截、边界状态），点“恢复全部示例数据”可还原。');
 L.push('【数据】与学校/代理商/运营 Web 共用本地存储 '+KEY+'（同源页面联动）；校验规则与 Web 端共用 core.js；非真实后端。');
 try{demoInfo['sc-notification']={t:'通知 · 开发演示说明',d:L.join('\n'),a:scenarios()};if(typeof curScreen!=='undefined'&&curScreen==='sc-notification'&&document.getElementById('demo-pop')?.classList.contains('show')&&typeof renderDemo==='function')renderDemo();}catch{}}

/* ---------- 通用片段 ---------- */
function coverHtml(n,cls='nm-cover'){const src=cover(n);return '<div class="'+cls+' nm-cover-def"><span>通知</span>'+(src?'<img src="'+esc(src)+'" alt="" onerror="this.remove()">':'')+'</div>';}
function card(n,st,act){const state=st.ownerMetrics?st.ownerMetrics.map(x=>'<span>'+esc(x)+'</span>').join(''):esc(st.t)+(st.todo?ico('right','sm'):'');return '<button type="button" class="nm-card" data-a="'+act+'" data-id="'+esc(n.id)+'">'+coverHtml(n)+'<div class="nm-card-main"><div class="nm-card-title">'+(isBeauty(n)?'<em class="nm-kind">美文</em>':'')+esc(n.title||'未命名通知')+'</div><div class="nm-card-meta"><span class="nm-src">来自：'+esc(source(n))+'</span><span class="nm-date">'+fDate(sortTime(n))+'</span></div><div class="nm-card-st'+(st.ownerMetrics?' summary':'')+(st.todo?' todo':st.late?' late':'')+'">'+state+'</div></div></button>';}
function draftCard(n,st){return '<div class="nm-draft-card" data-id="'+esc(n.id)+'">'+card(n,st,'edit')+'<div class="nm-draft-actions"><button type="button" class="nm-draft-action delete" data-a="draft-delete" data-id="'+esc(n.id)+'">删除</button><button type="button" class="nm-draft-action edit" data-a="edit" data-id="'+esc(n.id)+'">编辑</button></div></div>';}
function failHtml(){return '<div class="nm-empty">'+ico('empty','big')+'<p>通知列表读取失败</p><span>网络异常或服务繁忙，当前页签和搜索内容已保留</span>'+btn('reload-list','重新加载','ghost sm')+'</div>';}
function emptyHtml(text,sub=''){return '<div class="nm-empty">'+ico('empty','big')+'<p>'+esc(text)+'</p>'+(sub?'<span>'+esc(sub)+'</span>':'')+'</div>';}
function toggle(on,a,extra=''){return '<button type="button" class="nm-switch'+(on?' on':'')+'" data-a="'+a+'" '+extra+' role="switch" aria-checked="'+(on?'true':'false')+'"><span></span></button>';}

/* ---------- 列表页 ---------- */
function teacherList(){const sets=teacherSets();const tabs=[['campus','校园通知'],['mine','我发布'],['receive','我接收'],['draft','草稿箱']];
 const view=k=>S.demo.empty?[]:sorted(sets[k].filter(n=>match(n,S.query)&&passFilter(n)));
 const items=view(S.tab);const fOn=Object.values(S.filters).some(Boolean);
 const st=n=>S.tab==='receive'?own(n):(['campus','mine'].includes(S.tab)&&n.status==='published'?ownerCardState(n):S.tab==='campus'&&isReceiver(n)?own(n):pubState(n));
 const body=items.length?items.map(n=>S.tab==='draft'?draftCard(n,st(n)):card(n,st(n),'open')).join('')+'<div class="nm-end">没有更多了</div>':(S.query||fOn?emptyHtml('没有找到匹配的通知','试试其他关键词或清除筛选'):emptyHtml({campus:'暂无校园通知',mine:'你还没有发布过通知',receive:'暂无需要你查收的通知',draft:'草稿箱是空的'}[S.tab],S.tab==='mine'?'点击下方“发布通知”创建第一条':''));
 const bodyFinal=S.demo.loadFail?failHtml():body;
 return '<div class="nm-page"><div class="nm-top"><div class="nm-searchbar"><label class="nm-search">'+ico('search')+'<input id="nm-q" placeholder="输入通知标题、发布人搜索" value="'+esc(S.query)+'" autocomplete="off">'+(S.query?'<button type="button" class="nm-clear" data-a="clear-q">'+ico('close','sm')+'</button>':'')+'</label><button type="button" class="nm-filter'+(fOn?' on':'')+'" data-a="filter">筛选'+ico('filter','sm')+'</button></div><div class="nm-tabs">'+tabs.map(([k,t])=>'<button type="button" class="'+(S.tab===k?'on':'')+'" data-a="tab" data-v="'+k+'">'+t+'<small>('+view(k).length+')</small></button>').join('')+'</div></div><div class="nm-scroll" id="nm-list">'+bodyFinal+'</div>'+(S.tab==='receive'?'':'<div class="nm-foot">'+btn('new',ico('plus','sm')+'发布通知','primary block')+'</div>')+'</div>';}
function parentList(){const sets=parentSets();const view=k=>(S.demo.empty||S.demo.noChild)?[]:sorted(sets[k].filter(n=>match(n,S.applied)));const items=view(S.tab);
 const body=items.length?items.map(n=>card(n,own(n),'open')).join('')+'<div class="nm-end">没有更多了</div>':(S.applied?emptyHtml('没有找到匹配的通知','换个关键词试试'):S.tab==='todo'?emptyHtml('待办已全部完成','新的通知会出现在这里'):emptyHtml('暂无通知','学校或老师发布通知后会显示在这里'));
 const bodyFinal=S.demo.noChild?'<div class="nm-empty">'+ico('empty','big')+'<p>未找到当前登录学生</p><span>请返回首页确认已关联孩子后再查看通知</span>'+btn('go-home','返回首页','ghost sm')+'</div>':S.demo.loadFail?failHtml():body;
 return '<div class="nm-page"><div class="nm-top"><div class="nm-searchbar"><label class="nm-search">'+ico('search')+'<input id="nm-q" placeholder="输入通知标题、发布人搜索" value="'+esc(S.query)+'" autocomplete="off" enterkeyhint="search">'+(S.query?'<button type="button" class="nm-clear" data-a="clear-q">'+ico('close','sm')+'</button>':'')+'</label><button type="button" class="nm-searchbtn" data-a="search">搜索</button></div><div class="nm-tabs two">'+[['all','全部'],['todo','待办']].map(([k,t])=>'<button type="button" class="'+(S.tab===k?'on':'')+'" data-a="tab" data-v="'+k+'">'+t+'<small>('+view(k).length+')</small></button>').join('')+'</div></div><div class="nm-scroll" id="nm-list">'+bodyFinal+'</div></div>';}

/* ---------- 模板中心 ---------- */
function tplItems(){const cat=window.NotificationCatalog||{templates:[]};const q=S.tplQuery.trim();if(S.tplCat==='我的模板')return (DB.templates||[]).filter(t=>t.ownerId?t.ownerId===me().id&&(!t.ownerRole||t.ownerRole===me().role):t.by===me().name&&t.schoolId===me().schoolId).map(t=>({...t,id:'my:'+t.id,category:'我的模板',cover:t.cover||'',blocks:t.blocks||[],noticeKind:t.kind||'beautiful',isUserTemplate:true})).filter(t=>!q||t.title.includes(q));return cat.templates.filter(t=>q?t.title.includes(q):t.category===S.tplCat);}
function tplRows(){const list=tplItems();return list.length?list.map(t=>'<button type="button" class="nm-tpl" data-a="tpl" data-id="'+esc(t.id)+'">'+(t.cover?'<img src="'+esc(t.cover)+'" alt="" loading="lazy">':'<i class="nm-tpl-default">文</i>')+'<span>'+esc(t.title)+'</span></button>').join(''):emptyHtml(S.tplQuery?'没有匹配的模板':'该分类暂无模板',S.tplQuery?'换个关键词试试':'');}
function kindPage(){const cats=(window.NotificationCatalog?.categories)||[];return '<div class="nm-page"><div class="nm-scroll nm-tplpage"><div class="nm-kinds"><button type="button" data-a="new-normal"><b class="k1">'+ico('normal')+'</b>普通通知</button><button type="button" data-a="new-beauty"><b class="k2">'+ico('beauty')+'</b>美文通知</button></div><div class="nm-tpl-search"><label class="nm-search">'+ico('search')+'<input id="nm-tq" placeholder="搜索美文模板" value="'+esc(S.tplQuery)+'" autocomplete="off">'+(S.tplQuery?'<button type="button" class="nm-clear" data-a="clear-tq">'+ico('close','sm')+'</button>':'')+'</label></div><div class="nm-tpl-wrap"><nav class="nm-cats'+(S.tplQuery?' muted':'')+'">'+cats.map(c=>'<button type="button" class="'+(c===S.tplCat&&!S.tplQuery?'on':'')+'" data-a="cat" data-v="'+esc(c)+'">'+esc(c)+'</button>').join('')+'</nav><div class="nm-tpl-list" id="nm-tpls">'+tplRows()+'</div></div></div></div>';}
function tplImagePending(label='图片素材待核对'){return '<div class="nm-tpl-image-missing" role="note">'+esc(label)+'</div>';}
function textAlignAttr(align){return align==='center'?' style="text-align:center"':'';}
function tplBlocksHtml(t){const blocks=Array.isArray(t.blocks)?t.blocks:[];if(!blocks.length)return '<div class="nm-note">该模板正文尚未核对，暂不填入推测内容。</div>';return blocks.map(b=>{
 const align=textAlignAttr(b.textAlign);
 if(b.type==='text')return (b.assetUrl||b.assetState==='pending'?'<div class="nm-tpl-image-text">'+(b.assetUrl?'<img src="'+esc(b.assetUrl)+'" alt="" loading="lazy">':tplImagePending())+'<p class="nm-p"'+align+'>'+esc(indentParagraphs(plain(b.text))).replace(/\n/g,'<br>')+'</p></div>':'<p class="nm-p"'+align+'>'+esc(indentParagraphs(plain(b.text))).replace(/\n/g,'<br>')+'</p>');
 if(b.type==='image')return b.assetUrl?'<figure class="nm-fig"><img src="'+esc(b.assetUrl)+'" alt="" loading="lazy" onerror="this.parentNode.classList.add(\'broken\')"></figure>':'<figure class="nm-fig">'+tplImagePending()+'</figure>';
 if(b.type==='imageText')return '<div class="nm-tpl-image-text">'+(b.assetUrl?'<img src="'+esc(b.assetUrl)+'" alt="" loading="lazy">':tplImagePending())+'<p class="nm-p"'+align+'>'+esc(indentParagraphs(plain(b.text))).replace(/\n/g,'<br>')+'</p></div>';
 if(b.type==='link')return '<div class="nm-note">'+esc(b.title||b.url||'链接内容')+'</div>';
 return '';
}).join('');}
function tplPage(){const t=tpl(S.tplId);if(!t)return emptyHtml('模板不存在');if(t.isUserTemplate){const n={title:t.title,noticeKind:t.kind||'beautiful',theme:t.theme||'plain',cover:t.cover||'',blocks:t.blocks||[],attachments:t.attachments||[],supplements:[]};return '<div class="nm-page"><div class="nm-scroll nm-prev-bg theme-'+esc(n.theme)+'">'+articleHtml(n,true)+'</div><div class="nm-foot">'+btn('use-tpl','使用模板','primary block')+'</div></div>'; }const cover=t.articleCoverUrl?'<img class="nm-a-cover" src="'+esc(t.articleCoverUrl)+'" alt="" onerror="this.remove()">':(t.articleCoverRef?tplImagePending('文章顶部图片待核对'):'');return '<div class="nm-page"><div class="nm-scroll nm-prev-bg theme-plain"><article class="nm-article theme-plain"><h1>'+esc(t.title)+'</h1><div class="nm-a-meta"><span>来自：系统模板</span><span>美文通知</span></div>'+cover+'<div class="nm-a-body">'+tplBlocksHtml(t)+'</div></article></div><div class="nm-foot">'+btn('use-tpl','使用模板','primary block')+'</div></div>';}

/* ---------- 编辑：草稿结构 ---------- */
function fresh(kind){const n=C.empty(me());n.noticeKind=kind;n.theme='plain';n.music='';n.config.schoolName=false;return n;}
function templateNoticeBlocks(t){return (t.blocks||[]).map(b=>{if(b.type==='text'){const x=C.textBlock(b.text||'');if(b.assetUrl||b.assetState==='pending'){x.templateImageUrl=b.assetUrl||'';x.templateImagePending=!b.assetUrl;}if(b.textAlign)x.templateTextAlign=b.textAlign;return x;}if(b.type==='image')return {id:C.uid('b'),type:'image',src:b.assetUrl||'',caption:'',templateAssetPending:!b.assetUrl};if(b.type==='imageText'){const x=C.textBlock(b.text||'');x.templateImageUrl=b.assetUrl||'';x.templateImagePending=!b.assetUrl;if(b.textAlign)x.templateTextAlign=b.textAlign;return x;}if(b.type==='link')return {id:C.uid('b'),type:'link',title:b.title||'',url:b.url||''};return null;}).filter(Boolean);}
function startNew(kind,t){S.draft=fresh(kind);S.base=0;S.mode='new';S.dirty=false;S.errors={};if(t){S.draft.title=t.title.slice(0,LIMIT.title);S.draft.cover=t.articleCoverUrl||t.cover||'';S.draft.templateId=t.id;if(t.isUserTemplate){S.draft.noticeKind=t.kind||kind;S.draft.blocks=C.clone(t.blocks||[C.textBlock('　　')]);S.draft.attachments=C.clone(t.attachments||[]);S.draft.theme=t.theme||'plain';}else S.draft.blocks=templateNoticeBlocks(t);if(!S.draft.blocks.length)S.draft.blocks=[C.textBlock('　　')];}if(kind==='beautiful'&&!t)S.draft.blocks=[C.textBlock('　　')];S.page=kind==='beautiful'?'beauty':'edit';render();}
const textLen=n=>(n.blocks||[]).filter(b=>b.type==='text').reduce((s,b)=>s+plain(b.text).length,0);
const imgCount=n=>(n.blocks||[]).filter(b=>b.type==='image').length;
const validBlock=b=>b.type==='text'?!!(plain(b.text).trim()||b.templateImageUrl||b.templateImagePending):b.type==='link'?String(b.url||'').trim():!!(b.src||b.asset||b.templateAssetPending);
const editing=()=>S.mode==='edit';
const lockedCfg=()=>false;
function audienceText(cfg){const cs=(cfg.classes||[]).map(id=>C.classes.find(c=>c.id===id)?.name).filter(Boolean),ss=(cfg.studentIds||[]).map(id=>C.students.find(s=>s.id===id)?.name).filter(Boolean),ts=(cfg.teachers||[]).map(id=>C.teachers.find(t=>t.id===id)?.name).filter(Boolean);const all=[...cs,...ss,...ts];if(!all.length)return '';return all.length>2?all.slice(0,2).join('、')+' 等'+audienceCount(cfg)+'人':all.join('、');}
function audienceCount(cfg){const ids=new Set(cfg.studentIds||[]);(cfg.classes||[]).forEach(c=>C.students.filter(s=>s.classId===c).forEach(s=>ids.add(s.id)));return ids.size+(cfg.teachers||[]).length;}

const schedOn=c=>c.scheduleEnabled===undefined?!!c.scheduledAt:!!c.scheduleEnabled;
function settingsRows(){const n=S.draft,c=n.config,lock=lockedCfg(),e=S.errors;const row=(a,label,val,cls='')=>'<button type="button" class="nm-row'+(lock?' lock':'')+(cls?' '+cls:'')+'" data-a="'+(lock?'locked':a)+'"><span>'+label+'</span><em>'+val+'</em>'+(lock?'':ico('right','sm'))+'</button>';
 const aud=audienceText(c);
 return '<section class="nm-group">'+(lock?'<div class="nm-lockhint">发布对象、查收方式和发送时间发布后不能修改</div>':'')+
 row('audience','发布对象<b class="req">*</b>',aud?esc(aud):'<i class="ph">请选择</i>',e.audience?'err':'')+
 row('ack','查收方式<b class="req">*</b>',esc(C.ackNames[c.ack]||'只需阅读查看'))+
 '<div class="nm-row'+(lock?' lock':'')+'"><span>以学校名义发通知</span><em class="nm-hint">'+(c.schoolName?esc(C.school(SCHOOL).name):'以本人名义')+'</em>'+toggle(!!c.schoolName,lock?'locked':'school-name')+'</div>'+
 '<div class="nm-row'+(lock?' lock':'')+'"><span>定时发送</span><em class="nm-hint">'+(schedOn(c)?'':'关闭时立即发送')+'</em>'+toggle(schedOn(c),lock?'locked':'schedule')+'</div>'+
 (schedOn(c)?row('time-schedule','发送时间',c.scheduledAt?fFull(Date.parse(c.scheduledAt)):'<i class="ph">请选择</i>',e.schedule?'err':''):'')+
 '</section>';}

function mediaList(blocks,skipFirstText){const rows=(blocks||[]).map((b,i)=>({b,i})).filter(({b,i})=>!(skipFirstText&&i===0&&b.type==='text'));if(skipFirstText){const order={image:0,video:1,link:2};rows.sort((a,b)=>(order[a.b.type]??3)-(order[b.b.type]??3)||a.i-b.i);}return rows.map(({b,i})=>{const tools=skipFirstText?'<div class="nm-blk-tools"><button type="button" data-a="blk-del" data-i="'+i+'" aria-label="删除">'+ico('close','sm')+'</button></div>':'<div class="nm-blk-tools">'+(i>0?'<button type="button" data-a="blk-up" data-i="'+i+'" aria-label="上移">'+ico('up','sm')+'</button>':'')+(i<blocks.length-1?'<button type="button" data-a="blk-down" data-i="'+i+'" aria-label="下移">'+ico('down','sm')+'</button>':'')+'<button type="button" data-a="blk-del" data-i="'+i+'" aria-label="删除">'+ico('close','sm')+'</button></div>';
 if(b.type==='image')return '<div class="nm-media nm-media-image"><img src="'+esc(b.src)+'" alt=""><input data-bind="cap" data-i="'+i+'" placeholder="图片说明（选填）" value="'+esc(b.caption||'')+'">'+tools+'</div>';
 if(b.type==='video')return '<div class="nm-media"><div class="nm-vthumb">'+ico('video')+'</div><div class="nm-media-txt"><b>'+esc(b.name||'视频')+'</b><small>'+(b.duration?Math.ceil(b.duration/60)+' 分钟以内':'视频')+'</small></div>'+tools+'</div>';
 if(b.type==='link')return '<div class="nm-media"><div class="nm-vthumb lk">'+ico('link')+'</div><div class="nm-media-txt"><b>'+esc(b.title||b.url)+'</b><small>'+esc(b.url)+'</small></div>'+tools+'</div>';
 return '<div class="nm-media txt"><textarea data-bind="text" data-i="'+i+'" rows="3" placeholder="输入文字">'+esc(plain(b.text))+'</textarea>'+tools+'</div>';}).join('');}

function attList(n){const a=n.attachments||[];return a.length?'<div class="nm-attedit">'+a.map((f,i)=>'<div class="nm-attrow">'+ico('file','sm')+'<span>'+esc(f.name)+'</span><small>'+fSize(f.size)+'</small><button type="button" data-a="att-del" data-i="'+i+'" aria-label="删除附件">'+ico('close','sm')+'</button></div>').join('')+'</div>':'';}
const fSize=b=>!b?'':b>=1048576?(b/1048576).toFixed(1)+'MB':Math.max(1,Math.round(b/1024))+'KB';
function addAttachments(files){const n=S.draft;n.attachments=n.attachments||[];if(n.attachments.length+files.length>5){toast('PDF文件最多5个');return;}if(files.some(f=>f.size>20*1024*1024||!/\.pdf$/i.test(f.name))){toast('仅支持PDF文件，每个不超过20MB');return;}for(const f of files)n.attachments.push({id:C.uid('file'),name:f.name,size:f.size,src:f.src||''});mark();render();toast('PDF附件已添加');}
function conflictHtml(){const c=S.conflict;if(!c)return '';return '<div class="nm-conflict"><p><b>其他端已更新至 V'+c.version+'</b> · '+esc(c.lastEditor||c.creatorName)+'<br>你当前的输入已保留，直接保存不会覆盖最新版本。</p><div><button type="button" data-a="conflict-review">查看两份内容</button><button type="button" data-a="conflict-copy">保留为新草稿</button><button type="button" data-a="conflict-reload">载入最新版本</button></div></div>';}
function editPage(){const n=S.draft,e=S.errors;if(n.blocks[0]?.type!=='text')n.blocks.unshift(C.textBlock('　　'));const len=textLen(n),imgs=imgCount(n);
 return '<div class="nm-page"><div class="nm-scroll nm-form">'+conflictHtml()+'<section class="nm-group"><div class="nm-title-in'+(e.title?' err':'')+'"><input data-bind="title" maxlength="'+LIMIT.title+'" placeholder="请输入通知标题" value="'+esc(n.title)+'"><small><b id="nm-tlen">'+n.title.length+'</b>/'+LIMIT.title+'</small></div>'+
 '<div class="nm-cover-in"><div class="nm-cover-label"><span>封面图<small>（选填）</small></span><small class="nm-image-tip">'+IMAGE_HINT+'</small></div><label class="nm-cover-pick'+(n.cover?' has-image':'')+'">'+(n.cover?'<img src="'+esc(n.cover)+'" alt=""><button type="button" class="nm-cover-del" data-a="cover-del">'+ico('close','sm')+'</button>':ico('camera'))+'<input type="file" accept="image/*" id="nm-cover-file" hidden></label></div>'+
 '<div class="nm-content'+(e.content?' err':'')+'"><textarea data-bind="text" data-i="0" placeholder="请输入通知内容…" rows="7">'+esc(plain(n.blocks[0].text))+'</textarea><small class="'+(len>LIMIT.text?'over':'')+'"><b id="nm-clen">'+len+'</b>/'+LIMIT.text+'</small></div>'+
 '<div class="nm-medias">'+mediaList(n.blocks,true)+'</div>'+
 '<div class="nm-tools"><label>'+ico('image')+'<small>'+imgs+'/'+LIMIT.images+'</small><input type="file" accept="image/*" multiple id="nm-img-file" hidden></label><label>'+ico('video')+'<small>最长10分钟</small><input type="file" accept="video/*" id="nm-video-file" hidden></label><button type="button" data-a="add-link">'+ico('link')+'<small>添加链接</small></button><label>'+ico('file')+'<small>PDF文件 '+(n.attachments||[]).length+'/5</small><input type="file" multiple accept=".pdf,application/pdf" id="nm-att-file" hidden></label></div>'+attList(n)+'</section>'+
 settingsRows()+'<p class="nm-foot-note">发布后家长和教师将在小程序收到通知；PC端同步可见该通知记录。</p></div>'+
 '<div class="nm-foot">'+(editing()?btn('cancel-edit','取消','ghost')+btn('publish','保存修改','primary'):btn('save-draft','保存草稿','ghost')+btn('publish','发布','primary'))+'</div></div>';}

function beautyPage(){const n=S.draft,e=S.errors;const ins=i=>'<button type="button" class="nm-ins" data-a="insert" data-i="'+i+'" aria-label="插入内容">'+ico('plus')+'</button>';
 const blk=(b,i)=>{const type={text:'文本',image:'图片',video:'视频',link:'链接'}[b.type]||'内容';const tools='<div class="nm-bk-head"><b class="nm-bk-type">'+type+'</b><div class="nm-bk-tools"><button type="button" data-a="blk-up" data-i="'+i+'" aria-label="上移" title="上移" '+(i===0?'disabled':'')+'>'+ico('up','sm')+'</button><button type="button" data-a="blk-down" data-i="'+i+'" aria-label="下移" title="下移" '+(i===n.blocks.length-1?'disabled':'')+'>'+ico('down','sm')+'</button><button type="button" data-a="blk-del" data-i="'+i+'" aria-label="删除" title="删除">'+ico('close','sm')+'</button></div></div>';
  let thumb='',main='';
 if(b.type==='text'){thumb=b.templateImageUrl?'<img class="nm-bk-thumb" src="'+esc(b.templateImageUrl)+'" alt="">':b.templateImagePending?'<div class="nm-bk-thumb t nm-tpl-bk-missing">'+ico('image')+'</div>':'<div class="nm-bk-thumb t">'+ico('text')+'</div>';main=(b.templateImagePending?'<div class="nm-bk-info"><b>模板图片素材待核对</b></div>':'')+'<textarea data-bind="text" data-i="'+i+'" rows="4" placeholder="点击添加文字"'+(b.templateTextAlign==='center'?' style="text-align:center"':'')+'>'+esc(plain(b.text))+'</textarea>';}
  else if(b.type==='image'){thumb=b.templateAssetPending?'<div class="nm-bk-thumb t nm-tpl-bk-missing">'+ico('image')+'</div>':'<img class="nm-bk-thumb" src="'+esc(b.src)+'" alt="">';main=b.templateAssetPending?'<div class="nm-bk-info"><b>模板图片素材待核对</b><small>补入原图后再预览或发布</small></div>':'<textarea data-bind="cap" data-i="'+i+'" rows="3" placeholder="点击添加图片说明">'+esc(b.caption||'')+'</textarea>';}
  else if(b.type==='video'){thumb='<div class="nm-bk-thumb v">'+ico('video')+'</div>';main='<div class="nm-bk-info"><b>'+esc(b.name||'视频')+'</b><small>单个视频最长10分钟</small></div>';}
  else if(b.type==='link'){thumb='<div class="nm-bk-thumb l">'+ico('link')+'</div>';main='<div class="nm-bk-info"><b>'+esc(b.title||'链接')+'</b><small>'+esc(b.url)+'</small></div>';}
  return '<div class="nm-bk'+(b.type==='image'||(b.type==='text'&&b.templateImageUrl)?' nm-bk-image':'')+'">'+tools+'<div class="nm-bk-content">'+thumb+'<div class="nm-bk-main">'+main+'</div></div></div>';};
 return '<div class="nm-page"><div class="nm-scroll nm-beauty">'+conflictHtml()+'<div class="nm-b-title'+(e.title?' err':'')+'"><input data-bind="title" maxlength="'+LIMIT.title+'" placeholder="请输入标题" value="'+esc(n.title)+'"><small><b id="nm-tlen">'+n.title.length+'</b>/'+LIMIT.title+'</small></div>'+
 '<div class="nm-b-cover"><small class="nm-image-tip">'+IMAGE_HINT+'</small><label class="nm-cover-pick wide'+(n.cover?' has-image':'')+'">'+(n.cover?'<img src="'+esc(n.cover)+'" alt=""><button type="button" class="nm-cover-del" data-a="cover-del">'+ico('close','sm')+'</button>':ico('camera')+'<small>添加封面（选填）</small>')+'<input type="file" accept="image/*" id="nm-cover-file" hidden></label></div>'+
 (e.content?'<div class="nm-errline">请至少添加一个有内容的模块</div>':'')+
 ins(0)+n.blocks.map((b,i)=>blk(b,i)+ins(i+1)).join('')+
 '<p class="nm-foot-note">模块顺序即家长看到的顺序 · 文字合计 '+textLen(n)+'/'+LIMIT.text+' · 图片 '+imgCount(n)+'/'+imageLimit(n)+'</p></div>'+
 '<div class="nm-foot">'+(editing()?btn('cancel-edit','取消','ghost'):'<button type="button" class="nm-iconbtn" data-a="save-draft">'+ico('draft')+'<small>保存草稿</small></button>')+btn('to-preview','预览','primary grow')+'</div></div>';}
/* ---------- 正文渲染 ---------- */
function blocksHtml(n){return (n.blocks||[]).filter(validBlock).map(b=>{
 const align=textAlignAttr(b.templateTextAlign);
 if(b.type==='text')return (b.templateImageUrl||b.templateImagePending?'<div class="nm-tpl-image-text">'+(b.templateImageUrl?'<img src="'+esc(b.templateImageUrl)+'" alt="">':tplImagePending())+'<p class="nm-p"'+align+'>'+esc((n.bodyIndentVersion==='paragraph-v1'?plain(b.text):indentParagraphs(plain(b.text)))).replace(/\n/g,'<br>')+'</p></div>':'<p class="nm-p"'+align+'>'+esc((n.bodyIndentVersion==='paragraph-v1'?plain(b.text):indentParagraphs(plain(b.text)))).replace(/\n/g,'<br>')+'</p>');
 if(b.type==='image')return b.templateAssetPending?'<figure class="nm-fig">'+tplImagePending()+'</figure>':'<figure class="nm-fig"><img src="'+esc(b.src)+'" alt="" onerror="this.parentNode.classList.add(\'broken\')">'+(b.caption?'<figcaption>'+esc(b.caption)+'</figcaption>':'')+'</figure>';
 if(b.type==='video')return '<figure class="nm-fig"><div class="nm-video" data-a="play">'+(b.poster?'<img src="'+esc(b.poster)+'" alt="">':'')+'<span>'+ico('video')+'</span></div>'+(b.caption?'<figcaption>'+esc(b.caption)+'</figcaption>':'')+'</figure>';
 if(b.type==='link')return '<button type="button" class="nm-linkcard" data-a="open-link" data-url="'+esc(b.url)+'">'+ico('link')+'<span><b>'+esc(b.title||b.url)+'</b><small>'+esc(b.url)+'</small></span>'+ico('right','sm')+'</button>';
 return '';}).join('');}
function articleHtml(n,preview){const th=isBeauty(n)?(n.theme||'plain'):'plain';const atts=(n.attachments||[]);
 return '<article class="nm-article theme-'+esc(th)+'"><h1>'+esc(n.title||'未命名通知')+'</h1><div class="nm-a-meta"><span>'+esc(preview?(n.config?.schoolName?C.school(SCHOOL).name:me().name):source(n))+'</span><span>'+(preview?fDate(Date.now()):fTime(sortTime(n)))+'</span></div>'+
 (n.cover?'<img class="nm-a-cover" src="'+esc(n.cover)+'" alt="">':'')+'<div class="nm-a-body">'+(blocksHtml(n)||'<p class="nm-p muted">（暂无正文）</p>')+'</div>'+
 (atts.length?'<div class="nm-atts"><h3>附件</h3>'+atts.map(f=>'<button type="button" class="nm-att" data-a="open-att">'+ico('file')+'<span>'+esc(f.name)+'</span>'+ico('right','sm')+'</button>').join('')+'</div>':'')+
 ((n.supplements||[]).length?'<div class="nm-sups"><h3>补充说明</h3>'+n.supplements.map(s=>'<div class="nm-sup"><p>'+esc(s.text)+'</p><small>'+esc(s.by)+' · '+fTime(s.at)+'</small></div>').join('')+'</div>':'')+'</article>';}

function previewPage(){const n=S.draft;return '<div class="nm-page"><div class="nm-scroll nm-prev-bg theme-'+esc(n.theme||'plain')+'">'+articleHtml(n,true)+'</div><div class="nm-foot">'+btn('bg','选择背景','ghost sm')+btn('prev-back','上一步','ghost')+btn('to-settings','下一步','primary')+'</div></div>';}
function settingsPage(){return '<div class="nm-page"><div class="nm-scroll nm-form">'+conflictHtml()+'<section class="nm-group nm-sumcard">'+coverHtml(S.draft,'nm-cover sm')+'<div><b>'+esc(S.draft.title)+'</b><small>美文通知 · '+(THEMES.find(t=>t.id===S.draft.theme)?.name||'简洁白底')+'</small></div></section>'+settingsRows()+'</div><div class="nm-foot">'+btn('settings-back','上一步','ghost')+btn('publish',editing()?'保存修改':'发布','primary')+'</div></div>';}

/* ---------- 详情 ---------- */
function statLine(n){const c=C.counts(n),ack=n.config.ack;const lab=ack==='confirm'?'已确认':ack==='sign'?'已签字':'';const cell=(k,m)=>m.total?'<div class="nm-stat"><small>'+k+'</small><b>'+m.read+'<i>/'+m.total+'</i></b><span>已读</span>'+(lab?'<b>'+m.done+'<i>/'+m.total+'</i></b><span>'+lab+'</span>':'')+'</div>':'';return '<button type="button" class="nm-statcard" data-a="stats"><div class="nm-stat-h"><b>阅读情况</b><span>查看明细'+ico('right','sm')+'</span></div><div class="nm-stat-b">'+cell('学生',c.students)+cell('教师',c.teachers)+'</div></button>';}
function detailPage(){S._otherNote=false;const n=get(S.id);if(!n)return '<div class="nm-page"><div class="nm-scroll">'+emptyHtml('通知已不存在','可能已被发布人删除')+'</div></div>';
 const mine=role==='teacher'&&isMine(n),recv=isReceiver(n),st=own(n),late=expired(n);
 const info='<div class="nm-a-info"><span>'+esc(C.ackNames[n.config.ack])+'</span>'+(n.status==='scheduled'?'<span>定时 '+fFull(Date.parse(n.config.scheduledAt))+'</span>':'')+'<span>'+(n.status==='scheduled'&&!n.config.deadlineAt?'截止：发送后30天':(late?'已于 ':'截止 ')+fTime(C.deliveryUntil(n))+(late?' 截止':''))+'</span></div>';
 let foot='';
 if(mine){if(n.status==='scheduled'){foot='<div class="nm-foot nm-owner-foot scheduled">'+btn('edit-notice','编辑通知','ghost')+btn('delete','删除通知','danger')+'</div>';}else{foot='<div class="nm-foot nm-owner-foot">'+btn('share',ico('share','sm')+'分享通知','ghost')+btn('more','更多操作','primary')+'</div>';}}
 else if(recv){
  const presentation=role==='teacher'?(S.tab==='receive'?'receive':'campus'):'parent',
    share=btn('share',ico('share','sm')+'分享通知','ghost receive-share'),
    footClass=(presentation==='receive'||presentation==='campus'||presentation==='parent')?'nm-foot nm-receive-foot':'nm-foot',
    stateFooter=(status,items)=>'<div class="'+footClass+'"><div class="nm-receive-status">当前状态：<b>'+status+'</b></div><div class="nm-receive-actions">'+items+'</div></div>',
    completed=label=>'<span class="nm-receive-complete" role="status">'+ico('check','sm')+label+'</span>',
    pendingState=myReceipt(n).readAt?'已读待确认':'未读待确认';
  if(n.config.ack==='read'){
    foot=stateFooter('已阅读',share+completed('已阅读'));
  } else if(st.done){
    const status=n.config.ack==='confirm'?'已确认收到':'已签字确认';
    foot=stateFooter(status,share+completed(status));
  } else if(late){
    const action=btn('receive-late','已截止','primary receive-action','disabled');
    foot=stateFooter(pendingState,share+action);
  } else {
    S._otherNote=Object.values(n.receipts||{}).some(x=>x.kind==='student'&&x.recipientId===me().childId&&x.guardianId!==me().id&&(n.config.ack==='confirm'?x.confirmAt:x.signatures?.length));
    const action=n.config.ack==='confirm'
      ?btn('confirm-rc','确认收到','primary receive-action')
      :btn('sign',ico('sign','sm')+'签字确认','primary receive-action');
    foot=stateFooter(pendingState,share+action);
  }
 } else if(role==='teacher'&&S.tab==='campus'&&n.status==='published'){
  foot='<div class="nm-foot">'+btn('share',ico('share','sm')+'分享通知','ghost block')+'</div>';
 }
return '<div class="nm-page"><div class="nm-scroll nm-detail theme-'+esc(isBeauty(n)?(n.theme||'plain'):'plain')+'">'+articleHtml(n)+info+(mine&&n.status==='published'?statLine(n):'')+(mine&&n.status==='scheduled'?'<div class="nm-note">待发送：到达定时时间后自动发布给发布对象。</div>':'')+(S._otherNote?'<div class="nm-note">孩子的其他家长已完成'+(n.config.ack==='confirm'?'确认':'签字')+'，学校按学生统计已完成；你的个人状态仍可单独'+(n.config.ack==='confirm'?'确认':'签字')+'。</div>':'')+'</div>'+foot+'</div>';}

function landingPage(){const n=get(S.id);if(!n)return '<div class="nm-page"><div class="nm-share-head"><b class="nm-share-head-title">通知详情</b><button type="button" class="nm-share-head-close" data-a="landing-close" aria-label="关闭">×</button></div><div class="nm-scroll">'+emptyHtml('通知已不存在','可能已被发布人删除')+'</div></div>';
 const info='<div class="nm-a-info"><span>'+esc(C.ackNames[n.config.ack])+'</span>'+(n.status==='scheduled'?'<span>定时 '+fFull(Date.parse(n.config.scheduledAt))+'</span>':'')+'<span>'+(n.status==='scheduled'&&!n.config.deadlineAt?'截止：发送后30天':(expired(n)?'已于 ':'截止 ')+fTime(C.deliveryUntil(n))+(expired(n)?' 截止':''))+'</span></div>';
 let foot='';
 if(S.landingMode==='stranger')foot='<div class="nm-foot nm-share-foot"><div class="nm-share-state"><span>当前访客</span><b>陌生人 · 未关联学生</b></div><p>通知正文与正常详情一致；查收需使用已关联学生的家长账号。</p>'+btn('landing-login','使用关联账号登录','primary block')+'</div>';
 else if(S.landingMode==='logged-out')foot='<div class="nm-foot nm-share-foot"><div class="nm-share-state"><span>账号状态</span><b>有账号，当前未登录</b></div><p>登录关联学生的家长账号后，可查看并完成查收。</p>'+btn('landing-login','登录查看','primary block')+'</div>';
 else {const ack=n.config.ack||'read',done=ack==='read'||(role==='parent'?own(n).done:S.landingDone),late=expired(n),status=ack==='read'?'已阅读':done?(ack==='confirm'?'已确认收到':'已签字确认'):(late?'已截止':'已读待确认');const result=done?'<span class="nm-receive-complete" role="status">'+ico('check','sm')+status+'</span>':late?'<span class="nm-receive-complete nm-landing-late" role="status">已截止</span>':btn('landing-complete',ack==='confirm'?'确认收到':'签字确认','primary receive-action');const share=btn('share',ico('share','sm')+'分享通知','ghost receive-share');foot='<div class="nm-foot nm-landing-rec-foot"><div class="nm-share-state"><span>账号状态</span><b>已登录关联家长账号</b></div><div class="nm-receive-status">当前状态：<b>'+status+'</b></div><div class="nm-receive-actions">'+share+result+'</div></div>';}
 return '<div class="nm-page nm-share-page"><div class="nm-share-head"><b class="nm-share-head-title">通知详情</b><button type="button" class="nm-share-head-close" data-a="landing-close" aria-label="关闭">×</button></div><div class="nm-scroll nm-detail theme-'+esc(isBeauty(n)?(n.theme||'plain'):'plain')+'">'+articleHtml(n)+info+'</div>'+foot+'</div>';}

/* ---------- 阅读情况 ---------- */
function statsPage(){reload();const n=get(S.id);if(!n)return emptyHtml('通知已不存在');const r=C.recipients(n),rs=Object.values(n.receipts||{}),ack=n.config.ack;const lab=ack==='confirm'?'已确认':ack==='sign'?'已签字':'';
 const done=x=>ack==='read'?!!x.readAt:ack==='confirm'?!!x.confirmAt:!!x.signatures?.length;
 const kinds=[['student','学生',r.students],['teacher','教师',r.teachers]].filter(k=>k[2].length);if(!kinds.some(k=>k[0]===S.statsKind))S.statsKind=kinds[0]?.[0]||'student';
 const ids=(kinds.find(k=>k[0]===S.statsKind)||[0,0,[]])[2];const recs=id=>rs.filter(x=>x.kind===S.statsKind&&x.recipientId===id);
 const group={unread:ids.filter(id=>!recs(id).some(x=>x.readAt)),read:ids.filter(id=>recs(id).some(x=>x.readAt)&&(ack==='read'||!recs(id).some(done))),done:ack==='read'?[]:ids.filter(id=>recs(id).some(done))};
 if(ack==='read')group.read=ids.filter(id=>recs(id).some(x=>x.readAt));
 const filters=[['unread','未读'],['read',ack==='read'?'已读':'已读未'+(ack==='confirm'?'确认':'签字')]].concat(ack==='read'?[]:[['done',lab]]);
 if(!filters.some(f=>f[0]===S.statsFilter))S.statsFilter='unread';
 const name=id=>S.statsKind==='student'?(C.students.find(s=>s.id===id)?.name||id):(C.teachers.find(t=>t.id===id)?.name||id);
 const sub=id=>S.statsKind==='student'?(C.classes.find(c=>c.id===C.students.find(s=>s.id===id)?.classId)?.name||''):(C.teachers.find(t=>t.id===id)?.dept||'');
 const rows=group[S.statsFilter].slice().sort((a,b)=>zh(name(a),name(b))).map(id=>{const list=recs(id);return '<div class="nm-srow"><div class="nm-av">'+esc(name(id).slice(-2))+'</div><div class="nm-srow-m"><b>'+esc(name(id))+'</b><small>'+esc(sub(id))+'</small>'+(S.statsKind==='student'&&list.length?'<div class="nm-guard">'+list.map(x=>'<span>'+esc(x.guardian||'家长')+'：'+(done(x)&&ack!=='read'?lab:x.readAt?'已读':'未读')+(x.readAt?' '+fShort(done(x)&&ack==='confirm'?x.confirmAt:done(x)&&ack==='sign'?x.signatures.at(-1).at:x.readAt):'')+'</span>').join('')+'</div>':'')+'</div>'+(S.statsKind==='student'&&S.statsFilter==='done'?btn('guardian-details','明细','receipt-detail','data-v="'+esc(id)+'"'):'<em class="'+(S.statsFilter==='unread'?'todo':'')+'">'+(S.statsFilter==='unread'?'未读':S.statsFilter==='done'?lab:'已读')+'</em>')+'</div>';}).join('');
 const canRemind=n.status==='published'&&!expired(n)&&group.unread.length>0;
 return '<div class="nm-page"><div class="nm-top">'+(kinds.length>1?'<div class="nm-seg">'+kinds.map(k=>'<button type="button" class="'+(S.statsKind===k[0]?'on':'')+'" data-a="stats-kind" data-v="'+k[0]+'">'+k[1]+'（'+k[2].length+'）</button>').join('')+'</div>':'')+'<div class="nm-chips">'+filters.map(f=>'<button type="button" class="'+(S.statsFilter===f[0]?'on':'')+'" data-a="stats-filter" data-v="'+f[0]+'">'+f[1]+' '+group[f[0]].length+'</button>').join('')+'</div></div><div class="nm-scroll nm-slist">'+(S.statsKind==='student'?'<p class="nm-tip">学生按任一家长完成计算；点击明细查看已提交家长的记录。</p>':'')+(rows||emptyHtml('暂无人员'))+'</div>'+(canRemind?'<div class="nm-foot">'+btn('remind',ico('bell','sm')+'提醒未读（'+(C.unreadRecipientIds(n,'student').length+C.unreadRecipientIds(n,'teacher').length)+'）','primary block')+'</div>':'')+'</div>';}


function guardianRecords(n,studentId){
 if(!n||!['confirm','sign'].includes(n.config?.ack))return [];
 const byGuardian=new Map();
 for(const [key,r] of Object.entries(n.receipts||{})){
  if(r.kind!=='student'||r.recipientId!==studentId)continue;
  const sig=(r.signatures||[]).filter(s=>s.at).slice().sort((a,b)=>a.at-b.at)[0];
  const at=n.config.ack==='confirm'?r.confirmAt:sig?.at;if(!at)continue;
  const id=r.guardianId||key.split(':').slice(1).join(':'),entry={id,at,name:r.guardianNameSnapshot||r.guardian||'家长',relation:r.guardianRelationSnapshot||'',image:n.config.ack==='sign'?sig?.image:''};
  if(!byGuardian.has(id)||at<byGuardian.get(id).at)byGuardian.set(id,entry);
 }
 return [...byGuardian.values()].sort((a,b)=>b.at-a.at||zh(a.id,b.id));
}
function guardianAccess(n,studentId){return role==='teacher'&&n?.status==='published'&&C.canManage(me(),n)&&C.recipients(n).students.includes(studentId)&&guardianRecords(n,studentId).length>0;}
function guardianModal(n,m){
 if(!guardianAccess(n,m.studentId))return sheet('查收明细',emptyHtml('暂无可查看的记录','通知已删除或当前账号无权查看'));
 const rows=guardianRecords(n,m.studentId),student=C.students.find(x=>x.id===m.studentId)?.name||m.studentId,sign=n.config.ack==='sign';
 if(m.type==='guardian-image'){
  const r=rows.find(x=>x.id===m.guardianId);if(!sign||!r?.image)return sheet('签字原图',emptyHtml('签字图片暂不可用'));
  return '<div class="nm-mask center" data-a="mask"><section class="nm-sign-viewer" role="dialog" aria-modal="true" aria-label="签字原图"><header><b>'+esc(r.name)+' · 签字原图</b><button type="button" data-a="close" aria-label="关闭原图">'+ico('close')+'</button></header><div class="nm-sign-original"><img src="'+esc(r.image)+'" alt="'+esc(r.name)+'的签字原图" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><p hidden>签字图片加载失败，请关闭后重试</p></div></section></div>';
 }
 return sheet(esc(student)+' · '+(sign?'签字明细':'确认明细'),'<p class="nm-tip">已'+(sign?'签字':'确认')+'家长 '+rows.length+' 位</p><div class="nm-guardian-records">'+rows.map(r=>'<article class="nm-guardian-record"><div><b>'+esc(r.name)+'</b>'+(r.relation?'<span>'+esc(r.relation)+'</span>':'')+'<em>'+(sign?'已签字':'已确认收到')+'</em></div><time>'+fFull(r.at)+'</time>'+(sign?(r.image?'<button type="button" class="nm-sign-thumb" data-a="guardian-image" data-v="'+esc(r.id)+'" aria-label="查看'+esc(r.name)+'签字原图"><img src="'+esc(r.image)+'" alt="签字缩略图" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span hidden>图片加载失败，点击重试</span></button>':'<p class="nm-tip">签字图片暂不可用</p>'):'')+'</article>').join('')+'</div>','','nm-guardian-sheet');
}
function receiptDemo(ack,count){const receipts={},now=Date.now();for(let i=0;i<count;i++){const gid='demo-guardian-'+i,at=now-(count-i)*60000;receipts['c52-1:'+gid]={kind:'student',recipientId:'c52-1',guardianId:gid,guardian:'家长'+(i+1),guardianNameSnapshot:['周女士','周先生','陈女士','刘先生','李女士'][i],guardianRelationSnapshot:['妈妈','爸爸','奶奶','爷爷','外婆'][i],readAt:at-1000,confirmAt:ack==='confirm'?at:undefined,signatures:ack==='sign'?[{at,version:1,image:'assets/signature.svg'}]:[]};}const id=inject('receipt-'+ack+'-'+count,{mine:true,title:'家长查收明细演示',ack,classes:['c52'],teachers:[],receipts});openId(id,'mine');S.page='stats';S.statsKind='student';S.statsFilter='done';render();}

/* ---------- 弹层 ---------- */
function sheet(title,body,foot='',cls=''){return '<div class="nm-mask" data-a="mask"><section class="nm-sheet '+cls+'" data-stop="1"><header><b>'+title+'</b><button type="button" data-a="close" aria-label="关闭">'+ico('close')+'</button></header><div class="nm-sheet-b">'+body+'</div>'+(foot?'<footer>'+foot+'</footer>':'')+'</section></div>';}
function dialog(title,text,ok,okA,cls='',extraClass=''){return '<div class="nm-mask center" data-a="mask"><section class="nm-dialog '+extraClass+'" data-stop="1"><b>'+esc(title)+'</b><p>'+text+'</p><footer>'+btn('close','取消','ghost')+btn(okA,esc(ok),'primary '+cls)+'</footer></section></div>';}
function actionTile(action,label,icon,tone='blue'){return '<button type="button" class="nm-action-tile" data-a="'+action+'"><i class="nm-action-icon '+tone+'">'+ico(icon)+'</i><span>'+label+'</span></button>';}
function ownerMoreSheet(n){const items=[],can=C.canEdit(me(),n),managed=C.canManage(me(),n),publisher=role==='teacher'?isMine(n):C.canDelete(me(),n);if(publisher)items.push(actionTile('delete','删除通知','trash','rose'));if(publisher&&can&&n.status==='published')items.push(actionTile('edit-notice','修改通知','edit','amber'));if(n.status==='published'){items.push(actionTile('save-template','存为模板','layers','violet'));if(publisher||managed)items.push(actionTile('stats','阅读统计','stats','cyan'));}else if(n.status==='scheduled'&&isBeauty(n))items.push(actionTile('save-template','存为模板','layers','violet'));return sheet('选择操作','<div class="nm-action-grid">'+items.join('')+'</div>','','nm-owner-sheet');}
function refreshAudienceBody(){const current=root.querySelector('.nm-sheet.tall .nm-sheet-b');if(!current){render();return;}const scroll=current.scrollTop,temp=document.createElement('div');temp.innerHTML=audienceModal();const next=temp.querySelector('.nm-sheet-b');if(!next){render();return;}current.innerHTML=next.innerHTML;current.scrollTop=scroll;}
function audienceModal(){const m=S.modal,sel=m.sel;const allowedT=me().teacherScope;
 const tabs='<div class="nm-seg in">'+[['student','学生'],['teacher','教师']].map(([k,t])=>'<button type="button" class="'+(m.tab===k?'on':'')+'" data-a="aud-tab" data-v="'+k+'">'+t+'</button>').join('')+'</div>';
 let list='';
 if(m.tab==='student'){const mine=C.classes.filter(c=>me().classes.includes(c.id));const grades={};mine.forEach(c=>{const g=c.name.replace(/\d+班$/,'');(grades[g]=grades[g]||[]).push(c)});
  list=Object.entries(grades).map(([g,cs])=>{const total=cs.reduce((sum,c)=>sum+C.students.filter(s=>s.classId===c.id).length,0),selected=cs.reduce((sum,c)=>{const stus=C.students.filter(s=>s.classId===c.id);return sum+(sel.classes.includes(c.id)?stus.length:stus.filter(s=>sel.studentIds.includes(s.id)).length)},0),all=cs.length>0&&cs.every(c=>sel.classes.includes(c.id));return '<div class="nm-grade" data-aud-grade-group="'+esc(g)+'"><div class="nm-grade-h"><button type="button" class="nm-ck'+(all?' on':selected?' half':'')+'" data-a="aud-grade" data-v="'+esc(g)+'" aria-label="选择'+esc(g)+'">'+ico('check','sm')+'</button><b>'+esc(g)+'</b><small data-aud-grade-count>已选 '+selected+'/'+total+' 人</small></div>'+cs.map(c=>{const stus=C.students.filter(s=>s.classId===c.id).sort((a,b)=>zh(a.name,b.name)),whole=sel.classes.includes(c.id),some=stus.filter(s=>sel.studentIds.includes(s.id)).length,open=m.open[c.id],count=whole?stus.length:some;
   return '<div class="nm-cls" data-aud-class-row="'+esc(c.id)+'"><div class="nm-cls-h"><button type="button" class="nm-ck'+(whole?' on':some?' half':'')+'" data-a="aud-class" data-v="'+c.id+'" aria-label="选择'+esc(c.name)+'">'+ico('check','sm')+'</button><button type="button" class="nm-cls-n" data-a="aud-open" data-v="'+c.id+'" aria-expanded="'+!!open+'"><b>'+esc(c.name)+'</b><small data-aud-class-count>已选 '+count+'/'+stus.length+' 人</small>'+ico(open?'up':'down','sm')+'</button></div><div class="nm-stus" '+(open?'':'hidden')+'>'+stus.map(s=>'<button type="button" class="nm-stu'+(whole||sel.studentIds.includes(s.id)?' on':'')+(whole?' dis':'')+'" data-a="aud-stu" data-v="'+s.id+'" data-class="'+c.id+'"><i class="nm-ck'+(whole||sel.studentIds.includes(s.id)?' on':'')+'">'+ico('check','sm')+'</i>'+esc(s.name)+'</button>').join('')+'</div></div>';}).join('')+'</div>';}).join('');}
 else{const ts=C.teachers.filter(t=>t.id!==me().id).sort((a,b)=>zh(a.name,b.name));const ok=ts.filter(t=>allowedT.includes(t.id));const all=ok.length&&ok.every(t=>sel.teachers.includes(t.id));
  list='<button type="button" class="nm-trow all" data-a="aud-tall"><i class="nm-ck'+(all?' on':'')+'">'+ico('check','sm')+'</i><b>'+(all?'全不选':'全选')+'</b><small>可选 '+ok.length+' 人</small></button>'+ts.map(t=>{const can=allowedT.includes(t.id),on=sel.teachers.includes(t.id);return '<button type="button" class="nm-trow'+(can?'':' dis')+'" data-a="'+(can?'aud-t':'noop')+'" data-v="'+t.id+'"><i class="nm-ck'+(on?' on':'')+'">'+ico('check','sm')+'</i><b>'+esc(t.name)+'</b><small>'+esc(t.mainPosition||'--')+'</small></button>';}).join('');}
 const cnt=audienceCount(sel);
 return sheet('选择发布对象',tabs+'<div class="nm-aud-summary" id="nm-aud-summary">已选 <b>'+cnt+'</b> 人</div><p class="nm-tip nm-aud-note">勾选整班后，新加入该班的学生也会收到通知。</p><div class="nm-aud">'+list+'</div>',btn('aud-ok','确定','primary block'),'tall');}
function syncAudienceModal(){const m=S.modal;if(!m||m.type!=='audience')return;const sel=m.sel;
 if(m.tab==='student'){const mine=C.classes.filter(c=>me().classes.includes(c.id)),grades={};mine.forEach(c=>{const g=c.name.replace(/\d+班$/,'');(grades[g]=grades[g]||[]).push(c)});
  mine.forEach(c=>{const students=C.students.filter(x=>x.classId===c.id),whole=sel.classes.includes(c.id),selected=whole?students.length:students.filter(x=>sel.studentIds.includes(x.id)).length,row=root.querySelector('[data-aud-class-row="'+CSS.escape(c.id)+'"]'),check=row?.querySelector('.nm-cls-h .nm-ck'),count=row?.querySelector('[data-aud-class-count]');check?.classList.toggle('on',whole);check?.classList.toggle('half',selected>0&&!whole);if(count)count.textContent='已选 '+selected+'/'+students.length+' 人';row?.querySelectorAll('.nm-stu').forEach(el=>{const on=whole||sel.studentIds.includes(el.dataset.v);el.classList.toggle('on',on);el.classList.toggle('dis',whole);el.querySelector('.nm-ck')?.classList.toggle('on',on);});});
  Object.entries(grades).forEach(([g,cs])=>{const total=cs.reduce((sum,c)=>sum+C.students.filter(x=>x.classId===c.id).length,0),selected=cs.reduce((sum,c)=>{const ss=C.students.filter(x=>x.classId===c.id);return sum+(sel.classes.includes(c.id)?ss.length:ss.filter(x=>sel.studentIds.includes(x.id)).length)},0),all=cs.length>0&&cs.every(c=>sel.classes.includes(c.id)),group=[...root.querySelectorAll('[data-aud-grade-group]')].find(x=>x.dataset.audGradeGroup===g),check=group?.querySelector('.nm-grade-h .nm-ck'),count=group?.querySelector('[data-aud-grade-count]');check?.classList.toggle('on',all);check?.classList.toggle('half',selected>0&&!all);if(count)count.textContent='已选 '+selected+'/'+total+' 人';});
 }else{const allowed=C.teachers.filter(t=>t.id!==me().id&&me().teacherScope.includes(t.id)).map(t=>t.id);root.querySelectorAll('.nm-trow[data-v]').forEach(row=>row.querySelector('.nm-ck')?.classList.toggle('on',sel.teachers.includes(row.dataset.v)));const all=allowed.length>0&&allowed.every(id=>sel.teachers.includes(id)),allRow=root.querySelector('.nm-trow.all');allRow?.querySelector('.nm-ck')?.classList.toggle('on',all);const allLabel=allRow?.querySelector('b');if(allLabel)allLabel.textContent=all?'全不选':'全选';}
 const count=audienceCount(sel),summary=root.querySelector('#nm-aud-summary');if(summary)summary.innerHTML='已选 <b>'+count+'</b> 人';}function modalHtml(){const m=S.modal;if(!m)return '';const n=get(S.id);
 if(['guardian-details','guardian-image'].includes(m.type))return guardianModal(n,m);
 if(m.type==='audience')return audienceModal();
 if(m.type==='ack')return sheet('查收方式',Object.entries(C.ackNames).map(([k,v])=>'<button type="button" class="nm-opt'+(S.draft.config.ack===k?' on':'')+'" data-a="ack-set" data-v="'+k+'"><span><b>'+v+'</b><small>'+({read:'接收人打开通知即完成',confirm:'接收人需点击“确认收到”',sign:'接收人需手写签名确认'}[k])+'</small></span>'+(S.draft.config.ack===k?ico('check'):'')+'</button>').join(''));
 if(m.type==='time'){const v=toInput(S.draft.config.scheduledAt);return sheet('发送时间','<div class="nm-datetime"><label class="nm-field"><span>年月日</span><input class="nm-dt" type="date" id="nm-date" value="'+esc(v.slice(0,10))+'"></label><label class="nm-field"><span>时分秒</span><input class="nm-dt" type="time" step="1" id="nm-time" value="'+esc(v.slice(11,19))+'"></label></div><p class="nm-tip">须晚于当前时间，精确到秒。</p>',btn('time-ok','确定','primary'));}
 if(m.type==='filter'){const f=S.filters;const chip=(a,v,l,cur)=>'<button type="button" class="'+(cur===v?'on':'')+'" data-a="'+a+'" data-v="'+v+'">'+l+'</button>';return sheet('筛选','<div class="nm-fgroup"><h4>通知状态</h4><div class="nm-chips">'+[['','全部'],['已发布','已发布'],['待发送','待发送']].map(([v,l])=>chip('f-status',v,l,f.status)).join('')+'</div></div><div class="nm-fgroup"><h4>查收方式</h4><div class="nm-chips">'+[['','全部'],['read','只需阅读'],['confirm','需确认'],['sign','需签字']].map(([v,l])=>chip('f-ack',v,l,f.ack)).join('')+'</div></div><div class="nm-fgroup"><h4>通知类型</h4><div class="nm-chips">'+[['','全部'],['normal','普通通知'],['beautiful','美文通知']].map(([v,l])=>chip('f-kind',v,l,f.kind)).join('')+'</div></div>',btn('f-reset','重置','ghost')+btn('close','完成','primary'));}
 if(m.type==='insert')return sheet('插入内容','<div class="nm-insgrid"><button type="button" data-a="ins-text">'+ico('text')+'文字</button><label>'+ico('image')+'图片<input type="file" accept="image/*" multiple id="nm-ins-img" hidden></label><label>'+ico('video')+'视频<input type="file" accept="video/*" id="nm-ins-video" hidden></label><button type="button" data-a="add-link">'+ico('link')+'链接</button></div><p class="nm-tip">链接作为正文内容插入；美文通知不提供背景音乐。</p>');
 if(m.type==='link')return sheet('添加链接','<label class="nm-field"><span>链接标题</span><input id="nm-lk-t" maxlength="40" placeholder="例如：活动报名入口" value="'+esc(m.title||'')+'"></label><label class="nm-field"><span>链接地址</span><input id="nm-lk-u" placeholder="https://" value="'+esc(m.url||'')+'"></label><p class="nm-tip">须以 https:// 或 http:// 开头。</p>',btn('link-ok','添加','primary block'));
 if(m.type==='bg')return sheet('选择背景','<div class="nm-bgs">'+THEMES.map(t=>'<button type="button" class="nm-bgopt theme-'+t.id+(S.draft.theme===t.id?' on':'')+'" data-a="bg-set" data-v="'+t.id+'"><i></i><span>'+t.name+'</span></button>').join('')+'</div>');
 if(m.type==='confirm')return dialog(m.title,m.text,m.ok,'confirm-ok',m.danger?'danger':'',['delete','del-draft'].includes(m.next)?'nm-delete-dialog':'');
  if(m.type==='sign')return sheet('签字确认','<p class="nm-tip">签字人：'+esc(me().name)+'（本人）。请在下方手写签名。</p><div class="nm-signpad"><canvas class="nm-sign" width="640" height="300"></canvas><span class="nm-sign-ph">请在此处签名</span></div>',btn('sign-clear','重写','ghost')+btn('sign-ok','提交签字','primary'));
 if(m.type==='more'&&n&&role==='teacher')return ownerMoreSheet(n);
 if(m.type==='share')return sheet('分享通知','<div class="nm-insgrid two"><button type="button" data-a="share-to" data-v="wechat">'+ico('share')+'微信好友/群</button><button type="button" data-a="share-to" data-v="copy">'+ico('link')+'复制链接</button></div><p class="nm-tip">分享内容为通知标题和封面；对方需是该学生关联家长才能打开详情，分享不改变你的查收状态。</p>');
 if(m.type==='compare'){const col=(t,x)=>'<div class="nm-cmp"><h4>'+t+'</h4><b>'+esc(x.title)+'</b><p>'+esc((x.blocks||[]).filter(b=>b.type==='text').map(b=>plain(b.text)).join(' ').slice(0,160)||'（无文字）')+'</p></div>';return sheet('查看两份内容',col('你的输入（未保存）',m.mine)+col('最新版本 V'+m.theirs.version+' · '+esc(m.theirs.lastEditor||''),m.theirs),btn('close','关闭','ghost block'));}
 if(m.type==='supplement')return sheet('补充说明','<textarea class="nm-ta" id="nm-sup" maxlength="500" rows="5" placeholder="输入补充说明（最多500字）">'+esc(m.text||'')+'</textarea>',btn('sup-ok','发布补充说明','primary block'));
 return '';}

/* ---------- 渲染与导航 ---------- */
function title(){const p=S.page;if(p==='landing')return '通知详情';if(p==='detail')return '通知详情';if(p==='stats')return '阅读情况';if(p==='kind')return '通知模板';if(p==='tpl')return '模板预览';if(p==='edit')return editing()?'修改通知':'发布通知';if(p==='beauty')return editing()?'修改美文通知':'美文通知';if(p==='preview')return '预览';if(p==='settings')return '发布设置';return '通知';}
function render(){if(S.draft&&['edit','beauty','preview','settings'].includes(S.page))prepareBodyIndent(S.draft);if(!root.isConnected)return;const keep=$('.nm-scroll')?.scrollTop||0,samePage=root.dataset.page===S.page+'|'+S.tab+'|'+S.id;let html='';
 const p=S.page;html=p==='route-error'?'<div class="nm-page"><div class="nm-scroll">'+emptyHtml(S.routeMessage||'页面不可用')+btn('go-home','返回首页','primary block')+'</div></div>':p==='list'?(role==='teacher'?teacherList():parentList()):p==='kind'?kindPage():p==='tpl'?tplPage():p==='edit'?editPage():p==='beauty'?beautyPage():p==='preview'?previewPage():p==='settings'?settingsPage():p==='detail'?detailPage():p==='landing'?landingPage():p==='stats'?statsPage():'';
 root.innerHTML=html+modalHtml()+'<div class="nm-toast" role="status"></div>';root.dataset.page=S.page+'|'+S.tab+'|'+S.id;
 if(['guardian-details','guardian-image'].includes(S.modal?.type)){const sb=$('.nm-sheet-b');if(sb)sb.scrollTop=S.modal.scrollTop||0;$('.nm-mask [data-a="close"]')?.focus({preventScroll:true});}
 if(samePage&&keep){const sc=$('.nm-scroll');if(sc)sc.scrollTop=keep;}
 window.NotificationMiniHost?.(title(),{landing:S.page==='landing'});window.dispatchEvent(new Event('zxh-notice-change'));demo();if(S.modal?.type==='sign')bindSign();}
function toast(msg){const n=$('.nm-toast');if(!n)return;n.textContent=msg;n.classList.add('show');clearTimeout(S.toastTimer);S.toastTimer=setTimeout(()=>n.classList.remove('show'),2200);}
const setModal=m=>{S.modal=m;render()};
const close=()=>{S.modal=S.modal?.type==='guardian-image'?S.modal.returnModal:null;S.failNext='';render()};
function resetEdit(){S.conflict=null;}
function goList(){S.conflict=null;S.page='list';S.draft=null;S.id='';S.dirty=false;S.modal=null;S.errors={};render();}
function openShareLanding(mode){reload();let n=get(S.id);if(!n||n.status!=='published')n=DB.notices.find(x=>x.schoolId===SCHOOL&&x.status==='published');if(!n){const id=inject('share-landing',{mine:role==='teacher',title:'秋季校园活动通知',text:'请家长阅读本次校园活动安排。',ack:'confirm',teachers:['t1']});n=get(id);}if(!n)return;if(S.page!=='landing')S.landingPrev={page:S.page,tab:S.tab,id:S.id};S.modal=null;S.id=n.id;S.landingMode=mode;S.landingDone=false;S.page='landing';render();const sc=$('.nm-scroll');if(sc)sc.scrollTop=0;}
function closeShareLanding(){const prev=S.landingPrev||{page:'detail',tab:S.tab,id:S.id};S.page=prev.page==='landing'?'detail':prev.page;S.tab=prev.tab||S.tab;S.id=prev.id||'';S.modal=null;S.landingMode='stranger';S.landingPrev=null;S.landingDone=false;render();}
function leaveEdit(){S.conflict=null;const target=S.mode==='edit'?'detail':S.mode==='draft'?'list':(S.origin==='tpl'?'tpl':'kind');S.draft=null;S.dirty=false;S.errors={};S.page=target;render();}
function back(){if(S.modal){close();return;}const p=S.page;if(p==='landing'){closeShareLanding();return;}
 if(p==='detail'){if(S.messageFrom){const from=S.messageFrom;S.messageFrom='';S.messageChild='';goList();window.go?.(from);return;}S.messageChild='';S.page='list';S.id='';render();return;}
 if(p==='stats'){S.page='detail';render();return;}
 if(p==='preview'){S.page='beauty';render();return;}
 if(p==='settings'){S.page='preview';render();return;}
 if(p==='edit'||p==='beauty'){if(S.dirty){setModal({type:'confirm',title:'放弃本次编辑？',text:'当前内容尚未保存，离开后将丢失。',ok:'放弃编辑',next:'discard',danger:true});return;}leaveEdit();return;}
 if(p==='tpl'){S.page='kind';render();return;}
 if(p==='kind'){goList();return;}
 window.go?.('sc-home');}
function open(id){reload();const n=get(id);if(!n||!C.canView(me(),n)){toast('通知已不存在或无权查看');render();return;}S.id=id;S.page='detail';
 if(isReceiver(n)&&!myReceipt(n).readAt){const r=transact(d=>C.receipt(d,id,me(),'read'));if(!r.ok)toast(r.message||'阅读状态未能更新');reload();}
 render();const sc=$('.nm-scroll');if(sc)sc.scrollTop=0;}
function openEdit(id){reload();const n=get(id);if(!n)return;if(!C.canEdit(me(),n)){toast('当前通知不能修改');return;}
 S.draft=clone(n);S.base=n.version;S.dirty=false;S.errors={};
 if(n.status==='draft'){S.mode='draft';S.id='';const c=S.draft.config;if(c.scheduleEnabled===undefined)c.scheduleEnabled=false;}else{S.mode='edit';S.id=n.id;}
 S.page=isBeauty(n)?'beauty':'edit';render();}

/* ---------- 编辑操作 ---------- */
function mark(){S.dirty=true;}
function bind(el){const n=S.draft;if(!n)return;const k=el.dataset.bind,i=+el.dataset.i;
 if(k==='title'){n.title=el.value.slice(0,LIMIT.title);const c=$('#nm-tlen');if(c)c.textContent=n.title.length;if(n.title.trim())S.errors.title=false;}
 else if(k==='text'&&n.blocks[i]){n.blocks[i].text=el.value;const c=$('#nm-clen');if(c){const len=textLen(n);c.textContent=len;c.parentNode.classList.toggle('over',len>LIMIT.text);}}
 else if(k==='cap'&&n.blocks[i])n.blocks[i].caption=el.value;
 mark();}
function moveBlock(i,d){const b=S.draft.blocks,j=i+d;if(j<0||j>=b.length)return;[b[i],b[j]]=[b[j],b[i]];mark();render();}
function delBlock(i){const b=S.draft.blocks;b.splice(i,1);if(!b.length||(S.page==='edit'&&b[0]?.type!=='text'))b.unshift(C.textBlock('　　'));mark();render();}
const readFile=f=>new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>ok(String(r.result));r.onerror=no;r.readAsDataURL(f)});
const videoDur=f=>new Promise(ok=>{try{const v=document.createElement('video');v.preload='metadata';v.onloadedmetadata=()=>{ok(v.duration||0);URL.revokeObjectURL(v.src)};v.onerror=()=>ok(0);v.src=URL.createObjectURL(f);}catch{ok(0)}});
function addImageSrcs(srcs,at){const n=S.draft;const maxImages=imageLimit(n),room=Math.max(maxImages-imgCount(n),0);let msg='';if(srcs.length>room){msg=room?'图片最多'+maxImages+'张，已添加前'+room+'张，其余'+(srcs.length-room)+'张未添加':'图片已达'+maxImages+'张上限，不能继续添加';srcs=srcs.slice(0,room);}
 let pos=at;for(const src of srcs){const b={id:C.uid('b'),type:'image',src,caption:''};if(pos==null)n.blocks.push(b);else n.blocks.splice(pos++,0,b);}if(srcs.length)mark();S.modal=null;render();if(msg)toast(msg);}
async function addImages(files,at){let list=[...files].filter(f=>/^image\//.test(f.type));const big=list.filter(f=>f.size>10*1024*1024);if(big.length){toast('单张图片不能超过10MB，已跳过'+big.length+'张');list=list.filter(f=>f.size<=10*1024*1024);if(!list.length)return;}const srcs=[];let bad=0;for(const f of list){try{srcs.push(await readFile(f))}catch{bad++}}addImageSrcs(srcs,at);if(bad)toast('有'+bad+'张图片读取失败，已跳过');}
function addVideoMeta(meta,at){if(meta.duration>LIMIT.videoSec){S.modal=null;render();toast('请选择可播放且不超过10分钟的视频（当前 '+Math.floor(meta.duration/60)+'分'+Math.round(meta.duration%60)+'秒）');return;}const b={id:C.uid('b'),type:'video',src:meta.src,name:meta.name,duration:meta.duration,caption:''};if(at==null)S.draft.blocks.push(b);else S.draft.blocks.splice(at,0,b);mark();S.modal=null;render();}
async function addVideo(file,at){if(!file)return;const d=await videoDur(file);if(!d){toast('请选择可播放且不超过10分钟的视频');return;}addVideoMeta({src:URL.createObjectURL(file),name:file.name,duration:d},at);}
function check(publishing){const n=S.draft,e={};let msg='';const len=textLen(n);
 if(!n.title.trim()){e.title=1;msg=msg||'请填写通知标题';}
 if(!n.blocks.some(validBlock)){e.content=1;msg=msg||(isBeauty(n)?'请至少添加一个有内容的模块':'请填写通知内容');}
 if(len>LIMIT.text){e.content=1;msg=msg||'正文文字合计最多'+LIMIT.text+'字';}
 if(publishing){const c=n.config;if(!audienceCount(c)){e.audience=1;msg=msg||'请选择发布对象';}
  if(!lockedCfg()){if(c.scheduleEnabled){const t=Date.parse(c.scheduledAt||'');if(!Number.isFinite(t)||t<=Date.now()){e.schedule=1;msg=msg||'定时发送时间须晚于当前时间';}}
   }}
 S.errors=e;return msg;}
function publish(){if(S.conflict){toast('请先处理其他端的更新');return;}const msg=check(true);if(msg){render();toast(msg);return;}const n=S.draft,c=n.config;
 if(editing()){setModal({type:'confirm',title:'保存修改？',text:'修改后接收人看到的是最新内容，已有阅读状态不会重置，也不会再次提醒。',ok:'保存修改',next:'publish'});return;}
 const rc=C.recipients({...n,status:'draft'});setModal({type:'confirm',title:c.scheduleEnabled?'确认定时发布':'确认发布',text:'学校：'+esc(C.school(SCHOOL).name)+'<br>接收对象：学生 '+rc.students.length+' 人，教师 '+rc.teachers.length+' 人<br>查收方式：'+esc(C.ackNames[c.ack])+(c.scheduleEnabled?'<br>计划发送：'+fFull(Date.parse(c.scheduledAt)):'')+'<br>发布名义：'+(c.schoolName?esc(C.school(SCHOOL).name):esc(me().name)),ok:c.scheduleEnabled?'确认定时发布':'确认发布',next:'publish'});}
function doPublish(){const n=clone(S.draft);if(!editing()&&!n.config.scheduleEnabled)n.config.scheduledAt='';const r=transact(d=>C.save(d,n,me(),S.base,'publish'));
 if(!r.ok){S.modal=null;if(r.code==='CONFLICT'&&r.current){S.conflict=r.current;render();toast('另一端已修改，当前输入保留');return;}render();toast(r.code==='CONFLICT'?'该通知已在其他端被修改，你的输入已保留；请返回详情查看最新内容后再修改':r.code==='LOCKED'?'已有接收人阅读、确认或签字，通知不能再修改':r.message||'发布失败，内容已保留');return;}
 reload();const wasEdit=editing(),id=r.notice.id;S.draft=null;S.dirty=false;S.modal=null;S.errors={};S.mode='new';
 if(wasEdit){S.page='detail';S.id=id;render();toast('修改已保存');return;}
 S.page='list';S.tab='mine';S.id='';S.query='';S.filters={status:'',ack:'',kind:''};render();toast(r.notice.status==='scheduled'?'已设置定时发送':'通知已发布');}
function saveDraft(){const n=clone(S.draft);const r=transact(d=>C.save(d,n,me(),S.base,'save'));
 if(!r.ok){toast(r.message||'草稿未保存，当前内容已保留');return;}reload();S.draft=null;S.dirty=false;S.mode='new';S.page='list';S.tab='draft';S.id='';render();toast('草稿已保存');}

/* ---------- 签字 ---------- */
function linkOk(){const ti=$('#nm-lk-t').value.trim(),u=$('#nm-lk-u').value.trim();if(!/^https?:\/\//i.test(u)){$('#nm-lk-u')?.closest('.nm-field')?.classList.add('err');toast('链接须以 https:// 或 http:// 开头');return;}const at=S.modal.at;const b={id:C.uid('b'),type:'link',title:ti||u,url:u};if(at==null)S.draft.blocks.push(b);else S.draft.blocks.splice(at,0,b);mark();close();}
function bindSign(){const c=$('.nm-sign');if(!c)return;const ctx=c.getContext('2d');ctx.lineWidth=5;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#1f2a3d';let down=false;const pos=e=>{const r=c.getBoundingClientRect();return {x:(e.clientX-r.left)*c.width/r.width,y:(e.clientY-r.top)*c.height/r.height}};
 c.onpointerdown=e=>{down=true;c.setPointerCapture?.(e.pointerId);const p=pos(e);ctx.beginPath();ctx.moveTo(p.x,p.y);c.dataset.drawn='1';$('.nm-sign-ph')?.remove();};c.onpointermove=e=>{if(!down)return;const p=pos(e);ctx.lineTo(p.x,p.y);ctx.stroke()};c.onpointerup=c.onpointercancel=()=>{down=false};}

/* ---------- 点击分发 ---------- */
function click(e){const t=e.target.closest('[data-a]');if(!t||(t.nodeType&&!root.contains(t)))return;const a=t.dataset.a,v=t.dataset.v,id=t.dataset.id,i=t.dataset.i!=null?+t.dataset.i:null;
 if(a==='mask'){if(e.target===t)close();return;}
 if(t.tagName==='LABEL')return;
 const n=get(S.id);
 switch(a){
 case 'noop':return;
 case 'guardian-details':{reload();const cur=get(S.id);if(!guardianAccess(cur,v)){toast('当前无可查看的明细');return;}setModal({type:'guardian-details',studentId:v});return;}
 case 'guardian-image':{const m=S.modal;if(m?.type!=='guardian-details'||!guardianAccess(n,m.studentId))return;const record=guardianRecords(n,m.studentId).find(x=>x.id===v);if(!record?.image||n.config.ack!=='sign')return;setModal({type:'guardian-image',studentId:m.studentId,guardianId:v,returnModal:{...m,scrollTop:$('.nm-sheet-b')?.scrollTop||0}});return;}
 case 'conflict-review':{const c=S.conflict;setModal({type:'compare',mine:clone(S.draft),theirs:c});return;}
 case 'conflict-copy':{const old=S.draft,n2=fresh(old.noticeKind||'normal');S.draft={...n2,title:old.title,blocks:clone(old.blocks),attachments:clone(old.attachments||[]),cover:old.cover,theme:old.theme,config:{...clone(old.config),scheduledAt:'',scheduleEnabled:false}};S.base=0;S.mode='new';S.id='';S.conflict=null;S.errors={};S.dirty=true;render();toast('已保留为独立新草稿，点击“保存草稿”完成保存');return;}
  case 'conflict-reload':{reload();const c=get(S.conflict.id);S.conflict=null;if(!c){S.draft=null;S.page='list';render();toast('该通知已被删除');return;}S.draft=clone(c);S.base=c.version;S.dirty=false;render();toast('已载入最新版本');return;}
 case 'att-del':S.draft.attachments.splice(i,1);mark();render();return;
 case 'reload-list':S.demo.loadFail=false;reload();render();toast('已重新加载');return;
 case 'go-home':window.go?.('sc-home');return;
 case 'landing-close':closeShareLanding();return;
 case 'landing-login':S.landingMode='logged-in';S.landingDone=false;render();return;
 case 'landing-complete':if(role==='parent'){click({target:{closest:()=>({dataset:{a:n?.config.ack==='sign'?'sign':'confirm-rc'}})}});return;}S.landingDone=true;render();toast(n?.config?.ack==='sign'?'演示：签字确认已提交':'演示：已确认收到');return;
 case 'share':setModal({type:'share'});return;
 case 'share-to':S.modal=null;render();toast(v==='wechat'?'演示环境：将调起微信分享给好友或群聊':'链接已复制，可粘贴发送给其他家长');return;
 case 'close':close();return;
 case 'tab':S.tab=v;render();$('.nm-scroll')&&($('.nm-scroll').scrollTop=0);return;
 case 'clear-q':S.query='';S.applied='';render();return;
 case 'search':S.applied=S.query.trim();render();return;
 case 'filter':setModal({type:'filter'});return;
 case 'f-status':S.filters.status=v;render();return;
 case 'f-ack':S.filters.ack=v;render();return;
 case 'f-kind':S.filters.kind=v;render();return;
 case 'f-reset':S.filters={status:'',ack:'',kind:''};render();return;
 case 'open':open(id);return;
 case 'edit':openEdit(id);return;
 case 'draft-delete':setModal({type:'confirm',title:'删除草稿？',text:'删除后无法恢复该草稿。',ok:'确认删除',next:'del-draft',id,danger:true});return;
 case 'new':S.page='kind';S.tplQuery='';render();return;
 case 'new-normal':S.origin='kind';startNew('normal');return;
 case 'new-beauty':S.origin='kind';startNew('beautiful');return;
 case 'cat':S.tplCat=v;S.tplQuery='';render();return;
 case 'clear-tq':S.tplQuery='';render();return;
 case 'tpl':S.tplId=id;S.page='tpl';render();return;
 case 'use-tpl':S.origin='tpl';startNew('beautiful',tpl(S.tplId));return;
 case 'cover-del':e.preventDefault();S.draft.cover='';mark();render();return;
 case 'add-text':{S.draft.blocks.push(C.textBlock('　　'));mark();S.modal=null;render();const tas=root.querySelectorAll('.nm-medias textarea');tas[tas.length-1]?.focus();return;}
 case 'add-link':setModal({type:'link',at:S.modal?.at});return;
 case 'link-ok':linkOk();return;
 case 'blk-up':moveBlock(i,-1);return;
 case 'blk-down':moveBlock(i,1);return;
 case 'blk-del':if(S.page==='beauty'){setModal({type:'confirm',title:'删除内容块？',text:'删除后无法恢复该内容块。',ok:'确认删除',next:'delete-block',index:i,danger:true});return;}delBlock(i);return;
 case 'insert':setModal({type:'insert',at:i});return;
 case 'ins-text':{const at=S.modal.at;S.draft.blocks.splice(at,0,C.textBlock('　　'));mark();close();root.querySelectorAll('.nm-bk textarea')[at]?.focus();return;}
 case 'audience':setModal({type:'audience',tab:'student',open:{},sel:clone({classes:S.draft.config.classes||[],studentIds:S.draft.config.studentIds||[],teachers:S.draft.config.teachers||[]})});return;
 case 'aud-tab':S.modal.tab=v;refreshAudienceBody();return;
 case 'aud-open':{const open=S.modal.open[v]=!S.modal.open[v],row=root.querySelector('[data-aud-class-row="'+CSS.escape(v)+'"]'),students=row?.querySelector('.nm-stus'),toggle=row?.querySelector('.nm-cls-n'),icon=toggle?.querySelector('.nm-i');if(students)students.hidden=!open;if(toggle)toggle.setAttribute('aria-expanded',String(open));if(icon)icon.innerHTML=I[open?'up':'down'];return;}
 case 'aud-grade':{const s=S.modal.sel,group=C.classes.filter(c=>me().classes.includes(c.id)&&c.name.replace(/\d+班$/,'')===v),all=group.length>0&&group.every(c=>s.classes.includes(c.id));group.forEach(c=>{const ids=C.students.filter(x=>x.classId===c.id).map(x=>x.id);if(all){s.classes=s.classes.filter(x=>x!==c.id);s.studentIds=s.studentIds.filter(x=>!ids.includes(x));}else{if(!s.classes.includes(c.id))s.classes.push(c.id);s.studentIds=s.studentIds.filter(x=>!ids.includes(x));}});syncAudienceModal();return;}
 case 'aud-class':{const s=S.modal.sel;if(s.classes.includes(v))s.classes=s.classes.filter(x=>x!==v);else{s.classes.push(v);s.studentIds=s.studentIds.filter(x=>C.students.find(y=>y.id===x)?.classId!==v);}syncAudienceModal();return;}
 case 'aud-stu':{const s=S.modal.sel,cid=C.students.find(x=>x.id===v)?.classId;if(s.classes.includes(cid))return;s.studentIds=s.studentIds.includes(v)?s.studentIds.filter(x=>x!==v):[...s.studentIds,v];const all=C.students.filter(x=>x.classId===cid).map(x=>x.id);if(all.every(x=>s.studentIds.includes(x))){s.classes.push(cid);s.studentIds=s.studentIds.filter(x=>!all.includes(x));}syncAudienceModal();return;}
 case 'aud-t':{const s=S.modal.sel;s.teachers=s.teachers.includes(v)?s.teachers.filter(x=>x!==v):[...s.teachers,v];syncAudienceModal();return;}
 case 'aud-tall':{const s=S.modal.sel,ok=C.teachers.filter(x=>x.id!==me().id&&me().teacherScope.includes(x.id)).map(x=>x.id);const all=ok.every(x=>s.teachers.includes(x));s.teachers=all?s.teachers.filter(x=>!ok.includes(x)):[...new Set([...s.teachers,...ok])];syncAudienceModal();return;}
 case 'aud-ok':{const s=S.modal.sel;Object.assign(S.draft.config,{classes:s.classes,studentIds:s.studentIds,teachers:s.teachers});if(audienceCount(s))S.errors.audience=false;mark();close();return;}
 case 'ack':setModal({type:'ack'});return;
 case 'ack-set':S.draft.config.ack=v;mark();close();return;
 case 'school-name':S.draft.config.schoolName=!S.draft.config.schoolName;mark();render();return;
 case 'schedule':{const c=S.draft.config;c.scheduleEnabled=!c.scheduleEnabled;if(c.scheduleEnabled&&!c.scheduledAt)c.scheduledAt=tomorrow9();if(!c.scheduleEnabled){c.scheduledAt='';S.errors.schedule=false;}mark();render();return;}
 case 'time-schedule':setModal({type:'time',field:'schedule'});return;
 case 'time-deadline':return;
 case 'time-ok':{const date=$('#nm-date').value,time=$('#nm-time').value;let iso='';if(date||time){if(!date||!time){toast('请选择完整的年月日和时分秒');return;}iso=fromInput(date+'T'+time);}const key=S.modal.field==='schedule'?'scheduledAt':'deadlineAt';if(!iso&&S.modal.field==='schedule'){toast('请选择发送时间');return;}S.draft.config[key]=iso;S.errors[S.modal.field]=false;mark();close();return;}
 case 'time-clear':S.draft.config.deadlineAt='';mark();close();return;
 case 'locked':toast('发布后不能修改发布对象、查收方式和发送时间');return;
 case 'save-draft':saveDraft();return;
 case 'publish':publish();return;
 case 'cancel-edit':back();return;
 case 'to-preview':{const msg=check(false);if(msg){render();toast(msg);return;}S.page='preview';render();return;}
 case 'prev-back':S.page='beauty';render();return;
 case 'to-settings':S.page='settings';render();return;
 case 'settings-back':S.page='preview';render();return;
 case 'bg':setModal({type:'bg'});return;
 case 'bg-set':S.draft.theme=v;mark();close();return;
 case 'confirm-ok':{const m=S.modal;if(m.next==='delete-block'){S.modal=null;delBlock(m.index);toast('内容块已删除');return;}if(m.next==='publish'){doPublish();return;}if(m.next==='discard'){S.modal=null;leaveEdit();return;}
  if(m.next==='delete'){const r=transact(d=>C.manage(d,m.id,me(),get(m.id)?.version,'delete'));S.modal=null;if(r.ok){reload();S.page='list';S.id='';render();toast('通知已删除');}else{render();toast(r.message||'删除失败');}return;}
  if(m.next==='remind'){const r=transact(d=>C.manage(d,m.id,me(),get(m.id)?.version,'remind',{target:'unread'}));S.modal=null;reload();render();toast(r.ok?'已提醒未读对象':(r.message||'提醒失败'));return;}
  if(m.next==='cancel-schedule'){const r=transact(d=>C.manage(d,m.id,me(),get(m.id)?.version,'cancel'));S.modal=null;reload();if(r.ok){S.page='list';S.tab='draft';S.id='';render();toast('已取消定时，通知已转为草稿');}else{render();toast(r.message||'操作失败');}return;}
  if(m.next==='sign-submit'){S.modal=null;click({target:{closest:()=>({dataset:{a:'sign-submit-run'}})}});return;}
  if(m.next==='del-draft'){const r=transact(d=>C.manage(d,m.id,me(),get(m.id)?.version,'delete'));S.modal=null;reload();render();toast(r.ok?'草稿已删除':(r.message||'删除失败'));return;}
  return;}
 case 'stats':reload();if(!get(S.id)||!C.canManage(me(),get(S.id))){toast('仅发布人可查看阅读统计');return;}S.modal=null;S.page='stats';S.statsFilter='unread';render();return;
 case 'stats-kind':S.statsKind=v;render();return;
 case 'stats-filter':S.statsFilter=v;render();return;
 case 'remind':if(!n)return;setModal({type:'confirm',title:'提醒未读对象？',text:'将提醒 '+C.unreadRecipientIds(n,'student').length+' 名未读学生的全部关联家长'+(C.unreadRecipientIds(n,'teacher').length?'和 '+C.unreadRecipientIds(n,'teacher').length+' 名未读教师':'')+'。已读的对象不会收到提醒。',ok:'发送提醒',next:'remind',id:n.id});return;
 case 'edit-notice':S.modal=null;openEdit(S.id);return;
 case 'cancel-schedule':setModal({type:'confirm',title:'取消定时发送？',text:'取消后通知转为草稿，不会发送给任何人。',ok:'取消定时',next:'cancel-schedule',id:S.id});return;
 case 'more':if(!n||!isMine(n))return;setModal({type:'more'});return;
 case 'save-template':{const cur=get(S.id);if(!cur){S.modal=null;render();toast('通知已不存在，不能保存模板');return;}const r=transact(d=>{d.templates=Array.isArray(d.templates)?d.templates:[];d.templates.unshift({id:C.uid('tpl'),schoolId:cur.schoolId,title:cur.title,kind:'beautiful',blocks:C.clone(cur.blocks?.length?cur.blocks:[C.textBlock('　　')]),attachments:C.clone(cur.attachments||[]),cover:cur.cover||'',theme:cur.theme||'plain',music:'',by:me().name,ownerId:me().id,ownerRole:me().role});d.revision=(d.revision||0)+1;return {ok:true};});S.modal=null;reload();render();toast(r.ok?'已保存到我的模板':(r.message||'保存模板失败'));return;}
 case 'supplement':setModal({type:'supplement'});return;
 case 'sup-ok':{const text=$('#nm-sup').value.trim();if(!text){toast('请填写补充说明');return;}const r=transact(d=>C.manage(d,S.id,me(),n.version,'supplement',{text}));if(r.ok){reload();S.modal=null;render();toast('补充说明已发布');}else toast(r.message||'发布失败');return;}
 case 'delete':if(!n||!C.canDelete(me(),n)){toast('仅发布人可删除通知');return;}setModal({type:'confirm',title:'确认删除这条通知吗？',text:'删除后不可恢复！',ok:'确定',next:'delete',id:S.id,danger:true});return;
 case 'confirm-rc':case 'rc-ok':{reload();const cur=get(S.id);if(cur&&own(cur).done){S.modal=null;render();toast('你已确认过该通知，不会重复提交');return;}const r=transact(d=>C.receipt(d,S.id,me(),'confirm'));S.modal=null;reload();render();if(r.ok)toast('已确认收到');else if(r.code==='UNCLEAR'){const x=get(S.id);toast('提交结果不明确，已重新查询本人状态：'+(x?own(x).t:'—')+(x&&own(x).done?'，无需重复提交':''));}else toast(r.message||'确认未完成，请稍后重试');return;}
 case 'sign':reload();if(!get(S.id)||own(get(S.id)).done){render();toast('已提交，不能重复提交或修改');return;}setModal({type:'sign',version:get(S.id)?.version});return;
 case 'sign-clear':{const c=$('.nm-sign');c.getContext('2d').clearRect(0,0,c.width,c.height);c.dataset.drawn='';return;}
 case 'sign-ok':{const c=$('.nm-sign');if(!c||c.dataset.drawn!=='1'){toast('请先手写签名');return;}S.sigImage=c.toDataURL('image/png');S.sigVersion=S.modal.version;click({target:{closest:()=>({dataset:{a:'sign-submit-run'}})}});return;}
 case 'sign-submit-run':{const img=S.sigImage,ver=S.sigVersion;const r=transact(d=>{if(d.notices.find(x=>x.id===S.id)?.version!==ver)return {ok:false,code:'UPDATED',message:'通知内容已更新，请重新阅读后签字。'};return C.receipt(d,S.id,me(),'sign',img);});if(r.code==='UPDATED'){S.modal=null;reload();render();const sc=$('.nm-scroll');if(sc)sc.scrollTop=0;toast(r.message);return;}if(r.ok){S.modal=null;reload();render();toast('签字已提交');}else if(r.code==='UNCLEAR'){S.modal=null;reload();render();const x=get(S.id);toast('提交结果不明确，已重新查询本人状态：'+(x?own(x).t:'—')+'，无需重复签字');}else toast(r.message||'签字提交失败，签名已保留，请重新提交');return;}
 case 'open-link':toast('演示环境：将在小程序内打开 '+t.dataset.url);return;
 case 'open-att':toast(S.demo.attFail?'文件无法打开，请稍后重试；通知其他内容仍可阅读':'演示环境：附件按设备能力预览或下载');return;
 case 'play':toast('演示环境：视频在小程序播放器中播放');return;
 }}
root.addEventListener('click',click);
root.addEventListener('keydown',e=>{if(e.key==='Escape'&&['guardian-details','guardian-image'].includes(S.modal?.type)){e.stopPropagation();e.preventDefault();close();}});
root.addEventListener('input',e=>{const el=e.target;if(el.matches('[data-bind]')){bind(el);return;}
 if(el.id==='nm-q'){S.query=el.value;if(role==='teacher'){const sc=$('#nm-list');const tmp=document.createElement('div');tmp.innerHTML=teacherList();const nb=tmp.querySelector('#nm-list');if(sc&&nb)sc.innerHTML=nb.innerHTML;const tabs=$('.nm-tabs'),nt=tmp.querySelector('.nm-tabs');if(tabs&&nt)tabs.innerHTML=nt.innerHTML;}}
 else if(el.id==='nm-tq'){S.tplQuery=el.value;const l=$('#nm-tpls');if(l)l.innerHTML=tplRows();root.querySelector('.nm-cats')?.classList.toggle('muted',!!S.tplQuery);}});
root.addEventListener('keydown',e=>{const el=e.target;if(e.key==='Enter'&&el.matches('textarea[data-bind="text"]')){e.preventDefault();const a=el.selectionStart,b=el.selectionEnd,v=el.value;el.value=v.slice(0,a)+'\n　　'+v.slice(b);const p=a+3;el.setSelectionRange(p,p);el.dispatchEvent(new Event('input',{bubbles:true}));return;}if(e.key==='Enter'&&el.id==='nm-q'&&role==='parent'){S.applied=S.query.trim();render();}});
root.addEventListener('change',e=>{const el=e.target;
 if(el.id==='nm-cover-file'&&el.files[0]&&el.files[0].size>10*1024*1024){toast('请选择10MB以内的图片');}
 else if(el.id==='nm-cover-file'&&el.files[0]){readFile(el.files[0]).then(src=>{S.draft.cover=src;mark();render();}).catch(()=>toast('封面读取失败'));}
 else if(el.id==='nm-att-file')addAttachments([...el.files].map(f=>({name:f.name,size:f.size,src:URL.createObjectURL(f)})));
 else if(el.id==='nm-img-file')addImages(el.files,null);
 else if(el.id==='nm-video-file')addVideo(el.files[0],null);
 else if(el.id==='nm-ins-img')addImages(el.files,S.modal?.at??null);
 else if(el.id==='nm-ins-video')addVideo(el.files[0],S.modal?.at??null);});
const remote=()=>{reload();if((S.page==='edit'||S.page==='beauty'||S.page==='settings'||S.page==='preview')&&S.dirty)toast('其他端有更新，当前输入已保留');else render();};
window.addEventListener('storage',e=>{if(e.key===KEY)remote();});
if(channel)channel.onmessage=remote;
setInterval(()=>{const d=load();if(!d.notices?.some(n=>n.schoolId===SCHOOL&&n.status==='scheduled'&&Date.parse(n.config?.scheduledAt||'')<=Date.now()))return;const r=transact(db=>({ok:C.due(db,Date.now(),SCHOOL)}));if(r.ok)remote();},10000);
/* 草稿箱卡片长按/右键删除（演示） */
root.addEventListener('contextmenu',e=>{const c=e.target.closest('.nm-card[data-a="edit"]');if(!c)return;e.preventDefault();setModal({type:'confirm',title:'删除草稿？',text:'删除后草稿不能恢复。',ok:'删除',next:'del-draft',id:c.dataset.id,danger:true});});
/* ---------- 演示场景：在真实页面上复现异常、校验和边界状态（演示说明面板按钮调用） ---------- */
const DAY=86400000;
function c52(){return C.students.filter(s=>s.classId==='c52').map(s=>s.id);}
function inject(key,o={}){const at=Date.now();const mine=!!o.mine;const a=mine?me():C.actor('school',SCHOOL);const n=C.empty(a);
 Object.assign(n,{id:'demo-'+key,title:o.title||'演示通知',noticeKind:'normal',blocks:[C.textBlock(o.text||'这是一条用于演示的通知内容。')],attachments:o.attachments||[],cover:o.cover||'',status:o.status||'published',version:1,createdAt:at-(o.ago||0),updatedAt:at-(o.ago||0),publishedAt:at-(o.ago||0),creator:mine?a.id:'admin',creatorName:mine?a.name:'陈老师',origin:mine?'teacher':'school',receipts:o.receipts||{},supplements:[],history:[]});
 n.config={classes:o.classes||['c52'],studentIds:[],teachers:o.teachers||[],ack:o.ack||'read',schoolName:!mine,scheduleEnabled:!!o.scheduledAt,scheduledAt:o.scheduledAt||'',deadlineAt:o.expired?new Date(at-3600000).toISOString():''};
 n.rosterSnapshot={studentIds:n.status==='published'?(n.config.classes.includes('c52')?c52():[]):[],capturedAt:at};
 n.deliveryWindow=n.status==='published'?{startedAt:n.publishedAt,untilAt:o.expired?at-3600000:at+30*DAY}:null;
 if(o.blocks)n.blocks=o.blocks;
 const keep=S.failNext;S.failNext='';transact(d=>{d.notices=d.notices.filter(x=>x.id!==n.id);d.notices.unshift(n);d.revision++;return true;});S.failNext=keep;reload();return n.id;}
function rec(ids,kind,ack,guardian='家长',gid='other'){const o={},at=Date.now()-600000;ids.forEach(id=>{o[id+':'+gid]={kind,recipientId:id,guardianId:gid,guardian,readAt:at,confirmAt:ack==='confirm'?at:undefined,signatures:ack==='sign'?[{at,version:1,image:'assets/signature.svg'}]:[]};});return o;}
function sample(kind='normal'){S.draft=fresh(kind);S.base=0;S.mode='new';S.origin='kind';S.conflict=null;S.errors={};S.dirty=true;const n=S.draft;n.title='下周一升旗仪式着装要求';n.blocks=[C.textBlock('各位家长：\n下周一举行升旗仪式，请孩子穿秋季校服、佩戴红领巾，7:40前到校。')];n.config.classes=['c52'];S.page=kind==='beautiful'?'beauty':'edit';}
function goEdit(){if(!(S.page==='edit'||S.page==='beauty'||S.page==='settings')||!S.draft)sample('normal');}
function goEditFilled(){goEdit();const n=S.draft;if(!n.title.trim())n.title='下周一升旗仪式着装要求';if(!n.blocks.some(validBlock))n.blocks[0]=C.textBlock('请孩子穿秋季校服、佩戴红领巾。');if(!audienceCount(n.config))n.config.classes=['c52'];S.errors={};}
function openId(id,tab){S.modal=null;if(tab)S.tab=tab;S.page='list';open(id);}
const SC={
 /* 列表 */
 'list-empty':['空列表',()=>{S.page='list';S.demo={empty:true};render();}],
 'list-fail':['列表读取失败',()=>{S.page='list';S.demo={loadFail:true};render();}],
 'list-nomatch':['搜索无结果',()=>{S.page='list';S.demo={};S.query='期末考试安排';S.applied=S.query;render();}],
 'list-new':[role==='teacher'?'收到新通知（我接收）':'学校发来新通知',()=>{const id=inject('incoming',{title:role==='teacher'?'教职工消防演练签到':'本周五提前放学通知',ack:role==='teacher'?'sign':'confirm',teachers:role==='teacher'?['t1']:[],classes:role==='teacher'?[]:['c52']});S.demo={};S.page='list';S.tab=role==='teacher'?'receive':'all';S.query='';S.applied='';render();toast('新通知已到达，列表已更新');}],
 'list-nochild':['未关联学生',()=>{S.page='list';S.demo={noChild:true};render();}],
 'list-other-done':['其他家长已确认，本人待办',()=>{inject('other-guardian',{title:'冬季流感疫苗接种意向确认',ack:'confirm',receipts:rec(['c52-1'],'student','confirm','爸爸','p2')});S.demo={};S.page='list';S.tab='todo';render();toast('爸爸已确认；你的卡片仍显示“请点击确认”');}],
 'list-filter':['筛选：需签字',()=>{S.page='list';S.demo={};S.filters={status:'',ack:'sign',kind:''};S.tab='mine';render();}],
 'list-due':['定时通知到点发布',()=>{const id=inject('due',{mine:true,title:'定时演示：周五午餐菜单',status:'scheduled',scheduledAt:new Date(Date.now()+60000).toISOString()});transact(d=>({ok:C.due(d,Date.now()+120000,SCHOOL)}));reload();S.page='list';S.tab='mine';S.demo={};render();toast('已模拟到点，定时通知已发布到家长端');}],
 'reset':['恢复全部示例数据',()=>{try{localStorage.setItem(KEY,JSON.stringify(C.seed()))}catch{}reload();S.demo={};S.query='';S.applied='';S.filters={status:'',ack:'',kind:''};S.page='list';S.tab=role==='teacher'?'campus':'all';S.modal=null;render();toast('已恢复示例数据');}],
 /* 普通/美文编辑校验 */
 'v-title':['标题为空提交',()=>{goEdit();S.draft.title='';render();publish();}],
 'v-text':['正文超过3000字',()=>{sample('normal');S.draft.blocks[0].text='请家长配合做好以下事项。'.repeat(260);render();publish();}],
 'v-images':['图片超过9张',()=>{goEdit();const n=S.draft;while(imgCount(n)<7)n.blocks.push({id:C.uid('b'),type:'image',src:'assets/campus.svg',caption:''});render();addImageSrcs(['assets/campus.svg','assets/campus.svg','assets/campus.svg'],null);}],
 'v-video':['视频超过10分钟',()=>{goEdit();addVideoMeta({name:'运动会开幕式全程.mp4',duration:725,src:''},null);}],
 'v-link':['链接格式错误',()=>{goEdit();setModal({type:'link',title:'报名入口',url:'www.example.com/signup'});linkOk();}],
 'v-att':['超过5份/非PDF附件',()=>{sample('normal');S.draft.attachments=Array.from({length:4},(_,i)=>({id:C.uid('file'),name:'材料'+(i+1)+'.pdf',size:300000}));render();addAttachments([{name:'安全承诺书.pdf',size:200000},{name:'通知回执.pdf',size:100000}]);setTimeout(()=>addAttachments([{name:'活动视频.mp4',size:50000}]),2400);}],
 'v-audience':['未选择发布对象',()=>{goEditFilled();Object.assign(S.draft.config,{classes:[],studentIds:[],teachers:[]});S.page=S.page==='beauty'?'settings':S.page;render();publish();}],
 'v-schedule':['定时早于当前时间',()=>{goEditFilled();Object.assign(S.draft.config,{scheduleEnabled:true,scheduledAt:new Date(Date.now()-3600000).toISOString()});if(S.page==='beauty')S.page='settings';render();publish();}],
 'v-deadline':['截止早于发送时间',()=>{goEditFilled();Object.assign(S.draft.config,{scheduleEnabled:true,scheduledAt:tomorrow9(),deadlineAt:new Date(Date.parse(tomorrow9())-3600000).toISOString()});if(S.page==='beauty')S.page='settings';render();publish();}],
 'v-net':['发布时网络异常',()=>{goEditFilled();S.modal=null;render();S.failNext='network';doPublish();}],
 'v-storage':['草稿保存失败',()=>{goEdit();S.failNext='storage';saveDraft();}],
 'v-back':['未保存直接返回',()=>{goEdit();S.dirty=true;S.modal=null;back();}],
 'v-conflict':['其他端同时修改',()=>{const id=inject('conflict',{mine:true,title:'家长开放日活动安排',text:'本周四下午开放课堂，欢迎家长参加。',ack:'confirm'});openEdit(id);S.draft.title='家长开放日活动安排（更新时间）';S.dirty=true;transact(d=>{const x=d.notices.find(y=>y.id===id);x.title='家长开放日活动安排（学校已修订）';x.version++;x.lastEditor='陈老师';return true;});reload();render();doPublish();}],
 'v-empty-block':['无有效模块点预览',()=>{sample('beautiful');S.draft.blocks=[C.textBlock('　　'),C.textBlock('　　')];render();S.page='beauty';const msg=check(false);render();toast(msg);}],
 'v-beauty-sample':['插入示例图文模块',()=>{sample('beautiful');S.draft.blocks=[C.textBlock('亲爱的家长：秋季运动会将于本周五举行。'),{id:C.uid('b'),type:'image',src:'assets/campus.svg',caption:'运动会场地示意'},{id:C.uid('b'),type:'link',title:'运动会项目报名',url:'https://www.example.com/sports'}];render();}],
 'bg-plain':['背景：简洁白底',()=>{if(!S.draft)return;S.draft.theme='plain';render();}],
 'bg-green':['背景：清新绿底',()=>{if(!S.draft)return;S.draft.theme='green';render();}],
 'bg-paper':['背景：暖色浅底',()=>{if(!S.draft)return;S.draft.theme='paper';render();}],
 /* 教师详情 */
 'd-locked':['已有人阅读，修改被拦截',()=>{const id=inject('locked',{mine:true,title:'秋游费用收取说明',ack:'confirm',receipts:rec(['c52-2'],'student','read','妈妈')});openId(id,'mine');openEdit(id);}],
 'd-expired':['已截止通知',()=>{const id=inject(role==='teacher'?'expired-mine':'expired',{mine:role==='teacher',title:'国庆假期安全承诺书',ack:'sign',expired:true,ago:40*DAY,receipts:role==='teacher'?rec(c52().slice(0,5),'student','sign'):{}});openId(id);}],
 'd-allread':['全部已读（无提醒按钮）',()=>{const id=inject('allread',{mine:true,title:'周三下午课表调整',ack:'read',receipts:rec(c52(),'student','read')});openId(id,'mine');}],
 'd-scheduled':['待发送通知',()=>{const id=inject('scheduled',{mine:true,title:'下周家长会时间',status:'scheduled',scheduledAt:tomorrow9(),ack:'confirm'});openId(id,'mine');}],
 'd-deleted':['打开已删除通知',()=>{S.modal=null;S.id='demo-removed';S.page='detail';render();}],
 'd-remind-fail':['提醒时网络异常',()=>{const id=inject('remind',{mine:true,title:'体检回执提交提醒',ack:'confirm',receipts:rec(c52().slice(0,3),'student','confirm')});openId(id,'mine');S.failNext='network';setModal({type:'confirm',title:'提醒未读对象？',text:'将提醒未读学生的全部关联家长。（本次将模拟网络失败）',ok:'发送提醒',next:'remind',id});}],
 /* 家长/接收详情 */
 'p-read':['只需阅读：打开即已读',()=>{const id=inject('p-read',{title:'本周食谱公示',ack:'read',teachers:['t1']});openId(id);}],
 'p-confirm':['需确认收到',()=>{const id=inject('p-confirm',{title:'期中家长会参会确认',ack:'confirm',teachers:['t1']});openId(id);}],
 'p-sign':['需签字确认',()=>{const id=inject('p-sign',{title:'研学旅行安全告知书',ack:'sign',teachers:['t1']});openId(id);}],
 'p-sign-empty':['未手写直接提交签名',()=>{const id=inject('p-sign',{title:'研学旅行安全告知书',ack:'sign',teachers:['t1']});openId(id);setModal({type:'sign',version:get(id)?.version});click({target:{closest:()=>({dataset:{a:'sign-ok'}})}});}],
 'p-sign-updated':['签字时通知已被修改',()=>{const id=inject('p-sign',{title:'研学旅行安全告知书',ack:'sign',teachers:['t1']});openId(id);setModal({type:'sign',version:get(id)?.version});transact(d=>{const x=d.notices.find(y=>y.id===id);x.blocks.push(C.textBlock('【补充】集合时间调整为7:30。'));x.version++;return true;});reload();toast('学校刚刚修改了通知；请在签名板签名后提交');}],
 'p-net':['确认时网络异常',()=>{const id=inject('p-confirm',{title:'期中家长会参会确认',ack:'confirm',teachers:['t1']});openId(id);S.failNext='network';click({target:{closest:()=>({dataset:{a:'rc-ok'}})}});}],
 'p-unclear':['提交结果不明确',()=>{const id=inject('p-confirm',{title:'期中家长会参会确认',ack:'confirm',teachers:['t1']});openId(id);S.failNext='unclear';click({target:{closest:()=>({dataset:{a:'rc-ok'}})}});}],
 'p-dup':['重复点击确认',()=>{const id=inject('p-confirm',{title:'期中家长会参会确认',ack:'confirm',teachers:['t1']});openId(id);click({target:{closest:()=>({dataset:{a:'rc-ok'}})}});setTimeout(()=>click({target:{closest:()=>({dataset:{a:'rc-ok'}})}}),1200);}],
 'p-attfail':['附件/图片无法打开',()=>{const id=inject('p-att',{title:'校服尺码登记表',ack:'read',teachers:['t1'],attachments:[{id:'f1',name:'校服尺码登记表.xlsx',size:48000}],blocks:[C.textBlock('请下载附件填写孩子的校服尺码。'),{id:C.uid('b'),type:'image',src:'assets/__missing__.png',caption:'尺码对照图'}]});openId(id);S.demo.attFail=true;click({target:{closest:()=>({dataset:{a:'open-att'}})}});}],
 'p-share':['分享通知',()=>{if(S.page!=='detail'){const id=inject('p-read',{title:'本周食谱公示',ack:'read',teachers:['t1']});openId(id);}setModal({type:'share'});}],
 'landing-stranger':['分享陌生人落地页',()=>openShareLanding('stranger')],
 'landing-loggedin':['分享落地页（有账号已登录）',()=>openShareLanding('logged-in')],
 'landing-loggedout':['分享落地页（有账号未登录）',()=>openShareLanding('logged-out')],
 /* 阅读统计 */
 's-teacher':['切换教师统计',()=>{const id=inject('stats-t',{mine:true,title:'教研组会议签到',ack:'sign',classes:['c52'],teachers:['t2','t3','t4'],receipts:{...rec(c52().slice(0,6),'student','sign'),...rec(['t2'],'teacher','sign','李建国','t2')}});openId(id,'mine');S.page='stats';S.statsKind='teacher';S.statsFilter='unread';render();}],
 'r-sign-one':['1位家长签字明细',()=>receiptDemo('sign',1)],
 'r-sign-five':['5位家长签字明细',()=>receiptDemo('sign',5)],
 'r-confirm-one':['1位家长确认明细',()=>receiptDemo('confirm',1)],
 'r-confirm-five':['5位家长确认明细',()=>receiptDemo('confirm',5)],
 's-guardians':['多家长各自记录',()=>{const id=inject('stats-g',{mine:true,title:'冬令营报名确认',ack:'confirm',receipts:{...rec(['c52-1'],'student','confirm','爸爸','p2'),...rec(['c52-1'],'student','read','周女士','p1'),...rec(['c52-2'],'student','confirm','妈妈')}});openId(id,'mine');S.page='stats';S.statsKind='student';S.statsFilter='done';render();}],
 /* 模板 */
 't-nomatch':['模板搜索无结果',()=>{S.page='kind';S.tplQuery='期末成绩';render();}],
 't-empty':['选用无正文模板',()=>{S.page='tpl';S.tplId=(window.NotificationCatalog?.templates||[])[0]?.id;render();}],
 'a-select-all':['发布对象全选/全不选',()=>{goEditFilled();S.page='settings';const sel=clone({classes:S.draft.config.classes||[],studentIds:S.draft.config.studentIds||[],teachers:S.draft.config.teachers||[]});sel.teachers=[];S.modal={type:'audience',tab:'teacher',open:{},sel};render();}]
};
function scenarios(){const p=S.page,T=role==='teacher';let k=[];
 if(p==='list')k=T?['list-empty','list-fail','list-nomatch','list-new','list-filter','list-due','reset']:['list-empty','list-fail','list-nomatch','list-new','list-other-done','list-nochild','p-confirm','p-sign','reset'];
 else if(p==='kind'||p==='tpl')k=['t-nomatch','t-empty'];
 else if(p==='edit')k=['v-title','v-text','v-images','v-video','v-link','v-att','v-audience','a-select-all','v-schedule','v-net','v-storage','v-conflict','v-back'];
 else if(p==='beauty')k=['v-empty-block','v-beauty-sample','v-title','v-images','v-video','v-link','v-storage','v-back'];
 else if(p==='preview')k=['bg-plain','bg-green','bg-paper'];
 else if(p==='settings')k=['v-audience','a-select-all','v-schedule','v-net','v-conflict'];
 else if(p==='detail'){const n=get(S.id);k=T&&n&&isMine(n)?['d-locked','d-allread','d-scheduled','d-remind-fail','d-deleted']:['p-read','p-confirm','p-sign','p-sign-empty','p-sign-updated','p-net','p-unclear','p-dup','p-attfail','p-share','d-deleted'];}
 else if(p==='stats')k=['r-sign-one','r-sign-five','r-confirm-one','r-confirm-five','s-teacher','s-guardians','d-allread'];
 if(T&&p==='list')k=k.concat(['r-sign-one','r-sign-five','r-confirm-one','r-confirm-five','s-teacher','d-locked','p-sign']);
 return [...new Set(k.concat(['landing-stranger','landing-loggedin','landing-loggedout']))].filter(x=>SC[x]).map(x=>[SC[x][0],"NotificationMini.demo('"+x+"')"]);}
function runDemo(key){const s=SC[key];if(!s)return;if(key!=='list-empty'&&key!=='list-fail'&&key!=='list-nochild'&&S.page==='list')S.demo={...S.demo,empty:false,loadFail:false,noChild:false};try{s[1]();}catch(e){toast('演示场景执行失败：'+e.message);}}


function messageItems(){reload();return DB.noticeMessages.filter(m=>m.role===role&&m.accountId===me().id&&m.schoolId===SCHOOL).sort((a,b)=>b.createdAt-a.createdAt).map(m=>({...clone(m),childName:C.students.find(s=>s.id===m.childId)?.name||'',deleted:!get(m.noticeId)}));}
function markMessages(keys){return transact(d=>{for(const m of d.noticeMessages||[])if(m.role===role&&m.accountId===me().id&&(!keys||keys.includes(m.key)))m.readAt||=Date.now();return {ok:true};});}
function openMessage(key,from='sc-msgs'){reload();const m=messageItems().find(x=>x.key===key);if(!m){window.toast?.('消息不存在或无权查看');return false;}markMessages([key]);const n=get(m.noticeId);if(!n){window.toast?.('通知已删除');window.demoToast?.('通知已删除');return false;}const child=m.childId;const bound=role==='teacher'||C.bindings(DB).some(b=>b.active&&b.childId===child&&b.guardianId===me().id&&b.schoolId===SCHOOL);const actor={...me(),childId:child};if(!bound||!C.canView(actor,n)||(role==='teacher'&&!n.config.teachers.includes(me().id))){window.toast?.('您不在本次通知范围内，请联系管理员');window.demoToast?.('您不在本次通知范围内，请联系管理员');return false;}S.messageChild=child;S.messageFrom=from;S.modal=null;S.tab=role==='teacher'?'receive':'all';window.go?.('sc-notification');open(n.id);return true;}
function messageDemo(key){const id=inject('message-'+key,{mine:false,title:key==='deleted'?'已删除的校园活动通知':'校园活动通知',ack:key==='sign'?'sign':'confirm',teachers:['t1']});if(key==='deleted')transact(d=>{const n=d.notices.find(n=>n.id===id);d.deletedArchive.push({id,snapshot:clone(n)});d.notices=d.notices.filter(n=>n.id!==id);return {ok:true};});if(key==='service-fail')transact(d=>{for(const m of d.noticeMessages.filter(m=>m.noticeId===id))m.channels.service='failed';return {ok:true};});window.dispatchEvent(new Event('zxh-notice-change'));window.go?.('sc-msgs');window.msgReadTab?.('all');window.msgFilterReset?.();if(key==='service-fail')window.toast?.('服务号暂未送达，通知仍可在消息中查看');}


function routeError(message){S.page='route-error';S.modal=null;S.routeMessage=message||'通知不存在或当前身份无权访问';render();}
function restoreRoute(q){reload();S.modal=null;S.messageChild='';const view=q.view||'list';const allowed=role==='teacher'?['campus','mine','receive','draft']:['all','todo'];S.tab=allowed.includes(q.tab)?q.tab:(role==='teacher'?'campus':'all');if(q.child){if(role!=='parent'||!C.bindings(DB).some(b=>b.active&&b.guardianId===me().id&&b.childId===q.child&&b.schoolId===SCHOOL)){routeError('学生关联已失效或当前账号无权访问');return;}S.messageChild=q.child;}
 if(view==='list'){goList();return;}
 if(['detail','stats'].includes(view)){const n=get(q.id);if(!n||!C.canView(me(),n)){routeError('通知不存在或当前身份无权查看');return;}if(view==='stats'&&(role!=='teacher'||!C.canManage(me(),n))){routeError('仅发布人可以查看阅读统计');return;}S.modal=null;open(n.id);if(view==='stats'){S.page='stats';S.statsKind=q.kind==='teacher'?'teacher':'student';S.statsFilter=['unread','read','done'].includes(q.filter)?q.filter:'unread';render();}return;}
 if(view==='landing'&&role==='parent'){S.id=q.id||'';S.page='landing';S.landingMode=['stranger','external','denied'].includes(q.landing)?q.landing:'stranger';if(S.landingMode==='stranger'){S.pendingShare=S.id;window.go?.('sc-login');}else render();return;}
 if(role!=='teacher'){routeError('当前身份没有通知编辑权限');return;}
 if(view==='kind'){S.page='kind';render();return;}
 if(view==='tpl'){if(!q.template||!tpl(q.template)){routeError('模板不存在或无权访问');return;}S.tplId=q.template;S.page='tpl';render();return;}
 if(['edit','beauty','preview','settings'].includes(view)){
  let draft=null;try{if(q.draft)draft=JSON.parse(sessionStorage.getItem('zxh-route-draft|'+role+'|'+q.draft)||'null')}catch{}
  if(q.id){const n=get(q.id);if(!n||!C.canEdit(me(),n)){routeError('通知不存在或已不能编辑');return;}openEdit(n.id);if(draft&&draft.id===n.id)S.draft=draft;}
  else if(draft){if(draft.creator!==me().id||draft.origin!==role||draft.schoolId!==SCHOOL){routeError('草稿不属于当前身份');return;}S.draft=draft;S.base=Number(q.base)||0;S.mode=q.mode==='draft'?'draft':'new';}
  else if(q.draft){routeError('未保存的编辑内容已失效，请返回通知列表');return;}
  else {S.draft=fresh(view==='beauty'?'beautiful':'normal');S.base=0;S.mode='new';}
  S.page=view;render();return;
 }
 routeError('页面参数无效，请返回通知列表');
}
function routeState(){const q={view:S.page,tab:S.tab};if(S.id&&(!['edit','beauty','preview','settings'].includes(S.page)||(S.mode==='edit'&&S.draft?.id===S.id)))q.id=S.id;if(S.messageChild)q.child=S.messageChild;if(S.page==='stats'){q.kind=S.statsKind;q.filter=S.statsFilter;}if(S.page==='tpl')q.template=S.tplId;if(S.page==='landing')q.landing=S.landingMode;if(S.draft&&['edit','beauty','preview','settings'].includes(S.page)){q.draft=S.draft.id;q.base=S.base;q.mode=S.mode;try{sessionStorage.setItem('zxh-route-draft|'+role+'|'+S.draft.id,JSON.stringify(S.draft));}catch{}}return q;}

window.NotificationMini={routeError,restoreRoute,get routeState(){return routeState()},messageItems,markMessages,openMessage,messageDemo,demo:runDemo,back,setHost:window.NotificationMiniHost,refresh(){reload();render()},get state(){return {role,page:S.page,tab:S.tab,modal:S.modal?.type||'',id:S.id,dirty:S.dirty,landingMode:S.page==='landing'?S.landingMode:''}},filter(){if(role==='teacher')setModal({type:'filter'});}};
render();window.dispatchEvent(new Event('zxh-notice-ready'));
})();

