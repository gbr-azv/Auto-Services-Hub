import React from 'react';

import '../styles/Costumers.css';

import { useState } from 'react';

function Costumers() {
  const [costumers, setCostumers] = useState([]);
 
  const [newCostumers, setNewCostumers] = useState({
    id: '',
    name: '',
    social_security_number: '',
    date_of_birth: '',
    address: '',
    phone: '',
    email: '',
    date_of_registration: '',
    date_of_last_service: '',
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  //funçao para adicionar cliente
  const addCostumers = () => {
    setCostumers([...costumers, id= costumers.length + 1, ...newCostumers]);
    setNewCostumers({
      id: '',
      name: '',
      social_security_number: '',
      date_of_birth: '',
      address: '',
      phone: '',
      email: '',
      date_of_registration: '',
      date_of_last_service: '',
    })
    setMostrarModal(false);
  };
  
  
  
  
  
  
  return (
    <div className='container-list'>
      {/* //BOTAO PARA ABRIR MODAL */}
      <button onClick={() => setMostrarModal(true)}>Adicionar Novo Cliente</button>

      {/* //MODAL */}
      {mostrarModal && (
        <div className='modalStyle'>
          <h2>Adicionar Novo Cliente</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addCostumers();
            }}
          >
            <label>
              Nome:
              <input
                type="text"
                value={newCostumers.name}
                onChange={(e) =>
                  setNewCostumers({ ...newCostumers, name: e.target.value })
                }
                required
              />
            </label>
            <br />
            <label>
              Número de Segurança Social:
              <input
                type="text"
                value={newCostumers.social_security_number}
                onChange={(e) =>
                  setNewCostumers({
                    ...newCostumers,
                    social_security_number: e.target.value,
                  })
                }
                required
              />
            </label>
            <br />
            <label>
              Data de Nascimento:
              <input
                type="date"
                value={newCostumers.date_of_birth}
                onChange={(e) =>
                  setNewCostumers({
                    ...newCostumers,
                    date_of_birth: e.target.value,
                  })
                }
                required
              />
            </label>
            <br />
            <label>
              Endereço:
              <input
                type="text"
                value={newCostumers.address}
                onChange={(e) =>
                  setNewCostumers({ ...newCostumers, address: e.target.value })
                }
                required
              />
            </label>
            <br />
            <label>
              Telefone:
              <input
                type="text"
                value={newCostumers.phone}
                onChange={(e) =>
                  setNewCostumers({ ...newCostumers, address: e.target.value })
                }
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                value={newCostumers.email}
                onChange={(e) =>
                  setNewCostumers({ ...newCostumers, email: e.target.value })
                }
                required
              />
            </label>
            <br />
            <label>
              Data de Registro:
              <input
                type="date"
                value={newCostumers.date_of_registration}
                onChange={(e) =>
                  setNewCostumers({
                    ...newCostumers,
                    date_of_registration: e.target.value,
                  })
                }
                required
              />
            </label>
            <br />
            <label>
              Data do Último Serviço:
              <input
                type="date"
                value={newCostumers.date_of_last_service}
                onChange={(e) =>
                  setNewCostumers({
                    ...newCostumers,
                    date_of_last_service: e.target.value,
                  })
                }
              />
            </label>
            <br />
            <button type="submit">Salvar</button>
            <button
              type="button"
              onClick={() => setMostrarModal(false)}
              style={{ marginLeft: "10px" }}
            >
              Cancelar
            </button>
          </form>
        </div>
      )}
    
    <div  className='container-list'>
    {/* //LISTA DE CLIENTES */}
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
  </div>
)}

export default Costumers
