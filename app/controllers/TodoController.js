import { AppState } from "../AppState.js"
import { toDoService } from "../services/ToDoService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawToDo() {

    const toDo = AppState.toDo

    setHTML('toDoList', toDo.InfoCardHTMLTemplate)
}

export class ToDoController {
    constructor() {
        console.log('To do controller loaded');
        AppState.on('toDo', _drawToDo)

        this.getToDo()


    }

    async getToDo() {
        try {
            await toDoService.getToDo()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
    setActiveToDo(toDoCreatorId) {
        console.log('setting todo', toDoCreatorId)
    }
}