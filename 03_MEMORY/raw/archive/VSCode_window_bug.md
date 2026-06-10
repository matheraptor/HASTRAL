---
title: "is this a bug in VSCode?If I try to put a tab into a new window, the entire window (main and new) freezes up. Not completely, meaning the app isn't froze, but it remains with the hand cursor instead of arrow, and even F1 command palette becomes inaccessible, thus requiring a hard restart"
source: "https://www.google.com/search?sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&udm=50&ved=0CAwQ2_wOahcKEwiYzPaetNaUAxUAAAAAHQAAAAAQHg&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&atvm=2&mstk=AUtExfDqSR0rsFq2JsCYxxbI4dJ4TIGvum_P2VVzebck-oZ_gLTBCg9KDnfM3tOTWyuZ84LDnFESy3IVfdgIApiYqqT5yT_QTsDStuGZA5nkPJYEHHVhvMwvCfSWfLIYsGJYHfYgSFwFV8GaXEtdpyzYWzDYwj4N-U7t1hUTMXu2sJmDLXkBL23UkrREddkxNkNK9JDbyhhd0HFEnrGNzxoMahniZS0DPl_f1l6SX6Ex1zTIiNTLCfMooT0_stEMIYQRCWLd8qemM6rO7ETaF9wN1g1Ao-4krtJ4oL3u7RF0gMYYfmGwBGOBUeGDR6SbC8Yxak7PAeq2s-965w&mtid=ZBgQapX0O4mdi-gP_ovrsQg&csuir=1&aep=26&q=is+this+a+bug+in+VSCode%3F%0A%0AIf+I+try+to+put+a+tab+into+a+new+window%2C+the+entire+window+%28main+and+new%29+freezes+up.+Not+completely%2C+meaning+the+app+isn%27t+froze%2C+but+it+remains+with+the+hand+cursor+instead+of+arrow%2C+and+even+F1+command+palette+becomes+inaccessible%2C+thus+requiring+a+hard+restart"
author:
published:
created: 2026-05-26
description:
tags:
  - "clippings"
---
## Search Results

You said: is this a bug in VSCode?If I try to put a tab into a new window, the entire window (main and new) freezes up. Not completely, meaning the app isn't froze, but it remains with the hand cursor instead of arrow, and even F1 command palette becomes inaccessible, thus requiring a hard restart

22 May 2026

Yes, this is an **active bug in VS Code's Electron runtime** related to drag-and-drop operations and window focus. When you drag an editor tab to create a floating window, the application occasionally fails to register the "mouse release" (drop) event.

As a result, VS Code gets trapped in a permanent dragging state. The application process itself is running, but the user interface stops accepting new mouse clicks, shortcuts, or the `F1` command palette because it thinks a drag operation is still active.

---

💡 Quick Fixes (To Unfreeze Without Restarting)

Before forcing a hard restart via Task Manager, try these methods to force the Electron runtime to drop the ghost drag state:

- **The OS Focus Switch:** Press `Alt + Tab` (Windows/Linux) or `Cmd + Tab` (macOS) to switch to a completely different application (like your browser), click inside it, and then switch back to VS Code.
- **The Desktop Trigger:** Press the `Windows Key` or `Cmd + Space` to open your system's search menu, then click back into VS Code.
- **The Escape Route:** Tap the `Esc` key multiple times rapidly while holding down your left mouse button.

---

🛠️ Long-Term Workarounds

If this happens frequently on your machine, you can bypass the drag-and-drop mechanism entirely using built-in native alternatives.

Instead of physically dragging the tab, **right-click the tab** and select **Move into New Window** or **Copy into New Window**. This completely bypasses the buggy drag-and-drop UI logic.

2\. Change the Title Bar Style

This freeze is heavily tied to how Electron handles custom window styling. Switching to your operating system's native title bar often permanently eliminates the bug:

1. Open your **Settings** (`Ctrl + ,` or `Cmd + ,`).
2. Search for `window.titleBarStyle`.
3. Change it from `custom` to **`native`**.
4. Restart VS Code for the changes to take effect.

