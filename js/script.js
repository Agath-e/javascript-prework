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
  
  if( argcomputerMove == 'kamień' && argplayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    return 'Ty wygrywasz!';
  }else if( argcomputerMove == 'kamień' && argplayerMove == 'nożyce'){
    printMessage('Ty przegrywasz!');
    return 'Ty przegrywasz!';
  }else if( argcomputerMove == 'kamień' && argplayerMove == 'kamień'){
    printMessage('Remis!');
    return 'Remis!';
  }else if( argcomputerMove == 'papier' && argplayerMove == 'papier'){
    printMessage('Remis!');
    return 'Remis!';
  }else if( argcomputerMove == 'papier' && argplayerMove == 'nożyce'){
    return 'Ty wygrywasz!';
  }else if( argcomputerMove == 'papier' && argplayerMove == 'kamień'){
    printMessage('Ty przegrywasz!');
    return 'Ty przegrywasz!';
  }else if( argcomputerMove == 'nożyce' && argplayerMove == 'papier'){
    printMessage('Ty przegrywasz!');
    return 'Ty przegrywasz!';
  }else if( argcomputerMove == 'nożyce' && argplayerMove == 'nożyce'){
    printMessage('Remis!');
    return 'Remis!';
  }else if( argcomputerMove == 'nożyce' && argplayerMove == 'kamień'){
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

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2 ) {
  computerMove = 'papier';
}
else (randomNumber == 3);{
  computerMove = "nożyce";
}*/
printMessage('Mój ruch to: ' + computerMove);
//Ruch gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
  playerMove = 'papier';
}
else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/
printMessage('Twój ruch to: ' + playerMove);
//Wyniki gry
displayResult(computerMove, playerMove); "Ty wygrywasz!" | "Ty przegrywasz!" | "Remis!" | "Błąd! wpisana zła liczba";