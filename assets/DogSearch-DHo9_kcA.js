import{x as S,j as e,r as n,w as x,E as y,B as u,v as g,M as s,F as C,I as D}from"./index-DDAymdml.js";import{u as F}from"./useAuthRedirect-KEjVnfJk.js";import{u as d,D as A,T as L}from"./DogList-BIEsAFZb.js";import{F as p,I as m,S as j}from"./Select-DBiisY4f.js";import"./useControlled-BP07tG4d.js";import"./isMuiElement-C2wsCtKj.js";const O=S(e.jsx("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"}),"FilterList");function E(){const{currentDogDetailList:t,nextUrl:r,prevUrl:o,handleNext:l,handlePrevious:a,getDefaultDogList:c}=d();return n.useEffect(()=>{t.length===0&&c()},[]),e.jsxs(e.Fragment,{children:[e.jsx(A,{dogList:t,isMatches:!1}),e.jsxs("div",{style:{marginTop:20},children:[e.jsx(x,{variant:"contained",onClick:()=>a(),disabled:o==="",children:"Previous"}),e.jsx(x,{variant:"contained",onClick:()=>l(),disabled:r==="",style:{marginLeft:10},children:"Next"})]})]})}function I({isOpen:t,anchorEl:r,handleClose:o,setAnchorEl:l}){const{fetchIdsFilteredAndConvertToDetails:a}=d(),[c,v]=n.useState(""),[f,B]=n.useState([]);n.useEffect(()=>{(async()=>{try{const h=await C();B(h)}catch(h){console.error(h.message)}})()},[]);const b=i=>{v(i.target.value),a(i.target.value),l(null)};return e.jsx(y,{open:t,anchorEl:r,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsxs(u,{sx:{p:2,width:300,bgcolor:"background.paper",boxShadow:3,borderRadius:1},children:[e.jsx(g,{variant:"h6",gutterBottom:!0,children:"Filter Options"}),e.jsxs(p,{size:"small",fullWidth:!0,sx:{mb:2},children:[e.jsx(m,{children:"Filter by Breed"}),e.jsx(j,{value:c,onChange:b,label:"Filter by Breed",children:f.map(i=>e.jsx(s,{value:i,children:i},i))})]})]})})}function k(){const[t,r]=n.useState(null),o=!!t,l=n.useCallback(c=>{r(c.currentTarget)},[]),a=n.useCallback(()=>{r(null)},[]);return e.jsxs("div",{children:[e.jsx(L,{title:"Filter Options",arrow:!0,children:e.jsx(D,{onClick:l,color:"primary",children:e.jsx(O,{})})}),e.jsx(I,{isOpen:o,anchorEl:t,handleClose:a,setAnchorEl:r})]})}function w(){const{sortOption:t,setSortOption:r}=d(),o=l=>{r(l.target.value)};return e.jsx(e.Fragment,{children:e.jsxs(p,{size:"small",sx:{minWidth:150,marginLeft:"auto"},children:[e.jsx(m,{children:"Sort By"}),e.jsxs(j,{value:t,onChange:o,label:"Sort By",displayEmpty:!0,children:[e.jsx(s,{value:"",disabled:!0,children:"Select Sort Option"}),e.jsx(s,{value:"nameAsc",children:"Name(A-Z)"}),e.jsx(s,{value:"nameDesc",children:"Name(Z-A)"}),e.jsx(s,{value:"breedAsc",children:"Breed(A-Z)"}),e.jsx(s,{value:"breedDesc",children:"Breed(Z-A)"}),e.jsx(s,{value:"ageAsc",children:"Age(low-high)"}),e.jsx(s,{value:"ageDesc",children:"Age(high-low)"})]})]})})}function R(){F();const{setSortOption:t}=d();return n.useEffect(()=>()=>{t("breedAsc")},[]),e.jsxs("div",{style:{maxWidth:600,margin:"auto",textAlign:"center"},children:[e.jsxs(u,{sx:{borderBottom:"2px solid black",padding:"10px 0",display:"flex",justifyContent:"flex-start"},children:[e.jsx(g,{variant:"h4",gutterBottom:!0,children:"Dog Search"}),e.jsxs(u,{sx:{display:"flex",alignItems:"center",marginLeft:"auto"},children:[e.jsx(w,{}),e.jsx(k,{})]})]}),e.jsx(E,{})]})}export{R as default};
