import{b as i,u as w,j as t,C as A,c as h,aa as O,ab as T,L as j,B as D,e as E,n as N}from"./index-322a5cee.js";/* empty css                     */import{T as p}from"./TextField-4c77cdd0.js";import{L as V,A as B,D as z}from"./AdapterDayjs-80103f99.js";import"./OutlinedInput-e7bd6e4f.js";import"./InputBase-22ef612d.js";import"./Select-2bce63e2.js";import"./Input-acd489ec.js";import"./Grid-8843a9cc.js";import"./InputAdornment-ab8b828c.js";import"./ListItem-39474520.js";const Y=P=>{const[r,m]=i.useState(""),[s,f]=i.useState(""),[H,v]=i.useState(null),[d,b]=i.useState([]),[o,x]=i.useState({}),y=w(),[C,F]=i.useState(localStorage.getItem("language")||"no"),n=C==="en"?E.incident:N.incident,S=e=>{F(e),localStorage.setItem("language",e)},[g,I]=i.useState(null),L=e=>{I(e)};i.useEffect(()=>{async function e(){const l=(await(await fetch("https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/Flight")).json()).map(u=>({id:u.id,value:u.id,label:u.flightNumber}));v(l),b(l)}e()},[]);const k=async e=>{e.preventDefault();const c=d.find(l=>l.value===r),a={};if(r||(a.flight="Legg inn Flight"),s||(a.description="Legg inn beskrivelse"),Object.keys(a).length>0){x(a);return}c&&(await fetch(`https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/Incident/${c.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({flight:r,createdAt:new Date,timeOfIncident:g,description:s})}),y("/ActiveIncidents"))};return t(A,{navHeader:n.title,onLanguageChange:S,children:t("div",{className:"App",children:h("header",{className:"App-header",children:[t("h1",{children:n.title}),t(O,{component:"form",sx:{"& .MuiTextField-root":{margin:"15px",width:"600px"}},noValidate:!0,autoComplete:"off",children:h("div",{children:[t(p,{id:"outlined-select-flight",select:!0,label:n.selectFlight,value:r,onChange:e=>m(e.target.value),error:o.flight!==void 0,helperText:o.flight,children:d&&d.map(e=>t(T,{value:e.value,children:e.label},e.value))}),t("div",{children:t(j,{to:"/AddFlight",children:n.newFlight})}),h("div",{children:[t(V,{dateAdapter:B,children:t(z,{label:n.timeOfIncident,value:g,onChange:L})}),t("div",{})]}),t("div",{id:"description",children:t(p,{id:"outlined-multiline-static",label:n.descriptionOfIncident,multiline:!0,rows:10,value:s,onChange:e=>f(e.target.value),error:o.description!==void 0,helperText:o.description})}),t("div",{children:t(D,{id:"addincidentHRK",onClick:k,style:{backgroundColor:"#369E3B",color:"black"},type:"button",children:n.register})})]})})]})})})};export{Y as default};
