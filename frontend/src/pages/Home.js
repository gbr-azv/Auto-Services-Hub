import Menu from '../Components/Menu/Menu';
import React from 'react'
import styles from '../styles/Home.css'

function Home() {
  return (
    <div className='container-home'>
      <h1> Bem vindo ao <span>Auto Service</span> </h1>
      <p>Comece a gerenciar seu atendimento!</p>

      <div className='item'>
        <h2> Clientes </h2>
        <p>Gerencie o atendimento com seus clientes</p>
        <a className='vizualizar' href='/'>Vizualizar</a>
     </div>

      <div className='item'>
        <h2> Funcionários </h2>
        <p>Tenha controle sobre seus Funcionários</p>
        <a className='vizualizar' href='/'>Vizualizar</a>
      </div>

      <div className='item'>
        <h2> Veículos </h2>
        <p>Tenha controle dos seus clientes</p>
        <a className='vizualizar' href='/'>Vizualizar</a>
      </div>

    </div>
  )
}

export default Home
