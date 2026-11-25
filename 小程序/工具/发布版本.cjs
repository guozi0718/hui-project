/* 只发布徽项目的小程序目录；凭据由本机Git管理，不记录令牌。 */
const fs=require('fs'),p=require('path'),cp=require('child_process'),verify=require('./校验版本.cjs');
const root=p.resolve(__dirname,'../..'),config=JSON.parse(fs.readFileSync(p.join(root,'小程序/当前版本.json'),'utf8'));
const git=(args,optional=false)=>{const r=cp.spawnSync('git',args,{cwd:root,encoding:'utf8',windowsHide:true,env:{...process.env,GIT_TERMINAL_PROMPT:'0',GCM_INTERACTIVE:'never'},maxBuffer:16*1024*1024});if(r.status&&!optional)throw Error((r.stderr||r.stdout||'Git失败').trim());return {status:r.status,out:r.stdout||''}};
try{const report=verify(root,config.version);const remote=git(['remote','get-url','origin']).out.trim();if(remote!=='https://github.com/guozi0718/hui-project.git')throw Error('远程仓库不匹配，禁止推送旧库');
const paths=git(['status','--porcelain','-z']).out.split('\0').filter(Boolean).map(s=>s.slice(3));if(paths.some(f=>!f.startsWith('小程序/')))throw Error('存在其他端的本地改动，停止发布');
if(git(['show-ref','--verify','refs/tags/'+config.tag],true).status===0)throw Error('版本标签已存在，请新建完整递增版本，不覆盖已发布版本');
git(['add','--','小程序']);const staged=git(['diff','--cached','--name-only','-z']).out.split('\0').filter(Boolean);if(staged.some(f=>!f.startsWith('小程序/')))throw Error('暂存区含其他产品端');if(staged.some(f=>f.startsWith('小程序/版本/')&&!f.startsWith('小程序/版本/'+config.version+'/')))throw Error('不得修改已经发布的其他版本');
if(staged.length)git(['commit','-m','publish(小程序): '+config.version+' 原型与独立文档']);git(['fetch','origin','main']);git(['rebase','origin/main']);git(['push','origin','HEAD:main']);git(['tag','-a',config.tag,'-m','小程序 '+config.version+'；'+config.status]);git(['push','origin','refs/tags/'+config.tag]);console.log(JSON.stringify({...report,commit:git(['rev-parse','HEAD']).out.trim(),tag:config.tag}));
}catch(error){console.error(error.message);process.exitCode=1}
