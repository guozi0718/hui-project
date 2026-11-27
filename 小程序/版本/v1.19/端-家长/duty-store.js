/* ==================== 教师 / 职务数据层（学校端 school.html 与老师端 teacher.html 共用，2026-10-19） ====================
   两端读写同一个 localStorage 键：老师名单、班级身份、职务与在职状态、操作日志一处改动两端可见（刷新另一端即生效）；没有存储时按 seed() 生成演示初值，学校端「恢复演示初始数据」两端同时复位。
   内容原在 school.html 内联脚本：ME / 存储键与版本说明、年级与班级字典、正副班主任与教师激活开关、自动关联职务默认值、种子数据与读取归一化。 */
const ME='何静';
/* v2：新增教师资料（性别、注册方式）、注册申请、手机号白名单与注册码；v3：权限点按功能模块重分组；v4：班级评价 / 智慧放学 / 学生管理 / 控辍保学权限点细化；v5：新增平台预置「值周老师」职务；v6：值周老师改为角色权限（随「值周老师管理」分组生效），不再是职务模板（2026-10-16）；v7：去掉兜底职务「教师」、主职务改为选填，「科任」改称「任课老师」（2026-10-16）；v8：权限点不带范围；v9：考勤管理员模板改为校园签到·查看 + 请假四项（2026-10-17）；v10：「全体教职工」平台默认值定为班级评价·查看 / 点评 + 智慧放学·操作（2026-10-17）；v11：班级命名由入学届别改为「3年级-2班」格式（2026-10-19）；v12：素质评价 / 班级评价「删除/修改」拆为修改 + 删除，控辍保学「新增/编辑…记录」拆为新增 + 修改（2026-10-19）；v13：职务新增选填的「职务说明」desc，默认模板补种子说明；教师管理新增「分配职务」「离职 / 复职」两个权限点，校级管理员模板默认带上；校园签到新增「代补签」（班主任默认值与考勤管理员模板带上），「代录请假」改名「代请假」（2026-10-19）；班主任自动关联默认值重定为 28 项：素质评价加评价报告、去掉班级评价点评 / 修改 / 删除 / 查看值周老师、学生管理全部 8 项、控辍保学只留查看 / 处理预警 / 新增劝返 / 新增关爱（2026-10-19）；任课老师默认值重定为 14 项：加素质评价·评价报告与校园签到·代补签，去掉班级评价·查看值周老师与校园签到·接收考勤通知（2026-10-19）；校长、副校长模板重定为除校园签到·接收考勤通知外的全部 46 项功能（2026-10-19）；教导处主任模板重定为 42 项：在校长基础上去掉素质评价与班级评价的修改 / 删除（2026-10-19）；德育处主任模板重定为 44 项：在校长基础上去掉班级评价的修改 / 删除（2026-10-19）；年级组长模板重定为 38 项：在教导处主任基础上再去掉控辍保学的修改 / 删除劝返记录与修改 / 删除关爱记录（2026-10-19）；v13 内再调：年级组长模板去掉教师管理 7 项与班级评价的查看 / 编辑 / 删除值周老师（这些点只在全校范围生效，年级组长范围为指定年级），为 28 项；值周老师默认值去掉查看值周老师，为班级评价的查看 / 点评 2 项（2026-10-19）；校级管理员模板重定为全部 46 项可见功能，隐藏组的职务与权限管理 / 查看操作日志保留（2026-10-19）；旧版本数据不再读取。
   同版本内新增的自动关联职务在读取时按平台默认值补齐，不升版本 */
