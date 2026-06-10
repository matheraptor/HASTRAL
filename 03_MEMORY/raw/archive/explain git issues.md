---
title: "explain git issues"
source: "https://www.google.com/search?q=explain+git+issues&sca_esv=99e60bb1754c5a2c&sxsrf=ANbL-n5c3-eNXSSv6bsxUX7D5xl51pU3RA%3A1775044542919&source=hp&ei=vgfNaa2gNqqii-gPtpSfkQ4&iflsig=AFdpzrgAAAAAac0Vzm7RhAlgzvsN2N_6ty53APUBIVyi&aep=22&ved=0ahUKEwit98GbzMyTAxUq0QIHHTbKJ-IQteYPCBc&oq=&gs_lp=Egdnd3Mtd2l6IgBIAFAAWABwAHgAkAEAmAEAoAEAqgEAuAEByAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcAgAgB&sclient=gws-wiz&mstk=AUtExfBhZfNq1r8opot4Mgd2kgX7WgBXYrHJP-OHu3OJdlVbZbcnWIRF2Z6vlGnJDoPnSJqPHzBJrP2kNVYRhV-hup8UsKEXS3t7lVX3AbqH1ge1tG-SOmURDrEKR7oyO_IL_-1WwArVE1hQpCddNP7yo6vv4L89b73aeK2uBOisgRIpeS4Gl2LIsglhhWExMgT-dY2BGrSZ7xRFxLCzRMe9Z5J46NywiO5uRJEV_zoSlDgenAW4SOjPDd08xTAFB6T6tvynxkYRmzJzjWjjl9XVEmAd18JoR6ES2Ds&csuir=1&mtid=RK8KavzEJZjKi-gPoMj62Aw&udm=50"
author:
published:
created: 2026-05-18
description:
tags:
  - "clippings"
---
## Search Results

Hi MaTheRaptor, what's on your mind?

explain git issues

The phrase "Git issues" generally refers to either ==**project management tickets** on remote hosting platforms like GitHub, or **technical mistakes** made while using the Git version control command-line tool==.

---

1\. Platform "Issues" (Project Management)

When people talk about issues on sites like **GitHub**, **GitLab**, or **Bitbucket**, they mean a built-in tracking tool. These function like digital sticky notes or a shared to-do list for a code repository.

- **Bug Tracking:** Users and developers log unexpected software behavior or crashes.
- **Feature Requests:** A place to propose and discuss new ideas or improvements.
- **Task Delegation:** Project maintainers assign issues to specific developers and organize them with colored labels (e.g., `bug`, `documentation`, `help wanted`).
- **Automation:** Developers can link a code change (Pull Request) to a specific issue using keywords like "fixes #12" so that the issue automatically closes when the code is merged.

---

2\. Technical Git Errors (Command-Line Mistakes)

If you are struggling with the Git software itself, "issues" refers to common human errors and conflicts that occur during version control management.

<table><tbody><tr><th colspan="undefined">Common Technical Issue</th><th colspan="undefined">What It Means</th><th colspan="undefined">How to Fix It</th></tr><tr><td colspan="undefined"><strong>Merge Conflict</strong></td><td colspan="undefined">Two people changed the exact same line of code in different ways, and Git doesn't know which version to keep.</td><td colspan="undefined">Open the file, manually choose the correct code blocks, remove Git's marker lines (<code><<<<<<<</code>, <code>=======</code>, <code>>>>>>>></code>), and commit the file.</td></tr><tr><td colspan="undefined"><strong>Committed to the Wrong Branch</strong></td><td colspan="undefined">You accidentally saved your work directly to the main production branch instead of your feature branch.</td><td colspan="undefined">Use <code>git reset HEAD~1 --soft</code> to undo the commit while saving your written code, switch to the correct branch, and commit there.</td></tr><tr><td colspan="undefined"><strong>Accidental Code Deletion</strong></td><td colspan="undefined">You ran a destructive command (like a hard reset) and lost your uncommitted progress or a whole branch.</td><td colspan="undefined">Run <code>git reflog</code> to see a history of every hidden movement you made, locate the position right before the error, and use <code>git reset HEAD@{index}</code> to travel back in time.</td></tr><tr><td colspan="undefined"><strong>Forgot to Add Changes to a Commit</strong></td><td colspan="undefined">You saved a commit but immediately realized you forgot to include a file or made a tiny typo.</td><td colspan="undefined">Stage the missed file with <code>git add .</code> and run <code>git commit --amend --no-edit</code> to secretly combine it into your last commit.</td></tr><tr><td colspan="undefined"><strong>Detached HEAD State</strong></td><td colspan="undefined">You checked out a specific old commit to look at it, meaning your workspace is no longer tracking any active branch.</td><td colspan="undefined">Simply type <code>git checkout main</code> (or the name of your branch) to safely return to your timeline.</td></tr></tbody></table>

