'use strict';

var Game = Game || {};

Game.ECS.Systems.gameState = function gameState () {
  for (var x = 0; x < Game.Board.verticalSquares; x++) {
    if (Game.ECS.collisionBoard[0][x]) {
      console.log ('game done!');
      Game.$canvas.style.borderColor = 'red';

      Game.paused = true;
    }
  }
};

