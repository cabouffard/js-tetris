'use strict';

var Game = Game || {};

Game.ECS.Systems = [
  Game.ECS.Systems.randomizer,
  Game.ECS.Systems.userInput,
  Game.ECS.Systems.collision,
  Game.ECS.Systems.gravity,
  Game.ECS.Systems.render,
  Game.ECS.Systems.gameState
];

