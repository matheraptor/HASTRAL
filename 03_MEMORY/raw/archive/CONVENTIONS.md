# CONVENTIONS & TERMINOLOGY INDEX

> **Purpose**: Standardization of terms across MAGPIE ecosystem.
> **Scope**: All Agents, Artifacts, and Documentation.

## 1. MEMORY ARCHITECTURE

- **LTM (Long-Term Memory)**: `[Agent]_sheet.md`. The Identity / Persona. Read-Only during session.
- **STM (Short-Term Memory)**: `[Agent]_STM.md`. The Session Context. Read-Write. FSM State `(21/31/11)`.
- **FIRMWARE**: `FIRMWARE_directive.md`. The Operational Logic.
- **MANUAL**: `[System]_manual.md`. The LLM Mirror of Code logic.

## 2. OPERATIONAL CODES

- **FRAG (Fragment)**: A specific task or mission unit. Format `FRAG-###`.
- **PKG (Package)**: A collection of related FRAGs/Code. Format `PKG-###`.
- **CTZ (Compact Time Zulu)**: Timestamp format `YYYYMMDDHHMMZ`.
- **CTZD (Compact Time Zulu Date)**: Date-only format `YYYYMMDD`.
- **CONDITIONS**:
  - LYNCHPIN: A condition that must be met for the FRAG to be completed. Format `- [ ] LYNCHPIN: [condition]`.
  - VULNERABILITY: A condition that must be avoided for the FRAG to remain valid/not FAILED. Format `- [ ] VULNERABILITY: [condition]`.

## 3. URGENCY CODES

Used to indicate the time investment for an activity — when/how soon should it be considered?
See [URGENCY](URGENCY.md)

## 4. GRAVITY CODE

Used to indicate the effort investment for an activity — why/how intensely should it be considered?
See [GRAVITY](GRAVITY.md)

## 5. VALIDATION

- **5-STEPS**: `Life > Success`, `Interaction > Completion`, `Honesty > Politeness`, `Meaning > Achievement`, `Accuracy > Speed`.
