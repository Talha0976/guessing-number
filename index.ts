import inquirer from "inquirer";
type anstype={
    userguess:number
}
const systemgeneratedNo= Math.floor(Math.random() *10);

const answers : anstype= await inquirer.prompt([{
type:"number",
name:"userguess",
message:"Write your guess",
}

])
const {userguess}=answers;
if(userguess===systemgeneratedNo){
    console.log(userguess,"userguesss",systemgeneratedNo,'SYS')
    console.log("yupp! Your answer is correct \n You win")
}else{
    console.log("Please Try again Good luck next time");
}