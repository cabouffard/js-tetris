'use strict';

var Game = Game || {};

function drawShapeImage(entity, canvas, x , y) {
  for (var posX = 0; posX < 4; posX++) {
    for (var posY = 0; posY < 4; posY++) {
      if (entity.components.shape.tetromino[posX][posY]) {
        canvas.context.fillStyle = entity.components.color.shape;
        canvas.context.fillRect(
            posY * canvas.unitWidth + x,
            posX * canvas.unitHeight + y,
            canvas.unitWidth,
            canvas.unitHeight
            );

        canvas.context.fillStyle = entity.components.color.insideBorder;
        canvas.context.fillRect(
            posY * canvas.unitWidth + 2 + x,
            posX * canvas.unitHeight + 2 + y,
            canvas.unitWidth - 4,
            canvas.unitHeight - 4
            );

        canvas.context.fillStyle = entity.components.color.inside;
        canvas.context.fillRect(
            posY * canvas.unitWidth + 4 + x,
            posX * canvas.unitHeight + 4 + y,
            canvas.unitWidth - 8,
            canvas.unitHeight - 8
            );
      }
    }
  }
}

function clearStatsCanvas () {
  Game.Stats.context.save();

  Game.Stats.context.setTransform(1, 0, 0, 1, 0, 0);
  Game.Stats.context.clearRect(0, 0, Game.Stats.$canvas.width, Game.Stats.$canvas.height);

  Game.Stats.context.restore();
}

Game.ECS.Systems.statistics = function statisticsSystem () {
  clearStatsCanvas();

  Game.Stats.context.fillStyle = '#000';

  Game.Stats.context.font = '10pt Calibri';
  Game.Stats.context.fillText('Line Cleared : ' +  Game.Stats.linesCleared, Game.Stats.width / 4 - 5, 300);
  Game.Stats.context.fillText('Current Level : ' +  Game.Stats.currentLevel, Game.Stats.width / 4 - 5, 325);

  Game.Stats.context.font = '15pt Calibri';
  Game.Stats.context.fillText('Statistics', Game.Stats.width / 4 - 5, 25);


  drawShapeImage(new Game.ECS.Assemblages.LTetromino(true), Game.Stats, 10, 80);
  Game.Stats.context.fillText(Game.Stats.tetrominos.L, 70, 100);
  drawShapeImage(new Game.ECS.Assemblages.ITetromino(true), Game.Stats, 10, 100);
  Game.Stats.context.fillText(Game.Stats.tetrominos.I, 70, 125);
  drawShapeImage(new Game.ECS.Assemblages.ZTetromino(true), Game.Stats, 10, 130);
  Game.Stats.context.fillText(Game.Stats.tetrominos.Z, 70, 150);
  drawShapeImage(new Game.ECS.Assemblages.STetromino(true), Game.Stats, 10, 155);
  Game.Stats.context.fillText(Game.Stats.tetrominos.S, 70, 175);
  drawShapeImage(new Game.ECS.Assemblages.JTetromino(true), Game.Stats, 10, 180);
  Game.Stats.context.fillText(Game.Stats.tetrominos.J, 70, 200);
  drawShapeImage(new Game.ECS.Assemblages.TTetromino(true), Game.Stats, 10, 205);
  Game.Stats.context.fillText(Game.Stats.tetrominos.T, 70, 225);
  drawShapeImage(new Game.ECS.Assemblages.OTetromino(true), Game.Stats, 10, 230);
  Game.Stats.context.fillText(Game.Stats.tetrominos.O, 70, 250);
};



