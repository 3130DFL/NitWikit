"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[7094],{67190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(96942),s=n(99832),i=n(83350);const o={title:"\u63d2\u4ef6",sidebar_position:1},c="Biggest TODO...",l={id:"bds-core/process/plugins/plugins",title:"\u63d2\u4ef6",description:"\u672c\u7bc7\u6587\u6863\u6301\u7eed\u66f4\u65b0\u4e2d...",source:"@site/docs-bedrock/bds-core/process/plugins/plugins.md",sourceDirName:"bds-core/process/plugins",slug:"/bds-core/process/plugins/",permalink:"/NitWikit/Bedrock/bds-core/process/plugins/",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/plugins/plugins.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1724562456e3,sidebarPosition:1,frontMatter:{title:"\u63d2\u4ef6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5efa\u8bbe\u9636\u6bb5",permalink:"/NitWikit/Bedrock/bds-core/process/"},next:{title:"\u5982\u4f55\u52a0\u8f7d\u63d2\u4ef6",permalink:"/NitWikit/Bedrock/bds-core/process/plugins/how-to-load-plugins"}},a={},d=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.p,{children:["\u672c\u7bc7\u6587\u6863\u6301\u7eed\u66f4\u65b0\u4e2d...",(0,r.jsx)("br",{}),"\n\u652f\u6301\u540e\u7eed PR"]}),(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"biggest-todo",children:"Biggest TODO..."})}),(0,r.jsxs)(t.p,{children:["\u4f5c\u8005\uff1a",(0,r.jsx)(t.a,{href:"https://github.com/MengHanLOVE1027",children:"\u68a6\u6db5LOVE"})]})]}),"\n",(0,r.jsx)(t.h1,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u672c\u6587\u6863\u4e2d\u63d0\u5230\u7684\u63d2\u4ef6\u90fd\u6709\u8f83\u591a\u7528\u6237\u57fa\u7840\u548c\u5b8c\u5584\u7684 Wiki\uff0c\u5177\u4f53\u63d2\u4ef6\u8bf7\u67e5\u770b\u63d2\u4ef6\u7684 Wiki\u3002"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"\u5efa\u8bae\u9605\u8bfb"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#",children:"TODO"})," - TODO..."]}),"\n"]}),"\n","\n",(0,r.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},83350:(e,t,n)=>{n.d(t,{A:()=>j});n(750);var r=n(29098),s=n(83817),i=n(43169),o=n(1260),c=n(22215),l=n(29215),a=n(6054);const d={cardContainer:"cardContainer_es9z",cardTitle:"cardTitle_jw8H",cardDescription:"cardDescription_Fo_F"};var u=n(96942);function p(e){let{href:t,children:n}=e;return(0,u.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:i}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},1260:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(750),s=n(58237);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},99832:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(750);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);