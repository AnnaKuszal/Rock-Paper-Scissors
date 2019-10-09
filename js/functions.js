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