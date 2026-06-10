---
title: MAGPIE_PLAYER
description: Logic extending entities for connected users.
tags: [MAGPIE, ECS, Entity, Player]
---

# MAGPIE_PLAYER

`MAGPIE_PLAYER` extends the standard `MAGPIE_ENTITY` to serve as the server-side representation of a connected human client.

## Specializations

While a standard entity relies entirely on `MAGPIE_Intelligence` or environmental systems for input, a player entity integrates directly with the network layer.

- **Input Buffering**: `MAGPIE_PLAYER` maintains an ingestion queue for incoming Socket.io payloads, validating them against the current tick rate to prevent speed-hacking.
- **Session Data**: It stores reference tokens mapping the ECS entity back to the authentication JWT and the specific socket connection ID.
- **Replication Delta**: The server prioritizes state updates for the player entity and its immediate vicinity, ensuring the connected client receives the necessary `POVART` updates to render the scene smoothly.