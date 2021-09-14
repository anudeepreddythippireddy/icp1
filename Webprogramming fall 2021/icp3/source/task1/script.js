   //user choice
// document.getElementById('try').innerHTML = "Hello world";
const rock_turn = document.getElementById("r");
const paper_turn = document.getElementById("p");
const scissor_turn = document.getElementById("s");
let para =document.getElementById("result");
function main() {
rock_turn.addEventListener("click",function() { console.log(compare("rock", computerChoice)); });
paper_turn.addEventListener("click",function() { console.log(compare("paper", computerChoice)); });
scissor_turn.addEventListener("click",function() { console.log(compare("scissors", computerChoice)); });
}
let computerChoice = Math.random();                         //computer choice
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
const compare = function (choice1, choice2) {                // written a function for comparing values
    if (choice1 === choice2) {
        return para.innerHTML="Both matched";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return para.innerHTML="rock wins over scissors..User is Winner!!";
        } else {
            return para.innerHTML="paper wins over rock..Better luck next time...";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return para.innerHTML="paper wins over rock..User is Winner!!";
        } else {
            // scissors wins
            return para.innerHTML="scissors wins over paper..Better luck next time...";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return para.innerHTML="Rock wins over scissor..Better luck next time...";
        } else {
            // scissors wins
            return para.innerHTML="scissors wins over paper..User is Winner!!";
        }
    }
    
           
}
main();