---

Are you trying to learn how to **write/organize project tickets** on a platform like GitHub, or are you **currently stuck on a broken Git command** that you need help fixing? Let me know so I can give you the exact steps you need!

- GitHub Issues Explained for beginners
	27 Apr 2025 — if you didn't watch that video I advise you to do so by clicking right now on the link that will appear on the top right corner as...![](data:image/jpeg;base64,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)
	20m
	YouTube·Robotogeddon
- What are the most common mistakes with git that you... - Reddit
	18 Oct 2021 — My team inherited the worst git repo I've ever seen (long-lived environment branches that never merged upstream or downstream) --...![](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABmCAMAAAAOARRQAAAAY1BMVEX///8AAAD5+fm/v7/W1tZ/f3+SkpI9PT2Kiorb29uVlZXNzc2kpKSsrKzx8fGOjo5OTk4yMjIaGho3NzdsbGxdXV1nZ2fGxsZiYmIrKysICAhWVlZISEhCQkISEhKzs7Pk5OQlHtUSAAABdUlEQVRoge3a4W6CMBQFYAplk8KKilOYTvf+TzlbNxKZwG270y16zz9D4mfjba+tTRIO55wUmG9D10sBzLLWRpErJGKykuexrNGKEGudKLwihErMYJoMmMYMJzFYiazi0giWkUhGMsNMZKZAMkXPbHJgNj2Dzx0yuXqCReU9E6nS7mt6MsMMM8w8BKN34Z9gnkk7IRZ4xu4ZFJyxjU+8oJmvHWOFZn7DIRV0uEObN22oQ5yer4EOdRUIdMiLzdY6OzRzcd48HYel81IHfqcULit0gOPUCFrv78eJsdsHUYOZ2ipeTcGByf0VB2YfoNCZfVDbcVtsvJub09Lp30JpTKhCY4IVEvNDmT+kd2fSw0Ap2+Z5LO8jHWmeUQNFH8VUMk9mO3goJ5WR+Uv6OXi8enaYZG6fyRBKoMj01ev0tBiN+rj9Hv9n48EMM8wwwwwzzPwtE+lvogp5LaHqGXxiMREuppi7HLLDK50pZeTNpOmtD+eB8glpoRoZAdtciwAAAABJRU5ErkJggg==)
	Reddit·r/AskProgramming
- Issues in GitHub - GeeksforGeeks
	13 Jun 2024 — GitHub Issues are a way to track and manage the work needed to improve your projects. Each issue can represent a task, bug report,![](data:image/jpeg;base64,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)
	GeeksforGeeks

Show all

i do mean the actual git issue. What is for

The **actual Git software** (the command-line tool installed on your computer) does not have a built-in feature called "issues." When you experience a "Git issue," it means you have run into a **technical error** or a **workflow conflict** while managing your code.

Why Technical Git Issues Happen

These issues exist because Git is a strict mathematical system designed to guard your source code. It forces you to pause and resolve discrepancies rather than letting you accidentally overwrite a teammate's work or permanently erase important files.

Here is exactly what the most common technical "issues" are for:

1\. Merge Conflicts

- **What it is for:** To protect your project from accidental code destruction.
- **The Scenario:** You and a coworker both modify line 15 of `index.html` at the same time.
- **Why Git stops you:** Git cannot guess which person wrote the correct code. It pauses the merge process and forces a human to review the file so that good code does not get overwritten.

2\. Detached HEAD State

