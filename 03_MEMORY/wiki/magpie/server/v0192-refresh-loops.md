---
keyID: 1714232644003
name: MAGPIE Execution Loops (v0.19.2)
type: page
version: 0.19.2 2026-04-27
status: draft
tags: [magpie, architecture, runtime, lifecycle]
origin: [magpie_server_v0192_audit.md]
legacy: []
composition: []
composite: []
taxonomy: magpie/server/v0192
---

# MAGPIE Execution Loops (v0.19.2)

**Summary**: A stratified timing system that manages entity logic and physics updates across different priority tiers.

**Sources**: `raw/magpie_server_v0192_audit.md`

**Last updated**: 2026-04-27

---

The execution flow in **v0.19.2** is managed by the `MAGPIE_RUNTIME` singleton. It ensures that the physics engine and entity cognition loops remain synchronized.

## Stratified Refresh Layers

To optimize CPU utilization, the server categorizes entities into "Guest" tiers with varying refresh frequencies:

- `_GuestsBase`: High-frequency core updates.
- `_GuestsStandard`: Standard priority logic.
- (source: core/entity.js)

## Update Lifecycle

1. **Awake**: `MAGPIE_RUNTIME.awake()` triggers the tick.
2. **Refresh**: `MAGPIE_ENTITY.prototype.refresh()` is called for all active entities.
3. **Agency/Emote**: Cognition and interactive emotes are processed.
4. **Emit**: Telemetry is broadcast via `_socketEmit`.

## WIP Stubs

In v0.19.2, several critical loop segments are still in development:

- `_forces_applyAll`: Physics integration for non-gravitational forces.
- `processAgency`: The primary decision-making loop for entity AI.

## Related Pages

- [[]]
- [[magpie-runtime]]
- [[hive-logic]]

