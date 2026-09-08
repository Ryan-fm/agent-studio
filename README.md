# Agent 学习知识库 · 42 天版

面向有前端、Node.js 和 Python 经验的开发者，学习 AI 全栈与 Agent 应用开发。

- 计划日期：**2026-09-08 至 2026-10-19**（Asia/Shanghai），共 **6 周、42 天**。
- 原 84 天按相邻两天合并为一天，每天两个学习单元，保留全部原知识要点及学习顺序。
- 日期是计划日期，不表示知识已掌握、源码已完成或内容已发布。
- 只保存知识、配图及源码，不纳入社交平台稿件与发布状态。
- [42 天知识总览](KNOWLEDGE-MAP.md)：连续阅读所有学习单元。

## 每天怎样安排

先完成单元 1，再完成单元 2，最后一起复盘。原来的模块复盘内容保留在对应单元中。

压缩的是日历周期，不是学习内容量。若完整执行原来的实践，平均每天投入需要约为原来的两倍；请依据掌握情况调整，不用“读完”代替“学会”。

## 每天的目录结构

```text
days/YYYY-MM-DD-day-NN/
├── knowledge.md         # 当天两个单元的知识要点
├── images/              # 当天配图
└── src/                 # 当天源码和运行说明
```

已有第一天漫画和审批示例已保留，分别对应知识文档中的单元说明。其他单元的配图与源码随学习补充，不用空目录表示已完成。

本目录可以整体移动，内部使用相对链接。后续示例应注明依赖、运行方式及预期结果，不保存 API 密钥。

## 每日目录

### 第 1 周：模型基础与工具调用

2026-09-08 — 2026-09-14

| 日期 | 天数 | 学习内容 |
|---|---|---|
| 2026-09-08 | Day 01 | [LLM、RAG、工作流与 Agent / Token、上下文与 Attention](days/2026-09-08-day-01/knowledge.md) |
| 2026-09-09 | Day 02 | [提示词、示例与指令边界 / 采样、幻觉与技术选型](days/2026-09-09-day-02/knowledge.md) |
| 2026-09-10 | Day 03 | [结构化输出与业务校验 / 模型调用的可靠性](days/2026-09-10-day-03/knowledge.md) |
| 2026-09-11 | Day 04 | [模块复盘：需求分析助手 / Tool Calling 的消息往返](days/2026-09-11-day-04/knowledge.md) |
| 2026-09-12 | Day 05 | [工具接口设计 / 最小 Agent 执行循环](days/2026-09-12-day-05/knowledge.md) |
| 2026-09-13 | Day 06 | [并行工具调用与依赖 / 工具失败与循环控制](days/2026-09-13-day-06/knowledge.md) |
| 2026-09-14 | Day 07 | [固定工作流与动态 Agent 对照 / 模块复盘：独立实现工具循环](days/2026-09-14-day-07/knowledge.md) |

### 第 2 周：全栈交互与 RAG 基础

2026-09-15 — 2026-09-21

| 日期 | 天数 | 学习内容 |
|---|---|---|
| 2026-09-15 | Day 08 | [Python 异步与取消 / FastAPI 服务接口](days/2026-09-15-day-08/knowledge.md) |
| 2026-09-16 | Day 09 | [数据库、事务与运行记录 / SSE 与事件协议](days/2026-09-16-day-09/knowledge.md) |
| 2026-09-17 | Day 10 | [执行时间线与前端状态 / 断线恢复与业务取消](days/2026-09-17-day-10/knowledge.md) |
| 2026-09-18 | Day 11 | [模块复盘：前后端数据流 / RAG 链路与标注样本](days/2026-09-18-day-11/knowledge.md) |
| 2026-09-19 | Day 12 | [文档解析与来源定位 / 切分策略与信息完整性](days/2026-09-19-day-12/knowledge.md) |
| 2026-09-20 | Day 13 | [Embedding 与向量检索 / 检索指标与失败分析](days/2026-09-20-day-13/knowledge.md) |
| 2026-09-21 | Day 14 | [引用与无答案处理 / 模块复盘：检索报告](days/2026-09-21-day-14/knowledge.md) |

### 第 3 周：上下文工程与状态编排

2026-09-22 — 2026-09-28

| 日期 | 天数 | 学习内容 |
|---|---|---|
| 2026-09-22 | Day 15 | [关键词检索与精确匹配 / 混合检索与重排](days/2026-09-22-day-15/knowledge.md) |
| 2026-09-23 | Day 16 | [查询改写与问题拆解 / 上下文预算与组装](days/2026-09-23-day-16/knowledge.md) |
| 2026-09-24 | Day 17 | [多轮压缩与摘要 / 运行状态、事实与长期记忆](days/2026-09-24-day-17/knowledge.md) |
| 2026-09-25 | Day 18 | [模块复盘：上下文设计 / LangGraph 状态与节点](days/2026-09-25-day-18/knowledge.md) |
| 2026-09-26 | Day 19 | [状态合并与并行分支 / 检查点与执行身份](days/2026-09-26-day-19/knowledge.md) |
| 2026-09-27 | Day 20 | [人工介入与恢复输入 / 审批版本与编辑失效](days/2026-09-27-day-20/knowledge.md) |
| 2026-09-28 | Day 21 | [重放与外部副作用 / 模块复盘：编排框架取舍](days/2026-09-28-day-21/knowledge.md) |

