---
keyID: 1713280961000
type: concept
version: 0.1.0
status: draft
tags: [operations, claude-code, proxy]
origin: [1713281000000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/claude_code
---

# Claude Code Antigravity Proxy

**Summary**: Leveraging Antigravity-style visual artifacts inside VS Code and connecting Claude Code to Ollama cloud models.

**Sources**: (source: ClaudeCode_AntigravityProxy.md)

**Last updated**: 2026-04-16

---

The Antigravity Proxy allows developers to bridge the terminal-centric Claude Code CLI with visual ideation and artifacts directly within the IDE (such as VS Code).

## Ollama Cloud Integration

By utilizing the official Anthropic API compatibility in Ollama (v0.14.0+), users can point Claude Code directly at cloud-hosted models (like Qwen3.5 397B or Gemma 4 31B) to bypass local hardware limitations.

- Requires initializing the Ollama client with a remote host URL and setting the `Authorization` header with a bearer token.
- Sub-agents can be invoked directly from Claude Code by defining commands in the project's `CLAUDE.md` file.

## Related pages

- [[]]
- [[]]