- **What it is for:** To let you safely look at or test old versions of your project.
- **The Scenario:** You want to see how your website looked three weeks ago, so you use `git checkout` to jump back to an old commit.
- **Why Git does it:** Git disconnects you from your active timeline so you can experiment freely. Any changes you make here will not corrupt your current, live production branch.

3\. Untracked and Unstaged Files

- **What it is for:** To give you total control over what gets saved into your project's history.
- **The Scenario:** You create 10 new files, but you only want to save 2 of them right now.
- **Why Git does it:** Git separates your workspace into "Unstaged" (drafting area) and "Staged" (the loading dock). It prevents clutter by ensuring only the files you explicitly select with `git add` make it into your final commit.

4\. Diverged Branches (Need to Pull)

- **What it is for:** To ensure your local computer matches the central cloud server before you add new things.
- **The Scenario:** You try to push your work to GitHub, but Git rejects your command with an error message.
- **Why Git stops you:** A teammate successfully uploaded code while you were working. Git forces you to download their updates first (`git pull`) to guarantee your new features are compatible with the absolute latest version of the project.

---

Are you **currently seeing a specific error message** in your terminal or command prompt? Paste it here, and I can tell you exactly what it means and how to bypass it!

Show all

is it a github only thing, then?

==**No, it is not a GitHub-only thing**==**.**

Whether you mean **project management "tickets"** or **technical code errors**, you will encounter them across the entire software development industry, regardless of the specific tool you use.

---

1\. Platform Tickets (Alternatives to GitHub)

If you mean "Issues" in the sense of task tracking and bug logging, GitHub is simply the most popular platform that offers this feature. Almost every single cloud-based Git hosting platform has its own identical version:

- **GitLab:** Calls them "GitLab Issues" and they function exactly like GitHub's.
- **Bitbucket:** Calls them "Jira Issues" or "Bitbucket Issue Trackers".
- **Jira / Trello / Asana:** These are standalone corporate project management tools. Companies often link their Git repositories directly to these platforms so a ticket in Jira automatically updates when code changes.

---

2\. Technical Errors (Universal to Git)

If you mean "issues" in the sense of **terminal errors** (like merge conflicts or detached HEAD states), **these happen everywhere**.

Because Git is an open-source tool running locally on your computer's terminal, the technical rules are completely identical no matter where you host the code online. You will run into the exact same errors using:

- Command Line / Terminal
- **VS Code** built-in Git tools
- Graphical apps like **GitKraken** or **Sourcetree**
- Corporate cloud setups like AWS CodeCommit or Azure DevOps

---

Which software setup are you currently using for your project? I can tell you exactly where to look for its issue tracker or how to resolve your specific error!

- Can someone for the love of god explain what Git and Github...
	30 Sept 2021 — Git is a " version control system." It lets you keep track of everychange you've made to your codebase, and assists with keeping...![](data:image/jpeg;base64,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)
	Reddit·r/learnprogramming
- What do you think about using GitHub Issues to allocate tickets to...
	14 Nov 2023 — If it's neither, you should stick with whatever's being used by the rest of the company for now. The majority of these tools are v...
	Reddit·r/SoftwareEngineering
- What's the difference between GitHub and Git?
	16 Jan 2024 — what is the difference between git and github well there's a short answer which I'm going to give you right away just in case you' ![](data:image/jpeg;base64,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)
	8m
	YouTube·Cameron McKenzie

Show all

well, I'm on github, and there's a feature that lets you see and add "issues"

Ah, got it! Thank you for clarifying. You are looking at the **GitHub Issues** tab on a project repository.

That feature is essentially a **project management and communication tool** built right into your code library. It acts like a shared, digital to-do list for that specific software project.

Here is exactly what that feature is for:

1\. Bug Reporting

If you are using someone’s code and it crashes or doesn't work as advertised, you click "New Issue" to report it. You explain what went wrong, what error message you got, and how to reproduce it. This lets the creator know they have a bug to fix.

2\. Requesting New Features

If you love an app or tool but wish it had a specific button, a dark mode, or a new capability, you open an issue. You can title it something like `[Feature Request] Add PDF export button` so the developers can discuss if and how to build it.

3\. Task Management (To-Do Lists)

For teams building software together, Issues are how they break down a massive project into bite-sized tasks. A project manager might create 20 different issues for a new update (e.g., `Fix login page styling`, `Update database security`) and assign them to different programmers.

