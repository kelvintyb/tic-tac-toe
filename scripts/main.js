console.log('hello world, HTML is crowning.')

// click on square
//  onclick =>
//  increment moveCounter;
//  if game.playerTurn = 1 ? update tickBoard, insert tick image : thorBoard, insert thor img
//   microWinCheck() => check for win or draw; if win {increment score of currPlayer, resetBoard()) if draw, resetBoard(), create new Game;
//
//  metaWinCheck() => if score of currPlayer == 3, alert the win and reload location then break;
//  update playerTurn
//  switch class of clickers   //pattern to switch classes: $('p').removeClass('red').addClass('green');


$(document).ready(function() {
  console.log('DOM is ready to rock & roll')
    //initFunc() => 1) draw skeleton, 2) draw gameboard html elements **this part needs modularising & its inverse for resetBoard();, 3)draw scoreboards, 4)draw instructions

  var numOfGames = 0; // once this hits 10, should alert & reset - bonus functionality
  var tickScore = 0;
  var thorScore = 0;

  // create new Game object to initialise new tracking of microGame


})

function Game() {

  this.currPlayer = 'The Tick';
  this.moveCounter = 0;
  this.tickBoard = {};
  this.thorBoard = {};



}
