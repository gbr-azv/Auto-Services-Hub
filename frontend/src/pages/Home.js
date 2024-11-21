import Menu from '../Components/Menu/Menu';
import React from 'react'
import styles from '../styles/Home.css'

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
        <a className='view-button' href='/'>Vizualizar</a>
        </div>
      <div className="item">
        <h2> Funcionários </h2>
        <p>Tenha controle sobre seus funcionários</p> <br></br>
        <a className='view-button' href='/'>Vizualizar</a>
      </div>

      <div className='item'>
        <h2> Veículos </h2>
        <p>Tenha controle dos seus clientes</p> <br></br>
        <a className='view-button' href='/'>Vizualizar</a>
      </div>
      </div>
    </div>
  )
}

export default Home
