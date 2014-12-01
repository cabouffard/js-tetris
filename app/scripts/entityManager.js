'use strict';

var Game = Game || {};

Game.ECS.EntityManager = function EntityManager() {

  Game.ECS.EntityManager.prototype.name = 'entityManager';

  return this;
};

Game.ECS.EntityManager.prototype.addEntity = function addEntity(entity) {
  Game.ECS.Entities.push[entity.id] = entity;
};

Game.ECS.EntityManager.prototype.removeEntity = function removeEntity(entity) {
  delete Game.ECS.Entities[entity.id];
  console.log ('Removed entity id: ' + entity.id);
};

Game.ECS.EntityManager.prototype.getByComponent = function (component) {
  var name = component;

  if (typeof name === 'function') {
    name = name.prototype.name;
  }

  var entities = [];
  var entity;
  for (var entityId in Game.ECS.Entities) {
    entity = Game.ECS.Entities[entityId];
    for (var componentName in entity.components) {
      if (componentName === name) {
        entities.push(entity.id);
        break;
      }
    }
  }
  return entities;
};

Game.ECS.Test = new Game.ECS.EntityManager();
