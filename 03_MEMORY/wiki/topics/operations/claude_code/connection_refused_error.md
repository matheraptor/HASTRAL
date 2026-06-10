---
keyID: 1745001160000
type: concept
version: 0.1.0
status: draft
tags: [ollama, claude-code, debugging, error, networking]
taxonomy: topics/operations/claude_code
---

# Concept: `ConnectionRefused` Error (Claude Code + Ollama)

**Summary**: A recurring error class when routing Claude Code to a local Ollama instance. Not a single root cause — it represents a chain of distinct failure modes that must be diagnosed in sequence.

**Sources**: `raw/ClaudeCode_custom-gemma4.md`

**Last updated**: 2026-04-18.

---

## Diagnosis Chain

**Step 1 — Is Ollama actually running?**
```powershell
curl http://localhost:11434
# Expected: "Ollama is running"
```
If this fails, start Ollama via the tray icon or `ollama serve`.

---

**Step 2 — Is `ANTHROPIC_BASE_URL` set to `.../v1`?**

Setting `ANTHROPIC_BASE_URL = "http://localhost:11434/v1"` causes Claude Code to double-append the path, resulting in requests to `/v1/v1/messages`, which Ollama rejects.

**Fix**: Use the bare port URL. (source: `ClaudeCode_custom-gemma4.md`)
```powershell
$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
```

---

**Step 3 — Are env vars conflicting with `ollama launch`?**

`ollama launch` auto-configures routing internally. Pre-existing env vars override its logic and create path nesting.

**Fix**: Clear all vars before launching.
```powershell
$env:ANTHROPIC_BASE_URL = $null
$env:ANTHROPIC_API_KEY = $null
$env:ANTHROPIC_AUTH_TOKEN = $null
ollama launch claude --model batiai/gemma4-e2b:q4
```

---

**Step 4 — Is there a stale `settings.json`?**

Claude attempts to call Anthropic's servers to authenticate the session. If it's still trying to log out via the cloud while routed locally, `claude logout` itself will throw `ConnectionRefused`.

**Fix**: Manually delete the auth config file.
```powershell
Remove-Item "$env:USERPROFILE\.claude\settings.json"
```

---

**Step 5 — Is `localhost` resolving correctly? (Windows-specific)**

On some Windows configurations, `localhost` does not map to `127.0.0.1` correctly.

**Fix**: Explicitly use the IP.
```powershell
$env:ANTHROPIC_BASE_URL = "http://127.0.0.1:11434"
```

## Related pages

- [[]] — Integration command (env var conflict source)
- [[]] — Full setup guide with all error resolutions
- [[ollama_function_calling]] — Separate error class (400, not ConnectionRefused)

