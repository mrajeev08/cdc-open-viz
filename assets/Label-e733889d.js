import{a as o,F as i,j as r}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{h as f}from"./index-e3f86ac2.js";import{p as e}from"./index-4d501b15.js";import{I as y}from"./Icon-e6436e69.js";import{T as a}from"./Tooltip-5568ada0.js";const p=({name:l,upperCase:c=!0,tooltip:t,style:d,children:m,className:s,...n})=>{let u={cursor:n.onClick?"pointer":null,textTransform:c?"uppercase":null,...d};return o(i,{children:[r("label",{htmlFor:l||null,className:`cove-label${s?" "+s:""}`,style:u,...n,children:m}),t&&t!==""&&r(i,{children:o(a,{children:[r(a.Target,{children:r(y,{display:"questionCircle"})}),r(a.Content,{children:typeof t=="object"?t:typeof t=="string"&&r("p",{children:f(t)})})]})})]})};p.propTypes={name:e.string,upperCase:e.bool,children:e.any,tooltip:e.oneOfType([e.string,e.object]),style:e.object};p.__docgenInfo={description:"",methods:[],displayName:"Label",props:{upperCase:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:"Sets the casing for the label"},name:{type:{name:"string"},required:!1,description:"Supply the referral name of an input to connect to this label"},children:{type:{name:"any"},required:!1,description:"All content set between the \\<Label\\> tags"},tooltip:{type:{name:"union",value:[{name:"string"},{name:"object"}]},required:!1,description:"Add a tooltip to describe the label's related input's usage; JSX markup can also be supplied"},style:{type:{name:"object"},required:!1,description:"Add additional styles to the label as needed"}}};export{p as L};
//# sourceMappingURL=Label-e733889d.js.map
