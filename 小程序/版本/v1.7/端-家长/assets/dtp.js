/* prototype/assets/dtp.js — antd 风自定义 DatePicker（移植自 OliveBird prototype/dtp.js，本项目两处适配见注释 ①②）
 * - 自动扫描页面所有 <input type="date">，就地升级（保留 id/name/class/value/属性/事件）
 * - 用 MutationObserver 兜底动态插入的日期输入
 * - 值契约：input.value 仍为 ISO YYYY-MM-DD（与原生 type=date 完全一致，原有 load/save 路径无感）
 * - 主色绑 var(--color-primary, #1677ff)；各文件若已定义该变量则跟随，未定义回退 antd 蓝
 * - 适配①：升级时把 input 的 inline display 迁移到 .dtp-wrap（本项目日期输入默认隐藏、选自定义区间才显示，显隐经页面侧 dtpShow() 作用于 wrap）
 * - 适配②：面板底部增加「清除」（原版仅「今天」）——服务运管端可留空的区间筛选（升级后 input 为 readOnly，无法键入清空）；
 *   小程序端（家长端 / 教师端）的素质评价时间筛选起止必填、已改为年 / 月 / 日三列滚轮，不再使用本组件
 */
(function(){
  if (window.__DTP_LOADED__) return;
  window.__DTP_LOADED__ = true;

  /* ===== 注入样式 ===== */
  const css = `
.dtp-wrap { position:relative; display:inline-block; }
.dtp-wrap > input.dtp-input {
  background:#fff; cursor:pointer; padding-right:30px;
  transition:border-color .15s;
}
.dtp-wrap > input.dtp-input:hover { border-color: var(--color-primary, #1677ff); }
.dtp-wrap > .dtp-icon {
  position:absolute; right:10px; top:50%; transform:translateY(-50%);
  width:14px; height:14px; color:#bfbfbf; pointer-events:none;
}
.dtp-panel {
  background:#fff; border:1px solid #e5e6eb; border-radius:8px;
  box-shadow: 0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05);
  width:280px; padding:0 12px; z-index:99999;
  font-family:-apple-system,'PingFang SC',sans-serif; user-select:none;
}
.dtp-panel * { box-sizing:border-box; }
.dtp-head {
  display:flex; align-items:center; justify-content:space-between;
  padding:8px 0; border-bottom:1px solid #f0f0f0;
}
.dtp-nav { display:flex; gap:2px; }
.dtp-title {
  flex:1; text-align:center; font-weight:500;
  color:rgba(0,0,0,.88); font-size:13px;
}
.dtp-btn {
  width:24px; height:24px; display:flex; align-items:center; justify-content:center;
  color:rgba(0,0,0,.25); cursor:pointer; border-radius:4px;
  font-size:14px; line-height:1; transition:color .15s, background .15s;
}
.dtp-btn:hover { color:rgba(0,0,0,.88); background:rgba(0,0,0,.04); }
.dtp-grid { display:grid; grid-template-columns:repeat(7, 1fr); padding:4px 0; }
.dtp-wk { font-size:12px; color:rgba(0,0,0,.88); font-weight:400; text-align:center; padding:6px 0; line-height:1; }
.dtp-cell {
  height:28px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  font-size:12px; color:rgba(0,0,0,.88);
}
.dtp-cell .dtp-num {
  width:24px; height:24px; border-radius:2px;
  display:flex; align-items:center; justify-content:center;
  transition:background .15s, color .15s;
}
.dtp-cell.muted .dtp-num { color:rgba(0,0,0,.25); }
.dtp-cell:hover .dtp-num { background:rgba(0,0,0,.04); }
.dtp-cell.today .dtp-num { box-shadow: inset 0 0 0 1px var(--color-primary, #1677ff); }
.dtp-cell.selected .dtp-num { background: var(--color-primary, #1677ff); color:#fff; }
.dtp-cell.selected:hover .dtp-num { background: var(--color-primary-hover, var(--color-primary, #1677ff)); color:#fff; }
.dtp-foot { border-top:1px solid #f0f0f0; padding:8px 0; display:flex; justify-content:space-between; }
.dtp-today {
  background:none; border:none; cursor:pointer;
  color: var(--color-primary, #1677ff); font-size:12px; padding:2px 8px;
  font-family:inherit;
}
.dtp-today:hover { color: var(--color-primary-hover, var(--color-primary, #1677ff)); }
`;
  const style = document.createElement('style');
  style.setAttribute('data-dtp', '');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);

  const ICON_SVG = '<svg class="dtp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';

  function parseISO(s){
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s||'');
    if (!m) return null;
    const d = new Date(+m[1], +m[2]-1, +m[3]);
    return isNaN(d) ? null : d;
  }
  function fmtISO(d){
    const y = d.getFullYear();
    const m = String(d.getMonth()+1).padStart(2,'0');
    const dd = String(d.getDate()).padStart(2,'0');
    return y+'-'+m+'-'+dd;
  }
  function sameDay(a,b){
    return !!a && !!b
      && a.getFullYear()===b.getFullYear()
      && a.getMonth()===b.getMonth()
      && a.getDate()===b.getDate();
  }

  /* ===== 升级单个 input ===== */
  function upgrade(input){
    if (!input || input.dataset.dtpInit === '1') return;
    if (input.type !== 'date') return;
    /* 保留原 value（type 切到 text 前先存）— 浏览器把 type=date 的 value 校验为 ISO 或 ''  */
    const initialValue = input.value || input.getAttribute('value') || '';
    const minAttr = input.getAttribute('min') || '';
    const maxAttr = input.getAttribute('max') || '';

    input.type = 'text';
    input.readOnly = true;
    input.value = initialValue;
    if (!input.placeholder) input.placeholder = '请选择日期';
    input.classList.add('dtp-input');
    input.dataset.dtpInit = '1';
    if (minAttr) input.dataset.dtpMin = minAttr;
    if (maxAttr) input.dataset.dtpMax = maxAttr;

    /* 用一个 .dtp-wrap 包住 input，紧跟一个 SVG 图标 */
    const wrap = document.createElement('span');
    wrap.className = 'dtp-wrap';
    const parent = input.parentNode;
    parent.insertBefore(wrap, input);
    wrap.appendChild(input);
    wrap.insertAdjacentHTML('beforeend', ICON_SVG);

    /* 适配①：显隐迁移到 wrap——input 自带的 inline display（默认隐藏场景）挪给 wrap，input 本身恢复可见 */
    wrap.style.display = input.style.display === 'none' ? 'none' : '';
    input.style.display = '';

    bindPicker(input);
  }

  /* ===== 单个 input 的面板绑定 ===== */
  function bindPicker(input){
    const state = { open:false, panel:null, viewY:0, viewM:0 };

    function minDate(){ return parseISO(input.dataset.dtpMin); }
    function maxDate(){ return parseISO(input.dataset.dtpMax); }
    function outOfRange(d){
      const mn = minDate(), mx = maxDate();
      if (mn && d < mn) return true;
      if (mx && d > mx) return true;
      return false;
    }

    function render(){
      if (!state.panel) return;
      const { viewY, viewM } = state;
      const sel = parseISO(input.value);
      const today = new Date(); today.setHours(0,0,0,0);
      const dow = (new Date(viewY, viewM, 1).getDay() + 6) % 7;
      const start = new Date(viewY, viewM, 1 - dow);

      const heads = ['一','二','三','四','五','六','日']
        .map(w => '<div class="dtp-wk">'+w+'</div>').join('');
      let cells = '';
      for (let i=0; i<42; i++){
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const muted = d.getMonth() !== viewM;
        const disabled = outOfRange(d);
        const cls = ['dtp-cell'];
        if (muted) cls.push('muted');
        if (disabled) cls.push('muted');
        if (sameDay(d, today)) cls.push('today');
        if (sameDay(d, sel))   cls.push('selected');
        const iso = fmtISO(d);
        const attrs = disabled
          ? 'style="cursor:not-allowed"'
          : 'data-iso="'+iso+'"';
        cells += '<div class="'+cls.join(' ')+'" '+attrs+'><span class="dtp-num">'+d.getDate()+'</span></div>';
      }
      /* 适配②：底部左「清除」右「今天」——清除即清空该端日期（本项目口径：两端清空 = 不限时间） */
      state.panel.innerHTML =
        '<div class="dtp-head">'
          +'<div class="dtp-nav">'
            +'<span class="dtp-btn" data-act="py" title="上一年">«</span>'
            +'<span class="dtp-btn" data-act="pm" title="上一月">‹</span>'
          +'</div>'
          +'<div class="dtp-title">'+viewY+'年 '+(viewM+1)+'月</div>'
          +'<div class="dtp-nav">'
            +'<span class="dtp-btn" data-act="nm" title="下一月">›</span>'
            +'<span class="dtp-btn" data-act="ny" title="下一年">»</span>'
          +'</div>'
        +'</div>'
        +'<div class="dtp-grid">'+heads+cells+'</div>'
        +'<div class="dtp-foot"><button type="button" class="dtp-today" data-act="clear">清除</button><button type="button" class="dtp-today" data-act="today">今天</button></div>';
    }

    function position(){
      if (!state.panel) return;
      const r = input.getBoundingClientRect();
      const p = state.panel;
      p.style.position = 'fixed';
      p.style.left = r.left + 'px';
      p.style.top = (r.bottom + 4) + 'px';
      const pr = p.getBoundingClientRect();
      if (pr.right > window.innerWidth - 8) {
        p.style.left = Math.max(8, window.innerWidth - 8 - pr.width) + 'px';
      }
      if (pr.bottom > window.innerHeight - 8 && r.top > pr.height + 8) {
        p.style.top = (r.top - pr.height - 4) + 'px';
      }
    }

    function open(){
      if (state.open) return;
      /* 同页面多个 picker：先关掉别的 */
      if (window.__DTP_OPEN_CLOSE__) try { window.__DTP_OPEN_CLOSE__(); } catch(e){}
      const cur = parseISO(input.value) || new Date();
      state.viewY = cur.getFullYear();
      state.viewM = cur.getMonth();
      const p = document.createElement('div');
      p.className = 'dtp-panel';
      document.body.appendChild(p);
      state.panel = p;
      state.open = true;
      render();
      position();
      p.addEventListener('click', onPanelClick);
      document.addEventListener('mousedown', onDocMouseDown);
      document.addEventListener('keydown', onDocKey, true);
      window.addEventListener('scroll', onAnyScroll, true);
      window.addEventListener('resize', onAnyScroll);
      window.__DTP_OPEN_CLOSE__ = close;
    }

    function close(){
      if (!state.open) return;
      state.panel.remove();
      state.panel = null;
      state.open = false;
      document.removeEventListener('mousedown', onDocMouseDown);
      document.removeEventListener('keydown', onDocKey, true);
      window.removeEventListener('scroll', onAnyScroll, true);
      window.removeEventListener('resize', onAnyScroll);
      if (window.__DTP_OPEN_CLOSE__ === close) window.__DTP_OPEN_CLOSE__ = null;
    }

    function onDocMouseDown(e){
      if (state.panel && state.panel.contains(e.target)) return;
      const wrap = input.closest('.dtp-wrap');
      if (wrap && wrap.contains(e.target)) return;
      close();
    }
    function onDocKey(e){
      if (e.key === 'Escape') { e.stopPropagation(); close(); }
    }
    function onAnyScroll(e){
      if (state.panel && e && e.target && state.panel.contains && state.panel.contains(e.target)) return;
      close();
    }
    function fireChange(){
      input.dispatchEvent(new Event('input', { bubbles:true }));
      input.dispatchEvent(new Event('change', { bubbles:true }));
    }
    function onPanelClick(e){
      const btn = e.target.closest('[data-act]');
      if (btn) {
        const a = btn.dataset.act;
        if (a === 'py') { state.viewY--; render(); position(); return; }
        if (a === 'ny') { state.viewY++; render(); position(); return; }
        if (a === 'pm') {
          if (state.viewM === 0) { state.viewM = 11; state.viewY--; } else state.viewM--;
          render(); position(); return;
        }
        if (a === 'nm') {
          if (state.viewM === 11) { state.viewM = 0; state.viewY++; } else state.viewM++;
          render(); position(); return;
        }
        if (a === 'clear') {
          input.value = '';
          fireChange();
          close();
          return;
        }
        if (a === 'today') {
          const t = new Date();
          if (outOfRange(t)) return;
          input.value = fmtISO(t);
          fireChange();
          close();
          return;
        }
      }
      const cell = e.target.closest('.dtp-cell[data-iso]');
      if (cell) {
        input.value = cell.dataset.iso;
        fireChange();
        close();
      }
    }

    input.addEventListener('click', open);
    input.addEventListener('focus', open);
  }

  /* ===== 扫描 + MutationObserver 兜底动态插入 ===== */
  function scan(root){
    const ctx = root || document;
    const list = ctx.querySelectorAll ? ctx.querySelectorAll('input[type="date"]') : [];
    for (let i=0; i<list.length; i++) upgrade(list[i]);
  }

  function watch(){
    if (!window.MutationObserver) return;
    const mo = new MutationObserver(muts => {
      for (const m of muts) {
        for (const n of m.addedNodes) {
          if (!(n instanceof Element)) continue;
          if (n.tagName === 'INPUT' && n.type === 'date') upgrade(n);
          else if (n.querySelectorAll) {
            const subs = n.querySelectorAll('input[type="date"]');
            for (let j=0; j<subs.length; j++) upgrade(subs[j]);
          }
        }
      }
    });
    mo.observe(document.body, { childList:true, subtree:true });
  }

  function boot(){ scan(document); watch(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* 暴露给外部，便于手动重扫（基本用不到） */
  window.DTP = { scan: scan, upgrade: upgrade };
})();
