'use strict';

ECS.Components.Position = function PositionComponent (x, y) {
  // Default values
  x = x || 4;
  y = y || 1;

  this.x = x;
  this.y = y;

  return this
};

ECS.Components.Position.prototype.name = 'position';
