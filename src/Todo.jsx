import React, { useState, useEffect } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";
import List from "./List";
import { db } from "./firebase";
import {
    collection,
    query,
    onSnapshot,
    updateDoc,
    doc,
    addDoc,
    deleteDoc,
} from "firebase/firestore";
const Todo = () => {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unSubscribe = onSnapshot(q, (querySnapShot) => {
            const itemArr = [];
            querySnapShot.forEach((doc) => {
                itemArr.push({ ...doc.data(), id: doc.id });
            });
            setList(itemArr);
        });
        return () => unSubscribe();
    }, []);

    // create

    // Update db
    const todoComplete = async (id, state) => {
        await updateDoc(doc(db, "todos", id), {
            completed: !state,
        });
    };
    const deleteList = async (id) => {
        // setList(
        //     list.filter(({ id }) => {
        //         return itemId !== id;
        //     })
        // );
        console.log(id);
        await deleteDoc(doc(db, "todos", id));
    };
    return (
        <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-4xl mx-auto shadow-2xl py-6">
            <h2 className="font-bold text-2xl md:text-3xl xl:text-4xl text-center pb-6">
                To Do List
            </h2>
            <div className="flex justify-center py-1 ">
                <input
                    type="text"
                    placeholder="Write here..."
                    className="w-3/4 pl-4 mr-4 bg-primary-color rounded-xl md:text-base xl:text-xl focus:outline-none"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <p className="p-2 rounded-full cursor-pointer transition-all duration-200 hover:hover:bg-zinc-600 hover:scale-110">
                    <MdOutlineLibraryAdd
                        color="black"
                        size={30}
                        onClick={async () => {
                            if (value.trim() !== "") {
                                await addDoc(collection(db, "todos"), {
                                    text: value,
                                    completed: false,
                                });
                            }
                            setValue("");
                        }}
                    />
                </p>
            </div>
            {list.length > 0 && (
                <div className="my-5 flex flex-col gap-6 py-6  items-center">
                    {list.map(({ text, id, completed }, index) => (
                        <List
                            key={index}
                            text={text}
                            id={id}
                            deleteList={deleteList}
                            state={completed}
                            todoComplete={todoComplete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Todo;
