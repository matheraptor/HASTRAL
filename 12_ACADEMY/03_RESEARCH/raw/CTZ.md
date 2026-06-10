# CTZ Format Family - Compact Time Zulu

**Status**: CANONICAL STANDARD  
**Version**: 2.0  
**Effective**: 202512170603Z

---

## FORMAT FAMILY

### CTZ (Full Timestamp)

**Acronym**: CTZ  
**Expansion**: Compact Time Zulu  
**Pattern**: `yyyymmddHHMMZ`

**Components**:

- `yyyy` - Year (4 digits)
- `mm` - Month (01-12)
- `dd` - Day (01-31)
- `HH` - Hour (00-23, 24-hour format)
- `MM` - Minute (00-59)
- `Z` - Zulu time designator (UTC/GMT)

**Example**: `202512170603Z`  
**Use Cases**: Precise event timestamps, logs, scheduled operations

**Token Efficiency**: 3-5 tokens

---

### CTZD (Date Variant)

**Acronym**: CTZD  
**Expansion**: Compact Time Zulu - Date  
**Pattern**: `yyyymmdd`

**Components**:

- `yyyy` - Year (4 digits)
- `mm` - Month (01-12)
- `dd` - Day (01-31)

**Example**: `20251217`  
**Use Cases**: FRAG timestamps, deadlines, date-only references

**Rationale**: No time component = no timezone conversion needed, no `Z` suffix

**Token Efficiency**: 1-2 tokens

---

### CTZT (Time Variant)

**Acronym**: CTZT  
**Expansion**: Compact Time Zulu - Time  
**Pattern**: `HHMMZ`

**Components**:

- `HH` - Hour (00-23, 24-hour format)
- `MM` - Minute (00-59)
- `Z` - Zulu time designator (UTC/GMT)

**Example**: `0603Z`  
**Use Cases**: Operation windows, intra-day time references

**Rationale**: Date implied by context (current day or previously stated)

**Token Efficiency**: 1 token

---

## Design Rationale

**Token Efficiency**:

- No separators (hyphens, colons, T delimiter)
- Continuous digit stream allows BPE merging
- ~60-75% more token-efficient than ISO 8601
- CTZ: 3-5 tokens vs ISO 8601: 12 tokens
- CTZD: 1-2 tokens vs date string: 4-6 tokens
- CTZT: 1 token vs time string: 3-4 tokens

**Human Readability**:

- Optimized for logic-driven cognitive processing
- Continuous meaning block (no visual interruptions)
- Filename-safe (no special characters)

**Machine Compatibility**:

- Sortable (lexicographic order = chronological order)
- Fixed width (CTZ: 13 chars, CTZD: 8 chars, CTZT: 5 chars)
- Parseable with simple regex:
  - CTZ: `^\d{12}Z$`
  - CTZD: `^\d{8}$`
  - CTZT: `^\d{4}Z$`

---

## Timezone Conversion

**HASTRAL System Clock**: UTC+1 (Central European Time)

**Conversion Rule**: Local time → Subtract 1 hour → CTZ/CTZT

**Examples**:

**CTZ (Full)**:

- Local: `2025-12-17 07:03:41+01:00`
- CTZ: `202512170603Z`

**CTZD (Date only)**:

- Local: `2025-12-17`
- CTZD: `20251217`
- Note: No conversion needed (date is same in all timezones within ±12 hours)

**CTZT (Time only)**:

- Local: `07:03+01:00`
- CTZT: `0603Z`

**Edge Case**:

- Local: `2025-12-17 00:30:00+01:00`
- CTZ: `202512162330Z` (previous day in Zulu)
- CTZD: `20251216` (date changes)

**Critical**: Always convert to Zulu before formatting as CTZ or CTZT.

---

## Usage Examples

### CTZ (Precise Timestamps)

- **Logs**: `[202512170603Z] CTZ format family updated`
- **Events**: `Session ended: CTZ 202512170630Z`
- **JSON**: `"ctz": "202512170603Z"`

### CTZD (Date-Only)

- **FRAG IDs**: `FRAG-024-20251213.md`
- **Deadlines**: `Deadline: CTZD 20251231`
- **JSON**: `"ctzd": "20251217"`
- **FRAGBOARD**: `| FRAG | CTZD     | Status |`

### CTZT (Time-Only)

- **Operation Windows**: `Next window: CTZT 0700Z`
- **Session Markers**: `Session start: CTZT 0603Z`
- **Intra-day References**: `Window closes CTZT 1200Z`

---

## Format Selection Guide

| Context          | Format              | Example                | Rationale                  |
| ---------------- | ------------------- | ---------------------- | -------------------------- |
| Precise event    | **CTZ**             | `202512170603Z`        | Need exact timestamp       |
| FRAG creation    | **CTZD**            | `20251217`             | Date matters, time doesn't |
| Deadline         | **CTZD**            | `20251231`             | Date-only reference        |
| Operation window | **CTZT**            | `0700Z`                | Same-day time reference    |
| Log entry        | **CTZ**             | `202512170603Z`        | Full precision for audit   |
| Filename         | **CTZD** or **CTZ** | `FRAG-024-20251213.md` | Based on precision needs   |

---

## Comparison to Legacy Formats

| Format     | Example                | Tokens | Notes                       |
| ---------- | ---------------------- | ------ | --------------------------- |
| DTG (full) | `170603Z DEC 25`       | 5-7    | Military standard           |
| DTG (date) | `20251217`             | 2-3    | Date-only DTG               |
| ISO 8601   | `2025-12-17T06:03:00Z` | 12     | International standard      |
| **CTZ**    | `202512170603Z`        | 3-5    | **HASTRAL standard (full)** |
| **CTZD**   | `20251217`             | 1-2    | **HASTRAL standard (date)** |
| **CTZT**   | `0603Z`                | 1      | **HASTRAL standard (time)** |

---

**Authority**: COMMANDER.Valery / DISPATCHER.Jiro  
**Replaces**: DTG nomenclature system-wide  
**Version History**:

- v1.0 (202512170535Z): Initial CTZ format
- v2.0 (202512170603Z): Added CTZD/CTZT variants
