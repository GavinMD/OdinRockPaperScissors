const scoreMax = 5;
let winnerString;
let player_score = 0;
let computer_score = 0;
let playerSelection;
let computerSelection;

//randomly choose one of the 3 options for the computer player
function computerPlayer() {
    let choice = Math.floor((Math.random() * 100) % 3 ) + 1;

    switch(choice){
        case 1:
            return "rock";
        break;
        case 2:
            return "paper";
        break;
        case 3:
            return "scissors";
    }
}

//play a round of rps with computer
function playRound() {
    console.log(this.dataset.choice);
    playerSelection = this.dataset.choice;
    playerSelection.toLowerCase();
    computerSelection = computerPlayer();

    if(playerSelection = "rock"){
        switch(computerSelection){
            case "rock":
                winnerString = ("Draw, Rock draws Rock");
                break;
            case "paper":
                winnerString = ("Lose, Rock loses to Paper");
                computer_score++;
                break;
            case "scissors":
                winnerString = ("Win, Rock beats Scissors");
                player_score++;
        }
    }
    else if(playerSelection = "paper"){
        switch(computerSelection){
            case "rock":
                winnerString = ("Win, Paper beats Rock");
                player_score++;
                break;
            case "paper":
                winnerString = ("Draw, Paper draws Paper");
                break;
            case "scissors":
                winnerString = ("Lose, Paper loses to Rock");
                computer_score++;
        }
    }
    else{
        switch(computerSelection){
            case "rock":
                winnerString = ("Lose, Scissors loses to Rock");
                computer_score++;
                break;
            case "paper":
                winnerString = ("Win, Scissors beats Paper");
                player_score++;
                break;
            case "scissors":
                winnerString = ("Draw, Scissors draws Scissors");
        }
    }
  
    scoreDiv.textContent = "Player Score: " + player_score +
                         " Computer Score: " + computer_score;
    resultDiv.textContent = winnerString;

    //if score limit is reached display the winner screen
    if(player_score === scoreMax || computer_score === scoreMax){
        console.log("game called");
        game();
      }
}
  
  function game(){

    //game results calculation and display
    if(player_score > computer_score){
        winnerString = "Player is the winner with " + player_score + " points!";
    }
    else if(player_score < computer_score){
        winnerString = "Computer is the winner with " + computer_score + " points!";
    }
    else{
        winnerString = "The game ended with a draw!";
    }

    resultDiv.textContent = winnerString;
    player_score = 0;
    computer_score = 0;
  }
  
  //add event listener for each button on the page
  let rps = document.querySelectorAll('.btn');
  rps.forEach(choice => choice.addEventListener('click', playRound));

  // display scores
  let scoreDiv = document.querySelector(`div[id='score']`);
  scoreDiv.textContent = "Player Score: " + player_score +
                         " Computer Score: " + computer_score;

  //show winner string
  let resultDiv = document.querySelector(`div[id='result']`);
  resultDiv.textContent = winnerString;

  