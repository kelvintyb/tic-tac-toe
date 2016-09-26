console.log('hello world, HTML is crowning.')
  //Note: Any reference made with the prefix micro refers to the current tic-tac-toe game being played, prefix meta refers to the overall game series

//constructor function for the game
function Game() {
  this.playerTurn = 1; // so if this.currPlayer % 2 = 1 , then it's theTick, otherwise it's Thor
  this.moveCounter = 0;
  this.gameboard = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
    nine: null
  };

}

function insertImg(currGame, currSquare) {
  if (currGame.playerTurn == 1) {
    currSquare.innerHTML = '<img src="assets/img/tickSquare.jpg" alt="" />'
  } else {
    currSquare.innerHTML = '<img src="assets/img/thorSquare.png" alt="" />'
  }
}


function microWinCheck(currGame) {
  var gameboard = currGame.gameboard;
  var row1 = gameboard['one'] + gameboard['two'] + gameboard['three'];
  var row2 = gameboard['four'] + gameboard['five'] + gameboard['six'];
  var row3 = gameboard['seven'] + gameboard['eight'] + gameboard['nine'];
  var col1 = gameboard['one'] + gameboard['four'] + gameboard['seven'];
  var col2 = gameboard['two'] + gameboard['five'] + gameboard['eight'];
  var col3 = gameboard['three'] + gameboard['six'] + gameboard['nine'];
  var diag1 = gameboard['one'] + gameboard['five'] + gameboard['nine'];
  var diag2 = gameboard['seven'] + gameboard['five'] + gameboard['three'];
  var winArray = [row1, row2, row3, col1, col2, col3, diag1, diag2];

  if (winArray.filter(num => num == 15).length > 0) {
    alert('Tick Won')
      // tickScore += 1;
  } else if (winArray.filter(num => num == 30).length > 0) {
    alert('Thor Won')
      // thorScore += 1;
  } else if (currGame.moveCounter == 9) {
    alert('There is no spoon.')
  }
}

function metaWinCheck() {}



function resetMeta() {
  return 'hi'
} //try out ajax load in here to be used when resetting meta

function resetMicro() {

}



function switchPlayer(currGame, currSquare) {
  console.log(currGame.playerTurn);
  if (currGame.playerTurn == 1) {
    $('.square').removeClass('tickhover');
    $('.square').addClass('thorhover');
    $(currSquare).removeClass('thorhover');
    currGame.playerTurn = 2;
  } else {
    $('.square').removeClass('thorhover');
    $('.square').addClass('tickhover');
    $(currSquare).removeClass('tickhover');
    currGame.playerTurn = 1;
  }
}


//note: don't use load within this ready method.
$(document).ready(function() {
  console.log('DOM is ready to rock & roll')
  var numOfGames = 0; // once this hits 10, should alert & reset - BONUS functionality
  var tickScore = 0;
  var thorScore = 0;

  //initFunc() => 1) draw skeleton, 2) draw gameboard html elements **this part needs modularising & its inverse for resetBoard();, 3)draw scoreboards, 4)draw instructions
  $('.square').addClass('tickhover'); //initialise hover styling on all squares

  // create new Game object to initialise new tracking of microGame
  var currGame = new Game();

  //test written below shows that I shouldn't preassign variables to assess currGame keys since the var won't mutate when I create new constructors later.
  // var moveCounter = currGame.moveCounter;
  // console.log(moveCounter);
  // moveCounter += 1;
  // console.log(moveCounter);
  // var currGame = new Game();
  // console.log(moveCounter);

  // set click eventHandler on all squares;
  $('.square').one('click', function() {
    console.log('Ah you clicked me!')

    //  increment moveCounter;
    currGame.moveCounter += 1;
    // console.log(currGame.moveCounter);

    //// INSERT IMAGE
    insertImg(currGame, this);

    ////UPDATE THE GAMEBOARD
    var key = this.classList[1] //getting the right key
      // console.log(key);
    var value = $(this).attr('value') * currGame.playerTurn;
    // console.log($(this).attr('value'))
    currGame.gameboard[key] = value;
    // console.log(currGame.gameboard[key]);

    //CHECK FOR WINNING CONDITION
    microWinCheck(currGame);
    console.log(tickScore);
    console.log(thorScore);
    //switch player and change hover effects
    switchPlayer(currGame, this);

  })


  //  onclick =>
  //   microWinCheck() => check for win or draw; if win {increment score of currPlayer, resetBoard()) if draw=> moveCounter == 9, resetBoard(), create new Game;else
  //  metaWinCheck() => if score of currPlayer == 3, alert the win and reload location then break;alternatively ajax load a starter.html + reset global variables to 0;
  //switchPlayer()

})
