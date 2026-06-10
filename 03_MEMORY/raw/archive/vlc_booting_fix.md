---
title: "vlc takes a long time to start"
source: "https://www.google.com/search?sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&ved=2ahUKEwjYjdGoopWUAxUCgv0HHdxBIbAQoo4PegYIAQgAEAE&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mtid=8CLzabG6DM_h7_UP8vCeyAw&q=vlc+takes+a+long+time+to+start&mstk=AUtExfCFfdrk1k8hpSz-CKsmVSqZoX-bvZBKnHrYrEZJpV8WkUo1mPyBj-dTGYV55J54o8v5VLQh1IwtoPZvjNVPaNPA0yO67mtTBTqbDcykXvjk6vL7HkJ_kdlxCJYaN75OLKv13acijL1WkQYD1GNr0rh-48GwdyMvautoWqOlW24ns2AmPcm8jhwKZy3vhJAyY3qslpEHqn9FrWUw3ddC98p-KQE5kEi-59IhD9AYzIbU8-hZX8doWu9Wd6PiOcNtZ36kiRkb2_yoGC-vhuYEk9m0l6RYP3grLQhf432QQlF5fN02kVNB5RqtQG66LGEqXlT9iHctwOKr8Q&csuir=1&udm=50"
author:
published:
created: 2026-04-30
description:
tags:
  - "clippings"
---
## Search Results

Hi MaTheRaptor, what's on your mind?

vlc takes a long time to start

Slow VLC startup on Windows is ==a common issue often caused by security software interference or a stale plugin cache==. This typically happens the first time you open it after a reboot or a long break, while subsequent launches are instant.

Top Solutions to Speed Up VLC

- **Exclude VLC from Windows Defender (Highest Success Rate)**: Windows Security often scans the entire VLC folder during its first launch, causing a 10–20 second delay.
	1. Open **Windows Security** > **Virus & threat protection**.
		2. Click **Manage settings** under "Virus & threat protection settings."
		3. Scroll down to **Exclusions** and click **Add or remove exclusions**.
		4. Click **Add an exclusion** and select **Folder**.
		5. Select the VLC installation folder (usually `C:\Program Files\VideoLAN\VLC`).
- **Regenerate the Plugin Cache**: If your plugin cache is corrupted or stale, VLC will rebuild it on every launch.
	1. Open **Command Prompt** as an **Administrator**.
		2. Type `cd "C:\Program Files\VideoLAN\VLC"` and press Enter.
		3. Run the command: `vlc-cache-gen .\plugins`.
- **Disable Plugin Scanning in Settings**:
	1. Go to **Tools** > **Preferences** (or press `Ctrl + P`).
		2. At the bottom left, select **All** under "Show settings."
		3. Navigate to **Advanced**.
		4. Uncheck **Scan for new plugins** and click **Save**.

Additional Performance Tweaks

- **Update or Reinstall**: Some versions (like 3.0.21) have known bugs causing slow starts. Upgrading to the latest version (e.g., 3.0.23+) or performing a clean reinstall with the **64-bit version** often resolves the issue.
- **Disable Subtitle Autodetect**: If you are opening files from a network drive (NAS), VLC may hang while searching the folder for subtitles. Go to **Tools** > **Preferences** > **Show All Settings** > **Subtitles / OSD** and uncheck **Autodetect subtitle files**.
- **Reset Preferences**: If settings have become bloated, you can reset them by going to **Tools** > **Preferences** and clicking **Reset Preferences** at the bottom.

**Are you using a specific version of VLC, and does the delay happen every time or only the first time you open it?**

