# Okay. Let's reset entirely, then

Let's go back to:

## seek target

```javascript
MAGPIE_PHYSICS._emote_seekTarget = function _emote_seekTarget(POVART0, P1, STATS, options)
{
  const K = MAGPIE.KEY.STATS;
  if(!options?.agility)
    options.agility = STATS[K.DEX];
  if(!options?.fwd)
    options.fwd = MAGPIE.KEY.POVART.FWD;
  const { P0, O0, V0, A0, R0, T0 } = this.decomp_POVART(POVART0)
  
  if(!options.Tmax)
  {
    const a = this._calculateAgilityAlpha(STATS);
    const a1 = this._get_agilityModifier(options.agility, a);
    const Tmax = this._getTmax(STATS, a1);
    options.Tmax = Tmax;
  }
  const Tmax = options.Tmax;
  const { At, arrived, proximity, braking } = this
    ._getAt(P0, V0, P1, STATS, options);
  const A1 = this.scaleVector(At, options.intensity)
  const Vmax = STATS[MAGPIE.KEY.STATS.VMAX];
  const Vcreep = Math.min(Vmax, options?.Vcreep || Vmax);
  const solutions = {};
  solutions.Ot = this._getOtToP1(P0, P1, O0);
  solutions.O1 = solutions.Ot;
  if(options?.geodetic)
  {
    if(options?.surface)
      solutions.O1 = this._rotor_clampToSurface(solutions.Ot, P0, options)
  }
  const Ot = solutions.O1;
  const pR = proximity 
    ? 1 
    : options?.pR || this._getATpR(Ot, P0, O0);
  const DeltaR = this._getDeltaR(O0, solutions.O1);
  const Rt = options?.Rmax ? this.vector_clamp_mag(DeltaR, options.Rmax) : DeltaR
  options.pR = pR;
  const Tt = this._getTt(Rt, R0, O0, options);
  const Asafe = () => {
    if(pR > 0.5) return A1;
    const S0 = this.mag(V0);
    if(S0 <= Vcreep) return [0,0,0]
    const unitV0 = this.scaleVector(V0, 1 / (S0 || 1));
    return this.scaleVector(unitV0, -this.mag(A1));
  }
  const newTt = this.scaleVector(Tt, this.mag(V0) < Vcreep 
    ? (1 - pR)
    : Math.max((1 - pR), 0.75));
  const As = Asafe();
  return {
    At: this.scaleVector(As, pR),
    Tt: this.vector_clamp_mag(newTt, Tmax),
    arrived, proximity, braking
  }
}
```

This method should calculate the At (velocity acceleration) and Tt (angular acceleration) solutions to get to the target position. We want At and Tt because we are then feeding them into our intent system, which will figure out HOW to achieve these targets (e.g. set throttle of an engine, turn the rudder, or move leg muscles to run).

The inputs are :

- POVART0:
  - initial P (position vector)
  - O (orientation rotor)
  - V (velocity vector)
  - A (acceleration vector -- gets reset to 0,0,0 every tick)
  - R (rotation bivector)
  - T (torque bivector aka angular acceleration)
- P1 is the target's position vector
- STATS give us the entity's parameters like length width etc
- Options contains some entity variables like Vspeeds presets, config flags like if this entity is travelling in geodetic space, and on the surface, if we have provided a Tmax, or a pR...

## _getTmax

we said should take STATS (dimensions, or, if present, Inertia tensors), and return the Tmax aka the maximum magnitude of angular acceleration bivector.

## get At

getAt should now be self-explanatory. We're figuring out how much to accelerate depending on current state

## get Ot to P1

this gives us the absolute orientation to P1

## rotor clamp to surface

## get ATpR

this gives us the priority ratio to smoothly switch between giving priority to Velocity Acceleration (At) or angular acceleration (Tt). 0 is 100% torque, 1 is 100% At.

## get deltaR

this gives us the difference between the current Rotation bivector (R0) and the desired Rotation bivector (R1) and we clamp it to max rotation (Rmax) and feed it as target Rotation (Rt) to _getTt as the target Ro

## finally, getTt

this method is a big mess. The original intent was simply to get a raw target torque (Tt aka target angular acceleration) but it inexorably became a mess thanks to AI misunderstanding intent and my inability to identify this context drift, accepting suggestions blindly.

## Insights: Fixing Rotational Instability

### The Root Causes

1. **Binary State Switching (Chattering):** Using a raw boolean `brakeDist >= magDesired` creates a "high-frequency toggle" between seeking and braking. The physics engine interprets this rapid switching as added energy (vibration/chatter) rather than a clean control signal, causing the runaway spin.
2. **The "Coast" Trap:** Returning `[0,0,0]` as a "neutral" state is valid for your engine, but if combined with an oscillating trigger, it causes the ship to lose its rotational maintenance torque, drift, and then be aggressively re-corrected.
3. **Control-Loop Discontinuity:** Trying to "blend" seeking torque and braking torque in a single formula creates a "kink" in the torque output curve. The physics integration loop hates discontinuities.

## The Architectural Solution: State-Machine Prioritization

The rotational controller must treat states as mutually exclusive priorities, not blended formulas.

### 1. State Machine Hierarchy

- **Priority 1: BRAKE:** If the kinematic braking distance predicts an overshoot, this MUST be the exclusive torque applied.
- **Priority 2: ARRIVE (Deadzone):** Once the alignment error and angular velocity are below the threshold, return `[0,0,0]` to halt all acceleration and maintain the final state.
- **Priority 3: SEEK / TRANSIT:** If neither of the above, apply either acceleration or hold-torque based on current rotation speed relative to the safe target rotation rate (`Rsafe`).

### 2. Implementation Rules

- **Hysteresis (The "Commitment" Buffer):** Trigger braking when `brakeDist >= (magDesired * 0.95)` instead of exactly `1.0`. This 5% buffer forces the system to commit to the braking state, eliminating chattering.
- **State Separation:** Do not blend torque formulas. Decide which physical law applies (Brake, Accelerate, Coast) and return the result for that single law.

## Tuning Guide

- **`Tsafe` (Angular Acceleration):** The "Muscle." If the ship is sluggish, increase this.
- **`0.95` (Hysteresis Buffer):** If the ship chatters at the braking transition, decrease this (e.g., to `0.9`) to make the state transition stickier.
- **`0.005` (Deadzone Threshold):** If the ship jitters when almost aligned, increase this to broaden the "perfectly arrived" deadzone.
