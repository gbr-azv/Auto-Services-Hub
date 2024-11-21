import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import { formConfig } from "../utils/formConfig";

import '../styles/NewCostumer.css';

function NewService() {

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/services/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar serviço.");
      }

      alert("Serviço criado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar serviço.");
    }
  };

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Cadastrar Serviço" />
      <Form
        apiRoute="services"
        urlRoute="Services"
        config={formConfig.service}
        initialData={{}}
        onSubmit={handleSubmit}
      />
    </div>
);
}

export default NewService
