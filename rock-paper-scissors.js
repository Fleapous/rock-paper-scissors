

function computerPlay(){
   let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()){
        return "no winner"
    }
    if (playerSelection.toUpperCase() === "ROCK"){
        if (computerSelection.toUpperCase() === "PAPER"){
            return "you lost :("
        }
        else{
            return "you won :)"
        }
    }
    if (playerSelection.toUpperCase() === "PAPER"){
        if (computerSelection.toUpperCase() === "ROCK"){
            return "you won :)"
        }
        else{
            return "you lost :("
        }
    }
    if (playerSelection.toUpperCase() === "SCISSORS"){
        if (computerSelection.toUpperCase() === "PAPER"){
            return "you won :)"
        }
        else{
            return "you lost :("
        }
    }
}

function game(){
    let Pc = 0;
    let Player = 0
    for (let i = 0; i < 5; i++){
        let player = prompt(`playing round: ${i + 1}`)
        let pc = computerPlay();
        let res = playRound(player, pc);
        console.log(res);

        if (res === "you lost :("){
            Pc++;
        }
        else if (res === "you won :)"){
            Player++;
        }
    }
    console.log(`your score: ${Player}   Pc score ${Pc}`);
}

game();
