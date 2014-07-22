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
      testSpace.markedBy(testPlayer).should.equal("O");
    });
  });
});
