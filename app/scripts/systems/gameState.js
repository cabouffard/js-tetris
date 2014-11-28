'use strict';

ECS.Systems.gameState = function gameState (entities) {
  for (var x = 0; x < Board.verticalSquares; x++) {
    if (ECS.collisionBoard[0][x]) {
      console.log ("game done!");
      ECS.$canvas.style.borderColor = "red";

      self.running = false;
    }
  }
};

