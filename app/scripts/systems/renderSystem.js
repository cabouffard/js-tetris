'use strict';

var Game = Game || {};

function drawShape(entity, posX, posY, canvas) {
  canvas.context.fillStyle = entity.components.color.shape;
  canvas.context.fillRect(
      (entity.components.position.x + posY) * canvas.unitWidth,
      (entity.components.position.y + posX)  * canvas.unitHeight,
      canvas.unitWidth,
      canvas.unitHeight
      );

  canvas.context.fillStyle = entity.components.color.insideBorder;
  canvas.context.fillRect(
      (entity.components.position.x + posY) * canvas.unitWidth + 2,
      (entity.components.position.y + posX) * canvas.unitHeight + 2,
      canvas.unitWidth - 4,
      canvas.unitHeight - 4
      );

  canvas.context.fillStyle = entity.components.color.inside;
  canvas.context.fillRect(
      (entity.components.position.x + posY) * canvas.unitWidth + 4,
      (entity.components.position.y + posX) * canvas.unitHeight + 4,
      canvas.unitWidth - 8,
      canvas.unitHeight - 8
      );
}

function debugShowingCollision() {
  Game.Board.context.fillStyle = 'rgb(255,0,0,0.25)';
  for (var i = 0; i < Game.Board.horizontalSquares; i++) {
    for (var j = 0; j < Game.Board.verticalSquares; j++) {
      if (Game.ECS.collisionBoard[i][j]) {
        Game.Board.context.fillRect(
            (j) * Game.Board.unitWidth,
            (i) * Game.Board.unitHeight,
            Game.Board.unitWidth,
            Game.Board.unitHeight
            );
      }
    }
  }
}

function drawGrid(canvas){
  for (var x = 0.5; x < canvas.$canvas.width; x += canvas.unitWidth) {
    canvas.context.moveTo(x, 0);
    canvas.context.lineTo(x, canvas.$canvas.height);
  }

  for (var y = 0.5; y < canvas.$canvas.height; y += canvas.unitHeight) {
    canvas.context.moveTo(0, y);
    canvas.context.lineTo(canvas.$canvas.width, y);
  }

  canvas.context.strokeStyle = '#ddd';
  canvas.context.stroke();
}

function clearBoardCanvas () {
  Game.Board.context.save();

  Game.Board.context.setTransform(1, 0, 0, 1, 0, 0);
  Game.Board.context.clearRect(0, 0, Game.Board.$canvas.width, Game.Board.$canvas.height);

  Game.Board.context.restore();

  drawGrid(Game.Board);
}

function clearNextPieceCanvas () {
  Game.NextPiece.context.save();

  Game.NextPiece.context.setTransform(1, 0, 0, 1, 0, 0);
  Game.NextPiece.context.clearRect(0, 0, Game.NextPiece.$canvas.width, Game.NextPiece.$canvas.height);

  Game.NextPiece.context.restore();

  drawGrid(Game.NextPiece);
}

function renderTetromino(entity, canvas) {
    var tetrimino = entity.components.shape.tetrimino;
    for (var x = 0; x < tetrimino.length; x++) {
      for (var y = 0; y < tetrimino[x].length; y++) {
        if (tetrimino[x][y]) {
          drawShape(entity, x, y, canvas);
        }
      }
    }
}

Game.ECS.Systems.render = function renderSystem (entities) {
  clearBoardCanvas();
  clearNextPieceCanvas();

  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];
    var mustRender = true;
    var canvas = Game.Board;

    if (entity.components.color && entity.components.shape && entity.components.position) {
      if (entity.components.placeHolder) {
        if (Game.NextPiece.hasChanged) {
          canvas = Game.NextPiece;
          mustRender = true;
        } else {
          mustRender = false;
        }
      }
      renderTetromino(entity, canvas);
    }
  }
  // debugShowingCollision();
};


