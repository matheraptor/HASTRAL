# ShelderEvo Client Boot Architecture

## Overview

The ShelderEvo client utilizes a "Gatekeeper" pattern to ensure that the application is authenticated and the firmware is synchronized before the heavy RPG Maker MZ (RMMZ) engine is initialized. This prevents the loading of outdated code and protects the update server from bot-flooding.

## Boot Sequence Flow

The application follows a strict linear sequence to ensure stability and security:

`index.html` $\rightarrow$ `MAGPIE.js` $\rightarrow$ `handshake.js` $\rightarrow$ `updater.js` $\rightarrow$ `main.js`

### Phase Details

1. **Entry Point (`index.html`)**: Loads the initial DOM shell (CRT terminal interface) and the core backend connector.
2. **Network Handshake (`MAGPIE.js`)**:
   - Establishes a secure WebSocket connection via `socket.io-client`.
   - Targets the production domain: `https://shelderevolution.org`.
   - Initializes the global `MAGPIE.SOCKET` object used by all subsequent modules.
3. **Gatekeeper Auth (`handshake.js` / `cli.js`)**:
   - Presents a barebones terminal interface for user login.
   - Validates credentials via the socket connection.
   - **Security Note**: This phase acts as a firewall; the updater is only triggered upon `LOGIN_SUCCESS`.
4. **Firmware Sync (`updater.js`)**:
   - Compares local plugin manifests and version arrays against the server's authoritative manifest.
   - Uses Node.js `fs` module to overwrite outdated JavaScript files.
   - Ensures the client is running the latest "firmware" before the engine boots.
5. **Engine Boot (`main.js`)**:
   - Triggers the standard RMMZ boot sequence.
   - Loads the now-updated plugins into memory.

## Technical Implementation Notes

### NW.js Integration

- **Module Loading**: Uses `require('socket.io-client')` instead of browser script tags to avoid `file://` origin issues and path resolution errors.
- **Namespace Management**: `MAGPIE.js` attaches to the global `window` scope. `module.exports` is omitted or wrapped in environment checks to prevent `ReferenceError` in the browser context.
- **Unified Connection**: All modules share a single `MAGPIE.SOCKET` instance to maintain a consistent session state and avoid redundant handshakes.

### Security Measures

- **Bot Mitigation**: By placing the updater *after* the handshake/login, the server can rate-limit or block unauthenticated requests to the firmware manifest.
- **Fail-Safe**: If the handshake protocol itself changes, users are routed to a manual download page.
