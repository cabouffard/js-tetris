'use strict';

var Game = Game || {};

Game.ECS.Systems.gameState = function gameState () {
  for (var x = 0; x < Game.Board.verticalSquares; x++) {
    if (Game.ECS.collisionBoard[0][x]) {
      console.log ('game done!');
      Game.context.font = 'italic 25pt Calibri';
      Game.context.fillText('Game Over !', 15, 100);
      Game.$canvas.style.borderColor = 'red';

      Game.paused = true;
    }
  }
};

