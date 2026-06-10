# Coding Conventions

**Analysis Date:** 2026-05-23

## Naming Patterns

**Files:**
- Screaming Snake Case or Pascal Case used for core modules (e.g., `MAGPIE_SERVER.js`, `MAGPIE_DATABASE.js`).
- Directory structure generally uses lowercase (e.g., `core`, `handlers`, `plugins`).

**Functions:**
- CamelCase (e.g., `loginPlayer`, `saveEntities`, `guestRefresh`).
- Prefixed with underscores for internal/private helper methods (e.g., `_get_entity`, `__socketEmit`).

**Variables/Constants:**
- Screaming Snake Case for global constants/modules (e.g., `MAGPIE_SERVER`, `MAGPIE_DATABASE`).
- CamelCase for local variables (e.g., `ePrefix`, `layerName`).

## Code Style

**Formatting:**
- Indentation: Tabs used throughout the codebase.
- Braces: Allman style (braces on new line).

**Linting:**
- Not detected (no `.eslintrc` or similar found in project root).

## Import Organization

**Order:**
1. Internal modules via `require` (e.g., `require("./core/index")`).
2. Node.js built-in modules (e.g., `require("fs")`, `require("path")`).
3. Third-party packages (e.g., `require("express")`).

**Path Aliases:**
- Not detected.

## Error Handling

**Patterns:**
- Extensive use of `try...catch` blocks.
- Errors are usually prefixed with an identifier (e.g., `const ePrefix = "[HIVE].refresh: ";`) and handled by `MAGPIE_SERVER.error()`.
- Explicit error throwing with descriptive messages.

## Logging

**Framework:** Custom `MAGPIE_LOG` / `MAGPIE_SYSTEM.log`.

**Patterns:**
- Logs are routed through `MAGPIE_SERVER.log` which wraps system-level logging.
- Console logging is explicitly controlled via parameters.

## Comments

**When to Comment:**
- Regions are heavily used (`// #region`).
- JSDoc is used extensively for function signatures, parameter types, and module descriptions.

## Module Design

**Exports:**
- CommonJS (`module.exports` or direct assignment to `MAGPIE_SERVER`).
- Large files often use a singleton pattern attached to `MAGPIE_SERVER` or similar namespaces.

---

*Convention analysis: 2026-05-23*