### 第 4 周：可靠执行与 MCP

2026-09-29 — 2026-10-05

| 日期 | 天数 | 学习内容 |
|---|---|---|
| 2026-09-29 | Day 22 | [持久化队列与 worker / 锁、租约与任务回收](days/2026-09-29-day-22/knowledge.md) |
| 2026-09-30 | Day 23 | [外部 API 与最小权限 / 批准后执行真实写入](days/2026-09-30-day-23/knowledge.md) |
| 2026-10-01 | Day 24 | [至少一次执行与结果未知 / 部分成功、重试与取消](days/2026-10-01-day-24/knowledge.md) |
| 2026-10-02 | Day 25 | [模块复盘：故障恢复 / MCP 的角色与基本能力](days/2026-10-02-day-25/knowledge.md) |
| 2026-10-03 | Day 26 | [实现 MCP Server / MCP Client 与能力发现](days/2026-10-03-day-26/knowledge.md) |
| 2026-10-04 | Day 27 | [stdio 与远程传输 / MCP 故障与信任边界](days/2026-10-04-day-27/knowledge.md) |
| 2026-10-05 | Day 28 | [MCP、REST 与直接函数 / 模块复盘：工具协议](days/2026-10-05-day-28/knowledge.md) |

### 第 5 周：评测、安全与可观测性

2026-10-06 — 2026-10-12

| 日期 | 天数 | 学习内容 |
|---|---|---|
| 2026-10-06 | Day 29 | [测试与效果评测 / 数据集与保留集](days/2026-10-06-day-29/knowledge.md) |
| 2026-10-07 | Day 30 | [确定性评分与状态核验 / 人工评分与模型裁判](days/2026-10-07-day-30/knowledge.md) |
| 2026-10-08 | Day 31 | [重复运行与可靠性波动 / 对照与消融实验](days/2026-10-08-day-31/knowledge.md) |
| 2026-10-09 | Day 32 | [模块复盘：评测报告 / 认证与多租户授权](days/2026-10-09-day-32/knowledge.md) |
| 2026-10-10 | Day 33 | [提示注入与资料边界 / 凭据、文件与日志](days/2026-10-10-day-33/knowledge.md) |
| 2026-10-11 | Day 34 | [Trace 与执行定位 / 监控指标与异常提示](days/2026-10-11-day-34/knowledge.md) |
| 2026-10-12 | Day 35 | [并发限制与背压 / 模块复盘：线上排障](days/2026-10-12-day-35/knowledge.md) |

### 第 6 周：架构优化、部署与面试表达

2026-10-13 — 2026-10-19

| 日期 | 天数 | 学习内容 |
|---|---|---|
| 2026-10-13 | Day 36 | [Planner–Executor / 检查与迭代修订](days/2026-10-13-day-36/knowledge.md) |
| 2026-10-14 | Day 37 | [多 Agent 与协调成本 / Skills 与流程模板](days/2026-10-14-day-37/knowledge.md) |
| 2026-10-15 | Day 38 | [模型选择与任务适配 / 缓存与失效](days/2026-10-15-day-38/knowledge.md) |
| 2026-10-16 | Day 39 | [模块复盘：技术取舍 / 容器、配置与迁移](days/2026-10-16-day-39/knowledge.md) |
| 2026-10-17 | Day 40 | [CI 与评测分层 / 部署、备份与回滚](days/2026-10-17-day-40/knowledge.md) |
| 2026-10-18 | Day 41 | [架构文档与决策记录 / Demo 与简历证据](days/2026-10-18-day-41/knowledge.md) |
| 2026-10-19 | Day 42 | [系统设计与现场追问 / 最终验收与后续补强](days/2026-10-19-day-42/knowledge.md) |

## 参考资料入口

以下为知识学习参考；涉及 SDK、协议版本和具体参数时，以学习当天的官方文档为准。

- [Agent 与工作流的区分](https://www.anthropic.com/engineering/building-effective-agents)
- [FastAPI 异步编程](https://fastapi.tiangolo.com/async/)
- [检索与重排](https://www.sbert.net/examples/sentence_transformer/applications/retrieve_rerank/README.html)
- [上下文工程](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)
- [LangGraph 概览](https://docs.langchain.com/oss/python/langgraph/overview)
- [LangGraph 持久化](https://docs.langchain.com/oss/python/langgraph/persistence)
- [MCP 官方文档](https://modelcontextprotocol.io/)
- [Agent 效果评测](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
