function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li className={todo.completed ? "todo-item done" : "todo-item"}>
            <div className="todo-main">
                <button
                    type="button"
                    className={todo.completed ? "status-button checked" : "status-button"}
                    onClick={() => onToggle(todo.id)}
                    aria-label={
                        todo.completed
                            ? "Marcar como pendente"
                            : "Marcar como concluída"
                    }
                >
                    {todo.completed ? "✓" : "○"}
                </button>

                <div className="todo-copy">
                    <h3>{todo.title}</h3>
                    {todo.description ? <p>{todo.description}</p> : null}
                    <div className="meta-row">
                        <span>{todo.date || "Sem data"}</span>
                        <span className={`priority priority-${todo.priority.toLowerCase()}`}>
                            {todo.priority}
                        </span>
                    </div>
                </div>
            </div>

            <button
                type="button"
                className="delete-button"
                onClick={() => onDelete(todo.id)}
            >
                Excluir
            </button>
        </li>
    );
}

export default TodoItem;