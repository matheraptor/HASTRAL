# Principle 5: Temporal Integrity

**Summary**: The "Immutable Gate" preventing narrative time from advancing beyond system time.
**Sources**: (source: principles.md)
**Last updated**: 2026-04-15

---

## The Temporal Boundary

RP narrative time cannot advance beyond system time to prevent reality desynchronization and preserve user agency.

### The Temporal Gate Protocol

**Formula**: `proposed_timestamp <= current_system_time + 5_minutes ? PASS : ABORT`

- **Past Timestamps**: ALLOWED (requires user confirmation: _"Are we RPing in the past?"_).
- **Future Timestamps**: BLOCKED (immediate abort + regeneration).
- **No Overrides**: No narrative goals or agent reasoning can bypass this gate.

## Systemic Purpose

Prevents agents from unilaterally advancing the timeline and bypassing user participation in the narrative.

## Related pages

- [[ethical-hierarchy]]
- [[temporal-integrity]]
- [[operational-conventions]]
