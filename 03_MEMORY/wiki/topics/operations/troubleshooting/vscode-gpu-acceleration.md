# VSCode GPU Acceleration

**Summary**: Managing GPU hardware acceleration settings in VS Code to troubleshoot rendering issues and performance bottlenecks.

**Sources**: [[VSCode_window_bug.md]]

**Last updated**: 2026-05-26

---

VS Code uses Electron, which relies on GPU hardware acceleration to render its UI. While this improves performance, it can sometimes lead to rendering conflicts, freezes, or deadlocks, particularly during drag-and-drop or window management operations.

## Troubleshooting GPU Issues

If you experience UI freezing, graphical glitches, or hangs, you can test if GPU acceleration is the cause by launching VS Code with the `--disable-gpu` flag from the command line:

```bash
code --disable-gpu
```

If this resolves the issue, you may want to disable it permanently.

## Permanent Configuration

To disable hardware acceleration permanently, you can modify the VS Code runtime arguments:

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Run **Preferences: Configure Runtime Arguments**.
3. Add the following to `argv.json`:
   ```json
   "disable-hardware-acceleration": true
   ```
4. Restart VS Code.

## Related pages
- [[vscode-drag-drop-freeze]]
