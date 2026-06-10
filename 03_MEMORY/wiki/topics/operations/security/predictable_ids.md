# Predictable IDs

**Summary**: The security rationale behind using predictable temporal IDs (`Date.now()`) instead of UUIDs, relying on authorization logic and rate limiting for defense.

**Sources**: leveraging_db_for_shelderEvo.md

**Last updated**: 2026-05-04.

---

## ID Obscurity vs. Authorization

In web architecture, exposing sequential or predictable primary keys (like `Date.now()`) is often cited as a vulnerability because it allows attackers to map the database and perform **Insecure Direct Object Reference (IDOR)** attacks by guessing IDs.

However, in the context of the HASTRAL procedural universe, utilizing `Date.now()` is considered secure and optimal because the architecture relies on **Deep Defense** rather than obscurity.

### 1. Identity vs. Authorization

The system strictly separates "who you are" from "what you can do":
- **Identity**: Proven via JWT (JSON Web Tokens) attached to sockets.
- **Authorization**: Business logic running in the V8 engine explicitly verifies ownership (`requester_id === owner_id`) before returning any sensitive data. Guessing an ID is useless if the system rejects the query at the authorization layer.

### 2. Preventing Mass Enumeration

Predictable IDs theoretically allow a bad actor to run a script requesting every millisecond timestamp to scrape the database. This is mitigated by:
- **Rate Limiting**: Socket connections are strictly throttled. Attempting to "walk" the database triggers the rate limiter, dropping the connection before any meaningful scraping can occur.
- **Closed Ecosystem**: Entities only respond to localized, contextual events within the simulation, meaning "global" arbitrary queries are syntactically impossible for external clients.

## Benefits of Date.now() IDs

Accepting the lack of obscurity provides tangible performance benefits for the procedural simulation:

1. **Native Temporal Sorting**: Every ID inherently encodes its creation time, providing a free chronological index without needing an extra `created_at` column.
2. **Procedural Metadata**: The timestamp acts as an operational metric for cascading urgency levels and managing the lifecycle of entities in the [[lazy-hive-architecture|Lazy Hive]].
3. **No Collision Risk**: Because operations are processed via sequential asynchronous loops (single-threaded), and the entry point restricts operations to a maximum of 1 per millisecond, ID collisions are structurally impossible.

## Related pages

- [[lazy-hive-architecture]]
- [[sqlite3-architecture]]
