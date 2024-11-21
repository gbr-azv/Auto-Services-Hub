import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function Costumers() {

  const [customers, setCostumers] = useState([]);

  useEffect(() => {
    const fetchCostumers = async () => {
      const response = await fetch('http://127.0.0.1:8000/customers/');
      const result = await response.json();
      setCostumers(result);
    }
    fetchCostumers();
  }, []);

  return (
    <div className='customers-main'>
      <Header
        counter={customers.count}
        title={'Clientes'}
      />
      <Search
        link={'/Costumers/new-customer'}
        placeholder={'Nome do Cliente'}
        addButton={'Novo Cliente'}
      />
      <Dashboard/>
      <Table 
        data={customers} 
        object={'customer'}
        urlRoute={'Costumers'}
      />
    </div>
  );
}

export default Costumers
