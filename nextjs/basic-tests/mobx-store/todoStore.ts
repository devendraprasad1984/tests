import {makeAutoObservable} from "mobx";

export interface ITodoModel {
    id: number,
    text: string,
    done: boolean
}

class TodoStore {
    todoList: ITodoModel[] = []
    todo: ITodoModel = this.initTodo()

    constructor() {
        makeAutoObservable(this) //observes changes on this class context and rerenders the UI when changes happen from anywhere in app
    }

    initTodo() {
        return {
            id: this.todoList.length + 1,
            text: '',
            done: false
        }
    }

    addTodo() {
        console.log(`inside add to ${this.todo}`)
        this.todoList.push(this.todo)
        this.todo = this.initTodo()
    }
}

const todoStore = new TodoStore()
export default todoStore