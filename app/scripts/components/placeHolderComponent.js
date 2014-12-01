'use strict';

var Game = Game || {};

Game.ECS.Components.PlaceHolder = function PlaceHolderComponent() {
  this.ph = true;

  return this;
};

Game.ECS.Components.PlaceHolder.prototype.name = 'placeHolder';