/* v14：演示账号王老师登记进共用名册（t26：3年级-2班 班主任、任课 3年级-1班 / 3年级-2班 / 3年级-3班（2026-10-27 补 3年级-1班，与请假 / 学生管理 / 素质评价的任课班对齐），曾兼任校级管理员、2026-10-27 去掉，与老师端首页身份对齐），老师端教师管理可看到本人并标「我」；原 3年级-2班 班主任冯磊改为该班任课老师，避免一班三名班主任（2026-10-20） */
const STORE='zxh_school_duty_state_v23'; /* v23：演示账号 t26 的姓名改为「王瑶」（演示账号为女老师，原「王建国」读起来像男老师），老师端个人资料同步，2026-11-05；v22：演示账号 t26 的姓名由「王老师」改为真名「王建国」（与老师端个人资料一致，称谓仍为「王老师」），请假流转记录按「{姓名}老师」显示后不会出现「王老师老师」，也能与同班的王丽区分，2026-11-05；v21：1年级-1班 班主任 t18 由「高原」改名「李航」，与家长端、老师端写死的「李老师」（林晓阳班主任：代请假、校徽办理提醒、添加孩子审核、放学延迟）一致，请假单三端共用后按名册显示姓名，2026-11-05；v20：新增学校自定义职务「人事专员」（全校，只勾教师管理 7 项），王老师兼任，老师端教师管理宫格 / 角标 / 页内操作按权限演示，2026-11-04；v19：演示账号王老师去掉兼任的校级管理员职务（只保留 3年级-2班 班主任 + 任课 3年级-1 / 2 / 3班），老师端各页按真实权限范围演示、不再需要「校级管理员全校范围不单独演示」的说明，2026-10-27；v18：学校新增职务示例「教研组长」改为「课后服务老师」（指定班级，校园签到·查看 + 智慧放学·查看 / 操作），由吴芳兼任 3年级-4班、3年级-5班，2026-10-21；v16：独立白名单并入教师名单（批量导入教师 → 待激活记录），注册申请不再有「自动通过」（2026-10-20）；v17：演示校扩为 6 个年级（新增 5年级-1 / 2班、6年级-1 / 2班，班主任冯磊 / 苏畅 / 唐宁 / 新增老师秦岚），2026-10-20 */
/* 只在「全校」范围生效的权限点（设计文档 13.4.2，2026-10-19）：教师管理、职务与权限整组，以及班级评价的查看 / 编辑 / 删除值周老师（值周老师管理页列的是全校值周分组，是校级配置，不是班级数据）；非全校范围的职务与自动关联职务都不带这些点，学校端编辑时置灰，加载时兜底清理 */
const schoolOnlyPerm=p=>/^(tch|duty|audit|ceva\.duty)/.test(p);

/* ---------- 字典：年级、班级（命名统一为「3年级-2班」，2026-10-19 由入学届别「3年级-2班」转换，本学年 2025–2026）、权限点、范围类型 ---------- */
const GRADES=['1年级','2年级','3年级','4年级','5年级','6年级'];
const CLASS_LIST=['1年级-1班','1年级-2班','1年级-3班','2年级-1班','2年级-2班','2年级-3班','3年级-1班','3年级-2班','3年级-3班','3年级-4班','3年级-5班','4年级-1班','4年级-2班','5年级-1班','5年级-2班','6年级-1班','6年级-2班'];

/* 第一阶段隐藏：区分正 / 副班主任（后续阶段）。为 false 时全站只称「班主任」：班级角色列表合为一列、KPI 改为「未指定 / 多名班主任」、抽屉改为班主任多选，班级身份、确认弹窗与操作日志不带正副字样；
   数据层仍保留 head / dep 字段（新指定的班主任在本班尚无 head 时记为 head，否则记为 dep；head 空出时由其余班主任递补），切回后数据可直接复用。恢复方式：改为 true */
const HR_SPLIT=false;
/* 教师激活（2026-10-19 按同事版教师端口径更正后恢复展示）：后台新增的老师为「待激活」，老师用该手机号访问小程序并切换到本校后自动激活，无需确认身份，也没有「不是我」反馈；
   待激活期间管理员可改资料、删记录，激活后与自助注册的老师一致。开关为 false 时隐藏该状态（新增即正常账号，旧数据中的待激活按正常处理），仅作演示兜底 */
