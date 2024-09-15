"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[2584],{746:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>l,default:()=>X,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(86070),t=n(25296);const r={sidebar_position:5,title:"GraalVM EE",slug:"/optimize/jvm/graalvm"},l="GraalVM",o={id:"process/maintenance/optimize/jvm/graal",title:"GraalVM EE",description:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 GraalVM EE",source:"@site/docs-java/process/maintenance/optimize/jvm/graal.md",sourceDirName:"process/maintenance/optimize/jvm",slug:"/optimize/jvm/graalvm",permalink:"/NitWikit/Java/optimize/jvm/graalvm",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/process/maintenance/optimize/jvm/graal.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1726379564e3,sidebarPosition:5,frontMatter:{sidebar_position:5,title:"GraalVM EE",slug:"/optimize/jvm/graalvm"},sidebar:"tutorialSidebar",previous:{title:"Dragonwell 11",permalink:"/NitWikit/Java/optimize/jvm/dragonwell"},next:{title:"Azul Zing",permalink:"/NitWikit/Java/optimize/jvm/zing"}},s={},c=[{value:"\u57fa\u7840\u53c2\u6570",id:"\u57fa\u7840\u53c2\u6570",level:2},{value:"G1GC",id:"g1gc",level:2},{value:"ZGC",id:"zgc",level:2},{value:"\u6b63\u5728\u8003\u8651\u7684\u6807\u5fd7",id:"\u6b63\u5728\u8003\u8651\u7684\u6807\u5fd7",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"graalvm",children:"GraalVM"})}),"\n",(0,a.jsx)(i.p,{children:"\u8fd9\u4e9b\u53c2\u6570\u53ea\u9002\u5408 GraalVM EE"}),"\n",(0,a.jsx)(i.h2,{id:"\u57fa\u7840\u53c2\u6570",children:"\u57fa\u7840\u53c2\u6570"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-XX:+UnlockExperimentalVMOptions -XX:+UnlockDiagnosticVMOptions -XX:+AlwaysActAsServerClassMachine -XX:+AlwaysPreTouch -XX:+DisableExplicitGC -XX:AllocatePrefetchStyle=3 -XX:NmethodSweepActivity=1 -XX:ReservedCodeCacheSize=400M -XX:NonNMethodCodeHeapSize=12M -XX:ProfiledCodeHeapSize=194M -XX:NonProfiledCodeHeapSize=194M -XX:-DontCompileHugeMethods -XX:+PerfDisableSharedMem -XX:+UseFastUnorderedTimeStamps -XX:+UseCriticalJavaThreadPriority -XX:+EagerJVMCI -Dgraal.TuneInlinerExploration=1\n"})}),"\n",(0,a.jsx)(i.h2,{id:"g1gc",children:"G1GC"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-XX:+UseG1GC -XX:MaxGCPauseMillis=130 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=28 -XX:G1HeapRegionSize=16M -XX:G1ReservePercent=20 -XX:G1MixedGCCountTarget=3 -XX:InitiatingHeapOccupancyPercent=10 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=0 -XX:SurvivorRatio=32 -XX:MaxTenuringThreshold=1 -XX:G1SATBBufferEnqueueingThresholdPercent=30 -XX:G1ConcMarkStepDurationMillis=5 -XX:G1ConcRefinementServiceIntervalMillis=150 -XX:G1ConcRSHotCardLimit=16\n"})}),"\n",(0,a.jsx)(i.h2,{id:"zgc",children:"ZGC"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-shell",children:"-XX:+UseZGC -XX:AllocatePrefetchStyle=1 -XX:-ZProactive\n"})}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"\u4e0d\u8981\u5728 GraalVM \u4e0a\u4f7f\u7528 ZGenerational"})}),"\n",(0,a.jsx)(i.h2,{id:"\u6b63\u5728\u8003\u8651\u7684\u6807\u5fd7",children:"\u6b63\u5728\u8003\u8651\u7684\u6807\u5fd7"}),"\n",(0,a.jsxs)(i.p,{children:["\u66f4\u6fc0\u8fdb\u7684\u5185\u8054,\u5728 Graal \u4e2d\u901a\u8fc7",(0,a.jsx)(i.code,{children:"-Dgraal.BaseTargetSpending=160"}),"(\u9ed8\u8ba4\u4e3a 120)\u548c OpenJDK \u4e2d\u7684\u5176\u4ed6\u4e00\u4e9b\u6807\u5fd7\u3002\u5177\u6709\u8f83\u5927\u7f13\u5b58\u7684 CPU \u53ef\u80fd\u4f1a\u4ece\u4e2d\u53d7\u76ca"]}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.code,{children:"-Dgraal.OptWriteMotion=true"}),"\u548c",(0,a.jsx)(i.code,{children:"-Dgraal.WriteableCodeCache=true"})," ,\u770b\u8d77\u6765\u4e0d\u7a33\u5b9a,\u4f46\u5728 GraalVM 22.3.0 \u4e2d\u53ef\u80fd\u66f4\u7a33\u5b9a"]})]})}function X(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},25296:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var a=n(30758);const t={},r=a.createContext(t);function l(e){const i=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(r.Provider,{value:i},e.children)}}}]);