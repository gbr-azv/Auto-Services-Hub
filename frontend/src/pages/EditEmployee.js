import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Header from "../Components/Header/Header";
import Form from "../Components/Form/Form";

import { formConfig } from "../utils/formConfig";

import "../styles/EditCostumer.css";

function EditEmployee() {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/employees/${id}/`);
        const result = await response.json();
        setEmployeeData(result);
      } catch (error) {
        console.error("Erro ao buscar os dados do funcionário:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/employees/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar os dados.");
      }

      alert("Funcionário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      alert("Erro ao salvar os dados.");
    }
  };
  
  if (!employeeData) {
    return <p>Carregando dados do funcionário...</p>;
  }

  return (
    <div className="edit-customer-main">
      <Header counter={0} title="Editar Funcionário" />
      <Form
        apiRoute="employees"
        urlRoute="Employees"
        config={formConfig.employee}
        initialData={employeeData}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default EditEmployee;
