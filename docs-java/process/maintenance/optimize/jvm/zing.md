---
sidebar_position: 6
title: Azul Zing
slug: /optimize/jvm/zing
---

# Azul Zing

通用内容的参数可以使用(比如大页)，但不要自行指定GC，或其他优化参数

## 一步到位

```text
-XX:ProfileLogIn=readynow -XX:ProfileLogOut=readynow -XX:+FalconUseCompileStashing -XX:+CompactStrings
```

勇者加上`-XX:FalconOptimizationLevel=3`

安装了 ZST 加上`-XX:+UseZST`

## ReadyNow

你大概已经注意到了，Zing的预热期很长，ReadyNow就是来解决这个问题的

若要启用 ReadyNow，请添加以下命令行选项，其中两者`<file>`通常相同：

`-XX:ProfileLogIn=<file>` 指示 Azul Platform Prime 使用现有配置文件日志中的信息。

`-XX:ProfileLogOut=<file>` 记录之前的编译和运行中的去优化决策。

然后，运行应用程序将自动生成或更新配置文件日志。此配置文件日志将在应用程序的后续运行时使用，从而改进预热。

官方推荐所有重要函数执行**5万遍**

添加`-XX:+FalconUseCompileStashing`以使用编译存储

## 垃圾回收器

C4 是 Zing 中唯一的垃圾收集器，取代了 OpenJDK 中可用的其他垃圾收集器。

## 紧凑字符串

添加选项`-XX:+CompactStrings`可减少内存占用，提高字符串密集型应用程序的性能，并减少花费在垃圾回收上的时间

## 更高级别的 Falcon 优化

使用选项`-XX:FalconOptimizationLevel=3`可以获得更高级别的优化，但会出现更多兼容性问题

## Zing System Tool

这玩意可以让你的系统更加适应Zing，可以自动优化系统配置

[官方安装教程](https://docs.azul.com/prime/zst/installation)

使用`-XX:+UseZST` 开启