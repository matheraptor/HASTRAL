---
keyID: 1745001130000
type: concept
version: 0.1.0
status: draft
tags: [ollama, claude-code, cli, integration, local-model]
taxonomy: topics/operations/claude_code
---

# Concept: `ollama launch`

**Summary**: An Ollama CLI command (released January 2026) that sets up and bootstraps coding tools like Claude Code with a specified local model, handling environment variable configuration automatically.

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## Usage

```powershell
ollama launch claude --model <model_name>
# Examples:
ollama launch claude --model batiai/gemma4-e2b:q4
ollama launch claude --model gemma4-coder    # custom Modelfile build
```

## Critical Constraint: Variable Conflict

`ollama launch` auto-configures the Anthropic environment variables internally. If `ANTHROPIC_BASE_URL`, `ANTHROPIC_API_KEY`, or `ANTHROPIC_AUTH_TOKEN` are already set in the shell session, they **conflict** with the launcher and cause `ConnectionRefused` errors.

**Always clear them before calling `ollama launch`:**

```powershell
$env:ANTHROPIC_BASE_URL = $null
$env:ANTHROPIC_API_KEY = $null
$env:ANTHROPIC_AUTH_TOKEN = $null
ollama launch claude --model batiai/gemma4-e2b:q4
```

## Manual Alternative (No `ollama launch`)

If `ollama launch` is unavailable, manually configure and invoke:

```powershell
$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
$env:ANTHROPIC_AUTH_TOKEN = "ollama"
$env:ANTHROPIC_API_KEY = "ollama"
$env:CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC = "1"
claude --model <model_name>
```

## Related pages

- [[]] — Full setup walkthrough
- [[ollama_function_calling]] — Why model choice matters
- [[ollama_modelfile]] — How to build a custom model

