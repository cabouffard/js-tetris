'use strict';

var Game = Game || {};

Game.ECS.Systems.lineClearing = function lineClearing(entities) {

  var entity;
  // Line that has to be cleared;
  var linesCleared = {
    streak: 0,
    lines: []
  };

  // Detecting which lines are full
  for (var y = 0; y < Game.Board.horizontalSquares; y++) {
    var isFull = true;
    for (var x = 0; x < Game.Board.verticalSquares; x++) {
      if (!Game.ECS.collisionBoard[y][x]) {
        isFull = false;
        break;
      }

    }
    if (isFull) {
      linesCleared.lines.push(y);
      linesCleared.streak += 1;
      Game.Stats.linesCleared += 1;
    }
  }

  // TODO: test and rework those awefull loops

  // For each lines that are full, clear them
  // From the shape
  for (var entityId in entities) {
    entity = entities[entityId];
    if (entity.components.collision && entity.components.position && entity.components.shape) {
      var shape = entity.components.shape.tetromino;
      var position = entity.components.position;
      for (var line in linesCleared.lines) {
        var allo = linesCleared.lines[line];
        for (var x = 3; x >= 0; x--) {
          for (var y = 0; y <= 3; y++) {
            if (shape[x][y]) {
              Game.ECS.collisionBoard[position.y + x][position.x + y] = false;
            }
            if (position.y + x === allo)  {
              shape[x][y] = false;
            }
          }
        }
      }
    }
  }
};


