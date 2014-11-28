function addNewTetrimino(isFirstPiece) {
  if (isFirstPiece) {
    console.log ('First piece mate !');
    var entity = new ECS.Assemblages.JTetromino();
    ECS.Entities[entity.id] = entity;
  } else {
    var entity = new ECS.Assemblages.OTetromino();
    ECS.Entities[entity.id] = entity;
  }
}

ECS.Systems.randomizer = function randomizerSystem (entities) {
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
    console.log ("We need a new piece sir!");
    var newEntity = new ECS.Assemblages.JTetromino();
    ECS.Entities[newEntity.id] = newEntity;
  }
};


