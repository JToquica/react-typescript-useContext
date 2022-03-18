import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {

    const { todos } = useTodos();

    return (
        <ul>
            {todos.map((todo) => 
                <TodoItem todo={todo} key={todo.id} />
            )}
        </ul>
    );
}