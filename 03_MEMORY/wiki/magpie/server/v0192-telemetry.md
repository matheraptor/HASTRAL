---
keyID: 1714232644002
name: MAGPIE Telemetry Protocol (v0.19.2)
type: page
version: 0.19.2 2026-04-27
status: draft
tags: [magpie, telemetry, socketio, protocol]
origin: [magpie_server_v0192_audit.md]
legacy: []
composition: []
composite: []
taxonomy: magpie/server/v0192
---

# MAGPIE Telemetry Protocol (v0.19.2)

**Summary**: A Socket.io-based communication layer used to synchronize server-side physics states with client-side viewports.

**Sources**: `raw/magpie_server_v0192_audit.md`

**Last updated**: 2026-04-27

---

In **v0.19.2**, the telemetry system is optimized for real-time "Playback" mode. Clients connect to the server and subscribe to specific entities to receive high-frequency updates.

## Socket.io Events

| Event | Direction | Description |
| :--- | :--- | :--- |
| `subscribe_entity` | Client -> Server | Join the telemetry room `entity_${id}`. |
| `unsubscribe_entity` | Client -> Server | Leave the telemetry room. |
| `entity_update` | Server -> Client | Broadcast of pre-processed entity metrics. |
| `metastate` | Server -> Client | Sync of server metadate/game-time. |

## The `entity_update` Payload

Unlike the internal [[povart-array]], the socket payload is a JSON object containing human-readable geodetics and scalar magnitudes:

- `coords`: Geodetic [Lat, Lon, ASL].
- `Vspeed`/`Vknots`: Scalar velocity.
- `Heading`: Absolute compass heading.
- `ETA`: Time to target.
- (source: magpie_server_v0192_audit.md)

## Interaction Mechanisms

The protocol supports stimuli injection via the `processEmote` loop, although v0.19.2 lacks a generic public handler for direct client stimuli.

## Related Pages

- [[]]
- [[]]
- [[]]

