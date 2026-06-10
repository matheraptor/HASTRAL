# VLC Slow Boot Fix

**Summary**: Troubleshooting steps to resolve 10-20 second startup delays in VLC media player, especially for custom or portable installations.

**Sources**: vlc_booting_fix.md

**Last updated**: 2026-05-04.

---

## The Problem

VLC may take a long time to open (10-20 seconds) if it is installed in a non-standard directory (such as a user's `Documents` folder). This is primarily caused by:
1. **Windows Defender**: Aggressively scanning executables located in user-writable directories.
2. **Stale Plugin Cache**: VLC attempting to re-index its plugins upon every launch.

## 1. Locating the Executable

If the installation path is unknown, you can query the Windows Registry via PowerShell to find the exact executable path:

```powershell
(Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\vlc.exe").'(Default)'
```

## 2. Regenerating the Plugin Cache

Rebuilding the plugin cache stops VLC from scanning its directory on every boot. 

1. Open PowerShell and navigate to the VLC directory discovered above:
   ```powershell
   cd "C:\Path\To\VLC"
   ```
2. Run the cache generator tool:
   ```powershell
   .\vlc-cache-gen.exe .\plugins
   ```

## 3. Preventative Measures

To ensure the fix is permanent:
1. **Add Defender Exclusion**: Open Windows Security > Virus & threat protection > Manage settings > Exclusions, and add the VLC folder.
2. **Disable Internal Scanning**: Open VLC > Tools > Preferences (`Ctrl + P`) > Show settings: All > Advanced, and uncheck **Scan for new plugins**.

## Related pages

- [[topics/research/technical/windows_powershell_updates|Windows PowerShell Updates]]


