// Casing the DOM first
const userScore = 0 ;
const computerScore = 0 ;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


// Here is the user choices and the computer choices making  random choice to computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); // Random choice for computer
    return choices[randomNumber]; // the return from the choices for the computer
}


function game(userChoice){
    const ComputerChoice = getComputerChoice ();
    switch ( userChoice + ComputerChoice){ // Will the comparison between the user & computer choice
        // Case when the user wins
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            console.log(" User wins");
            break;
      // Cases when the computer wins
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log(" User loses");
            break;
      // Cases when is a draw
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            console.log(" Is a Draw");
    }
}


// The events for the when you clicked the bottoms one the options.
function main(){
    rock_div.addEventListener('click', function(){
        game("rock")
    })
    paper_div.addEventListener('click', function(){
        game("paper")
    })
    scissors_div.addEventListener('click', function(){
        game("scissors")
    })
}
main();








