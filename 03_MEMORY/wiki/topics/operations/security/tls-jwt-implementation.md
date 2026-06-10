# TLS & JWT Implementation

**Summary**: Practical implementation guidelines for securing a Node.js/Socket.io backend on resource-constrained cloud infrastructure (GCloud e2-micro).

**Sources**: server_security.md

**Last updated**: 2026-05-06

---

Implementing transport and session security on resource-constrained hardware (e.g., GCloud e2-micro) requires balancing security robustness with CPU efficiency.

### Infrastructure Strategy
- **IP Management**: Use DuckDNS with a background cron job to maintain domain-to-IP mapping for ephemeral cloud IPs.
- **TLS/SSL (Let's Encrypt)**: Utilize Certbot with DNS-01 challenges for zero-port-exposure certificate management. 
- **Transport**: Upgrade to `wss://` (WebSocket Secure). This is mandatory for compatibility if the frontend is hosted on HTTPS.

### Implementation Pattern
- **Bcrypt**: Always hash passwords upon registration.
- **JWT Middleware**: Integrate into `socket.io` via `io.use()` to verify identity on connection establishment (initial handshake). This shifts the CPU cost from per-packet validation to per-connection verification, protecting server throughput. (source: server_security.md)
- **Efficiency**: Use stateless authentication (JWT) to avoid constant database lookups per-message, crucial for maintaining tick rates on micro-instances.

## Related pages

- [[]]
- [[topics/research/openclaw/architecture|SQLite3 Architecture]]


