import{M as L,C as z,S as A,A as P}from"./index-c4e09ba2.js";import{a as b,j as o,F as D}from"./jsx-runtime-670450c2.js";import{r as p}from"./index-f1f749bf.js";import{p as a}from"./index-4d501b15.js";import{u as U}from"./useVisConfig-ebd632ff.js";import{g as X}from"./visConfigSlice-d502a2ab.js";import{I as H}from"./Icon-e6436e69.js";import{L as K}from"./Label-90f045e3.js";/* empty css              */import{u as E}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./store-e4d3035e.js";import"./index-e3f86ac2.js";import"./Tooltip-e87d4e0c.js";const u=p.memo(({label:t,labelPosition:n="right",tooltip:r,size:m="small",activeColor:f=null,activeCheckColor:O=null,stretch:j,required:B,configField:i,value:V,className:x,onClick:C,...W})=>{const{config:q,updateVisConfigField:k}=U(),[s,h]=p.useState(!1),_=p.useRef(null),l=i&&X(i,q),y=Boolean(l&&typeof l!==void 0);p.useEffect(()=>{y?l!==s&&h(l):h(V)},[y]),p.useEffect(()=>{i&&s!==l&&k(i,s)},[i,s,k]);const g=()=>_.current.click(),N=e=>{h(c=>!c),C&&C(e)},S=()=>{const e=[],c="cove-input__checkbox-group";return e.push(c),j&&e.push("cove-input__checkbox-group--stretch"),x&&e.push(x),e.join(" ")},w=()=>{const e=[],c="cove-input__checkbox",M={small:"",medium:"--medium",large:"--large",xlarge:"--xlarge"};return e.push(c+M[m]),s&&e.push("cove-input__checkbox--active"),e.join(" ")},I=()=>o("div",{className:"cove-input__checkbox-group__label",...r&&r!==""&&{"data-has-tooltip":!0},children:o(K,{tooltip:r,onClick:g,children:t})});return b("div",{className:S(),flow:n,children:[t&&n==="left"&&o(I,{}),b("div",{className:w(),tabIndex:0,onClick:g,onKeyUp:e=>{(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&g()},children:[o("div",{className:`cove-input__checkbox-box${f?" cove-input__checkbox-box--custom-color":""}`,style:s&&f?{backgroundColor:f}:null,children:o(H,{display:"check",className:"cove-input__checkbox-check",color:O||"#025eaa"})}),o("input",{className:"cove-input--hidden",type:"checkbox",defaultChecked:s,onChange:e=>N(e),ref:_,tabIndex:-1,readOnly:!0})]}),t&&n==="right"&&o(I,{})]})});u.propTypes={label:a.string,labelPosition:a.oneOf(["left","right"]),tooltip:a.oneOfType([a.string,a.object]),size:a.oneOf(["small","medium","large"]),activeColor:a.string,activeCheckColor:a.string,value:a.bool};u.__docgenInfo={description:"",methods:[],displayName:"InputCheckbox",props:{labelPosition:{defaultValue:{value:"'right'",computed:!1},type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1,description:""},size:{defaultValue:{value:"'small'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:""},activeColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},activeCheckColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},tooltip:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:""},value:{type:{name:"bool"},required:!1,description:""}}};const T=({...t})=>o(u,{...t});function R(t={}){const{wrapper:n}=Object.assign({},E(),t.components);return n?o(n,{...t,children:o(r,{})}):r();function r(){const m=Object.assign({h1:"h1",p:"p"},E(),t.components);return b(D,{children:[o(L,{title:"Components/Input/Checkbox",component:u,parameters:{options:{isToolshown:!0}}}),`
`,`
`,o(m.h1,{children:"Checkbox Component"}),`
`,o(m.p,{children:"Component that renders a checkbox input, with an optional label and tooltip. It receives a set of props that can be used to customize its behavior and appearance."}),`
`,o(z,{sourceState:"shown",withSource:"open",children:o(A,{name:"Example",args:{label:"Use An Option",labelPosition:"right",size:"medium",activeColor:"#025eaa",activeCheckColor:"#fff",tooltip:"This is a tooltip"},children:T.bind({})})}),`
`,o(P,{story:"Example"})]})}}const v=T.bind({});v.storyName="Example";v.args={label:"Use An Option",labelPosition:"right",size:"medium",activeColor:"#025eaa",activeCheckColor:"#fff",tooltip:"This is a tooltip"};v.parameters={storySource:{source:`({ ...args
}) => <InputCheckbox {...args} />`}};const d={title:"Components/Input/Checkbox",parameters:{options:{isToolshown:!0}},component:u,tags:["stories-mdx"],includeStories:["example"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:R};const fe=["Template","example"];export{T as Template,fe as __namedExportsOrder,d as default,v as example};
//# sourceMappingURL=InputCheckbox.stories-8bd981de.js.map
