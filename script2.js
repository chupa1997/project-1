//Tracks player Score and Robots Score
let playerScore = 0
let plsyer2Score = 0
//Creates variables for every element in the html
const playerScore_span = document.getElementById('player-score')
const plsyer2Score_span = document.getElementById('plsyer2-score')
const restart = document.getElementById('restart')
const result = document.getElementById('result')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const darkColor = document.getElementById('darkMode')
let dark = true

//Function for winner check , increments player score
const win = (playerChoice, plsyer2Choice) => {
  playerScore++
  playerScore_span.innerHTML = playerScore
  plsyer2Score_span.innerHTML = plsyer2Score
  result.innerHTML = `<h1 class="text-win">You win</h1> <p>Player 2 choose <strong>${plsyer2Choice}</strong></p>`
  modal.style.display = 'flex'
}
//function to check who loses, increments plsyer2 score
const lose = (playerChoice, plsyer2Choice) => {
  plsyer2Score++
  playerScore_span.innerHTML = playerScore
  plsyer2Score_span.innerHTML = plsyer2Score
  result.innerHTML = `<h1 class="text-lose">You lost</h1> <p>Player 2 choose <strong>${plsyer2Choice}</strong></p>`
  modal.style.display = 'flex'
}
//checks if there is a draw
const draw = (playerChoice, plsyer2Choice) => {
  playerScore_span.innerHTML = playerScore
  plsyer2Score_span.innerHTML = plsyer2Score
  result.innerHTML = `<h1>It's a draw</h1> <p>You both choose <strong>${plsyer2Choice}</strong></p>`
  modal.style.display = 'flex'
}

//Plsyer1 choice
const play = (playerChoice) => {
  const plsyer2Choice = getplsyer2Choice()
  switch (playerChoice + plsyer2Choice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(playerChoice, plsyer2Choice)
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(playerChoice, plsyer2Choice)
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(playerChoice, plsyer2Choice)
      break
  }
}
// player2 choice
const play2 = (player2Choice) => {
  const plsyerChoice = getplsyerChoice()
  switch (plsyer2Choice + playerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(plsyer2Choice, playerChoice)
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(plsyer2Choice, playerChoice)
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(plsyer2Choice, playerChoice)
      break
  }
}
// adding eventListener to rock, paper and scissor to know when clicked on it
rock.addEventListener('click', () => {
  play('rock')
})

paper.addEventListener('click', () => {
  play('paper')
})

scissors.addEventListener('click', () => {
  play('scissors')
})
// funtion to close modal by using (e) as a parameter
const clearModal = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none'
  } else if (closeBtn) {
    closeBtn.addEventListener('click', () => {
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
  playerScore_span.innerHTML = playerScore
  plsyer2Score_span.innerHTML = plsyer2Score
  modal.innerText = ' '
}
// Event listener for window click to call clearModal then hides it
darkColor.addEventListener('click', darkMode)
restart.addEventListener('click', restartGame)
window.addEventListener('click', clearModal)
modal()
