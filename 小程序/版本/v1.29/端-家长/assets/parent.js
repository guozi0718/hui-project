/* -------- iOS 状态栏图标与微信胶囊（按参考图 1:1 绘制） -------- */
(function(){
  const sig='<svg width="20" height="13" viewBox="0 0 20 13" fill="none"><path d="M1.65039 7.58008C1.95012 7.58014 2.21992 7.64999 2.46973 7.7998C2.71973 7.9498 2.92031 8.15039 3.07031 8.40039C3.22009 8.6502 3.29 8.92001 3.29004 9.21973V10.6904C3.28997 10.9901 3.22011 11.26 3.07031 11.5098C2.92031 11.7598 2.71973 11.9604 2.46973 12.1104C2.21993 12.2601 1.95009 12.33 1.65039 12.3301C1.35054 12.3301 1.07022 12.2602 0.820312 12.1104C0.570312 11.9604 0.369727 11.7598 0.219727 11.5098C0.0699196 11.26 6.65565e-05 10.9901 0 10.6904V9.21973C4.28388e-05 8.92 0.0699405 8.6502 0.219727 8.40039C0.369727 8.15039 0.570312 7.9498 0.820312 7.7998C1.07023 7.64994 1.35052 7.58008 1.65039 7.58008ZM7 5.36035C7.3 5.36035 7.57031 5.43008 7.82031 5.58008C8.0701 5.73001 8.26999 5.9299 8.41992 6.17969C8.56992 6.42969 8.63965 6.7 8.63965 7V10.6904C8.63958 10.9902 8.56979 11.2599 8.41992 11.5098C8.26994 11.7597 8.07028 11.9604 7.82031 12.1104C7.57031 12.2604 7.3 12.3301 7 12.3301C6.70004 12.3301 6.4199 12.2603 6.16992 12.1104C5.91992 11.9604 5.72031 11.7598 5.57031 11.5098C5.4204 11.2599 5.34968 10.9803 5.34961 10.6904V7C5.34961 6.7 5.42031 6.42969 5.57031 6.17969C5.72027 5.92989 5.92009 5.73 6.16992 5.58008C6.41992 5.43008 6.7 5.36035 7 5.36035ZM17.6904 0C17.9901 6.55189e-05 18.26 0.0699202 18.5098 0.219727C18.7598 0.369727 18.9604 0.570312 19.1104 0.820312C19.2601 1.07011 19.33 1.33994 19.3301 1.63965V10.6904C19.33 10.9901 19.2601 11.26 19.1104 11.5098C18.9604 11.7598 18.7598 11.9604 18.5098 12.1104C18.26 12.2601 17.9901 12.33 17.6904 12.3301C17.3906 12.3301 17.1102 12.2602 16.8604 12.1104C16.6104 11.9604 16.4098 11.7598 16.2598 11.5098C16.11 11.26 16.0401 10.9901 16.04 10.6904V1.63965C16.0401 1.33992 16.11 1.07012 16.2598 0.820312C16.4098 0.570312 16.6104 0.369727 16.8604 0.219727C17.1103 0.0698807 17.3906 0 17.6904 0ZM12.3496 2.79004C12.6495 2.79004 12.92 2.85984 13.1699 3.00977C13.4199 3.15977 13.6195 3.36035 13.7695 3.61035C13.9195 3.86025 13.9902 4.12983 13.9902 4.42969V10.6797C13.9902 10.9797 13.9195 11.25 13.7695 11.5C13.6196 11.7499 13.4198 11.9497 13.1699 12.0996C12.9199 12.2496 12.6496 12.3203 12.3496 12.3203C12.0498 12.3203 11.7694 12.2603 11.5195 12.1104C11.2696 11.9704 11.0699 11.7697 10.9199 11.5098C10.77 11.2598 10.7002 10.9796 10.7002 10.6797V4.42969C10.7002 4.12993 10.7701 3.86018 10.9199 3.61035C11.0699 3.36044 11.2696 3.15975 11.5195 3.00977C11.7694 2.85983 12.0498 2.7901 12.3496 2.79004Z" fill="currentColor"/></svg>';
  const wifi='<svg width="17" height="13" viewBox="0 0 17 13" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.358555 4.76929C0.777728 5.20063 1.43114 5.12668 1.96127 4.65838C3.71194 3.08094 5.8941 2.26757 8.33517 2.26757C10.7762 2.26757 12.9707 3.10559 14.7091 4.65838C15.2269 5.13901 15.8803 5.1883 16.3118 4.76929C16.7433 4.32564 16.8049 3.66016 16.3611 3.19185C14.5118 1.30632 11.4913 0 8.33517 0C5.17904 0 2.1462 1.31864 0.309241 3.20418C-0.134589 3.66016 -0.085275 4.32564 0.358555 4.78162V4.76929ZM3.40372 7.86256C3.88454 8.33086 4.50097 8.28156 5.04343 7.83791C5.93109 7.13546 7.11463 6.65483 8.33517 6.66715C9.54337 6.66715 10.7269 7.13546 11.6269 7.85023C12.1694 8.29389 12.8105 8.31854 13.2789 7.85023C13.7351 7.38193 13.8091 6.66715 13.3283 6.2235C12.1324 5.15133 10.3324 4.39958 8.3475 4.39958C6.36259 4.39958 4.55028 5.15133 3.36674 6.2235C2.94756 6.61786 2.86126 7.29566 3.41605 7.86256H3.40372ZM7.52148 11.954C8.05161 12.4593 8.6064 12.4593 9.13653 11.954L10.1351 10.9928C10.6653 10.4752 10.7762 9.82203 10.1721 9.37838C9.66666 9.02099 9.02557 8.78684 8.33517 8.78684C7.64477 8.78684 6.99135 9.02099 6.4982 9.3907C5.8941 9.82203 6.01739 10.4875 6.54752 10.9928L7.53381 11.954H7.52148Z" fill="currentColor"/></svg>';
  const bat='<svg width="26" height="13" viewBox="0 0 34 17"><rect x="1" y="1.2" width="27.5" height="14.6" rx="4.8" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".45"/><rect x="3.6" y="3.8" width="17" height="9.4" rx="2.4" fill="currentColor"/><path d="M30.6 5.7 a3.3 3.3 0 0 1 0 5.6 z" fill="currentColor" opacity=".45"/></svg>';
  document.querySelectorAll('.statusbar .right').forEach(e=>{e.innerHTML=sig+wifi+bat;e.style.cssText+=';display:flex;align-items:center;gap:6px'});
  document.querySelectorAll('.capsule').forEach(e=>{e.innerHTML='<span class="half"><span class="cap-dots"><i></i><i></i><i></i></span></span><span class="half"><span class="cap-ring"></span></span>'});
  /* Tab 图标（线性 SVG，未选中为描边；三个 Tab 的选中态均用实心图形对齐设计稿） */
  const ic=p=>'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';
  const tabs={
    'sc-home':'<path d="M10.4 19.7H6.6a1.8 1.8 0 0 1-1.8-1.8v-7L12 4.8l7.2 6.1v7a1.8 1.8 0 0 1-1.8 1.8h-3.8v-3.3a1.6 1.6 0 0 0-3.2 0z"/>',
    'sc-msgs':'<path d="M20 11.7c0 3.8-3.6 6.9-8 6.9-.9 0-1.8-.1-2.6-.4l-4.2 1.2 1-3c-1.4-1.2-2.2-2.9-2.2-4.7 0-3.8 3.6-6.9 8-6.9s8 3.1 8 6.9z"/><path d="M8.6 11.7h.01M12 11.7h.01M15.4 11.7h.01"/>',
    'sc-me':'<circle cx="12" cy="8.3" r="3.6"/><path d="M5.2 19.6c1.5-3.1 3.9-4.7 6.8-4.7s5.3 1.6 6.8 4.7"/>'
  };
  const tabsOn={
    'sc-home':'<path d="M4.2 10.6 12 4l7.8 6.6v7.5a1.9 1.9 0 0 1-1.9 1.9H6.1a1.9 1.9 0 0 1-1.9-1.9z" fill="currentColor" stroke="none"/><path d="M10.3 20v-4.3a1.7 1.7 0 0 1 3.4 0V20z" fill="#fff" stroke="none"/>',
    'sc-msgs':'<path d="M20 11.7c0 3.8-3.6 6.9-8 6.9-.9 0-1.8-.1-2.6-.4l-4.2 1.2 1-3c-1.4-1.2-2.2-2.9-2.2-4.7 0-3.8 3.6-6.9 8-6.9s8 3.1 8 6.9z" fill="currentColor" stroke="none"/><circle cx="8.6" cy="11.7" r="1" fill="#fff" stroke="none"/><circle cx="12" cy="11.7" r="1" fill="#fff" stroke="none"/><circle cx="15.4" cy="11.7" r="1" fill="#fff" stroke="none"/>',
    'sc-me':'<circle cx="12" cy="7.9" r="3.8" fill="currentColor" stroke="none"/><path d="M12 13.5c3.8 0 6.5 2.2 7 5.3.1.7-.4 1.2-1.1 1.2H6.1c-.7 0-1.2-.5-1.1-1.2.5-3.1 3.2-5.3 7-5.3z" fill="currentColor" stroke="none"/>'
  };
  document.querySelectorAll('.tab').forEach(t=>{const p=(t.classList.contains('on')&&tabsOn[t.dataset.t])||tabs[t.dataset.t];if(p)t.querySelector('.ti').innerHTML=ic(p)});
  /* 校徽卡片二维码（真实编码：https://olivebird.netlify.app/ssb/parent） */
  const qr='<svg viewBox="0 0 31 31" shape-rendering="crispEdges"><rect width="31" height="31" fill="#fff"/><path d="M1 1h7v1h-7zM9 1h1v1h-1zM11 1h1v1h-1zM13 1h1v1h-1zM15 1h1v1h-1zM17 1h5v1h-5zM23 1h7v1h-7zM1 2h1v1h-1zM7 2h1v1h-1zM10 2h6v1h-6zM17 2h2v1h-2zM21 2h1v1h-1zM23 2h1v1h-1zM29 2h1v1h-1zM1 3h1v1h-1zM3 3h3v1h-3zM7 3h1v1h-1zM9 3h3v1h-3zM14 3h1v1h-1zM17 3h1v1h-1zM19 3h3v1h-3zM23 3h1v1h-1zM25 3h3v1h-3zM29 3h1v1h-1zM1 4h1v1h-1zM3 4h3v1h-3zM7 4h1v1h-1zM9 4h3v1h-3zM13 4h4v1h-4zM18 4h1v1h-1zM20 4h1v1h-1zM23 4h1v1h-1zM25 4h3v1h-3zM29 4h1v1h-1zM1 5h1v1h-1zM3 5h3v1h-3zM7 5h1v1h-1zM9 5h1v1h-1zM12 5h2v1h-2zM15 5h4v1h-4zM20 5h1v1h-1zM23 5h1v1h-1zM25 5h3v1h-3zM29 5h1v1h-1zM1 6h1v1h-1zM7 6h1v1h-1zM11 6h2v1h-2zM14 6h2v1h-2zM17 6h4v1h-4zM23 6h1v1h-1zM29 6h1v1h-1zM1 7h7v1h-7zM9 7h1v1h-1zM11 7h1v1h-1zM13 7h1v1h-1zM15 7h1v1h-1zM17 7h1v1h-1zM19 7h1v1h-1zM21 7h1v1h-1zM23 7h7v1h-7zM11 8h1v1h-1zM13 8h1v1h-1zM18 8h1v1h-1zM1 9h4v1h-4zM7 9h1v1h-1zM9 9h1v1h-1zM11 9h3v1h-3zM15 9h1v1h-1zM18 9h5v1h-5zM25 9h3v1h-3zM29 9h1v1h-1zM1 10h3v1h-3zM5 10h1v1h-1zM8 10h1v1h-1zM11 10h1v1h-1zM13 10h2v1h-2zM17 10h2v1h-2zM20 10h6v1h-6zM29 10h1v1h-1zM1 11h1v1h-1zM4 11h1v1h-1zM7 11h8v1h-8zM17 11h2v1h-2zM22 11h1v1h-1zM24 11h2v1h-2zM27 11h2v1h-2zM2 12h2v1h-2zM5 12h1v1h-1zM10 12h2v1h-2zM14 12h1v1h-1zM16 12h1v1h-1zM19 12h6v1h-6zM29 12h1v1h-1zM2 13h3v1h-3zM7 13h1v1h-1zM9 13h3v1h-3zM13 13h3v1h-3zM18 13h2v1h-2zM24 13h1v1h-1zM26 13h2v1h-2zM2 14h2v1h-2zM5 14h1v1h-1zM8 14h2v1h-2zM12 14h2v1h-2zM16 14h1v1h-1zM20 14h1v1h-1zM23 14h1v1h-1zM27 14h3v1h-3zM1 15h2v1h-2zM4 15h1v1h-1zM6 15h2v1h-2zM9 15h1v1h-1zM12 15h1v1h-1zM14 15h2v1h-2zM17 15h4v1h-4zM23 15h2v1h-2zM27 15h3v1h-3zM1 16h3v1h-3zM5 16h2v1h-2zM9 16h2v1h-2zM12 16h1v1h-1zM19 16h5v1h-5zM28 16h1v1h-1zM2 17h4v1h-4zM7 17h5v1h-5zM13 17h1v1h-1zM15 17h1v1h-1zM19 17h4v1h-4zM24 17h3v1h-3zM28 17h1v1h-1zM2 18h1v1h-1zM6 18h1v1h-1zM16 18h1v1h-1zM21 18h1v1h-1zM24 18h1v1h-1zM26 18h3v1h-3zM1 19h1v1h-1zM4 19h4v1h-4zM11 19h1v1h-1zM14 19h4v1h-4zM19 19h1v1h-1zM22 19h2v1h-2zM25 19h1v1h-1zM27 19h1v1h-1zM3 20h1v1h-1zM6 20h1v1h-1zM8 20h1v1h-1zM10 20h1v1h-1zM12 20h1v1h-1zM14 20h3v1h-3zM18 20h3v1h-3zM22 20h1v1h-1zM25 20h1v1h-1zM27 20h1v1h-1zM2 21h1v1h-1zM4 21h4v1h-4zM9 21h1v1h-1zM14 21h2v1h-2zM18 21h2v1h-2zM21 21h7v1h-7zM9 22h3v1h-3zM17 22h1v1h-1zM21 22h1v1h-1zM25 22h5v1h-5zM1 23h7v1h-7zM11 23h1v1h-1zM15 23h1v1h-1zM17 23h2v1h-2zM20 23h2v1h-2zM23 23h1v1h-1zM25 23h2v1h-2zM28 23h1v1h-1zM1 24h1v1h-1zM7 24h1v1h-1zM12 24h6v1h-6zM20 24h2v1h-2zM25 24h2v1h-2zM29 24h1v1h-1zM1 25h1v1h-1zM3 25h3v1h-3zM7 25h1v1h-1zM10 25h3v1h-3zM16 25h3v1h-3zM21 25h5v1h-5zM27 25h3v1h-3zM1 26h1v1h-1zM3 26h3v1h-3zM7 26h1v1h-1zM9 26h2v1h-2zM12 26h1v1h-1zM14 26h1v1h-1zM16 26h4v1h-4zM21 26h2v1h-2zM24 26h3v1h-3zM29 26h1v1h-1zM1 27h1v1h-1zM3 27h3v1h-3zM7 27h1v1h-1zM9 27h3v1h-3zM13 27h1v1h-1zM15 27h1v1h-1zM22 27h1v1h-1zM24 27h1v1h-1zM27 27h1v1h-1zM29 27h1v1h-1zM1 28h1v1h-1zM7 28h1v1h-1zM9 28h3v1h-3zM13 28h2v1h-2zM17 28h1v1h-1zM19 28h1v1h-1zM21 28h2v1h-2zM24 28h1v1h-1zM26 28h1v1h-1zM28 28h1v1h-1zM1 29h7v1h-7zM9 29h1v1h-1zM12 29h1v1h-1zM16 29h1v1h-1zM20 29h2v1h-2zM23 29h1v1h-1zM25 29h1v1h-1zM28 29h1v1h-1z" fill="#1B2431"/></svg>';
  document.querySelectorAll('.id-badge .qr').forEach(e=>e.innerHTML=qr);
  /* 接收消息提醒设置页：学校服务号二维码（示意图形，非真实编码） */
  const qrDemo='<svg viewBox="0 0 33 33"><rect width="33" height="33" fill="#fff"/><g fill="#1B2431"><rect x="2" y="2" width="7" height="7"/><rect x="24" y="2" width="7" height="7"/><rect x="2" y="24" width="7" height="7"/><path d="M11 2h2v2h-2zM15 2h2v2h-2zM19 3h2v2h-2zM12 5h2v2h-2zM16 5h3v2h-3zM20 6h2v2h-2zM2 11h2v2h-2zM5 12h2v2h-2zM8 10h2v3h-2zM11 11h3v2h-3zM16 10h2v2h-2zM19 11h2v3h-2zM23 10h2v2h-2zM27 11h2v2h-2zM3 15h2v2h-2zM7 16h2v2h-2zM11 15h2v3h-2zM15 15h3v2h-3zM20 16h2v2h-2zM24 15h2v2h-2zM28 16h2v2h-2zM2 19h2v2h-2zM6 20h3v2h-3zM12 19h2v2h-2zM16 20h2v2h-2zM21 19h2v2h-2zM26 20h2v2h-2zM29 19h2v2h-2zM11 23h2v2h-2zM14 24h2v2h-2zM18 23h3v2h-3zM24 24h2v2h-2zM28 23h2v2h-2zM12 27h2v2h-2zM16 28h2v2h-2zM20 27h2v2h-2zM24 28h3v2h-3zM29 27h2v2h-2z"/></g><g fill="#fff"><rect x="3.5" y="3.5" width="4" height="4"/><rect x="25.5" y="3.5" width="4" height="4"/><rect x="3.5" y="25.5" width="4" height="4"/></g><g fill="#1B2431"><rect x="4.5" y="4.5" width="2" height="2"/><rect x="26.5" y="4.5" width="2" height="2"/><rect x="4.5" y="26.5" width="2" height="2"/></g></svg>';
  document.querySelectorAll('.mset-qr').forEach(e=>e.innerHTML=qrDemo);
  window.QR_SVG=qr; /* 供动态构建的半屏内容（支付弹层缩略图）复用 */
})();
/* -------- 接收消息提醒设置：首页提醒条「去设置」→ 居中弹窗 → 设置指引页 -------- */
function msgSetDialog(){document.getElementById('msgset-dlg').classList.add('show')}
function msgSetClose(){document.getElementById('msgset-dlg').classList.remove('show')}
/* 弹窗内勾选「我已置顶公众号和关闭消息免打扰」：视为完成，稍候关闭弹窗并隐藏提醒条 */
function msgSetDone(){
  const r=document.getElementById('msgset-ring');
  r.classList.add('on');r.textContent='✓';
  setTimeout(()=>{msgSetClose();msgSetHideNotice()},380);
}
/* 设置指引页底部「我已完成设置」：隐藏提醒条并回首页 */
function msgSetFinish(){msgSetHideNotice();go('sc-home')}
function msgSetHideNotice(){
  document.getElementById('home-notice').style.display='none';
  toast('设置完成，将正常提醒');
}
/* -------- 注册/登录（演示）：扫码链路进入的登录按码类型分流落点——班级注册码（bind）续接绑定申请（冷启动无名册），注册办理码（apply）直达校徽办理；常规登录走名册匹配 -------- */
let regMode=''; /* ''=常规登录 | bind=扫班级注册码 | apply=扫注册办理码 */
/* 协议确认半屏（显式同意）：任一登录动作先弹协议确认，「同意并登录」后续接原登录流程；主动点击即明示同意，替代页面勾选框方案 */
let agreeNext=null;
function agreeGate(fn){agreeNext=fn;openSheet('agree')}
function agreeOk(){closeSheet();const f=agreeNext;agreeNext=null;if(f)setTimeout(f,260)}
/* 协议阅读页：登录页底部链接 / 协议确认半屏 / 「我的」页脚共用；从确认半屏进入的，返回时自动重新拉起半屏续接登录（agreeNext 保留） */
let legalFrom='sc-login',legalReopenAgree=false;
function openLegal(k,fromAgree){
  legalFrom=curScreen;legalReopenAgree=!!fromAgree;
  if(fromAgree)closeSheet();
  const d=LEGAL_DOCS[k];
  document.getElementById('legal-title').textContent=d.t;
  document.getElementById('legal-body').innerHTML=d.h;
  go('sc-legal');
}
function legalBack(){
  const r=legalReopenAgree;legalReopenAgree=false;
  go(legalFrom);
  if(r)setTimeout(()=>openSheet('agree'),260);
}
/* 刷新后 hash 直达 #sc-legal 的兜底：默认展示用户协议，避免空白 */
document.getElementById('legal-body').innerHTML=LEGAL_DOCS.ua.h;
/* 「手机号快捷登录」拉起微信手机号授权半屏；授权号码分流两个人设——6688 名册命中进首次绑定，9900 未命中落未匹配承接页；
   家人邀请链路（fam）人设为奶奶 139****5566，拉起专用授权半屏保证号码与确认页「与当前登录手机号一致」口径一致 */
function wxLogin(){agreeGate(()=>openSheet(regMode==='fam'?'wxauthfam':'wxauth'))}
/* 登录页「暂不登录」：回未登录首页（游客态）继续浏览；同时清掉扫码链路残留的分流标记，避免此后常规登录被误导流 */
function skipLogin(){regMode='';go('sc-visitor')}
/* 登录页演示说明「直达首页」：跳过登录动作直接进入已登录首页（乐乐妈妈账号、林晓乐）；同样清掉扫码链路残留的分流标记与新用户人设位 */
function loginHome(){regMode='';regApplyNew=false;go('sc-home');demoToast('已跳过登录，直达已登录首页（演示）')}
function wxAuthPick(n){
  closeSheet();
  demoToast('已通过微信授权获取手机号 '+(n==='5566'?'139':'138')+'****'+n+'（演示）');
  const m=regMode;regMode='';
  setTimeout(()=>{
    if(m==='apply'){if(regApplyNew){regApplyNew=false;regApplyEnterNew()}else regApplyEnter()}
    else if(m==='bind')cregEnter();
    else if(m==='fam')go('sc-faminvite');
    else{if(n==='6688')authVerifiedMode(false);go(n==='6688'?'sc-auth':'sc-nochild')}
  },700);
}
/* -------- 扫码注册链路：班级注册码 / 邀请注册卡片 / 家人邀请卡片走 识别二维码 → 服务号主页关注 → 欢迎语点注册小程序卡片 → 登录；注册办理流程已调整——注册办理码识别后、办理卡片点击后均直接打开小程序登录页，不经过落地页 / 服务号主页 / 欢迎语 -------- */
let regFrom='sc-regposter'; /* 链路入口页（海报 / 注册落地页），供中间页返回键回溯 */
function regScan(m){
  regMode=m||'bind';regFrom=curScreen;
  if(regMode==='apply'){demoToast('已识别注册办理码，正在打开「智小徽」家长小程序（演示）');setTimeout(()=>go('sc-login'),600);return}
  demoToast('已识别注册二维码（演示）');setTimeout(()=>go('sc-regfollow'),600)
}
function regFollow(){demoToast('已关注「智小徽」服务号（演示）');setTimeout(()=>go('sc-regwx'),600)}
function regCardOpen(){if(!regMode)regMode='bind';demoToast('正在打开「智小徽」家长小程序（演示）');setTimeout(()=>go('sc-login'),600)}
function regBack(){go(regFrom)}
/* 邀请注册 / 家人邀请卡片：分享到微信的小程序卡片，点卡片打开对应注册落地页（家人邀请卡片登录后直达邀请确认页）；校徽办理卡片流程已调整——点卡片直接打开小程序登录页（不经过落地页与服务号环节），登录后直达校徽办理 */
function regInviteOpen(m){
  demoToast('正在打开「智小徽」家长小程序（演示）');
  if(m==='apply'){regMode='apply';setTimeout(()=>go('sc-login'),600);return}
  setTimeout(()=>go(m==='fam'?'sc-reglanding3':'sc-reglanding'),600)
}
/* 注册办理码 · 新用户变体（名下无任何孩子、名册亦未命中的人设）：登录后办理页选择器为空态、仅「添加孩子」入口——
   经添加孩子提交人工申请生成「审核中」chip 后即可乐观提交办理单并正常支付（提交结果页第二按钮为「完成」口径，见 sc-payok 说明）；
   变体经登录页演示说明按钮从海报开始（regApplyNewStart 置位，登录动作消费）；
   经首页宫格等常规入口回到办理页时由 go() 恢复乐乐妈妈账号形态（演示身份切换；新用户会话中添加的审核中 chip 随之一并可见，刷新恢复） */
let regApplyNew=false,apNewUser=false;
function regApplyNewStart(){
  regApplyNew=true;
  go('sc-regposter2');
  demoToast('新用户人设已就位：登录后名下无任何孩子（演示）');
}
function regApplyEnterNew(){
  /* 先就位办理页空态（添加孩子的返回键与提交后的回流落点都是它），再直达「添加孩子」表单——
     零孩子时办理无从谈起，落空态页让家长自己找入口是多余的一步（本次迭代改定） */
  go('sc-apply');applyTab('form');
  const bk=document.querySelector('#sc-apply .back');if(bk)bk.style.visibility='hidden';
  apNewUser=true;
  document.querySelectorAll('#ap-kids .fchip').forEach(c=>{c.style.display='none';c.classList.remove('on')});
  apKid=null;
  document.getElementById('ap-nm').value='';
  document.getElementById('ap-cls').value='';
  document.getElementById('ap-nm-note').style.display='none';
  goAddChild('apply');
  toast('登录成功，请先添加孩子');
}
function apNewUserOff(){
  if(!apNewUser)return;
  apNewUser=false;
  document.querySelectorAll('#ap-kids .fchip').forEach(c=>c.style.display='');
  const fc=document.querySelector('#ap-kids .fchip');
  if(fc)applyKid(fc,'yang');
}
/* 注册办理码：登录后直达校徽办理页并自动选中名册命中的「待认领」孩子（chip 已常驻选择器，本函数仅模拟该入口的登录落点）；
   提交办理时先弹认领半屏（与孩子管理页同一验证），认领成功续接提交；认领已锁定时提交办理被拦截
   （chip 仅展示姓名、不附状态后缀文案，锁定态经 claimFails 在提交时拦截） */
function regApplyEnter(){
  /* 扫码直达=导航栈栈底页：无上一页可回，隐藏返回键（微信原生导航对栈底页同此表现），离开出路为右上角胶囊；
     visibility 隐藏保持标题排版不动；此后经常规入口再进入本页时由 go() 恢复 */
  const noBack=()=>{const bk=document.querySelector('#sc-apply .back');if(bk)bk.style.visibility='hidden'};
  const chip=document.getElementById('ap-kid-unconf');
  if(!chip||!AP_KIDS.unconf||!AP_KIDS.unconf.unconfirmed){
    go('sc-apply');applyTab('form');noBack();
    toast(chip?'王一明已绑定，可办理':'该记录已隐藏');
    return;
  }
  go('sc-apply');applyTab('form');noBack();
  applyKid(chip,'unconf');
  toast('登录成功，已匹配到孩子');
}
/* -------- 绑定孩子：名册仅预留手机号，关系由家长选择后方可确认绑定 -------- */
/* 首次绑定确认：填空式补全孩子姓名验证（与孩子管理页认领半屏同口径），
   统一模糊反馈 + 限频，连续 3 次未通过锁定绑定并转班主任核实（演示数据，刷新恢复） */
let authFails=0;
/* 首绑确认页双形态：默认=名册命中答题形态（林*乐，登录链路进入）；verify=班主任核实通过免答题形态
   （李雨桐——解除打码全名 + 「班主任已核实」chip，免答题仅确认监护关系、登记关系预填可改）。
   verify 形态即零孩子账号点「认领核实已通过」服务号深链的落点（深链按账号状态分流口径），
   经服务号推送示意页「零孩子账号视角」入口进入；正常登录链路进入前重置回默认形态，两形态互不残留。
   页底「这不是我的孩子」出口两形态共用（authNotMine 文案不含孩子名，反馈后同落未匹配承接页，与免答题半屏出口同链路） */
let authCardHtml=null,authVerify=false;
function authVerifiedMode(on){
  const card=document.getElementById('auth-card');
  if(authCardHtml===null)authCardHtml=card.innerHTML;
  authVerify=on;
  if(!on){card.innerHTML=authCardHtml;return}
  card.innerHTML='<div class="row">'
   +'<div class="cavat" style="width:48px;height:48px;border-radius:50%;background:url(assets/avatar-girl.png) center/cover no-repeat #FFF0F4;color:transparent;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:17px">桐</div>'
   +'<div><div style="font-size:15.5px;font-weight:600">李雨桐</div><div class="muted">市实验一小 · 2年级-2班</div></div>'
   +'<span class="chip teal" style="margin-left:auto">班主任已核实</span></div>'
   +'<div class="hr"></div>'
   +'<div class="muted" style="font-size:12px;line-height:1.7;padding:2px 0 4px">班主任已核实通过您的认领，请确认您与孩子的关系，确认后即完成绑定。</div>'
   /* 不设「孩子姓名」展示行：答题形态该行是填空验证控件，免答题形态姓名已在头部信息卡完整展示，再印一遍属纯冗余（与免答题半屏同构：信息卡 → 说明 → 关系选择） */
   +'<div class="kv" style="align-items:center"><span class="k">监护关系</span><span class="v"><select id="auth-rel"><option value="">请选择您与孩子的关系</option><option selected>妈妈</option><option>爸爸</option><option>奶奶</option><option>爷爷</option><option>外婆</option><option>外公</option><option>其他</option></select></span></div>';
}
function confirmBind(){
  if(authVerify){
    const r=document.getElementById('auth-rel').value;
    if(!r){toast('请先选择您与孩子的关系');return}
    demoToast('演示：确认绑定李雨桐（'+r+'）后进入首页——零孩子账号视角，不改动当前演示账号数据');
    return;
  }
  if(authFails>=3){pAlert('绑定已锁定','验证未通过次数过多。班主任核实后将以消息通知结果。');return}
  const nm=document.getElementById('auth-name').value.trim();
  const r=document.getElementById('auth-rel').value;
  if(!nm){toast('请补全孩子姓名');return}
  if(!r){toast('请先选择您与孩子的关系');return}
  if(nm!=='晓'){
    authFails++;
    if(authFails>=3){authBindLock();return}
    toast('信息不匹配，还可尝试 '+(3-authFails)+' 次');
    return;
  }
  go('sc-home');toast('绑定成功（'+r+'）');
}
function authBindLock(){
  const b=document.querySelector('#sc-auth .btn.pri');
  if(b){b.disabled=true;b.style.opacity='.5';b.textContent='已转交班主任核实'}
  const chip=document.querySelector('#sc-auth .chip.teal');
  if(chip){chip.className='chip amber';chip.textContent='核实中'}
  pAlert('绑定已锁定','验证未通过次数过多。已转交班主任核实，结果以消息通知您。');
}
/* -------- 孩子详情：家庭成员按孩子归属（每生上限 6 人） -------- */
/* -------- 修改我的监护关系：仅改标注不动权限，留痕并同步其他家人 -------- */
let myRel='妈妈';
function relEditSheet(){
  if(childGrad)return; /* 毕业态只读 */
  wheelSheet('修改我的关系',['妈妈','爸爸','奶奶','爷爷','外婆','外公','其他'],myRel,relEditSave);
}
function relEditSave(r){
  if(r===myRel){closeSheet();toast('关系未变更');return}
  const old=myRel;myRel=r;
  document.getElementById('rel-me').textContent=r;
  document.getElementById('fam-me-k').textContent=r;
  closeSheet();
  toast('关系已改为「'+r+'」');
}
/* -------- 家庭成员定向邀请：选孩子(可多个) + 必填对方手机号 → 仅该号注册自动加入(免审核) → 加入前可随时取消 -------- */
/* 待加入邀请可多条并行；绑定家人 + 待加入邀请合计不超过每孩 6 人上限，达上限时邀请入口拦截 */
let famInvs=[],famInvSeq=0,famBound=2;
function showSheet(h){document.getElementById('sheet').innerHTML=h;document.getElementById('mask').classList.add('show')}
/* 邀请家人为整页表单：记录来源页供返回，进入时重置为初始态（默认勾选当前孩子） */
/* -------- 家人页跟随当前孩子（口径见 sc-guardians 演示说明）：孩子信息头随 curKid 切换，
   毕业孩子（晓晴）家人只读、隐藏邀请入口；演示数据各孩子的家人集合恰好相同（妈妈本人 + 爸爸），机制上按孩子各自维护 -------- */
function goFam(){famChild(curKid);go('sc-guardians')}
function famChild(n){
  const k=kidInfo[n];
  document.getElementById('fam-av').style.backgroundImage='url('+k[3]+')';
  document.getElementById('fam-nm').textContent=n;
  document.getElementById('fam-cls').textContent=(k[4]||'市实验一小')+' · '+k[1];
  document.getElementById('fam-invite-btn').style.display=k[2]?'none':'';
  famCntRefresh();
}
/* 家人标题右侧提示：余额 = 6 − 已绑定 − 邀请中（与 inviteMember 的上限判断同口径）；已满显示「已满 6 人」，已毕业孩子（只读、无邀请入口）不显示 */
function famCntRefresh(){
  const el=document.getElementById('fam-cnt');
  if(kidInfo[curKid][2]){el.style.display='none';return}
  el.style.display='';
  const left=6-famBound-famInvs.length;
  el.textContent=left>0?'还可邀请 '+left+' 人':'已满 6 人';
}
let famInvFrom='sc-guardians';
function inviteMember(from){
  if(famBound+famInvs.length>=6){toast('家人已达 6 人上限');return}
  famInvFrom=from||'sc-guardians';
  document.getElementById('fam-phone').value='';
  document.getElementById('fam-rel').value='';
  const k1=document.getElementById('fam-kid1');k1.classList.add('navy');k1.classList.remove('gray');k1.textContent='林晓乐 ✓';
  const k2=document.getElementById('fam-kid2');k2.classList.add('gray');k2.classList.remove('navy');k2.textContent='林晓阳';
  go('sc-faminv-form');
}
function famInvBack(){go(famInvFrom)}
function famKidToggle(el,name){
  const on=el.classList.contains('navy');
  el.classList.toggle('navy',!on);el.classList.toggle('gray',on);
  el.textContent=on?name:name+' ✓';
}
function famInviteSent(){
  const kids=[['fam-kid1','林晓乐'],['fam-kid2','林晓阳']]
    .filter(k=>document.getElementById(k[0]).classList.contains('navy')).map(k=>k[1]);
  if(!kids.length){toast('请至少选择一个孩子');return}
  const ph=document.getElementById('fam-phone').value.trim();
  if(!/^1\d{10}$/.test(ph)){toast('请填写 11 位手机号');return}
  const r=document.getElementById('fam-rel').value;
  if(!r){toast('请标注对方与孩子的关系');return}
  const inv={id:++famInvSeq,phone:ph.slice(0,3)+'****'+ph.slice(7),rel:r,kids:kids.join('、')};
  famInvs.push(inv);
  /* 发出后回家人页，「等待加入」条目追加到该页家人列表卡片末尾 */
  go('sc-guardians');
  document.getElementById('fam-list').insertAdjacentHTML('beforeend',
    '<div class="cell" id="fam-pending-'+inv.id+'" style="font-size:13px;cursor:pointer" onclick="showFamPending('+inv.id+')"><span class="k" style="width:48px;color:var(--ink-3);font-size:12.5px;flex-shrink:0">邀请中</span>'+inv.phone+' · '+inv.rel+'<span class="chip amber" style="margin-left:auto">等待加入</span><b style="color:var(--cinnabar);margin-left:8px" onclick="event.stopPropagation();famCancelConfirm('+inv.id+')">取消</b></div>');
  famCntRefresh();
  toast('邀请已发出');
}
function showFamPending(id){
  /* 免审加入、仅限该号等规则说明收入演示说明 chip；「模拟对方已加入」演示动作也经 chip 触发 */
  const inv=famInvs.find(v=>v.id===id);if(!inv)return;
  showSheet('<h3>邀请详情</h3>'+
   '<div class="desc">已就 '+inv.kids+' 向 '+inv.phone+'（'+inv.rel+'）发出邀请。邀请 72 小时内有效，到期自动作废；对方加入前可随时取消。</div>'+
   '<button class="btn red blk" onclick="famCancel('+id+')">取消邀请</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>');
}
function famJoined(){
  /* 演示动作：最早发出的待加入邀请转为已绑定 */
  const inv=famInvs[0];
  if(!inv){toast('暂无待加入的邀请');return}
  closeSheet();
  famInvs.shift();famBound++;
  document.getElementById('fam-pending-'+inv.id).outerHTML=
    '<div class="cell" style="font-size:13px"><span class="k" style="width:48px;color:var(--ink-3);font-size:12.5px;flex-shrink:0">'+inv.rel+'</span>乐乐奶奶 · '+inv.phone+'<span class="chip teal" style="margin-left:auto">已绑定</span></div>';
  famCntRefresh();
  toast('乐乐奶奶已成为家人');
}
function famCancelConfirm(id){
  const inv=famInvs.find(v=>v.id===id);if(!inv)return;
  showSheet('<h3>取消邀请</h3>'+
   '<div class="desc">取消后发给 '+inv.phone+' 的邀请链接即刻失效，对方将无法加入；如需邀请可重新发起。</div>'+
   '<button class="btn red blk" onclick="famCancel('+id+')">确认取消</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">暂不取消</button>');
}
function famCancel(id){
  closeSheet();
  const p=document.getElementById('fam-pending-'+id);if(p)p.remove();
  famInvs=famInvs.filter(v=>v.id!==id);
  famCntRefresh();
  toast('邀请已取消，链接已失效');
}
/* -------- 教师邀请落地页：微信内点开邀请直达，确认即绑定、邀请随之失效 -------- */
/* -------- 邀请无效页：换用邀请对象手机号重新登录的出口 -------- */
function famInvalidLogout(){
  showSheet('<h3>退出登录</h3>'+
   '<div class="desc">退出后，用邀请人为您填写的手机号重新登录，再打开一次邀请试试；若仍提示无效，说明邀请已失效，请联系邀请人重新发起。确定退出吗？</div>'+
   '<button class="btn red blk" onclick="closeSheet();go(\'sc-login\');toast(\'已退出登录（演示）\')">确认退出</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
/* -------- 拒绝邀请：作废并通知邀请人 → 回该账号常规落点（有绑定孩子回首页，无绑定落「未匹配到孩子」承接页） -------- */
function famRejectConfirm(){
  showSheet('<h3>拒绝此邀请</h3>'+
   '<div class="desc">拒绝后本邀请作废，邀请人将收到通知；如需成为家人，需对方重新发起邀请。确定拒绝吗？</div>'+
   '<button class="btn red blk" onclick="famRejectDone()">确认拒绝</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">再想想</button>');
}
function famRejectDone(){
  closeSheet();go('sc-nochild');
  toast('已拒绝，邀请已作废');
}
function confirmFamJoin(){
  const r=document.getElementById('fam-join-rel').value;
  go('sc-home');toast('已成为孩子的家人（'+r+'）');
}
function confirmInvite(){
  const r=document.getElementById('inv-rel').value;
  if(!r){toast('请先选择您与孩子的关系');return}
  go('sc-home');toast('绑定成功（'+r+'）');
}
function smsSend(btn){
  const ph=document.getElementById('sms-phone').value.trim();
  if(!/^1\d{10}$/.test(ph)){toast('请输入 11 位手机号');return}
  btn.disabled=true;let s=60;btn.textContent='已发送 60s';
  const iv=setInterval(()=>{s--;if(s<=0){clearInterval(iv);btn.disabled=false;btn.textContent='重新获取'}else btn.textContent='已发送 '+s+'s'},1000);
  toast('验证码已发送');
}
function smsLogin(){
  const ph=document.getElementById('sms-phone').value.trim(),cd=document.getElementById('sms-code').value.trim();
  if(!/^1\d{10}$/.test(ph)){toast('请输入 11 位手机号');return}
  if(!/^\d{6}$/.test(cd)){toast('请输入 6 位数字验证码');return}
  agreeGate(()=>{
    toast('验证通过（演示）');
    const m=regMode;regMode='';
    setTimeout(()=>{if(m==='apply'){if(regApplyNew){regApplyNew=false;regApplyEnterNew()}else regApplyEnter()}else if(m==='bind')cregEnter();else{if(m!=='fam')authVerifiedMode(false);go(m==='fam'?'sc-faminvite':'sc-auth')}},500);
  });
}
/* -------- 手机壳视口自适应：居中并按需等比缩放 -------- */
function fitPhone(){
  /* 外壳描边（box-shadow 外扩 12px）计入尺寸，受限方向至少留 16px 空白便于截图；隐藏手机壳时无外扩 */
  const pad=document.body.classList.contains('no-shell')?0:24;
  const s=Math.min(1,(innerHeight-32)/(844+pad),(innerWidth-32)/(390+pad));
  /* 用 zoom 而非 transform:scale——原生 select 弹层按布局坐标定位，transform 会导致错位 */
  document.querySelector('.phone').style.zoom=s;
}
/* -------- 手机壳显隐：演示说明内开关，localStorage 记忆并与教师端共享 -------- */
function shellOn(){return localStorage.getItem('proto-shell')!=='off'}
function toggleShell(){
  localStorage.setItem('proto-shell',shellOn()?'off':'on');
  applyShell();renderDemo();
}
function applyShell(){
  document.body.classList.toggle('no-shell',!shellOn());
  fitPhone();
}
addEventListener('resize',fitPhone);applyShell();
/* -------- 撤回审核中的申请：第一阶段不实现，「撤回申请」按钮默认不渲染（恢复方式：孩子管理页 / 未匹配承接页
   演示说明内的「允许撤回审核中的申请」开关，或 localStorage 置 proto-revoke=on）；相关逻辑保留见 pendRevokeSheet -------- */
function revokeOn(){return localStorage.getItem('proto-revoke')==='on'}
function toggleRevoke(){
  localStorage.setItem('proto-revoke',revokeOn()?'off':'on');
  renderDemo();
  /* 申请详情半屏正开着时就地重绘，开关效果立即可见（仅当半屏内容确实是申请详情） */
  const sh=document.getElementById('sheet');
  if(pendCurId&&document.getElementById('mask').classList.contains('show')&&sh.innerHTML.indexOf('<h3>申请审核中</h3>')===0)pendDetail(pendCurId);
  /* 绑定申请页状态态：卡片可点性随开关变化，驻留该页时重绘 */
  if(curScreen==='sc-classreg'&&!document.getElementById('creg-name'))cregStatus();
}
/* -------- 登录页「手机号验证码登录」显隐：登录页演示说明内开关，localStorage 记忆，默认隐藏 -------- */
function smsLoginOn(){return localStorage.getItem('proto-smslogin')==='on'}
function toggleSmsLogin(){localStorage.setItem('proto-smslogin',smsLoginOn()?'off':'on');applySmsLogin();renderDemo()}
function applySmsLogin(){document.getElementById('login-sms-btn').style.display=smsLoginOn()?'':'none'}
applySmsLogin();
/* -------- 添加孩子「命中已有家人绑定的学生」备用方案：五要素命中其他账号下孩子时不出候选卡 / 不走加入家庭链路，
   改弹「该孩子已有家人绑定」提示并引导联系班主任添加；添加孩子页演示说明内开关，localStorage 记忆，默认关闭（走加入家庭候选卡） -------- */
function famAltOn(){return localStorage.getItem('proto-famalt')==='on'}
function toggleFamAlt(){localStorage.setItem('proto-famalt',famAltOn()?'off':'on');renderDemo();demoToast(famAltOn()?'已切换为备用方案：命中已有家人绑定的学生时提示联系班主任':'已恢复为加入家庭候选卡方案')}
/* -------- 帮助与客服「反馈建议」入口显隐：该页演示说明内开关，localStorage 记忆，默认显示 -------- */
function fbEntryOn(){return localStorage.getItem('proto-fbentry')!=='off'}
function toggleFbEntry(){
  localStorage.setItem('proto-fbentry',fbEntryOn()?'off':'on');
  if(!fbEntryOn()&&msgFilter.cat==='svc'){msgFilter.cat='all';msgFbtnUpd()} /* 关闭入口时若正按反馈类别筛选，回退到全部类别 */
  applyFbEntry();applyMsgFilter();renderDemo();
}
function applyFbEntry(){
  const on=fbEntryOn(),tel=document.getElementById('help-tel-btn');
  document.getElementById('help-fb-btn').style.display=on?'':'none';
  /* 反馈建议显示时为主按钮，联系客服降为次按钮；隐藏时联系客服回归主按钮 */
  tel.classList.toggle('pri',!on);tel.classList.toggle('ghost',on);
  /* 服务号推送示意页的反馈回复通知卡（含时间分隔条）随入口同口径显隐 */
  document.querySelectorAll('.wxp-fb').forEach(w=>w.style.display=on?'':'none');
}
applyFbEntry();
/* -------- 帮助与客服「在线客服」入口显隐：该页演示说明内开关，localStorage 记忆，默认隐藏 -------- */
function csEntryOn(){return localStorage.getItem('proto-csentry')==='on'}
function toggleCsEntry(){localStorage.setItem('proto-csentry',csEntryOn()?'off':'on');applyCsEntry();renderDemo()}
function applyCsEntry(){document.getElementById('help-cs-btn').style.display=csEntryOn()?'':'none'}
applyCsEntry();
/* -------- 办理证件照校级配置：与管理端「阈值配置」开关经 localStorage（proto-nophoto）联动；关闭后办理表单隐藏证件照区块、提交不校验照片 -------- */
function photoReqOff(){return localStorage.getItem('proto-nophoto')==='on'}
function togglePhotoReq(){localStorage.setItem('proto-nophoto',photoReqOff()?'off':'on');applyPhotoReq();odPhotoCfgSync();renderDemo()}
function applyPhotoReq(){
  document.getElementById('ap-photo-card').style.display=photoReqOff()?'none':'';
  /* 每枚徽按自己制作当时有无照片显示、不按当前校级配置：开关打开后以 3 枚单 SS2026062641572089
     （我的校徽 NO.0008–0010 = bd6–bd8，parent.css 按 body.nophoto 隐藏其照片位）作为配置切换后办理的代表切为无照片版式，
     办理记录 multi3 由 odPhotoCfgSync 同步；NO.0001–0005 等旧徽保留照片。演示简化：其余日期更晚的演示记录各自承载状态演示，不按日期推演 */
  document.body.classList.toggle('nophoto',photoReqOff());
  apPvUpdate(); /* 徽面预览同步切换有 / 无照片版式 */
}
/* 初始 applyPhotoReq() 在 AP_KIDS / apFormPhoto 声明后调用（apPvUpdate 依赖两者） */
/* -------- 校徽办理「校徽预览」区块显隐：该页演示说明内开关，localStorage 记忆，默认隐藏 -------- */
function badgePvOn(){return localStorage.getItem('proto-badgepv')==='on'}
function toggleBadgePv(){localStorage.setItem('proto-badgepv',badgePvOn()?'off':'on');applyBadgePv();renderDemo()}
function applyBadgePv(){
  const on=badgePvOn();
  document.getElementById('ap-pv-sentinel').style.display=on?'':'none';
  document.getElementById('ap-pv-sticky').style.display=(on&&!apEdit)?'':'none'; /* 编辑态恒不展示预览，退出编辑由 applyEditMode 按开关恢复 */
  if(!on)pvApply(0); /* 隐藏时还原吸顶收缩形态，避免重新开启后残留紧凑徽面条 */
}
/* 初始 applyBadgePv() 在吸顶逻辑（pvP / pvApply）声明后调用 */
/* -------- 校徽办理须知卡（智能校徽申请与补办）上方媒体位：办理说明视频 / 活动横幅图片二选一，该页演示说明内开关，localStorage 记忆，默认视频 -------- */
function apMediaVideo(){return localStorage.getItem('proto-apmedia')!=='img'}
function toggleApMedia(){localStorage.setItem('proto-apmedia',apMediaVideo()?'img':'video');applyApMedia();renderDemo()}
function applyApMedia(){
  document.getElementById('ap-form-video').style.display=(apMediaVideo()&&!apEdit)?'':'none';
  document.getElementById('ap-form-banner').style.display=(!apMediaVideo()&&!apEdit)?'':'none';
}
/* 初始 applyApMedia() 在编辑态标记（apEdit）声明后调用 */
/* -------- 导航（含 hash 直达：parent.html#sc-apply 可直接打开对应屏） -------- */
function go(id){
  /* 发起请假页：只对在读孩子开放（毕业 / 离校孩子没有入口，任何路径进入都拦回请假列表，服务端同样拦截）；标题与当前孩子同步（2026-10-21） */
  if(id==='sc-newleave'&&!lvNewOk())return;
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('show'));
  document.getElementById(id).classList.add('show');
  document.querySelectorAll('.body').forEach(b=>b.scrollTop=0);
  /* 从账号主导航（首页 / 我的 / 消息）进入智能校徽页时恢复返回键与账号形态——属乐乐妈妈身份的常规入口；
     流程内跳转（结果页查看办理记录、记录详情返回等）不恢复，保持扫码直达 / 新用户变体的会话形态 */
  if(id==='sc-apply'&&['sc-home','sc-me','sc-msgs'].includes(curScreen)){
    const bk=document.querySelector('#sc-apply .back');if(bk)bk.style.visibility='';
    apNewUserOff();
  }
  curScreen=id;history.replaceState(null,'','#'+id);closeDemo();
}
/* -------- 演示入口：说明与快捷跳转随当前屏切换 -------- */
var curScreen='sc-home';
const demoInfo={
 'sc-visitor':{t:'未登录首页（游客态）',d:'小程序未登录（冷启动、退出登录后）时的首页游客态：结构与登录后首页一致（品牌头部 + 活动横幅 + 功能宫格 + 底部 Tab），让新家长先看到产品能做什么、再决定是否登录；头部不展示任何学校与孩子信息，导航栏学校名位置显示产品名「智小徽」，身份区为「未登录」引导。点击页面任意功能入口——头部登录区、扫一扫、活动横幅、六个宫格入口（含家校通讯 / 消息留言）、底部「消息 / 我的」Tab——均跳转登录页：未登录不可见任何业务数据，功能承接一律后置到登录之后；「首页」Tab 驻留本页。登录页底部「暂不登录」文字按钮可回到本页继续浏览。原型默认以已登录形态（乐乐妈妈账号）打开，本页经登录页「暂不登录」或首页 / 登录页演示说明进入。',a:[['返回已登录首页（乐乐妈妈账号）',"go('sc-home')"]]},
 'sc-login':{t:'注册 / 登录',d:'页面底部设「暂不登录」文字按钮：点击回未登录首页（游客态）——结构同登录后首页但不含任何业务数据，点击其任意功能入口再回到本页登录。手机号快捷登录（微信手机号授权）即注册；手机号验证码登录为备用通道，默认隐藏、由本说明上方开关控制显示。协议同意采用「点登录先弹协议确认半屏」方案：任一登录动作（快捷登录 / 验证码登录的「登录」）先弹出协议确认半屏——列出《用户协议》《隐私政策》《儿童信息保护规则》三个协议入口 +「同意并登录 / 不同意」，以用户主动点击「同意并登录」达成明示同意（满足个保法明示同意及儿童个人信息保护的监护人明示同意要求，替代页面勾选框方案、微信生态通行做法），「不同意」仅关闭半屏、停留原页；页面底部协议文案相应为「登录前请阅读并同意」。页面底部链接与半屏内协议行均可点开协议阅读页（全文为 V0.2 草拟稿，阳光智园科技有限公司主体、2026-07-27 生效）；从半屏进入阅读页的，返回时自动重新拉起半屏续接登录。同意后续接原登录流程——点「手机号快捷登录」拉起微信手机号授权半屏（申请获取并验证你的手机号，微信系统能力示意）：授权号码二选一分流两个人设——138****6688（上次提供）名册命中，登录后进首次绑定页；138****9900（微信绑定号码）未命中名册，登录后落「未匹配到孩子」承接页；「不允许」仅关闭半屏、停留登录页；「管理号码」进微信「我的手机号码」页示意，返回可重新拉起授权。扫班级注册码注册的完整链路：注册码海报（班主任发班级群 / 开学现场张贴）→ 长按识别 → 服务号主页点「关注服务号」→ 欢迎语内点注册小程序卡片 → 本页登录 → 直达绑定申请（班级由码带出），可经上方按钮从海报开始体验；经该链路进入本页后，完成登录（快捷登录任选授权号码、或验证码登录）均自动续接绑定申请（冷启动无名册可匹配）。班级注册码与邀请注册卡片另有学校级变体（学校管理员在管理端生成，后续阶段；适用学校统一组织注册、不按班级分发的场景）：码 / 卡片只带学校、不带班级，海报副题为「家长注册 · 仅限本校家长使用」、卡片为教务处李主任分享，登录后绑定申请页的年级 / 班级由家长自选（选项与添加孩子表单同源）、申请路由至所选班级的班主任审核，其余链路与班级级完全一致，可经上方「学校注册码海报 / 学校级邀请卡片」按钮体验，或在绑定申请页演示说明内切换级别。另有两条同源链路：「注册办理码」（学校已导名册场景）流程更短——长按识别后不经过关注服务号与欢迎语卡片、直接打开本登录页，登录后直达「校徽办理」页并可随提交自动确认监护关系，详见注册办理码海报页演示说明（另有名下无任何孩子的新用户人设变体，经上方按钮从海报开始体验：登录后不落办理页空态、直达「添加孩子」表单——零孩子时办理无从谈起，让家长在空态页自己找入口是多余一步；学校字段由注册办理码携带的学校信息带出并锁定（点学校项有提示、不开选择半屏），年级 / 班级 / 姓名等仍需自填，返回键回办理页空态（无页头返回键的扫码直达形态），提交申请生成「审核中」chip 回办理页即可乐观提交办理单并正常支付，提交结果页第二按钮为「完成」口径；从首页宫格等常规入口再进办理页时恢复乐乐妈妈账号形态，刷新亦恢复）；「邀请注册卡片」（老师分享到微信会话）从卡片打开小程序注册落地页、识别落地页二维码后汇入班级注册码链路，详见邀请卡片页演示说明；「校徽办理与补办卡片」点卡片直接打开本登录页（不经过落地页与服务号环节，与注册办理码同口径），登录后直达「校徽办理」页，详见办理卡片页演示说明；「家人邀请卡片」（其他家人定向邀请）同构，登录后直达「家人邀请确认页」，详见家人邀请卡片页演示说明。另：校徽壳印二维码用微信以外的 App（系统相机等）扫描时落到 H5 兜底页（微信内扫码则直接打开小程序），其原型可经上方按钮打开。演示捷径：上方「直达首页」按钮跳过全部登录动作直接进入已登录首页（乐乐妈妈账号、林晓乐），并清掉扫码链路残留的分流标记，便于从登录页快速回到主流程。',a:[['直达首页（跳过登录 · 乐乐妈妈账号）','loginHome()'],['模拟登录 · 未匹配到孩子',"go('sc-nochild')"],['扫码注册链路 · 从班级注册码海报开始',"cregStart('new','sc-regposter')"],['扫码注册链路 · 已有孩子的账号（乐乐妈妈）从班级注册码海报开始',"cregStart('kids','sc-regposter')"],['扫码注册链路 · 从学校注册码海报开始（学校级码，年级班级自选）',"cregStart('new','sc-regposter','school')"],['扫码注册办理链路 · 从注册办理码海报开始',"go('sc-regposter2')"],['扫码注册办理链路 · 新用户（名下无孩子）从海报开始','regApplyNewStart()'],['邀请注册链路 · 从老师分享的卡片开始',"cregInviteStart('class')"],['邀请注册链路 · 从学校级邀请卡片开始（教务处分享，年级班级自选）',"cregInviteStart('school')"],['办理卡片链路 · 从校徽办理卡片开始',"go('sc-reginvite2')"],['家人邀请链路 · 从家人邀请卡片开始',"go('sc-reginvite3')"],['模拟扫班级注册码 · 直达绑定申请',"cregStart('new','enter')"],['模拟扫学校注册码 · 直达绑定申请（年级班级自选）',"cregStart('new','enter','school')"],['模拟扫班级注册码 · 已有孩子的账号（乐乐妈妈）登录落点',"cregStart('kids','enter')"],['模拟扫班级注册码 · 有教师身份、名下无孩子的账号登录落点',"cregStart('teacher','enter')"],['校徽二维码 H5 兜底页（微信外扫码落地页）',"location.href='badge-h5.html'"]]},
 'sc-legal':{t:'协议阅读页',d:'《用户协议》《隐私政策》《儿童信息保护规则》共用的全文阅读页，三个入口：登录页底部链接、协议确认半屏内协议行、「我的」页脚。内容为 V0.2 草拟稿（主体为阳光智园科技有限公司，2026-07-27 更新生效；通行影像留存 7 天、注销走「帮助与客服」联系客服口径），文档头的「草拟稿·法务审核」引注为内部信息、不随页面展示，正式发布前须经法务审核。从协议确认半屏进入本页的，返回键自动重新拉起半屏续接登录；其余入口返回来源页。',a:[['查看用户协议',"openLegal('ua')"],['查看隐私政策',"openLegal('pp')"],['查看儿童信息保护规则',"openLegal('cp')"]]},
 'sc-sms':{t:'手机号验证码登录',d:'输入手机号获取验证码（60 秒重发倒计时；演示任意 6 位数字可登录），未注册手机号验证后自动注册。点「登录」先校验手机号与验证码格式，通过后弹出协议确认半屏（与登录页同一明示同意口径），「同意并登录」后完成登录；底部三个协议名可点开协议阅读页。',a:[]},
 'sc-auth':{t:'首次绑定孩子',d:'已通过微信授权获取手机号（138****6688），命中学校预留名册即可确认绑定。确认前为未验证匹配，孩子姓名打码展示（林*乐）、不开通任何数据，与「我的」待认领条目口径一致，确认绑定后解除打码。确认需先补全被打码的姓名字——填空式「林 _ 乐」（与孩子管理页认领半屏同口径，把「持有预留手机号」升级为「手机号 + 知道孩子全名」；演示正确答案：晓），输错统一模糊反馈并限频，连续 3 次未通过绑定锁定：按钮转「已转交班主任核实」、状态 chip 转「核实中」，班主任核实后以消息通知（演示数据，刷新恢复）。原「开通内容」行不再在页面展示——绑定即默认开通到离校通知 / 请假发起 / 校徽管理，无需向家长展示口径（与孩子资料页同处理）。学校端录入学生时已登记各监护人手机号对应的监护关系（本次迭代对齐学校端调整，原「名册不含关系信息、家长自行选择」口径废止），本页将登记关系带出预填（演示：妈妈）、如不符可修改（仅预填、不加辅注行，保持页面克制）——家长仍是监护关系的最终权威（学校可能录错、预留号码可能由另一位家人实际使用）；修改仅作用于小程序侧关系标注、不回写学校名册，差异不阻断绑定；名册未登记关系的老数据回落为空白必选兜底（绑定后可在「我的」修改）。本页只服务名册命中场景，界面聚焦确认动作；底部辅助操作仅保留错配反馈：匹配有误（录错号/二次放号看到陌生孩子）走「不是您的孩子？这不是我的孩子」——与孩子管理页待认领条目的反馈同一链路，弹二次确认说明后果（不绑定、通知班主任核实名册预留号码、核实后确为本人号码会再次下发认领通知），确认后该账号无匹配孩子、落「未匹配到孩子」承接页（演示：承接页手机号随本页人设切换为 138****6688）。多孩部分命中的家长先确认绑定已命中的孩子，进入后经「我的-添加孩子」三通道补充绑定其他孩子。每个孩子最多 6 名家人，双家长可各自绑定。本页另有「班主任已核实」免答题形态（李雨桐）：零孩子账号点服务号「认领核实已通过」深链的落点（深链按账号状态分流，有孩子账号落孩子管理页拉免答题半屏）——教师人工核实替代答题验证，解除打码展示全名、信息卡带「班主任已核实」chip，免答题仅确认监护关系（登记关系预填可改）即绑定；该形态与免答题半屏同构（信息卡 → 说明 → 关系选择），不设「孩子姓名」行——该行在答题形态是填空验证控件而非展示行，免答题形态姓名已在信息卡完整展示，再印一遍属纯冗余；「这不是我的孩子」出口两形态共用（反馈后同落未匹配承接页）；该形态经微信服务号推送示意页「零孩子账号视角」入口进入（确认按钮为视角演示 toast、不改动演示账号数据），正常登录链路进入自动还原默认答题形态。本页不设左上角返回键（与班级注册码绑定申请页同口径）：答题形态是登录后重定向落点、免答题形态是服务号深链冷启动直达，页面栈均无上一页（小程序导航栏不渲染返回）；且返回登录页对已登录家长等于退出登录，本页作为必须做出选择的门页只有三条出路——确认绑定进入、反馈「这不是我的孩子」（落未匹配承接页）、关闭小程序，返回键不对应任何合法出路；演示回登录页走本说明上方入口。',a:[['确认绑定并进入',"go('sc-home')"],['切换为班主任已核实免答题形态','authVerifiedMode(true)'],['还原默认答题形态','authVerifiedMode(false)'],['返回登录页（演示）',"go('sc-login')"]]},
 'sc-home':{t:'首页（宫格式）',d:'与教师端同款的宫格式首页。头部为蓝天白云背景，含学校名与孩子身份区：头像与身份标签、姓名（可下拉切换身份）、班级、右侧「扫一扫」；下方依次为消息提醒条、智能校徽活动横幅与功能宫格（一行四个）；底部为「首页 / 消息 / 我的」三个 Tab。原首页的今日在校卡收进「校园签到」页，消息预览由「消息」Tab 承接。\n【扫一扫】\n右侧「扫一扫」进入统一扫码相机页，与真实产品「按钮 → 相机 → 结果」链路一致：相机页点取景空白处即模拟扫到当前孩子已启用的校徽，半屏展示学生、状态与最近读取的核对信息，可直达「我的校徽」；其他扫码结果经该页演示说明模拟。在用校徽数不在头部展示，进「我的校徽」查看。\n【身份切换面板】\n点头部姓名下拉打开，列出同号全部身份，与教师端首页身份面板、两端账号切换页为同一份数据、同一口径，四处只有选中行不同。选孩子切换首页展示（演示数据以林晓乐为例）；选「王瑶」当页跳转教师端原型（与教师端切回家长身份同口径）；与「我的-账号切换」同能力、双入口，两种角色的数据互不可见。\n排序：教师类身份在前、孩子其后、毕业 / 离校孩子沉底。教师类身份按学校排、不按职务排：当前登录所在学校 / 主任职学校在前，其余按身份登记时间（两个身份分属两所学校，校长与班主任是平行身份，职务之间不可比）；该顺序同时决定身份失效时自动切换的落点，两端须稳定一致。演示顺序：王瑶·市实验一小·班主任、王瑶·红旗小学·校长（同号跨校多身份，副行为数据范围「全校」，选择为演示 toast，校长视角首页属后续阶段）、林晓乐、林晓阳、林晓宁（市实验二小，同号跨校多孩）、林晓晴（毕业生）、林晓帆（离校生）。\n教师类身份行 chip 展示职务、不展示任教班级 / 学科（与教师端头部角色标签同文案）。孩子行 chip 为身份类型，全端统一为在读生 / 毕业生 / 离校生，头像下标签与列表 chip 用同一套文案。\n【消息提醒条】\n即时触达依赖微信服务号推送，而微信新版把服务号消息折叠进「服务号」聚合入口，不置顶公众号且不关闭消息免打扰就不弹提醒。提醒条「去设置」弹居中「接收消息提醒设置」弹窗，「去设置消息提醒」进设置指引页（二维码 + 五步操作步骤）；勾选「我已置顶公众号和关闭消息免打扰」视为完成，提醒条随即隐藏（演示数据，刷新恢复）。\n【宫格入口】\n智能校徽 / 活动横幅 → 智能校徽统一对象页（我的校徽 / 校徽办理 / 办理记录三 Tab），宫格与横幅进入落校徽办理；「我的校徽」Tab（多枚持有 / 挂失找回 / 停用）经扫一扫、「我的」数据栏或上方按钮进入。\n素质评价 → 素质评价只读视图（德智体美劳五维点评记录与星星积分，教师端点评同步）；后续阶段功能，宫格入口默认显示，可由上方开关隐藏。\n校园签到 → 学生签到详情（到离校时间轴 + 通行抓拍 / 出勤统计双 Tab，与教师端同构）。智慧放学 → 放学播报与离校时间轴（只读）。请假 → 请假记录与发起。\n家校通讯 / 消息留言 → 在本标签打开 Mockplus 外链原型页（这两项交互原型另行维护，不在本原型内，返回本原型请用浏览器后退）。\n【底部 Tab】\n消息 Tab 不设未读数字角标（即时提醒走微信服务号推送，站内消息只供回看历史），未读红点只在消息列表条目上展示。\n【已毕业 / 离校孩子】\n学籍异动（毕业批量处理 / 中途转学离校）由学校端操作，家长端只呈现；毕业与中途离校共用同一归档机制，只是文案区分。身份切换面板与账号切换页中沉底并标灰色「毕业生 / 离校生」chip。\n切换后首页进入归档态：头部头像随孩子切换（晓晴为女孩头像），班级后缀毕业时间，头像下标签为「毕业生」；隐藏消息提醒条、活动横幅、智慧放学与素质评价入口（不再产生新数据的功能）；顶部显示归档说明卡。保留三个入口：智能校徽（只读，校徽已毕业注销、办理 Tab 不含毕业孩子）、校园签到（归档只读视图）、请假（只有在校期间的历史请假单，只读、不可再发起）。\n保留期统一为学籍异动后满一年，到期按儿童个人信息保护规则自动清理，清理前以消息提前告知：林晓晴（6年级-1班、2026年6月毕业）记录可查看至 2027年6月30日；林晓帆（4年级-4班、2025年11月中途转学离校）保留至 2026年11月30日，归档说明卡标题为「已于 2025年11月 离校」。界面统一用「离校」（头部与列表副行、归档卡、切换 toast 都不带「转学」，异动原因由学校端学籍记录承载）。演示简化：晓帆没有独立业务演示数据，归档态入口中校园签到 / 请假点击以 toast 说明，样例数据以林晓晴为例，「我的校徽」孩子筛选落「全部」。\n升学过渡期：9月新学期名册更新前，学校端暂不批量归档上一届，避免暑期家长误以为孩子数据丢失。账号下只剩毕业孩子时仍可正常登录回看历史，不落「未匹配到孩子」承接页（该页只面向新用户）。\n【监护关系被解除】\n监护关系被学校在运管端解除时，按同类身份优先承接：还有其他孩子自动切换并 toast 告知 → 只剩教师身份落教师端 → 都没有落「未匹配到孩子」承接页。经上方三个「演示 · 监护关系被解除」按钮演示，三层校验与兜底口径全文见账号切换页演示说明。\n【其他】\n年级命名全端统一为「年级序号-班号」格式（如「3年级-2班」），覆盖家长端全部页面与演示数据，与教师端一致。\n演示提示（带「演示」角标的深色提示）整块可点击关闭，右上角 × 为视觉提示；超过一行时显示在底栏上方，不遮住它说明的内容。产品 toast 居中、不可点。',a:[['查看未登录首页（游客态）',"go('sc-visitor')"],['切换到已毕业孩子（毕业态首页）',"idPick('林晓晴')"],['切换到离校生孩子（归档态首页）',"idPick('林晓帆')"],['切回林晓乐',"idPick('林晓乐')"],['演示 · 当前孩子监护关系被解除（还有其他孩子）','guardRevoke()'],['演示 · 监护关系被解除（仅剩教师身份人设）','guardRevokeTeacher()'],['演示 · 监护关系被解除（名下无孩子人设）','guardRevokeAll()']]},
 'sc-msgset':{t:'接收消息提醒设置',d:'首页提醒条「去设置」→ 居中弹窗 →「去设置消息提醒」进入。设计动因：班级通知即时触达依赖微信服务号推送，微信新版将服务号消息折叠进「服务号」聚合入口，家长需置顶公众号并关闭消息免打扰才能收到弹出提醒。页面 = 红字引导 + 学校服务号「智小徽」二维码（真实产品长按识别关注，原型点击以 toast 模拟）+ 五步操作步骤，第③步「查看操作图」进入微信界面逐屏标注指引。底部「我已完成设置」与首页弹窗内勾选「我已置顶公众号和关闭消息免打扰」等效：首页提醒条隐藏（演示数据，刷新后恢复）；真实产品中完成状态按账号记忆，提醒条不再出现。',a:[]},
 'sc-wxpush':{t:'微信服务号推送示意',d:'从消息页演示说明进入。页面为微信服务号「智小徽」会话界面示意（微信侧界面，不是小程序页面），演示站内消息对应的服务号模板消息推送，即时触达走此通道。返回键回消息页。\n【卡片与模板】\n模板消息与消息页列表一一对应，共 41 张（孩子、事件、时间同口径；列表未标时间的消息此页补充演示时刻）。按微信会话规则排序与显示时间：旧消息在上、新消息在下，当天只显时刻，昨天 / 本周星期X / 更早日期。\n卡片标题为微信已申请模板的标题，不是业务事件名（对应关系见消息通知一览 2.6.10.1）：进出校园提醒（校园打卡）、学生离校提醒（班级放学）、学生请假申请提醒（老师代请假）、请假审核结果提醒（请假审批结果 / 销假结果 / 老师代销假）、退换货申请处理结果通知（退款结果）；其余（补签、校徽办理与核对、认领、家人、记录保留、素质评价、反馈）共用「工单处理提醒」，同题卡片靠字段区分事件；取消办理结果在一览中未单列，按校徽办理同域暂记工单处理提醒。\n卡片字段按已申请模板的固定字段演示：工单处理提醒＝学校名称 / 学生姓名 / 工单状态 / 时间 / 位置（位置栏承载结果说明）；进出校园提醒＝所属班级 / 学生姓名 / 进出状态 / 通过地点 / 进出时间；学生离校提醒＝学校 / 班级 / 学生姓名 / 考勤状态 / 时间；退换货申请处理结果通知＝订单号 / 退换类型 / 受理时间 / 退费金额 / 产品名称。退款结果按生产口径在审核出结果时推送，到账不另推。\n微信模板消息规则：正文字段单条不超过 5 个、每个字段值不超过 20 字。产品固定通知文案直接控制在 20 字内；用户 / 客服自由文本（反馈与回复）按原文前 19 字截断加 …，与落点页面全文字面一致、不做人工改写，全文由点击落点页面承载。请假类消息的审批老师 / 代请老师并入结果或说明字段；结果类消息不单列操作时间字段，以推送时间为准。补签可回溯历史考勤日，补的是哪天以卡上的考勤日期为准。零元回收没有退款到账事件，复用校徽办理进度类卡片。\n【点击落点】\n点击卡片模拟真实深链：有业务落点的直达对应小程序页面（与站内消息同落点），纯通知类落消息列表并拉起对应结果半屏（如班级放学 ①② 的 7月2日 历史卡）。\n认领类半屏属小程序界面，不能盖在本页微信会话上：孩子认领通知卡与认领核实已通过卡都直达孩子管理页并拉起对应半屏（认领答题 / 免答题确认），与站内消息同落点。认领已成功或已锁定核实中后再点，落孩子管理页看条目当前状态；已反馈「不是我的孩子」后再点，落消息页并提示认领已关闭（消息页为进小程序的兜底落点）。认领核实未通过卡落消息页并拉起结果半屏。\n深链按账号状态分流（业务动作等价、形态不同）：孩子管理页与消息页都以账号名下已有孩子为前提（演示账号即此形态）。零孩子账号（如在未匹配承接页等待名册补录、或解绑 / 反馈后归零的家长）没有主 App 形态：认领通知改落「首次绑定孩子」整页（与认领半屏同口径的打码填空验证 + 关系确认），核实已通过落首绑页的免答题形态；核实未通过改落「未匹配到孩子」承接页并在其上拉起同一结果半屏，半屏出路（联系班主任当面核实，确认后可由老师定向邀请绑定）与承接页的通道说明衔接。\n添加孩子申请结果：已通过卡直达孩子管理页看新绑定条目，不做零孩子分流（审核通过即绑定生效，点击时账号必然有孩子）；老师审核时更正过信息的，「学生姓名」为通过后的姓名与班级，「位置」为「{孩子}已添加为您的孩子，信息有更正」，超过 20 字（微信字段上限）时不带后半句；老师端回传审核通过时会话末尾即时追加一张；未通过卡落消息页 + 结果半屏（含重新提交出路）。零孩子账号的未通过概率更高（人工申请正是零绑定人设的主要出路），改落「未匹配到孩子」承接页并拉起同一半屏：提交时插入的「审核中」状态卡随结果移除、「提交人工申请」入口恢复，半屏「重新提交申请」按人设指向零绑定表单或预填表单。\n零孩子分支经上方三个「零孩子账号视角」入口演示。\n素质评价点评卡深链点评详情页（点评老师与星星增减并入结果字段）；反馈回复卡深链反馈详情。\n【显隐】\n第一阶段隐藏的消息（校徽审核未通过、请假期间到校核销）此页同步不展示。反馈回复两张卡随「帮助与客服」页「显示反馈建议入口」开关显隐（默认显示）。素质评价点评三张卡固定显示：其中 09:05 一张是被老师删除的点评的原始推送，微信模板消息发出后无法撤回，卡片内容停留在撤回前原文，点击落点评详情的撤回态，与消息列表标为「该点评已被老师撤回」的条目互为两侧视图。\n【公众号菜单】\n底部菜单为示意：「校园服务」进小程序首页，「消息设置」进接收消息提醒设置指引页（置顶公众号 + 关闭免打扰，推送弹出提醒依赖该设置），「关于我们」只作演示。',a:[['零孩子账号视角：核实已通过落首绑确认页',"authVerifiedMode(true);go('sc-auth')"],['零孩子账号视角：核实未通过落未匹配承接页',"go('sc-nochild');openSheet('msg-claimno')"],['零孩子账号视角：申请未通过落未匹配承接页',"go('sc-nochild');openSheet('msg-addchild-no')"]]},
 'sc-msgguide':{t:'公众号设置操作图',d:'接收消息提醒设置页第③步「查看操作图」进入：以微信界面示意图逐屏标注五步——公众号会话右上角人像 → 主页右上角【⋯】→【置顶公众号】→【设置】→ 关闭【消息免打扰】，红框 / 红圈为需点击位置。界面为微信通用操作示意（公众号以「智小徽」为例），非本校真实截图；返回键回接收消息提醒设置页。',a:[]},
 'sc-atthist':{t:'校园签到（签到详情）',d:'首页宫格「校园签到」进入，与教师端「学生签到详情」页同构（家长侧只看本人孩子，演示以林晓乐为例）。两个 Tab：「签到」按日看时间轴，「统计」按月看出勤账目。教师端林晓乐今天与 6月1日–7月4日 的记录与本页同一套演示数据、统计数字一致，其余学生按姓名生成；六次打卡与毕业归档只在本页演示。\n【签到 Tab：日历】\n顶部日历收起为周条，点底部把手展开看整月（再点收起）；在日历上左右滑动（鼠标拖动同效）或点右上角箭头切换：收起时切上一 / 下一周，展开时切上一 / 下一月，跨月周标题按周四所在月显示。未来日期置灰不可选，演示数据范围 2026年6月–7月（越界提示）。点月历标题（带 ▾）呼出年月选择器（见下）。\n上学日圆点按当日考勤结果着色（图例见日历底部）：青碧＝考勤正常，朱红＝有异常（迟到 / 早退 / 缺卡，缺勤必然缺卡、不在图例单列），蓝＝请假且审批通过。圆点只表达日级状态，不单独标识时段请假；「当天有请假时段」由统计 Tab 的「时段请假」筛选定位。\n点日期切换下方时间轴。今天 7月6日（周一，家长端演示时点 17:05、已离校）共六个节点：晓乐班一天四次打卡，上午到校 07:42、上午离校 11:47、下午到校 13:26，放学时段 16:47 / 16:52 两次出校与校门再识别为通行记录，下午离校 16:58。上一上学日 7月3日（周五）为历史定格视图；其余上学日为按日生成的定格概要（上午到校 / 下午离校两节点 + 抓拍，午间两次打卡不展开；7月1日、7月2日与 6月5日 / 11日 / 30日 的时间与统计 Tab 逐日记录同口径，7月2日 带迟到 21 分钟标记）；周末为非上学日空态（7月5日）。\n【时间轴与通行记录】\n主节点以「入 / 离」徽标区分，并括注上学 / 放学时间（上学 08:00、放学 16:30）。其余通行为轻量记录节点：小圆点 + 时间 + 通道 + 抓拍，不标出入。离校时间以当日最后一次出校为准，此前的出校与再识别只作通行记录、不单独推送消息，离校消息按最终离校时间推送。识别融合方式（校徽 + 人脸一致）不以标签展示。\n每个事件附通行抓拍照片（点击放大预览）与视频（演示占位，点击 toast 模拟播放约 8 秒）；入校区块（到校及上学时段通行）抓拍超过一组时，到校标题旁显示「收起」，点击整体收起 / 展开该区块抓拍，只有一组时不显示（如 7月3日）。\n迟到 / 早退时长：不满 1 小时显示「x 分钟」，满 1 小时显示「x小时y分钟」、整小时省略分钟，内部仍按分钟计（如 80 分钟显示「1小时20分钟」）。\n【请假的判定】\n请假期间的出返校通行以轻量记录节点展示，只作记录、不参与判定；请假时段均不计缺勤。按日视图只陈述当日事实、不注所属请假单区间，整单起止在请假记录页查看。\n全天请假：顶部日级「请假」结论行（如「病假 · 全天 · 已通过」），下方到校 / 离校两节点置灰显示 --:--、括注上学 / 放学时间并标蓝「请假」chip，计请假 1 天（6月17日）。\n签到侧（请假覆盖上学时间）按请假结束时间分流：结束早于入校识别窗口终点的，应签到时间顺延为请假结束时间，晚到计迟到——6月16日 08:00–09:00 请假，09:03 到校计迟到 3 分钟、当日异常，到校节点括注「应到校时间 09:00」；第一阶段不设返校宽限期（后续阶段校级可配）。结束不早于窗口终点的，请假吞没整个入校窗口，签到直接记「请假」、免签到——6月9日 病假 08:00–11:00（盖过上午入校时段终点 10:59），到校节点置灰 --:-- 并标蓝「请假」chip（注明请假期间无需到校打卡），10:52 返校为轻量记录，16:35 签退正常，当日按出勤计、「假」节点标「病假 3 小时」。返校准时性第一阶段不作机器判定，由通行记录留痕。\n签退侧（请假覆盖放学时间）按请假开始时间分流：开始晚于离校时间段起点的，应签退时间提前为请假开始时间（窗口不动）——6月15日 16:10–18:10 请假（晚于下午离校时段起点 16:00），16:07 出校仍早退 3 分钟、当日异常，离校节点括注「应离校时间 16:10」，「假」节点按时间序居离校节点之后。开始不晚于起点的，吞没离校窗口，签退记「请假」、免签退。\n中段请假：6月23日 09:30–10:30 在校中途请假，到离校正常，中间插入蓝色「假」节点，请假期间出返校（09:32 / 10:26 东门）为轻量记录。\n跨天单按当日实际覆盖时段判定，同一张单在不同日期落不同日级状态：病假 6月2日 08:00 – 6月4日 14:00 连续覆盖三个上学日，被完整覆盖的 6月2日 / 3日 按全天请假计（月历连续蓝点），结束日 6月4日 只覆盖到 14:00：上午周期整段被覆盖记请假（到校节点置灰标「请假」），下午应到校时间顺延为 14:00，13:47 到校为按时，16:30 签退正常，按出勤计，时段请假 4 小时（08:00–11:30、13:30–14:00）。\n多单合并：一天多张请假单先合并成并集再判定，逐单判定会漏判或倒挂。6月22日 事假 12:00–14:00 + 病假 14:00–17:00 首尾相接（发起时首尾相接不算重叠），合并成 12:00–17:00 后覆盖放学时间且开始不晚于离校段起点，签退记「请假」；07:44 正常到校、12:03 出校为轻量记录，按出勤计，时段请假按并集计 3 小时（12:00–17:00 与下午时段 13:30–16:30 的重叠）；时间轴为到校 + 首单「假」+ 出校记录 + 次单「假」+ 置灰离校（请假）五节点。6月25日 病假 08:00–12:00 + 事假 12:00–17:00 合并覆盖全天，整日记「请假」、与单张全天单同效（计请假 1 天、圆点蓝）；结论行为「2 张请假单 · 全天 · 已通过」，下方四节点按时间序交错：首单「假」（08:00）→ 置灰到校 → 次单「假」（12:00）→ 置灰离校（16:30），置灰节点均标蓝「请假」chip。\n请假后未返校：6月18日 病假 08:00–11:00 吞没上午入校窗口、签到记「请假」，但请假后未返校、之后再无识别记录，签退缺卡；请假之外当天无任何通行记录，日级记缺勤（小程序 PRD 2.7.5.1.5）：圆点朱红，日详情顶部「缺勤 · 请假之外未采集到到离校通行记录」，计缺勤 1 天、请假 3 小时仍单列为时段请假；时间轴为「假」节点 + 置灰到校（请假）+ 置灰离校（缺卡）三节点，全天无影像，不显示影像清理页脚。请假到期次日仍未到校的提醒见消息口径。\n【缺卡、缺勤与补签】\n按考勤周期判定：签到 / 签退双侧缺卡的周期记缺勤；全部周期缺勤才计当天缺勤，部分周期缺勤计当天异常；非全天请假、请假之外当天无任何通行记录的记缺勤。状态优先级：请假 > 缺勤 > 异常 > 正常。晓乐班一天四次打卡（上午 / 下午两个周期），历史日概要只显示上午到校与下午离校；两个周期都双侧缺卡即全天缺勤。\n某时段未采集到通行记录即缺卡：节点置灰并标朱红「缺卡」chip；当天另一时段有通行记录时按出勤计，统计单列缺卡次数（6月24日 到校缺卡 + 离校早退）。全天无通行记录、无请假且老师未补签的记缺勤 1 天（6月10日）：顶部日级「缺勤」结论行，到校 / 离校两节点置灰 --:-- 并标朱红「缺卡」chip、括注上学 / 放学时间，全天无影像不显示影像清理页脚。缺勤消息经老师人工核对确认后才推送；雨雪天气个别记录可能延迟数分钟。\n老师核对以补签动作向系统留痕，双侧缺卡需两侧分别补签才转正常。补签后该时段按正常考勤计、不计缺卡、圆点回青碧，节点标蓝「老师补签」并留痕补签老师与操作时间（6月19日：王老师 09:15 补签认定 07:50 到校，无通行抓拍）。补签也可反向更正：通行采集正常但实际迟到的（如校徽由他人代带入校），老师补签改为迟到——6月26日 07:52 正常采集到校，王老师 09:20 补签改为迟到且未填实际到校时间：07:52 采集降为轻量通行记录，到校主节点显示 --:--、同标朱红「迟到」与蓝「老师补签」chip，说明行留痕补签老师与操作时间；无实际时间不计迟到分钟数、统计计迟到 1 次，当天仍按出勤计、圆点朱红。\n历史日数据已定格，补请假通过后自动更新。\n【非上学日】\n非上学日也可能采集到通行（周末返校参加兴趣班 / 学校活动）。7月4日（周六）：顶部灰「非上学日」结论行 + 当日通行次数，下方为轻量通行记录节点（7 天内展示影像），无到校 / 离校考勤语义，不参与考勤统计、不上日历圆点。通行消息照常推送家长（安全告知按通行事实触发、不按校历过滤），但标题用中性「通行打卡」而不是「上学 / 放学打卡」（消息页 7月4日 条目为例）。\n【影像】\n家人可在 App 内查看本人孩子的通行抓拍照片与视频，访问留痕可审计；抓拍照片与视频只保留 7 天，7 天前的记录只保留时间与通道等文字信息、页脚注明已自动清理（演示今天为 7月6日，6月29日 及更早的按日视图无抓拍，如 6月5日 / 11日）。到离校推送消息只含时间与事件、不含影像。\n【统计 Tab】\n月份导航切换 7月（本月至今）/ 6月（历史月定格），点月份标题（带 ▾）呼出年月选择器。出勤统计环形图指标：应出勤 / 出勤 / 请假 / 缺勤 / 迟到 / 早退 / 缺卡，迟到计入出勤、单列计数。请假拆为两行：「请假」计全天请假天数（带蓝点，属天级账本、参与环形图），「时段请假」计小时数（无圆点，与迟到 / 早退 / 缺卡同为单列计数）；全天计天、时段计小时，两笔账互不折算，不设「攒够 N 小时进位一天」。时段请假当天仍按出勤日计。「时段请假」为 0 的月份整行不显示（如 7月），固定账目行（出勤 / 请假 / 缺勤 / 迟到 / 早退 / 缺卡）为 0 仍保留。\n6月：请假 4 天（6月17日、6月25日、6月2日 / 3日）+ 时段请假 15.3 小时（6月4日 4 小时、6月9日 / 18日 / 22日 各 3 小时、6月16日 / 23日 各 1 小时、6月15日 0.3 小时；只计与应出勤时段重叠的部分）。蓝点为 6月2日 / 3日 / 17日 / 25日；6月15日 / 16日 顺延后早退 / 迟到为朱红；6月4日 / 9日 签到侧请假、签退正常，与 6月23日 中段请假均为青点。\n下方为逐日出勤月历：整月定格视图，圆点三色与签到 Tab 日历同口径、底部同款图例，点任意日期跳转签到 Tab 看该日时间轴。\n指标快捷筛选：出勤 / 请假 / 缺勤 / 迟到 / 早退 / 缺卡中非 0 的行可点，行尾浅灰箭头为可点标识（0 值行无箭头、纯展示）。点亮后箭头与数值转主题蓝，月历只保留命中日期的圆点并按类别加浅色底（出勤青碧 / 请假蓝 / 缺勤·迟到·早退·缺卡朱红），未命中日期淡化；再点同一行或切换月份取消。一天可命中多类：6月24日 同时命中出勤、早退与缺卡（单侧缺卡当天仍按出勤计）；时段请假 6月9日 / 15日 / 16日 / 22日 / 23日 同时命中出勤与请假，6月15日 / 16日 另分别命中早退 / 迟到；6月18日 只命中缺勤与时段请假；全天缺勤 6月10日 与 6月18日 命中缺勤、不计入缺卡次数。筛选只作用于统计月历。\n【年月选择器】\n点签到 Tab 月历标题或统计 Tab 月份标题呼出半屏年月选择器，快速跳到指定月份（对齐钉钉 / 企业微信考勤的选择习惯）；超出数据范围的月份置灰不可选，年份切换给出范围提示。签到 Tab 选月后展开为整月视图便于挑日期，统计 Tab 选月复用月份切换逻辑（清筛选）。归档视图同样可用。\n【一天六次打卡模式】\n打卡次数由该班班次决定（按班级配置）：晓乐班一天四次（上午 / 下午各到离一次）；有晚自习的班可配一天六次，上午 / 下午 / 晚上各到离一次，经「预览 · 一天六次打卡模式」切换。节点标题统一为「到校 / 离校」，按时间轴顺序与括注的各时段上下学时间（上午 08:00–11:40 / 下午 13:40–16:30 / 晚上 18:00–19:30）区分。今天复用当天打卡记录（午间 11:47 离校 / 13:26 到校），下午离校同样按最后一次出校 16:58 计；晚上两次在演示时点 17:05 尚未发生，显示灰色待打卡节点、打卡后自动更新。\n另有两个按日演示：6月10日 全天缺勤，顶部日级「缺勤」结论行，三个时段共六个节点均置灰 --:-- 并标朱红「缺卡」chip；7月2日 部分时段缺勤，上午迟到、下午正常、晚上两节点置灰并标「缺卡」，不设日级「缺勤」结论行（只在全天缺勤日出现），部分周期缺勤计当天异常、圆点朱红。其余日期与统计 Tab 仍按四次打卡演示。\n【毕业归档视图】\n从毕业态首页进入为已毕业孩子（林晓晴）的归档只读视图：学生卡换为晓晴并标灰「毕业生」chip，顶部只读横幅注明「在校记录展示至 2026年6月30日，可查看至 2027年6月30日」（与首页归档说明卡一致），签到 / 统计 Tab 栏保留。毕业后不再产生新记录、不再推送到离校消息。\n签到 Tab 默认选中最后在校日 6月30日，日历只在在校期间可选：2026年7月起置灰、周与月切换都不进入毕业后区间，向前超出演示数据范围（6月前）给出提示。上学日复用按日概要模板（6月30日 07:45 / 16:12、6月29日、6月26日 为已知时间，6月8日 为迟到日，其余按模板生成）；影像同样按 7 天保留，6月30日 展示抓拍，6月29日 及更早标注已自动清理。晓晴没有异常 / 请假 / 补签 / 非上学日通行数据，这些场景以林晓乐在读视图演示。\n统计 Tab 为只读历史统计，只可查在校期间月份：2026年6月应出勤 22 天、出勤 22 天、迟到 1 次（6月8日）、出勤率 100%；月份切换超出范围给出提示，指标筛选（出勤 / 迟到）与点日跳回签到 Tab 与在读视图同构。',a:[['预览 · 已毕业孩子归档视图（林晓晴）',"attGrad(1);go('sc-atthist')"],['归档视图 · 查看 6月8日（晓晴迟到日）',"attGrad(1);go('sc-atthist');calPick(2026,5,8)"],['归档视图 · 查看 6月出勤统计',"attGrad(1);go('sc-atthist');stuTab('stat')"],['恢复在读孩子视图（林晓乐）',"attGrad(0);go('sc-atthist')"],['预览 · 一天六次打卡模式','att6Toggle()'],['查看 7月2日（迟到日）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,6,2)"],['查看 6月24日（缺卡+早退）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,24)"],['查看 6月10日（缺勤日）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,10)"],['查看 6月19日（老师补签）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,19)"],['查看 6月26日（补签改判迟到）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,26)"],['查看 6月17日（请假日）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,17)"],['查看 6月2日（跨天请假单首日 · 连续蓝点）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,2)"],['查看 6月4日（跨天请假单结束日 · 下午返校）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,4)"],['查看 6月23日（时段请假 1 小时）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,23)"],['查看 6月16日（请假顺延后迟到 3 分钟）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,16)"],['查看 6月15日（请假顺延应签退后早退 3 分钟）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,15)"],['查看 6月9日（请假吞没入校时段 · 签到记请假）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,9)"],['查看 6月18日（签到请假后未返校 · 记缺勤）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,18)"],['查看 6月22日（两单首尾相接 · 签退记请假）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,22)"],['查看 6月25日（多单相接覆盖全天 · 整日请假）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,5,25)"],['查看 7月4日（非上学日有通行记录）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,6,4)"],['查看周末空态（7月5日）',"attGrad(0);go('sc-atthist');stuTab('sign');calPick(2026,6,5)"]]},
 'sc-msgs':{t:'消息（底部 Tab）',d:'底部三 Tab 之一，是提醒的历史记录：即时触达走微信服务号推送（订阅消息），本页用于回看与查证。站内消息与服务号推送一一对应，服务号会话界面见「微信服务号推送示意」页（经上方按钮进入），阶段隐藏的消息两侧同步不展示。\n【列表】\n按「今天 / 近 7 天 / 更早」三档分组，组内按时刻倒序。条目时间按 PRD 12.5「活动时间」分档：当天「今天 HH:mm」，当年内其他日期「M月D日 HH:mm」（月日不补零），跨年标年；只到分钟，不设「昨天 / 刚刚」等相对档（同一条消息始终显示同一个确定时刻）。\n页头为品牌蓝渐变底 + 白色标题与胶囊，条目图标为扁平纯色。条目标题行左标题右时间，摘要单行、超长省略（完整内容点开查看）；不设条目级类别文字 chip 与右侧箭头，类别由图标固定配色区分：到离校＝青（时钟）、放学＝青蓝（铃铛）、请假＝蓝、校徽办理＝橙、家人＝紫、素质评价＝粉（星星）、反馈与提醒＝灰。涉及具体孩子的消息标题统一带孩子名（多孩家长可分辨是谁的事）；家人邀请、添加孩子申请与反馈属账号级消息，不带孩子名。\n未读红点挂在条目图标右上角；底部「消息」Tab 不设数字角标（即时提醒已走服务号推送，本页只供回看，去掉角标避免打扰）。已读状态按家长账号独立（妈妈已读不消爸爸的红点）。\n【读态与筛选】\n顶部读态 Tab：未读 / 已读 / 全部消息（默认全部），右侧并列「全部已读」与「筛选」（与 Tab 同字号）；标记已读后未读 Tab 下条目即时移出。「筛选」弹半屏面板，消息类别与时间范围两组 chip 同屏点选、即选即生效（列表实时过滤、面板不关闭），底部「重置 / 完成」，有非默认条件时入口高亮并加点标。类别七类与图标配色同口径；时间范围近 7 / 30 / 90 / 180 天，默认 180 天＝消息保留上限，更早消息自动清理（该说明置于列表底部）。读态、类别、时间三个条件取交集，命中为空显示空态并引导调整条件。\n【点击落点】\n有能呈现该事件的业务页就直达：打卡 → 校园签到，校徽 → 办理记录 / 记录详情，今天的班级放学 → 智慧放学，请假审批结果 / 代请假 → 请假单详情，加入家庭待确认 → 确认页（待办类消息处理后再点仍落同一页，按请求当前状态呈现结果态，不回放待确认态）。结果类消息落点始终是业务对象的当前状态，不回放消息发出时的历史状态。\n没有业务落点的纯通知才用半屏承载：历史放学事件（智慧放学页只呈现今天的实时状态）、家人邀请结果、扫码核对提醒等。不设独立消息详情页；半屏只展示家长关心的结果信息，不含单号等系统字段与规则说明。\n【到离校与通行】\n到离校通知来自校门无感考勤（含老师补签），缺勤消息经老师人工核对后才推送。推送标题用「上学打卡 / 放学打卡」而不是「已到校 / 已离校」：第一阶段硬件为无源 RFID、无方向感知，进出方向由入校 / 出校时间区间推断、可能误判，所以只陈述「时段 + 打卡」两个确定事实，即使归类误判消息内容仍为真。摘要只保留通行通道（如「东门」），识别方式、考勤结果等细节在校园签到页查看。每次打卡各推送一条：晓乐班一天四次打卡，今天 07:42 上学、11:47 放学、13:26 上学、16:58 放学共四条。\n非上学日的通行（周末返校参加兴趣班 / 学校活动）同样推送（安全告知按通行事实触发），标题用中性「通行打卡」（7月4日 条目，点击直达签到页该日通行记录视图）。\n老师补签：「林晓乐上学补签」（6月19日），摘要含考勤日期、操作老师与认定到校时间；考勤日期单列，因为补签可回溯历史日，消息时间是操作时间。点击直达校园签到页并定位 6月19日（王瑶老师 09:15 补签认定 07:50 到校），与时间轴「老师补签」节点同口径。\n【班级放学】\n列表标题统一为「孩子班级开始放学」，与服务号「放学状态：开始放学」同口径；老师手动放学的服务号卡片一律带「操作老师」；每次设置或调整延迟都推送一次「放学延迟通知」，「原」始终取计划放学时间。四种触发场景：① 老师操作放学：今天 16:44 3年级-2班（林晓乐），王瑶老师发起放学播报。② 学生出校触发：班级出校打卡人数达到校级配置的放学人数时视为开始放学、自动通知，今天 16:58 1年级-1班（林晓阳）。③ 老师操作延迟放学：7月3日 1年级-1班 原 16:50 → 预计 17:20（李航老师操作；学校端暂不支持填写延迟原因，消息与半屏均不含原因）。④ 延迟时间到达：7月3日 17:20 到点自动开始放学并再次通知，半屏留痕本次延迟信息。\n今天两条默认未读、点击直达智慧放学页；①② 另各有一条 7月2日 历史条目（16:42 王瑶老师发起放学 / 16:56 达到人数自动放学），与 ③④ 同为纯通知半屏，「查看放学状态」按钮跳智慧放学页。同一场景今天直达、历史半屏，按事件是否仍在业务页可见而定。半屏字段对齐班级放学通知：班级（含孩子名）/ 放学状态 / 通知说明 / 操作老师（只有 ①）/ 通知时间。\n【请假】\n请假审批结果：通过与「林晓乐请假单未通过」（6月4日，直达未通过单详情，拒绝意见见流转记录）。老师代请假免审生效即推送孩子的全部家人（与生产现行实现一致）：站内「李航老师为林晓阳代请假」，服务号为微信模板 53589「学生请假申请提醒」，点击进请假单详情、卡片带「老师代请」标识。\n销假结果：班主任确认 / 不同意家长的销假申请时推送全部家人——「{孩子名}销假已确认」预览「{请假日期与时段} {请假类型} · {老师}已确认 · 实际 {实际结束时间} 结束 / 整单销假」，「{孩子名}销假申请未通过」预览「… · {老师}未同意销假」（演示分别用晓乐 5月29日 整单销假单与 6月2日–4日 病假单）。老师代销假：「{老师}为{孩子名}代销假」，有处理资格的老师代销假免审即时生效即推送（演示用晓阳 7月3日 的代请假单，代请与代销两条指向同一张单、点开为当前状态）。\n审批结果同步推送孩子的各家人账号、请假期间不推送缺勤消息等口径见请假页说明。\n【校徽办理】\n校徽类消息统一直达对应订单当前状态的演示记录（演示记录的创建时间为各状态独立的演示值，与消息时间线不逐条对齐）：\n催办：班主任在教师端信息确认页「一键提醒未提交」后，向该班全部未提交学生的家人推送「{孩子名}校徽办理提醒」（每次操作触发一次），预览「{提醒老师}提醒：校徽办理信息尚未提交，请尽快完成办理」。演示为今天 10:30 未读，林晓阳所在 1年级-1班 班主任李老师发起，点击直达校徽办理页（默认选中林晓阳），与服务号「校徽办理提醒」模板一一对应。\n审核通过（6月30日）、已寄出（7月2日）、已启用（昨天）为同一单，三条统一直达该单当前状态「部分启用 1/2」。退款到账（6月12日）：已付款单取消办理后退款执行完成，在到账时刻触发（与该记录「退款到账 / 已取消」两行同刻，发起退款时不单独触达），直达「已取消 · 已退款」。取消失败（7月3日）：待审核期间取消办理与审核通过进入生产的竞态，办理继续，直达「生产中」。\n免费校徽回收：零元回收生效时刻触达（零元退款创建即生效、没有到账事件），徽被作废与首张免费额度恢复是须告知的权益变动。演示「林晓乐免费校徽已回收」（3月19日，已读），摘要「免费校徽回收作废，本次办理已关闭，首张免费额度已恢复」，点击直达 2026-03 零元回收归档单详情。服务号复用「校徽办理进度通知」模板（订单状态「免费校徽回收作废」+ 进度说明「本次办理已关闭，首张免费额度已恢复」，受 20 字字段值约束，全文由详情页承载）；已发出的单进度说明为「该枚已停用不可再用，免费额度已恢复」，未关单的单不说办理已关闭（PRD 消息表同步）。\n校徽订单审核未通过为后续阶段，第一阶段隐藏：「待修改信息」状态暂不实现，本条消息与办理记录中的对应记录、筛选 chip 一并隐藏（恢复后为今天 14:20 的未读消息，对应昨天 15:12 创建、今天审核退回的增办单）。消息报事件（审核未通过）、订单标状态（待修改信息，取待办语义）；带待办动作的消息不落已流转的旧单。记录详情可经智能校徽记录详情页的预览入口查看。\n【家人】\n孩子认领：「有孩子待您认领」（6月26日，学校端添加孩子），点击直达孩子管理页并拉起认领半屏；认领成功 / 锁定核实中后再点落孩子管理页看条目当前状态，反馈「这不是我的孩子」后再点只提示认领已关闭。\n认领核实结果（认领锁定转班主任核实的链路）：① 已通过——今天 11:05 未读「李雨桐认领核实已通过」，点击直达孩子管理页并拉起免答题认领确认半屏（核实中条目同步转回「待认领」）；确认绑定后再点同落孩子管理页，在确认半屏内反馈「这不是我的孩子」后再点只提示认领已关闭。② 未通过——7月2日 已读「周*安认领核实未通过」，模糊话术不含原因细节（防枚举），半屏承载结果与出路（联系班主任当面核实，确认后可由老师定向邀请绑定）；周*安为已关闭的认领记录，不出现在孩子管理页，与核实中的李*桐分属两条故事线。服务号深链：有孩子账号同落本页拉起该半屏，零孩子账号改落「未匹配到孩子」承接页并拉起同一半屏（演示入口见服务号推送示意页说明）。\n添加孩子申请：未通过（2月25日）/ 已通过（3月2日），故事线为晓阳先被驳回、核对信息重提后通过；账号级消息，标题不带孩子名。已通过直达孩子管理页；未通过为半屏承载，含重新提交出路（按人设指向零绑定 / 预填两种表单形态）。服务号深链：已通过不分流（审核通过即绑定生效，点击时必然有孩子）；未通过对零孩子账号改落「未匹配到孩子」承接页并拉起同一半屏，「审核中」状态卡随结果移除、提交入口恢复。老师审核时更正过信息的，已通过消息副行为「{孩子}已添加为您的孩子，信息有更正」（副行只显示一行、约 21 字后截断，故去掉「{老师}老师已审核通过，」前缀，保证这句露出；与服务号「位置」同文，超过 20 字时沿用原文案），孩子姓名取通过后的，不列具体改了什么；老师端回传审核通过时，本页「今天」分组即时新增这条消息。\n归档清理提醒：「林晓晴在校记录清理提醒」（7月1日），半屏说明保留期与留存出路，可切到晓晴查看归档记录。已毕业 / 离校孩子的归档记录保留至毕业次学年末 6月30日，真实产品在到期前 30 天推送一次（2027年6月前后），毕业结转当时不发，演示提前置于当前列表。\n家人邀请结果（接受 / 拒绝 / 过期）为纯通知半屏。加入家庭请求（待确认 / 已通过 / 已被拒绝）：「待确认」为确认端视角，点击深链「加入请求」确认页；「已通过 / 已被拒绝」为申请人视角，半屏展示结果与后续出路；两端消息共存于同一演示账号属双视角演示，链路见添加孩子页说明。\n【素质评价】\n素质评价属后续阶段，两条消息、「素质评价」筛选类别与服务号推送卡固定显示。教师端发起点评后即时推送孩子的各家人账号，标题「{孩子名}收到素质评价点评」，摘要＝点评维度 · 点评类型 · 点评项目 · 点评老师。今天两条未读与素质评价页今天的两条点评记录一一对应（15:40 德育待改进「做危险动作」/ 10:26 德育表扬「活动中有契约精神」，均为王瑶老师点评），点击直达点评详情页（与素质评价页记录卡同一详情、含家人已读动态，返回键回素质评价页）。\n今天 09:05 一条已读的「已撤回」条目：老师删除点评后站内条目保留、摘要换成「该点评已被老师撤回」，点击落点评详情的撤回态；服务号侧对应同一时刻的原始推送卡仍是撤回前原文「德育 · 表扬 · 遵守纪律 +1★」（微信模板消息发出后无法撤回），点击落同一撤回态页面（口径见素质评价页说明）。\n【反馈与提醒】\n反馈回复两条：今天 14:32「反馈建议已回复」（功能建议获客服回复，未读）与 7月3日「反馈已回复」（问题反馈），点击均直达反馈详情，回复全文在详情处理进展内。两条消息与「反馈与提醒」筛选类别随「帮助与客服」页演示说明的「显示反馈建议入口」开关显隐，默认显示。扫码核对提醒为纯通知半屏。\n【不在本阶段】\n请假期间实际到校自动核销消息为后续阶段、本阶段隐藏；缺勤提醒与请假到期次日仍未到校提醒为后期补充场景，本次不加入。\n已毕业孩子：毕业后不再产生任何新消息（到离校 / 放学 / 请假 / 校徽推送全部停止），历史消息按 180 天保留上限正常可查、可筛选。',a:[['重置筛选',"msgReadTab('all');msgFilterReset()"],['查看微信服务号推送示意',"go('sc-wxpush')"]]},
 'sc-eval':{t:'素质评价（家长视图）',d:'首页宫格「素质评价」入口（后续阶段，入口固定显示），覆盖德 / 智 / 体 / 美 / 劳五个指标维度，家长侧为只读视图：仅可见自己孩子的统计（星星总数 / 表扬 / 待改进 / 点评次数）与点评记录，教师端发起点评后即时同步；点评同时推送消息通知孩子的各家人（站内「素质评价」类别消息 + 服务号「素质评价点评通知」模板，点击直达点评详情，口径见消息页说明）。头部周期按钮（默认本月）弹「时间筛选」半屏：快捷周期 今日/昨日/本周/上周/本月/上个月/本学期/上学期 + 自定义日期区间（起止胶囊 + 年 / 月 / 日三列滚轮（小程序原生 picker 形态，与请假时间选择器一致；点胶囊切换当前编辑端、滚轮停稳即回写，起止始终有值故无「清除」概念），起止必填；放弃当前自定义区间走半屏底部的「重置」回默认周期；非法输入即时提示并回退上次有效区间），点选即生效、作用于点评记录列表，底部重置/确定；学期取衔接口径——以每年 2月1日 / 8月1日 为学期分割点，假期归入相邻学期、任何日期都落在某个学期内（演示：本学期 2026-02-01～07-31、上学期 2025-08-01～2026-01-31）；自定义区间最长 180 天、开始不得晚于结束，超出即时提示且不生效（与消息 180 天保留上限同口径；原「两端清空为不限时间」口径已废止——不限时间即超过 180 天上限，与上限自相矛盾）；顶部统计卡数字为演示定格值、不随周期重新计算（真实产品随周期联动）；默认本月周期下 6月末的演示记录不可见，切上个月 / 本学期 / 自定义可见。头部「可用积分」行已隐藏（积分明细与兑换属后续阶段；可用积分与星星总数同源，兑换项由学校在积分商城配置）。功能条「评价报告」进入评价报告页（分布 / 趋势 / 统计 / 明细与导出下载）。点评记录支持点评搜索（关键词可命中点评老师 / 点评项目），及「筛选」半屏面板（点评类型 全部/表扬/待改进 × 指标维度 全部/德育/智育/体育/美育/劳育 两组 chip，点选即生效、面板不关闭，底部重置/确定，存在非默认条件时入口高亮加点标，与消息页筛选同构；搜索与筛选为交集过滤，命中为空显示空态）；各维度下的二级指标筛选属后续阶段。教师端以图文点评发出的记录，卡内信息框另有「老师评语」行与图片缩略图（56px，与教师端同款）——记录卡内评语最多显示 3 行、超出截断（评语上限 500 字，点卡片进点评详情看全文，与教师端同口径），缩略图点击全屏查看大图（复用通行抓拍 / 请假证明材料的预览遮罩，点任意处关闭；同一记录多图时左右箭头循环切换、说明行带页码，单图不显示箭头），演示三种形态：今天 15:40 待改进（仅评语）、今天 10:26 表扬（评语 + 2 张图）、7月3日 广播操（评语 + 1 张图）；教师端不带点评项目的图文点评只发评语与图片、不计星星也不生成点评记录，故不出现在本列表。记录卡左下角时间格式：当天「今天 HH:mm」、当年内其他日期「M月D日 HH:mm」（月日不补零）、跨年「YYYY年M月D日 HH:mm」，与点评详情「点评时间」及评价报告明细行同口径。教师端删除某条点评后，本页该条记录移除、星星与四项统计同步扣回，站内消息条目不删除而是保留并标为「该点评已被老师撤回」（点击落点评详情撤回态）——微信服务号已推送的模板消息无法撤回，家长手机上那条推送一直在，条目悄悄消失只会让家长怀疑自己记错或系统丢数据。点记录卡进入点评详情（含家人已读动态）。列表仅展示部分记录（演示，五维各有表扬与待改进示例）。与教师端「素质评价」页互为两侧视图（教师端演示数据尚未同步德育以外的四维记录，两端暂不一致，以本页为准、后续统一同步）。',a:[]},
 'sc-evaldt':{t:'点评详情',d:'素质评价页点评记录卡点击进入：上方为该条点评的孩子信息、类型（表扬 / 待改进）与星星变化，及点评维度 / 项目 / 老师 / 时间——该条带评语或图片时，信息框内同步展示「老师评语」行与图片缩略图（随记录卡就地读取，缩略图点击看大图）；老师删除点评后本页转撤回态：头部标灰「已撤回」chip，信息框只留点评时间与「这条点评已被 X 老师撤回，对应星星已扣回、不计入统计」，点评维度 / 项目 / 星星与评语图片一律不再展示（评价已撤销、不应继续留下印象，待改进类尤甚），已读动态一并隐藏——入口为消息列表中标为已撤回的条目，以及微信服务号里无法撤回的旧推送（两者落同一页面）。常规态下方「已读动态」展示该条点评被哪些家人查看过及查看时间——已读状态按家长账号独立记录，家人打开详情即记为已读，供家人间了解是否都已知悉。演示：当前账号（乐乐妈妈）各条均已读；今天的点评乐乐爸爸尚未查看、不显示行，历史点评两位家人均已读；查看时间为按点评时间推算的演示值。返回键回素质评价页。',a:[]},
 'sc-evalrep':{t:'评价报告',d:'素质评价页功能条「评价报告」进入，与教师端评价报告为同一份报告数据（家长只看自己孩子，演示数据只有林晓乐一人有记录）。顶部为学生信息卡（学号 / 性别 / 评价周期）、周期按钮与「导出报告」，下方四个分区：点评分布、点评趋势、点评统计、点评明细。\n【评价周期】\n周期按钮弹「时间筛选」半屏：本月 / 上个月 / 本学期 / 上学期 / 自定义。自定义为「某月到某月」：起止胶囊 + 年 / 月两列滚轮，最多 6 个自然月，开始不晚于结束，结束月不晚于本月（本年月份列只到当前月），非法输入提示并回退上次有效区间。\n与点评记录列表的按日自定义口径不同：报告的预设周期全部按整月对齐，趋势只能按月画，导出文件按月 / 学期命名，一天的报告没有意义，所以自定义收敛为按月；6 个月上限恰等于一个学期，也等于趋势回看窗口。自定义周期的导出文件名按月区间命名：同年「2026年3月–5月」、跨年「2025年11月–2026年1月」、单月「2026年3月」。\n【点评分布与亮点简评】\n外环为德智体美劳五维加分星星占比（图例列各维加分），内环为表扬 / 待改进星星占比（+18 / −6）；下方「发展亮点」按文案规则生成，只看五维表扬加分星星和（扣分不入简评，由统计表 / 明细承载）。判定依次为：\n① 周期内无任何点评记录：由整页空态承接（见下），简评不会露出。\n② 有点评但全维度加分为 0（全为待改进）：「本周期的点评以待改进提醒为主，各维度的表现亮点仍在积累中，期待下一周期的进步」，不硬造亮点、也不反向排名。\n③ 最高加分低于 3 星（样本不足）：「本周期点评数据较少，各维度发展有待更多观察」。\n④ 最高与最低加分差 ≤1 星（均衡）：「五个维度发展较为均衡，整体表现稳定」。\n⑤ 常规：取加分前二「X、Y 维度表现较为突出，其中 X 维度发展尤为明显」。第一名并列时去掉「尤为明显」半句、改为「并列突出」；第二名并列时连同第一名一起列出（合计最多 3 个维度，超出只提第一名）；只有一维有分时只提该维。\n【点评趋势】\n固定回看 6 个自然月，画各维度星星累计净值折线（各维颜色与分布图例一致）；末月取评价周期的结束月，标题右侧常驻「近 6 个月 · 实际区间」（默认本学期即 2026.02–2026.07，跨年自动带出年份，如 2025.08–2026.01）。本区块是报告里唯一不跟随周期的：周期常选成本月或短区间，跟着走会让折线退化成一两个点；粒度也只能是月（一名学生一个月只有几次点评，按周看基本是 0 / 1 的噪声）。\n纵轴为「星星累计净值」＝该维度自窗口首月起逐月累计的（表扬星星 − 待改进星星），可正可负，零线单独加深。用分数而不是次数：次数只说明被点了多少回，看不出好坏。用累计而不是当月值：读图可与表格互相印证；扣分多于加分的月份会把曲线拉下来，下降段本身就是退步信号。\n周期恰为该窗口时（本学期 / 上学期），折线末点等于「点评统计」表各维的（加分 − 扣分）；周期短于窗口时（本月 / 上个月）两者不等，末点是窗口内的累计（如本月德育统计 +2、折线末点 3），读图以标题旁的区间为准。\n纵轴刻度按数据算：步长吸附到 1 / 2 / 2.5 / 5 乘以 10 的整数次幂（1、2、5、10、20、25、50、100、200、250、500、1000…），随数据量级自适应、不设上限；2.5 档只在量级 ≥10 时启用，保证标签都是整数。下界取 min(0, 最小值) 并向下对齐到步长的整数倍；网格线按需 2–5 条，不硬凑 5 条。五维共用一根轴：某一维远高于其他时低值曲线会挤在零线附近，对数轴对家长不友好，接受这个代价。\n【点评统计与明细】\n点评统计为五维「点评次数 / 加分 / 扣分」表格与合计（本学期 16 次 / +18 / −6，与素质评价页头部统计同源，含 5 条未在点评记录列表展示的历史点评）。点评明细按维度折叠分组：组头为「维度（次数）」与星星净值，展开列该维度点评记录（只展示部分记录），右上角为星星总数 +12。\n报告全部区块由一份条目级演示数据（日期 × 维度 × 项目 × 星星）按「学生 × 周期」聚合而成，切周期整页联动，统计表、明细、星星总数与趋势末点天然互相对得上。\n【空态】\n周期内无任何点评记录时转整页空态：四个分区整体收起，换成插画 +「本周期暂无点评数据」+ 一句去路说明与「切换评价周期」按钮；头部学生卡、周期按钮与「导出报告」保留（空态多半是周期选错了，切周期的入口要留在手边）。空态下「导出报告」与右下「下载」浮钮一并拦截，提示「暂无点评数据，无法导出」。\n【导出】\n右下「下载」浮钮与「导出报告」是同一动作的两个入口：均按当前学生 × 当前周期生成一份新报告，入队「生成中」并跳转下载评价报告页，约 2.5 秒后转「已生成」。报告页较长，头部按钮滚动后就看不见，浮钮让同一动作在任意滚动位置都够得着。\n【演示数据】\n两段数据：本学期 2026.02–07 共 16 条（16 次、+18 / −6、净 +12），上学期 2025.09–12 共 12 条（12 次、+16 / −2、净 +14）。四个预设周期正好覆盖亮点简评的四个分支：本学期为常规（德育、智育突出），本月为样本不足（3 次、最高加分 2 星），上个月为全是待改进（仅 1 条 −2，外环无加分可分、整环置灰），上学期为均衡（各维加分 3 / 3 / 3 / 3 / 4，极差 1）。\n空态由「周期内无点评记录」自然触发（自定义到 2026.01 这类无记录区间即可看到），也可用「预览无点评数据（空态）」强制切换（刷新恢复）。',a:[['时间筛选：自定义 2026年3月–5月',"evrPick('custom');mrR.s='2026-03';mrR.e='2026-05';evrOk()"],['预览无点评数据（空态）','repEmpty(1)'],['恢复演示数据','repEmpty(0)'],['进入下载列表',"go('sc-evaldl')"]]},
 'sc-evaldl':{t:'下载评价报告',d:'评价报告页「导出报告」或右下「下载」浮钮进入。顶部提示文件保留 30 天后自动删除；列表分「生成中 / 已生成」两组，组头带数量与「清空」。「导出报告」将按当前报告周期命名的 Word 文件入队「生成中」，约 2.5 秒后转入「已生成」并可下载（演示节奏；真实产品生成时长视数据量而定、完成后另有消息提醒属后续阶段）；演示含一条生成失败记录（生成失败不占用已生成配额，可回报告页重新导出）。「下载」触发浏览器真实下载演示报告 Word 文件（按条目文件名下载对应文件，各文件内容为同一演示报告，条目上的文件大小为演示值；真实产品为小程序侧下载后打开 / 转发文件）；「清空」为演示交互，列表数据刷新恢复。返回键回评价报告页。',a:[['导出一份新报告','repExport()']]},
 'sc-dismiss':{t:'智慧放学（家长视图）',d:'首页宫格「智慧放学」进入，与教师端「智慧放学」播报控制台互为两侧视图。每个孩子一张卡，卡内按该班的班次段展示今天的放学状态。头部日期时钟自演示基准时点 17:05:47 实时走秒（日期与其余演示数据定格）。\n【为什么按孩子卡、不按全局批次】\n学校端「学生班次」按班级配置段数（一天打卡 2 / 4 / 6 次 = 1 / 2 / 3 段）、各段起止时间与别名（上午 / 下午 / 全天 / 晚上），批次是班级属性。全局批次 Tab 有三个解不开的问题：别名冲突（晓乐班第 1 段叫「上午」、晓阳班第 1 段叫「全天」）；单段班次在「下午」Tab 下被标「没课」造成误导（孩子 17:00 才放学）；按位序对齐会拆散同时放学的孩子。所以按孩子卡组织，未配置的段不出现行，没有「没课」伪状态。旧版页面（全局批次 Tab + 年级放学看板）整页保留为设计存档，经上方入口进入。\n【孩子卡】\n卡头为头像 + 姓名 + 班级，卡内为「主行 + 摘要」两层。主行是当前最相关的段：取第一个未结束段，放学中的段优先；已放学的段要到下一段入校开始时间才让给下一段；系统收口的段即时沉入摘要；全部已放学取最后一段（与老师端同一规则）。主行别名用该班配置的别名、字号加大，状态 chip 与时间相邻成短语（已放学 16:44 / 延迟放学 预计 17:20 / 未放学 20:30 放学），家长进页即答「现在放学没有 / 几点放」。其余段压缩为一行灰字摘要（如「上午 11:48 已放学」）。\n未放学段显示计划放学时间（取该段班次配置的下课时间），灰字常规字重，与实际播报时间（深色加粗）区分：计划只是参考，实际以班级播报为准，常有几分钟浮动（该口径不上屏）。\n不设「当前」chip（主行的位置与字号已表达重点，全部段结束时「当前」会落在已放学的段上，语义别扭）；页顶不设规则提示条，「播报后 10 分钟内为放学中」的机制家长无需理解。\n【状态】\n未播报为「未放学」（灰）；班级播报后 10 分钟内为「放学中」（橙），超时转「已放学」（青碧）。延迟放学（朱红）是未放学的子状态：老师在学校端对尚未播报的班级操作延迟（只选择延迟后的预计时间，暂不支持填写原因），主行只显示预计时间，原计划时间不上屏（由消息中心「放学延迟通知」对照），实际播报后仍走放学中 → 已放学。\n放学播报只到班级聚合维度、不播报个人信息；孩子出校门即推送离校通知。\n未播报段系统收口（PRD 8.3）：某段的离校时间段（考勤窗口）结束时仍未播报（老师未操作、出校人数未达阈值、也未设延迟），系统把该段直接置为「已放学」，不显示播报时间（不拿计划时间冒充）、不推送班级放学通知；收口按段独立，上午段未播报不影响下午段流转。延迟段不需要收口，到预计时间由自动播报接管。教师端对收口班级显示「未播报 · 已结束」。\n收口实际只对非末段起作用：学校端「学生班次」把每个班次末段的离校截止固定为 23:59（单段班次即末段），末段收口在当天结束才触发、家长端无感；非末段收口后一定沉入摘要行，「已放学且无时间」不会成为主行。末段漏播时家长当晚看到的始终是「未放学 + 计划放学时间」，第一阶段接受：自动阈值覆盖多数情况，老师 23:59 前仍可补播，孩子本人是否离校由放学打卡通知承载，不按「下课时间后 N 分钟」猜测收口。\n【休息日 / 无班次】\n孩子的班级当天没有任何班次段时，孩子卡转卡级空态：卡头照旧，主行位置显示灰字「今天没有课」，没有状态 chip 与时间。休息日即「所有孩子同时无段」的特例，不做独立判定，多孩混合形态（一个孩子的班有段、另一个没有）自动兼容。保留孩子卡结构而不是整页空态，家长仍能看到自己的孩子、不误以为数据丢失。「今天没有课」口语化、可扫，周六返校活动等无班次但孩子到校的场景下按口语理解也不会错。\n【演示编排】\n晓乐班（3年级-2班）一天打卡 4 次两段：上午 11:48 已放学，下午 16:44 已放学（播报后 16:47–16:58 出校，离校时间以最后一次出校 16:58 为准）。晓阳班（1年级-1班）一天打卡 2 次单段：全天 16:58 放学中。同屏演示不同班级段数 / 别名不同的真实形态。\n「预览 · 班级延迟放学」：1年级-1班 原 16:50 → 预计 17:20，与该班 16:58 放学中的默认演示互斥。\n「预览 · 晓乐班配置第三段（晚托）」：为晓乐卡追加晚上段 17:31–20:30（未放学）；演示时点 17:05 尚未到晚上段入校开始 17:31，主行仍停在下午段「已放学 16:44」，晚上段沉入摘要行；晓阳班不受影响（第三段是否存在按班独立）。\n「预览 · 上午 11:00 时点形态」：模拟家长上午打开本页，全部段尚未播报、各段转未放学并显示计划放学时间（晓乐主行＝上午 · 11:30 放学、摘要「下午 未放学」，晓阳主行＝全天 · 16:50 放学），头部时钟改从 11:00:00 起走秒（手机状态栏时间仍定格 17:05）；可与延迟 / 第三段预览叠加（延迟＝老师上午即提前操作延迟），再点恢复。\n「预览 · 休息日 / 无班次形态」三态循环：正常 → 晓乐班当天无班次的混合形态 → 休息日全部无段 → 恢复；无段孩子没有可延迟 / 可追加的段，延迟与第三段预览对其自然失效。\n「预览 · 未播报段系统收口」：晓乐班上午段收口后沉入摘要行写作「上午 已放学」（主行仍为下午 · 已放学 16:44）；晓阳为单段班次、末段截止 23:59，当天没有收口形态、卡片不变。与上午 11:00 时点预览互斥（窗口未结束无从收口，开启时自动关闭上午时点）。\n【其他】\n年级放学看板（全校维度）为后续阶段，随旧版存档保留；恢复时按「班级格子各自展示本班段 / 时间」另行设计，不复用全局批次 Tab。\n已毕业孩子：本页只呈现当天实时放学状态，对毕业孩子没有内容可展示；毕业态首页已隐藏「智慧放学」宫格，本页不设毕业态。',a:[['进入旧版智慧放学（设计存档）',"go('sc-dismiss-old')"],['预览 · 上午 11:00 时点形态','dnMornToggle()'],['预览 · 班级延迟放学','dnDelayToggle()'],['预览 · 晓乐班配置第三段（晚托）','dnEvToggle()'],['预览 · 休息日 / 无班次形态','dnRestToggle()'],['预览 · 未播报段系统收口','dnCloseToggle()']]},
 'sc-dismiss-old':{t:'智慧放学（旧版 · 设计存档）',d:'设计存档：本页为旧版智慧放学（全局批次 Tab + 年级放学看板），已被主版本（孩子卡 × 班级班次段）取代——学校端「学生班次」按班级配置段数 / 时间 / 别名后，全局批次 Tab 无正确文案可选、「没课」对单段班次成为误导、位序对齐拆散同时放学的孩子（详见新版页面演示说明）。存档保留完整交互与当时的设计权衡记录（含「没课」多轮文案改定、第三段 Tab 显隐规则），仅经新版演示说明进入，返回键回新版页面。以下为原演示说明：白色头部含日期时钟（自演示基准时点 17:05:47 起实时走秒，日期与页面其余演示数据保持定格）与批次切换。批次对应学校端班次设置的第 1 / 2 / 3 段——每班起止时间可配、班次可不同、第三段可缺省且未必在晚上；Tab 保留「上午 / 下午 / 晚上」友好命名（学校端后续提供「批次别名」配置，别名下发后 Tab 显示别名）。第三段 Tab 按配置显隐：本账号孩子（3年级-2班 / 1年级-1班）的班次均未配置第三段，「晚上」Tab 默认隐藏（显隐规则：任一孩子的班级配置了该段即显示），经本说明上方按钮模拟部分孩子配置第三段的混合形态——Tab 显示并切入：3年级-2班（林晓乐）配置第三段 19:00 开始、演示时点显示灰「未放学」，1年级-1班（林晓阳）未配置、显示「没课」，两种状态同屏演示不同班级班次可不同的真实形态；年级放学看板（后续阶段全校视图）显示时「晚上」Tab 同步显示（看板覆盖全校，4年级、5年级、6年级配有第三段）。孩子所在班级未配置当前批次段时状态标「没课」（本次迭代多轮改定并参考竞品定稿：「无本段安排」含排班系统词汇「段」→「无放学安排」否定「放学」易误读为一直上课不放学 →「无在校安排」精确但为设计语言、理解成本高 → 最终采用家长口语「没课」——两字可扫、零翻译成本、无否定歧义；权衡记录：第三段若为晚托 / 延时服务严格说非「课」，但口语语义即「该时段不用到校」，即便按正课理解行动结论（不用接）也不会错，理解速度收益优先于内容中立的理论精确）。本阶段页面仅保留「我的孩子」卡：进入即显示全部孩子（林晓乐、林晓阳）所在班级的放学状态，班级播报后 10 分钟内为「放学中」（橙），超过后转「已放学」（青碧），未播报为「未放学」；放学中 / 已放学在状态下方显示班级放学时间（页面配色随品牌晴空蓝主题）。后续阶段：按年级分卡的全校放学看板（统计行 + 班级格子）与页头「筛选」（年级 × 放学状态双维度过滤，状态筛选只保留匹配的班级格子并隐藏无匹配班级的年级卡，统计行保持年级全量概览）本阶段隐藏，可经上方「预览 · 年级放学看板（后续阶段）」切换显示（会话内生效，同步显示「筛选」按钮）。演示编排（下午批次）：3年级-2班 16:44 已放学（林晓乐播报后 16:47–16:58 出校，离校时间以最后一次出校 16:58 为准，口径一致）、1年级-1班 16:58 放学中（林晓阳）、4年级-1班 17:02 放学中；上午批次=午间离校全部已放学；晚上批次（看板预览）=4年级、5年级、6年级第三段 19:00 未开始。延迟放学（本次迭代新增）：老师在学校端可对尚未播报的班级操作延迟放学（仅选择延迟后的预计时间，暂不支持选择 / 填写延迟原因）——延迟是「未放学」的子状态，仅预计时间推后，实际播报后仍走 放学中（10 分钟）→ 已放学 流程；家长端孩子卡状态转朱红「延迟放学」，下方仅显示预计放学时间（与其他状态的单行时间同版式；原时间 16:50 不上屏，由消息中心「放学延迟通知」推送承载，本页仅演示状态呈现）；年级放学看板中延迟班级格子同标朱红并显示预计时间，统计行与状态筛选按未放学归类；经上方「预览 · 班级延迟放学」切换演示——1年级-1班 原 16:50 → 预计 17:20（会话内生效，与该班 16:58 放学中的默认演示互斥，再点恢复）。放学播报仅到班级聚合维度、不播报个人信息，孩子出校门即推送离校通知；与教师端「智慧放学」播报控制台互为两侧视图。已毕业孩子口径：本页仅呈现当天实时放学状态、对毕业孩子无内容可展示，毕业态首页已隐藏「智慧放学」宫格入口，本页不设毕业态。',a:[['预览 · 班级延迟放学（旧版）','disDelayToggle()'],['预览 · 部分孩子配置第三段（旧版）','disEvToggle()'],['预览 · 年级放学看板（后续阶段）','disBoardToggle()']]},
 'sc-leave-tab':{t:'请假',d:'首页宫格「请假」入口进入。记录列表为卡片式（参照主流请假应用版式）：标题即假期类型（病假 / 事假）+ 状态角标，开始 / 结束时间 kv 行，底部为请假学生（头像 + 姓名）与提交时间，审批人、自动核销、退回原因等过程信息收在请假单详情页中。列表按提交时间倒序，每页 20 条、上拉加载下一页，全部加载后底部显示「没有更多数据了哦」（演示数据不足一页，一次展示完并直接显示该提示）。30 分钟粒度发起（最少可请 0.5 小时）；点击任意记录卡进「请假单详情」页（单页模板按状态渲染，详见该页演示说明）；无任何记录时显示空态（图标 + 「暂无请假记录」+ 引导文案，底部发起按钮保留为主操作，可用上方按钮切换预览）；状态筛选（本次迭代新增，与校徽办理记录列表同构）：「请假记录」标题与筛选条固定在列表上方（滚动时不动），「全部」固定 + 状态 chips 横向滑动（待审批 / 已通过 / 销假待确认 / 已销假 / 已撤销 / 未通过），点选即过滤，命中为空显示空态提示；待审批单可在详情页撤销——二次确认后详情与列表就地变为「已撤销」，老师端该单移出「待我审批」。销假（本次新增）：已通过的单（含老师代请、原结束时间已过的历史单——补销假不设时限）可在详情页发起销假，填实际结束时间与说明后提交转「销假待确认」（时间滚轮点「取消」回到申请销假半屏，已选时间不变、已填理由保留），班主任确认后转「已销假」，请假区间缩为「开始 ~ 实际结束时间」、时长按新区间重算，考勤按设计文档第 6 节以新结束时间回溯重算；实际结束时间等于开始时间即整单销假。「已销假」为独立状态，不复用「已撤销」（撤销发生在审批前、老师未受影响；销假发生在生效后，须通知老师与全部家人并重算考勤）。列表预置一张已销假单（5月29日 事假，整单销假、王老师确认），对应消息「林晓乐销假已确认」见消息页。记录列表跟随当前孩子（本次迭代由家庭维度改为按孩子）：从首页宫格进入即当前选中孩子的记录，页面标题与底部发起按钮带孩子姓名、发起表单标题同步；消息或演示入口直达某单详情时，返回列表自动同步到该孩子（如晓阳的老师代请单）。老师代请假单（林晓阳 · 7月3日 周五 病假，请假必须落在上学日的应出勤时段）：老师在教师端为学生代提交，即时生效、无需家长审批，状态口径为已通过、参与「已通过」筛选，卡片类型旁带「老师代请」标识（该标识不占状态位），详情流转记录显示提交人为李航老师（1年级-1班班主任，代请假）与「生效」节点，家长侧只读；晓乐视图亦有一单老师代请（6月16日 事假 8:00–9:00 · 王老师代登记，与签到页该日「请假顺延后 09:03 到校 · 迟到 3 分钟」演示数据对应）；对应的消息通知见消息页。跨天请假单（6月2日 08:00 – 6月4日 14:00 病假 · 已通过）：一张单连续覆盖多个上学日、结束时间不覆盖结束当天——「时长（上学日）」计 2 天 4 小时（被完整覆盖的 6月2日/3日 计 2 个整天，结束日 08:00–14:00 与应出勤时段重叠 08:00–11:30、13:30–14:00 计 4 小时，与统计页「请假 2 天 + 时段请假 4 小时」同口径）；考勤侧同一张单在不同日期落不同日级状态：6月2日/3日 记全天请假（签到页月历连续蓝点），6月4日 按当日实际覆盖时段判定为签到侧请假（下午返校、当日按出勤计），判定口径见签到页说明。后续阶段（第一阶段隐藏）：退回补充同单迭代（V1→V2）与请假期间到校自动核销为「实际到校」暂不做，对应记录卡已隐藏、筛选 chips 不含这两个状态，可用上方预览入口查看。缺勤提醒口径：只有审批通过的请假才不计缺勤——待审批期间按正常考勤判定，当天未到校仍会经老师核对后推送缺勤消息（老师核对时可见该生当日待审批请假单、可直接审批），审批通过后已产生的缺勤待核项自动核销、考勤回溯改判为请假；请假期间不推送每日缺勤消息，仅在请假到期次日仍未到校时提醒家长。已毕业孩子口径：切到晓晴后仅显示其在校期间的历史请假单（演示为 2026年4月14日 全天病假一单，日期避开签到归档月历的 6月 演示范围以免口径冲突）、详情只读，底部发起按钮隐藏（不可再为毕业孩子发起请假，页面不放说明横幅、口径收录于此）。\n【数据】\n请假单与老师端、学校端共用一份数据（存在本地）：在这里发起请假、撤销、申请销假或撤回销假，老师端「待我审批」与学校端请假管理同步可见；老师端审批、确认 / 不同意销假、代请假、代销假后，本页列表与打开中的详情自动刷新。发起请假提交后生成一张待审批单，排在列表最前。演示「今天」为 7月6日 17:05。上方「恢复请假演示数据」把共用的请假数据恢复初值。',a:[['恢复请假演示数据','lvDemoReset()'],['查看晓阳的请假记录（含老师代请）',"lvChild('林晓阳');go('sc-leave-tab')"],['查看已毕业孩子的历史请假单（晓晴）',"lvChild('林晓晴');go('sc-leave-tab')"],['切换空态预览','lvEmptyToggle()'],['查看老师代请假单（晓阳）',"openLeaveDetail('yang')"],['预览 · 退回补充单详情（后续阶段）',"openLeaveDetail('leback')"],['预览 · 实际到校单详情（后续阶段）',"openLeaveDetail('leauto')"]]},
 'sc-me':{t:'我的（重构版）',d:'参考竞品版式重构：天空蓝渐变头部为家人账号聚合区（主头像叠当前孩子小头像——随首页 / 账号切换的身份切换联动，本次迭代实现，此前固定为晓乐；账号手机号）：点头像 / 昵称区进「个人资料」整页（设置行式，详见该页演示说明）；存在待认领孩子时右侧显示琥珀提醒 chip，点击与站内消息「待认领通知」/ 服务号推送卡同一链路：落「孩子管理」子页并直接拉起认领半屏（取消或反馈后家长直面条目当前状态）；仅 1 个待认领时直拉半屏，多于 1 个时只落列表由家长自选（演示数据固定 1 个）。下方为账号维度数据栏（孩子 2 人 / 校徽 6 枚 / 家人 2 人，分别直达孩子管理 / 智能校徽「我的校徽」Tab / 家人列表页；数字不随孩子切换，认领成功后孩子数 3→4；校徽数口径为在读孩子名下未停用的校徽（已启用 + 待核验，已停用不计），与「我的校徽」Tab 同源实时计算——演示数据为林晓乐 已启用 2 + 待核验 4 = 6，在该 Tab 核验启用只是待核验转已启用、总数不变，停用一枚则减 1（原型内停用为演示 toast、不改状态）（本次迭代改定：此前为写死的「3 枚」，与列表数据对不上）；家人数为当前选中孩子的家人数；原「本月请假」格已移除，请假入口在首页宫格）。两张宫格卡片：「孩子与授权」= 添加孩子（绑定三通道）/ 邀请家人（直达整页邀请表单，演示以林晓乐为例）/ 人脸录入（在本标签打开外链原型页——人脸照片上传流程另行维护、不在本原型内，返回本原型请用浏览器后退；该卡随之由两列改为三列）；「账号与帮助」= 账号切换（进账号切换整页，师长双身份单选即切，详见该页演示说明）/ 帮助与客服。人脸识别授权（opt-out）与告知书及签署记录两个宫格入口为后续阶段、本阶段隐藏，可经上方预览按钮进入。页脚「用户协议 · 隐私政策 · 儿童信息保护规则」可点，打开对应协议阅读页（V0.2 全文），排列顺序与登录页、协议确认半屏一致。消息设置本阶段隐藏；退出登录入口收于账号切换页右下浮钮（本页原退出列表项保持隐藏）。已毕业孩子口径：数据栏「孩子 / 校徽」计数仅统计在读孩子与其校徽（毕业生林晓晴与其毕业注销徽、离校生林晓帆均不计入，演示数据为 2 人 / 6 枚，解绑林晓晴后不变），毕业孩子经「孩子管理」查看与解绑。底部「我的」tab 右上角红点：存在待认领孩子时常亮，与头部「N 个孩子待认领」chip 同源——认领成功、验证锁定转核实中、反馈「不是我的孩子」三条出路均同步消失，不因进入本页而清除（待办信号而非未读信号）；「消息」tab 暂不加未读红点。',a:[['预览 · 人脸识别授权（后续阶段）',"go('sc-face')"],['预览 · 告知书与签署记录（后续阶段）',"openSheet('notice')"]]},
 'sc-help':{t:'帮助与客服',d:'「我的-账号与帮助」宫格进入。按「自助 → 人工」排布：顶部为问题搜索框（关键词即时过滤，匹配问题与答案全文，「搜索」钮同为触发入口）与问题类型筛选条（常见问题（即全部）/ 智能校徽 / 到离校提醒 / 请假 / 家人与账号，横向滑动，与搜索取交集，无匹配时显示空态引导），问题标题带【类型】前缀与筛选条同口径；常见问题折叠列表（点击展开/收起，覆盖校徽丢失停用与补办 / 补办发放进度 / 到离校提醒订阅与时间口径 / 请假发起 / 家人邀请 / 名册信息核正等七条高频问题，答案与对应业务页口径一致）；人工入口收于底部固定操作栏（与请假列表页同构，不随筛选后的问题列表高度抖动）：在线客服（真实产品调起微信客服会话，人工服务时间工作日 8:30–17:30）、联系客服（调起拨号 400-880-6688）、反馈建议（进「我的反馈」记录列表，提交入口收于列表页底部悬浮按钮，提交 / 查看在同一对象页内闭环）；「反馈建议」显示时为主按钮、联系客服为次按钮，隐藏时联系客服回归主按钮。「在线客服」入口默认隐藏、「反馈建议」入口默认显示，均可由本说明上方开关切换；「反馈建议」隐藏时仍可用上方按钮进入其页面；「反馈建议」开关同时控制消息页「反馈已回复」消息与筛选面板「反馈与提醒」类别的显隐（与入口同口径，关闭时若消息列表正按该类别筛选则自动回到全部类别）。',a:[]},
 'sc-fblist':{t:'我的反馈',d:'帮助与客服「反馈建议」进入。卡片式列表（与请假记录同构）：类型标题 + 状态角标 + 内容摘要单行 + 提交时间，点击进反馈详情。状态两态：已提交（提交后即为此态，含客服处理期间）/ 已回复（客服回复后转入，回复全文见详情）；顶部状态筛选条与请假记录同构（「全部」固定 + 状态 chip），筛选无命中显示「暂无该状态的反馈记录」提示。无任何记录时显示空态（图标 + 「暂无反馈记录」+ 引导文案，筛选条一并隐藏，底部「＋ 提交反馈」保留为主操作，可用上方按钮切换预览），空态下提交的反馈即列表第一条记录。底部悬浮「＋ 提交反馈」弹半屏表单（功能建议 / 问题反馈单选 + 内容必填 + 可选上传图片——与请假证明材料同款网格，最多 5 张、单张上限 10 MB），提交后以「已提交」置顶插入本列表并重置筛选到全部（演示数据，刷新后重置），真实产品进入客服工单流转、进展以消息通知。',a:[['切换空态预览','fbEmptyToggle()']]},
 'sc-fbdetail':{t:'反馈详情',d:'反馈记录列表点击进入的单页模板，按记录渲染：类型 + 状态角标（已提交 / 已回复两态）、反馈全文与截图（如有，点击全屏查看）；处理进展时间线：提交 → 回复（未回复的反馈仅提交节点），官方回复全文附于回复节点下。全部只读。',a:[['查看已提交反馈',"openFbDetail('open')"],['查看已回复反馈',"openFbDetail('replied')"]]},
 'sc-guardians':{t:'家人（当前孩子）',d:'「我的」数据栏「家人」格进入，家人管理的唯一入口（本次迭代调整：孩子详情页不再重复展示家人列表）。家人不是账号级关系（界面术语，机制上即家庭成员），而是每个孩子各自的集合，多孩家庭各孩子的家人可以不同；每个孩子的家人上限 6 人（按学生计，已绑定 + 邀请中合计），「家人」标题右侧只显示余额「还可邀请 N 人」、满员显示「已满 6 人」，发出 / 取消邀请、对方加入后即时刷新（上限规则本身不在页面展示，收于本说明）；本页仅显示当前选中孩子的家人：顶部孩子信息头随当前孩子切换（本次迭代实现联动，此前固定为晓乐），列表展示关系 / 姓名 / 手机号 / 绑定状态（本人标注，「我的关系」在孩子详情页修改后本页本人条目联动更新）；在首页或账号切换中切换孩子后，本页随之切换为该孩子的家人集合。底部「邀请家人」跳转整页邀请表单；邀请规则：仅被邀请手机号注册或登录后确认即加入、无需邀请人审核，其他手机号收到链接也无法加入；72 小时有效、到期自动作废并消息提醒邀请人（附一键重发，接受/拒绝/过期三种终态均有回执）——定向免审的邀请若长期悬挂，二次放号后可能被新号主误领，故设短时限；对方加入前可随时取消，防链式扩散。审批结果与缺勤通知同步全部家人；免费首枚校徽按学生计，家人不可重复领取；任一家长不可单方解绑对方，监护权变化由学校端仲裁。演示流转：点「邀请家人」进表单发出 → 回本页列表出现「邀请中 · 等待加入」条目、右侧余额同步减 1（可多条并行，绑定 + 待加入合计不超 6 人，达上限时右侧显示「已满 6 人」、入口点击提示）→ 行尾「取消」或点条目在详情半屏内取消；「模拟对方已加入」（邀请中条目转为已绑定，余额不变）由本说明上方按钮触发；被邀请人侧确认页也可从上方按钮进入。已毕业孩子口径：家人关系保留只读（各家人均可回看该孩子历史记录），但隐藏「邀请家人」入口与右侧余额提示——不再产生新数据的孩子无新增授权的意义（切到晓晴后本页即此形态）；演示简化：各孩子的家人集合演示数据恰好相同（妈妈本人 + 爸爸），机制上按孩子各自维护、可以不同，邀请中条目等流转演示以晓乐视角为例。',a:[['演示：模拟对方已加入','famJoined()'],['被邀请人视角 · 邀请确认页',"go('sc-faminvite')"]]},
 'sc-kids':{t:'孩子管理',d:'「我的」头部或数据栏「孩子」格进入：账号下全部孩子的列表，点孩子进详情（编辑孩子信息与监护关系）。家人列表与邀请管理在「我的-家人」页，家人按孩子归属而非账号级，多孩时各孩子的家人集合可不同。\n【列表与标签】\n列表为账号级、不按学校筛选：已绑定孩子跨校平铺，副行印着各自的学校 · 班级即可区分；流程态条目本就是账号级（还不是任何学校的正式成员，外校二孩的审核中申请也没有可切换的学校上下文）。\nchip 统一为状态维度、异常才亮：流程态（待认领 / 核实中 / 审核中 / 待家人确认）为琥珀色，学籍态（毕业生 / 离校生）为灰色；已绑定在读孩子不带标签，无标签即正常。绑定来源（名册已匹配 / 教师邀请 / 人工申请）不作列表标签，由孩子详情页承载；认领流程内的绑定确认页仍保留「名册已匹配」提示（说明该记录来自名册命中）。\n顺序：已绑定在读孩子在前（外校孩子排在本校之后），流程态条目在归档条目之上，毕业生 / 离校生沉底。\n计数：「我的」头部待认领提醒只统计可操作的待认领条目（核实中锁定条目不计，演示为「1 个孩子待认领」）；数据栏孩子数只计已绑定在读孩子（核实中 / 审核中未绑定，离校生与毕业生为归档，均不计，演示为 2 人，认领成功后 +1）。\n【待认领与认领】\n学校名册命中但尚未认领的孩子以「待认领」条目常驻本页：打码展示、零可见性（认领确认前不开通任何数据），点击进认领确认半屏。「有孩子待您认领」站内消息与服务号推送卡深链同样直达本页拉起该半屏；零孩子账号无主 App 形态、本页无从到达，认领通知深链改落「首次绑定孩子」整页，同口径验证（演示账号有孩子，零孩子分支不在本页演示）。\n认领先补全被打码的姓名字：填空式「王 _ 明」，只输被星号遮住的字（可见字明文可抄，验证强度与输全名等价，也避免在可见字上打错白耗次数；演示正确答案：一）。再确认监护关系：学校端录入学生时已登记各监护人手机号对应的关系，半屏带出预填（演示：妈妈），不符可修改（只预填、不加辅注）；修改只作用于小程序侧关系标注、不回写学校名册、差异不阻断绑定；名册未登记关系的老数据为空白必选（绑定后可修改）。认领成功后「我的」头部待认领提醒消失、孩子数 +1。\n输错返回统一模糊反馈并限频；连续 3 次未通过认领锁定：条目转「核实中」（保持打码），再点提示已锁定，转交班主任核实后以消息通知结果（演示数据，刷新恢复）。\n错配（录错号 / 二次放号）可点「这不是我的孩子」反馈：记录隐藏、不予绑定。据此给班主任生成「名册核正」待办（反馈者账号不下发学校，重复反馈去重限频）、核正后向正确号码重新下发认领通知，为后续阶段。\n【核实通过后的免答题确认】\n经上方「模拟：班主任核实通过（李*桐）」演示：家长收消息通知，李*桐条目转回「待认领」（核实通过后家长的下一步与待认领同类，差异只在验证方式，由半屏内部表达；条目重新计入头部待认领提醒）。点击弹认领确认半屏（「认领核实已通过」站内消息与服务号推送卡深链同样直达本页拉起该半屏），以教师人工核实替代答题验证：信息卡带「班主任已核实」chip、解除打码展示李雨桐全名，免答题、只确认监护关系（名册登记关系预填、可修改），点「确认认领并绑定」即绑定（保留家长确认关系与最终确认两环节，不做教师代绑）。确认后条目转普通已绑定条目、孩子数 +1，校徽办理页「李*桐」chip 同步转为可办理。\n本半屏同样保留「这不是我的孩子」：教师核实的是名册预留号码没登记错，家长才是监护关系的最终权威，此刻解除打码、家长首次看到全名，正是识别错配的时点。反馈后本次认领关闭：条目隐藏、办理页 chip 同步移除，回流班主任二次核实名册，「认领核实已通过」消息再点提示认领已关闭（演示数据，刷新恢复）。教师端核实不通过则发统一模糊话术通知（防枚举，不在本页演示）；教师侧在学生管理「待审核」的「家长认领」中核实。\n【审核中申请】\n经「添加孩子」人工申请提交后，列表在归档条目上方插入琥珀色「审核中」条目：只回显家长自填的姓名与校班，审核通过前不可见孩子任何数据、孩子数不 +1（演示数据，刷新恢复）。\n【老师审核时更正了信息】\n老师审核时可以改学生姓名、性别、班级与申请人称谓。通过后孩子就是学校名册里的正式学生，家长端一律显示通过后的信息：本页条目、孩子资料页（姓名 / 性别 / 就读班级 / 我的关系）、未匹配承接页状态卡与校徽办理页孩子 chip 同步。页面上不另加「已更正」提示，「添加孩子申请已通过」通知里带一句「信息有更正」，家长点进孩子资料看到的就是更正后的内容。演示：同一浏览器另开老师端，在学生管理「待审核」打开本端提交的申请，改姓名后通过，本页条目即变为新姓名，点开为孩子资料页。来源有二：添加孩子页人工申请；已有孩子的账号扫班级注册码 / 点邀请注册卡片提交绑定申请（两者写同一张在途申请表、同形态条目，见绑定申请页说明）。\n审核中条目可点开申请详情半屏（静态演示的林晓冬同样可点）：正文只有孩子信息卡与提交时间，审核路由与通知方式在提交时的承接半屏已告知，此处不重复。「撤回申请」为后续阶段、第一阶段不实现：半屏默认只有「知道了」，可用上方「允许撤回审核中的申请（后续阶段）」开关打开预览（localStorage 记忆，默认关闭；本页与未匹配承接页同源）。\n撤回口径（后续阶段）：撤回的真实动机主要是信息填错了想重填（五字段填错时不命中重复提交拦截、会另生成一条申请）。二次确认后班主任审核清单同步移除，孩子管理页条目、办理页孩子 chip、未匹配承接页状态卡三处痕迹一并清理，撤回后同一份信息可重新提交。该孩子已提交校徽办理单时不允许直接撤回，提示先在「办理记录」取消办理（已付款单退款由退款单承载）：订单的事留在办理记录、身份的事留在孩子管理，不做跨域级联作废。\n【待家人确认】\n经「加入已有家庭」链路发起请求后，同位置插入「待家人确认」条目；对方同意（经上方按钮模拟）转普通已绑定条目、孩子数 +1，拒绝则移除条目（链路见添加孩子页说明）。\n【已毕业 / 离校孩子】\n林晓晴（毕业生）列表沉底、标灰「毕业生」chip，副行注明毕业时间，点击进只读归档详情（性别 / 出生日期 / 现住址不可改，关系标注可改）。详情页底部提供「解绑此孩子」：二次确认后不再显示该孩子及其历史记录（演示同步移除身份切换面板、账号切换页与校徽列表中的对应条目，刷新恢复）；不解绑时记录保留至 2027年6月30日、到期自动清理。\n解绑后账号不再有任何孩子时（唯一孩子为毕业生 / 离校生），落「未匹配到孩子」承接页（「账号无孩子」的统一承接态，出路为绑定三通道）。这与「仅剩毕业孩子仍可正常登录回看」不矛盾：后者是有归档孩子时不被动踢出，前者是家长主动解绑到零孩子的结果。演示账号为多孩，该场景不在页面流程中演示。\n【静态演示条目】\n外校已绑定：林晓宁（市实验二小 · 2年级-3班），同号跨校多孩的在读孩子，不带 chip；同步出现在首页身份面板与账号切换页，切换后首页头部学校名、家人页校班随之变为市实验二小（其余页面数据以林晓乐为例）。\n核实中：李*桐（2年级-2班），认领锁定态的静态示例，保持打码，点击提示等待核实结果；与王*明认领输错 3 次后的动态转态同口径。\n审核中：林晓冬（1年级-2班），人工申请审核态的静态示例，点击进申请详情半屏。\n离校生：林晓帆（4年级-4班 · 2025年11月中途转学离校），与毕业生同归档机制，只是 chip 与副行文案区分（界面统一用「离校」，不展示转学原因）；沉底展示，点击提示归档详情版式与林晓晴一致；同样在身份切换面板与账号切换页沉底，切换后的归档态首页见首页演示说明。',a:[['模拟：班主任核实通过（李*桐）','claimVerifiedPass()'],['对方视角 · 家人确认加入请求页',"famReqOpen()"],['模拟：家人已同意加入','famJoinApprove()'],['模拟：家人拒绝了请求','famJoinReject()']]},
 'sc-switch':{t:'账号切换',d:'「我的」宫格「账号切换」进入的整页身份列表（首页头部下拉面板为同能力快捷入口）。同号全部身份平铺单选，与首页身份面板、教师端账号切换页为同一份数据、同一口径（8 行：教师类身份在前——王瑶·市实验一小·班主任（该行 chip 自 2026-10-20 起按两端共用名册计算：设了主职务显示主职务名，否则「班主任」，与教师端首页角色标签同源；教师端教师管理里给王老师改主职务后刷新本页即一致）、王瑶·红旗小学·校长（同号跨校多身份，副行「全校」，点击为演示 toast，校长视角首页属后续阶段），教师类身份内部按学校排、不按职务排（当前登录所在学校 / 主任职学校在前，其余按身份登记时间；校长与班主任分属两校、为平行身份，职务不可比；该顺序同时决定身份失效兜底「层内取首位」的自动切换落点，两端保持一致）；其后为孩子——含外校在读的林晓宁（市实验二小，同号跨校多孩，孩子行不按学校分组），毕业 / 离校孩子沉底标灰 chip）。教师类身份行 chip 展示职务、不展示任教班级 / 学科，孩子行 chip 为身份类型；选孩子即切换并同步各处勾选、稍候自动回到首页查看该孩子数据，选「王瑶·市实验一小」跳转教师端原型（teacher.html，当页跳转），无二次确认（原「切换为教师身份」确认半屏已废弃、模板保留）。师长双身份仅同号存在教师账号时显示教师行；双角色权限互不渗透。右下角悬浮按钮退出登录（确认半屏）。已毕业孩子（林晓晴）沉底并标灰「毕业生」chip（与首页身份面板同口径，孩子身份类型口径统一为 在读生 / 毕业生 / 离校生），选中即切换到毕业态首页（仅可查看在校期间历史记录）。身份失效兜底（真实产品校验口径，本说明上方可演示）：监护关系与教师身份都可被学校在运管端随时解除 / 移除，且小程序热启动可停留任意页面数天、深链可绕过首页直达内页，「进入时身份有效」不代表「操作时依然有效」——但校验不逐页各写一遍，而是三层承接：①服务端为唯一权威关口，每个按身份取数 / 写数的接口逐一校验当前账号与该孩子的监护关系（教师侧为教师身份）是否仍成立，失效返回统一身份失效错误码——这条做到了，前端漏查最多是体验问题而非安全问题；②前端全局请求拦截器捕获该错误码后清本地身份缓存、重拉身份列表并按兜底规则跳转，任何页面的任何请求天然生效、无需页面各自处理；③少数关键时机主动刷新身份——冷 / 热启动 onShow（后台驻留超阈值）、打开本页与首页身份切换面板、深链落地页 onLoad、办理提交 / 支付等写操作前（纯只读页不主动查，靠拦截器兜底）。兜底规则——同类身份优先、跨角色次之、承接页兜底，层内按身份列表排序取首位：被解除的是当前孩子且还有其他孩子 → 自动切到其他孩子并 toast 告知（同类优先：不切教师身份，家长视角内就地承接）；名下无孩子但同号仍有教师身份 → 自动落教师身份；什么都不剩 → 落「未匹配到孩子」统一承接页。教师身份被移除的对称口径（同类优先同一规则：仍有其他教师类身份切该身份 → 仅有孩子切家长身份 → 全无落「未匹配教师身份」承接页）见教师端账号切换页演示说明，「仅有孩子」分支的家长端落地即本端首页 toast 承接、班主任与校长两行同时从身份列表消失。',a:[['演示 · 当前孩子监护关系被解除（还有其他孩子）','guardRevoke()'],['演示 · 监护关系被解除（仅剩教师身份人设）','guardRevokeTeacher()'],['演示 · 监护关系被解除（名下无孩子人设）','guardRevokeAll()']]},
 'sc-faminv-form':{t:'邀请家人（整页表单）',d:'「家人」页底部「邀请家人」按钮进入（原半屏表单已废弃）。选授权孩子（可多个、仅限已绑定孩子，默认勾选当前孩子）、填被邀请人手机号（必填，仅该手机号注册或登录后确认即加入、无需邀请人审核）、标注与孩子关系后发送微信邀请卡片；发出后回家人页，列表出现「邀请中 · 等待加入」条目。邀请 72 小时有效、到期自动作废并提醒邀请人；对方加入前可随时取消。待加入邀请可多条并行；绑定家人与待加入邀请合计达 6 人上限时，「邀请家人」入口点击提示、不再进表单。返回键回进入前的页面。',a:[]},
 'sc-child':{t:'个人资料 · 孩子资料 Tab',d:'「我的」孩子管理列表点孩子进入，与「我的资料」共用「个人资料」页头，顶部 Tab 可互切（我的资料 / 孩子资料）。设置行式资料页，仅承载孩子本身的档案信息（本次迭代调整：原头部卡 + 编辑半屏改为逐行直改；家人列表与邀请管理已收敛到「我的-家人」页，家人规则见该页演示说明）。基础信息卡：修改头像（点击演示 toast，真实产品调起相册或拍摄）；姓名只读（学校名册维护，有误联系班主任核正，与帮助页 FAQ 口径一致）；性别点击半屏修改（男 / 女单列滚轮选择，与出生日期同款交互；家长可改、用于辅助名册比对）；出生日期点击半屏修改（家长可改、用于辅助名册比对）——年 / 月 / 日三列滚轮选择器，中间行高亮、上下渐隐，滚动或点击行选中，年月变化自动联动当月天数（大小月 / 闰月），「确定」保存生效、「取消」不落盘；现住址点击半屏修改（家长维护）——半屏内「所在地区」行点击进入省 / 市 / 区县逐级选择列表（带面包屑可回上级，直辖市自动跳过市级，演示内置五省市数据），选到区县回表单回填，加详细地址输入后保存生效，切换视图时已输入的详细地址自动暂存，取消不落盘；「我的关系」点击半屏修改——关系枚举以单列滚轮选择（与出生日期同款交互，滚动或点击行选中，「确定」生效、「取消」不落盘），仅更正标注、不影响权限与通知，保存后留痕并同步其他家人，「家人」页本人条目联动更新。就读信息卡（均只读）：就读学校 / 就读班级（名册维护）。本次迭代调整：原「名册状态 / 开通内容」两行不再在页面展示——能进入本页即已匹配名册，到离校通知 / 请假发起 / 校徽管理为匹配后的默认能力，无需向家长展示口径。毕业态（本次迭代新增，孩子管理点林晓晴进入）：资料收敛为只读归档——头像 / 性别 / 出生日期 / 现住址 / 我的关系均不可改（隐藏行尾箭头、点击不响应，毕业孩子的资料与关系标注一并冻结归档）；班级行标签变「毕业班级」，新增「在校状态：已毕业 · 2026年6月」行；底部「解绑此孩子」为毕业孩子专属出路（在读孩子不提供解绑入口，退出家庭走家人页机制），二次确认后移除该孩子（演示数据，刷新恢复）。\n【审核通过的孩子】\n人工申请经老师端审核通过的孩子，从孩子管理页点开为本页：姓名、性别、就读学校 / 班级、我的关系取通过后的信息（老师审核时更正过的即为更正后的值），出生日期、现住址申请时不采集，显示「未填写」、可补填。',a:[['查看已毕业孩子详情（林晓晴）',"childOpen('qing')"],['查看在读孩子详情（林晓乐）',"childOpen('le')"]]},
 'sc-profile':{t:'个人资料 · 我的资料 Tab',d:'「我的」头部头像 / 昵称区点击进入（原「个人资料」编辑半屏升级为整页，设置行式与孩子资料同款版式），顶部 Tab 可互切（我的资料 / 孩子资料）。修改头像点击演示 toast（真实产品调起相册或拍摄）；昵称点击半屏修改，保存后「我的」头部昵称即时更新；性别点击半屏修改（男 / 女单列滚轮选择，与孩子资料同款交互）；手机号点击进入换绑流程——两步半屏：先向当前手机号发验证码验证身份（60 秒重发倒计时，演示任意 6 位数字通过），「下一步」再输入新手机号并获取验证码，「确认换绑」后本页、「我的」头部、家人页本人条目、账号切换页的掩码手机号联动更新（演示数据，刷新恢复）。手机号是账号身份锚，换绑即账号所有权转移，故安全规则较重：① 一次换绑发 3 条短信——原号验证身份、新号验证归属、换绑成功后再向原号补发结果通知（原号被劫持时这条通知是唯一预警），三条模板各自独立不可合并，验证码 6 位数字、5 分钟有效、连续错误 5 次锁定；② 新号在发码前查重，占用号直接页面拦截、不发短信，避免向无关用户发骚扰短信（演示：新号填 13800006688 触发「与当前手机号相同」、填 13900000000 触发「已注册」拦截）；③ 原号已停机的家长若无出口将彻底卡死，故第一步半屏内设「原手机号已停用，收不到验证码？」出口——但其中的微信快捷验证本阶段暂不实现，故该出口默认隐藏、由本说明上方开关控制显示（注意：出口内含微信验证与联系客服两条路径，隐藏后换绑流程内不再有任何兜底提示，原号停机的家长需自行经「我的-帮助与客服」联系客服）。开关打开后：进「收不到验证码」半屏给出两条路径——「用微信绑定的手机号验证」拉起微信授权取号（与登录页同款系统半屏），取到的号与账号当前手机号比对：一致即通过第一步身份验证、直接进第二步「绑定新手机号」（新号仍须短信验归属，不因此免验），不一致进「验证未通过」半屏说明差异并转客服（出口：联系客服 / 换个号码试试 / 返回），「不允许」回「收不到验证码」半屏；本演示人设账号号为 138****6688、微信另有绑定号 138****9900，故选前者演示通过、选后者演示不通过。号码停机不影响微信侧的号码登记记录，这是本兜底成立的前提，但取号仍需微信侧运营商核验通过，核验失败则本通道不可用、最终落客服人工核验。该通道只证明微信登记号与账号号一致、不证明当前持有 SIM 卡，证明强度弱于短信 OTP，故仅收在本半屏内、不与短信并列为主路径，且经此换绑同样照发第 3 条结果通知（原号若未真停机可立即发现异常）；④ 换绑成功后不退出登录、不跳转登录页（登录态绑定的是账号而非手机号，用户刚完成原号与新号两步验证、是账号归属最确定的时刻，且换绑不改变身份列表，与身份失效兜底无关），原手机号立即失效、之后登录与接收验证码均以新号为准，成功 toast 说明「下次请用新手机号登录」、第 3 条短信说明原号将无法登录；下次登录无需事先把新号绑到微信：微信手机号快捷登录的授权半屏列出微信绑定号与已验证的其他号码并带「添加手机号」入口，新号现场添加、短信验证即可登录，故第二步半屏不加额外说明；剩余风险仅为误选原号（原号仍留在微信号码列表中，习惯性选第一行会以原号登录并注册出无孩子的空账号），属体验问题而非阻断，靠成功 toast 与第 3 条短信提示，后续阶段可在服务端缓解——原号在换绑记录中保留 30 天，快捷登录命中近期被换绑的原号时不自动注册、改为提示「该手机号已于 x 月 x 日更换为新号，请用新号登录」；其他设备登录态是否随换绑失效为后续阶段事项（稳妥做法：当前设备保留、其他设备会话失效）；⑤ 家长端与教师端合于一个小程序、同一账号可兼具两种身份并共用一个手机号，故换绑一次即两侧同时变更——兼具教师身份时端内链路与本演示完全一致（不阻断、不加验），差异只在后台：换绑事务内按在职任教学校逐校同步教师手机号白名单并通知校管（新号与该校白名单已有记录冲突时跳过同步、转管理端待办），本裁决显式接受“学校无事前拦截点、事后知情”的代价。',a:[]},
 'sc-mine-single':{t:'我的校徽 · 单徽模式（备选方案）',d:'与「智能校徽-我的校徽」Tab 的多徽管理版并存的另一种产品逻辑，供方案比较：每个孩子最多保留一枚在用校徽，页面只展示当前这一枚（无列表、无多徽状态管理）。换徽流程：点底部「扫一扫校徽二维码」识别到新徽后弹二次确认半屏——明确告知「启用新徽后当前校徽将自动停用并不再显示」，确认后新徽即启用、旧徽自动停用并从页面隐藏（演示中新徽编号自动递增，可反复体验）；取消则维持现状。与多徽版的取舍：单徽模式规则简单、杜绝一人多徽的管理成本，但放弃了忘带互备与考勤合并能力。当前徽可「停用」（确认半屏提示停用后孩子无可用校徽、可随时重新扫码启用）。本页为独立预览页、顶部与正式智能校徽页一致（点「校徽办理」「办理记录」Tab 回正式页对应 Tab），不挂正式入口，经智能校徽页演示说明进入，返回键回「我的校徽」Tab。',a:[]},
 'sc-scan':{t:'统一扫一扫',d:'首页头部「扫一扫」、智能校徽「我的校徽」Tab 底部「扫一扫校徽二维码」或消息页「扫码核对提醒」半屏进入——本次调整：前两处原「点按钮直达常见扫码结果」的捷径废止，改为先进本相机页再分流，与真实产品「按钮 → 相机 → 结果」链路一致；返回键回进入来源页。行为由校徽状态驱动：核对 / 兜底启用 / 错拿换发 / 挂失找回；扫到非校徽二维码（如其他小程序码 / 付款码）同样收起相机回来源页承接——微信原生扫码相机（wx.scanCode）能解出任意二维码即收起并交回内容，小程序既不能在相机层上弹 toast、也不能拒收后留在相机页，原「留在相机页轻提示」口径不可实现，改为回来源页弹轻量半屏「未识别到校徽二维码」、「重新扫描」按钮再次调起相机（回到同一来源页、待核验徽保持）、「关闭」留在来源页（曾并行演示的回来源页轻提示形态已定版收掉）；码读不出（相机一直取景不返回）由家长自行返回后再操作，降级手工输入短编号入口落来源页；扫到已毕业孩子的校徽提示已随毕业注销停用、不再参与考勤，无需其他操作（毕业注销不可自恢复，与普通停用可重新启用的口径不同；中途离校（转学）与毕业共用同一学籍归档注销机制，扫到离校注销徽的承接半屏仅「离校 / 毕业」一词之差，不单独演示——离校生人设林晓帆无徽演示数据，详见「我的校徽」Tab 演示说明同口径）；扫到退款作废的校徽（本次迭代新增）提示已随退款作废停用、不可核验启用，退款进度引导到办理记录查看——被退枚发起退款即作废（不等到账，退款在途同口径），家长手中可能仍有已发出的实体徽，扫码是撞见它的常见入口，作废不可逆、无恢复操作；被回收的免费校徽（零元回收）同为已作废口径但文案分叉、不带「退款」二字——免费办理无退款金额、不引导等退款，改为告知额度已在回收当时恢复（本次迭代新增），两种作废形态在本页与「我的校徽」Tab 弹同一结果半屏承接。真实产品此页为微信扫码相机，原型仿其形态模拟：全屏虚化取景、左上圆形返回钮、绿色扫描光带循环下扫动效、底部提示为微信原生文案「扫二维码 / 条码 / 小程序码」，不同扫码结果经本说明上方按钮模拟；另设演示快捷路径——点击取景空白处（返回钮除外）即模拟扫码识别成功：由「我的校徽」行尾「扫码核验」进入时模拟扫到该枚待核验徽、弹其核验半屏（本次迭代：行尾按钮原直达半屏的捷径废止、改经本相机页），其他来源模拟扫到当前孩子已启用校徽的核对半屏（与教师端扫码页点击空白同构），其他结果仍经按钮进入。识别成功即收起相机（与微信扫码一致）：有识别结果的分支先关本相机页回进入来源页，再以「已识别校徽」结果半屏承接——与「我的校徽」Tab 各扫码演示同款半屏，同一场景同一承接、原 toast 轻提示双轨废止（核对成功并入核对半屏、兜底启用复用 NO.0002 扫码核验半屏、已停用弹 NO.0004 重新启用半屏——重新启用后再扫按已启用核对口径展示、扫到不属于孩子的徽弹一般拦截半屏（提示归还原主 / 交班主任，防探测不显示持有人信息；另一种「别人的徽」——他人预关联未启用徽的错拿错发换发工单分支，演示入口已隐藏，自动配对生成换发工单机制仍为产品口径、半屏函数 bdScanWrong 保留）、毕业注销 / 退款作废 / 零元回收弹对应作废半屏）；未识别（扫到非校徽二维码）也不例外：相机收起回来源页后弹「重新扫描」半屏承接；码读不出降级手工输入壳印短编号、均失败转人工为产品设计口径，原型不做可操作演示。',a:[['扫到自己孩子已启用的徽（核对半屏，同点击空白）','scanBack();homeScanActive()'],['扫到「已关联·未启用」的徽（核验启用）','scanBack();bdVerifySheet()'],['扫到已停用的徽（可重新启用）','scanBack();bdScanStopped()'],['扫到不属于孩子的徽（一般拦截）','scanBack();bdScanOther()'],['扫到非校徽二维码（未识别 · 回来源页半屏可重扫）','scanInvalidSheet()'],['扫到已毕业孩子的徽（毕业注销）','scanBack();bdScanGrad()'],['扫到退款作废的徽（已作废）','scanBack();bdScanVoid()'],['扫到被回收的免费徽（零元回收）','scanBack();bdScanVoidFree()']]},
 'sc-apply-mine':{t:'智能校徽 · 我的校徽 Tab',d:'校徽统一对象页，含「我的校徽 / 校徽办理 / 办理记录」三个 Tab（各 Tab 演示说明独立）：手上有的、正在办的、要再办的收敛在一处。统一扫一扫、「我的」数据栏「校徽」进入本 Tab，hash 直达默认落本 Tab；首页宫格与活动横幅进入落「校徽办理」Tab。\n【持有规则】\n一个孩子可同时持有多枚校徽，忘带时互为备份、考勤自动合并；3 枚以内自助办理，第 4 枚起需客服审核。四个具名动作：挂失 / 找回 / 补办增办 / 停用——挂失后 60 天内可自助「找回」，停用后可随时重新启用（停用期间不参与考勤），补办新徽不会自动作废任何已有校徽。「补办 / 增办」入口收敛到「校徽办理」Tab（表单按孩子自动计免费首枚 / ¥15 增办，无需区分入口）；有办理中记录时本 Tab 顶部显示在途提醒条，点击直达办理记录 Tab。\n【列表】\n按孩子分组的行卡列表（孩子是家长查徽的第一维度）：每个有徽的孩子一组，组头为姓名 + 班级 + 枚数；在读孩子组在前，已毕业孩子组沉底（组头带「毕业生」chip）；没有徽的孩子（如林晓阳）不出现分组。组内按已启用 → 待核验 → 已停用排，同状态按最近读取时间倒序；扫码核验启用 / 重新启用后实时重排（刚启用暂无读取记录，排同状态组末位）。\n列表上方为孩子筛选 chip（含枚数，无徽孩子不出现），默认选中当前孩子，与首页身份切换联动：切换孩子后进入本 Tab 即其校徽。「全部」跨孩总览 chip 为后续阶段、第一阶段隐藏（多孩家长查徽几乎总是单孩维度），可经「预览 · 全部孩子总览」体验；原本会落「全部」的路径（解绑晴后、身份切到无徽孩子、展开毕业注销徽）分别落乐 / 乐 / 晴。标题与右侧状态汇总随筛选口径（选孩子时为该孩计数）。待核验等待办可能落在未选中的孩子下，由页顶在途提醒条与组内状态排序保证可见。\n【行卡】\n徽面缩略 + 编号（孩子姓名由组头承担）+ 状态 chip + 活跃摘要 + 行尾主操作。活跃摘要让收起状态下也能区分多枚同状态徽：已启用显示最近读取时间，尚无读取记录时显示启用时间（如「今天 17:05 启用」，第一次过门后被最近读取替换；不设「刚启用」时间窗口，核验成功的即时感受由 toast 承担）；已停用显示停用时间 / 毕业注销；待核验显示「待扫码启用」。重新启用的徽有停用前读取记录则回到最近读取。\n全部行默认收起，一屏可见更多徽；点行展开该徽完整凭证与读取记录、再点收起，同时只展开一行（手风琴）。展开某行时该行摘要隐藏（展开区「最近读取」是同一信息的完整版，含通道方向），收起后恢复。待核验徽展开为读取空态；已停用徽凭证灰化，显示停用前最后读取。\n操作按钮权重：待办「扫码核验」为唯一高亮；「启用」「停用」为同级描边样式（重新启用是本页最低频操作）。\n【状态与扫码核验】\n已启用：参与考勤，可停用；已核验的徽立即参与考勤，不必等同单其余枚，徽面展示孩子证件照实拍，挂失入口收起（经「演示挂失 → 找回流转」体验）。已停用：不参与考勤，置底灰化，行尾「启用」可随时恢复。\n待核验：新徽收到后点行尾「扫码核验」进入统一扫一扫相机页，与底部「扫一扫校徽二维码」同一条「按钮 → 相机 → 结果」链路；真实产品相机不区分入口，结果由扫到的徽状态驱动，扫到另一枚待核验徽同样按那枚核验。原型在相机页点取景空白处即模拟扫到该枚，弹其核验半屏，返回键回本 Tab。核验半屏模拟扫码识别成功并核对办理信息一致，点「核验通过，立即启用」转已启用，状态 chip、操作按钮、汇总条、展开区读取文案实时流转（刷新重置）；「取消」维持待核验。\n核验半屏固定三行：学生 / 本次办理 / 核对结果，编号只在标题出现。「本次办理」行只报对家长有用的数：「本枚启用后还剩 N 枚待核验」或「本枚启用后本次办理即完成」，不展示总枚数与退款枚数。进度按有效枚计：已退款枚发起退款即作废、永远不会被核验，不计入待核验分母（与整单完结判定同一口径）。\n已核验启用枚数按核验事实计：核验是一次性事件，某枚核验启用后又被停用（含挂失）仍计入，停用不回退办理记录的核验进度，「部分启用 x/y」与半屏剩余枚数都不变；该枚重新启用走行尾「启用」，无需再次核验（原型停用半屏为演示态、不改状态，该口径不单独演示）。\n核验成功 toast 单枚 / 多枚同一句「NO.000X 已核验并启用」（toast 只放一句话，「还要不要继续扫」由半屏「本次办理」行回答）。\n多枚逐枚核验：NO.0008 / NO.0009 / NO.0010 三枚待核验徽同属一张 3 枚增办记录（办理记录 Tab 的 SS2026062641572089，已到校待发放）。逐枚核验即逐枚启用，每启用一枚同步推进该办理记录（部分启用 1/3 → 2/3 → 全部启用转已完成），两侧数据打通，可来回切 Tab 对照（演示数据，刷新恢复）。\n【扫一扫的结果】\n底部「扫一扫校徽二维码」进入统一扫一扫相机页（与首页头部扫一扫同一承接页），相机页返回键回本 Tab。扫码比对范围是本账号下所有孩子：扫到另一个孩子的徽直接展示，不拦截。\n扫到本账号任何孩子都不持有的校徽：提示「该校徽不属于您的孩子」，不显示持有人信息（防探测），引导归还原主或交班主任处理。\n扫到已停用校徽（NO.0004）：半屏展示学生、已停用状态与停用时间，「重新启用该校徽」一键恢复参与考勤（与行尾「启用」同一流转，刷新恢复）；重新启用后再扫按已启用核对口径展示，「暂不启用」维持现状。\n扫到无效二维码（其他小程序码、付款码等）：微信原生扫码相机解出任意码即收起，小程序无法在相机层提示或驻留，所以收起相机回本 Tab，弹轻量半屏「未识别到校徽二维码」，带「重新扫描」再次调起相机（经底部「扫一扫校徽二维码」进入扫一扫后由该页演示说明体验）。\n停用有三种口径，扫码时分别展示：普通停用可随时恢复；毕业注销不可恢复；退款作废不可逆。\n扫到毕业注销校徽（NO.0005 · 林晓晴）：半屏展示学生（姓名班级 + 毕业生 chip）、已停用状态与注销时间，不提供「重新启用」并注明毕业注销不可重新启用；「查看我的校徽」直达列表展开 NO.0005。解绑晓晴后再扫按「不属于您的孩子」拦截。\n扫到退款作废校徽（NO.0007，办理记录 SS2026052834705921 已寄出后运管全额退款的被退枚）：被退枚发起退款即作废入黑名单、不出现在本列表，但徽已发出、家长手中可能还有实体徽，扫码是家长唯一撞见它的入口。半屏展示学生、「已作废」状态与作废时间（附「退款作废停用」事实），没有恢复操作，只保留「关闭」，不放「查看办理记录」（退款进度由家长自行到办理记录 Tab 查看）。作废时点＝发起退款、不等到账，退款中的徽扫码同样提示已作废。作废事实不区分全额 / 部分退款：那是退款单的类型，在枚级不稳定（多次部分退款退完的单每枚都由「部分退款」单作废，终点却等同全额），「退款作废停用」任何时刻都成立；这单其他徽怎么样了是订单问题，由办理记录承接。\n扫到被回收的免费校徽（NO.0012，假想的已发出后被回收的免费枚）：与退款作废同为「已作废不可用」（状态 chip / 不可恢复 / 实体徽无需退回一致），文案不带「退款」二字：作废事实为「免费枚回收，校徽作废停用」（与流转行节点名同词），说明段告知「免费办理无退款金额、无需等待退款到账」与「首张免费额度已在回收当时恢复」（用完成时：额度此后可能已被再次办理占用，如林晓乐的额度被 4月10日 首免单重新占用），只保留「关闭」。徽面只按被扫的这一枚是否免费枚分叉为付费枚退款作废 / 免费枚回收作废两种形态（混合退中的免费枚归零元形态）。这也是「整单退完在途单无可核验枚、确认收货完结通道挂起」的枚级事实基础（见办理记录 Tab 与记录详情页演示说明）。\n统一扫一扫页扫到上述各徽弹同一半屏承接。\n【已毕业孩子的校徽】\n林晓晴 NO.0005 毕业时随学籍归档自动注销停用：独立分组沉底灰化，没有「启用」操作；展开显示注销时间与停用前最后读取，徽面展示证件照并随凭证整体灰化。「全部」视角下毕业组默认折叠为组头一行，点组头展开 / 收起（注销徽纯只读，无需常驻占屏）；筛选到毕业孩子时强制展开、隐藏箭头且组头不可点（该组即整页内容）。解绑该孩子后其分组整组从列表移除。离校生（中途转学离校）与毕业共用同一注销机制、只是文案区分，演示暂无人设、不单独演示。\n【无照片版式】\n校级配置为无需上传证件照时，实体徽不印照片；小程序里的校徽卡是实体徽的复刻，所以展开大卡与列表缩略图都去掉左侧照片位（校名条 + 姓名 + 班级·编号向左顶满，二维码不变），与校徽办理 Tab 的徽面预览、支付半屏、办理记录同一套版式；不用首字母头像或人形占位顶替，避免家长误以为照片丢失。真实产品按每枚徽自己的记录判断（制作当时有无照片），不按当前校级配置：学校中途切换配置后，家长会同时持有带照片的旧徽与不带照片的新徽，各显各的；无照片徽不提供「替换照片」入口。状态 chip、停用灰化、最近读取与各操作不受影响。\n演示：上方「无需上传学生证件照」开关与校徽办理 Tab 为同一个校级开关（proto-nophoto，刷新保留）；打开后 6月26日 的 3 枚单（NO.0008 / 0009 / 0010）作为配置切换后办理的代表切为无照片版式，NO.0001–0004 与晓晴的 NO.0005 为旧徽、照片不变，办理记录 Tab 这张单的列表缩略与记录详情同步切换。办理记录里日期晚于该单的其他演示记录各自承载别的状态演示，仍保留有照片形态，不按日期推演。\n【空态】\n没有任何校徽时本 Tab 显示空态：图标 + 引导 +「去办理校徽」直达办理 Tab；底部扫一扫保留（收到学校发放的实体徽可扫码启用）。经「切换空态预览（无校徽）」查看。',a:[['预览 · 全部孩子总览（后续阶段）',"applyTab('mine');bdFilter('all')"],['展开毕业注销校徽（NO.0005 · 林晓晴）',"applyTab('mine');bdDetailToggle('bd5')"],['演示扫码核验流转',"applyTab('mine');bdVerifySheet()"],['演示多枚逐枚核验（3 枚单 · 扫下一枚）',"applyTab('mine');bdVerifyNext()"],['演示扫到已停用校徽 · 重新启用',"applyTab('mine');bdScanStopped()"],['演示扫到毕业注销校徽（NO.0005 · 林晓晴）',"applyTab('mine');bdScanGrad()"],['演示扫到退款作废校徽（NO.0007）',"applyTab('mine');bdScanVoid()"],['演示扫到被回收的免费校徽（零元 · NO.0012）',"applyTab('mine');bdScanVoidFree()"],['演示扫到不属于孩子的校徽（拦截）',"applyTab('mine');bdScanOther()"],['切换空态预览（无校徽）',"applyTab('mine');mineEmptyToggle()"],['预览 · 我的校徽（单徽模式备选方案）',"go('sc-mine-single')"],['演示挂失 → 找回流转',"applyTab('mine');openSheet('lost')"],['演示停用最后一枚警告',"applyTab('mine');openSheet('stop-last')"]]},
 'sc-apply-form':{t:'智能校徽 · 校徽办理 Tab',d:'首枚 / 补办 / 增办的统一入口：首页宫格「智能校徽」与活动横幅进入落本 Tab，表单按孩子自动计免费首枚 / ¥15 增办，无需区分入口。与教师端「智能校徽办理」页互为两侧视图。\n【页面结构】\n说明轻、任务重。顶部媒体位默认展示「智能校徽介绍」视频（学校配置的办理说明视频；原型为静态播放器示意，点击以 toast 模拟播放），可经上方「顶部媒体位展示视频」开关切换为活动横幅图片，选择记忆保留；编辑办理信息时媒体位整体隐藏。\n媒体位下为默认折叠的「智能校徽申请与补办」须知卡：制作时间 / 补办价格 / 补卡与丢失 / 校徽作用 / 多枚互备 / 定制与退换 / 领取方式，点卡头展开。「定制与退换」是决策前的交易条款告知，与支付半屏印前确认、随单快照构成「告知 → 确认 → 留证」三层凭证链。考勤推送按本产品口径为到离校消息，不含现场照片视频。表单直接上首屏。\n「校徽预览」卡按所选孩子实时渲染姓名 / 班级 / 已上传证件照（无需证件照配置下为无照片版式），预览即确认；默认不显示，可由上方「显示『校徽预览』区块」开关开启（选择记忆保留）。开启后页面下滑至预览卡到达顶部时，预览卡吸顶并随滚动渐进收缩为紧凑徽面条（卡头淡出、徽面等比缩小，无跳变），在下方上传证件照时徽面变化始终可见；滚回原位或切换 Tab 自动恢复完整形态。提交后、制作开始前可在办理记录「修改信息」。\n【选择办理孩子】\n姓名班级按名册带出、不可编辑（如有出入联系班主任更正）；孩子 chip 只展示姓名，不附状态后缀，流程态以琥珀色 chip 底色区分；姓名下方不显示任何状态提示行，认领规则与锁定后果在点「提交办理」时由认领半屏与拦截提示当场说明，审核状态由记录列表与消息承载。「添加孩子」直达绑定三通道页。\n可选孩子：已绑定在读（晓阳 / 晓乐）；待认领（王*明，本账号名册命中的孩子常驻列出，与孩子管理页同一人、同一认领状态两侧打通，提交时先认领，见下文注册办理码链路）；审核中（林晓冬，乐观提交可先办理并正常支付，记录以待审核进入列表；与孩子管理页静态条目同人设，常驻演示、不参与「模拟：班主任审核通过」）；核实中（李*桐，认领锁定态，只作状态展示：选中显示打码信息，提交办理被拦截并提示等待核实结果；同状态同形态，王一明认领输错 3 次锁定后 chip 保持在位转「核实中」，不中途移除）。毕业生 / 离校生不列入（林晓晴不出现，毕业后不可再办理 / 补办，历史记录在「办理记录」Tab 保留只读）。\n首枚免费按学生计：林晓阳免费，林晓乐已用首枚按增办 ¥15 计；计费口径不上屏、切换孩子也不提示，金额统一在提交后的支付半屏展示。\n【学生证件照】\n必传，1 寸蓝底标准照，附示例证件照；白墙拍照的正误示范收进「查看拍照要求」折叠区（默认收起，上传成功后自动收起）。\n上传流程模拟微信小程序惯例：点「添加照片」弹上传方式半屏（已有电子版 · 上传证件照 / 没有电子版 · 拍张头像照）→ 相册路径为模拟微信相册九宫格（单选打勾后「完成」），拍照路径为模拟相机取景（快门 → 取消 / 完成预览，「点击去拍照」链接同入口）→ 照片裁切页（人像轮廓引导线 + 四角裁切框，「更换照片」返回上一步）→「提交」完成上传，表单显示已上传照片缩略图；✕ 移除后回到「添加照片」空态，「替换照片」重走上传流程。编辑态同流程同展示。\n校级配置「办理是否需上传学生证件照」由管理端「阈值配置 · 持有与生命周期」的「办理需上传学生证件照」开关控制（原型经 localStorage 与本页联动，也可用上方开关直接切换）：关闭后隐藏「03. 学生证件照」区块、提交不校验照片，校徽采用无照片版式（校徽预览卡与支付半屏的徽面缩略同步切换）。该形态下提交的办理记录按提交时快照展示：列表卡与详情页徽面缩略无照片位，详情页不展示学生证件照，且不提供「修改信息」（姓名班级以名册为准、无照片可改，未收款单仍可取消办理）；既有静态演示记录与「我的校徽」演示数据仍为有照片形态。\n【支付半屏】\n「提交办理」唤起支付半屏：制作数量、男女生款式、金额明细（首张免费自动抵扣；首枚免费额度已用的孩子如林晓乐，头部显示灰色「首枚免费已办理」chip、无抵扣行，按增办 ¥15/枚 全额支付）。\n数量：步进器 1–10 枚，10 枚时「+」禁用；唤起时默认 3 枚（多枚互备是推荐用法）。由 2 枚减至 1 枚时先弹微信原生式确认弹窗「确认申领数量减至1张?」（正文说明补办周期约 20 个工作日、建议留有备用校徽），点「确认」才减为 1 枚，1 枚以上之间的增减不弹窗。多枚互为备份、考勤自动合并；同一学生 3 枚以内可自助办理，第 4 枚起由客服联系确认后制作（页面不提示）。\n印前确认两项勾选（当前隐藏，display:none 保留节点，勾选校验按可见性自动停用，恢复方式见代码注释；定制不退与信息核对的告知暂由须知卡「定制与退换」承载）：责任分界（信息错误家长担、印刷质量厂商担）与定制商品不退（不支持无理由退货、进入生产后不可取消），默认不勾选、需逐项主动勾选，未勾全点支付 toast「请先勾选两项确认」，免费单同样适用；真实产品勾选随单落快照（拒退纠纷凭证，PRD 12.4）；无需证件照配置下第一项文案不含「照片」。\n【支付与建单】\n「支付办理」点击即创建订单：付费单先以「待支付」静默落「办理记录」Tab，随后在当前页原地拉起模拟微信收银台、不跳转页面（金额为抵扣后小计，输满任意 6 位密码即支付成功；真实实现中微信统一下单需先有商户订单号，所以先建单后拉起支付）；支付成功本单转待审核并跳转「支付结果」页（查看办理记录 / 返回首页）。关闭收银台停留本页，订单保留待支付（toast 提示出路），可在办理记录随时「去支付」，超时自动取消。\n¥0 免费单点击即创建并直接落待审核，落「提交结果」页（显示「首张校徽免费」）。身份审核中的孩子正常支付，与付费口径相同。\n同孩子已有待支付单时不重复建单：本人创建的单直接在当前页续接支付；另一位家长创建的单不承接续付（微信支付 prepay_id 绑定建单人 openid，同商户订单号不可换人下单，代付技术上不可达），提交时弹半屏拦截，透出建单家长与剩余支付时间，出口只有「知道了」：由建单家长完成支付，或待原单超时自动取消后再办理（本半屏不提供取消他人订单的出口，PRD 12.4 跨家长拦截口径）。经「预览跨家长待支付拦截」体验（模拟爸爸已为林晓乐建单，刷新重置）。\n【审核中孩子（乐观提交）】\n不阻断收集期办理。本页「添加孩子」提交人工申请后自动回到本页，生成琥珀色「审核中」chip 并自动选中：审核通过前即可提交办理，记录以「待审核」进入列表。身份审核并入订单的待审核口径，家长端不单列「待身份审核」状态，只有未收款单在卡片保留「审核通过后通知您支付」与「应付」金额口径。期间表单与记录只展示家长自填信息、不回填任何名册数据（防枚举）；付费金额正常收款（第一阶段没有挂起单；身份审核未通过时以取消办理全额原路退款兜底）。「审核」用于人工申请，「核实」只留给认领锁定转班主任核实的链路。\n状态级联：审核通过 → 记录信息与名册比对，一致即沿主流程流转，不一致退回家长确认（同单迭代）；信息类拒绝（笔误 / 名册滞后，占比最高）→ 绑定申请与记录一并退回修正、原单继续；关系无法确认或恶意申请 → 绑定申请终态作废并以模糊话术通知，不联动取消办理单，保留与班主任沟通、重新认领的机会；家长可随时取消办理（已付款全额原路退回），运管也可代家长取消。\n多孩与防滥用：允许连续添加多个孩子，每次提交生成独立「审核中」chip、可分别办理并支付（多孩同校家庭收集期一次办齐是合法场景）。「模拟：班主任审核通过」作用于最近一次动态提交的审核中孩子。限额：账号级在途人工申请上限 3 个（林晓冬计入，超限提示等待审核结果后再添加），提交限频；每个审核中孩子的在途办理单限 1 张（二次提交拦截并提示审核通过后可继续办理）。上限由统一在途申请表把关：本页、我的 / 孩子管理页、未匹配承接页三个提交入口共用一份账号级在途申请表，同一份五要素跨入口重复提交也会被拦（见添加孩子页说明）。\n撤回联动（后续阶段，撤回申请第一阶段不实现，由孩子管理页演示说明的开关控制预览）：在孩子管理页撤回申请后本页 chip 同步移除（选择回落首个可办理孩子，零绑定人设回空态）；已提交办理单的孩子不能直接撤回申请，需先在「办理记录」取消办理单。\n支付半屏不展示「身份待核实 / 审核说明」文案块，保持任务聚焦。\n【注册办理码 / 校徽办理卡片链路】\n家长扫「注册办理码」海报或点老师分享的「校徽办理与补办」卡片注册、手机号快捷登录后直达本 Tab（详见注册办理码海报页与办理卡片页演示说明）：名册命中、监护关系尚未确认的孩子以琥珀色「待认领」chip 自动选中（即常驻选择器的王*明，演示按钮只模拟该入口的登录落点），也可切换已绑定孩子或「添加孩子」新增。扫码直达为导航栈栈底页，页头不显示返回键（微信原生导航对栈底页同此规则，离开走右上角胶囊）；经首页宫格等常规入口进入时返回键正常显示。\n选中待认领孩子点「提交办理」先弹认领半屏，与孩子管理页同一半屏同一验证：填空补全姓名 + 选择关系，统一模糊反馈并限频，连续 3 次未通过锁定转「核实中」（两侧状态实时打通，锁定期间不可为其提交办理）；半屏内「这不是我的孩子」反馈后 chip 同步移除，选择回落首个已绑定孩子。认领成功自动续接提交、解除打码并进入支付半屏（王一明 · 免费首枚，与名册认领同效）。不允许「提交办理即自动确认关系」：二次放号的号主扫海报登录就可能误绑他人孩子并办出带照片的校徽，认领必须统一经「手机号 + 知道孩子全名」验证（演示数据，刷新重置）。\n名下无任何孩子、名册也未命中的新用户：登录后直达「添加孩子」表单（零孩子时办理无从谈起，不落本页空态；学校由码带出并锁定，其余字段自填），提交申请生成「审核中」chip 后回本页乐观提交；返回键与空态直接提交的拦截提示作为兜底保留。经登录页演示说明「新用户（名下无孩子）从海报开始」体验。',a:[['预览支付半屏','paySheet()'],['预览 · 减至 1 枚确认弹窗','payQtyDlg()'],['预览支付半屏（林晓乐 · 首枚已用增办）','demoPaidApply()'],['预览跨家长待支付拦截（爸爸已为晓乐建单）','crossPayDemo()'],['模拟注册办理码登录进入（待认领）','regApplyEnter()'],['模拟：班主任审核通过','pendingApprove()']]},
 'sc-apply-order':{t:'智能校徽 · 办理记录 Tab',d:'账号唯一的办理记录列表。顶部为状态筛选 chip 条，下方为记录卡列表，底部「校徽下单办理」回到办理 Tab；每条记录的「记录详情」进入记录详情页（状态全链口径见该页演示说明）。\n【维度】\n办理记录为账号级订单史（含支付凭证），与请假列表、消息页同为家庭维度：不随首页孩子切换过滤，每条记录以孩子姓名区分归属。已毕业孩子（林晓晴）的历史单保留只读、在保留期内可查，毕业后不再产生新记录。\n【筛选】\n状态筛选 chip 条参考电商订单列表：选中项浅蓝高亮，「全部」固定在左侧不随滑动，其余状态可左右滑动；chip 条固定在列表上方，列表滚动时不动。点选即过滤，新提交的记录同样参与筛选。\n「退款中」与卡片同口径：已付款取消后退款未到账的单，卡片显示派生的「退款中」，不归入「待审核」，也不单设「退款中」chip（瞬态，单账号同时至多一两条，按时间倒序在「全部」顶部即可见），经「全部」查看。「退款中」不会翻回：整单退完且退款在途期间主单流转冻结，已寄出单的物流签收只落物流单、不推进主单状态（见记录详情页演示说明）。\n无命中时有两种空态：具体状态下为「没有该状态的办理记录」轻提示（默认演示数据各状态都有记录，需经会话内流转如取消办理后才会自然出现）；「全部」下无任何记录时为全量空态——图标 +「还没有办理记录」+ 引导文案 +「去办理校徽」直达办理 Tab（与「我的校徽」Tab 空态同构），模拟从未办理过校徽的新账号。经「切换空态预览（无办理记录）」体验两种形态（开启后点状态 chip 即见状态空态，再点恢复）。\n【记录卡与操作】\n各状态统一为无背景浅色文字。待支付不在列表透出剩余支付时间，倒计时只在记录详情页展示，避免列表出现多个跑秒数字。\n待支付记录带「去支付」：列表卡上原地直接拉起收银台、不跳详情——先弹「微信支付」加载浮层，再滑出收银台（金额按记录带出，付款方式为静态示意，「使用面容 / 更改」以 toast 说明），输满任意 6 位密码即支付成功，本单转「待审核」并实时流转列表，随后跳转「支付结果」页（演示数据，刷新恢复）。\n待审核记录带「修改信息」（无需证件照形态的记录没有可改项、不提供，与详情页判定同源）：进入修改办理信息编辑态，隐藏 Tab 栏、活动横幅、申请说明卡、办理信息表头与办理时间、孩子选择卡，只保留该记录孩子的姓名班级与证件照表单（孩子按记录锁定；证件照区显示已上传照片，✕ 移除后回到「添加照片」空态、点击空态可重新上传，「替换照片」重走上传流程）；页头标题变为「修改办理信息」，底部「取消 / 保存」，保存以 toast 演示后返回列表。\n已寄出 / 已到校记录带「确认收货」（与详情页底部同一动作，二次确认后整单转已完成，列表与详情实时流转）；部分启用的记录不提供，家长已扫码核验过至少一枚，此时待办是核验剩余枚（见记录详情页演示说明）。\n新提交的记录按提交时的孩子 / 数量 / 款式 / 金额快照动态渲染：付费新单以「待支付」进入、卡上带「去支付」，支付成功流转待审核；身份审核中孩子的办理单同样显示「待审核」，不单列状态（经「校徽办理」Tab 的「添加孩子」流程演示）。\n【记录详情的待支付 / 已取消形态】\n待支付：顶部显示「还剩 mm:ss 办理自动取消」倒计时（无底色、红色分秒数字，进入页面时从 28:00 起实时倒数，演示值），金额卡显示红色「需付款」，隐藏支付时间与支付手机；底部浮动「取消办理 / 去支付」操作条。待审核：底部为「修改信息」操作条，另有「取消办理」，已付款单取消后实付金额 1–3 个工作日原路退回（退款进度由退款单承载）。\n「取消办理」弹二次确认半屏（可重新办理），确认后实时流转详情与列表：未支付单与免费单无款可退，即转「已取消」；已付款单只发起退款、转「退款中」，退款到账才转已取消（演示数据，刷新恢复）。未支付已取消的详情金额卡显示「应付款」而不是实付金额，隐藏支付时间与支付手机。\n【演示记录】\n列表内置每种状态各一条：待支付 / 待审核 / 生产中 / 已寄出 / 已到校 / 已取消 / 部分启用 / 已完成。另有：\n3 枚增办的已到校单 SS2026062641572089：三枚徽即「我的校徽」Tab 的 NO.0008–0010，在那里逐枚扫码核验，本记录实时流转「部分启用 1/3 → 2/3 → 已完成」，卡片状态与流转记录同步更新。\n已付款取消的三种形态：「退款中」「退款到账」与「退款关闭 · 转线下客服跟进」。两条运管全额退款、到账后才关单的单：SS2026052834705921 为已寄出后退款、退款行附「校徽作废停用」，SS2026051850613274 为生产中退款、校徽未发出故不附，两单构成对照。\n已完成：首枚免费 ¥0 单（林晓乐已用的首枚额度）；另一条运管部分退款的已完成单，列表卡摘要透出「已退款 ¥15.00（1 枚）」。\n列表底部 2024-09-02 的首枚免费已完成单为林晓晴的归档记录：详情与其毕业注销徽 NO.0005 对应，徽面与学生证件照同为晓晴证件照实拍；该单同时演示未开通办理审核学校的流转形态，生产行同样显示「审核通过 · 生产中」（提交生产视为平台确认通过）。\n「待修改信息」为后续阶段、第一阶段隐藏：筛选 chip 与对应演示记录都不展示，消息页「校徽审核未通过」消息同步隐藏；审核退回重传期间订单仍按「待审核」展示。记录详情可经记录详情页的预览入口查看。\n【证件照校级配置】\n「我的校徽 / 校徽办理」Tab 的「无需上传学生证件照」开关打开后，6月26日 的 3 枚单（SS2026062641572089，对应 NO.0008–0010）作为配置切换后办理的代表：列表缩略与记录详情徽面无照片位，详情不展示学生证件照；其余记录保留照片（演示简化：只有这一单跟随开关）。与我的校徽逐枚口径一致。',a:[['查看毕业孩子的归档记录详情（林晓晴）',"odShow('qing')"],['切换空态预览（无办理记录）','odEmptyToggle()'],['模拟：班主任审核通过','pendingApprove()']]},
 'sc-reissue':{t:'补办 / 增办',d:'学籍名册带出不可编辑，仅上传证件照（与人脸注册照分离授权）；首枚免费按学生计。增办入口已收敛至智能校徽页「校徽办理」Tab，本页作为历史模板保留、经演示说明进入。',a:[['查看办理记录',"go('sc-order')"]]},
 'sc-preview':{t:'印前版面确认',d:'确认即责任分界：信息错误家长担、印刷质量厂商担；定制商品不退、生产后不可取消。',a:[]},
 'sc-payok':{t:'支付结果',d:'本页不设页头返回键（本次迭代明确，所有进入路径统一）：上一页为已消费的表单 / 收银台，回退语义错误（可能诱导重复提交），与微信支付结果页替换导航栈的惯例一致，出路由页内按钮承载。微信支付成功后的统一落点：绿色对勾 + 实付金额 + 后续链路说明（进入学校审核，制作完成后统一寄送至学校，进展经消息通知）。所有提交路径统一落本页（付费单在收银台支付成功后进入——订单在点击「支付办理」时已创建为待支付，关闭收银台不落本页、停留办理记录）：微信支付成功为「支付成功 + 实付金额」形态；免费单为「提交成功 + 首张校徽免费」形态；身份审核中孩子的办理单正常支付、同落「支付成功」形态（原挂起单「提交成功」无金额形态已随口径废止）。出路按账号状态分流（本次迭代补全按钮文案口径）：「查看办理记录」恒可用（审核中孩子的记录以「待审核」可见）；第二个按钮随账号状态切换——存在已绑定孩子时为「返回首页」回常规首页（扫码后提交时认领成功的用户属此类，认领即绑定）；零绑定孩子的新用户（注册办理码进入、经「添加孩子」提交办理单、孩子仍在审核中）不显示「返回首页」——该账号没有首页，文案与落点不符构成预期违背，按钮改为中性的「完成」，落「未匹配到孩子」承接页的「审核中」状态卡形态（该承接页即「账号无孩子」的统一承接态）；审核通过后消息通知、孩子转正，首页恢复常规形态。新用户变体已可完整演示（本次迭代实现）：经登录页演示说明「新用户（名下无孩子）从海报开始」走完链路，本页第二按钮即为「完成」，点击将本会话提交的审核中孩子以状态卡写入「未匹配到孩子」承接页（逐条展示，与该页展示层多条口径一致）并落该页；此时该页「提交人工申请」兜底入口不再展示——申请已在途、入口使命完成（与入口就地转状态卡同语义），补充孩子走办理页链路。',a:[]},
 'sc-order':{t:'记录详情',d:'参考电商订单详情的单条记录详情页，由「办理记录」列表每条记录的「记录详情」进入、按所点记录渲染（列表内置每种状态的演示记录；新提交记录按提交快照渲染，没有核验清单）。\n自上而下：商品卡（徽面缩略 / 款式 / 单价 / 数量）→ 校徽办理信息（标题右侧为记录状态 chip；学生证件照 + 名册姓名 / 学校 / 班级）→ 金额明细 → 办理进度（轻量流转记录）→ 记录编号（可复制）与创建 / 支付时间。卡末行为「电话客服」cell（左图标 + 行尾箭头，原型以 toast 演示）：客服是低频兜底动作，不单独占卡；微信客服为后续阶段，上线时恢复隐藏的独立客服卡（电话 / 微信双入口）并移除本行。\n默认演示记录为 2 枚增办：NO.0003 已启用 / NO.0002 待核验，与「我的校徽」Tab 状态一致。\n【办理进度卡】\n每次状态变更一行（状态 + 进入时间 + 预期口径），默认收起为当前状态一行，点「完整流转」展开全部（倒序，当前状态置顶高亮）。步进器只回答「走到哪」，流转记录还回答「什么时候走到的」，价值集中在长等待状态：待审核（审核中，结果将以消息通知）、生产中（制作中，完成后统一寄送至学校）、已付款取消后的退款进度（1–3 个工作日原路退回）。「已到校」行附「待班主任发放」，管理家长对发放节奏的预期。\n「待支付」行只在订单停留在待支付期间作为当前状态行展示，或超时未支付取消后作为历史行保留（解释取消原因）；支付成功的单不展示该行（提交与进入待支付是同一时刻，支付事实由「支付成功」行附实付金额承载）。\n时效口径：对外时效承诺只有「自提交起整体预计 20 个工作日」一个数字，只在办理时点（「智能校徽申请与补办」须知卡 + 支付半屏）承诺，生产中行括注回指；各环节不单独承诺天数（与 20 个工作日并存会被读作矛盾，也会放大违约面），环节耗时由流转时间戳自然呈现。退款「1–3 个工作日」不受此限：它与消息、服务号卡片、toast 是「申请 → 到账」同一段路的同一数字。\n会话内状态流转（支付成功、取消办理）实时追加流转行（演示时间取 17:05，刷新恢复），新提交记录按创建时间与当前状态兜底生成。真实产品依赖生产 / 物流 / 到校各节点事件回传，时间戳缺失的节点不显示行、不留空位。\n【状态流转】\n主流程：待支付 → 待审核 → 生产中 → 已寄出 → 已到校 → 部分启用 x/y → 已完成。已支付即转待审核，底层待确认 / 待生产合并显示为「待审核」；身份审核中孩子的办理单正常支付、同样显示待审核，没有待审核 → 待支付回流；免费首枚 ¥0 跳过待支付。\n未开通办理审核的学校：支付成功（免费单为提交）后直落底层待生产，家长端仍合并显示「待审核」；提交生产时同样落「审核通过 · 生产中」行，提交生产视为平台确认通过（展示层统一口径，避免家长等不到审核结果；审计流水不落审核通过事件）。林晓晴 2024 归档单即该形态（其校当时未开通办理审核，2026 年已开通，所以在读孩子的单都带审核链路）。\n审核处置：第一阶段只有「通过」（转生产中）一个出口；问题单经家长修改信息 / 自主取消或客服代取消处理。「待修改信息」（可修复问题退回家长重传，同单迭代、重传后回到待审核）与「不予受理」（未付款单转已取消，已付款单由平台退款后转已取消）为后续阶段。待修改信息第一阶段隐藏：审核退回重传期间仍按「待审核」展示，办理记录列表与筛选不含该状态，消息页审核未通过消息同步隐藏；其详情可经「预览 · 待修改信息记录」查看——琥珀色状态 chip + 红色审核意见横幅（标题「审核未通过」、正文为退回原因），底部「修改信息」（演示以 toast 说明不流转）与「取消办理」（取消后横幅收起、实付金额经退款单原路退回）。\n「已完成」为枚级终态：记录内全部校徽扫码核验启用后整单转「已完成」；部分核验期间显示「部分启用 x/y」，已核验的徽立即参与考勤，不必等其余。\n部分启用行的附注分两态：作为当前状态行时为「NO.000X 已核验启用，剩余 N 枚待扫码核验」，被下一枚顶为历史行后只保留「NO.000X 已核验启用」（剩余枚数只在当前状态下成立）。末枚核验不再落「部分启用 y/y」，直接落「已完成」、附注「NO.000X 已核验启用，本次办理完成」：末枚启用与整单完结是同一时刻，y/y 也不是「部分」启用（PRD 16.8）。\n【确认收货与自动确认】\n已寄出 / 已到校的记录在列表卡与详情页底部提供「确认收货」：家长确认已收到实体校徽，半屏二次确认后整单转「已完成」，流转落「已完成」行、附注「家长确认收货，本次办理完成」，列表与详情实时流转（演示数据，刷新恢复）。部分启用的记录不提供：家长已扫码核验过至少一枚，收货事实已由扫码证明，此时的待办是核验剩余枚；其完结出口为末枚核验或到校满 7 天自动确认。\n确认收货后，尚未核验的校徽不受影响，仍可在「我的校徽」逐枚扫码核验启用；已完结的记录不再随核验回退状态或追加流转行（无状态变更不落行），枚级启用事实由「我的校徽」承载。\n到校满 7 天自动确认收货：已到校后家长既未人工确认、也未全部核验完结的单，到校满 7 天由系统自动确认、整单转「已完成」。定时器从到校起算，不因部分枚已核验而终止（部分启用的单到校满 7 天同样自动完结，剩余枚仍可在「我的校徽」补核验）；先于 7 天全部核验完结的单无需确认收货。家长零操作被动完结，所以「已完成」行附注写明触发事实「到校满 7 天自动确认收货，本次办理完成」。该单校徽仍为待核验，徽面缩略保持 NO.待分配（简号在核验启用时绑定）。\n「已完成」行附注共四种触发路径（PRD 16.8：附注承载「触发事实 + 完结语义」，触发事实要么并入本行、要么由紧邻行承载，不空置也不重复）：扫码核验「NO.000X 已核验启用，本次办理完成」；家长手动确认「家长确认收货，本次办理完成」；到校满 7 天「到校满 7 天自动确认收货，本次办理完成」；退款到账触发只写「本次办理完成」（触发事实由紧邻的「退款到账」行承载）。\n【取消与关单】\n异常分支只有「已取消」＝整单关闭，关单时机按有无实付款分两类（PRD 6.7 状态机：付费单的取消边守卫「取消成功」即含退款成功）：未支付单与免费单无款可退，取消即时转已取消；已付款单（待审核期间家长 / 运管取消、运管全额退款）一律退款成功才关单——取消动作只发起退款，退款到账回调时才落「已取消」行。身份审核失败不联动取消，出路见校徽办理页说明。\n家长自主取消只在生产开始前（定制商品不退）：待审核记录详情底部操作条提供「取消办理」，半屏二次确认（已付款单说明实付金额原路退回）后实时流转——已付款单转「退款中」、退款到账才转已取消，未支付单与免费单直接转「已取消」（演示数据，刷新恢复）。确认瞬间订单已进入生产的竞态走「取消失败」通知（消息中心有演示）。生产开始后，特殊情况经客服核实由运管操作部分或全额退款（未启用枚可退，已启用枚默认不可退、质量问题走补办换新），家长端没有入口。\n退款进度（退款中 → 已退款 / 退款关闭）由独立退款单承载，不是记录状态：1–3 个工作日原路退回；渠道退款重试异常不外显，停留退款中转人工跟进；人工判定无法原路退回时退款单置退款关闭、转线下，家长端落「退款关闭」行，附统一文案「无法原路退回至原支付账户，将由客服为您办理退款；客服将在 3 个工作日内与您联系」（PRD 16.8）。\n【退款的展示口径】\n退款期间订单底层状态不变（仍是待审核 / 生产中等）。列表卡摘要、状态 chip、金额明细三处统一由记录的退款单列表 refunds 派生（odRfAgg / odChip / odRfMeta / odRfRows），一笔办理可多次退款（运管端有可退枚即可再次发起，退款关闭后客服也可重发）。列表状态筛选与卡片 chip 同取派生口径：chip 派生「退款中」的单只在「全部」可见，不派生的单仍按主状态参与筛选。\n① chip 只回答「这单当前最主要在等什么」：「退完」（累计退款枚数覆盖本单全部枚，跨批次累计）且校徽尚未发出（状态门槛 RF_CANCEL_STS＝待审核 / 待修改信息 / 生产中 / 已寄出，与运管端同名常量一致）时，退款未到账期间 chip 让给「退款中」，主流程已终止、退款是唯一在跑的事；到账时整单转「已取消」。全额退款不是独立形态，就是「一次退完」。\n两种情形不派生、主状态照常显示：未退完（剩余枚仍要生产 / 寄送 / 核验，改成「退款中」会被读作整单停办）；已到校及之后退完（这次办理确实交付了，退款属售后、不关单，末笔退款到账时转「已完成」，「退款到账」与「已完成」同刻分开两行落）。到校前退完＝未交付、关单，到校后退完＝已交付、完结，两边对称。\n整单退完且退款在途时主单流转冻结（两端同口径）：唯一的真实竞态是已寄出 → 已到校（包裹已在途无法召回，签收回调必然到达），已寄出单全额退款在途期间物流签收只落物流单台账、不推进主单，到账仍按发出前门槛转已取消（被退枚发起时已作废入黑名单，即便签收到校也不会发放）。已到校 / 部分启用单整单退完在途期间，确认收货完结通道整体挂起：已到校单的「确认收货」隐藏（odCanRecv），到校满 7 天自动确认定时器挂起，完结统一由末笔退款到账驱动。部分退款在途不冻结，剩余枚照常推进。退款在已完结单上照常落「发起退款 / 退款到账」行（「已完结不再追加流转行」只针对核验启用事件）。\n② 列表摘要的退款段在途优先、只报一段：有在途时只说在途那笔，全部到账后转累计已退，两态互斥、不并列；退完的单不报枚数、前半段为「已取消办理 / 已取消」，未退完的报枚数、前半段为「实付：¥XX」；累计口径由流转行承载（如「本单累计退款 2 枚，剩余 1 枚办理继续」）。\n③ 金额明细按到账与否聚合成最多两行（已退款 / 退款中），不逐笔列退款单（逐笔溯源由流转行承载，每笔各落「部分退款」+「退款到账」两行）；行内「全额」按该行自身是否覆盖整单判定。\n④ 退款行是否附「校徽作废停用」按校徽是否已发出分两类（PRD 16.8）：已寄出 / 已到校 / 部分启用 / 已完成的单附该说明（家长手中实体徽不能再用，须告知）；待支付 / 待审核 / 生产中的单不附（家长手中没有实体徽，生产中被退枚由平台在发出前直接作废、不再寄出）。全额退款的退款单创建时插「全额退款」行（含退款原因、作废说明与到账预期；节点名不带操作者角色，「由平台退款」在附注中表达），到账时「退款到账」「已取消」同刻分开两行落；被退枚作废入黑名单、不出现在我的校徽。\n【零元回收】\n只退免费枚时金额为 0：摘要不报金额、改述作废事实「免费枚已作废回收（N 枚）」（「已退款 ¥0.00」既无信息量又易被读作退款失败），该分组也不进金额明细。流转只落一行、节点名「免费枚回收」（零元创建即生效、无钱可等，照套两行会出现「退款到账 · 无退款金额」的矛盾行；不叫「退款」，免得家长等一笔不存在的钱）。附注按校徽是否已发出分两类：已发出「免费枚回收 1 枚，该枚作废停用；免费办理无退款金额，首张免费额度已恢复」，未发出去掉作废停用段。\n首枚免费额度随被退的那一枚释放（不锚定整单），家长可重新享受首枚免费；「首张」与支付半屏「首张校徽免费」同词。纯免费单在未发出状态被回收即满足关单门槛，同刻落「已取消」行；已发出后回收只作废枚级、主状态不变、不派生「退款中」。混合退（含付费枚）金额大于 0，按正常退款口径落行、枚数含免费枚。零元回收的消息在回收生效时刻触达，服务号复用「校徽办理进度通知」模板（见消息页演示说明与 PRD 消息表）；运管端有完整可交互演示（办理明细页「零元退款：仅退免费枚」）。\n【演示记录】\n均经上方按钮直达：\n3 枚逐枚核验 SS2026062641572089（已到校，可交互）：在「我的校徽」对 NO.0008 / NO.0009 / NO.0010 逐枚扫码核验，依次落「部分启用 1/3」「部分启用 2/3」与「已完成」（附注「NO.0010 已核验启用，本次办理完成」），卡片状态、筛选归属与详情实时更新；也可先确认收货、再回「我的校徽」逐枚核验。既有 SS2026062977203648（部分启用 1/2 当前态）与 SS2026050623194085（部分启用 1/2 历史行）的附注两态由同一机制驱动。\n到校 7 天自动确认 SS2026061847291836（已完成）：未核验，到校满 7 天自动完结。\n部分退款已到账 SS2026050623194085（已完成）：运管退 1 枚，流转插「部分退款」（徽面瑕疵、该枚作废停用、到账预期）「退款到账」「已完成」三行，摘要与金额明细透出「已退款 ¥15.00（1 枚）」、实付保持原金额；保留启用的 NO.0004 即「我的校徽」中 6月20日 被家长停用的那枚，被退枚 NO.0006 作废入黑名单。\n部分退款在途 SS2026050874261390（已寄出）：2 枚增办、已寄出后 1 枚制作瑕疵由平台退该枚；chip 保持「已寄出」，摘要「¥15.00（1 枚）原路退回中」，金额明细「退款中（1 枚）-¥15.00」，流转停在「部分退款」行（当前状态附注「剩余 1 枚办理继续，到校后由班主任发放」），附「该枚作废停用」。\n多次部分退款 SS2026062536092817（已到校）：3 枚增办，一笔已到账 + 一笔在途；摘要只显示在途那笔，金额明细两行，累计 2 枚 < 3 枚、chip 保持已到校。\n退完即关单 SS2026050418735204（已取消）：2 枚分两次各退 1 枚，第二笔到账时整单转已取消；第二笔在途期间（5月15日–16日）chip 为「退款中」、摘要「已取消办理 · ¥15.00 原路退回中」。到校后退完则转「已完成」（运管端沈亦航单可交互验证）。\n全额退款 SS2026052834705921（已取消）：已寄出后学生转学，运管全额退款，附作废停用；被退徽 NO.0007 作废入黑名单。全额退款另有在途 / 到账成对记录 SS2026070166325149 / SS2026061090241736（后者为家长自主取消的已付款单）。\n生产中退款 SS2026051850613274（已取消）：制作环节发现无法完成，平台主动全额退款并关单，不附作废停用；被退枚 NO.0011 从未发出。\n免费枚回收 SS2026031628470359（已取消，2026-03 归档）：首张免费单生产中被平台回收关单，与上一条构成免费 / 付费对照，摘要「已取消 · 免费枚已作废回收（1 枚）」、金额明细不出行；回收释放的首张免费额度随后被 4月10日 的首枚免费单重新占用，林晓乐「首张免费额度已用」的演示基准不变。\n退款关闭 SS2026060527816490：无法原路退回、转线下客服跟进。\n无审核学校形态：林晓晴 2024 归档单。\n经「智能校徽-确认版面」页支付后，本页会追加一张待审核的新记录。\n【后续阶段】\n办理进度区块（七态步进器 + 启用方式 / 在途保护 / 核验清单）第一阶段整体隐藏（节点保留、display:none）；轻量「办理进度」流转记录卡即其第一阶段形态，后续恢复完整区块时与之合并，不做两套平行进度表达；待核验徽的扫码核验经「我的校徽」Tab 体验。\n到校后长时间未收到发放可联系班主任核查；在途徽为未启用状态，作废补制不影响考勤（页面不展示该说明）。第一阶段只统一寄送至学校、班主任发放后家长扫码核验启用，快递到家为后续阶段。',a:[['打开待审核记录（可取消办理）',"odShow('review')"],['打开 3 枚逐枚核验记录（已到校）',"odShow('multi3')"],['去核验该单下一枚（NO.0008–0010）',"go('sc-apply');applyTab('mine');bdVerifyNext()"],['打开 7 天自动确认收货记录（未核验 · 已完成）',"odShow('autorecv')"],['打开部分退款在途记录（退款到账前 · 办理继续）',"odShow('partrfing')"],['打开多次部分退款记录（一笔已到账 · 一笔在途）',"odShow('partrf2')"],['打开退完即关单记录（两笔退完全部枚 · 转已取消）',"odShow('partrfall')"],['打开部分退款记录（运管退 1 枚 · 已到账）',"odShow('partrf')"],['打开全额退款记录（已寄出后退款 · 附作废停用）',"odShow('fullrf')"],['打开生产中退款记录（未发出 · 不附作废停用）',"odShow('prodrf')"],['打开免费枚回收记录（零元 · 已取消）',"odShow('zerorf')"],['打开退款关闭记录（转线下客服跟进）',"odShow('rfclosed')"],['预览 · 待修改信息记录（后续阶段）',"odShow('reject')"],['打开无审核学校形态记录（林晓晴 2024 归档单）',"odShow('qing')"],['再办一枚',"go('sc-apply');applyTab('form')"]]},
 'sc-face':{t:'人脸识别授权',d:'退出即「不注册」：相机端模板删除（操作可审计），孩子在识别系统中等同陌生人、未命中即提即毁；改走校徽（RFID）单因子考勤，不因退出被额外告警或人工审视，防代打卡由线下值守兜底。页面文案均为家长视角，机制术语收纳于此。',a:[]},
 'sc-newleave':{t:'发起请假',d:'家长为当前孩子发起请假，提交后由班主任审批。只对在读孩子开放：毕业 / 离校孩子的请假页不显示发起按钮，经演示入口或页面地址直达本页时同样拦回请假列表并 toast「{孩子}已毕业，不能请假」（离校为「已离校」），服务端提交接口同样拦截。\n【表单】\n渐进披露：进页默认不选请假类型（病假 / 事假两类），选定类型后显示开始 / 结束时间（占位「请选择」），起止选齐后显示自动计算的时长。选「病假」时额外显示「是否传染病」（必选，服务校园传染病防控上报）与「病状」（发热 / 感冒 / 咳嗽 / 咽喉痛 / 头疼 / 腹痛 / 呕吐 / 腹泻 / 皮疹 / 腮腺炎 / 手足口病 / 其他，可多选、非必填），切到「事假」即收起。事由最长 200 字、标签旁实时计数（与销假理由同上限）。\n时间与证明材料两个控件与教师端「代学生请假」同构。时间为「日期 + 时 + 分」三列滚轮：日期列带真实历法星期（今天显示「当天」），分钟列 30 分钟步进，最少可请 0.5 小时（粒度为校级配置）。开始时间为当天前后各 30 天（补请假回溯上限），结束时间以开始日期为锚最长 90 天（更长缺勤引导走休学 / 病休备案），边界均为校级配置。选择器顶部回显始终带全年份作为确认关口，不设「清除」与「✕」（起止必填、改值直接滚到新值，关闭统一走底部「取消」）；滚轮项与表单在当年内省略年份，跨年时段在表单与单据中显式标年。确定开始时间后，若已选的结束不晚于开始，toast「开始时间晚于结束时间」，不自动清空结束。\n证明材料为图片网格：点「＋」添加照片（演示以证件照示例图轮换模拟），缩略图右上角 ✕ 删除，最多 5 个，满 5 个后隐藏添加块；只收 JPG / PNG / HEIC，单个超过 10 MB 时拦截并 toast「单个文件不能超过 10 MB」（演示不做真实选图，不触发）。\n【时长计算】\n起止选定后自动计算「时长（上学日）」，与校园签到统计同口径：上学日由校历与该班班次共同决定（周末、法定节假日、寒暑假及该班当日无班次的日期均为非上学日；演示按真实历法只扣周末），逐日取区间与当日应出勤时段（该班班次各时段的上学–放学，午休不计；演示晓乐班为 08:00–11:30、13:30–16:30）的重叠。完整覆盖当日应出勤时段的上学日计整天（即统计页月历蓝点、「请假 N 天」），其余部分覆盖日的重叠小时累加（即统计页「时段请假」），显示「N 天 M 小时」、为 0 的部分省略。不按累计小时折算天数：跨天半日单（12:00 请到次日 12:00）累计 6.5 小时（当天下午 3 小时 + 次日上午 3.5 小时），但两天都不是全天请假，统计页记 0 天 / 时段请假 6.5 小时，所以这里显示「6.5 小时」。时长也是「事假 1 天内免证明」等校级规则的挂载点（可挂总小时数或整天数，由学校配置）。\n【提交校验】\n按顺序 toast 拦截：类型或起止未选、病假未选是否传染病、结束不晚于开始、事由为空（含纯空格，toast「请填写请假事由」）；之后才是空单与重叠拦截（演示入口预填事由以直达后两项校验）。\n空单拦截：上学日时长为 0 的单（所选时段与在校时段无重叠：整段落在非上学日，或落在该班应出勤时段之外，如 00:00–05:00、午休 11:30–13:30）提交时拦下。这类单不覆盖任何应到时段，考勤判定与缺勤告警都不受影响，提交出来是空单还会占用班主任审批队列。两种成因分开措辞（不在上学时间内 / 均为非上学日），帮家长定位是时间选错还是日期选错；toast 只说结论，不点名「周末」，也不展开在校时段（属校级配置）；改起止即可解决，所以用 toast。\n重叠拦截（居中弹窗，对齐主流请假应用）：比对本孩子仍占用时段的请假单——待审批、已通过、销假待确认按原时段（销假确认前原时段仍生效），已销假按「开始 ~ 实际结束时间」，整单销假的不再占用，已撤销、未通过不计入（撤销即时生效；后续阶段「退回补充」同待审批口径）；区间按左闭右开比较。存在重叠即弹「当前时间段已存在请假记录」，正文列出已有请假时段，按情形措辞（完整覆盖：无需重复提交，请返回修改；部分重叠：请返回修改后再提交）；左「返回修改」回表单，右「查看请假记录」直达该重叠单详情（可撤销待审批单；命中多张时回请假记录列表）。\n续假：新单开始恰等于已有单结束（首尾相接）不算重叠、直接放行，弹窗正文已展示已有单结束时间，家长按其对齐开始时间即可；考勤侧按「多单合并取并集」判定（考勤状态定义文档第 6 节），相接单合并后连续生效。\n真实产品在选完结束时间后即时提示（原型收敛为提交时校验），服务端提交接口做同样校验防绕过。家人共享下父母双方可能同时为同一孩子发起，并发提交或老师代请假仍可能产生重叠单，考勤判定与请假时长统计按合并并集兜底（重叠时段不重复计入），审批详情向老师提示时段重叠辅助判断。\n【提交后】\n由班主任审批，审批通过后请假时段才不计缺勤：待审批期间按正常考勤判定，当天未到校仍可能收到经老师核对的缺勤消息；需要当天即时生效的可电话告知班主任，由老师代请。审批结果同步双方家长。',a:[['演示 · 完整覆盖拦截弹窗（7月7日 已通过病假 8:00–12:00 内）',"lvFormDemo('7月7日 09:00','7月7日 11:00')"],['演示 · 部分重叠拦截弹窗',"lvFormDemo('7月7日 10:00','7月7日 14:00')"],['演示 · 首尾相接续假直接放行',"lvFormDemo('7月7日 12:00','7月7日 14:00')"],['演示 · 上学日时长 0 拦截（时段在在校时段之外）',"lvFormDemo('7月7日 00:00','7月7日 05:00')"],['演示 · 已整单销假的时段可重新请假（5月29日）',"lvFormDemo('5月29日 09:00','5月29日 12:00')"],['演示 · 上学日时长 0 拦截（整段为周末）',"lvFormDemo('7月11日 08:00','7月12日 16:30')"]]},
 'sc-leavedetail':{t:'请假单详情',d:'请假列表任意记录卡点击进入的单页模板，按单据状态渲染。单据信息：学生 / 起止时间 / 时长（2026-10-19：销假待确认另列「销假后时长 ×（待确认）」，班主任确认前考勤仍按原时长；已销假的时长行显示实际时长并附「销假前 ×」，整单销假显示「整单销假，不计请假时长」）/ 事由（病假含是否传染病与病状，有证明材料时展示缩略图、点击全屏查看大图，多图时左右箭头循环切换、标题带页码）；审批结果同步双方家长（流转记录仅展示审批人与时间）；流转记录：提交 → 审批 → 核销 / 退回 / 撤销的时间线，多次退回补充的单完整展示每轮「退回补充 → 重新提交」，退回节点附老师意见、重提节点附家长补充说明与当轮补传的证明材料缩略图（点击看大图，仅浏览该轮补传的照片、单张不出现切换箭头；单据卡顶部的证明材料入口则可浏览全部材料；同单迭代不新建单据、版本 V1→V3 递进）。操作按钮悬浮于页面底部（与列表页发起按钮同款底栏），按状态显示：待审批 = 撤销请假单（二次确认，撤销后本页与列表就地更新为「已撤销」，流转记录追加「已撤销 · {撤销的家长称谓}」节点、附注「审批前自行撤销」，老师不再审批；待审批单本就按正常考勤判定，撤销不改变考勤结果）；已通过 = 销假（本次新增；毕业孩子的历史单除外）：半屏版式参考小程序销假页：顶部学生行（头像 + 姓名 + 班级），其下两组行式表单——「请假开始 / 结束时间」只读回显（带星期），「实际结束时间」点击拉起滚轮、「实际请假时长」按所选时刻自动算（开始 ~ 实际结束的上学日时长，等于开始时间即 0 小时并标「整单销假」）、「销假理由」200 字上限带计数；实际结束时间用与发起请假同一套「日期 + 时 + 分」滚轮、30 分钟粒度：日期轴限定在请假起止日内，时、分列随所选日期裁剪到有效范围「开始时间 ~ 原结束时间前 30 分钟」（等于原结束即等于没销，故上界前移一档），确定时再钳一次兜底、提交前仍做范围校验（等于开始时间即整单销假，介于其间即提前结束；原结束已过的历史单同样可销——补销假不设时限），默认值：未开始的单 = 开始时间、进行中的单 = 当前时刻向上取整到半点、已结束的单留空；提交后单据转「销假待确认」（琥珀）、流转记录追加「申请销假」节点、列表卡角标同步并加「实际结束时间」行（原结束时间保留对照，整单销假带「（整单销假）」；撤回后该行消失，已销假卡同样印此行），等待班主任确认期间底栏可「撤回销假申请」（二次确认后回到已通过 · 原时段，实际结束时间行消失、时长恢复原值，流转记录保留「申请销假」并追加「撤回销假申请」节点，可再次申请；班主任不同意后回到已通过、可重新申请销假；确认后转已销假为终态，不可撤回也不可再申请销假——实际结束时间填晚了由家长联系班主任处理，填早了属于延长请假、另发起新单；命名用「撤回」与请假单的「撤销」区分；老师端「待我审批」里的「销假待确认」条目同步消失），确认前请假单维持原时段生效、考勤不变；班主任确认后转「已销假」（藏青），流转记录追加「已销假」节点，单据信息多出「实际结束时间」行、时长按新区间重算并标注销假前原时长（老师端确认后本页同步更新，确认后的形态也可看预置的已销假单）。销假待确认 / 已销假 / 已撤销 / 未通过为只读，未通过单的拒绝意见以警示色附于流转「未通过」节点下。后续阶段（第一阶段隐藏）：退回补充（老师意见 + 补充说明与补传材料后「补充并重新提交」同单迭代为 V2 重回待审批，多轮退回的流转时间线完整展示每轮「退回补充 → 重新提交」）与实际到校自动核销暂不做，列表已隐藏对应记录，可用上方预览入口查看。考勤语义：只有审批通过的请假才不计缺勤，待审批与退回期间均按正常考勤判定，通过后已产生的缺勤待核项自动核销、考勤回溯改判为请假。\n【返回】左上角返回键回到进入本页之前的页面，与小程序页面栈后退一致：从请假列表进入回请假列表，从消息列表点请假类消息（审批结果、代请假、代销假等）进入回消息页，从服务号推送示意页的卡片进入回该页；在本页内操作后重绘不改变返回目标；以地址直达、没有上一页时回请假列表。真实产品从微信服务号卡片深链打开时本页为页面栈栈底，导航栏显示微信原生「返回首页」按钮。',a:[['恢复请假演示数据','lvDemoReset()'],['查看已通过单',"openLeaveDetail('le7')"],['查看跨天请假单（6月2日–4日）',"openLeaveDetail('lemd')"],['查看老师代请假单（晓阳）',"openLeaveDetail('yang')"],['查看老师代请假单（晓乐）',"openLeaveDetail('le16')"],['查看已销假单',"openLeaveDetail('lecx')"],['查看已撤销单',"openLeaveDetail('le12')"],['查看未通过单',"openLeaveDetail('lefail')"],['预览 · 多次退回后通过单（后续阶段）',"openLeaveDetail('leok2')"],['预览 · 实际到校单（后续阶段）',"openLeaveDetail('leauto')"]]},
 'sc-addchild':{t:'添加孩子 · 绑定三通道',d:'绑定孩子有三条通道：名册认领（主）→ 班主任邀请（补漏）→ 人工申请（窄兜底）。前两条是被动通道、页面不设操作：① 名册命中的孩子常驻「我的」孩子区块并标记「待认领」（打码、零可见性），点击认领，确认时可反馈「不是我的孩子」（错配隐藏并回流学校核正）；② 班主任把一次性邀请卡片 / 小程序码（24–72 小时有效、绑定即失效、教师背书免审）发到微信会话，家长点开直达绑定确认页。本页只承载 ③ 人工申请表单：前两条都不可用时提交，按「学校 → 年级 → 班级」路由至对应班主任人工审核（只在确认认识该家庭时通过）。\n【表单】\n年级 / 班级取自学校组织树，只公开组织结构、不含学生信息。学生姓名手填全名，不提供学生检索（防枚举探测）。性别必选（男 / 女，辅助班主任与名册比对）。\n就读安排必选，位于监护关系上方，默认「现在就读」；「新学年入学」供尚未入学、新学年才到该校就读的孩子提交，辅助班主任区分在读名册与新生。监护关系必选、由家长自填（申请人多在名册之外，无从带出；名册已登记关系的，班主任审核端可对照参考）。\n孩子头像选填：表单顶部默认显示随性别联动的默认头像（切换性别自动切换男 / 女默认图）；点击弹「拍照 / 从相册选择」半屏自选（原型按已选性别取样例图），自选后头像固定、不再随性别变化，半屏有「恢复默认头像」回到联动状态；提交后审核中条目以生效头像展示，再次进入本页时恢复默认联动。\n【学校选择与人设】\n任何不匹配都返回统一模糊反馈并限频，绑定入口不可用于探测「某孩子是否在某校」；学校只列已绑定校快捷项 + 关键字搜索（防穷举）。\n无绑定账号（从「未匹配到孩子」进入，人设 138****9900）：没有已绑定校快捷项、表单不预填，只有搜索通道。注册办理码新用户例外：学校字段由码携带的学校信息带出并锁定（海报是该校专属公开物料，无泄露面），点学校项提示「已由注册办理码带出」、不开选择半屏，年级 / 班级仍从该校组织树自选；返回与提交落点回未匹配承接页，提交后该页「提交人工申请」入口上方插入「审核中」状态卡并隐藏该入口（防重复提交）。\n已绑定账号（从「我的」进入，人设乐乐妈妈）：预填林晓乐所在校班，便于为二孩提交；提交后落孩子管理页，列表插入「审核中」条目（只回显家长自填信息、不回填名册数据，审核通过前看不到孩子任何数据；「我的」数据栏孩子数不变，审核通过才 +1；演示数据，刷新恢复），并弹「申请已提交」承接半屏，只说审核去向与通知方式：「由 X 班主任审核，结果将以消息通知您」（面向家长不出现「路由」这类内部术语，未匹配承接页与班级注册码提交的 toast 同口径）。\n从校徽办理页「添加孩子」进入（第三入口）：提交后回办理页并生成「审核中」孩子 chip，可先行提交校徽办理并正常支付，记录以「待审核」进入列表等待身份审核（见校徽办理页说明）。\n任一家长不可单方解绑对方，监护权变化由学校端仲裁。\n【与老师端联动】\n提交后，同一浏览器打开的老师端「学生审核 · 注册申请」待审核列表即时出现该申请（只限本校，撤回同步移除，家长端刷新清空）；审核页据此自动定位归属学年，家长姓名按「孩子姓名 + 关系」默认带出（如「林晓乐妈妈」）。老师通过 / 拒绝后结果即时回传本页：通过转已绑定（孩子管理页条目转普通条目、孩子数 +1，未匹配承接页状态卡转「已通过」，办理页 chip 转正）；拒绝同撤回口径清除该申请，并提示未通过及理由。需两端在同一浏览器的两个标签页同时打开。\n【提交前拦截】\n以下拦截比对的都是本账号自有信息、无泄露面，所以可即时前置提示；真实产品服务端提交接口做同样校验防绕过。命中他人名册记录时绝不提示，仍走统一提交口径。\n走错通道：表单信息命中本账号名下待认领记录时（演示：市实验一小 / 1年级 / 3班 / 王一明 / 男）不创建申请——待认领态弹「该孩子已在您的账号待认领」承接半屏，「去认领」直达孩子管理页拉起认领半屏；认领已锁定（核实中）提示等待班主任核实结果；已认领的转入重复添加拦截；已反馈「非本人孩子」的不拦截，照常提交由班主任判断。\n重复添加：表单五字段（校 / 年级 / 班 / 姓名 / 性别）命中本账号已绑定孩子时不创建申请（重复绑定注定被驳回，不该消耗班主任审核）。演示：林晓乐 3年级-2班 男（即表单预填校班）、林晓阳 1年级-1班 男、毕业生林晓晴 6年级-1班 女，认领后的王一明、加入家庭后的陈小雨动态计入。弹「该孩子已在您的账号下」承接半屏：「查看孩子」直达孩子管理页；这类误操作最常见的真实意图是想让另一位家人接收孩子消息，半屏内置「去邀请家人」引导走家人邀请（对方确认即生效、免审核）。同班另有同名同性别孩子的极端误拦，由班主任口头引导发送绑定邀请（教师邀请锚定具体学生、免审直达），半屏不承载该说明。他人账号申请绑定毕业生仍走统一模糊反馈。\n在途申请：五字段命中本账号在途人工申请时不创建第二条（同一份单子会让班主任收到两条一样的记录）。弹「该申请正在审核中」承接半屏：回显提交时间并明说「重复提交不会加快审核」（重复提交的真实动机基本是以为没提交上的催办焦虑）；「查看申请」按人设落孩子管理页或未匹配承接页并拉起申请详情半屏（进度 + 撤回，见孩子管理页说明）。零绑定人设同样适用。\n统一在途申请表：三个提交入口（我的 / 孩子管理页、校徽办理页、未匹配承接页）共用一份账号级在途申请表——提交写表、拦截读表、撤回清表；账号级在途上限 3 个（静态演示的林晓冬计入）也由该表统一把关，「继续提交申请」逃生通道同样受该上限约束。\n五字段不完全一致的不拦截：把班级填错后重填正确的会另生成一条申请，与申请二孩无从区分，照常提交由班主任判断；真实产品在教师端给这类单子标注「同账号已有该班同名在审申请」辅助合并处理。填错的那条第一阶段等班主任驳回（自助「撤回申请」属后续阶段）。审核通过后该孩子转入已绑定，同信息再添加由重复添加拦截承接。\n【孩子已由另一位家长注册：加入家庭】\n班里存在同名学生时家长端不感知、不展示候选学生或家长信息（「重名候选卡 + 脱敏家长信息」会成为姓名探测预言机），由班主任在审核端结合性别、申请人手机号与名册指定绑定目标，难以判断时改用教师邀请锚定具体学生。\n孩子已由另一位家长注册的走自助链路：五字段全匹配某个已有家人绑定的学生时（演示：市实验一小 / 2年级 / 1班 / 陈小雨 / 女，班里有两个同名的陈小雨、各有已绑定家庭），不创建申请，弹统一候选卡（单 / 多命中同款界面，消除数量差异探测面）。每个已绑定家庭一行，展示第一位家人的关系 + 手机尾号后 4 位，供申请人「显示式辨认」自家家人，不要求回忆完整号码（尾号残余的确认式攻击以限频与风控标记缓解）；不显示学生真实照片，卡内头像用申请人自己表单的头像。点某家庭行尾「加入家庭」（品牌蓝主操作）→ 对方确认后才加入，授权始终来自知情方。确认端展示申请人姓名、手机号与自称关系，同意需二次确认；「不认识此人」拒绝并拉黑，可一键报告班主任（对方视角确认页经上方按钮预览，页内动作与申请人侧状态实时打通）。\n频控（真实产品行为）：每个家庭同时只有 1 条待确认请求；被拒 7 天冷却（原型不生效、可立即重试）；同一家庭累计 2 次被拒锁定；账号级对触发候选卡与可发起家庭数限频。\n不可发起态：被锁定与被对方「拒绝并拉黑」在申请人侧同一呈现，行尾「加入家庭」换成灰 chip「暂不可发起」，不区分原因（拉黑是对方的隐私决策，明示会引发对抗与骚扰）。拉黑不单独通知申请人，对方收到的仍是普通「加入家庭请求已被拒绝 · 7 天内不可再次发起」消息，冷却期后该家庭行仍为「暂不可发起」；不采用完全静默（显示已发送、实则丢弃），申请人多为认错人或被误拒的真家长，班主任是现成仲裁出路。全部候选家庭都不可发起时，卡内说明改为「当前暂不可向该学生的家庭发起加入请求，如需绑定请联系班主任核实」；部分不可发起时维持辨认引导，只由行尾 chip 区分（如妈妈家庭「暂不可发起」、爸爸家庭仍可「加入家庭」）。\n请求发出后孩子管理列表插入「待家人确认」条目（副行注明目标家人关系与尾号）；对方同意 / 拒绝经上方按钮模拟（作用于最近发起的请求）：同意转普通已绑定条目、孩子数 +1；拒绝移除条目并按家庭计冷却与锁定（演示数据，刷新恢复）。\n候选卡各状态都保留「不是同一个孩子？继续提交申请」逃生通道：班里另有同名孩子（或名册尚未录入自家孩子）的家长不会被堵死，走人工申请，真实产品该申请附「与已绑定学生同名」标记辅助审核。班主任审核始终作为兜底。\n备用方案（经上方开关切换，默认关闭）：五要素命中其他账号下已绑定的学生时不出候选卡、不开放自助加入家庭，直接弹「该孩子已有家人绑定」承接半屏，只告知已有家人绑定、暂不支持自助添加，引导联系班主任核实身份后添加或由班主任发送绑定邀请；半屏只有「我知道了」，不展示任何家庭 / 家人信息，单 / 多命中同一文案；同班另有同名孩子的家长同样由班主任核对名册后添加或邀请，不设逃生通道。取舍：交互与泄露面最小，但家长需线下联系老师。开关打开后提交同一演示数据即走此分支，也可经上方按钮直接预览。\n【错配反馈与后续申请】\n预留号主反馈「不是我的孩子」后该学生暂无家人绑定，其他账号提交同信息申请时家长端零特殊感知：照常提交、照常「审核中」，不暴露该生预留号码曾出错（防探测）。申请照常进入班主任的注册申请审核，审核标准不降：孩子暂时「无主」恰是攻击窗口，仍按「确认认识该家庭」严审。把该申请与同一学生的「名册核正」待办合并处理（确认申请人为该生家长时一并把名册预留号码核正为申请人号码），以及核正名册后向正确号码下发的认领与在途申请的去重合并，随「名册核正」待办一起为后续阶段。\n【已毕业 / 离校学生】\n随学籍异动在名册中归档，不可再被申请绑定：名册认领与班主任邀请自然无从发起，人工申请提交后返回与「姓名不匹配」一致的统一模糊反馈并限频（不因毕业单列原因）。',a:[['查看待认领孩子（我的）',"go('sc-me')"],['演示名册认领','claimChild()'],['对方视角 · 家人确认加入请求页',"famReqOpen()"],['模拟：家人已同意加入','famJoinApprove()'],['模拟：家人拒绝了请求','famJoinReject()'],['预览 · 候选卡全部家庭不可发起态',"famJoinLockAllPreview()"],['预览 · 候选卡一个家庭被拉黑、一个家庭可发起',"famJoinLockAllPreview('partial')"],['恢复候选家庭为可发起','famJoinResetDemo()'],['预览 · 备用方案：已有家人绑定、请联系班主任添加','famAltSheet()'],['模拟打开班主任邀请',"go('sc-invite')"]]},
 'sc-invite':{t:'教师邀请 · 绑定确认',d:'班主任在教师端按学生生成一次性邀请（微信卡片/小程序码，24–72 小时有效、绑定即失效），发到与家长的微信会话；家长点开/识别后注册续接直达本页——学生与班级由邀请带出，自带教师背书免人工审核，确认监护关系即绑定生效，邀请随之失效。监护关系口径：被邀请人手机号命中名册预留号码时带出学校登记的关系预填（与名册认领同口径），未命中时保持空白自选——邀请本就是名册补漏通道，被邀请人多为名册未登记的家长，演示保持自选形态。不是自己孩子时不应确认，联系班主任重新邀请。与教师端「生成绑定邀请」互为演示闭环。',a:[]},
 'sc-faminvite':{t:'家人邀请 · 被邀请人确认页',d:'家长发起的定向邀请：被邀请人在微信点开邀请卡片，用指定手机号注册或登录后直达本页——邀请人、授权孩子、关系均由邀请带出——关系默认为邀请人标注值，确认前可直接改选（被邀请人是自己关系的第一知情人，标错无需先接受再改，留痕干净）；确认后即成为家人、无需邀请人审核，通知随即开通。原「开通内容」行不再在页面展示——成为家人即默认开通到离校通知 / 请假发起 / 校徽管理，无需向被邀请人展示口径（与首次绑定确认页、孩子资料页同处理）。非指定手机号打开仅显示「邀请无效或已失效」的统一模糊提示（不区分原因，防探测）；邀请人取消后本页链接同样失效。邀请单进入终态后再次点开卡片按状态分流：本人已同意的不再进本页，直达该孩子首页并 toast「你已是 TA 的家人」（多孩授权落第一个孩子，与班级注册码「已绑定 → 首页 + toast」同口径）；已拒绝的与已取消、已过期一样落无效页，需邀请人重新发起；同意后又主动解绑的，旧邀请不复活，同样需重新邀请。服务端判断顺序：邀请单已接受、接受人为当前账号且当前对该孩子仍有生效关系 → 落首页，否则一律无效页。拒绝需二次确认（作废并通知邀请人，重新成为家人需对方再次邀请），拒绝后回该账号常规落点：已绑定其他孩子的账号回首页，无任何绑定的新账号（本演示）落「未匹配到孩子」承接页——承接页演示数据以 138****9900 为例。与孩子详情页「邀请家人」互为演示闭环。被邀请人从收到卡片到进入本页的完整注册链路（邀请卡片 → 注册落地页 → 关注服务号 → 欢迎语点卡片 → 快捷登录 139****5566 → 本页）可从家人邀请卡片页开始体验。页头左侧为微信原生「返回首页」按钮（邀请卡片冷启动、页面栈仅一页时微信自动显示，与绑定申请页同示意），落点按账号身份兜底路由（cregHome）：有孩子 → 首页，无孩子有教师身份 → 教师端首页，均无 → 未匹配承接页（本演示账号为无绑定新账号，落未匹配承接页）',a:[['模拟：非指定手机号打开',"go('sc-faminvalid')"],['查看完整注册链路（从邀请卡片开始）',"go('sc-reginvite3')"],['返回孩子详情',"go('sc-child')"]]},
 'sc-famconfirm':{t:'加入请求 · 家人确认页（对方视角）',d:'「加入已有家庭」链路的确认端：申请人经添加孩子表单命中已绑定学生并发起请求后，被选中家庭的家人（演示以陈小雨妈妈 · 尾号 3216 视角）收到消息进入本页做知情决策。页面展示申请人的姓名、脱敏手机号与自称关系（张伟 · 152****4321 · 自称爸爸）、申请加入的孩子及同意后开通的能力。三个动作均需二次确认防误点：「同意加入」确认后申请人即成为家人（结果同步全部家人）；「拒绝」后对方 7 天内不可再发起、同一家庭累计 2 次被拒锁定；「拒绝并拉黑」不再接收该申请人后续请求（作用于申请人 × 本家庭；申请人侧不被告知拉黑，只收普通已被拒绝通知，其候选卡内本家庭行转「暂不可发起」、与 2 次被拒锁定同一呈现，口径详见添加孩子页说明）。本页动作与申请人侧状态实时打通：如需演示申请人侧联动，可先在添加孩子表单发起请求（陈小雨 · 2年级-1班 · 女）；三个动作确认后停留本页并就地转为已处理态（真实产品行为；申请人侧存在在途请求时其孩子管理页条目同步流转，可经上方按钮切到孩子管理页查看双视角衔接）。已处理态口径（本次迭代新增）：请求本身是业务对象、本页即其详情页，「加入家庭请求待确认」站内消息与服务号推送卡无论处理前后都落本页、只按请求当前状态变形——待确认展示三动作；已同意 / 已拒绝 / 已拒绝并拉黑后动作区整块隐藏，换成状态 chip + 处理时间 + 结果说明（已同意另给「查看陈小雨的家人」出口；演示账号名下无陈小雨，该出口进家人页以 toast 说明版式），不回放待确认态、不允许二次操作；同一请求被其他家人先处理（结果同步全部家人，各家人的消息都落同一结果态）与申请人撤回 / 长期未处理失效两种态经上方按钮预览。消息列表条目本身不改标题与摘要（历史消息不可变，与校徽订单消息同口径），当前状态由本页承载。返回键按来源回溯：由消息 / 推送卡进入回消息页 / 推送页，由添加孩子页或孩子管理页预览进入回原页。处理时间为演示固定值，刷新恢复待确认态。',a:[['回申请人视角 · 孩子管理',"go('sc-kids')"],['去发起加入请求（添加孩子）',"goAddChild('me')"],['预览 · 已由其他家人处理态',"famReqPreview('other')"],['预览 · 请求已失效态',"famReqPreview('expired')"],['重置为待确认态',"famReqPreview('pending')"],['返回添加孩子',"go('sc-addchild')"]]},
 'sc-faminvalid':{t:'家人邀请 · 无效提示',d:'非指定手机号打开邀请链接、邀请已被取消、已过期、或本人已拒绝后再次点开时的统一落地页：四种原因给同一句模糊提示、不区分具体原因，防止链接被转发后用于探测邀请状态或孩子信息（已拒绝单与已取消单同为作废单，没有单独展示「你已拒绝」的必要）。本人已同意后再次点开卡片不落本页，直达该孩子首页并 toast 提示已是家人，见确认页演示说明。页面仅引导「与邀请人确认后重新发起」；若用户自知登错了号，底部「退出登录」出口可换邀请对象手机号重新登录续接确认流程。页头左侧为微信原生「返回首页」按钮（邀请卡片冷启动、页面栈仅一页时微信自动显示，与绑定申请页同示意），落点按账号身份兜底路由（cregHome）：有孩子 → 首页，无孩子有教师身份 → 教师端首页，均无 → 未匹配承接页（本演示账号为无绑定新账号，落未匹配承接页）',a:[['查看正常确认页（指定手机号视角）',"go('sc-faminvite')"],['返回孩子详情',"go('sc-child')"]]},
 'sc-nochild':{t:'未匹配到孩子（登录承接页）',d:'注册与绑定严格分离：注册对任何人开放，登录成功但手机号未命中任何学校名册时落到本页（2026-10-20 起也是老师端登录分流的落点：家长与教师同一个小程序，登录后无任何教师 / 家长身份、或教师身份被移除 / 本校已离职且无剩余身份（离职 2026-10-21 起同口径；失效告知在教师端跳转前以单按钮对话框完成，本页落地不再 toast），都统一落本页，老师端不再单设「未匹配教师身份」页，由本页「您是老师？」半屏引导联系管理员加入名册（半屏保持原状，不设站内扫码入口；自助注册仍只能在微信中扫教师注册码）），未绑定孩子的账号不可见任何数据；首次绑定页反馈「这不是我的孩子」后同样落到本页（页面手机号随入口人设显示）；解绑账号下最后一个孩子（唯一孩子为毕业生 / 离校生）后亦落本页——本页即「账号无孩子」的统一承接态，三个来源共用（该来源演示账号为多孩、不实际触发，口径见孩子管理页说明）。三通道引导：①等待名册匹配——班主任补录号码后孩子自动出现「待认领」并消息通知；②班主任邀请——被动接收，微信点开邀请卡片直达绑定确认；③人工申请——窄兜底，手填信息提交班主任严审（仅在确认认识该家庭时通过；统一模糊反馈并限频，防枚举探测）。前两条为被动通道，页面上仅作静态说明、不可点击；仅③是可点击的操作入口。人工申请提交后回到本页（账号仍无绑定孩子，本页即无孩账号的承接主页），「提交人工申请」入口上方插入「审核中」状态卡、该入口随之隐藏（本次迭代由「入口就地转状态卡」改为「插卡 + 隐藏入口」，与办理链路回流写卡的方式统一——两者都往本页写在途申请，就地改入口会让状态卡与入口成为同一个节点、撤回申请后无从恢复入口）——状态卡以表单生效头像（自选或随性别默认图，与孩子管理页审核中条目同口径）展示家长自填的孩子姓名与校班信息 + 琥珀「审核中」chip，可点开申请详情半屏看进度（与孩子管理页审核中条目同一半屏；半屏内「撤回申请」属后续阶段、第一阶段不实现，可用本说明上方「允许撤回审核中的申请（后续阶段）」开关打开预览，撤回本页最后一条在途申请后「提交人工申请」入口恢复显示，完整口径详见孩子管理页说明）（防重复提交、承接页保持简单——本页是引导承接页而非管理页，自身入口单次提交；状态卡展示层支持多条：账号存在多条在途申请时逐条列出，如经注册办理码在办理页为多个孩子提交办理单后回到本页的场景——多孩提交能力由办理页承载、上限 3 条与限频同口径，多条形态可经登录页演示说明的新用户链路完整触发——办理提交结果页点「完成」即把在途申请逐条写入本页，此时「提交人工申请」兜底入口不再展示：申请已在途、入口使命完成，与本页自身入口提交后的隐藏同语义）；零绑定账号经班级注册码 / 邀请注册卡片提交的绑定申请同样写入本页状态卡（本次迭代：该链路提交入统一在途申请表；绑定申请页的微信「返回首页」按钮与下次打开小程序均落本页，卡片链路再点则落绑定申请页状态态，见该页说明）；状态卡不再附「孩子已由家人注册」引导文案（此前移除：与审核路由说明挤在同一副行、可读性差，且该场景在添加孩子表单命中已绑定学生时已有前置的候选卡自助链路承接），口径收录于此——孩子已由家人注册的，可请对方在「家人」页邀请您加入、确认即生效免审核，重名与重复注册口径详见添加孩子页说明，审核结果以消息通知，页头「未匹配到孩子」保留（名册确实尚未匹配）；审核中状态卡与绑定申请页同口径不设手动刷新按钮、驻留期间也不轮询——结果以消息推送触达，真实实现由页面 onShow 静默重取最新状态即可；演示数据，刷新恢复。班主任邀请的真实入口在微信会话，本原型经上方按钮模拟打开。教师与家长共用同一小程序，本页同时是「既未匹配到孩子、也未匹配到教师身份」的统一落地页：页面主体保持家长叙事（落到本页的用户绝大多数是名册漏录的家长，不设角色分叉选择），老师走底部低调入口「您是老师？」——半屏说明教师身份由学校管理员统一维护、联系管理员加入教师名册后重新登录即进教师端，同一手机号可师长双身份并存登录后切换；教师身份意味着整班学生数据权限，故不设任何自助申请通道（防提权），与家长「等待名册匹配」同为「名册是唯一事实源」口径。四种匹配组合承接：命中孩子进家长端、命中教师进教师端、双命中师长双身份切换、双未命中落本页。本页另一来源（本次新增）：监护关系被学校在运管端解除后名下无孩子且无教师身份的账号——全局拦截器捕获身份失效错误码后清身份缓存跳转本页并 toast 告知（页面手机号随入口人设显示），可经首页 / 账号切换页演示说明触发；三层校验与兜底口径全文见账号切换页演示说明。',a:[['模拟打开班主任邀请',"go('sc-invite')"],['返回登录页',"go('sc-login')"]]},
 'sc-classreg':{t:'班级 / 学校注册码 · 邀请注册卡片 · 绑定申请（冷启动）',d:'学校没有预先导入监护人手机号名册时的开学季集中绑定：班主任在班级群分享限时班级注册码（演示为王老师分享、有效期至 7月20日），家长扫码注册后落本页；班主任分享的邀请注册卡片链路登录后同落本页。与教师端「班级注册码批量审核」页互为演示闭环。集中期结束注册码关停，人工申请回归窄兜底严审。\n扫码注册的完整前置链路（海报 → 服务号主页关注 → 欢迎语点卡片 → 登录）与邀请注册卡片链路可经上方按钮从头体验；回登录页也走上方按钮。\n【表单】\n学校 / 年级 / 班级由码带出、不可改，申请直接路由至本班班主任。学生姓名手填全名（不提供学生检索，防枚举探测）；性别必选（男 / 女，辅助班主任与名册比对）；就读安排必选（「现在就读」/「新学年入学」，位于监护关系上方、默认「现在就读」，班主任审核端据此自动定位归属学年）；监护关系自选。均与添加孩子表单同口径。\n提交后本机老师端「学生审核 · 注册申请」待审核列表即时出现该申请；班主任与班级学生名册比对后批量审核，结果以消息通知。孩子已由家人注册的，可请对方在「家人」页邀请加入（确认即生效、免审核），提交承接文案不附该引导（重名与重复注册口径见添加孩子页说明）。\n姓名不匹配同样返回统一模糊反馈并限频，审核通过前不可见孩子任何数据。\n提交前复用人工申请的三道拦截：命中本账号已绑定孩子（有孩子人设；演示：林晓乐 · 3年级-2班 · 男 正是本码班级，填入即触发「该孩子已在您的账号下」）、命中在途申请（「该申请正在审核中」，出口回状态态）、在途申请达上限。比对的都是本账号自有信息、无泄露面，真实产品服务端提交接口做同样校验防绕过。\n【登录落点】\n按「卡片班级下本账号的记录」三行分流（班级注册码与邀请注册卡片共用），判定粒度用卡片班级而不是学校：同校不同班的二孩家庭是集中绑定的正常场景，必须放行进表单。\n① 该班已有已绑定孩子 → 落家长端首页（所选孩子切到该孩子），toast「您已绑定该班的孩子 林晓乐，无需再次申请」：班主任把卡片发到班级群，大量已绑定家长会顺手点开，登录即告知比填完再被拦少走一步；用 toast 而非半屏（首页头部已显示该孩子）。同班双胞胎等窄场景走正式入口「我的 → 添加孩子 → 人工申请」，卡片链路不另开「为另一个孩子申请」出口。\n② 该班有审核中申请（不分账号有无孩子）→ 落本页审核中状态态：该班在途申请逐条列出（头像、姓名后跟「审核中」标签、校班、提交时间；标签跟随每条申请）。卡片默认静态不可点（信息已全部印在卡上）；只有上方「允许撤回审核中的申请（后续阶段）」开关打开时可点，点开为与孩子管理页 / 承接页同一申请详情半屏（撤回出口）。卡片下方保留审核说明两行，再下为「手机号不对？退出登录」文字出口（只在状态态显示；退出半屏说明已提交的申请不受影响、仍正常审核）。不设「为另一个孩子申请」：零绑定双胞胎的第二个孩子待第一个过审、账号有孩子后经「我的 → 添加孩子」补提（代价是进不了同一批集中审核，接受该取舍）。再点卡片的真实动机基本是「提上了吗」，本页即答案；不落未匹配承接页（其「不在名册中 + 三通道引导」框架与此情境不符）。\n③ 该班无记录 → 本页表单。\n账号状态只影响提交后落哪：有已绑定孩子的账号（含本校二孩、外校二孩）写在途申请表，孩子管理页插「审核中」条目，并落孩子管理页弹承接半屏（与添加孩子页同口径）；零绑定账号写在途申请表与承接页状态卡，本页就地转状态态（状态态从在途申请表按班级重建、可重入，撤回后再进自动反映）。\n【页头与出口】\n页头不设自绘返回键：本页经扫码 / 点卡片冷启动直达、页面栈无上一页，返回登录页对已登录家长等于退出登录。出口为微信原生「返回首页」按钮（从扫码 / 分享进入非入口页且页面栈只有一页时，微信导航栏自动显示小房子按钮），落点按账号身份兜底路由：有已绑定孩子 → 家长端首页；无孩子但有教师身份 → 教师端首页（与「监护关系被解除、仅剩教师身份」的兜底同口径）；都没有 → 未匹配承接页。\n教师身份不改变本页落点与提交逻辑：师长双身份是支持场景，老师为自家孩子申请合法；扫自己班的码则申请路由到本人审核清单，允许自审（本人即名册维护者）。\n审核中态不设手动刷新按钮，驻留期间也不轮询：审核是班主任批量人工处理、时效以小时甚至天计，刷新按钮只会诱导反复点。结果触达走服务号消息推送；家长恰好驻留本页时过审的边界，由真实实现在页面 onShow（切回前台 / 重新打开小程序）静默重取最新状态覆盖。\n【学校级注册码 / 邀请卡片】\n经上方「学校级」开关切换（登录页演示说明亦有直达入口），会话级、刷新恢复班级级。学校管理员在管理端生成（后续阶段），码只带学校、不带班级，适用学校统一组织注册、不按班级分发的场景。与班级级只差三处：\n① 表单的年级 / 班级由只读改为家长自选（选择半屏与添加孩子表单同源），未选则提交拦截「请选择年级和班级」，提交后申请路由至所选班级的班主任审核。\n② 登录落点不做「已绑定该班孩子」拦截（码覆盖全校，已绑定本校孩子的账号为另一个孩子申请是正常场景，直接进表单）；状态态只按「经本码提交的申请」重建（码不带班级、无法按班级圈定记录；演示种子的在途申请林晓冬 · 1年级-2班 不经本码、不计入），所以三种人设首次经学校级码登录都落表单，提交后本页转状态态，再走一次登录落点即为状态态。\n③ 提交前三道拦截改按家长所选校班比对（乐乐妈妈人设下选 3年级-2班 填林晓乐即触发「该孩子已在您的账号下」）。\n海报 / 卡片页文案随级别切换（学校注册码「家长注册 · 仅限本校家长使用」、教务处李主任分享的邀请卡片），服务号主页 / 欢迎语 / 落地页与班级级共用。\n【演示人设】\n由上方两个互斥开关切换：乐乐妈妈＝名下已有孩子，教师＝有教师身份且名下无孩子，都关＝零绑定新家长（会话级、刷新恢复）；切换即按新人设重新走登录落点分流。登录页演示说明也有三种人设的直达入口。演示简化：三种人设共用同一张在途申请表与拦截数据。',a:[['按当前人设重新走登录落点分流','cregEnter()'],['查看扫码注册链路（从海报开始）',"go('sc-regposter')"],['查看邀请注册卡片链路（从微信会话开始）',"go('sc-reginvite')"],['返回登录页',"go('sc-login')"]]},
 'sc-regposter':{t:'班级注册码海报（微信内查看）',d:'扫班级注册码注册链路第①步。本页为家长在微信里看到的注册码海报图片示意、非小程序页面：冷启动期（学校未导入监护人手机号名册）班主任把限时班级注册码海报发到班级群或开学现场张贴，海报含学校 / 班级、服务号二维码、有效期与注册流程五步说明（长按识别 → 关注公众号 → 点击注册 → 填写信息 → 注册完成）。注册前置「关注服务号」的动因：到离校提醒等即时消息依赖微信服务号推送，注册路径上顺带完成关注，避免注册后收不到消息（与「接收消息提醒设置」页口径一致）。真实产品为长按识别，原型以点击二维码模拟，识别后进入服务号主页（第②步：关注）；有效期与班级口径同「绑定申请」页（王老师分享、有效期至 7月20日）。另有学校级注册码海报：学校管理员在管理端生成（后续阶段）、码只带学校不带班级，海报副题「家长注册」、有效期行「仅限本校家长使用」，登录后绑定申请页的年级 / 班级由家长自选，可经上方按钮切换查看（切换为会话级、刷新恢复班级级）。另一种「注册办理码」海报（学校已导名册、注册后直达校徽办理）见上方按钮。',a:[['查看学校级注册码海报（年级班级自选）',"cregLevelGo('school','sc-regposter')"],['查看班级注册码海报',"cregLevelGo('class','sc-regposter')"],['查看注册办理码海报',"go('sc-regposter2')"]]},
 'sc-regposter2':{t:'注册办理码海报（微信内查看）',d:'扫注册办理码注册链路第①步，海报视觉对齐正式设计稿：智小徽品牌头 + 学校名 + 「家长注册」主标题 + 二维码（长按扫码）+「注册付费流程说明」四步（长按识别 → 填写信息 → 选择套餐 → 完成支付）。流程本次迭代调整：省去服务号主页关注与欢迎语推送卡片两个中间步骤——家长长按识别后直接打开小程序登录页，手机号快捷登录 → 直达「校徽办理」页（不经过绑定确认页）：名册命中、监护关系尚未确认的孩子以琥珀色「待认领」chip 出现并自动选中（姓名打码，演示为王一明），家长也可切换已绑定孩子或经「添加孩子」新增；选中待认领的孩子提交办理时，监护关系自动变更为已确认并解除打码（与名册认领同效，关系标注可后续在孩子资料页修改）。适用场景与班级注册码互补：学校已导入监护人手机号名册、开学季集中注册并办理首枚校徽；办理码有效期与首枚校徽免费等口径由学校群通知等渠道传达，正式设计稿海报不承载（原示意稿的有效期文案随之移除）。关注服务号步骤取消后，消息触达引导由登录后首页提醒条的「接收消息提醒设置」链路承接。原型以点击二维码模拟长按识别。',a:[['查看班级注册码海报',"go('sc-regposter')"]]},
 'sc-reginvite':{t:'邀请注册卡片（微信会话）',d:'邀请注册链路第①步。本页为微信会话示意、非小程序页面：老师在教师端生成注册邀请卡片，分享到与家长的微信会话或班级群，家长点卡片打开小程序的「注册落地页」（第②步）。与扫码注册链路的差异仅在入口环节：卡片 → 落地页 → 识别落地页上的注册二维码进入服务号主页，此后与班级注册码链路完全一致（关注服务号 → 欢迎语点注册卡片 → 登录 → 绑定申请页；登录落点按卡片班级下本账号的记录分流：已绑定 → 首页 + 半屏、审核中 → 状态态、无记录 → 表单，口径与演示人设见绑定申请页说明）。适用不便张贴 / 转发海报图片的场景，卡片在微信内直接触达家长。另有学校级邀请卡片：由学校管理员 / 教务处（演示为李主任）在管理端生成分享（后续阶段），卡片只带学校不带班级，家长登录后在绑定申请页自选年级 / 班级，其余环节与班级级卡片一致，可经上方按钮切换查看（会话级、刷新恢复班级级）。另有「校徽办理与补办卡片」（登录后直达校徽办理）见上方按钮。',a:[['查看学校级邀请注册卡片（年级班级自选）',"cregLevelGo('school','sc-reginvite')"],['查看班级级邀请注册卡片',"cregLevelGo('class','sc-reginvite')"],['查看校徽办理与补办卡片',"go('sc-reginvite2')"]]},
 'sc-reginvite2':{t:'校徽办理与补办卡片（微信会话）',d:'办理卡片链路第①步。本页为微信会话示意、非小程序页面：老师把「智能校徽登记办理与补办」小程序卡片分享到与家长的微信会话或班级群。链路（本次迭代再收敛）：家长点卡片直接打开小程序登录页——不经过注册办理落地页、关注服务号与欢迎语推送卡片（原「注册办理落地页」已退出本链路），与注册办理码海报识别后的落点一致；手机号快捷登录后直达「校徽办理」页：名册命中、监护关系尚未确认的孩子以「待认领」chip 自动选中，提交办理时监护关系自动确认。适用开学季集中办理与学期中补办动员场景。',a:[['查看邀请注册卡片',"go('sc-reginvite')"]]},
 'sc-reginvite3':{t:'家人邀请卡片（微信会话）',d:'家人邀请链路第①步。本页为微信会话示意、非小程序页面：已绑定的家人（演示为乐乐妈妈）在「我的-家人-邀请家人」发出定向邀请后，邀请卡片经微信发给被邀请人（演示人设为奶奶，手机号 139****5566）；被邀请人点卡片打开小程序的「家人注册落地页」（第②步）。链路与邀请注册卡片基本一致——卡片 → 落地页 → 识别落地页二维码 → 关注服务号 → 欢迎语点注册卡片，唯一差异是手机号快捷登录后直达「家人邀请确认页」：邀请人、授权孩子、关系由邀请带出，确认即成为家人（定向邀请，仅指定手机号可确认，详见确认页演示说明）。本链路的快捷登录授权半屏按被邀请人微信账号显示 139****5566，与确认页「与当前登录手机号一致」口径一致。',a:[['查看邀请注册卡片',"go('sc-reginvite')"]]},
 'sc-reglanding3':{t:'家人注册落地页（小程序内）',d:'家人邀请链路第②步，点家人邀请卡片打开的小程序落地页：学校名 + 家人注册专用二维码 + 六步操作步骤（含登录并确认家人邀请）。被邀请人点击二维码长按识别（原型点击模拟）进入「智小徽」服务号主页，后续链路：关注服务号 → 欢迎语点注册卡片 → 手机号快捷登录（授权号码为被邀请人的 139****5566）→ 直达「家人邀请确认页」；第③步【查看操作图】进入公众号设置操作图页（与接收消息提醒设置页共用，该页返回键回接收消息提醒设置页）。',a:[['返回登录页',"go('sc-login')"]]},
 'sc-reglanding':{t:'注册落地页（小程序内）',d:'邀请注册链路第②步，点老师分享的邀请卡片打开的小程序落地页：学校名 + 家长注册专用二维码 + 六步操作步骤。落地页的作用是承接卡片、给出完整注册指引——家长点击二维码长按识别（原型点击模拟）进入「智小徽」服务号主页，此后与班级注册码链路一致；第③步【查看操作图】进入公众号设置操作图页（与接收消息提醒设置页共用，该页返回键回接收消息提醒设置页）。',a:[['返回登录页',"go('sc-login')"]]},
 'sc-regfollow':{t:'服务号主页 · 关注（微信内）',d:'扫码注册链路第②步，班级注册码 / 邀请注册卡片 / 家人邀请卡片链路共用本页（注册办理码与校徽办理卡片链路本次迭代已调整为识别后直达登录页，不再经过本页与欢迎语页）。本页为微信服务号主页示意、非小程序页面：识别海报二维码后进入「智小徽」服务号主页，点「关注服务号」完成关注，随即自动收到欢迎语与注册小程序卡片（第③步）。注册前置关注服务号的动因见海报页说明：到离校提醒等即时消息依赖服务号推送，注册路径上顺带完成关注。主页认证主体与简介为服务号资料示意，下方「全部 / 服务」Tab 与历史图文（家长版常见问题、使用说明书）为服务号运营内容示意，原型内不可点；返回键回本次进入的来源页（海报 / 注册落地页）。',a:[['返回登录页',"go('sc-login')"]]},
 'sc-regwx':{t:'服务号欢迎语（关注后自动下发）',d:'扫码注册链路第③步，班级注册码 / 邀请注册卡片 / 家人邀请卡片链路共用本页（注册办理码与校徽办理卡片链路本次迭代已调整为识别后直达登录页，不经过本页）。本页为微信「智小徽」服务号会话示意、非小程序页面：家长在服务号主页点「关注服务号」后，自动收到欢迎语——引导置顶公众号、关闭消息免打扰（与「接收消息提醒设置」页同口径，确保后续消息弹出提醒）并附注册小程序卡片；卡片携带班级注册码参数、请勿转发。点击卡片（或底部菜单「家长注册」）打开家长小程序登录页，完成手机号快捷登录后落地：班级注册码 → 直达「绑定申请」（学校 / 年级 / 班级由注册码带出不可改）。底部为服务号自定义菜单示意，使用帮助 / 联系客服以 toast 模拟。',a:[['返回来源页（海报 / 落地页）','regBack()'],['返回登录页',"go('sc-login')"]]},
 'sc-wxphones':{t:'微信 · 我的手机号码（管理号码）',d:'本页为微信「我的手机号码」系统页面示意、非小程序页面：登录页手机号授权半屏点「管理号码」进入，展示微信账号下可供授权的手机号列表（微信绑定号码 + 已验证的其他号码）与「添加手机号」入口，与授权半屏中的候选号码同源。号码行 / 添加 / 管理 / 投诉均为微信系统能力，原型内以 toast 模拟；返回键回登录页并重新拉起授权半屏。',a:[['返回登录页',"go('sc-login')"]]}
};
function renderDemo(){
  const key=curScreen==='sc-apply'?'sc-apply-'+apCurTab:curScreen;
  const i=demoInfo[key]||demoInfo[curScreen]||{t:curScreen,d:'',a:[]};
  /* 排版、折叠、搜索与侧栏见 assets/demo-panel.js；这里只准备内容：本页演示操作（含本页开关）排在正文前，通用入口排在最后 */
  demoPanelRender({key:key,t:i.t,d:i.d,
    acts:demoActsSink(i.a.map(x=>'<button onclick="closeDemo();'+x[1]+'">'+x[0]+' →</button>').join('')+
      /* 撤回审核中的申请：第一阶段不实现，三个有审核中条目的页面（孩子管理 / 未匹配承接 / 绑定申请状态态）各挂一个同源开关 */
      (curScreen==='sc-kids'||curScreen==='sc-nochild'||curScreen==='sc-classreg'?'<div class="sw-row" onclick="toggleRevoke()">允许撤回审核中的申请（后续阶段）<span class="sw'+(revokeOn()?' on':'')+'"></span></div>':'')+
      (curScreen==='sc-login'?'<div class="sw-row" onclick="toggleSmsLogin()">显示「手机号验证码登录」<span class="sw'+(smsLoginOn()?' on':'')+'"></span></div>':'')+
      /* 添加孩子：命中其他账号下已绑定学生时的备用方案（提示已有家人绑定、联系班主任添加），关闭时走加入家庭候选卡 */
      (curScreen==='sc-addchild'?'<div class="sw-row" onclick="toggleFamAlt()">命中已有家人绑定的孩子时改为提示联系班主任（备用方案）<span class="sw'+(famAltOn()?' on':'')+'"></span></div>':'')+
      /* 班级注册码扫码账号人设（会话级、刷新恢复，两开关互斥）：乐乐妈妈=名下已有孩子；教师=有教师身份、名下无孩子；都关=零绑定新家长 */
      (curScreen==='sc-classreg'?'<div class="sw-row" onclick="cregSetPersona(\'kids\')">扫码账号名下已有孩子（乐乐妈妈人设）<span class="sw'+(cregPersona==='kids'?' on':'')+'"></span></div><div class="sw-row" onclick="cregSetPersona(\'teacher\')">扫码账号有教师身份、名下无孩子<span class="sw'+(cregPersona==='teacher'?' on':'')+'"></span></div><div class="sw-row" onclick="cregToggleLevel()">学校级注册码 / 邀请卡片（年级班级自选）<span class="sw'+(cregLevel==='school'?' on':'')+'"></span></div>':'')+
      /* 微信手机号快捷验证本阶段不实现，换绑第一步的「收不到验证码」出口默认隐藏 */
      (curScreen==='sc-profile'?'<div class="sw-row" onclick="toggleWxVerify()">显示换绑「收不到验证码」出口（后续阶段）<span class="sw'+(wxVerifyOn()?' on':'')+'"></span></div>':'')+
      (curScreen==='sc-help'?'<div class="sw-row" onclick="toggleCsEntry()">显示「在线客服」入口<span class="sw'+(csEntryOn()?' on':'')+'"></span></div><div class="sw-row" onclick="toggleFbEntry()">显示「反馈建议」入口<span class="sw'+(fbEntryOn()?' on':'')+'"></span></div>':'')+
      (key==='sc-apply-mine'?'<div class="sw-row" onclick="togglePhotoReq()">无需上传学生证件照（校级配置 · NO.0008–0010 无照片位）<span class="sw'+(photoReqOff()?' on':'')+'"></span></div>':'')+
      (key==='sc-apply-form'?'<div class="sw-row" onclick="toggleApMedia()">顶部媒体位展示视频（关闭为横幅图片）<span class="sw'+(apMediaVideo()?' on':'')+'"></span></div><div class="sw-row" onclick="toggleBadgePv()">显示「校徽预览」区块<span class="sw'+(badgePvOn()?' on':'')+'"></span></div><div class="sw-row" onclick="togglePhotoReq()">无需上传学生证件照（校级配置）<span class="sw'+(photoReqOff()?' on':'')+'"></span></div>':'')),
    gen:/* 所有页面统一追加「返回登录页」（登录页自身与已自带该操作的页面除外） */
      (curScreen!=='sc-login'&&!i.a.some(x=>x[0]==='返回登录页')?'<button onclick="closeDemo();go(\'sc-login\')">返回登录页 →</button>':'')+
      /* 所有页面统一追加原型更新日志、原型总览入口（均新开标签页，不打断当前演示状态） */
      '<button onclick="closeDemo();window.open(\'changelog.html\')">原型更新日志 →</button><button onclick="closeDemo();window.open(\'index.html\')">原型总览 →</button>'+
      '<div class="sw-row" onclick="toggleShell()">显示手机壳<span class="sw'+(shellOn()?' on':'')+'"></span></div>'});
}
/* toggleDemo / closeDemo 与点外部收起见 assets/demo-panel.js（两端共用） */
/* 教师端「教师身份被移除 / 本校已离职（同号有孩子）」演示跳入（teacher.js tRevoke → parent.html#teacher-revoked，离职为 #teacher-left，2026-10-21）：
   模拟拦截器兜底切换的家长端落地——身份列表移除教师行、toast 告知（演示数据，刷新恢复；清 hash 避免刷新重放） */
if(location.hash==='#teacher-revoked'||location.hash==='#teacher-left'){
  /* 该场景为「教师类身份全部失效」：市实验一小班主任与红旗小学校长两行一并移除 */
  document.querySelectorAll('#id-panel .id-row[onclick^="idToTeacher"],#id-panel .id-row[onclick^="idToPrincipal"],#sc-switch .sw-item[onclick^="idToTeacher"],#sc-switch .sw-item[onclick^="idToPrincipal"]').forEach(e=>e.remove());
  /* 2026-10-21：告知改由教师端跳转前的单按钮对话框承担（teacher.js tRevoke），落地后不再重复 toast */
  history.replaceState(null,'',location.pathname);
}
/* 教师端身份切换面板 / 账号切换页选孩子跳入（teacher.js idToParent → parent.html#kid=孩子名）：落到该孩子（毕业 / 离校孩子进入归档态首页），
   与本端 idPick 同口径；kidInfo 在文件后部定义，延后到脚本末尾执行，见文末 kidLand */
/* 老师端登录后无任何教师 / 家长身份（teacher.js wxAuthPick）或教师身份被移除且账号无剩余身份（tRevoke none）跳入：parent.html#nochild=<脱敏号>[&revoked]——
   家长与教师同一个小程序，无身份的账号统一落本页（2026-10-20），页面手机号随人设显示；原 &revoked / &left 落地 toast 已去掉（2026-10-21：告知改由教师端跳转前的单按钮对话框承担，落地后不重复） */
if(location.hash.startsWith('#nochild=')){const q=location.hash.slice(9).split('&'),t=document.getElementById('nochild-tel');if(t)t.textContent=decodeURIComponent(q[0]);go('sc-nochild');}
const kidLand=location.hash.startsWith('#kid=')?decodeURIComponent(location.hash.slice(5)):'';
if(kidLand)history.replaceState(null,'',location.pathname);
/* 请假发起页 / 详情页依赖文件后部的 lvKid、kidInfo（const / let），hash 直达时延到脚本执行完毕再进入，
   否则在其初始化前访问会抛 ReferenceError、详情空白且后续脚本中断（2026-10-21 修正） */
if(!kidLand&&location.hash&&document.getElementById(location.hash.slice(1))){const h=location.hash.slice(1);if(h==='sc-newleave')setTimeout(()=>go(h),0);else go(h)}
/* hash 直达请假单详情时页面为 JS 渲染，兜底渲染待审批单（第一阶段范围内状态） */
if(location.hash==='#sc-leavedetail')setTimeout(()=>openLeaveDetail('le14','sc-leave-tab'),0);
function goTab(id){go(id)}
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  /* 未登录首页的底部 Tab：首页驻留本页，消息 / 我的 为登录后功能，点击跳登录页 */
  if(t.closest('#sc-visitor')){go(t.dataset.t==='sc-home'?'sc-visitor':'sc-login');return}
  go(t.dataset.t);
}));
let tT;
/* -------- 校园签到（签到详情）：签到 / 统计双 Tab、日期与月份切换、抓拍大图预览（与教师端学生签到详情同款交互） -------- */
function stuTab(k){
  document.querySelectorAll('#stu-tabs button').forEach(x=>x.classList.toggle('on',x.dataset.st===k));
  document.getElementById('stu-sign').style.display=k==='sign'?'':'none';
  document.getElementById('stu-stat').style.display=k==='stat'?'':'none';
}
/* 旧日期 chips 的兼容入口：today / yest 映射到日历选日 */
function stuDate(d){calPick(2026,6,d==='today'?6:3)}
/* -------- 校园签到毕业态：首页宫格按当前孩子路由——已毕业孩子进归档只读视图（学生卡换晓晴 + 只读横幅，保留月历回看在校期间定格记录、默认选中最后在校日；底部签到 / 统计 Tab 保留，统计 Tab 为只读历史统计、仅在校期间月份），在读孩子恢复常规视图（演示数据以林晓乐为例） -------- */
function goAtt(){
  /* 离校生晓帆无独立签到演示数据：归档只读视图（页面机制与毕业生一致）以晓晴样例演示，toast 说明后不跳转 */
  if(kidInfo[curKid][2]===2){demoToast('演示简化：林晓帆无独立演示数据，归档只读视图以林晓晴为例（可切换到林晓晴查看）');return}
  attGrad(kidInfo[curKid][2]);go('sc-atthist');
}
function attGrad(on){
  /* 切换孩子先清掉统计筛选（筛选态不跨孩子残留）——此时 attQ 仍为原孩子口径，重渲染正确 */
  Object.keys(statF).forEach(function(k){if(statF[k])statFilt(k,statF[k])});
  attQ=!!on;
  document.getElementById('att-title').textContent='校园签到 · '+(on?'林晓晴':'林晓乐');
  document.getElementById('att-av').src=on?'assets/avatar-girl.png':'assets/avatar-boy.png';
  document.getElementById('att-nm').textContent=on?'林晓晴':'林晓乐';
  document.getElementById('att-cls').textContent=on?'6年级-1班':'3年级-2班';
  const ch=document.getElementById('att-chip');
  ch.className='chip '+(on?'gray':'teal');ch.textContent=on?'毕业生':'今日已离校';
  document.getElementById('att-grad-note').style.display=on?'':'none';
  /* 统计 Tab 月份容器按孩子切换：晓晴仅在校最后一月 2026年6月（月份切换出范围由 stuMonth 提示） */
  stuM.i=0;
  document.getElementById('stu-m-label').textContent=on?'2026年6月':'2026年7月';
  document.getElementById('stu-m-jul').style.display=on?'none':'';
  document.getElementById('stu-m-jun').style.display='none';
  document.getElementById('stu-m-qjun').style.display=on?'':'none';
  stuTab('sign'); /* 进入均默认落签到 Tab */
  if(on){
    statCalRender(2026,5,'stat-cal-qjun'); /* attQ 置位后渲染，圆点与可点范围为晓晴口径 */
    attCal.mode='week';
    calPick(QCAL_LAST.getFullYear(),QCAL_LAST.getMonth(),QCAL_LAST.getDate()); /* 月历定位在校最后一月并选中最后在校日 */
  }else{
    calPick(2026,6,6); /* 恢复在读视图：回到演示「今天」 */
  }
}
/* -------- 孩子详情双形态：林晓乐 = 在读可编辑；林晓晴 = 已毕业只读归档（性别 / 出生日期 / 现住址 / 我的关系均不可改——各编辑半屏以 childGrad 守卫拦截），底部提供「解绑此孩子」出路 -------- */
let childGrad=false;
/* 孩子资料页的固定演示值（林晓乐 / 林晓晴）；本次会话审核通过的孩子（APPROVED_KIDS，k 为申请 id）按通过后的信息显示——
   老师审核时更正过的姓名、性别、班级、我的关系即为这里的值；出生日期、现住址申请时不采集，显示「未填写」 */
let childDef=null;
function childOpen(k){
  const $=id=>document.getElementById(id);
  const ak=APPROVED_KIDS.find(x=>x.id===k);
  if(ak){
    if(!childDef)childDef={addr:$('child-addr').textContent,rel:$('rel-me').textContent,sch:$('child-sch').textContent}; /* 记下固定演示孩子的现值，切回时还原 */
    childGrad=false;
    $('sc-child').classList.remove('grad');
    $('child-av').src=ak.av||('assets/avatar-'+(ak.sex==='女'?'girl':'boy')+'.png');
    $('child-av-lb').textContent='修改头像';
    $('child-nm').textContent=ak.nm;$('child-sex').textContent=ak.sex;
    $('child-birth').textContent='未填写';$('child-addr').textContent='未填写';
    $('rel-me').textContent=ak.rel||'其他';
    $('child-sch').textContent=ak.sch;
    $('child-cls-k').textContent='就读班级';$('child-cls').textContent=ak.gr+'-'+ak.cls;
    $('child-grad-row').style.display='none';$('child-unbind').style.display='none';
    go('sc-child');return;
  }
  if(childDef){$('child-addr').textContent=childDef.addr;$('rel-me').textContent=childDef.rel;$('child-sch').textContent=childDef.sch;childDef=null}
  const g=childGrad=k==='qing';
  document.getElementById('sc-child').classList.toggle('grad',g);
  document.getElementById('child-av').src=g?'assets/avatar-girl.png':'assets/avatar-boy.png';
  document.getElementById('child-av-lb').textContent=g?'头像':'修改头像';
  document.getElementById('child-nm').textContent=g?'林晓晴':'林晓乐';
  document.getElementById('child-sex').textContent=g?'女':'男';
  document.getElementById('child-birth').textContent=g?'2014年5月2日':'2017年3月12日';
  document.getElementById('child-cls-k').textContent=g?'毕业班级':'就读班级';
  document.getElementById('child-cls').textContent=g?'6年级-1班':'3年级-2班';
  document.getElementById('child-grad-row').style.display=g?'':'none';
  document.getElementById('child-unbind').style.display=g?'':'none';
  go('sc-child');
}
/* 解绑已毕业孩子：二次确认后同步移除孩子管理行 / 身份面板与账号切换行 / 毕业注销校徽（演示数据，刷新恢复）；当前选中晓晴时先切回晓乐 */
function gradUnbindSheet(){
  showSheet('<h3>解绑林晓晴</h3>'
   +'<div class="desc">解绑后将不再显示该孩子，其在校期间的签到、请假、校徽等历史记录也将无法再查看。未解绑的记录保留至 2027年6月30日，到期自动清理。</div>'
   +'<button class="btn red blk" style="margin-bottom:9px" onclick="gradUnbindDo()">确认解绑</button>'
   +'<button class="btn ghost blk" onclick="closeSheet()">再想想</button>');
}
function gradUnbindDo(){
  closeSheet();
  if(curKid==='林晓晴')idPick('林晓乐');
  document.querySelectorAll('[data-k="林晓晴"]').forEach(e=>e.remove());
  const kr=document.getElementById('kid-qing');if(kr)kr.remove();
  const bg=document.getElementById('bd-group-qing');if(bg)bg.remove(); /* 我的校徽：晓晴分组（组头 + 注销徽）整组移除 */
  bd5Gone=true;
  const fc=document.getElementById('bd-fc-qing');if(fc)fc.remove(); /* 孩子筛选 chip 同步移除，「全部」计数更新 */
  document.getElementById('bd-fc-all').textContent='全部 7';
  bdFilter(bdCurFilter==='qing'?'le':bdCurFilter);
  go('sc-kids');
  toast('已解绑林晓晴');
}
/* -------- 签到 Tab 日历：收起=周条 / 展开=整月，左右滑动或箭头切上一/下一周（月），点日切换下方时间轴 -------- */
const CAL_TODAY=new Date(2026,6,6); /* 演示「今天」：2026年7月6日 周一 */
const attCal={mode:'week',sel:new Date(2026,6,6),view:new Date(2026,6,6)};
const CAL_WD=['周日','周一','周二','周三','周四','周五','周六'];
/* 与统计 Tab 逐日记录同口径的已知到离校时间；[入,出,是否迟到] */
const CAL_KNOWN={'7-2':['08:21','16:30',1],'7-1':['07:44','16:33',0],'6-30':['07:41','16:36',0],'6-11':['07:52','16:31',0],'6-5':['07:47','16:32',0]};
/* 缺卡 / 早退异常日：in/out 为 null 表示该次缺卡，当天另一时段有通行记录则按出勤计（6-24）；到离校均无记录且无请假、老师未补签 → 全天缺勤（6-10）；early 为早退分钟数（6-24 早退 20 分钟）。老师核对以补签动作留痕（见 CAL_FIX），无补签即缺勤 */
const CAL_ABN={'6-24':{in:null,out:'16:10',early:20},'6-10':{in:null,out:null}};
/* 迟到 / 早退时长显示口径：不满 1 小时显示「x 分钟」；满 1 小时显示「x小时y分钟」（整小时省略分钟，如 80 → 1小时20分钟、60 → 1小时），内部仍按分钟计 */
function fmtDur(m){return m<60?m+' 分钟':Math.floor(m/60)+'小时'+(m%60?m%60+'分钟':'')}
/* 补签日：到校未采集到通行记录、老师人工补签，补签后按正常考勤计（日历圆点青碧）；t=补签认定的到校时间，by/at=补签老师与操作时间 */
const CAL_FIX={'6-19':{t:'07:50',by:'王瑶老师',at:'09:15'}};
/* 老师补签改判迟到（6-26）：当日通行采集正常（cap 为采集时间），老师补签将状态改为迟到且未录入实际到校时间——
   到校时间显示 --:--、无实际时间不计迟到分钟数；日历圆点计异常、统计计迟到 1 次，当天仍按出勤计 */
const CAL_MARK={'6-26':{cap:'07:52',by:'王瑶老师',at:'09:20'}};
/* 非上学日通行记录（7-4 周六）：周末返校（兴趣班 / 学校活动）通行仅作记录留痕，
   不参与考勤统计、不上日历圆点（圆点仅表达上学日考勤结果），出入校打卡消息仍照常推送家长 */
const CAL_WKD={'7-4':[['09:12','东门 · 通道 1'],['11:36','东门 · 通道 2']]};
/* 时段请假日（非全天）：from/to=请假起止；out/back=请假期间出校/返校通行时间；
   arr=顺延后到校时间，late=顺延后仍迟到的分钟数——请假仅覆盖上学时间且结束于入校识别窗口内的，应签到时间变更为请假结束时间、
   第一阶段不设返校宽限期（docs/考勤状态定义.md 第 6 节），晚于请假结束时间到校即计迟到（6-16 09:03 迟到 3 分钟，当日计异常、圆点朱红）；
   dpt=实际离校时间，early=仍早退的分钟数——签退侧与 6-16 对称：请假仅覆盖放学时间且开始时间晚于离校时间段起点的，
   应签退时间提前为请假开始时间（窗口不动，第 6 节），早于请假开始时间出校即计早退（6-15 请假 16:10 起、16:07 出校早退 3 分钟，当日计异常、圆点朱红）；
   与 6-22 的分流条件为请假开始时间是否晚于离校段起点——不晚于的吞没离校窗口、记签退请假免签退；
   ex=1 签到侧请假（6-9 病假 08:00–11:00 覆盖上午上学时间且结束不早于上午入校识别窗口终点 10:59——请假吞没入校窗口、签到状态直接记「请假」免签到，
   back=请假期间返校通行 10:52 仅作通行记录，签退正常即周期正常，当日按出勤计、圆点青）；
   miss=1 签退缺卡（6-18 为 6-9 的未返校对照日：同为上午签到侧请假，但请假后未返校、离校窗口内无识别记录——签退缺卡；
   2026-11-03 起请假之外当天无任何通行记录的日级记缺勤（缺勤 1 天，圆点仍朱红——缺勤与异常合并展示），请假 3 小时仍单列为时段请假，不再计出勤与缺卡次数；此前计异常、按出勤计 + 缺卡 1 次）；
   中段请假、到离校正常的时段请假日按日级聚合计正常、圆点青（6-23，docs/考勤状态定义.md 第 5 节）；
   ex2=1 签退侧请假 + slips=多单（6-22 下午两张请假单首尾相接：事假 12:00–14:00 + 病假 14:00–17:00，按第 6 节多单合并并成 12:00–17:00 再判定——
   覆盖放学时间且开始不晚于离校段起点、吞没离校识别窗口，签退状态记「请假」免签退（逐单判定会漏判：前单不含放学时间、后单开始晚于离校段起点）；
   dep=请假期间出校通行 12:03 仅作通行记录；签到正常即周期正常，当日按出勤计、圆点青，时段请假时长按并集 3 小时）；
   lb=时间轴「假」节点的类型与时长文案；
   6-4 为跨天单（6月2日 08:00 – 6月4日 14:00 病假）的结束日：仅覆盖当日 08:00–14:00、按当日覆盖时段判定，
   一天四次打卡下上午周期整段被覆盖记请假、到校节点同样置灰标「请假」，下午应到校时间顺延为 14:00、13:47 到校为按时（ex=1 沿用同一展示，13:47 在概要视图中以通行记录呈现），签退正常、当日按出勤计、圆点青；
   当日视图只陈述当日事实、不注整单区间，整单信息在请假记录页查看 */
const CAL_PL={'6-4':{from:'08:00',to:'14:00',ex:1,back:'13:47',lb:'病假 4 小时'},'6-23':{from:'09:30',to:'10:30',out:'09:32',back:'10:26',lb:'事假 1 小时'},'6-16':{from:'08:00',to:'09:00',arr:'09:03',late:3,lb:'事假 1 小时'},'6-15':{from:'16:10',to:'18:10',dpt:'16:07',early:3,lb:'事假 0.3 小时'},'6-9':{from:'08:00',to:'11:00',ex:1,back:'10:52',lb:'病假 3 小时'},'6-18':{from:'08:00',to:'11:00',ex:1,miss:1,lb:'病假 3 小时'},'6-22':{ex2:1,slips:[['12:00','14:00','事假 0.5 小时'],['14:00','17:00','病假 2.5 小时']],dep:'12:03'}};
/* -------- 已毕业孩子（林晓晴）归档演示数据：attQ=归档视图开关（attGrad 维护），日历与按日视图切换到晓晴口径——
   数据范围限定在校期间（演示为 2026年6月，最后在校日 6月30日），毕业后（7月起）置灰不可选；
   已知到离校时间少量造数（其余上学日复用按日概要模板的生成时间），6月8日 为迟到日示例；
   晓晴无异常 / 请假 / 补签 / 非上学日通行演示数据（相应场景以在读孩子林晓乐演示） -------- */
let attQ=false;
const QCAL_LAST=new Date(2026,5,30);
const QCAL_KNOWN={'6-30':['07:45','16:12',0],'6-29':['07:48','16:20',0],'6-26':['07:51','16:24',0],'6-8':['08:21','16:31',1]};
/* -------- 打卡模式（校级配置）：默认一天两次（到校/离校）；六次=上午/下午/晚上各到离一次（含晚自习），演示说明开关切换今天视图预览 -------- */
const att6={on:false};
function att6Toggle(){
  att6.on=!att6.on;
  if(attQ)attGrad(0); /* 六次打卡预览为在读孩子（晓乐）演示数据，归档视图下先恢复 */
  if(curScreen!=='sc-atthist')go('sc-atthist');
  stuTab('sign');calPick(2026,6,6);
  demoToast(att6.on?'已切换为一天六次打卡视图（上午 / 下午 / 晚上各到离一次）':'已恢复一天四次打卡视图（上午 / 下午各到离一次）');
}
function calWS(d){const x=new Date(d);x.setHours(0,0,0,0);x.setDate(x.getDate()-x.getDay());return x}
function calSame(a,b){return a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate()}
/* 该日记录类型：rec=考勤正常 / abn=有异常（迟到、早退、缺卡）/ leave=请假（已通过）/ null=非上学日、未来或范围外 */
function calRec(d){
  /* 归档视图（晓晴）：仅在校期间的上学日有记录，毕业后无新记录 */
  if(attQ){
    if(d>QCAL_LAST||d<new Date(2026,5,1)||d.getDay()===0||d.getDay()===6)return null;
    const qk=QCAL_KNOWN[(d.getMonth()+1)+'-'+d.getDate()];
    return qk&&qk[2]?'abn':'rec';
  }
  if(d>CAL_TODAY)return null;
  const w=d.getDay();
  if(w===0||w===6)return null;
  if(d<new Date(2026,5,1))return null;
  /* 全天请假日：6-17 单张全天单、6-25 多单相接合并覆盖全天；6-2/6-3 为跨天单（6月2日 08:00 – 6月4日 14:00）完整覆盖的日子，
     结束日 6-4 仅覆盖到 14:00、不按全天请假计（见 CAL_PL '6-4'：上午周期请假、下午顺延后按时到校） */
  if(calSame(d,new Date(2026,5,17))||calSame(d,new Date(2026,5,25))||calSame(d,new Date(2026,5,2))||calSame(d,new Date(2026,5,3)))return 'leave';
  const key=(d.getMonth()+1)+'-'+d.getDate();
  const p=CAL_PL[key];
  /* 时段请假日按日级聚合定状态（docs/考勤状态定义.md 第 5 节）：顺延后迟到（6-16）计异常朱红，签到请假后未返校（6-18）记缺勤、圆点同为朱红；
     签到请假+签退正常（6-9）、中段请假到离校正常（6-23）计正常青点——月历不单独标识时段请假，由统计「时段请假」筛选承接 */
  if(p&&(p.late||p.early||p.miss))return 'abn';
  if(CAL_ABN[key])return 'abn';
  if(CAL_MARK[key])return 'abn';
  const k=CAL_KNOWN[key];
  if(k&&k[2])return 'abn';
  return 'rec';
}
/* 日历圆点配色：与底部图例同口径，圆点只表达日级状态（时段请假不改变状态、无独立圆点色） */
const CAL_DOT={rec:'teal',abn:'cinnabar',leave:'navy'};
function calRender(){
  let start,days,title;
  if(attCal.mode==='week'){
    start=calWS(attCal.view);days=7;
    const th=new Date(start);th.setDate(start.getDate()+4); /* 跨月周按周四所在月显示标题 */
    title=th.getFullYear()+'年'+(th.getMonth()+1)+'月';
  }else{
    const y=attCal.view.getFullYear(),m=attCal.view.getMonth();
    start=calWS(new Date(y,m,1));
    days=(calWS(new Date(y,m+1,0))-start)/864e5+7;
    title=y+'年'+(m+1)+'月';
  }
  document.getElementById('cal-title').textContent=title;
  let h='';
  for(let i=0;i<days;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    const dim=attCal.mode==='month'&&d.getMonth()!==attCal.view.getMonth();
    const r=calRec(d);
    /* 归档视图：毕业后日期（2026年7月起）置灰不可选，「今天」高亮不再适用 */
    h+='<button class="cd'+(dim?' dim':'')+(d>(attQ?QCAL_LAST:CAL_TODAY)?' off':'')+(calSame(d,attCal.sel)?' sel':'')+(!attQ&&calSame(d,CAL_TODAY)?' tdy':'')+'" onclick="calPick('+d.getFullYear()+','+d.getMonth()+','+d.getDate()+')"><span>'+d.getDate()+'</span>'+(r&&!dim?'<i class="dt" style="background:var(--'+CAL_DOT[r]+')"></i>':'')+'</button>';
  }
  document.getElementById('cal-grid').innerHTML=h;
  document.getElementById('cal-tog').innerHTML=attCal.mode==='week'?'<span class="bar"></span>':'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14.5l6-6 6 6"/></svg>';
}
function calNav(dir){
  if(attCal.mode==='week'){
    const nw=calWS(attCal.view);nw.setDate(nw.getDate()+dir*7);
    if(nw>calWS(attQ?QCAL_LAST:CAL_TODAY)){toast(attQ?'已毕业，无更多记录':'已是最新一周');return}
    if(nw<calWS(new Date(2026,5,1))){demoToast(attQ?'演示：仅提供 2026年6月 的在校通行数据':'演示：仅提供 2026年6月起 的通行数据');return}
    attCal.view=nw;
  }else{
    const m=attCal.view.getMonth()+dir;
    if(m>(attQ?5:6)){toast(attQ?'已毕业，无更多记录':'已是本月');return}
    if(m<5){demoToast(attQ?'演示：仅提供 2026年6月 的在校通行数据':'演示：仅提供 2026年6月–7月 的通行数据');return}
    attCal.view=new Date(2026,m,1);
  }
  calRender();
}
function calToggle(){
  if(attCal.mode==='week'){
    const th=calWS(attCal.view);th.setDate(th.getDate()+4);
    attCal.mode='month';attCal.view=new Date(th.getFullYear(),th.getMonth(),1);
    if(attQ&&attCal.view>QCAL_LAST)attCal.view=new Date(2026,5,1); /* 归档视图：跨月周（周四落 7月）展开时不进入毕业后月份，回落 6月 */
  }else{
    attCal.mode='week';
    attCal.view=attCal.sel.getMonth()===attCal.view.getMonth()?new Date(attCal.sel):new Date(attCal.view);
  }
  calRender();
}
function calPick(y,m,d){
  if(attQ&&new Date(y,m,d)>QCAL_LAST){toast('已毕业，无更多记录');return} /* 兜底：归档视图不接受毕业后日期 */
  attCal.sel=new Date(y,m,d);attCal.view=new Date(y,m,d);
  if(attCal.mode==='month')attCal.view=new Date(y,m,1);
  calRender();calShowDay();
}
function calShowDay(){
  const s=attCal.sel;
  /* 归档视图（晓晴）：不存在「今天 / 上一上学日」特置视图，任意日期均走按日概要模板 */
  const isT=!attQ&&calSame(s,CAL_TODAY),isY=!attQ&&calSame(s,new Date(2026,6,3));
  document.getElementById('stu-day-today').style.display=(isT&&!att6.on)?'':'none';
  document.getElementById('stu-day-today6').style.display=(isT&&att6.on)?'':'none';
  document.getElementById('stu-day-yest').style.display=isY?'':'none';
  const gen=document.getElementById('stu-day-gen');
  gen.style.display=(isT||isY)?'none':'';
  if(!(isT||isY))gen.innerHTML=genDayHtml(s);
}
function genDayHtml(s){
  const dstr=(s.getMonth()+1)+'月'+s.getDate()+'日';
  const ttl=dstr+' '+CAL_WD[s.getDay()]+(attQ&&calSame(s,QCAL_LAST)?' · 最后在校日':'');
  const r=calRec(s);
  const key=(s.getMonth()+1)+'-'+s.getDate();
  if(!r){
    /* 非上学日有通行记录（如周末返校）：灰「非上学日」结论行 + 轻量通行记录节点，无到校/离校考勤语义（归档视图无此演示数据，周末走空态） */
    const wk=attQ?null:CAL_WKD[key];
    if(!wk)return '<div class="card" style="text-align:center;padding:36px 0 34px"><div style="width:52px;height:52px;border-radius:16px;background:#EEF0F4;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;color:#A6AEBD"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5.5" width="16" height="15" rx="2.5"/><path d="M8 3.5v3.5M16 3.5v3.5M4 10.5h16"/></svg></div><div style="font-size:13.5px;font-weight:600;color:var(--ink-2)">'+ttl+' · 非上学日</div><div class="muted" style="margin-top:5px;font-size:12px">当日无到离校记录</div></div>';
    const wkeep=(CAL_TODAY-s)/864e5<7;
    return '<div class="card"><div class="att-sec">'+ttl+'</div>'
     +'<div class="row" style="gap:10px;margin-bottom:8px"><span class="chip gray">非上学日</span><span style="font-size:13px">当日有 '+wk.length+' 次通行记录</span></div>'
     +'<div class="stl">'+wk.map(function(t,i){
       const p='assets/gate-snap'+((s.getDate()+i)%3+1)+'.jpg';
       const cap='林晓乐 · '+dstr+' '+t[0]+' 通行 · 东门抓拍';
       const sh=wkeep?'<div class="shots"><div class="sh" onclick="attShot(\''+cap+'\',\''+p+'\')"><img src="'+p+'" alt="通行抓拍照片"><span class="lb">抓拍照片</span></div><div class="sh" onclick="demoToast(\'演示：播放通行抓拍视频（约 8 秒）\')"><img src="'+p+'" alt="通行视频"><span class="ply">▶</span><span class="lb">通行视频 · 8″</span></div></div>':'';
       return '<div class="nd"><span class="mini"><i></i></span><div class="bd"><div class="ev-t">'+t[0]+'</div><div class="muted" style="margin-top:2px">'+t[1]+'</div>'+sh+'</div></div>';
     }).join('')+'</div></div>'
     +(wkeep?'':'<div class="muted" style="text-align:center;padding:2px 0 10px">抓拍照片与视频仅保留 7 天，该日影像已自动清理</div>');
  }
  /* 全天请假日：6-17 单张全天单；6-2/6-3 为跨天单（病假 6月2日 08:00 – 6月4日 14:00）完整覆盖的日子——与单张全天单同构，
     当日视图不注整单区间（结束日 6-4 不走本分支，见 CAL_PL）；6-25 多单首尾相连（病假 08:00–12:00 + 事假 12:00–17:00）——按第 6 节多单合并并成 08:00–17:00，
     同时覆盖上学与放学时间、周期整体记请假（表首行），与单张全天单同效：日级计请假 1 天（入天级账本、不入时段请假小时账目）、圆点蓝；
     与缺勤日（6-10）同构——顶部日级「请假」结论行（多单注明单数）+ 到校/离校两个置灰节点（--:-- 并括注上学/放学时间、标蓝「请假」chip），
     多单日各单「假」节点与置灰节点按时间序交错排列（置灰节点以应签时间为锚点，覆盖上学时间的首单居到校前、与 6-9/6-16 一致）：假1(08:00) → 到校(08:00) → 假2(12:00) → 离校(16:30) */
  if(r==='leave'){
    const ls=key==='6-25'?[['08:00','12:00','病假 3.5 小时'],['12:00','17:00','事假 3 小时']]:null;
    const mkLs=function(x){return '<div class="nd"><span class="bdg" style="background:var(--navy)">假</span><div class="bd"><div class="ev-t">请假 '+x[0]+'–'+x[1]+' <span class="chip navy plain" style="font-weight:400">已通过</span></div><div class="muted" style="margin-top:2px">'+x[2]+'</div></div></div>'};
    return '<div class="card"><div class="att-sec">'+ttl+'</div><div class="row" style="gap:10px;margin-bottom:8px"><span class="chip navy">请假</span><span style="font-size:13px">'+(ls?'2 张请假单 · 全天 · 已通过':'病假 · 全天 · 已通过')+'</span></div><div class="stl">'
     +(ls?mkLs(ls[0]):'')
     +'<div class="nd pend"><span class="bdg">入</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">到校 --:-- <span class="tm">（上学时间 08:00）</span><span class="chip navy" style="font-weight:400">请假</span></div><div class="muted" style="margin-top:2px">请假期间无到校通行记录</div></div></div>'
     +(ls?mkLs(ls[1]):'')
     +'<div class="nd pend"><span class="bdg out">离</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">离校 --:-- <span class="tm">（放学时间 16:30）</span><span class="chip navy" style="font-weight:400">请假</span></div><div class="muted" style="margin-top:2px">请假期间无离校通行记录</div></div></div>'
     +'</div></div>';
  }
  /* 归档视图（晓晴）取 QCAL_KNOWN 定格数据，异常 / 请假 / 补签 / 改判场景仅在读孩子（晓乐）演示 */
  const k=(attQ?QCAL_KNOWN:CAL_KNOWN)[key],ab=attQ?null:CAL_ABN[key],fx=attQ?null:CAL_FIX[key],pl=attQ?null:CAL_PL[key],mk=attQ?null:CAL_MARK[key];
  /* 六次打卡预览 · 部分时段缺勤演示（7月2日）：上午迟到、下午正常、晚上时段缺勤——
     晚上时段与全天缺勤日（6-10）同构：到校/离校两节点置灰显示 --:-- 并各标朱红「缺卡」chip、括注该时段上下学时间；
     按考勤口径（docs/考勤状态定义.md）部分周期缺勤计当天异常而非缺勤，日历圆点保持朱红 */
  if(att6.on&&key==='7-2')return '<div class="card"><div class="att-sec">'+ttl+'</div><div class="stl">'
   +'<div class="nd"><span class="bdg">入</span><div class="bd"><div class="ev-t">到校 08:21 <span class="tm">（上学时间 08:00）</span><span class="chip amber" style="font-weight:400">迟到 '+fmtDur(21)+'</span></div><div class="muted" style="margin-top:2px">东门 · 通道 1</div></div></div>'
   +'<div class="nd"><span class="bdg out">离</span><div class="bd"><div class="ev-t">离校 11:43 <span class="tm">（放学时间 11:40）</span></div><div class="muted" style="margin-top:2px">东门 · 通道 2</div></div></div>'
   +'<div class="nd"><span class="bdg">入</span><div class="bd"><div class="ev-t">到校 13:35 <span class="tm">（上学时间 13:40）</span></div><div class="muted" style="margin-top:2px">东门 · 通道 1</div></div></div>'
   +'<div class="nd"><span class="bdg out">离</span><div class="bd"><div class="ev-t">离校 16:31 <span class="tm">（放学时间 16:30）</span></div><div class="muted" style="margin-top:2px">东门 · 通道 2</div></div></div>'
   +'<div class="nd pend"><span class="bdg">入</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">到校 --:-- <span class="tm">（上学时间 18:00）</span><span class="chip red" style="font-weight:400">缺卡</span></div><div class="muted" style="margin-top:2px">未采集到到校通行记录</div></div></div>'
   +'<div class="nd pend"><span class="bdg out">离</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">离校 --:-- <span class="tm">（放学时间 19:30）</span><span class="chip red" style="font-weight:400">缺卡</span></div><div class="muted" style="margin-top:2px">未采集到离校通行记录</div></div></div>'
   +'</div></div>';
  /* 全天缺勤（6-10）：六次打卡（三时段）下与四次打卡模式同构——顶部日级「缺勤」结论行 + 时间轴节点，
     三个时段各到校/离校两节点均置灰显示 --:-- 并标朱红「缺卡」chip、括注各时段上学/放学时间；
     四次打卡模式不在此短路——落入下方通用渲染，与 6月24日 缺卡日同构的时间轴节点展示（到校/离校均 --:-- 缺卡），顶部加日级「缺勤」结论行 */
  const abFull=ab&&!ab.in&&!ab.out,plNo=pl&&pl.ex&&pl.miss&&!pl.back; /* plNo：请假之外当天无任何通行记录，日级记缺勤（2026-11-03） */
  if(abFull&&att6.on)return '<div class="card"><div class="att-sec">'+ttl+'</div><div class="row" style="gap:10px;margin-bottom:8px"><span class="chip red">缺勤</span><span style="font-size:13px">当日各时段均未采集到通行记录</span></div><div class="stl">'
   +[['08:00','11:40'],['13:40','16:30'],['18:00','19:30']].map(function(t){return ''
    +'<div class="nd pend"><span class="bdg">入</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">到校 --:-- <span class="tm">（上学时间 '+t[0]+'）</span><span class="chip red" style="font-weight:400">缺卡</span></div><div class="muted" style="margin-top:2px">未采集到到校通行记录</div></div></div>'
    +'<div class="nd pend"><span class="bdg out">离</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">离校 --:-- <span class="tm">（放学时间 '+t[1]+'）</span><span class="chip red" style="font-weight:400">缺卡</span></div><div class="muted" style="margin-top:2px">未采集到离校通行记录</div></div></div>';}).join('')
   +'</div></div>';
  const din=pl&&pl.arr?pl.arr:(k?k[0]:'07:'+String(38+(s.getDate()*3)%12).padStart(2,'0'));
  const dout=pl&&pl.dpt?pl.dpt:ab&&ab.out?ab.out:(k?k[1]:'16:'+String(30+(s.getDate()*5)%10).padStart(2,'0'));
  const keep=(CAL_TODAY-s)/864e5<7; /* 抓拍照片与视频仅保留 7 天，更早日期不展示影像 */
  const p1='assets/gate-snap'+(s.getDate()%3+1)+'.jpg',p2='assets/gate-snap'+((s.getDate()+1)%3+1)+'.jpg';
  const stuNm=attQ?'林晓晴':'林晓乐';
  const cap1=stuNm+' · '+dstr+' '+din+' 到校 · 东门抓拍',cap2=stuNm+' · '+dstr+' '+dout+' 离校 · 东门抓拍';
  const sh1=keep?'<div class="shots"><div class="sh" onclick="attShot(\''+cap1+'\',\''+p1+'\')"><img src="'+p1+'" alt="到校抓拍照片"><span class="lb">抓拍照片</span></div><div class="sh" onclick="demoToast(\'演示：播放通行抓拍视频（约 8 秒）\')"><img src="'+p1+'" alt="到校通行视频"><span class="ply">▶</span><span class="lb">通行视频 · 8″</span></div></div>':'';
  const sh2=keep?'<div class="shots"><div class="sh" onclick="attShot(\''+cap2+'\',\''+p2+'\')"><img src="'+p2+'" alt="离校抓拍照片"><span class="lb">抓拍照片</span></div><div class="sh" onclick="demoToast(\'演示：播放通行抓拍视频（约 8 秒）\')"><img src="'+p2+'" alt="离校通行视频"><span class="ply">▶</span><span class="lb">通行视频 · 8″</span></div></div>':'';
  /* 补签改判迟到：到校主节点承载补签判定并居首（与各日视图入节点锚点一致），
     原采集降为轻量通行记录节点（与午间/请假期间通行同款）置于到校与离校主节点之间 */
  const n1=mk
   ?'<div class="nd"><span class="bdg">入</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">到校 --:-- <span class="tm">（上学时间 08:00）</span><span class="chip amber" style="font-weight:400">迟到</span><span class="chip navy" style="font-weight:400">老师补签</span></div><div class="muted" style="margin-top:2px">'+mk.by+' '+mk.at+' 补签改为迟到，未录入实际到校时间</div></div></div>'
    +'<div class="nd"><span class="mini"><i></i></span><div class="bd"><div class="ev-t">'+mk.cap+'</div><div class="muted" style="margin-top:2px">东门 · 通道 1</div></div></div>'
   :fx
   ?'<div class="nd"><span class="bdg">入</span><div class="bd"><div class="ev-t">到校 '+fx.t+' <span class="tm">（上学时间 08:00）</span><span class="chip navy" style="font-weight:400">老师补签</span></div><div class="muted" style="margin-top:2px">未采集到到校通行记录 · '+fx.by+' '+fx.at+' 补签</div></div></div>'
   :ab&&!ab.in
   ?'<div class="nd pend"><span class="bdg">入</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">到校 --:-- <span class="tm">（上学时间 08:00）</span><span class="chip red" style="font-weight:400">缺卡</span></div><div class="muted" style="margin-top:2px">未采集到到校通行记录</div></div></div>'
   :pl&&pl.ex
   ?'<div class="nd pend"><span class="bdg">入</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">到校 --:-- <span class="tm">（上学时间 08:00）</span><span class="chip navy" style="font-weight:400">请假</span></div><div class="muted" style="margin-top:2px">请假期间无需到校打卡</div></div></div>'
   :'<div class="nd"><span class="bdg">入</span><div class="bd"><div class="ev-t">到校 '+din+' <span class="tm">（'+(pl&&pl.arr?'应到校时间 '+pl.to:'上学时间 08:00')+'）</span>'+(k&&k[2]?'<span class="chip amber" style="font-weight:400">迟到 '+fmtDur(21)+'</span>':pl&&pl.late?'<span class="chip amber" style="font-weight:400">迟到 '+fmtDur(pl.late)+'</span>':'')+'</div><div class="muted" style="margin-top:2px">东门 · 通道 '+(s.getDate()%2+1)+'</div>'+sh1+'</div></div>';
  const n2=(ab&&!ab.out)||(pl&&pl.miss)
   ?'<div class="nd pend"><span class="bdg out">离</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">离校 --:-- <span class="tm">（放学时间 16:30）</span><span class="chip red" style="font-weight:400">缺卡</span></div><div class="muted" style="margin-top:2px">未采集到离校通行记录</div></div></div>'
   :pl&&pl.ex2
   ?'<div class="nd pend"><span class="bdg out">离</span><div class="bd"><div class="ev-t" style="color:var(--ink-3)">离校 --:-- <span class="tm">（放学时间 16:30）</span><span class="chip navy" style="font-weight:400">请假</span></div><div class="muted" style="margin-top:2px">请假期间无需离校打卡</div></div></div>'
   :'<div class="nd"><span class="bdg out">离</span><div class="bd"><div class="ev-t">离校 '+dout+' <span class="tm">（'+(pl&&pl.dpt?'应离校时间 '+pl.from:'放学时间 16:30')+'）</span>'+(ab&&ab.early?'<span class="chip amber" style="font-weight:400">早退 '+fmtDur(ab.early)+'</span>':pl&&pl.early?'<span class="chip amber" style="font-weight:400">早退 '+fmtDur(pl.early)+'</span>':'')+'</div><div class="muted" style="margin-top:2px">东门 · 通道 '+((s.getDate()+1)%2+1)+'</div>'+sh2+'</div></div>';
  const mkLv=function(f,t,l){return '<div class="nd"><span class="bdg" style="background:var(--navy)">假</span><div class="bd"><div class="ev-t">请假 '+f+'–'+t+' <span class="chip navy plain" style="font-weight:400">已通过</span></div><div class="muted" style="margin-top:2px">'+l+'</div></div></div>'};
  const nlv=pl?(pl.slips?pl.slips.map(function(x){return mkLv(x[0],x[1],x[2])}):[mkLv(pl.from,pl.to,pl.lb)]):[];
  const mkMini=function(t,ch){return '<div class="nd"><span class="mini"><i></i></span><div class="bd"><div class="ev-t">'+t+'</div><div class="muted" style="margin-top:2px">东门 · 通道 '+ch+'</div></div></div>'};
  const nminis=pl&&pl.out?mkMini(pl.out,1)+mkMini(pl.back,2)
   :pl&&pl.ex&&pl.back?mkMini(pl.back,2)
   :pl&&pl.dep?mkMini(pl.dep,1)
   :'';
  /* 请假顺延到校（arr）：「假」节点在前、请假结束后到校在后；签退侧顺延（dpt）：请假开始前离校在前、「假」节点在后（与 arr 镜像）；
     签到侧请假（ex）：「假」节点、置灰到校节点、返校通行记录、离校依次排列；
     签退侧请假多单（slips/ex2）：到校、首单「假」节点、请假期间出校通行、次单「假」节点、置灰离校依次排列（按时间序）；
     在校中途请假（out/back）：到校在前、「假」节点与出返校通行居中 */
  const body=pl&&pl.arr?nlv[0]+n1+n2:pl&&pl.dpt?n1+n2+nlv[0]:pl&&pl.ex?nlv[0]+n1+nminis+n2:pl&&pl.slips?n1+nlv[0]+nminis+nlv[1]+n2:n1+(nlv[0]||'')+nminis+n2;
  /* 全天缺勤日无任何影像，「影像已自动清理」页脚不适用，抑制显示 */
  return '<div class="card"><div class="att-sec">'+ttl+'</div>'
   +(abFull?'<div class="row" style="gap:10px;margin-bottom:8px"><span class="chip red">缺勤</span><span style="font-size:13px">当日未采集到到离校通行记录</span></div>':plNo?'<div class="row" style="gap:10px;margin-bottom:8px"><span class="chip red">缺勤</span><span style="font-size:13px">请假之外未采集到到离校通行记录</span></div>':'')
   +'<div class="stl">'+body+
   '</div></div>'+(keep||abFull||(pl&&pl.ex&&!pl.back)?'':'<div class="muted" style="text-align:center;padding:2px 0 10px">抓拍照片与视频仅保留 7 天，该日影像已自动清理</div>')
   +(attQ&&calSame(s,QCAL_LAST)?'<div class="muted" style="text-align:center;padding:2px 0 10px">数据来自校门无感考勤 · 毕业后不再产生新记录</div>':'');
}
/* 左右滑动（指针拖动 ≥40px）切上一/下一周（月），与箭头等效 */
(function(){
  const el=document.getElementById('att-cal');let px=null;
  el.addEventListener('pointerdown',e=>px=e.clientX);
  el.addEventListener('pointerup',e=>{
    if(px===null)return;
    const dx=e.clientX-px;px=null;
    if(Math.abs(dx)>40)calNav(dx<0?1:-1);
  });
  el.addEventListener('pointerleave',()=>px=null);
})();
calRender();
/* -------- 统计 Tab 逐日出勤月历：整月定格视图（圆点三色与签到页日历同口径），点日期跳转签到 Tab 查看该日时间轴 -------- */
/* 该日命中的统计子类集合：att=出勤 / leave=全天请假 / pleave=时段请假 / absent=缺勤 / late=迟到 / early=早退 / miss=缺卡；
   口径与统计卡一致——时段请假当天仍按出勤日计；全天缺勤（双侧缺卡）只计缺勤、不计入缺卡次数；单侧缺卡当天按出勤计 */
function calSubs(d){
  const r=calRec(d);
  if(!r)return[];
  /* 归档视图（晓晴）：仅出勤 / 迟到两类（无请假 / 缺勤 / 缺卡演示数据，相应场景以晓乐在读视图演示） */
  if(attQ)return r==='abn'?['att','late']:['att'];
  if(r==='leave')return['leave'];
  if(r==='abn'){
    const key=(d.getMonth()+1)+'-'+d.getDate();
    const ab=CAL_ABN[key],k=CAL_KNOWN[key];
    if(ab&&!ab.in&&!ab.out)return['absent'];
    const p0=CAL_PL[key];if(p0&&p0.ex&&p0.miss&&!p0.back)return['absent','pleave']; /* 请假之外当天无任何通行记录（2026-11-03 新口径，小程序 PRD 2.7.5.1.5）：签到侧请假后未返校、离校窗口也无识别——日级记缺勤（缺勤 1 天），请假时长仍按小时单列；此前计异常、按出勤计 + 缺卡 1 次 */
    const s=['att'];
    if(k&&k[2])s.push('late');
    if(CAL_MARK[key])s.push('late');
    if(ab&&ab.early)s.push('early');
    if(ab&&(!ab.in||!ab.out))s.push('miss');
    const p=CAL_PL[key]; /* 请假顺延后迟到日（6-16）：同时命中出勤 / 时段请假 / 迟到；顺延后早退日（6-15）：同时命中出勤 / 时段请假 / 早退；签到请假后未返校日（6-18）：2026-11-03 起只命中缺勤 / 时段请假（在上方提前返回） */
    if(p){s.push('pleave');if(p.late)s.push('late');if(p.early)s.push('early');if(p.miss)s.push('miss')}
    return s;
  }
  /* 正常日含中段时段请假（6-23）：仍命中「时段请假」筛选 */
  return CAL_PL[(d.getMonth()+1)+'-'+d.getDate()]?['att','pleave']:['att'];
}
/* 统计月历筛选：statF 记录各月当前点亮的指标行；命中日按类别着浅色底，未命中日圆点淡化 */
const statF={jul:null,jun:null,qjun:null}; /* qjun=归档视图（晓晴）6月 */
const STAT_FC={att:'teal',leave:'navy',pleave:'navy',absent:'red',late:'red',early:'red',miss:'red'};
const STAT_CAL={jul:[2026,6,'stat-cal-jul'],jun:[2026,5,'stat-cal-jun'],qjun:[2026,5,'stat-cal-qjun']};
function statCalRender(y,m,elId,f){
  const start=calWS(new Date(y,m,1));
  const days=(calWS(new Date(y,m+1,0))-start)/864e5+7;
  let h='';
  for(let i=0;i<days;i++){
    const d=new Date(start);d.setDate(start.getDate()+i);
    const dim=d.getMonth()!==m;
    const r=calRec(d);
    const hit=f&&!dim&&calSubs(d).indexOf(f)>-1;
    h+='<button class="cd'+(dim?' dim':'')+(d>CAL_TODAY?' off':'')+(calSame(d,CAL_TODAY)?' tdy':'')+(hit?' hit-'+STAT_FC[f]:'')+'" onclick="stuTab(\'sign\');calPick('+d.getFullYear()+','+d.getMonth()+','+d.getDate()+')"><span>'+d.getDate()+'</span>'+(r&&!dim?'<i class="dt'+(f&&!hit?' fade':'')+'" style="background:var(--'+CAL_DOT[r]+')"></i>':'')+'</button>';
  }
  document.getElementById(elId).innerHTML=h;
}
function statFilt(mk,f){
  statF[mk]=statF[mk]===f?null:f;
  const c=STAT_CAL[mk];
  statCalRender(c[0],c[1],c[2],statF[mk]);
  document.querySelectorAll('#stu-m-'+mk+' .alg.filt').forEach(function(el){el.classList.toggle('on',el.dataset.f===statF[mk])});
}
statCalRender(2026,6,'stat-cal-jul');
statCalRender(2026,5,'stat-cal-jun');
const stuM={i:0};
function stuMonth(dir){
  /* 归档视图（晓晴）：仅在校最后一月 6月 有统计，两向切换均提示（口径与签到 Tab 月历一致） */
  if(attQ){if(dir>0)toast('已毕业，无更多记录');else demoToast('演示：仅提供 2026年6月 的在校统计数据');return}
  if(dir<0){if(stuM.i===0)stuM.i=1;else{demoToast('演示：仅提供 7月 与 6月 的统计数据');return}}
  else{if(stuM.i===1)stuM.i=0;else{toast('已是本月');return}}
  /* 切换月份即取消筛选，回到全量视图 */
  if(statF.jul)statFilt('jul',statF.jul);
  if(statF.jun)statFilt('jun',statF.jun);
  document.getElementById('stu-m-label').textContent=stuM.i?'2026年6月':'2026年7月';
  document.getElementById('stu-m-jul').style.display=stuM.i?'none':'';
  document.getElementById('stu-m-jun').style.display=stuM.i?'':'none';
}
/* -------- 年月选择器：点签到 Tab 月历标题 / 统计 Tab 月份标题呼出半屏（mp.ctx 区分来源），
   超出数据范围的月份置灰不可选，年份切换给出范围提示（口径与箭头逐步切换的 toast 一致）；
   归档视图（晓晴）仅在校期间月份可选（演示为 2026年6月） -------- */
const mp={ctx:'sign',y:2026};
function mpAvail(y,m){return y===2026&&(attQ?m===5:m===5||m===6)}
/* 当前展示月：签到 Tab 周条视图取标题同款口径（周四所在月），统计 Tab 按 stuM/归档态 */
function mpCur(){
  if(mp.ctx==='stat')return attQ||stuM.i?5:6;
  let c;
  if(attCal.mode==='month')c=attCal.view.getMonth();
  else{const th=calWS(attCal.view);th.setDate(th.getDate()+4);c=th.getMonth()}
  /* 归档视图跨月周（最后在校周标题落 7月）：高亮回落最后在校月 */
  return attQ&&c>QCAL_LAST.getMonth()?QCAL_LAST.getMonth():c;
}
function mpOpen(ctx){
  mp.ctx=ctx;mp.y=2026;
  const cur=mpCur();
  let cells='';
  for(let m=0;m<12;m++){
    const av=mpAvail(mp.y,m);
    cells+='<button class="mp-m'+(m===cur?' on':'')+(av?'':' dis')+'" '+(av?'onclick="mpPick('+m+')"':'disabled')+'>'+(m+1)+'月</button>';
  }
  showSheet('<h3>选择月份</h3>'
   +'<div class="mp-yr"><button onclick="mpYear(-1)">‹</button><b>'+mp.y+'年</b><button onclick="mpYear(1)">›</button></div>'
   +'<div class="mp-grid">'+cells+'</div>');
}
function mpYear(dir){
  if(attQ){if(dir>0)toast('已毕业，无更多记录');else demoToast('演示：仅提供 2026年6月 的在校'+(mp.ctx==='stat'?'统计':'通行')+'数据');return}
  if(dir>0)toast('已是最新一年');else demoToast(mp.ctx==='stat'?'演示：仅提供 7月 与 6月 的统计数据':'演示：仅提供 2026年6月起 的通行数据');
}
function mpPick(m){
  closeSheet();
  if(mp.ctx==='sign'){
    /* 选月后展开为整月视图便于挑日期（与底部把手展开的月形态一致） */
    attCal.mode='month';attCal.view=new Date(mp.y,m,1);calRender();
  }else if(!attQ&&mpCur()!==m){
    stuMonth(m===6?1:-1); /* 统计 Tab 复用 stuMonth：切换月份即清筛选、更新标签与容器 */
  }
}
/* 全屏预览遮罩由通行抓拍 / 请假证明材料 / 点评图片共用，左右箭头按当前来源分派 */
let shotMode='att';
function attShot(cap,src){
  if(curScreen!=='sc-atthist')go('sc-atthist');
  shotMode='att';
  document.getElementById('shot-prev').style.display='none';
  document.getElementById('shot-next').style.display='none';
  document.getElementById('shot-cap').style.display='';
  document.getElementById('shot-cap').textContent=cap||'林晓乐 · 7月6日 07:42 到校 · 东门通道 2 抓拍';
  document.querySelector('#shot-view img').src=src||'assets/gate-snap1.jpg';
  document.getElementById('shot-view').classList.add('show');
}
/* 入校区块抓拍收起/展开：区块内抓拍超过一组时才在到校标题旁输出「收起」按钮，仅一组不输出（如 7月3日视图）；
   箭头为同一枚 SVG 旋转切换（与校徽办理页折叠头同款，避免「∨/∧」字符基线不一致的跳位） */
function inShotsTog(el){
  const open=el.textContent.indexOf('收起')>-1;
  el.closest('.stl').querySelectorAll('.shots.in-sh').forEach(s=>s.style.display=open?'none':'flex');
  el.querySelector('span').textContent=open?'展开':'收起';
  el.querySelector('svg').style.transform=open?'rotate(0deg)':'rotate(180deg)';
}
/* toast 只放一句话（2026-10-26 口径：产品文案不超过 11 字）；需要用户读完的结果说明走 pAlert 单按钮对话框。超长时控制台告警（演示提示除外） */
function toast(m){
  const t=document.getElementById('toast');
  if(String(m).replace(/\s/g,'').length>11&&!/演示|模拟/.test(String(m)))console.warn('toast 文案超过 11 字：'+m);
  t.textContent=m;t.classList.remove('demo','lo');t.onclick=null;t.classList.add('show');
  clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('show'),3400);
}
/* 演示提示（2026-10-26）：原型用它替代真实能力（扫码、拨号、播放视频、微信系统页）或说明演示开关的切换结果。
   不是产品 toast：带「演示」角标与琥珀描边、左对齐可多行、停留稍长，不受 11 字限制；真实产品不会出现这类提示 */
function demoToast(m){
  const t=document.getElementById('toast');m=String(m);
  const body=m.replace(/^演示(简化)?[:：]\s*/,'');
  t.innerHTML='<i class="demo-tag">演示</i>'+body+'<i class="demo-x" aria-hidden="true">×</i>';
  t.classList.toggle('lo',body.length>22);/* 超过一行的演示提示贴在底栏上方，不遮住它在说明的内容（2026-10-27） */
  t.classList.add('show','demo');
  t.onclick=function(){clearTimeout(tT);t.classList.remove('show')};/* 整块可点关闭（2026-10-27） */
  clearTimeout(tT);tT=setTimeout(()=>t.classList.remove('show'),Math.min(8000,3000+m.length*80));
}
/* -------- 底部弹层内容 -------- */
const sheets={
 lost:`<h3 style="color:var(--cinnabar)">挂失主徽（NO.0001）</h3>
  <div class="desc">确认挂失后：<br>· 该徽<b>立即失效</b>，他人拾取也无法使用；<br>· 孩子仍有 1 枚备用徽在用，考勤不受影响；<br>· <b>60 天内</b>找到实物可随时自助「找回」恢复，超期自动永久作废。</div>
  <button class="btn red blk" onclick="doLost()">确认挂失</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">再想想</button>`,
 stop:`<h3>停用校徽（NO.0001）</h3>
  <div class="desc">停用适用于「这枚暂不使用」：<br>· 立即失效，他人无法使用；<br>· 停用期间不参与考勤，可随时在「我的校徽」重新启用；<br>· 徽壳印有孩子个人信息，请妥善保管实物。</div>
  <button class="btn red blk" onclick="closeSheet();demoToast('已停用（演示不改状态，可在列表「启用」按钮体验恢复）')">我已了解，确认停用</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>`,
 'stop-last':`<h3 style="color:var(--cinnabar)">⚠ 这是唯一可能剩余的在用校徽</h3>
  <div class="desc">若主徽处于挂失状态，停用备用徽后<b>孩子将没有任何可用校徽</b>，入校需老师人工登记：<br>· 建议先补办新徽、核验启用后再停用旧徽；<br>· 停用后可随时重新启用，但停用期间孩子无徽可用。</div>
  <button class="btn pri blk" onclick="closeSheet();go('sc-apply');applyTab('form')">先去补办一枚</button>
  <button class="btn red blk" style="margin-top:9px" onclick="closeSheet();demoToast('已停用（演示）：孩子暂无可用校徽，已提示线下人工登记方式')">仍要停用</button>`,
 optout:`<h3 style="color:var(--cinnabar)">确认退出人脸识别？</h3>
  <div class="desc">· 相机端人脸数据将被删除，系统不再保留孩子任何人脸信息；<br>· 今后孩子仅使用校徽考勤，忘带校徽时由线下值守老师人工登记；<br>· 可随时重新开通（需重新签署监护人同意书并现场注册）。</div>
  <button class="btn red blk" onclick="doOptout()">确认退出</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">保持开通</button>`,
 notice:`<h3>告知书与签署记录</h3>
  <div class="desc" style="margin-bottom:8px">《校园无感考勤个人信息处理告知书》要点：</div>
  <div class="desc" style="background:#F5F7FB;border-radius:10px;padding:12px;font-size:12px">
   1. 校门设考勤抓拍装置并现场公示；只拍静态帧，不录视频；<br>
   2. 人脸特征与原图不出校，未命中即提即毁；<br>
   3. 不满十四周岁学生的人脸信息处理须监护人单独同意；<br>
   4. 存在非人脸验证方式（校徽考勤），人脸并非唯一方式；<br>
   5. 异常事件照片仅事件处理老师可见，闭环后 7–30 天删除；<br>
   6. 退出人脸后忘带校徽需线下人工登记；<br>
   7. 校徽个性化生产委托厂商处理，限本次用途、交付后限期删除。</div>
  <div class="kv"><span class="k">签署记录</span><span class="v">2026-02-28 20:14 · 乐乐妈妈 · 已存档</span></div>
  <button class="btn pri blk" style="margin-top:10px" onclick="closeSheet()">我知道了</button>`,
 role:`<h3>切换为教师身份</h3>
  <div class="desc">您的手机号同时存在教师账号。确定切换为教师身份吗？</div>
  <button class="btn pri blk" onclick="closeSheet();location.href='teacher.html'">确认切换</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>`,
 logout:`<h3>退出登录</h3>
  <div class="desc">退出后将不再接收林晓乐的到离校通知、请假审批结果等消息推送，重新登录后恢复。确定退出当前账号（乐乐妈妈 · 138****6688）吗？</div>
  <button class="btn red blk" onclick="closeSheet();go('sc-login');toast('已退出登录（演示）')">确认退出</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>`,
 'msg-faminv-exp':`<h3>家人邀请 · 已过期</h3>
  <div class="desc">您向 136****9908（外公）发出的家人邀请已超过 72 小时未确认，已自动作废。如仍需对方协助照看孩子，可重新发起邀请。</div>
  <button class="btn pri blk" onclick="closeSheet();inviteMember()">重新发起邀请</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">我知道了</button>`,
 'msg-famjoin-ok':`<h3>加入家庭请求 · 已通过</h3>
  <div class="desc">陈小雨的家人（妈妈 · 尾号 3216）已同意您的加入请求，您已成为陈小雨的家人，到离校通知等消息已开通。</div>
  <button class="btn pri blk" onclick="closeSheet();go('sc-kids')">查看我的孩子</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">我知道了</button>`,
 'msg-famjoin-no':`<h3>加入家庭请求 · 已被拒绝</h3>
  <div class="desc">陈小雨的家人（妈妈 · 尾号 3216）拒绝了您的加入请求，7 天内不可再次发起。若确为孩子家人，可联系对方在「家人」页邀请您加入。</div>
  <button class="btn ghost blk" onclick="closeSheet()">我知道了</button>`,
 'msg-faminv-no':`<h3>家人邀请 · 已被拒绝</h3>
  <div class="desc">您向 137****0102（爷爷）发出的家人邀请已被对方拒绝，邀请随之作废。若为误触或仍需对方协助照看孩子，可重新发起邀请。</div>
  <button class="btn pri blk" onclick="closeSheet();inviteMember()">重新发起邀请</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">我知道了</button>`,
 'nochild-teacher':`<h3>您是老师？</h3>
  <div class="desc">教师身份由学校管理员统一维护。请联系学校管理员将您的手机号（<span data-tel-of="nochild-tel">138****9900</span>）加入教师名册，加入后重新登录即可进入教师端。<br>同一手机号可同时具备家长与教师身份，登录后可随时切换。</div>
  <button class="btn pri blk" onclick="closeSheet()">我知道了</button>`,
 'logout-creg':`<h3>退出登录</h3>
  <div class="desc">退出后已提交的申请仍会由班主任正常审核，结果以消息通知；可使用其他手机号重新登录。确定退出吗？</div>
  <button class="btn red blk" onclick="closeSheet();go('sc-login');toast('已退出登录（演示）')">确认退出</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>`,
 'logout-nochild':`<h3>退出登录</h3>
  <div class="desc">当前账号尚未绑定孩子，退出不影响任何数据。退出后可使用其他手机号重新登录。确定退出吗？</div>
  <button class="btn red blk" onclick="closeSheet();go('sc-login');toast('已退出登录（演示）')">确认退出</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>`,
/* 消息落点统一规则：存在能呈现该事件的业务页即直达（打卡/校徽/今天的放学/请假单/加入确认），
   无业务落点的纯通知才用半屏承载（历史放学事件、家人邀请结果、扫码核对提醒）；
   请假消息原有的两张中转半屏（msg-leave / msg-leave-proxy）已随直达调整移除 */
'msg-dis-delay':`<h3>放学延迟通知</h3>
  <div class="desc">林晓阳 · 1年级-1班<br>放学时间延迟：原 16:50 → 预计 17:20<br>7月3日 16:20 李航老师操作，班级开始放学后将再次通知您。</div>
  <button class="btn pri blk" onclick="closeSheet();go('sc-dismiss')">查看放学状态</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>`,
'msg-dis-arrive':`<h3>班级放学通知</h3>
  <div class="desc">林晓阳 · 1年级-1班<br>已到延迟后的放学时间 17:20，班级开始放学，请及时接送。<br>本次放学曾延迟：原 16:50（7月3日 16:20 李航老师操作）</div>
  <button class="btn pri blk" onclick="closeSheet();go('sc-dismiss')">查看放学状态</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>`,
/* ①老师操作放学 / ②达到人数自动放学的历史形态：今天的同场景直达智慧放学页，历史事件（智慧放学页只呈现今天实时状态）改由半屏承载结果；
   字段对齐班级放学通知（班级含孩子名 / 放学状态 / 通知说明 / 操作老师（仅①）/ 通知时间），「查看放学状态」跳智慧放学页看今天 */
'msg-dis-tea-hist':`<h3>班级放学通知</h3>
  <div class="desc">林晓乐 · 3年级-2班<br>班级已开始放学，请及时接送。<br>7月2日 16:42 王瑶老师发起放学。</div>
  <button class="btn pri blk" onclick="closeSheet();go('sc-dismiss')">查看放学状态</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>`,
'msg-dis-auto-hist':`<h3>班级放学通知</h3>
  <div class="desc">林晓阳 · 1年级-1班<br>同学出校打卡达到放学人数，班级自动开始放学，请及时接送。<br>7月2日 16:56 系统自动通知。</div>
  <button class="btn pri blk" onclick="closeSheet();go('sc-dismiss')">查看放学状态</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>`,
'msg-scan':`<h3>扫码核对提醒</h3>
  <div class="desc">6月28日 · 首发校徽为到校分发，请核对孩子带回的校徽是否为本人。<br>扫码核对为抽检性质、不阻塞考勤；首周仅提醒一次、不强制。</div>
  <button class="btn pri blk" onclick="closeSheet();scanOpen('sc-msgs')">去扫一扫</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>`,
/* 认领核实未通过：认领已关闭、无业务落点（条目不在孩子管理页），半屏承载结果与出路；模糊话术不含原因细节 */
'msg-claimno':`<h3>认领核实未通过</h3>
  <div class="desc">7月2日 · 您对周*安（2年级-3班）的认领未通过班主任核实，本次认领已关闭。<br>如确为您的孩子，请联系班主任当面核实；确认后可由老师发起定向邀请完成绑定。</div>
  <button class="btn pri blk" onclick="closeSheet()">知道了</button>`,
/* 添加孩子申请未通过：无业务落点（申请条目已移除），半屏承载结果与重新提交出路 */
'msg-addchild-no':`<h3>添加孩子申请 · 未通过</h3>
  <div class="desc">李航老师（1年级-1班班主任）未通过您的添加孩子申请：暂无法确认申请信息。请核对学校、年级、班级与孩子姓名后重新提交，也可联系班主任向您发起绑定邀请。</div>
  <button class="btn pri blk" onclick="closeSheet();goAddChild(curScreen==='sc-nochild'?'nochild':'me')">重新提交申请</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">我知道了</button>`,
/* 归档数据到期清理前的提前告知：半屏说明保留期与出路，可切到晓晴查看归档记录 */
'msg-archive':`<h3>在校记录清理提醒</h3>
  <div class="desc">林晓晴已于 2026年6月 毕业，在校期间的签到、请假、校徽等记录保留至 2027年6月30日，到期后将自动清理。如需留存，请提前查看并保存相关记录。</div>
  <button class="btn pri blk" onclick="closeSheet();idPick('林晓晴');goAtt()">查看归档记录</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">我知道了</button>`,
/* 名册认领：学校端录入学生时已登记各监护人手机号对应的监护关系，半屏带出登记关系预填、可改（家长是监护关系的最终权威；
   仅预填、不加辅注与展示行，保持半屏克制；名册未登记关系的老数据回落为空白必选）；错配走「不是我的孩子」反馈 */
'claim-rel':`<h3>认领孩子</h3>
  <div class="row" style="background:#F5F7FB;border-radius:12px;padding:12px;margin:10px 0 12px">
    <div style="width:42px;height:42px;border-radius:50%;background:url(assets/avatar-boy.png) center/cover no-repeat #EAF3FF;color:transparent;display:flex;align-items:center;justify-content:center;font-weight:600;flex-shrink:0">王</div>
    <div style="flex:1"><div style="font-size:14.5px;font-weight:600">王*明</div><div class="muted">市实验一小 · 1年级-3班</div></div>
    <span class="chip amber">待认领</span>
  </div>
  <div style="font-size:12px;color:var(--ink-3);text-align:center;margin-top:2px">请补全孩子姓名以验证</div>
  <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin:8px 0 2px">
    <span style="font-size:17px;font-weight:600">王</span>
    <input type="text" id="claim-name" maxlength="1" style="width:46px;text-align:center;font-size:17px;font-weight:600;padding:9px 0">
    <span style="font-size:17px;font-weight:600">明</span>
  </div>
  <select id="claim-rel-sel" style="margin-top:12px"><option value="">请选择您与孩子的关系</option><option selected>妈妈</option><option>爸爸</option><option>奶奶</option><option>爷爷</option><option>外婆</option><option>外公</option><option>其他</option></select>
  <button class="btn pri blk" style="margin-top:12px" onclick="doClaim()">确认认领并绑定</button>
  <button class="btn red blk" style="margin-top:9px" onclick="notMyChild()">这不是我的孩子</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>`,
/* 认领确认（教师已核实）：班主任核实通过后家长免答题，解除打码、仅确认监护关系即绑定；
   保留「这不是我的孩子」出口——教师核实的是名册预留号码未登记错，家长才是监护关系的最终权威，
   且解除打码后家长首次看到全名，正是识别错配的时点 */
'claim-verified':`<h3>认领确认</h3>
  <div class="row" style="background:#F5F7FB;border-radius:12px;padding:12px;margin:10px 0 12px">
    <div style="width:42px;height:42px;border-radius:50%;background:url(assets/avatar-girl.png) center/cover no-repeat #FFF0F4;color:transparent;display:flex;align-items:center;justify-content:center;font-weight:600;flex-shrink:0">桐</div>
    <div style="flex:1"><div style="font-size:14.5px;font-weight:600">李雨桐</div><div class="muted">市实验一小 · 2年级-2班</div></div>
    <span class="chip teal">班主任已核实</span>
  </div>
  <div class="desc">班主任已核实通过您的认领，请确认您与孩子的关系，确认后即完成绑定。</div>
  <select id="cv-rel-sel" style="margin-top:12px"><option value="">请选择您与孩子的关系</option><option selected>妈妈</option><option>爸爸</option><option>奶奶</option><option>爷爷</option><option>外婆</option><option>外公</option><option>其他</option></select>
  <button class="btn pri blk" style="margin-top:12px" onclick="doVerifiedClaim()">确认认领并绑定</button>
  <button class="btn red blk" style="margin-top:9px" onclick="notMyChildTong()">这不是我的孩子</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>`,
/* 协议确认半屏：点登录先显式确认协议（明示同意），「同意并登录」续接原登录动作 */
'agree':`<h3>服务协议与隐私保护</h3>
  <div class="desc" style="margin-top:2px">为保障您和孩子的合法权益，请阅读并同意以下协议后继续登录</div>
  <div style="background:#F7F7F8;border-radius:12px;padding:2px 14px;margin-top:14px">
    <div class="row" style="justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(0,0,0,.05);cursor:pointer" onclick="openLegal('ua',true)"><span style="font-size:14px;color:var(--navy)">《用户协议》</span><span style="color:#B4BCC8">›</span></div>
    <div class="row" style="justify-content:space-between;padding:12px 0;border-bottom:1px solid rgba(0,0,0,.05);cursor:pointer" onclick="openLegal('pp',true)"><span style="font-size:14px;color:var(--navy)">《隐私政策》</span><span style="color:#B4BCC8">›</span></div>
    <div class="row" style="justify-content:space-between;padding:12px 0;cursor:pointer" onclick="openLegal('cp',true)"><span style="font-size:14px;color:var(--navy)">《儿童信息保护规则》</span><span style="color:#B4BCC8">›</span></div>
  </div>
  <button class="btn pri blk" style="margin-top:16px" onclick="agreeOk()">同意并登录</button>
  <button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">不同意</button>`,
/* 微信手机号快捷登录授权：登录页「手机号快捷登录」拉起的微信系统半屏示意 */
'wxauth':`<div class="row" style="margin-bottom:14px"><img src="assets/logo.png" style="width:22px;height:22px;border-radius:5px" alt=""><b style="font-size:14px">智小徽</b><span style="margin-left:auto;width:20px;height:20px;border:1.5px solid #C6CCD6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#8A93A3;font-size:11px;font-style:italic;font-family:Georgia,serif">i</span></div>
  <h3 style="font-size:17.5px">申请获取并验证你的手机号</h3>
  <div class="desc" style="margin-top:2px">智小徽登录服务</div>
  <div style="background:#F7F7F8;border-radius:10px;padding:13px 0;text-align:center;margin-top:16px;cursor:pointer" onclick="wxAuthPick('6688')"><div style="font-size:16.5px;font-weight:600;letter-spacing:.5px">138****6688</div><div style="font-size:12px;color:#07C160;margin-top:4px">上次提供</div></div>
  <div style="background:#F7F7F8;border-radius:10px;padding:13px 0;text-align:center;margin-top:10px;cursor:pointer" onclick="wxAuthPick('9900')"><div style="font-size:16.5px;font-weight:600;letter-spacing:.5px">138****9900</div><div style="font-size:12px;color:#8A93A3;margin-top:4px">微信绑定号码</div></div>
  <div style="background:#F7F7F8;border-radius:10px;padding:15px 0;text-align:center;margin-top:14px;font-size:16px;cursor:pointer" onclick="closeSheet()">不允许</div>
  <div style="text-align:center;color:#576B95;font-size:14px;margin-top:20px;cursor:pointer" onclick="closeSheet();go('sc-wxphones')">管理号码</div>`,
/* 家人邀请链路专用授权半屏：被邀请人（奶奶）微信账号，号码与邀请确认页「与当前登录手机号一致」口径一致 */
'wxauthfam':`<div class="row" style="margin-bottom:14px"><img src="assets/logo.png" style="width:22px;height:22px;border-radius:5px" alt=""><b style="font-size:14px">智小徽</b><span style="margin-left:auto;width:20px;height:20px;border:1.5px solid #C6CCD6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#8A93A3;font-size:11px;font-style:italic;font-family:Georgia,serif">i</span></div>
  <h3 style="font-size:17.5px">申请获取并验证你的手机号</h3>
  <div class="desc" style="margin-top:2px">智小徽登录服务</div>
  <div style="background:#F7F7F8;border-radius:10px;padding:13px 0;text-align:center;margin-top:16px;cursor:pointer" onclick="wxAuthPick('5566')"><div style="font-size:16.5px;font-weight:600;letter-spacing:.5px">139****5566</div><div style="font-size:12px;color:#8A93A3;margin-top:4px">微信绑定号码</div></div>
  <div style="background:#F7F7F8;border-radius:10px;padding:15px 0;text-align:center;margin-top:14px;font-size:16px;cursor:pointer" onclick="closeSheet()">不允许</div>
  <div style="text-align:center;color:#576B95;font-size:14px;margin-top:20px;cursor:pointer" onclick="demoToast('演示：微信系统能力，管理已绑定的手机号码')">管理号码</div>`,
/* 换绑兜底专用授权半屏：与登录链路的 wxauth 同款但回调不同（pcWxPick 走号码比对，不进注册分流），「不允许」回「收不到验证码」半屏 */
'wxauthbind':`<div class="row" style="margin-bottom:14px"><img src="assets/logo.png" style="width:22px;height:22px;border-radius:5px" alt=""><b style="font-size:14px">智小徽</b><span style="margin-left:auto;width:20px;height:20px;border:1.5px solid #C6CCD6;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#8A93A3;font-size:11px;font-style:italic;font-family:Georgia,serif">i</span></div>
  <h3 style="font-size:17.5px">申请获取并验证你的手机号</h3>
  <div class="desc" style="margin-top:2px">智小徽账号安全验证</div>
  <div style="background:#F7F7F8;border-radius:10px;padding:13px 0;text-align:center;margin-top:16px;cursor:pointer" onclick="pcWxPick('6688')"><div style="font-size:16.5px;font-weight:600;letter-spacing:.5px">138****6688</div><div style="font-size:12px;color:#07C160;margin-top:4px">上次提供</div></div>
  <div style="background:#F7F7F8;border-radius:10px;padding:13px 0;text-align:center;margin-top:10px;cursor:pointer" onclick="pcWxPick('9900')"><div style="font-size:16.5px;font-weight:600;letter-spacing:.5px">138****9900</div><div style="font-size:12px;color:#8A93A3;margin-top:4px">微信绑定号码</div></div>
  <div style="background:#F7F7F8;border-radius:10px;padding:15px 0;text-align:center;margin-top:14px;font-size:16px;cursor:pointer" onclick="pcOldUnusable()">不允许</div>
  <div style="text-align:center;color:#576B95;font-size:14px;margin-top:20px;cursor:pointer" onclick="demoToast('演示：微信系统能力，管理已绑定的手机号码')">管理号码</div>`
};
function openSheet(k){
  const el=document.getElementById('sheet');el.innerHTML=sheets[k];
  /* 半屏里的手机号跟随页面当前人设（data-tel-of 指向页面上的号码节点）：「未匹配到孩子」页由老师端登录分流跳入时显示的是该账号号码，半屏不再写死 138****9900（2026-10-20） */
  el.querySelectorAll('[data-tel-of]').forEach(x=>{const src=document.getElementById(x.dataset.telOf);if(src)x.textContent=src.textContent});
  document.getElementById('mask').classList.add('show');
}
function closeSheet(){document.getElementById('mask').classList.remove('show')}
/* -------- 挂失 → 找回 状态流转（NO.0001 行卡 chip / 操作按钮 / 展开区读取文案同步） -------- */
function doLost(){
  closeSheet();
  document.getElementById('bd1').classList.add('lost');
  const c=document.getElementById('bd1-chip'),b=document.getElementById('bd1-btn');
  c.className='chip red plain';c.textContent='挂失中';
  document.getElementById('bd1-rd').textContent='已挂失失效 · 门禁不再响应 · 找回窗口剩 60 天';
  b.className='btn pri sm';b.textContent='找到了 · 恢复';b.setAttribute('onclick','event.stopPropagation();doFound()');
  pAlert('已挂失','校徽已加入黑名单。60 天内找到实物可随时「找回」。');
}
function doFound(){
  document.getElementById('bd1').classList.remove('lost');
  const c=document.getElementById('bd1-chip'),b=document.getElementById('bd1-btn');
  c.className='chip teal plain';c.textContent='已启用';
  document.getElementById('bd1-rd').textContent='已恢复在用 · 下次过门即生效';
  b.className='btn sm ghost';b.textContent='停用';b.setAttribute('onclick',"event.stopPropagation();openSheet('stop')");
  pAlert('已找回','已取消挂失并移出黑名单，校徽恢复在用；与是否补办无关。');
}
/* -------- 人脸退出 -------- */
function doOptout(){
  closeSheet();
  document.getElementById('face-st').textContent='已退出';
  document.getElementById('face-st').className='chip gray';
  // 「我的」页重构后不再有 face-chip 状态节点，判空兼容（状态在授权页内展示）
  const fc=document.getElementById('face-chip');
  if(fc){fc.textContent='已退出';fc.className='chip gray';}
  document.getElementById('optout-btn').textContent='重新开通人脸识别';
  document.getElementById('optout-btn').setAttribute('onclick',"pAlert('重新开通人脸识别','需重新签署监护人单独同意书，并到校现场注册。')");
  pAlert('已提交退出','人脸数据删除中，今后孩子仅使用校徽考勤。');
}
/* -------- 补办流程 -------- */
function uploadPhoto(){
  const z=document.getElementById('up-zone');
  z.innerHTML='<b style="color:var(--teal)">✓ 证件照已上传</b><br>白底免冠 · 320×420px · 规格机审通过';
  z.style.borderColor='var(--teal)';
  const b=document.getElementById('re-next');
  b.disabled=false;b.textContent='下一步 · 版面预览';
}
function toggleCk(el){
  const b=el.querySelector('.box');
  b.classList.toggle('on');
  b.textContent=b.classList.contains('on')?'✓':'';
}
/* -------- 我的校徽 · 单徽模式（备选方案预览）：最多一枚在用，扫新徽经二次确认后自动停用并隐藏旧徽 -------- */
let sgCurNo='NO.0001',sgNext=5;
function sgScan(){
  const newNo='NO.000'+sgNext;
  showSheet('<h3>识别到新校徽（'+newNo+'）</h3>'+
   '<div class="desc">启用 '+newNo+' 后，当前校徽 <b>'+sgCurNo+'</b> 将<b style="color:var(--cinnabar)">自动停用</b>。</div>'+
   '<button class="btn pri blk" onclick="sgConfirm(\''+newNo+'\')">确认启用新徽并停用旧徽</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
function sgStop(){
  showSheet('<h3>停用校徽（'+sgCurNo+'）</h3>'+
   '<div class="desc">停用后立即失效，<b style="color:var(--cinnabar)">孩子将没有可用校徽</b>。</div>'+
   '<button class="btn red blk" onclick="closeSheet();demoToast(\'已停用（演示不改状态，可点扫一扫体验换新徽流程）\')">我已了解，确认停用</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
function sgConfirm(newNo){
  const old=sgCurNo;
  sgCurNo=newNo;sgNext++;
  document.getElementById('sg-no').textContent=newNo;
  document.getElementById('sg-epc').textContent='BG-SY01-2608-0000'+(sgNext-1);
  document.getElementById('sg-rd').textContent='今天 17:05 启用 · 下次过门开始记录读取';
  closeSheet();toast('已启用 '+newNo+'，原徽已停用');
}
/* 「我的校徽」空态预览：与演示数据互斥切换（经演示说明进入） */
function mineEmptyToggle(){
  const e=document.getElementById('ap-mine-empty'),on=e.style.display==='none';
  e.style.display=on?'':'none';
  document.getElementById('ap-mine-list').style.display=on?'none':'';
  document.getElementById('bd-fbar').style.display=on?'none':''; /* 空态无徽，孩子筛选 chip 一并隐藏 */
}
/* 统一扫一扫相机页入口：记录来源，相机页返回键回进入来源页（首页 / 我的校徽 Tab / 消息页） */
let scanFrom='sc-home';
/* 进入统一扫一扫相机页：from 为来源（返回落点），expect 为行尾「扫码核验」带入的预期徽（仅影响原型演示快捷路径——
   真实产品相机不区分入口、结果由扫到的徽状态驱动，扫到另一枚待核验徽同样按那枚弹核验半屏） */
let scanExpect=null;
function scanOpen(from,expect){scanFrom=from||'sc-home';scanExpect=expect||null;go('sc-scan')}
function scanBlank(){
  const e=scanExpect;scanExpect=null;scanBack();
  if(e)e==='bd2'?bdVerifySheet():bdVerifyMulti(e);else homeScanActive();
}
function scanBack(){if(scanFrom==='mine'){go('sc-apply');applyTab('mine')}else go(scanFrom||'sc-home')}
/* 扫到当前孩子已启用校徽的核对半屏（相机页点取景空白处 / 演示说明进入）——展示核对信息，无需任何操作 */
function homeScanActive(){
  showSheet('<h3>已识别校徽（NO.0001）</h3>'+
   '<div class="kv"><span class="k">学生</span><span class="v">林晓乐 · 3年级-2班</span></div>'+
   '<div class="kv"><span class="k">状态</span><span class="v"><span class="chip teal plain">已启用</span></span></div>'+
   '<div class="kv"><span class="k">最近读取</span><span class="v">今天 16:58 东门出</span></div>'+
   '<button class="btn pri blk" style="margin-top:10px" onclick="closeSheet();go(\'sc-apply\');applyTab(\'mine\')">查看我的校徽</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>');
}
/* 扫到本账号名下任何孩子都不持有的校徽——拦截提示（防探测：不显示持有人信息；经演示说明进入，
   页面按钮已改为先进统一扫一扫相机页）。比对范围是本账号下所有孩子（「我的校徽」Tab 为账号维度，
   扫到另一个孩子的徽会直接展示、不走本分支，如 bdScanGrad 扫到晓晴毕业注销徽），故不设「切换孩子后重扫」引导 */
function bdScanOther(){
  showSheet('<h3 style="color:var(--cinnabar)">该校徽不属于您的孩子</h3>'+
   '<div class="desc">已识别校徽二维码，但它不属于您账号下的任何孩子。若拿错了他人校徽，请归还原主或交由班主任处理。</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">我知道了</button>');
}
/* 底部扫一扫（多徽版）：演示扫到当前孩子已停用校徽——半屏展示徽信息与停用状态，可一键重新启用（经演示说明进入）；重新启用后再扫按已启用核对口径展示 */
function bdScanStopped(){
  if(bd4On){
    showSheet('<h3>已识别校徽（NO.0004）</h3>'+
     '<div class="kv"><span class="k">学生</span><span class="v">林晓乐 · 3年级-2班</span></div>'+
     '<div class="kv"><span class="k">状态</span><span class="v"><span class="chip teal plain">已启用</span></span></div>'+
     '<button class="btn ghost blk" style="margin-top:10px" onclick="closeSheet()">关闭</button>');
    return;
  }
  showSheet('<h3>已识别校徽（NO.0004）</h3>'+
   '<div class="kv"><span class="k">学生</span><span class="v">林晓乐 · 3年级-2班</span></div>'+
   '<div class="kv"><span class="k">状态</span><span class="v"><span class="chip gray plain">已停用</span></span></div>'+
   '<div class="kv"><span class="k">停用时间</span><span class="v">6月20日 · 停用期间不参与考勤</span></div>'+
   '<button class="btn pri blk" style="margin-top:10px" onclick="bdSet4();closeSheet();toast(\'NO.0004 已重新启用\')">重新启用该校徽</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">暂不启用</button>');
}
/* 底部扫一扫（多徽版）：演示扫到已毕业孩子的毕业注销校徽——与「扫到已停用校徽」成对照：
   毕业注销不可自恢复、不提供「重新启用」操作（普通停用可随时恢复）；解绑晓晴后该徽已不在本账号名下，转「不属于您的孩子」拦截口径 */
function bdScanGrad(){
  if(bd5Gone){bdScanOther();return}
  showSheet('<h3>已识别校徽（NO.0005）</h3>'+
   '<div class="kv"><span class="k">学生</span><span class="v">林晓晴 · 6年级-1班 <span class="chip gray plain">毕业生</span></span></div>'+
   '<div class="kv"><span class="k">状态</span><span class="v"><span class="chip gray plain">已停用</span></span></div>'+
   '<div class="kv"><span class="k">注销时间</span><span class="v">6月30日 · 随学籍归档自动注销</span></div>'+
   '<div class="desc" style="margin-top:6px">该校徽已随孩子毕业注销停用，不再参与考勤，无需其他操作；毕业注销的校徽不可重新启用。</div>'+
   '<button class="btn pri blk" style="margin-top:10px" onclick="closeSheet();go(\'sc-apply\');applyTab(\'mine\');bdDetailToggle(\'bd5\')">查看我的校徽</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>');
}
/* 底部扫一扫（多徽版）：演示扫到退款作废校徽——NO.0007 为已寄出后运管全额退款的被退枚（办理记录 SS2026052834705921），
   发起退款即作废入黑名单、不出现在「我的校徽」列表，但徽已发出、家长手中可能仍有实体徽，扫码是家长侧唯一撞见它的入口。
   作废不可逆、无任何恢复操作——与「已停用可随时恢复」「毕业注销不可恢复」并列第三种停用口径（退款作废）；
   退款在途的被退枚同口径（作废时点＝发起退款、不等到账），演示以已到账单为例。
   作废事实附注不区分全额 / 部分退款——那是退款单（订单侧）的类型标签、不是枚级事实，且在枚级不稳定：
   多次部分退款退完的单每枚都由「部分退款」单作废、整单终点却等同全额（与 chip 派生「全额退款不再是独立形态」同哲学）；
   徽面表面只按被扫的这一枚是否免费枚分叉两种（付费枚本函数 / 免费枚 bdScanVoidFree，混合退中的免费枚同归零元形态）——
   只回答处置本质（作废）与家长要不要等钱，「这单其他徽怎么样了」是订单问题、由办理记录承接；半屏仅保留「关闭」、不放「查看办理记录」按钮，家长自行到办理记录 Tab 查看退款进度。
   这也是「整单退完在途单无可核验枚、确认收货完结通道挂起」的枚级事实基础：核验路径由本作废机制封死，无需状态机另设约束 */
function bdScanVoid(){
  showSheet('<h3>已识别校徽（NO.0007）</h3>'+
   '<div class="kv"><span class="k">学生</span><span class="v">林晓乐 · 3年级-2班</span></div>'+
   '<div class="kv"><span class="k">状态</span><span class="v"><span class="chip gray plain">已作废</span></span></div>'+
   '<div class="kv"><span class="k">作废时间</span><span class="v">6月5日 · 退款作废停用</span></div>'+
   '<div class="desc" style="margin-top:6px">该校徽已随退款作废停用，不可核验启用、不再参与考勤，也无法恢复；实体徽无需退回。退款进度可在办理记录中查看。</div>'+
   '<button class="btn ghost blk" style="margin-top:10px" onclick="closeSheet()">关闭</button>');
}
/* 底部扫一扫（多徽版）：演示扫到被回收的免费校徽——零元回收变体，与 bdScanVoid 的退款作废同为「已作废不可用」口径，
   但文案按零元定版口径分叉、不带「退款」二字：作废事实行为「免费枚回收，校徽作废停用」（与流转行节点名同词），
   说明段不引导查看退款进度（零元无资金动作，带「退款」会让家长等一笔不存在的钱）、改为告知无退款金额与额度已恢复——
   额度句用完成时「已在回收当时恢复」（额度恢复是回收时刻的事件事实，此后可能已被再次办理占用，扫码是状态时刻、不能断言当前额度状态）。
   演示为假想的已发出后被回收免费枚（NO.0012）：已发出才会被家长扫到；家长端零元归档单 SS2026031628470359 为未发出变体
   （回收行不附作废停用段）；半屏仅保留「关闭」、不放「查看办理记录」按钮，已发出变体的运管侧完整演示见运管端沈亦航单 */
function bdScanVoidFree(){
  showSheet('<h3>已识别校徽（NO.0012）</h3>'+
   '<div class="kv"><span class="k">学生</span><span class="v">林晓乐 · 3年级-2班</span></div>'+
   '<div class="kv"><span class="k">状态</span><span class="v"><span class="chip gray plain">已作废</span></span></div>'+
   '<div class="kv"><span class="k">作废时间</span><span class="v">3月19日 · 免费枚回收，校徽作废停用</span></div>'+
   '<div class="desc" style="margin-top:6px">该校徽为免费办理的校徽，已被平台回收作废停用，不可核验启用、不再参与考勤，也无法恢复；实体徽无需退回。免费办理无退款金额、无需等待退款到账，首张免费额度已在回收当时恢复。</div>'+
   '<button class="btn ghost blk" style="margin-top:10px" onclick="closeSheet()">关闭</button>');
}
/* -------- 「我的校徽」列表状态流转：bd2On/bd4On 记录 NO.0002 核验启用、NO.0004 重新启用（演示数据，刷新恢复）；bd5 为已毕业孩子的毕业注销徽（恒已停用、不可重新启用），bd5Gone 记录解绑移除 -------- */
let bd2On=false,bd4On=false,bd5Gone=false;
/* 标题与状态汇总随孩子筛选口径：选孩子时为该孩计数，「全部」为账号级合计；
   计数直接读 bdState（各徽实时状态）与 BD_OWNER（归属孩子），核验 / 重新启用后自动同步，无需逐枚硬编码 */
const BD_OWNER={bd1:'le',bd2:'le',bd3:'le',bd4:'le',bd5:'qing',bd6:'le',bd7:'le',bd8:'le'};
function bdSum(){
  const cnt={on:0,pend:0,off:0};
  Object.keys(bdState).forEach(k=>{
    if(k==='bd5'&&bd5Gone)return;
    if(bdCurFilter!=='all'&&BD_OWNER[k]!==bdCurFilter)return;
    cnt[bdState[k]]++;
  });
  const parts=[];
  if(cnt.on)parts.push('已启用 '+cnt.on);
  if(cnt.pend)parts.push('待核验 '+cnt.pend);
  if(cnt.off)parts.push('已停用 '+cnt.off);
  document.getElementById('ap-mine-title').textContent={all:'全部校徽',le:'林晓乐的校徽',qing:'林晓晴的校徽'}[bdCurFilter];
  document.getElementById('ap-mine-sum').textContent=parts.join(' · ');
  meStatBadges();
}
/* 「我的」数据栏「校徽」计数：账号级、不随孩子切换——在读孩子名下未停用的校徽（已启用 + 待核验），
   已停用与毕业生 / 离校生的徽不计；与 bdSum 同源读 bdState，核验启用 / 停用 / 解绑后随之刷新 */
const BD_KID_ACTIVE={le:true,yang:true,qing:false};
function meStatBadges(){
  const el=document.getElementById('stat-badges');if(!el)return;
  let n=0;
  Object.keys(bdState).forEach(k=>{
    if(k==='bd5'&&bd5Gone)return;
    if(!BD_KID_ACTIVE[BD_OWNER[k]])return;
    if(bdState[k]!=='off')n++;
  });
  el.innerHTML=n+'<i class="u">枚</i>';
}
/* -------- 孩子筛选 chip：le=林晓乐 / qing=林晓晴 / all=全部，默认当前孩子（idPick 身份切换联动）；「全部」视角毕业组默认折叠，筛到晴时强制展开 -------- */
let bdCurFilter='le',bdQingOpen=false;
function bdFilter(k){
  if(k==='qing'&&bd5Gone)k='le'; /* 「全部」chip 第一阶段隐藏，晴解绑后落乐 */
  bdCurFilter=k;
  ['all','le','qing'].forEach(x=>{const c=document.getElementById('bd-fc-'+x);if(c)c.classList.toggle('on',x===k)});
  document.getElementById('bd-group-le').style.display=k==='qing'?'none':'';
  const qg=document.getElementById('bd-group-qing');
  if(qg){
    qg.style.display=k==='le'?'none':'';
    /* 筛到晴时该组即整页内容，折叠无意义：强制展开、隐藏箭头、组头不响应点击；折叠只在「全部」视角生效 */
    const own=k==='qing',hd=document.getElementById('bd-qing-hd'),arr=document.getElementById('bd-qing-arr');
    if(own)bdQingSet(true);
    if(hd){hd.style.cursor=own?'default':'pointer';hd.onclick=own?null:bdQingToggle;hd.style.borderTop=own?'none':'1px solid #F4F6F8'} /* 组间分隔线只在乐组可见时显示 */
    if(arr)arr.style.display=own?'none':'';
  }
  bdSum();
}
function bdQingSet(open){
  bdQingOpen=open;
  const it=document.getElementById('bd-items-qing');if(!it)return;
  it.style.display=open?'':'none';
  document.getElementById('bd-qing-arr').textContent=open?'▾':'▸';
}
function bdQingToggle(){bdQingSet(!bdQingOpen)}
/* 列表排序：已启用 → 待核验 → 已停用，同状态按活跃时间（data-ts，最近读取）倒序；载入时排一次，状态流转后重排（刚启用无读取记录 ts=0，排同状态组末位） */
const bdState={bd1:'on',bd2:'pend',bd3:'on',bd4:'off',bd5:'off',bd6:'pend',bd7:'pend',bd8:'pend'};
function bdResort(){
  const rank={on:0,pend:1,off:2},box=document.getElementById('bd-items');
  [...box.children].sort((a,b)=>rank[bdState[a.dataset.k]]-rank[bdState[b.dataset.k]]||(+b.dataset.ts)-(+a.dataset.ts)).forEach(el=>box.appendChild(el));
}
bdResort();
bdFilter('le'); /* 载入即按默认孩子（林晓乐）过滤，标题 / 汇总 / 分组显隐同步 */
/* NO.0004 已停用 → 已启用：列表行去灰化、chip / 操作按钮 / 展开区读取文案同步流转（扫码半屏与行尾「启用」共用） */
function bdSet4(){
  if(bd4On)return;
  bd4On=true;bdState.bd4='on';bdSum();bdResort();
  const chip=document.getElementById('bd4-chip'),btn=document.getElementById('bd4-btn'),th=document.getElementById('bd4-thumb');
  chip.className='chip teal plain';chip.textContent='已启用';
  document.getElementById('bd4-rsum').textContent='最近读取 6月19日'; /* 重新启用的徽有停用前读取记录，摘要回到最近读取 */
  btn.style.cssText='';
  btn.className='btn sm ghost';btn.textContent='停用';
  btn.setAttribute('onclick',"event.stopPropagation();openSheet('stop')");
  th.style.filter='none';th.style.opacity='1';
  document.getElementById('bd4-bno').style.color='';
  document.getElementById('bd4-badge').style.opacity='1';
  document.getElementById('bd4-read').textContent='今天 17:05 重新启用 · 最近读取：6月19日 16:42 东门出';
}
/* -------- 扫码核验半屏（单枚 / 多枚共用一套版式）：学生 / 本次办理 / 核对结果三行固定，编号只在标题出现（原正文「校徽编号」行与标题重复、引导句「已识别校徽二维码，信息核对如下」与「已识别校徽」系列半屏不一致，均已去掉）。
   「本次办理」行是本次启用对办理记录的影响预告，单枚单同样成立（本枚启用后即完成）；
   进度按有效枚计（total 为扣除已退款枚后的枚数）；记录已经「已完成」（经确认收货提前完结）时核验只启用该枚、不显示本行 -------- */
function bdVerifyRender(no,total,on,confirm,closed){
  const left=total-on-1;
  showSheet('<h3>扫码核验（'+no+'）</h3>'+
   '<div class="kv"><span class="k">学生</span><span class="v">林晓乐 · 3年级-2班</span></div>'+
   (closed?'':'<div class="kv"><span class="k">本次办理</span><span class="v">'+(left<=0?'本枚启用后本次办理即完成':'本枚启用后还剩 '+left+' 枚待核验')+'</span></div>')+
   '<div class="kv"><span class="k">核对结果</span><span class="v"><span class="chip teal plain">与办理信息一致</span></span></div>'+
   '<button class="btn pri blk" style="margin-top:10px" onclick="'+confirm+'">核验通过，立即启用</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
/* NO.0002 单枚单：待核验 → 已启用 */
function bdVerifySheet(){
  bdVerifyRender('NO.0002',1,0,"bdSet2();closeSheet();toast('NO.0002 已核验并启用')");
}
function bdSet2(){
  const chip=document.getElementById('bd2-chip'),btn=document.getElementById('bd2-btn');
  btn.style.cssText='';
  chip.className='chip teal plain';chip.textContent='已启用';
  btn.className='btn sm ghost';btn.textContent='停用';
  btn.setAttribute('onclick',"event.stopPropagation();openSheet('stop')");
  bd2On=true;bdState.bd2='on';bdSum();bdResort();
  document.getElementById('bd2-rsum').textContent='今天 17:05 启用';
  document.getElementById('bd2-empty').textContent='今天 17:05 启用 · 下次过门开始记录读取';
}
/* -------- 多枚逐枚核验（3 枚办理记录 SS2026062641572089 的 NO.0008–0010）：
   每核验一枚即启用该枚并驱动办理记录流转——部分启用 1/3 → 2/3 → 3 枚全部启用转已完成；
   已启用的徽立即参与考勤、不等其余枚（枚级终态口径）。
   核验进度按核验事实计（multiVerified）：核验是一次性事件，与枚级使用状态 bdState 分开记——
   某枚核验启用后又被停用 / 挂失仍计入已核验枚数，「部分启用 x/3」与半屏剩余枚数均不回退。演示数据，刷新恢复 -------- */
const MULTI_NO={bd6:'NO.0008',bd7:'NO.0009',bd8:'NO.0010'};
const MULTI_KEYS=['bd6','bd7','bd8'];
const multiVerified=new Set();
const multiOn=()=>multiVerified.size;
function bdVerifyMulti(k){
  bdVerifyRender(MULTI_NO[k],3,multiOn(),"bdSetMulti('"+k+"');closeSheet()",OD_DATA.multi3.chip[1]==='已完成');
}
/* 演示入口：定位本单下一枚待核验的徽（三枚全部启用后即提示办理已完成） */
function bdVerifyNext(){
  const k=MULTI_KEYS.find(x=>!multiVerified.has(x));
  if(!k){toast('3 枚已全部启用');return}
  bdVerifyMulti(k);
}
function bdSetMulti(k){
  if(multiVerified.has(k))return;
  multiVerified.add(k);
  const chip=document.getElementById(k+'-chip'),btn=document.getElementById(k+'-btn');
  btn.style.cssText='';
  chip.className='chip teal plain';chip.textContent='已启用';
  btn.className='btn sm ghost';btn.textContent='停用';
  btn.setAttribute('onclick',"event.stopPropagation();openSheet('stop')");
  bdState[k]='on';bdSum();bdResort();
  document.getElementById(k+'-rsum').textContent='今天 17:05 启用';
  document.getElementById(k+'-empty').textContent='今天 17:05 启用 · 下次过门开始记录读取';
  odMultiVerify(MULTI_NO[k],multiOn());
}
/* 办理记录侧联动：追加流转行、切换状态 chip 与步进器，列表与详情实时刷新（演示时间取 17:05 起逐枚递增）。
   附注按 PRD 16.8 分两份：基础附注只记本枚已启用的事实（转历史行后保留），第 4 位的当前状态行附注补「剩余 N 枚待扫码核验」；
   末枚启用即整单完结，节点名直接落「已完成」（不再落「部分启用 3/3」——全部启用与完结是同一动作的同一时刻） */
function odMultiVerify(no,n){
  const d=OD_DATA.multi3,t='2026-07-08 '+['17:05','17:06','17:07'][n-1];
  /* 经「确认收货」提前完结的单：核验只启用该枚（我的校徽侧已承载），记录不回退状态、无状态变更不落流转行 */
  if(d.chip[1]==='已完成'){toast(no+' 已核验并启用');return}
  if(n<3){
    d.chip=['amber','部分启用 '+n+'/3'];d.onLabel='部分启用 '+n+'/3';d.done=5;
    odFlowRows(d).push([t,'部分启用 '+n+'/3',no+' 已核验启用',no+' 已核验启用，剩余 '+(3-n)+' 枚待扫码核验']);
  }else{
    d.chip=['teal','已完成'];d.onLabel=null;d.done=7;
    odFlowRows(d).push([t,'已完成',no+' 已核验启用，本次办理完成']);
  }
  apOrderRender();odApplyFilter();
  if(odCur==='multi3'&&curScreen==='sc-order')odShow('multi3');
  toast(no+' 已核验并启用');
}
/* 「我的校徽」列表行：点行展开 / 收起该徽完整凭证与读取记录（手风琴式，同时只展开一行）；
   展开行隐藏行卡活跃摘要——展开区「最近读取」为同一信息的完整版（含通道方向），避免同屏重复，收起后恢复 */
function bdDetailToggle(id){
  if(id==='bd5'&&!bd5Gone){ /* 展开毕业注销徽前先保证其分组可见：筛在乐时切到晴（「全部」chip 第一阶段隐藏），并展开折叠的毕业组 */
    if(bdCurFilter==='le')bdFilter('qing');
    bdQingSet(true);
  }
  if(id!=='bd5'&&bdCurFilter==='qing')bdFilter('le'); /* 同理：筛在晴时展开乐的徽（经演示说明触发）先切回其分组 */
  Object.keys(bdState).forEach(k=>{
    const d=document.getElementById(k+'-detail');
    if(!d)return; /* bd5 可能已随解绑移除 */
    d.style.display=(k===id&&d.style.display==='none')?'':'none';
    const s=document.getElementById(k+'-rsum');
    if(s)s.style.display=d.style.display==='none'?'':'none';
  });
}
/* -------- 智能校徽统一对象页：我的校徽 / 校徽办理 / 办理记录三 Tab -------- */
let apCurTab='mine'; /* 智能校徽当前 Tab：演示说明按 Tab 分开取内容 */
let apEdit=false; /* 修改办理信息编辑态：隐藏 Tab 栏与活动说明，底部为取消 / 保存 */
function applyEditMode(on){
  apEdit=on;
  document.querySelector('#sc-apply .pill-tabs').style.display=on?'none':'';
  applyApMedia(); /* 媒体位（视频 / 活动横幅）随编辑态隐藏，退出编辑按演示开关恢复 */
  document.getElementById('ap-form-intro').style.display=on?'none':'';
  document.getElementById('ap-form-sect').style.display=on?'none':'';
  document.getElementById('ap-form-time').style.display=on?'none':'';
  document.getElementById('ap-form-kids').style.display=on?'none':'';
  document.getElementById('ap-pv-sticky').style.display=on?'none':(badgePvOn()?'':'none'); /* 退出编辑按演示开关恢复预览显隐 */
  /* 编辑态为有照片记录服务：即使校级配置已切为无需证件照，也展示证件照卡 */
  document.getElementById('ap-photo-card').style.display=on?'':(photoReqOff()?'none':'');
  /* 编辑态固定展示记录已上传照片；退出时按办理表单自身上传状态恢复 */
  const upDoneEl=document.getElementById('apply-up-done'),upEl=document.getElementById('apply-up');
  if(on){
    upDoneEl.querySelector('img').src='assets/photo-upload.jpg';
    upDoneEl.style.display='';upEl.style.display='none';
  }else{
    if(apFormPhoto)upDoneEl.querySelector('img').src='assets/'+apFormPhoto;
    upDoneEl.style.display=apFormPhoto?'':'none';
    upEl.style.display=apFormPhoto?'none':'flex';
  }
  document.querySelector('#sc-apply .sub-hd b').textContent=on?'修改办理信息':'智能校徽';
  if(on){document.getElementById('ap-foot-form').style.display='none';document.getElementById('ap-foot-edit').style.display=''}
  else{document.getElementById('ap-foot-edit').style.display='none';if(apCurTab==='form')document.getElementById('ap-foot-form').style.display=''}
}
function applyEdit(nm){
  go('sc-apply');applyTab('form');
  /* 编辑态锁定记录对应的孩子：孩子选择卡隐藏，表单按记录带出 */
  if(nm){
    const e=Object.entries(AP_KIDS).find(([,v])=>v&&v.nm===nm);
    if(e){
      apKid=e[0];
      document.querySelectorAll('#ap-kids .fchip').forEach(c=>c.classList.toggle('on',c.textContent.indexOf(nm)===0));
      document.getElementById('ap-nm').value=e[1].nm;
      document.getElementById('ap-cls').value=e[1].cls;
    }
  }
  applyEditMode(true);
}
function applyEditExit(save){
  applyEditMode(false);applyTab('order');
  if(save)toast('已保存，按最新信息审核');
}
function applyTab(w){
  if(apEdit&&w!=='form')applyEditMode(false);
  apCurTab=w;
  ['mine','form','order'].forEach(k=>{
    document.getElementById('ap-'+k).style.display=k===w?'':'none';
    document.getElementById('ap-tb-'+k).classList.toggle('on',k===w);
  });
  document.getElementById('od-fbar').style.display=w==='order'?'':'none';
  document.getElementById('bd-fbar').style.display=w==='mine'?'':'none';
  document.getElementById('ap-foot-mine').style.display=w==='mine'?'':'none';
  document.getElementById('ap-foot-form').style.display=w==='form'?'':'none';
  document.getElementById('ap-foot-order').style.display=w==='order'?'':'none';
  document.querySelector('#sc-apply .body').scrollTop=0;
}
function applyMore(){
  const m=document.getElementById('ap-more'),show=m.style.display==='none';
  m.style.display=show?'':'none';
  document.getElementById('ap-more-txt').textContent=show?'收起':'展开';
  document.getElementById('ap-more-svg').style.transform=show?'rotate(180deg)':'rotate(0deg)';
}
/* 拍照正误示范折叠区 */
function applyGuide(){
  const g=document.getElementById('ap-guide'),show=g.style.display==='none';
  g.style.display=show?'':'none';
  document.getElementById('ap-guide-txt').textContent=show?'收起拍照要求':'查看拍照要求';
  document.getElementById('ap-guide-svg').style.transform=show?'rotate(180deg)':'rotate(0deg)';
}
/* -------- 证件照上传流程：方式选择半屏 → 模拟相册 / 相机 → 照片裁切 → 完成 -------- */
const UP_ALB=['photo-upload.jpg','photo-full.jpg','photo-duo.jpg','photo-side.jpg','photo-cap.jpg','photo-glasses.jpg','photo-sample.jpg','gate-snap1.jpg','gate-snap2.jpg'];
let upSel=null,upFrom='album';
function applyUpload(){
  showSheet('<div class="row" style="justify-content:space-between;align-items:center;margin-bottom:14px"><h3 style="margin:0">请上传学生证件照</h3><span style="font-size:18px;color:var(--ink-3);cursor:pointer" onclick="closeSheet()">✕</span></div>'
   +'<div class="up-opt" onclick="upAlbum()"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8" cy="10.2" r="1.6"/><path d="M13 11.5h5M13 14.5h5M5.5 16.5c.8-1.6 4.2-1.6 5 0"/></svg><span><b>已有电子版 · 上传证件照</b><span class="sub">请上传 1 寸、蓝底标准证件照</span></span><span class="arr2">›</span></div>'
   +'<div class="up-opt" onclick="upCam()"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6.5" width="18" height="13" rx="2.5"/><circle cx="12" cy="13" r="3.4"/><path d="M8.5 6.5l1.3-2h4.4l1.3 2"/></svg><span><b>没有电子版 · 拍张头像照</b><span class="sub" style="color:#9A9A9A">请靠白墙拍一张头像照</span></span><span class="arr2">›</span></div>');
}
function upAlbum(){
  closeSheet();upSel=null;upFrom='album';
  const g=document.getElementById('up-alb-grid');
  g.innerHTML=UP_ALB.map(f=>'<div class="it" onclick="upAlbPick(this,\''+f+'\')"><img src="assets/'+f+'" alt="相册照片"><span class="ck"></span></div>').join('');
  document.getElementById('up-alb-ok').className='ok';
  document.getElementById('up-alb-ok').textContent='完成';
  document.getElementById('up-album').classList.add('show');
}
function upAlbPick(el,f){
  const on=el.classList.contains('on');
  el.parentElement.querySelectorAll('.it').forEach(i=>{i.classList.remove('on');i.querySelector('.ck').textContent=''});
  if(!on){el.classList.add('on');el.querySelector('.ck').textContent='✓';upSel=f}else upSel=null;
  const ok=document.getElementById('up-alb-ok');
  ok.className='ok'+(upSel?' rdy':'');
  ok.textContent=upSel?'完成 (1)':'完成';
}
function upAlbOk(){if(!upSel)return;upCrop('album')}
function upCam(){
  closeSheet();upFrom='cam';upSel='photo-upload.jpg';
  document.getElementById('up-cam-live').style.display='';
  document.getElementById('up-cam-prev').style.display='none';
  document.getElementById('up-cam').classList.add('show');
}
function upCamShoot(){
  document.getElementById('up-cam-live').style.display='none';
  document.getElementById('up-cam-prev').style.display='';
}
function upCamBack(){
  document.getElementById('up-cam-live').style.display='';
  document.getElementById('up-cam-prev').style.display='none';
}
function upCrop(from){
  upFrom=from;
  document.getElementById('up-album').classList.remove('show');
  document.getElementById('up-cam').classList.remove('show');
  document.getElementById('up-crop-img').src='assets/'+upSel;
  document.getElementById('up-crop').classList.add('show');
  requestAnimationFrame(upCropFit);
}
/* 目标裁剪框固定 100:130 宽高比：以图片显示区域的短边为准等比适配、居中 */
function upCropFit(){
  const img=document.getElementById('up-crop-img'),f=document.getElementById('up-crop-frame');
  const W=img.clientWidth,H=img.clientHeight;
  if(!W||!H)return;
  const r=100/130;
  let fw=Math.min(W,H*r),fh=fw/r;
  if(fh>H){fh=H;fw=fh*r}
  f.style.width=fw+'px';f.style.height=fh+'px';
}
/* 换图（upCrop 改 src）加载完成后按新图尺寸重新适配裁剪框。在脚本里绑定、不写成 <img onload>：页面加载时图片常先于本脚本加载完，
   内联 onload 会报 upCropFit 未定义；此时裁切层尚未显示、适配本就无事可做，漏掉这一次无影响 */
document.getElementById('up-crop-img').addEventListener('load',upCropFit);
function upCropBack(){
  document.getElementById('up-crop').classList.remove('show');
  (upFrom==='cam'?upCam:upAlbum)();
  if(upFrom==='cam')upCamShoot();
}
function upClose(){['up-album','up-cam','up-crop'].forEach(i=>document.getElementById(i).classList.remove('show'))}
function upDone(){
  upClose();
  const z=document.getElementById('apply-up');
  document.querySelector('#apply-up-done img').src='assets/'+upSel;
  z.style.display='none';
  document.getElementById('apply-up-done').style.display='';
  if(!apEdit){z.dataset.ok='1';apFormPhoto=upSel;apPvUpdate()}
  /* 上传成功后自动收起拍照要求折叠区 */
  document.getElementById('ap-guide').style.display='none';
  document.getElementById('ap-guide-txt').textContent='查看拍照要求';
  document.getElementById('ap-guide-svg').style.transform='rotate(0deg)';
  toast('照片已上传，机审通过');
}
/* 移除照片：回到「添加照片」空态，可点击重新上传（办理表单同时清空已上传标记） */
let apFormPhoto=null; /* 办理表单（非编辑态）已上传的照片，退出编辑态时据此恢复展示 */
function applyPhotoRemove(){
  const z=document.getElementById('apply-up');
  document.getElementById('apply-up-done').style.display='none';
  z.style.display='flex';
  if(!apEdit){z.dataset.ok='';apFormPhoto=null;apPvUpdate()}
  toast('已移除，请重新上传');
}
/* -------- 统一在途人工申请表（本次迭代新增）--------
   三个提交入口（我的 / 孩子管理页、校徽办理页、未匹配承接页）此前各自维护展示层、彼此不可见：
   同一份五要素跨入口重复提交不被拦截，班主任审核端会收到两条一模一样的单子。现收敛为一份账号级在途申请表——
   提交写表、拦截读表、撤回清表，重复提交拦截与在途上限均以本表为准（原上限只数办理页 AP_KIDS、不是真正的账号级）。
   静态演示的林晓冬同样入表（办理页 chip 为 AP_KIDS.dong、孩子管理页为静态条目，两处同一条申请）。
   DOM id 约定：孩子管理页条目 pend-kid-<id>、未匹配承接页状态卡 pend-nc-<id>、办理页 chip ap-kid-<apKey>。
   演示数据，刷新恢复 */
const PEND_APPLIES=[
 {id:'dong',sch:'市实验一小',gr:'1年级',cls:'2班',nm:'林晓冬',sex:'男',at:'3月2日 14:20',av:'assets/avatar-boy.png',apKey:'dong'}
];
const PEND_MAX=3;   // 账号级在途人工申请上限（防滥用，三个入口统一生效）
let pendSeq=0;
const pendFind=(sch,gr,cls,nm,sex)=>PEND_APPLIES.find(p=>p.sch===sch&&p.gr===gr&&p.cls===cls&&p.nm===nm&&p.sex===sex);
const pendById=id=>PEND_APPLIES.find(p=>p.id===id);
/* 提交时间：演示取当前时间（真实产品由服务端返回），格式与站内消息时间同口径 */
function pendNow(){
  const d=new Date();
  return (d.getMonth()+1)+'月'+d.getDate()+'日 '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');
}
/* 四入口共用：默认按人工申请表单当前五要素登记一条在途申请（apKey 仅办理页入口有——该入口同时生成办理孩子 chip）；
   ov 为显式五要素覆盖——班级注册码入口的校班由码带出、姓名 / 性别取绑定申请页自己的表单，不经人工申请表单 */
function pendAdd(apKey,ov){
  pendSeq++;
  /* 传 ov 时不读人工申请表单（该表单此时可能为空、性别未选中） */
  const p=Object.assign({id:'pa'+pendSeq,at:pendNow()},ov||{sch:pickerVal.school,gr:pickerVal.grade,cls:pickerVal.cls,
   nm:document.getElementById('apply-name').value.trim(),
   sex:document.querySelector('#apply-sex .on').textContent,
   enr:document.querySelector('#apply-enr .on').textContent,
   rel:document.getElementById('apply-rel').value,
   av:addAvatarSrc()});
  if(apKey)p.apKey=apKey;
  const d=new Date(),z=n=>String(n).padStart(2,'0');
  p.ts=d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())+' '+z(d.getHours())+':'+z(d.getMinutes());
  p.ph=(addFrom==='nochild'||apNewUser||(curScreen==='sc-classreg'&&cregPersona!=='kids'))?'138****9900':'138****6688';
  PEND_APPLIES.push(p);
  pendSync();
  return p;
}
/* -------- 家长端 → 老师端联动：本次会话新提交的在途申请写入本机共享存储（proto-stureg），老师端「学生审核 · 注册申请」读取后
   进入待审核列表，审核页按其中的「就读安排」定位归属学年。只同步本校（市实验一小）、本次会话新提交的（常驻演示的林晓冬不入）；
   撤回 / 模拟审核通过移出在途申请表时同步移除；家长端刷新即清空（演示数据，刷新恢复） -------- */
function pendSync(){
  const list=PEND_APPLIES.filter(p=>/^pa\d+$/.test(p.id)&&p.sch==='市实验一小')
    .map(p=>({id:PEND_SYNC_RUN+'-'+p.id,nm:p.nm,sex:p.sex,gr:p.gr,cls:p.cls,enr:p.enr||'现在就读',rel:p.rel||'',ph:p.ph||'',ts:p.ts||'',src:p.src||'人工申请',
      pnm:p.nm+(p.rel&&p.rel!=='其他'?p.rel:'家长')}));   /* pnm：家长端不采集家长姓名，按「孩子姓名 + 关系」默认（如 林晓乐妈妈），老师审核时可改 */
  try{localStorage.setItem('proto-stureg',JSON.stringify(list))}catch(e){}
}
const PEND_SYNC_RUN=Date.now();   // 本次会话标识：家长端刷新后申请 id 从 pa1 重新编号，加前缀防止开着的老师端误判为已并入
try{localStorage.removeItem('proto-stureg');localStorage.removeItem('proto-stureg-res')}catch(e){}
/* 老师端 → 家长端：审核结果经 proto-stureg-res 回传（{同步 id:{st:'ok'|'no',reason}}），每条只处理一次——
   通过同「模拟：班主任审核通过」转已绑定；拒绝同撤回口径清理三处展示层，并提示未通过及理由 */
const PEND_RES_DONE={};
function pendResApply(){
  let res={};try{res=JSON.parse(localStorage.getItem('proto-stureg-res'))||{}}catch(e){}
  Object.keys(res).forEach(sid=>{
    if(PEND_RES_DONE[sid])return;
    const p=PEND_APPLIES.find(x=>PEND_SYNC_RUN+'-'+x.id===sid);
    if(!p)return;
    PEND_RES_DONE[sid]=1;
    if(res[sid].st==='ok'){
      pendFixApply(p,res[sid].fix);
      pendApproveDo(p);
      pendApproveMsg(p,res[sid].by||'王瑶',!!res[sid].fix);
    }
    else{
      pendRevokeDo(p.id);
      pAlert('绑定申请未通过',p.nm+' 的绑定申请未通过'+(res[sid].reason?'：'+res[sid].reason:'')+'。可核对信息后重新提交。');
    }
  });
}
window.addEventListener('storage',e=>{if(e.key==='proto-stureg-res')pendResApply()});
/* 老师审核时更正过的信息（姓名 / 性别 / 班级 / 我的关系）：通过后孩子即名册里的正式学生，家长端一律显示通过后的信息——
   孩子管理条目、未匹配承接页状态卡、办理页 chip 与孩子资料页同步改；页面上不另加「已更正」提示，通知里带一句「信息有更正」 */
function pendFixApply(p,fix){
  if(!fix)return;
  Object.assign(p,fix);p.fixed=true;
  const sub=p.sch+' · '+p.gr+'-'+p.cls;
  ['pend-kid-','pend-nc-'].forEach(pre=>{
    const c=document.getElementById(pre+p.id);if(!c)return;
    const nm=c.querySelector('span[style*="flex:1"] > span, b');if(nm&&fix.nm)nm.textContent=p.nm;
    const m=c.querySelector('.muted');if(m&&pre==='pend-kid-')m.textContent=sub;
  });
  if(p.apKey&&AP_KIDS[p.apKey]){AP_KIDS[p.apKey].nm=p.nm;AP_KIDS[p.apKey].cls=p.gr+'-'+p.cls;AP_KIDS[p.apKey].init=p.nm.slice(-1)}
}
/* 添加孩子申请结果通知（已通过）：站内消息置顶「今天」分组，服务号卡片追加到会话末尾（模板 45686「工单处理提醒」）。
   老师更正过信息时两处同文「{孩子}已添加为您的孩子，信息有更正」，不列具体改了什么（服务号每个字段值不超过 20 字，超出则两处都不带这句、沿用原文案）；孩子姓名、班级取通过后的 */
function pendApproveMsg(p,by,fixed){
  const d=new Date(),z=n=>String(n).padStart(2,'0'),hm=z(d.getHours())+':'+z(d.getMinutes());
  /* 站内消息副行只显示一行、超出截断（约 21 字）：更正时去掉「{老师}老师已审核通过，」前缀，与服务号「位置」同文，保证「信息有更正」露出 */
  const base=p.nm+'已添加为您的孩子',tail='，信息有更正',withTail=fixed&&(base+tail).length<=20;
  const grp=document.querySelector('#msg-grp-today .card');
  if(grp)grp.insertAdjacentHTML('afterbegin','<div class="lv-item" data-cat="guardian" data-ago="0" onclick="go(\'sc-kids\')">'
   +'<div class="lv-ico violet"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.3" r="3.5"/><path d="M5.5 19.8c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5"/></svg></div>'
   +'<div style="flex:1;min-width:0"><div class="t1"><span class="tt">添加孩子申请已通过</span><span class="lv-time">今天 '+hm+'</span></div><div class="t2">'+(withTail?base+tail:by+'老师已审核通过，'+base)+'</div></div></div>');
  const cards=document.querySelectorAll('#sc-wxpush .wxp-card'),last=cards[cards.length-1];
  if(last){
    const kv=(k,v)=>'<div class="wx-kv"><span class="k">'+k+'</span><span class="v">'+v+'</span></div>';
    last.insertAdjacentHTML('afterend','<div class="wx-tdiv">'+hm+'</div><div class="wxp-card" onclick="go(\'sc-kids\')"><h5>工单处理提醒<i>⋯</i></h5>'
     +kv('学校名称',p.sch)+kv('学生姓名',p.nm+' ('+p.gr+'-'+p.cls+')')+kv('工单状态','已通过')
     +kv('时间',d.getFullYear()+'-'+z(d.getMonth()+1)+'-'+z(d.getDate())+' '+hm)+kv('位置',base+(withTail?tail:''))
     +last.querySelector('.wx-cfoot').outerHTML+'</div>');
  }
  if(typeof applyMsgFilter==='function')applyMsgFilter();
}
/* 审核通过：办理页入口的申请走 pendingApprove（chip 转正、办理记录继续流转）；其余入口转已绑定——
   孩子管理页条目去 chip 转普通条目、孩子数 +1，未匹配承接页状态卡转「已通过」，驻留绑定申请页时按在途申请表重建 */
function pendApproveDo(p){
  if(p.apKey&&AP_KIDS[p.apKey]&&AP_KIDS[p.apKey].pending){pendingApprove(p.apKey);return}
  const i=PEND_APPLIES.indexOf(p);
  if(i>=0){APPROVED_KIDS.push(p);PEND_APPLIES.splice(i,1);pendSync()}
  const kc=document.getElementById('pend-kid-'+p.id);
  if(kc){
    const chip=kc.querySelector('.chip');if(chip)chip.remove();
    kc.setAttribute('onclick',"childOpen('"+p.id+"')");
    const sk=document.getElementById('stat-kids');
    if(sk)sk.innerHTML=(parseInt(sk.textContent)+1)+'<i class="u">人</i>';
  }
  const nc=document.getElementById('pend-nc-'+p.id);
  if(nc){
    const chip=nc.querySelector('.chip');if(chip){chip.textContent='已通过';chip.className='chip teal';chip.style.marginRight='6px'}
    const sub=nc.querySelector('.muted');if(sub)sub.textContent=p.sch+' · '+p.gr+'-'+p.cls+' · 审核已通过，绑定已生效';
    nc.setAttribute('onclick',"toast('"+p.nm+" 已绑定生效')");
  }
  if(curScreen==='sc-classreg')cregStatus();
  toast(p.nm+' 绑定已生效');
}
/* 账号级在途上限（本次迭代由办理页入口私有校验提到此处，三个入口统一生效） */
function pendLimitHit(){
  if(PEND_APPLIES.length>=PEND_MAX){toast('在途申请已达 '+PEND_MAX+' 个上限');return true}
  return false;
}
/* 多孩切换：姓名 / 班级按名册带出；首枚免费按学生计（林晓阳未办过 → 免费，林晓乐已用 → 增办 ¥15） */
/* 选择器口径：已绑定在读 + 待认领（提交时先认领）+ 核实中（仅状态展示、提交拦截——与王一明锁定后 chip 保持在位同一呈现，
   同状态同形态）+ 审核中（乐观提交、正常支付）；毕业生 / 离校生不列入（不可再办理）。
   unconf=本账号待认领的王一明（与孩子管理页同一人、认领状态两侧打通）；tong=核实中的李*桐（locked，静态锁定态）；
   dong=审核中的林晓冬（与孩子管理页静态条目同人设，常驻演示、不参与「模拟班主任审核通过」流转） */
const AP_KIDS={yang:{nm:'林晓阳',cls:'1年级-1班',init:'阳',free:true},le:{nm:'林晓乐',cls:'3年级-2班',init:'乐',free:false},
 unconf:{nm:'王*明',full:'王一明',cls:'1年级-3班',init:'明',free:true,unconfirmed:true},
 tong:{nm:'李*桐',cls:'2年级-2班',init:'桐',free:true,unconfirmed:true,locked:true},
 dong:{nm:'林晓冬',cls:'1年级-2班',init:'冬',free:true,pending:true}};
let apKid='yang',apQty=3,apStyle='男生款';   // apQty：支付半屏默认制作数量 3（多枚互备，减至 1 枚需确认）
/* 跨家长待支付单演示态：另一位家长为该孩子创建的待支付订单（经演示说明按钮开启；取消重办或刷新后重置） */
let crossPend=null;
/* 徽面实时预览：按当前孩子与已上传照片渲染，预览即信息确认；无需证件照配置下为无照片版式 */
function apPvUpdate(){
  const kid=AP_KIDS[apKid];
  if(!kid)return;   // 新用户空态：无选中孩子，预览不渲染
  document.getElementById('ap-pv-nm').textContent=kid.nm;
  document.getElementById('ap-pv-cls').textContent=kid.cls+' · NO.待分配';
  const ph=document.getElementById('ap-pv-ph');
  ph.style.display=photoReqOff()?'none':'';
  ph.textContent=kid.init;
  ph.style.background=apFormPhoto?'url(assets/'+apFormPhoto+') center/cover no-repeat':'';
  ph.style.color=apFormPhoto?'transparent':'';
}
function applyKid(el,k){
  apKid=k;
  const kid=AP_KIDS[k];
  el.parentElement.querySelectorAll('.fchip').forEach(c=>c.classList.remove('on'));el.classList.add('on');
  document.getElementById('ap-nm').value=kid.nm;
  document.getElementById('ap-cls').value=kid.cls;
  /* 审核中孩子：仅展示家长自填信息，不回填任何名册数据（防枚举口径不破）。姓名下方不再附任何状态提示行
     （审核中的「按您提交的绑定申请填写，待班主任审核」、待认领的认领提示、核实中的锁定提示均已去除）：
     流程态由 chip 琥珀底色标识，认领规则与锁定后果在点「提交办理」时由认领半屏与拦截提示当场说明，审核状态由记录列表与消息承载；
     #ap-nm-note 节点保留（多处 JS 引用）但常驻隐藏 */
  document.getElementById('ap-nm-note').style.display='none';
  apPvUpdate();
}
applyPhotoReq(); /* 初始渲染：证件照区块显隐 + 徽面预览 */
/* 校徽预览吸顶（折叠头）：预览卡到达滚动窗顶部后，随继续滚动的距离连续插值收缩为紧凑徽面条。
   进入收缩前先锁定 sticky 外层高度——布局与滚动总高度全程零变化（不触发滚动锚定回卷）；
   卡片收缩速度与下方内容上移速度同步，因此既无空隙也无形态跳变；滚回、切 Tab、编辑态自动还原 */
const pvBody=document.querySelector('#sc-apply .body');
let pvP=0,pvHd0=null;
function pvApply(p){
  const wrap=document.getElementById('ap-pv-sticky'),card=document.getElementById('ap-preview-card');
  const hd=card.querySelector('.pv-hd'),pw=card.querySelector('.pv-wrap'),bd=pw.querySelector('.id-badge');
  if(pvHd0===null)pvHd0=hd.getAttribute('style')||'';
  if(p<=0){
    if(pvP>0){wrap.style.height='';card.style.cssText='';pw.style.cssText='';bd.style.cssText='';hd.style.cssText=pvHd0}
    pvP=0;return;
  }
  if(pvP<=0)wrap.style.height=card.offsetHeight+'px'; /* 从完整形态进入收缩：先锁定外层布局高度 */
  pvP=p;
  const sc=1-.38*p; /* 徽面缩放 1 → 0.62 */
  card.style.padding=(15-6*p)+'px '+(16-2*p)+'px '+(15-7*p)+'px';
  card.style.borderRadius=(14*(1-p))+'px '+(14*(1-p))+'px 14px 14px';
  card.style.boxShadow='0 '+(2+8*p)+'px '+(10+12*p)+'px rgba(30,60,110,'+(.07+.11*p).toFixed(3)+')';
  hd.style.overflow='hidden';
  hd.style.height=(20*(1-p))+'px';
  hd.style.marginBottom=(10*(1-p))+'px';
  hd.style.opacity=Math.max(0,1-1.6*p);
  pw.style.overflow='hidden';
  pw.style.height=(bd.offsetHeight*sc)+'px'; /* offsetHeight 不受 transform 影响，取的是原始高度 */
  /* 纯等比缩放（不做宽度补偿）：宽高同步收缩、徽面比例不变，缩小后顶部居中 */
  bd.style.transform='scale('+sc+')';
  bd.style.transformOrigin='top center';
}
function pvOnScroll(){
  let p=0;
  if(badgePvOn()&&!apEdit&&document.getElementById('ap-form').style.display!=='none'){
    /* 哨兵不参与吸顶，其位置恒为预览卡的自然位置：滚动窗顶部超出哨兵的距离即收缩进度 */
    const over=pvBody.getBoundingClientRect().top-document.getElementById('ap-pv-sentinel').getBoundingClientRect().bottom;
    if(over>0){
      const card=document.getElementById('ap-preview-card');
      const bd=card.querySelector('.pv-wrap .id-badge');
      const H=parseFloat(document.getElementById('ap-pv-sticky').style.height)||card.offsetHeight;
      const range=Math.max(40,H-(17+bd.offsetHeight*.62)); /* 完整高度 − 紧凑高度 = 收缩行程 */
      p=Math.min(1,over/range);
    }
  }
  pvApply(p);
}
pvBody.addEventListener('scroll',()=>requestAnimationFrame(pvOnScroll),{passive:true});
applyBadgePv(); /* 初始渲染：校徽预览区块显隐（默认隐藏） */
applyApMedia(); /* 初始渲染：须知卡上方媒体位视频 / 横幅显隐（默认视频） */
/* 人工申请（从办理页进入）提交后回流：生成「审核中」孩子 chip 并自动选中。
   多孩口径：每次添加生成独立审核中孩子、可分别提交办理单并正常支付（原单槽位覆盖实现废止）——
   多孩同校家庭收集期一次办齐是合法场景，乐观提交不应只放行一个孩子；
   防滥用改按孩子计：账号级在途人工申请上限 3 个（静态演示的林晓冬计入，上限校验已提到 submitApply 的 pendLimitHit
   统一把关三个入口），每个审核中孩子在途办理单限 1 张 */
let apPendSeq=0;
function addPendingKid(){
  const nm=document.getElementById('apply-name').value.trim();
  apPendSeq++;const key='pend'+apPendSeq;
  const p=pendAdd(key);   // 登记进统一在途申请表；paId 反向关联，供撤回与审核通过时清表
  /* nu/av/sch：新用户人设标记与卡片信息——结果页「完成」时以状态卡写入未匹配承接页（payokDoneNew） */
  AP_KIDS[key]={nm:nm,cls:pickerVal.grade+'-'+pickerVal.cls,init:nm.charAt(nm.length-1),free:true,pending:true,
    nu:apNewUser,av:addAvatarSrc(),sch:pickerVal.school,paId:p.id};
  const chip=document.createElement('button');
  chip.id='ap-kid-'+key;
  chip.className='fchip pending';
  chip.setAttribute('onclick',"applyKid(this,'"+key+"')");
  chip.textContent=nm;
  document.getElementById('ap-kids').appendChild(chip);
  go('sc-apply');applyTab('form');
  applyKid(chip,key);
  pAlert('已提交','申请已提交班主任审核，结果以消息通知；期间可先为 '+nm+' 提交校徽办理。');
}
function applySubmit(){
  /* 新用户空态（未选中任何孩子）：先引导添加孩子 */
  if(!AP_KIDS[apKid]){toast('请先添加要办理的孩子');return}
  /* 校级配置为无需证件照时跳过照片必传校验 */
  if(!photoReqOff()&&document.getElementById('apply-up').dataset.ok!=='1'){toast('请上传学生证件照');return}
  /* 注册办理码链路（本次迭代改定）：选中「待认领」孩子提交办理时先弹认领半屏——与孩子管理页同一半屏同一验证
     （填空式姓名 + 关系选择、模糊反馈限频、3 次锁定），认领成功后自动续接提交进支付半屏；
     原「提交即自动确认关系」绕过姓名验证，二次放号号主扫海报即可误绑并办出带照片的校徽，故收敛为认领统一经姓名验证 */
  const k=AP_KIDS[apKid];
  if(k&&k.unconfirmed){
    /* 核实中（静态锁定的李*桐 / 认领输错 3 次后的王一明）：仅状态展示，提交拦截 */
    if(k.locked||claimFails>=3){toast('认领核实中，请等待通知');return}
    claimNext='apply';
    openSheet('claim-rel');
    return;
  }
  /* 审核中孩子：在途办理单按孩子限 1 张（审核通过后不再受限），二次提交拦截；该单还在待支付的放行，由 applyPay 续接支付 */
  if(k&&k.pending&&k.submitted&&!(AP_LAST&&AP_LAST.due&&AP_LAST.kid===apKid)){pAlert('暂不能再办理','该孩子审核期间的在途办理单限 1 张，审核通过后可继续办理。');return}
  apQty=3;apStyle='男生款';paySheet();
}
/* 演示：首枚免费额度已用的孩子（林晓乐）再次办理——表单切至林晓乐并唤起支付半屏，按增办 ¥15/枚 全额计 */
function demoPaidApply(){
  applyTab('form');
  const chip=[...document.querySelectorAll('#ap-kids .fchip')].find(c=>c.textContent==='林晓乐');
  if(chip)applyKid(chip,'le');else apKid='le';
  apQty=3;apStyle='男生款';paySheet();
}
/* 演示：模拟另一位家长（爸爸）已为林晓乐创建待支付订单——本账号再提交时不承接续付、半屏拦截（PRD 12.4 跨家长口径） */
function crossPayDemo(){
  crossPend={kid:'le',by:'爸爸',left:'23分钟'};
  applyTab('form');
  const chip=[...document.querySelectorAll('#ap-kids .fchip')].find(c=>c.textContent==='林晓乐');
  if(chip)applyKid(chip,'le');else apKid='le';
  apQty=3;apStyle='男生款';paySheet();
}
/* 支付半屏：数量 / 款式 / 金额明细，首张免费自动抵扣；缩略图为等比缩放的校徽卡 */
function badgeMini(nm,cls,init,scale,phBg,extra){
  /* phBg 传 'none' 时渲染无照片版式（校级配置为无需证件照的办理形态） */
  const ph=phBg==='none'?'':'<div class="ph"'+(phBg?' style="background:'+phBg+'"':'')+'>'+init+'</div>';
  return '<div class="id-badge" style="transform:scale('+scale+')'+(extra?';'+extra:'')+'"><div class="id-main">'+ph+'<div class="mid"><div class="sch-row"><span class="crest">实</span><span><span class="sch-cn">市实验一小</span><span class="sch-en">SHIYAN NO.1 EXPERIMENTAL PRIMARY SCHOOL</span></span></div><div class="nm">'+nm+'</div><div class="cls">'+cls+'</div></div><div class="qr"></div></div><div class="strip"></div></div>';
}
function paySheet(){
  const k=AP_KIDS[apKid];
  document.getElementById('sheet').innerHTML=`
   <div class="row" style="gap:13px;align-items:center;margin-bottom:6px">
    <div class="badge-thumb" style="width:128px;height:44px">${badgeMini(k.nm,k.cls+' · NO.待分配',k.init,.4,photoReqOff()?'none':null)}</div>
    <div style="flex:1">
      <div style="font-size:19px;font-weight:800;color:var(--cinnabar)">¥15</div>
    </div>
    ${k.free?'<span class="chip red plain" style="border:1px solid var(--cinnabar);background:#fff;align-self:center">首张校徽免费</span>':'<span class="chip gray plain" style="align-self:center">首枚免费已办理</span>'}
   </div>
   <div class="hr"></div>
   <div class="row" style="justify-content:space-between;margin:4px 0 8px">
     <b style="font-size:14px">制作数量</b>
     <span class="row" style="gap:8px">
       <button class="stepbtn" id="pay-minus" onclick="payStep(-1)" ${apQty<=1?'disabled':''}>−</button>
       <span class="stepval" id="pay-qty">${apQty}</span>
       <button class="stepbtn" id="pay-plus" onclick="payStep(1)" ${apQty>=10?'disabled':''}>＋</button>
     </span>
   </div>
   <div class="note" style="background:var(--amber-bg);border-left-color:var(--amber);color:#C97A12">提醒：因校徽内含芯片、定制印刷，补办预计 20 个工作日；丢失将无法收到孩子进出校消息，建议家长按需备用校徽（自愿）。</div>
   <b style="font-size:14px;display:block;margin:12px 0 9px">选择款式</b>
   <div class="row" style="gap:10px;margin-bottom:12px;align-items:stretch">
     <div class="stylecard on" onclick="payStyle(this,'男生款')"><div class="badge-thumb" style="width:100%;height:50px;margin-bottom:7px">${badgeMini('王小明','3年级-2班 · NO.0208','明',.46,photoReqOff()?'none':null)}</div>男生款 ¥15</div>
     <div class="stylecard" onclick="payStyle(this,'女生款')"><div class="badge-thumb" style="width:100%;height:50px;margin-bottom:7px">${badgeMini('李小红','3年级-2班 · NO.0209','红',.46,photoReqOff()?'none':'linear-gradient(160deg,#E8A0B8,#C4708E)')}</div>女生款 ¥15</div>
   </div>
   <b style="font-size:14px;display:block;margin-bottom:4px">金额明细</b>
   <div style="background:#F7F9FB;border-radius:12px;padding:5px 14px;margin-bottom:14px">
     <div class="kv"><span class="k" style="width:auto;flex:1">商品总价</span><span class="v" style="flex:none" id="pay-total">¥15.00</span></div>
     <div class="kv" id="pay-disc-row"><span class="k" style="width:auto;flex:1">首张校徽免费</span><span class="v" style="flex:none;color:var(--cinnabar)">-¥15.00</span></div>
     <div class="hr" style="margin:3px 0"></div>
     <div class="kv"><span class="k" style="width:auto;flex:1;color:var(--ink);font-weight:700">小计</span><span class="v" style="flex:none;font-weight:800;font-size:16px" id="pay-sub">¥0.00</span></div>
   </div>
   <!-- 第一阶段隐藏：印前确认两项勾选（PRD 12.4 印前确认，责任分界 + 定制商品不退）——
        恢复方式：去掉 #pay-cks 的 display:none 即可，applyPay 的勾选校验按区块可见性自动生效；节点保留勿删 -->
   <div id="pay-cks" style="display:none;margin:-2px 2px 13px">
     <div class="ck2" style="margin-top:0" onclick="toggleCk(this)"><span class="box"></span><span style="flex:1">我已核对${photoReqOff()?'姓名、班级':'姓名、班级、照片'}无误；信息错误由家长承担，印刷质量问题由厂商负责</span></div>
     <div class="ck2" onclick="toggleCk(this)"><span class="box"></span><span style="flex:1">我已知晓校徽为定制商品，<b>不支持无理由退货</b>，进入生产后不可取消</span></div>
   </div>
   <button class="btn pri blk" id="pay-btn" onclick="applyPay()">支付办理</button>`;
  document.querySelectorAll('#sheet .id-badge .qr').forEach(e=>e.innerHTML=QR_SVG);
  document.getElementById('mask').classList.add('show');
  payCalc();
}
function payStep(d){
  /* 由 2 枚减至 1 枚需确认：补办周期长、建议留备用，弹微信原生式确认弹窗，确认后才减为 1 枚 */
  if(d<0&&apQty===2){payQtyDlg();return}
  payStepDo(d);
}
function payQtyDlg(){document.getElementById('pay-qty-dlg').classList.add('show')}
function payQtyDlgClose(){document.getElementById('pay-qty-dlg').classList.remove('show')}
function payQtyDlgOk(){payQtyDlgClose();if(document.getElementById('pay-qty'))payStepDo(-1)}
function payStepDo(d){
  apQty=Math.min(10,Math.max(1,apQty+d));   // 单次办理上限 10 枚
  document.getElementById('pay-qty').textContent=apQty;
  document.getElementById('pay-minus').disabled=apQty<=1;
  document.getElementById('pay-plus').disabled=apQty>=10;
  payCalc();
}
function payStyle(el,s){apStyle=s;el.parentElement.querySelectorAll('.stylecard').forEach(b=>b.classList.remove('on'));el.classList.add('on')}
function payCalc(){
  const k=AP_KIDS[apKid],total=15*apQty,pay=Math.max(0,total-(k.free?15:0));
  document.getElementById('pay-total').textContent='¥'+total.toFixed(2);
  document.getElementById('pay-disc-row').style.display=k.free?'':'none';
  document.getElementById('pay-sub').textContent='¥'+pay.toFixed(2);
  /* 审核中孩子与普通孩子同一支付口径：付费即支付、¥0 免费单直接提交（第一阶段无挂起单） */
  document.getElementById('pay-btn').textContent=pay>0?'支付办理 ¥'+pay.toFixed(2):'免费提交办理';
}
/* -------- 记录详情页：数据驱动渲染，列表「记录详情」跳对应记录 -------- */
/* 状态口径（与 PRD 6.7 状态机对齐）：主流程 待支付→待审核（底层：待确认/待生产，家长端合并显示）→生产中→已寄出→已到校→部分启用 x/y→已完成；
   异常仅 已取消（=整单关闭）。已付款单一律「退款成功才关单」——家长自主取消与运管全额退款同一口径：取消动作只发起退款，
   退款到账回调时订单才转已取消（状态机图上取消边的守卫「取消成功」即含退款成功）；未支付单与免费单无款可退，取消即关单。
   退款中/已退款不是订单状态（由退款单承载）：退款到账前订单底层仍是待审核（待确认/待生产），家长端 chip 由展示层派生为「退款中」，
   筛选与 chip 同取派生口径（家长只认得卡上看到的标签，点「待审核」不应再出现已取消办理的单）；「退款中」不单设筛选 chip
   （瞬态、单账号同时至多一两条，按时间倒序在「全部」顶部即可见）——部分退款不派生，主单 chip 照常显示生产中/已寄出等。
   整单退完且退款在途＝主单流转冻结（与运管端 rfAllPending 同口径）：唯一竞态窗口是已寄出→已到校（包裹无法召回、签收回调必然到达），
   已寄出单全额退款在途期间物流签收只落物流单、不推进主单状态——保证「退款中」chip 不会因签收翻回「已到校」再以「已完成」收尾，
   到账仍按发出前门槛转已取消；已到校/部分启用单整单退完在途期间确认收货完结通道整体挂起——
   （确认收货只有两种形态：家长人工确认、到校满 7 天自动确认，二者都整单转已完成；定时器从到校起算、不因部分枚已核验而终止，
   先于 7 天全部核验完结的单无需确认；「首枚核验推定确认收货」口径已废止——推定既不完结也不改枚状态，只是把系统推断记成家长动作）
   人工确认入口收起（odCanRecv，仅已寄出 / 已到校单有入口）、满 7 天自动确认定时器挂起
   （核验路径无需另设约束：被退枚发起退款即作废，整单退完的单内无可核验枚，核验完结的守卫天然不可达），
   完结统一由末笔退款到账驱动；部分退款在途不冻结（剩余枚主流程照常推进）。
   家长自主取消止于提交生产前，生产后退款仅运管后台可操作 */
const OD_PH='url(assets/photo-upload.jpg) center/cover no-repeat;color:transparent';
const OD_KID={badge:{nm:'林晓乐',cls:'3年级-2班 · NO.待分配',init:'乐',ph:OD_PH},stu:{nm:'林晓乐',cls:'3年级-2班'},nm:'林晓乐 校徽',style:'男生款'};
const OD_DATA={
 pay:      Object.assign({},OD_KID,{date:'2026-07-08 09:15',chip:['amber','待支付'],qty:1,total:'¥15.00',pay:'¥0.00',due:'¥15.00',disc:false,meta:'款式：男生款　应付：¥15.00',done:0,onLabel:null,verify:false,no:'SS2026070834219706',created:'2026-07-08 09:15:12',paid:'—（待支付）'}),
 review:   Object.assign({},OD_KID,{date:'2026-07-06 11:05',chip:['amber','待审核'],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,meta:'款式：男生款　实付：¥15.00',done:1,onLabel:null,verify:false,no:'SS2026070627451803',created:'2026-07-06 11:05:03',paid:'2026-07-06 11:05:29'}),
 /* 待修改信息：审核处置三出口之一（通过→生产中；待修改信息=可修复问题退回家长重传，同单迭代不新建、重传后回到待审核；不予受理（后续阶段）=未付款单转已取消、已付款单由平台发起退款转退款中）。
    命名取待办语义、与待支付/待审核同族；消息报事件（审核未通过）、订单标状态（待修改信息）；reason=审核意见（详情页红色横幅，标题保留「审核未通过」事件语义），消息页「校徽审核未通过」直达本记录 */
 reject:   Object.assign({},OD_KID,{stage2:true,date:'2026-07-05 15:12',chip:['amber','待修改信息'],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,meta:'款式：男生款　实付：¥15.00 · 待修改信息',done:1,onLabel:null,verify:false,no:'SS2026070591346628',created:'2026-07-05 15:12:08',paid:'2026-07-05 15:12:31',reason:'证件照不符合规格（头部占比不足、背景非纯色），请点击下方「修改信息」重新上传后再次提交审核。'}),
 prod:     Object.assign({},OD_KID,{date:'2026-07-02 10:20',chip:['navy','生产中'],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,meta:'款式：男生款　实付：¥15.00',done:2,onLabel:null,verify:false,no:'SS2026070220714583',created:'2026-07-02 10:20:36',paid:'2026-07-02 10:20:58'}),
 /* 已付款单取消办理（退款处理中）：取消动作只发起退款、不即时关单——订单底层仍是待审核（chip 字段即底层状态），
    退完且未到账故 odChip 派生显示「退款中」；退款到账回调时才转已取消（见 refunded） */
 refunding:Object.assign({},OD_KID,{date:'2026-07-01 18:25',chip:['amber','待审核'],refunds:[{n:1,amt:15,done:false}],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,done:1,onLabel:null,verify:false,no:'SS2026070166325149',created:'2026-07-01 18:25:17',paid:'2026-07-01 18:25:40'}),
 shipped:  Object.assign({},OD_KID,{date:'2026-06-28 15:30',chip:['navy','已寄出'],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,meta:'款式：男生款　实付：¥15.00',done:3,onLabel:null,verify:false,no:'SS2026062844107236',created:'2026-06-28 15:30:22',paid:'2026-06-28 15:30:47'}),
 arrived:  Object.assign({},OD_KID,{date:'2026-06-24 09:00',chip:['navy','已到校'],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,meta:'款式：男生款　实付：¥15.00',done:4,onLabel:null,verify:false,no:'SS2026062412938470',created:'2026-06-24 09:00:51',paid:'2026-06-24 09:01:14'}),
 /* 多枚逐枚核验（3 枚增办，已到校待核验）：与「我的校徽」NO.0008–0010 双向打通——每扫码核验启用一枚即追加流转行，
    部分启用 1/3 → 2/3 → 3 枚全部启用转已完成（枚级终态，已启用的徽立即参与考勤、不等其余枚） */
 multi3:   Object.assign({},OD_KID,{date:'2026-06-26 08:30',chip:['navy','已到校'],qty:3,total:'¥45.00',pay:'¥45.00',disc:false,meta:'款式：男生款　实付：¥45.00',done:4,onLabel:null,verify:true,no:'SS2026062641572089',created:'2026-06-26 08:30:19',paid:'2026-06-26 08:30:44',badge:{nm:'林晓乐',cls:'3年级-2班 · NO.0008',init:'乐',ph:OD_PH},cfgPhoto:true}),
 cancel:   Object.assign({},OD_KID,{date:'2026-06-20 14:11',chip:['gray','已取消'],qty:1,total:'¥15.00',pay:'¥15.00',unpaid:true,disc:false,meta:'款式：男生款　未支付 · 已取消',done:0,onLabel:null,verify:false,no:'SS2026062008473915',created:'2026-06-20 14:11:33',paid:'—（未支付，已取消）'}),
 /* 到校 7 天自动确认收货（已到校后家长既未人工确认收货、也未全部核验完结，到校满 7 天系统自动确认收货、整单转已完成；
    定时器不因部分枚已核验而终止，部分启用单同样适用——故列表内部分启用演示单的到校日期须落在 7 天窗内）：
    确认收货完结通道的被动形态，与家长手动确认互为补充；家长零操作被动完结，「已完成」行附注须写明触发事实——
    「到校满 7 天自动确认收货，本次办理完成」（PRD 16.8 已完成行附注承载「触发事实 + 完结语义」口径）；
    该单校徽仍为待核验，仍可在「我的校徽」扫码核验启用（枚级事实由该侧承载，已完结记录不再追加流转行），故不关联已启用徽、徽面缩略保持 NO.待分配 */
 autorecv: Object.assign({},OD_KID,{date:'2026-06-18 16:05',chip:['teal','已完成'],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,meta:'款式：男生款　实付：¥15.00',done:7,onLabel:null,verify:false,no:'SS2026061847291836',created:'2026-06-18 16:05:28',paid:'2026-06-18 16:05:51'}),
 /* 部分启用演示单：到校 07-06、首枚核验 07-07（昨天），到校满 7 天（07-13）前仍为部分启用；消息页「审核通过 / 已寄出 / 已启用」三条同指本单 */
 partial:  Object.assign({},OD_KID,{date:'2026-06-29 10:32',chip:['amber','部分启用 1/2'],qty:2,total:'¥30.00',pay:'¥30.00',disc:false,meta:'款式：男生款　实付：¥30.00',done:5,onLabel:'部分启用 1/2',verify:true,no:'SS2026062977203648',created:'2026-06-29 10:32:47',paid:'2026-06-29 10:33:02',badge:{nm:'林晓乐',cls:'3年级-2班 · NO.0003',init:'乐',ph:OD_PH}}),
 /* 已付款单取消办理（退款已到账）：退款到账与已取消同时刻分开两行落，订单在退款到账那一刻才转已取消——与运管全额退款（fullrf / prodrf）同一口径 */
 refunded: Object.assign({},OD_KID,{date:'2026-06-10 12:40',chip:['gray','已取消'],refunds:[{n:1,amt:15,done:true}],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,done:0,onLabel:null,verify:false,no:'SS2026061090241736',created:'2026-06-10 12:40:05',paid:'2026-06-10 12:40:18'}),
 /* 退款关闭（转线下退款）：已付款单待审核期间取消、渠道退款重试仍异常转人工（家长端不透出、停留退款中），
    人工判定无法原路退回后退款单置退款关闭转线下——家长端落「退款关闭」行附客服跟进统一文案（PRD 16.8 定版口径）。
    退款未成功即不关单：订单底层仍是待审核、chip 停留「退款中」，客服可再次发起退款，退款到账时才转已取消 */
 rfclosed: Object.assign({},OD_KID,{date:'2026-06-05 16:20',chip:['amber','待审核'],refunds:[{n:1,amt:15,done:false,closed:true}],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,done:1,onLabel:null,verify:false,no:'SS2026060527816490',created:'2026-06-05 16:20:08',paid:'2026-06-05 16:20:31'}),
 /* 运管全额退款（已寄出后学生转学离校，经客服核实由平台整单退款）：与部分退款同构的退款单中间节点——
    退款单创建时插「全额退款」行、订单保持原状态（已寄出）继续，微信退款成功回调时才转已取消——「退款到账」与「已取消」同时刻分开两行落，
    家长在退款到账前不会看到已取消；被退徽作废入黑名单（NO.0007），不出现在我的校徽 */
 fullrf:   Object.assign({},OD_KID,{date:'2026-05-28 10:15',chip:['gray','已取消'],refunds:[{n:1,amt:15,done:true}],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,done:0,onLabel:null,verify:false,no:'SS2026052834705921',created:'2026-05-28 10:15:21',paid:'2026-05-28 10:15:44',badge:{nm:'林晓乐',cls:'3年级-2班 · NO.0007',init:'乐',ph:OD_PH}}),
 /* 生产中被运管全额退款（制作环节发现无法完成，平台主动退款并关单）：与 fullrf（已寄出后退款）构成「附 / 不附作废停用说明」的对照——
    校徽尚未发出、家长手中无实体徽，被退枚由平台在发出前直接作废、不再寄出，故退款行不附作废停用说明（PRD 16.8 发起退款行按「校徽是否已发出」分两类）；
    退款到账时整单才转已取消，与 fullrf 同构；被退枚 NO.0011 作废入黑名单，从未发出、不出现在我的校徽 */
 prodrf:   Object.assign({},OD_KID,{date:'2026-05-18 09:20',chip:['gray','已取消'],refunds:[{n:1,amt:15,done:true}],qty:1,total:'¥15.00',pay:'¥15.00',disc:false,done:0,onLabel:null,verify:false,no:'SS2026051850613274',created:'2026-05-18 09:20:14',paid:'2026-05-18 09:20:37',badge:{nm:'林晓乐',cls:'3年级-2班 · NO.0011',init:'乐',ph:OD_PH}}),
 /* 运管部分退款（到校后 1 枚徽面瑕疵，客服核实由平台退该枚）：部分退款不改变记录主状态、不产生已取消——
    被退枚作废停用、退款由退款单承载（金额明细与列表摘要透出、流转记录插行），剩余枚全部启用后整单按枚级终态转已完成；
    保留启用的 NO.0004 即「我的校徽」Tab 的已停用徽（本单启用、6月20日 由家长停用），被退枚 NO.0006 作废不再出现 */
 /* 多次部分退款 · 一笔已到账一笔在途（3 枚增办，到校后两枚陆续检出瑕疵，平台分两次各退 1 枚，剩 1 枚待核验）：
    验证摘要聚合口径——两笔并列会拼成「¥15.00（1 枚）原路退回中 · 已退款 ¥15.00（1 枚）」，
    现按「在途优先、只报一段」聚合，摘要只显示在途那笔，已到账那笔见金额明细（两行）与流转（逐笔各两行）；
    累计已退 2 枚 < 本单 3 枚，未退完故 chip 不派生、主状态保持已到校，剩余 1 枚办理继续 */
 /* 到校 07-03，落在到校满 7 天自动确认窗内（07-10 前）——部分退款在途不冻结定时器，窗外的已到校单在演示时间 07-08 下本应已自动完结 */
 partrf2:  Object.assign({},OD_KID,{date:'2026-06-25 09:10',chip:['navy','已到校'],refunds:[{n:1,amt:15,done:true},{n:1,amt:15,done:false}],qty:3,total:'¥45.00',pay:'¥45.00',disc:false,done:4,onLabel:null,verify:false,no:'SS2026062536092817',created:'2026-06-25 09:10:24',paid:'2026-06-25 09:10:51'}),
 /* 运管部分退款「退款在途」态（已寄出后发现 1 枚制作瑕疵，平台退该枚，退款尚未到账）：与 partrf 构成在途 / 到账对照，
    也与全额退款的 refunding / refunded 对称——差别在 chip：全额退款时退款即这单唯一在跑的事，chip 派生「退款中」；
    部分退款主流程仍在推进（剩余枚要到校、要核验），chip 照常显示已寄出，退款进度只走列表摘要 + 金额明细 + 流转行三处 */
 partrfing:Object.assign({},OD_KID,{date:'2026-05-08 10:05',chip:['navy','已寄出'],refunds:[{n:1,amt:15,done:false}],qty:2,total:'¥30.00',pay:'¥30.00',disc:false,done:3,onLabel:null,verify:false,no:'SS2026050874261390',created:'2026-05-08 10:05:16',paid:'2026-05-08 10:05:39'}),
 partrf:   Object.assign({},OD_KID,{date:'2026-05-06 09:40',chip:['teal','已完成'],refunds:[{n:1,amt:15,done:true}],qty:2,total:'¥30.00',pay:'¥30.00',disc:false,done:7,onLabel:null,verify:false,no:'SS2026050623194085',created:'2026-05-06 09:40:12',paid:'2026-05-06 09:40:35',badge:{nm:'林晓乐',cls:'3年级-2班 · NO.0004',init:'乐',ph:OD_PH}}),
 /* 多次部分退款把枚退完 → 整单转已取消（2 枚增办，已寄出后两枚均检出瑕疵，平台分两次各退 1 枚）：
    退完 = 累计退款枚数覆盖本单全部枚，与一次性全额退款同一终点。此前只按「本次是否覆盖全部未退枚」判全额，
    本单会停在已完成——一枚有效徽都不剩、钱全退了却显示办完了。第二笔到账时才关单（退款成功才关单）；
    第二笔在途期间（05-15~05-16）chip 派生「退款中」、摘要为「已取消办理 · ¥15.00 原路退回中」，由 odChip / odRfMeta 覆盖 */
 partrfall:Object.assign({},OD_KID,{date:'2026-05-04 14:20',chip:['gray','已取消'],refunds:[{n:1,amt:15,done:true},{n:1,amt:15,done:true}],qty:2,total:'¥30.00',pay:'¥30.00',disc:false,done:0,onLabel:null,verify:false,no:'SS2026050418735204',created:'2026-05-04 14:20:33',paid:'2026-05-04 14:20:57'}),
 first:    Object.assign({},OD_KID,{date:'2026-04-10 08:30',chip:['teal','已完成'],qty:1,total:'¥15.00',pay:'¥0.00',disc:true,meta:'款式：男生款　实付：¥0.00',done:7,onLabel:null,verify:false,no:'SS2026041005538627',created:'2026-04-10 08:30:45',paid:'—（首张免费，无需支付）',badge:{nm:'林晓乐',cls:'3年级-2班 · NO.0001',init:'乐',ph:OD_PH}}),
 /* 零元退款（免费枚回收）归档单：2026-03 首张免费单生产中被回收关单——制作环节发现无法完成，平台回收免费枚（与 prodrf 的付费单全额退款关单构成免费 / 付费对照）。
    纯零元无资金动作：创建即生效、无到账等待期，「免费枚回收」行与「已取消」行同刻分开两行落（与退款到账 + 已取消同构）；
    节点名不叫「退款」——回收作废是处置本质、退款只是有金额时的形态，带「退款」会让家长等一笔不存在的钱；
    未发出故附注不带作废停用（已发出变体见运管端沈亦航单零元退款演示）；摘要走 odRfMeta 零元分支「免费枚已作废回收（1 枚）」、金额明细零元分组不出行。
    时间线设计：回收即释放首张免费额度，额度随后被 first 单（04-10）重新占用——林晓乐「首张免费额度已用」演示基准不动 */
 zerorf:   Object.assign({},OD_KID,{date:'2026-03-16 09:40',chip:['gray','已取消'],refunds:[{n:1,amt:0,done:true}],qty:1,total:'¥15.00',pay:'¥0.00',disc:true,done:0,onLabel:null,verify:false,no:'SS2026031628470359',created:'2026-03-16 09:40:21',paid:'—（首张免费，无需支付）'}),
 /* 已毕业孩子林晓晴的历史首枚免费单（2024年 提交、已完成）：办理记录为账号级订单史，毕业后保留只读、按时间倒序沉底；徽面与证件照用 photo-qing.jpg（与其毕业注销徽 NO.0005 徽面一致） */
 qing:     Object.assign({},OD_KID,{badge:{nm:'林晓晴',cls:'6年级-1班 · NO.0005',init:'晴',ph:'url(assets/photo-qing.jpg) center/cover no-repeat;color:transparent'},stu:{nm:'林晓晴',cls:'6年级-1班'},nm:'林晓晴 校徽',style:'女生款',date:'2024-09-02 10:12',chip:['teal','已完成'],qty:1,total:'¥15.00',pay:'¥0.00',disc:true,meta:'款式：女生款　实付：¥0.00',done:7,onLabel:null,verify:false,no:'SS2024090211849263',created:'2024-09-02 10:12:24',paid:'—（首张免费，无需支付）',noPhoto:false,stuPhoto:'photo-qing.jpg'})
};
const OD_LIST=['pay','review','reject','prod','refunding','partial','shipped','multi3','partrf2','arrived','cancel','autorecv','refunded','rfclosed','fullrf','prodrf','partrfing','partrf','partrfall','first','zerorf','qing'];
/* -------- 办理进度 · 轻量流转记录（隐藏的七态步进器区块的第一阶段轻量形态）：
   每次状态变更一行 [时间, 节点名, 基础附注, 当前状态行专属附注?]，正序存储、倒序展示；默认仅当前状态一行，可展开完整流转。
   第 4 位为「仅当前状态行显示」的预期口径文案（PRD 16.8：待支付 / 待审核 / 生产中 / 已寄出 / 已到校各行的预期口径转历史行后不保留），
   转历史行后自动回落到第 3 位的基础附注——预期口径只在该状态进行中才成立，留在历史行即是过期信息。
   同时刻多行（提交办理+待支付、支付成功+待审核、退款到账+已完成/已取消）按 PRD 落同一时间戳。 -------- */
const OD_FLOW={
 pay:      [['2026-07-08 09:15','提交办理'],['2026-07-08 09:15','待支付','','请在 30 分钟内完成支付，超时将自动取消']],
 review:   [['2026-07-06 11:05','提交办理'],['2026-07-06 11:05','支付成功','实付 ¥15.00'],['2026-07-06 11:05','待审核','','审核中，结果将以消息通知']],
 reject:   [['2026-07-05 15:12','提交办理'],['2026-07-05 15:12','支付成功','实付 ¥15.00'],['2026-07-05 15:12','待审核'],['2026-07-06 09:40','待修改信息','','请按审核意见修改后重新提交']],
 prod:     [['2026-07-02 10:20','提交办理'],['2026-07-02 10:20','支付成功','实付 ¥15.00'],['2026-07-02 10:20','待审核'],['2026-07-03 09:12','审核通过 · 生产中','','制作中，完成后统一寄送至学校（自提交起整体预计 20 个工作日）']],
 refunding:[['2026-07-01 18:25','提交办理'],['2026-07-01 18:25','支付成功','实付 ¥15.00'],['2026-07-01 18:25','待审核'],['2026-07-02 09:30','全额退款','已取消办理退款，实付 ¥15.00 将于 1–3 个工作日原路退回','已取消办理退款，实付 ¥15.00 将于 1–3 个工作日原路退回，到账后本次办理关闭']],
 shipped:  [['2026-06-28 15:30','提交办理'],['2026-06-28 15:30','支付成功','实付 ¥15.00'],['2026-06-28 15:30','待审核'],['2026-06-29 09:05','审核通过 · 生产中'],['2026-07-02 10:05','已寄出','','统一寄送至学校，到校后由班主任发放']],
 arrived:  [['2026-06-24 09:00','提交办理'],['2026-06-24 09:01','支付成功','实付 ¥15.00'],['2026-06-24 09:01','待审核'],['2026-06-25 08:50','审核通过 · 生产中'],['2026-06-28 14:20','已寄出'],['2026-07-03 08:40','已到校','','待班主任发放，领到实体徽后扫码核验启用']],
 multi3:   [['2026-06-26 08:30','提交办理'],['2026-06-26 08:30','支付成功','实付 ¥45.00'],['2026-06-26 08:30','待审核'],['2026-06-27 09:15','审核通过 · 生产中'],['2026-07-03 10:40','已寄出'],['2026-07-07 08:40','已到校','','待班主任发放，领到实体徽后扫码核验启用']],
 cancel:   [['2026-06-20 14:11','提交办理'],['2026-06-20 14:11','待支付'],['2026-06-20 14:41','已取消','超时未支付，已自动取消']],
 /* 到校满 7 天自动确认收货触发完结：家长端无独立「确认收货」行，触发事实并入「已完成」行附注（与手动确认收货同构，自动确认时刻＝到校时刻 +7 天） */
 autorecv: [['2026-06-18 16:05','提交办理'],['2026-06-18 16:05','支付成功','实付 ¥15.00'],['2026-06-18 16:05','待审核'],['2026-06-19 09:10','审核通过 · 生产中'],['2026-06-22 11:20','已寄出'],['2026-06-24 08:55','已到校'],['2026-07-01 08:55','已完成','到校满 7 天自动确认收货，本次办理完成']],
 partial:  [['2026-06-29 10:32','提交办理'],['2026-06-29 10:33','支付成功','实付 ¥30.00'],['2026-06-29 10:33','待审核'],['2026-06-30 09:10','审核通过 · 生产中'],['2026-07-02 15:40','已寄出'],['2026-07-06 08:55','已到校'],['2026-07-07 16:05','部分启用 1/2','NO.0003 已核验启用','NO.0003 已核验启用，剩余 1 枚待扫码核验']],
 refunded: [['2026-06-10 12:40','提交办理'],['2026-06-10 12:40','支付成功','实付 ¥15.00'],['2026-06-10 12:40','待审核'],['2026-06-11 10:20','全额退款','已取消办理退款，实付 ¥15.00 将于 1–3 个工作日原路退回'],['2026-06-12 15:20','退款到账','¥15.00 已原路退回'],['2026-06-12 15:20','已取消','本次办理已关闭']],
 /* 退款转人工期间（06-06 至 06-09）家长端不透出、停留退款中；置退款关闭转线下时才落「退款关闭」行 */
 rfclosed: [['2026-06-05 16:20','提交办理'],['2026-06-05 16:20','支付成功','实付 ¥15.00'],['2026-06-05 16:20','待审核'],['2026-06-06 10:10','全额退款','已取消办理退款，实付 ¥15.00 将于 1–3 个工作日原路退回'],['2026-06-09 11:30','退款关闭','无法原路退回至原支付账户，将由客服为您办理退款；客服将在 3 个工作日内与您联系']],
 fullrf:   [['2026-05-28 10:15','提交办理'],['2026-05-28 10:15','支付成功','实付 ¥15.00'],['2026-05-28 10:15','待审核'],['2026-05-29 09:10','审核通过 · 生产中'],['2026-06-03 11:20','已寄出'],['2026-06-05 14:30','全额退款','全额退款，校徽作废停用，¥15.00 将于 1–3 个工作日原路退回'],['2026-06-06 09:50','退款到账','¥15.00 已原路退回'],['2026-06-06 09:50','已取消','本次办理已关闭']],
 /* 生产中退款：退款行不附「校徽作废停用」（校徽未发出、家长手中无实体徽）——与 fullrf 的已寄出后退款对照 */
 prodrf:   [['2026-05-18 09:20','提交办理'],['2026-05-18 09:20','支付成功','实付 ¥15.00'],['2026-05-18 09:20','待审核'],['2026-05-19 08:50','审核通过 · 生产中'],['2026-05-21 15:40','全额退款','全额退款，¥15.00 将于 1–3 个工作日原路退回'],['2026-05-22 10:30','退款到账','¥15.00 已原路退回'],['2026-05-22 10:30','已取消','本次办理已关闭']],
 /* 多次部分退款（一笔已到账、一笔在途）：逐笔各落「部分退款」+「退款到账」两行——摘要聚合掉的信息在这里逐笔可溯。
    当前状态行附注补「本单累计退款 2 枚」（摘要只报在途 1 枚，累计口径由本行承载）与剩余枚去向 */
 partrf2:  [['2026-06-25 09:10','提交办理'],['2026-06-25 09:10','支付成功','实付 ¥45.00'],['2026-06-25 09:10','待审核'],['2026-06-26 08:40','审核通过 · 生产中'],['2026-06-30 10:20','已寄出'],['2026-07-03 08:45','已到校'],['2026-07-04 15:30','部分退款','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回'],['2026-07-05 10:15','退款到账','¥15.00 已原路退回'],['2026-07-07 14:20','部分退款','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回；本单累计退款 2 枚，剩余 1 枚办理继续，待扫码核验启用']],
 /* 部分退款在途：流转停在「部分退款」行，「退款到账」与整单完结行等到账回调才落（与 partrf 的到账后形态对照）。
    该行当前状态行专属附注补「剩余 1 枚办理继续」——回答家长看到 chip 仍是已寄出时的疑问，转历史行后剩余枚数已变、不保留 */
 partrfing:[['2026-05-08 10:05','提交办理'],['2026-05-08 10:05','支付成功','实付 ¥30.00'],['2026-05-08 10:05','待审核'],['2026-05-09 09:15','审核通过 · 生产中'],['2026-05-13 11:30','已寄出'],['2026-05-15 14:40','部分退款','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回；剩余 1 枚办理继续，到校后由班主任发放']],
 partrf:   [['2026-05-06 09:40','提交办理'],['2026-05-06 09:40','支付成功','实付 ¥30.00'],['2026-05-06 09:40','待审核'],['2026-05-07 09:05','审核通过 · 生产中'],['2026-05-12 10:30','已寄出'],['2026-05-15 08:50','已到校'],['2026-05-16 16:20','部分启用 1/2','NO.0004 已核验启用'],['2026-05-20 15:10','部分退款','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回'],['2026-05-21 10:05','退款到账','¥15.00 已原路退回'],['2026-05-21 10:05','已完成','本次办理完成']],
 /* 退完即关单：第二笔退款发起时预告关闭（当前状态行附注），到账时才落「退款到账」+「已取消」两行——
    与 fullrf / refunded 的一次性全额退款同构，只是退完由两笔累计达成 */
 partrfall:[['2026-05-04 14:20','提交办理'],['2026-05-04 14:20','支付成功','实付 ¥30.00'],['2026-05-04 14:20','待审核'],['2026-05-05 09:30','审核通过 · 生产中'],['2026-05-09 11:15','已寄出'],['2026-05-12 16:40','部分退款','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回'],['2026-05-13 10:20','退款到账','¥15.00 已原路退回'],['2026-05-15 15:05','部分退款','部分退款 1 枚，该枚作废停用，¥15.00 将于 1–3 个工作日原路退回；本单校徽已全部退款，到账后本次办理关闭'],['2026-05-16 09:40','退款到账','¥15.00 已原路退回，本单累计退款 ¥30.00（2 枚）'],['2026-05-16 09:40','已取消','本单校徽已全部退款，本次办理已关闭']],
 first:    [['2026-04-10 08:30','提交办理','首张免费，无需支付'],['2026-04-10 08:30','待审核'],['2026-04-11 09:00','审核通过 · 生产中'],['2026-04-14 10:35','已寄出'],['2026-04-17 08:45','已到校'],['2026-04-18 17:26','已完成','NO.0001 已核验启用，本次办理完成']],
 /* 零元回收：未发出附注不带作废停用；纯零元创建即生效，「免费枚回收」与「已取消」同刻两行落 */
 zerorf:   [['2026-03-16 09:40','提交办理','首张免费，无需支付'],['2026-03-16 09:40','待审核'],['2026-03-17 09:05','审核通过 · 生产中'],['2026-03-19 14:30','免费枚回收','免费枚回收 1 枚；免费办理无退款金额，首张免费额度已恢复'],['2026-03-19 14:30','已取消','本次办理已关闭']],
 /* 晓晴 2024 单为未开通办理审核学校的形态：待生产在家长端仍合并显示「待审核」，转生产中行同样显示「审核通过 · 生产中」——提交生产视为平台确认通过（展示层统一口径，审计不落审核通过事件） */
 qing:     [['2024-09-02 10:12','提交办理','首张免费，无需支付'],['2024-09-02 10:12','待审核'],['2024-09-03 09:20','审核通过 · 生产中'],['2024-09-07 11:10','已寄出'],['2024-09-09 08:35','已到校'],['2024-09-10 16:40','已完成','NO.0005 已核验启用，本次办理完成']]
};
Object.keys(OD_FLOW).forEach(k=>{OD_DATA[k].flow=OD_FLOW[k]});
/* 证件照校级开关（proto-nophoto）→ 办理记录：cfgPhoto 标记的记录（3 枚单 multi3，对应我的校徽 NO.0008–0010）视为配置切换后办理，
   开关开时无照片形态（徽面无照片位、详情不展示学生证件照），其余旧记录保留照片；与我的校徽 bd6–bd8 的照片位显隐同源 */
function odPhotoCfgSync(init){
  const off=photoReqOff();
  Object.keys(OD_DATA).forEach(k=>{const d=OD_DATA[k];if(!d.cfgPhoto)return;d.noPhoto=off;d.badge.ph=off?'none':OD_PH});
  if(init)return;   // 声明期只同步数据（odCur 等尚未声明），列表 / 详情由各自首次渲染读取
  if(document.getElementById('ap-od-list').children.length)apOrderRender();
  if(curScreen==='sc-order'&&OD_DATA[odCur]&&OD_DATA[odCur].cfgPhoto)odShow(odCur);
}
odPhotoCfgSync(true);
/* -------- 退款派生：一笔办理可多次退款，展示口径由退款单列表算出、不逐条写死文案 --------
   记录的 refunds = 退款单列表 [{n:枚数, amt:金额（元）, done:是否已到账, closed:是否退款关闭转线下}]。
   多次部分退款是既有业务形态（运管端存在可退枚即可再次发起、退款关闭后客服也可对本单重发），
   若摘要按笔并列会拼出「¥15.00（1 枚）原路退回中 · 已退款 ¥15.00（1 枚）」这类串，故聚合而非并列：
   摘要只报一段、金额明细最多两行、逐笔溯源交给办理进度流转行（每笔各落「部分退款」+「退款到账」两行，带时间与枚数）。
   全额退款不再是独立形态——它就是「一次退完」，与多次退完走同一套判定 */
/* 因退款关单的状态门槛，与运管端 admin-trade.html 的 RF_CANCEL_STS 同口径（待确认 / 待生产在家长端合并显示为待审核）：
   校徽发出前退完 = 这次办理没交付任何东西，退款到账即关单；已到校及之后退完不关单——
   徽已生产寄送发放甚至被核验启用过，说「已取消」不成立（这次办理确实发生了），退款是售后；
   末笔到账时单内已无待启用的未退枚的转「已完成」（到校后退完＝已交付、完结，与到校前退完转已取消构成对称边界）。
   已取消本身也计入门槛：关单后底层状态即已取消，摘要仍按关单形态表达。
   门槛按当前状态评估之所以稳定：整单退完在途期间主单流转冻结（见顶部状态口径注释），
   已寄出单不会在退款在途时被签收回调推进到已到校、把派生口径翻掉 */
const RF_CANCEL_STS=['待审核','待修改信息','生产中','已寄出','已取消'];
function odRfAgg(d){
  const L=d.refunds||[],amt=a=>a.reduce((s,r)=>s+r.amt,0),cnt=a=>a.reduce((s,r)=>s+r.n,0);
  const done=L.filter(r=>r.done),ing=L.filter(r=>!r.done);
  /* 退完 = 累计退款枚数覆盖本单全部枚（纯事实）。运管端同为累计口径（items.every(已退款)），
     跨批次成立——多次部分退款把枚退完与一次性全额退款同一终点 */
  const all=cnt(L)>=d.qty;
  return {any:!!L.length,
    done:done.length?{n:cnt(done),amt:amt(done)}:null,
    ing:ing.length?{n:cnt(ing),amt:amt(ing)}:null,
    closed:ing.some(r=>r.closed),
    all:all,
    /* 退完且在门槛内 → 这单因退款关闭：chip 让给「退款中」、摘要前半段转「已取消办理 / 已取消」 */
    closes:all&&RF_CANCEL_STS.includes(d.chip[1])};
}
function odYuan(v){return '¥'+v.toFixed(2)}
/* chip 派生：退完且退款未到账时主流程已终止、退款是这单唯一在跑的事，chip 让给「退款中」——
   不派生就会停在「待审核」，与家长刚做完的取消动作矛盾；未退完不派生（剩余枚仍要生产 / 寄送 / 核验，
   改成「退款中」会被读作整单停办）。筛选同口径：apOrderCard 的 data-st 取派生文案，退款中的单仅「全部」可见 */
function odChip(d){const a=odRfAgg(d);return (a.closes&&a.ing)?['amber','退款中']:d.chip}
/* 列表卡摘要的退款段：在途优先、只报一段——有在途时只说在途那笔（家长此刻唯一在等的钱），
   已到账的是既成事实，完整分账在金额明细卡；退完的单不报枚数（全退了报枚数无意义） */
function odRfMeta(d){
  const a=odRfAgg(d);if(!a.any)return d.meta;
  /* 前半段：因退款关单的单表达关单事实（此时枚数无意义、不报），否则保持实付口径并报枚数 */
  const base='款式：'+d.style+'　'+(a.closes?(a.ing?'已取消办理':'已取消'):'实付：'+d.pay);
  if(a.closed)return base+' · 原路退回失败，客服将与您联系';
  /* 零元分组（该组全为免费枚、无资金动作）不报金额，改述作废事实——「已退款 ¥0.00」既无信息量，
     又容易被读作退款失败；混合组（含付费枚）金额大于 0，按正常口径报金额与枚数 */
  const say=(g,ing)=>g.amt<=0?'免费枚已作废回收（'+g.n+' 枚）'
    :ing?odYuan(g.amt)+(a.closes?' 原路退回中':'（'+g.n+' 枚）原路退回中')
    :'已退款 '+odYuan(g.amt)+(a.closes?'':'（'+g.n+' 枚）');
  const seg=a.ing?say(a.ing,true):a.done?say(a.done,false):'';
  return seg?base+' · '+seg:base;
}
/* 金额明细退款行：按到账与否聚合成最多两行（已退款 / 退款中）。
   「全额」按分组自身是否覆盖整单判定，不按整单是否退完——多次退款退完的单在中间态会一行已到账一行在途，
   两行各只占一部分枚，都标「全额」是错的 */
/* 零元分组不出行：金额明细是账本，无资金变动的免费枚回收不影响账目，其事实由摘要与办理进度流转行承载 */
function odRfRows(d){
  const a=odRfAgg(d),u=g=>g.n>=d.qty?'（全额）':'（'+g.n+' 枚）';
  return [a.done&&a.done.amt>0?['已退款'+u(a.done)+'：','-'+odYuan(a.done.amt)]:null,
          a.ing&&a.ing.amt>0?['退款中'+u(a.ing)+'：','-'+odYuan(a.ing.amt)]:null].filter(Boolean);
}
let odFlowOpen=false;
/* 新提交记录（AP_LAST）无手工流转数据时按创建时间与当前状态兜底生成：提交办理与待支付 / 待审核同时刻两行（PRD 16.8），
   免费单提交行附「首张免费，无需支付」，当前状态行的预期口径落第 4 位（转历史行后不保留） */
function odFlowRows(d){
  if(d.flow)return d.flow;
  const t=d.created.slice(0,16),st=d.chip[1];
  const cur={'待支付':'请在 30 分钟内完成支付，超时将自动取消','待审核':'审核中，结果将以消息通知'}[st]||'';
  return d.flow=[[t,'提交办理',d.disc?'首张免费，无需支付':''],[t,st,'',cur]];
}
function odFlowRender(d){
  d=d||((odCur==='new'&&AP_LAST)?AP_LAST:(OD_DATA[odCur]||OD_DATA.partial));
  const rows=odFlowRows(d).slice().reverse();
  const list=odFlowOpen?rows:[rows[0]];
  /* 行第 4 位为「当前状态行专属附注」（PRD 16.8）：仅在该行是当前状态行时替换基础附注——
     如部分启用行的「剩余 N 枚待扫码核验」只在当前状态下成立，被下一枚顶为历史行后剩余数已变，只保留「NO.000X 已核验启用」 */
  const item=(r,i,last)=>{
    const note=(i===0&&r[3])?r[3]:r[2];
    return '<div style="display:flex;gap:10px">'
   +'<span style="display:flex;flex-direction:column;align-items:center;width:10px;flex-shrink:0"><i style="width:7px;height:7px;border-radius:50%;background:'+(i===0?'var(--navy)':'#C9D1DC')+';margin-top:5px"></i>'+(last?'':'<i style="flex:1;width:1px;background:#E5E9F0;margin-top:3px"></i>')+'</span>'
   +'<div style="padding-bottom:'+(last?'0':'11px')+';min-width:0"><div style="font-size:13px;font-weight:'+(i===0?'700':'500')+';color:'+(i===0?'var(--ink)':'var(--ink-2)')+'">'+r[1]+'<span class="muted" style="font-weight:400;font-size:11.5px;margin-left:8px">'+r[0]+'</span></div>'
   +(note?'<div class="muted" style="font-size:11.5px;margin-top:2px">'+note+'</div>':'')+'</div></div>';
  };
  document.getElementById('od-flow').innerHTML=
   '<div class="row" style="justify-content:space-between;align-items:center;margin-bottom:9px"><h4 style="margin:0">办理进度</h4>'
   +(rows.length>1?'<button style="background:none;border:none;font-size:12px;color:var(--ink-3);cursor:pointer;padding:0" onclick="odFlowToggle()">'+(odFlowOpen?'收起 ▴':'完整流转 ▾')+'</button>':'')+'</div>'
   +list.map((r,i)=>item(r,i,i===list.length-1)).join('');
}
function odFlowToggle(){odFlowOpen=!odFlowOpen;odFlowRender()}
let AP_LAST=null; /* applyPay 提交快照，供「记录详情」渲染新记录 */
let odCur='partial'; /* 当前详情页展示的记录 */
function odShow(which){
  odCur=which;
  const d=(which==='new'&&AP_LAST)?AP_LAST:(OD_DATA[which]||OD_DATA.partial);
  const bd=document.getElementById('od-badge');
  bd.innerHTML=badgeMini(d.badge.nm,d.badge.cls,d.badge.init,.175,d.badge.ph||null,'margin-top:18px');
  bd.querySelector('.qr').innerHTML=QR_SVG;
  document.getElementById('od-nm').textContent=d.nm;
  document.getElementById('od-style').textContent=d.style;
  document.getElementById('od-qty').textContent='x'+d.qty;
  const chip=document.getElementById('od-chip'),dc=odChip(d);
  chip.className='chip '+dc[0];chip.textContent=dc[1];
  /* 审核意见横幅：仅审核未通过记录显示 */
  document.getElementById('od-reject').style.display=d.reason?'':'none';
  if(d.reason)document.getElementById('od-reject-txt').textContent=d.reason;
  const L=['待支付','待审核','生产中','已寄出','已到校','部分启用','已完成'];
  document.getElementById('od-steps').innerHTML=L.map((t,i)=>{
    const cls=i<d.done?'ostep done':(i===d.done?'ostep on':'ostep');
    const dot=i<d.done?'✓':(i+1);
    const label=(i===d.done&&d.onLabel)?d.onLabel:t;
    return '<span class="'+cls+'"><span class="dot2">'+dot+'</span>'+label+'</span>';
  }).join('<span class="ln"></span>');
  document.getElementById('od-verify').style.display=d.verify?'':'none';
  document.getElementById('od-stu-nm').textContent=d.stu.nm;
  document.getElementById('od-stu-cls').textContent=d.stu.cls;
  document.getElementById('od-amt-total').textContent=d.total;
  document.getElementById('od-amt-disc').style.display=d.disc?'':'none';
  /* 退款行：实付金额保持原支付口径，退款按到账与否聚合成最多两行单独落 */
  document.getElementById('od-amt-refunds').innerHTML=odRfRows(d).map(r=>
    '<div class="kv" style="justify-content:flex-end;align-items:center"><span class="k" style="width:auto">'+r[0]
    +'</span><span class="v" style="flex:none;font-weight:700;color:var(--cinnabar)">'+r[1]+'</span></div>').join('');
  document.getElementById('od-no').textContent=d.no;
  document.getElementById('od-created').textContent=d.created;
  document.getElementById('od-paid').textContent=d.paid;
  /* 待支付形态：顶部倒计时 + 底部去支付/取消办理 + 需付款红字，隐藏支付时间与手机 */
  const isPay=!!d.due,unpaid=!!d.unpaid;
  document.getElementById('od-payban').style.display=isPay?'':'none';
  if(isPay)odCdStart();else clearInterval(odCd);
  document.getElementById('od-payfoot').style.display=isPay?'':'none';
  if(isPay)document.getElementById('od-payfoot-btn').textContent='去支付 '+d.due;
  const payV=document.getElementById('od-amt-pay'),payL=document.getElementById('od-amt-paylabel');
  payL.textContent=isPay?'需付款：':(unpaid?'应付款：':'实付金额：');
  payV.textContent=isPay?d.due:d.pay;
  payV.style.color=isPay?'var(--cinnabar)':'';
  payL.style.color=isPay?'var(--cinnabar)':'';
  /* 未发生实际支付的记录（待支付 / 已取消 / 免费 / 审核通过后支付）不展示支付时间与手机 */
  const noPaid=String(d.paid||'').startsWith('—');
  document.getElementById('od-paid-row').style.display=noPaid?'none':'';
  document.getElementById('od-phone-row').style.display=noPaid?'none':'';
  /* 无需证件照形态提交的记录：不展示学生证件照；有照片记录按提交时上传的照片展示 */
  document.getElementById('od-photo').style.display=d.noPhoto?'none':'';
  document.querySelector('#od-photo img').src='assets/'+(d.stuPhoto||'photo-upload.jpg');
  /* 待审核记录：底部提供修改信息入口（无照片记录无可改项、不提供）；免费单与已付款单统一「取消办理」——
     已付款单取消后实付金额原路退回（退款单承载进度），不再单设「申请退款」入口 */
  /* 按派生 chip 判断：退款在途的单底层虽仍是待审核，但办理已终止，不再提供取消 / 修改入口 */
  const isReview=dc&&(dc[1]==='待审核'||dc[1]==='待修改信息');
  document.getElementById('od-editfoot').style.display=isReview?'':'none';
  document.getElementById('od-editfoot-cancel').style.display=isReview?'':'none';
  document.getElementById('od-editfoot-edit').style.display=(isReview&&!d.noPhoto)?'':'none';
  /* 已寄出 / 已到校：底部提供「确认收货」，确认收到实体徽后整单转已完成（部分启用不提供：收货事实已由扫码证明） */
  document.getElementById('od-recvfoot').style.display=odCanRecv(d)?'':'none';
  /* 办理进度：轻量流转记录，进入详情默认收起为当前状态一行 */
  odFlowOpen=false;odFlowRender(d);
  go('sc-order');
}
/* 办理记录列表：由 OD_DATA 渲染，每种状态各一条演示记录 */
const OD_STC={amber:'#C97A12',navy:'var(--navy)',teal:'var(--teal)',gray:'var(--ink-3)'};
function apOrderCard(k){
  const d=OD_DATA[k],dc=odChip(d);
  /* 列表卡状态统一为纯文字：待支付不在列表透出剩余支付时间，倒计时仅在记录详情页展示 */
  const st='<span class="od-st" style="font-size:12px;color:'+OD_STC[dc[0]]+'">'+dc[1]+'</span>';
  const btns=(d.due?'<button class="btn ghost sm" onclick="wxPay(\''+k+'\')">去支付</button>':'')
    +((dc[1]==='待审核'||dc[1]==='待修改信息')&&!d.noPhoto?'<button class="btn ghost sm" onclick="applyEdit(\''+d.stu.nm+'\')">修改信息</button>':'')
    +(odCanRecv(d)?'<button class="btn ghost sm" onclick="odRecvSheet(\''+k+'\')">确认收货</button>':'')
    +'<button class="btn ghost sm" onclick="odShow(\''+k+'\')">记录详情</button>';
  /* data-st = 卡上展示状态（odChip 派生口径），供状态筛选使用：家长只认得卡上的标签，与 chip 同口径后
     点「待审核」不再出现已取消办理的退款中单——该类单不单设筛选 chip，经「全部」查看 */
  return '<div class="card" data-st="'+dc[1]+'">'
    +'<div class="row" style="justify-content:space-between"><h4>'+d.date+'</h4>'+st+'</div>'
    +'<div class="hr" style="margin:9px 0"></div>'
    +'<div class="row" style="align-items:flex-start">'
    +'<div class="badge-thumb" style="width:56px;height:56px">'+badgeMini(d.badge.nm,d.badge.cls,d.badge.init,.175,d.badge.ph||null,'margin-top:18px')+'</div>'
    +'<div style="flex:1"><div style="font-size:14px;font-weight:600">'+d.nm+'</div>'
    +'<div class="muted" style="margin-top:3px">'+odRfMeta(d)+'</div></div>'
    +'<span class="muted">x'+d.qty+'</span></div>'
    +'<div class="row" style="justify-content:flex-end;gap:8px;margin-top:11px">'+btns+'</div></div>';
}
/* 办理记录状态筛选：横向滑动 chip 条，点选过滤 */
let odFilter='all';
/* 退款中/已退款不是记录状态（由退款单承载），筛选条不设「退款中」chip——瞬态、单账号同时至多一两条，
   按时间倒序在「全部」顶部即可见；退款到账关单后归入「已取消」 */
const OD_STATES=['待支付','待审核','待修改信息','生产中','已寄出','已到校','部分启用','已完成','已取消'];
function apOrderRender(){
  const el=document.getElementById('ap-od-list');
  /* 第一阶段隐藏：stage2 标记的记录（待修改信息单）不进列表——状态后续阶段实现，记录详情经演示说明预览入口查看 */
  el.innerHTML=OD_LIST.filter(k=>!OD_DATA[k].stage2).map(apOrderCard).join('');
  el.querySelectorAll('.id-badge .qr').forEach(e=>e.innerHTML=QR_SVG);
}
(function(){
  apOrderRender();
  /* 第一阶段隐藏：「待修改信息」筛选 chip（状态后续阶段实现，恢复方式：移除下方 filter） */
  document.getElementById('od-fchips').innerHTML=OD_STATES
    .filter(v=>v!=='待修改信息')
    .map(v=>'<button class="fchip" onclick="odFilterPick(\''+v+'\',this)">'+v+'</button>').join('');
})();
/* 取消办理：二次确认半屏（演示数据，刷新恢复），列表与详情实时流转。三种形态：
   待支付单与免费单未扣款、无款可退，取消即转已取消（整单关闭）；
   已付款待审核单取消只发起退款、不即时关单——记录转展示层「退款中」，退款到账回调时才转已取消（PRD 6.7 状态机：退款成功才关单）；
   竞态兜底：确认瞬间订单已进入生产的，取消失败、办理继续（消息中心有对应演示通知） */
function odCancelPaid(d){return !d.due&&!String(d.paid||'').startsWith('—')&&parseFloat(String(d.pay).replace('¥',''))>0}
function odCancelSheet(){
  const d=(odCur==='new'&&AP_LAST)?AP_LAST:(OD_DATA[odCur]||OD_DATA.pay);
  showSheet('<h3>取消办理</h3>'
   +'<div class="desc">'+(odCancelPaid(d)
     ?'取消后本次办理终止，实付金额将于 1–3 个工作日原路退回；如需继续为孩子办理校徽，可随时重新提交。确定取消吗？'
     :'取消后本次办理不再保留；如需继续为孩子办理校徽，可随时重新提交。确定取消吗？')+'</div>'
   +'<button class="btn red blk" style="margin-bottom:9px" onclick="odCancelDo()">确认取消办理</button>'
   +'<button class="btn ghost blk" onclick="closeSheet()">再想想</button>');
}
function odCancelDo(){
  const d=(odCur==='new'&&AP_LAST)?AP_LAST:(OD_DATA[odCur]||OD_DATA.pay);
  const paid=odCancelPaid(d);           /* 已付款待审核单：取消只发起退款，退款到账才关单 */
  const free=!paid&&!!d.disc&&!d.due;   /* 免费单：无应付金额 */
  d.reason=null;                        /* 待修改信息单取消后办理终止，审核意见横幅随之收起 */
  if(paid){
    /* 底层订单状态仍是待审核，退完且未到账故 odChip 派生「退款中」（筛选与 chip 同口径）、odRfMeta 派生摘要；
       不落「已取消」行，该行由退款到账回调时补落 */
    d.refunds=[{n:d.qty,amt:parseFloat(String(d.pay).replace('¥','')),done:false}];d.done=1;
    odFlowRows(d).push(['2026-07-08 17:05','全额退款','已取消办理退款，实付 '+d.pay+' 将于 1–3 个工作日原路退回','已取消办理退款，实付 '+d.pay+' 将于 1–3 个工作日原路退回，到账后本次办理关闭']);
  }else{
    d.unpaid=!free;
    if(!free)d.pay=d.due||d.pay;
    d.chip=['gray','已取消'];d.due=null;
    d.paid=free?'—（首张免费，已取消）':'—（未支付，已取消）';
    d.meta='款式：'+d.style+(free?'　已取消':'　未支付 · 已取消');d.done=0;
    odFlowRows(d).push(['2026-07-08 17:05','已取消',free?'已取消办理（首张免费，未产生扣款）':'已取消办理，未支付不产生扣款']);
  }
  closeSheet();
  odShow(odCur);
  if(odCur==='new'&&AP_LAST){
    if(paid)apNewStRender('退款中','#C97A12');
    else apNewStRender('已取消','var(--ink-3)');
    document.getElementById('ap-od-meta').textContent=odRfMeta(d);
    /* 终态卡片收起操作入口 */
    document.getElementById('ap-od-pay').style.display='none';
    document.getElementById('ap-od-edit').style.display='none';
    /* 取消即释放该孩子的在途办理单额度，呼应「可随时重新办理」 */
    if(AP_LAST.kid&&AP_KIDS[AP_LAST.kid])AP_KIDS[AP_LAST.kid].submitted=false;
  }else{apOrderRender();}
  odApplyFilter();
  if(paid)pAlert('已取消办理','实付金额将于 1–3 个工作日原路退回。');else toast('已取消办理');
}
/* -------- 确认收货：已寄出 / 已到校的记录提供（按派生 chip 判断）。部分启用的记录不提供——家长已扫码核验过至少一枚，
   收货事实已由扫码证明，此时待办是核验剩余枚而非确认收货；其完结出口为末枚核验或到校满 7 天自动确认。
   家长确认已收到本次办理的实体校徽后整单转「已完成」——家长主动完结通道，与全部枚扫码核验的自动完结互为补充；
   尚未核验的徽不受影响，仍可在「我的校徽」逐枚扫码核验启用（枚级启用事实由该侧承载，已完结记录不再回退状态）。
   列表卡与详情页底部为同一动作，二次确认半屏后实时流转列表与详情（演示数据，刷新恢复） -------- */
/* 确认收货入口判定：已寄出 / 已到校可确认。整单退完且退款在途的单收起——单内所有徽已 / 将作废、
   班主任不会发放，家长无货可确认，人工确认与 7 天自动确认同属确认收货完结通道、须一并挂起（完结统一由末笔退款到账驱动）；
   已寄出整单退完在途因 chip 派生「退款中」天然不命中，本判定补的是已到校不派生 chip 的缺口。
   部分退款在途不收起：剩余枚真实要收货（partrfing 单），与「部分退款在途不冻结」同构 */
function odCanRecv(d){const a=odRfAgg(d);if(a.all&&a.ing)return false;const st=odChip(d)[1];return st==='已寄出'||st==='已到校'}
let odRecvKey=null; /* 待确认收货的记录：列表卡传 key、详情页底部取当前记录 */
function odRecvSheet(k){
  odRecvKey=k||odCur;
  showSheet('<h3>确认收货</h3>'
   +'<div class="desc">确认已收到本次办理的全部实体校徽吗？确认后本次办理完成。</div>'
   +'<button class="btn pri blk" style="margin-bottom:9px" onclick="odRecvDo()">确认收货</button>'
   +'<button class="btn ghost blk" onclick="closeSheet()">再想想</button>');
}
function odRecvDo(){
  const k=odRecvKey||odCur,d=(k==='new'&&AP_LAST)?AP_LAST:(OD_DATA[k]||OD_DATA.partial);
  d.chip=['teal','已完成'];d.onLabel=null;d.done=7;
  odFlowRows(d).push(['2026-07-08 17:05','已完成','家长确认收货，本次办理完成']);
  closeSheet();
  apOrderRender();odApplyFilter();
  if(curScreen==='sc-order')odShow(k);
  toast('已确认收货');
}
function odFilterPick(v,el){
  odFilter=v;
  document.querySelectorAll('#od-fbar .fchip').forEach(c=>c.classList.toggle('on',c===el));
  odApplyFilter();
}
/* 演示：办理记录空态预览（模拟从未办理过校徽的账号），会话内生效、再点恢复 */
let odEmptyOn=false;
function odEmptyToggle(){
  odEmptyOn=!odEmptyOn;
  if(curScreen!=='sc-apply')go('sc-apply');
  applyTab('order');
  odApplyFilter();
  demoToast(odEmptyOn?'已模拟空数据：该账号还没有办理记录':'已恢复办理记录演示数据');
}
function odApplyFilter(){
  let shown=0;
  const neworder=document.getElementById('ap-neworder');
  const cards=[...document.querySelectorAll('#ap-od-list > .card')];
  if(neworder.dataset.shown==='1')cards.unshift(neworder);
  cards.forEach(c=>{
    /* 按卡上展示状态筛选（data-st 即 odChip 派生文案，缺省回落卡上展示文案）：退款中的单既不归入「待审核」也无专属 chip，仅「全部」可见 */
    const label=c.dataset.st||c.querySelector('.od-st').textContent;
    const ok=!odEmptyOn&&(odFilter==='all'||label.indexOf(odFilter)===0);
    c.style.display=ok?'':'none';if(ok)shown++;
  });
  document.getElementById('od-more').style.display=shown?'':'none';
  document.getElementById('od-empty').style.display=shown?'none':'';
  /* 空态形态按当前筛选切换：「全部」= 全量空态（引导去办理），具体状态 = 该状态无记录提示 */
  const all=odFilter==='all';
  document.getElementById('od-empty-all').style.display=all?'':'none';
  document.getElementById('od-empty-st').style.display=all?'none':'';
}
/* 模拟微信支付：加载浮层 → 收银台 → 6 位密码 → 支付成功流转待审核 */
function payokShow(o){
  if(typeof o==='string')o={mode:'paid',amt:o};
  const paid=o.mode==='paid';
  document.getElementById('payok-hd').textContent=paid?'支付结果':'提交结果';
  document.getElementById('payok-title').textContent=paid?'支付成功':'提交成功';
  document.getElementById('payok-amt').style.display=paid?'':'none';
  if(paid)document.getElementById('payok-amt-v').textContent=String(o.amt).replace('¥','');
  document.getElementById('payok-free').style.display=o.mode==='free'?'':'none';
  /* 第二按钮随账号状态分流：零绑定新用户没有首页可回，「返回首页」名不副实——改「完成」落未匹配承接页 */
  const hb=document.getElementById('payok-home');
  if(apNewUser){hb.textContent='完成';hb.onclick=payokDoneNew}
  else{hb.textContent='返回首页';hb.onclick=()=>goTab('sc-home')}
  go('sc-payok');
}
/* 新用户变体「完成」落点：把本会话新用户提交的审核中孩子以状态卡写入未匹配承接页（入口位置逐条展示、入口隐藏，与该页展示层多条口径一致），再落该页 */
function payokDoneNew(){
  const anchor=document.getElementById('nochild-apply');
  let inserted=false;
  Object.keys(AP_KIDS).filter(x=>/^pend\d+$/.test(x)).forEach(x=>{
    const k=AP_KIDS[x];
    if(!k.nu||k.carded)return;
    k.carded=true;
    const cell=document.createElement('div');
    cell.className='cell';
    /* 状态卡可点开申请详情（进度 + 撤回），与孩子管理页审核中条目同一半屏 */
    cell.id='pend-nc-'+k.paId;
    cell.style.cursor='pointer';
    cell.setAttribute('onclick',"pendDetail('"+k.paId+"')");
    cell.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url('+(k.av||'assets/avatar-boy.png')+') center/cover no-repeat #EAF3FF"></span>'
      +'<span style="flex:1"><span style="display:block">'+k.nm+'</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">'+(k.sch?k.sch+' · ':'')+k.cls+' · 班主任审核后以消息通知结果</span></span>'
      +'<span class="chip amber" style="margin-right:6px">审核中</span><span class="arr">›</span>';
    anchor.parentNode.appendChild(cell);   /* 追加到入口之后而非之前：入口有状态卡时始终隐藏，隐藏节点若留在末位会让最后一张卡失去 .cell:last-child 去底线 */
    inserted=true;
  });
  /* 存在在途申请时不再展示「提交人工申请」兜底入口——申请已在途、入口使命完成（一个入口一次提交），
     补充孩子走办理页链路；撤回最后一条在途申请后恢复显示（pendRevokeDo）；演示数据，刷新恢复 */
  if(inserted)anchor.style.display='none';
  go('sc-nochild');
}
let wxDigits=0,wxBusy=false,wxCur=null,wxOnOk=null,wxOnClose=null;
function wxPayStart(amt,onOk,onClose){
  wxOnOk=onOk;wxOnClose=onClose||null;
  document.getElementById('wx-amt-v').textContent=String(amt).replace('¥','');
  document.getElementById('wxload-t').textContent='微信支付';
  document.getElementById('wxload-dots').style.display='';
  document.getElementById('wxload-ic').style.display='';
  const ld=document.getElementById('wxload');
  ld.classList.add('show');
  setTimeout(()=>{
    ld.classList.remove('show');
    wxDigits=0;wxBusy=false;wxRender();
    document.getElementById('wxpay').classList.add('show');
  },900);
}
function wxPay(which){
  wxCur=which||odCur;
  const d=(wxCur==='new'&&AP_LAST)?AP_LAST:(OD_DATA[wxCur]||OD_DATA.pay);
  if(!d.due)return;
  wxPayStart(d.due,()=>{
    const amt=d.due;
    d.pay=amt;d.due=null;d.unpaid=false;
    d.chip=['amber','待审核'];d.done=1;
    d.paid='2026-07-08 17:05:32';d.meta='款式：'+d.style+'　实付：'+amt;
    /* PRD 16.8：支付成功的单不展示「待支付」行——该行仅在待支付期间存在，超时取消时才作为历史行保留 */
    const rows=odFlowRows(d),ip=rows.findIndex(r=>r[1]==='待支付');
    if(ip>=0)rows.splice(ip,1);
    rows.push(['2026-07-08 17:05','支付成功','实付 '+amt],['2026-07-08 17:05','待审核','','审核中，结果将以消息通知']);
    if(wxCur==='new'&&AP_LAST){
      apNewStRender('待审核');
      document.getElementById('ap-od-meta').textContent=d.meta;
      /* 待支付 → 待审核：去支付入口收起，修改信息入口按有无证件照恢复 */
      document.getElementById('ap-od-pay').style.display='none';
      document.getElementById('ap-od-edit').style.display=d.noPhoto?'none':'';
    }else{apOrderRender();}
    odApplyFilter();
    payokShow(amt);
  },()=>{
    pAlert('订单已保留','订单保留为「待支付」，可在办理记录中随时去支付；超时将自动取消。');
  });
}
function wxRender(){document.querySelectorAll('#wx-pwd i').forEach((b,i)=>b.classList.toggle('f',i<wxDigits))}
function wxKey(k){
  if(wxBusy)return;
  if(k==='del'){wxDigits=Math.max(0,wxDigits-1);wxRender();return}
  wxDigits=Math.min(6,wxDigits+1);wxRender();
  if(wxDigits===6){wxBusy=true;setTimeout(wxDone,450)}
}
function wxClose(){
  if(wxBusy)return;
  document.getElementById('wxpay').classList.remove('show');
  /* 未支付关闭收银台：订单保留待支付（支付与下单解耦），回调方提示续付出路 */
  if(wxOnClose){const f=wxOnClose;wxOnClose=null;wxOnOk=null;f()}
}
function wxDone(){
  document.getElementById('wxpay').classList.remove('show');
  /* 成功浮层：√ 支付成功 */
  document.getElementById('wxload-t').textContent='支付成功';
  document.getElementById('wxload-dots').style.display='none';
  const ld=document.getElementById('wxload');
  ld.classList.add('show');
  setTimeout(()=>{
    ld.classList.remove('show');wxBusy=false;wxOnClose=null;
    if(wxOnOk){const f=wxOnOk;wxOnOk=null;f()}
  },800);
}
/* 待支付详情倒计时：每次进入从 28:00 起倒数（演示） */
let odCd=null;
function odCdStart(){
  clearInterval(odCd);
  let t=28*60;
  const el=document.getElementById('od-payban-t');
  const fmt=()=>{el.textContent=String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0')};
  fmt();
  odCd=setInterval(()=>{t>0?(t--,fmt()):clearInterval(odCd)},1000);
}
function applyPay(){
  const k=AP_KIDS[apKid],pay=Math.max(0,15*apQty-(k.free?15:0));
  /* 印前确认：责任分界 + 定制商品不退两项勾选，未勾全拦截（PRD 12.4）；默认不勾选，确认勾选随单落快照（拒退纠纷凭证）；免费单同样适用。
     区块当前随 #pay-cks 第一阶段隐藏，校验按可见性判定——恢复显示即自动恢复拦截 */
  const payCks=document.getElementById('pay-cks');
  if(payCks&&payCks.style.display!=='none'&&payCks.querySelectorAll('.box.on').length<2){toast('请先勾选两项确认');return}
  /* 跨家长待支付单：另一位家长创建的单不承接续付（微信 prepay_id 绑定建单人、不可代付）——半屏拦截，
     引导由建单家长完成支付（PRD 12.4 跨家长口径）；先于本人续接防重判断 */
  if(crossPend&&crossPend.kid===apKid){closeSheet();crossPaySheet(k);return}
  /* 同孩子已有本人创建的待支付订单：不重复建单，直接续接该单支付（待支付单防重）；停留当前页拉起收银台 */
  if(AP_LAST&&AP_LAST.due&&AP_LAST.kid===apKid){
    closeSheet();
    toast('已为您续接待支付订单');
    wxPay('new');
    return;
  }
  /* 点击「支付办理」即创建订单：付费单先以「待支付」落办理记录、再拉起收银台（真实实现中微信统一下单需先有商户订单号）；
     关闭收银台订单保留待支付、可从记录「去支付」续付；¥0 免费单直接落待审核 */
  applyPayDone(k,pay);
  if(pay>0)wxPay('new');
}
/* 跨家长待支付拦截半屏：透出建单家长与剩余支付时间，出口仅「知道了」——由建单家长完成支付，或待原单超时自动取消后再重新办理 */
function crossPaySheet(k){
  showSheet('<h3>该孩子已有待支付订单</h3>'+
   '<div class="desc">'+crossPend.by+'已为 '+k.nm+' 提交校徽办理，订单待支付、剩余 '+crossPend.left+'，超时将自动取消。请 TA 完成支付。</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">知道了</button>');
}
/* 新订单卡状态标签：纯文字（与列表演示卡同款式），待支付不透出剩余支付时间；
   展示文案同步写入卡片 data-st 供状态筛选使用（与列表卡的 odChip 派生口径一致） */
function apNewStRender(txt,color){
  const st=document.getElementById('ap-od-st');
  st.style.cssText='font-size:12px;color:'+(color||'#C97A12');
  st.textContent=txt;
  document.getElementById('ap-neworder').dataset.st=txt;
}
function applyPayDone(k,pay){
  if(k.pending)k.submitted=true;   // 审核期在途办理单按孩子限 1 张：创建订单即占用额度
  /* 记录详情快照：本次提交的孩子 / 数量 / 款式 / 金额 / 状态 */
  /* 无需证件照形态提交的记录：徽面无照片位、不提供修改信息入口（姓名班级以名册为准，无照片可改）；
     有照片形态：徽面按提交时上传的证件照渲染 */
  const noPhoto=photoReqOff();
  const bdPh=noPhoto?'none':(apFormPhoto?'url(assets/'+apFormPhoto+') center/cover no-repeat;color:transparent':null);
  const isPay=pay>0;
  AP_LAST={nm:k.nm+' 校徽',style:apStyle,qty:apQty,total:'¥'+(15*apQty).toFixed(2),pay:'¥'+pay.toFixed(2),disc:k.free,kid:apKid,
    badge:{nm:k.nm,cls:k.cls+' · NO.待分配',init:k.init,ph:bdPh},noPhoto:noPhoto,stuPhoto:apFormPhoto,
    stu:{nm:k.nm,cls:k.cls},
    chip:['amber',isPay?'待支付':'待审核'],done:isPay?0:1,onLabel:null,verify:false,pending:!!k.pending,
    no:'SS2026070920163854',created:'2026-07-09 14:22:54',
    due:isPay?'¥'+pay.toFixed(2):null,
    paid:isPay?'—（待支付）':'—（首张免费，无需支付）',
    flow:isPay
      ?[['2026-07-09 14:22','提交办理'],['2026-07-09 14:22','待支付','请在 30 分钟内完成支付，超时将自动取消']]
      :[['2026-07-09 14:22','提交办理','首张免费，无需支付'],['2026-07-09 14:22','待审核','审核中，结果将以消息通知']]};
  /* 订单缩略图：迷你校徽卡按下单孩子重渲染（56 正方形容器内垂直居中） */
  const od=document.getElementById('ap-od-init');
  od.innerHTML=badgeMini(k.nm,k.cls,k.init,.175,bdPh,'margin-top:18px');
  od.querySelector('.qr').innerHTML=QR_SVG;
  /* 待支付形态：卡上「去支付」，修改信息为待审核操作、支付成功后按有无证件照恢复 */
  document.getElementById('ap-od-pay').style.display=isPay?'':'none';
  document.getElementById('ap-od-edit').style.display=(isPay||noPhoto)?'none':'';
  apNewStRender(isPay?'待支付':'待审核');
  document.getElementById('ap-od-nm').textContent=k.nm+' 校徽';
  document.getElementById('ap-od-meta').textContent='款式：'+apStyle+(isPay?'　应付：¥'+pay.toFixed(2):'　实付：¥'+pay.toFixed(2));
  document.getElementById('ap-od-qty').textContent='x'+apQty;
  const note=document.getElementById('ap-od-note');
  if(k.pending){note.textContent='身份审核中：审核通过后记录自动进入后续流程';note.style.display=''}
  else{note.textContent='';note.style.display='none'}
  const nw=document.getElementById('ap-neworder');
  nw.style.display='';nw.dataset.shown='1';
  document.getElementById('ap-mine-transit').style.display='';
  odApplyFilter();
  closeSheet();
  /* 付费单停留当前页（校徽办理）拉起收银台，不跳转办理记录——关闭收银台仍在本页，订单已静默落记录；
     支付结果页在收银台支付成功后展示（wxPay 回调）。¥0 免费单直接落提交结果页，返回时展示办理记录 */
  if(!isPay){applyTab('order');payokShow({mode:'free'})}
}
/* 演示：模拟班主任审核通过——作用于最近一次经「添加孩子」提交的审核中孩子（静态演示的林晓冬不参与流转），
   chip 转正；办理记录已正常支付、保持待审核继续流转，仅备注随身份转正更新 */
function pendingApprove(key0){   /* key0：老师端回传结果时指定的孩子；缺省取最近一次提交的 */
  const keys=Object.keys(AP_KIDS).filter(x=>/^pend\d+$/.test(x)&&AP_KIDS[x].pending);
  const key=key0||keys[keys.length-1];
  const k=key?AP_KIDS[key]:null,chip=key?document.getElementById('ap-kid-'+key):null;
  if(!k||!chip){demoToast('当前没有可流转的审核中孩子：请先经「添加孩子」提交人工申请（常驻演示的林晓冬不参与流转）');return}
  k.pending=false;
  /* 审核通过即绑定生效：移出在途申请表并转入已绑定孩子表——此后再添加同一份信息由重复添加拦截（dupKidSheet）承接，
     不再落在途申请拦截；孩子管理页若有对应审核中条目一并清理 */
  if(k.paId){
    const pi=PEND_APPLIES.findIndex(p=>p.id===k.paId);
    if(pi>=0){APPROVED_KIDS.push(PEND_APPLIES[pi]);PEND_APPLIES.splice(pi,1);pendSync()}
    const kc=document.getElementById('pend-kid-'+k.paId);if(kc)kc.remove();
  }
  chip.className='fchip'+(chip.classList.contains('on')?' on':'');
  chip.textContent=k.nm;
  if(document.getElementById('ap-neworder').style.display!=='none'&&AP_LAST&&AP_LAST.pending){
    /* 记录保持原状态继续流转：身份转正只更新备注，不发生状态回流（待支付单提示完成支付） */
    AP_LAST.pending=false;
    const note=document.getElementById('ap-od-note');
    note.textContent=AP_LAST.due
      ?'身份审核通过，信息与名册一致；请尽快完成支付进入学校审核'
      :'身份审核通过，信息与名册一致；待学校审核后统一制作';
    note.style.display='';
    odApplyFilter();
  }
  toast(k.nm+' 绑定已生效');
}
function payOrder(){
  if(document.querySelectorAll('#sc-preview .box.on').length<2){toast('请先勾选两项确认');return}
  document.getElementById('new-order').style.display='block';
  go('sc-order');
  toast('支付成功，记录待审核');
}
/* -------- 请假 -------- */
function segOn(el){
  el.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));
  el.classList.add('on');
}
/* -------- 发起请假：日期+时间（30 分钟粒度）双列滚轮 / 时长 / 证明材料（与教师端代请假同构） -------- */
function sheetHTML(h){document.getElementById('sheet').innerHTML=h;document.getElementById('mask').classList.add('show')}
let nlDateTarget='start';
/* 演示日期锚点：今天=2026年7月6日（周一），星期一律按真实历法（Date.getDay）推算。
   开始时间轴 = 当天 ±30 天（补请假回溯上限）；结束时间轴 = 开始日期起 90 天，边界均为校级配置 */
const NL_ANCHOR=new Date(2026,6,6);
const NL_WK=['周日','周一','周二','周三','周四','周五','周六'];
const nlFmt=o=>{const d=new Date(2026,6,6+o);return (d.getMonth()+1)+'月'+d.getDate()+'日'};
let nlWheelDays=[],nlWheelDates=[];
/* 日期列（真实星期，今天显示「当天」）；nlWheelDates 存纯日期用于回填与解析 */
function nlMkDays(f,t){
  nlWheelDays=[];nlWheelDates=[];
  for(let o=f;o<=t;o++){
    const ds=nlFmt(o);
    nlWheelDates.push(ds);
    nlWheelDays.push((o===0?'当天':ds)+' '+NL_WK[new Date(2026,6,6+o).getDay()]);
  }
}
function nlOff(v){const m=v.match(/(\d+)月(\d+)日/);return Math.round((new Date(2026,m[1]-1,+m[2])-NL_ANCHOR)/864e5)}
/* 时/分双列：分钟 30 分钟步进（最少可请 0.5 小时，粒度为校级配置）；时长仅计入与在校时段重叠部分 */
const nlHours=[],nlMins=['00','30'];for(let h=0;h<24;h++)nlHours.push((''+h).padStart(2,'0'));
let nlHoursCur=nlHours,nlMinsCur=nlMins; /* 当前时 / 分列：发起请假为全量，销假场景按所选日期裁剪（nlWheelRefit） */
function nlDateSheet(w){
  nlDateTarget=w;
  /* 销假半屏没有文本输入框，当前值取半屏状态 lvCancelTime；发起请假页仍从 #nl-start / #nl-end 读 */
  const cur=((w==='cancel'?lvCancelTime:document.getElementById('nl-'+w).value)||(w==='cancel'?lvView(lvsGet(lvCancelKey)).s:nlFmt(0)+' 08:00')).split(' ');
  if(w==='start'){nlMkDays(-30,30)}
  else if(w==='cancel'){const r=lvView(lvsGet(lvCancelKey));nlMkDays(nlOff(r.s),nlOff(r.e))} /* 实际结束时间：日期轴限定在请假起止日之内 */
  else{const sv=document.getElementById('nl-start').value;const os=sv?nlOff(sv):0;nlMkDays(os,os+90)}
  nlHoursCur=nlHours;nlMinsCur=nlMins;
  let di=nlWheelDates.indexOf(cur[0]);if(di<0)di=0;
  const t=cur[1].split(':'),hi=Math.max(nlHours.indexOf(t[0]),0),mi=t[1]==='30'?1:0;
  /* 头部只留居中回显：清空无独立场景（起止 / 实际结束均必填，改值直接滚到新值），关闭统一走底部「取消」 */
  sheetHTML('<div style="text-align:center;margin-bottom:6px"><b id="nl-w-cur" style="font-size:15px"></b></div>'+
   '<div class="wheelbox">'+
    '<div class="wheel" id="nl-w-day" style="flex:1.9">'+nlWheelItems(nlWheelDays)+'</div>'+
    '<div class="wheel" id="nl-w-hour">'+nlWheelItems(nlHours)+'</div>'+
    '<div class="wheel" id="nl-w-min">'+nlWheelItems(nlMins)+'</div>'+
   '</div>'+
   '<div class="row" style="gap:10px;margin-top:12px"><button class="btn ghost" style="flex:1" onclick="nlDateCancel()">取消</button><button class="btn pri" style="flex:1" onclick="nlDateOk()">确定</button></div>');
  nlWheelInit('nl-w-day',di);nlWheelInit('nl-w-hour',hi);nlWheelInit('nl-w-min',mi);
  nlWheelRefit('nl-w-day'); /* 销假：按初始所选日期先裁剪一次时 / 分列 */
}
/* 销假场景时 / 分列随所选日期裁剪：有效范围「开始时间 ≤ 实际结束时间 ≤ 原结束时间 − 30 分钟」（等于开始即整单销假；等于原结束等于没销，故上界前移一档）；
   只重建非正在滚动的列（日期滚动 → 重建时、分列；小时滚动 → 只重建分列），列内容不变时不动，避免打断滚动 */
function nlWheelRefit(src){
  if(nlDateTarget!=='cancel')return;
  const r=lvView(lvsGet(lvCancelKey)),ms=v=>{const t=v.split(' ')[1].split(':');return +t[0]*60+ +t[1]};
  const d=nlOff(nlWheelDates[nlWheelSel('nl-w-day')]);
  const lo=d===nlOff(r.s)?ms(r.s):0,hi=d===nlOff(r.e)?ms(r.e)-30:1410;
  if(src!=='nl-w-hour'){
    const hs=[];for(let t=lo;t<=hi;t+=30){const h=(''+Math.floor(t/60)).padStart(2,'0');if(hs[hs.length-1]!==h)hs.push(h)}
    nlHoursCur=nlWheelSet('nl-w-hour',nlHoursCur,hs);
  }
  const h=+nlHoursCur[nlWheelSel('nl-w-hour')];
  nlMinsCur=nlWheelSet('nl-w-min',nlMinsCur,nlMins.filter(m=>h*60+ +m>=lo&&h*60+ +m<=hi));
  nlWheelCur();
}
/* 列内容有变时重建该列，尽量保持原选中值，越界则钳到最近一端 */
function nlWheelSet(id,old,arr){
  if(old.join()===arr.join())return old;
  const w=document.getElementById(id),cur=old[nlWheelSel(id)];
  let i=arr.indexOf(cur);if(i<0)i=cur<arr[0]?0:arr.length-1;
  w.innerHTML=nlWheelItems(arr);w.scrollTop=i*36;nlWheelPaint(w);
  return arr;
}
function nlWheelItems(a){return '<div class="wi pad"></div><div class="wi pad"></div>'+a.map((x,i)=>'<div class="wi" data-i="'+i+'" onclick="nlWheelTo(this)">'+x+'</div>').join('')+'<div class="wi pad"></div><div class="wi pad"></div>'}
function nlWheelInit(id,idx){
  const w=document.getElementById(id);
  w.addEventListener('scroll',()=>{if(!w.isConnected)return;nlWheelPaint(w);nlWheelCur();nlWheelRefit(id)}); /* 确定 / 取消后脱离文档的列补发的 scroll 不处理 */
  w.scrollTop=idx*36;nlWheelPaint(w);nlWheelCur();
}
function nlWheelArr(id){return id==='nl-w-day'?nlWheelDays:id==='nl-w-hour'?nlHoursCur:nlMinsCur}
function nlWheelSel(id){return Math.min(Math.max(Math.round(document.getElementById(id).scrollTop/36),0),nlWheelArr(id).length-1)}
function nlWheelPaint(w){const i=Math.round(w.scrollTop/36);w.querySelectorAll('.wi[data-i]').forEach(x=>x.classList.toggle('on',+x.dataset.i===i))}
/* 顶部回显始终带全年份消除跨年歧义；演示日期轴（最远至 2026年11月）不跨年，年份固定 */
function nlWheelCur(){document.getElementById('nl-w-cur').textContent='2026年'+nlWheelDates[nlWheelSel('nl-w-day')]+' '+nlHoursCur[nlWheelSel('nl-w-hour')]+':'+nlMinsCur[nlWheelSel('nl-w-min')]}
function nlWheelTo(el){el.parentNode.scrollTo({top:(+el.dataset.i)*36,behavior:'smooth'})}
/* 取消：销假场景回到申请销假半屏（不改已选时间，已填理由保留），发起请假页直接关闭 */
function nlDateCancel(){if(nlDateTarget==='cancel'){lvCancelSheet(lvCancelKey,true);return}closeSheet()}
function nlDateOk(){
  let v=nlWheelDates[nlWheelSel('nl-w-day')]+' '+nlHoursCur[nlWheelSel('nl-w-hour')]+':'+nlMinsCur[nlWheelSel('nl-w-min')];
  if(nlDateTarget==='cancel'){ /* 确定时再钳一次到有效范围兜底（滚轮已裁剪，正常不会越界） */
    const r=lvView(lvsGet(lvCancelKey)),a=lvAbs(v),lo=lvAbs(r.s),hi=lvAbs(r.e)-30;
    const str=x=>nlFmt(Math.floor(x/1440))+' '+(''+Math.floor(x%1440/60)).padStart(2,'0')+':'+(x%60?'30':'00');
    v=a<lo?r.s:a>hi?str(hi):v;
    lvCancelTime=v;lvCancelSheet(lvCancelKey,true);return} /* 销假半屏与滚轮共用同一 sheet：选完回到销假半屏并回填 */
  document.getElementById('nl-'+nlDateTarget).value=v;
  closeSheet();nlCalcDur();
  /* 改开始后已选结束不晚于开始：只提示、不清空结束，由家长自行调整（提交时仍按「结束晚于开始」拦截） */
  const ev=document.getElementById('nl-end').value;
  if(nlDateTarget==='start'&&ev&&lvAbs(ev)<=lvAbs(v))toast('开始时间晚于结束时间');
}
/* 时长按上学日计算，三端同一口径（leave-store.js lvsSchoolMins）：逐日取起止区间与该班当日应出勤时段（班次各时段的上学–放学，午休不计）的重叠，
   当日每个时段都被完整覆盖计入「整天数」（= 统计页月历蓝点 / 「请假 N 天」），其余部分覆盖日的重叠小时累加为「小时数」（= 统计页「时段请假」）；
   不按「累计满 8 小时折算 1 天」——跨天半日单累计虽可凑满一天的小时数，但两天都不是全天请假，折算会与统计页矛盾。
   周末（真实历法）跳过（演示未含法定节假日与寒暑假）。返回 {days, mins, hasSchoolDay}——hasSchoolDay 用于区分 0 时长的两种成因（整段非上学日 / 落在在校时段之外）。
   cls 缺省取当前孩子的班级 */
function nlSchoolMins(sv,ev,cls){
  const p=v=>{const s=v.split(' '),t=s[1].split(':');return new Date(2026,6,6+nlOff(s[0]),+t[0],+t[1])};
  return lvsSchoolMins(p(sv),p(ev),cls||kidInfo[curKid][1]);
}
function nlCalcDur(){
  const sv=document.getElementById('nl-start').value,ev=document.getElementById('nl-end').value,el=document.getElementById('nl-dur');
  const row=document.getElementById('nl-dur-row');
  if(!sv||!ev){row.style.display='none';el.textContent='—';return}
  row.style.display='';
  const p=v=>{const s=v.split(' '),t=s[1].split(':');return{d:nlOff(s[0]),m:+t[0]*60+ +t[1]}};
  const a=p(sv),b=p(ev);
  if(b.d<a.d||(b.d===a.d&&b.m<=a.m)){el.textContent='—';return}
  const sd=nlSchoolMins(sv,ev),dd=sd.days,hh=+(sd.mins/60).toFixed(1);
  el.textContent=(!dd&&!hh)?'0 小时':(dd?dd+' 天':'')+(hh?(dd?' ':'')+hh+' 小时':'');
}
nlCalcDur();
/* 证明材料：图片网格上传（演示模拟）——点「＋」添加演示图片，满 5 个隐藏添加块，✕ 删除后恢复 */
const NL_UP_MAX=5,NL_UP_IMGS=['assets/photo-sample.jpg','assets/photo-cap.jpg','assets/photo-glasses.jpg','assets/photo-side.jpg','assets/photo-duo.jpg'];
let nlUpN=0;
function nlUpload(gid){
  gid=gid||'nl-upload';
  const g=document.getElementById(gid);
  if(g.querySelectorAll('.ph').length>=NL_UP_MAX)return;
  const d=document.createElement('div');d.className='ph';
  d.innerHTML='<img src="'+NL_UP_IMGS[nlUpN++%NL_UP_IMGS.length]+'" alt="证明材料照片"><span class="rm" onclick="this.parentNode.remove();nlUpFit(\''+gid+'\')">✕</span>';
  g.insertBefore(d,g.querySelector('.add'));
  nlUpFit(gid);
}
function nlUpFit(gid){
  const g=document.getElementById(gid||'nl-upload');
  g.querySelector('.add').style.display=g.querySelectorAll('.ph').length>=NL_UP_MAX?'none':'';
}
/* 渐进披露：选定请假类型（病假 / 事假）后才显示起止时间（占位「请选择」），起止选齐后显示时长；病假额外显示是否传染病（必选）与病状（可多选） */
function nlTypePick(el){
  segOn(el);
  document.getElementById('nl-time-row').style.display='';
  document.getElementById('nl-sick-extra').style.display=el.textContent==='病假'?'':'none';
}
/* -------- 帮助与客服：反馈建议半屏 -------- */
function feedbackSheet(){
  sheetHTML('<h3>反馈建议</h3>'+
   '<div class="fchips" style="margin:2px 0 10px"><button class="fchip on" onclick="segOn(this)">功能建议</button><button class="fchip" onclick="segOn(this)">问题反馈</button></div>'+
   '<textarea id="fb-txt" rows="4" placeholder="请描述您的建议或遇到的问题"></textarea>'+
   '<div style="font-size:12px;color:var(--ink-2);margin:10px 0 2px">上传图片<span class="muted" style="margin-left:6px;font-size:11px">（可选）</span></div>'+
   '<div class="muted" style="font-size:11.5px;margin:0 0 8px">最多 5 张，最大 10 MB/张</div>'+
   '<div class="up-grid" id="fb-upload"><button class="add" onclick="nlUpload(\'fb-upload\')">＋</button></div>'+
   '<div class="row" style="gap:10px;margin-top:12px"><button class="btn ghost" style="flex:1" onclick="closeSheet()">取消</button><button class="btn pri" style="flex:1" onclick="feedbackSubmit()">提交</button></div>');
}
/* 反馈记录（我的反馈列表与详情共用数据）：ty 类型 / st 状态（已提交 / 已回复两态）/ txt 全文 / ph 截图 / tl 处理进展 */
const FB_RECS={
 open:{ty:'功能建议',st:'已提交',c:'amber',txt:'放学播报希望能提前 5 分钟提醒我出发接孩子。',
   tl:[['提交','今天 09:21']]},
 replied:{ty:'问题反馈',st:'已回复',c:'teal',txt:'孩子明明 7:40 就进校了，到校提醒 8 点才收到，最近一周有两三次这样，麻烦看看。',ph:1,
   tl:[['提交','07-02 19:45'],['回复','07-03 15:26 · 客服中心','您好，经排查为雨天网络波动导致个别到校记录延迟上传，已于 7月3日 优化重传策略；如再遇到延迟欢迎随时反馈。']]},
 suggest:{ty:'功能建议',st:'已回复',c:'teal',txt:'希望能按学期导出孩子的出勤记录，开家长会前想自己看一遍。',
   tl:[['提交','06-24 21:10'],['回复','今天 14:32 · 客服中心','感谢您的建议！按学期导出出勤记录已列入功能规划，上线后将第一时间通知您，请留意消息通知。']]}
};
function openFbDetail(k){
  const r=FB_RECS[k];
  let h='<div class="card">'+
   '<div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:15px">'+r.ty+'</b><span class="chip '+r.c+' plain">'+r.st+'</span></div>'+
   '<div class="hr"></div>'+
   '<div style="font-size:13px;line-height:1.75">'+r.txt+'</div>'+
   (r.ph?'<img src="assets/photo-cap.jpg" alt="反馈截图" style="width:56px;height:56px;border-radius:8px;object-fit:cover;cursor:pointer;margin-top:9px;display:block" onclick="fbShot()">':'')+
  '</div>';
  h+='<div class="card"><h4 style="margin-bottom:6px">处理进展</h4>'+
   r.tl.map(x=>'<div class="kv"><span class="k">'+x[0]+'</span><span class="v">'+x[1]+(x[2]?'<br><span style="color:var(--ink-2);font-size:12px">'+x[2]+'</span>':'')+'</span></div>').join('')+'</div>';
  document.getElementById('fbd-body').innerHTML=h;
  go('sc-fbdetail');
}
/* 反馈截图大图：复用全屏预览遮罩，单图无切换箭头 */
function fbShot(){
  document.getElementById('shot-prev').style.display='none';
  document.getElementById('shot-next').style.display='none';
  document.getElementById('shot-cap').textContent='反馈截图';
  document.querySelector('#shot-view img').src='assets/photo-cap.jpg';
  document.getElementById('shot-view').classList.add('show');
}
/* 我的反馈状态筛选：「全部」固定 + 已提交 / 已回复 chip 过滤（与请假记录同构） */
let fbFilter='all';
function fbFilterPick(v,el){
  fbFilter=v;
  document.querySelectorAll('#fb-fbar .fchip').forEach(c=>c.classList.toggle('on',c===el));
  fbApplyFilter();
}
function fbApplyFilter(){
  let n=0;
  document.querySelectorAll('#fb-list .lv-card').forEach(c=>{
    const ok=fbFilter==='all'||c.querySelector('.hd2 .chip').textContent===fbFilter;
    c.style.display=ok?'':'none';if(ok)n++;
  });
  document.getElementById('fb-nores').style.display=n?'none':'';
}
function fbFilterReset(){
  fbFilter='all';
  document.querySelectorAll('#fb-fbar .fchip').forEach((c,i)=>c.classList.toggle('on',i===0));
  fbApplyFilter();
}
/* 我的反馈空态预览：与演示记录互斥切换；空态（无任何记录）下筛选条整条隐藏并重置 */
function fbEmptyToggle(){
  const empty=document.getElementById('fb-empty'),on=empty.style.display==='none';
  empty.style.display=on?'':'none';
  document.getElementById('fb-fbar').style.display=on?'none':'';
  document.getElementById('fb-nores').style.display='none';
  if(on)document.querySelectorAll('#fb-list .lv-card').forEach(c=>c.style.display='none');
  else fbFilterReset();
}
function feedbackSubmit(){
  const txt=document.getElementById('fb-txt').value.trim();
  if(!txt){toast('请填写反馈内容');return}
  document.getElementById('fb-empty').style.display='none';
  document.getElementById('fb-fbar').style.display='';
  /* 新提交的反馈以「已提交」置顶插入我的反馈列表（演示数据，刷新后重置） */
  const ty=document.querySelector('#sheet .fchip.on').textContent;
  const d=document.createElement('div');d.className='card lv-card';
  d.onclick=()=>demoToast('演示：新提交反馈的详情版式与示例记录一致');
  d.innerHTML='<div class="hd2"><b>'+ty+'</b><span class="chip amber plain">已提交</span></div>'+
   '<div style="font-size:12.5px;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis"></div>'+
   '<div class="ft"><span class="tm">今天 17:05</span></div>';
  d.children[1].textContent=txt;
  document.getElementById('fb-list').prepend(d);
  fbFilterReset(); /* 重置筛选到全部，保证新记录立即可见 */
  closeSheet();toast('已提交，感谢您的反馈');
}
/* -------- 帮助与客服：FAQ 折叠 -------- */
function faqToggle(el){
  const f=el.parentNode;f.classList.toggle('on');
  el.querySelector('.fx').textContent=f.classList.contains('on')?'－':'＋';
}
/* -------- 帮助与客服：关键词搜索 + 问题类型筛选（取交集） -------- */
let helpCatCur='all';
function helpCat(el,cat){
  helpCatCur=cat;
  document.querySelectorAll('#help-cats .fchip').forEach(c=>c.classList.toggle('on',c===el));
  helpFilter();
}
function helpFilter(){
  const kw=document.getElementById('help-kw').value.trim();
  let n=0,last=null;
  document.querySelectorAll('#help-faq-card .faq').forEach(f=>{
    const hit=(helpCatCur==='all'||f.dataset.cat===helpCatCur)&&(!kw||f.textContent.includes(kw));
    f.style.display=hit?'':'none';f.classList.remove('nobd');
    if(hit){n++;last=f}
  });
  if(last)last.classList.add('nobd'); /* 筛选后最后一条可见问题去底线（:last-child 不识别 display:none） */
  document.getElementById('help-noresult').style.display=n?'none':'';
}
/* -------- 智慧放学（旧版 · 设计存档 sc-dismiss-old）：全局时段批次 Tab + 年级放学看板 --------
   已被主版本（孩子卡 × 班级班次段，见下方 DN_ 段）取代：学校端「学生班次」按班级配置段数 / 时间 / 别名后，
   全局批次 Tab 无正确文案可选、「没课」对单段班次成为误导，存档留作设计过程记录，经新版演示说明进入。
   班级状态：wait 未放学 / ing 放学中（播报后 10 分钟内）/ done 已放学，时间为放学播报时间；
   演示时点 17:05：上午=午间批次全部已放学，下午=混合状态，晚上=晚托批次未开始 */
const DIS_KIDS=[
 {nm:'林晓乐',cls:'3年级－2班',g:'3年级',cn:'2班',av:'assets/avatar-boy.png'},
 {nm:'林晓阳',cls:'1年级－1班',g:'1年级',cn:'1班',av:'assets/avatar-boy.png'}];
const DIS_DATA={
 am:[['1年级',[['1班','11:40','done'],['2班','11:42','done'],['3班','11:43','done']]],
     ['2年级',[['1班','11:45','done'],['2班','11:46','done']]],
     ['3年级',[['1班','11:47','done'],['2班','11:48','done']]],
     ['4年级',[['1班','11:50','done'],['2班','11:50','done']]],
     ['5年级',[['1班','11:51','done'],['2班','11:51','done']]],
     ['6年级',[['1班','11:52','done']]]],
 pm:[['1年级',[['1班','16:58','ing'],['2班','16:35','done'],['3班','16:38','done']]],
     ['2年级',[['1班','16:40','done'],['2班','16:42','done']]],
     ['3年级',[['1班','16:42','done'],['2班','16:44','done']]],
     ['4年级',[['1班','17:02','ing'],['2班','','wait']]],
     ['5年级',[['1班','','wait'],['2班','','wait']]],
     ['6年级',[['1班','','wait']]]],
 ev:[['4年级',[['1班','','wait']]],
     ['5年级',[['1班','','wait']]],
     ['6年级',[['1班','','wait']]]]};
/* delay 延迟放学＝未放学的子状态（老师在学校端对未播报班级操作延迟，仅预计时间推后），实际播报后仍走 放学中 → 已放学 */
const DIS_ST={wait:['未放学','wait'],ing:['放学中','ing'],done:['已放学','done'],delay:['延迟放学','delay']};
let disSeg='pm',disGrade='全部',disState='all';
/* 年级/班级放学看板显隐：第一阶段隐藏，演示说明「预览 · 年级放学看板（后续阶段）」切换，会话内生效；显示时同步恢复页头「筛选」按钮 */
let disBoardOn=false;
function disBoardToggle(){disBoardOn=!disBoardOn;document.querySelector('#sc-dismiss-old .flt').style.display=disBoardOn?'':'none';disEvTabSync();disRender();demoToast(disBoardOn?'已显示年级放学看板（预览）':'已隐藏年级放学看板')}
/* -------- 第三段批次按配置显隐：孩子班级均未配置第三段时「晚上」Tab 隐藏；年级看板（全校视图）显示时 Tab 同步显示 -------- */
let disEvOn=false;   // 演示：孩子班级是否配置第三段
function disEvTabSync(){
  const b=document.querySelector('#sc-dismiss-old .dis-seg .seg[data-s="ev"]');
  const show=disEvOn||disBoardOn;
  b.style.display=show?'':'none';
  if(!show&&disSeg==='ev')disSegPick('pm');
}
function disEvToggle(){
  disEvOn=!disEvOn;disEvTabSync();
  if(disEvOn)disSegPick('ev');else disRender();
  demoToast(disEvOn?'已模拟部分孩子配置第三段：3年级-2班 19:00 开始，1年级-1班 没课':'已恢复：孩子班级均未配置第三段，「晚上」Tab 隐藏');
}
/* 演示：老师在学校端对1年级-1班操作延迟放学（原 16:50 → 预计 17:20，学校端暂不支持填写延迟原因），会话内预览，
   与该班 16:58 放学中的默认演示互斥；延迟同步触发消息中心「放学延迟通知」推送（页面外口径） */
let disDelayOn=false;
function disDelayToggle(){
  disDelayOn=!disDelayOn;
  if(curScreen!=='sc-dismiss-old')go('sc-dismiss-old');
  if(disSeg!=='pm')disSegPick('pm');else disRender();
  demoToast(disDelayOn?'已模拟延迟放学：1年级-1班 延迟至 17:20':'已恢复：1年级-1班 16:58 放学中');
}
function disSegPick(s){disSeg=s;document.querySelectorAll('#sc-dismiss-old .dis-seg .seg').forEach(b=>b.classList.toggle('on',b.dataset.s===s));disRender()}
/* 筛选半屏：年级 + 放学状态双维度，点选即生效（半屏内联动刷新），「完成」收起 */
function disFilterSheet(){
 const row=(t,arr,cur,fn)=>'<div style="font-size:13px;color:var(--ink-2);font-weight:600;margin:15px 0 9px">'+t+'</div>'+
  '<div style="display:flex;flex-wrap:wrap;gap:9px">'+arr.map(x=>'<button class="fchip'+(x[1]===cur?' on':'')+'" onclick="'+fn+'(\''+x[1]+'\')">'+x[0]+'</button>').join('')+'</div>';
 showSheet('<h3>筛选</h3>'+
  row('年级',['全部','1年级','2年级','3年级','4年级','5年级','6年级'].map(g=>[g,g]),disGrade,'disPickGrade')+
  row('放学状态',[['全部','all'],['未放学','wait'],['放学中','ing'],['已放学','done']],disState,'disPickState')+
  '<button class="btn pri blk" style="margin-top:18px" onclick="closeSheet()">完成</button>');
}
function disPickGrade(g){disGrade=g;disRender();disFilterSheet()}
function disPickState(s){disState=s;disRender();disFilterSheet()}
function disKidRow(k){
 const gs=DIS_DATA[disSeg].find(x=>x[0]===k.g);
 const c=gs&&gs[1].find(x=>x[0]===k.cn);
 /* 班级未配置当前批次段时标「没课」（不用系统词汇「段」，也不预设第三段=晚托/晚上）；第三段预览为混合形态：
    仅3年级-2班（林晓乐）视为配置了第三段（19:00 开始，演示时点未放学），1年级-1班（林晓阳）未配置、保持没课 */
 const dl=disDelayOn&&disSeg==='pm'&&k.g==='1年级'&&k.cn==='1班';
 const st=dl?DIS_ST.delay:(c?DIS_ST[c[2]]:(disSeg==='ev'&&disEvOn&&k.g==='3年级'?DIS_ST.wait:['没课','wait']));
 /* 状态 chip 下附放学时间（未放学 / 没课不显示）；延迟放学仅显示预计时间，原时间与原因不上屏（由放学延迟通知推送承载） */
 const sub=dl?'<small style="text-align:center">预计 17:20</small>'
  :(c&&c[1]&&c[2]!=='wait'?'<small style="text-align:center">'+c[1]+'</small>':'');
 return '<div class="dis-kid"><span class="kav" style="background-image:url('+k.av+')"></span><span style="flex:1"><b>'+k.nm+'</b><small>'+k.cls+'</small></span><span style="display:flex;flex-direction:column;align-items:center;gap:2px;flex-shrink:0"><span class="dis-st '+st[1]+'">'+st[0]+'</span>'+sub+'</span></div>';
}
function disRender(){
 const kids=DIS_KIDS.map(disKidRow).join('');
 /* 状态筛选作用于班级格子并隐藏无匹配班级的年级卡；统计行保持年级全量概览 */
 const grades=DIS_DATA[disSeg].filter(g=>disGrade==='全部'||g[0]===disGrade).map(g=>{
  /* 延迟放学预览：1年级-1班格子转 delay（预计时间上屏）；统计行与状态筛选按「未放学」子状态归类 */
  const gcls=g[1].map(c=>disDelayOn&&disSeg==='pm'&&g[0]==='1年级'&&c[0]==='1班'?['1班','预计 17:20','delay']:c);
  const cls=gcls.filter(c=>disState==='all'||c[2]===disState||(disState==='wait'&&c[2]==='delay'));
  if(!cls.length)return '';
  const n={wait:0,ing:0,done:0};gcls.forEach(c=>n[c[2]==='delay'?'wait':c[2]]++);
  return '<div class="dis-card"><div class="dt">'+g[0]+'</div>'+
   '<div class="dis-sum"><span><i class="wait"></i>未放学 '+n.wait+'</span><span><i class="ing"></i>放学中 '+n.ing+'</span><span><i class="done"></i>已放学 '+n.done+'</span></div>'+
   '<div class="dis-cls">'+cls.map(c=>'<div class="cl '+c[2]+'">'+c[0]+(c[1]&&c[2]!=='wait'?'<small>'+c[1]+'</small>':'')+'</div>').join('')+'</div></div>';
 }).join('');
 /* 第一阶段隐藏：年级/班级放学看板（恢复方式：将下方 disBoardOn 默认值改为 true，并同步恢复页头「筛选」按钮；演示可经演示说明「预览 · 年级放学看板」切换） */
 document.getElementById('dis-list').innerHTML=
  '<div class="dis-card" style="padding-bottom:14px"><div class="dt">我的孩子</div>'+kids+'</div>'+
  '<div id="dis-grades"'+(disBoardOn?'':' style="display:none"')+'>'+grades+'</div>';
}
disRender();
/* -------- 智慧放学（主版本 sc-dismiss）：孩子卡 × 班级班次段 --------
   班次（段数 / 起止时间 / 别名）由学校端「学生班次」按班级配置，别名（上午 / 下午 / 全天 / 晚上）即家长端段行标签；
   全局批次 Tab 废止（别名与段结构按班分化，全局 Tab 无正确文案可选、位序对齐会拆散同时放学的孩子），
   未配置的段不出现行——旧版「没课」伪状态随之废止；状态复用 DIS_ST 四态与流转口径；
   卡内主行 + 摘要两层：主行=当前最相关段（第一个未结束段，全部已放学取最后一段——位置与字号承载视觉权重，
   不设「当前」chip：全部结束时它会标在已放学的段上、语义别扭），已结束/其余段压缩为一行灰字摘要；
   状态 chip 与时间相邻成短语（已放学 16:44 / 延迟放学 预计 17:20 / 未放学 20:30 放学）自解释，页顶不设规则提示条；
   pt=该段班次配置的计划放学时间：未放学主行显示「pt 放学」（灰字常规字重与事实播报时间区分，计划参考非承诺、实际以播报为准），
   延迟态仍仅显示预计时间（原计划时间不上屏口径保留，由放学延迟通知推送承载对照）；
   演示编排：晓乐班（3年级-2班）一天打卡 4 次两段（上午 11:48 已放学 / 下午 16:44 已放学），
   晓阳班（1年级-1班）一天打卡 2 次单段（全天 16:58 放学中）——同屏演示不同班级段数 / 别名不同的真实形态 */
const DN_KIDS=[
 {nm:'林晓乐',cls:'3年级-2班',av:'assets/avatar-boy.png',segs:[
   {al:'上午',st:'done',t:'11:48',pt:'11:30',it:'00:00'},
   {al:'下午',st:'done',t:'16:44',pt:'16:30',it:'13:00'}]},
 {nm:'林晓阳',cls:'1年级-1班',av:'assets/avatar-boy.png',segs:[
   {al:'全天',st:'ing',t:'16:58',pt:'16:50',it:'07:30'}]}];
/* 主行段（与老师端同一规则）：第一个未放学 / 延迟 / 放学中的段；已放学的段还要等到下一段的入校开始时间才让给下一段（午间仍显示上午段「已放学」）；
   系统收口的段（已放学且无时间）即时沉入摘要；全部段结束取最后一段。演示时点 17:05（上午时点预览为 11:00） */
function dnMainIdx(segs){
  const now=dnMornOn?660:17*60+5,mn=hm=>{const [h,m]=hm.split(':').map(Number);return h*60+m};
  for(let i=0;i<segs.length-1;i++){
    const s=segs[i];
    if(s.st!=='done')return i;
    if(s.t&&now<mn(segs[i+1].it))return i;
  }
  return segs.length-1;
}
let dnDelayOn=false,dnEvOn=false,dnMornOn=false,dnRestMode=0,dnCloseOn=false;
function dnRender(){
  document.getElementById('dn-list').innerHTML=DN_KIDS.map(k=>{
    let segs=k.segs.map(s=>({...s}));
    /* 上午 11:00 时点预览：全部段尚未播报——各段转未放学、清空播报时间，主行落第一个未结束段（晓乐=上午 11:40 放学、晓阳=全天 16:50 放学），
       整页演示计划放学时间形态；可与第三段 / 延迟预览叠加（延迟=老师上午即提前操作延迟的形态） */
    if(dnMornOn)segs=segs.map(s=>({...s,st:'wait',t:''}));
    /* 未播报段系统收口预览（PRD 8.3）：非末段的离校时间段结束仍未播报（老师未操作、人数未达阈值、未设延迟）即由系统置为已放学，
       无播报时间可显示——晓乐上午段收口后沉入摘要行写作「上午 已放学」，主行仍为下午段；收口按段独立，不推送班级放学通知。
       末段离校截止由学校端固定为 23:59（晓阳的单段班次即末段），收口在当天结束才触发、家长端无感，故不做晓阳的收口演示；
       延迟段不需要收口（到点由触发④自动播报） */
    if(dnCloseOn)segs=segs.map(s=>k.nm==='林晓乐'&&s.al==='上午'?{...s,st:'done',t:''}:s);
    /* 第三段预览：晓乐班追加晚托段（17:31–20:30，演示时点未放学、主行随之切至该段并显示计划放学时间）；晓阳班无第三段、不受影响 */
    if(dnEvOn&&k.nm==='林晓乐')segs.push({al:'晚上',st:'wait',t:'',pt:'20:30',it:'17:31'});
    /* 延迟放学预览：晓阳班全天段转延迟（仅预计时间上屏，原计划 16:50 不上屏、由放学延迟通知推送承载），与 16:58 放学中默认演示互斥 */
    if(dnDelayOn&&k.nm==='林晓阳')segs=[{al:'全天',st:'delay',t:'预计 17:20'}];
    /* 休息日 / 无班次预览（三态循环，最后生效——无段的孩子不存在可延迟 / 可追加的段，其余预览对其自然失效）：
       1=晓乐班当天无班次（混合形态，晓阳班照常）；2=休息日（全部孩子无段，即「全员无段」特例，无独立判定机制） */
    if(dnRestMode===2||(dnRestMode===1&&k.nm==='林晓乐'))segs=[];
    /* 当天无任何班次段（休息日 / 该班未配置当天班次）：卡级空态——主行位置显示灰字「今天没有课」，
       无状态 chip 与时间；文案沿用旧版存档「没课」的口语化权衡结论 */
    if(!segs.length)return '<div class="dis-card">'+
     '<div class="dn-kid-hd"><span class="kav" style="background-image:url('+k.av+')"></span><b>'+k.nm+'</b><small>'+k.cls+'</small></div>'+
     '<div class="dn-main"><span class="none">今天没有课</span></div>'+
    '</div>';
    const mi=dnMainIdx(segs);
    const m=segs[mi],rest=segs.filter((_,i)=>i!==mi);
    const tm=m.st==='wait'?(m.pt?'<span class="tm plan">'+m.pt+' 放学</span>':''):(m.t?'<span class="tm">'+m.t+'</span>':'');
    return '<div class="dis-card">'+
     '<div class="dn-kid-hd"><span class="kav" style="background-image:url('+k.av+')"></span><b>'+k.nm+'</b><small>'+k.cls+'</small></div>'+
     '<div class="dn-main"><span class="al">'+m.al+'</span><span class="dis-st '+DIS_ST[m.st][1]+'">'+DIS_ST[m.st][0]+'</span>'+tm+'</div>'+
     (rest.length?'<div class="dn-rest">'+rest.map(s=>s.al+(s.t?' '+s.t:'')+' '+DIS_ST[s.st][0]).join('　·　')+'</div>':'')+
    '</div>';
  }).join('');
}
dnRender();
function dnDelayToggle(){
  dnDelayOn=!dnDelayOn;
  if(curScreen!=='sc-dismiss')go('sc-dismiss');
  dnRender();
  demoToast(dnDelayOn?'已模拟延迟放学：1年级-1班 延迟至 17:20':'已恢复：1年级-1班 16:58 放学中');
}
function dnEvToggle(){
  dnEvOn=!dnEvOn;
  if(curScreen!=='sc-dismiss')go('sc-dismiss');
  dnRender();
  demoToast(dnEvOn?'已模拟晓乐班配置第三段：晚上 17:31–20:30，晓阳班班次不变':'已恢复：晓乐班仅上午 / 下午两段');
}
/* 休息日 / 无班次形态预览：三态循环 正常 → 晓乐班当天无班次（混合形态）→ 休息日（全部无段）→ 正常 */
function dnRestToggle(){
  dnRestMode=(dnRestMode+1)%3;
  if(curScreen!=='sc-dismiss')go('sc-dismiss');
  dnRender();
  demoToast(['已恢复正常演示形态','已模拟：晓乐班当天无班次，晓阳班照常','已模拟休息日：全部孩子当天没有班次'][dnRestMode]);
}
/* 上午 11:00 时点预览：页面数据切至全部未放学形态，头部时钟改自 11:00:00 起走秒（状态栏时间随全原型定格 17:05 不动） */
function dnMornToggle(){
  dnMornOn=!dnMornOn;
  if(dnMornOn&&dnCloseOn)dnCloseOn=false; /* 与收口预览互斥：11:00 时点窗口尚未结束 */
  if(curScreen!=='sc-dismiss')go('sc-dismiss');
  dnRender();
  demoToast(dnMornOn?'已切至上午 11:00 时点：全部段未放学，显示各段计划放学时间':'已恢复 17:05 演示时点');
}
/* 未播报段系统收口预览：与上午 11:00 时点预览互斥（窗口尚未结束无从收口，开启本预览时自动关闭上午时点） */
function dnCloseToggle(){
  dnCloseOn=!dnCloseOn;
  if(dnCloseOn&&dnMornOn)dnMornOn=false;
  if(curScreen!=='sc-dismiss')go('sc-dismiss');
  dnRender();
  demoToast(dnCloseOn?'已模拟系统收口：晓乐班上午段漏播，离校时间段结束后置为已放学（无播报时间）；晓阳为单段班次、末段截止 23:59，当天无收口形态':'已恢复：晓乐班上午段按播报时间 11:48 展示');
}
/* 头部时钟（主版本与旧版存档页共用基准）：自演示基准时点 17:05:47 起实时走秒（日期与页面其余演示数据保持定格口径）；
   主版本在上午时点预览下改自 11:00:00 起走秒 */
const DIS_T0=Date.now(),DIS_BASE=17*3600+5*60+47,DN_MORN_BASE=11*3600;
setInterval(()=>{
 const el=Math.floor((Date.now()-DIS_T0)/1000),p=n=>String(n).padStart(2,'0');
 const f=s=>p(Math.floor(s/3600)%24)+':'+p(Math.floor(s/60)%60)+':'+p(s%60);
 document.getElementById('dis-clock').textContent=f(DIS_BASE+el);
 document.getElementById('dn-clock').textContent=f((dnMornOn?DN_MORN_BASE:DIS_BASE)+el);
},1000);
/* -------- 个人资料页：「我的」头部头像/昵称区进入；昵称半屏编辑，保存即时更新头部与本页 -------- */
function nickEditSheet(){
  showSheet('<h3>修改昵称</h3>'+
   '<div class="kv" style="align-items:center"><span class="k">昵称</span><span class="v"><input type="text" id="pf-nick" value="'+document.getElementById('prof-nick').textContent+'" maxlength="12"></span></div>'+
   '<button class="btn pri blk" style="margin-top:10px" onclick="profileSave()">保存</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
function profileSave(){
  const v=document.getElementById('pf-nick').value.trim();
  if(!v){toast('昵称不能为空');return}
  document.querySelector('#sc-me .me-user .nm').textContent=v;
  document.getElementById('prof-nick').textContent=v;
  closeSheet();toast('已保存');
}
/* -------- 我的性别修改：我的资料「性别」行进入，半屏单选 -------- */
let mySex='女';
function mySexSheet(){
  wheelSheet('修改性别',['男','女'],mySex,v=>{
    mySex=v;document.getElementById('my-sex').textContent=v;
    closeSheet();toast('已保存');
  });
}
/* -------- 我的资料：换绑手机号（两步短信验证：先验证当前手机号，再绑定新手机号） -------- */
/* 掩码只有前 3 后 4，用掩码比对会把 138xxxx6688 全判成「相同」，故另存完整号码做精确比对 */
let myPhoneFull='13800006688',myPhoneMask='138****6688';
/* 原号停机兜底出口（「收不到验证码」半屏，内含微信快捷验证与联系客服两条路径）：微信手机号快捷验证本阶段暂不实现，
   故整个出口默认隐藏、由演示说明 chip 内开关控制显示，函数与半屏模板一并保留不删除，后续阶段开关默认置 on 即恢复 */
function wxVerifyOn(){return localStorage.getItem('proto-wxverify')==='on'}
function toggleWxVerify(){localStorage.setItem('proto-wxverify',wxVerifyOn()?'off':'on');renderDemo()}
function phoneChangeSheet(){
  const on=wxVerifyOn();
  showSheet('<h3>更换手机号</h3>'+
   '<div class="desc">为保障账号安全，请先验证当前手机号 '+myPhoneMask+'。</div>'+
   '<div style="display:flex;gap:8px;align-items:center">'+
    '<input type="text" id="pc-old-code" maxlength="6" placeholder="请输入验证码" style="flex:1">'+
    '<button class="btn ghost sm" style="white-space:nowrap;padding:10px 13px;flex-shrink:0" onclick="pcSend(this)">获取验证码</button>'+
   '</div>'+
   (on?'<div style="margin-top:11px;text-align:center"><span style="font-size:12.5px;color:var(--navy);font-weight:600;cursor:pointer" onclick="pcOldUnusable()">原手机号已停用，收不到验证码？</span></div>':'')+
   '<button class="btn pri blk" style="margin-top:'+(on?13:14)+'px" onclick="pcStep2()">下一步</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
/* 原手机号不可用：微信快捷验证优先，两者都不可用转客服人工核验 */
function pcOldUnusable(){
  showSheet('<h3>收不到验证码</h3>'+
   '<div class="desc">原手机号 '+myPhoneMask+' 已停机或不再使用时，可改用微信绑定的手机号验证；若两者都不可用，请联系客服核验身份后协助换绑。</div>'+
   '<button class="btn pri blk" onclick="pcWxVerify()">用微信绑定的手机号验证</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="demoToast(\'演示：真实产品拨打客服电话\')">联系客服</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="phoneChangeSheet()">返回</button>');
}
/* 微信手机号快捷验证：拉起微信授权取号，与账号当前手机号比对，一致即通过第一步身份验证。
   号码停机不影响微信侧的号码登记记录，这是本兜底成立的前提；但取号仍需微信侧运营商核验通过，
   核验失败则本通道不可用、最终仍落客服。证明强度弱于短信 OTP（只证明微信登记号一致，不证明当前持有 SIM 卡），
   故仅收在「收不到验证码」半屏内、不与短信并列为主路径（design.md 13.3.4-3） */
function pcWxVerify(){openSheet('wxauthbind')}
function pcWxPick(n){
  const picked='138****'+n;
  if(picked===myPhoneMask){                      /* 与账号当前手机号一致 → 第一步通过，直接进第二步（新号仍须短信验归属） */
    closeSheet();toast('已通过微信验证');
    setTimeout(pcStep2Sheet,700);return;
  }
  showSheet('<h3>验证未通过</h3>'+                 /* 不一致 → 不能作为身份凭据，转客服人工核验 */
   '<div class="desc">您授权的手机号 '+picked+' 与账号当前手机号 '+myPhoneMask+' 不一致，无法用于身份验证。请联系客服核验身份后协助换绑。</div>'+
   '<button class="btn pri blk" onclick="demoToast(\'演示：真实产品拨打客服电话\')">联系客服</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="pcWxVerify()">换个号码试试</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="pcOldUnusable()">返回</button>');
}
function pcSend(btn){
  btn.disabled=true;let s=60;btn.textContent='已发送 60s';
  const iv=setInterval(()=>{
    if(!document.body.contains(btn)){clearInterval(iv);return}   // 半屏已切换/关闭则停表
    s--;if(s<=0){clearInterval(iv);btn.disabled=false;btn.textContent='重新获取'}else btn.textContent='已发送 '+s+'s';
  },1000);
  toast('验证码已发送');
}
function pcStep2(){
  const cd=document.getElementById('pc-old-code').value.trim();
  if(!/^\d{6}$/.test(cd)){toast('请输入 6 位数字验证码');return}
  pcStep2Sheet();
}
/* 第二步半屏单独成函数：短信验证与微信快捷验证两条路径都要落到这里，后者没有验证码输入框可校验 */
function pcStep2Sheet(){
  showSheet('<h3>绑定新手机号</h3>'+
   '<div class="kv" style="align-items:center"><span class="k">新手机号</span><span class="v"><input type="text" id="pc-new-ph" maxlength="11" placeholder="请输入 11 位手机号"></span></div>'+
   '<div class="kv" style="align-items:center;margin-top:6px"><span class="k">验证码</span><span class="v" style="display:flex;gap:8px"><input type="text" id="pc-new-code" maxlength="6" placeholder="请输入验证码" style="flex:1;min-width:0"><button class="btn ghost sm" style="white-space:nowrap;padding:10px 13px;flex-shrink:0" onclick="pcSendNew(this)">获取验证码</button></span></div>'+
   '<button class="btn pri blk" style="margin-top:14px" onclick="pcConfirm()">确认换绑</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
/* 新号可用性校验（发码与确认两处同口径）：返回错误文案，null 为可用
   占用号不得发码，否则等同向无关用户发骚扰短信（design.md 13.3.4-1）；演示用占用号 13900000000，真实产品查全库注册号 */
function pcNewPhoneErr(ph){
  if(!/^1\d{10}$/.test(ph))return '请输入 11 位手机号';
  if(ph===myPhoneFull)return '新手机号与当前手机号相同';
  if(ph==='13900000000')return '该手机号已注册智小徽账号，请更换或先注销原账号';
  return null;
}
function pcSendNew(btn){
  const err=pcNewPhoneErr(document.getElementById('pc-new-ph').value.trim());
  if(err){toast(err);return}
  pcSend(btn);
}
function pcConfirm(){
  const ph=document.getElementById('pc-new-ph').value.trim(),cd=document.getElementById('pc-new-code').value.trim();
  const err=pcNewPhoneErr(ph);
  if(err){toast(err);return}
  if(!/^\d{6}$/.test(cd)){toast('请输入 6 位数字验证码');return}
  myPhoneFull=ph;myPhoneMask=ph.slice(0,3)+'****'+ph.slice(7);
  ['my-phone-mask','me-phone-mask','fam-me-phone','sw-phone-mask'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.textContent=myPhoneMask;
  });
  closeSheet();toast('换绑成功，请用新号登录');   /* 换绑不退出登录：登录态绑定账号而非手机号，用户刚完成两步验证 */
}
/* -------- 孩子性别修改：孩子详情「性别」行进入；姓名/学校/班级由学校名册维护，页面只读展示 -------- */
let childSex='男';
function childSexSheet(){
  if(childGrad)return; /* 毕业态只读 */
  wheelSheet('修改性别',['男','女'],childSex,v=>{
    childSex=v;document.getElementById('child-sex').textContent=v;
    closeSheet();toast('已保存');
  });
}
/* -------- 孩子资料：修改出生日期（年/月/日三列滚轮选择，月/年变化联动当月天数） -------- */
let childBirth='2017-03-12',dpTimer;
function childBirthSheet(){
  if(childGrad)return; /* 毕业态只读 */
  const p=childBirth.split('-').map(Number);
  showSheet('<h3>修改出生日期</h3>'+
   '<div class="dp-wheel">'+
    '<div class="dp-col" id="dp-y" onscroll="dpScroll(this)"></div>'+
    '<div class="dp-col" id="dp-m" onscroll="dpScroll(this)"></div>'+
    '<div class="dp-col" id="dp-d" onscroll="dpScroll(this)"></div>'+
   '</div>'+
   '<div style="display:flex;gap:10px;margin-top:16px">'+
    '<button class="btn ghost" style="flex:1" onclick="closeSheet()">取消</button>'+
    '<button class="btn pri" style="flex:1.6" onclick="childBirthSave()">确定</button>'+
   '</div>');
  dpFill('dp-y',2010,2026,'年',p[0]);
  dpFill('dp-m',1,12,'月',p[1]);
  dpFill('dp-d',1,new Date(p[0],p[1],0).getDate(),'日',p[2]);
}
function dpFill(id,from,to,unit,sel){
  const el=document.getElementById(id);let h='';
  for(let i=from;i<=to;i++)h+='<div data-v="'+i+'" onclick="this.scrollIntoView({block:\'center\',behavior:\'smooth\'})">'+i+unit+'</div>';
  el.innerHTML=h;
  el.scrollTop=(Math.min(Math.max(sel,from),to)-from)*36;
  dpMark(el);
}
function dpScroll(el){
  dpMark(el);
  clearTimeout(dpTimer);
  dpTimer=setTimeout(dpDaysSync,150);   // 滚动停稳后按所选年月联动天数
}
function dpIdx(el){return Math.max(0,Math.min(Math.round(el.scrollTop/36),el.children.length-1))}
function dpMark(el){
  const idx=dpIdx(el),kids=el.children;
  for(let i=0;i<kids.length;i++)kids[i].classList.toggle('on',i===idx);
}
function dpVal(id){const el=document.getElementById(id);return +el.children[dpIdx(el)].dataset.v}
function dpDaysSync(){
  const dEl=document.getElementById('dp-d');
  if(!dEl)return;
  const days=new Date(dpVal('dp-y'),dpVal('dp-m'),0).getDate();
  if(dEl.children.length!==days)dpFill('dp-d',1,days,'日',Math.min(dpVal('dp-d'),days));
}
function childBirthSave(){
  const y=dpVal('dp-y'),m=dpVal('dp-m'),d=Math.min(dpVal('dp-d'),new Date(y,m,0).getDate());
  childBirth=y+'-'+String(m).padStart(2,'0')+'-'+String(d).padStart(2,'0');
  document.getElementById('child-birth').textContent=y+'年'+m+'月'+d+'日';
  closeSheet();toast('已保存');
}
/* 通用单列滚轮半屏（性别 / 我的关系等枚举选择共用）：确定时把当前选中值传给回调 */
let wheelOk=null;
function wheelSheet(title,opts,cur,onOk){
  wheelOk=onOk;
  showSheet('<h3>'+title+'</h3>'+
   '<div class="dp-wheel"><div class="dp-col" id="wheel-col" onscroll="dpMark(this)">'+
    opts.map(o=>'<div data-v="'+o+'" onclick="this.scrollIntoView({block:\'center\',behavior:\'smooth\'})">'+o+'</div>').join('')+
   '</div></div>'+
   '<div style="display:flex;gap:10px;margin-top:16px">'+
    '<button class="btn ghost" style="flex:1" onclick="closeSheet()">取消</button>'+
    '<button class="btn pri" style="flex:1.6" onclick="wheelConfirm()">确定</button>'+
   '</div>');
  const el=document.getElementById('wheel-col');
  el.scrollTop=Math.max(0,opts.indexOf(cur))*36;
  dpMark(el);
}
function wheelConfirm(){
  const el=document.getElementById('wheel-col');
  wheelOk(el.children[dpIdx(el)].dataset.v);
}
/* -------- 孩子资料：修改现住址（所在地区省/市/区县逐级选择 + 详细地址） -------- */
/* 省/市/区县演示数据；直辖市市级与省级同名，选择时自动跳过市级 */
const REGIONS={
 '北京市':{'北京市':['东城区','西城区','朝阳区','海淀区','丰台区','通州区']},
 '上海市':{'上海市':['黄浦区','徐汇区','静安区','浦东新区','闵行区','宝山区']},
 '浙江省':{'杭州市':['上城区','拱墅区','西湖区','滨江区','萧山区','余杭区'],'宁波市':['海曙区','江北区','镇海区','鄞州区'],'温州市':['鹿城区','龙湾区','瓯海区']},
 '江苏省':{'南京市':['玄武区','秦淮区','建邺区','鼓楼区','栖霞区'],'苏州市':['姑苏区','虎丘区','吴中区','相城区'],'无锡市':['梁溪区','锡山区','惠山区','滨湖区']},
 '广东省':{'广州市':['越秀区','海珠区','荔湾区','天河区','白云区'],'深圳市':['福田区','罗湖区','南山区','宝安区','龙岗区'],'珠海市':['香洲区','斗门区','金湾区']}
};
let childRegion=['浙江省','杭州市','西湖区'],childAddrDetail='望江路 128 号阳光花园 3 栋 502 室';
let addrDraft=null;   // 半屏编辑草稿：{region,detail}，仅「保存」时落回页面
function rgLabel(r,sep){return r[0]===r[1]?r[0]+(sep||'')+r[2]:r.join(sep||'')}
function childAddrSheet(){
  if(childGrad)return; /* 毕业态只读 */
  addrDraft={region:childRegion.slice(),detail:childAddrDetail};
  addrFormView();
}
function addrFormView(){
  showSheet('<h3>修改现住址</h3>'+
   '<div class="kv" style="align-items:center"><span class="k">所在地区</span><span class="v" style="display:flex;align-items:center;gap:6px;cursor:pointer" onclick="addrRegionView()"><span style="flex:1">'+rgLabel(addrDraft.region,' ')+'</span><span style="color:#C4CAD4;font-size:15px">›</span></span></div>'+
   '<div class="kv" style="align-items:center"><span class="k">详细地址</span><span class="v"><input type="text" id="ce-addr" value="'+addrDraft.detail+'" maxlength="40" placeholder="街道、楼栋门牌号"></span></div>'+
   '<button class="btn pri blk" style="margin-top:10px" onclick="childAddrSave()">保存</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
let rgStep,rgProv,rgCity;
function addrRegionView(){
  const inp=document.getElementById('ce-addr');if(inp)addrDraft.detail=inp.value;   // 切视图前暂存已输入的详细地址
  rgStep='province';rgProv=null;rgCity=null;
  rgRender();
}
function rgRender(){
  let crumb='',items;
  if(rgStep==='province'){items=Object.keys(REGIONS)}
  else if(rgStep==='city'){crumb='<div class="rgp-crumb"><span onclick="rgBack(\'province\')">'+rgProv+'</span><i>›</i></div>';items=Object.keys(REGIONS[rgProv])}
  else{crumb='<div class="rgp-crumb"><span onclick="rgBack(\'province\')">'+rgProv+'</span><i>›</i><span onclick="rgBack(\'city\')">'+rgCity+'</span><i>›</i></div>';items=REGIONS[rgProv][rgCity]}
  showSheet('<h3>选择所在地区</h3>'+crumb+'<div class="rgp-list">'+items.map(n=>{
    const last=rgStep==='district';
    const on=last&&addrDraft.region[0]===rgProv&&addrDraft.region[1]===rgCity&&addrDraft.region[2]===n;
    return '<div class="rgp-item'+(on?' on':'')+'" onclick="rgPick(\''+n+'\')"><span>'+n+'</span>'+(on?'<span style="color:var(--navy)">✓</span>':(last?'':'<span class="arr">›</span>'))+'</div>';
  }).join('')+'</div>');
}
function rgBack(step){rgStep=step;if(step==='province'){rgProv=null;rgCity=null}else{rgCity=null}rgRender()}
function rgPick(n){
  if(rgStep==='province'){
    rgProv=n;
    const cities=Object.keys(REGIONS[n]);
    if(cities.length===1&&cities[0]===n){rgCity=n;rgStep='district'}   // 直辖市跳过市级
    else{rgStep='city'}
    rgRender();
  }else if(rgStep==='city'){rgCity=n;rgStep='district';rgRender()}
  else{addrDraft.region=[rgProv,rgCity,n];addrFormView()}
}
function childAddrSave(){
  const v=document.getElementById('ce-addr').value.trim();
  if(!v){toast('请填写详细地址');return}
  childRegion=addrDraft.region;childAddrDetail=v;
  document.getElementById('child-addr').textContent=rgLabel(childRegion)+' '+v;
  closeSheet();toast('已保存');
}
/* 请假记录空态预览：与演示记录（含筛选条）互斥切换，恢复时按当前筛选重新渲染 */
function lvEmptyToggle(){
  const empty=document.getElementById('lv-empty'),on=empty.style.display==='none';
  empty.style.display=on?'':'none';
  document.getElementById('lv-fbar').style.display=on?'none':''; /* 空态隐藏筛选条（区块标题已去掉） */
  document.getElementById('lv-list').style.display=on?'none':'';
  if(on){document.getElementById('lv-fempty').style.display='none';document.getElementById('lv-more').style.display='none'}
  else lvApplyFilter();
}
/* -------- 请假页跟随当前孩子：首页宫格经 goLeave 按当前孩子路由，标题 / 记录卡 / 底部发起按钮与发起表单标题随孩子切换；
   毕业孩子（晓晴）仅在校期间历史单、隐藏发起按钮；详情深链（如消息页直达晓阳代请单）经 openLeaveDetail 同步列表上下文 -------- */
let lvKid='林晓乐';
function goLeave(){
  /* 离校生晓帆无独立请假演示数据：归档只读视图（页面机制与毕业生一致）以晓晴样例演示，toast 说明后不跳转 */
  if(kidInfo[curKid][2]===2){demoToast('演示简化：林晓帆无独立演示数据，归档只读视图以林晓晴为例（可切换到林晓晴查看）');return}
  lvChild(curKid);go('sc-leave-tab');
}
function lvNewOk(){
  const k=kidInfo[lvKid];
  if(k&&k[2]!==0){toast(lvKid+(k[2]===2?'已离校':'已毕业')+'，不能请假');lvChild(lvKid);go('sc-leave-tab');return false}
  document.getElementById('nl-title').textContent='发起请假 · '+lvKid;
  return true;
}
function lvChild(n){
  lvKid=n;
  const grad=n==='林晓晴';
  document.getElementById('lv-title').textContent='请假 · '+n;
  document.getElementById('lv-foot').style.display=grad?'none':'';
  if(!grad){
    document.getElementById('lv-newbtn').textContent='＋ 为 '+n+' 发起请假';
    document.getElementById('nl-title').textContent='发起请假 · '+n;
  }
  /* 切换孩子重置状态筛选到「全部」 */
  lvFilter='all';
  document.querySelectorAll('#lv-fbar .fchip').forEach((c,i)=>c.classList.toggle('on',i===0));
  lvApplyFilter();
}
/* -------- 请假单数据：三端共用 assets/leave-store.js（与老师端、学校端同一份，2026-11-05），本页读写都经它；
   当前账号为林家的「乐乐妈妈」，提交 / 撤销 / 申请销假 / 撤回节点的操作人取此称谓 -------- */
const LV_ME='乐乐妈妈';
const LV_CHIP={'待审批':'amber','退回补充':'amber','销假待确认':'amber','已通过':'teal','未通过':'red','已销假':'navy','已撤销':'gray','实际到校':'navy'};
/* 卡头附注：老师代请、老师代销（不用 .chip 类，不占状态位） */
function lvTags(r){
  const t=[];
  if(r.src==='teacher')t.push('老师代请');
  if(r.tl.some(x=>x.n==='已销假'&&x.sx==='（代销假）'))t.push('老师代销');
  return t.map((x,i)=>'<span style="font-size:10.5px;color:var(--navy);background:#E3EEFD;border-radius:8px;padding:2px 7px;margin-left:'+(i?5:7)+'px;font-weight:500;vertical-align:2px">'+x+'</span>').join('');
}
/* 详情、销假半屏与重叠校验用的视图：时间转为小程序显示格式「M月D日 HH:mm」，沿用发起请假的日期换算（nlOff / lvAbs） */
function lvView(r){return Object.assign({},r,{s:lvsMD(r.s),e:lvsMD(r.e),cx:r.cx?lvsMD(r.cx):undefined})}
function lvCardHTML(r){
  const v=lvView(r); /* 头像按单据性别取：本函数在脚本加载时即执行，此时文件后部的 kidInfo 尚未初始化 */
  return '<div class="card lv-card" onclick="openLeaveDetail(\''+r.id+'\')">'+
    '<div class="hd2"><b>'+r.ty+lvTags(r)+'</b><span class="chip '+LV_CHIP[r.st]+' plain">'+r.st+'</span></div>'+
    '<div class="kv2"><span class="k">开始时间</span><span>'+v.s+'</span></div>'+
    '<div class="kv2"><span class="k">结束时间</span><span>'+v.e+'</span></div>'+
    /* 销假待确认 / 已销假加「实际结束时间」行（原结束时间保留对照，整单销假带「（整单销假）」） */
    ((r.st==='销假待确认'||r.st==='已销假')&&v.cx?'<div class="kv2 cx"><span class="k">实际结束时间</span><span>'+v.cx+(v.cx===v.s?'（整单销假）':'')+'</span></div>':'')+
    '<div class="ft"><img src="assets/avatar-'+(r.girl?'girl':'boy')+'.png" alt="学生头像">'+r.stu+'<span class="tm">'+lvsMMDD(r.tm)+'</span></div></div>';
}
/* 请假记录状态筛选：与办理记录列表同构，「全部」固定 + 状态 chips 横滑过滤 */
let lvFilter='all';
/* 第一阶段隐藏「退回补充」「实际到校」状态（恢复对应记录时在此加回）；销假两态（销假待确认 / 已销假）为本次新增 */
const LV_STATES=['待审批','已通过','销假待确认','已销假','已撤销','未通过'];
(function(){
  document.getElementById('lv-fchips').innerHTML=LV_STATES
    .map(v=>'<button class="fchip" onclick="lvFilterPick(\''+v+'\',this)">'+v+'</button>').join('');
  lvApplyFilter(); /* 初始按默认孩子（晓乐）渲染 */
})();
function lvFilterPick(v,el){
  lvFilter=v;
  document.querySelectorAll('#lv-fbar .fchip').forEach(c=>c.classList.toggle('on',c===el));
  lvApplyFilter();
}
/* 当前孩子的记录按提交时间倒序；后续阶段的演示单（later）不列出，经演示说明预览入口查看 */
function lvApplyFilter(){
  if(document.getElementById('lv-empty').style.display!=='none')return; /* 空态预览中不重绘 */
  const list=lvsLoad().filter(r=>r.stu===lvKid&&!r.later&&(lvFilter==='all'||r.st===lvFilter)).sort((a,b)=>b.tm.localeCompare(a.tm));
  document.getElementById('lv-list').innerHTML=list.map(lvCardHTML).join('');
  document.getElementById('lv-more').style.display=list.length?'':'none';
  document.getElementById('lv-fempty').style.display=list.length?'none':'';
}
/* 演示：三端共用的请假数据恢复初值（老师端、学校端打开着的页面随之刷新） */
function lvDemoReset(){
  lvsReset();lvChild(lvKid);
  if(curScreen==='sc-leavedetail')openLeaveDetail(lvsGet(lvdCur)?lvdCur:'le14');
  demoToast('已恢复请假演示数据，老师端、学校端同步复位');
}
/* 其他标签页（老师端审批 / 确认销假 / 代请假 / 代销假，学校端恢复数据）改了请假数据：重绘列表与打开中的详情 */
lvsOnChange(()=>{lvApplyFilter();if(curScreen==='sc-leavedetail'&&lvdCur)openLeaveDetail(lvdCur)});
/* -------- 请假单详情：单页模板按状态渲染（列表各卡共用），待审批可撤销、已通过可申请销假、销假待确认可撤回，退回补充可同单重提（后续阶段） -------- */
/* 详情的时长行（2026-10-19）：销假待确认 → 原时长照旧（班主任确认前考勤仍按原时段），另列「销假后时长 ×（待确认）」；
   已销假 → 时长行显示实际时长并附「销假前 ×」，整单销假（实际结束 = 开始）显示「整单销假，不计请假时长」 */
function lvDurRows(r){
  const whole=r.cx&&r.cx===r.s;
  const od=r.odur?'<span style="color:var(--ink-3);font-size:12px;margin-left:6px">销假前 '+r.odur+'</span>':'';
  let h='<div class="kv"><span class="k">时长（上学日）</span><span class="v">'+(r.st==='已销假'&&whole?'整单销假，不计请假时长':r.dur)+od+'</span></div>';
  if(r.st==='销假待确认'&&r.cx)h+='<div class="kv"><span class="k">销假后时长</span><span class="v">'+(whole?'整单销假，不计请假时长':(r.cxDur||lvCancelDur(r,r.cx)))+'<span style="color:#C97A12;font-size:12px;margin-left:6px">（待确认）</span></span></div>';
  return h;
}
/* 返回键回到进入详情前的页面（2026-11-04）：请假列表、消息列表、服务号推送示意页等入口各自回原页，与小程序页面栈后退一致；
   详情页内重绘（如销假后刷新本页）不改来源；hash 直达无上一页时回请假列表 */
let lvdFrom='sc-leave-tab',lvdCur='';
function lvdBack(){go(lvdFrom)}
function openLeaveDetail(k,from){
  if(from)lvdFrom=from;else if(curScreen!=='sc-leavedetail')lvdFrom=curScreen||'sc-leave-tab';
  const raw=lvsGet(k);if(!raw){go(lvdFrom);return}
  const r=lvView(raw);lvdCur=k;
  if(r.stu!==lvKid)lvChild(r.stu); /* 深链进入时把列表上下文同步到该孩子，返回列表即其记录 */
  let h='<div class="card">'+
    '<div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:15px">'+r.ty+'</b><span class="chip '+LV_CHIP[r.st]+' plain">'+r.st+'</span></div>'+
    '<div class="hr"></div>'+
    '<div class="kv"><span class="k">学生</span><span class="v">'+r.stu+' · '+r.cls+'</span></div>'+
    '<div class="kv"><span class="k">开始时间</span><span class="v">'+r.s+'</span></div>'+
    '<div class="kv"><span class="k">结束时间</span><span class="v">'+r.e+'</span></div>'+
    (r.cx?'<div class="kv"><span class="k">实际结束时间</span><span class="v">'+r.cx+'</span></div>':'')+
    lvDurRows(r)+
    (r.infect?'<div class="kv"><span class="k">是否传染病</span><span class="v">'+r.infect+'</span></div>':'')+
    (r.sym?'<div class="kv"><span class="k">病状</span><span class="v">'+r.sym+'</span></div>':'')+
    '<div class="kv"><span class="k">事由</span><span class="v">'+r.rsn+'</span></div>'+
    (r.ph&&r.ph.length?'<div class="kv"><span class="k">证明材料</span><span class="v" style="display:flex;gap:8px;flex-wrap:wrap">'+r.ph.map((x,i)=>'<img src="'+x+'" alt="证明材料照片" style="width:56px;height:56px;border-radius:8px;object-fit:cover;cursor:pointer" onclick="lvShotOpen(\''+k+'\','+i+')">').join('')+'</span></div>':'')+
   '</div>';
  /* 流转记录：节点名 | MM-DD HH:mm · 操作人，附注换行（未通过、不同意销假、退回补充的意见警示色）；待审批节点只占位 */
  h+='<div class="card"><h4 style="margin-bottom:6px">流转记录</h4>'+
    r.tl.map((x,ti)=>'<div class="kv"><span class="k">'+x.n+'</span><span class="v">'+(x.n==='待审批'?'等待班主任处理':lvsMMDD(x.at)+' · '+lvsWho(x))+
      (x.nt?'<br><span style="color:'+(x.w?'var(--cinnabar)':'var(--ink-2)')+';font-size:12px">'+x.nt+'</span>':'')+
      (x.ph?'<div style="display:flex;gap:6px;margin-top:5px">'+x.ph.map((i,j)=>'<img src="'+r.ph[i]+'" alt="补充证明材料照片" style="width:34px;height:34px;border-radius:6px;object-fit:cover;cursor:pointer" onclick="lvShotOpenStep(\''+k+'\','+ti+','+j+')">').join('')+'</div>':'')+'</span></div>').join('')+'</div>';
  if(r.op)h+='<div class="card"><div class="kv"><span class="k">老师意见</span><span class="v" style="color:var(--cinnabar)">'+r.op+'</span></div>'+
    '<h4 style="margin:8px 0 8px">补充说明</h4>'+
    '<textarea rows="3" placeholder="补充老师要求的信息">由妈妈陪同回外婆家（邻市），7月11日早返校。</textarea>'+
    '<h4 style="margin:12px 0 4px">证明材料</h4>'+
    '<div class="muted" style="font-size:11.5px;margin:0 0 8px">最多 5 个，最大 10 MB/个</div>'+
    '<div class="up-grid" id="lvd-upload"><button class="add" onclick="nlUpload(\'lvd-upload\')">＋</button></div></div>';
  document.getElementById('lvd-body').innerHTML=h;
  const f=document.getElementById('lvd-foot'),grad=(kidInfo[r.stu]||[])[2]!==0||r.arch;
  if(r.st==='退回补充'){
    f.innerHTML='<button class="btn ghost" onclick="goTab(\'sc-leave-tab\');toast(\'已撤销该请假单\')">撤销请假单</button>'+
      '<button class="btn pri" onclick="goTab(\'sc-leave-tab\');toast(\'已补充提交，重回待审批\')">补充并重新提交</button>';
    f.style.display='';
  }else if(r.st==='待审批'){
    f.innerHTML='<button class="btn ghost blk" onclick="leaveRevokeConfirm(\''+k+'\')">撤销请假单</button>';
    f.style.display='';
  }else if(r.st==='已通过'&&!grad&&!r.later){
    /* 已通过单（含老师代请、已结束的历史单）均可发起销假；毕业孩子的历史单只读 */
    f.innerHTML='<button class="btn ghost blk" onclick="lvCancelSheet(\''+k+'\')">申请销假</button>';
    f.style.display='';
  }else if(r.st==='销假待确认'){
    /* 班主任确认前可撤回销假申请（与待审批单可撤销同理）；确认 / 不同意后不可撤回，只能重新申请 */
    f.innerHTML='<button class="btn ghost blk" onclick="lvCancelWithdrawConfirm(\''+k+'\')">撤回销假申请</button>';
    f.style.display='';
  }else f.style.display='none';
  go('sc-leavedetail');
}
/* -------- 销假：已通过单在详情底栏发起，半屏填「实际结束时间 + 说明」，提交后单据转「销假待确认」、班主任确认后转「已销假」（演示不联动教师端）。
   实际结束时间范围 = 请假开始 ~ 原结束时间（30 分钟粒度，与发起请假同一滚轮）：等于开始时间即整单销假，介于其间即提前结束；
   原结束时间已过的单同样可销（补销假，不设时限），默认值：未开始的单 = 开始时间、进行中的单 = 当前时刻向上取整到半点、已结束的单留空由家长选择。
   家长自助销假需班主任确认，确认前请假单维持原时段生效（考勤不变）；老师端代销假即时生效。销假待确认期间家长可撤回申请（lvCancelWithdraw）；班主任不同意 → 回到已通过可重新申请，确认 → 已销假为终态不可撤回、不可再申请 -------- */
let lvCancelKey='',lvCancelTime='',lvCancelNote='';
const LV_NOW='7月6日 17:05'; /* 演示「现在」，与 leave-store.js 的演示时钟一致 */
/* 撤回销假申请：仅「销假待确认」可撤回，撤回后单据回到「已通过 · 原时段」、实际结束时间行消失、时长恢复原值，流转记录保留「申请销假」并追加「撤回销假申请」节点，底栏重新出现「申请销假」；
   命名用「撤回」与请假单的「撤销」区分。班主任已处理（确认 / 不同意）时不再撤回，提示后按最新状态重绘 */
function lvCancelWithdrawConfirm(k){
  sheetHTML('<h3>撤回销假申请？</h3>'+
   '<div class="desc">撤回后请假单维持原时段，仍为已通过，之后可重新申请销假。</div>'+
   '<div class="row" style="gap:10px;margin-top:12px"><button class="btn ghost" style="flex:1" onclick="closeSheet()">再想想</button><button class="btn pri" style="flex:1" onclick="lvCancelWithdraw(\''+k+'\')">确认撤回</button></div>');
}
function lvCancelWithdraw(k){
  closeSheet();
  let gone=false;
  lvsUpdate(k,(r,L)=>{
    if(r.st!=='销假待确认'){gone=true;return false}
    r.st='已通过';delete r.cx;delete r.cxDur;
    r.tl.push({n:'撤回销假申请',at:lvsNow(L),p:LV_ME,nt:'班主任确认前自行撤回，请假单维持原时段'});
  });
  lvApplyFilter();openLeaveDetail(k);
  toast(gone?'班主任已处理该申请':'已撤回销假申请');
}
function lvCancelDefault(r){
  const now=lvAbs(LV_NOW);
  if(lvAbs(r.s)>now)return r.s;
  if(lvAbs(r.e)<=now)return '';
  const m=Math.ceil(now/30)*30,d=Math.floor(m/1440),mm=m%1440;
  return nlFmt(d)+' '+(''+Math.floor(mm/60)).padStart(2,'0')+':'+(mm%60?'30':'00');
}
/* 销假申请半屏（参考小程序销假页版式）：学生行 → 请假起止时间（只读）→ 实际结束时间（点击拉起滚轮，带星期）/ 实际请假时长（按上学日自动算）/ 销假理由（200 字） */
const lvWk=v=>{const d=v.split(' ');return d[0]+' '+NL_WK[new Date(2026,6,6+nlOff(d[0])).getDay()]+' '+d[1]};
function lvCancelDur(r,v){
  if(!v)return '—';
  if(v===r.s)return '0 小时（整单销假）';
  const sd=nlSchoolMins(r.s,v,r.cls),dd=sd.days,hh=+(sd.mins/60).toFixed(1);
  return (!dd&&!hh)?'0 小时':(dd?dd+' 天':'')+(hh?(dd?' ':'')+hh+' 小时':'');
}
function lvCancelSheet(k,keep){
  const r=lvView(lvsGet(k));
  if(!keep){lvCancelKey=k;lvCancelTime=lvCancelDefault(r);lvCancelNote=''}
  const stu=[r.stu,r.cls],girl=r.girl;
  sheetHTML('<h3>申请销假</h3>'+
   '<div class="cx-stu"><img src="assets/avatar-'+(girl?'girl':'boy')+'.png" alt="学生头像"><b>'+stu[0]+'</b><span>'+stu[1]+'</span></div>'+
   '<div class="cx-grp">'+
    '<div class="cx-row"><span>请假开始时间</span><b>'+lvWk(r.s)+'</b></div>'+
    '<div class="cx-row"><span>请假结束时间</span><b>'+lvWk(r.e)+'</b></div>'+
   '</div>'+
   '<div class="cx-grp">'+
    '<div class="cx-row" onclick="lvCancelPick()"><span>实际结束时间 <em>*</em></span><b'+(lvCancelTime?'':' class="ph"')+'>'+(lvCancelTime?lvWk(lvCancelTime):'请选择')+'</b><i class="arr">›</i></div>'+
    '<div class="cx-row"><span>实际请假时长</span><b>'+lvCancelDur(r,lvCancelTime)+'</b></div>'+
    '<div class="cx-row col"><span>销假理由 <small id="lv-cx-cnt">（'+lvCancelNote.length+'/200）</small></span><textarea id="lv-cx-note" rows="3" maxlength="200" placeholder="请填写销假理由" oninput="document.getElementById(\'lv-cx-cnt\').textContent=\'（\'+this.value.length+\'/200）\'">'+lvCancelNote+'</textarea></div>'+
   '</div>'+
   '<div class="row" style="gap:10px;margin-top:16px"><button class="btn ghost" style="flex:1" onclick="closeSheet()">取消</button><button class="btn pri" style="flex:1" onclick="lvCancelSubmit()">提交销假申请</button></div>');
}
function lvCancelPick(){lvCancelNote=document.getElementById('lv-cx-note').value;nlDateSheet('cancel')}
function lvCancelSubmit(){
  const r0=lvView(lvsGet(lvCancelKey)),v=lvCancelTime,note=document.getElementById('lv-cx-note').value.trim();
  if(!v){toast('请选择实际结束时间');return}
  if(lvAbs(v)<lvAbs(r0.s)||lvAbs(v)>=lvAbs(r0.e)){toast('结束时间需在请假时段内');return}
  closeSheet();
  let gone=false;
  /* 提交后转「销假待确认」，进入该班班主任「待我审批」；确认前请假单维持原时段。老师已代销假等导致单据不再是已通过时不写入 */
  lvsUpdate(lvCancelKey,(r,L)=>{
    if(r.st!=='已通过'){gone=true;return false}
    const whole=v===r0.s;
    r.st='销假待确认';r.cx=lvsFull(v);r.cxDur=whole?'0 小时':lvCancelDur(r0,v);
    r.tl.push({n:'申请销假',at:lvsNow(L),p:LV_ME,nt:'实际结束时间 '+v+(whole?'（整单销假）':'')+(note?' · '+note:'')+'，等待班主任确认'});
  });
  lvApplyFilter();openLeaveDetail(lvCancelKey);
  toast(gone?'该请假单状态已变化':'销假申请已提交');
}
/* 证明材料大图：复用通行抓拍的全屏预览遮罩（点击任意位置关闭），不跳屏；多图时左右箭头循环切换、标题带页码 */
let lvShotArr=[],lvShotTy='',lvShotIdx=0,lvShotStu='';
function lvShotOpen(k,i){const r=lvsGet(k);lvShotArr=r.ph;lvShotTy=r.ty;lvShotStu=r.stu;lvShotIdx=i;lvShotGo()}
/* 流转节点入口：仅浏览该轮补传的照片子集 */
function lvShotOpenStep(k,ti,j){const r=lvsGet(k);lvShotArr=r.tl[ti].ph.map(x=>r.ph[x]);lvShotTy=r.ty;lvShotStu=r.stu;lvShotIdx=j;lvShotGo()}
function lvShotGo(){shotMode='lv';lvShotShow();document.getElementById('shot-view').classList.add('show')}
function lvShotShow(){
  const n=lvShotArr.length;
  document.querySelector('#shot-view img').src=lvShotArr[lvShotIdx];
  document.getElementById('shot-cap').style.display='';
  document.getElementById('shot-cap').textContent=lvShotStu+' · '+lvShotTy+'证明材料'+(n>1?' '+(lvShotIdx+1)+'/'+n:'');
  document.getElementById('shot-prev').style.display=n>1?'flex':'none';
  document.getElementById('shot-next').style.display=n>1?'flex':'none';
}
function lvShotNav(d,ev){
  ev.stopPropagation();
  const n=lvShotArr.length;
  lvShotIdx=(lvShotIdx+d+n)%n;lvShotShow();
}
/* 点评图片大图：复用同一全屏遮罩（点任意处关闭），同一记录多图时左右箭头循环切换、底部带页码，单图不显示箭头 */
let evImgArr=[],evImgIdx=0;
function evImgView(el){
  const imgs=[...el.parentNode.querySelectorAll('img')];
  evImgArr=imgs.map(im=>im.getAttribute('src'));
  evImgIdx=Math.max(0,imgs.indexOf(el));
  shotMode='ev';
  evImgShow();
  document.getElementById('shot-view').classList.add('show');
}
function evImgShow(){
  const n=evImgArr.length;
  document.querySelector('#shot-view img').src=evImgArr[evImgIdx];
  const cap=document.getElementById('shot-cap');
  cap.style.display=n>1?'':'none';
  cap.textContent=(evImgIdx+1)+' / '+n;
  document.getElementById('shot-prev').style.display=n>1?'flex':'none';
  document.getElementById('shot-next').style.display=n>1?'flex':'none';
}
function shotNav(d,ev){
  if(shotMode!=='ev')return lvShotNav(d,ev);
  ev.stopPropagation();
  const n=evImgArr.length;
  evImgIdx=(evImgIdx+d+n)%n;evImgShow();
}
function leaveRevokeConfirm(k){
  sheetHTML('<h3>撤销这条请假单？</h3>'+
   '<div class="desc">撤销后该单即刻失效，如需请假可重新发起。</div>'+
   '<div class="row" style="gap:10px;margin-top:12px"><button class="btn ghost" style="flex:1" onclick="closeSheet()">再想想</button><button class="btn pri" style="flex:1" onclick="leaveRevoke(\''+k+'\')">确认撤销</button></div>');
}
/* 撤销：「待审批」节点替换为「已撤销」节点（操作人为撤销的家长，附注「审批前自行撤销」），该单移出老师端「待我审批」；班主任已先处理时不再撤销，提示后按最新状态重绘 */
function leaveRevoke(k){
  closeSheet();
  let gone=false;
  lvsUpdate(k,(r,L)=>{
    if(r.st!=='待审批'){gone=true;return false}
    r.st='已撤销';r.tl=r.tl.filter(x=>x.n!=='待审批');r.tl.push({n:'已撤销',at:lvsNow(L),p:LV_ME,nt:'审批前自行撤销'});
  });
  lvApplyFilter();openLeaveDetail(k);
  toast(gone?'该单已被班主任处理':'请假单已撤销');
}
/* -------- 提交请假：基础校验 + 重叠拦截 --------
   重叠校验比对本孩子处于「待审批 / 已通过」状态的有效单（已撤销、未通过不计入，撤销后即时生效；
   后续阶段「退回补充」同待审批口径），区间按左闭右开比较——新单开始恰等于已有单结束（首尾相接的续假）
   不算重叠、直接放行，考勤侧按「多单合并取并集」口径判定（docs/考勤状态定义.md 第 6 节）。
   存在重叠即拦截提交（交互对齐主流请假应用的居中弹窗式）：弹「当前时间段已存在请假记录」，
   正文列出已有请假时段（完整覆盖 / 部分重叠仅措辞区分），左「返回修改」右「查看请假记录」。
   真实产品：前端选完结束时间即时提示（原型收敛为提交时校验），服务端提交接口做同样校验防绕过
   （家人共享下父母双方可能同时发起）；并发提交、老师代请假仍可能产生重叠单，
   考勤判定与时长统计由合并并集兜底，审批侧向老师提示时段重叠 -------- */
const lvAbs=v=>{const s=v.split(' '),t=s[1].split(':');return nlOff(s[0])*1440+ +t[0]*60+ +t[1]};
function submitLeave(){
  if(!lvNewOk())return;
  const typeEl=document.querySelector('#nl-type .on');
  if(!typeEl){toast('请选择请假类型');return}
  if(typeEl.textContent==='病假'&&!document.querySelector('#nl-infect .on')){toast('请选择是否传染病');return}
  const sv=document.getElementById('nl-start').value,ev=document.getElementById('nl-end').value;
  if(!sv||!ev){toast('请选择开始与结束时间');return}
  const s=lvAbs(sv),e=lvAbs(ev);
  if(e<=s){toast('结束时间需晚于开始时间');return}
  /* 事由必填：页面标必填星号，空白（含纯空格）拦截；置于时间有效性之后、空单与重叠拦截之前 */
  if(!document.getElementById('nl-reason').value.trim()){toast('请填写请假事由');return}
  /* 上学日时长为 0 的空单拦截：所选时段与在校时段无重叠（整段非上学日，或落在该班应出勤时段之外，如午休 11:30–13:30），
     请了也不覆盖任何应到时段——考勤判定、缺勤告警、时长统计均不受影响，且仍会占用班主任审批队列，
     故与重叠单同口径直接拦下。交互用 toast（改起止即可解决，不需要像重叠拦截那样给「查看请假记录」出口）。
     两种成因分开措辞，帮家长定位是日期选错还是时间选错。
     真实产品：选完结束时间即时提示（原型收敛为提交时校验），服务端提交接口做同样校验防绕过；
     上学日 = 校历（法定节假日、寒暑假、调休上课日）与该班级班次共同决定：当日无班次即非上学日（如某班周一不排课），故 toast 不点名「周末」；
     在校时段与校历、班次均为校级配置，此处演示按该班班次各时段（见 leave-store.js）与周末口径 */
  const sd=nlSchoolMins(sv,ev);
  if(sd.days===0&&sd.mins===0){
    toast(sd.hasSchoolDay?'非上学时间，无需请假':'非上学日，无需请假');
    return;
  }
  /* 比对集合（2026-10-21）：待审批、已通过、销假待确认按原时段；已销假按缩短后的「开始 ~ 实际结束时间」，整单销假不再占用时段 */
  const ovl=lvsLoad().filter(r=>r.stu===lvKid&&!r.later&&['待审批','已通过','销假待确认','已销假'].includes(r.st)).map(lvView)
    .filter(r=>lvAbs(r.s)<lvAbs(lvEffEnd(r))&&lvAbs(r.s)<e&&lvAbs(lvEffEnd(r))>s).map(r=>[r.id,r]);
  if(ovl.length){lvOvlSheet(s,e,ovl);return}
  lvDoSubmit();
}
/* 提交：按表单生成一张待审批单写入共用数据（进入该班班主任「待我审批」，学校端请假管理同步可见），回请假列表 */
function lvDoSubmit(){
  const ty=document.querySelector('#nl-type .on').textContent,kid=kidInfo[lvKid];
  const L=lvsLoad(),now=lvsNow(L);
  const r={id:'p'+Date.now().toString(36),stu:lvKid,cls:kid[1].split(' · ')[0],girl:/girl/.test(kid[3])?1:0,ty,
    s:lvsFull(document.getElementById('nl-start').value),e:lvsFull(document.getElementById('nl-end').value),dur:document.getElementById('nl-dur').textContent,
    st:'待审批',src:'parent',rsn:document.getElementById('nl-reason').value.trim(),tm:now,tl:[{n:'提交',at:now,p:LV_ME},{n:'待审批'}]};
  if(kid[4])r.sch=kid[4]; /* 外校就读的孩子：单据归属该校，本校老师端、学校端不显示 */
  if(ty==='病假'){
    r.infect=document.querySelector('#nl-infect .on').textContent;
    const sym=[...document.querySelectorAll('#nl-symptom .fchip.on')].map(b=>b.textContent);if(sym.length)r.sym=sym.join('、');
  }
  const ph=[...document.querySelectorAll('#nl-upload .ph img')].map(i=>i.getAttribute('src'));if(ph.length)r.ph=ph;
  L.push(r);lvsSave(L);
  lvNewReset();lvChild(lvKid);
  goTab('sc-leave-tab');
  toast('已提交，待班主任审批');
}
/* 提交后清空发起表单（下次进入为新表单） */
function lvNewReset(){
  document.querySelectorAll('#nl-type button,#nl-infect button,#nl-symptom .fchip').forEach(b=>b.classList.remove('on'));
  ['nl-sick-extra','nl-time-row','nl-dur-row'].forEach(id=>document.getElementById(id).style.display='none');
  document.getElementById('nl-start').value='';document.getElementById('nl-end').value='';
  document.getElementById('nl-reason').value='';
  const cnt=document.getElementById('nl-reason-cnt');if(cnt)cnt.textContent='（0/200）';
  document.querySelectorAll('#nl-upload .ph').forEach(x=>x.remove());nlUpFit('nl-upload');
}
/* 生效中的结束时间：已销假取实际结束时间，其余取原结束时间 */
function lvEffEnd(r){return r.st==='已销假'&&r.cx?r.cx:r.e}
let lvOvlKeys=[];
function lvOvlSheet(s,e,ovl){
  /* 并集覆盖判定：重叠单按开始时间排序后接力推进覆盖点（重叠 / 相接区间自然合并），推进到结束即完全包含 */
  let cur=s;
  ovl.map(([,r])=>[lvAbs(r.s),lvAbs(lvEffEnd(r))]).sort((a,b)=>a[0]-b[0]).forEach(([a,b])=>{if(a<=cur)cur=Math.max(cur,b)});
  const covered=cur>=e;
  lvOvlKeys=ovl.map(([k])=>k);
  document.getElementById('lv-ovl-txt').textContent=
    ovl.map(([,r])=>r.s+' 至 '+lvEffEnd(r)).join('、')+' 已请假，'+
    (covered?'所选时段已被完整覆盖，无需重复提交，请返回修改':'与所选时段重叠，请返回修改后再提交');
  document.getElementById('lv-ovl-dlg').classList.add('show');
}
function lvOvlClose(){document.getElementById('lv-ovl-dlg').classList.remove('show')}
/* 查看请假记录：单张重叠单直达该单详情（可核对时段、待审批单可撤销），多张回请假记录列表 */
function lvOvlView(){
  lvOvlClose();
  if(lvOvlKeys.length===1)openLeaveDetail(lvOvlKeys[0]);
  else go('sc-leave-tab');
}
/* 演示说明入口：预填事假与指定起止后直接走提交校验，演示重叠分级三种走向与 0 时长空单拦截两种成因 */
function lvFormDemo(s,e){
  lvChild('林晓乐');go('sc-newleave');
  nlTypePick(document.querySelectorAll('#nl-type button')[1]);
  document.getElementById('nl-start').value=s;document.getElementById('nl-end').value=e;
  document.getElementById('nl-reason').value='演示：随家人办事';
  nlCalcDur();submitLeave();
}
/* -------- 底部 Picker（微信小程序风格） -------- */
const pickerData={
  grade:{title:'选择年级',opts:['1年级','2年级','3年级','4年级','5年级','6年级']},
  cls:{title:'选择班级',opts:['1班','2班','3班','4班']}
};
const pickerVal={school:'市实验一小',grade:'3年级',cls:'2班'};
/* -------- 添加孩子入口上下文：me=已绑定账号（我的），nochild=无绑定账号（「未匹配到孩子」承接页，人设 138****9900）——
   无绑定账号无「已绑定学校」快捷项且表单不预填，返回与提交落点也随入口分支 -------- */
let addFrom='me';
function goAddChild(from){
  addFrom=from;
  /* 无绑定账号（未匹配承接页 / 注册办理码新用户人设）表单不预填；
     注册办理码新用户例外：学校由码携带的学校信息带出并锁定（码为该校专属公开物料、无泄露面），年级 / 班级仍需自选 */
  const noBind=from==='nochild'||apNewUser;
  pickerVal.school=apNewUser?'市实验一小':(noBind?'':'市实验一小');
  pickerVal.grade=noBind?'':'3年级';pickerVal.cls=noBind?'':'2班';
  document.querySelector('#pk-school span').textContent=noBind&&!apNewUser?'请选择学校':'市实验一小';
  document.querySelector('#pk-grade span').textContent=noBind?'请选择':'3年级';
  document.querySelector('#pk-cls span').textContent=noBind?'请选择':'2班';
  document.getElementById('apply-name').value='';
  document.getElementById('apply-rel').value='';
  segOn(document.querySelector('#apply-enr button'));   // 就读安排默认「现在就读」
  addAvatar=null;addAvatarRender();
  go('sc-addchild');
}
/* -------- 添加孩子：孩子头像——未自选时显示随性别联动的默认图（切性别自动切换），
   家长经「拍照/从相册选择」自选后固定、不再随性别变化，「恢复默认头像」回到联动状态 -------- */
let addAvatar=null;   // 家长自选头像；null 表示用默认图
function addAvatarSrc(){
  const g=document.querySelector('#apply-sex .on');
  return addAvatar||'assets/avatar-'+(g&&g.textContent==='女'?'girl':'boy')+'.png';
}
function addAvatarSheet(){
  showSheet('<h3>设置孩子头像</h3>'+
   '<button class="btn ghost blk" onclick="addAvatarPick()">拍照</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="addAvatarPick()">从相册选择</button>'+
   (addAvatar?'<button class="btn red blk" style="margin-top:9px" onclick="addAvatarRemove()">恢复默认头像</button>':'')+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
function addAvatarPick(){
  const g=document.querySelector('#apply-sex .on');
  addAvatar='assets/avatar-'+(g&&g.textContent==='女'?'girl':'boy')+'.png';
  addAvatarRender();
  closeSheet();demoToast('已设置头像（演示：真实产品调起拍摄或相册取照）');
}
function addAvatarRemove(){addAvatar=null;addAvatarRender();closeSheet();toast('已恢复默认头像')}
function addAvatarRender(){
  const el=document.getElementById('add-avatar');
  if(el)el.style.background='url('+addAvatarSrc()+') center/cover no-repeat #EAF3FF';
}
function addBack(){addFrom==='nochild'?go('sc-nochild'):addFrom==='apply'?go('sc-apply'):goTab('sc-me')}
function openPicker(k){
  /* 注册办理码新用户：学校由码带出并锁定，不开选择半屏 */
  if(k==='school'){if(apNewUser){toast('学校已由办理码带出');return}schoolPicker();return}
  const d=pickerData[k];
  document.getElementById('sheet').innerHTML=
    '<div class="pk-hd"><button onclick="closeSheet()">取消</button><b>'+d.title+'</b><span style="width:44px"></span></div>'+
    '<div class="pk-list">'+d.opts.map(o=>
      '<button class="pk-opt'+(o===pickerVal[k]?' on':'')+'" onclick="pickVal(\''+k+'\',\''+o+'\')">'+o+(o===pickerVal[k]?'<span>✓</span>':'')+'</button>'
    ).join('')+'</div>';
  document.getElementById('mask').classList.add('show');
}
/* 学校选择：仅列已绑定孩子所在学校，其余走关键字搜索——防止合作学校名录被穷举 */
function schoolPicker(){
  /* 快捷项=本账号已绑定校列表：零绑定人设（未匹配承接页 / 注册办理码新用户）无绑定校，仅搜索通道（防穷举探测口径） */
  const noBind=addFrom==='nochild'||apNewUser;
  document.getElementById('sheet').innerHTML=
    '<div class="pk-hd"><button onclick="closeSheet()">取消</button><b>选择学校</b><span style="width:44px"></span></div>'+
    (noBind
      ?''
      :'<button class="pk-opt'+(pickerVal.school==='市实验一小'?' on':'')+'" onclick="pickVal(\'school\',\'市实验一小\')">市实验一小</button>')+
    '<div class="row" style="gap:8px;margin-top:12px"><input type="text" id="sch-q" placeholder="输入学校名称关键字" style="flex:1"><button class="btn pri sm" style="padding:9px 14px" onclick="searchSchool()">搜索</button></div>'+
    '<div id="sch-res"></div>';
  document.getElementById('mask').classList.add('show');
}
function searchSchool(){
  const q=document.getElementById('sch-q').value.trim();
  if(q.length<2){toast('请输入至少 2 个字');return}
  const hits=['城南外国语','滨江二小','江北实验小学'].filter(s=>s.includes(q));
  document.getElementById('sch-res').innerHTML=hits.length
    ?hits.map(s=>'<button class="pk-opt" onclick="pickVal(\'school\',\''+s+'\')">'+s+'</button>').join('')
    :'<div class="muted" style="padding:10px 2px">未找到匹配学校，请核对名称后重试</div>';
}
function pickVal(k,v){
  pickerVal[k]=v;
  document.querySelector('#pk-'+k+' span').textContent=v;
  closeSheet();
  if(k==='school'&&v!=='市实验一小')toast('已选择 '+v);
}
/* 姓名字符集轻校验：仅允许汉字、字母、空格与「·」（少数民族姓名分隔符，外籍/港澳台学生可含字母），
   只拦数字、emoji 等明显非姓名字符，不做更强格式假设（与字段规范文档 2.1.9.1 口径一致） */
const nameCharsOk=v=>/^[一-龥A-Za-z·\s]+$/.test(v);
function submitApply(){
  if(!pickerVal.school){toast('请选择学校');return}
  if(!pickerVal.grade||!pickerVal.cls){toast('请选择年级与班级');return}
  if(!document.getElementById('apply-name').value.trim()){toast('请输入学生全名');return}
  /* 姓名最短 2 字（户籍姓名最少两字，1 字必是误输，提前拦住无效审核单）；最长由输入框 maxlength=20 承担（与名册姓名字段口径一致） */
  if(document.getElementById('apply-name').value.trim().length<2){toast('请填写孩子的完整姓名');return}
  if(!nameCharsOk(document.getElementById('apply-name').value.trim())){toast('姓名仅限中文、字母和·');return}
  if(!document.querySelector('#apply-sex .on')){toast('请选择学生性别');return}
  if(!document.getElementById('apply-rel').value){toast('请选择您与孩子的关系');return}
  /* 重复添加拦截：表单五字段命中本账号已绑定孩子（含毕业生；认领后的王一明、加入家庭后的陈小雨动态计入）时
     不创建申请——重复绑定注定被驳回，不应流入班主任审核清单；比对的是本账号名下自有信息，提示无泄露面。
     真实产品服务端提交接口做同样校验防绕过；同班同名同性别的极端误拦经文案引导班主任邀请通道锚定具体学生 */
  if(addFrom!=='nochild'&&!apNewUser){   /* 拦截比对的是本账号自有信息：零绑定人设（未匹配 / 新用户）无可比对对象 */
    const hit=boundKids().find(k=>k.sch===pickerVal.school&&k.gr===pickerVal.grade&&k.cls===pickerVal.cls
      &&k.nm===document.getElementById('apply-name').value.trim()
      &&k.sex===document.querySelector('#apply-sex .on').textContent);
    if(hit){dupKidSheet(hit);return}
  }
  /* 在途申请拦截（本次迭代新增）：五字段命中本账号在途人工申请时不再创建第二条——
     同账号同信息重复提交注定是同一份单子，班主任审核端会收到两条一模一样的记录，要么重复处理要么后置去重；
     比对的是家长自己刚提交、本账号完全可见的信息（孩子管理页条目 / 办理页 chip / 承接页状态卡上都印着），无泄露面。
     读统一在途申请表 PEND_APPLIES，跨三个入口生效；零绑定人设同样适用（新用户在办理页与承接页也会产生在途申请），
     故不加已绑定人设的前置条件。真实产品服务端提交接口做同样校验防绕过 */
  const pd=pendFind(pickerVal.school,pickerVal.grade,pickerVal.cls,
    document.getElementById('apply-name').value.trim(),document.querySelector('#apply-sex .on').textContent);
  if(pd){pendDupSheet(pd);return}
  /* 拦截「走错通道」：表单命中本账号名下待认领记录（王一明 · 市实验一小 1年级-3班 · 男）时不创建申请，
     引导回认领主通道（免审即时生效）；该记录本就下发给本账号，提示无信息泄露。命中他人名册记录时绝不提示，仍走统一提交口径 */
  if(addFrom!=='nochild'&&!apNewUser&&pickerVal.school==='市实验一小'&&pickerVal.grade==='1年级'&&pickerVal.cls==='3班'
     &&document.getElementById('apply-name').value.trim()==='王一明'
     &&document.querySelector('#apply-sex .on').textContent==='男'){
    if(claimState==='pending'){
      showSheet('<h3>该孩子已在您的账号待认领</h3>'+
       '<div class="desc">名册已为您预留 王*明（市实验一小 · 1年级-3班），无需提交申请，认领后即可直接绑定。</div>'+
       '<button class="btn pri blk" onclick="closeSheet();go(\'sc-kids\');claimChild()">去认领</button>'+
       '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
      return;
    }
    if(claimState==='locked'){toast('认领核实中，请等待通知');return}
    /* bound（已认领）由上方重复添加拦截统一承接；hidden（已反馈非本人孩子）不拦截，照常提交由班主任人工判断 */
  }
  /* 命中已有家人绑定的学生（五字段全匹配，演示：陈小雨 · 2年级-1班 · 女）：不创建申请，
     走「最小信息卡 + 补全家人手机号后 5 位 → 发起加入请求」链路——补全正确只获得发起请求资格，
     对方（现有家人）确认后才加入家庭；知识验证仅作防骚扰过滤，授权始终来自知情方 */
  if(pickerVal.school==='市实验一小'&&pickerVal.grade==='2年级'&&pickerVal.cls==='1班'
     &&document.getElementById('apply-name').value.trim()==='陈小雨'
     &&document.querySelector('#apply-sex .on').textContent==='女'){
    /* 备用方案（演示说明内开关 famAltOn）：不出候选卡，提示该孩子已有家人绑定、请联系班主任添加 */
    if(famAltOn()){famAltSheet();return}
    famJoinSheet();return;
  }
  /* 上限校验放在全部拦截之后：认领 / 加入家庭链路不创建新申请，不该占用在途额度 */
  if(pendLimitHit())return;
  if(addFrom==='apply'){addPendingKid();return}
  if(addFrom==='nochild'){nochildApplyPending();return}
  kidsAddPending();
}
/* -------- 重复添加拦截：本账号已绑定（active）孩子五要素表——全部为本账号已可见信息；
   王一明认领后（claimState=bound）、陈小雨加入家庭后（FAMJ joined）、人工申请审核通过后（APPROVED_KIDS）动态计入 -------- */
const APPROVED_KIDS=[];   // 演示中经「模拟：班主任审核通过」转正的孩子：已绑定生效，此后同信息重复添加由 dupKidSheet 承接
function boundKids(){
  const list=[
    {sch:'市实验一小',gr:'3年级',cls:'2班',nm:'林晓乐',sex:'男'},
    {sch:'市实验一小',gr:'1年级',cls:'1班',nm:'林晓阳',sex:'男'},
    {sch:'市实验一小',gr:'6年级',cls:'1班',nm:'林晓晴',sex:'女',grad:true},
    {sch:'市实验一小',gr:'4年级',cls:'4班',nm:'林晓帆',sex:'男',grad:true}   // 离校生与毕业生同为本账号可见的归档孩子，同样计入拦截
  ];
  if(claimState==='bound')list.push({sch:'市实验一小',gr:'1年级',cls:'3班',nm:'王一明',sex:'男'});
  if(FAMJ.some(c=>c.state==='joined'))list.push({sch:'市实验一小',gr:'2年级',cls:'1班',nm:'陈小雨',sex:'女'});
  return list.concat(APPROVED_KIDS);
}
/* 承接半屏：阻断 + 两个出口——查看孩子（孩子管理页）、去邀请家人（误操作最常见真实意图：想让其他家人接收消息）；
   同班同名孩子的极端误拦不上屏说明（场景极罕见），兜底口径（联系班主任发送绑定邀请）收进演示说明 */
function dupKidSheet(k){
  showSheet('<h3>该孩子已在您的账号下</h3>'+
   '<div class="desc">'+k.nm+'（'+k.sch+' · '+k.gr+'-'+k.cls+(k.grad?' · 毕业生':'')+'）已绑定到您的账号，无需重复添加。<br><br><b>想让其他家人也接收孩子的消息？</b>可在「家人」页邀请对方加入，对方确认即生效。</div>'+
   '<button class="btn pri blk" onclick="closeSheet();go(\'sc-kids\')">查看孩子</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet();go(\'sc-guardians\')">去邀请家人</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
/* -------- 在途申请：重复提交承接 / 申请详情 / 撤回（本次迭代新增）--------
   与已绑定拦截（dupKidSheet）分开的原因：已绑定是终态、出口是「查看孩子 / 邀请家人」；审核中是中间态，
   家长重复提交的真实动机基本是「等太久了、以为没提交上」的催办焦虑，半屏要回答的是「提上了吗、还要等多久」，
   并明说重复提交不会加快审核——放行只是再扔进一次黑洞 */
function pendDupSheet(p){
  showSheet('<h3>该申请正在审核中</h3>'+
   '<div class="desc">'+p.nm+'（'+p.sch+' · '+p.gr+'-'+p.cls+'）的绑定申请已于 '+p.at+' 提交，正在等待班主任审核，结果将以消息通知您，重复提交不会加快审核。</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">知道了</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet();pendGoto(\''+p.id+'\')">查看申请</button>');
}
/* 「查看申请」落点按人设分流：已绑定账号落孩子管理页，零绑定人设（未匹配 / 注册办理码新用户）落未匹配承接页；
   两处的审核中条目都指向同一个申请详情半屏，落页后直接拉起 */
function pendGoto(id){
  go(addFrom==='nochild'||apNewUser?'sc-nochild':'sc-kids');
  pendDetail(id);
}
/* 审核中条目点击 → 申请详情半屏：进度信息 + 撤回出口。
   撤回的真实动机主要是「信息填错了想重填」——五要素填错时不命中重复提交拦截、会另生成一条申请，
   错的那条原本只能干等驳回，故给一条自助出路；撤回后班主任审核清单同步移除（真实产品行为）。
   半屏正文只保留孩子信息卡与提交时间：审核路由与「审核通过前不可见孩子数据」属规则解释、不上屏（口径由本页演示说明承载），
   卡内头像用家长自己表单的头像（与零可见性口径一致）。
   第一阶段隐藏：「撤回申请」按钮默认不渲染（恢复方式：演示说明内「允许撤回审核中的申请」开关，revokeOn） */
var pendCurId=null;   // 当前打开的申请详情 id，供撤回开关切换时就地重绘
function pendDetail(id){
  const p=pendById(id);
  if(!p){toast('该申请已不在审核中');return}
  pendCurId=id;
  showSheet('<h3>申请审核中</h3>'+
   '<div class="row" style="background:#F5F7FB;border-radius:12px;padding:12px;margin:10px 0 12px">'+
    '<div style="width:42px;height:42px;border-radius:50%;background:url('+(p.av||'assets/avatar-boy.png')+') center/cover no-repeat #EAF3FF;flex-shrink:0"></div>'+
    '<div style="flex:1"><div style="font-size:14.5px;font-weight:600">'+p.nm+'</div><div class="muted">'+p.sch+' · '+p.gr+'-'+p.cls+'</div></div>'+
   '</div>'+
   '<div class="desc">提交时间 '+p.at+'</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">知道了</button>'+
   (revokeOn()?'<button class="btn red blk" style="margin-top:9px" onclick="pendRevokeSheet(\''+id+'\')">撤回申请</button>':''));
}
/* 撤回二次确认（破坏性动作）。与在途办理单的级联口径：该孩子已提交校徽办理单的，先在办理记录取消办理单（已付款单全额原路退回）再撤回——
   撤回即这个孩子不再存在、办理单无所依附；顺序上把订单的事留在办理记录、身份的事留在孩子管理，不做跨域级联作废 */
function pendRevokeSheet(id){
  const p=pendById(id);
  if(!p)return;
  if(p.apKey&&AP_KIDS[p.apKey]&&AP_KIDS[p.apKey].submitted){
    closeSheet();
    pAlert('暂不能撤回','该孩子有待审核的校徽办理记录，请先在「办理记录」取消办理，再撤回申请。');
    return;
  }
  showSheet('<h3>撤回 '+p.nm+' 的绑定申请？</h3>'+
   '<div class="desc">撤回后班主任将不再收到这条申请。如仍需绑定，可重新提交申请，或请班主任发送绑定邀请。</div>'+
   '<button class="btn red blk" style="margin-bottom:9px" onclick="pendRevokeDo(\''+id+'\')">确认撤回</button>'+
   '<button class="btn ghost blk" onclick="closeSheet()">再想想</button>');
}
/* 撤回执行：清表 + 清理该申请在三处展示层的痕迹（孩子管理页条目 / 未匹配承接页状态卡 / 办理页孩子 chip）；
   承接页上最后一条状态卡被撤回后恢复「提交人工申请」兜底入口（与 payokDoneNew 的隐藏互为逆操作） */
function pendRevokeDo(id){
  closeSheet();
  const i=PEND_APPLIES.findIndex(p=>p.id===id);
  if(i<0)return;
  const p=PEND_APPLIES[i];
  PEND_APPLIES.splice(i,1);
  pendSync();
  const kc=document.getElementById('pend-kid-'+id);if(kc)kc.remove();
  const nc=document.getElementById('pend-nc-'+id);if(nc)nc.remove();
  /* 绑定申请页状态态的卡片同样可点开本半屏撤回：驻留该页时按在途申请表重建列表（该班无在途申请即回落表单） */
  if(curScreen==='sc-classreg')cregStatus();
  if(p.apKey){
    const chip=document.getElementById('ap-kid-'+p.apKey);if(chip)chip.remove();
    delete AP_KIDS[p.apKey];
    /* 被撤回的孩子正被办理表单选中时的回落：已绑定人设回首个孩子；零绑定人设无可回落对象——
       还有其他审核中孩子就选它，否则回到新用户空态（与 regApplyEnterNew 同口径） */
    if(apKid===p.apKey){
      if(apNewUser){
        const nx=document.querySelector('#ap-kids .fchip[id^="ap-kid-pend"]');
        if(nx)applyKid(nx,nx.id.replace('ap-kid-',''));
        else{
          apKid=null;
          document.getElementById('ap-nm').value='';
          document.getElementById('ap-cls').value='';
          document.getElementById('ap-nm-note').style.display='none';
        }
      }else{
        const fc=document.querySelector('#ap-kids .fchip');
        if(fc)applyKid(fc,'yang');
      }
    }
  }
  const anchor=document.getElementById('nochild-apply');
  if(anchor&&!anchor.parentNode.querySelector('[id^="pend-nc-"]'))anchor.style.display='';
  toast('已撤回 '+p.nm+' 的绑定申请');
}
/* 「我的/孩子管理」入口提交人工申请后：孩子管理列表沉底归档条目上方插入「审核中」条目（流程态排在毕业生 / 离校生之上）——
   仅回显家长自填信息、不回填名册数据（审核通过前不可见孩子任何数据，与待认领条目零可见性口径一致），
   落点转孩子管理页让条目可见；「我的」数据栏孩子数不变，审核通过才 +1（演示数据，刷新恢复） */
function kidsAddPending(){
  const p=pendAdd();   // 登记进统一在途申请表
  kidsPendCell(p);
  go('sc-kids');
  pendSubmittedSheet(p);
}
/* 孩子管理页插入一条「审核中」条目（人工申请 / 已有孩子账号扫班级注册码两个入口共用）：
   条目可点开申请详情（进度 + 撤回），与静态演示的林晓冬同形态；流程态排在毕业生之上 */
function kidsPendCell(p){
  const cell=document.createElement('div');
  cell.className='cell';
  cell.id='pend-kid-'+p.id;
  cell.style.cursor='pointer';
  cell.setAttribute('onclick',"pendDetail('"+p.id+"')");
  cell.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url('+p.av+') center/cover no-repeat #EAF3FF"></span>'
   +'<span style="flex:1"><span style="display:block">'+p.nm+'</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">'+p.sch+' · '+p.gr+'-'+p.cls+'</span></span>'
   +'<span class="chip amber" style="margin-right:6px">审核中</span><span class="arr">›</span>';
  const anchor=document.getElementById('kid-qing');
  anchor.parentNode.insertBefore(cell,anchor);
}
/* 提交承接半屏：只说审核去向与通知方式。此前移除「孩子已由家人注册？」引导——能走到本半屏即说明五字段未命中
   已绑定学生（真命中会在提交前弹加入家庭候选卡），该前提在此处基本不成立，长引导文案还稀释了主信息；
   「路由」为内部术语，面向家长改为「由 X 班主任审核」 */
function pendSubmittedSheet(p){
  showSheet('<h3>申请已提交</h3>'+
   '<div class="desc">由 '+p.sch+' '+p.gr+'-'+p.cls+' 班主任审核，结果将以消息通知您。</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">我知道了</button>');
}
/* -------- 加入已有家庭（表单命中已绑定学生时的自助链路，演示：班里两个同名的陈小雨、各有已绑定家庭）--------
   统一候选卡（单 / 多命中同款界面）：每个已绑定家庭一行，展示第一位家人的关系 + 手机尾号后 4 位——
   随机段供申请人「显示式辨认」自家家人（不要求回忆完整号码）；不显示学生真实照片，头像用添加人自己表单的头像。
   选择某家庭发起请求，对方确认才加入；各家庭独立计被拒冷却（7 天，演示不生效）与 2 次被拒锁定；
   「继续提交申请」逃生通道常驻（演示数据，刷新恢复） */
const FAMJ=[
 {rel:'妈妈',tail:'3216',state:'none',rejects:0},
 {rel:'爸爸',tail:'8027',state:'none',rejects:0}
];   // state: none / sent 待对方确认 / joined 已加入 / locked 不可再发起（2 次被拒锁定或被对方拉黑——申请人侧不区分原因、同一呈现，防枚举）
function famJoinSheet(){
  const rows=FAMJ.map((c,i)=>{
    const right=c.state==='none'?'<button class="btn sm pri" onclick="famJoinSend('+i+')">加入家庭</button>'
      :c.state==='sent'?'<span class="chip amber plain">待确认</span>'
      :c.state==='joined'?'<span class="chip teal plain">已加入</span>'
      :'<span class="chip gray plain">暂不可发起</span>';
    return '<div style="display:flex;align-items:center;gap:10px;padding:11px 2px;border-top:1px solid #F0F2F6">'
      +'<span style="font-size:13.5px;font-weight:600">'+c.rel+'</span>'
      +'<span class="muted" style="font-size:12.5px">手机尾号 '+c.tail+'</span>'
      +'<span style="margin-left:auto">'+right+'</span></div>';
  }).join('');
  showSheet('<h3>该信息对应的学生已有家人绑定</h3>'+
   '<div class="row" style="background:#F5F7FB;border-radius:12px;padding:12px;margin:10px 0 10px">'+
    '<div style="width:42px;height:42px;border-radius:50%;background:url('+addAvatarSrc()+') center/cover no-repeat #EAF3FF;flex-shrink:0"></div>'+
    '<div style="flex:1"><div style="font-size:14.5px;font-weight:600">陈小雨</div><div class="muted">市实验一小 · 2年级-1班</div></div>'+
   '</div>'+
   /* 全部家庭均不可发起（锁定 / 被拉黑）时不再引导一个无法进行的动作，说明改为出路：班主任核实（人工申请逃生通道即其系统化入口） */
   '<div style="font-size:12px;color:var(--ink-3);margin:0 0 2px">'+(FAMJ.every(c=>c.state==='locked')
     ?'当前暂不可向该学生的家庭发起加入请求，如需绑定请联系班主任核实。'
     :'请通过关系与手机尾号辨认您的家人。点「加入家庭」后将通知对方确认，对方同意后您才会加入该家庭。')+'</div>'+
   rows+
   '<button class="btn ghost blk" style="margin-top:14px" onclick="famJoinBypass()">不是同一个孩子？继续提交申请</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">取消</button>');
}
/* 演示说明预览：候选卡不可发起态（锁定 / 被拉黑同一呈现）——all=全部家庭不可发起；partial=妈妈家庭被拉黑、爸爸家庭仍可发起（局部不可发起时顶部说明维持辨认引导、仅行尾 chip 区分）；与恢复 */
function famJoinLockAllPreview(mode){
  FAMJ.forEach((c,i)=>{const lock=mode!=='partial'||i===0;c.state=lock?'locked':'none';c.rejects=lock?2:0;c.blocked=lock&&mode==='partial'});
  famJoinSheet();
}
function famJoinResetDemo(){FAMJ.forEach(c=>{c.state='none';c.rejects=0});closeSheet();demoToast('候选家庭状态已恢复为可发起')}
/* -------- 备用方案承接半屏：五要素命中其他账号下已绑定的学生时，不展示任何家庭 / 家人信息、不提供自助加入与继续提交，
   只告知「已有家人绑定」并引导联系班主任添加（班主任在教师端核实后直接添加或发送绑定邀请）；
   单 / 多命中同一文案（不暴露命中数量），卡内头像用添加人自己表单的头像（零可见性口径同候选卡） -------- */
function famAltSheet(){
  showSheet('<h3>该孩子已有家人绑定</h3>'+
   '<div class="row" style="background:#F5F7FB;border-radius:12px;padding:12px;margin:10px 0 10px">'+
    '<div style="width:42px;height:42px;border-radius:50%;background:url('+addAvatarSrc()+') center/cover no-repeat #EAF3FF;flex-shrink:0"></div>'+
    '<div style="flex:1"><div style="font-size:14.5px;font-weight:600">陈小雨</div><div class="muted">市实验一小 · 2年级-1班</div></div>'+
   '</div>'+
   '<div class="desc">该信息对应的孩子已有家人绑定，暂不支持自助添加。请联系班主任核实您的身份后为您添加，或由班主任向您发送绑定邀请。</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">我知道了</button>');
}
/* 逃生通道：班里另有同名孩子——不走加入链路，按原入口继续提交人工申请（真实产品申请附「与已绑定学生同名」标记辅助班主任消歧） */
function famJoinBypass(){
  closeSheet();
  if(pendLimitHit())return;   // 逃生通道同样创建人工申请，受账号级在途上限约束（候选卡在上限校验之前 return，故此处补校验）
  if(addFrom==='apply'){addPendingKid();return}
  if(addFrom==='nochild'){nochildApplyPending();return}
  kidsAddPending();
}
function famJoinSend(i){
  const c=FAMJ[i];
  c.state='sent';
  const cell=document.createElement('div');
  cell.className='cell';cell.id='fj-cell-'+i;
  cell.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url('+addAvatarSrc()+') center/cover no-repeat #EAF3FF"></span>'
   +'<span style="flex:1"><span style="display:block">陈小雨</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">市实验一小 · 2年级-1班 · 待家人（'+c.rel+' · 尾号 '+c.tail+'）确认</span></span>'
   +'<span class="chip amber" style="margin-right:6px">待家人确认</span><span class="arr" style="visibility:hidden">›</span>';
  const anchor=document.getElementById('kid-qing');
  anchor.parentNode.insertBefore(cell,anchor);
  go('sc-kids');
  showSheet('<h3>加入请求已发送</h3>'+
   '<div class="desc">已通知该家庭的家人（'+c.rel+' · 尾号 '+c.tail+'）确认，对方同意后您将加入家庭并收到消息通知。</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">我知道了</button>');
}
function famJoinTarget(){return FAMJ.findIndex(c=>c.state==='sent')}
/* 演示：现有家人在对方端同意加入请求（作用于最近发起的待确认请求） */
function famJoinApprove(silent){
  const i=famJoinTarget();
  if(i<0){if(!silent)demoToast('请先发起加入请求（添加孩子表单填 陈小雨 · 2年级-1班 · 女 触发）');return}
  const c=FAMJ[i];c.state='joined';
  famReqSet('agreed');   // 确认端请求状态同步：此后从消息再进确认页落「已同意」态
  const cell=document.getElementById('fj-cell-'+i);
  if(cell){
    /* 已绑定在读孩子不带 chip（无标签即正常态），转普通条目 */
    const chip=cell.querySelector('.chip');if(chip)chip.remove();
    const arr=cell.querySelector('.arr');if(arr)arr.style.visibility='visible';
    const sub=cell.querySelector('.muted');if(sub)sub.textContent='市实验一小 · 2年级-1班';
    cell.setAttribute('onclick',"demoToast('演示：陈小雨详情页版式与林晓乐一致')");
  }
  const sk=document.getElementById('stat-kids');
  if(sk)sk.innerHTML=(parseInt(sk.textContent)+1)+'<i class="u">人</i>';
  if(!silent)pAlert('已加入家庭','对方（'+c.rel+' · 尾号 '+c.tail+'）已同意，您已加入陈小雨的家庭，到离校通知已开通。');
}
/* -------- 家人确认加入请求页（sc-famconfirm，现有家人视角）：三动作与申请人侧 FAMJ 状态流转打通 --------
   请求本身是业务对象、本页即其详情页：famReq 记录确认端的请求状态（pending 待确认 / agreed 已同意 / rejected 已拒绝 /
   blocked 已拒绝并拉黑 / other 已由其他家人处理 / expired 已失效），「加入家庭请求待确认」消息与服务号推送卡每次点击都落当前状态——
   待确认态展示三动作，处理后动作区隐藏、由已处理态区块接管（状态 chip + 处理时间 + 结果说明，已同意另给「查看陈小雨的家人」出口），
   不回放待确认态、也不让家长二次操作；同一请求被其他家人先处理、或申请人撤回 / 失效时同理落对应结果态。
   三个动作确认后停留本页（真实产品行为），申请人侧存在在途请求时条目同步流转（可经演示说明切到孩子管理页查看）。
   处理时间为演示固定值（状态栏时刻之后），刷新恢复待确认态 */
let famReq={state:'pending',at:''},famReqFrom='sc-addchild';
const FAMREQ_TXT={
  agreed:{chip:'已同意',cls:'teal',txt:'您已同意该请求，张伟（爸爸）已成为陈小雨的家人。',btn:true},
  rejected:{chip:'已拒绝',cls:'gray',txt:'您已拒绝该请求，对方 7 天内不可再次向您的家庭发起加入请求。',btn:false},
  blocked:{chip:'已拒绝并拉黑',cls:'gray',txt:'您已拒绝该请求，并不再接收该申请人的后续请求。',btn:false},
  other:{chip:'已同意',cls:'teal',txt:'陈小雨的其他家人已同意该请求，张伟（爸爸）已成为陈小雨的家人。',btn:true},
  expired:{chip:'已失效',cls:'gray',txt:'该请求已失效（申请人已撤回或长期未处理），如需加入请对方重新发起。',btn:false}
};
function famReqSet(state){famReq={state,at:state==='other'?'今天 16:40':'今天 17:06'};famReqRender()}
function famReqRender(){
  const pend=famReq.state==='pending',m=FAMREQ_TXT[famReq.state];
  const acts=document.getElementById('famc-actions'),done=document.getElementById('famc-done'),chip=document.getElementById('famc-chip');
  if(!acts||!done||!chip)return;
  acts.style.display=pend?'':'none';done.style.display=pend?'none':'';
  chip.textContent=pend?'待确认':m.chip;chip.className='chip '+(pend?'amber':m.cls);
  if(pend)return;
  const dc=document.getElementById('famc-done-chip');dc.textContent=m.chip;dc.className='chip '+m.cls+' plain';
  document.getElementById('famc-done-at').textContent=famReq.at;
  document.getElementById('famc-done-txt').textContent=m.txt;
  document.getElementById('famc-done-btn').style.display=m.btn?'':'none';
}
/* 消息 / 推送卡 / 演示入口进入确认页：记住来源供返回键回溯（真实产品由消息进入、返回回消息列表），并按当前状态渲染 */
function famReqOpen(from){famReqFrom=from||curScreen;famReqRender();go('sc-famconfirm')}
function famReqBack(){go(famReqFrom)}
/* 已同意态出口：家人页按孩子分组，演示账号（乐乐妈妈）名下无陈小雨，以 toast 说明版式 */
function famReqSeeFamily(){go('sc-guardians');demoToast('演示：陈小雨的家人列表版式与林晓乐一致，张伟（爸爸）为新成员')}
/* 演示说明预览：其他家人已处理 / 请求已失效 / 重置为待确认 */
function famReqPreview(state){famReqSet(state);if(curScreen!=='sc-famconfirm')go('sc-famconfirm');closeDemo();toast(state==='pending'?'已重置为待确认态':'已切换为「'+FAMREQ_TXT[state].chip+'」态')}
function famConfirmAgree(){
  showSheet('<h3>确认同意</h3>'+
   '<div class="desc">同意后 张伟（自称爸爸）将成为陈小雨的家人，接收到离校通知、可发起请假并管理校徽；此结果将同步全部家人。</div>'+
   '<button class="btn pri blk" onclick="closeSheet();famConfirmDo(\'agreed\')">确认同意</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">再想想</button>');
}
function famConfirmRejectSheet(){
  showSheet('<h3>拒绝加入请求</h3>'+
   '<div class="desc">拒绝后对方 7 天内不可再次向您的家庭发起请求；多次被拒将停止其发起。</div>'+
   '<button class="btn red blk" style="margin-bottom:9px" onclick="closeSheet();famConfirmDo(\'rejected\')">确认拒绝</button>'+
   '<button class="btn ghost blk" onclick="closeSheet()">再想想</button>');
}
function famConfirmBlockSheet(){
  showSheet('<h3>拒绝并拉黑</h3>'+
   '<div class="desc">将拒绝本次请求并不再接收该申请人的后续请求。</div>'+
   '<button class="btn red blk" style="margin-bottom:9px" onclick="closeSheet();famConfirmDo(\'blocked\')">确认拒绝并拉黑</button>'+
   '<button class="btn ghost blk" onclick="closeSheet()">再想想</button>');
}
/* 确认端动作落地：先同步申请人侧在途请求（有则流转、无则跳过），再置确认端状态并就地渲染已处理态 */
function famConfirmDo(state){
  if(state==='agreed')famJoinApprove(true);
  else if(state==='rejected')famJoinReject(true);
  else{
    const i=famJoinTarget();
    /* 拉黑作用于「申请人 × 该家庭」：申请人侧该家庭行转 locked（与 2 次被拒锁定同一呈现），申请人只收到普通「已被拒绝」通知、不被告知拉黑 */
    if(i>=0){const c=FAMJ[i];c.rejects=2;c.state='locked';c.blocked=true;const cell=document.getElementById('fj-cell-'+i);if(cell)cell.remove()}
  }
  famReqSet(state);
  toast(state==='agreed'?'已同意，张伟已成为家人':state==='rejected'?'已拒绝，7 天内不可重发':'已拒绝并拉黑');
}
/* 演示：现有家人拒绝加入请求——按家庭计 7 天冷却（演示不阻塞可立即重试），同一家庭累计 2 次被拒锁定 */
function famJoinReject(silent){
  const i=famJoinTarget();
  if(i<0){if(!silent)demoToast('请先发起加入请求（添加孩子表单填 陈小雨 · 2年级-1班 · 女 触发）');return}
  const c=FAMJ[i];c.rejects++;
  famReqSet('rejected');   // 确认端请求状态同步：此后从消息再进确认页落「已拒绝」态
  const cell=document.getElementById('fj-cell-'+i);if(cell)cell.remove();
  if(c.rejects>=2){
    c.state='locked';
    if(!silent)pAlert('对方再次拒绝','已停止向该家庭发起请求，如有疑问请联系班主任核实。');
  }else{
    c.state='none';
    if(!silent)pAlert('对方已拒绝','对方（'+c.rel+'）拒绝了您的加入请求，7 天内不可再次发起。');
  }
}
/* 人工申请（从未匹配承接页进入）提交后回流：入口上方插入「审核中」状态卡并隐藏「提交人工申请」入口——
   防重复提交、保持承接页简单（本页是引导承接页而非管理页，自身入口单次提交）；
   本次迭代由「入口就地转状态卡」改为「插卡 + 隐藏入口」，与 payokDoneNew 的写卡方式统一：
   两个函数都往本页写在途申请，就地改入口会让状态卡与入口成为同一个节点、撤回后无从恢复入口。
   状态卡展示层支持多条：账号存在多条在途申请时（如经注册办理码在办理页为多个孩子提交办理单后回到本页）逐条列出；
   状态卡仅展示家长自填信息、不回填名册数据，可点开申请详情（进度 + 撤回）；
   头像用表单生效头像（自选或随性别默认图），与孩子管理页审核中条目同口径（kidsAddPending）；演示数据，刷新恢复 */
function nochildApplyPending(){
  const p=pendAdd();
  nochildPendCell(p);
  go('sc-nochild');
  toast('已提交，待班主任审核');
}
/* 未匹配承接页插入一条「审核中」状态卡并隐藏「提交人工申请」入口（人工申请 / 零绑定账号扫班级注册码两个入口共用） */
function nochildPendCell(p){
  const anchor=document.getElementById('nochild-apply');
  if(!anchor)return;
  const cell=document.createElement('div');
  cell.className='cell';
  cell.id='pend-nc-'+p.id;
  cell.style.cursor='pointer';
  cell.setAttribute('onclick',"pendDetail('"+p.id+"')");
  cell.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url('+p.av+') center/cover no-repeat #EAF3FF"></span>'
    +'<span style="flex:1"><span style="display:block">'+p.nm+'</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">'+p.sch+' · '+p.gr+'-'+p.cls+' · 班主任审核后以消息通知结果</span></span>'
    +'<span class="chip amber" style="margin-right:6px">审核中</span><span class="arr">›</span>';
  anchor.parentNode.appendChild(cell);   /* 追加到入口之后而非之前：入口有状态卡时始终隐藏，隐藏节点若留在末位会让最后一张卡失去 .cell:last-child 去底线 */
  anchor.style.display='none';
}
/* -------- 班级注册码 / 邀请注册卡片 · 绑定申请（冷启动直达页）--------
   两条链路（班级注册码海报、班主任分享的邀请注册卡片）登录后同落本页，码 / 卡片带出校班 CREG_CODE。
   登录落点按「卡片班级下本账号的记录」三行分流（cregEnter）：
   ①该班已有已绑定孩子 → 账号的家（家长端首页，上下文切到该孩子）+ toast「您已绑定该班的孩子 X，无需再次申请」——
     班主任把卡片发到班级群，大量已绑定家长会顺手点开，填完姓名再被拦不如登录即告知；反馈用 toast 不用半屏（首页头部已显示该孩子，「查看孩子」无增量信息；
     同班双胞胎等窄场景走正式入口 我的 → 添加孩子 → 人工申请，同一位班主任审核，不在卡片链路另开出口）；
   ②该班有审核中申请（不分账号） → 本页审核中状态态（cregStatus：该班在途申请逐条列出、可点开申请详情，不设「为另一个孩子申请」——
     与承接页「自身入口单次提交」口径对齐，零绑定双胞胎的第二个孩子待第一个过审后经 我的 → 添加孩子 补提）——
     再点卡片的真实动机基本是「提上了吗」，本页即答案、与提交当次所见同一页；不落未匹配承接页（其框架是「不在名册中 + 三通道引导」，与冷启动情境打架）；
   ③无记录 → 本页表单；提交后：有孩子的账号写在途申请表、孩子管理页插「审核中」条目并落孩子管理页弹承接半屏；零绑定账号写在途申请表与承接页状态卡、本页就地转状态态。
   账号状态只在两处起作用：①要展示真实孩子必须回家；③提交后落哪。流程态条目为账号级、不受孩子管理页同校筛选（口径见孩子管理页说明）。
   出口：不设自绘返回键（冷启动页面栈无上一页，返回登录页等于退出登录），用微信原生「返回首页」按钮（cregHome）按身份兜底路由：
   有孩子 → 家长端首页；无孩子有教师身份 → 教师端首页（与「监护关系被解除、仅剩教师身份」兜底同口径）；均无 → 未匹配承接页。
   教师身份不改变落点：师长双身份是支持场景，老师为自家孩子申请合法；扫自己班的码则申请路由到本人审核清单、放行自审（本人即名册维护者）。
   演示人设 cregPersona（会话级、刷新恢复）：new=零绑定新家长（默认）/ kids=乐乐妈妈（名下林晓乐 · 3年级-2班 正是卡片班级）/ teacher=有教师身份、名下无孩子；
   演示简化：三种人设共用同一张在途申请表 PEND_APPLIES 与拦截数据 */
let cregPersona='new';
const CREG_CODE={sch:'市实验一小',gr:'3年级',cls:'2班'};   // 码 / 卡片带出的校班，与页面只读字段同源
const CREG_FORM_HTML=document.getElementById('creg-box').innerHTML;   // 表单原始版式，状态态 / 切换人设后据此恢复
/* 注册码 / 邀请卡片级别（会话级、刷新恢复班级级）：class=班级级（码带校班，年级班级只读）/ school=学校级（码只带学校，年级班级由家长自选）。
   学校级码 / 卡片由学校管理员在管理端生成（后续阶段），适用于学校统一组织注册、不按班级分发的场景；海报 / 卡片文案与表单控件随级别切换 */
let cregLevel='class';
const cregSel={gr:'',cls:''};   // 学校级表单所选年级 / 班级
const cregCode=()=>cregLevel==='school'?{sch:CREG_CODE.sch,gr:cregSel.gr,cls:cregSel.cls}:CREG_CODE;
/* 「码的范围」判定（登录落点分流与状态态列表据此过滤）：班级级按码带出的校班；学校级码不带班级、无法按班级圈定记录，
   只把「经本码提交的申请」算作码下记录（cregSchoolIds 会话级登记）——演示种子的在途申请（林晓冬 · 1年级-2班）不经本码、不计入，
   否则零绑定新家长扫学校级码会被种子申请挡在状态态、永远进不了表单 */
const cregSchoolIds=new Set();
const cregInClass=k=>k.sch===CREG_CODE.sch&&(cregLevel==='school'?cregSchoolIds.has(k.id):(k.gr===CREG_CODE.gr&&k.cls===CREG_CODE.cls));
const cregPends=()=>PEND_APPLIES.filter(cregInClass);
function cregSetLevel(l){
  cregLevel=l;
  const s=l==='school';
  document.getElementById('rp-title').textContent=s?'学校注册码':'班级注册码';
  document.getElementById('rp-sub').textContent=s?'家长注册':'3年级-2班 · 家长注册';
  document.getElementById('rp-valid').textContent=s?'有效期至 7月20日 · 仅限本校家长使用':'有效期至 7月20日 · 仅限本班家长使用';
  document.getElementById('inv-chat').textContent=s?'赵主任':'王老师'; /* 微信会话名为对方的微信备注，不是小程序称呼 */
  document.getElementById('inv-tt').textContent=s?'赵雪老师（教导处主任）邀请你加入市实验一小…':'王瑶老师（3年级-2班 班主任）邀请你加入市实验一小…';
}
/* 演示入口：置级别后进入指定页（海报 / 邀请卡片），不改人设 */
const CREG_LEVEL_TIP={school:'已切换为学校级注册码 / 邀请卡片：年级、班级由家长自选（演示）',class:'已切换为班级级注册码 / 邀请卡片：年级、班级由码带出（演示）'};
function cregLevelGo(l,to){if(l!==cregLevel){cregSetLevel(l);toast(CREG_LEVEL_TIP[l])}cregReset();go(to)}
/* 本页演示说明开关：切换级别后按当前人设重新走登录落点分流 */
function cregToggleLevel(){cregSetLevel(cregLevel==='school'?'class':'school');renderDemo();cregEnter();toast(CREG_LEVEL_TIP[cregLevel])}
/* 学校级表单的年级 / 班级选择半屏：选项与添加孩子表单同源（pickerData），状态独立于 pickerVal */
function cregPick(k){
  const d=pickerData[k],key=k==='grade'?'gr':'cls';
  document.getElementById('sheet').innerHTML=
    '<div class="pk-hd"><button onclick="closeSheet()">取消</button><b>'+d.title+'</b><span style="width:44px"></span></div>'+
    '<div class="pk-list">'+d.opts.map(o=>
      '<button class="pk-opt'+(o===cregSel[key]?' on':'')+'" onclick="cregPickVal(\''+key+'\',\''+o+'\')">'+o+(o===cregSel[key]?'<span>✓</span>':'')+'</button>'
    ).join('')+'</div>';
  document.getElementById('mask').classList.add('show');
}
function cregPickVal(key,v){cregSel[key]=v;document.querySelector('#creg-pk-'+key+' span').textContent=v;closeSheet()}
/* 表单态：恢复原始版式并清空；学校级把只读的年级 / 班级行换成选择控件 */
function cregReset(){
  document.getElementById('creg-box').innerHTML=CREG_FORM_HTML;
  document.getElementById('creg-logout').style.display='none';
  cregSel.gr='';cregSel.cls='';
  if(cregLevel==='school')document.getElementById('creg-grcls').innerHTML=
    '<div class="frow" style="flex:1"><label>年级 <em>*</em></label><button class="pick" id="creg-pk-gr" onclick="cregPick(\'grade\')"><span>请选择</span><i>▾</i></button></div>'+
    '<div class="frow" style="flex:1"><label>班级 <em>*</em></label><button class="pick" id="creg-pk-cls" onclick="cregPick(\'cls\')"><span>请选择</span><i>▾</i></button></div>';
}
/* 审核中状态态：按卡片班级过滤在途申请表重建（可重入，撤回 / 新增后再进本页自动反映）；该班无在途申请时回落表单。
   不设「为另一个孩子申请」（与承接页单次提交口径对齐），表单态仅经登录落点 / 演示说明进入 */
function cregStatus(){
  const list=cregPends();
  if(!list.length){cregReset();return}
  document.getElementById('creg-box').innerHTML=
   '<div style="text-align:center;padding:14px 6px 2px"><div style="font-size:34px">📨</div><div style="font-size:15.5px;font-weight:600;margin-top:10px">申请已提交</div></div>'
   /* 卡片默认静态：姓名 / 校班 / 提交时间已全部印在卡上，再点开申请详情半屏只是复述、无增量信息；
      仅「允许撤回审核中的申请（后续阶段）」开关打开时可点——此时半屏多出撤回出口才有点开的价值 */
   +list.map(p=>'<div class="row" style="background:#F5F7FB;border-radius:12px;padding:12px;margin:10px 0 0'+(revokeOn()?';cursor:pointer" onclick="pendDetail(\''+p.id+'\')':'"')+'>'
     +'<div style="width:42px;height:42px;border-radius:50%;background:url('+p.av+') center/cover no-repeat #EAF3FF;flex-shrink:0"></div>'
     +'<div style="flex:1;min-width:0"><div style="font-size:14.5px;font-weight:600">'+p.nm+' <span class="chip amber" style="vertical-align:1px">审核中</span></div><div class="muted">'+p.sch+' · '+p.gr+'-'+p.cls+' · 提交于 '+p.at+'</div></div>'+(revokeOn()?'<span class="arr">›</span>':'')+'</div>').join('')
   +'<div class="muted" style="text-align:center;margin-top:12px;line-height:1.8">班主任将与班级学生名册比对后批量处理<br>结果以消息通知</div>';
  /* 退出登录文字出口置于卡片外（页面级出口，非申请内容）：本页无返回键、微信「返回首页」按账号身份路由，登错手机号的家长需要换号重登的出口 */
  document.getElementById('creg-logout').style.display='';
}
/* 登录落点（wxAuthPick / smsLogin 的 bind 分支与演示直达共用）：按卡片班级下本账号的记录三行分流；
   学校级码不做「已绑定」拦截——码覆盖全校，已绑定本校孩子的账号为另一个孩子申请是正常场景，直接进表单 */
function cregEnter(){
  if(cregPersona==='kids'&&cregLevel==='class'){
    const hit=boundKids().find(k=>cregInClass(k)&&!k.grad);
    if(hit){
      if(curKid!==hit.nm&&kidInfo[hit.nm])idPick(hit.nm);   /* 家的上下文切到该孩子（首页所选孩子 = 卡片学校） */
      go('sc-home');
      toast('已绑定 '+hit.nm+'，无需再申请');
      return;
    }
  }
  go('sc-classreg');
  cregStatus();
}
/* 微信原生「返回首页」按钮：按账号身份兜底路由 */
function cregHome(){
  if(cregPersona==='kids'){go('sc-home');return}
  if(cregPersona==='teacher'){toast('正在切换为教师身份…');setTimeout(()=>location.href='teacher.html',700);return}
  go('sc-nochild');
}
/* 演示入口：置人设后从海报开始（to=页面 id）或直接模拟登录落点（to='enter'） */
const CREG_PERSONA_TIP={new:'零绑定新家长人设已就位（演示）',kids:'已有孩子账号人设已就位：以乐乐妈妈账号扫班级注册码（演示）',teacher:'教师人设已就位：账号有教师身份、名下无孩子（演示）'};
function cregStart(persona,to,level){
  cregPersona=persona;cregSetLevel(level||'class');
  demoToast(CREG_PERSONA_TIP[persona]+(cregLevel==='school'?'，学校级码：年级、班级自选':''));   /* 先提示人设再走落点：落点自身的业务 toast（如「您已绑定该班的孩子」）不被盖掉 */
  if(to==='enter')cregEnter();else{cregReset();go(to)}
}
/* 邀请注册卡片演示入口：置级别后进微信会话页 */
function cregInviteStart(level){cregSetLevel(level||'class');cregReset();go('sc-reginvite')}
/* 本页演示说明开关：两个人设开关互斥，再点一次回零绑定；切换后按新人设重新走登录落点分流 */
function cregSetPersona(p){
  cregPersona=cregPersona===p?'new':p;
  renderDemo();cregEnter();toast(CREG_PERSONA_TIP[cregPersona]);
}
/* 重复提交承接（本页版）：与 pendDupSheet 同口径，出口回本页状态态 */
function cregPendDupSheet(p){
  showSheet('<h3>该申请正在审核中</h3>'+
   '<div class="desc">'+p.nm+'（'+p.sch+' · '+p.gr+'-'+p.cls+'）的绑定申请已于 '+p.at+' 提交，正在等待班主任审核，结果将以消息通知您，重复提交不会加快审核。</div>'+
   '<button class="btn pri blk" onclick="closeSheet();cregStatus()">知道了</button>');
}
function submitClassReg(){
  const el=document.getElementById('creg-name');
  if(!el){toast('已提交，请等待审核');return}
  if(!el.value.trim()){toast('请填写孩子姓名');return}
  /* 姓名最短 2 字与字符集校验与人工申请表单同口径 */
  if(el.value.trim().length<2){toast('请填写孩子的完整姓名');return}
  if(!nameCharsOk(el.value.trim())){toast('姓名仅限中文、字母和·');return}
  if(!document.querySelector('#creg-sex .on')){toast('请选择学生性别');return}
  if(!document.getElementById('creg-rel').value){toast('请选择您与孩子的关系');return}
  if(cregLevel==='school'&&(!cregSel.gr||!cregSel.cls)){toast('请选择年级和班级');return}
  const nm=el.value.trim(),sex=document.querySelector('#creg-sex .on').textContent;
  const code=cregCode(),inCode=k=>k.sch===code.sch&&k.gr===code.gr&&k.cls===code.cls;   /* 学校级按家长所选校班比对 */
  /* 复用人工申请表单的三道拦截（比对的都是本账号自有信息，无泄露面；真实产品服务端提交接口做同样校验防绕过）：
     ①命中已绑定孩子 → 重复添加（仅有孩子人设；演示：林晓乐 · 3年级-2班 · 男 正是本码班级）；②命中在途申请 → 重复提交；③账号级在途上限。
     待认领（王一明 · 1年级-3班）与已有家人绑定（陈小雨 · 2年级-1班）两道拦截按校班比对，本码为 3年级-2班、无从命中，不另写 */
  if(cregPersona==='kids'){
    const hit=boundKids().find(k=>inCode(k)&&k.nm===nm&&k.sex===sex);
    if(hit){dupKidSheet(hit);return}
  }
  const pd=pendFind(code.sch,code.gr,code.cls,nm,sex);
  if(pd){cregPendDupSheet(pd);return}
  if(pendLimitHit())return;
  const p=pendAdd(null,Object.assign({nm,sex,av:'assets/avatar-'+(sex==='女'?'girl':'boy')+'.png',
   enr:document.querySelector('#creg-enr .on').textContent,rel:document.getElementById('creg-rel').value,src:cregLevel==='school'?'学校注册码':'班级注册码'},code));
  if(cregLevel==='school')cregSchoolIds.add(p.id);   /* 学校级：登记为经本码提交，状态态据此重建 */
  if(cregPersona==='kids'){
    kidsPendCell(p);
    cregReset();   /* 离开本页即复位表单 */
    go('sc-kids');
    pendSubmittedSheet(p);
    return;
  }
  /* 零绑定（含仅有教师身份）：承接页状态卡同步写入（微信返回首页 / 下次打开小程序落承接页时可见），本页转状态态 */
  nochildPendCell(p);
  cregStatus();
  toast('已提交，待班主任审核');
}
/* -------- 名册认领（绑定主通道）：补全孩子姓名验证 + 关系选择，验证通过才完成绑定 --------
   姓名验证把「持有名册预留手机号」升级为「手机号 + 知道孩子全名」，防录错号/二次放号误认领；
   输错统一模糊反馈（不提示错在哪个字），连续 3 次未通过锁定认领并转班主任核实（演示数据，刷新恢复） */
let claimFails=0,claimState='pending';   // pending 待认领 / bound 已认领 / hidden 已反馈非本人孩子 / locked 验证锁定核实中
/* 底部「我的」tab 红点：仅 pending 态显示，随头部待认领 chip 同源同步（认领成功 / 锁定核实中 / 反馈隐藏均消失） */
function syncClaimDot(){document.querySelectorAll('.tab[data-t="sc-me"]').forEach(t=>t.classList.toggle('has-dot',claimState==='pending'))}
syncClaimDot();
let claimNext=null;   // 认领成功后的续接动作：'apply'=校徽办理提交（注册办理码链路经提交办理拉起认领时置位）
/* 待认领认领入口（孩子管理页条目 / 站内消息 / 服务号推送卡共用）：业务落点在孩子管理页——直达该页拉起认领答题半屏；
   已流转态守卫（绑定 / 锁定 / 已反馈条目的 onclick 已改写或隐藏，守卫仅消息深链命中）：已绑定、锁定核实中落孩子管理页看条目当前状态，已反馈关闭无业务落点、不跳转仅提示 */
function claimChild(){
  if(claimState==='hidden'){pAlert('认领已关闭','您已反馈「不是我的孩子」。班主任核实名册后如有更新，将另行通知您。');return}
  if(claimState==='bound'){go('sc-kids');toast('王一明已完成绑定');return}
  if(claimFails>=3){go('sc-kids');pAlert('认领已锁定','验证未通过次数过多。班主任核实后将以消息通知结果。');return}
  go('sc-kids');
  claimNext=null;   /* 从孩子管理页发起：清掉可能残留的办理续接标记（办理页拉起后中途取消的场景） */
  openSheet('claim-rel');
}
function doClaim(){
  const nm=document.getElementById('claim-name').value.trim();
  const r=document.getElementById('claim-rel-sel').value;
  if(!nm){toast('请补全孩子姓名');return}
  if(!r){toast('请先选择您与孩子的关系');return}
  if(nm!=='一'){
    claimFails++;
    if(claimFails>=3){claimLock();return}
    toast('信息不匹配，还可尝试 '+(3-claimFails)+' 次');
    return;
  }
  closeSheet();
  const mc=document.getElementById('me-claim');
  if(mc){
    mc.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url(assets/avatar-boy.png) center/cover no-repeat #EAF3FF"></span><span style="flex:1"><span style="display:block">王一明</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">市实验一小 · 1年级-3班</span></span><span class="arr">›</span>';
    mc.setAttribute('onclick',"demoToast('演示：王一明详情页版式与林晓乐一致')");
  }
  // 认领成功级联：「我的」头部待认领提醒消失、数据栏孩子数 +1（3→4）
  const chip=document.getElementById('me-claim-chip');if(chip)chip.style.display='none';
  const sk=document.getElementById('stat-kids');if(sk)sk.innerHTML=(parseInt(sk.textContent,10)+1)+'<i class="u">人</i>';
  claimState='bound';
  syncClaimDot();
  /* 校徽办理页存在同一孩子的「待认领」chip 时同步转正（无论认领从哪一侧发起，两侧状态打通） */
  const ak=AP_KIDS.unconf,achip=document.getElementById('ap-kid-unconf');
  if(ak&&ak.unconfirmed){
    ak.unconfirmed=false;ak.nm=ak.full;
    if(achip){achip.className='fchip'+(achip.classList.contains('on')?' on':'');achip.textContent=ak.nm}
    if(apKid==='unconf'){
      document.getElementById('ap-nm').value=ak.nm;
      document.getElementById('ap-nm-note').style.display='none';
      apPvUpdate();
    }
  }
  toast('认领成功，已绑定王一明');
  /* 经「提交办理」拉起的认领：认领成功自动续接提交，进入支付半屏 */
  if(claimNext==='apply'){claimNext=null;apQty=3;apStyle='男生款';paySheet()}
}
/* 连续 3 次姓名验证未通过：锁定认领，条目转「核实中」（保持打码），转交班主任核实后以消息通知 */
function claimLock(){
  closeSheet();
  claimState='locked';
  syncClaimDot();
  claimNext=null;
  /* 校徽办理页锁定态同步：chip 仅展示姓名、不附状态后缀文案，姓名下方亦不附锁定提示，锁定期间提交办理由 claimFails 拦截 */
  const mc=document.getElementById('me-claim');
  if(mc){
    mc.setAttribute('onclick',"pAlert('认领已锁定','验证未通过次数过多。班主任核实后将以消息通知结果。')");
    mc.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url(assets/avatar-boy.png) center/cover no-repeat #EAF3FF"></span>'
     +'<span style="flex:1"><span style="display:block">王*明</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">市实验一小 · 1年级-3班</span></span>'
     +'<span class="chip amber" style="margin-right:6px">核实中</span><span class="arr" style="visibility:hidden">›</span>';
  }
  pAlert('认领已锁定','验证未通过次数过多。已转交班主任核实，结果以消息通知您。');
}
/* -------- 班主任核实通过（教师背书）→ 家长免答题确认：核实中条目转回「待认领」（教师已核实子态，不新增状态名），点击弹免答题认领确认半屏 -------- */
function claimVerifiedSync(){
  const el=document.getElementById('kid-tong');
  if(el){
    el.setAttribute('onclick',"openSheet('claim-verified')");
    el.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url(assets/avatar-girl.png) center/cover no-repeat #FFF0F4"></span>'
     +'<span style="flex:1"><span style="display:block">李*桐</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">市实验一小 · 2年级-2班</span></span>'
     +'<span class="chip amber" style="margin-right:6px">待认领</span><span class="arr">›</span>';
  }
}
function claimVerifiedPass(){
  if(tongHidden){toast('已反馈，该认领已关闭');return}
  claimVerifiedSync();
  toast('班主任已核实，点击确认');
}
/* 「认领核实已通过」消息深链（站内消息页与服务号推送卡共用）：业务落点在孩子管理页——直达该页、核实中条目同步转回「待认领」并拉起免答题确认半屏，
   取消或确认后家长都直面条目当前状态；已绑定后再点同落孩子管理页（结果类消息落当前状态）；已反馈「不是我的孩子」后认领已关闭、无业务落点，不跳转仅提示 */
function msgClaimVerified(){
  if(tongHidden){pAlert('认领已关闭','您已反馈「不是我的孩子」。班主任核实名册后如有更新，将另行通知您。');return}
  if(AP_KIDS.tong&&!AP_KIDS.tong.unconfirmed){go('sc-kids');toast('李雨桐已完成绑定');return}
  go('sc-kids');
  claimVerifiedSync();
  openSheet('claim-verified');
}
function doVerifiedClaim(){
  const r=document.getElementById('cv-rel-sel').value;
  if(!r){toast('请先选择您与孩子的关系');return}
  closeSheet();
  const el=document.getElementById('kid-tong');
  if(el){
    el.setAttribute('onclick',"demoToast('演示：李雨桐详情页版式与林晓乐一致')");
    el.innerHTML='<span class="ci" style="width:34px;height:34px;border-radius:50%;background:url(assets/avatar-girl.png) center/cover no-repeat #FFF0F4"></span>'
     +'<span style="flex:1"><span style="display:block">李雨桐</span><span class="muted" style="display:block;font-size:11px;margin-top:1px">市实验一小 · 2年级-2班</span></span>'
     +'<span class="arr">›</span>';
  }
  /* 绑定成功级联：数据栏孩子数 +1；校徽办理页「李*桐 · 核实中」chip 转正常可办理 */
  const sk=document.getElementById('stat-kids');
  if(sk)sk.innerHTML=(parseInt(sk.textContent,10)+1)+'<i class="u">人</i>';
  const tk=AP_KIDS.tong,tchip=document.getElementById('ap-kid-tong');
  if(tk){tk.nm='李雨桐';tk.unconfirmed=false;tk.locked=false}
  if(tchip){tchip.className='fchip'+(tchip.classList.contains('on')?' on':'');tchip.textContent='李雨桐'}
  if(typeof apKid!=='undefined'&&apKid==='tong'){
    document.getElementById('ap-nm').value='李雨桐';
    const anote=document.getElementById('ap-nm-note');if(anote)anote.style.display='none';
    apPvUpdate();
  }
  toast('绑定成功，已绑定李雨桐');
}
/* -------- 「不是我的孩子」：终止误认领，隐藏待认领记录并回流学校核正名册 -------- */
function notMyChild(){
  closeSheet();
  claimState='hidden';
  syncClaimDot();
  claimNext=null;
  /* 校徽办理页存在该孩子的「待认领」chip 时同步移除；若其为当前选中，回落到首个已绑定孩子 */
  const achip=document.getElementById('ap-kid-unconf');
  if(achip){
    achip.remove();delete AP_KIDS.unconf;
    if(apKid==='unconf'){const fc=document.querySelector('#ap-kids .fchip');if(fc)applyKid(fc,'yang')}
  }
  const mc=document.getElementById('me-claim');
  if(mc)mc.style.display='none';
  // 记录隐藏后不再存在待认领，同步收起「我的」头部提醒（孩子数不变）
  const chip=document.getElementById('me-claim-chip');if(chip)chip.style.display='none';
  pAlert('已反馈','该记录已隐藏，不会绑定。已通知班主任核实名册，如核实后仍预留您的号码，将再次通知您。');
}
/* -------- 认领确认（教师已核实）半屏「这不是我的孩子」：与待认领条目反馈同一链路的李*桐变体——
   反馈后本次认领关闭：孩子管理页条目隐藏、办理页 chip 移除，回流班主任二次核实名册；消息深链再点提示已关闭 -------- */
let tongHidden=false;
function notMyChildTong(){
  closeSheet();
  tongHidden=true;
  /* 校徽办理页「李*桐」chip 同步移除；若其为当前选中，回落到首个已绑定孩子 */
  const tchip=document.getElementById('ap-kid-tong');
  if(tchip){
    tchip.remove();delete AP_KIDS.tong;
    if(apKid==='tong'){const fc=document.querySelector('#ap-kids .fchip');if(fc)applyKid(fc,'yang')}
  }
  const el=document.getElementById('kid-tong');
  if(el)el.style.display='none';
  pAlert('已反馈','该记录已隐藏，不会绑定。已通知班主任再次核实名册，如核实后仍预留您的号码，将再次通知您。');
}
/* -------- 首次绑定页「这不是我的孩子」：与孩子管理页待认领条目同一反馈链路（错配不绑定、回流学校核正名册），确认后账号无匹配孩子、落未匹配承接页 -------- */
function authNotMine(){
  showSheet('<h3>这不是我的孩子</h3>'
   +'<div class="desc">反馈后将不再向您显示该孩子；我们会通知班主任核实名册预留的手机号。</div>'
   +'<button class="btn red blk" style="margin-bottom:9px" onclick="authNotMineDo()">确认反馈</button>'
   +'<button class="btn ghost blk" onclick="closeSheet()">再想想</button>');
}
function authNotMineDo(){
  closeSheet();
  // 反馈后该账号不再有名册匹配的孩子，落「未匹配到孩子」承接页（手机号切换为本页人设 138****6688）
  const t=document.getElementById('nochild-tel');if(t)t.textContent='138****6688';
  go('sc-nochild');
  pAlert('已反馈','不会绑定该孩子。已通知班主任核实名册。');
}
/* -------- 首页身份切换下拉：多孩切换首页展示 + 师长双身份（选「王瑶」当页跳转教师端原型 teacher.html，与教师端切回家长身份同口径）；
   第三位为学籍标志：0 在读 / 1 毕业生（林晓晴）/ 2 离校生（林晓帆，中途转学离校）——1 与 2 共用归档态首页（#sc-home.grad），仅文案区分；
   第五位为学校（缺省为市实验一小），林晓宁为市实验二小在读——同号跨校多孩，首页头部学校名与家人页校班随之切换 -------- */
let curKid='林晓乐';
const kidInfo={'林晓乐':['乐','3年级-2班',0,'assets/avatar-boy.png'],'林晓阳':['阳','1年级-1班',0,'assets/avatar-boy.png'],'林晓宁':['宁','2年级-3班',0,'assets/avatar-girl.png','市实验二小'],'林晓晴':['晴','6年级-1班 · 2026年6月毕业',1,'assets/avatar-girl.png'],'林晓帆':['帆','4年级-4班 · 2025年11月离校',2,'assets/avatar-boy.png']};
function idPanel(){
  if(document.getElementById('id-panel').classList.contains('show')){idClose();return}
  /* 上移 22px 塞到头部圆角下方，配合 .id-open 提亮头部，面板视觉上从头部滑出 */
  document.getElementById('id-panel').style.top=(document.querySelector('#sc-home .home-hd').offsetHeight-22)+'px';
  document.querySelector('.phone').classList.add('id-open');
  document.getElementById('id-mask').classList.add('show');
  document.getElementById('id-panel').classList.add('show');
}
function idClose(){
  document.querySelector('.phone').classList.remove('id-open');
  document.getElementById('id-mask').classList.remove('show');
  document.getElementById('id-panel').classList.remove('show');
}
function idPick(n){
  if(n===curKid){idClose();return}
  curKid=n;const k=kidInfo[n],grad=!!k[2],label=k[2]===1?'毕业生':k[2]===2?'离校生':'在读生';
  /* 我的校徽孩子筛选跟随当前孩子，进入该 Tab 即当前孩子的徽；晓帆无校徽演示数据，落首个有徽孩子（「全部」chip 第一阶段隐藏） */
  bdFilter(n==='林晓晴'?'qing':'le');
  document.getElementById('hk-nm').textContent=n;
  document.getElementById('hk-sub').textContent=k[1];
  document.getElementById('hk-school').textContent=k[4]||'市实验一小';
  /* 头像图片与身份标签随孩子切换：标签口径与身份列表 chip 一致（在读生 / 毕业生 / 离校生） */
  const av=document.getElementById('hk-av');
  av.innerHTML=k[0]+'<span class="rl">'+label+'</span>';
  av.style.backgroundImage='url('+k[3]+')';
  document.getElementById('sc-home').classList.toggle('grad',grad);
  /* 归档说明卡随学籍切换：保留期统一为「学籍异动（毕业 / 离校）后满一年」——晓晴 2026年6月毕业 → 2027年6月30日，晓帆 2025年11月离校 → 2026年11月30日 */
  if(grad){
    document.getElementById('grad-card-t').textContent=k[2]===2?n+'已于 2025年11月 离校':n+'已于 2026年6月 毕业';
    document.getElementById('grad-card-d').textContent=k[2]===2?'2026年11月30日':'2027年6月30日';
  }
  /* 「我的」头部孩子小头像与家人页随当前孩子联动 */
  const bdg=document.getElementById('me-kid-bdg');
  bdg.textContent=k[0];bdg.style.backgroundImage='url('+k[3]+')';
  famChild(n);
  document.querySelectorAll('#id-panel .id-row[data-k]').forEach(r=>{
    const on=r.dataset.k===n;
    r.classList.toggle('on',on);
    r.querySelector('.ring').textContent=on?'✓':'';
  });
  // 同步账号切换页的勾选行（与首页面板同构，双视图共用同一选中态）
  document.querySelectorAll('#sc-switch .sw-item[data-k]').forEach(r=>{
    const on=r.dataset.k===n;
    r.classList.toggle('on',on);
    r.querySelector('.sw-ring').textContent=on?'✓':'';
  });
  idClose();
  toast('已切换到 '+n+(grad?'（'+(k[2]===2?'已离校':'已毕业')+'）':''));
}
function idToTeacher(){idClose();location.href='teacher.html'}
/* 同号跨校多身份：红旗小学校长，与教师端 idToPrincipal 同口径以 toast 承接（校长视角首页属后续阶段） */
function idToPrincipal(){idClose();demoToast('演示：切换为红旗小学校长身份（校长视角首页属后续阶段，可在教师端校园签到页预览校长统计视图）')}
/* -------- 账号切换页：孩子行单选即切，委托 idPick 统一同步勾选后稍候自动回首页 -------- */
function swPick(n){
  if(n===curKid)return;
  idPick(n);
  setTimeout(()=>go('sc-home'),500);
}
/* -------- 身份失效兜底演示：监护关系 / 教师身份可被学校在运管端随时解除，小程序不逐页写校验，
   三层承接：①服务端为唯一权威关口，按身份取数 / 写数的接口逐一校验、失效返回统一错误码；
   ②前端全局请求拦截器捕获后清身份缓存、重拉身份列表并按兜底规则跳转，任何页面天然生效；
   ③关键时机主动刷新身份（冷 / 热启动 onShow、打开身份面板、深链落地、写操作提交前）。
   兜底优先级：同类身份优先、跨角色次之、承接页兜底，层内按身份列表排序取首位。口径全文见账号切换页演示说明与 PRD。
   guardRevoke：当前孩子监护关系被解除且还有其他孩子 → 身份列表移除该孩子行、自动切到另一在读孩子（同类优先，不切教师身份；演示数据，刷新恢复）；
   guardRevokeTeacher：名下无孩子但同号仍有教师身份的人设演示（不改动当前多孩演示账号数据）→ 跳教师端落地承接（teacher.html#guardian-revoked：toast + 孩子行从身份列表消失，与教师端 tRevoke('parent') 跳回本端为镜像链路）；
   guardRevokeAll：名下无其他孩子且无教师身份的人设演示（不改动当前多孩演示账号数据）→ 落「未匹配到孩子」统一承接页 -------- */
function guardRevoke(){
  const removed=curKid,next=removed==='林晓乐'?'林晓阳':'林晓乐';
  document.querySelectorAll('#id-panel [data-k="'+removed+'"],#sc-switch [data-k="'+removed+'"]').forEach(e=>e.remove());
  idPick(next);
  go('sc-home');
  pAlert('监护关系已解除','您与'+removed+'的监护关系已被学校解除，已切换到 '+next+'。');
}
function guardRevokeTeacher(){
  pAlert('监护关系已解除','您与孩子的监护关系已被学校解除，将切换为教师身份。');
  setTimeout(()=>location.href='teacher.html#guardian-revoked',900);
}
function guardRevokeAll(){
  const t=document.getElementById('nochild-tel');if(t)t.textContent='138****6688';
  go('sc-nochild');
  pAlert('监护关系已解除','您与孩子的监护关系已被学校解除，当前账号名下暂无孩子。');
}
/* 单按钮提示对话框（2026-10-26，与老师端 tAlert 同款）：字数多、需要用户读完并记住的结果说明用它而不是 toast——toast 只放一句话；点按钮后再执行 cb */
function pAlert(title,body,cb,btn){
  const host=document.querySelector('.phone'),m=document.createElement('div');
  m.className='modal-mask';
  m.innerHTML='<div class="modal-box"><div class="m-title">'+title+'</div><div class="m-body m-left">'+body+'</div><div class="m-btns"><button class="m-ok">'+(btn||'我知道了')+'</button></div></div>';
  host.appendChild(m);void m.offsetHeight;requestAnimationFrame(()=>m.classList.add('show'));
  m.querySelector('.m-ok').onclick=()=>{m.classList.remove('show');setTimeout(()=>{m.remove();if(cb)cb()},220)};
}
/* -------- 素质评价（家长只读）：按点评老师搜索 -------- */
function evFilter(v){evF.q=v.trim();applyEvFilter()}
/* -------- 素质评价「筛选」半屏面板：点评类型 × 指标维度两组 chip，与消息筛选同构（点选即生效、面板不关闭，
   存在非默认条件时入口高亮加点标，底部重置 / 确定）；与点评搜索（可按点评老师 / 点评项目关键词命中）为交集过滤。
   指标维度覆盖德智体美劳五维；各维度下的二级指标筛选属后续阶段——恢复方式：evFilterSheet 内按选中维度追加二级指标 chip 行 -------- */
const evF={q:'',type:'all',dim:'all'};
const EV_TYPES=[['all','全部'],['praise','表扬'],['improve','待改进']];
const EV_DIMS=[['all','全部'],['moral','德育'],['intel','智育'],['sport','体育'],['art','美育'],['labor','劳育']];
function applyEvFilter(){
  let shown=0;
  document.querySelectorAll('#ev-list .ev-rec').forEach(r=>{
    const ok=r.dataset.n.includes(evF.q)
      &&(evF.type==='all'||r.dataset.t===evF.type)
      &&(evF.dim==='all'||r.dataset.dim===evF.dim)
      &&(!evT.s||r.dataset.d>=evT.s)&&(!evT.e||r.dataset.d<=evT.e);
    r.style.display=ok?'':'none';if(ok)shown++;
  });
  document.getElementById('ev-empty').style.display=shown?'none':'';
  document.getElementById('ev-fbtn').classList.toggle('act',evF.type!=='all'||evF.dim!=='all');
}
function evFsOpen(){return document.getElementById('mask').classList.contains('show')&&!!document.getElementById('evfs')}
function evFilterSheet(){
  const chips=(kind,opts,cur)=>'<div class="fs-chips">'+opts.map(([v,l])=>'<button class="'+(v===cur?'on':'')+'" onclick="evPick(\''+kind+'\',\''+v+'\')">'+l+'</button>').join('')+'</div>';
  document.getElementById('sheet').innerHTML='<div id="evfs"><h3>筛选</h3>'
    +'<div class="fs-sec">点评类型</div>'+chips('type',EV_TYPES,evF.type)
    +'<div class="fs-sec">指标维度</div>'+chips('dim',EV_DIMS,evF.dim)
    +'<div style="display:flex;gap:10px;margin-top:22px"><button class="btn ghost" style="flex:1" onclick="evFilterReset()">重置</button><button class="btn pri" style="flex:2" onclick="closeSheet()">确定</button></div></div>';
  document.getElementById('mask').classList.add('show');
}
function evPick(kind,v){evF[kind]=v;applyEvFilter();if(evFsOpen())evFilterSheet()}
function evFilterReset(){evF.type='all';evF.dim='all';applyEvFilter();if(evFsOpen())evFilterSheet()}
/* -------- 素质评价时间筛选：头部周期按钮弹「时间筛选」半屏——快捷周期 chip（今日 / 昨日 / 本周 / 上周 / 本月 / 上个月 /
   本学期 / 上学期，演示今天 2026-07-06 周一；学期取衔接口径：以每年 2月1日 / 8月1日 为分割点，假期归入相邻学期、
   任何日期都落在某个学期内，家长无需理解校历边界）+ 自定义日期区间（起止胶囊 + 年 / 月 / 日三列滚轮，与请假时间选择器同形态），
   点选即生效、作用于点评记录列表（与搜索、类型 / 维度筛选为交集），底部重置 / 确定；
   自定义区间最长 180 天、开始不得晚于结束、起止必填，非法输入 toast 拦截并回退上次有效区间（沿用消息 180 天保留上限口径；
   「两端清空 = 不限时间」的口径已废止——不限时间即超过 180 天上限、与上限矛盾；滚轮起止始终有值，空值校验仅作兜底）；
   顶部统计卡数字为演示定格值、不随周期重新计算（真实产品随周期联动） -------- */
/* -------- 自定义区间选择器（小程序原生 picker 形态：起止胶囊 + 年 / 月 / 日三列滚轮）--------
   取代原 antd 风日历浮层：日历是桌面端形态，小程序里的日期选择应与请假时间选择器一致走滚轮；
   点胶囊切换当前编辑端，滚轮停稳即回写该端并刷新胶囊文案，起止始终有值（故无「清除」概念），
   三条校验（起止必填兜底 / 开始不晚于结束 / 最长 180 天）统一在半屏「确定」时执行 -------- */
const drR={which:'s',s:'',e:''};
let drTimer;
function drPad(n){return String(n).padStart(2,'0')}
function drInit(s,e){drR.which='s';drR.s=s;drR.e=e}
function drBox(){
  const pill=k=>'<button class="dr-pill'+(drR.which===k?' on':'')+'" id="dr-pill-'+k+'" onclick="drSwitch(\''+k+'\')">'+drR[k]+'</button>';
  return '<div class="dr-row">'+pill('s')+'<span class="dr-sep">至</span>'+pill('e')+'</div>'
    +'<div class="dp-wheel">'
      +'<div class="dp-col" id="dr-y" onscroll="drScroll(this)"></div>'
      +'<div class="dp-col" id="dr-m" onscroll="drScroll(this)"></div>'
      +'<div class="dp-col" id="dr-d" onscroll="drScroll(this)"></div>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--ink-3);margin-top:6px">自定义时间范围最长 180 天</div>';
}
/* 按当前编辑端的日期定位三列（半屏 DOM 插入后调用） */
function drFill(){
  const p=(drR[drR.which]||'').split('-').map(Number);
  if(!p[0])return;
  dpFill('dr-y',2024,2028,'年',p[0]);
  dpFill('dr-m',1,12,'月',p[1]);
  dpFill('dr-d',1,new Date(p[0],p[1],0).getDate(),'日',p[2]);
}
function drScroll(el){
  dpMark(el);
  clearTimeout(drTimer);
  drTimer=setTimeout(function(){drDays();drCommit()},150); /* 滚动停稳后联动天数并回写 */
}
function drDays(){
  if(!drReady())return;
  const dEl=document.getElementById('dr-d');
  const days=new Date(dpVal('dr-y'),dpVal('dr-m'),0).getDate();
  if(dEl.children.length!==days)dpFill('dr-d',1,days,'日',Math.min(dpVal('dr-d'),days));
}
/* 三列都已填充才可读值：面板未渲染、或 drFill 因日期为空提前返回时都不能取值 */
function drReady(){
  return ['dr-y','dr-m','dr-d'].every(function(i){
    const el=document.getElementById(i);
    return el&&el.children.length;
  });
}
function drCommit(){
  if(!drReady())return;
  const y=dpVal('dr-y'),m=dpVal('dr-m'),d=Math.min(dpVal('dr-d'),new Date(y,m,0).getDate());
  drR[drR.which]=y+'-'+drPad(m)+'-'+drPad(d);
  const btn=document.getElementById('dr-pill-'+drR.which);
  if(btn)btn.textContent=drR[drR.which];
}
function drSwitch(k){
  drCommit();
  drR.which=k;
  ['s','e'].forEach(function(x){
    const b=document.getElementById('dr-pill-'+x);
    if(b)b.classList.toggle('on',x===k);
  });
  drFill();
}
/* 起止校验：不通过只提示、不写入，半屏留在自定义状态供直接改期 */
function drCheck(){
  drCommit();
  /* 空值分支为防御性兜底：滚轮从上次有效区间起步、滚动只会换成另一个合法日期，正常路径不可达 */
  if(!drR.s||!drR.e){toast('请选择完整的起止日期');return false}
  if(drR.s>drR.e){toast('开始日期晚于结束日期');return false}
  if((new Date(drR.e)-new Date(drR.s))/86400000+1>180){toast('最长不能超过180天');return false}
  return true;
}
const EVT_PRESETS={today:['今日','2026-07-06','2026-07-06'],yest:['昨日','2026-07-05','2026-07-05'],
  week:['本周','2026-07-06','2026-07-12'],lweek:['上周','2026-06-29','2026-07-05'],
  month:['本月','2026-07-01','2026-07-31'],lmonth:['上个月','2026-06-01','2026-06-30'],
  sem:['本学期','2026-02-01','2026-07-31'],lsem:['上学期','2025-08-01','2026-01-31'],custom:['自定义',null,null]};
const evT={preset:'month',s:'2026-07-01',e:'2026-07-31'};
function evtFmt(d){return d?d.split('-').join('.'):''}
function evtRangeTxt(){return evtFmt(evT.s)+'–'+evtFmt(evT.e)}
function evtOpen(){return document.getElementById('mask').classList.contains('show')&&!!document.getElementById('evtfs')}
function evTimeSheet(){
  const chips='<div class="fs-chips">'+Object.entries(EVT_PRESETS).map(([k,[l]])=>'<button class="'+(k===evT.preset?'on':'')+'" onclick="evtPick(\''+k+'\')">'+l+'</button>').join('')+'</div>';
  const cust=evT.preset==='custom'?drBox():'';
  document.getElementById('sheet').innerHTML='<div id="evtfs"><h3>时间筛选</h3>'
    +'<div style="display:flex;align-items:center;margin:2px 0 4px;font-size:13px"><span style="color:var(--ink-2)">当前选择日期</span><span style="margin-left:auto;font-weight:600;font-variant-numeric:tabular-nums">'+evtRangeTxt()+'</span></div>'
    +chips+cust
    +'<div style="display:flex;gap:10px;margin-top:22px"><button class="btn ghost" style="flex:1" onclick="evtReset()">重置</button><button class="btn pri" style="flex:2" onclick="evtOk()">确定</button></div></div>';
  document.getElementById('mask').classList.add('show');
  if(evT.preset==='custom')drFill();
}
/* 确定：自定义区间在此统一校验并写入，快捷周期点选时已生效、直接收起 */
function evtOk(){
  if(evT.preset==='custom'){
    if(!drCheck())return;
    evT.s=drR.s;evT.e=drR.e;evtApply();
  }
  closeSheet();
}
function evtApply(){
  document.getElementById('ev-period').textContent=EVT_PRESETS[evT.preset][0]+' ▾';
  applyEvFilter();
  if(evtOpen())evTimeSheet();
}
function evtPick(k){
  evT.preset=k;
  if(k!=='custom'){evT.s=EVT_PRESETS[k][1];evT.e=EVT_PRESETS[k][2]}
  else drInit(evT.s,evT.e); /* 切到自定义：滚轮从当前区间起步 */
  evtApply();
}
function evtReset(){evT.preset='month';evT.s=EVT_PRESETS.month[1];evT.e=EVT_PRESETS.month[2];evtApply()}
applyEvFilter(); /* 初始按默认周期（本月）过滤：6月末的演示记录经 上个月 / 本学期 / 自定义 查看 */
/* -------- 点评详情：点记录卡进入，孩子信息 / 类型星星 / 维度项目老师时间按所点卡片填充；「已读动态」展示该条点评被哪些家人
   查看过及时间（已读状态按家长账号独立、打开详情即记为已读；演示：当前账号乐乐妈妈均已读，今天的点评乐乐爸爸尚未查看不落行、
   历史点评两位家人均已读，查看时间为按点评时间推算的演示值） -------- */
function evAddMin(ts,m){
  const sp=ts.lastIndexOf(' '),p=ts.slice(0,sp),[h,mi]=ts.slice(sp+1).split(':').map(Number);
  const tot=h*60+mi+m;
  return p+' '+String(Math.floor(tot/60)).padStart(2,'0')+':'+String(tot%60).padStart(2,'0');
}
function evDetail(card){
  document.getElementById('evd-reads-t').style.display='';
  document.getElementById('evd-reads').style.display='';
  document.getElementById('evd-badge').innerHTML=card.querySelector('.chip').outerHTML+card.querySelector('.row b').outerHTML;
  const v=card.querySelectorAll('.kv .v');
  document.getElementById('evd-dim').textContent=v[0].textContent;
  document.getElementById('evd-item').textContent=v[1].textContent;
  document.getElementById('evd-tch').textContent=v[2].textContent;
  const ts=card.querySelector(':scope>.muted').textContent;
  document.getElementById('evd-time').textContent=ts;
  /* 老师评语与图片：教师端图文点评随记录同步过来，详情页就地按卡片内容回填（无则不出行） */
  const box=document.getElementById('evd-info');
  box.querySelectorAll('.ev-note,.ev-imgs').forEach(n=>n.remove());
  const note=card.querySelector('.ev-note .v'),imgs=card.querySelector('.ev-imgs');
  if(note){
    box.insertAdjacentHTML('beforeend','<div class="kv ev-note"><span class="k">老师评语</span><span class="v"></span></div>');
    box.querySelector('.ev-note .v').textContent=note.textContent;
  }
  if(imgs)box.insertAdjacentHTML('beforeend','<div class="ev-imgs">'+imgs.innerHTML+'</div>');
  const reads=[[evAddMin(ts,47),'乐乐妈妈（我）已读']];
  if(!ts.startsWith('今天'))reads.push([evAddMin(ts,188),'乐乐爸爸已读']);
  document.getElementById('evd-reads').innerHTML=reads.map(([t,w])=>'<div style="display:flex;gap:16px;font-size:12.5px;color:var(--ink-2);padding:8px 0"><span style="color:var(--ink-3);font-variant-numeric:tabular-nums">'+t+'</span><span>'+w+'</span></div>').join('');
  go('sc-evaldt');
}
/* 点评撤回态：老师删除点评后，站内消息条目保留并标为已撤回，点击（或从无法撤回的服务号推送点进来）落本页——
   只保留孩子、原点评时间与撤回说明，不再展示点评维度 / 项目 / 星星与评语图片（评价已撤销，不应继续留下印象，
   待改进类尤甚），已读动态一并隐藏；素质评价列表中该记录已移除、星星与统计已扣回 */
function evRevoked(time,tch){
  document.getElementById('evd-badge').innerHTML='<span class="chip gray plain">已撤回</span>';
  document.getElementById('evd-info').innerHTML=
    '<div class="kv"><span class="k">点评时间</span><span class="v">'+time+'</span></div>'
   +'<div style="font-size:12.5px;color:var(--ink-2);line-height:1.75;margin-top:9px">这条点评已被'+tch+'撤回，对应星星已扣回、不计入统计。</div>';
  document.getElementById('evd-reads-t').style.display='none';
  document.getElementById('evd-reads').style.display='none';
  go('sc-evaldt');
}
/* -------- 评价报告：素质评价页功能条「评价报告」进入。周期切换（本月 / 上个月 / 本学期 / 上学期 / 自定义按月区间，
   最多 6 个月，见上方 mr* 说明）整页按「学生 × 周期」重算，数据层见下方 REP_ITEMS 说明；导出文件名随周期命名（repPeriodName） -------- */
/* -------- 报告周期自定义区间：按月选择（起止胶囊 + 年 / 月两列滚轮）--------
   报告页的预设周期（本月 / 上个月 / 本学期 / 上学期）全部按整月对齐，趋势区块也只能按月画，导出文件按月 / 学期命名，
   自定义精确到日是全页唯一的例外——一天的「报告」没有意义、却能通过校验；改为「某月到某月」后与预设、趋势窗口和命名单位一致。
   点评记录列表的自定义仍按日（dr*）：列表筛记录、按天筛是合理需求，两页语义本就不同。
   三条校验（开始不晚于结束 / 最多 6 个自然月 / 结束不晚于本月）在半屏「确定」时执行：
   6 个月上限恰等于一个学期、也等于趋势区块的回看窗口（此前「180 天」沿用的是消息保留期口径，对家长是个陌生数字）；
   结束月不晚于本月由滚轮直接约束（本年月份列只到当前月，选未来月只会得到空态）、校验仅作兜底 -------- */
const MR_NOW='2026-07'; /* 演示「本月」 */
const MR_MAX=6;
const mrR={which:'s',s:'',e:''};
let mrTimer;
function mrInit(s,e){mrR.which='s';mrR.s=s.slice(0,7);mrR.e=e.slice(0,7)}
function mrTxt(ym){return ym?(+ym.slice(0,4))+'年'+(+ym.slice(5,7))+'月':''}
function mrMonthMax(y){return y===+MR_NOW.slice(0,4)?+MR_NOW.slice(5,7):12}
function mrBox(){
  const pill=k=>'<button class="dr-pill'+(mrR.which===k?' on':'')+'" id="mr-pill-'+k+'" onclick="mrSwitch(\''+k+'\')">'+mrTxt(mrR[k])+'</button>';
  return '<div class="dr-row">'+pill('s')+'<span class="dr-sep">至</span>'+pill('e')+'</div>'
    +'<div class="dp-wheel">'
      +'<div class="dp-col" id="mr-y" onscroll="mrScroll(this)"></div>'
      +'<div class="dp-col" id="mr-m" onscroll="mrScroll(this)"></div>'
    +'</div>'
    +'<div style="font-size:11px;color:var(--ink-3);margin-top:6px">自定义时间范围最多 6 个月</div>';
}
/* 按当前编辑端的年月定位两列（半屏 DOM 插入后调用） */
function mrFill(){
  const p=(mrR[mrR.which]||'').split('-').map(Number);
  if(!p[0])return;
  dpFill('mr-y',2024,+MR_NOW.slice(0,4),'年',p[0]);
  dpFill('mr-m',1,mrMonthMax(p[0]),'月',p[1]);
}
function mrReady(){return ['mr-y','mr-m'].every(function(i){const el=document.getElementById(i);return el&&el.children.length})}
function mrScroll(el){
  dpMark(el);
  clearTimeout(mrTimer);
  mrTimer=setTimeout(function(){mrMonths();mrCommit()},150); /* 滚动停稳后联动月份列并回写 */
}
/* 年份滚到本年时月份列只到当前月，滚回往年再放开到 12 月 */
function mrMonths(){
  if(!mrReady())return;
  const mEl=document.getElementById('mr-m'),max=mrMonthMax(dpVal('mr-y'));
  if(mEl.children.length!==max)dpFill('mr-m',1,max,'月',Math.min(dpVal('mr-m'),max));
}
function mrCommit(){
  if(!mrReady())return;
  const y=dpVal('mr-y'),m=Math.min(dpVal('mr-m'),mrMonthMax(y));
  mrR[mrR.which]=y+'-'+String(m).padStart(2,'0');
  const btn=document.getElementById('mr-pill-'+mrR.which);
  if(btn)btn.textContent=mrTxt(mrR[mrR.which]);
}
function mrSwitch(k){
  mrCommit();
  mrR.which=k;
  ['s','e'].forEach(function(x){const b=document.getElementById('mr-pill-'+x);if(b)b.classList.toggle('on',x===k)});
  mrFill();
}
function mrIdx(ym){return (+ym.slice(0,4))*12+(+ym.slice(5,7))}
/* 起止校验：不通过只提示、不写入，半屏留在自定义状态供直接改月 */
function mrCheck(){
  mrCommit();
  if(!mrR.s||!mrR.e){toast('请选择完整的起止月份');return false}
  if(mrR.s>mrR.e){toast('开始月份晚于结束月份');return false}
  if(mrIdx(mrR.e)-mrIdx(mrR.s)+1>MR_MAX){toast('最多只能选择 6 个月');return false}
  if(mrR.e>MR_NOW){toast('结束月份不能晚于本月');return false}
  return true;
}
/* 月区间落成日区间：起月首日 ～ 止月末日 */
function mrStart(){return mrR.s+'-01'}
function mrEnd(){const y=+mrR.e.slice(0,4),m=+mrR.e.slice(5,7);return mrR.e+'-'+String(new Date(y,m,0).getDate()).padStart(2,'0')}
/* 报告周期名（导出文件名用）：预设用固定名，自定义按月区间命名——同年「2026年3月–5月」、跨年「2025年11月–2026年1月」、单月「2026年3月」 */
function repPeriodName(){
  if(evR.preset!=='custom')return REP_NAME[evR.preset];
  const s=evR.s.slice(0,7),e=evR.e.slice(0,7);
  if(s===e)return mrTxt(s);
  return mrTxt(s)+'–'+(s.slice(0,4)===e.slice(0,4)?(+e.slice(5,7))+'月':mrTxt(e));
}
const evR={preset:'sem',s:'2026-02-01',e:'2026-07-31'};
const REP_KEYS=['month','lmonth','sem','lsem','custom'];
const REP_NAME={month:'2026年7月',lmonth:'2026年6月',sem:'2026春季学期',lsem:'2025秋季学期'};
function repdToggle(hd){const d=hd.parentNode;d.classList.toggle('open');d.querySelector('.repd-bd').style.display=d.classList.contains('open')?'':'none'}
function evrOpen(){return document.getElementById('mask').classList.contains('show')&&!!document.getElementById('evrfs')}
function evrSheet(){
  const chips='<div class="fs-chips">'+REP_KEYS.map(k=>'<button class="'+(k===evR.preset?'on':'')+'" onclick="evrPick(\''+k+'\')">'+EVT_PRESETS[k][0]+'</button>').join('')+'</div>';
  const cust=evR.preset==='custom'?mrBox():'';
  document.getElementById('sheet').innerHTML='<div id="evrfs"><h3>时间筛选</h3>'
    +'<div style="display:flex;align-items:center;margin:2px 0 4px;font-size:13px"><span style="color:var(--ink-2)">当前选择日期</span><span style="margin-left:auto;font-weight:600;font-variant-numeric:tabular-nums">'+evtFmt(evR.s)+'–'+evtFmt(evR.e)+'</span></div>'
    +chips+cust
    +'<div style="display:flex;gap:10px;margin-top:22px"><button class="btn ghost" style="flex:1" onclick="evrReset()">重置</button><button class="btn pri" style="flex:2" onclick="evrOk()">确定</button></div></div>';
  document.getElementById('mask').classList.add('show');
  if(evR.preset==='custom')mrFill();
}
function evrOk(){
  if(evR.preset==='custom'){
    if(!mrCheck())return;
    evR.s=mrStart();evR.e=mrEnd();evrApply();
  }
  closeSheet();
}
/* 报告主体的学生名（教师端可切学生、家长端跟随当前孩子） */
function repName(){return curKid}
/* -------- 评价报告数据层：整页按「学生 × 周期」从条目级演示数据聚合 --------
   此前分布 / 趋势 / 统计 / 明细四块各自硬编码，切周期只动头部文本，块与块之间也全靠人工对数；
   现改为一份条目数据（日期 × 维度 × 项目 × 星星）驱动全部区块：切周期整页联动，且统计表、明细、
   星星总数与趋势末点天然互相对得上，不会再出现某块与另一块打架。
   演示仅林晓乐一人有记录，其余学生沿用同一份（真实产品按学生取自己的记录）。
   条目分两段：本学期 2026.02–07 共 16 条、上学期 2025.09–12 共 12 条，切周期即可看出整页重算，
   并覆盖「发展亮点维度分析」的四个分支——本学期常规、本月样本不足、上个月全为待改进、上学期均衡 */
const REP_DIMS=[['de','德育','#F45E9E'],['zh','智育','#7C66F2'],['ti','体育','#2E7CF0'],['me','美育','#1FB6D9'],['lao','劳育','#F79A2E']];
const REP_TODAY='2026-07-06'; /* 演示「今天」，决定明细行的时间格式 */
const REP_ITEMS=[ /* 按时间倒序：明细区新的在前 */
 {d:'2026-07-06 10:26',k:'de',t:'主动帮助同学搬运图书',s:2},
 {d:'2026-07-03 09:20',k:'zh',t:'语文背诵比赛表现优秀',s:2},
 {d:'2026-07-02 10:35',k:'ti',t:'校运会 60 米第一名',s:2},
 {d:'2026-06-18 15:40',k:'de',t:'做危险动作',s:-2},
 {d:'2026-05-25 16:20',k:'lao',t:'主动整理图书角',s:2},
 {d:'2026-05-14 16:10',k:'zh',t:'数学作业未按时提交',s:-1},
 {d:'2026-05-11 11:05',k:'me',t:'合唱比赛领唱',s:2},
 {d:'2026-05-08 15:25',k:'ti',t:'体育课队列纪律散漫',s:-1},
 {d:'2026-04-22 14:40',k:'me',t:'音乐课随意讲话影响他人',s:-1},
 {d:'2026-04-15 08:50',k:'lao',t:'值日打扫认真',s:1},
 {d:'2026-04-09 14:05',k:'de',t:'运动会广播操表现优秀',s:2},
 {d:'2026-03-18 11:05',k:'me',t:'绘画作品入选班级作品墙',s:1},
 {d:'2026-03-05 09:20',k:'zh',t:'口算小达人比赛满分',s:2},
 {d:'2026-02-26 16:20',k:'lao',t:'未按时完成值日',s:-1},
 {d:'2026-02-20 10:35',k:'ti',t:'跳绳测试满分',s:1},
 {d:'2026-02-12 10:26',k:'de',t:'活动中有契约精神',s:1},
 {d:'2025-12-19 16:35',k:'lao',t:'主动整理教室卫生角',s:2},
 {d:'2025-12-08 16:20',k:'zh',t:'随堂测验未订正',s:-1},
 {d:'2025-12-03 15:10',k:'me',t:'书法作业获展示',s:1},
 {d:'2025-11-20 14:30',k:'de',t:'排队守秩序',s:1},
 {d:'2025-11-12 10:40',k:'ti',t:'长跑坚持完成',s:1},
 {d:'2025-11-05 14:50',k:'me',t:'美术课未带工具',s:-1},
 {d:'2025-10-28 15:10',k:'me',t:'手工作品在校艺术节展出',s:2},
 {d:'2025-10-16 10:40',k:'ti',t:'体育达标测试优秀',s:2},
 {d:'2025-10-09 09:35',k:'zh',t:'课堂发言积极',s:1},
 {d:'2025-09-25 10:05',k:'zh',t:'课堂笔记工整',s:2},
 {d:'2025-09-18 16:20',k:'lao',t:'值日提前到岗',s:2},
 {d:'2025-09-10 09:15',k:'de',t:'主动打扫教室',s:2}
];
/* 明细行时间格式与记录卡同规范：当天「今天 HH:mm」、当年「M月D日 HH:mm」、跨年补年份 */
function repTime(d){
  const day=d.slice(0,10),hm=d.slice(11,16);
  if(day===REP_TODAY)return '今天 '+hm;
  const y=day.slice(0,4);
  return (y===REP_TODAY.slice(0,4)?'':y+'年')+(+day.slice(5,7))+'月'+(+day.slice(8,10))+'日 '+hm;
}
function repRows(){return REP_ITEMS.filter(it=>it.d.slice(0,10)>=evR.s&&it.d.slice(0,10)<=evR.e)}
/* 发展亮点维度分析：分支与判定顺序见 PRD 10.11，取数只看五维表扬加分（扣分不入亮点简评，由统计表 / 明细承载） */
function repHlText(agg){
  const b=t=>'<b style="color:var(--navy)">「'+t+'」</b>',nm=repName();
  const ps=REP_DIMS.map(function(x){return {n:x[1],p:agg[x[0]].p}});
  const vs=ps.map(function(x){return x.p}),mx=Math.max.apply(null,vs),mn=Math.min.apply(null,vs);
  if(!mx)return '【发展亮点维度分析】本周期的点评以待改进提醒为主，各维度的表现亮点仍在积累中，期待下一周期的进步。';
  if(mx<3)return '【发展亮点维度分析】本周期点评数据较少，各维度发展有待更多观察。';
  if(mx-mn<=1)return '【发展亮点维度分析】'+nm+'五个维度发展较为均衡，整体表现稳定。';
  const top=ps.filter(function(x){return x.p===mx});
  /* 第一名并列：去掉「尤为明显」半句改「并列突出」 */
  if(top.length>1)return '【发展亮点维度分析】'+nm+top.slice(0,3).map(function(x){return b(x.n)}).join('、')+'维度并列突出。';
  const rest=ps.filter(function(x){return x.p!==mx}),m2=Math.max.apply(null,rest.map(function(x){return x.p}));
  if(!m2)return '【发展亮点维度分析】'+nm+b(top[0].n)+'维度表现较为突出。'; /* 仅一维有分只提该维 */
  const sec=rest.filter(function(x){return x.p===m2});
  /* 第二名并列则连同第一名一起列出，合计最多 3 个维度、超出只提第一名 */
  if(sec.length>2)return '【发展亮点维度分析】'+nm+b(top[0].n)+'维度表现较为突出。';
  return '【发展亮点维度分析】'+nm+b(top[0].n)+'、'+sec.map(function(x){return b(x.n)}).join('、')+'维度表现较为突出，其中'+b(top[0].n)+'维度发展尤为明显。';
}
/* 点评趋势：固定回看 6 个自然月（末月取评价周期的结束月），各维度自窗口首月起累计净值。
   这是报告里唯一不跟随周期的区块——趋势要看的是变化，至少得有几个点才成立，而周期常被选成
   本月 / 上个月 / 自定义短区间，跟着周期走会让折线退化成一两个点；粒度也只能是月，一名学生
   一个月不过几次点评，按周看基本是 0 / 1 的噪声。锚在周期结束月而非当前月：看上学期的报告时，
   趋势也该落在那段时间，而不是永远画到今天。
   已知代价：周期恰为该 6 个月窗口时（本学期 / 上学期）折线末点等于「点评统计」表各维的
   （加分 − 扣分），周期短于窗口时（本月 / 上个月）两者不等——末点是窗口内的累计、不是本周期的分。
   标题右侧常驻「近 6 个月 · 区间」即为提示，读图时以区间为准。
   纵轴按数据算：步长取 1 / 2 / 5 / 10…，网格线恰好 5 条、标签一律整数，下界取 min(0, 最小值) 并对齐步长 */
function repTrend(){
  const y=+evR.e.slice(0,4),m=+evR.e.slice(5,7),ms=[];
  for(let i=5;i>=0;i--)ms.push(new Date(y,m-1-i,1));
  document.getElementById('rep-trend-card').style.display='';
  const keys=ms.map(function(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')});
  const ser=REP_DIMS.map(function(x){
    let t=0;const v=[];
    keys.forEach(function(kk){
      REP_ITEMS.forEach(function(it){if(it.k===x[0]&&it.d.slice(0,7)===kk)t+=it.s});
      v.push(t);
    });
    return {c:x[2],v:v};
  });
  const all=ser.reduce(function(a,s){return a.concat(s.v)},[]);
  const max=Math.max.apply(null,all),min=Math.min.apply(null,all),base=Math.min(0,min);
  /* 步长取 1 / 2 / 5 的十倍数并随数据量级自适应（原实现的候选表封顶 100、上界最多只能到 800，
     一个高频点评的班级一学期累计上千星就会把折线画出画布）；下界向下对齐到步长的整数倍，
     刻度条数按需取 2–5 条而不是硬画 5 条——跨度大时 5 条会把上界撑到数据的两倍、上方留一大片空 */
  const nice=function(x){
    if(x<=1)return 1;
    const e=Math.pow(10,Math.floor(Math.log10(x))),m=x/e;
    /* 2.5 档只在量级 ≥10 时启用（25 / 250 / 2500…仍是整数，而 2.5 本身会让标签出现小数）：
       少了这一档，跨度 1000 只能退到步长 500、刻度塌成 0 / 500 / 1000 三条，
       而 250 能排满 0 / 250 / 500 / 750 / 1000 五条、格子更细也更贴合数据 */
    const c=e>=10?[1,2,2.5,5,10]:[1,2,5,10];
    for(let i=0;i<c.length;i++)if(m<=c[i])return c[i]*e;
    return 10*e;
  };
  let step=nice(Math.max(1,Math.ceil((max-base)/4))),lo,nt;
  for(;;){
    lo=Math.floor(base/step)*step;
    nt=Math.max(2,Math.ceil((max-lo)/step)+1);
    if(nt<=5)break;
    /* 反复升档直到达标，不能简化成「超限就升一档」：存在升一档仍超限的情形——如最高 −74、最低 −151 时，
       步长 20→25 只增加 25%，而下界对齐又向下多推 15，两者抵消、条数仍是 6，升到 50 才降下来 */
    step=nice(step+1);
  }
  const hi=lo+step*(nt-1);
  const yy=function(v){return 150-(v-lo)/(hi-lo)*108};
  const n=ms.length,xx=function(i){return 30+i*(260/(n-1))};
  let h='<g stroke="#EDF1F6" stroke-width="1">';
  for(let i=0;i<nt;i++){const v=lo+step*i;if(v!==0)h+='<line x1="26" y1="'+yy(v)+'" x2="300" y2="'+yy(v)+'"/>'}
  h+='</g>';
  /* 零线单独加深：累计净值可正可负（扣分多于加分的月份会把曲线拉下来），正负分界必须一眼可辨 */
  h+='<line x1="26" y1="'+yy(0)+'" x2="300" y2="'+yy(0)+'" stroke="#D5DCE6" stroke-width="1"/>';
  h+='<g fill="#9AA7BB" font-size="10"><text x="10" y="18">星星累计净值</text>';
  for(let i=0;i<nt;i++){const v=lo+step*i;h+='<text text-anchor="end" x="22" y="'+(yy(v)+3)+'">'+(v<0?'−'+(-v):v)+'</text>'}
  ms.forEach(function(d,i){h+='<text text-anchor="middle" x="'+xx(i)+'" y="168">'+(d.getMonth()+1)+'月</text>'});
  h+='</g><g fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".85">';
  ser.forEach(function(s){h+='<polyline stroke="'+s.c+'" points="'+s.v.map(function(v,i){return xx(i).toFixed(1)+','+yy(v)}).join(' ')+'"/>'});
  document.getElementById('rep-trend').innerHTML=h+'</g>';
  const f=function(d){return d.getFullYear()+'.'+String(d.getMonth()+1).padStart(2,'0')};
  document.getElementById('rep-trend-rng').textContent='近 6 个月 · '+f(ms[0])+'–'+f(ms[n-1]);
}
/* 整页重算：分布环图 / 图例 / 亮点简评 / 趋势 / 统计表 / 明细 / 星星总数，切周期与切学生均走这里 */
function repRender(){
  const rows=repRows(),agg={};
  REP_DIMS.forEach(function(x){agg[x[0]]={n:0,p:0,i:0}});
  rows.forEach(function(r){const o=agg[r.k];o.n++;if(r.s>0)o.p+=r.s;else o.i-=r.s});
  const P=REP_DIMS.reduce(function(a,x){return a+agg[x[0]].p},0),I=REP_DIMS.reduce(function(a,x){return a+agg[x[0]].i},0);
  /* 空态由「周期内无点评记录」自然触发；repEmpty() 是演示用的强制开关 */
  const empty=repNoData||!rows.length;
  document.getElementById('rep-body').style.display=empty?'none':'';
  document.getElementById('rep-empty').style.display=empty?'':'none';
  if(empty)return;
  /* 外环＝各维加分星星占比（全为待改进时无加分可分，整环置灰）；内环＝表扬 : 待改进 星星占比 */
  let acc=0;const seg=[];
  REP_DIMS.forEach(function(x){const w=P?agg[x[0]].p/P*100:0;seg.push(x[2]+' '+acc.toFixed(2)+'% '+(acc+w).toFixed(2)+'%');acc+=w});
  document.getElementById('rep-ring').style.background=P?'conic-gradient('+seg.join(',')+')':'#E7ECF3';
  const ri=(P+I)?I/(P+I)*100:0;
  document.getElementById('rep-core').style.background='conic-gradient(#F0655A 0 '+ri.toFixed(2)+'%,#58BE6F '+ri.toFixed(2)+'% 100%)';
  document.getElementById('rep-lg').innerHTML=REP_DIMS.map(function(x){return '<span><i style="background:'+x[2]+'"></i>'+x[1]+' +'+agg[x[0]].p+'</span>'}).join('');
  document.getElementById('rep-hl').innerHTML=repHlText(agg);
  repTrend();
  let t='<tr><th>指标维度</th><th>点评次数</th><th>加分</th><th>扣分</th></tr>';
  REP_DIMS.forEach(function(x){const o=agg[x[0]];
    t+='<tr><td>'+x[1]+'</td><td>'+o.n+'</td><td style="color:var(--teal)">+'+o.p+'</td><td style="color:var(--cinnabar)">'+(o.i?'−'+o.i:'0')+'</td></tr>'});
  t+='<tr><td><b>合计</b></td><td><b>'+rows.length+'</b></td><td style="color:var(--teal)"><b>+'+P+'</b></td><td style="color:var(--cinnabar)"><b>'+(I?'−'+I:'0')+'</b></td></tr>';
  document.getElementById('rep-tbl').innerHTML=t;
  let dt='';
  REP_DIMS.forEach(function(x){
    const list=rows.filter(function(r){return r.k===x[0]});
    if(!list.length)return; /* 周期内该维无点评则整节不出 */
    const net=list.reduce(function(a,r){return a+r.s},0);
    dt+='<div class="repd"><div class="repd-hd" onclick="repdToggle(this)"><b>'+x[1]+'（'+list.length+'）</b>'
      +'<span class="net" style="color:'+(net<0?'var(--cinnabar)':'var(--teal)')+'">'+(net<0?'−':'+')+Math.abs(net)+'</span><i>▾</i></div>'
      +'<div class="repd-bd" style="display:none">'+list.map(function(r){
        return '<div class="repd-row"><span>'+r.t+'</span><b style="color:'+(r.s>0?'var(--navy)':'#F79A2E')+'">'+(r.s>0?'+':'−')+Math.abs(r.s)+'</b><em>'+repTime(r.d)+'</em></div>';
      }).join('')+'</div></div>';
  });
  document.getElementById('rep-detail').innerHTML=dt;
  const nt=P-I;
  document.getElementById('rep-total').textContent=(nt<0?'−':'+')+Math.abs(nt);
  document.getElementById('rep-total').style.color=nt<0?'var(--cinnabar)':'var(--teal)';
}
function evrApply(){
  document.getElementById('rep-period').textContent=EVT_PRESETS[evR.preset][0]+' ▾';
  document.getElementById('rep-range').textContent=evtFmt(evR.s)+'–'+evtFmt(evR.e);
  repRender();
  if(evrOpen())evrSheet();
}
function evrPick(k){
  evR.preset=k;
  if(k!=='custom'){evR.s=EVT_PRESETS[k][1];evR.e=EVT_PRESETS[k][2]}
  else mrInit(evR.s,evR.e); /* 切到自定义：年 / 月滚轮从当前区间的起止月起步 */
  evrApply();
}
function evrReset(){evR.preset='sem';evR.s=EVT_PRESETS.sem[1];evR.e=EVT_PRESETS.sem[2];evrApply()}
/* -------- 下载评价报告：生成中 / 已生成两组，30 天自动删除提示；「导出报告」入队生成中、约 2.5 秒后转入已生成（演示）；
   演示含一条生成失败记录（可重新导出）；下载 / 清空为演示交互，刷新恢复 -------- */
const REP_DL={
  gen:[{n:'【学生报告】林晓乐-3年级-2班-2026春季学期.docx',t:'2026-07-01 09:12:44',st:'fail'}],
  done:[{n:'【学生报告】林晓乐-3年级-2班-2026春季学期.docx',s:'799.05KB',t:'2026-07-06 16:58:31'},
        {n:'【学生报告】林晓乐-3年级-2班-2026年6月.docx',s:'782.40KB',t:'2026-07-02 10:12:19'}]
};
let dlSeq=21;
function dlEntry(it){
  const right=it.st==='fail'?'<span style="color:var(--cinnabar);font-size:12px;font-weight:600;flex-shrink:0">生成失败</span>'
    :it.st==='gen'?'<span style="color:#F79A2E;font-size:12px;font-weight:600;flex-shrink:0">生成中…</span>'
    :'<span style="color:var(--navy);font-size:12px;font-weight:600;flex-shrink:0;cursor:pointer" onclick="dlDownload(\''+it.n+'\')">↓ 下载</span>';
  return '<div style="display:flex;gap:11px;padding:12px 0;border-bottom:1px solid #F0F3F7">'
    +'<span style="width:38px;height:38px;border-radius:9px;background:#3D8BFC;color:#fff;font-weight:800;font-size:15px;display:flex;align-items:center;justify-content:center;flex-shrink:0">W</span>'
    +'<div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:8px"><span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:13px;font-weight:600">'+it.n+'</span>'+right+'</div>'
    +'<div style="display:flex;font-size:11.5px;color:var(--ink-3);margin-top:4px"><span>'+(it.s||'')+'</span><span style="margin-left:auto;font-variant-numeric:tabular-nums">'+it.t+'</span></div></div></div>';
}
function dlGroup(title,key){
  const list=REP_DL[key];
  return '<div style="display:flex;align-items:center;margin:14px 2px 4px"><b style="font-size:13.5px">▾ '+title+'（'+list.length+'）</b>'
    +(list.length?'<span style="margin-left:auto;color:var(--ink-3);font-size:12px;cursor:pointer" onclick="dlClear(\''+key+'\')">清空</span>':'')
    +'</div><div class="card" style="padding:2px 14px">'
    +(list.length?list.map(dlEntry).join(''):'<div style="text-align:center;color:var(--ink-3);font-size:12px;padding:18px 0">暂无记录</div>')
    +'</div>';
}
function dlRender(){document.getElementById('dl-list').innerHTML=dlGroup('生成中','gen')+dlGroup('已生成','done')}
/* 下载：触发浏览器真实下载。assets/reports/ 下按条目文件名各存一份演示报告副本（内容相同），链接直指对应文件——
   不依赖 a.download 重命名（file:// 打开原型时本地文件互为跨源、download 属性会被浏览器忽略而回落资源名）；
   真实产品为微信小程序侧下载后打开 / 转发文件 */
function dlDownload(n){
  const a=document.createElement('a');
  a.href='assets/reports/'+n;
  a.download=n;
  document.body.appendChild(a);a.click();a.remove();
  toast('已开始下载：'+n);
}
function dlClear(k){REP_DL[k]=[];dlRender();toast('已清空')}
/* 评价报告空态：周期内无任何点评记录时，四个分区整体收起、换成整页空态；
   头部（学生卡 / 周期按钮 / 导出报告）与右下下载浮钮保留——空态多半是周期选错了，
   切周期的入口必须留在手边；下载浮钮进的是下载列表，里面可能有其他周期导出的报告，与当前周期有无数据无关。
   真实产品由报告数据决定，原型经演示说明切换（演示数据，刷新恢复） */
let repNoData=false;
/* 演示用的强制空态开关：真实空态由「周期内无点评记录」自然触发（见 repRender） */
function repEmpty(on){
  repNoData=!!on;
  repRender();
  const b=document.querySelector('#sc-evalrep .body');if(b)b.scrollTop=0;
}
function repExport(){
  if(repNoData){toast('暂无点评数据，无法导出');return}
  const it={n:'【学生报告】林晓乐-3年级-2班-'+repPeriodName()+'.docx',t:'2026-07-06 17:05:'+String(dlSeq++).padStart(2,'0'),st:'gen'};
  REP_DL.gen.unshift(it);dlRender();go('sc-evaldl');toast('报告生成中，稍候下载');
  setTimeout(()=>{
    const i=REP_DL.gen.indexOf(it);
    if(i<0)return; /* 已被清空 */
    REP_DL.gen.splice(i,1);
    REP_DL.done.unshift({n:it.n,s:'801.22KB',t:'2026-07-06 17:05:'+String(dlSeq++).padStart(2,'0')});
    dlRender();toast('报告已生成，可下载');
  },2500);
}
dlRender();
/* -------- 扫码结果 -------- */
/* 统一扫一扫：「未识别」分支（扫到非校徽二维码）——真实产品为微信原生扫码相机（wx.scanCode），相机能解出任意二维码即收起并把内容交回小程序，
   小程序在相机层上无法绘制 toast、也无法拒收后驻留相机页，故未识别同样先关相机回来源页（scanBack）再承接：
   scanInvalidSheet 回来源页弹轻量半屏、带「重新扫描」再次调起相机（保留来源页与待核验徽，重扫仍走原链路）；
   曾并行演示的「回来源页轻提示」形态（scanInvalidToast）已定版收掉。
   码读不出（相机一直取景）原生无回调、用户自行返回即取消，降级手工输入短编号入口应落来源页，为产品设计口径、原型不做演示。
   有识别结果的分支先关相机回来源页再复用「我的校徽」同款「已识别校徽」结果半屏
   （homeScanActive / bdVerifySheet / bdScanWrong / bdScanGrad / bdScanVoid / bdScanVoidFree，见 sc-scan 演示说明） */
function scanInvalidSheet(){
  scanBack();
  showSheet('<h3>未识别到校徽二维码</h3>'+
   '<div class="desc">扫到的不是校徽二维码。请对准校徽的二维码重新扫描。</div>'+
   '<button class="btn pri blk" onclick="closeSheet();scanOpen(scanFrom,scanExpect)">重新扫描</button>'+
   '<button class="btn ghost blk" style="margin-top:9px" onclick="closeSheet()">关闭</button>');
}
/* 统一扫一扫：扫到他人预关联的徽（错拿 / 错发）——首发核对场景：识别为互拿配对即自动生成换发工单（防探测：不显示对方信息）。
   演示入口已隐藏（原 sc-scan 演示说明按钮，恢复方式：a 数组加回 ['扫到他人预关联的徽（错拿/错发）','scanBack();bdScanWrong()']），函数保留 */
function bdScanWrong(){
  showSheet('<h3 style="color:var(--cinnabar)">该校徽不属于您的孩子</h3>'+
   '<div class="desc">已识别校徽二维码，这枚校徽预关联的是其他学生（不显示对方信息）。系统已自动生成换发工单：新徽统一寄送至学校、到校后由班主任发放，无需联系对方。</div>'+
   '<button class="btn pri blk" onclick="closeSheet()">我知道了</button>');
}
/* -------- 消息未读：条目红点（data-m 同键联动）；消息 Tab 不设数字角标——即时提醒走服务号推送，站内消息仅供回看历史，避免角标打扰；真实实现中已读状态按家长账号独立 -------- */
function markRead(m){
  document.querySelectorAll('.unread-dot[data-m="'+m+'"]').forEach(d=>d.remove());
  applyMsgFilter();
}
function markAllRead(){
  document.querySelectorAll('.unread-dot').forEach(d=>d.remove());
  applyMsgFilter();
  toast('已全部标为已读');
}
/* -------- 消息筛选：读态 Tab（未读/已读/全部）+「筛选」半屏面板（类别 × 时间范围，点选即生效，演示前端过滤） -------- */
const msgFilter={read:'all',cat:'all',days:180};
const MSG_CATS={all:'全部类别',notice:'通知',att:'到离校',dismiss:'放学',leave:'请假',badge:'校徽办理',guardian:'家人',eval:'素质评价',svc:'反馈与提醒'};
function msgReadTab(k){
  msgFilter.read=k;
  document.querySelectorAll('#msg-rtabs button[data-r]').forEach(b=>b.classList.toggle('on',b.dataset.r===k));
  applyMsgFilter();
}
function msgFilterSheet(){
  const chips=(kind,opts,cur)=>'<div class="fs-chips">'+opts.map(([v,l])=>'<button class="'+(String(v)===String(cur)?'on':'')+'" onclick="msgPick(\''+kind+'\',\''+v+'\')">'+l+'</button>').join('')+'</div>';
  document.getElementById('sheet').innerHTML='<div id="msgfs"><h3>筛选消息</h3>'
    +'<div class="fs-sec">消息类别</div>'+chips('cat',Object.entries(MSG_CATS).filter(([v])=>(v!=='svc'||fbEntryOn())),msgFilter.cat)
    +'<div class="fs-sec">时间范围</div>'+chips('days',[['7','近 7 天'],['30','近 30 天'],['90','近 90 天'],['180','近 180 天']],msgFilter.days)
    +'<div style="display:flex;gap:10px;margin-top:22px"><button class="btn ghost" style="flex:1" onclick="msgFilterReset()">重置</button><button class="btn pri" style="flex:2" onclick="closeSheet()">完成</button></div></div>';
  document.getElementById('mask').classList.add('show');
}
function msgFsOpen(){return document.getElementById('mask').classList.contains('show')&&!!document.getElementById('msgfs')}
function msgPick(kind,v){
  if(kind==='cat')msgFilter.cat=v;else msgFilter.days=+v;
  msgFbtnUpd();applyMsgFilter();
  if(msgFsOpen())msgFilterSheet(); /* 面板开着时刷新选中态：点选即生效、不关面板 */
}
function msgFilterReset(){
  msgFilter.cat='all';msgFilter.days=180;
  msgFbtnUpd();applyMsgFilter();
  if(msgFsOpen())msgFilterSheet();
}
function msgFbtnUpd(){document.getElementById('msg-fbtn').classList.toggle('act',msgFilter.cat!=='all'||msgFilter.days!==180)}
function applyMsgFilter(){
  let shown=0;
  document.querySelectorAll('#sc-msgs .lv-item').forEach(it=>{
    if(it.dataset.stage2||it.dataset.off)return; /* 第一阶段隐藏的消息、不再发送的消息（data-off）不参与筛选 */
    if(it.dataset.fb&&!fbEntryOn()){it.style.display='none';return} /* 反馈消息随「反馈建议」入口开关显隐 */
    const unread=!!it.querySelector('.unread-dot');
    const ok=(msgFilter.read==='all'||(msgFilter.read==='unread'?unread:!unread))
      &&(msgFilter.cat==='all'||it.dataset.cat===msgFilter.cat)
      &&+it.dataset.ago<msgFilter.days;
    it.style.display=ok?'':'none';if(ok)shown++;
  });
  document.querySelectorAll('#sc-msgs .msg-grp').forEach(g=>{
    g.style.display=[...g.querySelectorAll('.lv-item')].some(i=>i.style.display!=='none')?'':'none';
  });
  /* 分隔线：每张卡片内首条可见项不带线，其余可见项带上缘线 */
  document.querySelectorAll('#sc-msgs .msg-grp .card').forEach(c=>{
    let first=true;
    c.querySelectorAll('.lv-item').forEach(i=>{
      if(i.style.display==='none'){i.classList.remove('sep');return}
      i.classList.toggle('sep',!first);first=false;
    });
  });
  document.getElementById('msg-empty').style.display=shown?'none':'';
}
applyMsgFilter(); /* 初始渲染分隔线（含跳过第一阶段隐藏条目） */
repRender(); /* 评价报告主体按默认周期（本学期）聚合渲染 */
if(kidLand&&kidInfo[kidLand])idPick(kidLand); /* 教师端选孩子跳入落点（见文件前部 kidLand） */
/* -------- 教师身份行的职务 chip（2026-10-20）：首页身份切换面板与账号切换页里「王老师 · 市实验一小」行的 chip，按两端共用名册（assets/duty-store.js，教师端教师管理与学校端共同维护）中王老师的记录计算，
   口径与教师端首页角色标签相同：设了主职务显示主职务名，未设主职务、担任班主任显示「班主任」，都不是显示「教师」；家长端只读不写。在教师管理里给王老师改了主职务，刷新本页即一致；红旗小学校长行是跨校身份、不在该名册中，仍为写死文案 -------- */
const ME_TID='t26';
function meRoleLabel(){
  if(typeof dutyLoad!=='function')return '班主任';
  var S=dutyLoad(),t=S.teachers.find(function(x){return x.id===ME_TID});if(!t||t.st!=='on')return '教师';
  var on=function(id){var d=S.duties.find(function(x){return x.id===id});return d&&d.on?d:null};
  var m=t.ds.find(function(r){return r.main&&on(r.d)});if(m)return on(m.d).n;
  return S.classes.some(function(c){return c.head===t.id||c.dep.indexOf(t.id)>-1})?'班主任':'教师';
}
function meRoleSync(){var lb=meRoleLabel();document.querySelectorAll('[data-me-role]').forEach(function(e){e.textContent=lb;e.title=lb})}
meRoleSync();
