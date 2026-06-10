# Node.js Environment Variable Exposure in NW.js

**Summary**: Analysis of how `process.env` behaves in Node.js and NW.js environments, specifically regarding the exposure of OS environment variables in client-side applications.

**Sources**: (source: Server_secutiry_and_exploits.md)

**Last updated**: 2026-06-09.

---.

## Environment Variable Inheritance

In a standard Node.js process, `process.env` automatically inherits all environment variables from the operating system user account and the terminal session that launched the process. This includes system defaults (e.g., `PATH`, `USERPROFILE`), shell configurations, and IDE-injected variables (e.g., `VSCODE_GIT_IPC_HANDLE`).

### NW.js Specific Risks

Because NW.js combines a browser window with a full Node.js environment, the `process.env` object is accessible via DevTools. In a distributed client application (like an MMORPG), this allows users to see their own system information. While they only see their own data, this poses a risk if:

- The application accidentally logs this data to a remote server.
- Development keys are leaked through the environment.
- Privacy is compromised by transmitting system-specific metadata.

## Mitigation Strategies

### 1. Sanitization (The Booter Fix)

The most effective way to prevent exposure is to sanitize the `process.env` object at the very top of the application entry point (e.g., in a CLI-like booter).

**Implementation Pattern**:
Create a "safe" environment object containing only the required variables and overwrite the global `process.env`.

```javascript
const safeEnv = { NODE_ENV: process.env.NODE_ENV }; 
process.env = safeEnv;
```

### 2. Architectural Isolation

- **Web Clients**: Modern bundlers (Vite, Webpack) automatically strip `process.env` and only inject explicitly prefixed variables (e.g., `VITE_`).
- **Desktop Clients**: Use a `preload.js` script to create a context bridge, exposing only specific safe functions to the UI rather than the entire Node.js environment.

## Related pages

- [[topics/operations/security/index]]
- [[topics/codecraft/architecture/index]]
