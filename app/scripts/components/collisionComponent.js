'use strict';

ECS.Components.Collision = function CollisionComponent() {
  this.collides = true;

  return this;
}

ECS.Components.Collision.prototype.name = 'collision';
