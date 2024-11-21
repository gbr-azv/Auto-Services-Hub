import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import { formConfig } from "../utils/formConfig";

import '../styles/NewCostumer.css';

function NewEmployee() {

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/employees/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar funcionário.");
      }

      alert("Funcionário criado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar funcionário.");
    }
  };

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Cadastrar Funcionário" />
      <Form
        apiRoute="employees"
        urlRoute="Employees"
        config={formConfig.employee}
        initialData={{}}
        onSubmit={handleSubmit}
      />
    </div>
);
}

export default NewEmployee
