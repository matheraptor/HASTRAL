# MAGPIE Entity Structure

**Summary**: Entities are dumb containers of strict, schema-driven data designed to leverage V8 object shape optimization.

**Sources**: 6-00_architecture_RUNTIME-loop.md

**Last updated**: 2026-04-17

---

In the M.A.G.P.I.E. engine, entities are intentionally built as "dumb containers" of data, heavily optimized for the JavaScript V8 engine.

## Core Schema

Entities are composed of the following core properties:

- **ID**: An integer constructed directly from the creation timestamp down to the millisecond (format: `YYYYMMDDHHMMmmm`, e.g., `202602201844772`).
  - _Advantage_: Natively unique (assuming no multiple entity creations occur in the exact same millisecond).
  - _Advantage_: Natively provides the exact creation time of the entity without requiring a separate timestamp property.
- **type**: An integer/enum that immediately identifies exactly what the entity is against a database of hierarchical semantics (e.g., `3781` might map to "Arleigh-Burke-class Destroyer FlightIIIbatch2").
- **components**: An object containing key-value pairs representing the functional blocks attached to the entity.

## Component Optimization & V8 Hidden Classes

To avoid the hidden-class de-optimization problem in V8, the `components` object is strictly initialized with default values for _all_ components installed in the backend logic.

If new components are added during active development, the engine normalizes outdated entities during the `ultraTICK` (per-day) maintenance loop of the [[magpie-runtime]]. This ensures that all entities maintain a strict, identical object shape.

### Non-fixed Arrays

While V8 heavily prefers fixed-size elements, the engine accepts the performance loss of non-fixed dynamic arrays for specific situations where the size is unpredictable. For example, a `components.garrison` might range from an empty array to an array with 10,000+ slots.

### The POVAR Component

The `components.POVAR` is a critical physics module. The key is `POVAR` and the value is a strict 16-slot float array containing the Position, Orientation, Velocity, Acceleration, and Rotational vectors.

## Related pages

- [[magpie-runtime]]
- [[3-00-architecture-components]]
- [[povart-array]]
- [[zero-garbage-collection]]
