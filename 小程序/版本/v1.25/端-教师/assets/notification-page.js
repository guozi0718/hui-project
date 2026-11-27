(()=>{'use strict';
const screen=document.getElementById('sc-notification');
const body=screen?.querySelector('.body');
const heading=screen?.querySelector('.sub-hd b');
const back=screen?.querySelector('.sub-hd .back');
if(!screen||!body)return;
const role=document.querySelector('#home-rl')?'teacher':'parent';
let root=document.getElementById('notification-mini-root');
if(!root){root=document.createElement('div');root.id='notification-mini-root';root.className='notice-module notice-module-'+role;body.replaceChildren(root);}
else if(root.parentElement!==body)body.replaceChildren(root);
const VERSION='20261127-v1.24-draft-title';
const directEntry=/\/notification\.html$/i.test(location.pathname);
const asset=path=>new URL(path,document.baseURI||location.href).href;
if(!document.querySelector('link[data-notice-mini-css]')){const css=document.createElement('link');css.rel='stylesheet';css.dataset.noticeMiniCss='1';css.href=asset('assets/notification-mini.css?v='+VERSION);document.head.appendChild(css);}
window.NotificationMiniHost=(title,options={})=>{if(heading)heading.textContent=title||'通知';screen.classList.toggle('nm-share-landing',!!options.landing);screen.classList.toggle('nm-modal-open',!!options.modal);screen.classList.toggle('nm-sign-open',!!options.fullModal);};
if(back){back.removeAttribute('onclick');back.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(screen.classList.contains('nm-modal-open')||screen.classList.contains('nm-sign-open'))return;if(window.NotificationMini?.back)window.NotificationMini.back();else window.go?.('sc-home');},true);}
let settled=false;
const fail=message=>{if(settled)return;settled=true;clearTimeout(bootTimer);root.innerHTML='<div class="nm-load-error" role="alert" style="padding:24px 16px;color:#657187;text-align:center">'+message+'</div>';};
root.innerHTML='<div role="status" style="padding:24px 16px;color:#657187;text-align:center">正在打开通知…</div>';
const bootTimer=setTimeout(()=>{if(!window.NotificationMini)fail('通知页面初始化超时，请刷新重试。');},12000);
function loadScript(path,next){
 const src=asset(path);
 const existing=Array.from(document.querySelectorAll('script[data-notice-src]')).find(node=>node.dataset.noticeSrc===src);
 if(existing){if(existing.dataset.noticeLoaded==='1'){next();return;}existing.addEventListener('load',()=>{existing.dataset.noticeLoaded='1';next();},{once:true});existing.addEventListener('error',()=>fail('通知模块资源加载失败，请检查本地页面文件后刷新。'),{once:true});return;}
 const script=document.createElement('script');script.dataset.noticeSrc=src;script.src=src;script.onload=()=>{script.dataset.noticeLoaded='1';next();};script.onerror=()=>fail('通知模块资源加载失败，请检查本地页面文件后刷新。');document.body.appendChild(script);
}
try{demoInfo['sc-notification']={t:'通知 · 开发演示说明',d:'【页面与栈】当前视图位于 sc-notification。模块列表、页签、编辑、详情和弹层均通过同一页面内的视图状态切换；不新增小程序页面路由。若本地浏览器限制跨标签广播，不影响本页面初始化。',a:[]};}catch{}
loadScript('assets/notification-mini/core.js?v='+VERSION,()=>loadScript('assets/notification-mini/catalog.js?v='+VERSION,()=>loadScript('assets/notification-mini/app.js?v='+VERSION,()=>{if(!window.NotificationMini){fail('通知模块脚本未能完成初始化，请刷新重试。');return;}settled=true;clearTimeout(bootTimer);if(window.NotificationMini.state.page==='list')window.NotificationMini.setHost('通知');if(directEntry)window.go?.('sc-notification');})));
})();



