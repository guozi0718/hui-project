(()=>{'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const seed=[{time:'2026-11-20 16:10:00',actor:'刘婧老师',type:'提出反馈',object:'SK202611200001',detail:'学校反馈演示记录'}];
let host=null,keyword='';
function mount(root){host=root;draw()}
function draw(){
 if(!host?.isConnected)return;
 let all=seed.slice();
 try{const saved=JSON.parse(localStorage.getItem('zxh-feedback-oplog-school')||'[]');if(Array.isArray(saved))all=all.concat(saved.filter(x=>['提出反馈','提交反馈'].includes(x.type)).map(x=>({time:x.time,actor:x.actor,type:'提出反馈',object:x.object,detail:x.detail||'学校反馈'})));}catch{}
 all.sort((a,b)=>String(b.time||'').localeCompare(String(a.time||'')));
 const rows=all.filter(x=>!keyword||[x.actor,x.object,x.detail].join(' ').toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
 host.innerHTML='<div class="school-oplog"><div class="oplog-head"><h2>操作日志</h2><span class="oplog-tip">仅记录学校提出反馈</span></div><form class="oplog-filter" id="school-oplog-filter"><label>搜索<input name="keyword" value="'+esc(keyword)+'" placeholder="反馈编号或反馈主题"></label><div class="oplog-buttons"><button class="primary" type="submit">查询</button><button type="button" data-oplog-reset>重置</button></div></form><div class="oplog-summary">共 '+rows.length+' 条记录</div><div class="oplog-table-wrap"><table><thead><tr><th>操作时间</th><th>操作人</th><th>操作内容</th><th>反馈编号</th></tr></thead><tbody>'+rows.map(x=>'<tr><td>'+esc(x.time||'—')+'</td><td>'+esc(x.actor||'—')+'</td><td>提出反馈</td><td>'+esc(x.object||'—')+'</td></tr>').join('')+(rows.length?'':'<tr><td class="empty" colspan="4">暂无对应数据</td></tr>')+'</tbody></table></div></div>';
 const form=host.querySelector('#school-oplog-filter');form.addEventListener('submit',e=>{e.preventDefault();keyword=String(new FormData(form).get('keyword')||'').trim();draw()});host.querySelector('[data-oplog-reset]').addEventListener('click',()=>{keyword='';draw()});
}
window.SchoolOperationLog={mount,draw};
})();
