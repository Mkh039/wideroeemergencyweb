import{b as o,j as e,C as m,c as n,L as i,B as s,e as x,n as w}from"./index-d9ce6893.js";const f=C=>{const[l,d]=o.useState(localStorage.getItem("language")||"no"),r=l==="en"?x.user:w.user,c=a=>{d(a),localStorage.setItem("language",a)},[t,h]=o.useState(null),g=async()=>{const a=await fetch("https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/User/16",{method:"GET",headers:{"Content-Type":"application/json"}});if(a.ok){const p=await a.json();h(p)}else console.error("Failed to fetch user data")};o.useEffect(()=>{g()},[]);const u=a=>a===0?"HRK-bruker":"Førstekontakt";return e("div",{children:e(m,{navHeader:r.title,onLanguageChange:c,children:t?n("div",{className:"admin-info-container",children:[e("table",{children:n("tbody",{children:[n("tr",{children:[e("th",{children:r.name}),n("td",{children:[t.person.firstName," ",t.person.lastName]})]}),n("tr",{children:[e("th",{children:r.email}),e("td",{children:t.person.email||"-"})]}),n("tr",{children:[e("th",{children:r.phone}),e("td",{children:t.person.phone||"-"})]}),n("tr",{children:[e("th",{children:r.admin}),e("td",{children:t.isAdmin?"Ja":"Nei"})]}),n("tr",{children:[e("th",{children:r.role}),e("td",{children:u(t.role)})]})]})}),n("div",{style:{textAlign:"center"},children:[e(i,{to:"/newUser",children:n(s,{style:{width:"250px",height:"50px",border:"1px solid white",color:"white",backgroundColor:"#00602C"},sx:{":hover":{backgroundColor:"#369E3B"},margin:1},children:[r.newUser," "]})}),e(i,{to:"/userAdministration",children:n(s,{style:{width:"250px",height:"50px",border:"1px solid white",color:"white",backgroundColor:"#00602C"},sx:{":hover":{backgroundColor:"#369E3B"},margin:1},children:[r.users," "]})})]})]}):e("p",{children:"Loading..."})})})};export{f as default};
