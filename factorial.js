const { Console } = require("console");
const readline=require ("readline");

const rl = ealine.createInterface({
 input: process.stdin,
 output: process.stdin
})

function mainMenu(){
    console.log("------------------------");
    console.log("Factorial Application");
    console.log("1. Say Hello");
    console.log("2.Factorial");
    console.log("3. Exit Application");
    console.log("------------------------");
    
    rl.question("Enter your choice(1-3): ", choice =>{

        if(choice === "1"){
            sayHello();
        } else if (choice === "2"){
            computerFactorial();
        } else if (choice === "3"){
            exitProgram();
        } else {
            console.log("Invalid Choice. Please Try Again");
        }
    })
}

