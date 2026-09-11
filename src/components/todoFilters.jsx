function TodoFilters({ filter, search, onFilterChange, onSearchChange }) {
    const filters = [
        { key: "all", label: "Todos" },
        { key: "pending", label: "Pendentes" },
        { key: "completed", label: "Concluídas" },
    ];

    return (
        <section className="toolbar">
            <div className="filters" aria-label="Filtros de tarefas">
                {/* map transforma cada opção em um botão de filtro reutilizável. */}
                {filters.map((item) => (
                    <button
                        key={item.key}
                        type="button"
                        className={
                            filter === item.key ? "filter-button active" : "filter-button"
                        }
                        onClick={() => onFilterChange(item.key)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <input
                type="search"
                className="search-input"
                placeholder="Pesquisar tarefa"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
            />
        </section>
    );
}

export default TodoFilters;
