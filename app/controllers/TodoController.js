import { AppState } from "../AppState.js"
import { toDoService } from "../services/TodoService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawToDo() {

    const toDo = AppState.toDo

    setHTML('toDoList', toDo.ListButtonHTMLTemplate)
}

export class ToDoController {
    constructor() {
        console.log('To do controller loaded');

        this.getToDo()

        AppState.on('toDo', _drawToDo)

    }

    async getToDo() {
        try {
            await toDoService.getToDo()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
}