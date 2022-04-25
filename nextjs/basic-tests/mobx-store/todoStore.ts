import {configure, makeAutoObservable, observable} from "mobx";

export interface ITodoItem {
    id: number,
    text: string,
    done: boolean
}

configure({
    enforceActions: 'never'
})

class TodoStore {
    todoList: ITodoItem[] = []
    todo: ITodoItem = this.initTodo()

    constructor() {
        makeAutoObservable(this, {
            todoList: observable,
            todo: observable
        })
        // 2 args: 1 - this context, all props point to observer
        //observes changes on this class context and rerenders the UI when changes happen from anywhere in app
    }

    initTodo() {
        return {
            id: this.todoList.length + 1,
            text: '',
            done: false
        }
    }

    //action
    addTodo() {
        console.log(`inside add to ${this.todo}`)
        this.todoList.push(this.todo)
        this.todo = this.initTodo()
    }
}

const todoStore = new TodoStore()
export default todoStore