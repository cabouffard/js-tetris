'use strict';

ECS.Components.PlayerControlled = function PlayerControlledComponent() {
  this.pc = true;
  return this;
};

ECS.Components.PlayerControlled.prototype.name = 'playerControlled';
