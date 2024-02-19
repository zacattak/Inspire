import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"

class ToDoService {
    async getToDo() {

        const response = await api.get('api/todos')
        console.log('got todo', response.data);

        const newToDo = new ToDo(response.data)
        AppState.toDo = newToDo

    }
    setActiveToDo(toDoCreatorId) {
        const activeToDo = AppState.toDo.find(toDo => toDo.creatorId == toDoCreatorId)
        AppState.toDo = activeToDo
    }
}

export const toDoService = new ToDoService()