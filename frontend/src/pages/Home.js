import React from 'react'

import '../styles/Home.css';

function Home() {
  return (
    <div className='container-home'>
      
      <h1 className='title'> Bem vindo ao <span>Auto Service</span></h1>
      <p className='subtitle'>Comece a gerenciar seu atendimento!</p> 
      <br></br>

      <div className='items-container'>   
        <div className='item'>
          <h2> Clientes </h2>
          <p>Gerencie o atendimento com seus clientes</p> <br></br>
          <img src='./clientes.jpg' className='clientes'></img>
          <br></br>
          <a className='view-button' href='/'>Visualizar</a>
        </div>

        <div className="item">
          <h2> Funcionários </h2>
          <p>Tenha controle sobre seus funcionários</p> <br></br>
          <img src='./funcionarios.jpg' className='funcionarios'></img>
          <a className='view-button' href='/'>Visualizar</a>
        </div>

        <div className='item'>
          <h2> Veículos </h2>
          <p>Gerencie os serviços em veículos</p> <br></br>
          <img src='./veiculos.jpg' className='veiculos'></img>
          <a className='view-button' href='/'>Visualizar</a>
        </div>
      </div>
    </div>
  );
}

export default Home
