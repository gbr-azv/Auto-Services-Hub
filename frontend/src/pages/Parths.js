import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function Parths() {

  const [parths, setParths] = useState([]);

  useEffect(() => {
    const fetchParths = async () => {
      const response = await fetch('http://127.0.0.1:8000/parths/');
      const result = await response.json();
      setParths(result);
    }
    fetchParths();
  }, []);

  return (
    <div className='customers-main'>
      <Header
        counter={parths.count}
        title={'Peças'}
      />
      <Search
        link={'/Parths/new-parth'}
        placeholder={'Nome da Peça'}
        addButton={'Nova Peça'}
      />
      <Dashboard/>
      <Table 
        data={parths} 
        object={'parth'}
      />
    </div>
  );
}

export default Parths
