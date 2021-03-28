import React, { useEffect, useReducer, useRef } from 'react';
import "./css/tailwind.css"
import TodoItem from './TodoItem';
import reducer from './reducer'

export interface Todo{
    text: string | undefined;
    id: string | undefined;
    completed?: Boolean;
}

type State = {
    todoList: Todo[];
}
let initialState: State = {
    todoList: JSON.parse(localStorage.getItem('todo') || '') || []
};

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const inputRef: React.LegacyRef<HTMLInputElement>  = useRef(null)
    let todoLocalStorage: Todo[] & string = JSON.parse(localStorage.getItem('todo') || '')
    useEffect(() => {
        document.querySelector('body')?.classList.add('bg-gray-600')
    }, [])

    const handleAdd = (e: (React.KeyboardEvent<HTMLInputElement> & React.MouseEvent<HTMLAnchorElement, MouseEvent>)) => {
        if (e.key === 'Enter' || e.type === 'click') {
            let element = inputRef.current;
            if (element?.value) {
                let id: string = Math.random().toString(36).substr(2, 9);
                dispatch({type: "ADD", text: element.value, id: id})
                element.value = ''
            }
        } 
        
    }

    useEffect(() => {
        
    }, [])
    
    localStorage.setItem('todo', JSON.stringify(state.todoList))
    todoLocalStorage = JSON.parse(localStorage.getItem('todo') || '')
    return (
        <div className="container mx-auto pt-20">
        <div className="w-auto flex justify-center">
            <input ref={inputRef} onKeyDown={handleAdd} type="text" placeholder="What do you want to add" className="border-b-2 border-gray-800 pt-2.5 pb-2.5 pr-5 pl-5 mr-10 bg-gray-600 text-gray-50"/>
            <a onClick={handleAdd} className="rounded-full bg-gray-800 w-10 h-10 flex items-center justify-center text-gray-50 text-3xl cursor-pointer hover:bg-gray-900 shadow-md hover:-translate-y-0.5 hover:shadow-lg transform transition duration-300 ease-out active:outline-black">+</a>
        </div>

        {todoLocalStorage.length &&
        todoLocalStorage.map(el => {
            return <TodoItem text={el.text} key={el.id} completed={el.completed} itemId={el.id} dispatch={dispatch}/>
        })
       }
    </div>
    );
};

export default App