import{M as D,C as c,S as P,A as X}from"./index-c4e09ba2.js";import{a as i,F as S,j as e}from"./jsx-runtime-670450c2.js";import{r as d}from"./index-f1f749bf.js";import{p as r}from"./index-4d501b15.js";import{u as B}from"./useVisConfig-ebd632ff.js";import{g as H}from"./visConfigSlice-d502a2ab.js";import{L as K}from"./Label-90f045e3.js";/* empty css              */import{u as k}from"./index-4fb8b842.js";import"./iframe-4ea23a2e.js";import"../sb-preview/runtime.mjs";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-c46f0053.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d37d4223.js";import"./index-356e4a49.js";import"./store-e4d3035e.js";import"./index-e3f86ac2.js";import"./Icon-e6436e69.js";import"./Tooltip-e87d4e0c.js";const t=d.memo(({label:a,labelPosition:n="right",tooltip:m,toggleType:o="flat",size:V="small",activeColor:b="#005eaa",stretch:O,configField:s,value:j,className:C,onClick:x,...U})=>{const{config:w,updateVisConfigField:_}=B(),[u,f]=d.useState(!1),z=d.useRef(null),p=s&&H(s,w),I=Boolean(p&&typeof p!==void 0);d.useEffect(()=>{I?p!==u&&f(p):f(j)},[I]),d.useEffect(()=>{s&&u!==p&&_(s,u)},[s,u,_]);const h=()=>z.current.click(),N=l=>{f(g=>!g),x&&x(l)},q=()=>{const l=[],g="cove-input__toggle-group";return l.push(g),O&&l.push("cove-input__toggle-group--stretch"),C&&l.push(C),l.join(" ")},L=()=>{const l=[],g="cove-input__toggle",M={small:"",medium:"--medium",large:"--large",xlarge:"--xlarge"};l.push(g+M[V]);const A={flat:"cove-input__toggle--flat",block:"cove-input__toggle--block",pill:"cove-input__toggle--pill","3d":"cove-input__toggle--3d"};return l.push(A[o]||""),u&&l.push("cove-input__toggle--active"),l.join(" ")},T=()=>e("div",{className:"cove-input__toggle-group__label",children:e(K,{tooltip:m,onClick:h,children:a})});return i(S,{children:[a&&n==="top"&&e(T,{}),i("div",{className:q(),flow:n,children:[a&&n==="left"&&e(T,{}),i("div",{className:L(),tabIndex:0,onKeyUp:l=>{(l.code==="Enter"||l.code==="NumpadEnter"||l.code==="Space")&&h()},onClick:h,children:[e("div",{className:"cove-input__toggle-spacer"}),e("div",{className:"cove-input__toggle-button"}),e("div",{className:"cove-input__toggle-track",style:u&&b?{backgroundColor:b}:null}),e("input",{className:"cove-input--hidden",type:"checkbox",defaultChecked:u,onChange:l=>N(l),ref:z,tabIndex:-1,readOnly:!0})]}),a&&n==="right"&&e(T,{})]})]})});t.propTypes={label:r.string,labelPosition:r.oneOf(["left","right","top"]),tooltip:r.oneOfType([r.string,r.object]),toggleType:r.oneOf(["flat","block","pill","3d"]),size:r.oneOf(["small","medium","large","xlarge"]),activeColor:r.string,stretch:r.bool,stateValue:r.bool};t.__docgenInfo={description:"",methods:[],displayName:"InputToggle",props:{labelPosition:{defaultValue:{value:"'right'",computed:!1},type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1},{value:"'top'",computed:!1}]},required:!1,description:"Position the label relative to the toggle"},toggleType:{defaultValue:{value:"'flat'",computed:!1},type:{name:"enum",value:[{value:"'flat'",computed:!1},{value:"'block'",computed:!1},{value:"'pill'",computed:!1},{value:"'3d'",computed:!1}]},required:!1,description:"Select the preferred display style of the toggle"},size:{defaultValue:{value:"'small'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1},{value:"'xlarge'",computed:!1}]},required:!1,description:"Select the preferred size of the toggle"},activeColor:{defaultValue:{value:"'#005eaa'",computed:!1},type:{name:"string"},required:!1,description:"Select the preferred color for the toggle when active"},label:{type:{name:"string"},required:!1,description:"Add label to the input field"},tooltip:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Add a tooltip to describe the toggle's usage; JSX markup can also be supplied"},stretch:{type:{name:"bool"},required:!1,description:"Stretch the toggle and its label to fill the width of its container; Only available when label exists, and **labelPosition** is set to `left` or `right`."},stateValue:{type:{name:"bool"},required:!1,description:"Current value of the input, usually the current config option value"}}};const E=({...a})=>e(t,{...a});function R(a={}){const{wrapper:n}=Object.assign({},k(),a.components);return n?e(n,{...a,children:e(m,{})}):m();function m(){const o=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},k(),a.components);return i(S,{children:[e(D,{title:"Components/Input/Toggle",name:"Usage",component:t,parameters:{options:{isToolshown:!0}}}),`
`,`
`,e(o.h1,{children:"Toggle Component"}),`
`,e(c,{sourceState:"shown",withSource:"open",children:e(P,{name:"Example",args:{label:"Toggle Label",labelPosition:"top",toggleType:"flat",tooltip:"Example tooltip text...",size:"large",activeColor:"#39569b",value:!0},children:E.bind({})})}),`
`,e(X,{story:"Example"}),`
`,e(o.h2,{children:"Flat"}),`
`,e(o.p,{children:e(o.code,{children:'toggleType="flat"'})}),`
`,i(c,{sourceState:"none",mdxSource:'<InputToggle activeColor="#46c3d1" value={true} /><InputToggle size="medium" activeColor="#46c3d1" value={true} /><InputToggle size="large" activeColor="#46c3d1" value={true} /><InputToggle size="xlarge" activeColor="#46c3d1" value={true} />',children:[e(t,{activeColor:"#46c3d1",value:!0}),e(t,{size:"medium",activeColor:"#46c3d1",value:!0}),e(t,{size:"large",activeColor:"#46c3d1",value:!0}),e(t,{size:"xlarge",activeColor:"#46c3d1",value:!0})]}),`
`,e("br",{}),`
`,e(o.h2,{children:"Block"}),`
`,e(o.p,{children:e(o.code,{children:'toggleType="block"'})}),`
`,i(c,{sourceState:"none",mdxSource:'<InputToggle toggleType="block" activeColor="#025eaa" value={true} /><InputToggle size="medium" toggleType="block" activeColor="#025eaa" value={true} /><InputToggle size="large" toggleType="block" activeColor="#025eaa" value={true} /><InputToggle size="xlarge" toggleType="block" activeColor="#025eaa" value={true} />',children:[e(t,{toggleType:"block",activeColor:"#025eaa",value:!0}),e(t,{size:"medium",toggleType:"block",activeColor:"#025eaa",value:!0}),e(t,{size:"large",toggleType:"block",activeColor:"#025eaa",value:!0}),e(t,{size:"xlarge",toggleType:"block",activeColor:"#025eaa",value:!0})]}),`
`,e("br",{}),`
`,e(o.h2,{children:"Pill"}),`
`,e(o.p,{children:e(o.code,{children:'toggleType="pill"'})}),`
`,i(c,{sourceState:"none",mdxSource:'<InputToggle toggleType="pill" activeColor="#f22d70" value={true} /><InputToggle size="medium" toggleType="pill" activeColor="#f22d70" value={true} /><InputToggle size="large" toggleType="pill" activeColor="#f22d70" value={true} /><InputToggle size="xlarge" toggleType="pill" activeColor="#f22d70" value={true} />',children:[e(t,{toggleType:"pill",activeColor:"#f22d70",value:!0}),e(t,{size:"medium",toggleType:"pill",activeColor:"#f22d70",value:!0}),e(t,{size:"large",toggleType:"pill",activeColor:"#f22d70",value:!0}),e(t,{size:"xlarge",toggleType:"pill",activeColor:"#f22d70",value:!0})]}),`
`,e("br",{}),`
`,e(o.h2,{children:"3D"}),`
`,e(o.p,{children:e(o.code,{children:'toggleType="3d"'})}),`
`,i(c,{sourceState:"hidden",mdxSource:'<InputToggle toggleType="3d" value={true} /><InputToggle size="medium" toggleType="3d" value={true} /><InputToggle size="large" toggleType="3d" value={true} /><InputToggle size="xlarge" toggleType="3d" value={true} />',children:[e(t,{toggleType:"3d",value:!0}),e(t,{size:"medium",toggleType:"3d",value:!0}),e(t,{size:"large",toggleType:"3d",value:!0}),e(t,{size:"xlarge",toggleType:"3d",value:!0})]})]})}}const y=E.bind({});y.storyName="Example";y.args={label:"Toggle Label",labelPosition:"top",toggleType:"flat",tooltip:"Example tooltip text...",size:"large",activeColor:"#39569b",value:!0};y.parameters={storySource:{source:`({ ...args
}) => <InputToggle {...args} />`}};const v={title:"Components/Input/Toggle",parameters:{options:{isToolshown:!0}},component:t,tags:["stories-mdx"],includeStories:["example"]};v.parameters=v.parameters||{};v.parameters.docs={...v.parameters.docs||{},page:R};const de=["Template","example"];export{E as Template,de as __namedExportsOrder,v as default,y as example};
//# sourceMappingURL=InputToggle.stories-0a7825e9.js.map
