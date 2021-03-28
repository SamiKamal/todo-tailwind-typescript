import React, { InputHTMLAttributes, useRef } from 'react'
import {Actions} from './reducer'
interface Props {
    text?: string;
    itemId: string | undefined;
    completed?: Boolean;
    dispatch: React.Dispatch<Actions>;
}

const TodoItem: React.FC<Props> = ({text, itemId, completed, dispatch}) => {
    const editParentRef = useRef(null)
    const todoTextRef = useRef(null)
    const inputEditRef = useRef(null)
    
    const handleDelete = (e: React.MouseEvent<HTMLParagraphElement>, id: string | undefined) => {     
        
        dispatch({type: "REMOVE", id})
    }
    
    const handleEditStyle = (e: React.MouseEvent<HTMLParagraphElement>, id: string | undefined) => {     
        const editInputRefT = editParentRef.current as unknown as HTMLDivElement
        const todoTextRefT = todoTextRef.current as unknown as HTMLHeadingElement
        const inputEditRefT = inputEditRef.current as unknown as HTMLInputElement

        todoTextRefT.classList.add('hidden')
        editInputRefT.classList.remove('hidden')
        console.log(editInputRefT);
        inputEditRefT.value = todoTextRefT.textContent as string;
        inputEditRefT.focus();
    }


    const handleEditDispatch = (e: (React.KeyboardEvent<HTMLInputElement> & React.MouseEvent<HTMLAnchorElement, MouseEvent>)) => {
        const inputEditRefT = inputEditRef.current as unknown as HTMLInputElement
        const editInputRefT = editParentRef.current as unknown as HTMLDivElement
        const todoTextRefT = todoTextRef.current as unknown as HTMLHeadingElement

        if (e.key === 'Enter' || e.type === 'click') {
            if (inputEditRefT?.value) {
                dispatch({type: "EDIT", text: inputEditRefT.value, id: itemId})
                todoTextRefT.classList.remove('hidden')
                editInputRefT.classList.add('hidden')        
                inputEditRefT.value = ''
            }
        }
        
    }

    const handleCompleted = (e: React.MouseEvent<HTMLParagraphElement>) => {
        dispatch({type: "MARK", id: itemId})
    }
    
    return (
        <div className="h-auto grid">
            <div className="w-9/12 md:w-6/12 m-auto mt-5 block bg-gray-700 shadow hover:shadow-md transition duration-300 transform hover:-translate-y-0.5 pt-5 pb-5 pr-10 pl-10 mb-3 rounded-md">
                <div className="flex justify-between items-center">
                    <div className="flex hidden" ref={editParentRef}>
                        <input ref={inputEditRef} onKeyDown={handleEditDispatch} type="text" placeholder="What do you want to add" className="border-b-2 border-gray-800 pt-2.5 pb-2.5 pr-5 pl-5 mr-10 bg-gray-700 text-gray-50"/>
                        <a onClick={handleEditDispatch} className="rounded-full bg-gray-800 w-30 h-30 pr-4 pl-4 flex items-center m-0 justify-center text-gray-50 cursor-pointer hover:bg-gray-900 shadow-md hover:-translate-y-0.5 hover:shadow-lg transform transition duration-300 ease-out active:outline-black">Submit</a>
                        
                    </div>
                    <h4 onClick={handleCompleted} ref={todoTextRef} className={`text-gray-50 cursor-pointer ${completed ? 'line-through' : ''}`}>{text}</h4>
                    <div className="flex items-center font-light">
                        <p onClick={(e) => handleDelete(e, itemId)} className="text-red-300 mr-4 cursor-pointer">Delete</p>
                        <p onClick={(e) => handleEditStyle(e, itemId)} className="text-blue-300 cursor-pointer">Edit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
