// Casing the DOM first
let userScore = 0 ;
let computerScore = 0 ;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


// Here is the computer choices making random choice to computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3); // Random choice for computer
    return choices[randomNumber]; // the return from the choices for the computer
}
    // This function will convert the choices into readble words or better look
    function convertToWord(letter){
        if (letter === "rock") return "Rock";
        if (letter === "paper") return "Paper";
        if (letter === "scissors") return "Scissors";
        return userScore ;
    //     // return "Scissors";
    }
// Functions for change base on the result (win, lost, draw).
function win(userChoice, ComputerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore ;
    computerScore_span.innerHTML = computerScore ;
    const smallWordUser = "user".fontsize(3).sup();
    const smallWordComp = "comp".fontsize(3).sup();
    // ES5 way to do it
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(ComputerChoice) + "." + "You win!"
    // ES6 way to do it
    result_p.innerHTML = ` ${convertToWord(userChoice)}${smallWordUser} beats ${convertToWord(ComputerChoice)}${smallWordComp}. You win!`
}
function loses(userChoice, ComputerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore ;
    computerScore_span.innerHTML = computerScore ;
    const smallWordUser = "user".fontsize(3).sup();
    const smallWordComp = "comp".fontsize(3).sup();
    // ES6 way to do it
    result_p.innerHTML = ` ${convertToWord(userChoice)}${smallWordUser} loses to ${convertToWord(ComputerChoice)}${smallWordComp}. You lost.`
}
function draw(userChoice, ComputerChoice){
    const smallWordUser = "user".fontsize(3).sup();
    const smallWordComp = "comp".fontsize(3).sup();
    // ES6 way to do it
    result_p.innerHTML = ` ${convertToWord(userChoice)}${smallWordUser} equals ${convertToWord(ComputerChoice)}${smallWordComp}. It's draw.`
}
function game(userChoice){
    const ComputerChoice = getComputerChoice ();
    switch ( userChoice + ComputerChoice){ // Will the comparison between the user & computer choice
      // Case when the user wins
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            win(userChoice, ComputerChoice );
            break;
      // Cases when the computer lose
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            loses(userChoice, ComputerChoice );
            break;
      // Cases when is a draw
        case "paperpaper":
        case "rockrock":
        case "scissorsscissors":
            draw(userChoice, ComputerChoice);
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








