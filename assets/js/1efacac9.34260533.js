"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[598],{16492:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var s=i(96942),c=i(99832);const t={title:"Legacy Script Engine\uff08LSE\uff09",sidebar_position:2},r="Legacy Script Engine\uff08LSE\uff09",l={id:"bds-core/process/LeviLamina/legacy-script-engine",title:"Legacy Script Engine\uff08LSE\uff09",description:"\u4ec0\u4e48\u662f Legacy Script Engine",source:"@site/docs-bedrock/bds-core/process/LeviLamina/legacy-script-engine.md",sourceDirName:"bds-core/process/LeviLamina",slug:"/bds-core/process/LeviLamina/legacy-script-engine",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/legacy-script-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/process/LeviLamina/legacy-script-engine.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1724562456e3,sidebarPosition:2,frontMatter:{title:"Legacy Script Engine\uff08LSE\uff09",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u5b89\u88c5\u6559\u7a0b",permalink:"/NitWikit/Bedrock/bds-core/process/LeviLamina/LeviLamina-Plugins"},next:{title:"LiteLoaderBDS",permalink:"/NitWikit/Bedrock/bds-core/process/LiteLoaderBDS/"}},a={},o=[{value:"\u4ec0\u4e48\u662f Legacy Script Engine",id:"\u4ec0\u4e48\u662f-legacy-script-engine",level:2},{value:"\u63d2\u4ef6\u5185\u5bb9",id:"\u63d2\u4ef6\u5185\u5bb9",level:2},{value:"\u5b89\u88c5\u65b9\u6cd5",id:"\u5b89\u88c5\u65b9\u6cd5",level:2},{value:"\u4f7f\u7528 Lip \u5b89\u88c5",id:"\u4f7f\u7528-lip-\u5b89\u88c5",level:3},{value:"\u624b\u52a8\u5b89\u88c5",id:"\u624b\u52a8\u5b89\u88c5",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"legacy-script-enginelse",children:"Legacy Script Engine\uff08LSE\uff09"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f-legacy-script-engine",children:"\u4ec0\u4e48\u662f Legacy Script Engine"}),"\n",(0,s.jsx)(n.p,{children:"Legacy Script Engine \u7b80\u79f0 LSE\uff0c\u662f LeviLamina \u4e0a\u7684\u4e00\u7cfb\u5217\u63d2\u4ef6\uff0c\u88ab\u7528\u4f5c LiteLoader Scipt Engine\uff08LLSE\uff09\u5230 LeviScript\uff08LS\uff09\u7684\u8fc7\u6e21\u3002LSE \u7684\u4e00\u4e9b\u7279\u6027\u4e0e LLSE \u76f8\u540c\uff0c\u4f60\u53ef\u4ee5\u9605\u8bfb LLSE \u6765\u4e86\u89e3\u8be5\u63d2\u4ef6\u7684\u7279\u70b9\u3002\u4ee5\u4e0b\u662f\u8fd9\u4e24\u4e2a\u63d2\u4ef6\u7684\u4e0d\u540c\u4e4b\u5904\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"LSE \u53ea\u80fd\u5728 LeviLamina \u4e0a\u8fd0\u884c\uff0cLLSE \u53ea\u80fd\u5728 LiteLoader \u4e0a\u8fd0\u884c"}),"\n",(0,s.jsx)(n.li,{children:"LSE \u7684\u63d2\u4ef6\u683c\u5f0f\u4e0e LLSE \u4e0d\u540c\u3002\u8981\u60f3\u8ba9 LSE \u8fd0\u884c LLSE \u63d2\u4ef6\uff0c\u9700\u8981 LSE \u81ea\u52a8\u6216\u670d\u4e3b\u624b\u52a8\u8fdb\u884c\u683c\u5f0f\u8f6c\u6362\u3002"}),"\n",(0,s.jsx)(n.li,{children:"LSE \u867d\u7136\u662f LeviLamina \u5f00\u53d1\u8ba1\u5212\u7684\u4e00\u90e8\u5206\uff0c\u4f46\u662f\u5b83\u88ab\u8bbe\u8ba1\u4f5c\u4e3a\u53ef\u9009\u6a21\u5757\uff0c\u9700\u8981\u670d\u4e3b\u989d\u5916\u5b89\u88c5\u3002\u800c LLSE \u5219\u662f\u96c6\u6210\u5728 LiteLoaderBDS \u4e2d\uff0c\u5b89\u88c5 LiteLoaderBDS \u7684\u8fc7\u7a0b\u4e2d\u5373\u5b89\u88c5\u5b8c\u6bd5\uff0c\u4e0d\u9700\u8981\u989d\u5916\u5b89\u88c5\u3002"}),"\n",(0,s.jsx)(n.li,{children:"LSE \u7684 python \u811a\u672c\u5f15\u64ce legacy-script-engine-python \u4e0e\u7cfb\u7edf\u4e2d\u7684 python \u89e3\u91ca\u5668\u51b2\u7a81\u3002"}),"\n",(0,s.jsx)(n.li,{children:"LSE \u7684\u66f4\u65b0\u4ec5\u63d0\u4f9b\u7248\u672c\u9002\u914d\u548c\u9519\u8bef\u4fee\u590d\uff0c\u4e0d\u4f1a\u66f4\u65b0\u65b0\u7684 API \u7b49\u529f\u80fd\uff0c\u4e5f\u4e0d\u53d7\u7406\u4efb\u4f55\u76f8\u5173\u5efa\u8bae\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u63d2\u4ef6\u5185\u5bb9",children:"\u63d2\u4ef6\u5185\u5bb9"}),"\n",(0,s.jsx)(n.p,{children:"\u76ee\u524d\u5bf9 LSE \u63d0\u4f9b\u652f\u6301\u7684\u63d2\u4ef6\u5982\u4e0b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LegacyMoney"})," \uff1a\u7528\u4e8e\u4e3a LSE \u63d2\u4ef6\u63d0\u4f9b\u7ecf\u6d4e API \u76f8\u5173\u529f\u80fd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LegacyParticleAPI"})," \uff1a\u7528\u4e8e\u4e3a LSE \u63d2\u4ef6\u63d0\u4f9b ParticleAPI \u76f8\u5173\u529f\u80fd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"LegacyRemoteCall"})," \uff1a \u7528\u4e8e\u4e3a LSE \u63d2\u4ef6\u63d0\u4f9b\u63d2\u4ef6\u95f4\u76f8\u4e92\u8c03\u7528\u529f\u80fd"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"legacy-script-engine-lua"})," \uff1a\u7528\u4e8e\u52a0\u8f7d\u548c\u8fd0\u884c lua \u63d2\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"legacy-script-engine-quickjs"})," \uff1a\u7528\u4e8e\u52a0\u8f7d\u548c\u8fd0\u884c\u5355\u6587\u4ef6 js \u63d2\u4ef6\uff08quickjs \u63d2\u4ef6\uff09"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"legacy-script-engine-nodejs"})," \uff1a\u7528\u4e8e\u52a0\u8f7d\u548c\u8fd0\u884c nodejs \u63d2\u4ef6"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"legacy-script-engine-python"})," \uff1a\u7528\u4e8e\u52a0\u8f7d\u548c\u8fd0\u884c python \u63d2\u4ef6\uff0c",(0,s.jsx)(n.strong,{children:"\u548c\u7cfb\u7edf\u4e2d\u7684 python \u89e3\u91ca\u5668\u51b2\u7a81"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u5176\u4e2d LegacyMoney\u3001LegacyParticleAPI\u3001LegacyRemoteCall \u51e0\u4e4e\u662f\u5fc5\u987b\u5b89\u88c5\u7684\uff0c\u56e0\u4e3a\u5f88\u591a\u63d2\u4ef6\u90fd\u4f9d\u8d56\u8fd9\u4e9b\u63d2\u4ef6\u8fd0\u884c\u3002\u5176\u4ed6\u56db\u4e2a\u7528\u4e8e\u52a0\u8f7d\u4e0d\u540c\u79cd\u7c7b LSE \u63d2\u4ef6\u7684\u53ef\u4ee5\u6839\u636e\u670d\u52a1\u5668\u6240\u7528\u5230\u7684\u63d2\u4ef6\u7684\u7c7b\u578b\u8fdb\u884c\u5b89\u88c5\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5\u65b9\u6cd5",children:(0,s.jsx)(n.a,{href:"https://lse.liteldev.com/zh/",children:"\u5b89\u88c5\u65b9\u6cd5"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4f7f\u7528-lip-\u5b89\u88c5",children:"\u4f7f\u7528 Lip \u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u975e\u5e38\u63a8\u8350\u4f7f\u7528 Lip \u5b89\u88c5\u3002\u624b\u52a8\u5b89\u88c5 LSE \u7684\u8fc7\u7a0b\u6781\u5176\u590d\u6742\u7e41\u7410"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u6b21\u6027\u5b89\u88c5 QuickJS \u548c Lua \u5f15\u64ce"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"lip install github.com/LiteLDev/LegacyScriptEngine\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5 nodejs \u5f15\u64ce"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"lip install gitea.litebds.com/LiteLDev/legacy-script-engine-nodejs\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5 python \u5f15\u64ce"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"lip install gitea.litebds.com/LiteLDev/legacy-script-engine-python\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["\u7531\u4e8e legacy-script-engine-python \u4e0e\u7cfb\u7edf\u4e2d\u7684 python \u89e3\u91ca\u5668\u51b2\u7a81\uff0c\u5b89\u88c5\u65f6\u4f60\u9700\u8981\u786e\u4fdd\u7cfb\u7edf\u4e2d\u6ca1\u6709 python \u89e3\u91ca\u5668\u3002\u5982\u679c\u7cfb\u7edf\u4e2d\u5df2\u5b89\u88c5 python \u89e3\u91ca\u5668\uff0c\u4f60\u9700\u8981\u5c06\u5176",(0,s.jsx)(n.strong,{children:"\u5f7b\u5e95\u5378\u8f7d"})," \u3002\u5982\u679c\u4f60\u5fc5\u987b\u4f7f\u7528\u7cfb\u7edf\u4e2d\u7684 python \u89e3\u91ca\u5668\uff0c\u4f60\u53ea\u80fd\u653e\u5f03\u6240\u6709\u7684 python \u63d2\u4ef6\u3002"]})}),"\n",(0,s.jsx)(n.h3,{id:"\u624b\u52a8\u5b89\u88c5",children:"\u624b\u52a8\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u624b\u52a8\u5b89\u88c5\u8981\u88c5\u4e00\u5927\u5806\u63d2\u4ef6\uff0c\u6211\u8fd8\u6ca1\u8bd5\u8fc7\uff0c\u6559\u7a0b\u6c42\u5927\u4f6c\u8865\u5145qaq"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},99832:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(750);const c={},t=s.createContext(c);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);