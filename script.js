let rps = ['ROCK', 'PAPER', 'SCISSORS']

function getComputerChoice(){
    return randomN = rps[Math.floor(Math.random()*rps.length)]
}
//console.log(getComputerChoice())
function getUserChoice(){
    let userChoice = prompt("Please enter either rock, paper, or scissors: ").toUpperCase()
    if (userChoice === 'ROCK' || userChoice === 'SCISSORS' || userChoice === 'PAPER'){
        return userChoice
    }else{
        console.log("You entered an incorrect string")
        return
    }
}
//console.log(userChoice)



//console.log('Computer: ' + computerSelection + ' VS ' + 'Player: ' + playerSelection)

let result = null

function playRound(computerSelection,playerSelection){
    if (computerSelection === 'ROCK' && playerSelection === 'SCISSORS'){
        result = 'computerwin'
        return('You lose! ROCK beats SCISSORS')
    }else if (computerSelection === 'SCISSORS' && playerSelection === 'PAPER'){
        result = 'computerwin'
        return('You lose! SCISSORS beats PAPER')
    }else if (computerSelection === 'PAPER' && playerSelection === 'ROCK'){
        result = 'computerwin'
        return('You lose! Paper beats ROCK')
    }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        result = 'playerwin'
        return('You win! ROCK beats SCISSORS')
    }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
        result = 'playerwin'
        return('You win! SCISSORS beat PAPER')
    }else if (playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        result = 'playerwin'
        return('You win! PAPER beats ROCK')
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
        return("Player entered an incorrect string, computer wins this round")
    }
}
//console.log(playRound(computerSelection,playerSelection))

let comp = 1
let user = 1

function game(){
    //for(let i = 1; i <= 5; i++)
    let i = 1
    while(i<=5)
    {
        let computerSelection = getComputerChoice()
        let playerSelection = getUserChoice()
        let x = playRound(computerSelection,playerSelection)
    
        if (result === 'computerwin'){
            console.log(x)
            console.log('Computer wins! Score: ', comp)
            comp++
        }else if (result === 'playerwin'){
            console.log(x)
            console.log('Player wins! Score: ', user)
            user++
        }else{
            console.log(x)
            console.log("TIE!")
        }

        i++

    }

    if (comp > user){
        return ("computer wins!!!")
    }else if (user > comp){
        return ("player wins!!!")
    }else{
        return ("TIE!!!")
    }

}


let b = console.log(game())