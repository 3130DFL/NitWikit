"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3766],{54786:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=t(74848),s=t(28453);const a={title:"\u81ea\u52a8\u66f4\u65b0",sidebar_position:2},r="\u81ea\u52a8\u66f4\u65b0",o={id:"process/plugin/game/Slimefun/AutoUpdate",title:"\u81ea\u52a8\u66f4\u65b0",description:"1.\u4fee\u6539\u9644\u5c5e\u7684\u914d\u7f6e",source:"@site/docs-java/process/plugin/game/Slimefun/AutoUpdate.md",sourceDirName:"process/plugin/game/Slimefun",slug:"/process/plugin/game/Slimefun/AutoUpdate",permalink:"/NitWikit/Java/process/plugin/game/Slimefun/AutoUpdate",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/plugin/game/Slimefun/AutoUpdate.md",tags:[],version:"current",lastUpdatedBy:"lilingfeng",lastUpdatedAt:1723520541e3,sidebarPosition:2,frontMatter:{title:"\u81ea\u52a8\u66f4\u65b0",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7c98\u6db2\u79d1\u6280",permalink:"/NitWikit/Java/Slimefun"},next:{title:"\u7c98\u6db2\u8d44\u6e90\u5305",permalink:"/NitWikit/Java/process/plugin/game/Slimefun/ResourcePackForSlimefun"}},l={},u=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u81ea\u52a8\u66f4\u65b0",children:"\u81ea\u52a8\u66f4\u65b0"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1.\u4fee\u6539\u9644\u5c5e\u7684\u914d\u7f6e"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06",(0,i.jsx)(n.strong,{children:"\u6240\u6709\u9644\u5c5e\u63d2\u4ef6"}),"\u7684\u66f4\u65b0\u5173\u95ed"]}),"\n",(0,i.jsx)(n.p,{children:"\u4ee5 Bump \u9644\u5c5e\u4e3a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"options:\n  auto-update: false\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c06 auto-update \u8bbe\u7f6e\u4e3a false"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2.\u5b89\u88c5 GuizhanLibPlugin \u63d2\u4ef6"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5730\u5740\uff1a",(0,i.jsx)(n.a,{href:"https://builds.guizhanss.com/ybw0014/GuizhanLibPlugin/master",children:"https://builds.guizhanss.com/ybw0014/GuizhanLibPlugin/master"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3.\u4fee\u6539 GuizhanLibPlugin \u7684\u66f4\u65b0\u914d\u7f6e"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c06 auto-update \u8bbe\u7f6e\u4e3a true"}),"\n",(0,i.jsx)(n.p,{children:"\u5c06 location \u8bbe\u7f6e\u4e3a cn"}),"\n",(0,i.jsx)(n.p,{children:"\uff08\u5efa\u8bae\uff09\u5c06 lang \u8bbe\u7f6e\u4e3a zh_CN"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u65b9\u914d\u7f6e\u4f9b\u4f60\u53c2\u8003"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# Whether to enable auto update module (see updater.yml for details)\n# \u662f\u5426\u5f00\u542f\u81ea\u52a8\u66f4\u65b0\u6a21\u5757\uff08\u8be6\u89c1 updater.yml\uff09\nauto-update: true\n\n# Universal Updater Settings\n# \u7edf\u4e00\u66f4\u65b0\u8bbe\u7f6e\nupdater:\n\n  # The website used for auto update\n  # \u81ea\u52a8\u66f4\u65b0\u6240\u4f7f\u7528\u7684\u670d\u52a1\u5668\n  # Available options: global, cn\n  # \u53ef\u7528\u9009\u9879: global, cn\n  # global - (Default) The website is deployed by Cloudflare Pages. https://builds.guizhanss.com/\n  # global - \uff08\u9ed8\u8ba4\uff09\u4f7f\u7528 Cloudflare Pages \u90e8\u7f72\u5230\u5168\u7403\u8303\u56f4\u7684\u7ad9\u70b9\u3002 https://builds.guizhanss.com/\n  # cn - The website is a mirror website deployed by Tencent Cloud in China mainland. https://builds.guizhanss.cn/\n  # cn - \u5728\u4e2d\u56fd\u5927\u9646\u4f7f\u7528\u817e\u8baf\u4e91\u642d\u5efa\u7684\u955c\u50cf\u7ad9\u70b9\u3002 https://builds.guizhanss.cn/\n  location: cn\n\n  # en_US, zh_CN\n  lang: zh_CN\n\n# Whether to print debug messages in console.\n# \u662f\u5426\u5728\u63a7\u5236\u53f0\u8f93\u51fa\u8c03\u8bd5\u4fe1\u606f\u3002\ndebug: false\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);