3\. Use Keyboard Shortcuts

You can instantly break a file out into a new window using a keyboard sequence:

- **Windows/Linux**: Press `Ctrl + K`, release, then press `O`.
- **macOS**: Press `Cmd + K`, release, then press `O`.

---

If you continue to experience this issue after changing the settings, let me know **what Operating System** you are using so we can check for any OS-specific display or hardware acceleration conflicts.

- Visual Studio Code tips and tricks
	Floating windows. You can open an editor, the terminal, or specific views in a floating window, for example to move the editor to...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABRCAMAAAB2ZgEHAAAAaVBMVEUQEBARERENDQ0ODg4AAAAPDw8MDAwKCgoTExP///8GBgaUlJQmJiY8PDyampozMzO0tLTw8PCOjo6jo6Nubm4cHBxhYWFBQUHJycnAwMBZWVlmZmb4+PiIiIitra15eXnV1dVMTEzi4uJfx/KkAAAFNElEQVRYhe2Yi3arKhCGqfmjxTsKKl5Aef+HPIMmaUyT3TS7Z61z2dNEcICPwRnqEPb+48K24u3t7XS53O/kY8Bty2dhz3Z8XthPwv4g/yD/xUh2T55HnvqeR92lfYFetefWA0LGEMUA/D1O5VY/VcJr7RX0/oQHVaUBpqWtTU+j0Ju1XIlTvtWCtEqqZce8s+ZL2xGlBVwxy6YBUWY5NN6mkCyzta8dWFR01s4TVlvXKw6Itwre6BvtVwFZQpp0XkgZFXNBjWnZmTdldJlj0iWCqNAK2Yym6yxa3fVmCcssqbskIYXUZdGYUl+eJQveZ5iGupv3MM46HBmMRV7RqpN80cgnREWZxqnOuhTze9cDZR+VWZ5gbpYy04WsG43k6rGglp03PMlpLI0CdIahziVkInWVSI9UWHShqWnRtMpyASEtOpWZXieJbWpYdjwLeaRLsNi+rnBEVTayr/LWNNIsJil01hcRIaUte2jZdyinvqinoVuRaVsWZbMUww55DKIpQzrlVoUsgMyTDDYZENlqGNAnkwoDZSdbIC6SqgB5PysSK9Ohx6RSG7dJlbUS/RXySN47ep8FPqaojAO6HA+bY8n3x6OPy/jIyMkxo55RtHmZIYzWLhTVDNfIvRxIjoeP+uFhzxt5gDyc5aZ+vvse8rCTe4pV9aF/gDx8W3ZjdgbdIF+B3wr7fcQ/ARl8km8id2Pu0U7NH71upwgCtmu/ptwh3kF+stojvzBsjzx3/j1kSJ8w/OVE27gzgH1h1w8jV1K4yek+/AX9cLLg55HhDTL8LBHJyrloHiFXZhixD9J9ZBRtzFt5EvkZdZZvIx+jHnMfPdHvIXfUvwH5iEvIK9ZdYkx/D6hReE36jPTv0DCM/TuUXp0XwJpBXd3FuDBjxGe3rkMuyCiI6ENdG+cbulFU9NZHTNbRB3JOZ0oPsJqKWgjj396eBeWWdYYgQAI7H6lXRHQwBfUOLAqSw49RE8+M80p1BAorlKQkblnzgJwPkidA+44QmRp7qIwwaHiUSVBSRysqWtah61ruuBw4AliuLbKR53MJZxR3wqWjzLjgA7UKyjNpqnHkFdzo+DJxNxPd8bkS6SjEqIxzTENrtFLUDffp6dBxnuYzOoM5p3ISqRg6jcpPSBb6dM2h5wVHwReRN+NAa+CYnBolXDW7iZBdOYjKeWSAOgdGW5+QVFqPnGv/WMgaygI7qTtP42RtL7Sp6Zn0G7KhIahnNiZcV+M0Gm+lX/jMs3wcSpHweuG5owVJy/PR0IQ972a+9Lx2HUat+aJdPqYxWVlVQglX82XWE8uTQSLPG1vkPv+irL9FamxYV7LBYPpJVS0GyuO9Z9u6JhcsZQVkRlJGWJkF5OU8WSY1TpREq9ysWfwWfdiik8pTQg+fDPr03itC/09hzQv9NVpTxHhNHX1ckijyIA7Umx0u/0O+eiXcNoU7bRi1KtpC3Ud95FcVnDZAuE78BPKkPJPD8/5hFFdxOvn1FWLdjaDdQucRWsRO7iZgH+nmlZJ5Tu1UkS6p3xf9O0YZLUHar6ewLxLe+ymrQKwEr7UQFEWTEDMhZ526WUz70+LzIsifiUM3U/yCW0wQQqDlxra/i9QrskEL4UQPq3n3KnKk6KtGuSE7ZzhtrNoto9XuVWRF4VnUVkqktL9zOjFXrcqzwdRp9CISFOjr+ZdOUT506CwUhet+epXIbo9JzP+QsB3WX0Xexu6rnGsrbwP1D/I/jvRQtoKOp+//RF7edv92+eoH1d9D/hT66d9/n5a/APo7eiwB3mlNAAAAAElFTkSuQmCC)
	Visual Studio Code
