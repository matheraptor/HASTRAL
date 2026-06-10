---
title: Network vs Logic Tick Separation
description: Decoupling physics simulation from network heartbeats and bandwidth emission.
tags: [MAGPIE, Insights, Runtime, Network]
---

# Network vs Logic Tick Separation

A critical insight for Node.js MMO backends is the strict separation between the **Logic Tick** and the **Network Heartbeat**.

## Logic Tick (Simulation)
The `MAGPIE_RUNTIME` loop operates at a high frequency (e.g., 60Hz). It processes `MAGPIE_PHYSICS`, collision, and `MAGPIE_Intelligence`. This loop must never perform synchronous I/O or network health checks, as doing so would block the event loop and stall the physics for all connected players.

## Network Heartbeat (Stay-Alive)
Tracking whether a socket is dropped is handled on a completely separate, low-frequency interval (e.g., 0.1Hz or every 10 seconds). It uses a standard Ping/Pong mechanism. If a client fails to respond, it is flagged for cleanup, completely outside the critical path of the physics engine.

## State Broadcast (Egress)
While the game simulates at 60Hz, broadcasting updated `POVART` states via Socket.io at that rate would overwhelm client bandwidth. Instead, network state broadcast is handled at a lower decoupled frequency (e.g., 20Hz), streaming only the necessary interpolation targets to the clients.