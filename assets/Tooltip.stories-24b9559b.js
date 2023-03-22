import{M as m,C as c,S as s}from"./index-cbaed915.js";import{T as e}from"./Tooltip-5568ada0.js";import{I as r}from"./Icon-e6436e69.js";import{a as t,F as d,j as o}from"./jsx-runtime-670450c2.js";import{u as g}from"./index-4fb8b842.js";import"./iframe-2f398da2.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";import"./index-4d501b15.js";function u(i={}){const{wrapper:n}=Object.assign({},g(),i.components);return n?o(n,{...i,children:o(h,{})}):h();function h(){const l=Object.assign({h1:"h1",p:"p",h2:"h2"},g(),i.components);return e||p("Tooltip",!1),e.Content||p("Tooltip.Content",!0),e.Target||p("Tooltip.Target",!0),t(d,{children:[o(m,{title:"Components/UI/Tooltip",component:e}),`
`,o(l.h1,{children:"Tooltip"}),`
`,o(l.p,{children:"Use the Button component to provide users with a method to interface with a major component, or trigger certain actions."}),`
`,o(l.h2,{children:"Trigger Type"}),`
`,o(c,{sourceState:"shown",withSource:"open",children:t(s,{name:"Trigger Type",children:[t(e,{position:"right",border:!1,children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t(l.p,{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"left",trigger:"click",border:!1,children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t(l.p,{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]})]})}),`
`,o(l.h2,{children:"Positioning"}),`
`,o(c,{sourceState:"shown",withSource:"open",children:t(s,{name:"Position",children:[t(e,{position:"top",trigger:"click",border:!1,children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t(l.p,{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"right",trigger:"click",border:"1",borderColor:"red",children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t(l.p,{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"bottom",trigger:"click",shadow:!1,border:"2",children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t(l.p,{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"left",trigger:"click",border:"2",borderColor:"blue",children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t(l.p,{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]})]})})]})}}function p(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}const T=()=>t(d,{children:[t(e,{position:"right",border:!1,children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t("p",{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"left",trigger:"click",border:!1,children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t("p",{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]})]});T.storyName="Trigger Type";T.parameters={storySource:{source:`<Tooltip position="right" border={false}><Tooltip.Target><Icon display="question" alt="hello" /></Tooltip.Target><Tooltip.Content><p>{"Hello world! I have a "}<a href="#">{"link"}</a>{"."}</p></Tooltip.Content></Tooltip>
<Tooltip position="left" trigger="click" border={false}><Tooltip.Target><Icon display="question" alt="hello" /></Tooltip.Target><Tooltip.Content><p>{"Hello world! I have a "}<a href="#">{"link"}</a>{"."}</p></Tooltip.Content></Tooltip>`}};const f=()=>t(d,{children:[t(e,{position:"top",trigger:"click",border:!1,children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t("p",{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"right",trigger:"click",border:"1",borderColor:"red",children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t("p",{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"bottom",trigger:"click",shadow:!1,border:"2",children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t("p",{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]}),t(e,{position:"left",trigger:"click",border:"2",borderColor:"blue",children:[o(e.Target,{children:o(r,{display:"question",alt:"hello"})}),o(e.Content,{children:t("p",{children:["Hello world! I have a ",o("a",{href:"#",children:"link"}),"."]})})]})]});f.storyName="Position";f.parameters={storySource:{source:`<Tooltip position="top" trigger="click" border={false}><Tooltip.Target><Icon display="question" alt="hello" /></Tooltip.Target><Tooltip.Content><p>{"Hello world! I have a "}<a href="#">{"link"}</a>{"."}</p></Tooltip.Content></Tooltip>
<Tooltip position="right" trigger="click" border={"1"} borderColor={"red"}><Tooltip.Target><Icon display="question" alt="hello" /></Tooltip.Target><Tooltip.Content><p>{"Hello world! I have a "}<a href="#">{"link"}</a>{"."}</p></Tooltip.Content></Tooltip>
<Tooltip position="bottom" trigger="click" shadow={false} border={"2"}><Tooltip.Target><Icon display="question" alt="hello" /></Tooltip.Target><Tooltip.Content><p>{"Hello world! I have a "}<a href="#">{"link"}</a>{"."}</p></Tooltip.Content></Tooltip>
<Tooltip position="left" trigger="click" border={"2"} borderColor={"blue"}><Tooltip.Target><Icon display="question" alt="hello" /></Tooltip.Target><Tooltip.Content><p>{"Hello world! I have a "}<a href="#">{"link"}</a>{"."}</p></Tooltip.Content></Tooltip>`}};const a={title:"Components/UI/Tooltip",component:e,tags:["stories-mdx"],includeStories:["triggerType","position"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:u};const O=["triggerType","position"];export{O as __namedExportsOrder,a as default,f as position,T as triggerType};
//# sourceMappingURL=Tooltip.stories-24b9559b.js.map
