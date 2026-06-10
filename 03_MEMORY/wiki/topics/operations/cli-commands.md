# CLI Commands

**Summary**: A collection of useful bash and powershell commands for administration, monitoring, and git management.

**Sources**: (source: CLI.md)

**Last updated**: 2026-05-19.

---

## Administration

- Reboot: `sudo reboot`
- Hard reboot: `sudo reboot -f`
- Update MAGPIE_Server: Stop `throttle_node.sh`, pull changes, restore script, restart.

## Monitors

- Authentication Log: Tail `/var/log/auth.log` for failures or invalid attempts.
- CPU Monitor: Real-time top process monitoring.
- Process Check: Monitor `throttle_node`, `cpulimit`, and `node` processes.

## Task Management

- Kill Node processes: `pkill -f node`
- Kill/Start `throttle_node.sh`: `pkill -f throttle_node.sh` / `/home/hamedahastral/MAGPIE_Server/throttle_node.sh`

## Git

- Pull: `git pull`
- Set Editor: `git config --global core.editor "code --wait"`
- Commit: Standard `git add` and `git commit` workflows.

## GCloud SDK

- Set Project: `setx MY_PROJECT "..."`
- Log Monitoring: `gcloud logging read` for syslog and custom activity.
- Automated Terminal Reader: Local command script for fetching logs with a 10s refresh interval.
- Targeted Debugging: Filtered queries for CPU spikes, script errors, and APT activity.

## Related pages

- [[claude-code-configuration]]
- [[server-security-fundamentals]]
