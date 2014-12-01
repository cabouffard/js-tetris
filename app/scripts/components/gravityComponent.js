'use strict';

var Game = Game || {};

function getGravitySpeed () {


}

Game.ECS.Components.Gravity = function GravityComponent (speed) {
  // Default values
  speed = speed || getGravitySpeed();

  this.speed = 1 / Game.Stats.currentLevel;
  this.waiting = false;

  return this;
};

Game.ECS.Components.Gravity.prototype.name = 'gravity';


