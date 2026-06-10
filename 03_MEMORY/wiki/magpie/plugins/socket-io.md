---
title: Socket.io Integration
description: Deep dive into the socket.io implementation, connections, and event emissions.
tags: [MAGPIE, Plugins, Network, Socket]
---

# Socket.io

MAGPIE utilizes `socket.io` to maintain persistent, low-latency WebSocket connections with clients. 

## Emission Pipeline

### Ingress (Client to Server)
Clients emit targeted events (e.g., `EMIT_MOVE`, `EMIT_ACTION`). These events are intercepted by `middleware.js` and wrapped. The payload is not executed immediately; instead, it is placed into an input buffer on the `MAGPIE_PLAYER` entity to be processed synchronously during the next `MAGPIE_RUNTIME` tick.

### Egress (Server to Client)
At the end of every `MAGPIE_RUNTIME` tick, the server loops through all active connections and broadcasts state deltas. (See **[Network vs Logic Tick Separation](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/insights/runtime/tick-separation.md)** for bandwidth scaling rationale).
- **Replication**: The server only broadcasts `POVART` and `MAGPIE_STATE` data for entities that are within the visibility range (Orbit/Zone) of the player's entity, saving massive amounts of bandwidth.
- **Binary Packing**: Critical float arrays are packed as raw binary buffers before emission to minimize serialization overhead compared to standard JSON stringification.