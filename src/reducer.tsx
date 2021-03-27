import {Todo} from './App'
export type Actions = | {
    type: "ADD" | "REMOVE" | "EDIT" | "MARK",
    text?: string | undefined,
    id: string | undefined,
    completed?: Boolean;
}
type State = {todoList: Todo[]}

const reducer = (todo: State, action: Actions): State => {
    const {type, text, id} = action
    if (type === "ADD"){
        let singleTodo: Todo = {text: text, id: id}
        console.log(todo);
        return {...todo, todoList: [...todo.todoList, singleTodo]}
   
    } else if (type === "REMOVE"){
        const newTodo: Todo[] = todo.todoList.filter(el => el.id !== id)
        
        return {...todo, todoList: newTodo}
    }
    return todo;
}

export default reducer;