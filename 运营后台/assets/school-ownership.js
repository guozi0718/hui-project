/* 用户明确替换学校归属字段；不从监管单位名称推测层级。 */
(()=>{
const levels=['省属','市直','区县'];OPTS['归属教育局层级']=levels;window.ZxhBase.models.school.forEach((x,i)=>{x.educationLevel=levels[i%levels.length]});
const previous=window.ZxhDocValidators.entity;window.ZxhDocValidators.entity=function(kind,d,old){if(kind==='school'){if(!levels.includes(d.educationLevel))return '此项必填：请选择归属教育局层级（省属、市直、区县）';if(old&&d.educationLevel!==old.educationLevel)return '归属教育局层级不可修改';}return previous(kind,d,old);};
window.ZxhSchoolOwnership={levels};render();
})();