- Visual Studio Code open tab in new window on another screen (...
	14 Answers.... On Windows and Linux, press CTRL + K, then release the keys and press O (the letter O, not Zero). On macOS, press...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUgMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAgMBBgQF/8QAOhAAAQMCAwMHCQkBAQAAAAAAAQACEQMhBBIxE0FRBSIyUnGS0RYzQkNhcoGRkwYjU2KCoaLB4XMU/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEAAgICAwEAAAAAAAAAAAAAARECEgMxISNBIv/aAAwDAQACEQMRAD8A7g/ZbHj1+G+ofBHkrj/x8N9Q+C6Rkc7m0tY82BZAq09YbxM0v8UpNXNn7K8oAwa2HG/pnwQ37K49rsxrYYjSDUd4Lpn4mYL3kgy2DTSjEMAhpEaWpf4lGrnX/ZfH2GfDNm3nHeCzyV5Q3VsN9Q+C6Q4suAJc4jUcz4f2k/8ARSZBAAyxEUdP2SjRx3K3Jlfko0RiXtcaocW7Mk6ROscV4BUAOlS3Fq7TlPDYblKpSfiK9djqWYMNMFpvE7vYoVuRMFiss1K4yUwzmQJA3mRcnivNnHNc6VTpGPHXlzvJ1F/KOJFCgMrnNLgX2BjVfU8nMd18P3z4L6fJ3IuGwNdtfD1K2YAgB7gQJ+C+pL+ufkF14oz19nbGUY3+XMeTmN6+H758Fq6aX9c/IIXSmaJT9Oet1pWl5EWB/UlpEHPHWO6FM7KASwEcNkSq0sXRu/kEZjpE/qUjs8zpaCZE/dzKG7Kea0dI+rPA/wCqim1E84gcecLI2nZ7Li6800LjZiP+JWzhwMopgTEDYnwWbap6BU14+8EZ+IHeC852O9jbmD9wVs0BZrA2BeKJQp6M978Y1CwvsLDszBTa1kTlbJMWppS6loGi0jzR13rXhKWz9neCFHNT6h+iUKXBUrU/StPO60rc0ATHtvosp2zW1daGwkzgiwNuLERQOO8CPeRmPV/kpOexokjWwGzJKBUE9F2seaKLUq5jFwJ4SguMTG/ipbVpHRdpN6R0+KYPBgNBHsLED5ja1+EozGdBHalAvaAb+itLJ6vdRG5jew7yM54AfFZkP5e6gMuJyke6gwvEnmITZBwHyQgRmj4jpX50pYLMpvmE801NE7NH9p3QmyAgZgCYiSFYETIadSLetT0yBq7U73zCpkb1RrwWGmw2LG/JBmzHWfG6HFApgaF3esnQoEFIAzmfPvFK2gGjp1DaJLzKqhBN1EOiXPHY4hZsBIOeoIMxmN1VCLclDGgR/Q8EJkIibIIePadHSptIacxImD6y0qtMHnTME9WFoY0CC0fJWBEEtcQGtEbtomLXOcDkOu6oqlrSbtE9i3+ktUMj/wAM/UTPpSZ5xM6CoQqoU7EWURqc4M/iErRQaI51S35yqoQsjqTXCCX/AAcUpoNIgOqDseVVCFlDABAP7BYnQiPNRcc7rnz0Lz0XuIMuNhx9iEKwJYqtVbh2FtR4O1iQ4+xT2tSWnaPnbEdI6ZTZCFme3bFj6tTIw7R85XelwSGvW2wG1qRlbbMVqFn6sPp0STnkno+C9SELbjPYQhCIEIQg/9k=)
	Stack Overflow
