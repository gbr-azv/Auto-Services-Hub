import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";

import { formConfig } from "../utils/formConfig";

import "../styles/EditCostumer.css";

function EditServiceOrder() {
  const { id } = useParams();
  const [serviceOrderData, setServiceOrderData] = useState(null);

  useEffect(() => {
    const fetchServiceOrder = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/service-orders/${id}/`);
        const result = await response.json();
        setServiceOrderData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados da ordem de serviço:", error);
      }
    };
    fetchServiceOrder();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/service-orders/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados da ordem de serviço.");
      }

      alert("Ordem de Serviço atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Erro ao salvar os dados.");
    }
  };
  
  if (!serviceOrderData) {
    return <p>Carregando dados do cliente...</p>;
  }

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Editar Cliente" />
      <Form
        apiRoute="service-orders"
        urlRoute="ServiceOrders"
        config={formConfig.serviceOrder}
        initialData={serviceOrderData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditServiceOrder;
