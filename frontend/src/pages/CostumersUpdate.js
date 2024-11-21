import React from 'react';

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Header from '../Components/Header/Header';
import '../styles/CostumersUpdate.css';



function CostumersUpdate() {
    const {id} = useParams;
    const {navigate} = useNavigate;
    const [custumer, setCustumer] = useState({
        id: '',
        name: '', 
        social_security_number: '', 
        phone: '', 
        email: '',
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomer = async () => {
          try {
            const response = await fetch(`http://127.0.0.1:8000/customers/${id}/`);
            const result = await response.json();
            setCustumer(result);
            setLoading(false);
          } catch (error) {
            console.error('Erro ao buscar cliente:', error);
          }
        };
        fetchCustomer();
      }, [id]);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setCustumer((prevCustomer) => ({
          ...prevCustomer,
          [name]: value,
        }));
      };

      const handleSave = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`http://127.0.0.1:8000/customers/${id}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(custumer),
          });
    
          if (response.ok) {
            alert('Cliente atualizado com sucesso!');
            navigate('/customers'); // redireciona para a lista de clientes
          } else {
            alert('Erro ao atualizar cliente.');
          }
        } catch (error) {
          console.error('Erro ao salvar cliente:', error);
        }
      };
    
      if (loading) {
        return <p>Carregando...</p>;
      }

  
  
    return (
    <div className='edit-costumers-main'> 
        <Header 
            title={'Editar Dados do Cliente'}
        />
        <form className='edit-costumers-main' onSubmit={handleSave}>
            <label 
                type="text"
                name="nome"
                value={custumer.name}
                onChange={handleChange}
                required>
                Nome:
            </label>

            <label
                type="text"
                name="social_security_number"
                value={custumer.social_security_number}
                onChange={handleChange}
                required>
                CPF:
            </label>

            <label
                type="text"
                name="phone"
                value={custumer.phone}
                onChange={handleChange}
                required>
                Telefone:
            </label>

            <label
                type="email"
                name="email"
                value={custumer.email}
                onChange={handleChange}
                required>
                E-mail:
            </label>

            <button type="submit" className='save-button'>Salvar</button>
            <button type="button" className='cancel-button' onClick={() => navigate('/Costumers')}>Cancelar</button>
        </form>
      
    </div>
  )
}

export default CostumersUpdate
