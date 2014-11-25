'use strict';

ECS.Systems.gravity = function gravitySystem (entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.gravity && entity.components.position) {
      if (entity.components.gravity.waiting === false) {

        setTimeout(function() {
          entity.components.position.y += 1;
          entity.components.gravity.waiting = false;
        }, entity.components.gravity.speed * 1000);

        entity.components.gravity.waiting = true;
      }
    }
  }
};

