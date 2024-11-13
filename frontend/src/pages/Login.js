import React from 'react'
import {FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import "./Login.css"

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //função envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(username, password);

    console.log("Envio")
  }
  
  
    return (
    <div className='container'>
      
      <form onSubimit={handleSubmit}>
      <h1>Auto Services</h1>
        <h2>Acesse o sistema</h2>
        <div className="input-field">
            <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className='icon' />
        </div>
        <div className="input-field">
            <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className='icon' />
        </div>

        <div className='recall-forget'>
            <label>
                <input type="checkbox" /> Lembre de mim
            </label>
            <a href= "#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
      </form>
    </div>
  )
}

export default Login
