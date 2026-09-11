function todoForm({ form, onChange, onSubmit }) {
    return (
        <form className="todo-form" onSubmit={onSubmit}>
            <div className="field-row">
                <label>
                    Nome da tarefa
                    <input
                        type="text"
                        name="title"
                        placeholder="Ex: Corrigir bug no login"
                        value={form.title}
                        onChange={onChange}
                    />
                </label>

                <label>
                    Data
                    <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={onChange}
                    />
                </label>
            </div>

            <label>
                Descrição
                <textarea
                    name="description"
                    rows="3"
                    placeholder="Descreva o que precisa ser feito"
                    value={form.description}
                    onChange={onChange}
                />
            </label>

            <div className="field-row compact">
                <label>
                    Prioridade
                    <select name="priority" value={form.priority} onChange={onChange}>
                        <option value="Alta">Alta</option>
                        <option value="Média">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </label>

                <button type="submit" className="primary-button">
                    Adicionar tarefa
                </button>
            </div>
        </form>
    );
}

export default todoForm;
