'use strict';

var Game = Game || {};

function invalidLocation(shape, position, x, y) {
  if (Game.ECS.collisionBoard[position.y + x][position.x + y + position.xVelocity]) {
    return true;
  }
  // You are not allowed to go overboard (<- lol)
  if (position.x + y + position.xVelocity >= Game.Board.verticalSquares) {
    return true;
  }

  if (position.x + y + position.xVelocity < 0) {
    return true;
  }

  return false;
}

function addToCollisionBoard(shape, position) {
  for (var x = 3; x >= 0; x--) {
    for (var y = 0; y <= 3; y++) {
      if (shape[x][y]) {
        Game.ECS.collisionBoard[position.y + x][position.x + y] = 1;
      }
    }
  }
}

function collides(shape, position, x, y) {
  // If there is no pieces on the bottom row
  // we still count it as a collision
  if (position.y + x + position.yVelocity >= Game.Board.horizontalSquares) {
    return true;
  }
  if (Game.ECS.collisionBoard[position.y + x + position.yVelocity][position.x + y]) {
    return true;
  }

  return false;
}

function collisionDetection(entity){
  var shape = entity.components.shape.tetrimino;
  var position = entity.components.position;

  // Starting for the bottom
  // It is useless to start from top the way the shapes
  // are created in the array
  for (var x = 3; x >= 0; x--) {
    for (var y = 0; y <= 3; y++) {

      if (shape[x][y]) {
        if (invalidLocation(shape, position, x, y)) {
          position.xVelocity = 0;
        }
        if (collides(shape, position, x, y)) {
          position.yVelocity = 0;
          // entity.removeComponent(Game.ECS.Components.Gravity);
          entity.removeComponent(Game.ECS.Components.PlayerControlled);
          addToCollisionBoard(entity.components.shape.tetrimino, entity.components.position);
          return;
        }
      }
    }
  }
}

Game.ECS.collisionBoard = [];
(function initCollisionBoard() {
  var array = new Array(Game.Board.horizontalSquares);
  for (var i = 0; i < Game.Board.horizontalSquares; i++) {
    array[i] = new Array(Game.Board.verticalSquares);
    // TODO: fix this, this is fugly
    for (var j = 0; j < Game.Board.verticalSquares; j++) {
      array[i][j] = 0;
    }
  }

  Game.ECS.collisionBoard = array;
}());


Game.ECS.Systems.collision = function collisionSystem(entities) {
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.collision && entity.components.position && entity.components.shape) {
          collisionDetection(entity);
        }
  }
};
