'use strict';

var Game = Game || {};

var userInput = {
  x: 0,
  y: 0,
  clockwise: false,
  counterClockwise: false,
  hardDrop: false
};

function keyDownHandler(event) {
  if (Game.paused && event.keyCode !== 80 && event.keyCode !== 82) {
    return;
  }

  switch (event.keyCode) {
    // left
    case 37:
      userInput.x = -1;
      break;
    // up, hard-drop
    case 32:
    case 38:
      userInput.hardDrop = true;
      break;
    // right
    case 39:
      userInput.x = 1;
      break;
    // down
    case 40:
      userInput.y = 1;
      break;
    // c
    case 67:
      userInput.clockwise = true;
      break;
    // v
    case 86:
      userInput.counterClockwise = true;
      break;
    // p
    case 80:
      Game.pause();
      break;
    // r
    case 82:
      Game.restart();
      break;
    default:
      console.log('Key not handled: ' + event.keyCode);
      break;
  }
}

// Unable to bind directly to canvas due to tab index
// This is a restriction of html5
window.addEventListener('keydown', keyDownHandler, false);

Game.ECS.Systems.userInput = function userInputSystem (entities) {

  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.playerControlled && entity.components.position) {
        entity.components.position.xVelocity += userInput.x;
        entity.components.position.yVelocity += userInput.y;

      if (entity.components.shape) {
        if (userInput.clockwise) {
          entity.components.shape.rotateClockwise();
        }
        else if (userInput.counterClockwise) {
          entity.components.shape.rotateCounterclockwise();
        }
      }
      if (entity.components.gravity) {
        if (userInput.hardDrop) {
          entity.components.gravity.hardDrop();
        }
      }
    }
  }
  userInput.x = 0;
  userInput.y = 0;
  userInput.clockwise = false;
  userInput.counterClockwise = false;
  userInput.hardDrop = false;
};

