(()=>{'use strict';
const KEY='zxh-school-oplog-v2';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const seed=[
 {time:'2026-11-25 16:10:00',actor:'刘婧老师(13800138211)',type:'提出反馈',object:'二层班牌反复黑屏',detail:'学校端提出问题反馈：二层电子班牌反复黑屏，重启后仍无法恢复。',ip:'127.0.0.1'},
 {time:'2026-11-25 14:35:20',actor:'陈老师(13800138212)',type:'发布通知',object:'家校携手，赴一场秋日之约',detail:'发布美文通知（需确认收到），发布对象：五年级2班、三年级2班（学生20人，教师2人）',ip:'127.0.0.1'},
 {time:'2026-11-24 10:12:45',actor:'陈老师(13800138212)',type:'修改通知',object:'期中家长会时间提醒',detail:'修改待发送通知正文内容与标题',ip:'127.0.0.1'},
 {time:'2026-11-23 09:20:10',actor:'陈老师(13800138212)',type:'删除通知',object:'已取消的社团活动安排',detail:'删除通知：已取消的社团活动安排',ip:'127.0.0.1'},
 {time:'2026-11-20 11:05:32',actor:'刘婧老师(13800138211)',type:'提出反馈',object:'学生名单生僻字显示异常',detail:'学校端提出问题反馈：学生名单导入后生僻字显示异常。',ip:'127.0.0.1'}
];
let host=null,q={keyword:'',type:'',actor:'',range:'30d'},page=1,size=10;
function readAll(){
 let all=seed.slice();
 try{
  const saved=JSON.parse(localStorage.getItem(KEY)||'[]');
  if(Array.isArray(saved))all=saved.concat(all);
 }catch{}
 all.sort((a,b)=>String(b.time||'').localeCompare(String(a.time||'')));
 return all;
}
function withinRange(timeStr,range){
 if(!range||range==='all')return true;
 const ms=Date.parse(String(timeStr||'').replace(' ','T')+'+08:00');
 if(!Number.isFinite(ms))return true;
 const now=Date.now(),days=range==='today'?1:range==='7d'?7:30;
 return now-ms<=days*86400000;
}
function exportCSV(rows){
 const head=['操作时间','操作人','操作类型','操作对象','操作详情','来源 IP'];
 const csv=[head,...rows.map(r=>[r.time,r.actor,r.type,r.object,r.detail,r.ip||'127.0.0.1'])].map(cols=>cols.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\r\n');
 const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8;'});
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='学校操作日志.csv';document.body.append(a);a.click();a.remove();
}
function mount(root){host=root;draw()}
function draw(){
 if(!host?.isConnected)return;
 const all=readAll();
 const types=[...new Set(['提出反馈','发布通知','定时发布','修改通知','删除通知',...all.map(x=>x.type).filter(Boolean)])];
 const actors=[...new Set(all.map(x=>x.actor).filter(Boolean))];
 const rows=all.filter(x=>{
  if(q.type&&x.type!==q.type)return false;
  if(q.actor&&x.actor!==q.actor)return false;
  if(!withinRange(x.time,q.range))return false;
  if(q.keyword){
   const kw=q.keyword.toLocaleLowerCase();
   return [x.object,x.detail,x.actor,x.type].join(' ').toLocaleLowerCase().includes(kw);
  }
  return true;
 });
 const pages=Math.max(1,Math.ceil(rows.length/size));
 page=Math.min(Math.max(1,page),pages);
 const current=rows.slice((page-1)*size,page*size);
 const nums=[...new Set([1,pages,...Array.from({length:5},(_,i)=>page+i-2).filter(n=>n>=1&&n<=pages)])].sort((a,b)=>a-b);
 const pager=rows.length?'<div class="oplog-pager"><span>共 '+rows.length+' 条数据</span><div class="oplog-pager-r"><select data-oplog-size aria-label="每页条数">'+[10,20,50].map(n=>'<option value="'+n+'" '+(n===size?'selected':'')+'>'+n+' 条/页</option>').join('')+'</select><button type="button" data-oplog-page="'+(page-1)+'" '+(page<=1?'disabled':'')+'>‹</button>'+nums.map((n,i)=>(i&&n-nums[i-1]>1?'<span class="dots">…</span>':'')+'<button type="button" class="'+(n===page?'active':'')+'" data-oplog-page="'+n+'">'+n+'</button>').join('')+'<button type="button" data-oplog-page="'+(page+1)+'" '+(page>=pages?'disabled':'')+'>›</button><span>跳至</span><input type="number" min="1" max="'+pages+'" value="'+page+'" data-oplog-jump aria-label="跳转页码"><span>/ '+pages+' 页</span></div></div>':'';
 host.innerHTML='<div class="school-oplog"><div class="oplog-bar"><div class="oplog-filters"><input type="text" data-oplog-kw value="'+esc(q.keyword)+'" placeholder="操作对象 / 详情关键词" aria-label="操作对象或详情关键词"><select data-oplog-type aria-label="操作类型"><option value="">全部操作类型</option>'+types.map(t=>'<option value="'+esc(t)+'" '+(q.type===t?'selected':'')+'>'+esc(t)+'</option>').join('')+'</select><select data-oplog-actor aria-label="操作人"><option value="">全部操作人</option>'+actors.map(a=>'<option value="'+esc(a)+'" '+(q.actor===a?'selected':'')+'>'+esc(a)+'</option>').join('')+'</select><select data-oplog-range aria-label="时间范围">'+[['today','今天'],['7d','近7天'],['30d','近30天'],['all','全部时间']].map(([v,t])=>'<option value="'+v+'" '+(q.range===v?'selected':'')+'>'+t+'</option>').join('')+'</select><button type="button" class="oplog-btn" data-oplog-reset>重置</button></div><button type="button" class="oplog-export" data-oplog-export>导出</button></div><div class="oplog-table-wrap"><table><thead><tr><th>操作时间</th><th>操作人</th><th>操作类型</th><th>操作对象</th><th>操作详情</th><th>来源 IP</th></tr></thead><tbody>'+(current.length?current.map(x=>'<tr><td class="c nowrap">'+esc(x.time||'—')+'</td><td class="c nowrap">'+esc(x.actor||'—')+'</td><td class="c"><span class="oplog-tag '+(x.type==='删除通知'?'warn':'')+'">'+esc(x.type||'—')+'</span></td><td class="c obj">'+esc(x.object||'—')+'</td><td class="l">'+esc(x.detail||'—')+'</td><td class="c nowrap">'+esc(x.ip||'127.0.0.1')+'</td></tr>').join(''):'<tr><td class="empty" colspan="6">暂无对应数据</td></tr>')+'</tbody></table></div>'+pager+'</div>';
 host.querySelector('[data-oplog-kw]')?.addEventListener('keydown',e=>{if(e.key==='Enter'){q.keyword=e.target.value.trim();page=1;draw()}});
 host.querySelector('[data-oplog-kw]')?.addEventListener('change',e=>{q.keyword=e.target.value.trim();page=1;draw()});
 host.querySelector('[data-oplog-type]')?.addEventListener('change',e=>{q.type=e.target.value;page=1;draw()});
 host.querySelector('[data-oplog-actor]')?.addEventListener('change',e=>{q.actor=e.target.value;page=1;draw()});
 host.querySelector('[data-oplog-range]')?.addEventListener('change',e=>{q.range=e.target.value;page=1;draw()});
 host.querySelector('[data-oplog-reset]')?.addEventListener('click',()=>{q={keyword:'',type:'',actor:'',range:'30d'};page=1;draw()});
 host.querySelector('[data-oplog-export]')?.addEventListener('click',()=>exportCSV(rows));
 host.querySelector('[data-oplog-size]')?.addEventListener('change',e=>{size=Number(e.target.value)||10;page=1;draw()});
 host.querySelectorAll('[data-oplog-page]').forEach(b=>b.addEventListener('click',()=>{const p=Number(b.dataset.oplogPage);if(p>=1&&p<=pages){page=p;draw()}}));
 host.querySelector('[data-oplog-jump]')?.addEventListener('keydown',e=>{if(e.key==='Enter'){const p=Number(e.target.value);if(Number.isInteger(p)&&p>=1&&p<=pages){page=p;draw()}}});
}
window.SchoolOperationLog={mount,draw,append(entry){try{const list=JSON.parse(localStorage.getItem(KEY)||'[]');list.unshift({time:entry.time||new Date().toLocaleString('sv-SE',{hour12:false}),actor:entry.actor||'刘婧老师(13800138211)',type:entry.type||'提出反馈',object:entry.object||'—',detail:entry.detail||'—',ip:entry.ip||'127.0.0.1'});localStorage.setItem(KEY,JSON.stringify(list.slice(0,500)));draw()}catch{}}};
})();