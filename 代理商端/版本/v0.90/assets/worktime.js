/* 共用每周工作时间：兼容旧逐日数组，输出日期组合及紧凑文本。 */
((scope)=>{'use strict';
const names=['','一','二','三','四','五','六','日'];
function normalize(slots=[]){const groups=new Map();for(const s of slots){const key=s.start+'|'+s.end;let g=groups.get(key);if(!g){g={days:[],start:s.start,end:s.end};groups.set(key,g)}g.days.push(...(Array.isArray(s.days)?s.days:[s.day]))}return[...groups.values()].map(g=>({...g,days:[...new Set(g.days)].sort((a,b)=>a-b)})).sort((a,b)=>a.days[0]-b.days[0]||String(a.start).localeCompare(String(b.start)))}
function validate(slots){if(!Array.isArray(slots)||!slots.length)throw Error('请至少设置一组工作时间');for(const s of slots){const ds=Array.isArray(s.days)?s.days:[s.day];if(!ds.length||ds.some(d=>!Number.isInteger(d)||d<1||d>7))throw Error('每组工作时间请至少选择一个有效星期');if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(s.start)||!/^([01]\d|2[0-3]):[0-5]\d$/.test(s.end)||s.start>=s.end)throw Error('结束时间须晚于开始时间；跨日请拆成两组设置')}
for(let i=0;i<slots.length;i++)for(let j=i+1;j<slots.length;j++){const a=slots[i],b=slots[j],ad=a.days||[a.day],bd=b.days||[b.day];if(ad.some(d=>bd.includes(d))&&a.start<b.end&&b.start<a.end)throw Error('相同星期的工作时段不能重叠')}return normalize(slots)}
function weekdays(ds){const sorted=[...new Set(ds)].sort((a,b)=>a-b);if(sorted.length>=3&&sorted.at(-1)-sorted[0]===sorted.length-1)return'每周'+names[sorted[0]]+'至周'+names[sorted.at(-1)];return'每周'+sorted.map(d=>names[d]).join('、')}
function lines(slots){const grouped=new Map();for(const s of normalize(slots)){const key=s.days.join(',');if(!grouped.has(key))grouped.set(key,{days:s.days,times:[]});grouped.get(key).times.push(s.start+'–'+s.end)}return[...grouped.values()].map(g=>({week:weekdays(g.days),time:g.times.join('、'),text:weekdays(g.days)+' '+g.times.join('、')}))}
const api={normalize,validate,weekdays,lines,text:slots=>lines(slots).map(x=>x.text).join('；')};scope.WorkTime=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
