import { useEffect, useMemo, useState } from "react";
import TodoFilters from "./components/todoFilters";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TodoStats from "./components/todoStats";

const STORAGE_KEY = "programmer-todo-list-v1";

const initialForm = {
    title: "",
    description: "",
    date: "",
    priority: "Média"
};

function App() {
    // useState guarda as tarefas e recupera os dados salvos anteriormente no navegador.
    const [todos, setTodos] = useState(() => {
        if (typeof window === "undefined") return [];

        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    const [form, setForm] = useState(initialForm);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    // useEffect atualiza o localStorage sempre que a lista de tarefas é alterada.
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    // useMemo evita recalcular os contadores quando uma parte não relacionada muda.
    const stats = useMemo(() => {
        const total = todos.length;
        // filter cria uma lista apenas com as tarefas já concluídas.
        const completed = todos.filter((todo) => todo.completed).length;
        const pending = total - completed;

        return { total, completed, pending };
    }, [todos]);

    // useMemo calcula a lista exibida conforme o filtro e o texto pesquisado.
    const filteredTodos = useMemo(() => {
        // filter mantém somente as tarefas que atendem aos critérios selecionados.
        return todos.filter((todo) => {
            const matchesFilter =
                filter === "all"
                    ? true
                    : filter === "pending"
                        ? !todo.completed
                        : todo.completed;

            const query = search.trim().toLowerCase();
            const matchesSearch =
                query.length === 0 ||
                todo.title.toLowerCase().includes(query) ||
                todo.description.toLowerCase().includes(query);

            return matchesFilter && matchesSearch;
        });
    }, [filter, search, todos]);

    // Callback executado pelos campos do formulário para atualizar seu estado.
    function handleChange(event) {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const title = form.title.trim();
        if (!title) return;

        const newTodo = {
            id: Date.now(),
            title,
            description: form.description.trim(),
            date: form.date || new Date().toISOString().slice(0, 10),
            priority: form.priority,
            completed: false,
        };

        // Callback do setTodos usa o estado mais recente antes de adicionar a nova tarefa.
        setTodos((current) => [newTodo, ...current]);
        setForm(initialForm);
    }

    function toggleTodo(id) {
        // map cria uma nova lista, alterando apenas a tarefa selecionada.
        setTodos((current) =>
            current.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function deleteTodo(id) {
        // filter cria uma nova lista sem a tarefa que foi removida.
        setTodos((current) => current.filter((todo) => todo.id !== id));
    }

    function clearCompleted() {
        // filter mantém somente as tarefas pendentes ao limpar as concluídas.
        setTodos((current) => current.filter((todo) => !todo.completed));
    }

    return (
        <div className="app-shell">
            <header className="topbar">
                <div>
                    <p className="eyebrow">Sistema</p>
                    <h1>Lista de Tarefas do Programador</h1>
                </div>
            </header>

            <TodoForm form={form} onChange={handleChange} onSubmit={handleSubmit} />

            <TodoFilters
                filter={filter}
                search={search}
                onFilterChange={setFilter}
                onSearchChange={setSearch}
            />

            <TodoStats
                total={stats.total}
                pending={stats.pending}
                completed={stats.completed}
            />

            <div className="list-header">
                <h2>Tarefas</h2>
                <button type="button" className="clear-button" onClick={clearCompleted}>
                    Limpar concluídas
                </button>
            </div>

            <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />
        </div>
    );
}

export default App;