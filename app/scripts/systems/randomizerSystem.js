'use strict';

var Game = Game || {};

function generateRandomPiece() {
  var randomNumber = Math.floor(Math.random() * 7 + 1);
  switch (randomNumber) {
    case 1:
      Game.Stats.tetrominos.I++;
      return new Game.ECS.Assemblages.ITetromino(true);
    case 2:
      Game.Stats.tetrominos.O++;
      return new Game.ECS.Assemblages.OTetromino(true);
    case 3:
      Game.Stats.tetrominos.J++;
      return new Game.ECS.Assemblages.JTetromino(true);
    case 4:
      Game.Stats.tetrominos.L++;
      return new Game.ECS.Assemblages.LTetromino(true);
    case 5:
      Game.Stats.tetrominos.S++;
      return new Game.ECS.Assemblages.STetromino(true);
    case 6:
      Game.Stats.tetrominos.Z++;
      return new Game.ECS.Assemblages.ZTetromino(true);
    case 7:
      Game.Stats.tetrominos.T++;
      return new Game.ECS.Assemblages.TTetromino(true);
  }
}

function getNewtetromino() {
  var entity = generateRandomPiece();
  Game.ECS.Entities[entity.id] = entity;

  return entity;
}

Game.ECS.Systems.randomizer = function randomizerSystem (entities) {

  var entity;
  var needNewPiece = true;
  for (var entityId in entities) {
    entity = entities[entityId];

    if (entity.components.playerControlled) {
      needNewPiece = false;
      break;
    }
  }

  if (needNewPiece) {
    if (Game.NextPiece.isSet) {
      entityId = Game.ECS.Test.getByComponent(Game.ECS.Components.PlaceHolder)[0];
      entity = Game.ECS.Entities[entityId];
      entity.removeComponent(Game.ECS.Components.PlaceHolder);
      entity.addComponent(new Game.ECS.Components.Position());
      entity.addComponent(new Game.ECS.Components.PlayerControlled());
      entity.addComponent(new Game.ECS.Components.Collision());
      entity.addComponent(new Game.ECS.Components.Gravity());
      Game.NextPiece.isSet = false;
    }
  }

  if (!Game.NextPiece.isSet) {
    Game.NextPiece.tetromino = getNewtetromino();
    Game.NextPiece.isSet = true;
    Game.NextPiece.hasChanged = true;
  }
};

