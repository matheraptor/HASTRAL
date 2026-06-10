---
keyID: 1713281160000
type: concept
version: 0.1.0
status: draft
tags: [operations, intelligence, ralf, hooks]
origin: [1713281000000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/intelligence
---

# RALF Loops

**Summary**: Response-Action-Loop-Feedback mechanism using terminal hooks and exit codes to enforce programmatic constraints on Claude Code.

**Sources**: (source: claudeCode_CTX.md)

**Last updated**: 2026-04-16

---

RALF (Response-Action-Loop-Feedback) loops are a framework for creating self-correcting agent workflows in Claude Code. By using terminal hooks and exit codes, users can programmatically block undesirable behavior rather than relying on prompt instructions.

## Exit Code System

- **Exit Code 0 (Success)**: Task completed correctly; agent proceeds.
- **Non-Zero/Non-Two (Verbose/Non-Blocking)**: Soft errors logged without stopping the agent.
- **Exit Code 2 (Feedback/Blocking)**: The error message is fed directly back into Claude's context, forcing the agent to correct its action before proceeding.

This automates the "Definition of Done" and ensures strict adherence to project standards (e.g., blocking `pip` in favor of `uvicorn`).

## Related pages

- [[]]
- [[]]

