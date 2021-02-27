import {
    ProxyState
} from "../AppState.js";
import Task from "../Models/Task.js";
import {
    apiTODO
} from "./AxiosService.js";

class TaskService {
    async getTasks() {
        try {
            const res = await apiTODO.get('')
            ProxyState.tasks = res.data.map(t => new Task(t))
            this.countComplete()
        } catch (error) {
            console.error(error);
        }
    }

    async addTask(rawTask) {
        try {
            await apiTODO.post('', new Task(rawTask))
            ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
            this.getTasks() // Must get tasks again for ID in case of immediate deletion.
        } catch (error) {
            console.error(error);
        }
    }

    async delTask(id) {
        try {
            apiTODO.delete(id)
            ProxyState.tasks = ProxyState.tasks.filter(t => t._id != id)
            this.countComplete()
        } catch (error) {
            console.error(error)
        }
    }

    async toggle(id) {
        try {
            let task = ProxyState.tasks.filter(t => t._id == id)[0]
            task.completed = !task.completed
            ProxyState.tasks.splice(ProxyState.tasks.findIndex(t => t._id == id), 1, task)
            ProxyState.tasks = ProxyState.tasks
            this.countComplete()
            await apiTODO.delete(id)
            apiTODO.post('', new Task(task))
        } catch (error) {
            console.error(error);
        }
    }

    countComplete() {
        ProxyState.completecount = 0
        ProxyState.tasks.forEach(t => t.completed ? ProxyState.completecount++ : ProxyState.completecount = ProxyState.completecount)
    }

}

export const taskService = new TaskService();