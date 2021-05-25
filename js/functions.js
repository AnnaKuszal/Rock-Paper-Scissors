function printMessage(msg){
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages(){
  document.getElementById('messages').innerHTML = '';
}

function printMoves(player, comp) {
  document.getElementById("move_1").textContent = player;
  document.getElementById("move_2").textContent = comp;
}

function score(player, comp) {
  document.getElementById("player-score").textContent = player;
  document.getElementById("comp-score").textContent = comp;
}

function round(roundNumber) {
  document.getElementById("round-number").textContent = roundNumber;
}

function clearMoves() {
  document.getElementById("move_1").textContent = '';
  document.getElementById("move_2").textContent = '';
}

function resetScore() {
  document.getElementById("player-score").textContent = '0';
  document.getElementById("comp-score").textContent = '0';
}

function resetRound() {
  document.getElementById("round-number").textContent = '1';
}