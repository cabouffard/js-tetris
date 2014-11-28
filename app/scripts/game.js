'use strict';

addNewTetrimino(true);

ECS.Systems = [
  ECS.Systems.randomizer,
  ECS.Systems.collision,
  ECS.Systems.gravity,
  ECS.Systems.userInput,
  ECS.Systems.render,
  ECS.Systems.gameState
];

function gameLoop() {
  for (var i = 0, len = ECS.Systems.length; i < len; i++) {
    ECS.Systems[i](ECS.Entities);
  }

  if (self.running !== false) {
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);
