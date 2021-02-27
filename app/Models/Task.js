export default class Task {
    constructor(data) {
        this.description = data.description
        this._id = data._id
        this.user = data.user || "ethan"
        this.completed = data.completed || false
    }

    get Template() {
        return /*html*/ `
        <div class="d-flex justify-content-between align-items-center m-1">
            <div class="d-inline">${this.description}</div>
            <div class="d-inline">
                <button class="task-item-button btn ${this.completed ? 'text-dark btn-success' : 'text-info btn-dark border-gray'}" onclick="app.taskController.toggle('${this._id}')"><strong>✓</strong></button>
                <button class="task-item-button btn ${this.completed ? 'text-dark btn-danger' : 'text-danger btn-dark border-gray'}" onclick="app.taskController.delTask('${this._id}')"><strong>X</strong></button>
            </div>
        </div>
        `
    }
}