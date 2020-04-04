function playGame (playerInput) {
  
  function getMoveName(argMoveId){
   if(argMoveId == 1){
     return 'kamień';
   } else if(argMoveId == 2){
     return 'papier';
    } else if (argMoveId == 3){
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
     return 'nieznany ruch';
    }
  }
  function displayResult(argcomputerMove, argplayerMove){
    printMessage ('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  
    if (argcomputerMove == 'kamień' && argplayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
      return 'Ty wygrywasz!';
    }else if (argcomputerMove == 'kamień' && argplayerMove == 'nożyce'){
      printMessage('Ty przegrywasz!');
      return 'Ty przegrywasz!';
    }else if (argcomputerMove == 'kamień' && argplayerMove == 'kamień'){
      printMessage('Remis!');
      return 'Remis!';
    }else if (argcomputerMove == 'papier' && argplayerMove == 'papier'){
      printMessage('Remis!');
      return 'Remis!';
    }else if (argcomputerMove == 'papier' && argplayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
      return 'Ty wygrywasz!';
    }else if (argcomputerMove == 'papier' && argplayerMove == 'kamień'){
      printMessage('Ty przegrywasz!');
      return 'Ty przegrywasz!';
    }else if (argcomputerMove == 'nożyce' && argplayerMove == 'papier'){
      printMessage('Ty przegrywasz!');
       return 'Ty przegrywasz!';
    }else if (argcomputerMove == 'nożyce' && argplayerMove == 'nożyce'){
      printMessage('Remis!');
      return 'Remis!';
    }else if (argcomputerMove == 'nożyce' && argplayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
      return 'Ty wygrywasz!';
    }else {
      printMessage('Błąd! wpisana zła liczba');
      return 'Błąd! wpisana zła liczba';
    }
  }
  //Ruch Komputera
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);
  //Ruch gracza
  /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);
  //Wyniki gry
  displayResult(computerMove, playerMove); 
  
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });