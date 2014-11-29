'use strict';

var Game = Game || {};

Game.ECS.Components.Collision = function CollisionComponent() {
  this.collides = true;

  return this;
};

Game.ECS.Components.Collision.prototype.name = 'collision';
