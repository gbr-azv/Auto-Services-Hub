import React from 'react';

import './Input.css';

function Input(props) {

  return (
    <input 
      type='text'
      placeholder={props.placeholder}
      className='input-main'
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input
