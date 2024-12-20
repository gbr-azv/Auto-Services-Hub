export const formConfig = {
    customer: {
        fields: [
            { apiName: "name", label: "Nome", placeholder: "Digite o nome" },
            { apiName: "social_security_number", label: "CPF", placeholder: "Digite o CPF" },
            { apiName: "date_of_birth", label: "Data de Nascimento", placeholder: "Digite a data de nascimento" },
            { apiName: "address", label: "Endereço", placeholder: "Digite o endereço" },
            { apiName: "phone", label: "Telefone", placeholder: "Digite o telefone/celular" },
            { apiName: "email", label: "E-mail", placeholder: "Digite o e-mail" }
        ],
        apiRoute: "http://127.0.0.1:8000/customers/",
    },
    employee: {
        fields: [
            { apiName: "name", label: "Nome", placeholder: "Digite o nome" },
            { apiName: "social_security_number", label: "CPF", placeholder: "Digite o CPF" },
            { apiName: "date_of_birth", label: "Data de Nascimento", placeholder: "Digite a data de nascimento" },
            { apiName: "address", label: "Endereço", placeholder: "Digite o endereço" },
            { apiName: "phone", label: "Telefone", placeholder: "Digite o telefone/celular" },
            { apiName: "email", label: "E-mail", placeholder: "Digite o e-mail" },
            { apiName: "password", label: "Senha", placeholder: "Digite a senha" },
            { apiName: "salary", label: "Salário", placeholder: "Digite o salário" },
            { apiName: "role", label: "Cargo", placeholder: "Digite o código do cargo" }
        ],
        apiRoute: "http://127.0.0.1:8000/employees/",
    },
    vehicle: {
        fields: [
            { apiName: "license_plate", label: "Placa", placeholder: "Digite a placa" },
            { apiName: "brand", label: "Marca", placeholder: "Digite a marca" },
            { apiName: "model", label: "Modelo", placeholder: "Digite o modelo" },
            { apiName: "vehicle_type", label: "Tipo", placeholder: "Digite o tipo do veículo" },
            { apiName: "color", label: "Cor", placeholder: "Digite a cor" },
            { apiName: "year", label: "Ano", placeholder: "Digite o ano" },
            { apiName: "date_of_last_service", label: "Último Serviço", placeholder: "Digite a data do último serviço" },
            { apiName: "customer", label: "Proprietário", placeholder: "Digite o ID do proprietário" }
        ],
        apiRoute: "http://127.0.0.1:8000/vehicles/",
    },
    part: {
        fields: [
            { apiName: "name", label: "Nome", placeholder: "Digite o nome" },
            { apiName: "description", label: "Descrição", placeholder: "Digite a descrição" },
            { apiName: "brand", label: "Marca", placeholder: "Digite a marca" },
            { apiName: "quantity_in_stock", label: "Qtde. Estoque", placeholder: "Digite a quantidade em estoque" },
            { apiName: "price", label: "Preço", placeholder: "Digite o preço" }
        ],
        apiRoute: "http://127.0.0.1:8000/parts/",
    },
    service: {
        fields: [
            { apiName: "name", label: "Nome", placeholder: "Digite o nome" },
            { apiName: "description", label: "Descrição", placeholder: "Digite a descrição" },
            { apiName: "estimated_time", label: "Duração", placeholder: "Digite a duração do serviço" },
            { apiName: "price", label: "Preço", placeholder: "Digite o preço" },
            { apiName: "category", label: "Categoria", placeholder: "Digite o ID da categoria" }
        ],
        apiRoute: "http://127.0.0.1:8000/services/",
    },
    serviceOrder: {
        fields: [
            { apiName: "date_of_service", label: "Data do Serviço", placeholder: "Digite a data do serviço" },
            { apiName: "total_cost", label: "Total", placeholder: "Digite o total" },
            { apiName: "observations", label: "Observações", placeholder: "Digite a observação" },
            { apiName: "customer", label: "ID do Cliente", placeholder: "Digite o ID do Cliente" },
            { apiName: "employee", label: "ID do Funcionário", placeholder: "Digite o ID do Funcionário" },
            { apiName: "service", label: "ID do Serviço", placeholder: "Digite o ID do Serviço" },
            { apiName: "status", label: "Status", placeholder: "Digite o status" },
            { apiName: "vehicle", label: "ID do Veículo", placeholder: "Digite o ID do Veículo" }
        ],
        apiRoute: "http://127.0.0.1:8000/service-orders/",
    }
}
