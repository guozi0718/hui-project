/* 用户批注：所有日期空值统一占位，合同金额超过上限即时回填。 */
(()=>{
const valid=s=>!s||/^\d{4}-\d{2}-\d{2}$/.test(s)&&!isNaN(Date.parse(s))&&new Date(s+'T00:00:00Z').toISOString().slice(0,10)===s;
function enhance(){
for(const x of document.querySelectorAll('.date-range-text'))x.placeholder='请选择日期';
for(const native of document.querySelectorAll('input[type=date]:not([data-date-enhanced])')){
native.dataset.dateEnhanced='1';const wrap=document.createElement('span');wrap.className='date-display';native.before(wrap);wrap.append(native);native.classList.add('date-native');native.tabIndex=-1;
const text=document.createElement('input');text.type='text';text.className='ipt date-display-text';text.placeholder='请选择日期';text.autocomplete='off';text.setAttribute('aria-label',native.getAttribute('aria-label')||native.dataset.field||'日期');
const button=document.createElement('button');button.type='button';button.className='date-display-open';button.setAttribute('aria-label','选择日期');button.innerHTML='<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 11h18"/></svg>';
wrap.append(text,button);
const sync=()=>{text.value=native.value;text.disabled=native.disabled;text.readOnly=native.readOnly;text.required=native.required;button.disabled=native.disabled||native.readOnly;text.setCustomValidity('');};
native.addEventListener('input',sync);native.addEventListener('change',sync);sync();
text.addEventListener('input',()=>{const s=text.value.trim();let message=valid(s)?'':'请输入有效日期，格式为YYYY-MM-DD';if(!message&&s&&native.min&&s<native.min)message='日期不能早于'+native.min;if(!message&&s&&native.max&&s>native.max)message='日期不能晚于'+native.max;text.setCustomValidity(message);native.value=message?'':s;native.dispatchEvent(new Event('input',{bubbles:true}));/* input同步不可吞掉用户未完成文本 */text.value=s;text.setCustomValidity(message);});
text.addEventListener('change',()=>{if(text.checkValidity())native.dispatchEvent(new Event('change',{bubbles:true}));});
button.onclick=()=>{try{native.showPicker();}catch{native.focus();native.click();}};
new MutationObserver(sync).observe(native,{attributes:true,attributeFilter:['disabled','readonly','required','min','max']});
}
}
window.addEventListener('input',e=>{const x=e.target;if(x.matches('input[type=number][data-field=amount]')&&Number(x.value)>99999999.99)x.value='99999999.99';},true);
window.addEventListener('click',e=>{const b=e.target.closest('[data-do],[data-act]');if(!b)return;const name=b.dataset.do||b.dataset.act||'';if(!/save|query|submit|confirm|:ok/i.test(name)||/cancel|back/i.test(name))return;for(const x of (b.closest('.mask')||b.closest('.content')||document).querySelectorAll('.date-display-text'))if(!x.checkValidity()){e.preventDefault();e.stopImmediatePropagation();x.reportValidity();return;}},true);
new MutationObserver(enhance).observe(document.body,{childList:true,subtree:true});enhance();window.ZxhDatePlaceholder={enhance,valid};
})();
