import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Costumers from './pages/Costumers';
import NewCostumer from './pages/NewCostumer';
import Vehicles from './pages/Vehicles';
import ServiceOrders from './pages/ServiceOrders';
import Services from './pages/Services';
import Parths from './pages/Parths';
import Employees from './pages/Employees';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <Router>
      <ConditionalMenu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Costumers" element={<Costumers/>}/>
        <Route path="/Costumers/new-costumer" element={<NewCostumer/>}/>
        <Route path="/Vehicles" element={<Vehicles />}/>
        <Route path="/ServiceOrdens" element={<ServiceOrders/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Parts" element={<Parths/>}/>
        <Route path="/Employees" element={<Employees/>}/>
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
