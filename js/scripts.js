var Player = {
  initialize: function (name) {
    this.name = name;
  }
}

var Space = {
  markedBy: "",
  initialize: function(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  },
  mark: function(player) {
    this.markedBy = player;
  }
}

var Board = {
  initialize: function() {
    this.r1c1 = Object.create(Space);
    this.r1c1.initialize(1, 1);
    this.r1c2 = Object.create(Space);
    this.r1c2.initialize(1, 2);
    this.r1c3 = Object.create(Space);
    this.r1c3.initialize(1, 3);

    this.r2c1 = Object.create(Space);
    this.r2c1.initialize(2, 1);
    this.r2c2 = Object.create(Space);
    this.r2c2.initialize(2, 2);
    this.r2c3 = Object.create(Space);
    this.r2c3.initialize(2, 3);

    this.r3c1 = Object.create(Space);
    this.r3c1.initialize(3, 1);
    this.r3c2 = Object.create(Space);
    this.r3c2.initialize(3, 2);
    this.r3c3 = Object.create(Space);
    this.r3c3.initialize(3, 3);
  }
}

var Game = {
  initialize: function() {
    this.playerX = Object.create(Player);
    this.playerX.initialize("X");
    this.playerO = Object.create(Player);
    this.playerO.initialize("O");
    this.board = Object.create(Board);
    this.board.initialize();
  },

  winCheck: function() {
    //horizontal
    if ((this.board.r1c1.markedBy.name === this.board.r1c2.markedBy.name) &&
    (this.board.r1c1.markedBy.name === this.board.r1c3.markedBy.name) &&
    ((this.board.r1c3.markedBy.name === "X") || (this.board.r1c3.markedBy.name === "O"))) {
      return true;
    } else if ((this.board.r2c1.markedBy.name === this.board.r2c2.markedBy.name) &&
    (this.board.r2c1.markedBy.name === this.board.r2c3.markedBy.name) &&
    ((this.board.r2c3.markedBy.name === "X") || (this.board.r2c3.markedBy.name === "O"))) {
      return true;
    } else if ((this.board.r3c1.markedBy.name === this.board.r3c2.markedBy.name) &&
    (this.board.r3c1.markedBy.name === this.board.r3c3.markedBy.name) &&
    ((this.board.r3c3.markedBy.name === "X") || (this.board.r3c3.markedBy.name === "O"))) {
      return true;
     //vertical
    } else if ((this.board.r1c1.markedBy.name === this.board.r2c1.markedBy.name) &&
    (this.board.r1c1.markedBy.name === this.board.r3c1.markedBy.name) &&
    ((this.board.r2c1.markedBy.name === "X") || (this.board.r2c1.markedBy.name === "O"))) {
      return true;
    } else if ((this.board.r1c2.markedBy.name === this.board.r2c2.markedBy.name) &&
    (this.board.r1c2.markedBy.name === this.board.r3c2.markedBy.name) &&
    ((this.board.r1c2.markedBy.name === "X") || (this.board.r1c2.markedBy.name === "O"))) {
      return true;
    } else if ((this.board.r1c3.markedBy.name === this.board.r2c3.markedBy.name) &&
    (this.board.r1c3.markedBy.name === this.board.r3c3.markedBy.name) &&
    ((this.board.r3c3.markedBy.name === "X") || (this.board.r3c3.markedBy.name === "O"))) {
      return true;
    //diagonal
    } else if ((this.board.r1c1.markedBy.name === this.board.r2c2.markedBy.name) &&
    (this.board.r1c1.markedBy.name === this.board.r3c3.markedBy.name) &&
    ((this.board.r1c1.markedBy.name === "X") || (this.board.r1c1.markedBy.name === "O"))) {
      return true;
    } else if ((this.board.r3c1.markedBy.name === this.board.r2c2.markedBy.name) &&
    (this.board.r3c1.markedBy.name === this.board.r1c3.markedBy.name) &&
    ((this.board.r3c1.markedBy.name === "X") || (this.board.r3c1.markedBy.name === "O"))) {
      return true;
    } else {
      return false;
    }
  }
}

$(document).ready(function(){
  var newGame = Object.create(Game);
  newGame.initialize();
  var currentPlayer;
  var counter = 0;
    $('table td').click(function() {
        if(counter % 2 == 0) {
          currentPlayer = newGame.playerX;
          var space = $(this).attr('class');
          newGame.board[space].mark(currentPlayer);
          $(this).text("X");
          counter += 1;
          console.log(newGame.winCheck());
        } else {
          currentPlayer = newGame.playerO;
          var space = $(this).attr('class');
          newGame.board[space].mark(currentPlayer);
          $(this).text("O");
          counter += 1;
          console.log(newGame.winCheck());
        }
      } else if ((newGame.winCheck() === true) && (counter<=9)){
        alert("WINNER");
      } else {
        alert("DRAW");
      }
   });
});


// if ((newGame.winCheck() === false) && (counter<=9))
