import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";

import { formConfig } from "../utils/formConfig";

import "../styles/EditCostumer.css";

function EditService() {
  const { id } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/services/${id}/`);
        const result = await response.json();
        setServiceData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados do cliente:", error);
      }
    };
    fetchService();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/services/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados.");
      }

      alert("Serviço atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Erro ao salvar os dados.");
    }
  };
  
  if (!serviceData) {
    return <p>Carregando dados do serviço...</p>;
  }

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Editar Serviço" />
      <Form
        apiRoute="services"
        urlRoute="Services"
        config={formConfig.service}
        initialData={serviceData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditService;
