import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function Parths() {

  const [parts, setParts] = useState([]);

  useEffect(() => {
    const fetchParts = async () => {
      const response = await fetch('http://127.0.0.1:8000/parts/');
      const result = await response.json();
      setParts(result);
    }
    fetchParts();
  }, []);

  return (
    <div className='customers-main'>
      <Header
        counter={parts.count}
        title={'Peças'}
      />
      <Search
        link={'/Parts/new-part'}
        placeholder={'Nome da Peça'}
        addButton={'Nova Peça'}
      />
      <Dashboard/>
      <Table 
        data={parts} 
        object={'part'}
        urlRoute={'Parts'}
      />
    </div>
  );
}

export default Parths
