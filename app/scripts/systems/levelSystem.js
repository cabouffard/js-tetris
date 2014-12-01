'use strict';

var Game = Game || {};

Game.ECS.Systems.level = function levelSystem () {
  switch (Game.Stats.linesCleared) {
    case 10:
      Game.Stats.currentLevel = 2;
      break;
    case 20:
      Game.Stats.currentLevel = 3;
      break;
    case 30:
      Game.Stats.currentLevel = 4;
      break;
    case 40:
      Game.Stats.currentLevel = 5;
      break;
    case 50:
      Game.Stats.currentLevel = 6;
      break;
  }
};


