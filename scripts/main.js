console.log('hello world, HTML is crowning.')
  //README: Any reference made with the prefix micro refers to the current tic-tac-toe game being played, prefix meta refers to the overall game series

//init function for html

// create new global variables to initialise new tracking of metaGame/microGame
var currGame = new Game();
var meta = new Meta();
$('.square').addClass('tickhover'); //initialise hover styling on all squares



//constructor functions for the game & metaGame
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


function Meta() {
  this.thorScore = 0;
  this.tickScore = 0;
}




// helper functions to insert images into squares and for updating CSS when switching players
function insertImg(currGame, currSquare) {
  if (currGame.playerTurn == 1) {
    currSquare.innerHTML = '<img src="assets/img/tickSquare.jpg" alt="" />'
  } else {
    currSquare.innerHTML = '<img src="assets/img/thorSquare.png" alt="" />'
  }
}


function switchPlayer(currGame, currSquare) {
  if (currGame.playerTurn == 1) {
    $(currSquare).removeClass('tickhover');
    $('.tickhover').addClass('thorhover');
    $('.thorhover').removeClass('tickhover');
    currGame.playerTurn = 2;
  } else {
    $(currSquare).removeClass('thorhover');
    $('.thorhover').addClass('tickhover');
    $('.tickhover').removeClass('thorhover');
    currGame.playerTurn = 1;
  }
}


function resetMicro() {
  // currGame = new Game(); or figure out a way to change gameboard
  currGame = new Game();

  console.log(currGame.gameboard)
  $('.square').html('');
  $('.square').removeClass('tickhover');
  $('.square').removeClass('thorhover');
  $('.square').addClass('tickhover');

  //remove all eventlisteners + add eventlistener
  // $('.square').off('click',)
}

// functions to check if the current game is won or if either player has won the series
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

  //ON WIN OR DRAW: update score, reset imgs
  if (winArray.filter(num => num == 15).length > 0) {
    //update score
    //reset gameboard
    //change class to animate fade-in colours!! or use audio clip
    meta.tickScore += 1
    $('#tickscorebox').text(meta.tickScore)
    setTimeout(resetMicro, 500);
  } else if (winArray.filter(num => num == 30).length > 0) {
    meta.thorScore += 1
    $('#thorscorebox').text(meta.thorScore)
    setTimeout(resetMicro, 500);
  } else if (currGame.moveCounter == 9) {
    setTimeout(resetMicro, 500);
  }
}

function metaWinCheck() {

}

function resetMeta() {

} //try out ajax load in here to be used when resetting meta



//note: don't use load within this ready method.
$(document).ready(function() {
  console.log('DOM is ready to rock & roll')
  var numOfGames = 0; // once this hits 10, should alert & reset - BONUS functionality

  //initFunc() => 1) draw skeleton, 2) draw gameboard html elements **this part needs modularising & its inverse for resetBoard();, 3)draw scoreboards, 4)draw instructions


  //test written below shows that I shouldn't preassign variables to assess currGame keys since the var won't mutate when I create new constructors later.
  // var moveCounter = currGame.moveCounter;
  // console.log(moveCounter);
  // moveCounter += 1;
  // console.log(moveCounter);
  // var currGame = new Game();
  // console.log(moveCounter);

  //set click eventHandler on all squares;BUG note that if we define this as clickHandler outside of this scope, likely will run into bug where switchPlayer does not execute properly and insertImg never calls the right one;
  $('.square').one('click', function() {
    console.log('Ah you clicked me!')

    //  increment moveCounter;
    currGame.moveCounter += 1;
    // console.log(currGame.moveCounter);

    //// INSERT IMAGE
    insertImg(currGame, this);

    ////UPDATE THE GAMEBOARD
    var key = this.classList[1] //getting the right key
    var value = $(this).attr('value') * currGame.playerTurn;
    currGame.gameboard[key] = value;

    //CHECK FOR WINNING CONDITION
    microWinCheck(currGame);

    //switch player and change hover effects
    switchPlayer(currGame, this);
  })


  //  onclick =>
  //   microWinCheck() => check for win or draw; if win {increment score of currPlayer, resetBoard()) if draw=> moveCounter == 9, resetBoard(), create new Game;else
  //  metaWinCheck() => if score of currPlayer == 3, alert the win and reload location then break;alternatively ajax load a starter.html + reset global variables to 0;
  //switchPlayer()

})
