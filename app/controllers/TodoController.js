import { todoService } from "../services/TodoService.js"
import { Pop } from "../utils/Pop.js"

export class TodoController {
    constructor() {
        console.log('To do controller loaded');
    }

    async createImage() {
        try {
            await todoService.createTodo()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
}