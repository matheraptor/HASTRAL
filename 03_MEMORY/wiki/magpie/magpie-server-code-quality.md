# MAGPIE Server Code Quality & Concerns

**Summary**: Codebase conventions, testing practices, and identified technical debt or concerns in the MAGPIE Server repository.

**Sources**: 
- `raw/MAGPIE_Server_CONVENTIONS.md`
- `raw/MAGPIE_Server_TESTING.md`
- `raw/MAGPIE_Server_CONCERNS.md`

**Last updated**: 2026-05-23

---

## Coding Conventions

- **Naming Patterns:** Screaming Snake Case or Pascal Case for core modules (`MAGPIE_SERVER.js`), CamelCase for functions and local variables.
- **Formatting:** Allman style braces (braces on new line) and tab indentation. No active linter detected.
- **Error Handling:** Extensive use of `try...catch`. Errors are prefixed and routed to custom logging functions like `MAGPIE_SERVER.error()`.
- **Documentation:** Extensive use of JSDoc for function signatures and `#region` comments for file organization.

## Testing

Currently, **automated testing is missing** from the project. 
- There is no test runner, assertion library, or dedicated test directory.
- Testing appears to be conducted manually via the live REPL console in `SERVER.js`.
- *Recommendation*: Introduce a standardized testing framework to safely refactor monolithic components.

## Technical Debt & Concerns

### Monolithic Core Modules
Files such as `core/physics.js`, `core/entity.js`, and `core/system.js` are extremely large (2,500 - 3,700 lines). These violate the principle of single responsibility, increasing cognitive load and regression risk.
- *Fix Approach*: Implement a systematic refactoring plan to break these into smaller domain-specific files.

### Fragile Physics Engine
The physics engine in `core/physics.js` contains complex calculations tightly coupled with `MAGPIE_SYSTEM` and `MAGPIE_ENTITY`. Modifications here are highly risky given the lack of automated tests.

### Performance Bottlenecks
Heavy dependency on synchronous `better-sqlite3` operations in `core/database.js` risks blocking the single-threaded event loop.
- *Improvement Path*: Ensure all heavy database queries are handled via the dedicated `core/database_worker.js`.

## Related pages
- [[magpie-server-architecture]]
- [[magpie-server-tech-stack]]