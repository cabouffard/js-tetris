'use strict';

var Game = Game || {};

Game.fps = 30;
Game.maxFrameSkip = 10;
Game.skipTicks = 1000 / Game.fps;

Game.initialize = function() {
  Game.ECS = {};
  Game.ECS.Entities = {};
  Game.ECS.Components = {};
  Game.ECS.Assemblages = {};
  Game.ECS.Systems = [];

  Game.NextPiece = {};
  Game.NextPiece.$canvas = document.getElementById('nextPieceCanvas');
  Game.NextPiece.context = Game.NextPiece.$canvas.getContext('2d');
  Game.NextPiece.verticalSquares = 5;
  Game.NextPiece.horizontalSquares = 5;
  Game.NextPiece.width = Game.NextPiece.$canvas.width;
  Game.NextPiece.height = Game.NextPiece.$canvas.height;
  Game.NextPiece.unitWidth = Game.NextPiece.width / Game.NextPiece.verticalSquares;
  Game.NextPiece.unitHeight = Game.NextPiece.height / Game.NextPiece.horizontalSquares;
  Game.NextPiece.isSet = false;
  Game.NextPiece.hasChanged = true;

  Game.Stats = {};
  Game.Stats.$canvas = document.getElementById('statsCanvas');
  Game.Stats.context = Game.Stats.$canvas.getContext('2d');
  Game.Stats.width = Game.Stats.$canvas.width;
  Game.Stats.height = Game.Stats.$canvas.height;
  Game.Stats.tetrominos = { I: 0, J: 0, L: 0, Z: 0, S: 0, O: 0, T: 0 };
  Game.Stats.linesCleared = 0;
  Game.Stats.currentLevel = 1;

  Game.Board = {};
  Game.Board.$canvas = document.getElementById('tetrisCanvas');
  Game.Board.context = Game.Board.$canvas.getContext('2d');
  Game.Board.verticalSquares = 10;
  Game.Board.horizontalSquares = 20;
  Game.Board.width = Game.Board.$canvas.width;
  Game.Board.height = Game.Board.$canvas.height;
  Game.Board.unitWidth = Game.Board.width / Game.Board.verticalSquares;
  Game.Board.unitHeight = Game.Board.height / Game.Board.horizontalSquares;
};

Game.update = function(tick) {
  Game.tick = tick;
  for (var i = 0, len = Game.ECS.Systems.length; i < len; i++) {
    Game.ECS.Systems[i](Game.ECS.Entities);
  }
};

Game.pause = function() {
  Game.paused = (this.paused) ? false : true;
  if (this.paused) {
    console.log ('Game Paused !');
  } else {
    console.log ('Game Unpaused !');
  }
};

Game.restart = function() {
  Game.ECS.Entities = {};
  Game.NextPiece.isSet = false;
  Game.NextPiece.hasChanged = true;
  Game.Stats.tetrominos = { I: 0, J: 0, L: 0, Z: 0, S: 0, O: 0, T: 0 };
  Game.Stats.linesCleared = 0;
  Game.paused = false;

  console.log ('Game Restarted !');
  console.log ('Current bug -> CollisionBoard not cleared');
};

Game.run = (function() {
  var loops = 0;
  var nextGameTick = Date.now();
  var startTime = Date.now();
  return function() {
    loops = 0;
    while (!Game.paused && Date.now() > nextGameTick && loops < Game.maxFrameSkip) {
      Game.update(nextGameTick - startTime);
      nextGameTick += Game.skipTicks;
      startTime = Date.now();
      loops++;
    }
  };
}());

// Source : http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
(function() {
    var onEachFrame;
    if (window.webkitRequestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() {
                cb();
                webkitRequestAnimationFrame(_cb);
            };
            _cb();
        };
    } else if (window.mozRequestAnimationFrame) {
        onEachFrame = function(cb) {
            var _cb = function() {
                cb();
                mozRequestAnimationFrame(_cb);
            };
            _cb();
        };
    } else {
        onEachFrame = function(cb) {
            setInterval(cb, Game.skipTicks);
        };
    }
    window.onEachFrame = onEachFrame;
})();

Game.initialize();
