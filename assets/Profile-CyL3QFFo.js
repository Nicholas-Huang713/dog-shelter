import{g as f,K as h,r as d,o as x,j as s,n as g,c as v,f as j,P as w,q as E,B as C,v as M,w as m}from"./index-DDAymdml.js";import{u as S}from"./useAuthRedirect-KEjVnfJk.js";import{T as p}from"./TextField-DMBQtJWT.js";import"./Select-DBiisY4f.js";import"./isMuiElement-C2wsCtKj.js";import"./useControlled-BP07tG4d.js";function U(t){return f("MuiCard",t)}h("MuiCard",["root"]);const I=t=>{const{classes:e}=t;return j({root:["root"]},U,e)},N=g(w,{name:"MuiCard",slot:"Root",overridesResolver:(t,e)=>e.root})({overflow:"hidden"}),P=d.forwardRef(function(e,o){const a=x({props:e,name:"MuiCard"}),{className:n,raised:r=!1,...i}=a,l={...a,raised:r},c=I(l);return s.jsx(N,{className:v(c.root,n),elevation:r?8:void 0,ref:o,ownerState:l,...i})});function b(t){return f("MuiCardContent",t)}h("MuiCardContent",["root"]);const B=t=>{const{classes:e}=t;return j({root:["root"]},b,e)},k=g("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(t,e)=>e.root})({padding:16,"&:last-child":{paddingBottom:24}}),T=d.forwardRef(function(e,o){const a=x({props:e,name:"MuiCardContent"}),{className:n,component:r="div",...i}=a,l={...a,component:r},c=B(l);return s.jsx(k,{as:r,className:v(c.root,n),ownerState:l,ref:o,...i})});function $(){S();const{user:t,setUser:e}=E(),[o,a]=d.useState(!1),[n,r]=d.useState((t==null?void 0:t.name)??""),[i,l]=d.useState((t==null?void 0:t.email)??""),c=()=>{e({name:n,email:i}),a(!0)},y=()=>{e({name:n,email:i}),a(!1)},R=()=>{a(!1)};return s.jsx(C,{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh",children:s.jsx(P,{sx:{width:400,p:2},children:s.jsxs(T,{children:[s.jsx(M,{variant:"h5",gutterBottom:!0,children:"Profile"}),s.jsx(p,{label:"Name",fullWidth:!0,margin:"normal",value:n,onChange:u=>r(u.target.value),disabled:!o}),s.jsx(p,{label:"Email",fullWidth:!0,margin:"normal",value:i,onChange:u=>l(u.target.value),disabled:!o}),s.jsx(C,{mt:2,display:"flex",justifyContent:"space-between",children:o?s.jsxs(s.Fragment,{children:[s.jsx(m,{variant:"contained",color:"primary",onClick:y,children:"Save"}),s.jsx(m,{variant:"outlined",color:"secondary",onClick:R,children:"Cancel"})]}):s.jsx(m,{variant:"contained",onClick:c,children:"Edit Profile"})})]})})})}export{$ as default};
