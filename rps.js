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

function playRound(playerSelection, computerSelection) {
    if(playerSelection = "rock"){
        switch(computerSelection){
            case "rock":
                console.log("Draw, Rock draws Rock");
                return 0;
            case "paper":
                console.log("Lose, Rock loses to Paper");
                return -1;
            case "scissors":
                console.log("Win, Rock beats Scissors");
                return 1;
        }
    }
    else if(playerSelection = "paper"){
        switch(computerSelection){
            case "rock":
                console.log("Win, Paper beats Rock");
                return 1;
            case "paper":
                console.log("Draw, Paper draws Paper");
                return 0;
            case "scissors":
                console.log("Lose, Paper loses to Rock");
                return -1;
        }
    }
    else{
        switch(computerSelection){
            case "rock":
                console.log("Lose, Scissors loses to Rock");
                return -1;
            case "paper":
                console.log("Win, Scissors beats Paper");
                return 1;
            case "scissors":
                console.log("Draw, Scissors draws Scissors");
                return 0;
        }
    }
  }

  function game(rounds){
    let player_score = 0;
    let computer_score = 0;
    for(i = 0; i < rounds; i++){
        const playerSelection = prompt("Enter rock paper or scissors: ").toLowerCase();
        const computerSelection = computerPlayer();
        let result = playRound(playerSelection,computerSelection);
        if(result === 1){
            player_score++;
        }
        else if(result === -1){
            computer_score++;
        }
    }
    if(player_score > computer_score){
        console.log("Player is the winner with " + player_score + " points!");
    }
    else if(player_score < computer_score){
        console.log("Computer is the winner with " + computer_score + " points!");
    }
    else{
        console.log("The game ended with a draw!");
    }
  }
  

  game(5);