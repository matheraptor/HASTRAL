---
title: CLI Visual Standards
description: Design guidelines for MAGPIE CLI feedback, including progress bars and spinners.
tags: [CLI, UX, Standards, Visuals]
---

# CLI Visual Standards

MAGPIE's CLI interface follows a **Brutalist Retro-Futuristic** aesthetic. Feedback must be immediate, high-contrast, and informative.

## 1. Progress Indication
- Use `cli-progress` for long-running batch operations (e.g., entity refreshes, database migrations).
- Formatting should prioritize the **Count** and **Percentage** over smooth animations.

## 2. Status Spinners
- Use `cli-spinner` for indeterminate wait states (e.g., waiting for Cloudflare Tunnel, initializing Socket.io).
- Default Spinner: `dots`.
- Text should be prefixed with a system-tag: `[SYSTEM] Initializing...`

## 3. Log Prefixing
Standardized prefixes for all CLI output:
- `[LOG]`: General info.
- `[AUTH]`: Security/JWT events.
- `[PHYS]`: Physics validation events.
- `[WARN]`: Non-critical drift or performance hits.
- `[ERRO]`: Critical failures.

## 4. Aesthetic Directives
- **Colors**: Use `chalk` for color coding.
- **Scanlines**: (Terminal supporting) use subtle dimming/brightening patterns for a "CRT" feel.
- **ASCII**: High-contrast borders for main section headers.
