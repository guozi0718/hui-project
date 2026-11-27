window.LegacyOperationLogHTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>操作日志 · 代理商后台</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#fff;color:#1f2329;font:13px/1.6 "PingFang SC","Microsoft YaHei",Arial,sans-serif;-webkit-font-smoothing:antialiased}
body{min-height:100vh}
button,input,select{font:inherit}
button{cursor:pointer}
.page{padding:20px 24px 32px;background:#fff}
.toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:16px;padding-bottom:16px;border-bottom:1px solid #f0f1f4}
.filters{display:flex;align-items:center;gap:10px;flex-wrap:wrap;flex:1;min-width:0}
.ipt,.sel{height:32px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#1f2329;padding:0 10px;font-size:13px;outline:none;transition:border-color .15s ease,box-shadow .15s ease}
.ipt{width:220px}
.sel{min-width:132px;padding-right:26px}
.ipt:hover,.sel:hover{border-color:#b9c2cf}
.ipt:focus,.sel:focus{border-color:#01a239;box-shadow:0 0 0 2px rgba(1,162,57,.14)}
.btn{height:32px;padding:0 14px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#1f2329;font-size:13px;display:inline-flex;align-items:center;gap:6px;white-space:nowrap;transition:all .15s ease}
.btn:hover{border-color:#01a239;color:#01a239;background:#f9fef9}
.btn.export-btn{border:0;background:transparent;color:#4e5969;padding:0 8px;font-weight:500}
.btn.export-btn:hover{color:#01a239;background:transparent}
.btn.export-btn svg{width:15px;height:15px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.table-wrap{width:100%;overflow-x:auto;border:1px solid #e7e9ee;border-radius:6px}
.log-table{width:max-content;min-width:100%;border-collapse:separate;border-spacing:0;table-layout:auto;font-size:13px}
.log-table th,.log-table td{padding:11px 14px;border-bottom:1px solid #e7e9ee;border-right:1px solid #f0f1f4;text-align:center;vertical-align:middle;white-space:nowrap}
.log-table th:last-child,.log-table td:last-child{border-right:0}
.log-table tbody tr:last-child td{border-bottom:0}
.log-table thead th{background:#f2f5fa;color:#4e5969;font-weight:500;white-space:nowrap;border-right:1px solid #e7e9ee}
.log-table tbody tr:nth-child(even) td{background:#fafbfd}
.log-table tbody tr:hover td{background:#f2fbf3}
.col-time{font-variant-numeric:tabular-nums;white-space:nowrap;color:#1f2329}
.col-actor{white-space:nowrap;color:#1f2329}
.col-type{white-space:nowrap}
.col-obj{color:#01a239;font-weight:500;white-space:nowrap}
.col-detail{text-align:left!important;color:#4e5969;white-space:nowrap}
.col-ip{font-variant-numeric:tabular-nums;white-space:nowrap;color:#4e5969}
.op-tag{display:inline-flex;align-items:center;justify-content:center;padding:2px 9px;border-radius:3px;font-size:12px;line-height:1.5;white-space:nowrap;border:1px solid #f4b768;color:#d6811d;background:#fff8ee}
.op-tag.is-green{border-color:#78c894;color:#087d35;background:#eef9f1}
.op-tag.is-blue{border-color:#8ec0f6;color:#2372cc;background:#eef5ff}
.op-tag.is-red{border-color:#ef9a9a;color:#cf3f44;background:#fff2f2}
.empty-cell{text-align:center!important;padding:36px 16px!important;color:#8c9db3!important;font-size:13px;background:#fff!important}
.pager{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-top:16px;color:#6c7a8d;font-size:13px}
.pager-right{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.pager .sel{height:30px;min-width:92px;font-size:12px;padding:0 8px}
.pg-btn{min-width:30px;height:30px;padding:0 8px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#4a5568;font-size:12px}
.pg-btn:hover:not(:disabled){border-color:#009a3d;color:#009a3d}
.pg-btn.active{background:#009a3d;border-color:#009a3d;color:#fff;font-weight:600}
.pg-btn:disabled{opacity:.4;cursor:not-allowed}
.pg-jump{display:inline-flex;align-items:center;gap:6px;color:#6c7a8d;font-size:12px}
.pg-jump input{width:50px;height:30px;border:1px solid #dcdfe6;border-radius:4px;text-align:center;padding:0 4px;outline:none}
.pg-jump input:focus{border-color:#009a3d}
.toast{position:fixed;top:24px;left:50%;transform:translateX(-50%);background:rgba(24,39,62,.92);color:#fff;padding:8px 18px;border-radius:6px;font-size:13px;z-index:999;opacity:0;pointer-events:none;transition:opacity .2s}
.toast.show{opacity:1}
</style>
</head>
<body>
<div class="page" id="app"></div>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<script>
(function(){
  'use strict';
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const SEED_LOGS = [
    { time:'2026-11-25 22:21:34', actor:'林晓雨(13800138101)', type:'代发通知', object:'家校携手，赴一场秋日之约', detail:'目标学校：明德小学；发布对象：全体学生、全体教师；查收方式：需确认收到', ip:'127.0.0.1' },
    { time:'2026-11-25 21:48:12', actor:'林晓雨(13800138101)', type:'回复学校反馈', object:'明德小学 - 周女士', detail:'家长端 · 问题反馈：已回复“您好，已安排班主任核实处理，请留意后续消息”并自动触发回复通知', ip:'127.0.0.1' },
    { time:'2026-11-25 21:27:11', actor:'林晓雨(13800138101)', type:'关联学校', object:'李强（平台客服）', detail:'新增关联学校：示范小学、阳光实验学校', ip:'127.0.0.1' },
    { time:'2026-11-25 20:54:21', actor:'陈明(13800138102)', type:'定时代发通知', object:'期中家长会时间提醒', detail:'目标学校：海棠小学；发布对象：全体学生、全体教师；计划发送：2026-11-27 09:00:00', ip:'127.0.0.1' },
    { time:'2026-11-25 20:40:41', actor:'林晓雨(13800138101)', type:'提交代理商反馈', object:'建议增加按月汇总导出报表', detail:'功能建议：希望在代理商后台支持按月汇总导出所辖学校通知查收统计报表（附件 1 张）', ip:'127.0.0.1' },
    { time:'2026-11-25 19:59:24', actor:'林晓雨(13800138101)', type:'设置默认客服', object:'林晓雨', detail:'将厦门代理商（演示）默认客服由“陈思远”改为“林晓雨”；仅服务未绑定专属客服的学校', ip:'127.0.0.1' },
    { time:'2026-11-25 18:36:10', actor:'陈明(13800138102)', type:'修改通知', object:'冬季校园传染病防控安全须知', detail:'目标学校：明德小学；更新通知正文与附件内容（未产生查收记录）', ip:'127.0.0.1' },
    { time:'2026-11-25 17:15:42', actor:'林晓雨(13800138101)', type:'追问代理商反馈', object:'建议增加按月汇总导出报表', detail:'补充追问：请问该需求预计纳入哪个版本排期？', ip:'127.0.0.1' },
    { time:'2026-11-25 16:37:19', actor:'刘俊涛(15032334288)', type:'取消办理', object:'RO2026112506097054', detail:'家长取消金额¥0.00，刘紫嫣：用户请求退款', ip:'127.0.0.1' },
    { time:'2026-11-25 15:20:08', actor:'林晓雨(13800138101)', type:'新增客服', object:'吴佳怡', detail:'客服（吴佳怡）创建成功；联系电话：13800138103；工作时间：每周一至周五 09:00—18:00', ip:'127.0.0.1' },
    { time:'2026-11-25 14:12:36', actor:'张杰(18033590319)', type:'发起退款', object:'RO2026112534802040', detail:'家长取消金额¥29.80，张佳俊：用户请求退款', ip:'127.0.0.1' },
    { time:'2026-11-25 11:20:07', actor:'林晓雨(13800138101)', type:'删除通知', object:'已取消的社团活动安排', detail:'删除目标学校【明德小学】通知，原状态：已发送', ip:'127.0.0.1' },
    { time:'2026-11-24 16:45:19', actor:'林晓雨(13800138101)', type:'编辑客服', object:'陈思远', detail:'工作时间由“每周一至周五 09:00—18:00”改为“每周一至周六 08:30—17:30”', ip:'127.0.0.1' },
    { time:'2026-11-24 10:39:52', actor:'徐园园(17733565691)', type:'发起退款', object:'RO2026112515383660', detail:'家长取消金额¥29.80，杨皓然：用户请求退款', ip:'127.0.0.1' }
  ];

  function collectLiveLogs(){
    const out = [];
    try{
      const cs = JSON.parse(localStorage.getItem('zxh-cs-shared-v4') || 'null');
      if (cs && Array.isArray(cs.logs)) {
        for (const l of cs.logs) {
          const rec = (cs.records || []).find(x => x.id === l.record);
          if (rec && rec.deleted) continue;
          if (l.type === 'agent' && l.owner !== 'A1' && l.scopeAgent !== 'A1') continue;
          const obj = (l.name || rec?.name || '客服') + (rec?.type === 'platform' ? '（平台客服）' : '');
          out.push({
            time: String(l.time || '').slice(0, 19),
            actor: (l.actorName || l.actor || '林晓雨') + '(13800138101)',
            type: l.action || '编辑客服',
            object: obj,
            detail: l.content || l.action || '更新客服信息',
            ip: '127.0.0.1'
          });
        }
      }
    }catch{}
    try{
      const fb = JSON.parse(localStorage.getItem('zxh-feedback-oplog-agent') || '[]');
      for (const l of fb) {
        if (!['回复反馈','提交反馈','追问反馈'].includes(l.type)) continue;
        const typeMap = {'回复反馈':'回复学校反馈','提交反馈':'提交代理商反馈','追问反馈':'追问代理商反馈'};
        out.push({
          time: String(l.time || '').slice(0, 19),
          actor: (l.actor || '林晓雨') + '(13800138101)',
          type: typeMap[l.type] || l.type,
          object: l.module === '学校反馈问题' ? ('学校反馈 - ' + (l.source || '用户')) : (String(l.detail || '').slice(0, 20) || '代理商反馈'),
          detail: l.detail || l.type,
          ip: '127.0.0.1'
        });
      }
    }catch{}
    return out;
  }

  function allLogs(){
    const merged = collectLiveLogs().concat(SEED_LOGS);
    return merged.sort((a, b) => String(b.time).localeCompare(String(a.time)));
  }

  const state = { kw: '', type: '', actor: '', range: '30d', page: 1, size: 10 };
  const ALL_TYPES = ['新增客服','编辑客服','删除客服','关联学校','设置默认客服','取消默认客服','回复学校反馈','提交代理商反馈','追问代理商反馈','代发通知','定时代发通知','修改通知','删除通知','取消办理','发起退款'];

  function tagClass(t){
    if (/新增|代发|提交|关联/.test(t)) return 'is-green';
    if (/编辑|修改|回复|追问|设置/.test(t)) return 'is-blue';
    if (/删除|取消默认/.test(t)) return 'is-red';
    return '';
  }

  function filteredLogs(){
    const list = allLogs();
    const refMs = Date.parse('2026-11-25T23:59:59+08:00');
    const kw = state.kw.trim().toLowerCase();
    return list.filter(r => {
      if (kw && !(r.object.toLowerCase().includes(kw) || r.detail.toLowerCase().includes(kw))) return false;
      if (state.type && r.type !== state.type) return false;
      if (state.actor && r.actor !== state.actor) return false;
      if (state.range !== 'all') {
        const ms = Date.parse(r.time.replace(' ', 'T') + '+08:00');
        if (Number.isFinite(ms)) {
          const days = state.range === '1d' ? 1 : state.range === '7d' ? 7 : 30;
          if (refMs - ms > days * 86400000) return false;
        }
      }
      return true;
    });
  }

  function toast(msg){
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove('show'), 2200);
  }

  function exportFilteredExcel(){
    const rows = filteredLogs();
    if (!rows.length) { toast('当前筛选条件下暂无可导出数据'); return; }
    const rangeLabel = ({'1d':'今天','7d':'近7天','30d':'近30天','all':'全部时间'})[state.range] || '近30天';
    const summary = '导出范围：' + rangeLabel + ' ｜ 操作类型：' + (state.type || '全部') + ' ｜ 操作人：' + (state.actor || '全部') + (state.kw.trim() ? ' ｜ 关键词：' + state.kw.trim() : '') + ' ｜ 共 ' + rows.length + ' 条记录';
    const tableHTML = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><style>table{border-collapse:collapse;font-family:"Microsoft YaHei",Arial,sans-serif;font-size:11pt}td,th{border:1px solid #d0d7de;padding:6px 10px;vertical-align:middle}th{background:#f2f4f7;font-weight:bold;text-align:center}.title{font-size:14pt;font-weight:bold;text-align:center;background:#ffffff;height:36px}.sub{font-size:10pt;color:#555555;text-align:left;background:#fafafa}</style></head><body><table><tr><td colspan="6" class="title">代理商后台 - 操作日志导出（筛选结果）</td></tr><tr><td colspan="6" class="sub">' + esc(summary) + '</td></tr><tr><th>操作时间</th><th>操作人</th><th>操作类型</th><th>操作对象</th><th>操作详情</th><th>来源 IP</th></tr>' + rows.map(r => '<tr><td>' + esc(r.time) + '</td><td>' + esc(r.actor) + '</td><td>' + esc(r.type) + '</td><td>' + esc(r.object) + '</td><td>' + esc(r.detail) + '</td><td>' + esc(r.ip) + '</td></tr>').join('') + '</table></body></html>';
    const blob = new Blob(['\ufeff' + tableHTML], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = '操作日志导出_' + rows.length + '条.xls';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast('已按当前筛选条件导出 ' + rows.length + ' 条操作日志');
  }

  function render(){
    const all = allLogs();
    const actors = [...new Set(all.map(x => x.actor))];
    const rows = filteredLogs();
    const pages = Math.max(1, Math.ceil(rows.length / state.size));
    state.page = Math.min(Math.max(1, state.page), pages);
    const slice = rows.slice((state.page - 1) * state.size, state.page * state.size);

    const pageBtns = [];
    for (let i = 1; i <= pages; i++) {
      pageBtns.push('<button type="button" class="pg-btn' + (i === state.page ? ' active' : '') + '" data-pg="' + i + '">' + i + '</button>');
    }

    document.getElementById('app').innerHTML =
      '<div class="toolbar">' +
        '<div class="filters">' +
          '<input class="ipt" id="f-kw" placeholder="操作对象 / 详情关键词" value="' + esc(state.kw) + '">' +
          '<select class="sel" id="f-type" aria-label="操作类型"><option value="">全部操作类型</option>' +
            ALL_TYPES.map(t => '<option value="' + esc(t) + '"' + (state.type === t ? ' selected' : '') + '>' + esc(t) + '</option>').join('') +
          '</select>' +
          '<select class="sel" id="f-actor" aria-label="操作人"><option value="">全部操作人</option>' +
            actors.map(a => '<option value="' + esc(a) + '"' + (state.actor === a ? ' selected' : '') + '>' + esc(a) + '</option>').join('') +
          '</select>' +
          '<select class="sel" id="f-range" aria-label="时间范围">' +
            [['30d','近30天'],['7d','近7天'],['1d','今天'],['all','全部时间']].map(([v,t]) => '<option value="' + v + '"' + (state.range === v ? ' selected' : '') + '>' + t + '</option>').join('') +
          '</select>' +
          '<button type="button" class="btn" id="f-reset">重置</button>' +
        '</div>' +
        '<button type="button" class="btn export-btn" id="f-export"><svg viewBox="0 0 24 24"><path d="M14 3h7v7M10 14 21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>导出</button>' +
      '</div>' +
      '<div class="table-wrap"><table class="log-table"><thead><tr>' +
        '<th class="col-time">操作时间</th><th class="col-actor">操作人</th><th class="col-type">操作类型</th><th class="col-obj">操作对象</th><th class="col-detail">操作详情</th><th class="col-ip">来源 IP</th>' +
      '</tr></thead><tbody>' +
        (slice.length ? slice.map(r =>
          '<tr>' +
            '<td class="col-time">' + esc(r.time) + '</td>' +
            '<td class="col-actor">' + esc(r.actor) + '</td>' +
            '<td class="col-type"><span class="op-tag ' + tagClass(r.type) + '">' + esc(r.type) + '</span></td>' +
            '<td class="col-obj">' + esc(r.object) + '</td>' +
            '<td class="col-detail">' + esc(r.detail) + '</td>' +
            '<td class="col-ip">' + esc(r.ip) + '</td>' +
          '</tr>'
        ).join('') : '<tr><td colspan="6" class="empty-cell">暂无对应数据</td></tr>') +
      '</tbody></table></div>' +
      (rows.length ? '<div class="pager"><span>共 ' + rows.length + ' 条数据</span><div class="pager-right"><select class="sel" id="f-size" aria-label="每页条数">' + [10,20,50].map(n => '<option value="' + n + '"' + (state.size === n ? ' selected' : '') + '>' + n + ' 条/页</option>').join('') + '</select><button type="button" class="pg-btn" data-pg="' + (state.page - 1) + '"' + (state.page <= 1 ? ' disabled' : '') + '>‹</button>' + pageBtns.join('') + '<button type="button" class="pg-btn" data-pg="' + (state.page + 1) + '"' + (state.page >= pages ? ' disabled' : '') + '>›</button><span class="pg-jump">跳至<input id="f-jump" type="number" min="1" max="' + pages + '" value="' + state.page + '">/ ' + pages + ' 页</span></div></div>' : '');

    const kwEl = document.getElementById('f-kw');
    kwEl.addEventListener('input', e => { state.kw = e.target.value; state.page = 1; render(); document.getElementById('f-kw')?.focus(); });
    document.getElementById('f-type').addEventListener('change', e => { state.type = e.target.value; state.page = 1; render(); });
    document.getElementById('f-actor').addEventListener('change', e => { state.actor = e.target.value; state.page = 1; render(); });
    document.getElementById('f-range').addEventListener('change', e => { state.range = e.target.value; state.page = 1; render(); });
    document.getElementById('f-reset').addEventListener('click', () => { state.kw = ''; state.type = ''; state.actor = ''; state.range = '30d'; state.page = 1; render(); });
    document.getElementById('f-export').addEventListener('click', exportFilteredExcel);
    document.getElementById('f-size')?.addEventListener('change', e => { state.size = Number(e.target.value) || 10; state.page = 1; render(); });
    document.getElementById('f-jump')?.addEventListener('change', e => { const p = Number(e.target.value); if (p >= 1 && p <= pages) { state.page = p; render(); } });
    document.querySelectorAll('[data-pg]').forEach(b => b.addEventListener('click', () => { const p = Number(b.dataset.pg); if (p >= 1 && p <= pages) { state.page = p; render(); } }));
  }

  window.addEventListener('storage', render);
  render();
})();
</script>
</body>
</html>`;