4\. Public Discussion & Community Support

Issues act like a forum. If you are confused about how a piece of code works, you can open an issue to ask a question. Other developers around the world can jump into the comments section of that issue to help you troubleshoot.

---

Real-World Example of How It Works

1. **The Issue:** A user opens an issue titled: *"Login button doesn't work on mobile."*
2. **The Assignment:** The project leader assigns this issue to a developer named Sarah and adds a red `bug` label.
3. **The Fix:** Sarah writes the code to fix the button. When she saves her code, she types a note saying `"Fixes #42"` (assuming it was issue number 42).
4. **The Closure:** As soon as Sarah's code is accepted, GitHub automatically closes the issue and moves it to the "Done" pile.

Are you looking at an **open-source project** where you want to report a problem, or are you setting up **your own repository** and trying to figure out how to organize your workflow? Let me know and we can map out your next steps!

Show all

what about "projects"? How do they work?

**GitHub Projects** is a customizable project management tool built directly inside GitHub. Think of it as a **Trello** or **Asana** board that sits right next to your code.

While **Issues** are the individual "sticky notes" representing specific tasks, a **Project** is the entire "whiteboard" used to organize, schedule, and track those notes.

---

How GitHub Projects Work

GitHub Projects acts as a highly flexible spreadsheet or board that automatically syncs with your repository. It connects your code, your pull requests, and your issues into one visual dashboard.

1\. Visual Layouts

You can view and organize your tasks in three primary ways depending on your style:

- **Kanban Board:** A classic view with columns like *To Do*, *In Progress*, and *Done*. You drag and drop your task cards across columns as you work.
- **Table View:** A powerful, customizable spreadsheet. You can sort, group, and filter tasks by priority, date, or assignee.
- **Timeline (Gantt) Chart:** A roadmap view that lets you plot tasks across a calendar to map out deadlines and see project duration.

2\. Automatic Syncing

You do not have to update your board manually. You can set up automation rules so that:

- When an Issue is created $→right arrow$ It automatically drops into the **To Do** column.
- When a developer starts writing code $→right arrow$ The card moves to **In Progress**.
- When code is merged into the main project $→right arrow$ The card automatically moves to **Done**.

3\. Custom Fields and Metadata

Unlike basic to-do lists, you can add custom columns to track exactly what your team needs. You can track:

- **Story Points / Difficulty:** (e.g., estimating if a task takes 1, 3, or 5 days)
- **Priority Levels:** (e.g., Low, Medium, High)
- **Target Release Date:** (e.g., "v1.2 Update")

---

The Big Difference: Issues vs. Projects

<table><tbody><tr><th colspan="undefined">Feature</th><th colspan="undefined">GitHub Issues</th><th colspan="undefined">GitHub Projects</th></tr><tr><td colspan="undefined"><strong>What it is</strong></td><td colspan="undefined">The individual task or bug report.</td><td colspan="undefined">The overall organizational dashboard.</td></tr><tr><td colspan="undefined"><strong>Analogy</strong></td><td colspan="undefined">A single sticky note.</td><td colspan="undefined">The entire office whiteboard.</td></tr><tr><td colspan="undefined"><strong>Scope</strong></td><td colspan="undefined">Tied to <strong>one</strong> specific repository.</td><td colspan="undefined">Can pull tasks from <strong>multiple</strong> repositories at once.</td></tr><tr><td colspan="undefined"><strong>Purpose</strong></td><td colspan="undefined">To discuss details, code changes, and bugs.</td><td colspan="undefined">To track timelines, workloads, and progress.</td></tr></tbody></table>

---

Are you setting up a board for a **solo personal project** to keep yourself organized, or are you trying to coordinate a **group project with classmates or teammates**? I can give you a quick tip on the best way to structure your board!

Show all

