const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

const handleButtonClick = (event) => {
  const player = event.target.className
  const computer = getComputerMove()
  $('figure.player img').src = `/images/${player}.svg`
  $('figure.computer img').src = `/images/${computer}.svg`
    // fist we define the logic of the game. the "&&" mean "and" and the "||"" mean "or".//
  if (player === 'paper' && computer === 'rock' || player === 'rock' && computer === 'scissors' ||
    player === 'scissors' && computer === 'paper') {
    const scoreText = $('.scores .player').textContent // I dont really understand the $//
    const scoreNumber = parseInt(scoreText)
    const newScoreNumber = scoreNumber + 1
    $('.scores .player').textContent = newScoreNumber

    // if the score number for the player equals two or greater
    if (newScoreNumber >= 2) {
      // then display game over
      gameOver(true)
    }
  }

  if (computer === 'paper' && player === 'rock' || computer === 'rock' && player === 'scissors' ||
    computer === 'scissors' && player === 'paper') {
    const scoreText = $('.scores .computer').textContent
    const scoreNumber = parseInt(scoreText)
    const newScoreNumber = scoreNumber + 1
    $('.scores .computer').textContent = newScoreNumber
    // console.log('You lost!')
    if (newScoreNumber >= 2) {
      gameOver(true)
    }
  }

  // HINT: Check for win, lose or draw, then call `gameOver()` eventually.
}

const getComputerMove = () => {
  const moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random() * moves.length)]
}

// HINT: Try calling `gameOver(true)` in the console.
const gameOver = (playerDidWin) => {
  if (playerDidWin) {
    $('.dialog h3').textContent = 'You won!'
  } else {
    $('.dialog h3').textContent = 'You lost!'
  }
  $('body').className = 'modal'

  $('.scores .computer').textContent = 0
  $('.scores .player').textContent = 0
}

const resetGame = () => {
// TODO: Probably need to do more to reset the game here...
  $('figure.player img').src = '/images/unknown.svg'
  $('figure.computer img').src = '/images/unknown.svg'
  $('body').className = ''
}

const main = () => {
  const buttons = $$('.player-input button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick)
  }
  $('.dialog button').addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)
