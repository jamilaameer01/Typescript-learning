import chalk from "chalk";
import inquirer from "inquirer";
import standardCalculation from "./modules/standard.js";
import percentageCalculator from "./modules/percentage.js";
import dateDifference from "./modules/date.js";
async function main() {
    console.log(chalk.green("Welcome to my calculator!"));
    let calculatorType = await inquirer.prompt([
        {
            name: "type",
            type: "list",
            choices: ["Standard", "Percentage", "Dates"],
            message: " Which calculator do you want to you? ",
        }
    ]);
    switch (calculatorType.type) {
        case "Standard":
            await standardCalculation();
            break;
        case "Percentage":
            await percentageCalculator();
            break;
        case "Dates":
            dateDifference();
            break;
        default:
            console.log('Invalid');
    }
    console.log(chalk.yellow("Thanks for USing Calculator"));
}
main();
