//Tracks player Score and Robots Score
let playerScore = 0
let cpuScore = 0
let closeBtn
//Creates variables for every element in the html
const playerScore_span = document.getElementById('player-score')
const cpuScore_span = document.getElementById('cpu-score')
// const scoreBoard_div = document.getElementById(".score-board")
const restart = document.getElementById('restart')
const result = document.getElementById('result')
const modal = document.querySelector('.modal')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')

//Function for Cpu's Choice
function getCpuChoice() {
  //Array full of 3 choices
  const choices = ['rock', 'paper', 'scissors']
  //sets random number and round it down to nearest number
  const randomNumber = Math.floor(Math.random() * 3)
  //returns random nunber for Cpu choice
  return choices[randomNumber]
}

//Function that checks whether player or cpu wins
function win(playerChoice, cpuChoice) {
  //increments player score
  playerScore++
  //changes playerscore element text to playerScore variable and cpu element to cpuScore
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
  //shows the winner in the result span
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">You win!</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`
  modal.style.display = 'flex'
}
//function to check who loses
function lose(playerChoice, cpuChoice) {
  cpuScore++
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
  result.innerHTML = `<span class="close"></span> <h1 class="text-lose">You lost</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`
  modal.style.display = 'flex'
}
//checks if there is a draw
function draw(playerChoice, cpuChoice) {
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
  result.innerHTML = `<span class="close"></span> <h1>It's a draw</h1> <p>You both choose <strong>${cpuChoice}</strong></p>`
  modal.style.display = 'flex'
}

//starts with player choice and randomly chooses who wins the round
function play(playerChoice) {
  const cpuChoice = getCpuChoice()
  switch (playerChoice + cpuChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(playerChoice, cpuChoice)
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(playerChoice, cpuChoice)
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(playerChoice, cpuChoice)
      break
  }
}

function main() {
  rock_div.addEventListener('click', function () {
    play('rock')
  })

  paper_div.addEventListener('click', function () {
    play('paper')
  })

  scissors_div.addEventListener('click', function () {
    play('scissors')
  })
}

function clearModal(e) {
  closeBtn = document.querySelector('.close')

  if (e.target == modal) {
    modal.style.display = 'none'
  } else if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none'
    })
  }
}

//restarts game and sets everything to 0 and sets the elememnts to player and cpu score
function restartGame() {
  playerScore = 0
  cpuScore = 0
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
}

restart.addEventListener('click', restartGame)
window.addEventListener('click', clearModal)
main()
