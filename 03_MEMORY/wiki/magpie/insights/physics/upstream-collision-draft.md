---
title: Upstream Collision Design (Draft)
description: A proposed philosophy where MAGPIE_PHYSICS remains a stateless library while MAGPIE_ENTITY handles collision aftermath.
tags: [MAGPIE, Insights, Physics, Collision, Draft]
---

> [!WARNING]
> This document is currently a **Design Draft** and does not represent the consensus finalized philosophy. It is kept as an architectural reference.

# Upstream Collision Design (Draft)

When a high-speed entity intersects with terrain or another body, a systemic architectural dilemma arises: Should the Physics system calculate the structural damage and deflection, or should the Entity?

This draft proposes the **"Upstream Aftermath"** model.

## Core Philosophy: The Intelligence Gate
The physics engine (`tickEntity`) should not make autonomous decisions about entity-specific behaviors like "Compression" or "Orientation-based deflection." It should remain a **Stateless Math Library** (a Pure Geometric Utility).

Instead, the "Integrator Plug" is moved upstream to the decision layer (`MAGPIE_ENTITY`).

## The Resolution Flow
1. **Geometric Intersection:** The physics library's `checkCollision` method is called. It calculates the raw math and returns only the **Geometry of Contact** (Impact Time, Impact Point, and Surface Normal). It does *not* apply any forces.
2. **Stateful Orchestration:** The Entity receives these geometric coordinates and uses its own subjective properties (mass, rigidity, current state) to resolve the aftermath:
   - **Incoming Momentum:** $p = m \cdot V_{in}$
   - **Deflection:** Calculating the new $A$ and $T$ vectors based on the angle of incidence.
   - **Impulse:** The raw force transferred to the structure.
   - **Structural Damage:** Comparing internal kinetic delta against the ship/creature's structural integrity.

## Why Upstream?
By resolving the aftermath upstream (within `entity.update` or `system1`), the Entity remains the absolute **Decision Maker**. This architecture allows for "Instinctive" reactions to override pure math—for instance, an airplane deploying landing gear right before touchdown, or a creature bracing for impact, altering the "compression" coefficient right before the final physical displacement is finalized.