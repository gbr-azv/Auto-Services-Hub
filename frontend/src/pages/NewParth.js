import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import { formConfig } from "../utils/formConfig";

import '../styles/NewCostumer.css';

function NewParth() {

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/parts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar peça.");
      }

      alert("Peça criada com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar peça.");
    }
  };

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Cadastrar Peça" />
      <Form
        apiRoute="parts"
        urlRoute="Parts"
        config={formConfig.part}
        initialData={{}}
        onSubmit={handleSubmit}
      />
    </div>
);
}

export default NewParth
