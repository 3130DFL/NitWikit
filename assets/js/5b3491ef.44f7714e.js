"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[9148],{54425:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(86070),i=o(25710);const r={sidebar_position:3,author:{commit:"ab46e6b",username:"postyizhan"}},s=void 0,a={id:"advance/cross-server/build-up/Velocity/velocity.toml",title:"velocity.toml",description:"\u4ee5\u4e0b\u914d\u7f6e\u4ec5\u4e3a\u6c49\u5316\u53c2\u8003  \u8bf7\u52ff\u76f4\u63a5\u590d\u5236\uff01\uff01",source:"@site/docs-java/advance/cross-server/build-up/Velocity/velocity.toml.md",sourceDirName:"advance/cross-server/build-up/Velocity",slug:"/advance/cross-server/build-up/Velocity/velocity.toml",permalink:"/NitWikit/Java/advance/cross-server/build-up/Velocity/velocity.toml",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/cross-server/build-up/Velocity/velocity.toml.md",tags:[],version:"current",lastUpdatedBy:"\u9a7f\u7ad9",lastUpdatedAt:1724239017e3,sidebarPosition:3,frontMatter:{sidebar_position:3,author:{commit:"ab46e6b",username:"ghost"}},sidebar:"tutorialSidebar",previous:{title:"\u642d\u5efa",permalink:"/NitWikit/Java/advance/cross-server/build-up/Velocity/build-up"},next:{title:"\u52a0\u5165\u670d\u52a1\u5668",permalink:"/NitWikit/Java/advance/cross-server/join-server"}},c={},l=[];function d(n){const e={code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u4ee5\u4e0b\u914d\u7f6e\u4ec5\u4e3a\u6c49\u5316\u53c2\u8003  ",(0,t.jsx)(e.strong,{children:"\u8bf7\u52ff\u76f4\u63a5\u590d\u5236\uff01\uff01"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",children:'# \u914d\u7f6e\u7248\u672c\u3002\u4e0d\u8981\u66f4\u6539\u8fd9\u4e2a\nconfig-version = "2.7"\n\n# \u4ee3\u7406\u5e94\u8be5\u7ed1\u5b9a\u5230\u54ea\u4e2a\u7aef\u53e3\uff1f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5c06\u7ed1\u5b9a\u523025577\u7aef\u53e3\u7684\u6240\u6709\u5730\u5740\u3002\nbind = "0.0.0.0:25577"\n\n# \u5e94\u8be5\u663e\u793a\u4ec0\u4e48MOTD\uff08\u670d\u52a1\u5668\u6d88\u606f\uff09\uff1f\u5f53\u73a9\u5bb6\u5c06\u4f60\u7684\u670d\u52a1\u5668\u6dfb\u52a0\u5230\u4ed6\u4eec\u7684\u670d\u52a1\u5668\u5217\u8868\u65f6\uff0c\u4f1a\u663e\u793a\u8fd9\u4e2a\u3002\u53ea\u63a5\u53d7MiniMessage\u683c\u5f0f\u3002\nmotd = "<#09add3>\u4e00\u4e2aVelocity\u670d\u52a1\u5668"\n\n# \u6211\u4eec\u5e94\u8be5\u663e\u793a\u591a\u5c11\u6700\u5927\u73a9\u5bb6\u6570\uff1f\uff08Velocity\u4e0d\u652f\u6301\u5728\u7ebf\u73a9\u5bb6\u6570\u7684\u9650\u5236\u3002\uff09\nshow-max-players = 500\n\n# \u6211\u4eec\u5e94\u8be5\u4f7f\u7528Mojang\u5bf9\u73a9\u5bb6\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u5417 \uff08\u8bd1\u8005\u6ce8: \u6b63\u7248\u9a8c\u8bc1\uff09\uff1f  \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u5f00\u542f\u7684\u3002\nonline-mode = true\n\n# \u4ee3\u7406\u662f\u5426\u5e94\u8be5\u5f3a\u5236\u6267\u884c\u65b0\u7684\u516c\u94a5\u5b89\u5168\u6807\u51c6\uff1f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u5f00\u542f\u7684\u3002\nforce-key-authentication = true\n\n# \u5982\u679c\u4ece\u8fd9\u4e2a\u4ee3\u7406\u53d1\u9001\u7684\u5ba2\u6237\u7aef\u7684ISP/AS\u4e0eMojang\u7684\u8ba4\u8bc1\u670d\u52a1\u5668\u7684\u4e0d\u540c\uff0c\u73a9\u5bb6\u5c06\u88ab\u8e22\u51fa\u3002\u8fd9\u7981\u6b62\u4e86\u4e00\u4e9bVPN\u548c\u4ee3\u7406\u8fde\u63a5\uff0c\u4f46\u8fd9\u662f\u4e00\u79cd\u8f83\u5f31\u7684\u4fdd\u62a4\u5f62\u5f0f\u3002\nprevent-client-proxy-connections = false\n\n# \u6211\u4eec\u5e94\u8be5\u5c06IP\u5730\u5740\u548c\u5176\u4ed6\u6570\u636e\u8f6c\u53d1\u5230\u540e\u7aef\u670d\u52a1\u5668\u5417\uff1f\n# \u53ef\u7528\u9009\u9879\uff1a\n# - "none":        \u4e0d\u4f1a\u8fdb\u884c\u4efb\u4f55\u8f6c\u53d1\u3002\u6240\u6709\u73a9\u5bb6\u770b\u8d77\u6765\u90fd\u662f\u4ece\u4ee3\u7406\u8fde\u63a5\u7684\uff0c\u5e76\u4e14\u5c06\u62e5\u6709\u79bb\u7ebf\u6a21\u5f0f\u7684UUID\u3002\n# - "legacy":      \u4ee5BungeeCord\u517c\u5bb9\u683c\u5f0f\u8f6c\u53d1\u73a9\u5bb6IP\u548cUUID\u3002\u5982\u679c\u4f60\u8fd0\u884c\u7684\u662fMinecraft 1.12\u6216\u66f4\u4f4e\u7248\u672c\u7684\u670d\u52a1\u5668\uff0c\u8bf7\u4f7f\u7528\u6b64\u9009\u9879\u3002\n# - "bungeeguard": \u4ee5BungeeGuard\u63d2\u4ef6\u652f\u6301\u7684\u683c\u5f0f\u8f6c\u53d1\u73a9\u5bb6IP\u548cUUID\u3002\u5982\u679c\u4f60\u8fd0\u884c\u7684\u662fMinecraft 1.12\u6216\u66f4\u4f4e\u7248\u672c\u7684\u670d\u52a1\u5668\uff0c\u5e76\u4e14\u65e0\u6cd5\u5b9e\u73b0\u7f51\u7edc\u7ea7\u9632\u706b\u5899\uff08\u5728\u5171\u4eab\u4e3b\u673a\u4e0a\uff09\uff0c\u8bf7\u4f7f\u7528\u6b64\u9009\u9879\u3002\n# - "modern":      \u4f7f\u7528Velocity\u7684\u539f\u751f\u8f6c\u53d1\uff0c\u5728\u767b\u5f55\u8fc7\u7a0b\u4e2d\u8f6c\u53d1\u73a9\u5bb6IP\u548cUUID\u3002\u4ec5\u9002\u7528\u4e8eMinecraft 1.13\u6216\u66f4\u9ad8\u7248\u672c\u3002\nplayer-info-forwarding-mode = "NONE"\n\n# \u5982\u679c\u4f60\u4f7f\u7528modern \u6216BungeeGuard IP\u8f6c\u53d1\uff0c\u8bf7\u5728\u6b64\u5904\u914d\u7f6e\u5305\u542b\u552f\u4e00\u5bc6\u94a5\u7684\u6587\u4ef6\u3002\n# \u6587\u4ef6\u5e94\u8be5\u662fUTF-8\u7f16\u7801\u7684\uff0c\u5e76\u4e14\u4e0d\u4e3a\u7a7a\u3002\nforwarding-secret-file = "forwarding.secret"\n\n# \u5ba3\u5e03\u4f60\u7684\u670d\u52a1\u5668\u662f\u5426\u652f\u6301Forge\u3002\u5982\u679c\u4f60\u8fd0\u884c\u4e00\u4e2a\u6a21\u7ec4\u670d\u52a1\u5668\uff0c\u6211\u4eec\u5efa\u8bae\u5f00\u542f\u8fd9\u4e2a\u3002\n#\n# \u5982\u679c\u4f60\u7684\u7f51\u7edc\u6301\u7eed\u8fd0\u884c\u4e00\u4e2a\u6a21\u7ec4\u5305\uff0c\u8003\u8651\u4f7f\u7528ping-passthrough = "mods"\u4ee3\u66ff\uff0c\u4ee5\u4fbf\u5728\u670d\u52a1\u5668\u5217\u8868\u4e2d\u66f4\u597d\u5730\u663e\u793a\u3002\nannounce-forge = false\n\n# \u5982\u679c\u542f\u7528\uff08\u9ed8\u8ba4\u4e3afalse\uff09\uff0c\u5e76\u4e14\u4ee3\u7406\u5904\u4e8e\u5728\u7ebf\u6a21\u5f0f\uff0cVelocity\u5c06\u8e22\u51fa\u4efb\u4f55\u5df2\u5728\u7ebf\u7684\u73a9\u5bb6\uff0c\u5982\u679c\u5c1d\u8bd5\u8fdb\u884c\u91cd\u590d\u8fde\u63a5\u3002\nkick-existing-players = false\n\n# Velocity\u662f\u5426\u5e94\u8be5\u5c06\u670d\u52a1\u5668\u5217\u8868ping\u8bf7\u6c42\u4f20\u9012\u7ed9\u540e\u7aef\u670d\u52a1\u5668\uff1f\n# \u53ef\u7528\u9009\u9879\uff1a\n# - "disabled":    \u4e0d\u4f1a\u8fdb\u884c\u4efb\u4f55\u4f20\u9012\u3002velocity.toml\u548cserver-icon.png\u5c06\u51b3\u5b9a\u521d\u59cb\u670d\u52a1\u5668\u5217\u8868ping\u54cd\u5e94\u3002\n# - "mods":        \u53ea\u5c06\u540e\u7aef\u670d\u52a1\u5668\u7684\u6a21\u7ec4\u5217\u8868\u4f20\u9012\u5230\u54cd\u5e94\u4e2d\u3002\n#                  \u4f7f\u7528\u4f60\u5c1d\u8bd5\u5217\u8868\u4e2d\u7684\u7b2c\u4e00\u4e2a\u670d\u52a1\u5668\uff08\u6216\u5f3a\u5236\u4e3b\u673a\uff09\u7684\u6a21\u7ec4\u5217\u8868\u3002\u5982\u679c\u65e0\u6cd5\u8054\u7cfb\u5230\u540e\u7aef\u670d\u52a1\u5668\uff0cVelocity\u5c06\u4e0d\u4f1a\u663e\u793a\u4efb\u4f55\u6a21\u7ec4\u4fe1\u606f\u3002\n# - "description": \u4f7f\u7528\u6765\u81ea\u540e\u7aef\u670d\u52a1\u5668\u7684\u63cf\u8ff0\u548c\u6a21\u7ec4\u5217\u8868\u3002\u5c1d\u8bd5\u5217\u8868\u4e2d\uff08\u6216\u5f3a\u5236\u4e3b\u673a\uff09\u54cd\u5e94\u7684\u7b2c\u4e00\u4e2a\u670d\u52a1\u5668\u5c06\u88ab\u7528\u4e8e\u63cf\u8ff0\u548c\u6a21\u7ec4\u5217\u8868\u3002\n# - "all":         \u4f7f\u7528\u540e\u7aef\u670d\u52a1\u5668\u7684\u54cd\u5e94\u4f5c\u4e3a\u4ee3\u7406\u54cd\u5e94\u3002\u5982\u679c\u6ca1\u6709\u670d\u52a1\u5668\u53ef\u4ee5\u8054\u7cfb\uff0c\u5c06\u4f7f\u7528Velocity\u914d\u7f6e\u3002\nping-passthrough = "DISABLED"\n\n# \u5982\u679c\u672a\u542f\u7528\uff08\u9ed8\u8ba4\u4e3atrue\uff09\uff0c\u73a9\u5bb6IP\u5730\u5740\u5c06\u88ab\u66ff\u6362\u4e3a<ip address withheld>\u5728\u65e5\u5fd7\u4e2d\nenable-player-address-logging = true\n\n[servers]\n# \u5728\u6b64\u5904\u914d\u7f6e\u4f60\u7684\u670d\u52a1\u5668\u3002\u6bcf\u4e2a\u952e\u4ee3\u8868\u670d\u52a1\u5668\u7684\u540d\u79f0\uff0c\u503c\u4ee3\u8868\u8981\u8fde\u63a5\u5230\u7684\u670d\u52a1\u5668\u7684IP\u5730\u5740\u3002\nlobby = "127.0.0.1:30066"\nfactions = "127.0.0.1:30067"\nminigames = "127.0.0.1:30068"\n\n# \u5f53\u73a9\u5bb6\u767b\u5f55\u6216\u4ece\u670d\u52a1\u5668\u88ab\u8e22\u51fa\u65f6\uff0c\u6211\u4eec\u5e94\u8be5\u5c1d\u8bd5\u8ba9\u4ed6\u8fdb\u5165\u54ea\u4e2a\u670d\u52a1\u5668\uff1f\ntry = [\n    "lobby"\n]\n\n[forced-hosts]\n# \u5728\u6b64\u5904\u914d\u7f6e\u4f60\u7684\u5f3a\u5236\u4e3b\u673a\u3002\n"lobby.example.com" = [\n    "lobby"\n]\n"factions.example.com" = [\n    "factions"\n]\n"minigames.example.com" = [\n    "minigames"\n]\n\n[advanced]\n# Minecraft\u6570\u636e\u5305\u5fc5\u987b\u6709\u591a\u5927\uff0c\u6211\u4eec\u624d\u4f1a\u538b\u7f29\u5b83\u3002\u5c06\u5176\u8bbe\u7f6e\u4e3a\u96f6\u5c06\u538b\u7f29\u6240\u6709\u6570\u636e\u5305\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a-1\u5c06\u5b8c\u5168\u7981\u7528\u538b\u7f29\u3002\ncompression-threshold = 256\n\n# \u5e94\u8be5\u8fdb\u884c\u591a\u5c11\u538b\u7f29\uff08\u4ece0-9\uff09\u3002\u9ed8\u8ba4\u662f-1\uff0c\u4f7f\u7528\u9ed8\u8ba4\u7ea7\u522b6\u3002\ncompression-level = -1\n\n# \u5ba2\u6237\u7aef\u5728\u4e0a\u6b21\u8fde\u63a5\u540e\u5141\u8bb8\u591a\u5feb\u8fde\u63a5\uff08\u4ee5\u6beb\u79d2\u4e3a\u5355\u4f4d\uff09\uff1f\u9ed8\u8ba4\u662f\u4e09\u79d2\u3002\u901a\u8fc7\u5c06\u5176\u8bbe\u7f6e\u4e3a0\u6765\u7981\u7528\u6b64\u529f\u80fd\u3002\nlogin-ratelimit = 3000\n\n# \u5728\u6b64\u5904\u6307\u5b9a\u8fde\u63a5\u8d85\u65f6\u7684\u81ea\u5b9a\u4e49\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u662f\u4e94\u79d2\u3002\nconnection-timeout = 5000\n\n# \u5728\u6b64\u5904\u6307\u5b9a\u8fde\u63a5\u7684\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4\u3002\u9ed8\u8ba4\u662f30\u79d2\u3002\nread-timeout = 30000\n\n# \u542f\u7528\u4e0eHAProxy\u7684PROXY\u534f\u8bae\u7684\u517c\u5bb9\u6027\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u8fd9\u662f\u5e72\u4ec0\u4e48\u7528\u7684\uff0c\u90a3\u4e48\u5c31\u4e0d\u8981\u542f\u7528\u5b83\u3002\nhaproxy-protocol = false\n\n# \u5728\u4ee3\u7406\u4e0a\u542f\u7528TCP\u5feb\u901f\u6253\u5f00\u652f\u6301\u3002\u9700\u8981\u4ee3\u7406\u5728Linux\u4e0a\u8fd0\u884c\u3002\ntcp-fast-open = false\n\n# \u5728Velocity\u4e0a\u542f\u7528BungeeCord\u63d2\u4ef6\u6d88\u606f\u901a\u9053\u652f\u6301\u3002\nbungee-plugin-message-channel = true\n\n# \u663e\u793a\u6765\u81ea\u5ba2\u6237\u7aef\u7684ping\u8bf7\u6c42\u5230\u4ee3\u7406\u3002\nshow-ping-requests = false\n\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cVelocity\u5c06\u5c1d\u8bd5\u4f18\u96c5\u5730\u5904\u7406\u7528\u6237\u610f\u5916\u5931\u53bb\u4e0e\u670d\u52a1\u5668\u7684\u8fde\u63a5\u800c\u6ca1\u6709\u660e\u786e\u7684\u65ad\u5f00\u6d88\u606f\u7684\u60c5\u51b5\uff0c\u901a\u8fc7\u5c1d\u8bd5\u56de\u9000\u7528\u6237\uff0c\u9664\u4e86\u8bfb\u53d6\u8d85\u65f6\u7684\u60c5\u51b5\u3002BungeeCord\u5c06\u65ad\u5f00\u7528\u6237\u8fde\u63a5\u3002\u4f60\u53ef\u4ee5\u7981\u7528\u6b64\u8bbe\u7f6e\u4ee5\u4f7f\u7528BungeeCord\u7684\u884c\u4e3a\u3002\nfailover-on-unexpected-server-disconnect = true\n\n# \u54111.13+\u5ba2\u6237\u7aef\u58f0\u660e\u4ee3\u7406\u547d\u4ee4\u3002\nannounce-proxy-commands = true\n\n# \u542f\u7528\u547d\u4ee4\u7684\u65e5\u5fd7\u8bb0\u5f55\nlog-command-executions = false\n\n# \u542f\u7528\u8bb0\u5f55\u73a9\u5bb6\u8fde\u63a5\u5230\u4ee3\u7406\uff0c\u5207\u6362\u670d\u52a1\u5668\u4ee5\u53ca\u4ece\u4ee3\u7406\u65ad\u5f00\u8fde\u63a5\u7684\u65e5\u5fd7\u3002\nlog-player-connections = true\n\n# \u5141\u8bb8\u901a\u8fc7Transfer\u6570\u636e\u5305\uff08Minecraft 1.20.5\uff09\u4ece\u5176\u4ed6\u4e3b\u673a\u4f20\u8f93\u7684\u73a9\u5bb6\u88ab\u63a5\u6536\u3002\naccepts-transfers = false\n\n[query]\n# \u662f\u5426\u542f\u7528\u5bf9GameSpy 4\u67e5\u8be2\u54cd\u5e94\u7684\u54cd\u5e94\u3002\nenabled = false\n\n# \u5982\u679c\u67e5\u8be2\u5df2\u542f\u7528\uff0c\u67e5\u8be2\u534f\u8bae\u5e94\u8be5\u5728\u54ea\u4e2a\u7aef\u53e3\u4e0a\u76d1\u542c\uff1f\nport = 25577\n\n# \u8fd9\u662f\u5411\u67e5\u8be2\u670d\u52a1\u62a5\u544a\u7684\u540d\u79f0\u3002\nmap = "Velocity"\n\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\u662f\u5426\u5e94\u8be5\u5728\u67e5\u8be2\u54cd\u5e94\u4e2d\u663e\u793a\u63d2\u4ef6\nshow-plugins = false\n'})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},25710:(n,e,o)=>{o.d(e,{R:()=>s,x:()=>a});var t=o(30758);const i={},r=t.createContext(i);function s(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);