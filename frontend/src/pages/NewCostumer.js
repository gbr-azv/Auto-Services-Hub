import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import '../styles/NewCostumer.css';

function NewCostumer(props) {

  return (
    <div className='new-customer-main'>
        <Header
          counter={0}
          title={'Novo Cliente'}
        />
        <Form/>
    </div>
  );
}

export default NewCostumer