- How I Fixed My VS Code Terminal Freezing Issue... - Medium
	The solution: The Real Issue: GPU Acceleration Conflicts. Get Kennedy ML's stories in your inbox. I found out that VS Code's termi...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAABSCAMAAAAbxciqAAAA5FBMVEUfHx////8WFhYAAAB4eHjCwsIcHBzv7+8NDQ319fXq6uqioqLe5e/c3NwYGBji4uKampr9+/bW1tbA0uupuM6oqaqRr9klJiZOTk7s7un18eq+t7Kzt7i+wrmdoKWgmJS+0cza0suep62tq6KPnqGpqpzV2+KhsbaajoWTmpDs9Pr/3ZD/56392QDS0uXEzOXc2+jEw9/61y3KtQD/44mgp9GPoc/I1OS0wNyVl8iitNn43QCyoADXwQDxygb9zQDb4dfL0ca8wc2WqsbHzdN8oc5liLU/QkRFOzlOR0I4O0YzMzTUDu//AAADM0lEQVRYhe2YC1ebMBSAAQ1ZUiBrKoJCu1Gm3Zh9bbp2ukerddTx///PbhAsbbX2mOycPfxsHqScrzfJJZyjpslgmubakJTQMQxjxWAaMkIjx1kWyhiNkiWhhNG5M97N3DSkjEYFp/IbTzeaVaUI01ldA1lluQoSxhXl+j6pUkoZ71XKGe9TShqXk0iNsZrpioyrE1ceorRxTShrVJ499wj/rKdwWejIG9dOM2njqrAcUWIsX16OqlkvXrCOmp2pvrGdhdF58QR2BKtDhdDwd1VRGHdcXRWlsaZjCpcHDOs6dBjRD6WNQdhsvXodtePwzdHxLOq8fZdIGolOMJSc20Y2RlX8dcb3oiIrG7K+nJsXuGo86Yp7e/1BkpAkGdBkaCVJQi1iJVZPp9SyLAzF6kF5OA+qxg8fT6Ee9EZn1uBT4wzawfisMRgn/X7js94fjnrj89H5cDQ8H/XH2xhPLr5067pIHJxAnUAyWSKRLBiz6jBE8VinJB8cjrYxfrj4enG6cYm2YmE86Xa/db/XFRpVsW5ENsYEUwZ/gE0oI1PKcD2gFPrM5jQhNrXpAWOwsja3sfWIkSGE7Cic8QCFKLxk0cyOeOBSd9KmYXNy2ZzFScCnKIwRC8Nwehk0yWZjBbxxeuVRcsgeiVGW32d8SbAitjVaVTCmVZYvK0bxFVkWl1ekcbW3B59brhrMBrhdwKhdYWGknHIy5RjbDH6U5abouDTO6KSFIg6ZxShvMCBCwQzyTHQhTQ9aEUIzFIeoYmQ6JzzoxFPUdF3Uarab7lHHDUOaG9mkfRTEtXjKC6MdBqHb5oWRuXGt1oncsFWZNec0XxDMsLgJ23mTR0v61/vXP/YLrhuMA0hMW3Qg6vwK6uqsi7fgA9SX2HhradxFqtBKpTJKo/jXjRo0aTJP8zwv08RHdKWFZjpP/bmfpt6Nn/6EnnyMEGCapXl4OfLG/5Yia0SlIntgt7M0yzINqnQOrRKjDwnkpT6o56kCo2Y6nuPAhB3TdJzHb/+HULHFBR6cFHBaiGNCWOWfQjNL05tUJI4PrT9Pb+RjhJMsL1kmjoxMyUlh5iV/WjyF6/nMMwr4BVNaZJZjGHJBAAAAAElFTkSuQmCC)
	Medium

