let rps = ['ROCK', 'PAPER', 'SCISSORS'];

function getComputerChoice(){
    return randomN = rps[Math.floor(Math.random()*rps.length)]
}

let computerChoice
let playerChoice

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        computerChoice = getComputerChoice();
        playerChoice = button.id;
        console.log("player: " + playerChoice);
        console.log("computer: " + computerChoice);
        game(computerChoice,playerChoice);
        })
    });


let result = null;
let pScore = 0;
let cScore = 0;

const human = document.querySelector("#player-score");
human.textContent = `Player Score: ${pScore}`;
    
const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${cScore}`;

function playRound(computerSelection,playerSelection){
    if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS'){
        result = 'computerwin';
        cScore++;
        return('You lose! ROCK beats SCISSORS');
    }else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER'){
        result = 'computerwin';
        cScore++;
        return('You lose! SCISSORS beats PAPER');
    }else if (computerSelection === 'PAPER' && playerSelection === 'ROCK'){
        result = 'computerwin';
        cScore++;
        return('You lose! Paper beats ROCK');
    }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        result = 'playerwin';
        pScore++;
        return('You win! ROCK beats SCISSORS');
    }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        result = 'playerwin';
        pScore++;
        return('You win! SCISSORS beat PAPER');
    }else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        result = 'playerwin';
        pScore++;
        return('You win! PAPER beats ROCK');
    }else if (playerSelection === 'ROCK' && computerSelection === ' ROCK'){
        result = 'tie'
        return("ROCK on ROCK. It's a tie")
    }else if (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS'){
        result = 'tie'
        return("SCISSORS on SCISSORS. It's a tie")
    }else if (playerSelection === 'PAPER' && computerSelection === 'PAPER'){
        result = 'tie'
        return("PAPER on PAPER. It's a tie")
    }else{
        result = 'computerwin'
        return("Player entered an incorrect string.")
    }
}

function game(computerChoice,playerChoice){
    //alert("computer's play: " + computerChoice + "\n" + playRound(computerChoice,playerChoice));
    compPlay.textContent = `Computer's play: ${computerChoice}`;
    playsthisround.textContent = playRound(computerChoice,playerChoice);
    human.textContent = `Player Score: ${pScore}`;
    computer.textContent = `Computer Score: ${cScore}`;
    if (cScore == 5) {
        results.textContent = 'You lost the race to 5 game.'
        pScore = 0;
        cScore = 0;
        human.textContent = `Player Score: ${pScore}`;
        computer.textContent = `Computer Score: ${cScore}`;
        document.getElementById("ROCK").disabled = true;
        document.getElementById("PAPER").disabled = true;
        document.getElementById("SCISSORS").disabled = true;
        document.getElementById("playagain").href = "index.html";
    }else if (pScore == 5){
        results.textContent = 'Congrats! You win the race to 5 game.'
        pScore = 0;
        cScore = 0;
        human.textContent = `Player Score: ${pScore}`;
        computer.textContent = `Computer Score: ${cScore}`;
        document.getElementById("ROCK").disabled = true;
        document.getElementById("PAPER").disabled = true;
        document.getElementById("SCISSORS").disabled = true;
        document.getElementById("playagain").href = "index.html";
    }
}



