import React from 'react'
import {Actions} from './reducer'
interface Props {
    text?: string;
    id?: number;
    completed?: Boolean;
    dispatch: React.Dispatch<Actions>;
}

const TodoItem: React.FC<Props> = ({text, id, completed, dispatch}) => {
    return (
        <div className="h-auto grid">
            <div className="w-9/12 md:w-6/12 m-auto mt-5 block bg-gray-700 shadow hover:shadow-md transition duration-300 transform hover:-translate-y-0.5 pt-5 pb-5 pr-10 pl-10 mb-3 rounded-md">
                <div className="flex justify-between items-center">
                    <h4 className="text-gray-50">{text}</h4>
                    <div className="flex items-center font-light">
                        <p className="text-red-300 mr-4 cursor-pointer">Delete</p>
                        <p className="text-blue-300 cursor-pointer">Edit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoItem
