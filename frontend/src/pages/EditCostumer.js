import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";

import { formConfig } from "../utils/formConfig";

import "../styles/EditCostumer.css";

function EditCostumer() {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/customers/${id}/`);
        const result = await response.json();
        setCustomerData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados do cliente:", error);
      }
    };
    fetchCustomer();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/customers/${id}/`, {
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
  
  if (!customerData) {
    return <p>Carregando dados do cliente...</p>;
  }

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Editar Cliente" />
      <Form
        object="customer"
        config={formConfig.customer}
        initialData={customerData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditCostumer;
