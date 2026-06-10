---
keyID: 1713281320000
type: concept
version: 0.1.0
status: draft
tags: [operations, logistics, strategy, conditions, risk]
origin: [1713281300000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/logistics
---

# Condition Logic

**Summary**: The standard for identifying external validation gates and risks associated with operational activities.

**Sources**: (source: OPERATIONAL_HIERARCHY.md)

**Last updated**: 2026-04-15

---

## Core Concept

A **CONDITION** is an external validation gate. It is distinct from the internal "purpose" of an activity.

## Operational Terminology

To maintain precision, HASTRAL uses specific terminology based on the perspective of the condition:

### 1. LYNCHPIN

A condition that **enables success**. An activity depends on the Lynchpin being satisfied.

- _Example_: `LYNCHPIN: PKG-009 (Agentgateway) is operational`.

### 2. VULNERABILITY

A condition that **can cause failure**. It represents a block to success.

- _Example_: `VULNERABILITY: npm dependency freeze unresolved`.

## Two-Way Relation

While the operational terms are Lynchpin and Vulnerability, they map to relational metadata for database/schema purposes:

- **SUCCESS CONDITION** $\rightarrow$ references $\rightarrow$ **LYNCHPIN**
- **FAILURE CONDITION** $\rightarrow$ references $\rightarrow$ **VULNERABILITY**

**Rule**: Always use **LYNCHPIN** and **VULNERABILITY** in operational communication; do not use "Success/Failure" as names for conditions.

## Related Pages

- [[]]
- [[]]

