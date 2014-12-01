'use strict';

var Game = Game || {};

Game.ECS.Components.Shape = function ShapeComponent (tetrimino) {
  switch (tetrimino) {
    case Game.ECS.Components.Shape.prototype.tetrominoes.I:
      this.tetrimino = [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.O:
      this.tetrimino = [
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.J:
      this.tetrimino = [
        [1,0,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.L:
      this.tetrimino = [
        [0,0,1,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.S:
      this.tetrimino = [
        [0,1,1,0],
        [1,1,0,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.T:
      this.tetrimino = [
        [0,1,0,0],
        [1,1,1,0],
        [0,0,0,0],
        [0,0,0,0]
          ];
      break;
    case Game.ECS.Components.Shape.prototype.tetrominoes.Z:
      this.tetrimino = [
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
  var result = new Array(this.tetrimino[0].length);
  for (var i = 0; i < this.tetrimino[0].length; i++) {
    result[i] = new Array(this.tetrimino.length - 1);
    for (var j = this.tetrimino.length - 1; j > -1; j--) {
      result[i][j] = this.tetrimino[j][i];
    }
  }
  this.tetrimino = result;
};

Game.ECS.Components.Shape.prototype.reverseRows = function reverseRows() {
  this.tetrimino = this.tetrimino.reverse();
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
