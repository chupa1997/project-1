// adding game function and adding player score, cpu score and moves to keep track
const game = () => {
  let playerScore = 0
  let CPUScore = 0
  let moves = 0
  // Function to choose button playGame
  const playGame = () => {
    const rockBtn = document.querySelector('.rock')
    const paperBtn = document.querySelector('.paper')
    const scissorBtn = document.querySelector('.scissor')
    const playerOptions = [rockBtn, paperBtn, scissorBtn]
    const computerOptions = ['rock', 'paper', 'scissor']
    // Function to start playing game
    playerOptions.forEach((option) => {
      option.addEventListener('click', function () {
        const movesLeft = document.querySelector('.movesleft')
        moves++
        movesLeft.innerText = `Moves Left: ${10 - moves}`

        const numChoice = Math.floor(Math.random() * 3)
        const computerChoice = computerOptions[numChoice]
        // Function to check winner
        winner(this.innerText, computerChoice)
        if (moves == 10) {
          gameOver(playerOptions, movesLeft)
        }
      })
    })
  }
  const updateScore = (winner) => {
    const playerScoreBoard = document.querySelector('.player-count')
    const CPUScoreBoard = document.querySelector('.CPU-count')

    if (winner === 'player') {
      playerScore++
      playerScoreBoard.textContent = playerScore
    } else if (winner === 'CPU') {
      CPUScore++
      CPUScoreBoard.textContent = CPUScore
    }
  }

  const winner = (player, CPU) => {
    const result = document.querySelector('.result')
    player = player.toLowerCase()
    CPU = CPU.toLowerCase()
    if (player === CPU) {
      result.textContent = 'Draw'
    } else if (
      (player === 'rock' && CPU === 'scissor')(
        player === 'paper' && CPU === 'rock'
      )(player === 'scissor' && CPU === 'paper')
    ) {
      result.textContent = 'Player Win'
      updateScore('player')
    } else {
      result.textContent = 'CPU Win'
      updateScore('CPU')
    }
  }
  // function to run when game is over
  const gameOver = (playerOptions, movesLeft) => {
    const chooseMove = document.querySelector('.move')
    const result = document.querySelector('.result')
    const restartBtn = document.querySelector('.restart')

    playerOptions.forEach((option) => {
      option.style.display = 'none'
    })

    chooseMove.innerText = 'Game Over!'
    movesLeft.style.display = 'none'

    if (playerScore > CPUScore) {
      result.innerText = 'You Won!'
      result.style.fontSize = '2rem'
      result.style.color = 'green'
    } else if (playerScore < CPUScore) {
      result.innerText = 'You Lost!'
      result.style.fontSize = '2rem'
      result.style.color = 'red'
    } else {
      result.innerText = 'Draw'
      result.style.fontSize = '2rem'
      result.style.color = 'grey'
    }

    restartBtn.innerText = 'Restart'
    restartBtn.style.display = 'flex'
    restartBtn.addEventListener('click', () => {
      window.location.reload()
    })
  }
  // call playGame inside game function
  playGame()
}
// calling game function
game()
