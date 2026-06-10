---
type: plan
version: 0.1.0 20260509-2231
tags: ["CLI", "TUI", "design", "plan"]
---

# MAGPIE CLI — design document

## Table of Contents

- [MAGPIE CLI — design document](#magpie-cli--design-document)
  - [Table of Contents](#table-of-contents)
  - [CLI elements](#cli-elements)
    - [1. Core Interface](#1-core-interface)
    - [2. Functional Flow](#2-functional-flow)
    - [3. Technical Components](#3-technical-components)
    - [4. UI Layout](#4-ui-layout)
  - [Libraries to be used](#libraries-to-be-used)
    - [1. Commander.js](#1-commanderjs)
    - [2. Inquirer.js](#2-inquirerjs)
    - [3. Chalk](#3-chalk)
    - [4. Socket.io-client](#4-socketio-client)
    - [5. Ora](#5-ora)
  - [Suggested code structure](#suggested-code-structure)

[Back to Top ⤴️](#table-of-contents)

---

## CLI elements

### 1. Core Interface

**Passive View**: Real-time status monitor (vitals, activity, environment).
**Active Input**: Command prompt for influence actions.

### 2. Functional Flow

**Login**: User Creds => Socket.io Connection => Server Auth.
**Observation**: Server Event => CLI Update (Vitals/State).
**Influence**: User Input => Socket Event => Server Logic => Result Display.

### 3. Technical Components

`commander`: Handle CLI flags and initial start command.
`socket.io-client`: Constant link to game server.
`inquirer`: Manage menus and influence selection.
`chalk`: Visual distinction between system logs and fauna status.

### 4. UI Layout

**Header**: Connection status and session ID.
**Body**: Live-updating data blocks (Biometrics/Activity).
**Footer**: Input line for influence triggers.
**Next step**: Define the specific Socket events the CLI needs to send and receive.

[Back to Top ⤴️](#table-of-contents)

---

## Libraries to be used

### 1. Commander.js

**Purpose:** Handles the "entry point" of your CLI. It parses what the user types in the terminal so your code knows which function to run.

- **What it does:** It takes `process.argv` (the raw string of the command) and turns it into usable logic.
- **Key Use Case:** Defining commands and flags.
- **Example:**
  `dev-tool start --user Marika` => `commander` identifies the command as `start` and the option as `user: Marika`.
- **Main Benefit:** Automatically generates a `--help` menu for the user.

### 2. Inquirer.js

**Purpose:** Creates interactive "forms" in the terminal. Instead of the user typing a perfect command, they choose from a menu.

- **What it does:** Pauses the code execution and waits for user input.
- **Key Use Case:** Selection lists (e.g., choosing which influence signal to send).
- **Types of Prompts:**
  - `list`: A menu where the user picks one option.
  - `input`: A text field for typing.
  - `confirm`: A Yes/No toggle.
- **Example:** `Select Influence => [Calm, Alert, Soothe]`

### 3. Chalk

**Purpose:** Visual styling. It uses ANSI escape codes to change the color and weight of text in the terminal.

- **What it does:** Wraps strings in color codes that the terminal interprets as colors.
- **Key Use Case:** Differentiating between data types.
- **Example:**
  - `chalk.green('Connected')` => Green text for success.
  - `chalk.red('Link Lost')` => Red text for errors.
  - `chalk.blue.bold('SHELDER-EVO')` => Bold blue for headers.
- **Main Benefit:** Makes a text-only interface readable by creating a visual hierarchy.

### 4. Socket.io-client

**Purpose**: Enables real-time, bidirectional communication between the CLI and the Game Server.

**How it works**: Instead of making a request and waiting for a response (like HTTP), it opens a persistent "pipe."
**Key Actions**: - `.emit('event', data)` => Sends a message to the server. - `.on('event', callback)` => Listens for messages coming from the server.
**Role**: The actual "bridge" that transmits player influence and receives creature vitals.

### 5. Ora

**Purpose**: Provides a visual loading spinner in the terminal to indicate a process is running.

**How it works**: It replaces a static line of text with an animated spinner.
**Key Actions**: - `.start()` => Starts the animation. - `.succeed()` => Stops the spinner and replaces it with a green checkmark. - `.fail()` => Stops the spinner and replaces it with a red X.
**Role**: The visual "loading" state used during the HOC sync/connection phase.

[Back to Top ⤴️](#table-of-contents)

---

## Suggested code structure

**The Shebang**: Your `index.js` must start with `#!/usr/bin/env node` on the very first line, otherwise the dev-tool command won't work.
Linking: Run npm link in your terminal now. This connects your local folder to your system's global commands so you can use dev-tool.

Since we are focusing on the "Connection => Observation => Influence" flow, here is the leanest way to organize your index.

```javascript
//javascript

#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const { io } = require('socket.io-client');

const program = new Command();

// State to track the HOC link
const state = {
    socket: null,
    linked: false,
    fauna: {} // Stores vitals/activity from server
};

async function startInterface() {
    console.log(chalk.cyan.bold('M.A.G.P.I.E. Mainframe Initializing...'));

    const spinner = ora('Establishing HOC Uplink to Shelder...').start();

    // 1. Socket Connection
    state.socket = io('http://your-game-server.com');

    state.socket.on('connect', () => {
        spinner.succeed(chalk.green('Link Established.'));
        state.linked = true;
        mainMenu();
    });

    state.socket.on('disconnect', () => {
        console.log(chalk.red('\n[!] HOC Link Severed.'));
        state.linked = false;
    });

    // 2. Observation (Passive Updates)
    state.socket.on('fauna_update', (data) => {
        state.fauna = data;
        // This is where we update the screen with vitals
        console.log(chalk.gray(`\n[Update] Vitals: ${data.health}% | State: ${data.status}`));
    });
}

async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'HOC Interface Active. Select Influence:',
            choices: ['Calm', 'Alert', 'Soothe', 'Disconnect']
        }
    ]);

    if (action === 'Disconnect') {
        state.socket.disconnect();
        process.exit();
    }

    // 3. Influence (Active Input)
    state.socket.emit('influence_action', { type: action });
    console.log(chalk.yellow(`Transmitting ${action} impulse...`));

    mainMenu(); // Loop back to menu
}

program
    .command('start')
    .description('Launch the M.A.G.P.I.E. Interface')
    .action(startInterface);

program.parse(process.argv);
```

This setup implements exactly what we planned:

**commander** => Launches the app.
**ora** => Simulates the "syncing" process.
**socket.io** => Handles the bridge to your game server.
**inquirer** => Provides the influence menu.
**chalk** => Gives it the mainframe aesthetic.

[Back to Top ⤴️](#table-of-contents)

---
