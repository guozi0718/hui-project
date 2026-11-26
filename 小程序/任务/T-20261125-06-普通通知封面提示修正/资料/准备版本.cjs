const fs=require('fs'),p=require('path'),crypto=require('crypto'),cp=require('child_process');
const project=p.resolve(__dirname,'../../..'),repo=p.dirname(project),root='E:/codex/小程序',task=p.resolve(__dirname,'..'),src=p.join(project,'版本/v1.4'),dest=p.join(project,'版本/v1.5'),batch=p.join(project,'版本快照/V-20261125-06-普通通知提示'),version='v1.5',tag='miniapp-v1.5-rc.1';
const read=f=>fs.readFileSync(f,'utf8'),write=(f,s)=>{fs.mkdirSync(p.dirname(f),{recursive:true});fs.writeFileSync(f,s)},json=(f,x)=>write(f,JSON.stringify(x,null,2)+'\n'),hash=f=>crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
if(fs.existsSync(dest))throw Error('版本已存在，不覆盖');
const targets=['当前版本.json','README.md','index.html','版本记录.md','日志管理.md','版本快照/快照索引.md','项目管理/任务登记.md','项目管理/项目章程.md','项目管理/里程碑.md','项目管理/待办清单.md','项目管理/风险登记.md','记忆库/项目记忆/技术约束.md','记忆库/项目记忆/用户偏好.md','记忆库/项目记忆/非正式共识.md'];fs.mkdirSync(batch,{recursive:true});for(const rel of targets){const f=p.join(project,rel);if(fs.existsSync(f))fs.copyFileSync(f,p.join(batch,rel.replace(/[\\/]/g,'_')+'_修改前'));}
write(p.join(task,'任务信息.md'),'# T-20261125-06 普通通知封面提示修正\n\n2026-11-25｜标准变更。来源：用户v1.4发布通知页批注及明确修改推送授权。普通通知只有一个正文文本块，其余图片、视频、链接、PDF属于附件；封面提示不显示正文配图规格。\n本次范围：普通编辑页封面提示及对应开发演示说明、通知独立MD；美文配图提示、附件上传/展示/数量限制、封面88px及其他功能保持。验收：普通页仅封面900×383提示、美文原提示保留，单正文编辑及附件入口原样，双端完整且三份MD无截图。\n从完整v1.4创建v1.5候选；旧版本保留，仅普通推guozi0718/hui-project公库小程序目录，不创建hui-priject拼写的新库、不推旧库或其他三个端。\n');
fs.appendFileSync(p.join(project,'项目管理/任务登记.md'),'\n2026-11-25｜T-20261125-06，标准变更，普通通知封面提示与独立文档对齐，用户明确授权修改后推徽项目公库小程序目录；验收以任务信息为准。\n');
fs.cpSync(src,dest,{recursive:true,errorOnExist:true,force:false});
for(const role of ['家长','教师']){
 const dir=p.join(dest,'端-'+role),app=p.join(dir,'assets/notification-mini/app.js');let s=read(app);
 s=s.replace('const IMAGE_HINT=',"const COVER_HINT='封面建议900×383px，图片等比缩略、居中显示';\nconst IMAGE_HINT=");
 const target='<small class="nm-image-tip">\'+IMAGE_HINT+\'</small></div><label class="nm-cover-pick';if(!s.includes(target))throw Error('普通封面提示未匹配');s=s.replace(target,target.replace('IMAGE_HINT','COVER_HINT'));
 s=s.replace("if(['edit','beauty','preview','tpl','detail'].includes(p))", "if(p==='edit')L.push('【普通通知与附件】正文只有一个文本块；其他图片、视频、链接与PDF按附件添加，保留现有入口和限制。封面建议900×383px，上传区88px高、图片等比缩略居中；此处不显示正文配图规格。');if(['beauty','preview','tpl','detail'].includes(p))");
 s=s.replace('【普通通知】标题必填≤40字；正文合计≤3000字；图片≤9张；单个视频≤10分钟；链接地址只校验以 http:// 或 https:// 开头；附件仅PDF，最多5份、每份≤20MB（PRD TCH-03）。','【普通通知】标题必填≤40字；单一正文文本块合计≤3000字；图片附件≤9张；视频附件单个≤10分钟；链接附件只校验以 http:// 或 https:// 开头；PDF附件最多5份、每份≤20MB（PRD TCH-03）。');
 write(app,s);if(fs.existsSync(p.join(dir,'notification-mini/app.js')))fs.copyFileSync(app,p.join(dir,'notification-mini/app.js'));
 const check=cp.spawnSync(process.execPath,['--check',app],{encoding:'utf8',windowsHide:true});if(check.status)throw Error(check.stderr);
 for(const f of fs.readdirSync(dir).filter(f=>f.endsWith('.html')))write(p.join(dir,f),read(p.join(dir,f)).replaceAll('?v=1.4','?v=1.5'));
 const loader=p.join(dir,'assets/notification-page.js');write(loader,read(loader).replace('20261125-v1.4-actions','20261125-v1.5-cover-hint'));
 const index=p.join(dir,'index.html');write(index,read(index).replace(/assets\/notification-page\.js\?v=[a-z0-9-]+/g,'assets/notification-page.js?v='+hash(loader).slice(0,12)));
 write(p.join(dir,'assets/app-shell.js'),'/* 共享原型运行时；页面入口文件独立维护。 */\n(()=>{document.open();document.write('+JSON.stringify(read(index))+');document.close();})();\n');
 const routes=p.join(dir,'页面路由.json'),r=JSON.parse(read(routes));r.version=version;json(routes,r);
 write(p.join(dir,'定版信息.md'),read(p.join(dir,'定版信息.md')).replaceAll('v1.4','v1.5').replace('来源完整v1.3','来源完整v1.4').replace('任务：T-20261125-05','任务：T-20261125-06')+'\n本次明确修正：普通通知单正文文本块，其他媒体为附件；普通编辑封面区只显示封面建议900×383px及等比缩略居中提示，美文配图提示保留。其他字段完整继承源版本；页面仍待验收。\n');
 write(p.join(dir,'资料/版本说明.md'),`# 本端版本说明\n\n${role}端 v1.5，T-20261125-06。完整继承v1.4，仅普通通知封面提示、开发演示说明和通知MD对齐单正文及附件定义；美文提示、附件和其他功能保持。候选页面待验收。\n`);
}
const doc=p.join(dest,'文档/通知功能产品需求文档.md');let d=read(doc).replace('文档版本：v1.4','文档版本：v1.5');d=d.replace('普通通知在内容区编辑；','普通通知的正文只有一个文本块，可理解为仅含一个正文文本块的美文通知；图片、视频、链接及PDF均作为正文之外的附件添加，不作为普通通知正文配图。普通通知在内容区编辑；').replace('| 普通通知内容图片 |','| 普通通知图片附件 |').replace('| 普通通知附件 | PDF，','| 普通通知PDF附件 | PDF，');d=d.replace('封面素材建议900×383px，正文配图建议宽1080px','封面素材建议900×383px；美文正文配图建议宽1080px').replace('正文配图、模板正文及编辑中的正文图片最大显示宽320px、高180px','美文正文配图、模板正文图片及普通通知图片附件最大显示宽320px、高180px').replace('图片建议提示只放在编辑页封面区域，统一为“封面建议900×383px，正文配图建议宽1080px；图片等比缩略、居中显示”，不在正文阅读页重复铺设。','图片建议提示只放在对应编辑页封面区域：普通通知显示“封面建议900×383px，图片等比缩略、居中显示”，不出现正文配图信息；美文通知显示“封面建议900×383px，正文配图建议宽1080px；图片等比缩略、居中显示”。不在正文阅读页重复铺设。');write(doc,d);
write(p.join(dest,'index.html'),read(p.join(dest,'index.html')).replaceAll('v1.4','v1.5'));const status='普通通知封面提示修正完整候选，页面待验收';json(p.join(dest,'版本信息.json'),{project:'智小徽小程序',version,date:'2026-11-25',status,roles:['parent','teacher'],tag,changes:['普通通知封面区仅展示封面规格','普通通知单正文及附件定义的说明与通知文档同步']});
json(p.join(__dirname,'配置.json'),{root,project,repo,task,src,dest,batch,version,tag,targets,status});
write(p.join(task,'定版信息.md'),'# 任务定版信息\n\nv1.5完整双端候选，页面待验收。用户明确批注普通通知封面不展示正文配图信息，普通正文为单文本块，其余媒体归为附件。未提及功能与源完整v1.4保持；新建递增版本保留历史，不将推送当作页面验收。\n');write(p.join(task,'变更记录.md'),'# 变更记录\n\n仅普通通知封面提示、对应演示说明、通知MD中的正文/附件定义修改。美文配图规格、附件操作与数量校验、普通正文编辑区域、阅读动态及权限不改。完整双端元数据与独立入口缓存版本同步。\n');console.log(JSON.stringify({version,source:'v1.4',repository:'guozi0718/hui-project',directory:'小程序',readyForPreview:true}));
