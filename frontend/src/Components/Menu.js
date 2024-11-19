import {BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import Costumers from "../pages/Costumers";
import Vehicles from "../pages/Vehicles";
import ServiceOrders from "../pages/ServiceOrders";
import Services from "../pages/Services";
import Parths from "../pages/Parths";
import Employees from "../pages/Employees";

function Menu (){

    return (
        <BrowserRouter>
        <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/Costumers">Clientes</Link> </li>
            <li> <Link to="/Vehicles">Veículos</Link> </li>
            <li> <Link to="/ServiceOrders">Ordens de Serviço</Link> </li>
            <li> <Link to="/Services">Serviços</Link> </li>
            <li> <Link to="/Parths">Produtos</Link> </li>
            <li> <Link to="/Employees">Funcionários</Link> </li>
        </ul>

        <Routes>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/Costumers" component={Costumers}></Route>
            <Route path="/Vehicles" component={Vehicles}></Route>
            <Route path="/ServiceOrdens" component={ServiceOrders}></Route>
            <Route path="/Services" component={Services}></Route>
            <Route path="/Paths" component={Parths}></Route>
            <Route path="/Employees" component={Employees}></Route>
        </Routes>



        </BrowserRouter>
    )
}

export default Menu;