# MAGPIE Server v0.19.2 Audit Report

**Date**: 2026-04-27
**Subject**: MAGPIE Server Codebase (Work-in-Progress)
**Version**: 0.19.2

## 1. Architectural Core

The codebase is a sophisticated ECS/OOP hybrid built on Node.js. It prioritizes high-frequency physics simulation and real-time telemetry.

### 1.1 The POVART Buffer

- **Definition**: A `Float64Array` containing Position, Orientation, Velocity, Acceleration, Rotation, and Torque data.
- **Indices**: Defined in `core/index.js` and utilized throughout `MAGPIE_PHYSICS.js`.
- **Syncing**: The `POVART` state is the "ground truth" for each entity.

### 1.2 Telemetry & Socket Protocol

- **Server**: Node.js with Socket.io.
- **Rooms**: Entities are isolated into rooms: `entity_${id}`.
- **Events**:
  - `subscribe_entity(id)`: Client joins an entity's telemetry stream.
  - `entity_update`: Server broadcasts a processed JSON payload containing:
    - `coords`: [Lat, Lon, ASL] (Geodetic).
    - `Vspeed`/`Vknots`: Scalar velocity.
    - `Heading`: Absolute compass heading.
    - `Acceleration`: Scalar acceleration magnitude.
    - `CelestialBody`: Parent body name.
    - `targetCoords`: Target location geodetics.
    - `distanceTo`: Range to target.
    - `ETA`: Time to arrival.
  - `metastate`: Synchronizes server-time (metadate).

## 2. Main Execution Loops

- **Runtime**: Managed by `MAGPIE_RUNTIME.awake()` in `SERVER.js`.
- **Entity Refresh**: `MAGPIE_ENTITY.prototype.refresh()` handles logic updates.
- **Stratification**: Refresh rates are tiered into layers (`_GuestsBase`, `_GuestsStandard`, etc.) to optimize performance based on entity relevance.

## 3. Interaction & Cognition (WIP)

- **Systems**: Instinct, Impulse, Memory (3-System Cognition).
- **Emotes**: `processEmote` handles card-based or programmatic actions.
- **Stimuli**: Client-side stimuli injection is scaffolded but lacks a generic public handler in the current `entityHandler.js`.
- **Stubs**:
  - `_forces_applyAll`: Currently returns zero (placeholder for aero/physics).
  - `processAgency`: Logic loop for autonomous decision-making is currently a stub.

## 4. Operational Context

- **Namespace**: `MAGPIE` global namespace is used throughout the server and client.
- **REPL**: The server starts an interactive REPL (`MAGPIE_SERVER >`) for live debugging and scratchpad execution.
- **Plugins**: Extensive use of plugins (e.g., `scratchpad.js`) for modular capability extension.
