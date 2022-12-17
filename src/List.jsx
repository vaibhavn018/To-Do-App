import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const List = ({ id, text = "", deleteList, state = false, todoComplete }) => {
    const [isFinished, setFinished] = useState(state);
    return (
        <div className="flex justify-center w-full">
            <input
                type="text"
                value={text}
                className={`w-3/4 pl-4 mr-4  bgred font-bold text-2xl  xl:text-4xl bg-transparent  border-b-2 cursor-pointer  decoration-black decoration-4 focus:outline-none ${
                    isFinished && "line-through"
                } `}
                onClick={() => {
                    todoComplete(id, state);
                    setFinished(!isFinished);
                }}
                readOnly
            />
            <p className="p-2 rounded-full cursor-pointer  transition-all duration-200 hover:hover:bg-zinc-600 hover:scale-110">
                <MdDelete
                    color="black"
                    size={30}
                    onClick={() => deleteList(id)}
                />
            </p>
        </div>
    );
};

export default List;
