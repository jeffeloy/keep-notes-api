"use strict";

const Task = use("App/Models/Task");

class TaskController {
  async index() {
    return await Task.all();
  }

  async store({ request, response }) {
    const task = new Task();

    const params = request.post();

    task.description = params.description;
    task.finished = params.finished;

    const saved = await task.save();

    if (saved) {
      response.created(task);
    } else {
      response.unprocessableEntity();
    }
  }

  async update({ params, request }) {
    const task = await Task.findOrFail(params.id);
    const data = request.only(["finished"]);

    task.merge(data);
    await task.save();

    return task;
  }
  async destroy({ params }) {
    const task = await Task.findOrFail(params.id);

    await task.delete();
  }
}

module.exports = TaskController;
