"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[2777],{40706:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var t=r(86070),s=r(25710),a=r(94212),i=r(26417);const l={title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",sidebar_position:3,author:{commit:"ab46e6b",username:"postyizhan"}},c="\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",u={id:"advance/Linux/keep-running",title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",description:"\u7531\u4e8eLinux\u7684\u4f1a\u8bdd\u673a\u5236\uff0c\u5728ssh\u65ad\u5f00\u8fde\u63a5\u4e4b\u540e\u624b\u52a8\u542f\u52a8\u7684\u670d\u52a1\u7aef\u4f1a\u505c\u6b62\u8fd0\u884c\uff0c\u800c\u6211\u4eec\u9700\u8981\u670d\u52a1\u7aef\u4fdd\u6301\u540e\u53f0\u8fd0\u884c\u3002",source:"@site/docs/advance/Linux/keep-running.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/keep-running",permalink:"/NitWikit/advance/Linux/keep-running",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/keep-running.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1724239017e3,sidebarPosition:3,frontMatter:{title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",sidebar_position:3,author:{commit:"ab46e6b",username:"ghost"}},sidebar:"tutorialSidebar",previous:{title:"\u8fde\u63a5\u670d\u52a1\u5668",permalink:"/NitWikit/advance/Linux/Connect-to-server"},next:{title:"\u5f00\u670d",permalink:"/NitWikit/advance/Linux/start"}},o={},d=[{value:"\u65b9\u6cd5\u4e00 screen(\u63a8\u8350)",id:"\u65b9\u6cd5\u4e00-screen\u63a8\u8350",level:2},{value:"\u65b9\u6cd5\u4e8c  \u9762\u677f(\u63a8\u8350)",id:"\u65b9\u6cd5\u4e8c--\u9762\u677f\u63a8\u8350",level:2},{value:"\u65b9\u6cd5\u4e09 Systemd",id:"\u65b9\u6cd5\u4e09-systemd",level:2},{value:"\u65b9\u6cd5\u56db nohup\u548c&amp;",id:"\u65b9\u6cd5\u56db-nohup\u548c",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728-linux-\u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",children:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c"})}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8eLinux\u7684\u4f1a\u8bdd\u673a\u5236\uff0c\u5728ssh\u65ad\u5f00\u8fde\u63a5\u4e4b\u540e\u624b\u52a8\u542f\u52a8\u7684\u670d\u52a1\u7aef\u4f1a\u505c\u6b62\u8fd0\u884c\uff0c\u800c\u6211\u4eec\u9700\u8981\u670d\u52a1\u7aef\u4fdd\u6301\u540e\u53f0\u8fd0\u884c\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e00-screen\u63a8\u8350",children:"\u65b9\u6cd5\u4e00 screen(\u63a8\u8350)"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528screen\u521b\u5efa\u4e00\u4e2a\u865a\u62df\u7684\u7a97\u53e3\u8fd0\u884c\u670d\u52a1\u7aef\uff0c\u9996\u5148\u5b89\u88c5screen\uff0c\u5728\u7ec8\u7aef\u8f93\u5165\uff1a"}),"\n",(0,t.jsxs)(n.p,{children:["\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u4e0a\u6709",(0,t.jsx)(n.code,{children:"screen"}),"\u5305\uff0c\u6ca1\u6709\u7684\u8bdd\u5b89\u88c5\u5b83\u4eec\uff1a"]}),"\n",(0,t.jsxs)(a.A,{children:[(0,t.jsx)(i.A,{value:"debian",label:"Debian/Ubuntu Linux",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apt-get install screen\n"})})}),(0,t.jsx)(i.A,{value:"redhat",label:"CentOS/Redhat Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yum install screen\n"})})}),(0,t.jsx)(i.A,{value:"arch",label:"Arch Linux",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:" pacman -Sy screen\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"screen \u7684\u57fa\u7840\u6307\u4ee4\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"screen -ls            # \u5217\u51fa\u6240\u6709\u7684 screen\nscreen -S xxx         # \u521b\u5efa\u4e00\u4e2a\u540d\u53eb xxx \u7684\u865a\u62df\u7a97\u53e3\uff08\u63a8\u8350\u4ee5\u6bcf\u4e2a\u5b50\u670d\u52a1\u5668\u547d\u540d\uff09\nscreen -r xxx         # \u8fdb\u5165 xxx \u865a\u62df\u7a97\u53e3\uff08\u53ea\u80fd\u8fdb\u5165\u5df2\u521b\u5efa\u4e14\u65e0\u4eba\u4f7f\u7528\u7684 screen\uff09\nscreen -D xxx         # \u8e22\u51fa\u6b63\u5728\u4f7f\u7528 xxx \u7a97\u53e3\u7684\u7528\u6237\nscreen -S xxx -X quit # \u5220\u9664 xxx \u7a97\u53e3\uff08\u5728 screen \u4e2d\u8f93\u5165 exit \u4e5f\u53ef\u4ee5\u5220\u9664\uff09\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u91cd\u65b0\u8fde\u63a5\u5230screen\u65f6\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"screen -Dr xxx"}),"\u6307\u4ee4\uff0c\u610f\u4e3a\u8e22\u51fa\u6b63\u5728\u4f7f\u7528 xxx \u7a97\u53e3\u7684\u7528\u6237\u5e76\u56de\u5230 xxx \u7a97\u53e3"]})}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 screen \u4e2d\u542f\u52a8\u670d\u52a1\u7aef\uff0c\u5728 screen \u4e2d\u65f6\uff0c\u6309\u5feb\u6377\u952e ",(0,t.jsx)(n.code,{children:"Ctrl + A + D"})," \u5373\u53ef\u8fd4\u56de\u539f\u7a97\u53e3\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u63a8\u8350\u539f\u56e0\uff1a\u540e\u53f0\u8fd0\u884c\u7684\u540c\u65f6\u8fd8\u53ef\u4ee5\u5728\u670d\u52a1\u7aef\u63a7\u5236\u53f0\u4e2d\u67e5\u770b\u65e5\u5fd7\uff0c\u6253\u6307\u4ee4"}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e8c--\u9762\u677f\u63a8\u8350",children:"\u65b9\u6cd5\u4e8c  \u9762\u677f(\u63a8\u8350)"}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982 mcsm\uff0c\u7b80\u5355\u65e0\u8111\u53ef\u89c6\u5316"}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e09-systemd",children:"\u65b9\u6cd5\u4e09 Systemd"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 vim \u547d\u4ee4\u521b\u5efa mc.service \u5355\u5143\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vim ~/.config/systemd/user/mc.service\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6587\u4ef6\u4e2d\u7684\u5185\u5bb9\u6309\u4ee5\u4e0b\u914d\u7f6e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[Unit]\nDescription=Minecraft Server\nAfter=network.target\n\n[Service]\nWorkingDirectory=\u8fd9\u91cc\u586b\u5de5\u4f5c\u76ee\u5f55\u8def\u5f84\nExecStart=\u8fd9\u91cc\u586b\u542f\u52a8\u547d\u4ee4\nExecStop=/bin/kill -SIGINT $MAINPID\nRestart=on-failure\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u914d\u7f6e\u5b8c\u6210\u540e\u8f93\u5165\u4ee5\u91cd\u65b0\u52a0\u8f7d\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl daemon-reload\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u542f\u52a8\u670d\u52a1\u5668\u5e76\u8bbe\u7f6e\u5f00\u673a\u542f\u52a8\uff0c\u5148\u540e\u8f93\u5165:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl --user start mc.service\nsystemctl --user enable mc.service\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["\u53ef\u4ee5\u901a\u8fc7",(0,t.jsx)(n.code,{children:"systemctl --user status mc.service"}),"\u67e5\u770b\u670d\u52a1\u8fd0\u884c\u72b6\u6001\u3002"]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://blog.csdn.net/WHQ78164/article/details/132956725",children:"\u8be6\u7ec6\u8bbe\u7f6e\u8bf4\u660e"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://wiki.archlinuxcn.org/wiki/Systemd#%E7%BC%96%E5%86%99%E5%8D%95%E5%85%83%E6%96%87%E4%BB%B6",children:"Arch wiki \u4e0a\u7684\u6559\u7a0b"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f18\u70b9\uff1a\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u91cd\u542f\uff0c\u5f00\u673a\u81ea\u542f\u7b49\u64cd\u4f5c"}),"\n",(0,t.jsx)(n.p,{children:"\u7f3a\u70b9\uff1a\u65e0\u6cd5\u8fdb\u5165\u63a7\u5236\u53f0\u6253\u6307\u4ee4"}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u6cd5\u56db-nohup\u548c",children:"\u65b9\u6cd5\u56db nohup\u548c&"}),"\n",(0,t.jsx)(n.p,{children:"&\uff1a\u5728\u542f\u52a8\u65f6\u540e\u9762\u52a0\u4e00\u4e2a&"}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1a./start.sh &"}),"\n",(0,t.jsx)(n.p,{children:"nohup\uff1a\u5728\u542f\u52a8\u65f6\u524d\u9762\u52a0\u4e0a\u8fd9\u4e2a"}),"\n",(0,t.jsx)(n.p,{children:"\u4f8b\u5982\uff1anohup ./start.sh > run.log 2>&1 &"}),"\n",(0,t.jsx)(n.p,{children:"\u8be6\u7ec6\u53c2\u6570\uff1a"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.p,{children:"Start.sh: \u4f60\u9700\u8981\u540e\u53f0\u8fd0\u884c\u7684\u7a0b\u5e8f"}),(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:": \u65e5\u5fd7\u6587\u4ef6\u8ffd\u52a0\u5230\u6587\u4ef6\u4e2d"}),"\n"]}),(0,t.jsx)(n.p,{children:"run.log: \u8fd0\u884c\u7684\u65e5\u5fd7\uff0c\u6216\u4f60\u7684\u6587\u4ef6\u7684\u8f93\u51fa\u5185\u5bb9"}),(0,t.jsx)(n.p,{children:"& \u662f\u4e00\u4e2a\u63cf\u8ff0\u7b26\uff0c\u5982\u679c1\u62162\u524d\u4e0d\u52a0&\uff0c\u4f1a\u88ab\u5f53\u6210\u4e00\u4e2a\u666e\u901a\u6587\u4ef6\u3002"}),(0,t.jsx)(n.p,{children:"1>&2 \u610f\u601d\u662f\u628a\u6807\u51c6\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u9519\u8bef."}),(0,t.jsx)(n.p,{children:"2>&1 \u610f\u601d\u662f\u628a\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u6807\u51c6\u8f93\u51fa\u3002"}),(0,t.jsx)(n.p,{children:"&>filename \u610f\u601d\u662f\u628a\u6807\u51c6\u8f93\u51fa\u548c\u6807\u51c6\u9519\u8bef\u8f93\u51fa\u90fd\u91cd\u5b9a\u5411\u5230\u6587\u4ef6filename\u4e2d"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},26417:(e,n,r)=>{r.d(n,{A:()=>i});r(30758);var t=r(13526);const s={tabItem:"tabItem_hSSP"};var a=r(86070);function i(e){let{children:n,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:r,children:n})}},94212:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(30758),s=r(13526),a=r(63505),i=r(25557),l=r(37482),c=r(88058),u=r(6083),o=r(33890);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,a=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[u,d]=p({queryString:r,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,o.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),f=(()=>{const e=u??m;return x({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{f&&c(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=r(83746);const f={tabList:"tabList_yHZW",tabItem:"tabItem_kytF"};var j=r(86070);function v(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),o=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(u(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:d,onClick:o,...a,className:(0,s.A)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(g,{...n,...e})]})}function k(e){const n=(0,b.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},25710:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(30758);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);