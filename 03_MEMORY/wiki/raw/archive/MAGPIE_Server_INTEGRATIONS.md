# External Integrations

**Analysis Date: 2026-05-23**

## APIs & External Services

**Real-time Communication:**
- Socket.io - Used for real-time bidirectional communication.
  - Client: `socket.io-client`

**Security:**
- jsonwebtoken - Used for handling authentication and security tokens.

**Rate Limiting:**
- express-rate-limit - Used for API rate limiting to prevent abuse.

## Data Storage

**Databases:**
- SQLite (via `better-sqlite3`)
  - Connection: Managed via `core/database.js` and `core/database_worker.js`.
  - Database files: Located in `projects/MAGPIE_Server/db/` (`server.db`, `world.db`).

**File Storage:**
- Local filesystem - The application reads/writes local data files (`core/workers/fsio.js`).

## Authentication & Identity

**Auth Provider:**
- Custom - Implemented using `jsonwebtoken`.
  - Implementation: `core/auth.js` handles authentication logic.

## Monitoring & Observability

**Error Tracking:**
- None detected (uses `console.log` and standard error logging to files like `debug.log`).

**Logs:**
- Filesystem based (see `debug.log` and `test.log`).

## CI/CD & Deployment

**Hosting:**
- Custom (various `.sh` and `.ps1` scripts for server management, e.g., `run_server.sh`, `start.sh`).

**CI Pipeline:**
- None detected.

## Environment Configuration

**Required env vars:**
- `PORT`
- `jwtSecret`
- `domain`
- `project_id`
- `instance_name`
- `instance_ip`
- `instance_zone`
- `devMode`
- `isProduction`

**Secrets location:**
- Not explicitly defined, likely in `.env` (not included in repo).

## Webhooks & Callbacks

**Incoming:**
- Not detected.

**Outgoing:**
- Not detected.

---

*Integration audit: 2026-05-23*
