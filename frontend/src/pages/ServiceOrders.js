import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function ServiceOrders() {

  const [serviceorders, setServiceOrders] = useState([]);

  useEffect(() => {
    const fetchServiceOrders = async () => {
      const response = await fetch('http://127.0.0.1:8000/erviceorders/');
      const result = await response.json();
      setServiceOrders(result);
    }
    fetchServiceOrders();
  }, []);

  return (
    <div className='customers-main'>
      <Header
        counter={serviceorders.count}
        title={'Ordem de Serviços'}
      />
      <Search
        link={'/ServiceOrders/new-serviceorder'}
        placeholder={'Nome da Ordem de Serviço'}
        addButton={'Nova Ordem de Serviço'}
      />
      <Dashboard/>
      <Table 
        data={serviceorders} 
        object={'serviceorder'}
      />
    </div>
  );
}

export default ServiceOrders