solo personal project that might one day evolve into a team (i'm making a mmorpg solo, hoping for publication and commercial success)

Making a solo MMORPG is a massive, incredibly exciting mountain to climb! Because MMORPGs have thousands of moving parts—networking, art, database management, gameplay mechanics, and server infrastructure—organizing your workflow right now is the only way to avoid burning out.

Setting up your **GitHub Project** correctly today will keep your solo momentum alive and make onboarding future teammates seamless.

Here is the exact blueprint to set up your GitHub Project for a scaling solo MMORPG:

1\. The Structure: Use a Feature-Driven Kanban Board

Do not just use a basic "To Do" column; your brain will get overwhelmed by the sheer volume of tasks. Set up your columns like this:

- **📋 Backlog (The Icebox):** Every random idea, futuristic feature, or massive system (e.g., "Guild System," "Auction House") goes here so it doesn't clutter your brain.
- **🎯 Next Milestone (Current Sprint):** Only the tasks you need for your immediate goal (e.g., "Get a character to walk and connect to the server").
- **🛠️ In Progress:** Limit yourself to **maximum 2 tasks** at a time to stay focused.
- **🧪 Testing / QA:** For features that are coded but need debugging (e.g., stress testing server stability with mock clients).
- **✅ Shipped:** The rewarding column where completed features live.

2\. Use Custom Fields for Game Dev Roles

Since you are currently acting as an entire game studio, use GitHub Project's **Custom Fields** to categorize tasks by department. When you eventually hire people, they can immediately filter the board to see only their department's tasks. Add a single-select custom field named **"Department"** with these labels:

- `Networking & Infrastructure` (Server hosting, database, login system)
- `Gameplay Programming` (Combat formulas, movement, inventory logic)
- `Art & Animation` (3D models, UI design, animations)
- `Audio` (Sound effects, background music)
- `Design` (Map layouts, quest writing, item balancing)

3\. Build a "Milestones" Roadmap

A common trap for solo MMORPG developers is trying to build the whole game at once. Use GitHub's **Milestones** tool to group your Issues into playable phases.

- **Milestone 1: Pre-Alpha (The Prototype):** Moving a block character on a flat grid, saving player position to a local database.
- **Milestone 2: Alpha 1 (Core Loop):** Combat mechanics work, enemies spawn, items drop.
- **Milestone 3: Alpha 2 (Networking):** Multiple players can log into the same server world simultaneously without crashing.

4\. Create Issue Templates Today

To save time later, go to your repository settings and create **Issue Templates**. When you find a bug while testing your game, you can click "New Bug Report" and it will automatically generate a prompt asking you for:

1. Steps to reproduce the bug.
2. Expected behavior vs. actual behavior.
3. Server logs / Client logs.  
	*This standardizes your data. When a future programmer joins your team, they can fix bugs instantly because your reports are perfectly documented.*

---

What engine or networking framework are you using to build your backend infrastructure (e.g., **Godot**, **Unity/Unreal** with **Mirror/Fish-Net**, or a custom **Node.js/C++** server)? I can suggest a few specific automation tips tailored to your tech stack!

Show all

create a plan markdown to brief a claude code agent on how to integrate all the git/github features into our project. Reasoning: our local repo has a wiki that the agent can leverage, instead of me having to explain you everything from scratch

Here is a structured markdown brief designed to be pasted directly into a **Claude Code** agent (or any advanced AI coding assistant). It instructs the agent to read your local Git repository's Wiki first, map out your MMORPG architecture, and systematically configure your GitHub Issues, Milestones, and Projects for scaling.

---

```
# AGENT BRIEF: GitHub Architecture & Project Management Integration

## 🎯 OBJECTIVE
Configure a highly structured, scalable GitHub project management ecosystem (Issues, Labels, Milestones, and GitHub Projects) for our solo MMORPG. The setup must be optimized for a solo developer acting across multiple studio departments, but architected to seamlessly onboard future team members.

## 🧭 STEP 1: CONTEXT RETRIEVAL (READ THE WIKI FIRST)
Before generating any configuration files or hitting any GitHub APIs, you must ingest our local repository's documentation. Do not guess our architecture.
1. Locate and read the local repository Wiki files (usually found in the \`.git/modules/wiki/\` directory, a sibling \`[repo-name].wiki\` folder, or your localized markdown documentation folder).
2. Analyze the Wiki to extract:
   - The game engine being used (e.g., Unity, Unreal, Godot).
   - The networking framework/architecture (e.g., Fish-Net, Mirror, Netcode, Custom C++/Node.js).
   - Core gameplay mechanics and database structures currently planned.

## 🛠️ STEP 2: REPOSITORY LABELS INITIALIZATION
Standardize our Issue labeling system across technical, asset, and design pipelines. 
Using the GitHub CLI (\`gh label create\`) or a programmatic workflow, remove default repository labels and implement the following schema:

### Departments (Color Group A: e.g., Blue/Purple)
- \`dept:networking\` - Server infrastructure, database, packet optimization, login systems.
- \`dept:gameplay\` - Combat math, inventory logic, movement, skill trees.
- \`dept:art-animation\` - 3D models, rigging, UI/UX skins, VFX.
- \`dept:audio\` - SFX, ambient tracks, dynamic music triggers.
- \`dept:design\` - Quest writing, drop tables, economy balancing, map layouts.

### Task Types (Color Group B: e.g., Green/Yellow/Red)
- \`type:bug\` - Something is broken or crashing.
- \`type:feature\` - New implementation or mechanic.
- \`type:refactor\` - Code cleanup, optimization, tech debt without changing behavior.
- \`type:asset-request\` - Art, sound, or animation assets needed for a feature.

### Priority & State (Color Group C: e.g., Grayscale/Orange)
- \`priority:critical\` - Game-breaking, server crashes, blocker.
- \`priority:high\` / \`priority:medium\` / \`priority:low\`
- \`status:help-wanted\` - Reserved for future external contributors or niche specialists.

## 📌 STEP 3: AUTOMATED ISSUE TEMPLATES
Create automated Issue Templates in \`.github/ISSUE_TEMPLATE/\` so that bugs and feature requests are documented with absolute technical precision.

1. **\`bug_report.md\`**: Must include sections for:
   - Client-side logs vs. Server-side logs.
   - Network state (Latency/Packet loss conditions when bug occurred).
   - Reproduction steps (including network replication context).
   - Expected vs. Actual behavior.
2. **\`feature_request.md\`**: Must include sections for:
   - Gameplay/User impact.
   - Technical dependencies (e.g., "Requires database migration").
   - Networking implications (RPC counts, bandwidth impact considerations).

## 🚀 STEP 4: MILESTONES & PROTOTYPE ROADMAP
Based on the tech stack discovered in our local Wiki, initialize the first three critical production Milestones in GitHub:
1. **Milestone 1: Pre-Alpha (The Net-Walking Prototype)**
   - Target: Headless server hosting, client-server handshake, secure login, basic position replication on a flat plane.
2. **Milestone 2: Alpha 1 (The Core Loop)**
   - Target: Combat hit registration, local database persistence (saving player inventory/coordinates), enemy spawning.
3. **Milestone 3: Alpha 2 (Scale & Stress)**
   - Target: Multithreading/Zone partitioning optimization, handling 50+ mock concurrent clients, chat/party networking.

## 📊 STEP 5: GITHUB PROJECTS ARCHITECTURE (BETA/V2)
Generate a script or instructions to bootstrap a **GitHub Project (V2)** at the user/organization level that links directly to this repository. The project must feature:

1. **Views:**
   - **Kanban Board View:** Columns organized as: \`Backlog\` -> \`Next Milestone\` -> \`In Progress (Max 2)\` -> \`Testing / QA\` -> \`Done\`.
   - **Table View:** Grouped by \`Milestone\`, sorted by \`Priority\`.
   - **Timeline View:** Mapping out the Milestones over a rolling schedule.
2. **Custom Fields:**
   - Add a custom \`Estimate\` field (Single select or number for Story Points/Days required).
   - Add a custom \`Testing State\` field (Options: \`Untested\`, \`Local Only\`, \`Server Staging Passed\`).

## 🤖 EXECUTION COMMAND
Once you have fully digested the Wiki, present a summary of the game's architecture as you understand it. Then, ask for confirmation to generate the \`.github/\` folder structure, templates, and execution scripts.
```

---

Once Claude reads this, it will crawl your local files, figure out exactly how your game is built, and script the perfect GitHub setup.

Would you like to **add any specific testing protocols** to the bug template instructions (like Docker container states or specific database types), or does this cover your architectural needs?

Show all

Google apps

Google Account

MaTheRaptor

hamedahastral@gmail.com