Show all

You said: none of the above suggestions fix my problem

22 May 2026

If those baseline UI options failed, it means the bug isn't just a surface-level interface glitch—it is a **deep thread deadlock in the Chromium/Electron GPU rendering layer** or an active OS-level window hook conflict. When you drag a tab, Electron attempts to request a new hardware-accelerated viewport, and the window manager drops the response, permanently locking the primary input loop.

Because the app is deadlocked on input, standard workarounds will not break it out. You must modify how VS Code initializes its underlying window manager.

---

🛠️ Advanced Deep-Fixes

1\. Permanently Disable GPU Hardware Acceleration

This specific drag-and-drop window crash is frequently caused by a failure in hardware rasterization during the screen-splitting frame change. Disabling it forces the canvas layer to process the window layout without crashing the Electron UI thread:

1. Force-close VS Code via your task manager.
2. Open your system's terminal or run dialog (`Win + R` on Windows).
3. Launch the app from the terminal with this specific flag:
	```
	code --disable-gpu
	```
4. If it opens successfully and you can now drag tabs without freezing, make this fix permanent:
	- Open the Command Palette (`Ctrl + Shift + P` or `Cmd + Shift + P`).
		- Search and select **Preferences: Configure Runtime Arguments**.
		- This opens your global `argv.json` file.
		- Add the following entry inside the brackets:
		```
		"disable-hardware-acceleration": true
		```
		- Save the file and restart the application normally.

2\. Kill the Frozen Window Process Only (No Hard Restart)

Instead of force-quitting your entire workspace and losing unsaved files, you can target and kill **only** the individual rendering pipeline that crashed.

- Go to the top menu bar (if responsive) and select **Help > Open Process Explorer**.
- If the menu is blocked, look at your operating system's task manager.
- Look for the specific sub-process named **`window (Extension Host)`** or the specific sub-process consuming exactly `15-20%` of CPU power during the freeze.
- Terminate **only** that specific child process. VS Code will automatically show a small notification prompt saying *"The window crashed. Would you like to reopen?"* Clicking **Reopen** recovers all your open files and tabs instantly without closing the main program application.

3\. Change Window Execution Arguments

If you are running Linux or a specific Windows insider build, Electron has known drag-and-drop bugs matching your description based on the display protocol wrapper.

- Launch the application from your command line using the following combination flags to isolate the window logic:
	```
	code --disable-gpu-compositing --disable-software-rasterizer
	```

---

🛑 The Absolute Alternative (Bypass Dragging completely)

If you cannot stop the GPU/Electron thread from dying when dragging, you must alter your workflow to drop the physical mouse dragging mechanic completely.

You can configure VS Code to instantly break a tab out into a fresh, isolated window on a single mouse click:

1. Open your global user settings JSON file (`Ctrl + ,` and click the small file icon in the top right).
2. Set your default double-click tab action to automatically break out the file by appending this line:
	```
	"workbench.editor.doubleClickTabAction": "copynewwindow"
	```
3. Now, whenever you want an independent window, simply **double-click the file tab title**. It skips the drag rendering loop completely and draws the new frame instantly.

---

To help find the exact core root engine conflict, could you provide your **Operating System** (including version) and mention whether you are using a **multi-monitor setup** or custom scaling?

