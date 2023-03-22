import{M as l}from"./index-cbaed915.js";import{j as n,a as t,F as a}from"./jsx-runtime-670450c2.js";import{u as s}from"./index-4fb8b842.js";import"./iframe-2f398da2.js";import"../sb-preview/runtime.mjs";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6e91e324.js";import"./index-d475d2ea.js";import"./index-96c5f47c.js";import"./index-d37d4223.js";import"./index-53833bae.js";import"./index-356e4a49.js";function d(i={}){const{wrapper:o}=Object.assign({},s(),i.components);return o?n(o,{...i,children:n(c,{})}):c();function c(){const e=Object.assign({h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",strong:"strong",ul:"ul",li:"li",h3:"h3"},s(),i.components);return t(a,{children:[n(l,{title:"Helpers/CoveHelper/Event/subscribe"}),`
`,n(e.h1,{children:"subscribe"}),`
`,n(e.p,{children:`This function registers an event listener for a given event name on the document object. When the specified event is triggered,
the listener function will be executed.`}),`
`,t(e.p,{children:["The function returns the result of the ",n(e.code,{children:"addEventListener"})," method call."]}),`
`,t(e.p,{children:["See the ",n(e.a,{href:"/?path=/docs/helpers-covehelper-event-unsubscribe--docs",children:"unsubscribe"})," function for removing the event listener."]}),`
`,n(e.p,{children:" "}),`
`,n(e.h2,{children:"Syntax"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`CoveHelper.Event.subscribe(eventName, listener);
`})}),`
`,n(e.p,{children:n(e.strong,{children:"Parameters"})}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"eventName"}),": A string representing the name of the event to listen for."]}),`
`,t(e.li,{children:[n(e.code,{children:"listener"}),": A function to be executed when the specified event is triggered."]}),`
`]}),`
`,n(e.p,{children:" "}),`
`,n(e.h3,{children:"Example"}),`
`,t(e.p,{children:["In this example, the ",n(e.code,{children:"handleClick"})," function is registered as an event listener for the click event on a button element using the ",n(e.code,{children:"subscribe"})," function."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`function handleClick(event) {
  console.log('Button clicked!', event.target);
}

const button = document.querySelector('button');
subscribe('click', handleClick);
`})})]})}}const h=()=>{throw new Error("Docs-only story")};h.parameters={docsOnly:!0};const r={title:"Helpers/CoveHelper/Event/subscribe",tags:["stories-mdx"],includeStories:["__page"]};r.parameters=r.parameters||{};r.parameters.docs={...r.parameters.docs||{},page:d};const k=["__page"];export{k as __namedExportsOrder,h as __page,r as default};
//# sourceMappingURL=subscribe.stories-144c4177.js.map
