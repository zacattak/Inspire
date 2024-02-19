import { AppState } from "../AppState.js"
import { ToDo } from "../models/ToDo.js"
import { api } from "./AxiosService.js"

class ToDoService {

    async getToDos() {

        const response = await api.get('api/todos')
        console.log('got todo', response.data);

        const newToDos = response.data.map(toDoPOJO => new ToDo(toDoPOJO))
        AppState.toDos = newToDos

    }
    // setActiveToDo(toDoCreatorId) {
    //     const activeToDo = AppState.toDo.find(toDo => toDo.creatorId == toDoCreatorId)
    //     AppState.toDo = activeToDo
    // }

    async updateToDo(toDoId) {
        const updateData = { completed: true }

        const response = await api.put(`api/toDos/${toDoId}`, updateData)
        console.log('updated toDo', response.data);
        const toDoIndex = AppState.toDos.findIndex(toDo => toDo.id == toDoId)

        if (toDoIndex == -1) { return }

        const updatedToDo = new ToDo(response.data)

        AppState.toDos.splice(toDoIndex, 1, updatedToDo)

    }



    async createToDo(toDoFormData) {
        const response = await api.post('api/todos', toDoFormData)
        console.log('created toDo', response.data);
        const newToDo = new ToDo(response.data)
        AppState.toDos.unshift(newToDo)
    }

    async destroyToDo(toDoId) {
        const response = await api.delete(`api/todos/${toDoId}`)
        console.log('deleted toDo', response.data);
        const toDoIndex = AppState.toDos.findIndex(toDo => toDo.id == toDoId)
        if (toDoIndex == -1) { return }
        AppState.toDos.splice(toDoIndex, 1)
    }






}

export const toDoService = new ToDoService()