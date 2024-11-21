import React from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';

import '../styles/Costumers.css';

function Costumers() {
  return (
    <div className='customers-main'>
      <Header/>
      <Search/>
      <Dashboard/>
    </div>
  );
}

export default Costumers
