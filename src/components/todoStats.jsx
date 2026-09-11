function TodoStats({ total, pending, completed }) {
    return (
        <section className="stats">
            <div className="stat-card">
                <span>Total</span>
                <strong>{total}</strong>
            </div>
            <div className="stat-card">
                <span>Pendentes</span>
                <strong>{pending}</strong>
            </div>
            <div className="stat-card">
                <span>Concluídas</span>
                <strong>{completed}</strong>
            </div>
        </section>
    );
}

export default TodoStats;
