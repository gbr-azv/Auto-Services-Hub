import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function ServiceOrders() {

  const [serviceOrders, setServiceOrders] = useState([]);

  useEffect(() => {
    const fetchServiceOrders = async () => {
      const response = await fetch('http://127.0.0.1:8000/service-orders/');
      const result = await response.json();
      setServiceOrders(result);
    }
    fetchServiceOrders();
  }, []);

  return (
    <div className='customers-main'>
      <Header
        counter={serviceOrders.count}
        title={'Ordens de Serviço'}
      />
      <Search
        link={'/ServiceOrders/new-serviceOrder'}
        placeholder={'Data da Ordem de Serviço'}
        addButton={'Nova Ordem de Serviço'}
      />
      <Dashboard/>
      <Table 
        data={serviceOrders} 
        object={'serviceOrder'}
        urlRoute={'ServiceOrders'}
      />
    </div>
  );
}

export default ServiceOrders
