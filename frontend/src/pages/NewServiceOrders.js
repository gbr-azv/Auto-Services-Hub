import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import '../styles/NewCostumer.css';

function NewServiceOrder(props) {

  return (
    <div className='new-customer-main'>
        <Header
          counter={0}
          title={'Nova Ordem de Servico'}
        />
        <Form/>
    </div>
  );
}

export default NewServiceOrder
