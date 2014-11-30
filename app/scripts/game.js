'use strict';

var Game = Game || {};

Game.fps = 30;
Game.maxFrameSkip = 10;
Game.skipTicks = 1000 / Game.fps;

Game.initialize = function() {
  Game.$canvas = document.getElementById('tetrisCanvas');
  Game.context = Game.$canvas.getContext('2d');

  Game.ECS = {};
  Game.ECS.Entities = {};
  Game.ECS.Components = {};
  Game.ECS.Assemblages = {};
  Game.ECS.Systems = [];

  Game.Board = {};
  Game.Board.verticalSquares = 10;
  Game.Board.horizontalSquares = 20;
  Game.Board.width = Game.$canvas.width;
  Game.Board.height = Game.$canvas.height;
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
  // TODO: Temp way of doing this
  Game.ECS.Entities = {};
  console.log ('Game Restarted !');
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


