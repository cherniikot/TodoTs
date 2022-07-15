import { useState, useEffect, useRef } from "react";
import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";

// useState<> - Дженерик

const App: React.FC = () => {
    const [value, setValue] = useState("");
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value);
    };
    // Обработчик события на форме

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") addTodo();
    };
    // Обработчик события нажатия кнопки

    const inputRef = useRef<HTMLInputElement>(null);
    // Отвечает за фокус курсора на старте приложения. ФФ

    const addTodo = () => {
        if (value) {
            setTodos([...todos, { id: Date.now(), title: value, complete: false }]);
        }
        setValue("");
    };

    const removeTodo = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number): void => {
        setTodos(
            todos.map((todo) => {
                if (todo.id !== id) return todo;

                return { ...todo, complete: !todo.complete };
            })
        );
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current?.focus();
    }, []);
    // ФФ

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ margin: "20px 0 20px 0px" }}>
                <input
                    value={value}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    style={{ width: "30%" }}
                />
                <button onClick={addTodo} style={{ margin: "0 20px " }}>
                    Добавить
                </button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    );
};
export { App };
