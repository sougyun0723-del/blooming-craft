(function(root){
'use strict';
const KEY='blooming-craft-v1';
const activities=[{id:'lines',title:'자유롭게 선 긋기',icon:'〰️',description:'길게, 짧게, 동글동글 그려요.'},{id:'fruit',title:'동글동글 과일 그리기',icon:'🍊',description:'좋아하는 과일을 그려요.'},{id:'flower',title:'알록달록 꽃 그리기',icon:'🌼',description:'나만의 꽃을 피워 보아요.'}];
const empty=()=>({version:1,selected:'lines',completed:[],drawings:{},goods:null,records:[]});
function validate(s){if(!s||s.version!==1)throw Error('저장 형식 오류');const n=empty();n.selected=activities.some(a=>a.id===s.selected)?s.selected:'lines';n.completed=[...new Set((Array.isArray(s.completed)?s.completed:[]).filter(x=>activities.some(a=>a.id===x)))];n.goods=['화분','머그컵','에코백'].includes(s.goods)?s.goods:null;for(const a of activities){const d=s.drawings?.[a.id];if(Array.isArray(d))n.drawings[a.id]=d.filter(st=>/^#[0-9a-f]{6}$/i.test(st.color)&&[4,10,20].includes(st.width)&&Array.isArray(st.points)).map(st=>({...st,points:st.points.filter(p=>Array.isArray(p)&&p.length===2&&p.every(v=>Number.isFinite(v)&&v>=0&&v<=1))}));}n.records=Array.isArray(s.records)?s.records.filter(r=>typeof r.action==='string'&&typeof r.detail==='string'&&typeof r.time==='string'&&!isNaN(Date.parse(r.time))):[];return n;}
function load(storage){const raw=storage.getItem(KEY);return raw?validate(JSON.parse(raw)):empty();}
function save(storage,s){storage.setItem(KEY,JSON.stringify(s));}
function record(s,action,detail){s.records.push({time:new Date().toISOString(),action,detail});}
function toggle(s,id){if(!activities.some(a=>a.id===id))return;s.completed=s.completed.includes(id)?s.completed.filter(x=>x!==id):[...s.completed,id];record(s,s.completed.includes(id)?'활동 완료':'완료 취소',activities.find(a=>a.id===id).title);}
function csv(s){const q=x=>'"'+String(x).replace(/^[=+@-]/,"'" ).replace(/"/g,'""')+'"';return '\ufeff'+[['시각(ISO 8601)','활동','내용'],...s.records.map(r=>[r.time,r.action,r.detail])].map(row=>row.map(q).join(',')).join('\r\n');}
const api={KEY,activities,empty,validate,load,save,record,toggle,csv};if(typeof module!=='undefined')module.exports=api;root.Craft=api;
})(globalThis);
