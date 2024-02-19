export class ToDo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
    }

    get ListButtonHTMLTemplate() {
        return `
        <div class="mb-2">
        <button class="btn btn-info w-75">${this.description}</button>
      </div>
        `
    }
}