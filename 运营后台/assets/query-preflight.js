/* 先于页面处理器检查ISO日期文本，覆盖各模块独立的查询按钮。 */
window.addEventListener('click',event=>{
 const trigger=event.target.closest('[data-do],[data-act]');if(!trigger||!/query/i.test(trigger.dataset.do||trigger.dataset.act||''))return;
 const problem=window.ZxhFilterDates?.validRanges(trigger.closest('.mask')||document);
 if(problem){event.preventDefault();event.stopImmediatePropagation();if(typeof error==='function')error(problem);}
},true);
