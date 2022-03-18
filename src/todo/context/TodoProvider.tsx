import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { useReducer } from "react";
import { todoReducer } from './todoReducer';

const initialState: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: "1",
            desc: "Recolectar información",
            completed: false
        },
        {
            id: "2",
            desc: "Filtrar información",
            completed: false
        },
    ],
    completed: 0,
    pending: 2
}

interface props{
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}:props ) => {

    const [todoState, dispatch ] = useReducer(todoReducer, initialState);

    const toggleTodo = (id: string) => {
        dispatch({type: "toggleTodo", payload: { id } })
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }} >
            { children }
        </TodoContext.Provider>
    );
}
