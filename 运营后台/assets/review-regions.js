/* 本轮用户确认：客户五类型；省厅合同单选地市、地市合同多选区县。 */
(() => {
const data=window.ZxhRegionData,types=['部委客户','省厅客户','地市客户','区/县客户','学校客户'];
const province=n=>data.find(p=>p.name===n),cities=p=>province(p)?.children||[],counties=(p,c)=>cities(p).find(x=>x.name===c)?.children||[];
const parts=r=>String(r||'').split(' ').filter(Boolean),depth=t=>t==='部委客户'?0:t==='省厅客户'?1:t==='地市客户'?2:3;
function valid(region,n){if(n===0)return region==='全部';const [p,c,a]=parts(region);return !!province(p)&&(n<2||cities(p).some(x=>x.name===c))&&(n<3||counties(p,c).some(x=>x.name===a));}
function scopeRegion(client,d){if(!client)return '';if(client.type==='部委客户')return '全部';if(client.type==='省厅客户')return client.region+(d.cityRange&&d.cityRange!=='全部'?' '+d.cityRange:'');if(client.type==='地市客户')return client.region+(d.counties?.length&&!d.counties.includes('全部')?' '+d.counties.join('、'):'');return client.region;}
function allows(con,region){if(!con)return true;const client=window.ZxhBase?.models.customer[+con.customer];if(!client)return false;if(client.type==='部委客户')return true;const [p,c,a]=parts(region),[cp,cc]=parts(client.region);if(p!==cp)return false;if(client.type==='省厅客户')return !con.cityRange||con.cityRange==='全部'||con.cityRange===c;if(client.type==='地市客户')return c===cc&&(!con.counties?.length||con.counties.includes('全部')||con.counties.includes(a));return region===client.region;}
window.ZxhRegions={data,types,province,cities,counties,parts,depth,valid,scopeRegion,allows};
})();
