import{b as d,j as e,c as a,B as A,e as C,n as I,A as E,C as N,L as D}from"./index-322a5cee.js";import{T as w}from"./TextField-4c77cdd0.js";/* empty css                     */import{T as P,b as y,c as r,a as _}from"./TableRow-88af8b65.js";import{T as k}from"./TableHead-ead42511.js";import"./OutlinedInput-e7bd6e4f.js";import"./InputBase-22ef612d.js";import"./Select-2bce63e2.js";import"./Input-acd489ec.js";const j=b=>{const{formData:h,onChange:p,onSubmit:c}=b,{FlightId:g,Description:x}=h,[i,m]=d.useState(localStorage.getItem("language")||"no"),s=i==="en"?C.incident:I.incident;return e("div",{onLanguageChange:u=>{m(u),localStorage.setItem("language",u)},children:a("div",{className:"login-form",children:[e("div",{children:e("h1",{children:s.uploadPressRelease})}),a("form",{className:"form__login",onSubmit:c,children:[a("div",{className:"form__login__column",children:[e("label",{htmlFor:"FlightId",children:s.flightId}),e("br",{}),e(w,{style:{width:"300px"},className:"input-email",id:"FlightId",name:"FlightId",type:"text",placeholder:s.flightId,onChange:p,value:g,required:!0})]}),a("div",{className:"form__login__column",children:[e("label",{htmlFor:"Description",children:s.description}),e("br",{}),e(w,{style:{width:"300px"},className:"input-password",id:"Description",name:"Description",placeholder:s.description,onChange:p,value:x,type:"text",required:!0})]}),e(A,{type:"submit",variant:"contained",style:{width:"300px",border:"1px solid white",color:"white",backgroundColor:"#00602C"},sx:{":hover":{backgroundColor:"#369E3B"},margin:1},children:s.submit})]})]})})},B={FlightId:"",Description:""},K=b=>{const[h,p]=d.useState([]),[c,g]=d.useState({FlightId:"",Description:""}),{setIsAuthenticated:x,user:i}=d.useContext(E),[m,s]=d.useState(localStorage.getItem("language")||"no"),o=m==="en"?C.incident:I.incident,u=t=>{s(t),localStorage.setItem("language",t)},f=()=>{fetch("https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/PressRelease/").then(t=>t.json()).then(t=>{p(t)})};d.useEffect(()=>{f()},[]);const T=t=>{const{name:n,value:l}=t.target;g(R=>({...R,[n]:l}))},v=async t=>{t.preventDefault(),console.log(c),await L(c.FlightId,c.Description),g(B)},F=(t,n)=>{n.preventDefault(),confirm("Are you sure?")&&S(t)},S=async t=>{const n=await fetch(`https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/PressRelease/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});if(n.status===200)f();else{if(n.status===404)return!1;throw new Error("Unexpected error occurred")}},L=async(t,n)=>{const l=await fetch(`https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/PressRelease/${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({description:n})});if(l.status===200)f();else{if(l.status===404)return!1;throw new Error("Unexpected error occurred")}};return a(N,{navHeader:o.informationToAffected,onLanguageChange:u,children:[e("div",{className:"App",children:a("header",{className:"App-header",children:[e("h1",{children:o.informationToAffected}),i&&i.role===0?e(j,{formData:c,onChange:T,onSubmit:v}):"",a(P,{children:[e(k,{children:a(y,{children:[e(r,{children:e("h3",{children:"ID"})}),e(r,{children:e("h3",{children:o.flight})}),e(r,{children:e("h3",{children:o.description})}),e(r,{children:e("h3",{children:o.createdAt})}),i&&i.role===0?e(r,{}):""]})}),e(_,{children:h.length>0?h.map(t=>{var n;return a(y,{component:D,to:`/pressrelease/${t.id}`,children:[e(r,{children:t.id}),e(r,{children:(n=t.flight)==null?void 0:n.flightNumber}),e(r,{component:"div",children:t.description}),e(r,{children:new Date(t.createdAt).toLocaleDateString("en-GB")}),i.role===0?e(r,{children:a("span",{style:{cursor:"pointer",color:"red"},onClick:l=>F(t.id,l),children:[o.delete," "]})}):""]},t.id)}):e(y,{children:a(r,{colSpan:4,children:[o.notFound,"."]})})})]})]})}),e(D,{to:"/test",children:o.back})]})};export{K as default};
