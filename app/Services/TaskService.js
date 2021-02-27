import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { apiTODO } from "./AxiosService.js";

class TaskService {
    async getTasks() {
        try {
            const res = await apiTODO.get('')
            ProxyState.tasks = res.data.map(t => new Task(t))
            console.log(ProxyState.tasks)
        } catch (error) {
            console.error(error);
        }
    }

    async addTask(rawTask) {
        let task = new Task(rawTask)
        try {
            const res = await apiTODO.post('', task)
            console.log(res)
            this.getTasks()
        } catch (error) {
            console.error(error);
        }
    }

    async delTask(id) {
        try {
            const res = await apiTODO.delete(id)
            this.getTasks()
            console.log(res)
        } catch (error) {
            console.error(error);
        }
    }

    async toggle(task) {
        try {
            task.completed = !task.completed
            const res = await apiTODO.put('', task)
            this.getTasks()

        } catch (error) {
            console.error(error);
        }
    }
}

export const taskService = new TaskService();

