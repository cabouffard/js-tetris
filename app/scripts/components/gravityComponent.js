'use strict';

var Game = Game || {};

Game.ECS.Components.Gravity = function GravityComponent (speed) {
  // Default values
  speed = speed || 1;

  this.speed = speed;
  this.waiting = false;

  return this;
};

Game.ECS.Components.Gravity.prototype.name = 'gravity';

