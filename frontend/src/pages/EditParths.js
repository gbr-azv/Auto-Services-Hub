import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";

import { formConfig } from "../utils/formConfig";

import "../styles/EditCostumer.css";

function EditParth() {
  const { id } = useParams();
  const [partData, setPartData] = useState(null);

  useEffect(() => {
    const fetchPart = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/parts/${id}/`);
        const result = await response.json();
        setPartData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados da peça:", error);
      }
    };
    fetchPart();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/parts/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados.");
      }

      alert("Peça atualizada com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Erro ao salvar os dados.");
    }
  };
  
  if (!partData) {
    return <p>Carregando dados da peça...</p>;
  }

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Editar Peça" />
      <Form
        apiRoute="parts"
        urlRoute="Parts"
        config={formConfig.part}
        initialData={partData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditParth;
