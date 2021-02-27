export default class Task {
    constructor(data) {
        this.description = data.description
        this._id = data._id
        this.user = data.user || "ethan"
        this.completed = data.completed || false
    }

    get Template() {
        return /*html*/ `
        <div class="ml-2 mb-2">
            ${this.description}
            <div class="w-50 ml-5 d-inline">
                <button class="task-item-button btn btn-dark ${this.completed ? 'text-success' : 'text-info'}" onclick="app.taskController.toggle('${this}')">${this.completed ? '✓' : '!'}</button>
                <button class="task-item-button btn btn-dark text-danger" onclick="app.taskController.delTask('${this._id}')">X</button>
            </div>
        </div>
        `
    }
}