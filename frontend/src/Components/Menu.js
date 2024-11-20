import { Link } from 'react-router-dom'
import React from 'react';



function Menu (){

    return (
        
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Costumers">Clientes</Link> </li>
            <li> <Link to="/Vehicles">Veículos</Link> </li>
            <li> <Link to="/ServiceOrders">Ordens de Serviço</Link> </li>
            <li> <Link to="/Services">Serviços</Link> </li>
            <li> <Link to="/Parths">Produtos</Link> </li>
            <li> <Link to="/Employees">Funcionários</Link> </li>
        </ul>

    
    )
}

export default Menu;