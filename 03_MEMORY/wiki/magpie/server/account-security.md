---
title: Account Security & Authentication
description: Overview of the MAGPIE auth strategy, rate limiting, and account freezing.
tags: [Security, Auth, JWT, Rate-Limit]
---

# Account Security & Authentication

MAGPIE implements a tiered security model designed for high availability and zero-trust resilience.

## 1. Authentication Strategy

The server uses a **Permissive Connection** model for the socket layer:
- **Guest (ID: 0)**: Unauthenticated sockets can connect to receive public heartbeats and world metadata.
- **Player (ID: >0)**: Authenticated via **JWT** (JSON Web Token).
- **Socket Gate**: The `io.use()` middleware extracts the JWT from `socket.handshake.auth.token` and verifies the `playerID`.

## 2. Rate Limiting

To prevent brute-force attacks, the `/login` REST endpoint is gated by `express-rate-limit`:
- **Window**: 15 minutes.
- **Limit**: 5 attempts.
- **Feedback**: Dynamic response indicating the remaining lockout time.

## 3. Account Freezing (Planned)

The `MAGPIE_PLAYER` table contains the `IS_FROZEN` (Integer) column:
- **Status 0**: Active.
- **Status 1**: Frozen (403 Forbidden).
- **Auto-Ban**: Logic is planned to automatically flip `IS_FROZEN` if rate limits are triggered repeatedly from the same IP/Fingerprint.

## 4. Performance Nanny

On low-tier infrastructure (e.g., e2-micro), a `throttle_node.sh` script caps CPU usage at 30% to ensure the SSH session remains responsive during high-load auth spikes.
