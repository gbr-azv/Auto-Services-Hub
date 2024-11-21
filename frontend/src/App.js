import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './Components/Menu/Menu';

import Costumers from './pages/Costumers';
import NewCostumer from './pages/NewCostumer';
import EditCostumer from './pages/EditCostumer';

import Vehicles from './pages/Vehicles';
import NewVehicle from './pages/NewVehicle';
import EditVehicle from './pages/EditVehicle';

import ServiceOrders from './pages/ServiceOrders';

import Services from './pages/Services';

import Parths from './pages/Parths';

import Employees from './pages/Employees';
import NewEmployee from './pages/NewEmployee';
import EditEmployee from './pages/EditEmployee';

function App() {
  return (
    <Router>
      <ConditionalMenu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Costumers" element={<Costumers/>}/>
        <Route path="/Costumers/new-customer" element={<NewCostumer/>}/>
        <Route path="/Costumers/edit-customer/:id" element={<EditCostumer/>}/>
        <Route path="/Employees" element={<Employees/>}/>
        <Route path="/Employees/new-employee" element={<NewVehicle/>}/>
        <Route path="/Employees/edit-employee/:id" element={<EditVehicle/>}/>
        <Route path="/Vehicles" element={<Vehicles />}/>
        <Route path="/Vehicles/new-vehicle" element={<NewVehicle/>}/>
        <Route path="/Vehicles/edit-vehicle/:id" element={<EditVehicle/>}/>
        <Route path="/ServiceOrdens" element={<ServiceOrders/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Parts" element={<Parths/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
  );

  function ConditionalMenu() {

    const location = useLocation();

    if (location.pathname === '/Login') {
      return null;
    }

    return <Menu />;
  }
}

export default App;
