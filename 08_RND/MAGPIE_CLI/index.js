#!/usr/bin/env node

const { Command } = require("commander");
const inquirer = require("inquirer");
const chalk = require("chalk");
const ora = require("ora");

const program = new Command();

program
  .name("dev-tool")
  .description("A professional CLI for developers")
  .version("1.0.0");

// COMMAND 1: Simple flag-based command
program
  .command("greet <name>")
  .description("Greet a specific person")
  .option("-u, --uppercase", "Greet in all caps")
  .action((name, options) => {
    let msg = `Hello, ${name}!`;
    if (options.uppercase) msg = msg.toUpperCase();
    console.log(chalk.green.bold(msg));
  });

// COMMAND 2: Interactive setup command
program
  .command("init")
  .description("Initialize a new project interactively")
  .action(async () => {
    console.log(chalk.blue("🚀 Welcome to the Project Initializer\n"));

    // 1. Interactive Prompts
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "What is your project name?",
        validate: (input) => (input ? true : "Project name is required!"),
      },
      {
        type: "list",
        name: "template",
        message: "Which template would you like to use?",
        choices: ["JavaScript", "TypeScript", "Rust-Wasm"],
      },
    ]);

    // 2. Visual Feedback (Spinner)
    const spinner = ora(`Creating project ${answers.projectName}...`).start();

    // Simulate a network request or file system operation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    spinner.succeed(
      chalk.green(
        `Project ${answers.projectName} created successfully with ${answers.template}!`,
      ),
    );
    console.log(chalk.yellow("\nNext steps:"));
    console.log(`  cd ${answers.projectName}`);
    console.log(`  npm install`);
  });

program.parse(process.argv);
