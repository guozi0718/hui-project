const fs=require('fs'),p=require('path'),m=JSON.parse(fs.readFileSync(p.join(__dirname,'配置.json'),'utf8'));const read=f=>fs.readFileSync(f,'utf8');
const KEY='hui-project:miniapp:notification:v1';
for(const name of ['家长','教师']){const dir=p.join(m.dest,'端-'+name),appFile=p.join(dir,'assets/notification-mini/app.js');let app=read(appFile);
app=app.replace("KEY='campus-notice-v6-20261102'","KEY='"+KEY+"',LEGACY_KEY='campus-notice-v6-20261102'");
app=app.replace("const d=JSON.parse(localStorage.getItem(KEY)||'null');", "const stored=localStorage.getItem(KEY);const d=JSON.parse(stored||localStorage.getItem(LEGACY_KEY)||'null');");
app=app.replace("if(migrate||msgChanged)localStorage.setItem(KEY,JSON.stringify(d));", "if(!stored||migrate||msgChanged){try{localStorage.setItem(KEY,JSON.stringify(d));}catch{}}" );
app=app.replace('const expired=n=>n.status===\'published\'&&Date.now()>C.deliveryUntil(n);','const expired=n=>false;');
const info=" const info='<div class=\"nm-a-info\"><span>'+esc(C.ackNames[n.config.ack])+'</span>'+(n.status==='scheduled'?'<span>定时 '+fFull(Date.parse(n.config.scheduledAt))+'</span>':'')+'</div>';";
let removed=0;app=app.split('\n').map(line=>{if(line.trimStart().startsWith("const info='<div class=\"nm-a-info\">")){removed++;return info;}return line;}).join('\n');if(!removed)throw Error('未找到详情信息行 '+name);
// Render first, then expose a read failure; rerendering must not swallow it.
app=app.replace("S.id=id;S.page='detail';\n if(isReceiver(n)","S.id=id;S.page='detail';let readError='';\n if(isReceiver(n)");
app=app.replace("if(!r.ok)toast(r.message||'阅读状态未能更新');reload();}","if(!r.ok)readError=r.message||'阅读状态未能更新，请重新打开通知重试';reload();}");
app=app.replace("render();const sc=$('.nm-scroll');if(sc)sc.scrollTop=0;}\nfunction openEdit", "render();if(readError)toast(readError);const sc=$('.nm-scroll');if(sc)sc.scrollTop=0;}\nfunction openEdit");
app=app.replace("【数据】与学校/代理商/运营 Web 共用本地存储 ","【数据隔离】本小程序使用专用本地存储与广播通道，首次从兼容数据保留迁移，旧学校端/其他项目不再写回当前回执。当前键 ");
app=app.replace("（同源页面联动）；校验规则与 Web 端共用 core.js；非真实后端。","；新版本的家长与教师端同源联动，旧键和旧广播不再影响本项目。非真实后端。");
app=app.replace("L.push('【一次提交】","L.push('【即时状态】打开正文登记已读；确认成功后显示已读已确认及灰色不可点击的已确认收到；签字须手写并提交，成功显示已读已签字及灰色不可点击的已签字确认。其他家长的完成不替代本人状态。');\n L.push('【一次提交】");
fs.writeFileSync(appFile,app);const duplicate=p.join(dir,'notification-mini/app.js');if(fs.existsSync(duplicate))fs.copyFileSync(appFile,duplicate);
if(name==='家长')fs.appendFileSync(p.join(dir,'assets/notification-mini.css'),'\n/* 成功查收控件保留原按钮尺寸，并明确显示灰色禁用态。 */\n#notification-mini-root.notice-module-parent .nm-receive-complete[disabled]{background:#EEF1F5!important;color:#909BAA!important;box-shadow:inset 0 0 0 1px #DDE3EB!important;cursor:not-allowed;opacity:1}\n');
const coreFile=p.join(dir,'assets/notification-mini/core.js');let core=read(coreFile);for(const action of ['提醒','确认收到','签字']){const rx=new RegExp("if\\(at>deliveryUntil\\(n\\)\\)return fail\\('DEADLINE','通知已截止，不能再"+action+"'\\);",'g');core=core.replace(rx,'');}fs.writeFileSync(coreFile,core);const dupCore=p.join(dir,'notification-mini/core.js');if(fs.existsSync(dupCore))fs.copyFileSync(coreFile,dupCore);
let loader=read(p.join(dir,'assets/notification-page.js'));loader=loader.replace(/const VERSION='[^']+'/,'const VERSION=\'20261125-v1.3-receipt\'');fs.writeFileSync(p.join(dir,'assets/notification-page.js'),loader);
// Entry wrappers and shared shell carry the same version; URLs remain independently restorable.
for(const file of fs.readdirSync(dir).filter(f=>f.endsWith('.html'))){let text=read(p.join(dir,file));text=text.replaceAll('v1.2','v1.3').replaceAll('v=1.2','v=1.3');fs.writeFileSync(p.join(dir,file),text);}
const indexFile=p.join(dir,'index.html');let html=read(indexFile).replaceAll('assets/page-routes.js?v=1.2','assets/page-routes.js?v=1.3').replaceAll('assets/page-router.js?v=1.2','assets/page-router.js?v=1.3');fs.writeFileSync(indexFile,html);fs.writeFileSync(p.join(dir,'assets/app-shell.js'),'/* 共享原型运行时；页面入口文件独立维护。 */\ndocument.open();document.write('+JSON.stringify(html)+');document.close();\n');
const routeFile=p.join(dir,'页面路由.json');const routes=JSON.parse(read(routeFile));routes.version='v1.3';fs.writeFileSync(routeFile,JSON.stringify(routes,null,2));
for(const file of ['定版信息.md','资料/版本说明.md'])fs.writeFileSync(p.join(dir,file),read(p.join(dir,file)).replaceAll('v1.2','v1.3'));
}
const doc=p.join(m.dest,'文档/通知功能产品需求文档.md');let text=read(doc).replace('文档版本：v1.2','文档版本：v1.3');text=text.replace('成功立即回显完成状态并替换操作按钮，','成功立即回显完成状态并替换为灰色禁用按钮，');text=text.replace('签字成功后立即回显完成状态。','签字成功后立即回显“已读已签字”，按钮显示灰色禁用的“已签字确认”。');text=text.replace('成功后再次点击、双击、刷新、换设备、从消息或分享链接进入，','成功回执不得被其他产品或旧页面的演示数据写回所覆盖。家长端与教师端读取本项目同一份最新回执，旧演示数据仅在首次接续时保留，之后不反复导入。\n\n成功后再次点击、双击、刷新、换设备、从消息或分享链接进入，');text=text.replace('| 通知有过往截止字段 |','| 其他页面写回旧数据 | 本项目成功回执保留，家长及教师统计不回退 | 点击成功又恢复未完成 |\n| 通知有过往截止字段 |');text=text.replace('通知没有默认30天截止。','通知没有默认30天截止，家长与教师的列表、详情、统计、分享落地和发布设置均不展示截止信息或空占位。');fs.writeFileSync(doc,text);
fs.writeFileSync(p.join(m.task,'资料/实现记录.md'),'# 实现\n\n通知存储与BroadcastChannel改为专属稳定命名空间 '+KEY+'；首次缺失时保留读取旧数据并写入专用键，之后不再读取旧键。旧页面修改旧键不能回写当前通知；双端继续共享新通道。\n双端详情信息行只显示查收方式及实际定时信息，无截止占位。家长成功控件灰色禁用；打开正文失败提示在渲染后显示，避免提示被重绘吞掉。\n');console.log(JSON.stringify({version:'v1.3',key:KEY,roles:2}));
