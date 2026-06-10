---
keyID: 1745001000000
type: article
version: 0.1.0
status: draft
tags: [operations, claude-code, ollama, gemma4, local-model, model-configuration]
origin: [ClaudeCode_custom-gemma4.md]
taxonomy: topics/operations/claude_code
---

# Claude Code: Custom Local Model Setup (Gemma 4 / Ollama)

**Summary**: Step-by-step resolution of `ConnectionRefused` errors when routing Claude Code to a local Ollama instance, culminating in a verified working configuration with `batiai/gemma4-e2b:q4` and a fully documented Modelfile template.

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## Problem: Claude Code Cannot Connect to Local Ollama

When attempting to route Claude Code to an Ollama local server instead of the Anthropic cloud, users encounter `ConnectionRefused` errors. The core issues and their resolutions are documented here.

## Environment Variable Configuration

Claude Code requires three specific env vars to route to a local Ollama instance:

```powershell
$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
$env:ANTHROPIC_AUTH_TOKEN = "ollama"
$env:ANTHROPIC_API_KEY = "ollama"
$env:CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = "1"
```

> **Key Constraint**: Do NOT set `ANTHROPIC_BASE_URL` to `.../v1`. Claude Code will double the path to `/v1/v1/messages`, causing connection failures. Use the bare port. (source: `ClaudeCode_custom-gemma4.md`)

## The `ollama launch` Integration

Ollama natively supports Claude Code via the `ollama launch` command (released January 2026):

```powershell
ollama launch claude --model <model_name>
```

This command manages the env var configuration internally. **Do not set manual environment variables when using `ollama launch`** — they conflict with the launcher's auto-config logic. Clear them first:

```powershell
$env:ANTHROPIC_BASE_URL = $null
$env:ANTHROPIC_API_KEY = $null
$env:ANTHROPIC_AUTH_TOKEN = $null
ollama launch claude --model batiai/gemma4-e2b:q4
```

## Model Requirement: Tool Support

Claude Code is an agentic CLI that calls tools (e.g., `list_files`, `read_file`) on every interaction. It requires a model with native **function calling** support.

- `gemma3:1b` — ❌ does NOT support tools. Returns a `400` error.
- `batiai/gemma4-e2b:q4` — ✅ Natively supports function calling. (source: `ClaudeCode_custom-gemma4.md`)

## Model: `batiai/gemma4-e2b:q4`

The recommended local model for Claude Code on memory-constrained hardware.

| Property | Value |
|---|---|
| Base Model | Google Gemma 4 E2B |
| Active Parameters | ~2.3B |
| Total Parameters | 5.1B (Per-Layer Embeddings) |
| VRAM (Q4) | ~3.2 GB |
| Context Window | 128K tokens |
| Tool / Function Calling | ✅ Native |
| Multimodal | ✅ Text, Image, Audio |

```powershell
ollama pull batiai/gemma4-e2b:q4
ollama launch claude --model batiai/gemma4-e2b:q4
```

## Modelfile Configuration Template

Create a `Modelfile` (no extension) for a custom-tuned version:

```
# Base model
FROM batiai/gemma4-e2b:q4

# --- PERFORMANCE & CONTEXT ---
PARAMETER num_ctx 32768
PARAMETER num_predict 4096
PARAMETER num_gpu 99         # Set to 0 for CPU-only, ~20 for 4GB VRAM split

# --- SAMPLING ---
PARAMETER temperature 0.5
PARAMETER top_p 0.95
PARAMETER top_k 64
PARAMETER min_p 0.01

# --- REPETITION CONTROL ---
PARAMETER repeat_penalty 1.0
PARAMETER repeat_last_n 64

# --- STOP TOKENS ---
PARAMETER stop "<turn|>"
PARAMETER stop "<end_of_turn>"

# --- PROMPT TEMPLATE ---
TEMPLATE """<bos>{{ if .System }}<start_of_turn>system
{{ .System }}<end_of_turn>
{{ end }}{{ if .Prompt }}<start_of_turn>user
{{ .Prompt }}<end_of_turn>
{{ end }}<start_of_turn>model
{{ .Response }}<end_of_turn>"""

SYSTEM """You are a highly capable AI software engineer using the Claude Code interface.
- You have native access to terminal and file system tools.
- Your goal is to solve the user's task by reading files, writing code, and running tests.
- Always provide concise, functional code and acknowledge constraints.
- When using tools, follow the structured XML/JSON schema requested by the CLI."""
```

Build and launch:

```powershell
ollama create gemma4-coder -f Modelfile
ollama list
ollama launch claude --model gemma4-coder
```

### Key Parameter Rationale

- **`num_ctx 32768`**: 32K is the sweet spot for 8–16GB RAM. Claude Code's system prompt + tool definitions alone can consume 4,000+ tokens, so this is the minimum viable context size for stable operation.
- **`temperature 0.5`**: Lower than the default `1.0` to reduce hallucinated tool calls and file path errors without sacrificing reasoning.
- **`repeat_penalty 1.0`**: Do not raise. Gemma 4 is sensitive to repetition penalties and will break repetitive but valid coding syntax (e.g., `import` statements) at values above `1.0`.

## VRAM / `num_gpu` Guidance

| VRAM Available | `num_gpu` Setting | Notes |
|---|---|---|
| 8GB+ | `99` | Full model + 32K context fits easily |
| 6GB | `99` | Tight but viable |
| 4GB | `~20` | Half layers on GPU, rest + context on system RAM |
| Integrated/Intel | `0` | CPU-only; slow but stable |

Verify layer count with:
```powershell
ollama show gemma4-coder --verbose
# Look for: block_count (= total transformer layers)
ollama ps
# Verify: PROCESSOR column shows target GPU %
```

## Common Troubleshooting

| Error | Cause | Fix |
|---|---|---|
| `ConnectionRefused` | Env vars conflicting with `ollama launch` auto-config | Clear all `ANTHROPIC_*` vars before using `ollama launch` |
| `/v1/v1/messages` path doubling | `ANTHROPIC_BASE_URL` set to `.../v1` | Remove `/v1` suffix; use bare port |
| `does not support tools` | Model lacks function-calling metadata | Switch to `batiai/gemma4-e2b:q4` or `qwen2.5-coder` |
| Context truncation / tool forget | `num_ctx` too low (default 4096) | Set `num_ctx 32768` in Modelfile |
| Claude shows wrong model in header | Stale `settings.json` | Delete `%USERPROFILE%\.claude\settings.json` |

## Related pages

- [[]]
- [[]]
- [[]]
- [[]]

