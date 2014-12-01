'use strict';

var Game = Game || {};

function isNotUsed(tetromino) {
  // We check if this has anything to render
  // If not, this is a useless entity and we shall delete it
  for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
      if (tetromino[x][y]) {
        return true;
      }
    }
  }
  return false;
}

Game.ECS.Systems.garbageCollector = function garbageCollectorSystem (entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.shape) {
      if (!isNotUsed(entity.components.shape.tetromino)) {
        console.log ('Garbaged entity: ' + entityId);
        delete entities[entityId];
      }
    }
  }
};

