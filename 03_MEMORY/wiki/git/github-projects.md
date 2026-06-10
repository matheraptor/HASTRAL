# GitHub Projects

**Summary**: GitHub Projects is a customizable project management tool built directly inside GitHub, acting as a board to organize, schedule, and track issues.

**Sources**: explain git issues.md

**Last updated**: 2026-05-18

---

**GitHub Projects** is a customizable project management tool built directly inside GitHub. Think of it as a **Trello** or **Asana** board that sits right next to your code. While [[git-issues]] are the individual "sticky notes" representing specific tasks, a Project is the entire "whiteboard" used to organize those notes.

## How GitHub Projects Work

GitHub Projects acts as a highly flexible spreadsheet or board that automatically syncs with your repository.

### Visual Layouts

You can view and organize your tasks in three primary ways:

- **Kanban Board:** A classic view with columns like *To Do*, *In Progress*, and *Done*. Drag and drop task cards across columns as you work.
- **Table View:** A powerful, customizable spreadsheet. Sort, group, and filter tasks by priority, date, or assignee.
- **Timeline (Gantt) Chart:** A roadmap view that lets you plot tasks across a calendar to map out deadlines and see project duration.

### Automatic Syncing

Automation rules can be set up so that:
- When an Issue is created -> It automatically drops into the **To Do** column.
- When a developer starts writing code -> The card moves to **In Progress**.
- When code is merged into the main project -> The card automatically moves to **Done**.

### Custom Fields and Metadata

Add custom columns to track exactly what your team needs:
- **Story Points / Difficulty:** (e.g., estimating if a task takes 1, 3, or 5 days)
- **Priority Levels:** (e.g., Low, Medium, High)
- **Target Release Date:** (e.g., "v1.2 Update")

## Issues vs. Projects

| Feature | GitHub Issues | GitHub Projects |
| ------- | ------------- | --------------- |
| **What it is** | The individual task or bug report. | The overall organizational dashboard. |
| **Analogy** | A single sticky note. | The entire office whiteboard. |
| **Scope** | Tied to **one** specific repository. | Can pull tasks from **multiple** repositories at once. |
| **Purpose** | To discuss details, code changes, and bugs. | To track timelines, workloads, and progress. |

## Related pages

- [[git-issues]]
- [[mmorpg-project-blueprint]]
