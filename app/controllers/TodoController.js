import { AppState } from "../AppState.js"
import { toDoService } from "../services/ToDoService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawToDos() {

    const toDos = AppState.toDos
    let htmlString = ''
    toDos.forEach(toDo => htmlString += toDo.ListButtonHTMLTemplate)

    setHTML('toDoList', htmlString)

    const updatedToDos = toDos.filter(toDo => toDo.completed)

    setHTML('checkedCount', `${updatedToDos.length}/${toDos.length}`)

}

export class ToDoController {
    constructor() {
        console.log('To do controller loaded');
        AppState.on('account', this.getToDos)
        AppState.on('toDos', _drawToDos)

        // this.getToDo()


    }

    async getToDos() {
        try {
            await toDoService.getToDos()
        } catch (error) {
            console.error(error);
            Pop.error(error)
        }
    }
    // setActiveToDo(toDoCreatorId) {
    //     console.log('setting todo', toDoCreatorId)
    // }
    async updateToDo(toDoId) {
        try {
            await toDoService.updateToDo(toDoId)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async createToDo() {
        try {
            event.preventDefault()
            const form = event.target
            const toDoFormData = getFormData(form)
            await toDoService.createToDo(toDoFormData)
            //@ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async destroyToDo(toDoId) {
        try {
            const wantsToDestroy = await Pop.confirm('Are you sure you want to delete this?')
            if (!wantsToDestroy) {
                return
            }

            await toDoService.destroyToDo(toDoId)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }










}