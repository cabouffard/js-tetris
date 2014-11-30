'use strict';

var Game = Game || {};

function drawShape(entity, posX, posY) {
  Game.context.fillStyle = entity.components.color.shape;
  Game.context.fillRect(
      (entity.components.position.x + posY) * Game.Board.unitWidth,
      (entity.components.position.y + posX)  * Game.Board.unitHeight,
      Game.Board.unitWidth,
      Game.Board.unitHeight
      );

  Game.context.fillStyle = entity.components.color.insideBorder;
  Game.context.fillRect(
      (entity.components.position.x + posY) * Game.Board.unitWidth + 2,
      (entity.components.position.y + posX) * Game.Board.unitHeight + 2,
      Game.Board.unitWidth - 4,
      Game.Board.unitHeight - 4
      );

  Game.context.fillStyle = entity.components.color.inside;
  Game.context.fillRect(
      (entity.components.position.x + posY) * Game.Board.unitWidth + 4,
      (entity.components.position.y + posX) * Game.Board.unitHeight + 4,
      Game.Board.unitWidth - 8,
      Game.Board.unitHeight - 8
      );
}

function debugShowingCollision() {

  Game.context.fillStyle = 'rgb(255,0,0,0.25)';
  for (var i = 0; i < Game.Board.horizontalSquares; i++) {
    for (var j = 0; j < Game.Board.verticalSquares; j++) {
      if (Game.ECS.collisionBoard[i][j]) {
        Game.context.fillRect(
            (j) * Game.Board.unitWidth,
            (i) * Game.Board.unitHeight,
            Game.Board.unitWidth,
            Game.Board.unitHeight
            );
      }
    }
  }
}

function drawGrid(){
  for (var x = 0.5; x < Game.$canvas.width; x += Game.Board.unitWidth) {
    Game.context.moveTo(x, 0);
    Game.context.lineTo(x, Game.$canvas.height);
  }

  for (var y = 0.5; y < Game.$canvas.height; y += Game.Board.unitHeight) {
    Game.context.moveTo(0, y);
    Game.context.lineTo(Game.$canvas.width, y);
  }

  Game.context.strokeStyle = '#ddd';
  Game.context.stroke();
}

function clearCanvas () {
    Game.context.save();

    Game.context.setTransform(1, 0, 0, 1, 0, 0);
    Game.context.clearRect(0, 0, Game.$canvas.width, Game.$canvas.height);

    Game.context.restore();

    drawGrid();
}

Game.ECS.Systems.render = function renderSystem (entities) {
  clearCanvas();

  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.color && entity.components.position) {
      if (entity.components.shape) {

        var tetrimino = entity.components.shape.tetrimino;

        for (var x = 0; x < tetrimino.length; x++) {
          for (var y = 0; y < tetrimino[x].length; y++) {
            if (tetrimino[x][y]) {
              drawShape(entity, x, y);
            }
          }
        }
      }
    }
  }
  // debugShowingCollision();
};
