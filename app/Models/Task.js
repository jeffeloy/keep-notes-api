"use strict";

/* @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Task extends Model {
  getFinished(finished) {
    if (finished == 0) {
      return false;
    }
    return true;
  }
}

module.exports = Task;
