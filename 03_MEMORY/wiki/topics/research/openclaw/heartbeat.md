---
keyID: 1714242200000
type: page
version: 0.1.0 2026-04-27
status: stable
tags: [openclaw, heartbeat, proactive]
origin: [openclaw_research_20260427.md]
legacy: []
composition: []
composite: []
taxonomy: research/openclaw/heartbeat
---

# OpenClaw Heartbeat System

**Summary**: Analysis of the proactive task execution and cron-driven wakeups in OpenClaw.

**Sources**: `raw/openclaw_research_20260427.md`

**Last updated**: 2026-04-27

---

## 💓 Mechanism

The Heartbeat is a background process that enables **Proactive Agency**. Unlike reactive chatbots, OpenClaw can initiate actions without a user trigger.

### Key Functions
- **Task Evaluation**: Checking a global task list (e.g., `HEARTBEAT.md`) for pending items.
- **Process Monitoring**: Waking up to check the status of asynchronous tools (builds, deployments).
- **Maintenance**: Triggering cleanup or memory consolidation routines.

## 🧠 Influence on MAGPIE

This system is the primary inspiration for the **MAGPIE Non-blocking Experience Queue**.
- In MAGPIE, the heartbeat ensures that "instincts" (low-level state changes) are processed even when the user is not interacting with the system.

## Related pages

- OpenClaw Home
- [[topics/research/openclaw/architecture|Architecture]]
- [[magpie-v20-runtime|MAGPIE v2.0 Runtime]]



