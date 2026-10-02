'use strict';
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.querySelector('#score--0')
const score1 = document.getElementById('score--1')  //both these lines work the same
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')
const dicel = document.querySelector(".dice")
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')

let currentScore, active, playing, scores

const init = function(){
    current0.textContent = 0
    current1.textContent = 0
    score1.textContent = 0
    score0.textContent = 0          
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
    scores = [0,0]
    currentScore = 0
    active = 0
    playing = true
    score0.textContent = 0
    score1.textContent = 0 
    dicel.classList.add('hidden')
}
init()

score0.textContent = 0 
score1.textContent = 0
dicel.classList.add('hidden')

const switchPlayer = function(){
    document.getElementById(`current--${active}`).textContent = 0
    active = active === 0 ? 1:0
    currentScore = 0
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6)+1

        dicel.classList.remove('hidden')
        dicel.src = `dice-${dice}.png`      //this selects a dice image from the folder

        if(dice !== 1){
            currentScore += dice
            document.getElementById(`current--${active}`).textContent = currentScore
        }
        else{
            switchPlayer()
        }
    }
})
//toggle adds the class if not there and removes the class if it is

btnHold.addEventListener('click', function(){
    if(playing){
        scores[active] += currentScore   
        document.getElementById(`score--${active}`).textContent = scores[active]

        if(scores[active] >= 100){
            playing = false
            dicel.classList.add('hidden')
            document.querySelector(`.player--${active}`).classList.add('player--winner')
            document.querySelector(`.player--${active}`).classList.remove('player--active')   //we cant have the player as both active and winner
        }
        else{
            switchPlayer()
        }
    }
})

btnNew.addEventListener('click', init)
