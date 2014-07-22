var Player = {
  initialize: function (name) {
    this.name = name;
  }
}

var Space = {
  initialize: function(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  },
  markedBy: function(player) {
    return player.name;
  }
}