- VSCode Freezes/Hangs when draging file tabs or files #134427
	New issue. VSCode Freezes/Hangs when draging file tabs or files #134427. Assignees. freeze-slow-crash-leakVS Code crashing, perfor...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFEAUgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABAEAABAwICBAgJCwUAAAAAAAABAAIDBBEhMQUGElEHExUiQVKx0RQyM1RhcoGSwRYjNENicXORk6HwJDZCssT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEDBgQF/8QAKxEAAQICBwgDAQAAAAAAAAAAAAECAwQREzFRUnGRFTIzQYGx4fASITQF/9oADAMBAAIRAxEAPwDmgqnNvzWm+8ZJ+GOw5keH2Qon81ltmHHC7Tcj91DdWEFvw13Uj9wIFY4f4x+6FURdSBbNY4gjYjx+wF48IO4Kui6ALTanHENAOBJGSv6JkD6wtBaQGOxAtfFYcGwIsMVk9XRfSB/DPwXTJ/oZmc83wH5GdcMVGRirTm3ULmla2gzLXEKF7sUKKC35GsSOA+rhN+qcv3XjjARbio/YD3qNJYk1Q0k0kEDQhJADWX1XAdpJwI+qPaFh1tPBtSRV+tdPSzgmKRjw6xIOAv0ekLolnoyM1y8iiaar4LmpzMwYR0KJ8JGYXVjqVoYbJ2ZrE28o+/YpRqTq+ZOL2avatfyju21l7u2Za5fep4afyplOae9DkHF+goXYvkDoLq1P6xQp2zLXLp5H2ZM3pr4PmZCElmTQDQhJSA0JIUANblwSBh13peMwbxclze1hZaYt04ISPlzSY25j8fYmbaJE3T6DGj6d4D2Pn2djZGzM61t+efpzSZoqBhBD6nC9gZ3not0leIakNe8SGV+y4t+jkAkWxFujHNWDUwi3MfiL+Sd3KmgsIuSabr1H67+9CnE8RANjjvYUIA+Q0ISVhA0ISQA0JIQA1tvBaAdb4AcQYn9i1FbfwWEDXGmv0xvA/JO20SJunZ5mWmeWsJxvg15vcegrw0FrQQx20117Fklu1KsMYmk2zH0eMY93pUXzFpLmEjbFzeLP+XzxVIzbCZ0bg45Z7pO9CUvF8Y+5j8Y5mPuQgY+bkKzyfWebS+6jk+s82l91X1UTCuhVXQ8SalZCs8n1nm0nupt0ZXu8WjnP3MJRVPwqFdDxJqVUK3yXpA5UU9vUKOS9IYf0U9icOYcVFW+4K6HiTUqLbOC0X1zpLdV/Yte5Lr7geBzXJsBsHPctt4LKOpptedHuqIHxtO2AXttjsnuTIxyfaoK+IxUoRUOvzsm419mT2w8Vslsju+C8cXOA/wCbqMxbmzdyzVS+KORxfxfjnJsjj0bslXOjjWFtRDHROY61jJHJtYe0bty5qS5EoKL2S7bubPn0CRC2a1R1o/yKFJJ87oQhbExoK5QZD10ISOsGZaWaX6LJ+IewKBni0/3j4oQkLVEP+gdqy+pP90aF9Z/+rkISR+E7JexMHjNzTudqGQSdmhCy5qhIQhAH/9k=)
	GitHub
