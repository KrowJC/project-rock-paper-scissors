//JavaScript Code here
alert('Hi traveler!')
alert('This is a rock, paper or scissors game. \n ----- instructions of the game ----- \n The game will be played in the console of the web browser \n Type on the prompt \n R for rock / P for paper / S for scissors')

function getComputerChoice(selection) {
    return selection[Math.floor(Math.random() * selection.length)];
}
let selection = ['r', 'p', 's'];

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function game() {
    for (let i = 1; i < 3; i++) {
        console.log(i)
        console.log('Let see who wins this round!')
        
        let playerSelection = window.prompt ('R = rock / P = paper / S = scissors');
        console.log('player: ',playerSelection);

        let computerSelection = getComputerChoice(selection);

        console.log('computer: ', computerSelection);

        console.log(playRound(playerSelection, computerSelection))
        console.log('Your score: ' + playerScore  + ' Wins ' + computerScore + ' loses and ' + tieScore + ' draws\n -------');
        
    }
    if (playerScore > computerScore) {
        return '***You Have WIN***';
    } else if (computerScore > playerScore) {
        return '***You Lost! Computer Crushed you***';
    } else if (playerScore == computerScore) {
        return '***This have been a TIED!***';
    }
    
    function playRound(playerSelection, computerSelection) {
    
        if (playerSelection.toLowerCase() == selection[0] && computerSelection == selection[2] 
        || playerSelection.toLowerCase() == selection[1] && computerSelection == selection[0] 
        || playerSelection == selection[2] && computerSelection == selection[1]) {
         playerScore++;
         return "Player win this round!"; 
        }
        
        if (computerSelection.toLowerCase() == selection[0] && playerSelection.toLowerCase() == selection[2] 
        || computerSelection == selection[1] && playerSelection.toLowerCase() == selection[0] 
        || computerSelection == selection[2] && playerSelection.toLowerCase() == selection[1]) {
         computerScore++;
         return '***You lost this round!***';
        }
        
        if (playerSelection.toLowerCase() == computerSelection) {
         tieScore++;
         return "***it' a Draw!***"
        }
     }
     
     function getComputerChoice(selection) {
         return selection[Math.floor(Math.random() * selection.length)];
     }
}

let score = playerScore + computerScore + tieScore;

function endGame() {
    
    playerScore = 0;
    computerScore = 0;
    tieScore = 0;

    score++;
    console.log("You played this game " + score +" times.\n -------\nGame over.");
    reset = window.prompt('play again? y or n?');
    choiceYesNo = ['y', 'n'];
    if (reset == choiceYesNo[0]) {
        console.clear();
        console.log('New Game');
        console.log(endGame(game()));
    }else if (reset  == choiceYesNo[1]){
    
    }

}

console.log(endGame(game()));
console.clear();
console.log('The End.');