import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";

import { formConfig } from "../utils/formConfig";

import "../styles/EditCostumer.css";

function EditVehicle() {
  const { id } = useParams();
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/vehicles/${id}/`);
        const result = await response.json();
        setVehicleData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados do veículo:", error);
      }
    };
    fetchVehicle();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/vehicles/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados.");
      }

      alert("Cliente atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Erro ao salvar os dados.");
    }
  };
  
  if (!vehicleData) {
    return <p>Carregando dados do veículo...</p>;
  }

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Editar Veículo" />
      <Form
        apiRoute="vehicles"
        urlRoute="Vehicles"
        config={formConfig.vehicle}
        initialData={vehicleData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditVehicle;
