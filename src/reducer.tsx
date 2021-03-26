import {Todo} from './App'
export type Actions = | {
    type: "ADD" | "REMOVE" | "EDIT" | "MARK",
    text: string,
    id: string,
    completed?: Boolean;
}
type State = {todoList: Todo[]}

const reducer = (todo: State, action: Actions): State => {
    const {type, text, id} = action
    if (type === "ADD"){
        let singleTodo: Todo = {text: text, id: id}
        console.log(todo);
        return {...todo, todoList: [...todo.todoList, singleTodo]}
        
    }
    return todo;
}

export default reducer;