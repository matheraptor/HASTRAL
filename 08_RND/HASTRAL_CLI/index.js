#!/usr/bin/env node

import { Command } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import { io } from "socket.io-client";

const program = new Command();

// State to track the HOC link
const state = {
  socket: null,
  linked: false,
  fauna: {}, // Stores vitals/activity from server
};

async function startInterface() {
  console.log(chalk.cyan.bold("M.A.G.P.I.E. Mainframe Initializing..."));

  const spinner = ora("Establishing HOC Uplink to Shelder...").start();

  // Socket Connection - using localhost by default for development
  state.socket = io("http://localhost:3000");

  state.socket.on("connect", () => {
    spinner.succeed(chalk.green("Link Established."));
    state.linked = true;
    mainMenu();
  });

  state.socket.on("disconnect", () => {
    console.log(chalk.red("\n[!] HOC Link Severed."));
    state.linked = false;
  });

  // Observation (Passive Updates)
  state.socket.on("fauna_update", (data) => {
    state.fauna = data;
    // We use a simple log for now as per the plan
    console.log(
      chalk.gray(
        `\n[Update] Vitals: ${data.health || "??"}% | State: ${data.status || "Unknown"}`,
      ),
    );
  });
}

async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "HOC Interface Active. Select Influence:",
      choices: ["Calm", "Alert", "Soothe", "Disconnect"],
    },
  ]);

  if (action === "Disconnect") {
    console.log(chalk.yellow("Terminating HOC Uplink..."));
    state.socket.disconnect();
    process.exit();
  }

  // Influence (Active Input)
  state.socket.emit("influence_action", { type: action });
  console.log(chalk.yellow(`Transmitting ${action} impulse...`));

  mainMenu(); // Loop back to menu
}

program
  .name("hastral-cli")
  .description("M.A.G.P.I.E. Interface for HASTRAL")
  .version("0.1.0");

program
  .command("start")
  .description("Launch the M.A.G.P.I.E. Interface")
  .action(startInterface);

program.parse(process.argv);
