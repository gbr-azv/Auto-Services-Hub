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
import NewServiceOrder from './pages/NewServiceOrders';
import EditServiceOrder from './pages/EditServiceOrder';

import Services from './pages/Services';
import NewService from './pages/NewService';
import EditService from './pages/EditService';

import Parths from './pages/Parths';
import NewParth from './pages/NewParth';
import EditParth from './pages/EditParths';

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
        <Route path="/Employees/new-employee" element={<NewEmployee/>}/>
        <Route path="/Employees/edit-employee/:id" element={<EditEmployee/>}/>
        <Route path="/Vehicles" element={<Vehicles />}/>
        <Route path="/Vehicles/new-vehicle" element={<NewVehicle/>}/>
        <Route path="/Vehicles/edit-vehicle/:id" element={<EditVehicle/>}/>
        <Route path="/ServiceOrders" element={<ServiceOrders/>}/>
        <Route path="/ServiceOrders/new-serviceOrder" element={<NewServiceOrder/>}/>
        <Route path="/ServiceOrders/edit-serviceOrder/:id" element={<EditServiceOrder/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Services/new-service" element={<NewService/>}/>
        <Route path="/Services/edit-service/:id" element={<EditService/>}/>
        <Route path="/Parts" element={<Parths/>}/>
        <Route path="/Parts/new-part" element={<NewParth/>}/>
        <Route path="/Parts/edit-part/:id" element={<EditParth/>}/>
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
