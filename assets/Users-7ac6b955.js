import{b as i,j as e,C as j,c as r,K as F,e as B,n as H}from"./index-322a5cee.js";/* empty css                     */import{d as $}from"./DeleteForever-8afd0ec8.js";import{T as z}from"./TextField-4c77cdd0.js";import{T as K,b as C,c as a,a as Q}from"./TableRow-88af8b65.js";import{T as R}from"./TableHead-ead42511.js";import{T as d}from"./TableSortLabel-d03129b8.js";import"./OutlinedInput-e7bd6e4f.js";import"./InputBase-22ef612d.js";import"./Select-2bce63e2.js";import"./Input-acd489ec.js";const h=10,ee=W=>{const[u,T]=i.useState([]),[m,N]=i.useState([]),[c,k]=i.useState("asc"),[E,w]=i.useState(""),[o,f]=i.useState(0),[y,x]=i.useState(localStorage.getItem("language")||"no"),n=y==="en"?B.user:H.user,L=t=>{x(t),localStorage.setItem("language",t)};i.useEffect(()=>{async function t(){try{const p=(await(await fetch("https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/User")).json()).map(l=>({id:l.id,firstName:l.person.firstName,lastName:l.person.lastName,phone:l.person.phone,email:l.person.email,role:l.role}));T(p)}catch(s){console.error("Error while fetching user data:",s)}}t()},[]),i.useEffect(()=>{u.length>0&&N(u)},[u]);const g=t=>{const s=[...m].sort((S,p)=>c==="asc"?S[t]>p[t]?1:-1:S[t]<p[t]?1:-1);N(s),k(c==="asc"?"desc":"asc")},D=t=>{const{value:s}=t.target;w(s),f(0)},b=m.filter(t=>t.firstName.toLowerCase().includes(E.toLowerCase())),v=Math.ceil(m.length/h),P=o===0,U=o===v-1;m.slice(o*h,o*h+h);const I=async t=>{try{await fetch(`https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/User/${t}`,{method:"DELETE"}),setSouls(u.filter(s=>s.id!==t))}catch(s){console.error("Error while deleting user:",s)}};return e(j,{navHeader:n.title,onLanguageChange:L,children:r("div",{className:"SearchField",children:[e(z,{label:n.search,variant:"outlined",onChange:D}),e("div",{className:"IncidentTable",children:r(K,{children:[e(R,{children:r(C,{children:[e(a,{children:e(d,{active:!0,direction:c,onClick:()=>g("firstName"),children:r("h3",{children:[" ",n.firstName," "]})})}),e(a,{children:e(d,{active:!0,direction:c,onClick:()=>g("lastName"),children:r("h3",{children:[" ",n.lastName," "]})})}),e(a,{children:e(d,{active:!0,direction:c,onClick:()=>g("flightNumber"),children:r("h3",{children:[" ",n.email," "]})})}),e(a,{children:e(d,{active:!0,direction:c,children:r("h3",{children:[" ",n.phone," "]})})}),e(a,{children:e(d,{active:!0,direction:c,onClick:()=>g("flightNumber"),children:r("h3",{children:[" ",n.role," "]})})}),e(a,{})]})}),e(Q,{children:b.length>0?b.map(t=>r(C,{children:[e(a,{children:t.firstName}),e(a,{children:t.lastName}),e(a,{children:t.email}),e(a,{children:t.phone}),e(a,{children:t.role===0?"Førstekontakt":t.role===1?"HRK-bruker":""}),e(a,{children:e(F,{"aria-label":"delete",color:"secondary",onClick:()=>I(t.id),children:e($,{})})})]},t.id)):e(C,{children:r(a,{colSpan:4,children:[n.noUsers,"."]})})}),b.length>h&&r("div",{className:"Buttons",children:[e("button",{disabled:P,onClick:()=>f(o-1),children:n.previous}),r("span",{children:[n.page,` ${o+1} av ${v}`]}),e("button",{disabled:U,onClick:()=>f(o+1),children:n.next})]})]})})]})})};export{ee as default};
