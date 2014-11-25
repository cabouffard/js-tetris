'use strict';

ECS.Components.Grid = function GridComponent (width, height) {
  this.width = 10;
  this.height = 20;

  return this
};

ECS.Components.Grid.prototype.name = 'grid';
