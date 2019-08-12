// Casing the DOM first
let userScore = 0 ;
let computerScore = 0 ;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


// Here is the computer choices making random choice to computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); // Random choice for computer
    return choices[randomNumber]; // the return from the choices for the computer
}

function win(userChoice, ComputerChoice ){
    userScore++;
    userScore_span.innerHTML = userScore ;
    computerScore_span.innerHTML = computerScore ;
    result_p.innerHTML = userChoice + " beats " + ComputerChoice + ". You win!! ";
}


function loses(){
    console.log( "you lost");
}
function draw(){
    console.log( "is a draw ");
}


function game(userChoice){
    const ComputerChoice = getComputerChoice ();
    switch ( userChoice + ComputerChoice){ // Will the comparison between the user & computer choice
        // Case when the user wins
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            win();
            break;
      // Cases when the computer wins
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            loses();
            break;
      // Cases when is a draw
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
           draw();
           break;
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








