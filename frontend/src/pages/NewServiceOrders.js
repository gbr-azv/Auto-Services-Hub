import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import { formConfig } from "../utils/formConfig";

import '../styles/NewCostumer.css';

function NewServiceOrder() {

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/service-orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar ordem de serviço.");
      }

      alert("Ordem de serviço criada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar ordem de serviço.");
    }
  };

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Cadastrar Ordem de Serviço" />
      <Form
        apiRoute="service-orders"
        urlRoute="ServiceOrders"
        config={formConfig.serviceOrder}
        initialData={{}}
        onSubmit={handleSubmit}
      />
    </div>
);
}

export default NewServiceOrder
