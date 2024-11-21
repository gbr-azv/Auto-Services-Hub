import React, { useState } from "react";

import Input from '../Input/Input';
import { formConfig } from '../../utils/formConfig';

import './Form.css';

function Form(props) {

  const [formData, setFormData] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await fetch(formConfig.customer.apiRoute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o formulário: " + response.json);
      }

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao realizar o cadastro.");
    }
  };

  return (
    <form className='form-main' onSubmit={handleSubmit}>
      <div className='form-inputs'>
        {formConfig.customer.fields.map((field) => (
          <Input
            key={field.apiName}
            placeholder={field.placeholder}
            value={formData[field.apiName]}
            onChange={(e) => handleChange(field.apiName, e.target.value)}
          />
        ))}
        <button type='submit' className='registry-button'>Cadastrar</button>
      </div>
    </form>
  );
}

export default Form
