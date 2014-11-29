'use strict';

var Game = Game || {};

function generateRandomPiece() {
  var randomNumber = Math.floor(Math.random() * 7 + 1);
  switch (randomNumber) {
    case 1:
      return new Game.ECS.Assemblages.ITetromino();
    case 2:
      return new Game.ECS.Assemblages.OTetromino();
    case 3:
      return new Game.ECS.Assemblages.JTetromino();
    case 4:
      return new Game.ECS.Assemblages.LTetromino();
    case 5:
      return new Game.ECS.Assemblages.STetromino();
    case 6:
      return new Game.ECS.Assemblages.ZTetromino();
    case 7:
      return new Game.ECS.Assemblages.TTetromino();
  }
}


function addNewTetrimino() {
  var entity = generateRandomPiece();
  Game.ECS.Entities[entity.id] = entity;
}

Game.ECS.Systems.randomizer = function randomizerSystem (entities) {
  var needNewPiece = true;
  var entity;

  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.playerControlled) {
      needNewPiece = false;
      break;
    }
  }

  if (needNewPiece) {
    console.log ('We need a new piece sir!');
    addNewTetrimino();
  }
};

