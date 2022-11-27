const choice = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerSelection;
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
let computerSelection = choice[Math.floor(Math.random() * choice.length)];
  return computerSelection;
} 


function playRound(playerSelection, computerSelection){

if (computerSelection == playerSelection) {
    console.log("Tied!")
} else if (computerSelection == "rock" && playerSelection == "scissors" || 
computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "paper" && playerSelection == "rock" ) {
    console.log("Computer won this round!"); 
    computerScore = ++computerScore;

} else if (playerSelection == "rock" && computerSelection == "scissors" || 
playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" ) {
    console.log("Player won this round!")
    playerScore = ++playerScore;
    
    } else {
        console.log("Um, somethings wrong...")
    }

    }

    function game(){
        playerScore = 0
        computerScore = 0
        for(let i = 0; i < 5 ; i++){
            playRound("rock", computerSelection);
            computerSelection = getComputerChoice();
        }
        console.log("Player: " + playerScore, "Computer: " +computerScore)
    }
    /*for (let i = 0; i < 5; i++) {
        // your code here!
     }*/

     