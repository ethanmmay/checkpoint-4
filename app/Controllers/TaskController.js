import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";


//Private
function _drawTasks() {
    let template = ""
    ProxyState.tasks.forEach(t => template += t.Template)
    document.getElementById('tasksArea').innerHTML = template
}

//Public
export default class TaskController {
  constructor() {
    ProxyState.on("tasks", _drawTasks);
    this.getTasks()
  }

  getTasks() {
    taskService.getTasks()
  }

  addTask(event) {
    event.preventDefault()
    if (event.target.description.value == "") {
        window.alert("Cannot have an empty task.")
    } else {
    let rawTask = {description: event.target.description.value}
    taskService.addTask(rawTask)
    }
    
  }

  delTask(id) {
      taskService.delTask(id)
  }

  toggle(task) {
      taskService.toggle(task)
  }

}
