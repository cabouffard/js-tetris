'use strict';

var Game = Game || {};

Game.ECS.Systems = [
  // Game.ECS.Systems.randomizer,
  Game.ECS.Systems.userInput,
  Game.ECS.Systems.gravity,
  Game.ECS.Systems.collision,
  Game.ECS.Systems.movement,
  Game.ECS.Systems.lineClearing,
  Game.ECS.Systems.render,
  Game.ECS.Systems.gameState,
  Game.ECS.Systems.level,
  Game.ECS.Systems.statistics,
  Game.ECS.Systems.garbageCollector
];

