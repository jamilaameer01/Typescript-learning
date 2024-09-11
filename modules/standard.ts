import chalk from "chalk";
import inquirer from "inquirer";

async function standardCalculation() {
  let run: boolean = true;
  while (run) {
    let answer = await inquirer.prompt([
      {
        name: "value1",
        type: "number",
        message: "Enter 1st value: ",
      },
      {
        name: "value2",
        type: "number",
        message: "Enter 2nd value: ",
      },
      {
        name: "operator",
        type: "input", // use "input" type instead of "string"
        message: "Enter operator (+, -, *, /): ",
      },
    ]);

    let value1: number = answer.value1;
    let value2: number = answer.value2;
    let operator: string = answer.operator;

    switch (operator) {
      case "+":
        console.log(
          `Answer of ${value1} + ${value2} is ${chalk.green.bold(
            value1 + value2
          )}`
        );
        break;
      case "-":
        console.log(
          `Answer of ${value1} - ${value2} is ${chalk.green.bold(
            value1 - value2
          )}`
        );
        break;
      case "x":
        console.log(
          `Answer of ${value1} x ${value2} is ${chalk.green.bold(
            value1 * value2
          )}`
        );
        break;
      case "*":
        console.log(
          `Answer of ${value1} * ${value2} is ${chalk.green.bold(
            value1 * value2
          )}`
        );
        break;
      case "/":
        console.log(
          `Answer of ${value1} / ${value2} is ${chalk.green.bold(
            value1 / value2
          )}`
        );
        break;

      default:
        console.log(chalk.red("Invalid Operator!"));
        break;
    }

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

  console.log(chalk.red("Thanks for USing Standard Calculator"))
}

export default standardCalculation;
