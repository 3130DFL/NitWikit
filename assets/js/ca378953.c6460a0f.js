"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[6700],{39074:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=r(86070),t=r(16247);const s={title:"\u63d2\u4ef6\u6392\u6bd2",sidebar_position:5},l="\u63d2\u4ef6\u6392\u6bd2",c={id:"process/plugin/plugin-backdoor",title:"\u63d2\u4ef6\u6392\u6bd2",description:"\u6709\u4e9b\u65f6\u5019\uff0c\u5f53\u4f60\u4ece\u4e00\u4e9b\u4e0d\u53ef\u4fe1\u7684\u6765\u6e90\u83b7\u5f97\u63d2\u4ef6\uff08\u6bd4\u5982\u95f2\u9c7c\uff09\u7684\u65f6\u5019,\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u5bf9\u63d2\u4ef6\u8fdb\u884c\u626b\u63cf\u6392\u9664\u6f5c\u5728\u5a01\u80c1,\u6216\u8005\u4f60\u53d1\u73b0\u4f60\u7684\u670d\u52a1\u5668\u83ab\u540d\u5176\u5999\u7684\u591a\u51fa\u4e86\u51e0\u4e2aOP,\u4f60\u4e5f\u9700\u8981\u5bf9\u73b0\u6709\u63d2\u4ef6\u8fdb\u884c\u626b\u63cf",source:"@site/docs-java/process/plugin/plugin-backdoor.md",sourceDirName:"process/plugin",slug:"/process/plugin/plugin-backdoor",permalink:"/NitWikit/Java/process/plugin/plugin-backdoor",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/plugin/plugin-backdoor.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:172691825e4,sidebarPosition:5,frontMatter:{title:"\u63d2\u4ef6\u6392\u6bd2",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ProtocolLib",permalink:"/NitWikit/Java/process/plugin/Front-Plugin/ProtocolLib"},next:{title:"\u7ba1\u7406\u7c7b\u63d2\u4ef6",permalink:"/NitWikit/Java/ManageTool"}},o={},d=[{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u63a7\u5236\u53f0\u6a21\u5f0f",id:"\u63a7\u5236\u53f0\u6a21\u5f0f",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:3},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:3},{value:"\u4e13\u5bb6\u6a21\u5f0f",id:"\u4e13\u5bb6\u6a21\u5f0f",level:3},{value:"\u63d2\u4ef6\u6a21\u5f0f",id:"\u63d2\u4ef6\u6a21\u5f0f",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u63d2\u4ef6\u6392\u6bd2",children:"\u63d2\u4ef6\u6392\u6bd2"})}),"\n",(0,i.jsx)(n.p,{children:"\u6709\u4e9b\u65f6\u5019\uff0c\u5f53\u4f60\u4ece\u4e00\u4e9b\u4e0d\u53ef\u4fe1\u7684\u6765\u6e90\u83b7\u5f97\u63d2\u4ef6\uff08\u6bd4\u5982\u95f2\u9c7c\uff09\u7684\u65f6\u5019,\u8fd9\u4e2a\u65f6\u5019\u5c31\u9700\u8981\u5bf9\u63d2\u4ef6\u8fdb\u884c\u626b\u63cf\u6392\u9664\u6f5c\u5728\u5a01\u80c1,\u6216\u8005\u4f60\u53d1\u73b0\u4f60\u7684\u670d\u52a1\u5668\u83ab\u540d\u5176\u5999\u7684\u591a\u51fa\u4e86\u51e0\u4e2aOP,\u4f60\u4e5f\u9700\u8981\u5bf9\u73b0\u6709\u63d2\u4ef6\u8fdb\u884c\u626b\u63cf"}),"\n",(0,i.jsx)(n.p,{children:"McGuard \u53ef\u4ee5\u5728\u4e0d\u542f\u52a8\u670d\u52a1\u5668\u7684\u60c5\u51b5\u4e0b\u5bf9\u670d\u52a1\u7aef\u4e2d\u7684\u5168\u90e8\u63d2\u4ef6\u8fdb\u884c\u626b\u63cf\uff0c\u5e76\u627e\u51fa\u6f5c\u5728\u7684\u6076\u610f\u63d2\u4ef6\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,i.jsxs)(n.p,{children:["\u70b9\u51fb",(0,i.jsx)(n.a,{href:"https://cd.starkettle.com/MCG.jar",children:"\u6b64"})," \u4e0b\u8f7d\u5230\u670d\u52a1\u7aef\u6839\u76ee\u5f55\u5373\u53ef"]}),"\n",(0,i.jsx)(n.h2,{id:"\u63a7\u5236\u53f0\u6a21\u5f0f",children:"\u63a7\u5236\u53f0\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5f00 cmd,\u5728\u670d\u52a1\u7aef\u6839\u76ee\u5f55\u8fd0\u884c",(0,i.jsx)(n.code,{children:"java -Xmx1G -jar MCG.jar"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5f53MCG\u63a7\u5236\u53f0\u6a21\u5f0f\u5b8c\u6210\u542f\u52a8\u540e\uff0c\u4f60\u5c06\u89c1\u5230\u4ee5\u4e0b\u5b57\u6837\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[McGuard] \u611f\u8c22\u60a8\u4f7f\u7528McGuard\uff01\nMCGuard v-b0/r0 Author: huzpsb\n\u8bf7\u9009\u62e9\u6a21\u5f0f(0-\u6807\u51c6\u6a21\u5f0f 1-\u4e13\u5bb6\u6a21\u5f0f 2-\u5f00\u53d1\u8005\u6a21\u5f0f)\uff1a\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u76ee\u524d,\u4f60\u53ea\u9700\u8981\u9009\u62e91\u5373\u53ef,\u4e13\u5bb6\u6a21\u5f0f\u4f1a\u5728\u540e\u9762\u63d0\u5230"}),"\n",(0,i.jsx)(n.h3,{id:"\u7ed3\u679c",children:"\u7ed3\u679c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[\u63d0\u793a] \u6b63\u5728\u626b\u63cf MCG.jar ................\n[\u63d0\u793a] \u6b63\u5728\u626b\u63cf Vault.jar ................\n[\u63d0\u793a] \u6b63\u5728\u626b\u63cf [C]\u5b89\u5168\u6d4b\u8bd5_CoRE.jar ................\n\n---------------------------------------------------------\n[\u7ed3\u679c\u5c55\u793a][C]\u5b89\u5168\u6d4b\u8bd5_CoRE.jar\n[\u4e25\u91cd] a/x.class \u5f88\u6709\u53ef\u80fd\u5b58\u5728\u83b7\u53d6OP\u7c7b\u540e\u95e8 (r:set-only)\u3002\n[\u4e25\u91cd] a/x.class \u5f88\u6709\u53ef\u80fd\u5b58\u5728\u8fdc\u7a0b\u547d\u4ee4\u7c7b\u540e\u95e8 (r:processbuilder)\u3002\n\u626b\u63cf\u5b8c\u6210\uff01\u8bf7\u6309\u4efb\u610f\u952e\u9000\u51fa\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u672a\u68c0\u51fa\u5f02\u5e38\u7684\u63d2\u4ef6\uff0cMCG\u4e0d\u4f1a\u8f93\u51fa\u201c\u7ed3\u679c\u5c55\u793a\u201d\u5757\u3002\u4f8b\u5982\uff0c\u4e0a\u6587\u4e2d\u7684MCG.jar\u548cVault.jar\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5bf9\u4e8e\u5b58\u5728\u5f02\u5e38\u7684\u63d2\u4ef6\uff0cMCG\u4f1a\u8f93\u51fa\u201c\u7ed3\u679c\u5c55\u793a\u201d\u5757\u3002\u5e76\u7ed9\u51fa\u5f02\u5e38\u7684\u5177\u4f53\u63cf\u8ff0\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f\uff0cMCG\u4e0d\u4f1a\u5bf9\u63d2\u4ef6\u8fdb\u884c\u4fee\u6539\uff0c\u4e5f\u4e0d\u4f1a\u5bf9\u63d2\u4ef6\u8fdb\u884c\u5220\u9664\u3002\u4f60\u9700\u8981\u624b\u52a8\u5220\u9664\u5f02\u5e38\u63d2\u4ef6"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4e13\u5bb6\u6a21\u5f0f",children:"\u4e13\u5bb6\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"\u4f1a\u4f7f\u7528\u5185\u7f6e\u7684\u5df2\u77e5\u6076\u610f\u4ee3\u7801\u5bf9\u63d2\u4ef6\u8fdb\u884c\u5339\u914d\u5e76\u4f7f\u7528\u67d0\u4e9b\u89c4\u5219\u5206\u6790\u4ee3\u7801\u7684\u610f\u56fe\uff0c\u80fd\u591f\u68c0\u51fa\u7edd\u5927\u591a\u6570\u5e38\u89c1\u7684\u4e0e\u6ca1\u6709\u6545\u610f\u89c4\u907f\u626b\u63cf\u7684\u6076\u610f\u63d2\u4ef6\u3002\u5b58\u5728\u4e00\u5b9a\u7684\u8bef\u62a5\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u63d2\u4ef6\u6a21\u5f0f",children:"\u63d2\u4ef6\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.p,{children:"MCG\u7684\u63d2\u4ef6\u6a21\u5f0f\u662f\u4e00\u4e2aBukkit/Spigot\u670d\u52a1\u7aef\u63d2\u4ef6\u3002\u5b83\u53ef\u4ee5\u5728\u670d\u52a1\u5668\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u6301\u7eed\u7684\u4fdd\u62a4\uff0c\u51cf\u5c11\u6f0f\u7f51\u4e4b\u9c7c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u8bf7\u6ce8\u610f\uff0c\u63d2\u4ef6\u6a21\u5f0f\u7684\u5b89\u5168\u662f\u76f8\u5bf9\u7684\u3002\u53ef\u80fd\u5b58\u5728\u6781\u5c11\u6570\u6076\u610f\u63d2\u4ef6\u80fd\u591f\u7a81\u7834MCG\u7684\u884c\u4e3a\u7ba1\u63a7\u3002\u4e0d\u8981\u8fd0\u884c\u5b58\u5728\u5df2\u77e5\u6076\u610f\u63d2\u4ef6\u7684\u670d\u52a1\u7aef\uff0c\u54ea\u6015\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86MCG\uff01"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5728\u8fd0\u884c\u6765\u6e90\u672a\u77e5\u670d\u52a1\u7aef\u524d\uff0c\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u5148\u4f7f\u7528MCG\u7684\u63a7\u5236\u53f0\u6a21\u5f0f\u8fdb\u884c\u626b\u63cf\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a\u865a\u62df\u5316\uff08Sandboxie\u7b49\uff09\u7684\u73af\u5883\uff01"})}),"\n",(0,i.jsxs)(n.p,{children:["\u66f4\u8be6\u7ec6\u7684\u6559\u7a0b\u548cPro\u7248\u672c\u7684\u8d2d\u4e70\u8bf7",(0,i.jsx)(n.a,{href:"https://starkettle.com/mcg/",children:"\u70b9\u51fb"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},16247:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var i=r(30758);const t={},s=i.createContext(t);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);