import inquirer from "inquirer";
const systemGenerateNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write your guess b/w 1 to 10: "
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGenerateNo, 'SYs');
if (userGuess === systemGenerateNo) {
    console.log("Yeaaa Your answer is correct \n You Win!");
}
else {
    console.log("Please try again Better luck next time!");
}
