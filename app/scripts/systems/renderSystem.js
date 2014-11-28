'use strict';

function drawShape(entity, posX, posY) {
  ECS.context.fillStyle = entity.components.color.shape;
  ECS.context.fillRect(
      (entity.components.position.x + posY) * Board.unitWidth,
      (entity.components.position.y + posX)  * Board.unitHeight,
      Board.unitWidth,
      Board.unitHeight
      );

  ECS.context.fillStyle = entity.components.color.insideBorder;
  ECS.context.fillRect(
      (entity.components.position.x + posY) * Board.unitWidth + 2,
      (entity.components.position.y + posX) * Board.unitHeight + 2,
      Board.unitWidth - 4,
      Board.unitHeight - 4
      );

  ECS.context.fillStyle = entity.components.color.inside;
  ECS.context.fillRect(
      (entity.components.position.x + posY) * Board.unitWidth + 4,
      (entity.components.position.y + posX) * Board.unitHeight + 4,
      Board.unitWidth - 8,
      Board.unitHeight - 8
      );
};

function debugShowingCollision() {
  var entity, fillStyle;

  ECS.context.fillStyle = 'rgb(255,0,0,0.25)';
  for (var i = 0; i < Board.verticalSquares; i++) {
    for (var j = 0; j < Board.horizontalSquares; j++) {
      if (ECS.collisionBoard[i][j]) {
        ECS.context.fillRect(
            (i) * Board.unitWidth,
            (j) * Board.unitHeight,
            Board.unitWidth,
            Board.unitHeight
            );
      }
    }
  }
};

function drawGrid(){
  for (var x = 0.5; x < ECS.$canvas.width; x += Board.unitWidth) {
    ECS.context.moveTo(x, 0);
    ECS.context.lineTo(x, ECS.$canvas.height);
  }

  for (var y = 0.5; y < ECS.$canvas.height; y += Board.unitHeight) {
    ECS.context.moveTo(0, y);
    ECS.context.lineTo(ECS.$canvas.width, y);
  }

  ECS.context.strokeStyle = '#ddd';
  ECS.context.stroke();
}

function clearCanvas () {
    ECS.context.save();

    ECS.context.setTransform(1, 0, 0, 1, 0, 0);
    ECS.context.clearRect(0, 0, ECS.$canvas.width, ECS.$canvas.height);

    ECS.context.restore();

    drawGrid();
}

ECS.Systems.render = function renderSystem (entities) {
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
