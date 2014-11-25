'use strict';

ECS.Components.Shape = function ShapeComponent (tetrimino) {
  switch (tetrimino) {
    case ECS.Components.Shape.prototype.tetrominoes.I:
      this.tetrimino = [
        [false,false,false,false],
        [true,true,true,true],
        [false,false,false,false],
        [false,false,false,false]
          ];
      break;
    case ECS.Components.Shape.prototype.tetrominoes.O:
      this.tetrimino = [
        [false,true,true,false],
        [false,true,true,false],
        [false,false,false,false],
        [false,false,false,false]
          ];
      break;
    case ECS.Components.Shape.prototype.tetrominoes.J:
      this.tetrimino = [
        [true,false,false],
        [true,true,true],
        [false,false,false]
          ];
      break;
    case ECS.Components.Shape.prototype.tetrominoes.L:
      this.tetrimino = [
        [false,false,true],
        [true,true,true],
        [false,false,false]
          ];
      break;
    case ECS.Components.Shape.prototype.tetrominoes.S:
      this.tetrimino = [
        [false,true,true],
        [true,true,false],
        [false,false,false]
          ];
      break;
    case ECS.Components.Shape.prototype.tetrominoes.T:
      this.tetrimino = [
        [false,true,false],
        [true,true,true],
        [false,false,false]
          ];
      break;
    case ECS.Components.Shape.prototype.tetrominoes.Z:
      this.tetrimino = [
        [true,true,false],
        [false,true,true],
        [false,false,false]
          ];
      break;
  }
};

// Source : http://jsfiddle.net/MrPolywhirl/NH42z/
ECS.Components.Shape.prototype.transpose = function transpose() {
  var result = new Array(this.tetrimino[0].length);
  for (var i = 0; i < this.tetrimino[0].length; i++) {
    result[i] = new Array(this.tetrimino.length - 1);
    for (var j = this.tetrimino.length - 1; j > -1; j--) {
      result[i][j] = this.tetrimino[j][i];
    }
  }
  this.tetrimino = result;
}

ECS.Components.Shape.prototype.reverseRows = function reverseRows() {
  this.tetrimino = this.tetrimino.reverse();
}

ECS.Components.Shape.prototype.rotateClockwise = function rotateClockwise() {
  this.transpose();
  this.reverseRows();
}

ECS.Components.Shape.prototype.rotateCounterclockwise = function rotateCounterclockwise() {
  this.reverseRows();
  this.transpose();
}

ECS.Components.Shape.prototype.tetrominoes = {
  I: 1,
  J: 2,
  L: 3,
  O: 4,
  S: 5,
  T: 6,
  Z: 7,
  properties: {
    1: {value: 1, code: "I"},
    2: {value: 2, code: "J"},
    3: {value: 3, code: "L"},
    4: {value: 4, code: "O"},
    5: {value: 5, code: "S"},
    6: {value: 6, code: "T"},
    7: {value: 7, code: "Z"}
  }
};


ECS.Components.Shape.prototype.name = 'shape';
