'use strict';

ECS.Systems.gravity = function gravitySystem (entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.gravity && entity.components.position) {
      if (entity.components.gravity.waiting === false) {

        setTimeout(function() {
          // Since this is ran x amount of time, it is possible
          // that the entity do not have the gravity component
          if (entity.components.gravity) {
            entity.components.position.y += 1;
            entity.components.gravity.waiting = false;
          }
        }, entity.components.gravity.speed * 1000);

        entity.components.gravity.waiting = true;
      }
    }
  }
};


ECS.Components.Gravity.prototype.hardDrop = function hardDrop() {
  console.log ("Hard Drop not yet implemented");
}
