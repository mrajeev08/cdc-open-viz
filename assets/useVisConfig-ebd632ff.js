import"./jsx-runtime-670450c2.js";import{r as o}from"./index-f1f749bf.js";import"./visConfigSlice-d502a2ab.js";import{u as a}from"./store-e4d3035e.js";const r=o.createContext({});r.displayName="VisualizationConfig";const m=()=>{const{visualizationKey:i,...u}=o.useContext(r),[,s]=o.useTransition(),e=a(t=>t.updateVisConfig),n=a(t=>t.updateVisConfigField),C=o.useCallback(t=>{s(()=>e(i,t))},[e,i]),c=o.useCallback((t,p,f=!0)=>{s(()=>n(i,t,p,f))},[n,i]);return{config:u,updateVisConfig:C,updateVisConfigField:c}};export{m as u};
//# sourceMappingURL=useVisConfig-ebd632ff.js.map
