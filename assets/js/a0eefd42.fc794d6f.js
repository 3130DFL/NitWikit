"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["8678"],{46178:function(e,i,n){n.r(i),n.d(i,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>s,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"start/server-core-choose/folia/folia","title":"Folia","description":"Folia \u662F Paper \u7684\u4E00\u4E2A\u5206\u652F\uFF0C\u7531 Minecraft \u4F18\u5316 BOSS Spottedleaf \u5F00\u53D1\u3002","source":"@site/docs-java/start/server-core-choose/folia/folia.md","sourceDirName":"start/server-core-choose/folia","slug":"/start/server-core-choose/folia/folia","permalink":"/Java/start/server-core-choose/folia/folia","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/start/server-core-choose/folia/folia.md","tags":[],"version":"current","lastUpdatedBy":"\u201Cpostyizhan\u201D","lastUpdatedAt":1732927941000,"sidebarPosition":4,"frontMatter":{"title":"Folia","slug":"folia","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Mod \u7AEF","permalink":"/Java/start/server-core-choose/mod"},"next":{"title":"Luminol","permalink":"/Java/start/server-core-choose/folia/luminol"}}'),l=n("52676"),o=n("79938");let t={title:"Folia",slug:"folia",sidebar_position:4},a="Folia",s={},c=[{value:"\u7B80\u4ECB",id:"\u7B80\u4ECB",level:2},{value:"\u597D\u5904",id:"\u597D\u5904",level:3},{value:"\u574F\u5904",id:"\u574F\u5904",level:3},{value:"\u8981\u6C42",id:"\u8981\u6C42",level:2},{value:"\u9009\u62E9",id:"\u9009\u62E9",level:2}];function d(e){let i={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"folia",children:"Folia"})}),"\n",(0,l.jsx)(i.p,{children:"Folia \u662F Paper \u7684\u4E00\u4E2A\u5206\u652F\uFF0C\u7531 Minecraft \u4F18\u5316 BOSS Spottedleaf \u5F00\u53D1\u3002"}),"\n",(0,l.jsx)(i.h2,{id:"\u7B80\u4ECB",children:"\u7B80\u4ECB"}),"\n",(0,l.jsx)(i.h3,{id:"\u597D\u5904",children:"\u597D\u5904"}),"\n",(0,l.jsx)(i.p,{children:"Folia \u4E0E Vanilla \u6700\u5927\u7684\u4E0D\u540C\u5728\u4E8E Tick \u4E0D\u518D\u6709\u4E3B\u7EBF\u7A0B\uFF0C\u800C\u662F\u5C06\u533A\u5757\u8FDB\u884C\u5206\u7EC4\uFF0C\u6BCF\u4E2A\u72EC\u7ACB\u7684\u533A\u57DF\u90FD\u6709\u81EA\u5DF1\u7684 Tick Loop"}),"\n",(0,l.jsx)(i.p,{children:"\u5982\u679C\u4F60\u65E0\u6CD5\u7406\u89E3\u8FD9\u6BB5\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u770B\u8FD9\u6837\u5B50\u505A\u7684\u597D\u5904:"}),"\n",(0,l.jsx)(i.p,{children:"\u73B0\u5728\u6709\u4E00\u4E2A\u5730\u56FE\uFF0C\u6709\u56DB\u4E2A\u533A\u5757\uFF0C\u5206\u522B\u662FA\uFF0CB\uFF0CC\uFF0CD"}),"\n",(0,l.jsx)(i.p,{children:"\u5C0F\u660E\u5728 A \u5904\u5EFA\u9020\u4E86\u4E00\u4E2A\u5361\u670D\u673A\uFF0C\u80FD\u628A\u670D\u52A1\u5668 TPS \u5E72\u5230 10 \u4EE5\u4E0B\u7684\u90A3\u79CD"}),"\n",(0,l.jsx)(i.p,{children:"\u5982\u679C\u662F Paper(\u6216\u8005Purpur\u53CA\u5176\u5206\u652F)\uFF0C\u90A3\u4E48 A\uFF0CB\uFF0CC\uFF0CD \u56DB\u5904\u7684 TPS \u90FD\u4F1A\u6389\u5230 10 \u4EE5\u4E0B"}),"\n",(0,l.jsx)(i.p,{children:"\u4F46\u5982\u679C\u6211\u4EEC\u7528 Folia (\u5047\u8BBEABCD\u5206\u5728\u4E0D\u540C\u7684Region)\uFF0C\u90A3\u4E48\u53EA\u6709 A \u5904\u7684 TPS \u4F1A\u6389\u5230 10 \u4EE5\u4E0B\uFF0CB\uFF0CC\uFF0CD \u7684 TPS \u4ECD\u7136\u4E0D\u53D7\u5F71\u54CD"}),"\n",(0,l.jsx)(i.p,{children:"\u5E76\u4E14 Folia \u53EF\u4EE5\u66F4\u597D\u7684\u5229\u7528 CPU \u591A\u6838"}),"\n",(0,l.jsx)(i.h3,{id:"\u574F\u5904",children:"\u574F\u5904"}),"\n",(0,l.jsx)(i.p,{children:"Folia \u5B8C\u5168\u7834\u574F\u4E86 Bukkit \u63D2\u4EF6\u7684\u517C\u5BB9\u6027\uFF0C\u6BCF\u4E2A Bukkit \u63D2\u4EF6\u90FD\u5FC5\u987B\u4E3A Folia \u505A\u517C\u5BB9(\u6709\u4E13\u95E8\u7684 Fork \u4E3A Folia \u505A Bukkit \u63D2\u4EF6\u517C\u5BB9\uFF0C\u540E\u9762\u4F1A\u8BB2)\uFF0C\u6240\u4EE5\uFF0CFolia \u76EE\u524D\u53EA\u652F\u6301\u5F88\u5C11\u63D2\u4EF6"}),"\n",(0,l.jsx)(i.h2,{id:"\u8981\u6C42",children:"\u8981\u6C42"}),"\n",(0,l.jsx)(i.p,{children:"Folia \u8FD9\u4E48\u597D\uFF0C\u4F46\u5E76\u4E0D\u662F\u6BCF\u4E2A\u670D\u52A1\u5668\u90FD\u53EF\u4EE5\u4F53\u9A8C\u7684\uFF0C\u4F60\u9700\u8981\u786E\u4FDD\u4F60\u7684\u670D\u52A1\u5668\u7B26\u5408\u4EE5\u4E0B\u6761\u4EF6\uFF0C\u8FD9\u6837\u624D\u53EF\u4EE5\u4ECE Folia \u4E2D\u53D7\u76CA"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["16\u4E2A",(0,l.jsx)(i.strong,{children:"\u7269\u7406"}),"CPU\u6838\u5FC3"]}),"\n",(0,l.jsx)(i.li,{children:"\u73A9\u5BB6\u8F83\u4E3A\u5206\u6563(\u751F\u5B58\u591A\u4EBA\u6E38\u620F\u3001\u65E0\u653F\u5E9C\u3001\u7A7A\u5C9B\u6216\u4E00\u4E9B\u8FF7\u4F60\u6E38\u620F\u670D\u52A1\u5668)"}),"\n",(0,l.jsx)(i.li,{children:"\u4F60\u9700\u8981\u7684\u63D2\u4EF6\u652F\u6301 Folia"}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"\u5982\u679C\u4F60\u4E0D\u7B26\u5408\uFF0C\u53BB\u7528 Leaf \u5427\uFF0C\u7B26\u5408\u7684\u8BDD\u7EE7\u7EED\u770B\u4E0B\u53BB!"}),"\n",(0,l.jsx)(i.h2,{id:"\u9009\u62E9",children:"\u9009\u62E9"}),"\n",(0,l.jsx)(i.p,{children:"Folia \u6709\u8BB8\u591A\u5206\u652F,\u4F60\u53EF\u80FD\u4E0D\u77E5\u9053\u600E\u4E48\u9009,\u6709\u4E2A\u7B80\u5355\u7684\u529E\u6CD5:"}),"\n",(0,l.jsx)(i.mermaid,{value:"flowchart TD\n    A[Folia]\n    A --\x3e B[\u5FEB\u901F\u5347\u5230\u9AD8\u7248\u672C]\n    A --\x3e C[\u6027\u80FD,\u7A33\u5B9A\u6027\u548C\u529F\u80FD]\n    A --\x3e D[\u63D2\u4EF6\u517C\u5BB9\u6027]\n    B --\x3e DeerFolia\n    C --\x3e E[1.20.4+] --\x3e Luminol\n    C --\x3e F[1.20/2] --\x3e Molia\n    C --\x3e G[1.19.3/4] --\x3e Kaiiju\n    D --\x3e 1.20.4+ --\x3e LightingLuminol\n    D --\x3e 1.20/2 --\x3e DirtyMolia\n    D --\x3e 1.19.3/4 --\x3e DirtyFolia"}),"\n",(0,l.jsx)(i.p,{children:"\u6839\u636E\u8FD9\u5F20\u56FE\u8868\u9009\u597D\u540E\u53BB\u4E0B\u8F7D\u5C31\u53EF\u4EE5\u4E86"})]})}function h(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},79938:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return t}});var r=n(75271);let l={},o=r.createContext(l);function t(e){let i=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);