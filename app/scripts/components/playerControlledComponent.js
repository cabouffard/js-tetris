'use strict';

var Game = Game || {};

Game.ECS.Components.PlayerControlled = function PlayerControlledComponent() {
  this.pc = true;

  return this;
};

Game.ECS.Components.PlayerControlled.prototype.name = 'playerControlled';