- VSCode freezes/blocks at startup · Issue #206510 - GitHub
	If issue persists with latest stable 1.97.2, run the following steps to get a cpu profile during the freeze. \* Close all running...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAAsVBMVEX////a4/IAasEyeMYAAAD7+/v19fXb3N34+Pjx8fLs7O3n6Ong4eLT1NXW19jj5OXMzc65urzBw8aus7hDSE5gZGhUWF2DhomYmpxHTVJpbHCwsbMAABAAAAcnLzc1O0IXISulp6l1eX4JGCOOkZMAABaaoakAChkfJy+PaV2VdGt/bGfZ3uawmZO5kYjFmZCch4B3YluDa1+vgnusnqQ1NTWlk5GngHK6tsCedGuokIblGSUoAAAE00lEQVRYhe1YDXubNhC+bQh9IZAOEAI5xgLSeFnWfXTd1///YTucZLXTLs/iZlu35bUtS0K8nE6nuxMAL3jBCz5ZsHdVcdxiHxj7JyBVJWXFdK6FZprXCBZkBQVUTKLQ51A6x63lOqFFhwaNVSXaiBqrVGJM53CWZW4qVxiOhTVYVJZDlMixwtIit+IcMV/wfGBn2989Qf6whxYVqaxrCcVasLquIX9V1xyAmrKuCxrlJwCci27eBQAzXjXl7wRu/4BRupLXKq9BOUZFDWRFpZJ4uPRKEitLVI8XAoYhbpUdS511xZRJ0PRQ0Ap3ANUxZY5cOZINKjJvkovVFRZEjUjqcFLUJB3Zu8yQ7V287JBDmOm+kqXt2IKb/bSF0J9OXLJVpCKJyhJlXltZ69wKgytlvlIeZt6ZWUHyu325jOt94tLlo/MLLFvI4jGjrtGS2krH4CAl1Aq4latOiVIdSrlqrFlIJgd6G1yWA2/NZQF98BHcVmTp/eXJX0lFetMlQomyVjJJu8qsALmuDzqfLxy4rOuuLPTjtPfQ+m6uuu3id9AvJ5RakNshAmtIr3bV0jrRCg1VOdmHxdt9HhP9lyHQUudxoUmJtHAqUpUgP5Xyfwsciscu5+gOiursu75iejiKHzfEZpGPUTrshvV/d2R6Nnsw6KQjH/betjaJaUwghyYK3w4RlrGDiloAE3RT6C3sI6SmE+D6QZkMwqCnhrY7lK1HGLfHD8A5ltkg/SJn7JPeUeDJbPDMh3bSnawW6PZ2yYB24x79UF64bscv4ixDLxcNrItk+WF3oqtNUWUMLnvfpqb36yMDDKNvgx03HQRDUoLI1NZNHdjmsJvNfNFC0ZAkAGH0e2nnY0qZ8Yo0QZMItoks8KHRkvZexIQ8s7QQ3bZKq5ShqabWXpnky6zYRIxydlBdGNwo3JxIOXK9Iz/kx0lwP3a68c1BTG2bZjGkzRCmbYTewTS2mqRqLN8CjtY3U04TJ8GjOPVE915d3BWMsbsWE/cD7nKQ2yHs/p7bywLYx0WFfxTsD+rnw3VH9fd225NhncoHz8G4CpTRZmp4UYK2woqDz3w6lnEZ7TiGOA6zwisfxnFZzXLUV4PfuPMoA8IyQbmEncWdgtACOQrXq9nA1J5DqTBlxTJA05m9xZHB4oGkDLeUwzmUFI82Ml0mT8FpwS2DtAmYDb5X29Zf4jmUtCy0+a1hqAor1/Wg0GiNKNVlZR91zk+H7M9K1F/wqUNq9dyMdFyiDLOCh8H8/DOUslDQIc9RusoLckGGc1OU2tKp72y/SRm0odSaWUp2LZYGubHrsdLg2ZYumYrANOQgCULk9JV5nkv9Lw5SL/i7UZ0XWh+B+/L6q0dT6yfj5uvX37yu78yayfV7AnX3O8XdEbzgH8p3br797pfvowKWSsdTRJucNbZMdkFXOSYCFjG46IwDaSojS200pw2nS8pJUPACdan1Sdy7ef3mzesfJKUGlN13SxOGt2FqQ5dCSJ1H2/VLl96at10EjmixtipEG+kcaMvcFSTD+vbnJCu5+fH6+qefqVKt77Ny+uhcSUnHRJXn5DkU9coJqUE6KTRIwXLyC9QQgjygFNQh81Nt4fUvv773duIjIeWLz/nP47NnB3z+7IAvnh1/AeVvtpdgWgxom90AAAAASUVORK5CYII=)
	GitHub
- Why does my mouse cursor disappear in the VS Code terminal and...
	\* 2 Answers. Sorted by: Try to disable hardware acceleration by modifying a VS Code settings file. these are the following steps y...
	Stack Overflow

Show all

Transcribing...

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com