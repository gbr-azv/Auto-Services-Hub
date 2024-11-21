import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import Input from '../Input/Input';

import './Form.css';

function Form({ initialData = {}, apiRoute, urlRoute, config, onSubmit }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(initialData);
  }, [initialData]);

  const handleChange = (fieldName, value) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (onSubmit) {
      await onSubmit(formData);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/${apiRoute}/${formData.id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });

      if (!response.ok) {
        throw new Error("Erro ao deletar o registro.");
      }

      alert("Registro deletado com sucesso!");
      navigate(`/${urlRoute}/`);
    } catch (error) {
      console.error("Erro ao deletar o registro:", error);
      alert("Erro ao deletar o registro.");
    }
  };

  return (
    <form className='form-main' onSubmit={handleSubmit}>
      <div className='form-inputs'>
        {config.fields.map((field) => (
          <Input
            key={field.apiName}
            placeholder={field.placeholder}
            value={formData[field.apiName]}
            onChange={(e) => handleChange(field.apiName, e.target.value)}
          />
        ))}
        <div className="form-buttons">
          <button type='submit' className='registry-button'>
            {Object.keys(initialData).length > 0 ? "Salvar Alterações" : "Cadastrar"}
          </button>
          <DeleteButton/>
        </div>
      </div>
    </form>
  );

  function DeleteButton() {
    const location = useLocation();

    if (!location.pathname.includes('edit')) {
      return null;
    }
    return (
      <button type="button" className='delete-button' onClick={handleDelete}>
        Excluir
      </button>
    );
  }
}

export default Form
