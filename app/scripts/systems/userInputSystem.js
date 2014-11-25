'use strict';

var userInput = {
  x: 0,
  y: 0,
  clockwise: false,
  counterClockwise: false
};

function edgeCases(entity) {
  if (entity.components.position.x > 10) {
    entity.components.position.x = 10;
  }
  else if (entity.components.position.x < 1) {
    entity.components.position.x = 1;
  }

  if (entity.components.position.y > 20) {
    entity.components.position.y = 20;
  }
  else if (entity.components.position.y < 1) {
    entity.components.position.y = 1;
  }
}

function keyDownHandler(event) {
  switch (event.keyCode) {
    // left
    case 37:
      userInput.x -= 1;
      break;
    // up
    case 38:
      userInput.y -= 1;
      break;
    // right
    case 39:
      userInput.x += 1;
      break;
    // down
    case 40:
      userInput.y += 1;
      break;
    // m
    case 77:
      userInput.clockwise = true;
      break;
    // n
    case 78:
      userInput.counterClockwise = true;
      break;
    default:
      console.log('Key not handled: ' + event.keyCode);
      break;
  }
}

ECS.$canvas.addEventListener('keydown', keyDownHandler, false);

ECS.Systems.userInput = function userInputSystem (entities) {

  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.playerControlled && entity.components.position) {
      entity.components.position.x += userInput.x;
      entity.components.position.y += userInput.y;
      edgeCases(entity);
      if (entity.components.shape) {
        if (userInput.clockwise) {
          entity.components.shape.rotateClockwise();
        }
        else if (userInput.counterClockwise) {
          entity.components.shape.rotateCounterclockwise();
        }
      }
    }
  }
  userInput.x = 0;
  userInput.y = 0;
  userInput.clockwise = false;
  userInput.counterClockwise = false;
};

