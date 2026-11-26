const fs=require('fs'),p=require('path'),crypto=require('crypto'),cp=require('child_process');const m=JSON.parse(fs.readFileSync(p.join(__dirname,'配置.json'),'utf8'));
const read=f=>fs.readFileSync(f,'utf8'),write=(f,s)=>{fs.mkdirSync(p.dirname(f),{recursive:true});fs.writeFileSync(f,s)},json=(f,x)=>write(f,JSON.stringify(x,null,2)+'\n'),hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex'),walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(p.join(d,x.name)):[p.join(d,x.name)]);
const status='阅读动态与通知视觉完整候选，业务规则已确认、页面待验收';
for(const role of ['家长','教师']){
 const dir=p.join(m.dest,'端-'+role);
 for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.html')&&f!=='index.html'))write(p.join(dir,f),read(p.join(dir,f)).replaceAll('?v=1.3','?v=1.4'));
 const loader=p.join(dir,'assets/notification-page.js');write(loader,read(loader).replace('20261125-v1.3-receipt','20261125-v1.4-actions'));
 const index=p.join(dir,'index.html');write(index,read(index).replaceAll('?v=1.3','?v=1.4').replace(/assets\/notification-page\.js\?v=[a-z0-9-]+/g,'assets/notification-page.js?v='+hash(loader).slice(0,12)));
 write(p.join(dir,'assets/app-shell.js'),'/* 共享原型运行时；页面入口文件独立维护。 */\n(()=>{document.open();document.write('+JSON.stringify(read(index))+');document.close();})();\n');
 const route=p.join(dir,'页面路由.json'),r=JSON.parse(read(route));r.version=m.version;json(route,r);
 const duplicate=p.join(dir,'notification-mini');if(fs.existsSync(duplicate))for(const f of ['app.js','core.js'])fs.copyFileSync(p.join(dir,'assets/notification-mini',f),p.join(duplicate,f));
 write(p.join(dir,'定版信息.md'),`# ${role}端 ${m.version}\n\n任务：T-20261125-05。状态：${status}。来源完整v1.3；发布候选不等于页面验收。\n单一小程序项目内置可切换家长与教师；本端首页home.html，通知notification.html，消息msgs.html。完整独立文件入口见页面路由.json，具体通知以id参数恢复，缺参不默认另一条。\n\n本次明确修改：阅读动态首次逐动作记录及姓名关系快照；教师个人动态与发布人统计权限；班级分组、未读家长状态弹窗；发布人管理阅读也锁编辑；通知图片规格及封面缩略预览；媒体标题说明居中完整换行；直接详情标题修复。\n\n|字段|当前要求|依据|未提及时|\n|---|---|---|---|\n|阅读动态|首次动作独立ID、时间倒序、快照不可改；页面不展示ID或签字图|用户Q26—Q30|保持|\n|教师权限|完整统计仅发布人；个人动态仅名单内本人|用户Q31|保持|\n|分组和未读弹窗|学生按班级分组可折叠，未读家长状态底部查看，无关注或拨号|用户Q32—Q34|保持|\n|管理已读|发布人管理查看登记本人已读并锁编辑；名单外不计范围人数，不显示本人动态|用户Q35|保持|\n|查收|家长一次提交，成功灰色禁用，专属存储防旧端覆盖；所有来源无截止|既有确认|保持|\n|通知图片|以本版通知文档和原型中的已确认素材及显示规格执行|用户图片批注及Q36—Q40|保持|\n|框架|390×844、44px状态栏与44px标题行，现有蓝色字体按钮体系|既有确认|保持|\n|客服反馈与其他页面|原资源和两份功能文档原样继承|用户明确范围|保持|\n\n资料：资料/版本说明.md、实际assets资源；验证见版本根验证记录.json及任务资料。真实鉴权、微信消息投递和原生页面栈另行验收。\n`);
 write(p.join(dir,'资料/版本说明.md'),`# 本端完整候选说明\n\n${role}端 ${m.version}，任务T-20261125-05，${status}。未提及业务继承完整v1.3；独立入口与共享运行资源自包含，其他端项目未修改。规则和验收详见本版通知文档及任务确认记录。\n`);
 for(const f of walk(dir).filter(f=>f.endsWith('.js'))) {const r=cp.spawnSync(process.execPath,['--check',f],{encoding:'utf8',windowsHide:true});if(r.status)throw Error(r.stderr);}
}
write(p.join(m.dest,'index.html'),read(p.join(m.dest,'index.html')).replaceAll('v1.3','v1.4'));
json(p.join(m.dest,'版本信息.json'),{project:'智小徽小程序',version:m.version,date:'2026-11-25',status,roles:['parent','teacher'],tag:m.tag,changes:['逐动作阅读动态、独立操作ID及不可变姓名关系快照','教师统计与本人动态权限、管理预览记录已读并锁编辑','学生班级分组及未读家长状态弹窗','封面缩略预览、媒体说明完整居中换行及统一图片规格']});
const results={};for(const name of ['动作模型验证结果.json','阅读动态验证结果.json','统计权限验证结果.json','媒体展示验证结果.json','查收防覆盖回归结果.json'])results[name]=JSON.parse(read(p.join(__dirname,name)));
json(p.join(m.dest,'验证记录.json'),{version:m.version,date:new Date().toISOString(),checks:results,unrelatedDocumentsUnchanged:['联系客服功能产品需求文档.md','客户反馈功能产品需求文档.md'].every(n=>hash(p.join(m.dest,'文档',n))===hash(p.join(m.src,'文档',n))),screenshotsInDocuments:false,productionBackendAndNativeStack:'原型演示不代替真实服务端鉴权、微信投递及原生栈验收'});
json(p.join(m.dest,'文件清单.json'),{algorithm:'SHA-256',version:m.version,files:walk(m.dest).filter(f=>p.basename(f)!=='文件清单.json').map(f=>({path:p.relative(m.dest,f).replaceAll('\\','/'),sha256:hash(f)})).sort((a,b)=>a.path.localeCompare(b.path))});
const pointer=JSON.parse(read(p.join(m.project,'当前版本.json')));pointer.version=m.version;pointer.directory='版本/'+m.version;pointer.tag=m.tag;pointer.status=status;pointer.entries={parent:'版本/v1.4/端-家长/home.html',teacher:'版本/v1.4/端-教师/home.html'};pointer.documents=pointer.documents.map(x=>x.replace('v1.3','v1.4'));json(p.join(m.project,'当前版本.json'),pointer);
for(const name of ['README.md','index.html'])write(p.join(m.project,name),read(p.join(m.project,name)).replaceAll('v1.3','v1.4'));
fs.appendFileSync(p.join(m.project,'版本记录.md'),`\n| ${m.version} | 2026-11-25 | ${status} | 逐动作阅读动态与快照、统计权限与班级分组、未读家长弹窗、管理阅读锁编辑、通知图片及媒体说明布局 | ${m.tag} |\n`);
write(p.join(m.task,'定版信息.md'),`# T-20261125-05 定版信息\n\n完整双端v1.4候选，规则已确认、页面待验收。源完整v1.3只读保留，新版自包含。\n确认依据为用户通知批注、Q26—Q40及图片展示要求；未提及页面保持。每端字段清单见本版端目录定版信息.md；产品文档三份独立完整，不含截图或其他文档依赖。\n验证结果已保存，候选按既有自动普通推送授权发布徽项目小程序目录，不改其他三个端、不推旧库。\n`);
write(p.join(m.task,'变更记录.md'),'# 明确变更\n\n家长以阅读动态替换信息行；教师权限受控的统计与本人动态；逐动作快照及操作ID；班级分组与未读家长状态；发布人管理阅读锁编辑；封面缩略图与媒体居中换行；通知统一图片素材及展示规格。通知MD同步，客服反馈MD与业务资源保持。\n');
write(p.join(m.project,'决策记录/ADR-005-通知动作快照与管理阅读审计.md'),'# ADR-005：通知动作快照与管理阅读审计\n\n- 状态：Accepted\n- 日期：2026-11-25\n- 会话：T-20261125-05\n\n## 背景\n用户要求首次动作逐条、亲友关系变化不重写历史，并明确管理查看也记阅读。\n\n## 决策\n按通知、接收对象、账号、角色、动作保存独立操作ID和动作时姓名关系快照。旧记录不使用当前资料倒填，兼容ID标注来源。发布人名单外管理阅读独立保存以锁编辑，不扩大接收范围和统计人数；动态卡仍要求本人在范围内。\n\n## 备选方案\n只保留汇总状态无法还原动作；按当前资料生成动态会改写历史。免除管理已读曾为建议，用户Q35明确选择记录，当前不得擅自改回。\n\n## 影响\n既有私有稳定存储及首次保留迁移继续有效。当前查看自己刚发布通知可能立即锁编辑，用户已明确接受，后续调整须新授权。真实系统需事务幂等和不可变审计。\n');
console.log('完整版本元数据、三份文档与文件清单已整理');
