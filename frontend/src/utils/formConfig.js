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
}
