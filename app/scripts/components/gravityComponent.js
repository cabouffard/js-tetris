'use strict';

ECS.Components.Gravity = function GravityComponent (speed) {
  // Default values
  speed = speed || 1;

  this.speed = speed;
  this.waiting = false;

  return this
};

ECS.Components.Gravity.prototype.name = 'gravity';

