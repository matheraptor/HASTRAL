# VSCode Drag-and-Drop Freeze

**Summary**: VS Code occasionally freezes during tab drag-and-drop due to an Electron GPU rendering deadlock.

**Sources**: [[VSCode_window_bug.md]]

**Last updated**: 2026-05-26

---

When dragging an editor tab to create a new window, VS Code may enter a deadlock state where the UI stops accepting mouse clicks or commands, often displaying a "hand" cursor. This is a known issue in the underlying Electron runtime related to drag-and-drop event registration.

## Immediate Fixes
If you encounter a freeze:
- **Focus switch**: Press `Alt+Tab` (Windows/Linux) or `Cmd+Tab` (macOS) to switch to another app, then switch back.
- **System trigger**: Open your system search menu (Windows/Cmd+Space) and click back into VS Code.
- **Escape**: Rapidly tap `Esc` while holding the left mouse button.

## Long-Term Workarounds
- **Right-click**: Use **Move into New Window** or **Copy into New Window** from the tab context menu instead of dragging.
- **Native Title Bar**: Change `window.titleBarStyle` in Settings from `custom` to `native`.
- **Keyboard Shortcut**: Use `Ctrl+K` followed by `O` to move a tab to a new window.
- **Disable GPU Acceleration**: If issues persist, add `"disable-hardware-acceleration": true` to `argv.json` (accessible via "Preferences: Configure Runtime Arguments").

## Related pages
- [[vscode-gpu-acceleration]]
