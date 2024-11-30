"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["9128"],{80420:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>d,default:()=>t,assets:()=>o,toc:()=>h,frontMatter:()=>c});var r=JSON.parse('{"id":"bds-core/start/basic/server-file-structure","title":"\u670D\u52A1\u7AEF\u7ED3\u6784","description":"\u6211\u4EEC\u5148\u6765\u7B80\u5355\u770B\u4E00\u773C BDS \u5F00\u670D\u540E \u7684\u6587\u4EF6\u5939\u7ED3\u6784\uFF1A","source":"@site/docs-bedrock/bds-core/start/basic/server-file-structure.md","sourceDirName":"bds-core/start/basic","slug":"/bds-core/start/basic/server-file-structure","permalink":"/Bedrock/bds-core/start/basic/server-file-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-bedrock/bds-core/start/basic/server-file-structure.md","tags":[],"version":"current","lastUpdatedBy":"lilingfengdev","lastUpdatedAt":1732439466000,"sidebarPosition":1,"frontMatter":{"title":"\u670D\u52A1\u7AEF\u7ED3\u6784","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u57FA\u7840\u77E5\u8BC6","permalink":"/Bedrock/bds-core/start/basic/"},"next":{"title":"\u5EFA\u8BBE\u9636\u6BB5","permalink":"/Bedrock/bds-core/process/"}}'),l=s("52676"),i=s("79938");let c={title:"\u670D\u52A1\u7AEF\u7ED3\u6784",sidebar_position:1},d="\u670D\u52A1\u7AEF\u7ED3\u6784",o={},h=[{value:"\u6839\u76EE\u5F55\u4E0B\u7684\u4E00\u4E9B\u6587\u4EF6",id:"\u6839\u76EE\u5F55\u4E0B\u7684\u4E00\u4E9B\u6587\u4EF6",level:2}];function x(n){let e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components},{Details:s}=e;return!s&&function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u670D\u52A1\u7AEF\u7ED3\u6784",children:"\u670D\u52A1\u7AEF\u7ED3\u6784"})}),"\n",(0,l.jsxs)(e.p,{children:["\u6211\u4EEC\u5148\u6765\u7B80\u5355\u770B\u4E00\u773C BDS ",(0,l.jsx)(e.strong,{children:"\u5F00\u670D\u540E"})," \u7684\u6587\u4EF6\u5939\u7ED3\u6784\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-c",children:"BDS\u670D\u52A1\u7AEF\u6587\u4EF6\u5939\n\u251C\u2500behavior_packs                  // \u5B89\u88C5\u65B0\u884C\u4E3A\u5305\u7684\u6587\u4EF6\u5939\n\u251C\u2500config                          // \u6CA1\u5565\u7528\n\u251C\u2500definitions                     // \u8C8C\u4F3C\u662F\u751F\u6210\u7FA4\u7CFB\u7684\u5185\u5BB9\n\u251C\u2500development_behavior_packs      // \u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u5B89\u88C5\u65B0\u884C\u4E3A\u5305\u7684\u6587\u4EF6\u5939\n\u251C\u2500development_resource_packs      // \u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u5B89\u88C5\u65B0\u8D44\u6E90\u5305\u7684\u6587\u4EF6\u5939\n\u251C\u2500development_skin_packs          // \u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u5B89\u88C5\u65B0\u76AE\u80A4\u5305\u7684\u6587\u4EF6\u5939\n\u251C\u2500resource_packs                  // \u5B89\u88C5\u65B0\u8D44\u6E90\u5305\u7684\u6587\u4EF6\u5939\n\u251C\u2500world-templates                 // \u4E16\u754C\u6A21\u677F\n\u251C\u2500worlds                          // \u4E3B\u4E16\u754C\u6587\u4EF6\u5939\n\u2502  \u2514\u2500Bedrock level                // \u4E16\u754C\u5B58\u6863\n\u2502    \u251C\u2500db                         // \u5B58\u6863\u6570\u636E\u6587\u4EF6\u5939\n\u2502    \u251C\u2500level_dat                  // \u5B58\u6863\u8BBE\u5B9A\n\u2502    \u251C\u2500level.dat_old              // \u5B58\u6863\u8BBE\u5B9A(\u65E7)\n\u2502    \u2514\u2500level_name.txt             // \u5B58\u6863\u540D\u79F0\n\u251C\u2500allowlist.json                  // \u767D\u540D\u5355\u6587\u4EF6\n\u251C\u2500bedrock_server.exe              // \u670D\u52A1\u7AEF\u542F\u52A8\u7A0B\u5E8F\n\u251C\u2500bedrock_server.pdb              // \u7A0B\u5E8F\u6570\u636E\u5E93\u6587\u4EF6\n\u251C\u2500bedrock_server_how_to.html      // \u5982\u4F55\u4F7F\u7528BDS\u670D\u52A1\u5668\u7684\u5B98\u65B9\u6307\u5357(\u6CA1\u591A\u5927\u7528\u5904\uFF0C\u770B\u770B\u5C31\u884C)\n\u251C\u2500permissions.json                // \u7BA1\u7406\u5458(OP)\u73A9\u5BB6\u76F8\u5173\u6570\u636E\n\u251C\u2500release-notes.txt               // \u670D\u52A1\u7AEF\u53D1\u884C\u7248\u672C\u8BE6\u60C5\n\u251C\u2500server.properties               // \u914D\u7F6E\u6587\u4EF6\n\u2514\u2500valid_known_packs.json          // \u5DF2\u77E5\u7684\u9644\u52A0\u5305\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6839\u76EE\u5F55\u4E0B\u7684\u4E00\u4E9B\u6587\u4EF6",children:"\u6839\u76EE\u5F55\u4E0B\u7684\u4E00\u4E9B\u6587\u4EF6"}),"\n",(0,l.jsxs)(e.admonition,{type:"warning",children:[(0,l.jsxs)(e.p,{children:["\u8BF7\u4E0D\u8981\u8BA9\u4F60\u7684\u670D\u52A1\u7AEF\u7ED3\u6784\u4E0E\u6587\u6863\u89E3\u8BF4\u7ED3\u6784\u6709\u4EFB\u4F55\u7684 ",(0,l.jsx)(e.strong,{children:"\u7F3A\u5C11"}),"\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0 ",(0,l.jsx)(e.strong,{children:"\u7384\u5B66\u95EE\u9898"})]}),(0,l.jsxs)(e.p,{children:["\u82E5\u4F60 ",(0,l.jsx)(e.strong,{children:"\u4E00\u81F4\u8BA4\u4E3A"})," \u6709\u53EF\u5220\u4E4B\u5904\uFF0C\u90A3\u4E48\u4EE5\u4E0B\u662F ",(0,l.jsx)(e.strong,{children:"\u7EDD\u5BF9\u53EF\u4EE5\u5220"})," \u7684\u670D\u52A1\u7AEF\u7ED3\u6784(\u53CD\u6B63\u6BCF\u6B21\u5F00\u670D\u90FD\u4F1A\u68C0\u6D4B\u662F\u5426\u6709\u8FD9\u4E9B\u6587\u4EF6\u5939\uFF0C\u5982\u679C\u6CA1\u6709\u8FD8\u662F\u4F1A\u521B\u5EFA\u7684)"]}),(0,l.jsxs)(s,{children:[(0,l.jsx)("summary",{children:"\u70B9\u51FB\u5C55\u5F00"}),(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"config"})}),"\n",(0,l.jsx)(e.li,{children:"development_behavior_packs"}),"\n",(0,l.jsx)(e.li,{children:"development_resource_packs"}),"\n",(0,l.jsx)(e.li,{children:"development_skin_packs"}),"\n",(0,l.jsx)(e.li,{children:"world-templates"}),"\n",(0,l.jsx)(e.li,{children:"bedrock_server_how_to.html(\u8FD9\u4E2A\u4E0D\u4F1A\u81EA\u5DF1\u521B\u5EFA)"}),"\n",(0,l.jsx)(e.li,{children:"release-notes.txt(\u8FD9\u4E2A\u4E0D\u4F1A\u81EA\u5DF1\u521B\u5EFA)"}),"\n",(0,l.jsx)(e.li,{children:"valid_known_packs.json"}),"\n"]})]})]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"behavior_packs"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7528\u4E8E\u5B89\u88C5\u65B0\u7684\u884C\u4E3A\u5305\u3002\u884C\u4E3A\u5305\u53EF\u4EE5\u6539\u53D8\u6E38\u620F\u4E2D\u7684\u67D0\u4E9B\u884C\u4E3A\uFF0C\u4F8B\u5982\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u4FEE\u6539\u602A\u7269\u884C\u4E3A\u3001\u6E38\u620F\u89C4\u5219\u6216\u6DFB\u52A0\u65B0\u7684\u6E38\u620F\u673A\u5236\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"config"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8FD9\u4E2A\u6587\u4EF6\u5939\u901A\u5E38\u7528\u4E8E\u5B58\u50A8\u670D\u52A1\u5668\u7684\u914D\u7F6E\u6587\u4EF6\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"definitions"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u8FD9\u4E2A\u6587\u4EF6\u5939\u5305\u542B\u5B9A\u4E49\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u6587\u4EF6\u901A\u5E38\u7528\u4E8E\u5B9A\u4E49\u6E38\u620F\u4E2D\u7684\u7FA4\u7CFB\u3001\u7ED3\u6784\u3001\u751F\u7269\u751F\u6210\u7B49\u4FE1\u606F\u3002\u5B83\u4EEC\u51B3\u5B9A\u4E86\u4E16\u754C\u4E2D\u4E0D\u540C\u533A\u57DF\u7684\u7279\u6027\u548C\u5916\u89C2\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"development_behavior_packs"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u5B89\u88C5\u65B0\u884C\u4E3A\u5305\u7684\u6587\u4EF6\u5939\u3002\u8FD9\u5141\u8BB8\u5F00\u53D1\u8005\u6D4B\u8BD5\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u7684\u884C\u4E3A\u5305\uFF0C\u800C\u4E0D\u4F1A\u5F71\u54CD\u5230\u4E3B\u670D\u52A1\u5668\u7684\u884C\u4E3A\u5305\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"development_resource_packs"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u5B89\u88C5\u65B0\u8D44\u6E90\u5305\u7684\u6587\u4EF6\u5939\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u3001\u6D4B\u8BD5\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u7684\u8D44\u6E90\u5305\uFF0C\u5982\u7EB9\u7406\u3001\u6A21\u578B\u548C\u97F3\u6548\u7B49\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"development_skin_packs"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u5B89\u88C5\u65B0\u76AE\u80A4\u5305\u7684\u6587\u4EF6\u5939\u3002\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u548C\u6D4B\u8BD5\u81EA\u5B9A\u4E49\u7684\u73A9\u5BB6\u76AE\u80A4\u548C\u5176\u4ED6\u89D2\u8272\u7684\u5916\u89C2\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"resource_packs"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7528\u4E8E\u5B89\u88C5\u65B0\u7684\u8D44\u6E90\u5305\u3002\u8D44\u6E90\u5305\u53EF\u4EE5\u6539\u53D8\u6E38\u620F\u4E2D\u7684\u89C6\u89C9\u548C\u58F0\u97F3\u5143\u7D20\uFF0C\u4F8B\u5982\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u63D0\u4F9B\u65B0\u7684\u7EB9\u7406\u3001\u97F3\u6548\u548C\u6A21\u578B\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"world-templates"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5305\u542B\u4E16\u754C\u6A21\u677F\uFF0C\u8FD9\u4E9B\u6A21\u677F\u53EF\u4EE5\u88AB\u7528\u6765\u5FEB\u901F\u521B\u5EFA\u5177\u6709\u7279\u5B9A\u8BBE\u7F6E\u548C\u7ED3\u6784\u7684\u65B0\u4E16\u754C\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"green",children:"\u6709\u70B9\u7528\uFF0C\u4F46\u4E0D\u591A\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"worlds"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u8FD9\u662F\u5B58\u50A8\u4E3B\u4E16\u754C\u6587\u4EF6\u5939\u7684\u5730\u65B9\u3002\u6BCF\u4E2A\u4E16\u754C\u90FD\u6709\u81EA\u5DF1\u7684\u5B50\u6587\u4EF6\u5939\uFF0C\u5176\u4E2D\u5305\u542B\u8BE5\u4E16\u754C\u7684\u6240\u6709\u6570\u636E\uFF0C\u5982\u5730\u5F62\u3001\u5EFA\u7B51\u3001\u73A9\u5BB6\u8FDB\u5EA6\u7B49\u3002","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Bedrock level"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5305\u542B\u7279\u5B9A\u4E16\u754C\u7684\u5B58\u6863\u6570\u636E\u3002","\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"db"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5B58\u6863\u6570\u636E\u6587\u4EF6\u5939\uFF0C\u901A\u5E38\u5305\u542B\u6709\u5173\u4E16\u754C\u7684\u6570\u636E\u5E93\u6587\u4EF6\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"level_dat"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5305\u542B\u4E16\u754C\u7684\u57FA\u672C\u8BBE\u7F6E\u548C\u5C5E\u6027\uFF0C\u5982\u6E38\u620F\u89C4\u5219\u3001\u65F6\u95F4\u3001\u5929\u6C14\u7B49\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"level.dat_old"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u65E7\u7248\u7684\u5B58\u6863\u8BBE\u5B9A\u6587\u4EF6\uFF0C\u901A\u5E38\u5728\u66F4\u65B0\u6216\u5907\u4EFD\u65F6\u4F7F\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"level_name.txt"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5305\u542B\u4E16\u754C\u540D\u79F0\u7684\u6587\u4EF6\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"allowlist.json"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u767D\u540D\u5355\u6587\u4EF6\uFF0C\u5217\u51FA\u4E86\u5141\u8BB8\u8FDB\u5165\u670D\u52A1\u5668\u7684\u73A9\u5BB6\u5217\u8868\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["(\u5982\u679C\u4F60\u5728 ",(0,l.jsx)(e.code,{children:"server.properties"})," \u4E2D\u5F00\u542F\u4E86\u767D\u540D\u5355\uFF0C\u4F60\u5C31\u53EF\u4EE5\u5728\u8BE5\u6587\u4EF6\u4E2D\u6DFB\u52A0\u548C\u7BA1\u7406\u8C01\u88AB\u5141\u8BB8\u6216\u4E0D\u88AB\u5141\u8BB8\u8FDB\u5165\u670D\u52A1\u5668)\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"bedrock_server.exe"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u670D\u52A1\u7AEF\u542F\u52A8\u7A0B\u5E8F\uFF0C\u7528\u4E8E\u542F\u52A8\u548C\u8FD0\u884C\u300A\u6211\u7684\u4E16\u754C\u300B\u57FA\u5CA9\u7248\u670D\u52A1\u5668\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u4F60\u53EF\u4EE5\u6539\u540D\u53EB\u4EFB\u4F55\u540D\u5B57(\u53EA\u8981\u4EE5 ",(0,l.jsx)(e.code,{children:".exe"})," \u7ED3\u5C3E\u5C31\u884C)\uFF0C\u4F46\u4E0D\u5EFA\u8BAE\u4F60\u8FD9\u4E48\u505A\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6210\u4E3A\u540E\u7EED\u64CD\u4F5C\u62A5\u9519\u7684\u56E0\u7D20\u3002\u4F8B\u5982\uFF1A"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u82E5\u4F60\u4F7F\u7528 ",(0,l.jsx)(e.strong,{children:"\u9762\u677F"})," \u5F00\u670D\uFF0C\u9700\u8981\u5728\u5BF9\u5E94\u7684 ",(0,l.jsx)(e.strong,{children:"\u542F\u52A8\u8DEF\u5F84"})," \u4E2D\u4FEE\u6539\u670D\u52A1\u7AEF\u542F\u52A8\u7A0B\u5E8F\u7684\u6587\u4EF6\u540D"]}),"\n",(0,l.jsxs)(e.li,{children:["\u82E5\u4F60\u4F7F\u7528 ",(0,l.jsx)(e.strong,{children:"\u542F\u7528\u811A\u672C"})," \u5F00\u670D\uFF0C\u9700\u8981\u5728\u811A\u672C\u5BF9\u5E94\u4F4D\u7F6E\u7684 ",(0,l.jsx)(e.strong,{children:"\u542F\u52A8\u547D\u4EE4"})," \u4E2D\u4FEE\u6539 ",(0,l.jsx)(e.strong,{children:"\u542F\u52A8\u7A0B\u5E8F\u7684\u6587\u4EF6\u540D"})," \u4E3A ",(0,l.jsx)(e.strong,{children:"\u8BE5\u670D\u52A1\u7AEF\u542F\u52A8\u7A0B\u5E8F\u7684\u6587\u4EF6\u540D"}),"(bedrock_server.exe)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"bedrock_server.pdb"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7A0B\u5E8F\u6570\u636E\u5E93\u6587\u4EF6\uFF0C\u901A\u5E38\u7528\u4E8E\u8C03\u8BD5\u548C\u9519\u8BEF\u5206\u6790\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"bedrock_server_how_to.html"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u4F55\u4F7F\u7528BDS\u670D\u52A1\u5668\u7684\u5B98\u65B9\u6307\u5357\uFF0C\u867D\u7136\u4F60\u8BF4\u201C\u6CA1\u591A\u5927\u7528\u5904\u201D\uFF0C\u4F46\u5B83\u53EF\u80FD\u5305\u542B\u6709\u5173\u914D\u7F6E\u548C\u8FD0\u884C\u670D\u52A1\u5668\u7684\u6709\u7528\u4FE1\u606F\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u6709\u70B9\u7528\uFF0C\u4F46\u4E0D\u591A"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"permissions.json"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7BA1\u7406\u5458(OP)\u73A9\u5BB6\u76F8\u5173\u6570\u636E(\u5982 UUID \u53CA\u6E38\u620F\u540D\u79F0\u7B49\u76F8\u5173\u4FE1\u606F)\uFF0C\u5305\u62EC\u6743\u9650\u8BBE\u7F6E\u548C\u89D2\u8272\u5B9A\u4E49\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"release-notes.txt"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u670D\u52A1\u7AEF\u53D1\u884C\u7248\u672C\u8BE6\u60C5\uFF0C\u5305\u542B\u4E86\u6BCF\u4E2A\u7248\u672C\u66F4\u65B0\u7684\u65E5\u5FD7\u548C\u66F4\u6539\u5185\u5BB9\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"red",children:"BUT! \u6CA1\u5565\u7528...\u540E\u7EED\u4E5F\u4E0D\u4F1A\u6D89\u53CA..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"server.properties"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u670D\u52A1\u5668\u914D\u7F6E\u6587\u4EF6\uFF0C\u7528\u4E8E\u8C03\u6574\u5404\u79CD\u670D\u52A1\u5668\u8BBE\u7F6E\uFF0C\u5982\u8BBE\u7F6E\u7AEF\u53E3\uFF0C\u8BBE\u7F6E\u6E38\u620F\u96BE\u5EA6\uFF0C\u8BBE\u7F6E\u6E38\u620F\u6A21\u5F0F(\u751F\u5B58\u3001\u521B\u9020\u7B49)\u7B49\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"valid_known_packs.json"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5305\u542B\u5DF2\u77E5\u7684\u9644\u52A0\u5305\u5217\u8868\uFF0C\u8FD9\u4E9B\u5305\u53EF\u80FD\u5305\u62EC\u884C\u4E3A\u5305\u3001\u8D44\u6E90\u5305\u7B49\uFF0C\u670D\u52A1\u5668\u4F1A\u6839\u636E\u8FD9\u4E2A\u5217\u8868\u6765\u9A8C\u8BC1\u5B89\u88C5\u7684\u5305\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)("font",{color:"green",children:"\u6709\u70B9\u7528\uFF0C\u4F46\u4E0D\u591A\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u81F3\u6B64\uFF0C\u5927\u90E8\u5206\u7684\u4EE5 BDS \u4E3A\u57FA\u7840\u7684\u670D\u52A1\u5668\u6838\u5FC3\u670D\u52A1\u7AEF\u7684\u7ED3\u6784\u5DF2\u7ECF\u5927\u81F4\u5448\u73B0\u5728\u4F60\u773C\u524D\u3002"}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsxs)(e.p,{children:["\u5982\u679C\u4F60\u7684\u670D\u52A1\u7AEF\u6709\u66F4\u591A\u7684\u6587\u4EF6\uFF0C\u5927\u6982\u7387\u662F ",(0,l.jsxs)(e.a,{href:"/Bedrock/bds-core/process/plugins/plugins-loader-choose",children:[(0,l.jsx)(e.strong,{children:"\u63D2\u4EF6\u52A0\u8F7D\u5668"})," / ",(0,l.jsx)(e.strong,{children:"\u63D2\u4EF6"})]}),"(\u5982\u9488\u5BF9 BDS \u7684 Levilamina \u63D2\u4EF6\u52A0\u8F7D\u5668\u4F1A\u91CA\u653E\u66F4\u591A\u6587\u4EF6\u5939)\u521B\u5EFA\u7684\u6587\u4EF6\u5939\uFF0C\u4E00\u822C\u6765\u8BF4\u65E0\u9700\u62C5\u5FC3\u3002"]})})]})}function t(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(x,{...n})}):x(n)}},79938:function(n,e,s){s.d(e,{Z:function(){return d},a:function(){return c}});var r=s(75271);let l={},i=r.createContext(l);function c(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);