"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["9053"],{33595:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>d});var a=JSON.parse('{"id":"advance/YAML/extention","title":"\u6269\u5C55","description":"\u951A\u70B9","source":"@site/docs-java/advance/YAML/extention.md","sourceDirName":"advance/YAML","slug":"/advance/YAML/extention","permalink":"/Java/advance/YAML/extention","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/YAML/extention.md","tags":[],"version":"current","lastUpdatedBy":"SB-Reborn","lastUpdatedAt":1727754229000,"sidebarPosition":3,"frontMatter":{"title":"\u6269\u5C55","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u57FA\u7840","permalink":"/Java/advance/YAML/foundation"},"next":{"title":"\u7533\u8BF7\u57DF\u540D","permalink":"/Java/advance/apply-for-a-domain-name"}}'),l=s("52676"),t=s("79938");let d={title:"\u6269\u5C55",sidebar_position:3},i="\u6269\u5C55",r={},c=[{value:"\u951A\u70B9",id:"\u951A\u70B9",level:2},{value:"\u7B26\u53F7",id:"\u7B26\u53F7",level:3},{value:"\u4F8B\u5B50",id:"\u4F8B\u5B50",level:3},{value:"\u6362\u884C",id:"\u6362\u884C",level:2},{value:"\u4FDD\u7559\u6362\u884C",id:"\u4FDD\u7559\u6362\u884C",level:3},{value:"\u6298\u53E0\u6362\u884C",id:"\u6298\u53E0\u6362\u884C",level:3}];function o(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u6269\u5C55",children:"\u6269\u5C55"})}),"\n",(0,l.jsx)(n.h2,{id:"\u951A\u70B9",children:"\u951A\u70B9"}),"\n",(0,l.jsxs)(n.admonition,{type:"warning",children:[(0,l.jsx)(n.p,{children:"\u951A\u70B9\u4E00\u5B9A\u8981\u5148\u58F0\u660E\u518D\u4F7F\u7528\u3002"}),(0,l.jsxs)(n.p,{children:["\u5373\u6574\u4E2A .yml \u6587\u4EF6\u4ECE\u4E0A\u5F80\u4E0B\u8BBE\u7F6E\u951A\u70B9",(0,l.jsx)(n.strong,{children:"\u4E00\u5B9A\u8981"}),"\u5728\u5F15\u7528\u951A\u70B9\u4E4B\u524D\u3002"]}),(0,l.jsx)(n.p,{children:"\u5426\u5219\u4F1A\u8BED\u6CD5\u62A5\u9519\u3002"})]}),"\n",(0,l.jsx)(n.h3,{id:"\u7B26\u53F7",children:"\u7B26\u53F7"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"&"})," \u8BBE\u7F6E\u951A\u70B9\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"*"})," \u5F15\u7528\u951A\u70B9\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"<<"})," \u5408\u5E76\u5230\u5F53\u524D\u6570\u636E\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4F8B\u5B50",children:"\u4F8B\u5B50"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD9\u6837\u5199\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"defaults: &defaults\n  adapter: postgres\n  host: localhost\n\ndevelopment:\n  database: myapp_development\n  <<: *defaults\n\ntest:\n  database: myapp_test\n  common: *defaults\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u76F8\u5F53\u4E8E\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"defaults:\n  adapter: postgres\n  host: localhost\n\ndevelopment:\n  database: myapp_development\n  adapter: postgres\n  host: localhost\n\ntest:\n  common:\n    adapter: postgres\n    host: localhost\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6362\u884C",children:"\u6362\u884C"}),"\n",(0,l.jsx)(n.h3,{id:"\u4FDD\u7559\u6362\u884C",children:"\u4FDD\u7559\u6362\u884C"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"|"})," \u6765\u8868\u793A\u8BE5\u8BED\u6CD5\uFF0C\u6BCF\u884C\u7684\u7F29\u8FDB\u548C\u884C\u5C3E\u7A7A\u767D\u90FD\u4F1A\u88AB\u53BB\u6389\uFF0C\u800C\u989D\u5916\u7684\u7F29\u8FDB\u4F1A\u88AB\u4FDD\u7559\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"lines: |\n  \u6211\u662F\u7B2C\u4E00\u884C\n  \u6211\u662F\u7B2C\u4E8C\u884C\n    \u6211\u662F\u5E05\u6C14\u8FF7\u4EBA\u7684\u9A7F\u7AD9\n      \u6211\u662F\u7B2C\u56DB\u884C\n  \u6211\u662F\u7B2C\u4E94\u884C\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"|+"})," \u6765\u8868\u793A\u8BE5\u8BED\u6CD5\uFF0C\u4FDD\u7559\u884C\u5C3E\u53CA\u5B57\u7B26\u672B\u5C3E\u7684\u6362\u884C\u7B26\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"lines: |+\n  \u6211\u662F\u7B2C\u4E00\u884C\n  \u6211\u662F\u7B2C\u4E8C\u884C\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:"|-"})," \u6765\u8868\u793A\u8BE5\u8BED\u6CD5\uFF0C\u4FDD\u7559\u884C\u5C3E\u6362\u884C\u7B26\uFF0C\u4F46\u4E0D\u4FDD\u7559\u5B57\u7B26\u672B\u5C3E\u7684\u6362\u884C\u7B26\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"lines: |-\n  \u6211\u662F\u7B2C\u4E00\u884C\n  \u6211\u662F\u7B2C\u4E8C\u884C\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6298\u53E0\u6362\u884C",children:"\u6298\u53E0\u6362\u884C"}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:">"})," \u6765\u8868\u793A\u8BE5\u8BED\u6CD5\uFF0C\u53EA\u6709\u7A7A\u767D\u884C\u624D\u4F1A\u88AB\u8BC6\u522B\u4E3A\u6362\u884C\uFF0C\u539F\u6765\u7684\u6362\u884C\u7B26\u90FD\u4F1A\u88AB\u8F6C\u6362\u6210\u7A7A\u683C\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"lines: >\n  \u6211\u662F\u7B2C\u4E00\u884C\n  \u6211\u4E5F\u662F\u7B2C\u4E00\u884C\n  \u6211\u4ECD\u662F\u7B2C\u4E00\u884C\n  \u6211\u4F9D\u65E7\u662F\u7B2C\u4E00\u884C\n  \u6211\u662F\u7B2C\u4E8C\u884C\n  \u8FD9\u4E48\u5DE7\u6211\u4E5F\u662F\u7B2C\u4E8C\u884C\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:">+"})," \u6765\u8868\u793A\u8BE5\u8BED\u6CD5\uFF0C\u5C06\u884C\u5C3E\u6362\u884C\u7B26\u66FF\u6362\u6210\u7A7A\u683C\uFF0C\u4FDD\u7559\u5B57\u7B26\u672B\u5C3E\u7684\u6362\u884C\u7B26\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"lines: >+\n  \u6211\u662F\u7B2C\u4E00\u884C\n  \u6211\u4E5F\u662F\u7B2C\u4E00\u884C\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4F7F\u7528 ",(0,l.jsx)(n.code,{children:">-"})," \u6765\u8868\u793A\u8BE5\u8BED\u6CD5\uFF0C\u5C06\u884C\u5C3E\u6362\u884C\u7B26\u66FF\u6362\u6210\u7A7A\u683C\uFF0C\u4E0D\u4FDD\u7559\u5B57\u7B26\u672B\u5C3E\u7684\u6362\u884C\u7B26\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-yaml",children:"lines: >-\n  \u6211\u662F\u7B2C\u4E00\u884C\n  \u6211\u4E5F\u662F\u7B2C\u4E00\u884C\n"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},79938:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return d}});var a=s(75271);let l={},t=a.createContext(l);function d(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);