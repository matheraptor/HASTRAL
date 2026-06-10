---
keyID: 1745001110000
type: entity
version: 0.1.0
status: draft
tags: [llm, local-model, google, gemma]
taxonomy: topics/research/llm_models
---

# Entity: Gemma 4 E2B

**Summary**: Google's smallest Gemma 4 edge model. Released April 2, 2026. Natively multimodal and function-calling capable, designed for on-device "agentic" workflows.

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## Family Overview

The Gemma 4 family ships in four sizes: E2B, E4B, 26B A4B, and 31B. The E (Edge) models are designed for constrained environments.

| Model | Effective Params | Best Use | Min RAM |
|---|---|---|---|
| **E2B (this)** | ~2.3B | Simple CLI tasks, single-file edits | ~4GB |
| E4B | ~4B | Better reasoning, complex commands | ~8GB |
| 31B Dense | 31B | Multi-file refactoring, project audits | ~32GB |

## E2B Specifications

- **Architecture**: Per-Layer Embeddings (PLE) — 5.1B total params, ~2.3B effective
- **Context Window**: 128K tokens
- **Capabilities**: Function calling, chain-of-thought reasoning, multimodal (text/image/audio)
- **License**: Apache 2.0

## Recommended Ollama Build

See [[]] for the community Q4 build tested with Claude Code.

## Related pages

- [[]] — Optimized Ollama build for Claude Code
- [[]] — Previous generation (no tool support)
- [[claude_code_custom_local_model]] — Full setup guide

