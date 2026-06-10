# Memory Architecture

**Summary**: The four-layer memory system used by HASTRAL agents to maintain identity and context.
**Sources**: (source: CONVENTIONS.md)
**Last updated**: 2026-04-15

---

The memory architecture separates identity, session state, operational logic, and technical documentation.

## Layers of Memory

1. **LTM (Long-Term Memory)**: `[Agent]_sheet.md`. Defines the Identity and Persona. Read-Only during sessions.
2. **STM (Short-Term Memory)**: `[Agent]_STM.md`. Captures Session Context and FSM State (e.g., 21/31/11). Read-Write.
3. **FIRMWARE**: `FIRMWARE_directive.md`. Contains the core Operational Logic.
4. **MANUAL**: `[System]_manual.md`. The LLM mirror of the underlying code logic.

## Related pages

- [[operational-conventions]]
- [[terminology-index]]
