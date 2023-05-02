import{b as r,j as t,C as P,c as i,L as O,e as j,n as B}from"./index-322a5cee.js";/* empty css                     */import{T as F}from"./TextField-4c77cdd0.js";import{T as G,b as S,c as a,a as H}from"./TableRow-88af8b65.js";import{T as $}from"./TableHead-ead42511.js";import{T as m}from"./TableSortLabel-d03129b8.js";import"./OutlinedInput-e7bd6e4f.js";import"./InputBase-22ef612d.js";import"./Select-2bce63e2.js";import"./Input-acd489ec.js";const g=10,V=Q=>{const[p,A]=r.useState([]),[b,C]=r.useState([]),[l,L]=r.useState("asc"),[T,w]=r.useState(""),[s,v]=r.useState(0),[y,N]=r.useState(localStorage.getItem("language")||"no"),n=y==="en"?j.incident:B.incident,x=e=>{N(e),localStorage.setItem("language",e)};r.useEffect(()=>{async function e(){try{const h=await(await fetch("https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/Incident")).json();console.log(h);const o=h.map(d=>({id:d.id,flight:{flightNumber:d.flightNumber},createdAt:new Date(d.createdAt).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"."),timeOfIncident:new Date(d.timeOfIncident).toLocaleDateString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric"}).replace(/\//g,"."),description:d.description,isActive:d.isActive}));A(o),console.log(o[0].isActive,o[1].isActive,o[2].isActive)}catch(c){console.error("Error while fetching incident data:",c)}}e()},[]),r.useEffect(()=>{p.length>0&&C(p)},[p]);const u=e=>{const c=[...b].sort((h,o)=>l==="asc"?h[e]>o[e]?1:-1:h[e]<o[e]?1:-1);C(c),L(l==="asc"?"desc":"asc")},D=e=>{const{value:c}=e.target;w(c),v(0)},f=b.slice(s*g,s*g+g);f.filter(e=>e.flight.flightNumber&&e.flight.flightNumber.toLowerCase().includes(T.toLowerCase()));const I=Math.ceil(b.length/g),k=s===0,E=s===I-1;return t(P,{navHeader:n.historicalIncidents,onLanguageChange:x,children:i("div",{className:"SearchField",children:[t(F,{label:n.search,variant:"outlined",onChange:D}),t("div",{className:"IncidentTable",children:i(G,{children:[t($,{children:i(S,{children:[t(a,{children:t(m,{active:!0,direction:l,onClick:()=>u("createdAt"),children:i("h3",{children:[" ",n.createdAt," "]})})}),t(a,{children:t(m,{active:!0,direction:l,onClick:()=>u("flightNumber"),children:i("h3",{children:[" ",n.flight," "]})})}),t(a,{children:t(m,{active:!0,direction:l,onClick:()=>u("timeOfIncident"),children:i("h3",{children:[" ",n.timeOfIncident," "]})})}),t(a,{style:{width:"450px"},children:t(m,{active:!0,direction:l,onClick:()=>u("description"),children:i("h3",{children:[" ",n.description," "]})})})]})}),i(H,{children:[f.filter(e=>!e.isActive).map(e=>{var c;return i(S,{component:O,to:`/Incident/${e.id}`,children:[t(a,{children:e.createdAt}),t(a,{children:((c=e.flight)==null?void 0:c.flightNumber)||"Null"}),t(a,{children:e.timeOfIncident}),t(a,{component:"div",children:e.description})]},e.id)}),f.filter(e=>e).length===0&&t(S,{children:i(a,{colSpan:4,children:[" ",n.notFound]})})]}),f.length>g&&i("div",{className:"Buttons",children:[t("button",{disabled:k,onClick:()=>v(s-1),children:n.previous}),i("span",{children:[n.page,` ${s+1} av ${I}`]}),t("button",{disabled:E,onClick:()=>v(s+1),children:n.next})]})]})})]})})};export{V as default};
