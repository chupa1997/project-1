//Tracks player Score and Robots Score
let playerScore = 0
let cpuScore = 0
//Creates variables for every element in the html
const playerScore_span = document.getElementById('player-score')
const cpuScore_span = document.getElementById('cpu-score')
const restart = document.getElementById('restart')
const result = document.getElementById('result')
const modal = document.querySelector('.modal')
closeBtn = document.querySelector('.close')
const rock_div = document.getElementById('rock')
const paper_div = document.getElementById('paper')
const scissors_div = document.getElementById('scissors')
const darkColor = document.getElementById('darkMode')
let dark = true

//Function for Cpu's Choice
const getCpuChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber]
}

//Function for winner check , increments player score
const win = (playerChoice, cpuChoice) => {
  playerScore++
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
  result.innerHTML = `<span class="close"></span> <h1 class="text-win">You win</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`
  modal.style.display = 'flex'
}
//function to check who loses, increments CPU score
const lose = (playerChoice, cpuChoice) => {
  cpuScore++
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
  result.innerHTML = `<span class="close"></span> <h1 class="text-lose">You lost</h1> <p>Computer choose <strong>${cpuChoice}</strong></p>`
  modal.style.display = 'flex'
}
//checks if there is a draw
const draw = (playerChoice, cpuChoice) => {
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
  result.innerHTML = `<span class="close"></span> <h1>It's a draw</h1> <p>You both choose <strong>${cpuChoice}</strong></p>`
  modal.style.display = 'flex'
}

//starts with player choice and randomly chooses who wins the round
const play = (playerChoice) => {
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
// adding eventListener to rock, paper and scissor to know when clicked on it
rock_div.addEventListener('click', () => {
  play('rock')
})

paper_div.addEventListener('click', () => {
  play('paper')
})

scissors_div.addEventListener('click', () => {
  play('scissors')
})
// funtion to close modal by using (e) as a parameter
const clearModal = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none'
  } else if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none'
    })
  }
}
// function for DarkMode
const darkMode = () => {
  if (dark) {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'antiquewhite'
    dark = false
  } else {
    document.body.style.backgroundColor = 'antiquewhite'
    document.body.style.color = 'darkred'

    dark = true
  }
}

//restart game and reset score to 0
const restartGame = () => {
  playerScore = 0
  cpuScore = 0
  playerScore_span.innerHTML = playerScore
  cpuScore_span.innerHTML = cpuScore
  modal.innerText = ' '
}
// Event listener for window click to call clearModal then hides it
darkColor.addEventListener('click', darkMode)
restart.addEventListener('click', restartGame)
window.addEventListener('click', clearModal)
modal()
