import React from 'react';
import '../styles/Costumers.css'

import { useState } from 'react';

function Costumers() {
  const [costumers, setCostumers] = useState([]);
 
  
  
  
  return (
    <div className='container-list'>
      <h1>Lista de Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Número de Segurança Social</th>
            <th>Data de Nascimento</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Data de Registro</th>
            <th>Data do Último Serviço</th>
          </tr>
        </thead>
        <tbody>
          {costumers.map((costumers) => 
          <tr key={costumers.id}>
          <td>{costumers.id}</td>
          <td>{costumers.name}</td>
          <td>{costumers.socialSecurityNumber}</td>
          <td>{new Date(costumers.dateofBirth).toLocaleDateString()}</td>
          <td>{costumers.address}</td>
          <td>{costumers.phone}</td>
          <td>{costumers.email}</td>
          <td>{new Date(costumers.dateofRegistration).toLocaleDateString()}</td>
          <td>{new Date(costumers.dateofLastService).toLocaleDateString()}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Costumers
