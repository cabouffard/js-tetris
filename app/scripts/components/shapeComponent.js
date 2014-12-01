'use strict';

var Game = Game || {};

Game.ECS.Components.Shape = function ShapeComponent (tetromino) {
  switch (tetromino) {
    case Game.ECS.Components.Shape.prototype.tetrominoes.I:
      this.tetromino = [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.O:
      this.tetromino = [
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.J:
      this.tetromino = [
        [1,0,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.L:
      this.tetromino = [
        [0,0,1,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.S:
      this.tetromino = [
        [0,1,1,0],
        [1,1,0,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.T:
      this.tetromino = [
        [0,1,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.Z:
      this.tetromino = [
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
  }
};

// Source : http://jsfiddle.net/MrPolywhirl/NH42z/
Game.ECS.Components.Shape.prototype.transpose = function transpose() {
  var result = new Array(this.tetromino[0].length);
  for (var i = 0; i < this.tetromino[0].length; i++) {
    result[i] = new Array(this.tetromino.length - 1);
    for (var j = this.tetromino.length - 1; j > -1; j--) {
      result[i][j] = this.tetromino[j][i];
    }
  }
  this.tetromino = result;
};

Game.ECS.Components.Shape.prototype.reverseRows = function reverseRows() {
  this.tetromino = this.tetromino.reverse();
};

Game.ECS.Components.Shape.prototype.rotateClockwise = function rotateClockwise() {
  this.transpose();
  this.reverseRows();
};

Game.ECS.Components.Shape.prototype.rotateCounterclockwise = function rotateCounterclockwise() {
  this.reverseRows();
  this.transpose();
};

Game.ECS.Components.Shape.prototype.tetrominoes = {
  I: 1,
  J: 2,
  L: 3,
  O: 4,
  S: 5,
  T: 6,
  Z: 7
};

Game.ECS.Components.Shape.prototype.name = 'shape';
