import {
  ProxyState
} from "../AppState.js";
import {
  taskService
} from "../Services/TaskService.js";

//Private
function _drawTasks() {
  let template = ""
  ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById('tasksArea').innerHTML = template
}

function _drawCompleted() {
  document.getElementById('collapser').innerText = `${document.getElementById('collapsable').classList.contains('hidden') ? "" : "TODO - "}${ProxyState.completecount}/${ProxyState.tasks.length} Complete`
}

//Public
export default class TaskController {
  constructor() {
    this.getTasks()
    this.countComplete()
    ProxyState.on("tasks", _drawTasks);
    ProxyState.on("completecount", _drawCompleted)
  }

  getTasks() {
    taskService.getTasks()
  }

  addTask(event) {
    event.preventDefault()
    if (event.target.description.value == "") {
      window.alert("Cannot have an empty task.")
    } else {
      let rawTask = {
        description: event.target.description.value
      }
      taskService.addTask(rawTask)
      event.target.reset()
    }
  }

  delTask(id) {
    taskService.delTask(id)
  }

  toggle(id) {
    taskService.toggle(id)
  }

  toggleHide() {
    let collapsing = document.getElementById('collapsable')
    if (collapsing.classList.contains('hidden')) {
      collapsing.classList.remove('hidden')
      collapsing.classList.add('mt-4')
    } else {
      collapsing.classList.add('hidden')
      collapsing.classList.remove('mt-4')
    }
  }

  countComplete() {
    taskService.countComplete()
  }
}