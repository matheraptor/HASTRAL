# Server Security Fundamentals

**Summary**: A conceptual overview of security layering for networked applications, specifically MMORPGs, distinguishing between transport, session, and persistence security.

**Sources**: server_security.md

**Last updated**: 2026-05-06

---

Security in a networked application requires a defense-in-depth approach, where independent layers protect against distinct threat vectors.

### Core Pillars
- **Transport Security (TLS/WSS)**: Establishes an encrypted tunnel (transport layer). This prevents Man-in-the-Middle (MITM) attacks and packet sniffing. TLS 1.3 provides *Forward Secrecy*, ensuring session keys remain secure even if future keys are compromised. (source: server_security.md)
- **Session Authorization (JWT)**: A stateless mechanism to verify player identity for each request. Critically, JWT is *encoded* (Base64) but not *encrypted* by default, meaning it **must** travel within a TLS tunnel to prevent interception and Replay Attacks. (source: server_security.md)
- **Persistence Security (Bcrypt)**: Protects user credentials at rest. Passwords must be hashed using a slow, salted algorithm (Bcrypt) to prevent recovery in the event of database compromise. (source: server_security.md)

### Layered Relationship
Transport security (TLS) protects the *journey* of the credentials/tokens, while authorization (JWT) manages *access rights*, and persistence security (Bcrypt) protects the *stored secrets*. They do not replace one another.

## Related pages

- [[]]
- [[topics/operations/security/predictable_ids|Predictable IDs]]
- [[topics/operations/security/server_bunker_design|Server Bunker Design]]


