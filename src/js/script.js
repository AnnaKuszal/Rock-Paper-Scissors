/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

/* Global variables */

let playerScore = 0;
let compScore = 0;

let drawNumber = 0;
let roundNumber = 0;

let playerGames = 0;
let compGames = 0;

let compFailure = 0;

let selectRounds = document.getElementById('select-rounds');

/* Main game code */

function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'rock';
    } else if(argMoveId == 2){
      return 'paper';
    } else if(argMoveId == 3){
      return 'scissors';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  function displayResult(argComputerMove, argPlayerMove) {

    if(
      (argComputerMove == 'rock' && argPlayerMove == 'paper') ||
      (argComputerMove == 'paper' && argPlayerMove == 'scissors') ||
      (argComputerMove == 'scissors' && argPlayerMove == 'rock')
    ) {
      printMessage('You win!');
      ++playerScore;

      if(playerScore == '3'){
        playerGames++;
        wonGames(playerGames, compGames);
      }

    } else if(
      (argComputerMove == 'paper' && argPlayerMove == 'rock') ||
      (argComputerMove == 'scissors' && argPlayerMove == 'paper') ||
      (argComputerMove == 'rock' && argPlayerMove == 'scissors')
    ) {
      printMessage('Computer wins!');
      ++compScore;

      if(compScore == '3'){
        compGames++;
        wonGames(playerGames, compGames);
      }

    } else if(argComputerMove == argPlayerMove){
      printMessage('Draw!');

      drawNumber++;
    }

    printMoves(argPlayerMove, argComputerMove);
    score(playerScore, compScore, drawNumber);
  }

  roundNumber++;

  if(roundNumber === 5) {
    const buttons = document.getElementById('buttons').querySelectorAll('.btn-play');

    for(let button of buttons) {
      button.style.visibility = 'hidden';
    }

    if(playerGames == 1) {
      printWinner('You won this 5 rounds game!');
    }

    else if(compGames == 1) {
      printWinner('Computer won this 5 rounds game!');
    }

    else {
      printWinner('No winner in this 5 rounds game!');
    }
  }

  roundCounter(roundNumber);
  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

document.getElementById('new-game').addEventListener('click', function(){
  clearMessages();
  clearMoves();
  resetScore();
  resetRound();
  resetWonGames();
  resetWinner();
  resetGameButtons();
  clearSelectRounds();
});


/*  Extra-game section - 'failure test' */

let selectRoundsValue = '';

selectRounds.addEventListener('input', function(){
  selectRoundsValue = document.getElementById('select-rounds').value;

  if(selectRoundsValue < 10 || selectRoundsValue > 100) {
    let div = document.createElement('div');
    div.classList.add('err-notice');
    div.style.color = 'red';
    div.innerHTML = 'Please choose a number from 10-100';

    let notice = document.querySelector('.err-notice');

    if(notice == '' || notice == null) {
      selectRounds.insertAdjacentElement('afterend', div);
    }
  }

  else if (selectRoundsValue >= 10 || selectRoundsValue <= 100) {
    let div = document.querySelector('.err-notice');

    div.remove();
  }

});

document.getElementById('test-games').addEventListener('click', function(){
  resetScore();
  resetRound();
  resetWonGames();

  const buttons = document.querySelectorAll('#buttons .btn-play');

  for(let button of buttons) {
    button.style.visibility = 'hidden';
  }

  for (let i=0; i<selectRoundsValue; i++) {
    let random = Math.floor(Math.random() * 3 + 1);
    playTestGame(random);
  }

  failureResult(compFailure);
});


function playTestGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);

  let playerMove = getMoveName(playerInput);

  function displayResult(argComputerMove, argPlayerMove) {

    if(
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      ++playerScore;
    }

    else if(
      (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
      (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
    ) {
      ++compScore;
    }

    else if(argComputerMove == argPlayerMove){
      drawNumber++;
    }

    score(playerScore, compScore, drawNumber);
  }

  roundNumber++;
  roundCounter(roundNumber);
  displayResult(computerMove, playerMove);

  compFailure = ((playerScore*100)/roundNumber).toFixed(2) + '%';
}


/*  Extra-game section - 'joker game' */

document.getElementById('jokerBtn').addEventListener('click', function(){

  clearMessages();
  clearMoves();
  resetScore();
  resetRound();
  resetWonGames();
  resetWinner();
  resetGameButtons();
  clearSelectRounds();
  console.log('roundNumber', roundNumber);


  document.getElementById('jokerBtn').classList.toggle('active');
  document.getElementById('modes').classList.toggle('switchMode');

  let activeMode = document.getElementById('modes').getAttribute('class');
  console.log('activeMode', activeMode);

  if(activeMode == 'switchMode') {

    document.getElementById('play-rock').addEventListener('click', function(){
      playJokerGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function(){
      playJokerGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
      playJokerGame(3);
    });

  }
});

// function playJokerGame(playerInput){}

