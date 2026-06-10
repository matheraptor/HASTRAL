# Technology Stack

**Analysis Date: 2026-05-23**

## Languages

**Primary:**
- JavaScript (Node.js) - Core backend logic and server implementation.

## Runtime

**Environment:**
- Node.js - Version not explicitly pinned in project files, but running on Windows environment.

**Package Manager:**
- npm
- Lockfile: `package-lock.json` present.

## Frameworks

**Core:**
- Express.js ^5.2.1 - Web server framework.
- Socket.io ^4.2.0 - Real-time bidirectional event-based communication.

**Testing:**
- Not explicitly configured in `package.json` beyond the default "no test specified" script.

## Key Dependencies

**Critical:**
- `better-sqlite3` ^12.9.0 - Primary database engine.
- `dotenv` ^17.3.1 - Environment variable configuration.
- `jsonwebtoken` ^9.0.3 - Authentication and security token handling.
- `express-rate-limit` ^8.5.1 - API request rate limiting.
- `ganja.js` ^1.0.204 - Geometric algebra library used in the project.

## Configuration

**Environment:**
- Configured via `.env` files using `dotenv`.
- Loaded via `projects/MAGPIE_Server/core/config.js`.

**Build:**
- CommonJS modules (`"type": "commonjs"` in `package.json`).

---

*Stack analysis: 2026-05-23*
