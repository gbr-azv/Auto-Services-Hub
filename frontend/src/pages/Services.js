import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('http://127.0.0.1:8000/services/');
      const result = await response.json();
      setServices(result);
    }
    fetchServices();
  }, []);

  return (
    <div className='customers-main'>
      <Header
        counter={services.count}
        title={'Servicos'}
      />
      <Search
        link={'/Services/new-service'}
        placeholder={'Nome do Serviço'}
        addButton={'Novo Serviço'}
      />
      <Dashboard/>
      <Table 
        data={services} 
        object={'service'}
      />
    </div>
  );
}

export default Services
