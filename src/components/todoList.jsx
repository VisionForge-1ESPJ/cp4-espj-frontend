import TodoItem from "./todoItem";

function TodoList({ todos, onToggle, onDelete }) {
    return (
        <ul className="todo-list">
            {todos.length === 0 ? (
                <li className="empty-state">Nenhuma tarefa encontrada.</li>
            ) : (
                /* map transforma cada objeto de tarefa em um componente visual. */
                todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                ))
            )}
        </ul>
    );
}

export default TodoList;
