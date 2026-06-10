---
keyID: 1713281800000
type: concept
version: 0.1.0
status: draft
tags: [research, technical, windows, powershell, updates, winget]
origin: [1713281800000]
legacy: []
composition: []
composite: []
taxonomy: topics/research/technical
---

# Windows PowerShell Updates

**Summary**: Commands and methods for updating Windows applications via PowerShell using the Windows Package Manager (winget).

**Sources**: (source: windows_update_in_powershell.md)

**Last updated**: 2026-04-16

---

## Windows Package Manager (winget)

The primary method for updating applications on Windows via PowerShell is the **Windows Package Manager** (`winget`). This tool can update almost all installed software at once through a single command.

### Basic Update Command

To update every application with available updates:

```powershell
winget upgrade --all
```

### Usage Steps

1. **Open PowerShell as Administrator**: Right-click the Start button and select **Terminal (Admin)** or **Windows PowerShell (Admin)**.
2. **Check for Updates first**: Run `winget upgrade` (without the `--all` flag) to see a list of which apps have updates available.
3. **Run the update**: Type `winget upgrade --all` and hit Enter.
4. **Accept Agreements**: If it's your first time, you may need to type `Y` to agree to the source license terms.

### Advanced Flags

| Flag                                                     | Purpose                                                 |
| :------------------------------------------------------- | :------------------------------------------------------ |
| `--accept-package-agreements --accept-source-agreements` | Skip all prompts and automatically accept agreements    |
| `--silent`                                               | Run updates in the background without installer windows |
| `-s msstore`                                             | Target only Microsoft Store apps                        |

### Example: Fully Automated Update

To update all apps silently without any prompts:

```powershell
winget upgrade --all --accept-package-agreements --accept-source-agreements --silent
```

### Microsoft Store Apps

While `winget` covers many apps, it is independent of the Microsoft Store. To specifically target Store updates:

```powershell
winget upgrade --all -s msstore
```

## Related Pages

- [[]]