const ACTIVATE_ON=true;
const hrsOf=c=>[c.head,...c.dep].filter(Boolean);
function normHr(c){if(!HR_SPLIT&&!c.head&&c.dep.length)c.head=c.dep.shift()}
/* 角色权限（设计文档 13.4.2）：平台给默认值 def，学校可对全校统一增减；班主任、任课老师范围固定为所在班级（键与 SCOPES 的同名范围对应），值周老师范围为值周分组负责的年级、仅值周期间生效（分组在「值周老师管理」模块维护，2026-10-16）。
   sc = 列表「数据权限」列文案；rng / auto = 抽屉提示中的范围与自动带上的说法（锁定项与「仅手动分配」的规则说明只放演示说明，不在抽屉底部展示，2026-10-19）；
   on = 平台锁定开启，第一阶段起生效：校徽信息确认、家长注册审核、请假审批与销假确认的待办由流程派给班主任，关掉就无人处理，处理前要能看到，所以连同对应的「查看」一起锁定；学校端不可取消，读取时兜底补齐（2026-11-11）；
   off = 平台锁定不可开启（审批按审批人名单判定，13.4.1；随 school.html 的 LOCK_ON，后续阶段） */
const CROLES=[
  {k:'hr',n:'班主任',who:HR_SPLIT?'正、副班主任':'班主任',sc:'班主任班级',rng:'其担任班主任的班级',auto:'新指定的班主任',def:['badge.view','badge.remind','badge.confirm','eva.view','eva.add','eva.report','ceva.view','att.view','att.resign','att.notify','dis.view','dis.op','stu.view','stu.add','stu.audit','stu.edit','stu.move','stu.leave','stu.grad','stu.del','leave.view','leave.approve','leave.proxy','leave.cancel','drop.view','drop.handle','drop.ret','drop.care'],on:['badge.view','badge.confirm','stu.view','stu.audit','leave.view','leave.approve'],off:[]},
  {k:'sub',n:'任课老师',who:'任课老师',sc:'任教班级',rng:'其任课的班级',auto:'新增任教班级的老师',def:['badge.view','eva.view','eva.add','eva.report','ceva.view','ceva.add','att.view','att.resign','dis.view','dis.op','stu.view','leave.view','leave.proxy','drop.view'],on:[],off:['leave.approve']},
  /* 值周老师：身份与范围来自「值周老师管理」的分组（值周老师、负责年级、执行时间），这里只管权限；无平台锁定项。默认值不含查看值周老师（2026-10-19：该页列全校分组、只在全校范围生效），本人的值周安排在老师端个人资料页展示 */
  {k:'dw',n:'值周老师',who:'值周老师',sc:'值周分组负责的年级',rng:'值周分组负责的年级，仅值周期间生效',auto:'在「值周老师管理」中新指定的老师',def:['ceva.view','ceva.add'],on:[],off:[]},
  /* 全体教职工（2026-10-17）：账号正常的教职工都自动带上，范围固定为全校；平台默认值为班级评价的查看、点评（任何老师都可对任一班级评价）与智慧放学·操作（扫教室放学码可协助任一班放学，不开「查看」故页面不列全校班级）；要求全校任意老师都能用的其他功能（如素质评价·点评）在这里开启，一次设置全校生效。scope 为列表数据权限筛选用的范围键 */
  {k:'all',n:'全体教职工',who:'教职工',sc:'全校',scope:'school',rng:'全校所有年级与班级',auto:ACTIVATE_ON?'新激活的教职工':'新增的教职工',def:['ceva.view','ceva.add','dis.op'],on:[],off:[]}
];
const defRoles=()=>{const o={};CROLES.forEach(r=>o[r.k]=r.def.slice());return o};

