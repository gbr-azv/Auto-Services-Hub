const columnConfig = {
    customer: ['id', 'name', 'social_security_number', 'phone', 'email'],
};

export const tableHeaders = {
    customer: (
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>E-mail</th>
        </tr>
    ),
};

export const renderRows = (data, object) => {
    const columns = columnConfig[object];
    
    if (!data || !Array.isArray(data.results)) {
        return (
            <tr>
                <td colSpan={columns.length + 1}>Nenhum dado disponível</td>
            </tr>
        );
    }

    return data.results.map((item) => (
        <tr key={item.id}>
            {columns.map((column, i) => (
                <td key={i}>{item[column]}</td>
            ))}
        </tr>
    ));
};
