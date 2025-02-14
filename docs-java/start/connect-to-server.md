---
title: 连接服务器
sidebar_position: 6
---

# 连接服务器

## 端口

打开你服务器根目录的 `server.properties`

找到

```yaml
server-port=25565
```

`25565` 即 Minecraft 服务器的默认端口，如果不更改默认端口通常可省略不写

## 本地连接

:::warning

此方法仅适用于服务端和客户端在同一机器上的情况

:::

本机 IP ，通常有这样几种形式：

- localhost
- 127.0.0.1
- 0.0.0.0

如果你没有修改你的服务器端口，那么在你的 Minecraft 客户端中:

1. 点击多人游戏
2. 点击添加服务器
3. 输入上面提到的本地 IP 中的任意一个
4. 点击完成
5. 进入服务器

如果你修改了你的服务器端口，在回环地址后面加个冒号加上你改的端口即可

如:

- localhost:25566
- 127.0.0.1:25566
- 0.0.0.0:25566

:::warning

这里要使用英文的 `:` **不能使用中文**的 `：` ！

:::

## 远程连接

在开始让你的玩家远程连接至服务器的时候，请先确认有没有公网

### 我有公网

假设我现在的公网 IP 是 `114.51.14.191`，那么我的连接应该是输入 `114.51.14.191:25565`，

注意冒号后面的**端口号**应该和你设置的 **`server-port`** 一模一样，不然玩家无法连接

比如我现在把 **`server-port`** 改成了 **`9180`**，应该这么进入服务器 `114.51.14.191:9180`

如果我为 `114.51.14.191` 绑定了域名 `yizhan.wiki` ，那么你可以这么进 `yizhan.wiki:9180`

如果很不幸，你的玩家没有正常连接上来，请先按以下步骤检查

- 请尝试本地连接，如果不行，那么就是服务器有问题
- 如果本地连接正常，你可以尝试在防火墙中放行端口
- 检查你在路由器中是否把这个端口公开到公网

### 我没公网

查看 [内网穿透](https://nitwikit.yizhan.wiki/process/deploy/intranet-penetration) 部分，按照上面的教程把你的端口映射出去
