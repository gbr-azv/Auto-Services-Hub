import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import { formConfig } from "../utils/formConfig";

import '../styles/NewCostumer.css';

function NewVehicle() {

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/vehicles/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao criar veículo.");
      }

      alert("Veículo criado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao criar veículo.");
    }
  };

  return (
    <div className="edit-vehicle-main">
      <Header counter={0} title="Cadastrar Veículo" />
      <Form
        apiRoute="vehicles"
        urlRoute="Vehicles"
        config={formConfig.vehicle}
        initialData={{}}
        onSubmit={handleSubmit}
      />
    </div>
);
}

export default NewVehicle
