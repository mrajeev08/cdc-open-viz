import{j as f,a as M,F as T}from"./jsx-runtime-670450c2.js";import{R as w,r as A}from"./index-f1f749bf.js";import{h as E}from"./index-e3f86ac2.js";import{C as c}from"./store-e4d3035e.js";import{u as ue}from"./useVisConfig-ebd632ff.js";import{C as de}from"./componentThemes-06b90995.js";import{p as h}from"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";import"./visConfigSlice-d502a2ab.js";var j={},me={get exports(){return j},set exports(e){j=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var n=[],o=0;o<arguments.length;o++){var a=arguments[o];if(a){var d=typeof a;if(d==="string"||d==="number")n.push(a);else if(Array.isArray(a)){if(a.length){var g=t.apply(null,a);g&&n.push(g)}}else if(d==="object"){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){n.push(a.toString());continue}for(var p in a)r.call(a,p)&&a[p]&&n.push(p)}}}return n.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(me);const z=j;var fe=["top","left","transform","className","children","innerRef"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},F.apply(this,arguments)}function pe(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}function ie(e){var r=e.top,t=r===void 0?0:r,n=e.left,o=n===void 0?0:n,a=e.transform,d=e.className,g=e.children,p=e.innerRef,P=pe(e,fe);return w.createElement("g",F({ref:p,className:z("visx-group",d),transform:a||"translate("+o+", "+t+")"},P),g)}ie.propTypes={top:h.number,left:h.number,transform:h.string,className:h.string,children:h.node,innerRef:h.oneOfType([h.string,h.func,h.object])};var he=["className","innerRef"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},R.apply(this,arguments)}function ge(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Ce(e){var r=e.className,t=e.innerRef,n=ge(e,he);return w.createElement("rect",R({ref:t,className:z("visx-bar",r)},n))}var ve=["className","innerRef"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},W.apply(this,arguments)}function be(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Ne(e){var r=e.className,t=e.innerRef,n=be(e,ve);return w.createElement("circle",W({ref:t,className:z("visx-circle",r)},n))}const U="Count",q="Max",k="Mean (Average)",H="Median",L="Min",Y="Mode",G="Sum",xe=e=>{const r=A.useRef();return A.useEffect(()=>{r.current=e},[e]),r.current};function K(e,r,t,n,o){let a=r==="x"?9-t%10:r==="y"?Math.floor(t/10):null;return e==="circle"?a*(n+o)+n/2:a*(n+o)}const _=(e,r,t)=>{if(t){const o=Math.abs(r-t);if(t>r){let a="";const d=Math.abs(t-e-o);return e>r&&e<t&&(a="fill-opacity 200ms cubic-bezier(0.16, 1, 0.3, 1) "+(d*.0025).toString()+"s, "),a}if(t<r){let a="";const d=Math.abs(t-e);return e>=t&&e<r&&(a="fill-opacity 200ms cubic-bezier(0.16, 1, 0.3, 1) "+(Math.abs(o-d)*.0025).toString()+"s, "),a}}return""},se=()=>{const{config:e}=ue(),{data:r}=e,t=()=>{if(!(e!=null&&e.dataColumn)||!e.dataFunction)return"";let l=r;e.filters.map(i=>(i.columnName&&i.columnValue&&(l=l.filter(function(b){return b[i.columnName]===i.columnValue})),!1));let u=[];if(e.dataConditionalColumn!==""&&e.dataConditionalOperator!==""&&e.dataConditionalComparate!=="")switch(e.dataConditionalOperator){case"<":u=l.filter(i=>i[e.dataConditionalColumn]<e.dataConditionalComparate);break;case">":u=l.filter(i=>i[e.dataConditionalColumn]>e.dataConditionalComparate);break;case"<=":u=l.filter(i=>i[e.dataConditionalColumn]<=e.dataConditionalComparate);break;case">=":u=l.filter(i=>i[e.dataConditionalColumn]>=e.dataConditionalComparate);break;case"=":isNaN(Number(e.dataConditionalComparate))?u=l.filter(i=>String(i[e.dataConditionalColumn])===e.dataConditionalComparate):u=l.filter(i=>i[e.dataConditionalColumn]===e.dataConditionalComparate);break;case"≠":isNaN(Number(e.dataConditionalComparate))?u=l.filter(i=>String(i[e.dataConditionalColumn])!==e.dataConditionalComparate):u=l.filter(i=>i[e.dataConditionalColumn]!==e.dataConditionalComparate);break;default:u=[]}const s=u.length>0?u.map(i=>i[e.dataColumn]):l.map(i=>i[e.dataColumn]),m=l.map(i=>i[e.dataDenomColumn]);let C=s.filter(i=>{let b=!1;return(Number(i)||Number.isFinite(Number(i)))&&(b=!0),b}).map(Number),v=m.filter(i=>{let b=!1;return(Number(i)||Number.isFinite(Number(i)))&&(b=!0),b}).map(Number),$="";$={[U]:String(C.length),[G]:String(c.Math.roundToPlace(c.Math.getSum(C),e.roundToPlace)),[k]:String(c.Math.roundToPlace(c.Math.getMean(C),e.roundToPlace)),[H]:c.Math.roundToPlace(c.Math.getMedian(C).toString(),e.roundToPlace),[q]:Math.max(...C).toString(),[L]:Math.min(...C).toString(),[Y]:c.Math.getMode(C).join(", ")}[e.dataFunction];let D=null;const ce={[U]:String(v.length),[G]:String(c.Math.roundToPlace(c.Math.getSum(v),e.roundToPlace)),[k]:String(c.Math.roundToPlace(c.Math.getMean(v),e.roundToPlace)),[H]:c.Math.roundToPlace(c.Math.getMedian(v).toString(),e.roundToPlace),[q]:Math.max(...v).toString(),[L]:Math.min(...v).toString(),[Y]:c.Math.getMode(v).join(", ")};return e.customDenom&&e.dataDenomColumn&&e.dataDenomFunction?D=ce[e.dataDenomFunction]:D=e.dataDenom>0?e.dataDenom:100,c.Math.roundToPlace($/D*100,e.roundToPlace)},n=()=>e.nodeWidth*10+e.nodeSpacer*9,o=t();let a=parseInt(e.nodeWidth,10),d=parseInt(e.nodeSpacer,10),g=xe(o),p=o;const P=A.useCallback(()=>{var u;let l=[];for(let s=0;s<100;s++){let m={shape:e.shape,x:K(e.shape,"x",s,a,d),y:K(e.shape,"y",s,a,d),color:(u=de[e.theme])==null?void 0:u.primary,opacity:s+1>100-Math.round(o)?1:.35};l.unshift(m)}return l.map((s,m)=>s.shape==="square"?f(Ce,{className:"cove-waffle-chart__node",style:{transition:_(m,g,p)+"fill 200ms ease 0s",fillOpacity:s.opacity},x:s.x,y:s.y,width:a,height:a,fill:s.color},m):s.shape==="person"?f("path",{style:{transform:`translateX(${s.x+a/4}px) translateY(${s.y}px) scale(${a/20})`,transition:_(m,g,p)+"fill 200ms ease 0s",fillOpacity:s.opacity},fill:s.color,fillOpacity:s.opacity,d:`M3.75,0a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,3.75,0M5.625,5.625H5.18125a3.433,3.433,0,0,1-2.8625,0H1.875A1.875,1.875,
                          0,0,0,0,7.5v5.3125a.9375.9375,0,0,0,.9375.9375h.625v5.3125A.9375.9375,0,0,0,2.5,20H5a.9375.9375,0,0,0,
                          .9375-.9375V13.75h.625A.9375.9375,0,0,0,7.5,12.8125V7.5A1.875,1.875,0,0,0,5.625,5.625Z`},m):f(Ne,{className:"cove-waffle-chart__node",style:{transition:_(m,g,p)+"fill 200ms ease 0s",fillOpacity:s.opacity},cx:s.x,cy:s.y,r:a/2,fill:s.color,"data-step":m},m))},[e]);let le=e.fontSize?{fontSize:e.fontSize+"px"}:null;return M(T,{children:[e.missingRequiredSections&&f(T,{children:"Missing data in sections"}),e.missingRequiredSections===!1&&f(T,{children:M("div",{className:`cove-waffle-chart__container${e.orientation==="vertical"?" cove-waffle-chart__container--verical":""}${e.overallFontSize?" font-"+e.overallFontSize:""}`,children:[f("div",{className:"cove-waffle-chart__visualization",style:{width:n()},children:f("svg",{width:n(),height:n(),children:f(ie,{children:P()})})}),(o||e.content)&&M("div",{className:"cove-waffle-chart__data",children:[o&&M("div",{className:"cove-waffle-chart__data--primary",style:le,children:[e.prefix?e.prefix:null,o,e.suffix?e.suffix:null]}),f("div",{className:"cove-waffle-chart__data--text",children:E(e.content)})]})]})}),e.subtext&&f("div",{className:"cove-waffle-chart__subtext",children:E(e.subtext)})]})},I=se;se.__docgenInfo={description:"",methods:[],displayName:"WaffleChart"};const Fe={title:"Visualizations/Waffle Chart",component:I};I.defaultProps={orientation:"horizontal",overallFontSize:"medium",invalidComparate:!1,customDenom:!1,dataDenom:100,suffix:"%",roundToPlace:0,shape:"circle",nodeWidth:10,nodeSpacer:2,theme:"blue"};const y=e=>f(I,{configObj:{...e}}),N=y.bind({});N.args={shape:"square",title:"Overdose Mortality Rates",content:"of overdoses resulted in death.",subtext:"This data is an example and does not reflect actual averages",orientation:"horizontal",data:[{"Resulted in Death":250,"Number of Overdoses":600,state:"Alabama",Year:"2010"},{"Resulted in Death":16,"Number of Overdoses":80,state:"Alaska",Year:"2008"},{"Resulted in Death":19,"Number of Overdoses":100,state:"Alaska",Year:"2010"},{"Resulted in Death":93,"Number of Overdoses":400,state:"Alaska",Year:"2012"},{"Resulted in Death":82,"Number of Overdoses":400,state:"Arizona",Year:"2010"}],filters:[],fontSize:null,overallFontSize:"medium",dataColumn:"Resulted in Death",dataFunction:"Sum",dataConditionalColumn:"",dataConditionalOperator:null,dataConditionalComparate:"",customDenom:!0,dataDenom:null,dataDenomColumn:"Number of Overdoses",dataDenomFunction:"Sum",prefix:"",suffix:"%",roundToPlace:0,nodeWidth:10,nodeSpacer:2,theme:"blue"};const x=y.bind({});x.args={shape:"circle",title:"5 Day Pollen Count Average",content:"Oak, Cedar/Juniper and Hackberry",subtext:"This data is an example and does not reflect actual averages",data:[{"Pollen Count":6.3},{"Pollen Count":8.1},{"Pollen Count":7.4},{"Pollen Count":5.1},{"Pollen Count":6.9}],dataColumn:"Pollen Count",dataFunction:"Mean (Average)",customDenom:!0,dataDenom:10,suffix:" - Medium-high",nodeWidth:15,theme:"orange"};const O=y.bind({});O.args={shape:"person",title:"COVID-19 Positive Test Rates",content:"Daily positive test rate per 100k",subtext:"This data is an example and does not reflect actual averages",data:[{"Positive Test":2100}],dataColumn:"Positive Test",dataFunction:"Sum",customDenom:!0,dataDenom:1e5,suffix:"%",roundToPlace:1,nodeWidth:22,nodeSpacer:2,theme:"green"};const S=y.bind({});S.args={shape:"square",title:"Insured Rates for Georgia",content:"of families are under active health insurance in the state of Georgia; either through the healthcare marketplace, or through provider",subtext:"This data is an example and does not reflect actual averages",data:[{Coverage:68.4}],dataColumn:"Coverage",dataFunction:"Sum",customDenom:!1,suffix:"%",nodeWidth:25,nodeSpacer:2,theme:"cyan"};var X,B,J;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`args => <WaffleChart configObj={{
  ...args
}} />`,...(J=(B=N.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var Z,Q,V;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <WaffleChart configObj={{
  ...args
}} />`,...(V=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var ee,te,ae;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`args => <WaffleChart configObj={{
  ...args
}} />`,...(ae=(te=O.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,re,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <WaffleChart configObj={{
  ...args
}} />`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const Re=["Primary","Circle","Person","Square"];export{x as Circle,O as Person,N as Primary,S as Square,Re as __namedExportsOrder,Fe as default};
//# sourceMappingURL=WaffleChart.stories-7ef7c695.js.map
