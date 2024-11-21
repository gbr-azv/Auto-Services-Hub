import React from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';

import '../styles/Costumers.css';

function Costumers() {
  return (
    <div className='customers-main'>
      <Header/>
      <Search/>
    </div>
  );
}

export default Costumers
