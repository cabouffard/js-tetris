'use strict';

var Game = Game || {};

// Source: http://stackoverflow.com/a/8809472
function generateUUID(){
    var d = Date.now();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

Game.ECS.Entity = function Entity() {
  this.id = generateUUID();
  this.components = {};

  // Game.ECS.Entity.prototype._count;
  Game.ECS.Entity.prototype._count++;

  return this;
};

Game.ECS.Entity.prototype._count = 0;

Game.ECS.Entity.prototype.addComponent = function addComponent(component) {
  this.components[component.name] = component;
  return this;
};

// We can pass either a string or a component to the function
Game.ECS.Entity.prototype.removeComponent = function removeComponent(component) {
  var name = component;

  if (typeof name === 'function') {
    name = name.prototype.name;
  }

  delete this.components[name];

  return this;
};

Game.ECS.Entity.prototype.print = function print () {
  console.log(JSON.stringify(this, null, 2));
  return this;
};

