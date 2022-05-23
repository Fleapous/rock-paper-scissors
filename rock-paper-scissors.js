/*function game(){
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
}*/

let round = 0;

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

function playing(player){
    let ans = playRound(player, computerPlay());

    let content = document.createElement('div');
    /*content.classList.add('Results');*/

    if (ans === "no winner"){
        content.textContent = `round no: ${round++} there is no winner`;
    }
    else if (ans === "you won :)"){
        content.textContent = `round no: ${round++} you won!!!!`;
    }
    else{
        content.textContent = `round no: ${round++} you lost omg wow`;
    }
    let container = document.querySelector('.res');
    container.appendChild(content);
}

let rock = document.querySelector('#rock');
rock.addEventListener('click', function (){
    playing('rock');
});

let paper = document.querySelector('#paper');
paper.addEventListener('click', function (){
   playing('paper');
});

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function (){
   playing('scissors');
});
