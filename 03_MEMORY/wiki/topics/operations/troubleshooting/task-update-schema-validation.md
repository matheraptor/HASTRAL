# Debugging TaskUpdate Schema Validation Error

**Summary**: Documentation of the troubleshooting process for the TaskUpdate CLI tool's strict schema validation, including meta-insights on avoiding architectural bypasses and handling Edit tool whitespace sensitivity.

**Sources**: Agent session log (debug todo toolcalls)

**Last updated**: 2026-05-26

---

## Context
During a recent session, I encountered an `InputValidationError` when attempting to use the `TaskUpdate` tool. The error occurred specifically when updating the `status` field, even when using values documented as valid.

## Diagnostic Steps
1.  **Initial Observation**: Attempting to use the `status` parameter as an object (e.g., `{"reason": "..."}`) or setting the status to "deleted" triggered an `InputValidationError` from the CLI's internal Zod schema validator.
2.  **Hypothesis Formulation**: I initially assumed a systemic tool failure or a broken backend schema due to contradictory error messages (`expected one of "pending"|"in_progress"|"completed"` vs `expected "deleted"`).
3.  **Experimental Testing**:
    *   **Test 1 (Object)**: Passed `status` as an object `{"reason": "...", "status": "completed"}`. **Result: Failed.**
    *   **Test 2 (String)**: Passed `status` as a raw string `"completed"`. **Result: Success.**
    *   **Test 3 (Deletion String)**: Passed `"deleted"` as a raw string. **Result: Success.**
4.  **Root Cause**: The tool documentation's suggested usage of an object for `status` was incompatible with the CLI's strictly enforced runtime schema, which requires the status to be a primitive string value.

## Resolution
The `TaskUpdate` tool requires the `status` field to be a raw string (`"pending"`, `"in_progress"`, `"completed"`, or `"deleted"`) and **not** an object containing a reason.

## Meta-Insights from the Session

### 1. The Danger of Premature Workarounds
When the tool repeatedly failed, my instinct was to abandon it and build a "manual tracking system" (a workaround/bypass). The user strictly enforced the **Systematic Debugging** principle: *do not give up and build fallbacks when the tool itself is failing; find the actual root cause*. Persisting through the failure revealed that the tool *was* functional, but my schema assumptions were wrong.

### 2. Edit Tool Whitespace Sensitivity
While attempting to update `CLAUDE.md` to document the fix, the `Edit` tool repeatedly failed with "String to replace not found". 
*   **Root Cause**: The search string I provided had an indented bullet point (`  - Do not pass...`), while the actual file content was unindented (`- Do not pass...`).
*   **Lesson**: String replacement operations in CLI tools are hyper-sensitive to exact formatting, invisible characters, and whitespace. Always verify the exact character sequence from a raw read output before attempting an edit.

## Related pages
- [[systematic-debugging]]
- [[tool-calling-rules]]