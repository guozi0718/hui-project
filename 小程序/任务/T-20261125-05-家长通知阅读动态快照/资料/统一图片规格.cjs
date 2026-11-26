const fs=require('fs'),p=require('path');const m=JSON.parse(fs.readFileSync(p.join(__dirname,'配置.json'),'utf8'));
for(const role of ['家长','教师']){
 const d=p.join(m.dest,'端-'+role),app=p.join(d,'assets/notification-mini/app.js'),css=p.join(d,'assets/notification-mini.css');let s=fs.readFileSync(app,'utf8');
 s=s.replace("const IMAGE_HINT='通知的封面图、内容中的图片建议采用360*240px，图片自动以宽度对齐、居中显示';","const IMAGE_HINT='封面建议900×383px，正文配图建议宽1080px；图片等比缩略、居中显示';");
 s=s.replace("function demo(){const L=[];const p=S.page;","function demo(){const L=[];const p=S.page;if(['edit','beauty','preview','tpl','detail'].includes(p))L.push('【图片规格与显示】封面建议900×383px，正文配图建议宽1080px。阅读页封面最大320×136 CSS px，正文配图最大320×180 CSS px；按原比例完整缩放、居中、不裁切、不放大小图，取消固定大画框。上传区保持88px高的缩略预览。图片、视频与链接标题说明居中完整换行。只改通知相关页面，模板原素材不重制、不伪造高清。');");
 fs.writeFileSync(app,s);if(fs.existsSync(p.join(d,'notification-mini/app.js')))fs.copyFileSync(app,p.join(d,'notification-mini/app.js'));
 let c=fs.readFileSync(css,'utf8');const start=c.indexOf('/* 通知图片统一为360×240px画框');const end=c.indexOf('/* 家长查收明细',start);if(start<0||end<0)throw Error('旧固定图片规则未匹配');c=c.slice(0,start)+c.slice(end);c=c.replaceAll('max-width:360px','max-width:320px');
 c+=`\n/* 通知图片：高清素材尺寸与CSS展示尺寸分离，保留原素材，不拉伸小图。 */
#notification-mini-root .nm-tplprev img,#notification-mini-root .nm-media.nm-media-image img,#notification-mini-root .nm-bk-image .nm-bk-thumb,#notification-mini-root .nm-a-cover,#notification-mini-root .nm-fig img,#notification-mini-root .nm-tpl-image-text img{display:block;position:relative;box-sizing:border-box;width:auto;height:auto;min-width:0;min-height:0;max-width:min(320px,100%);max-height:180px;aspect-ratio:auto;object-fit:contain;background:transparent;margin-left:auto;margin-right:auto;border-radius:8px;flex:none;left:auto;transform:none}
#notification-mini-root .nm-a-cover{max-height:136px}
#notification-mini-root .nm-media.nm-media-image{display:flex;flex-direction:column;align-items:center;gap:8px;padding:0;background:transparent;overflow:visible}
#notification-mini-root .nm-bk-image .nm-bk-content{display:block;min-width:0}
#notification-mini-root .nm-bk-image .nm-bk-main{display:block;width:100%;margin-top:8px}
#notification-mini-root .nm-cover-pick img{position:absolute;inset:0;display:block;width:100%;height:100%;max-width:none;max-height:none;object-fit:scale-down;background:transparent}
`;
 fs.writeFileSync(css,c);
}
const doc=p.join(m.dest,'文档/通知功能产品需求文档.md');let s=fs.readFileSync(doc,'utf8');s=s.replace('封面及正文图片按原图比例缩放，最大显示宽度360px、居中、圆角，不裁切成固定比例。360×240px仅为建议尺寸。图片建议提示只放在编辑页封面区域，不在正文阅读页重复铺设。','封面素材建议900×383px，正文配图建议宽1080px，以清晰原图为准；这是本产品的建议参数，不作为上传时强制裁切或排斥其他比例的校验。素材像素尺寸与页面显示尺寸分开处理。\n\n通知详情及模板阅读预览的封面最大显示宽320px、高136px；正文配图、模板正文及编辑中的正文图片最大显示宽320px、高180px。均按原图比例完整缩放、居中并保留圆角，不裁切、不拉伸，不再使用固定大画框或多余背景留白；容器较窄时继续缩小以适应可用宽度。尺寸较小的原图不强行放大，不通过重新导出大文件冒充高清。现有模板保留原素材，只改展示。\n\n发布页封面上传区域保持88px高的缩略预览，选图后完整等比显示，替换及删除功能保留。选图失败不清除已有封面。图片建议提示只放在编辑页封面区域，统一为“封面建议900×383px，正文配图建议宽1080px；图片等比缩略、居中显示”，不在正文阅读页重复铺设。\n\n图片说明使用多行输入，随内容自动增高；图片、视频和链接已有标题及说明居中，长内容完整换行，不以单行省略号截断。普通通知、美文编辑、预览、模板、双端详情和通知分享展示保持一致；头像与其他功能图片不受此规则改动。');
fs.writeFileSync(doc,s);fs.writeFileSync(p.join(m.task,'资料/已确认Q36-Q40.md'),'# Q36—Q40确认\n\n2026-11-25｜用户回复“全球选是”，按上下文确认为全部选择是，即五项首选建议均采用。\n36 封面素材900×383px；阅读显示最大320×136px，等比居中、不裁切。\n37 正文素材建议宽1080px；最大320×180px等比、不裁切，无固定大画框。\n38 保留现有模板原素材，不强行拉大小图、不伪造高清。\n39 仅双端通知相关编辑、模板、预览、详情和分享展示统一；其他功能不改。\n40 上传区保持88px高缩略预览。\n这些是本项目已确认参数，不冒称微信官方规格。替代本任务先前待确认状态。\n');
fs.appendFileSync(p.join(m.task,'任务信息.md'),'\n2026-11-25｜Q36—Q40全部确认，按已确认参数统一通知图片规格、显示和提示；不再存在图片规格待确认项。\n');console.log('通知图片规格与提示、文档已统一');
