'use strict';

var Game = Game || {};

Game.ECS.Components.Position = function PositionComponent (x, y) {
  // Default values
  x = x || 3;
  y = y || 0;

  this.x = x;
  this.y = y;
  this.yVelocity = 0;
  this.xVelocity = 0;

  return this;
};

Game.ECS.Components.Position.prototype.name = 'position';
