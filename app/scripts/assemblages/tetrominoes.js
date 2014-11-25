'use strict';

ECS.Assemblages.ITetromino = function ITetromino() {
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Color('rgb(214, 30, 60)',
                                              'rgb(241, 108, 107)',
                                              'rgb(236, 42, 75)'));
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.PlayerControlled());
  entity.addComponent(new ECS.Components.Collision());
  entity.addComponent(new ECS.Components.Gravity());
  entity.addComponent(new ECS.Components.Shape(ECS.Components.Shape.prototype.tetrominoes.I));
  return entity;
}

ECS.Assemblages.JTetromino = function JTetromino() {
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Color('rgb(220, 159, 39)',
                                              'rgb(246, 197, 100)',
                                              'rgb(242, 181, 42)'));
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.PlayerControlled());
  entity.addComponent(new ECS.Components.Collision());
  entity.addComponent(new ECS.Components.Gravity());
  entity.addComponent(new ECS.Components.Shape(ECS.Components.Shape.prototype.tetrominoes.J));
  return entity;
}

ECS.Assemblages.LTetromino = function LTetromino() {
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Color('rgb(158, 35, 126)',
                                              'rgb(192, 111, 173)',
                                              'rgb(179, 63, 151)'));
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.PlayerControlled());
  entity.addComponent(new ECS.Components.Collision());
  entity.addComponent(new ECS.Components.Gravity());
  entity.addComponent(new ECS.Components.Shape(ECS.Components.Shape.prototype.tetrominoes.L));
  return entity;
}

ECS.Assemblages.OTetromino = function OTetromino() {
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Color('rgb(59, 84, 165)',
                                              'rgb(118, 137, 196)',
                                              'rgb(79, 111, 182)'));
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.PlayerControlled());
  entity.addComponent(new ECS.Components.Collision());
  entity.addComponent(new ECS.Components.Gravity());
  entity.addComponent(new ECS.Components.Shape(ECS.Components.Shape.prototype.tetrominoes.O));
  return entity;
}

ECS.Assemblages.STetromino = function STetromino() {
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Color('rgb(236, 94, 36)',
                                              'rgb(234, 154, 84)',
                                              'rgb(228, 126, 37)'));
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.PlayerControlled());
  entity.addComponent(new ECS.Components.Collision());
  entity.addComponent(new ECS.Components.Gravity());
  entity.addComponent(new ECS.Components.Shape(ECS.Components.Shape.prototype.tetrominoes.S));
  return entity;
}

ECS.Assemblages.TTetromino = function TTetromino() {
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Color('rgb(62, 170, 212)',
                                              'rgb(120, 205, 244)',
                                              'rgb(54, 192, 240)'));
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.PlayerControlled());
  entity.addComponent(new ECS.Components.Collision());
  entity.addComponent(new ECS.Components.Gravity());
  entity.addComponent(new ECS.Components.Shape(ECS.Components.Shape.prototype.tetrominoes.T));
  return entity;
}

ECS.Assemblages.ZTetromino = function ZTetromino() {
  var entity = new ECS.Entity();
  entity.addComponent(new ECS.Components.Color('rgb(88, 178, 71)',
                                              'rgb(150, 204, 110)',
                                              'rgb(115, 191, 68)'));
  entity.addComponent(new ECS.Components.Position());
  entity.addComponent(new ECS.Components.PlayerControlled());
  entity.addComponent(new ECS.Components.Collision());
  entity.addComponent(new ECS.Components.Gravity());
  entity.addComponent(new ECS.Components.Shape(ECS.Components.Shape.prototype.tetrominoes.Z));
  return entity;
}
