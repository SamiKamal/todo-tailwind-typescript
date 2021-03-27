import React from 'react'
import {Actions} from './reducer'
interface Props {
    text?: string;
    itemId: string | undefined;
    completed?: Boolean;
    dispatch: React.Dispatch<Actions>;
}

const TodoItem: React.FC<Props> = ({text, itemId, completed, dispatch}) => {

    const handleDelete = (e: React.MouseEvent<HTMLParagraphElement>, id: string | undefined) => {     
           
        dispatch({type: "REMOVE", id})
    }
    return (
        <div className="h-auto grid">
            <div className="w-9/12 md:w-6/12 m-auto mt-5 block bg-gray-700 shadow hover:shadow-md transition duration-300 transform hover:-translate-y-0.5 pt-5 pb-5 pr-10 pl-10 mb-3 rounded-md">
                <div className="flex justify-between items-center">
                    <h4 className="text-gray-50">{text}</h4>
                    <div className="flex items-center font-light">
                        <p onClick={(e) => handleDelete(e, itemId)} className="text-red-300 mr-4 cursor-pointer">Delete</p>
                        <p className="text-blue-300 cursor-pointer">Edit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
