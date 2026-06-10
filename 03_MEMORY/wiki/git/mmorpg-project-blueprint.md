# MMORPG Project Blueprint

**Summary**: Blueprint to set up a GitHub Project for a scaling solo MMORPG, including Kanban structures, milestones, and an AI Agent brief.

**Sources**: explain git issues.md

**Last updated**: 2026-05-18

---

Setting up a [[github-projects]] configuration correctly is vital for avoiding burnout during solo MMORPG development. It provides the foundation for smooth onboarding when expanding to a team later.

## Feature-Driven Kanban Board

Do not use a basic "To Do" column. Set up columns like this to handle the massive scope of an MMORPG:

- **📋 Backlog (The Icebox):** Every random idea, futuristic feature, or massive system (e.g., "Guild System", "Auction House") goes here.
- **🎯 Next Milestone (Current Sprint):** Only the tasks you need for your immediate goal.
- **🛠️ In Progress:** Limit yourself to **maximum 2 tasks** at a time to stay focused.
- **🧪 Testing / QA:** For features that are coded but need debugging.
- **✅ Shipped:** The rewarding column where completed features live.

## Custom Fields for Game Dev Roles

Use Custom Fields to categorize tasks by department, which simplifies future filtering for specialists:

- `Networking & Infrastructure`: Server hosting, database, login system
- `Gameplay Programming`: Combat formulas, movement, inventory logic
- `Art & Animation`: 3D models, rigging, UI design, animations
- `Audio`: Sound effects, background music
- `Design`: Map layouts, quest writing, item balancing

## Milestones Roadmap

Group your [[git-issues]] into playable phases using Milestones:

- **Milestone 1: Pre-Alpha (The Prototype):** Moving a character, saving player position to a local database.
- **Milestone 2: Alpha 1 (Core Loop):** Combat mechanics work, enemies spawn, items drop.
- **Milestone 3: Alpha 2 (Networking):** Multiple players can log into the same server world simultaneously without crashing.

## Issue Templates

Create automated Issue Templates in `.github/ISSUE_TEMPLATE/` to ensure robust documentation:
- Include reproduction steps.
- Detail Expected vs. Actual behavior.
- Capture Server logs and Client logs.

## Agent Brief for Automated Integration

The following prompt can be fed to an AI agent (e.g., Claude Code) to initialize the repository's project management architecture based on local wiki context:

```markdown
# AGENT BRIEF: GitHub Architecture & Project Management Integration

## 🎯 OBJECTIVE
Configure a highly structured, scalable GitHub project management ecosystem (Issues, Labels, Milestones, and GitHub Projects) for our solo MMORPG.

## 🧭 STEP 1: CONTEXT RETRIEVAL (READ THE WIKI FIRST)
1. Locate and read the local repository Wiki files.
2. Analyze the Wiki to extract:
   - The game engine being used.
   - The networking framework/architecture.
   - Core gameplay mechanics and database structures currently planned.

## 🛠️ STEP 2: REPOSITORY LABELS INITIALIZATION
Using the GitHub CLI (`gh label create`) or a programmatic workflow, implement the following schema:
- **Departments (Blue/Purple)**: `dept:networking`, `dept:gameplay`, `dept:art-animation`, `dept:audio`, `dept:design`
- **Task Types (Green/Yellow/Red)**: `type:bug`, `type:feature`, `type:refactor`, `type:asset-request`
- **Priority & State (Grayscale/Orange)**: `priority:critical`, `priority:high`, `priority:medium`, `priority:low`, `status:help-wanted`

## 📌 STEP 3: AUTOMATED ISSUE TEMPLATES
Create `bug_report.md` and `feature_request.md` in `.github/ISSUE_TEMPLATE/`.
- `bug_report.md` must include Client/Server logs, Network state, Reproduction steps, Expected/Actual behavior.
- `feature_request.md` must include Gameplay impact, Technical dependencies, Networking implications.

## 🚀 STEP 4: MILESTONES & PROTOTYPE ROADMAP
Initialize the first three critical production Milestones in GitHub:
1. **Milestone 1: Pre-Alpha (The Net-Walking Prototype)**
2. **Milestone 2: Alpha 1 (The Core Loop)**
3. **Milestone 3: Alpha 2 (Scale & Stress)**

## 📊 STEP 5: GITHUB PROJECTS ARCHITECTURE (BETA/V2)
Bootstrap a **GitHub Project (V2)** linking directly to this repository with Views (Kanban, Table, Timeline) and Custom Fields (`Estimate`, `Testing State`).

## 🤖 EXECUTION COMMAND
Once you have fully digested the Wiki, present a summary of the game's architecture as you understand it. Then, ask for confirmation to generate the `.github/` folder structure, templates, and execution scripts.
```

## Related pages

- [[git-issues]]
- [[github-projects]]
