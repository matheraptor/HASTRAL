# Database Synchronization Scripts

**Summary**: Administrative scripts for synchronizing the MAGPIE SQLite databases between local development and production environments.

**Sources**:

- `projects/MAGPIE_Server/.admin/scripts/pull_db.ps1`
- `projects/MAGPIE_Server/.admin/scripts/push_db.ps1`

**Last updated**: 2026-05-21

---

These scripts facilitate the transfer of `world.db` and `server.db` files while ensuring database integrity and safety.

## Database Synchronization Utilities

### [[database/pull_db]]

The `pull_db.ps1` script synchronizes the production database from the remote Google Cloud VM to the local development environment.

- **Operation**:
  1. Toggles remote database journal mode to `DELETE` to flush any pending Write-Ahead Logging (WAL) logs, ensuring a consistent snapshot.
  2. Creates local backups of current development databases in `C:\Users\Marika\db_backups`.
  3. Cleans local target folder of database binaries and temporary WAL/SHM files.
  4. Downloads fresh production binaries via SCP.

### [[database/push_db]]

The `push_db.ps1` script synchronizes the local development database to the remote production Google Cloud VM.

- **Operation**:
  1. Creates remote backups in `~/backups/db` on the production server.
  2. Uploads local development database binaries via SCP to the production server.

## Security & Usage

Both scripts rely on the SSH host alias `magpie-gcp`, which must be configured in your `~/.ssh/config` file to utilize the correct user identity (`hamedahastral`) and SSH keys for Google Compute Engine access.

## Related pages

- [[database/database-integrity]]
- [[topics/operations/cli-commands]]
