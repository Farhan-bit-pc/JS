'use strict';
/*
console.log(document.querySelector(".message").textContent)
//The core difference is that .value gets or sets the data inside interactive form fields, 
// while .textContent gets or sets the text inside regular HTML tags
document.querySelector(".message").textContent = "Correct Number"
document.querySelector(".number").textContent = 13
document.querySelector(".score").textContent = 10
console.log(document.querySelector(".guess").value)
document.querySelector(".guess").value = 23

document.querySelector(".check").addEventListener("click", function(){
    console.log(document.querySelector(".guess").value)
    document.querySelector(".message").textContent = "Correct Number"
})
*/

let secretNumber = Math.trunc(Math.random()*20) + 1
document.querySelector(".number").textContent = "?"
let score = 20
let hs = 0
let displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess)
    if(!guess){
        console.log("no number!")
    }
    else if(guess === secretNumber){
        if(score > hs){
            hs = score
        }
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = "30rem"
        displayMessage("Correct Number!")
        document.querySelector(".number").textContent = secretNumber        
        document.querySelector('.label-score').textContent = "💯 Score: " + score
        document.querySelector('.highscore').textContent = hs
    }
    else if(guess > secretNumber){
        if(score > 1){
            displayMessage("Too Big")
            score--
            document.querySelector('.label-score').textContent = "💯 Score: " + score 
        }
        else{
            displayMessage("Sorry, you lost!")
        }
    }
    else if(guess < secretNumber){
        if(score > 1){
            displayMessage("Too Small")
            score--
            document.querySelector('.label-score').textContent = "💯 Score: " + score 
        }   
        else{
            displayMessage("Sorry, you lost!")
        }
    }
})

document.querySelector(".again").addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20) + 1
    document.querySelector(".number").textContent = "?"
    score = 20
    document.querySelector('body').style.backgroundColor = '#222'
    displayMessage("Start guessing...")
    document.querySelector('.number').style.width = "15rem"
    document.querySelector('.label-score').textContent = "💯 Score: " + score
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ''
})
