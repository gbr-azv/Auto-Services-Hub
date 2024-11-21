import Menu from '../Components/Menu/Menu';
import React from 'react'
import styles from '../styles/Home.css'

function Home() {
  return (
    <div className='container-home'>
        <h1 className='title'> Bem vindo ao <span>Auto Service</span>
          <p className='subtitle'>Comece a gerenciar seu atendimento!</p>
        </h1>
      <div className='items-container'>
        <h2> Clientes </h2>
        <p>Gerencie o atendimento com seus clientes</p>
        <a className='view-button' href='/'>Vizualizar</a>
      </div>

      <div className='items-container'>
        <h2> Funcionários </h2>
        <p>Tenha controle sobre seus Funcionários</p>
        <a className='view-button' href='/'>Vizualizar</a>
      </div>

      <div className='items-container'>
        <h2> Veículos </h2>
        <p>Tenha controle dos seus clientes</p>
        <a className='view-button' href='/'>Vizualizar</a>
      </div>
    </div>
  )
}

export default Home
