/* 单个可搜索下拉：原生select只作数据背板，界面不再并列搜索框和select。 */
(() => {
const bound=new WeakSet();let serial=0,active=null,popup=null;
const label=(select,o)=>select.dataset.field==='customer'&&o.value!==''?(window.ZxhBase.models.customer[+o.value]?.name||o.textContent):o.textContent;
const selectedText=s=>s.value===''?'':label(s,s.selectedOptions[0]||s.options[0]);
function close(restore=true){if(active){active.input.setAttribute('aria-expanded','false');active.input.removeAttribute('aria-activedescendant');if(restore)active.input.value=selectedText(active.select);}popup?.remove();popup=null;active=null;}
function choose(value){if(!active)return;const {select,input}=active;close(false);select.value=value;input.value=selectedText(select);select.dispatchEvent(new Event('change',{bubbles:true}));}
function position(){if(!active||!popup)return;const box=active.input.parentElement.getBoundingClientRect(),below=innerHeight-box.bottom-8;popup.style.left=Math.max(4,Math.min(box.left,innerWidth-box.width-4))+'px';popup.style.width=box.width+'px';popup.style.maxHeight=Math.max(96,Math.min(260,below<150?box.top-12:below))+'px';if(below<150&&box.top>below){popup.style.bottom=(innerHeight-box.top+4)+'px';popup.style.top='auto';}else{popup.style.top=(box.bottom+4)+'px';popup.style.bottom='auto';}}
function draw(query=''){
 if(!active)return;const q=query.trim().toLowerCase(),{select,input}=active;
 const matches=[...select.options].filter(o=>!o.disabled&&!(o.value===''&&o.textContent==='请选择')&&(!q||(label(select,o)+' '+o.textContent).toLowerCase().includes(q)));
 active.matches=matches;active.index=Math.max(0,matches.findIndex(o=>o.value===select.value));
 popup.innerHTML=matches.length?matches.map((o,i)=>'<div role="option" id="combo-option-'+serial+'-'+i+'" aria-selected="'+(o.value===select.value)+'" data-combo-value="'+esc(o.value)+'" class="combo-option '+(i===active.index?'focused':'')+'">'+esc(label(select,o))+'</div>').join(''):'<div class="combo-empty">无匹配结果</div>';
 input.setAttribute('aria-expanded','true');position();
}
function open(select,input,query=''){if(select.disabled)return;if(active?.select!==select){close();active={select,input,matches:[],index:0};popup=document.createElement('div');popup.className='combo-popup';popup.id=input.getAttribute('aria-controls');popup.setAttribute('role','listbox');popup.addEventListener('pointerdown',e=>e.preventDefault());popup.addEventListener('click',e=>{const option=e.target.closest('[data-combo-value]');if(option){e.preventDefault();e.stopPropagation();choose(option.dataset.comboValue);}});document.body.append(popup);}draw(query);}
function enhance(root=document){
 for(const select of root.querySelectorAll('select[data-field]')){
  if(bound.has(select)){const wrap=select.parentElement,input=wrap.querySelector('.combo-input'),arrow=wrap.querySelector('.combo-arrow');if(input){input.disabled=select.disabled;input.placeholder=select.options[0]?.value===''?select.options[0].textContent:'请选择';if(active?.select!==select)input.value=selectedText(select);}if(arrow)arrow.disabled=select.disabled;continue;}
  if(select.dataset.noCombo||select.multiple||select.dataset.field==='pageSize'||select.options.length>1&&[...select.options].every(o=>o.value===''||/^\d+$/.test(o.textContent)))continue;
  bound.add(select);const before=select.previousElementSibling;if(before?.matches('.select-search,[data-search-select]'))before.remove();
  const wrap=document.createElement('div');wrap.className='combo-select';if(select.classList.contains('region-select')||/区域[012]$|^region[012]$/.test(select.dataset.field))wrap.classList.add('combo-region');
  const input=document.createElement('input');input.type='text';input.className='ipt combo-input';input.setAttribute('role','combobox');input.setAttribute('aria-autocomplete','list');input.setAttribute('aria-expanded','false');input.setAttribute('aria-controls','combo-list-'+(++serial));input.setAttribute('aria-label',select.closest('.fr,.fi')?.querySelector('label')?.textContent||select.dataset.field);input.placeholder=select.options[0]?.value===''?select.options[0].textContent:'请选择';input.value=selectedText(select);input.disabled=select.disabled;input.autocomplete='off';
  const arrow=document.createElement('button');arrow.type='button';arrow.className='combo-arrow';arrow.textContent='⌄';arrow.setAttribute('aria-label','展开'+input.getAttribute('aria-label'));arrow.disabled=select.disabled;
  select.before(wrap);wrap.append(input,arrow,select);select.classList.add('combo-native');select.setAttribute('aria-hidden','true');select.tabIndex=-1;
  input.addEventListener('focus',()=>{open(select,input);input.select();});input.addEventListener('click',()=>open(select,input));input.addEventListener('input',()=>{open(select,input,input.value);if(input.value===''&&select.value!=='')choose('');});
  input.addEventListener('keydown',e=>{if(e.key==='Escape'){close();return;}if(e.key==='Enter'&&active?.select===select){e.preventDefault();const o=active.matches[active.index];if(o)choose(o.value);return;}if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();if(active?.select!==select)open(select,input);else if(active.matches.length){active.index=(active.index+(e.key==='ArrowDown'?1:-1)+active.matches.length)%active.matches.length;popup.querySelectorAll('.combo-option').forEach((el,i)=>el.classList.toggle('focused',i===active.index));const el=popup.children[active.index];input.setAttribute('aria-activedescendant',el.id);el.scrollIntoView({block:'nearest'});}}if(e.key==='Tab')close();});
  input.addEventListener('blur',()=>queueMicrotask(()=>{if(active?.input===input&&document.activeElement!==input)close();}));
  arrow.addEventListener('pointerdown',e=>e.preventDefault());arrow.addEventListener('click',()=>{if(active?.select===select)close();else{input.focus();open(select,input);}});
 }
}
document.addEventListener('click',e=>{if(active&&!active.input.parentElement.contains(e.target)&&!popup?.contains(e.target))close();});window.addEventListener('scroll',e=>{if(!popup?.contains(e.target))close();},true);window.addEventListener('resize',()=>close());
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&active){e.preventDefault();e.stopImmediatePropagation();close();}},true);
const priorRender=render;render=function(){close();priorRender();enhance();};const priorModal=modal;modal=function(...args){close();priorModal(...args);enhance(layer)};
new MutationObserver(()=>enhance()).observe(document.body,{childList:true,subtree:true});
window.ZxhSearchCombo={enhance,close};enhance();
})();

