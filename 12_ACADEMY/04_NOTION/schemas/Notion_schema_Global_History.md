---
type: schema
version: 0.1.2 2026-04-18
status: draft
tags: [schema, notion, global-history]
---

# Notion Global History

*MISSION Schema (1:1 Record)*

- [Notion Global History](#notion-global-history)
  - [Sections](#sections)
    - [Event](#event)
    - [ID](#id)
    - [Type](#type)
    - [Status](#status)
    - [Gravity](#gravity)
    - [Urgency](#urgency)
    - [Ambiguity](#ambiguity)
    - [Date](#date)
    - [Package](#package)
    - [Linchpin](#linchpin)
    - [Vulnerabilities](#vulnerabilities)
    - [Success conditions](#success-conditions)
    - [Failure conditions](#failure-conditions)
    - [Parent event](#parent-event)
    - [Sub-event](#sub-event)
    - [Cause / Consequence](#cause--consequence)
    - [Location](#location)
    - [Target](#target)
    - [Sides involved](#sides-involved)
    - [Phase](#phase)
    - [Nation](#nation)
    - [Last edit time](#last-edit-time)

---

This is a static record of the Global History database schema at the time of synchronization.

## Sections

### Event

- **Type**: Title
- **Contents**: Primary page name

### ID

- **Type**: Unique ID
- **Contents**: Prefix: `FRAG`

### Type

- **Type**: Select
- **Contents**: `CONDITION`, `TRIGGER`, `Operation`, `Assignment`, `Mission`, `Task`, `Shared Memory`, `Shared info`, `Event`, `Phase`

### Status

- **Type**: Status
- **Contents**: `FORECAST`, `PLANNED`, `SCHEDULED`, `CONDITION`, `PENDING`, `ONGOING`, `SUSPENDED`, `DISMISSED`, `ACQUIRED`, `OPERATIONAL`, `COMPLETED`, `ABORTED`, `FAILED`

### Gravity

- **Type**: Select
- **Contents**: `💔 VITAL`, `❣️ SEVERE`, `❣️ PRESSING`, `☯️ IMPORTANT`, `☕ TRIVIAL`

### Urgency

- **Type**: Select
- **Contents**: `🚨 IMMEDIATE`, `⚠️ DIRE`, `⌛ CRITICAL`, `📌 SIGNIFICANT`, `☑️ NOMINAL`

### Ambiguity

- **Type**: Select
- **Contents**: `Universal`, `Ambiguous`, `Contested`, `Secret`, `Top Secret`

### Date

- **Type**: Date
- **Contents**: Specific event date

### Package

- **Type**: Relation
- **Contents**: Linked to `Deployment` database

### Linchpin

- **Type**: Relation
- **Contents**: Critical dependencies

### Vulnerabilities

- **Type**: Relation
- **Contents**: Risk factors

### Success conditions

- **Type**: Relation
- **Contents**: Success markers

### Failure conditions

- **Type**: Relation
- **Contents**: Failure triggers

### Parent event

- **Type**: Relation
- **Contents**: Operation / Parent mapping

### Sub-event

- **Type**: Relation
- **Contents**: Mission / Sub-task mapping

### Cause / Consequence

- **Type**: Relation
- **Contents**: Event chaining

### Location

- **Type**: Relation
- **Contents**: Geopolitical mapping

### Target

- **Type**: Relation
- **Contents**: Mission objective target

### Sides involved

- **Type**: Relation
- **Contents**: Entity actors

### Phase

- **Type**: Relation
- **Contents**: Timeline phase

### Nation

- **Type**: Rollup
- **Contents**: Geographical data

### Last edit time

- **Type**: Timestamp
- **Contents**: Auto-generated sync marker
