import React from 'react';

import { useEffect, useState } from 'react';

import Header from '../Components/Header/Header';
import Search from '../Components/Search/Search';
import Dashboard from '../Components/Dashboard/Dashboard';
import Table from '../Components/Table/Table';

import '../styles/Costumers.css';

function Employees() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('http://127.0.0.1:8000/employees/');
      const result = await response.json();
      setEmployees(result);
    }
    fetchEmployees();
  }, []);

  return (
    <div className='customers-main'>
      <Header
        counter={employees.count}
        title={'Funcionários'}
      />
      <Search
        link={'/Employees/new-employee'}
        placeholder={'Nome do Funcionário'}
        addButton={'Novo Funcionário'}
      />
      <Dashboard/>
      <Table 
        data={employees} 
        object={'employee'}
        urlRoute={'Employees'}
      />
    </div>
  );
}

export default Employees