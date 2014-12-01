'use strict';

var Game = Game || {};

function addTimer(entity) {
  setTimeout(function() {
    // Since this is ran x amount of time, it is possible
    // that the entity do not have the gravity component
    if (entity.components.gravity) {
      entity.components.position.yVelocity = 1;
      entity.components.gravity.waiting = false;
    }
    else {
      clearTimeout();
    }
  }, entity.components.gravity.speed * 1000);
}

Game.ECS.Systems.gravity = function gravitySystem (entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.gravity && entity.components.position) {
      if (entity.components.gravity.waiting === false) {
        addTimer(entity);
        entity.components.gravity.waiting = true;
      }
    }
  }
};

Game.ECS.Components.Gravity.prototype.hardDrop = function hardDrop() {
  console.log ('Hard Drop not yet implemented');
};
