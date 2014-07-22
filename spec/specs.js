describe("Player", function() {
  describe("initialize", function() {
    it("creates a player with name X or O", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.name.should.equal("X");
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("creates a space with coordinates", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 3);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(3);
    });
  });

  describe("markedBy", function() {
    it("returns the player's name when a space is choses", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("O");
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 3);
      testSpace.mark(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
      testSpace.markedBy.name.should.equal("O");
    });
  });
});

describe("Board", function() {
  describe("initialize", function() {
    it("creates 9 spaces when it is initialized", function(){
      var newBoard = Object.create(Board);
      newBoard.initialize();
      newBoard.r1c3.xCoordinate.should.equal(1);
      newBoard.r1c3.yCoordinate.should.equal(3);
    });

    it("verifies a space on the board has an x or o", function(){
      var testPlayer = Object.create(Player);
      testPlayer.initialize("O");
      var newBoard = Object.create(Board);
      newBoard.initialize();
      newBoard.r1c3.mark(testPlayer);
      newBoard.r1c3.markedBy.name.should.equal("O");
    });
  });
});

describe("Game", function() {
  describe("initialize", function() {
    it("creates two players when initialized", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.playerX.name.should.equal("X");
    });

    it("creates a board to play tic-tac-toe", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c3.xCoordinate.should.equal(1);
    });
  });

  describe("winCheck", function() {
    it("checks after each turn to see if there is a win in row 1", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c1.mark(newGame.playerX);
      newGame.board.r1c2.mark(newGame.playerX);
      newGame.board.r1c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

    it("checks after each turn to see if there is a win in row 2", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r2c1.mark(newGame.playerX);
      newGame.board.r2c2.mark(newGame.playerX);
      newGame.board.r2c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

    it("checks after each turn to see if there is a win in row 3", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.board.r3c2.mark(newGame.playerX);
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

    it("checks after each turn to see if there is a loss in row 3 if two different players in row", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.board.r3c2.mark(newGame.playerO);
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });

    it("checks after each turn to see if there is a loss if two different rows", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.board.r2c2.mark(newGame.playerX);
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });

    it("checks after each turn to see if there is only two marks in a row", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });

    it("checks after each turn to see if there is a win in column 1", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c1.mark(newGame.playerX);
      newGame.board.r2c1.mark(newGame.playerX);
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

    it("checks after each turn to see if there is a win in column 2", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c2.mark(newGame.playerX);
      newGame.board.r2c2.mark(newGame.playerX);
      newGame.board.r3c2.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

    it("checks after each turn to see if there is a win in column 3", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c3.mark(newGame.playerX);
      newGame.board.r2c3.mark(newGame.playerX);
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

        it("checks after each turn to see if there is a loss in column 3 if two different players in column", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c3.mark(newGame.playerX);
      newGame.board.r2c3.mark(newGame.playerO);
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });

    it("checks after each turn to see if there is a loss if two different columns", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c2.mark(newGame.playerX);
      newGame.board.r2c3.mark(newGame.playerX);
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });

    it("checks after each turn to see if there is only two marks in a column", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r2c1.mark(newGame.playerX);
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });

    it("checks for descending diagonal win", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r1c1.mark(newGame.playerX);
      newGame.board.r2c2.mark(newGame.playerX);
      newGame.board.r3c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

    it("checks for ascending diagonal win", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.board.r2c2.mark(newGame.playerX);
      newGame.board.r1c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(true);
    });

   it("checks for two non-null responses in diagonal win", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.board.r1c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });

   it("checks for two players in diagonal win", function() {
      var newGame = Object.create(Game);
      newGame.initialize();
      newGame.board.r3c1.mark(newGame.playerX);
      newGame.board.r2c2.mark(newGame.playerO);
      newGame.board.r1c3.mark(newGame.playerX);
      newGame.winCheck().should.equal(false);
    });
  });
});
