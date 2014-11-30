'use strict';

var Game = Game || {};

Game.ECS.Systems.movement = function movementSystem (entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.position) {
      entity.components.position.y += entity.components.position.yVelocity;
      entity.components.position.x += entity.components.position.xVelocity;
      entity.components.position.yVelocity = 0;
      entity.components.position.xVelocity = 0;
    }
  }
};

