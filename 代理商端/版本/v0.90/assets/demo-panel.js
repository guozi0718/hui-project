/* ======== 演示说明面板（老师端 / 家长端 / 学校端 / 运管端共用） ========
   - 电脑上窗口够宽时，面板放在手机框右侧做侧栏：不遮挡原型，可以边看边点；切换页面或点演示操作后自动换成当前页面的说明，
     只有点 chip 或面板右上角 ✕ 才收起。窗口太窄时退回手机内浮层，点外部收起（与原来一致）。
   - 正文按「【小标题】」拆成可折叠的小节，长段按句号分段；本页的演示操作排在正文前，通用入口（返回登录页、更新日志、总览、手机壳）排在最后。
   - 顶部搜索：输入即高亮、展开命中的小节并跳到第一处，回车跳下一处。
   - 后台端使用可拖动、可收起的悬浮面板，也可独立打开；不占页面宽度，业务弹层优先。
   各端的 renderDemo 只负责准备标题、正文、本页操作与通用入口，交给 demoPanelRender 排版。 */
(function(){
  const SIDE_MIN=340,SIDE_MAX=500,GAP=28;
  let key='',q='',open={},all=false,secs=[],hit=-1,rt=0,actsAll=false;
  const ACTS_MAX=8;
  const pop=()=>document.getElementById('demo-pop');
  const isSide=()=>pop().classList.contains('side');
  const isWeb=()=>!document.querySelector('.phone');
  const floating={x:null,y:72,mini:false,scroll:0};
  let detached=null,drag=null;
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');

  /* 拆小节：「【…】」在开头、换行或句号 / 分号之后、且不超过 32 字时算小标题；正文里引用的按钮名（如【设置】、带【类型】前缀）不拆 */
  function parse(d){
    const out=[];let cur={h:'',t:''};
    for(let i=0;i<d.length;i++){
      if(d[i]==='【'&&(i===0||d[i-1]==='。'||d[i-1]==='；'||d[i-1]==='\n')){
        const j=d.indexOf('】',i);
        if(j>i&&j-i<=32){if(cur.h||cur.t.trim())out.push(cur);cur={h:d.slice(i+1,j),t:''};i=j;continue}
      }
      cur.t+=d[i];
    }
    if(cur.h||cur.t.trim())out.push(cur);
    return out;
  }
  /* 分段：正文里的换行（\n）一律另起一段；其余只在括号、引号外的句号处断句（单句超过 240 字时也在分号处断），
     凑够约 110 字成一段，太短的尾巴并回上一段 */
  function paras(t){return t.split('\n').filter(x=>x.trim()).reduce((a,x)=>a.concat(paras1(x)),[])}
  function paras1(t){
    const ss=[];let b='',dep=0;
    for(const c of t){
      b+=c;
      if('（(「“『'.includes(c))dep++;
      else if('）)」”』'.includes(c))dep=Math.max(0,dep-1);
      else if(!dep&&(c==='。'||(c==='；'&&b.length>240))){ss.push(b);b=''}
    }
    if(b.trim())ss.push(b);
    const ps=[];let p='';
    ss.forEach(s=>{p+=s;if(p.length>=110){ps.push(p);p=''}});
    if(p.trim()){if(ps.length&&p.length<40)ps[ps.length-1]+=p;else ps.push(p)}
    return ps;
  }
  /* 默认只显示开头的概述，各小节收起；正文以小标题开头（没有概述）时第一节默认展开 */
  const isOpen=n=>all||open[n]===true||(open[n]!==false&&n===0&&!!secs[0].h);

  function body(){
    const el=document.getElementById('dp-body');if(!el)return;
    el.innerHTML=secs.map((s,n)=>{
      const ps=paras(s.t).map(p=>'<p>'+p+'</p>').join('');
      if(!s.h)return '<div class="dp-intro">'+ps+'</div>';
      return '<div class="dp-sec'+(isOpen(n)?' open':'')+'" data-n="'+n+'"><div role="button" tabindex="0" class="dp-sh" onclick="dpTog('+n+')"><i>›</i><span>'+s.h+'</span></div><div class="dp-sb">'+ps+'</div></div>';
    }).join('');
    const allEl=document.getElementById('dp-all');
    if(allEl)allEl.textContent=all?'全部收起':'全部展开';
    hl(el);
    syncWindow(!!q);
  }
  /* 高亮：只处理文字节点，不破坏正文里原有的标签 */
  function hl(el){
    const n=document.getElementById('dp-qn');hit=-1;
    if(!q){if(n)n.textContent='';return}
    const ql=q.toLowerCase(),w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT),ts=[];
    while(w.nextNode())ts.push(w.currentNode);
    ts.forEach(t=>{
      const s=t.nodeValue,l=s.toLowerCase();let i=l.indexOf(ql);if(i<0)return;
      const f=document.createDocumentFragment();let last=0;
      while(i>=0){f.appendChild(document.createTextNode(s.slice(last,i)));const m=document.createElement('mark');m.textContent=s.slice(i,i+q.length);f.appendChild(m);last=i+q.length;i=l.indexOf(ql,last)}
      f.appendChild(document.createTextNode(s.slice(last)));t.parentNode.replaceChild(f,t);
    });
    el.querySelectorAll('.dp-sec').forEach(s=>{if(s.querySelector('mark'))s.classList.add('open')});
    const ms=el.querySelectorAll('mark');
    if(n)n.textContent=ms.length?ms.length+' 处':'无匹配';
    if(ms.length)go(0);
  }
  function go(i){
    const ms=document.querySelectorAll('#dp-body mark');if(!ms.length)return;
    if(hit>-1&&ms[hit])ms[hit].classList.remove('cur');
    hit=(i+ms.length)%ms.length;const m=ms[hit];m.classList.add('cur');
    const n=document.getElementById('dp-qn');if(n)n.textContent=(hit+1)+' / '+ms.length;
    /* 用 offsetTop 换算滚动位置：不用 scrollIntoView，免得把手机框本身滚动错位 */
    let y=0,e=m;while(e&&e!==pop()){y+=e.offsetTop;e=e.offsetParent}
    const hd=pop().querySelector('.dp-hd');
    pop().scrollTop=Math.max(0,y-(hd?hd.offsetHeight:0)-60);
  }

  window.dpTog=function(n){
    const s=document.querySelector('#dp-body .dp-sec[data-n="'+n+'"]');if(!s)return;
    const o=!s.classList.contains('open');s.classList.toggle('open',o);open[n]=o;syncWindow();
  };
  window.dpAll=function(){all=!all;open={};if(!all)secs.forEach((s,n)=>{open[n]=false});body()};
  window.dpSearch=function(v){q=v.trim();body()};
  window.dpActs=function(){actsAll=!actsAll;renderDemo()};
  window.dpKey=function(e){if(e.key==='Enter'){e.preventDefault();go(hit+(e.shiftKey?-1:1));syncWindow(true)}};

  /* 收起不重建正文，搜索、小节和滚动位置原样保留。 */
  window.dpMinimize=function(){
    const p=pop();
    if(!floating.mini)floating.scroll=p.scrollTop;
    floating.mini=!floating.mini;p.classList.toggle('dp-mini',floating.mini);
    const b=p.querySelector('.dp-min');
    b.textContent=floating.mini?'展开':'—';b.title=floating.mini?'展开演示说明':'收起为小标签';
    b.setAttribute('aria-label',b.title);layout();p.scrollTop=floating.mini?0:floating.scroll;
  };

  /* 独立窗口只镜像说明，所有演示动作仍在原页面执行，共用原页面的数据和状态。 */
  function syncWindow(reveal,scrollTo){
    if(!detached||detached.closed)return;
    const d=detached.document,old=d.activeElement,focusId=old&&old.id;
    const start=focusId==='dp-q'?old.selectionStart:null,end=focusId==='dp-q'?old.selectionEnd:null;
    const y=typeof scrollTo==='number'?scrollTo:detached.scrollY,copy=pop().cloneNode(true),sources=pop().querySelectorAll('[onclick],[oninput],[onkeydown]');
    copy.className='demo-pop side web dp-window';copy.removeAttribute('style');
    copy.querySelectorAll('[onclick],[oninput],[onkeydown]').forEach((el,i)=>{
      el.dataset.dpSource=i;
      [...el.attributes].filter(a=>a.name.startsWith('on')).forEach(a=>el.removeAttribute(a.name));
    });
    const back=copy.querySelector('.dp-detach');back.textContent='返回页面';back.title='返回原页面查看说明';
    copy.querySelector('.dp-close').title='关闭独立窗口并返回页面';
    d.body.replaceChildren(d.adoptNode(copy));detached.document.title='演示说明 · '+pop().querySelector('.dt').textContent.replace('📋 ','');
    detached.dpSources=sources;
    if(focusId){const el=d.getElementById(focusId);if(el){el.focus({preventScroll:true});if(start!==null)el.setSelectionRange(start,end)}}
    detached.scrollTo(0,y);
    if(reveal){const mark=d.querySelector('mark.cur');if(mark){const hd=d.querySelector('.dp-hd');detached.scrollTo(0,Math.max(0,mark.getBoundingClientRect().top+detached.scrollY-hd.offsetHeight-40))}}
    floating.scroll=detached.scrollY;
  }
  function returnWindow(){
    if(!detached)return;
    const w=detached;floating.scroll=w.closed?floating.scroll:w.scrollY;detached=null;
    pop().classList.remove('dp-detached');layout();pop().scrollTop=floating.mini?0:floating.scroll;
    if(!w.closed)w.close();
  }
  window.dpDetach=function(){
    if(detached&&!detached.closed){detached.focus();return}
    const w=window.open('','demo-notes-'+location.pathname,'popup,width=460,height=760,resizable=yes,scrollbars=yes');
    if(!w){pop().querySelector('.dp-notice').textContent='请允许弹出窗口后，再点击「独立打开」。';return}
    detached=w;floating.scroll=pop().scrollTop;
    const d=w.document;
    d.open();d.write('<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>演示说明</title></head><body></body></html>');d.close();
    const css=d.createElement('link');css.rel='stylesheet';css.href=new URL('assets/demo-panel.css',document.baseURI).href;d.head.appendChild(css);
    const style=d.createElement('style');style.textContent='body{margin:0;background:#fffbf0;font-family:-apple-system,"PingFang SC","Microsoft YaHei",sans-serif}*{box-sizing:border-box}';d.head.appendChild(style);
    d.addEventListener('click',e=>{
      const el=e.target.closest('[data-dp-source]');if(!el)return;
      if(el.classList.contains('dp-detach')||el.classList.contains('dp-close')){returnWindow();return}
      const source=w.dpSources[+el.dataset.dpSource];if(source&&source.hasAttribute('onclick')){source.click();setTimeout(syncWindow,0)}
    });
    d.addEventListener('input',e=>{const source=w.dpSources[+e.target.dataset.dpSource];if(source){source.value=e.target.value;source.dispatchEvent(new Event('input',{bubbles:true}))}});
    d.addEventListener('keydown',e=>{if(e.target.id==='dp-q'&&e.key==='Enter'){e.preventDefault();dpKey(e)}else if(e.key==='Escape')returnWindow()});
    w.addEventListener('scroll',()=>{floating.scroll=w.scrollY});
    w.addEventListener('pagehide',()=>{if(detached===w)returnWindow()});
    const saved=floating.scroll;
    css.addEventListener('load',()=>{if(detached===w)syncWindow(false,saved)},{once:true});
    syncWindow(false,saved);pop().classList.add('dp-detached');w.focus();
  };

  /* 四端共用：本页演示操作（按钮与开关）中，文字带「已隐藏」「站内」「后续阶段」的统一排到其他入口下方，其余保持原顺序；
     解析出的条目拼回去与原文不一致时（出现未识别的写法）原样返回，不丢入口 */
  window.demoActsSink=function(html){
    html=String(html||'');
    const items=html.match(/<button\b[^>]*>[\s\S]*?<\/button>|<div class="sw-row"[^>]*>[\s\S]*?<\/span><\/div>/g)||[];
    if(items.join('')!==html)return html;
    const deep=s=>/已隐藏|站内|后续阶段/.test(s.replace(/<[^>]+>/g,''));
    return items.filter(s=>!deep(s)).concat(items.filter(deep)).join('');
  };
  /* o：{key, t 标题, d 正文, acts 本页演示操作 HTML, gen 通用入口 HTML, audit 顶部告警 HTML} */
  window.demoPanelRender=function(o){
    const p=pop(),same=o.key===key,st=isWeb()&&(!p.classList.contains('show')||detached||floating.mini)?floating.scroll:p.scrollTop;
    if(!same){key=o.key;q='';open={};all=false;actsAll=false}
    secs=parse(o.d||'');
    const nSec=secs.filter(s=>s.h).length;
    p.innerHTML=(o.audit||'')
      +'<div class="dp-hd"><div class="dp-tr"><div class="dt"'+(isWeb()?' title="拖动标题可移动说明面板"':'')+'>📋 '+o.t+'</div>'
      +(isWeb()?'<div class="dp-tools"><button class="dp-tool dp-detach" title="独立打开演示说明" onclick="dpDetach()">独立打开</button><button class="dp-tool dp-min" title="'+(floating.mini?'展开演示说明':'收起为小标签')+'" aria-label="'+(floating.mini?'展开演示说明':'收起为小标签')+'" onclick="dpMinimize()">'+(floating.mini?'展开':'—')+'</button><button class="dp-tool dp-close" title="关闭演示说明" aria-label="关闭演示说明" onclick="closeDemo(1)">✕</button></div>':'<span class="dp-x" title="收起演示说明" onclick="closeDemo(1)">✕</span>')+'</div>'
      +(isWeb()?'<div class="dp-notice" role="status"></div>':'')
      +(o.d?'<div class="dp-q"><input id="dp-q" type="search" placeholder="搜索本页说明" value="'+esc(q)+'" oninput="dpSearch(this.value)" onkeydown="dpKey(event)"><span id="dp-qn"></span></div>':'')
      +'</div>'
      +(o.acts?'<div class="dp-lb">演示操作</div><div class="dp-acts">'+o.acts+'</div>':'')
      +(o.d?'<div class="dp-lb">说明'+(nSec>1?'<span id="dp-all" onclick="dpAll()"></span>':'')+'</div><div class="dp-body" id="dp-body"></div>':'')
      +'<div class="dp-gen">'+(o.gen||'')+'</div>';
    /* 演示操作超过 ACTS_MAX 个时只显示前几个，其余收进「更多」 */
    const ac=p.querySelector('.dp-acts');
    if(ac&&ac.children.length>ACTS_MAX){
      ac.classList.toggle('fold',!actsAll);
      ac.insertAdjacentHTML('beforeend','<span class="dp-more" onclick="dpActs()">'+(actsAll?'收起':'更多 '+(ac.children.length-ACTS_MAX)+' 项')+'</span>');
    }
    body();
    if(same)p.scrollTop=st;
    if(isWeb())floating.scroll=same?st:0;
    syncWindow(false,same?st:0);
    if(p.classList.contains('show'))requestAnimationFrame(layout);
  };

  /* 侧栏 / 浮层切换：原型保持原位不动，手机框右侧空白放得下 SIDE_MIN 宽的侧栏时用侧栏（挂到 body 下，不受手机框裁切与缩放），
     宽度取右侧空白（最多 SIDE_MAX）；放不下时放回手机内做浮层 */
  /* Web 端固定悬浮；拖动、缩放与收起都不改变原型布局。 */
  function layout(){
    const p=pop(),ph=document.querySelector('.phone'),fab=document.getElementById('demo-fab');
    if(!p||!fab)return;
    if(!ph){
      if(p.parentNode!==document.body)document.body.appendChild(p);
      p.classList.add('side','web');p.classList.toggle('dp-mini',floating.mini);
      p.setAttribute('role','dialog');p.setAttribute('aria-label','演示说明');p.setAttribute('aria-modal','false');
      const width=Math.min(floating.mini?260:400,innerWidth-24);
      const x=Math.max(12,Math.min(floating.x===null?innerWidth-width-16:floating.x,innerWidth-width-12));
      const y=Math.max(12,Math.min(floating.y,innerHeight-(floating.mini?52:160)));
      Object.assign(p.style,{left:x+'px',right:'auto',top:y+'px',maxHeight:Math.max(40,innerHeight-y-12)+'px'});
      return;
    }
    const r=ph.getBoundingClientRect(),avail=innerWidth-r.right-GAP-16;
    if(avail>=SIDE_MIN){
      if(p.parentNode!==document.body)document.body.appendChild(p);
      p.classList.add('side');
      Object.assign(p.style,{left:(r.right+GAP)+'px',top:Math.max(16,r.top)+'px',width:Math.min(SIDE_MAX,avail)+'px',maxHeight:Math.min(r.height,innerHeight-32)+'px'});
    }else{
      if(p.parentNode!==fab)fab.appendChild(p);
      p.classList.remove('side');p.removeAttribute('style');
    }
  }
  window.toggleDemo=function(){
    const p=pop();
    if(detached&&!detached.closed){detached.focus();return}
    if(isWeb()&&floating.mini&&p.classList.contains('show')){dpMinimize();return}
    if(p.classList.contains('show')){closeDemo(1);return}
    if(isWeb()){floating.mini=false;p.classList.remove('dp-mini')}
    renderDemo();p.classList.add('show');layout();p.scrollTop=isWeb()?floating.scroll:0;
  };
  /* force：点 chip / ✕ 时真正收起；其余调用（页面切换、演示操作按钮）在侧栏模式下改为按当前页面重绘，不收起 */
  window.closeDemo=function(force){
    const p=pop();if(!p||!p.classList.contains('show'))return;
    if(force||!isSide()){
      if(isWeb()){if(detached)returnWindow();floating.scroll=floating.mini?floating.scroll:p.scrollTop}
      p.classList.remove('show');return;
    }
    clearTimeout(rt);rt=setTimeout(()=>{if(p.classList.contains('show'))renderDemo()},0);
  };
  addEventListener('resize',()=>requestAnimationFrame(()=>{if(pop()&&pop().classList.contains('show'))layout()}));
  document.addEventListener('pointerdown',e=>{
    const p=pop();if(!p||!p.classList.contains('web')||!e.target.closest('#demo-pop .dp-tr')||e.target.closest('button')||e.button!==0)return;
    const r=p.getBoundingClientRect();drag={id:e.pointerId,dx:e.clientX-r.left,dy:e.clientY-r.top};
    p.setPointerCapture(e.pointerId);p.classList.add('dp-dragging');e.preventDefault();
  });
  document.addEventListener('pointermove',e=>{
    if(!drag||e.pointerId!==drag.id)return;
    floating.x=e.clientX-drag.dx;floating.y=e.clientY-drag.dy;layout();
  });
  function endDrag(){drag=null;const p=pop();if(p)p.classList.remove('dp-dragging')}
  document.addEventListener('pointerup',endDrag);document.addEventListener('pointercancel',endDrag);
  /* 清除分离标记，浏览器返回缓存中的原页面时也能直接恢复本页面板。 */
  addEventListener('pagehide',returnWindow);
  /* 浮层模式下点面板以外区域收起；侧栏模式常驻。捕获阶段监听，不受页面元素 stopPropagation 影响 */
  document.addEventListener('click',e=>{
    const p=pop();
    if(p&&p.classList.contains('show')&&!isSide()&&!e.target.closest('#demo-fab')&&!e.target.closest('#demo-pop'))p.classList.remove('show');
  },true);
  /* Web 端按 Esc 时由各页按层级调用 closeDemo(1)；这里不另行监听，避免与弹窗 / 抽屉的 Esc 关闭抢先后 */
})();
