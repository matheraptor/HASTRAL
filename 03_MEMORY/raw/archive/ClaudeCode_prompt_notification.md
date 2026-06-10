---
title: "does Claude Code have a notification for when it's waiting for user prompt?"
source: "https://www.google.com/search?sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=26&udm=50&ved=0ahUKEwit98GbzMyTAxUq0QIHHTbKJ-IQteYPCBc&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mstk=AUtExfBuS6I2qX7sk7WV4gWFRtpjlaDyiWXRy7Eam-OGchQXyj5CWSZ-Ekpg62oDLDHqcfUJSKCnSjpYXJrVYttu0-RTIg4J7KUHE4L8OanjE9fK4yoXF3g8Spm7YbfvY1NyK97Gx0-pSPU4z5vOxAwEO7K4dUjcZiq214O9lTTZ0oIKTUol64YO1B5lzpM3hEpMaQI_YTtubf-Y34iszLMRPlffsxDMvFcXKTwn6XZ11USouccJtWWfptvSAaJNNLAQRzoE4sODQhrrSb-VDJvPbKiGaDJ_ZiJWmkk&mtid=W6_fabLdGbyC9u8P2t6qgA0&csuir=1&q=does+Claude+Code+have+a+notification+for+when+it%27s+waiting+for+user+prompt%3F&atvm=2"
author:
published:
created: 2026-04-15
description:
tags:
  - "clippings"
---

## Search Results

does Claude Code have a notification for when it's waiting for user prompt?

17:31

Claude Code ==does not have native, "out-of-the-box" desktop notifications for when it is waiting for your input==. Instead, it uses a **hooks system** that allows you to trigger system-level alerts yourself.

How to Set Up Notifications

You can configure a `Notification` hook in your `~/.claude/settings.json` file. This event specifically fires when Claude finishes working and needs your input or permission.

- **macOS**: Use `osascript` to trigger a native notification.
  ```
  {
    "hooks": {
      "Notification": [
        {
          "matcher": "",
          "hooks": [
            {
              "type": "command",
              "command": "osascript -e 'display notification \"Claude needs your attention\" with title \"Claude Code\"'"
            }
          ]
        }
      ]
    }
  }
  ```
- **Linux**: Use `notify-send` for a desktop alert.
  ```
  "command": "notify-send 'Claude Code' 'Waiting for your input'"
  ```
- **Windows**: Use a PowerShell toast command.

Alternative Methods

- **Terminal Bell**: Some users add a prompt to their `CLAUDE.md` file telling Claude to output a bell character (`\a`) when waiting for input. You can then configure terminal apps like iTerm2 to show a notification whenever the terminal "dings".
- **Audio Alerts**: Community-made tools like **Claude Code Audio Hooks** provide specific sound cues for different events like task completion or permission requests.
- **Third-Party Wrappers**: Tools like [CCNotify](https://github.com/dazuiba/CCNotify) or pikiclaw wrap the CLI to provide instant desktop or even mobile (via Telegram) notifications.
- **VS Code Extension**: If you use the Claude Dev or official VS Code extension instead of the raw terminal, you will see activity indicators and standard VS Code notifications automatically.

Would you like me to help you **write a specific shell script** for your hook that includes details like the project name in the notification?

- Automate workflows with hooks - Claude Code Docs
  Set up your first hook. To create a hook, add a hooks block to a settings file. This walkthrough creates a desktop notification...
  code.claude.com
  ![](data:image/jpeg;base64,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)
- No notification when a Claude Code session is waiting for...
  No notification when a Claude Code session is waiting for input, any workaround?... There's currently no way to know when a sessi...
  Reddit
  ![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFIAUQMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAgEDBQQH/8QAPhAAAgEDAQQHBQQHCQAAAAAAAQIDABEhBAUSEzEUQVFTYZHRIlJxgaEjMpKxFUJVYpOU8CQzVIKVssLS4f/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APNBp53B4UEshFrBNITfr6h2Z+FQdPrASG0UqlbbwbTEWvyvjF747aqXUyrYpJIuAMSH1qW1UzghpZTe17yNm3LrqKsOn1YdU6KSzcgIQb/Sjgay5HQ5LqbEdHyOvItVY1Uw3bSSDdFhZzgUDUyi9nkF+f2jZ+tBZ0fW/wCBl/lj6VHB1W6W6I9gbE9H5HHPGOYpBqphylkGLf3jetQZ3N7s53jdrucmgtMGrVWZtI4VRcsdPgD42qjin3U/hj0pzqpyhQzSlSLWMjEW+F6poH4p92P8A9KOKfdj/APSkoqlPxT7sf4B6UUlFCjnRT8GTu28qODJ3beVEJRT8GTu28qODJ3beVAlFPwZO7byo4Mndt5UCUU/Bk7tvKjgyd23lQJRT8GTu28qODJ3beVAlFPwZO7byooK8VNdKvEEBOi3iMFuI9iflVLqWLOsZC73UDjwoEopuHJcjhvdeY3TioCOeSMfgKCKKkowF909nLnTGKRfvRuPipoEopjG4NmRgewijhv7jWvb7poFopuG/uN+E0CNyQAjXIuBbmKBaKs4E3dSfhNFBoyJtJYjp210bRTFgUGpG6b3JuOq9z5mmttSISOutTOW3dQtz6/Ksi3YKLUGsj7U3pWTXC5USSOdQM3HXfmfZ5VEh2ppNOCNcpSNbBI5gxVQOoeA7PrWT1XqbDwoNVk2hE2+NfCfaLBl1Ayx9m/b12/q9CvtOQFempuyhiQZlzYi/wAD15seysq3hUY8KDVY7Rhd36epYRi7CfJUE4z8DjxFWRptOJGWPXwqCbkDUDJyT8zase1uzFQbCg2Xfaqxhf0iu4ptZdQAQTY/8vzqnULtBJBLJq42cI1nTUKW3RzGPyrNtai1qDb39sftGL+YSisS3hRQbQ0vASWVol3ncqkcmgYqx3iFUe1i/Z8s2uehdOsREZjjkdQCDJsxyQORxvfWsuSEhF3tqwSXcYEjnd8cgWtTcFiwP6ZgyAL8WS4HZ92g7RBuwScRIo7YDnZzE2wcHexnq9aibSlNnzfZxFhEzH+wMCl82D3xYm17VwGORo2J2jE1j9xpmu2L4xahVeS6PtSIKYwfbkkK5/VOOfnQacsSLLuHSRLHKrKrvs833/DPOwvf5fAeJI+HuRQlQDvzNs5rqQRYH2uWfpWbMroyAbVSQ8wyyMQpuBz/AMxOOpTTvC277W2IG/d40hH+2g7nUxygNpkeN23eIdEyk4wSL552tUDSAKiKqF4lJUts8gy2QizZ7fDnXBw24UbNtWIlyvsiVyUJznst2/GoRH3Y5htSNZH3TYTPvJftNuoGg0REsepRTpYlVwAOJs0kKw7BfNxc47AM1U+hs6xiJd3df7ToJvcnAte5I6uofnzNFJI2/LtiB5L4ZppD9SBb/wBqBA+SNrQgBt0MZXzyN8DlnzB5UGj0H92L/TG/71NZ3Af9tab+LL6VNBmdZooooJ/Vb5ULzoooBudQaKKAoFFFAw51DVNFAtFFFB//2Q==)
- No notification when a Claude Code session is waiting for...
  No notification when a Claude Code session is waiting for input, any workaround?... There's currently no way to know when a sessi...
  Reddit
  ![](data:image/jpeg;base64,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)

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com
