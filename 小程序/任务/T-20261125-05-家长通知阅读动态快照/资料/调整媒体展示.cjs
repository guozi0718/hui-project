const fs=require('fs'),p=require('path');
const m=JSON.parse(fs.readFileSync(p.join(__dirname,'配置.json'),'utf8'));
for(const role of ['家长','教师']){
 const dir=p.join(m.dest,'端-'+role),f=p.join(dir,'assets/notification-mini/app.js');let s=fs.readFileSync(f,'utf8');
 const old='<input data-bind="cap" data-i="\'+i+\'" placeholder="图片说明（选填）" value="\'+esc(b.caption||\'\')+\'">';
 const next='<textarea class="nm-media-caption" data-bind="cap" data-i="\'+i+\'" rows="1" placeholder="图片说明（选填）">\'+esc(b.caption||\'\')+\'</textarea>';
 if(!s.includes(old))throw Error('图片说明入口未匹配');s=s.replace(old,next);
 s=s.replace('function render(){','function fitMediaCaption(el){if(!el.matches(\'textarea[data-bind="cap"]\'))return;el.style.height="auto";el.style.height=Math.max(26,el.scrollHeight)+"px";}\nfunction render(){');
 s=s.replace("root.dataset.page=S.page+'|'+S.tab+'|'+S.id;","root.dataset.page=S.page+'|'+S.tab+'|'+S.id;root.querySelectorAll('textarea[data-bind=\"cap\"]').forEach(fitMediaCaption);");
 s=s.replace("if(el.matches('[data-bind]')){bind(el);return;}","if(el.matches('[data-bind]')){bind(el);fitMediaCaption(el);return;}");
 fs.writeFileSync(f,s);
 const css=p.join(dir,'assets/notification-mini.css');fs.appendFileSync(css,`\n/* 发布页封面使用低高度缩略图；媒体标题说明完整换行并居中。 */
#notification-mini-root .nm-cover-pick,#notification-mini-root .nm-cover-pick:not(.has-image),#notification-mini-root .nm-cover-pick.has-image,#notification-mini-root .nm-cover-pick.wide.has-image,#notification-mini-root .nm-cover-pick.wide:not(.has-image){width:100%;max-width:360px;height:88px;min-height:88px;aspect-ratio:auto;align-self:center}
#notification-mini-root .nm-cover-pick img{object-fit:contain}
#notification-mini-root textarea[data-bind="cap"]{display:block;box-sizing:border-box;width:100%;min-height:26px;max-height:none;overflow:hidden;line-height:1.6;text-align:center;white-space:pre-wrap;overflow-wrap:anywhere;word-break:break-word;font-size:13px}
#notification-mini-root .nm-media-txt,#notification-mini-root .nm-bk-info{text-align:center;min-width:0}
#notification-mini-root .nm-media-txt b,#notification-mini-root .nm-media-txt small,#notification-mini-root .nm-bk-info b,#notification-mini-root .nm-bk-info small,#notification-mini-root .nm-linkcard b,#notification-mini-root .nm-linkcard small,#notification-mini-root .nm-fig figcaption{white-space:pre-wrap;overflow:visible;text-overflow:clip;overflow-wrap:anywhere;word-break:break-word;text-align:center;line-height:1.6}
#notification-mini-root .nm-linkcard span{text-align:center}
`);
 if(role==='家长'&&fs.existsSync(p.join(dir,'notification-mini/app.js')))fs.copyFileSync(f,p.join(dir,'notification-mini/app.js'));
}
fs.appendFileSync(p.join(m.task,'任务信息.md'),'\n2026-11-25补充已确认范围：Q31—Q35按用户答复执行；封面上传区缩为88px高的缩略演示，图片/视频/链接标题说明居中且完整换行，沿用选图与既有内容限制。\n');
console.log('双端媒体展示已调整');
