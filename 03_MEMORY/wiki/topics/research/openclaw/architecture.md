---
keyID: 1714242100000
type: page
version: 0.1.0 2026-04-27
status: stable
tags: [openclaw, architecture, react]
origin: [openclaw_research_20260427.md]
legacy: []
composition: []
composite: []
taxonomy: research/openclaw/architecture
---

# OpenClaw Architecture

**Summary**: Technical breakdown of the OpenClaw hub-and-spoke model and ReAct loop implementation.

**Sources**: `raw/openclaw_research_20260427.md`

**Last updated**: 2026-04-27

---

## 🏗️ Components

### 1. The Gateway
The Gateway is the orchestration layer. It manages:
- **Channel Adapters**: Normalizing input from diverse sources (Telegram, Discord, Slack).
- **Session Continuity**: Tracking context across disjointed messaging events.

### 2. The Agent Runtime
The execution engine that runs the **ReAct (Reason + Act)** loop.
- **Context Assembly**: Aggregating memory, skills, and current state.
- **Tool Interception**: Capturing LLM tool requests and executing them in a local sandbox.

## 🔁 The ReAct Loop

The loop follows a deterministic pattern:
1. **Thought**: LLM evaluates the state and decides on a tool or response.
2. **Action**: The runtime executes the requested tool.
3. **Observation**: The output is fed back into the context.

## Related pages

- OpenClaw Home
- [[topics/research/openclaw/heartbeat|Heartbeat System]]
- [[magpie-runtime|MAGPIE Runtime]]



