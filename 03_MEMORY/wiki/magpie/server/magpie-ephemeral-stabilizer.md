---
title: Ephemeral IP Stabilizer (DuckDNS)
description: The cron-job architecture for handling dynamic host IP resolution.
tags: [MAGPIE, Server, Network, DNS, Infrastructure]
---

# Ephemeral IP Stabilizer (DuckDNS)

When hosting `MAGPIE_Server` on infrastructure with an ephemeral (dynamic) IP address—such as residential connections or cost-optimized cloud instances—the server's external IP can change unexpectedly. This breaks client WebSocket connections attempting to hit the host.

To solve this, MAGPIE utilizes a "Stabilizer" architecture via a dynamic DNS provider (like DuckDNS) and a recurring cron job.

## The Architecture

### 1. The Stabilizer Script
A lightweight shell script (typically `duck.sh`) is deployed alongside the server infrastructure. Its sole responsibility is to ping the dynamic DNS provider's API. 

```bash
echo url="https://duckdns.org/update?domains=$YOUR_DOMAIN&token=$YOUR_TOKEN" | curl -k -o ~/duckdns/duck.log -K -
```

Because the provider reads the origin IP of the incoming HTTP request, the script never needs to actually know what the server's current IP is; it acts as a blind heartbeat.

### 2. The Cron Schedule
The script is made executable (`chmod +x duck.sh`) and bound to a Linux `cron` job that executes every 5 minutes. 

### 3. Client Routing
By repeatedly "stabilizing" the DNS record, clients connecting to `MAGPIE_Server` via the static domain (e.g., `wss://game.yourdomain.duckdns.org`) are seamlessly routed to the correct server, completely masking the ephemeral nature of the underlying host IP.