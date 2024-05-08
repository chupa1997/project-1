// Tracks player Score and Player 2's Score
let playerScore = 0
let player2Score = 0

// Creates variables for every element in the HTML
const playerScore_span = document.getElementById('player-score')
const player2Score_span = document.getElementById('player2-score')
const restart = document.getElementById('restart')
const result = document.getElementById('result')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const darkColor = document.getElementById('darkMode')
let dark = true

// Function for winner check, increments player score
const win = (playerChoice, player2Choice) => {
  playerScore++
  playerScore_span.innerHTML = playerScore
  player2Score_span.innerHTML = player2Score
  result.innerHTML = `<h1 class="text-win">You win</h1> <p>Player 2 choose <strong>${player2Choice}</strong></p>`
  modal.style.display = 'flex'
}

// Function to check who loses, increments Player 2's score
const lose = (playerChoice, player2Choice) => {
  player2Score++
  playerScore_span.innerHTML = playerScore
  player2Score_span.innerHTML = player2Score
  result.innerHTML = `<h1 class="text-lose">You lost</h1> <p>Player 2 choose <strong>${player2Choice}</strong></p>`
  modal.style.display = 'flex'
}

// Checks if there is a draw
const draw = (playerChoice, player2Choice) => {
  playerScore_span.innerHTML = playerScore
  player2Score_span.innerHTML = player2Score
  result.innerHTML = `<h1>It's a draw</h1> <p>You both choose <strong>${player2Choice}</strong></p>`
  modal.style.display = 'flex'
}

// Player 1 choice
const play = (playerChoice) => {
  const player2Choice = getplayer2Choice()
  switch (playerChoice + player2Choice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(playerChoice, player2Choice)
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(playerChoice, player2Choice)
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(playerChoice, player2Choice)
      break
  }
}

// Player 2 choice
const play2 = (player2Choice) => {
  const playerChoice = getplayerChoice()
  switch (player2Choice + playerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(player2Choice, playerChoice)
      break
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(player2Choice, playerChoice)
      break
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(player2Choice, playerChoice)
      break
  }
}

// Adding event listeners to rock, paper, and scissors to know when clicked on
rock.addEventListener('click', () => {
  play('rock')
})

paper.addEventListener('click', () => {
  play('paper')
})

scissors.addEventListener('click', () => {
  play('scissors')
})

// Function to close modal by using (e) as a parameter
const clearModal = (e) => {
  if (e.target == modal) {
    modal.style.display = 'none'
  } else if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none'
    })
  }
}

// Function for Dark Mode
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

// Restart game and reset score to 0
const restartGame = () => {
  playerScore = 0
  player2Score = 0
  playerScore_span.innerHTML = playerScore
  player2Score_span.innerHTML = player2Score
  modal.innerHTML = ''
}

// Event listener for window click to call clearModal then hides it
darkColor.addEventListener('click', darkMode)
restart.addEventListener('click', restartGame)
window.addEventListener('click', clearModal)
