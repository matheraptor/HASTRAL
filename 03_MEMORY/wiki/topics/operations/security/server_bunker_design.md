# Server Bunker Design

**Summary**: A hardened architecture for a Node.js monolith on GCP, prioritizing system integrity and isolation of the "Sacred Thread" runtime.

**Sources**: (source: server_bunker_design.md)

**Last updated**: 2026-04-20

---

The Server Bunker Design relies on three foundational pillars:

1. **The Door (App Layer)**: Strict runtime schema validation (Zod) ensures that no malformed data or "custom object injection" reaches the database or logic layer.
2. **The Guard (Infrastructure Layer)**: Network-level hardening, including SSH access restricted to specific IPs, GCP OS Login with MFA, and disabling password-based authentication.
3. **The Brain (Sacred Thread Layer)**: A polling-based architecture where external inputs are queued in an isolated "Inbox" buffer, allowing the main runtime thread to process them at its own pace, disconnected from network-level noise.

## Core Security Protocols

- **Schema Hygiene**: All socket payloads must match a strict Zod blueprint. Any payload violating this or exceeding `maxPayloadLength` is immediately dropped.
- **Resource Isolation**: Incoming network traffic is decoupled from the runtime thread to prevent resource exhaustion/DoS.
- **Identity Hardening**: GCP Service Accounts are configured with zero-permissions outside the VM instance.

## Related pages

- [[sacred-thread-runtime]]
- [[gcp-infrastructure-hardening]]
