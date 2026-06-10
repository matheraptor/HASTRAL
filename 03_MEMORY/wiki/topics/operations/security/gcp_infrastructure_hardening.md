# GCP Infrastructure Hardening

**Summary**: Hardening the cloud environment surrounding the monolith to minimize the attack surface.

**Sources**: (source: server_bunker_design.md)

**Last updated**: 2026-04-20

---

Infrastructure hardening minimizes external exposure.

- **SSH Access**: Port 22 is restricted via GCP Firewall rules to allow connections only from specific IP addresses.
- **Authentication**: OS Login with 2FA/MFA is mandatory for any shell access.
- **VPC Configuration**: All public ports are blocked except the application port (e.g., 443).
- **Service Accounts**: VMs are assigned custom service accounts with no roles (Least Privilege), preventing lateral movement within the GCP project.

## Related pages

- [[server-bunker-design]]
