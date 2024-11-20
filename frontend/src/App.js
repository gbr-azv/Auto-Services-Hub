import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Home'
import Home from "./pages/Home";
import Costumers from "./pages/Costumers";
import Vehicles from "./pages/Vehicles";
import ServiceOrders from "./pages/ServiceOrders";
import Services from "./pages/Services";
import Parths from "./pages/Parths";
import Employees from "./pages/Employees";

function App() {
  return (

   
    <Router>
      <Menu />
      <Routes>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/Costumers" component={Costumers}></Route>
        <Route path="/Vehicles" component={Vehicles}></Route>
        <Route path="/ServiceOrdens" component={ServiceOrders}></Route>
        <Route path="/Services" component={Services}></Route>
        <Route path="/Paths" component={Parths}></Route>
        <Route path="/Employees" component={Employees}></Route>
        <Route path="/Login" component={Login}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
//testando comit