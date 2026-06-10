# MAGPIE Server Technology Stack

**Summary**: Outlines the core technologies, frameworks, and external integrations used by MAGPIE Server.

**Sources**: 
- `raw/MAGPIE_Server_STACK.md`
- `raw/MAGPIE_Server_INTEGRATIONS.md`

**Last updated**: 2026-05-23

---

## Core Technologies

MAGPIE Server is primarily built on **JavaScript (Node.js)** utilizing CommonJS modules.

- **Web Server:** Express.js ^5.2.1
- **Real-time Communication:** Socket.io ^4.2.0 for bidirectional event-based communication.
- **Database:** SQLite (via `better-sqlite3` ^12.9.0)

## External Integrations

- **Authentication:** Custom implementation in `core/auth.js` utilizing `jsonwebtoken` (^9.0.3).
- **Rate Limiting:** `express-rate-limit` (^8.5.1) to prevent API abuse.
- **Math/Physics:** `ganja.js` (^1.0.204) for geometric algebra calculations.
- **Configuration:** Managed via `.env` files using `dotenv` (^17.3.1).

## Infrastructure

- **Hosting:** Custom deployment managed via various shell scripts (`run_server.sh`, `start.sh`, `run_server.ps1`).
- **Data Storage:** SQLite database files are maintained in the `db/` directory (`server.db`, `world.db`), alongside local filesystem storage for data files.

## Related pages
- [[magpie-server-architecture]]
- [[magpie-server-code-quality]]