# Shutdown Hang Resolution

**Summary**: Details the root cause and resolution for the 10% progress hang during the `SERVER.BOOT.shutdown` sequence.

**Sources**: tmp/shutdown_debug.md

**Last updated**: 2026-05-25

---

## The Issue

The MAGPIE_Server shutdown sequence occasionally hung at 10% progress during the `MAGPIE_HIVE.save()` operation. The hang was caused by a deadlock or an unresolvable promise in the database worker interaction during the save sequence, which forced the server to rely on a 10-second fallback timeout to hard-terminate (`process.exit(signal)`).

## The Resolution

The issue was resolved by implementing a two-step fix:

1. **Diagnostic Logging**: Added explicit logging to `MAGPIE_HIVE.saveEntities()` to track the progression of database operations (base, game, TICK layers) and explicitly identify where transactions were hanging.
2. **Worker Termination Patch**: Implemented a forced worker termination via `worker.close()` in `database_worker.js`. This function explicitly closes the `worker.world` and `worker.server` before calling `process.exit(0)`. The `shutdown()` sequence in `SERVER.js` was updated to send a `{ method: 'close' }` message to the database worker immediately after the save sequence completes, releasing all database handles.

## Related pages

- [[magpie-hive]]
- [[database-sync-scripts]]
