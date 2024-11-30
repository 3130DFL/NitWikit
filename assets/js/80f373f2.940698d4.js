"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([["8366"],{27270:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"process/maintenance/optimize/optimize","title":"\u4F18\u5316","description":"\u4F18\u5316\u662F\u505A\u51CF\u6CD5\uFF0C\u6E05\u7406\u670D\u52A1\u5668\u7684\u5361\u987F\u56E0\u7D20\uFF0C\u7531\u4E8E Minecraft \u672C\u8EAB\u7684\u6027\u80FD\u4F4E\u4E0B\u3001\u90E8\u5206\u63D2\u4EF6\u4F5C\u8005\u5E76\u6CA1\u6709\u4F18\u5316\u4EE3\u7801\u7684\u610F\u8BC6\u3001\u670D\u52A1\u5668\u5B9E\u4F53\u8FC7\u591A\u7B49\u3002","source":"@site/docs-java/process/maintenance/optimize/optimize.md","sourceDirName":"process/maintenance/optimize","slug":"/optimize","permalink":"/Java/optimize","draft":false,"unlisted":false,"editUrl":"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/optimize.md","tags":[],"version":"current","lastUpdatedBy":"\u201Cpostyizhan\u201D","lastUpdatedAt":1732886534000,"sidebarPosition":1,"frontMatter":{"slug":"/optimize","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u7EF4\u62A4","permalink":"/Java/maintenance/Java"},"next":{"title":"JVM \u4F18\u5316","permalink":"/Java/optimize/jvm"}}'),a=i("52676"),s=i("79938");let t={slug:"/optimize",sidebar_position:1},l="\u4F18\u5316",d={},c=[{value:"\u7B2C\u4E00\u6B65 - Java \u4F18\u5316",id:"\u7B2C\u4E00\u6B65---java-\u4F18\u5316",level:2},{value:"\u9009\u62E9\u5408\u9002\u7684 Java",id:"\u9009\u62E9\u5408\u9002\u7684-java",level:3},{value:"JVM \u53C2\u6570\u4F18\u5316",id:"jvm-\u53C2\u6570\u4F18\u5316",level:3},{value:"\u7B2C\u4E8C\u6B65 - \u9884\u751F\u6210",id:"\u7B2C\u4E8C\u6B65---\u9884\u751F\u6210",level:2},{value:"\u7B2C\u4E09\u6B65 - \u66F4\u6362\u6838\u5FC3",id:"\u7B2C\u4E09\u6B65---\u66F4\u6362\u6838\u5FC3",level:2},{value:"Paper - \u8FFD\u6C42\u6781\u81F4\u7A33\u5B9A <em>\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2605\u2606</em>",id:"paper---\u8FFD\u6C42\u6781\u81F4\u7A33\u5B9A-\u63A8\u8350\u5EA6-",level:3},{value:"Purpur - \u7A33\u5B9A\u6027\u4E0E\u6027\u80FD\u6700\u4F73\u9009\u62E9 <em>\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2605\u2605</em>",id:"purpur---\u7A33\u5B9A\u6027\u4E0E\u6027\u80FD\u6700\u4F73\u9009\u62E9-\u63A8\u8350\u5EA6-",level:3},{value:"Leaf - \u6781\u81F4\u6027\u80FD <em>\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2605\u2606</em>",id:"leaf---\u6781\u81F4\u6027\u80FD-\u63A8\u8350\u5EA6-",level:3},{value:"Folia - \u786C\u4EF6\u5229\u7528\u7387\u8D85\u9AD8\u7684\u9AD8\u6027\u80FD\uFF0C\u4F46\u517C\u5BB9\u6027\u8F83\u5DEE <em>\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2606\u2606</em>",id:"folia---\u786C\u4EF6\u5229\u7528\u7387\u8D85\u9AD8\u7684\u9AD8\u6027\u80FD\u4F46\u517C\u5BB9\u6027\u8F83\u5DEE-\u63A8\u8350\u5EA6-",level:3},{value:"\u7B2C\u56DB\u6B65 - \u8C03\u6574\u670D\u52A1\u7AEF\u914D\u7F6E",id:"\u7B2C\u56DB\u6B65---\u8C03\u6574\u670D\u52A1\u7AEF\u914D\u7F6E",level:2},{value:"\u7B2C\u4E94\u6B65 - \u66F4\u6362\u786C\u4EF6",id:"\u7B2C\u4E94\u6B65---\u66F4\u6362\u786C\u4EF6",level:2},{value:"\u7B2C\u516D\u6B65 - \u66F4\u6362\u64CD\u4F5C\u7CFB\u7EDF",id:"\u7B2C\u516D\u6B65---\u66F4\u6362\u64CD\u4F5C\u7CFB\u7EDF",level:2},{value:"\u7B2C\u4E03\u6B65 - \u6027\u80FD\u5206\u6790",id:"\u7B2C\u4E03\u6B65---\u6027\u80FD\u5206\u6790",level:2}];function o(e){let n={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",...(0,s.a)(),...e.components},{Details:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u4F18\u5316",children:"\u4F18\u5316"})}),"\n",(0,a.jsx)(n.p,{children:"\u4F18\u5316\u662F\u505A\u51CF\u6CD5\uFF0C\u6E05\u7406\u670D\u52A1\u5668\u7684\u5361\u987F\u56E0\u7D20\uFF0C\u7531\u4E8E Minecraft \u672C\u8EAB\u7684\u6027\u80FD\u4F4E\u4E0B\u3001\u90E8\u5206\u63D2\u4EF6\u4F5C\u8005\u5E76\u6CA1\u6709\u4F18\u5316\u4EE3\u7801\u7684\u610F\u8BC6\u3001\u670D\u52A1\u5668\u5B9E\u4F53\u8FC7\u591A\u7B49\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6BCF\u4E2A\u670D\u52A1\u5668\u53EF\u80FD\u6709\u81EA\u5DF1\u7684\u5361\u987F\u539F\u56E0\uFF0C\u5728\u8FD9\u90E8\u5206\u5148\u505A\u6700\u57FA\u7840\u7684\u901A\u7528\u4F18\u5316\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u540E\u4F5C\u7528\u4E0D\u5927\u8BF7\u53C2\u8003\u6027\u80FD\u5206\u6790\u677F\u5757\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u6B64\u4E4B\u524D\uFF0C\u8BF7\u4E00\u5B9A\u67E5\u770B ",(0,a.jsx)(n.a,{href:"/Java/process/maintenance/optimize/optimized-plugin",children:"\u4F18\u5316\u8BEF\u533A"}),'\uFF0C\u505C\u6B62\u6B64\u7C7B\u65E0\u6548"\u4F18\u5316"\uFF0C\u7136\u540E\u6839\u636E\u4E0B\u9762\u7684\u6B65\u9AA4\u8FDB\u884C\u64CD\u4F5C\u3002']}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u4E00\u6B65---java-\u4F18\u5316",children:"\u7B2C\u4E00\u6B65 - Java \u4F18\u5316"}),"\n",(0,a.jsx)(n.p,{children:"\u4E3A\u4EC0\u4E48\u9009\u62E9 Java \u4F18\u5316\u4F5C\u4E3A\u7B2C\u4E00\u6B65 - \u51E0\u4E4E\u4EFB\u4F55\u60C5\u51B5\u4E0B\uFF0C\u670D\u52A1\u5668\u90FD\u4F1A\u56E0\u4E3A\u5408\u9002\u7684 Java \u53D7\u76CA\uFF0C"}),"\n",(0,a.jsx)(n.p,{children:"\u4EC5\u4EC5\u9700\u8981\u4F60\u4E0B\u8F7D\u4E00\u4E2A\u5C0F\u5C0F\u7684 Java \u5B89\u88C5\u7A0B\u5E8F\uFF0C\u6216\u8005\u66F4\u6539 JVM \u53C2\u6570(\u5927\u767D\u8BDD\u6765\u8BF4\u5C31\u662F\u5F00\u670D\u53C2\u6570)\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u9009\u62E9\u5408\u9002\u7684-java",children:"\u9009\u62E9\u5408\u9002\u7684 Java"}),"\n",(0,a.jsxs)(n.p,{children:["\u53C2\u8003",(0,a.jsx)(n.a,{href:"https://nitwikit.yizhan.wiki/preparation/choose-and-download-and-install-java/",children:"Java \u4E0B\u8F7D\u53CA\u5B89\u88C5"}),"\u5B89\u88C5\u5408\u9002\u7684 Java"]}),"\n",(0,a.jsx)(n.h3,{id:"jvm-\u53C2\u6570\u4F18\u5316",children:"JVM \u53C2\u6570\u4F18\u5316"}),"\n",(0,a.jsxs)(n.p,{children:["\u53EF\u4EE5\u5728 ",(0,a.jsx)(n.a,{href:"https://startmc.jakaco.xyz/",children:"JVM \u53C2\u6570\u751F\u6210\u5668"}),"\u751F\u6210\u9002\u5408\u4F60\u670D\u52A1\u5668\u7684\u57FA\u672C JVM \u53C2\u6570\uFF0C\u7136\u540E\u590D\u5236\u5E76\u4FDD\u5B58\u5230\u4F60\u7684\u542F\u52A8\u811A\u672C\u91CC\uFF0C\u7136\u540E\u91CD\u542F\u5C31\u5B8C\u6210\u4E86"]}),"\n",(0,a.jsxs)(n.p,{children:["\u522B\u6025\uFF0C\u8FD8\u6709\u4E00\u4E9B\u66F4\u9AD8\u9636\u7684\u53C2\u6570\u3002",(0,a.jsx)(n.a,{href:"/Java/optimize/jvm",children:"JVM \u4F18\u5316"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u4E8C\u6B65---\u9884\u751F\u6210",children:"\u7B2C\u4E8C\u6B65 - \u9884\u751F\u6210"}),"\n",(0,a.jsx)(n.p,{children:"\u4EC0\u4E48\u662F\u9884\u751F\u6210 - \u9884\u751F\u6210\u5C31\u662F\u8BA9\u670D\u52A1\u5668\u5728\u73A9\u5BB6\u8FDB\u5165\u4E4B\u524D\uFF0C\u9884\u5148\u751F\u6210\u533A\u5757\u5BF9\u5E94\u65B9\u5757\u3001\u7ED3\u6784\u7B49\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5728 Minecraft \u670D\u52A1\u5668\u4E2D\uFF0C\u751F\u6210\u65B0\u533A\u5757\u4F1A\u6D88\u8017\u5927\u91CF\u670D\u52A1\u5668\u8D44\u6E90\uFF0C\u5982\u679C\u8981\u5F00\u542F\u65B0\u7684\u5730\u56FE / \u670D\u52A1\u5668\uFF0C\u5EFA\u8BAE\u5148\u9884\u751F\u6210\u5730\u56FE\u3002"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://hangar.papermc.io/pop4959/Chunky",children:"Chunky"})," \u662F\u6700\u5E38\u7528\u7684\u9884\u751F\u6210\u63D2\u4EF6\u3002\n\u901A\u5E38\u4E0E ",(0,a.jsx)(n.a,{href:"https://modrinth.com/plugin/chunkyborder",children:"ChunkyBorder"})," \u7ED3\u5408\u4F7F\u7528\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u81EA\u5B9A\u4E49\u8FB9\u754C\u53CA\u5F62\u72B6\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u901A\u5E38\u6765\u8BF4\uFF0C\u5373\u4F7F\u4F60\u4E0D\u8BBE\u7F6E\u8FB9\u754C\uFF0C\u4E5F\u52A1\u5FC5\u8FDB\u884C\u9884\u751F\u6210\u5927\u7EA6 1w x 1w \u5927\u5C0F\u7684\u4E16\u754C\u3002\u8FD9\u5BF9\u964D\u4F4E\u540E\u671F\u670D\u52A1\u5668\u8D1F\u8F7D\u5F88\u6709\u6548\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u9884\u751F\u6210\u65F6\u5E94\u8BE5\u6CE8\u610F\uFF0C\u9ED8\u8BA4\u60C5\u51B5 1.20 \u539F\u7248 1w x 1w \u7684\u5730\u56FE\u9700\u8981 4-5 GB \u786C\u76D8\u3002\u5E94\u6839\u636E\u786C\u76D8\u5927\u5C0F\u9009\u62E9\u4E16\u754C\u7684\u9884\u751F\u6210\u5927\u5C0F\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u4E09\u6B65---\u66F4\u6362\u6838\u5FC3",children:"\u7B2C\u4E09\u6B65 - \u66F4\u6362\u6838\u5FC3"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u63D2\u4EF6\u548C\u914D\u7F6E\u5C42\u9762\u80FD\u8FDB\u884C\u7684\u4F18\u5316\u5176\u5B9E\u4E0D\u591A(\u53D7\u9650\u4E8E API \u8FD8\u6709\u670D\u52A1\u7AEF\u6838\u5FC3)\uFF0C\u6240\u4EE5\u6700\u597D\u7684\u65B9\u6CD5\u662F\u66F4\u6362\u670D\u52A1\u5668\u6838\u5FC3\u3002"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"\u4EFB\u4F55\u65F6\u5019\u90FD\u4E0D\u8981\u518D\u4F7F\u7528 CraftBukkit \u548C Spigot \u4E86\u3002\u8FFD\u6C42\u7A33\u5B9A/\u6027\u80FD\u4E0A Purpur \uFF0C\u8FFD\u6C42\u539F\u7248\u7279\u6027\u4E0A Leaves\uFF0C\u6027\u80FD\u4E0A Leaf"})}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"\u9009\u62E9\u66F4\u6362\u7684\u670D\u52A1\u5668\u6838\u5FC3"}),(0,a.jsxs)(n.p,{children:["\u6B64\u5904\u53EA\u662F\u4F5C\u4E3A\u6700\u57FA\u7840\u7684\u6838\u5FC3\u9009\u62E9\u63A8\u8350\uFF0C\u5B8C\u6574\u7248\u8BF7\u67E5\u770B",(0,a.jsx)(n.a,{href:"/Java/server-core-choose",children:"\u6838\u5FC3\u9009\u62E9"})]}),(0,a.jsxs)(n.h3,{id:"paper---\u8FFD\u6C42\u6781\u81F4\u7A33\u5B9A-\u63A8\u8350\u5EA6-",children:["Paper - \u8FFD\u6C42\u6781\u81F4\u7A33\u5B9A ",(0,a.jsx)(n.em,{children:"\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2605\u2606"})]}),(0,a.jsx)(n.p,{children:"\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u5F00\u670D\uFF0C\u6216\u8005\u8FFD\u6C42\u7A33\u5B9A\uFF0C\u8BF7\u4F7F\u7528 Paper \u3002\u4EFB\u4F55\u65F6\u5019\u60F3\u66F4\u6362\u5176\u4ED6\u6838\u5FC3\u53EF\u4EE5\u968F\u65F6\u66F4\u6362\u5982 Purpur / Leaf \u7B49\u6838\u5FC3\u3002"}),(0,a.jsxs)(n.h3,{id:"purpur---\u7A33\u5B9A\u6027\u4E0E\u6027\u80FD\u6700\u4F73\u9009\u62E9-\u63A8\u8350\u5EA6-",children:["Purpur - \u7A33\u5B9A\u6027\u4E0E\u6027\u80FD\u6700\u4F73\u9009\u62E9 ",(0,a.jsx)(n.em,{children:"\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2605\u2605"})]}),(0,a.jsx)(n.p,{children:"\u5982\u679C\u4F60\u5E76\u4E0D\u662F\u8FFD\u6C42\u66F4\u6781\u81F4\u7684\u6027\u80FD\uFF0CPurpur \u4F60\u6700\u597D\u7684\u9009\u62E9\uFF0C\u53EA\u9700\u8981\u66FF\u6362\u6389\u6838\u5FC3\u5C31\u53EF\u4EE5\uFF0CPurpur \u517C\u5BB9\u5168\u90E8\u63D2\u4EF6!!"}),(0,a.jsxs)(n.h3,{id:"leaf---\u6781\u81F4\u6027\u80FD-\u63A8\u8350\u5EA6-",children:["Leaf - \u6781\u81F4\u6027\u80FD ",(0,a.jsx)(n.em,{children:"\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2605\u2606"})]}),(0,a.jsx)(n.p,{children:"\u524D\u5F80 Leaf \u7684 GitHub Action \u4E0B\u8F7D\u6700\u65B0\u6838\u5FC3\uFF0C\u7136\u540E\u66FF\u6362!!\uFF0CLeaf \u517C\u5BB9\u4F60\u7684\u7EDD\u5927\u90E8\u5206\u63D2\u4EF6(\u5DF2\u77E5\u4EC5\u6709\u4E00\u4E2A\u4E0D\u517C\u5BB9\uFF0C\u4F46\u5728\u63D2\u4EF6\u7684\u5206\u652F\u89E3\u51B3)"}),(0,a.jsxs)(n.h3,{id:"folia---\u786C\u4EF6\u5229\u7528\u7387\u8D85\u9AD8\u7684\u9AD8\u6027\u80FD\u4F46\u517C\u5BB9\u6027\u8F83\u5DEE-\u63A8\u8350\u5EA6-",children:["Folia - \u786C\u4EF6\u5229\u7528\u7387\u8D85\u9AD8\u7684\u9AD8\u6027\u80FD\uFF0C\u4F46\u517C\u5BB9\u6027\u8F83\u5DEE ",(0,a.jsx)(n.em,{children:"\u63A8\u8350\u5EA6 \u2605\u2605\u2605\u2606\u2606"})]}),(0,a.jsx)(n.p,{children:"\u5982\u679C\u4F60\u7684\u670D\u52A1\u5668\u5BF9\u63D2\u4EF6\u7684\u9700\u6C42\u4E0D\u5927\uFF0C\u6216\u8005\u4F60\u7684\u63D2\u4EF6\u5DF2\u5168\u90E8\u517C\u5BB9 Folia \uFF0C\u90A3\u4F60\u5C31\u53EF\u4EE5\u9009\u62E9\u5207\u6362\u5230\u8FD9\u4E2A\u6838\u5FC3\uFF0C\u4F60\u7684 tps \u6709\u7EDD\u5BF9\u5DE8\u5927\u7684\u63D0\u5347(\u751A\u81F3\u8D85\u8FC7\u4E86 Leaf )"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u56DB\u6B65---\u8C03\u6574\u670D\u52A1\u7AEF\u914D\u7F6E",children:"\u7B2C\u56DB\u6B65 - \u8C03\u6574\u670D\u52A1\u7AEF\u914D\u7F6E"}),"\n",(0,a.jsx)(n.p,{children:"\u76EE\u524D\uFF0CBilibili \u4E0A\u9762\u7684\u914D\u7F6E\u90FD\u662F\u5F88\u8001\u7684\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528"}),"\n",(0,a.jsxs)(n.p,{children:["\u6587\u6863\u91CC\u7684 ",(0,a.jsx)(n.a,{href:"/Java/process/maintenance/optimize/go",children:"\u8C03\u670D\u52A1\u7AEF\u914D\u7F6E"})," \u6BD4\u8F83\u65B0\uFF0C\u975E\u5E38\u63A8\u8350"]}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u4E94\u6B65---\u66F4\u6362\u786C\u4EF6",children:"\u7B2C\u4E94\u6B65 - \u66F4\u6362\u786C\u4EF6"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"\u4E0D\u8981\u65E0\u8111\u6362\u786C\u4EF6!"})," \u9996\u5148\u8981\u77E5\u9053\u81EA\u5DF1\u7684\u786C\u4EF6\u74F6\u9888\u5728\u54EA\u91CC\u3002\u5982\u679C CPU \u8D1F\u8377\u8FC7\u9AD8\uFF0C\u5EFA\u8BAE\u5148\u6392\u9664 CPU \u5F02\u5E38\u5360\u7528\uFF0C\u518D\u770B CPU \u603B\u4F53\u5360\u7528\u60C5\u51B5\u3002\n\u4E00\u822C\u6765\u8BF4\u670D\u52A1\u5668\u5361\u987F\u6362 CPU \u662F\u6700\u6709\u6548\u7684\uFF0C\u5355\u6838\u6027\u80FD\u548C MC \u670D\u52A1\u5668 TPS \u51E0\u4E4E\u5448\u7EBF\u6027\u76F8\u5173\uFF0C\u4F46\u662F\u6362 CPU \u51E0\u4E4E\u5C31\u76F8\u5F53\u4E8E\u8981\u6362\u4E00\u53F0\u673A\u5668\uFF0C\u8FC1\u79FB\u5BF9\u4E8E\u65B0\u624B\u6765\u8BF4\u5E76\u4E0D\u662F\u6613\u4E8B\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5BF9\u4E8E\u5355\u7AEF\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u8D85\u8FC7 8 \u6838\u5FC3\u7684\u90E8\u5206\u57FA\u672C\u5F88\u96BE\u901A\u8FC7\u63D0\u5347 CPU \u6838\u5FC3\u6570\u91CF\u63D0\u5347 TPS \u3002\u4E0D\u8981\u52A8\u4E0D\u52A8\u5C31\u4E70 E5 \u7136\u540E\u5361\u4E86\u5C31\u52A0 4 \u6838 8G \u5185\u5B58\uFF0C\u66F4\u591A\u4E5F\u6CA1\u7528\u7684\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5BF9\u4E8E\u7FA4\u7EC4\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u4E00\u822C\u6838\u5FC3\u6570\u91CF\u90FD\u4F1A\u5360\u7528\u4E0A\uFF0C\u4F46\u662F\u5185\u5B58\u53EF\u80FD\u4F1A\u6709\u4E9B\u6349\u6025\uFF0C\u5BF9\u4E8E\u6BCF\u4E00\u4E2A\u666E\u901A\u7684\u751F\u5B58\u670D\u6765\u8BF4\u5185\u5B58\u7684\u63A8\u8350\u503C\u4E3A 8G - 20G \u66F4\u591A\u66F4\u5C11\u90FD\u662F\u4E0D\u63A8\u8350\u7684\u3002"}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsx)(n.p,{children:"\u5982\u679C\u53D1\u73B0 CPU \u5360\u7528\u548C\u5185\u5B58\u5360\u7528\u90FD\u4E0D\u662F\u5F88\u9AD8\u4F46\u662F\u670D\u52A1\u5668\u5361\u5361\u7684\uFF0C\u8BF7\u8003\u8651\u662F\u4E0D\u662F\u670D\u52A1\u5668\u5E26\u5BBD\u53D7\u9650\u5BFC\u81F4\u73A9\u5BB6 ping \u503C\u7A81\u7136\u5347\u9AD8\u7684\u95EE\u9898\u3002\u8BF7\u5206\u6E05\u695A TPS \u4F4E\u5BFC\u81F4\u7684\u5361\u987F\uFF0CMSPT \u9AD8\u5BFC\u81F4\u7684\u5361\u987F\uFF0C\u5E26\u5BBD\u5360\u6EE1\u5BFC\u81F4\u7684\u5361\u987F\u3002"})}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u516D\u6B65---\u66F4\u6362\u64CD\u4F5C\u7CFB\u7EDF",children:"\u7B2C\u516D\u6B65 - \u66F4\u6362\u64CD\u4F5C\u7CFB\u7EDF"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0\u8BBA\u5728\u6027\u80FD\u8FD8\u662F\u7A33\u5B9A\u6027\uFF0C Linux \u90FD\u6BD4 Windows \u66F4\u9002\u5408\u7528\u4E8E\u5F00\u670D\uFF0C\u5BF9\u4E8E Linux \u6839\u636E\u81EA\u5DF1\u7684\u4F7F\u7528\u7ECF\u9A8C\u9009\u62E9\u5373\u53EF\uFF0C\u5982\u679C\u6CA1\u6709\u4F7F\u7528\u7ECF\u9A8C\u53EF\u4EE5\u5148\u4F7F\u7528 Ubuntu \u7B49\u4E3B\u6D41\u7CFB\u7EDF\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u60F3\u8981\u4E86\u89E3\u66F4\u591A\u8BF7\u524D\u5F80\u8FDB\u9636 ",(0,a.jsx)(n.a,{href:"https://nitwikit.yizhan.wiki/Sundry/Advance/Linux",children:"Linux \u5F00\u670D\u6559\u7A0B"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u7B2C\u4E03\u6B65---\u6027\u80FD\u5206\u6790",children:"\u7B2C\u4E03\u6B65 - \u6027\u80FD\u5206\u6790"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u201C\u9A6C\u514B\u601D\u4E3B\u4E49\u6D3B\u7684\u7075\u9B42\u5728\u4E8E\u5BF9\u5177\u4F53\u95EE\u9898\u4F5C\u5177\u4F53\u5206\u6790\u3002\u201D - \u5217\u5B81"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u901A\u7528\u4F18\u5316\u5DF2\u7ECF\u5DEE\u4E0D\u591A\u505A\u597D\u4E86\uFF0C\u800C\u6BCF\u4E2A\u670D\u90FD\u6709\u81EA\u5DF1\u5BFC\u81F4\u6EDE\u540E\u7684\u56E0\u7D20\uFF0C\u53EF\u80FD\u662F\u5B9E\u4F53\u592A\u591A\uFF0C\u53EF\u80FD\u662F\u73A9\u5BB6\u673A\u5668\u591A\uFF0C\u4E5F\u53EF\u80FD\u662F\u67D0\u4E9B\u63D2\u4EF6\u5199\u7684\u592A\u5C4E..."}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u6B64\uFF0C\u90A3\u4E48\u5E94\u8BE5\u5982\u4F55\u77E5\u9053\u670D\u52A1\u5668\u4E3A\u4F55\u5361\u987F\u5462\uFF1F"}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u662F\u4E2A\u5B8C\u5B8C\u5168\u5168\u7684\u65B0\u624B\uFF0C\u6216\u8005\u61D2\u5F97\u5206\u6790\uFF0C\u60F3\u8BF7\u6559\u522B\u4EBA\u5206\u6790\u5E94\u8BE5\u600E\u4E48\u529E\u5462? \u8BF7\u8F6C\u8DF3\u5230 ",(0,a.jsx)(n.a,{href:"/Java/process/maintenance/optimize/ask-for-help",children:"\u600E\u4E48\u8BA9\u5927\u4F6C\u5E2E\u6211"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679C\u4F60\u4E0D\u60F3\u6C42\u52A9\u522B\u4EBA\uFF0C\u4EA6\u6216\u8005\u4F60\u60F3\u6709\u4E00\u4E9B\u8FDB\u6B65\uFF0C\u8BF7\u53C2\u8003 ",(0,a.jsx)(n.a,{href:"/Java/process/maintenance/optimize/performance-analysis",children:"\u6027\u80FD\u5206\u6790"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return t}});var r=i(75271);let a={},s=r.createContext(a);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);