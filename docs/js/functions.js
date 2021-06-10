/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function printMessage(msg){
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}

function printMoves(player, comp) {
  document.getElementById('move_1').textContent = player;
  document.getElementById('move_2').textContent = comp;
}

function printWinner(winner) {
  document.getElementById('summary-msg').textContent = winner;
}

function score(player, comp, draw) {
  document.getElementById('player-score').textContent = player;
  document.getElementById('comp-score').textContent = comp;
  document.getElementById('draw-number').textContent = draw;
}

function roundCounter(roundNumber) {
  document.getElementById('round-number').textContent = roundNumber;
}

function wonGames(player, comp) {
  document.getElementById('player-games').textContent = player;
  document.getElementById('comp-games').textContent = comp;
}

function clearMoves() {
  document.getElementById('move_1').textContent = '';
  document.getElementById('move_2').textContent = '';
}

function resetScore() {
  document.getElementById('player-score').textContent = '0';
  document.getElementById('comp-score').textContent = '0';
  document.getElementById('draw-number').textContent = '0';

  playerScore = 0;
  compScore = 0;
  drawNumber = 0;
}

function resetRound() {
  document.getElementById('round-number').textContent = '0';
  roundNumber = 0;
}

function resetWonGames() {
  document.getElementById('player-games').textContent = '0';
  document.getElementById('comp-games').textContent = '0';
}

function resetWinner() {
  document.getElementById('summary-msg').textContent = 'And the winner is...';
}

function resetGameButtons() {
  const gameButtons = document.getElementById('buttons').querySelectorAll('.btn-play');
  for (let gameButton of gameButtons) {
    gameButton.style.visibility = 'visible';
  }
}

function failureResult(compFailure) {
  document.getElementById('failure-result').textContent = compFailure;
}

function clearSelectRounds() {
  document.getElementById('select-rounds').value = '';
}
