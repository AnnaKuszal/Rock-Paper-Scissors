let playerScore = 0;
let compScore = 0;


function playGame(playerInput){
  console.log('wywołano playGame');
  clearMessages();

  function getMoveName(argMoveId){
    console.log('wywołano getMoveName');
    console.log('argumenty: ' + argMoveId);

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
  console.log('Wylosowana liczba to: ' + randomNumber);
  let computerMove = getMoveName(randomNumber);
  console.log('Wylosowana opcja to: ' + computerMove);


  /*
  if(randomNumber == 1) {
      computerMove = 'kamień';
  } else if(randomNumber == 2) {
      computerMove = 'papier';
  } else if(randomNumber == 3) {
      computerMove = 'nożyce';
  } */

  printMessage('Mój ruch to: ' + computerMove);

  /*
  let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('Gracz wpisał: ' + playerInput);
  */
  let playerMove = getMoveName(playerInput);
  console.log('Wylosowana opcja to: ' + playerMove);


  /*
  if(playerInput == '1'){
    playerMove = 'kamień';
  } else if(playerInput == '2'){
      playerMove = 'papier';
  } else if(playerInput == '3'){
      playerMove = 'nożyce';
  } */

  printMessage('Twój ruch to: ' + playerMove);


  function displayResult(argComputerMove, argPlayerMove) {
    console.log('wywołano displayResult');
    console.log('moves:', argComputerMove, argPlayerMove);

    /*
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    */

    
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
    } else if(argPlayerMove == 'nieznany ruch'){
      printMessage('Wpisz poprawną liczbę...');
    }
    printMoves(argPlayerMove, argComputerMove);
    score(playerScore, compScore);
  }


  displayResult(computerMove, playerMove);

  
  /*
  if(computerMove == 'kamień' && playerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if(computerMove == 'papier' && playerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if(computerMove == 'nożyce' && playerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else if(computerMove == 'papier' && playerMove == 'kamień'){
      printMessage('Ja wygrywam!');
    } else if(computerMove == 'nożyce' && playerMove == 'papier'){
      printMessage('Ja wygrywam!');
    } else if(computerMove == 'kamień' && playerMove == 'nożyce'){
      printMessage('Ja wygrywam!');
    } else if(computerMove == playerMove){
      printMessage('Remis!');
    } else if(playerMove == 'nieznany ruch'){
      printMessage('Dokonałeś nieprawidłowego wyboru.');
    } */


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