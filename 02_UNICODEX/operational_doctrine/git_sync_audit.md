---
type: doctrine
version: 0.1.0 2026-04-18
status: draft
tags: [git, protocol, audit, infrastructure]
---

# Git Sync Audit Protocol (`git-sync-audit`)

This protocol defines the mandatory pre-flight checks for all repository-wide refactors, metadata migrations, or synchronization operations. Its purpose is to detect "Phantom Submodules" and infrastructure mismatches before they cause IDE crashes or data loss.

## 1. Frequency
- **Pre-Refactor**: Must be executed before any operation targeting multiple package directories.
- **Session Bridge**: Must be executed by an incoming agent at the start of a session handoff involving Git.

## 2. Execution Steps

### Step A: Submodule Mapping Check
Verify that all submodule folders have a corresponding mapping in the `.gitmodules` file.
```powershell
# Verify .gitmodules existence
Test-Path .gitmodules

# Check for unmapped repositories
git submodule status
```

### Step B: The "Phantom" Hunt
Scan for directories that contain a `.git` folder but are not tracked as submodules.
```powershell
Get-ChildItem -Path projects/ -Recurse -Directory -Filter ".git" -Hidden
```
*Note: Any directory found here that is NOT in `.gitmodules` is a "Phantom Submodule" and will cause Git execution failures.*

### Step C: Dirty State Inventory
Identify submodules with uncommitted changes that might interfere with root staging.
```powershell
git status --ignore-submodules=dirty
```

## 3. Remediations
If a mismatch is detected:
1.  **Missing Mapping**: Re-initialize the `.gitmodules` file immediately.
2.  **Phantom Repo**: Either add it as a submodule or remove its internal `.git` folder to merge it into the root.
3.  **Dirty State**: Commit changes within the submodule before attempting a root-level refactor.
