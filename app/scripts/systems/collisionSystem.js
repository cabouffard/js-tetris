'use strict';

function collides(obj1, obj2) {
return (obj1.x < obj2.x + 1 &&
        obj1.x + 1 > obj2.x &&
        obj1.y < obj2.y + 1 &&
        1 + obj1.y > obj2.y);

}

ECS.Systems.collision = function collisionSystem (entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.collision && entity.components.position && entity.components.playerControlled) {
      for (var entityId2 in entities) {
        if (entityId === entityId2)
          continue

        entity2 = entities[entityId2];

        if (collides(entity.components.position, entity2.components.position)) {
          console.log ("Collison detected! - removing Player Controlled and Gravity!");
          entity.removeComponent(ECS.Components.PlayerControlled);
          entity.removeComponent(ECS.Components.Gravity);
        }
      }
    }
  }
};
