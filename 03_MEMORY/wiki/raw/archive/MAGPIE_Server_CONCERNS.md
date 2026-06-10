# Codebase Concerns

**Analysis Date:** 2026-05-23

## Tech Debt

**Monolithic Core Modules:**
- Issue: `core/physics.js`, `core/entity.js`, and `core/system.js` are extremely large (ranging from 2,500 to 3,700 lines). These files violate the principle of single responsibility and make testing and maintenance difficult.
- Files: `C:\Users\Marika\matheraptor\projects\MAGPIE_Server\core\physics.js`, `C:\Users\Marika\matheraptor\projects\MAGPIE_Server\core\entity.js`, `C:\Users\Marika\matheraptor\projects\MAGPIE_Server\core\system.js`
- Impact: Increased cognitive load for developers, high risk of regression, and difficulty in refactoring.
- Fix approach: Implement a systematic refactoring plan to break these modules into smaller, domain-specific files based on their internal functionality.

## Fragile Areas

**Physics Engine:**
- Files: `C:\Users\Marika\matheraptor\projects\MAGPIE_Server\core\physics.js`
- Why fragile: The file contains complex physics calculations and heavy coupling with `MAGPIE_SYSTEM` and `MAGPIE_ENTITY`. Due to its size, modifications are risky without extensive test coverage, which seems limited.
- Safe modification: Encapsulate specific physical calculations (kinematics, dynamics) into helper classes or modules and unit test them individually.

## Performance Bottlenecks

**Database Access:**
- Issue: Heavy dependency on `better-sqlite3` and potentially synchronous operations in `core/database.js` could cause event loop blocking, especially with `core/database_worker.js` existing suggests a need for off-loading.
- Files: `C:\Users\Marika\matheraptor\projects\MAGPIE_Server\core\database.js`, `C:\Users\Marika\matheraptor\projects\MAGPIE_Server\core\database_worker.js`
- Improvement path: Audit all database interactions for synchronous I/O and ensure heavy queries are exclusively handled via the worker thread.

## Missing Critical Features

**Automated Testing:**
- Problem: While test logs exist (`test.log`), there is no evidence of a standardized automated testing framework or directory structure for unit/integration tests in `projects/MAGPIE_Server`.
- Impact: High risk of undetected bugs and increased difficulty in safely refactoring the codebase.
- Priority: High.

---

*Concerns audit: 2026-05-23*