/* ---------- 种子数据（改动持久化到 localStorage） ---------- */
function seed(){
  const D=(d)=>Date.now()-d*86400000;
  /* 教师：g 性别、ph 脱敏手机号（与注册申请按此匹配，本人登录时按此自动激活）、st 在职状态（on 在职 / pend 待激活 / off 离职，2026-10-20 两端统一为在职口径）、src 来源（import 批量导入 / manual 人工审核通过 / admin 管理员新增）、rt 注册或激活时间；
     管理员新增的待激活老师另有 by 新增人、at 新增时间 */
  const T=(id,n,g,ph,ds,o)=>Object.assign({id,n,g,ph:'138****'+ph,st:'on',ds,src:'import',rt:D(41)},o||{});
  const codeTs=Date.now()-(7*60+18)*60000;
  const st={
    duties:[
      {id:'principal',n:'校长',desc:'学校负责人，全校范围内可使用全部功能',src:'tpl',scope:'school',perms:['badge.view','badge.remind','badge.confirm','eva.view','eva.add','eva.edit','eva.del','eva.report','ceva.view','ceva.add','ceva.edit','ceva.del','ceva.dutyview','ceva.dutyedit','ceva.dutydel','att.view','att.resign','dis.view','dis.op','stu.view','stu.add','stu.audit','stu.edit','stu.move','stu.leave','stu.grad','stu.del','tch.view','tch.add','tch.edit','tch.assign','tch.status','tch.del','tch.audit','leave.view','leave.approve','leave.proxy','leave.cancel','drop.view','drop.handle','drop.ret','drop.retedit','drop.retdel','drop.care','drop.careedit','drop.caredel','audit.view'],sens:['s.ill'],on:true},
      {id:'vice',n:'副校长',desc:'协助校长分管教学与德育，全校范围内可使用全部功能',src:'tpl',scope:'school',perms:['badge.view','badge.remind','badge.confirm','eva.view','eva.add','eva.edit','eva.del','eva.report','ceva.view','ceva.add','ceva.edit','ceva.del','ceva.dutyview','ceva.dutyedit','ceva.dutydel','att.view','att.resign','dis.view','dis.op','stu.view','stu.add','stu.audit','stu.edit','stu.move','stu.leave','stu.grad','stu.del','tch.view','tch.add','tch.edit','tch.assign','tch.status','tch.del','tch.audit','leave.view','leave.approve','leave.proxy','leave.cancel','drop.view','drop.handle','drop.ret','drop.retedit','drop.retdel','drop.care','drop.careedit','drop.caredel'],sens:[],on:true},
      {id:'jiaodao',n:'教导处主任',desc:'负责教学常规、学籍与教师事务，全校范围内除修改 / 删除评价记录外可使用全部功能',src:'tpl',scope:'school',perms:['badge.view','badge.remind','badge.confirm','eva.view','eva.add','eva.report','ceva.view','ceva.add','ceva.dutyview','ceva.dutyedit','ceva.dutydel','att.view','att.resign','dis.view','dis.op','stu.view','stu.add','stu.audit','stu.edit','stu.move','stu.leave','stu.grad','stu.del','tch.view','tch.add','tch.edit','tch.assign','tch.status','tch.del','tch.audit','leave.view','leave.approve','leave.proxy','leave.cancel','drop.view','drop.handle','drop.ret','drop.retedit','drop.retdel','drop.care','drop.careedit','drop.caredel'],sens:[],on:true},
      {id:'deyu',n:'德育处主任',desc:'负责德育、班级评价与控辍保学，全校范围内除修改 / 删除班级评价记录外可使用全部功能',src:'tpl',scope:'school',perms:['badge.view','badge.remind','badge.confirm','eva.view','eva.add','eva.edit','eva.del','eva.report','ceva.view','ceva.add','ceva.dutyview','ceva.dutyedit','ceva.dutydel','att.view','att.resign','dis.view','dis.op','stu.view','stu.add','stu.audit','stu.edit','stu.move','stu.leave','stu.grad','stu.del','tch.view','tch.add','tch.edit','tch.assign','tch.status','tch.del','tch.audit','leave.view','leave.approve','leave.proxy','leave.cancel','drop.view','drop.handle','drop.ret','drop.retedit','drop.retdel','drop.care','drop.careedit','drop.caredel'],sens:[],on:true},
      {id:'gradelead',n:'年级组长',desc:'负责所分管年级的日常管理，分配时选择年级',src:'tpl',scope:'grade',perms:['badge.view','badge.remind','badge.confirm','eva.view','eva.add','eva.report','ceva.view','ceva.add','att.view','att.resign','dis.view','dis.op','stu.view','stu.add','stu.audit','stu.edit','stu.move','stu.leave','stu.grad','stu.del','leave.view','leave.approve','leave.proxy','leave.cancel','drop.view','drop.handle','drop.ret','drop.care'],sens:[],on:true},
      {id:'admin',n:'校级管理员',desc:'学校信息化管理员，全校范围内可使用全部功能并管理职务与权限',src:'tpl',scope:'school',perms:['badge.view','badge.remind','badge.confirm','eva.view','eva.add','eva.edit','eva.del','eva.report','ceva.view','ceva.add','ceva.edit','ceva.del','ceva.dutyview','ceva.dutyedit','ceva.dutydel','att.view','att.resign','dis.view','dis.op','stu.view','stu.add','stu.audit','stu.edit','stu.move','stu.leave','stu.grad','stu.del','tch.view','tch.add','tch.edit','tch.assign','tch.status','tch.del','tch.audit','leave.view','leave.approve','leave.proxy','leave.cancel','drop.view','drop.handle','drop.ret','drop.retedit','drop.retdel','drop.care','drop.careedit','drop.caredel','duty.admin','audit.view'],sens:[],on:true},
      {id:'attadm',n:'考勤管理员',desc:'负责校园签到与请假事务',src:'tpl',scope:'school',perms:['att.view','att.resign','leave.view','leave.approve','leave.proxy','leave.cancel'],sens:[],on:true},
      {id:'khfw',n:'课后服务老师',desc:'负责课后服务时段所看管班级的签到与放学，分配时选择班级',src:'school',scope:'cls',perms:['att.view','dis.view','dis.op'],sens:[],on:true},
      /* 学校自定义职务示例（2026-11-04）：只管教师事务，全校范围、只勾教师管理全部 7 项，由王老师兼任——老师端据此演示教师管理宫格、角标与页内操作（不带其他模块权限，各页其余演示不受影响） */
      {id:'rszy',n:'人事专员',desc:'负责教师档案、注册审核与职务分配，分配后全校范围生效',src:'school',scope:'school',perms:['tch.view','tch.add','tch.edit','tch.assign','tch.status','tch.del','tch.audit'],sens:[],on:true},
      {id:'xlfd',n:'心理辅导员',desc:'',src:'school',scope:'school',perms:['leave.view'],sens:['s.ill'],on:false}
    ],
    teachers:[
      /* 教师激活关闭时，两位管理员新增的老师直接为正常账号（新增时间即生效时间） */
      T('t24','宁远','男','',[],ACTIVATE_ON?{ph:'177****3826',st:'pend',src:'admin',by:ME,at:D(1.2),rt:null}:{ph:'177****3826',src:'admin',by:ME,at:D(1.2),rt:D(1.2)}),
      T('t25','邓佳','女','',[],ACTIVATE_ON?{ph:'139****2290',st:'pend',src:'admin',by:ME,at:D(5),rt:null}:{ph:'139****2290',src:'admin',by:ME,at:D(5),rt:D(5)}),
      /* 批量导入的老师：导入即待激活记录（原独立白名单 2026-10-20 并入教师名单） */
      T('t27','周婷','女','',[],ACTIVATE_ON?{ph:'135****4409',st:'pend',src:'import',by:ME,at:D(3.1),rt:null}:{ph:'135****4409',src:'import',by:ME,at:D(3.1),rt:D(3.1)}),
      T('t1','张建国','男','1391',[{d:'principal',s:[],main:true}],{rt:D(402)}),
      T('t2','刘敏','女','2207',[{d:'vice',s:[],main:true}],{rt:D(402)}),
      T('t3','赵雪','女','0315',[{d:'jiaodao',s:[],main:true}],{rt:D(402)}),
      T('t4','周文','男','6620',[{d:'deyu',s:[],main:true}],{rt:D(402)}),
      T('t5','孙海','男','4471',[{d:'gradelead',s:['3年级'],main:true}],{rt:D(402)}),
      T('t6','王丽','女','8826',[]),
      T('t7','何静','女','5130',[{d:'admin',s:[],main:true},{d:'attadm',s:[]}],{rt:D(402)}),
      /* 老师端演示账号本人（2026-10-20）：手机号与老师端个人资料一致，未设主职务（首页角色标签按班主任口径），兼任人事专员（只有教师管理权限） */
      T('t26','王瑶','女','2233',[{d:'rszy',s:[]}],{rt:D(402)}) /* 班主任 + 任课老师 + 兼任人事专员（只有教师管理权限，2026-11-04）；2026-10-27 去掉兼任的校级管理员 */,
      T('t8','郑凯','男','7012',[]),
      T('t9','吴芳','女','3368',[{d:'khfw',s:['3年级-4班','3年级-5班']}]),
      T('t10','冯磊','男','9054',[]),
      T('t11','陈晨','女','1187',[]),
      T('t12','林悦','女','2649',[]),
      T('t13','黄涛','男','5502',[{d:'gradelead',s:['2年级'],main:true}]),
      T('t14','许诺','女','7731',[]),
      T('t15','马超','男','0928',[]),
      T('t16','宋佳','女','4415',[]),
      T('t17','唐宁','女','6083',[{d:'attadm',s:[],main:true}]),
      T('t18','李航','男','3196',[]),
      T('t19','罗兰','女','8240',[]),
      T('t20','梁静','女','1573',[]),
      T('t21','江涛','男','6619',[],{src:'manual',by:ME,rt:D(9.1)}),
      T('t22','钱毅','男','2034',[],{st:'off',rt:D(402)}),
      T('t23','苏畅','女','7305',[],{rt:D(2)}),
      /* 5、6 年级（2026-10-20 新增，让演示校成为完整的六年制小学）：秦岚为新增的 6年级-2班 班主任 */
      T('t28','秦岚','女','6107',[])
    ],
    classes:[
      {c:'1年级-1班',head:'t18',dep:[],sub:['t18'],pend:0},
      {c:'1年级-2班',head:'t19',dep:[],sub:['t19','t21'],pend:1},
      {c:'1年级-3班',head:'t15',dep:[],sub:['t15'],pend:0},
      {c:'2年级-1班',head:'t11',dep:[],sub:['t11','t13'],pend:0},
      {c:'2年级-2班',head:'t12',dep:['t21'],sub:['t12'],pend:3},
      {c:'2年级-3班',head:'t24',dep:[],sub:['t13','t24'],pend:0},
      {c:'3年级-1班',head:'t8',dep:['t9'],sub:['t8','t6','t26'],pend:1},
      {c:'3年级-2班',head:'t26',dep:['t6'],sub:['t26','t6','t9','t10'],pend:2},
      {c:'3年级-3班',head:'t5',dep:[],sub:['t5','t20','t26'],pend:0},
      {c:'3年级-4班',head:'t20',dep:[],sub:['t20','t3'],pend:0},
      {c:'3年级-5班',head:null,dep:[],sub:['t3','t21'],pend:1},
      {c:'4年级-1班',head:'t14',dep:[],sub:['t14','t15'],pend:0},
      {c:'4年级-2班',head:'t16',dep:[],sub:['t15','t16','t25'],pend:1},
      {c:'5年级-1班',head:'t10',dep:[],sub:['t10','t17'],pend:0},
      {c:'5年级-2班',head:'t23',dep:[],sub:['t23','t28'],pend:0},
      {c:'6年级-1班',head:'t17',dep:[],sub:['t17','t10'],pend:0},
      {c:'6年级-2班',head:'t28',dep:[],sub:['t28','t23'],pend:0}
    ],
    /* 注册申请（只有名单外的老师扫码注册才会产生，2026-10-20）：pend 待审核 / pass 人工通过 / deny 已拒绝；cls 为老师自填的任教班级（选填），fin 为审核时调整后的生效班级 */
    regs:[
      {id:'r1',n:'陈静怡',g:'女',ph:'139****5521',cls:['3年级-1班','3年级-3班'],ts:D(0.06),st:'pend'},
      {id:'r2',n:'李强',g:'男',ph:'137****0032',cls:['4年级-1班','4年级-2班','3年级-1班','3年级-2班','2年级-1班','2年级-2班'],ts:D(0.08),st:'pend'},
      {id:'r3',n:'徐明',g:'男',ph:'150****3366',cls:[],ts:D(0.85),st:'pend'},
      {id:'r5',n:'江涛',g:'男',ph:'138****6619',cls:['3年级-5班','1年级-2班'],ts:D(9.3),st:'pass',by:ME,at:D(9.1)},
      {id:'r6',n:'郑海涛',g:'男',ph:'135****7712',cls:['1年级-1班'],ts:D(12.4),st:'deny',by:ME,at:D(12.2),why:'非本校教师'}
    ],
    /* 教师注册码：24 小时有效，可作废、重新生成（旧码即刻作废） */
    code:{st:'on',ts:codeTs,by:ME},
    logs:[
      {ts:D(0.2),who:ME,type:'分配职务',obj:'孙海',det:'职务：无 → 年级组长（3年级）'},
      {ts:codeTs,who:ME,type:'重新生成注册码',obj:'教师注册码',det:'旧码即刻作废，新码 24 小时有效'},
      {ts:D(1.2),who:ME,type:'指定班主任',obj:'2年级-3班',det:(HR_SPLIT?'正班主任：未指定 → 宁远':'班主任新增 宁远')+(ACTIVATE_ON?'（待激活）':'')},
      {ts:D(1.2),who:ME,type:'新增教师',obj:'宁远',det:(ACTIVATE_ON?'待激活；':'')+'手机号 177****3826；主职务 无；任教班级 2年级-3班；班主任班级 2年级-3班'+(HR_SPLIT?'（正）':'')},
      {ts:D(3),who:ME,type:'修改职务',obj:'校长',det:'功能权限：新增 智慧放学·操作'},
      {ts:D(3.1),who:ME,type:'批量导入教师',obj:'教师名单',det:'Excel 导入 1 位老师：周婷（135****4409），待激活'},
      {ts:D(5),who:ME,type:'新增教师',obj:'邓佳',det:(ACTIVATE_ON?'待激活；':'')+'手机号 139****2290；主职务 无；任教班级 4年级-2班'},
      {ts:D(9),who:ME,type:'新增职务',obj:'课后服务老师',det:'数据权限：指定班级；功能权限 3 项'},
      {ts:D(9),who:ME,type:'分配职务',obj:'吴芳',det:'兼任：新增 课后服务老师（3年级-4班、3年级-5班）'},
      {ts:D(9.1),who:ME,type:'通过注册',obj:'江涛',det:'人工审核通过；任教班级 3年级-5班、1年级-2班'},
      {ts:D(12.2),who:ME,type:'拒绝注册',obj:'郑海涛',det:'拒绝原因：非本校教师'},
      {ts:D(16),who:ME,type:'指定班主任',obj:'1年级-2班',det:HR_SPLIT?'正班主任：未指定 → 罗兰':'班主任新增 罗兰'},
      {ts:D(22),who:ME,type:'停用职务',obj:'心理辅导员',det:'停用时无在任教师'},
      {ts:D(45),who:ME,type:'批量导入教师',obj:'教师名单',det:'Excel 导入 16 位老师，均为待激活'},
      {ts:D(46),who:ME,type:'设为离职',obj:'钱毅',det:'设为离职，收回全部职务（含自动关联的职务）'},
      {ts:D(60),who:ME,type:'分配职务',obj:'王瑶',det:'兼任：新增 校级管理员'}
    ]
  };
  /* 原独立「手机号白名单」已并入教师名单（2026-10-20）：预置的老师即待激活记录，本人登录即自动激活 */
  st.roles=defRoles();
  /* 值周分组（只读镜像，源数据在「值周老师管理」模块）：t 值周老师、g 负责年级、from / to 执行时间；执行时间内的分组为「值周中」，其老师带值周老师角色权限 */
  st.dw=[
    {id:'g1',n:'管理组',t:['t8','t9','t10'],g:'全部年级',from:D(14),to:D(-46)},
    {id:'g2',n:'值周一组',t:['t11','t12'],g:'3年级',from:D(60),to:D(18)}
  ];
  return st;
}
function dutyLoad(){
  let S;
  try{S=JSON.parse(localStorage.getItem(STORE)||'null')}catch(e){S=null}
  if(!S||!S.duties||!S.regs)S=seed();
  /* 旧演示数据兼容：原「本人班级」（任教 + 班主任合集）已取消，按「任教班级」处理 */
  S.duties.forEach(d=>{if(d.scope==='own')d.scope='sub'});
  /* 教师管理、职务与权限只在「全校」范围生效（设计文档 13.4.2，2026-10-19）：旧演示数据里非全校范围职务上的这几组权限点按无效清理 */
  S.duties.forEach(d=>{if(d.scope!=='school')d.perms=d.perms.filter(p=>!schoolOnlyPerm(p))});
  if(!S.roles)S.roles=defRoles();
  CROLES.forEach(r=>{if(!S.roles[r.k])S.roles[r.k]=r.def.slice()});
  /* 自动关联职务不带教师管理、职务与权限两组校级功能（2026-10-19）：旧演示数据里勾过的按无效清理 */
  CROLES.forEach(r=>{S.roles[r.k]=S.roles[r.k].filter(p=>!schoolOnlyPerm(p))});
  /* 平台锁定开启的权限点（CROLES 的 on）学校不可取消：旧演示数据里取消过的按平台默认补回 */
  CROLES.forEach(r=>{r.on.forEach(p=>{if(S.roles[r.k].indexOf(p)<0)S.roles[r.k].push(p)})});
  if(!S.dw)S.dw=[];
  /* 教师激活关闭：旧演示数据里的待激活老师按在职处理 */
  S.teachers.forEach(t=>{delete t.mis;if(!ACTIVATE_ON&&t.st==='pend'){t.st='on';if(!t.rt)t.rt=t.at||Date.now()}});
  /* 操作日志类型改名（2026-10-20）：「停用账号 / 启用账号」改为两端统一的「设为离职 / 恢复在职」，旧演示数据里的记录读取时归一 */
  (S.logs||[]).forEach(l=>{if(l.type==='停用账号')l.type='设为离职';else if(l.type==='启用账号')l.type='恢复在职';if(l.det)l.det=l.det.replace(/^主职务：/,'职务：')});
  /* 分配职务日志的「主职务：A → B」同日改写为「职务：A → B」（两端界面标签统一为「职务」），旧记录同样归一 */
  return S;
}
function dutySave(S){try{localStorage.setItem(STORE,JSON.stringify(S))}catch(e){}}
