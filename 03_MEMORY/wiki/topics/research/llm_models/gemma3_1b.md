---
keyID: 1745001120000
type: entity
version: 0.1.0
status: draft
tags: [llm, local-model, google, gemma, deprecated-for-tool-use]
taxonomy: topics/research/llm_models
---

# Entity: gemma3:1b

**Summary**: Google's Gemma 3 1B parameter model. Available on Ollama. Does NOT support function calling (tools), making it incompatible with Claude Code's agentic tool requirements.

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## Known Limitation

When used with Claude Code via `ollama launch claude --model gemma3:1b`, the API returns:

```
API Error: 400 {"type":"error","error":{"type":"invalid_request_error",
"message":"registry.ollama.ai/library/gemma3:1b does not support tools"}}
```

**Root Cause**: Claude Code sends a `tools` definition array in every API request. If the model's Ollama metadata does not include a `TEMPLATE` with function-calling logic, Ollama rejects the request outright. (source: `ClaudeCode_custom-gemma4.md`)

## Verdict

❌ **Incompatible with Claude Code.** Use [[]] or `qwen2.5-coder` instead.

## Related pages

- [[]] — Successor family with native tool support
- [[]] — Recommended replacement
- [[]] — Concept explaining why tool support matters

