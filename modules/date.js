import chalk from "chalk";
import inquirer from "inquirer";
async function dateDifference() {
    let run = true;
    while (run) {
        console.log(chalk.yellow("Enter Date LIke [YYYY/MM/DD]"));
        let answer = await inquirer.prompt([
            {
                name: "date1",
                type: "input",
                message: "Enter 1stfdddddddddddddd Date : ",
            },
            {
                name: "date2",
                type: "input",
                message: "Enter 2nd Date : ",
            },
        ]);
        let date1 = new Date(answer.date1);
        let date2 = new Date(answer.date2);
        let years = date2.getFullYear() - date1.getFullYear();
        let months = date2.getMonth() - date1.getMonth();
        let days = date2.getDate() - date1.getDate();
        console.log(chalk.green(`Difference between dates is  ${years} Years, ${months} Months, ${days} Days`));
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
    console.log(chalk.blue("Thanks for USing date Calculator"));
}
export default dateDifference;
