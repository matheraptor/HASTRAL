# Modular Monolith Architecture

**Summary**: A persistent, reliable server architecture using a modular monolith approach with workload splitting.

**Sources**: (source: server_scaling.md)

**Last updated**: 2026-04-20

---

For persistent "heartbeat" servers like MAGPIE, a modular monolith avoids the network overhead of microservices while providing workload isolation (source: server_scaling.md).

## Workload Management
- **Main Thread (Heartbeat):** Manages lightweight routing, state, and WebSocket I/O (source: server_scaling.md).
- **Worker Threads (Muscle):** Offloads heavy CPU computations (e.g., pathfinding, physics) to prevent main-thread lag (source: server_scaling.md).

## Philosophy
- **Modular Monolith:** Single deployment pipeline, unified codebase, yet logically segmented components (source: server_scaling.md).
- **Server-First Consistency:** Prioritize data integrity and persistence over twitch-response latency for user-side operations (source: server_scaling.md).

## Related pages
- [[topics/codecraft/architecture/index|Codecraft Architecture]]
- [[magpie-runtime]]
