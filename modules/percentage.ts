import chalk from "chalk";
import inquirer from "inquirer";

async function percentageCalculator() {
  let run: boolean = true;
  while (run) {
    async function findValue() {
      let answer = await inquirer.prompt([
        {
          name: "mainValue",
          type: "number",
          message: "Enter main value : ",
        },
        {
          name: "percentage",
          type: "number",
          message: "Enter percentage value : ",
        },
      ]);

      console.log(
        `Answer is ${chalk.green((answer.mainValue / 100) * answer.percentage)}`
      );
    }

    async function findPerc() {
      let answer = await inquirer.prompt([
        {
          name: "mainValue",
          type: "number",
          message: "Enter main value : ",
        },
        {
          name: "secondValue",
          type: "number",
          message: "Enter second value : ",
        },
      ]);

      console.log(
        `Answer is ${chalk.red(
          (answer.secondValue / answer.mainValue) * 100 + "%"
        )}`
      );
    }

    let percentagetype = await inquirer.prompt([
      {
        name: "type",
        type: "list",
        choices: ["Percentage to Value", "Value to Percentage"],
        message: "Select Type :",
      },
    ]);

    percentagetype.type == "Percentage to Value"
      ? await findValue()
      : percentagetype.type == "Value to Percentage"
      ? await findPerc()
      : "Invalid Type";

    let ask = await inquirer.prompt([
      {
        name: "useAgain",
        type: "confirm",
        message: "Do you want to use Agian?",
      },
    ]);
    if (!ask.useAgain) {
      run = false;
    }
  }
  console.log(chalk.yellow("Thanks for USing percentage Calculator"))
}

export default percentageCalculator;
