---
title: MAGPIE_SCRATCHPAD
description: The scratchpad plugin system for runtime punch-in execution.
tags: [MAGPIE, Plugins, Runtime, REPL]
---

# MAGPIE_SCRATCHPAD

The Scratchpad is a unique runtime plugin integrated into the `SERVER.js` entry point. It allows for hot-reloading and script execution on a live server instance without requiring a full restart.

## Functionality

- **Live Interception**: The scratchpad acts as a REPL bridge. Administrators can drop `.js` scripts into a designated scratchpad folder, and the server will execute them within the global context.
- **Debugging & Repair**: This allows for injecting new ECS components, repairing corrupted entities, or forcing global state changes (like spawning a boss event) on the fly.
- **Scope**: Scripts executed via the scratchpad have full access to `MAGPIE_HIVE` and `MAGPIE_METASTATE`, meaning they must be written with caution as they can directly mutate the memory buffers.