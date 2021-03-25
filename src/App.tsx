import React from 'react';
import "./css/tailwind.css"

const App: React.FC = () => {
    return (
        <div className="container mx-auto pt-20">
        <div className="w-auto flex justify-center">
            <input type="text" placeholder="What do you want to add" className="border-b-2 border-gray-800 pt-2.5 pb-2.5 pr-5 pl-5 mr-10 bg-gray-600 text-gray-50"/>
            <a className="rounded-full bg-gray-800 w-10 h-10 flex items-center justify-center text-gray-50 text-3xl cursor-pointer hover:bg-gray-900 shadow-md hover:-translate-y-0.5 hover:shadow-lg transform transition duration-300 ease-out active:outline-black">+</a>
        </div>

        <div className="h-auto grid">
            <div className="w-9/12 md:w-6/12 m-auto mt-5 block bg-gray-700 shadow hover:shadow-md transition duration-300 transform hover:-translate-y-0.5 pt-5 pb-5 pr-10 pl-10 mb-3 rounded-md">
                <div className="flex justify-between items-center">
                    <h4 className="text-gray-50">Fix car</h4>
                    <div className="flex items-center font-light">
                        <p className="text-red-300 mr-4 cursor-pointer">Delete</p>
                        <p className="text-blue-300 cursor-pointer">Edit</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    );
};

export default App