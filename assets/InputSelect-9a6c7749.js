import{j as r,a as O,F as T}from"./jsx-runtime-670450c2.js";import{r as v}from"./index-f1f749bf.js";import{p as t}from"./index-4d501b15.js";import{u as N,g as A}from"./configStore-d2c2b356.js";import{L as E}from"./Label-ecfa30b4.js";/* empty css              */const b=({label:c,options:i=[""],initial:o,initialDisabled:p,initialSnap:g,required:h,tooltip:q,configField:l,value:j="",onChange:d,className:f,...C})=>{const{config:S,updateConfigField:x}=N(),[s,m]=v.useState(l?A(l,S)||"":j),u=v.useRef(null),y=e=>o&&(e===o||e==="");let a=null;if(i instanceof Array)a=i.map((e,n)=>r("option",{value:e,children:e},n));else if(i===Object(i)){let e=[];for(let[n,V]of Object.entries(i))e.push(r("option",{value:n,children:V},n));a=e}a&&(o||p)&&a.unshift(r("option",{value:"",hidden:p&&s!==""||null,disabled:p||null,children:o},"default"));const I=e=>{let n=e.target.value;m(n),y(n)||(l&&x(l,n),d&&d(e)),g&&y("")&&m("")};return O(T,{children:[c&&r(E,{tooltip:q,onClick:()=>{u.current.focus(),u.current.click()},children:c}),a?r("select",{className:`cove-input${h&&(s===void 0||s==="")?" cove-input--error":""}${f?" "+f:""}`,value:s,onChange:e=>I(e),...C,ref:u,children:a.map(e=>e)}):r("p",{className:"mb-2",children:r("i",{children:"No options are available..."})})]})};b.propTypes={label:t.string,value:t.any,options:t.oneOfType([t.array,t.object]),initial:t.string,initialDisabled:t.bool,initialSnap:t.bool,required:t.bool,tooltip:t.oneOfType([t.object,t.string]),onChange:t.func};b.__docgenInfo={description:"",methods:[],displayName:"InputSelect",props:{options:{defaultValue:{value:"[ '' ]",computed:!1},type:{name:"union",value:[{name:"array"},{name:"object"}]},required:!1,description:""},value:{defaultValue:{value:"''",computed:!1},type:{name:"any"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},initial:{type:{name:"string"},required:!1,description:""},initialDisabled:{type:{name:"bool"},required:!1,description:""},initialSnap:{type:{name:"bool"},required:!1,description:"Snap returns to the initial value, regardless of previous selection *"},required:{type:{name:"bool"},required:!1,description:""},tooltip:{type:{name:"union",value:[{name:"object"},{name:"string"}]},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""}}};export{b as I};
//# sourceMappingURL=InputSelect-9a6c7749.js.map
