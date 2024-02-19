import { toDoService } from "../services/TodoService.js"
import { Pop } from "../utils/Pop.js"

export class TodoController {
    constructor() {
        console.log('To do controller loaded');
    }

    async createToDo() {
        try {
            await toDoService.createToDo()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
}