import{b as l,j as e,C as g,c as r,B as y,e as f,n as C}from"./index-d9ce6893.js";const b=N=>{const[d,h]=l.useState(localStorage.getItem("language")||"no"),n=d==="en"?f.user:C.user,[t,c]=l.useState({person:{firstName:"",lastName:"",email:"",phone:""},isAdmin:!1,role:0,password:"Bruker123"}),u=a=>{h(a),localStorage.setItem("language",a)},p=async a=>{a.preventDefault();try{(await fetch("https://wideroeemergencynextofkinapi.azure-api.net/WideroeEmergency/api/User",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?alert("Brukeren ble opprettet"):alert("Noe galt skjedde. Vennligst prøv igjen")}catch(s){console.error(s)}},o=a=>{const{name:s,value:m}=a.target;c(i=>({...i,person:{...i.person,[s]:m}}))};return e("div",{children:n?e(g,{navHeader:n.newUser,onLanguageChange:u,children:e("form",{onSubmit:p,children:r("div",{className:"user-info-container",children:[e("table",{children:r("tbody",{children:[r("tr",{children:[e("th",{children:n.firstName}),e("td",{children:e("input",{type:"text",name:"firstName",value:t.person.firstName,onChange:o,required:!0})})]}),r("tr",{children:[e("th",{children:n.lastName}),e("td",{children:e("input",{type:"text",name:"lastName",value:t.person.lastName,onChange:o,required:!0})})]}),r("tr",{children:[e("th",{children:n.email}),e("td",{children:e("input",{type:"email",name:"email",value:t.person.email,onChange:o,required:!0})})]}),r("tr",{children:[e("th",{children:n.phone}),e("td",{children:e("input",{type:"phone",name:"phone",value:t.person.phone,onChange:o,required:!0})})]}),r("tr",{children:[e("th",{children:n.role}),e("td",{children:e("input",{type:"role",name:"role",value:t.person.role,onChange:o,required:!0})})]})]})}),e("div",{className:"change-password-link-container",children:r(y,{type:"submit",style:{width:"300px",border:"1px solid white",color:"white",backgroundColor:"#00602C"},sx:{":hover":{backgroundColor:"#369E3B"},margin:1},children:[n.confirmNewUser," "]})})]})})}):e("p",{children:"Loading..."})})};export{b as default};
