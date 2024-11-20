import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Costumers from './pages/Costumers';
import Vehicles from './pages/Vehicles';
import ServiceOrders from './pages/ServiceOrders';
import Services from './pages/Services';
import Parths from './pages/Parths';
import Employees from './pages/Employees';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Costumers" element={<Costumers />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/ServiceOrdens" element={<ServiceOrders />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Paths" element={<Parths />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
