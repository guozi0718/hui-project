/* 用户仅更改返回按钮外观；保留按钮的全部事件属性、标题与布局。 */
(()=>{
const icon='<svg class="back-line-icon" aria-hidden="true" width="14" height="16" viewBox="0 0 16 18" fill="none"><path d="M8 3 2 9l6 6M2 9h13" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg><span>返回</span>';
function enhance(){for(const button of document.querySelectorAll('.page-sticky-header .page-back,.contract-title>button[data-do="b:cancel"],.page-sticky-header [aria-label="返回合同列表"]')){if(button.classList.contains('subpage-back'))continue;button.classList.add('subpage-back');button.innerHTML=icon;}}
const beforeRender=render;render=function(){beforeRender();enhance()};new MutationObserver(enhance).observe(document.getElementById('app'),{childList:true,subtree:true});window.ZxhBackLink={enhance};enhance();
})();
