// global variables
const body = document.body
const game = body.querySelector('.game')
let playerCount = game.querySelector('.player-count')
let cpuCount = game.querySelector('.CPU-count')
let moves = game.querySelector('.move')
let movesLeft = moves.querySelector('.movesLeft')
const options = game.querySelector('.options')
const choices = ['rock', 'paper', 'scissors']
const result = game.querySelector('.result')
const btn = game.querySelector('.restart')
let palyerCounter = 0
let CPUCounter = 0
let movesLeftCounter = 0
// functions
const computer = () => {
  let random = Math.floor(Math.random() * choices.length) % choices.length
  return choices[random]
}
// generate random number for cpu
// eventlisteners
