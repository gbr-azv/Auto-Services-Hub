import { Link } from 'react-router-dom';

const columnConfig = {
    customer: ['id', 'name', 'social_security_number', 'phone', 'email'],
    employee: ['id', 'name', 'phone', 'email', 'salary'],
    vehicle: ['id', 'license_plate', 'brand', 'model', 'vehicle_type'],
    part: ['id', 'name', 'description', 'brand', 'quantity_in_stock'],
    service: ['id', 'name', 'description', 'estimated_time', 'price'],
    serviceOrder: ['id', 'date_of_service', 'total_cost', 'observations', 'customer', 'employee', 'service', 'status', 'vehicle']
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
    employee: (
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Salário</th>
        </tr>
    ),
    vehicle: (
        <tr>
            <th>ID</th>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Tipo</th>
        </tr>
    ),
    part: (
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Marca</th>
            <th>Qtde. Estoque</th>
        </tr>
    ),
    service: (
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Duração</th>
            <th>Preço</th>
        </tr>
    ),
    serviceOrder: (
        <tr>
            <th>ID</th>
            <th>Data do Serviço</th>
            <th>Observações</th>
            <th>Total</th>
            <th>Status</th>
        </tr>
    ),
};

export const renderRows = (data, object, route) => {
    const columns = columnConfig[object];
    
    if (!data || !Array.isArray(data.results)) {
        return (
            <tr>
                <td colSpan={columns.length + 1}>Nenhum dado disponível</td>
            </tr>
        );
    }

    return data.results.map((item) => (
        <tr 
            key={item.id}
            style={{ cursor: "pointer" }}
        >
            {columns.map((column, i) => (
                <td key={i}>
                    <Link to={`/${route}/edit-${object}/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {item[column]}
                    </Link>
                </td>
            ))}
        </tr>
    ));
};
