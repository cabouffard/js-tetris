'use strict';

var Game = Game || {};

// Source: http://codepen.io/ihabfaraj/pen/auglk/
Game.ECS.Components.Color = function ColorComponent (shape, insideBorder, inside) {
  this.shape = shape || 'rgb(59, 84, 165)';
  this.insideBorder = insideBorder || 'rgb(79, 111, 182)';
  this.inside = inside || 'rgb(118, 137, 196)';

  return this;
};

Game.ECS.Components.Color.prototype.name = 'color';
