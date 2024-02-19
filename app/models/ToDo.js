export class ToDo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }

    get ListButtonHTMLTemplate() {
        return `
        <div class="mb-2">
        <button onclick="app.ToDoController.updateToDo('${this.id}')" ${this.completed ? 'disabled' : ''} class="btn btn-primary">
        ✅ 
        </button>
        <h2>  ${this.description}   </h2>
        <button onclick="app.ToDoController.destroyToDo('${this.id}')" class="btn btn-danger ">
        Delete </button>
        </div>
        `
    }
}

