'use strict';

var Game = Game || {};


function clearStatsCanvas () {
  Game.Stats.context.save();

  Game.Stats.context.setTransform(1, 0, 0, 1, 0, 0);
  Game.Stats.context.clearRect(0, 0, Game.Stats.$canvas.width, Game.Stats.$canvas.height);

  Game.Stats.context.restore();
}

Game.ECS.Systems.statistics = function statisticsSystem () {
  clearStatsCanvas();

  Game.Stats.context.font = '15pt Calibri';
  Game.Stats.context.fillStyle = '#000';

  Game.Stats.context.fillText('Statistics', Game.Stats.width / 4 - 5, 25);
  Game.Stats.context.fillText('L : ' +  Game.Stats.tetrominos.L, Game.Stats.width / 4 - 5, 100);
  Game.Stats.context.fillText('I : ' +  Game.Stats.tetrominos.I, Game.Stats.width / 4 - 5, 125);
  Game.Stats.context.fillText('Z : ' +  Game.Stats.tetrominos.Z, Game.Stats.width / 4 - 5, 150);
  Game.Stats.context.fillText('S : ' +  Game.Stats.tetrominos.S, Game.Stats.width / 4 - 5, 175);
  Game.Stats.context.fillText('J : ' +  Game.Stats.tetrominos.J, Game.Stats.width / 4 - 5, 200);
  Game.Stats.context.fillText('T : ' +  Game.Stats.tetrominos.T, Game.Stats.width / 4 - 5, 225);
  Game.Stats.context.fillText('O : ' +  Game.Stats.tetrominos.O, Game.Stats.width / 4 - 5, 250);

  Game.Stats.context.font = '10pt Calibri';
  Game.Stats.context.fillText('Line Cleared : ' +  Game.Stats.linesCleared, Game.Stats.width / 4 - 5, 300);
};



