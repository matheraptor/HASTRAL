---
title: MAGPIE Network Stack
description: General networking stack structure, Express/Socket.io backend wrapper, Rate limiting, and JWT authentication.
tags: [MAGPIE, Server, Network, Express, JWT]
---

# MAGPIE Network Stack

The MAGPIE Network Stack operates as the bridge between connected clients and the core ECS environment. It enforces connection stability, authorization, and rate-limiting.

## Core Components

### Express Wrapper
The application uses Express to handle standard RESTful interactions, primarily for authentication (`auth.js`), asset delivery, and API endpoints.

### WebSocket Bridge (Socket.io)
Real-time entity replication, POVART synchronizations, and client-input emissions are strictly handled via WebSockets using [Socket.io](file:///C:/Users/Marika/matheraptor/projects/HASTRAL/03_MEMORY/wiki/magpie/plugins/socket-io.md).

### Authentication & Middleware
- **JWT (JSON Web Tokens)**: Used for stateless session validation across both HTTP requests and WebSocket handshakes.
- **Middleware (`middleware.js`)**: Wraps incoming socket emissions to verify the token signature before delegating the payload to the `MAGPIE_HIVE`.

### Rate Limiting
To prevent physics exploitation or input flooding, rate-limiting logic ensures that client emissions (like movement vectors or state transitions) conform to predefined tick boundaries. Excessive requests are dropped at the perimeter before reaching the logic layer.