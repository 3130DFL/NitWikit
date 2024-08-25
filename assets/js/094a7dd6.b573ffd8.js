"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[5628],{51629:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=i(96942),a=i(99832);const r={sidebar_position:1,title:"JVM \u4f18\u5316",slug:"/optimize/jvm"},s="JVM \u4f18\u5316",o={id:"process/maintenance/optimize/jvm/jvm",title:"JVM \u4f18\u5316",description:"\u8fd9\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8bf4\u662f\u6574\u4e2a\u7b28\u86cb\u6587\u6863\u4e2d\u7f16\u5199\u5386\u65f6\u6700\u4e45\u7684(),\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u6027,\u6211\u4eec\u5728Windows\u548cLinux \u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u6027\u80fd\u6d4b\u8bd5,\u7ed3\u679c\u53ef\u4ee5\u8bf4\u662f\u5341\u5206\u51fa\u4eba\u610f\u6599",source:"@site/docs-java/process/maintenance/optimize/jvm/jvm.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm",permalink:"/NitWikit/Java/optimize/jvm",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/jvm.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1724562456e3,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"JVM \u4f18\u5316",slug:"/optimize/jvm"},sidebar:"tutorialSidebar",previous:{title:"\u4f18\u5316",permalink:"/NitWikit/Java/optimize"},next:{title:"\u901a\u7528\u4f18\u5316\u53c2\u6570",permalink:"/NitWikit/Java/optimize/jvm/common"}},l={},c=[{value:"Java \u9009\u62e9",id:"java-\u9009\u62e9",level:2},{value:"\u5783\u573e\u56de\u6536\u5668",id:"\u5783\u573e\u56de\u6536\u5668",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"jvm-\u4f18\u5316",children:"JVM \u4f18\u5316"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8bf4\u662f\u6574\u4e2a\u7b28\u86cb\u6587\u6863\u4e2d\u7f16\u5199\u5386\u65f6\u6700\u4e45\u7684(),\u4e3a\u4e86\u786e\u4fdd\u6b63\u786e\u6027,\u6211\u4eec\u5728Windows\u548cLinux \u4e0a\u8fdb\u884c\u4e86\u5927\u91cf\u6027\u80fd\u6d4b\u8bd5,\u7ed3\u679c\u53ef\u4ee5\u8bf4\u662f\u5341\u5206\u51fa\u4eba\u610f\u6599"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u573a\u6d4b\u8bd5\u7684\u7ec6\u8282\u548c\u65e5\u5fd7,\u62a5\u544a,Spark,GCLog\u7b49\u53ef\u4ee5\u5728",(0,t.jsx)(n.a,{href:"https://github.com/lilingfengdev/Test-Java",children:"Test - Java"}),"\u627e\u5230"]}),"\n",(0,t.jsx)(n.h2,{id:"java-\u9009\u62e9",children:"Java \u9009\u62e9"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62e9] \n    A --\x3e Java8\n    A --\x3e Java11\n    A --\x3e Java21\n    Java8 --\x3e Dragonwell\n    Java11 --\x3e Dragonwell\n    Java21 --\x3e Windows\n    Windows --\x3e \u5185\u5b58\u5145\u8db3\n    \u5185\u5b58\u5145\u8db3 --\x3e C[GraalVM Enterprise Edition]\n    Windows --\x3e \u5185\u5b58\u4e0d\u8db3\n    \u5185\u5b58\u4e0d\u8db3 --\x3e OpenJ9\n    Java21 --\x3e Linux\n    Linux --\x3e \u5185\u5b58\u4e0d\u8db3\n    Linux --\x3e D[\u5185\u5b58\u5145\u8db3]\n    D --\x3e \u597d\u7684\u517c\u5bb9\u6027\n    \u597d\u7684\u517c\u5bb9\u6027 --\x3e|\u9700\u8981| C\n    \u597d\u7684\u517c\u5bb9\u6027 --\x3e|\u4e0d\u9700\u8981| E[Azul Zing]"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u53ef\u80fd\u4e0e\u4f60\u60f3\u7684\u4e0d\u592a\u4e00\u6837"}),"\n",(0,t.jsx)(n.p,{children:"Zulu \u88ab\u6dd8\u6c70\u4e86\uff0c\u8fd9\u662f\u4e8b\u5b9e"}),"\n",(0,t.jsx)(n.h2,{id:"\u5783\u573e\u56de\u6536\u5668",children:"\u5783\u573e\u56de\u6536\u5668"}),"\n",(0,t.jsx)(n.p,{children:"\u7ecf\u8fc7\u6211\u4eec\u7684\u591a\u6b21\u6d4b\u8bd5\uff0cG1GC\u548cZGC \u6700\u9002\u5408MC\u670d\u52a1\u5668(\u8fd8\u6709\u4e00\u4e2a Zing C4)"}),"\n",(0,t.jsx)(n.p,{children:"\u9009\u62e9\uff01"}),"\n",(0,t.jsx)(n.mermaid,{value:"flowchart TD\n    A[\u9009\u62e9] \n    A --\x3e \u673a\u5668\u914d\u7f6e\u8db3\u591f,\u8d77\u6b654h8g,\u63a8\u83508h8g\n    A --\x3e \u673a\u5668\u914d\u7f6e\u4e0d\u8fbe\u6807\n    \u673a\u5668\u914d\u7f6e\u8db3\u591f,\u8d77\u6b654h8g,\u63a8\u83508h8g --\x3e Java21,\u6216\u8005Dragonwell11\n    \u673a\u5668\u914d\u7f6e\u8db3\u591f,\u8d77\u6b654h8g,\u63a8\u83508h8g --\x3e \u5176\u4ed6\u7248\u672c\n    Java21,\u6216\u8005Dragonwell11 --\x3e ZGC\n    \u5176\u4ed6\u7248\u672c --\x3e G1GC\n    \u673a\u5668\u914d\u7f6e\u4e0d\u8fbe\u6807 --\x3e G1GC"}),"\n",(0,t.jsx)(n.p,{children:"ZGC \u7684\u65e0\u505c\u987f\u53ef\u4ee5\u7ed9\u73a9\u5bb6\u5e26\u6765\u66f4\u597d\u7684\u4f53\u9a8c,\u5e76\u4e14\u66f4\u5145\u5206\u7684\u5229\u7528\u591a\u6838"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e GC \u7ec6\u8282\u6027\u7684\u4f18\u5316\u8bf7\u9605\u8bfb\u6bcf\u4e2aJava\u7684\u4f18\u5316\u6307\u5357"})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},99832:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(750);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);