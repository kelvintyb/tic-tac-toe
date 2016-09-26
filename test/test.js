function Game() {
  this.currPlayer = 1; // so if this.currPlayer % 2 = 1 , then it's theTick, otherwise it's Thor
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

var currGame = new Game();
//imagine there is a clickHandler on each square already
//snippet to implement tracking of the right obj[key] in clickHandler;
var key = this.classList[1] //getting the right key
var value = parseInt(this.value) * currPlayer;
playerTurn == 1 ? currGame.gameboard[key] = value;: currGame.gameboard[key] = value;

////USING MAGIC SQUARE (TICK WINS IF TOTAL )

var row1 = gameboard['one'] + gameboard['two'] + gameboard['three']
var row2 = gameboard['four'] + gameboard['five'] + gameboard['six']
var row3 = gameboard['seven'] + gameboard['eight'] + gameboard['nine']
var col1 = gameboard['one'] + gameboard['four'] + gameboard['seven']
var col2 = gameboard['two'] + gameboard['five'] + gameboard['eight']
var col3 = gameboard['three'] + gameboard['six'] + gameboard['nine']
var diag1 = gameboard['one'] + gameboard['five'] + gameboard['nine']
var diag2 = gameboard['seven'] + gameboard['five'] + gameboard['three']
var winArray = [row1, row2, row3, col1, col2, col3, diag1, diag2]
if winArray.filter(num => num == 15).length > 0, tick won.
if winArray.filter(num => num == 30).length > 0, thor won.

////////////////////////









function microWinCheck() {
  ////note that using booleans[true,null,false] instead of numbers wldn't work without two dummy boards because null is falsey
  ////DON'T USE THE BELOW, FOR LEARNING PURPOSES ONLY
  // tickWonRow2 = [sq4 && sq5 && sq6]
  // tickWonRow3 = (sq7 && sq8 && sq9)
  // tickWonCol1 = (sq1 && sq4 && sq7)
  // tickWonCol2 = (sq2 && sq5 && sq8)
  // tickWonCol3 = (sq3 && sq6 && sq9)
  // tickWonDiag1 = (sq1 && sq5 && sq9)
  // tickWonDiag2 = (sq7 && sq5 && sq3)
  // tickWon = row1 || row2 || row3 etc.
  // if tickWon === true, tick wins, else if tickWon === false, thor wins
  ////
  ////

  ////USING MAGIC SQUARE (TICK WINS IF TOTAL )
  //snippet to implement tracking of the right obj[key] in clickHandler;
  var key = this.classList[1] //getting the right key
  var value = parseInt(this.value) * currPlayer;
  playerTurn == 1 ? gameboard[key] = value;: gameboard[key] = value;

  var row1 = gameboard['one'] + gameboard['two'] + gameboard['three']
  var row2 = gameboard['four'] + gameboard['five'] + gameboard['six']
  var row3 = gameboard['seven'] + gameboard['eight'] + gameboard['nine']
  var col1 = gameboard['one'] + gameboard['four'] + gameboard['seven']
  var col2 = gameboard['two'] + gameboard['five'] + gameboard['eight']
  var col3 = gameboard['three'] + gameboard['six'] + gameboard['nine']
  var diag1 = gameboard['one'] + gameboard['five'] + gameboard['nine']
  var diag2 = gameboard['seven'] + gameboard['five'] + gameboard['three']
  var winArray = [row1, row2, row3, col1, col2, col3, diag1, diag2]
  if winArray.filter(num => num == 15).length > 0, tick won.
  if winArray.filter(num => num == 30).length > 0, thor won.
    ////////////////////////


  //// alternative method - array of arrays //////////
  // for pushing to array of arrays, look at terence's code => using ids and tying them to [i][j], and using nested loops to implement the tracking
  /////////////////

}
