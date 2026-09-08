# 第一天源码：审批版本校验

文件：[approval-demo.js](approval-demo.js)

## 运行

安装 Node.js 后，在当前 src 目录执行（无需安装依赖、无需 API Key）：

```sh
node approval-demo.js
```

也可以在项目根目录执行：

```sh
node days/2026-09-08-day-01/src/approval-demo.js
```

## 观察结果

1. 未提供审批：返回 `waiting_review`。
2. 审批版本与计划版本一致：返回 `ready` 和建议任务。
3. 计划修改为第 2 版、审批仍为第 1 版：返回 `waiting_review`。

这是确定性的程序控制示例，说明模型建议与程序允许执行之间的边界。没有调用大模型、检索系统或外部工具，不是完整 Agent；`ready` 也不表示任务已创建。

真实系统还需要从服务端验证审批身份、权限和批准内容，不能信任客户端自行传入的审批对象。
