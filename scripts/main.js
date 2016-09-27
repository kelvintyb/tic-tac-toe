console.log('hello world, HTML is crowning.')
  //README: Any reference made with the prefix micro refers to the current tic-tac-toe game being played, prefix meta refers to the overall game series

//init function for html

// create new global variables to initialise new tracking of metaGame/microGame
var currGame = new Game();
var meta = new Meta();

$('.square').addClass('tickhover'); //initialise hover styling on all squares



//CONSTRUCTORS for the game & metaGame
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
  this.numOfGames = 0;
  // once this hits 10, should alert & reset - BONUS functionality
}

//CLICKHANDLER FUNCTION THAT DETERMINE ACTIONS THAT HAPPEN ON CLICK OF SQUARE
function clickHandler() {
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

  //CHECK FOR WINNING CONDITIONS
  microWinCheck(currGame);
  metaWinCheck();

  //switch player and change hover effects
  switchPlayer(currGame, this);
}


// HELPER FUNCTIONS to insert images into squares and for updating CSS when switching players//////
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
  //initialising new microgame
  currGame = new Game();
  //removing imgs
  $('.square').html('');
  //removing all remaining hover classes and resetting to initial hover class
  $('.square').removeClass('tickhover');
  $('.square').removeClass('thorhover');
  $('.square').addClass('tickhover');
  //resetting all eventlisteners on the squares
  $('.square').off('click', clickHandler);
  $('.square').one('click', clickHandler);
}

// WIN CHECKING FUNCTIONS TO DETERMINE IF MICROGAME IS WINNING AND IF METAGAME IS WON
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
    //change class to animate fade-in colours!! or use audio clip
    meta.tickScore += 1
    $('#tickscorebox').text(meta.tickScore)
    setTimeout(resetMicro, 500);
    meta.numOfGames += 1;

  } else if (winArray.filter(num => num == 30).length > 0) {
    meta.thorScore += 1
    $('#thorscorebox').text(meta.thorScore)
    setTimeout(resetMicro, 500);
    meta.numOfGames += 1;

  } else if (currGame.moveCounter == 9) {
    setTimeout(resetMicro, 500);
    meta.numOfGames += 1;

  }
}


//  metaWinCheck() => if score of currPlayer == 3, alert the win and reload location then break;alternatively ajax load a starter.html + reset global variables to 0;
function metaWinCheck() {
  if (meta.numOfGames >= 10) {
    setTimeout(function() {
      alert('You have managed to play ' + numOfGames + ' without winning. You have shown weakness and must be punished. Restarting in 3..2..1..')
    }, 200)
    setTimeout(resetMeta, 200);
  } else if (meta.tickScore >= 3) {
    setTimeout(function() {
      alert('YAY SPOONNNNN!!!')
    }, 200);
    setTimeout(resetMeta, 200);
  } else if (meta.thorScore >= 3) {
    setTimeout(function() {
      alert('THOR SMASH')
    }, 200);
    setTimeout(resetMeta, 200);
  }
}

function resetMeta() {
  location.reload();
} //perhaps reduce need to load entire website through ajax reload?

$(document).ready(function() {
  console.log('DOM is ready to rock & roll')

  //initFunc() => 1) draw skeleton, 2) draw gameboard html elements **this part needs modularising & its inverse for resetBoard();, 3)draw scoreboards, 4)draw instructions

  $('.square').one('click', clickHandler)

})
