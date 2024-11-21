import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function Vehicles() {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await fetch('http://127.0.0.1:8000/vehicles/');
      const result = await response.json();
      setVehicles(result);
    }
    fetchVehicles();
  }, []);

  return (
    <div className='vehicles-main'>
      <Header
        counter={vehicles.count}
        title={'Veículos'}
      />
      <Search
        link={'/Vehicles/new-vehicle'}
        placeholder={'Nome do Veículo'}
        addButton={'Novo Veículo'}
      />
      <Dashboard/>
      <Table 
        data={vehicles} 
        object={'vehicle'}
        urlRoute={'Vehicles'}
      />
    </div>
  );
}

export default Vehicles
