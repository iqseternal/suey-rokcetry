import{j as h,a2 as x,h as v,a3 as W,H as c,F as I,d as L,o as D,b as J,w as C,a as K,c as Q,D as V,l as T}from"./framework.4fcc03a2.js";const B="_view_1x8mi_26",U="_content_1x8mi_36",Y="_hidden_1x8mi_41",G="_hiddenEnter_1x8mi_1",X="_docker_1x8mi_49",O="_dockerItem_1x8mi_61",Z="_footer_1x8mi_64",ee="_back_1x8mi_114",te="_all_1x8mi_1",E="_driverLine_1x8mi_152",l={view:B,content:U,hidden:Y,hiddenEnter:G,docker:X,dockerItem:O,footer:Z,back:ee,all:te,driverLine:E};globalThis.document&&document.querySelector(":root");const j=(e,t,n,r)=>e.style.setProperty(t,n,r?"!important":void 0),re=(e,t)=>getComputedStyle(e).getPropertyValue(t),z=(e,t,n)=>Object.keys(t).forEach(r=>j(e,r,t[r],n)),ne=(e,t,n)=>e.style[t]=n,M=(e,t)=>Object.keys(t).forEach(n=>ne(e,n,t[n]));function w(e,t,n){if(typeof t=="string"&&n){h(()=>{e.value.addEventListener(t,n)}),x(()=>{e.value.removeEventListener(t,n)});return}h(()=>{Object.keys(t).forEach(r=>{e.value.addEventListener(r,t[r])})}),x(()=>{Object.keys(t).forEach(r=>{e.value.removeEventListener(r,t[r])})})}const ie=e=>{const t=document.querySelector(`div.${B}`);if(!t){console.error("The element has not been mounted. Please try calling it in the onMounted cycle.");return}z(t,e)},_=e=>`var(${e})`;function ce(e){return e<0||e>1?0:Math.sin(e*Math.PI)}function oe(e,t,n){const r=t/2;return i=>i>e+r||i<e-r?0:ce((i-(e-r))/t)*n}const S=()=>{const e=v(void 0),t=()=>{e.value&&(clearTimeout(e.value),e.value=void 0)},n=(r,i)=>{t(),e.value=setTimeout(()=>{r(),e.value=void 0},i)};return W(()=>{t()}),x(()=>{t()}),{perTimeout:n,timer:e,cancelTimeout:t}};function H(e,t,n,r,i){e.querySelectorAll(`section.${O}`).forEach((o,a,m)=>{if(m.length>=i&&a===m.length-1)return;const s=t(n(o));j(o,"--i",s.toString()),s===0?M(o,{width:_("--r-mac-docker-item-size"),height:_("--r-mac-docker-item-size")}):M(o,{width:`calc(${_("--r-mac-docker-item-size")} * ${s/r/3+1})`,height:`calc(${_("--r-mac-docker-item-size")} * ${s/r/3+1})`})})}function ae(e,t,n,r){if(Array.isArray(e)){if(r)return c(I,null,[e,c("div",{class:E},null),r]);if(t&&e[0].children.length>=n){const i=e[0].children.pop();return c(I,null,[e,c("div",{class:E},null),i])}}return e}const ue={driverNums:{type:Number,default:4},driverEffectWidth:{type:Number,default:400},driverMaxI:{type:Number,default:2},autoDriver:{type:Boolean,default:!0},autoHidden:{type:Boolean,default:!1},autoHidenTimer:{type:Number,default:3e3},cssVars:{type:Object,default:()=>({})}},le=L({props:ue,setup(e,{slots:t}){const n=v(),r=v(),i=v(),o=u=>re(n.value,u);h(()=>z(n.value,e.cssVars));const a=v(!1),{cancelTimeout:m,perTimeout:s,timer:p}=S(),{cancelTimeout:se,perTimeout:F,timer:N}=S(),g=u=>u.offsetLeft+parseFloat(o("--r-mac-docker-item-size").replace("px",""))/2,R=u=>u.offsetLeft+parseFloat(o("--r-mac-docker-item-size").replace("px","")),y=()=>H(i.value,()=>0,g,e.driverMaxI,e.driverNums);return w(i,{mousemove:u=>{if(N.value)return;F(()=>{},8);const d=i.value.querySelectorAll(`section.${l.dockerItem}`),f=u.clientX-i.value.getBoundingClientRect().left;let A;for(let k=0;k<d.length;k++){if((t.control||e.autoDriver&&d.length>=e.driverNums)&&k===d.length-1){y();return}const b=d[k],P=Number(o("--r-mac-docker-item-margin").replace("px",""));if(f>=b.offsetLeft-P&&f<=R(b)+P){A=b;break}}if(!A){y();return}const q=oe(g(A),e.driverEffectWidth,e.driverMaxI);H(i.value,q,g,e.driverMaxI,e.driverNums)},mouseleave:()=>y()}),e.autoHidden&&(h(()=>s(()=>a.value=!0,e.autoHidenTimer)),w(n,"mousemove",u=>{var d,f;if(!r.value||!r.value.clientHeight){m(),a.value=!1;return}if(((d=document.body)==null?void 0:d.clientHeight)-u.clientY<=((f=r.value)==null?void 0:f.clientHeight)){m(),a.value&&(a.value=!1);return}p.value||s(()=>a.value=!0,e.autoHidenTimer)}),w(r,"mouseleave",()=>s(()=>a.value=!0,e.autoHidenTimer))),()=>c("div",{class:l.view,ref:n},[c("main",{class:l.content},[t.main&&t.main()]),c("footer",{class:a.value?`${l.footer} ${l.hidden}`:`${l.footer}`,ref:r},[c("div",{class:l.docker,ref:i},[c("div",{class:l.back},null),ae(t.default&&t.default(),e.autoDriver,e.driverNums,t.control&&t.control())])])])}}),$=L({props:{text:{type:String,default:""},src:{type:String,default:"",required:!0}},emits:{itemClick:()=>!0},setup(e,{emit:t}){return()=>c("section",{class:l.dockerItem,style:{"--i":0,backgroundImage:`url(${e.src})`},onClick:()=>t("itemClick")},[e.text])}}),me=L({__name:"RMacDocker",setup(e){h(()=>ie({"--r-mac-docker-item-margin-bottom":"8px"}));const t=["https://tse4-mm.cn.bing.net/th/id/OIP-C.wPY2_PJMnXtLAUKPUAlwlAAAAA?w=152&h=140&c=7&r=0&o=5&pid=1.7","https://tse3-mm.cn.bing.net/th/id/OIP-C.Xhuf16W9uzvkQPj6NhDDRAAAAA?w=130&h=130&c=7&r=0&o=5&pid=1.7","https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7","https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7","https://tse1-mm.cn.bing.net/th/id/OIP-C.hlviKjBLfMuQ9Fr7J2cWzwAAAA?w=140&h=150&c=7&r=0&o=5&pid=1.7"];return(n,r)=>(D(),J(T(le),{style:{width:"100%",height:"unset",aspectRatio:"16 / 9"},driverMaxI:1.2},{main:C(()=>[K("Dfffff")]),default:C(()=>[(D(),Q(I,null,V(t,(i,o)=>c(T($),{key:o,src:i},null,8,["src"])),64))]),control:C(()=>[c(T($),{src:"https://tse3-mm.cn.bing.net/th/id/OIP-C.HKngSDiahYfSyociRrS4KwAAAA?w=143&h=150&c=7&r=0&o=5&pid=1.7"})]),_:1}))}});export{me as _};