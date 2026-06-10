---
keyID: 1713281355000
type: concept
version: 0.1.0
status: draft
tags: [operations, temporal, standards, ctz, tokens]
origin: [1713281350000]
legacy: []
composition: []
composite: []
taxonomy: topics/operations/temporal
---

# CTZ Timestamp Standard

**Summary**: The canonical standard for high-token-efficiency timestamps within the HASTRAL ecosystem, replacing legacy DTG and ISO 8601 formats.

**Sources**: (source: CTZ.md)

**Last updated**: 2026-04-15

---

## The CTZ Format Family

The CTZ family provides three variants based on the required precision and context.

### 1. CTZ (Full Timestamp)

**Pattern**: `yyyymmddHHMMZ`

- **Components**: Year(4), Month(2), Day(2), Hour(2), Minute(2), Zulu Designator(Z).
- **Example**: `202512170603Z`
- **Use Case**: Precise event timestamps, logs, scheduled operations.
- **Efficiency**: 3-5 tokens.

### 2. CTZD (Date Variant)

**Pattern**: `yyyymmdd`

- **Components**: Year(4), Month(2), Day(2).
- **Example**: `20251217`
- **Use Case**: FRAG timestamps, deadlines, date-only references.
- **Efficiency**: 1-2 tokens.

### 3. CTZT (Time Variant)

**Pattern**: `HHMMZ`

- **Components**: Hour(2), Minute(2), Zulu Designator(Z).
- **Example**: `0603Z`
- **Use Case**: Operation windows, intra-day time references.
- **Efficiency**: 1 token.

## Design Rationale

- **Token Efficiency**: Continuous digit streams allow BPE merging, making CTZ ~60-75% more efficient than ISO 8601.
- **Human Readability**: Optimized for logic-driven processing; continuous meaning blocks with no visual interruptions.
- **Machine Compatibility**: Fixed width and lexicographically sortable (lexicographic order = chronological order).

## Timezone Conversion

**System Clock**: UTC+1 (Central European Time).

**Conversion Rule**: `Local Time` $\rightarrow$ `Subtract 1 hour` $\rightarrow$ `CTZ/CTZT`.

### Examples:

- **Full**: Local `2025-12-17 07:03:41+01:00` $\rightarrow$ CTZ `202512170603Z`
- **Date**: Local `2025-12-17` $\rightarrow$ CTZD `20251217` (No conversion needed).
- **Time**: Local `07:03+01:00` $\rightarrow$ CTZT `0603Z`

**Critical**: Always convert to Zulu (UTC) before formatting as CTZ or CTZT.

## Format Selection Guide

| Context          | Recommended Format | Example         | Rationale                  |
| :--------------- | :----------------- | :-------------- | :------------------------- |
| Precise event    | **CTZ**            | `202512170603Z` | Exact timestamp needed     |
| FRAG creation    | **CTZD**           | `20251217`      | Date matters, time doesn't |
| Deadline         | **CTZD**           | `20251231`      | Date-only reference        |
| Operation window | **CTZT**           | `0700Z`         | Same-day time reference    |
| Log entry        | **CTZ**            | `202512170603Z` | Full precision for audit   |

## Related Pages

- [[]]

