let playerScore = 0;
let compScore = 0;

let roundNumber = 1;


function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + computerMove);

  let playerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + playerMove);


  function displayResult(argComputerMove, argPlayerMove) {

    if(
    (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
    ) {
      printMessage('Ty wygrywasz!');

      ++playerScore;

    } else if(
    (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
    (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')
    ) {
      printMessage('Ja wygrywam!');

      ++compScore;

    } else if(argComputerMove == argPlayerMove){
      printMessage('Remis!');
    }
    
    printMoves(argPlayerMove, argComputerMove);
    score(playerScore, compScore);
  }

  roundNumber++;
  round(roundNumber);
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
});
