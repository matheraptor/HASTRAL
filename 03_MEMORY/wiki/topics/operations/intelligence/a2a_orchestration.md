---
keyID: 1713281140000
type: concept
version: 0.1.0
status: draft
tags: [operations, intelligence, a2a, swarms]
origin: [1713281000000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/intelligence
---

# A2A Orchestration

**Summary**: Building Agent-to-Agent (A2A) orchestration swarms using Vanilla JS, Qwen3.5, and Gemma 4.

**Sources**: (source: A2A_orchestration.md), (source: ClaudeCode_AntigravityProxy.md)

**Last updated**: 2026-04-16

---

Agent-to-Agent orchestration involves using a "Hub" or Orchestrator agent to direct specialized "Sub-agents" to perform complex tasks.

## Hub vs. Sub-agent Roles

- **Hub Agent (Orchestrator)**: Models like Qwen3.5 397B-A17B (MoE architecture) excel at structured planning, tool-use aggression, and high throughput. They use "thinking mode" to decompose requests and delegate tasks.
- **Sub-agents**: Models like Gemma 4 31B (Dense architecture) are better suited for creative writing, nuance, European languages, and document parsing due to high instruction fidelity and a more human-like voice.

## Implementation

Swarm scripts (e.g., `swarm.js`) can be built using Vanilla JavaScript and the Ollama Cloud client. The Hub agent outputs structured JSON, which the script parses to trigger the appropriate Sub-agent. This approach bypasses local hardware limits by pushing the heavy lifting to the cloud.

## Related pages

- [[]]
- [[]]

