---
keyID: 1745001140000
type: concept
version: 0.1.0
status: draft
tags: [ollama, llm, function-calling, tools, agentic]
taxonomy: topics/research/llm_models
---

# Concept: Ollama Function Calling (Tool Support)

**Summary**: The mechanism by which Ollama models support structured function/tool calls in API requests. Required for any agentic CLI like Claude Code that dispatches tool definitions on every request.

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## How It Works

Claude Code sends a `tools` array (JSON/XML schema) in every API request, defining available actions like `read_file`, `list_files`, and `run_command`. Ollama checks the model's TEMPLATE metadata for tool-calling logic.

- **If the TEMPLATE includes tool logic** → the model can parse and format structured tool calls → ✅ Compatible.
- **If the TEMPLATE does NOT include tool logic** → Ollama returns `400: does not support tools` → ❌ Incompatible.

## Compatible Models (Verified)

| Model | Status |
|---|---|
| `batiai/gemma4-e2b:q4` | ✅ Native |
| `qwen2.5-coder:7b` | ✅ Compatible |
| `llama3.2:3b` | ✅ Compatible |
| `llama3.1:8b` | ✅ Compatible |
| `gemma3:1b` | ❌ Incompatible |

## Context Window Requirement

Even a compatible model will fail silently if the context window is too small. Claude Code's system prompt + tool schema definitions alone can consume **4,000+ tokens**. The default Ollama `num_ctx` is only **4,096 tokens**.

**Minimum viable context for Claude Code**: `num_ctx 32768`.

Set via [[]] or inline:
```
ollama run <model>
/set parameter num_ctx 32768
/save <model>-code
```

## Related pages

- [[]] — Permanent configuration method
- [[]] — Recommended model entity
- [[]] — Non-compatible example
- [[claude_code_custom_local_model]] — Full integration guide

