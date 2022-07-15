import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, toggleTodo, removeTodo } = props;

    return (
        <div style={{ margin: "0 0 10px ", background: "#f9f9f9" }}>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
            <span style={{ display: "inline-block", margin: "0 10px" }}>{title}</span>

            <button
                onClick={() => removeTodo(id)}
                style={{ background: "transparent", border: "none", outline: "none", color: "red" }}
            >
                X
            </button>
        </div>
    );
};

export { TodoItem };