- VLC Takes forever to launch - Reddit
	3 May 2025 — It is probably Windows Defender, I had the same issue making an exception for it fixes it, you have to do it on each Windows PC t...![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAE8ATgMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABAIFAQMGB//EADYQAAECBQEECAUCBwAAAAAAAAEAAgMEBRESIRMxQVIiUVRhk6Gi0RRxgZGxBjIjJTNDgsHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAaEQEAAQUAAAAAAAAAAAAAAAAAEgEhMWFx/9oADAMBAAIRAxEAPwD7iiIgIiICIiAiIgIiII9rN9mHiBNrN9mHiBRCQqYt/N7C1iBCbr334f64J8BVAGgVTjqTCBJ7u5BbtZvsw8QJtZvsw8QKBshVIWywqOYDm5Nc3S3HW2vH537luIRdj0yC7iW7kE21m+zDxAm1m+zDxArEQR7Wb7MPECbWb7MPECsRBHtJvsw8QJtJvsw8QKiYZtYD4d7ZNLb9VwuJeHsoTGZE4NDbnUm2iDQNnKqZtsFslBxBBc90SxLb64t46Hf1o+ZrIiNAkJVzCSAHRt/f3/ZUTsjIzzmmOciwaWcQPnopjRaUQAWvNiDcxnXQ4zhTNWLniNIy5xZcARwSTw06lx8XVsyx0nBb0Q4uMQ4HW2Jd16g/RdRoVKwc1ubSW4h+1Jx79Va6UlHS8ODFe+KyHgW5v3FmoP4QTtmqkYfShS7XYuaRm22YGhvfdewR81US9oZDg2cGgdJpubakdI3F7aWWUalU2YxEw3Nwe9weXm4LiCfvZcQqTTYJhYZMMOwac3XsDcD6WH2QYmcqZGQl5RoBvdscOvrqNbcL/wDBZMmKpjCc+BK4OtmXRAB9Ndeu99yRaPS4zWCNDvs7hpzIOpJP5Xc6Tk3SbZWx2TAA0AncBYXPyQY/Ez4jBuzhOBLrERBk4W6Btf5rFkarbAn4WViRQ4AgxMbDEHhcbzp3I+mU14YHZEtxwcYhu3HQagblg+i0uLHiRC0vL3FzsojrEnegvLHi38MgfMLjF3K7yVCJqhTCfF3K7yTF3K7yVCIJ8XcrvJMXcrvJUIgnxdyu8kxdyn6kKhDY2B4oJiCN4A+bgg37mn/Ie61c6ZEVSZM6IJuyHhtWX0sdxWrnI0L4iIJKBTXs6OJjQm4btbWF73+llcUSu9NlUOWD6vdMqhywfV7rb2SyhbUZVDlg+r3TKocsH1e629ksg1GVQ5YPq90yqHLB9XutvZLIPPT9QnJH4baQob9vHbBbjfQuvrqe5VF0+f7cAjj+73XbX6g6lSTJswg+C2MwRiT+xhNi4dZ1Giwm67TZORl52PGLZeZ/pPDHHLS+635Qeeq9b/UdPn4UtBpUtMMjm0GIx8TpHvHBb6HFqYht2zZdsQi7sMiAeoFd07WZCSmZaWmIxZFmtIQDXHLWw4WG9dFR/UlLpk0ZabjubGxDi0Q3HQ99kH//2Q==)
	Reddit·r/VLC
- Opening VLC media player 3 takes a long time to open
	8 Nov 2019 — \* 2 Answers. Sorted by: 46. This answer is not useful. Loading when this answer was accepted… There can be many causes for a slow...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABSCAMAAADw8nOpAAAA/1BMVEUAAAD09PTk5OT29vb19fXT09OXl5dZWVn9/f3s7O3w8PBqOg7p6en/oRbc3NxaW1rsbgC6urrCwsLGy83vbAD5jQD/sxZoMQ6xsbHKysrm4d/m6+7s6eXX1tnj3+Ld3uNqLgKlUQEtEAD/igCROwA7DgD3fgDEUwBycnbb087Xy8MoKyxISEijoqLO2N2HjY83ODjYmXzcvqnas5jBc1SlRQDfXgBLGQF/LwA8LirZXw6mUTEADRPbpIPKrZ9ZKwVpYV9aHwAcDQOUeXDOUACyQgDGVRfMnYbLvLbGf2C3ZgJbNg6qaQjongf/qhZJMgY5GAXEpoP32LqUxpTH1sdDrmf0AAACZ0lEQVRYhe2Y23LTMBBAJa2cWKq6xMqldpLGQCHphbRQIEChFErDraXc+v/fwkpNgLcmZB948BnLyu54zqzX8owjoTVoqemQqzI3CGW6znZ7xtlVlSqcQCnR3+xibxPV5spKOVdqAAg3DixGcoKIfYxt+N3Q6whiaGfJeInWi3RcDAa9geqVGtC40mkqHJXVtlSlQqM1ukFMOqVhUNIFCyhBxyamaUozpCm1IQRUHq0FCvUsmYakgfRmRP1WpF6vX5/DPAtm4Z/z7IIbEBUVFRUVFf8rt+/c5VY2tu4xG++3hiNm5fbOrt8TtQeMyvF+2ayLWsZn3POkPBDiIZ9y49Hh4eMnfD7iaavV2po841SOGo1Ge/Kc0fjiKFb58hWfcjs7PD4+fj3e4xKenNSyZnO/6fM3b3neytPGaOyLoln4/N0Zz1u5Npy+//Bx1/vXn6bTIxbl58b0bNKiR96aTEfDcw5luz2cHAVlWEjtCwbj+WWbGBI0ra9/YVBedDqdy/Vr6Gfn6+rKbxuBtTkbp6srKyoqKioqmKmxIxJ2hGJHoEKMQ3MhssRnPsl8sfou+HyXNU/o2zHJs4RP6RPvfVIUBcTtYx23kP+6jX9QGmssHcY4bam3zhgjpbPGhRGySwo1CGuVS5wyToHLikx5REr5xGGGKklwqf12LQGR/hY6v+3UQQ3B+MK7PPfSqrxwaJTCXC2l7PehiwIAJd2lllQlKcPCstYpWleFQZqXUIL//sNc/RQm9DEMC7FtFACE/lJKhuyiSBqmj1dXbG8PyvBkQ21i4SpuAOXOznhcWqMYq4wNtBZ+AUOUO2SVIv9iAAAAAElFTkSuQmCC)
	Super User
- Start of VLC slowed by Windows Defender - Reddit
	15 Mar 2024 — Hey guys, not sure if this is a common problem: very frequently, but not always, it takes VLC a long time to load up (6-15 seconds...
	Reddit·r/VLC

Show all

I'm not sure which folder VLC is installed in, do you have a powershell command to find it?

The easiest way to find the VLC installation path using PowerShell is to check the Windows Registry or search the standard program folders.

Top PowerShell Commands to Find VLC

- **Quick Registry Check (Recommended)**: This pulls the exact path registered by the installer.
	```
	(Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\vlc.exe").'(Default)'
	```
- **Search Program Folders**: If the registry key is missing, this scans your disk for the actual executable (it may take a few seconds).
	```
	Get-ChildItem -Path "C:\Program Files", "C:\Program Files (x86)" -Filter "vlc.exe" -Recurse -ErrorAction SilentlyContinue | Select-Object -ExpandProperty DirectoryName
	```
- **Check if VLC is Currently Running**: If VLC is open, this command will instantly tell you where it's running from.
	```
	(Get-Process vlc).Path
	```

How to use the result

Once you have the path (e.g., `C:\Program Files\VideoLAN\VLC`), you can use it to set your **Windows Defender exclusion** or run the **plugin cache generator** as mentioned earlier.

**Did one of those commands return a path, or did you get an error message?**

Show all

PS C:\\Users\\Marika> (Get-ItemProperty "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\vlc.exe").'(Default)' C:\\Users\\Marika\\Documents\\VLC\\vlc.exe

It looks like you have a **portable** or **custom installation** of VLC sitting right in your Documents folder rather than the standard system folder. This is likely why it's starting slowly—Windows Defender is even more suspicious of executables running from user folders like `Documents`.

Since you now have the path, here is how to apply the fixes tailored to your specific location:

1\. Add the Custom Folder to Windows Defender

Because VLC is in your user profile, Windows scans it heavily.

- Follow the Defender steps from my first message, but when you click **Add an exclusion** > **Folder**, paste this path:  
	`C:\Users\Marika\Documents\VLC`

2\. Run the Cache Generator for your path

Since the folder isn't in the standard "Program Files," you need to point the command to your Documents folder. Run this in PowerShell:

```
cd "C:\Users\Marika\Documents\VLC"
.\vlc-cache-gen.exe .\plugins
```

Why is it in Documents?

Running VLC from `Documents` can sometimes cause issues with permissions or slow drive indexing. If the fixes above don't work, you might consider:

- **Moving the folder:** Move the `VLC` folder to `C:\Program Files\VLC` (you'll need Admin rights).
- **A fresh install:** Download the official 64-bit installer, which will put it in the standard system directory and often fixes pathing delays.

**Does VLC start any faster after adding that specific Documents folder to your Windows Defender exclusions?**

Show all

PS C:\\Users\\Marika> cd "C:\\Users\\Marika\\Documents\\VLC".\\vlc-cache-gen.exe.\\plugins In riga:1 car:36 + cd "C:\\Users\\Marika\\Documents\\VLC".\\vlc-cache-gen.exe.\\plugins + ~ Nome di proprietà mancante dopo l'operatore di riferimento. + CategoryInfo: ParserError: (:) \[\], ParentContainsErrorRecordException + FullyQualifiedErrorId: MissingPropertyName PS C:\\Users\\Marika>

It looks like the two commands got squished together! In PowerShell, you need to run the `cd` (change directory) command first, and then run the `.exe` as a separate step.

Try running them one by one like this:

1. **Move into the folder:**
	```
	cd "C:\Users\Marika\Documents\VLC"
	```
2. **Run the cache generator:**
	```
	.\vlc-cache-gen.exe .\plugins
	```

**Note:** If you see a bunch of text fly by or a brief pause, that means it's working. If it says "command not found," it might mean that specific version of VLC didn't include the `vlc-cache-gen.exe` file in the main folder.

**Once that finishes, try opening VLC—is there a noticeable difference in the startup time?**

- vlc-cache-gen.exe | VLC media player
	Usage (stdout): Permalink Usage: C:\\ Program Files\\ VideoLAN\\ VLC\\ vlc- cache- gen. exe < path> Generate the LibVLC plugins cache...
	strontic

Show all

PS C:\\Users\\Marika\\Documents\\VLC>.\\vlc-cache-gen.exe.\\plugins PS C:\\Users\\Marika\\Documents\\VLC>

Since there was no error message and it returned immediately to the prompt, the command ran successfully! This means VLC has now rebuilt its index of available features and shouldn't need to "think" as hard when you click the icon.

To finish this off and make sure it stays fast:

1. **Test the Speed:** Close any open VLC windows and try launching it now.
2. **The Final Piece (Defender):** Since VLC is in your `Documents` folder, Windows Defender will likely scan it every time it updates. If it's still a bit slow, make sure you've added `C:\Users\Marika\Documents\VLC` to the **Exclusions** list in **Windows Security** (as mentioned earlier).

**Did that command fix the delay, or is it still taking several seconds to appear?**

Show all

super fast! thank you

That’s great to hear! It’s a huge relief when it finally snaps open instantly.

Since you’re running a version of VLC from your **Documents** folder, just keep in mind that if you ever move that folder or update VLC by downloading a new version, you might need to run that `vlc-cache-gen` command one more time.

Would you like to know how to create a **desktop shortcut** for this specific version so you don't have to hunt through your folders for it?

Show all

can you make a markdown guide of what you taught me today?

Guide: Fixing Slow VLC Startup

If VLC takes 10–20 seconds to open, it is usually because **Windows Defender** is scanning the folder or the **Plugin Cache** is stale. Since your VLC is located in a custom folder (`Documents`), follow these specific steps.

1\. Identify the VLC Path

If you ever lose track of where VLC is installed, run this in **PowerShell**:

```
(Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\vlc.exe").'(Default)'
```

*In your case, the path is: `C:\Users\Marika\Documents\VLC`*

---

2\. Regenerate the Plugin Cache

This prevents VLC from re-scanning its own features every time it starts.

1. Open **PowerShell**.
2. Navigate to your VLC folder:
	```
	cd "C:\Users\Marika\Documents\VLC"
	```
3. Run the cache generator tool:
	```
	.\vlc-cache-gen.exe .\plugins
	```

---

3\. Add a Windows Defender Exclusion

Windows often delays programs running from the `Documents` folder because it considers them "non-standard."

1. Open **Windows Security** > **Virus & threat protection**.
2. Click **Manage settings** under "Virus & threat protection settings."
3. Scroll down to **Exclusions** and click **Add or remove exclusions**.
4. Click **Add an exclusion** > **Folder**.
5. Select: `C:\Users\Marika\Documents\VLC`.

---

4\. Optimize Internal Settings

To ensure it stays fast, disable the automatic plugin scan inside VLC:

1. Open VLC and go to **Tools** > **Preferences** (`Ctrl + P`).
2. At the bottom, under "Show settings," select **All**.
3. Go to **Advanced**.
4. Uncheck **Scan for new plugins**.
5. Click **Save**.

**Would you like me to show you how to save this guide as a clickable.bat file so you can run the fix automatically in the future?**

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com