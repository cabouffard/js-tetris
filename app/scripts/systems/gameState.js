'use strict';

var Game = Game || {};

function showGameOver() {
  Game.Board.context.font = 'italic 25pt Calibri';
  Game.Board.context.fillStyle = '#000';
  Game.Board.context.fillText('Game Over!', 15, 100);

  var img = new Image();
  img.onload = function() {
    console.log ('done');
    Game.Board.context.drawImage(img, 15, 120, 175, 150);
  };
  img.src = 'images/game_over.png';

  Game.Board.$canvas.style.borderColor = 'red';

  Game.paused = true;
}

Game.ECS.Systems.gameState = function gameState () {
  for (var x = 0; x < Game.Board.verticalSquares; x++) {
    if (Game.ECS.collisionBoard[0][x]) {
      showGameOver();
    }
  }
};


