import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCar, FaClipboardList, FaTools, FaBoxOpen, FaBriefcase } from 'react-icons/fa';
import './Menu.css';

function Menu (){

    return (
        <div className='navbar-main'>
            <img src='./logo-auto-removebg-preview.png' className='logo'></img>
            <ul className='navbar-buttons-container'>
                <li> 
                    <Link className='links-button' to="/">
                        <FaHome className="icon" />
                        <span>Home</span>
                    </Link> 
                </li>
                <li> 
                    <Link className='links-button' to="/Costumers">
                        <FaUsers className="icon" />
                        <span>Clientes</span>
                    </Link> 
                </li>
                <li> 
                    <Link className='links-button' to="/Vehicles">
                        <FaCar className="icon" />
                        <span>Veículos</span>
                    </Link> 
                </li>
                <li> 
                    <Link className='links-button' to="/ServiceOrders">
                        <FaClipboardList className="icon" />
                        <span>Ordens de Serviço</span>
                    </Link> 
                </li>
                <li> 
                    <Link className='links-button' to="/Services">
                        <FaTools className="icon" />
                        <span>Serviços</span>
                    </Link> 
                </li>
                <li> 
                    <Link className='links-button' to="/Parths">
                        <FaBoxOpen className="icon" />
                        <span>Produtos</span>
                    </Link> 
                </li>
                <li> 
                    <Link className='links-button' to="/Employees">
                        <FaBriefcase className="icon" />
                        <span>Funcionários</span>
                    </Link> 
                </li>
            </ul>
            <span className='version'>Versão 1.0.0</span>
        </div>
    )
}

export default Menu;
