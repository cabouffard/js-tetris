'use strict';

var systems = [];
var entities = {};

var entity = new ECS.Assemblages.ITetromino();
entities[entity.id] = entity;

ECS.Entities = entities;

systems = [
  ECS.Systems.gravity,
  ECS.Systems.userInput,
  ECS.Systems.collision,
  ECS.Systems.render
];

Board.verticalSquares = 10;
Board.horizontalSquares = 20;
Board.width = ECS.$canvas.width;
Board.height = ECS.$canvas.height;
Board.unitWidth = Board.width / Board.verticalSquares;
Board.unitHeight = Board.height / Board.horizontalSquares;

function gameLoop() {
  for (var i=0, len=systems.length; i < len; i++) {
    systems[i](ECS.Entities);
  }

  if (self.running !== false) {
    requestAnimationFrame(gameLoop);
  }
}

requestAnimationFrame(gameLoop);
