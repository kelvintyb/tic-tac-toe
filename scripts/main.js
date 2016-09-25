console.log('hello world, HTML is crowning.')
  //Note: Any reference made with the prefix micro refers to the current tic-tac-toe game being played, prefix meta refers to the overall game series

//constructor function for the game
function Game() {
  this.currPlayer = 'The Tick';
  this.moveCounter = 0;
  this.tickBoard = {};
  this.thorBoard = {};
}


function microWinCheck() {

}

function metaWinCheck() {}



function resetMeta() {
  return 'hi'
} //try out ajax load in here to be used when resetting meta

function resetMicro() {

}

function switchSqClass() {

}



//note: don't use load within this ready method.
$(document).ready(function() {
  console.log('DOM is ready to rock & roll')
    //initFunc() => 1) draw skeleton, 2) draw gameboard html elements **this part needs modularising & its inverse for resetBoard();, 3)draw scoreboards, 4)draw instructions
  $('.square').addClass('tickhighlight');


  var numOfGames = 0; // once this hits 10, should alert & reset - BONUS functionality
  var tickScore = 0;
  var thorScore = 0;

  // create new Game object to initialise new tracking of microGame on micro
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
        //check which class to remove from the square once clicked to stop it from lighting up;

      currGame.moveCounter += 1;
      console.log(currGame.moveCounter);
    })
    //  onclick =>
    //  increment moveCounter;
    //  if game.playerTurn = tick ? update tickBoard, insert tick image : thorBoard, insert thor img
    //   microWinCheck() => check for win or draw; if win {increment score of currPlayer, resetBoard()) if draw=> moveCounter == 9, resetBoard(), create new Game;else
    //  update playerTurn
    //  switch class of clickers   //pattern to switch classes: $('p').removeClass('red').addClass('green');
    //
    //  metaWinCheck() => if score of currPlayer == 3, alert the win and reload location then break;alternatively ajax load a starter.html + reset global variables to 0;

})
