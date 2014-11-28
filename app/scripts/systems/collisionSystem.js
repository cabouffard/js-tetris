'use strict';

// ECS.collisionBoard = [];
ECS.collisionBoard = function initBoard() {
  // Y by X
  var array = new Array(Board.horizontalSquares);
  for (var i = 0; i < Board.horizontalSquares; i++) {
    array[i] = new Array(Board.verticalSquares);
    // TODO: fix this, this is fugly
    for (var j = 0; j < Board.verticalSquares; j++) {
      array[i][j] = false;
    }
  }

  return array;
}()

function collides(shape, position, x, y) {
  // If there is no pieces on the bottom row
  // we still count it as a collision
  if (position.y + x + 1 === Board.horizontalSquares) {
    return true;
  }
  if (ECS.collisionBoard[position.y + x + 1][position.x + y]) {
    return true;
  }
  return false;
};

function invalidLocation(shape, position, x, y) {
  if (ECS.collisionBoard[position.y + x][position.x + y + 1]) {
    return true;
  }
  if (ECS.collisionBoard[position.y + x][position.x + y - 1]) {
    return true;
  }
  return false;
}

function addToCollisionBoard(shape, position) {
  for (var x = 3; x >= 0; x--) {
    for (var y = 0; y <= 3; y++) {
      if (shape[x][y] === true) {
        ECS.collisionBoard[position.y + x][position.x + y] = true;
      }
    }
  }
}

ECS.Systems.collision = function collisionSystem(entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];
    if (entity.components.collision && entity.components.position &&
        entity.components.playerControlled && entity.components.shape) {
          // Starting for the bottom
          // It is useless to start from top the way the shapes
          // are created in the array
          var shape = entity.components.shape.tetrimino;
          var position = entity.components.position;
          for (var x = 3; x >= 0; x--) {
            for (var y = 0; y <= 3; y++) {
              if (shape[x][y]) {
                if (collides(shape, position, x, y)) {
                  // console.log ("Collision detected!");
                  // console.log ("--- Adding shape to collision detected!");
                  addToCollisionBoard(entity.components.shape.tetrimino, entity.components.position);
                  // console.log ("--- Removing PlayerControlled");
                  entity.removeComponent(ECS.Components.PlayerControlled);
                  // console.log ("--- Removing Gravity");
                  entity.removeComponent(ECS.Components.Gravity);
                  return;
                }

                if (invalidLocation(shape, position, x, y)) {
                  console.log ("unable to move to that location");
                }
              }
            }
          }
        }
  }
};

