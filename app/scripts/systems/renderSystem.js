'use strict';

function drawGrid(){
  var width = 10;
  var height = 20;
  var squareSize = ECS.$canvas.width / width;
  var squareSize1 = ECS.$canvas.height / height;
  for (var x = 0.5; x < ECS.$canvas.width; x += squareSize) {
    ECS.context.moveTo(x, 0);
    ECS.context.lineTo(x, ECS.$canvas.height);
  }

  for (var y = 0.5; y < ECS.$canvas.height; y += squareSize1) {
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

  var entity, fillStyle;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.color && entity.components.position) {

      ECS.context.fillStyle = fillStyle;
      if (entity.components.shape) {
        var tetrimino = entity.components.shape.tetrimino;
        for (var x = 0; x < tetrimino.length; x++) {
          for (var y = 0; y < tetrimino[x].length; y++) {
            if (tetrimino[x][y]) {
              ECS.context.fillStyle = entity.components.color.shape;
              ECS.context.fillRect(
                (entity.components.position.x + x - 1) * Board.unitWidth,
                (entity.components.position.y + y - 1) * Board.unitHeight,
                Board.unitWidth,
                Board.unitHeight
                );

              ECS.context.fillStyle = entity.components.color.insideBorder;
              ECS.context.fillRect(
                (entity.components.position.x + x - 1) * Board.unitWidth + 2,
                (entity.components.position.y + y - 1) * Board.unitHeight + 2,
                Board.unitWidth - 4,
                Board.unitHeight - 4
                );

              ECS.context.fillStyle = entity.components.color.inside;
              ECS.context.fillRect(
                (entity.components.position.x + x - 1) * Board.unitWidth + 4,
                (entity.components.position.y + y - 1) * Board.unitHeight + 4,
                Board.unitWidth - 8,
                Board.unitHeight - 8
                );
            }
          }
        }
      }
    }
  }
};
