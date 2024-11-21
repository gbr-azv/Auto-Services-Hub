import React from 'react';

import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';

import '../styles/NewCostumer.css';

function NewParth(props) {

  return (
    <div className='new-customer-main'>
        <Header
          counter={0}
          title={'Nova Peça'}
        />
        <Form/>
    </div>
  );
}

export default NewParth