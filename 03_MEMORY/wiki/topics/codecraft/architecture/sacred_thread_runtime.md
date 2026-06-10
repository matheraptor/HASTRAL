# Sacred Thread Runtime

**Summary**: An architectural pattern that prioritizes runtime stability by isolating the processing thread from I/O interruptions.

**Sources**: (source: server_bunker_design.md)

**Last updated**: 2026-04-20

---

The Sacred Thread Runtime operates on a polling-based architecture to maintain predictable timing and high reliability.

- **Inbox Queue**: Network-level listeners (the "Gatekeeper") perform minimal validation (size/format) and push raw data into a memory-mapped buffer.
- **Tick-based Processing**: The Sacred Thread runs on a fixed `setInterval` loop. It drains the Inbox at its own pace, ensuring the runtime thread is never directly interrupted by high-volume socket traffic.
- **Load Shedding**: When the Inbox reaches capacity, new incoming requests are dropped to maintain system integrity over availability.

## Related pages

- [[server-bunker-design]]
