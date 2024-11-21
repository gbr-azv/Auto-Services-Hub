import './Table.css';

function Table(props) {

    return (
        <div className='table-main'>
            <table className='table-layout'>
                <colgroup>
                    <col style={{ width: '5%' }}/>
                    <col style={{ width: '25%' }}/>
                    <col style={{ width: '25%' }}/>
                    <col style={{ width: '20%' }}/>
                    <col style={{ width: '25%' }}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mariana Costa</td>
                        <td>987-65-4321</td>
                        <td>555-987-6543</td>
                        <td>mariana.costa@example.com</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mariana Costa</td>
                        <td>987-65-4321</td>
                        <td>555-987-6543</td>
                        <td>mariana.costa@example.com</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mariana Costa</td>
                        <td>987-65-4321</td>
                        <td>555-987-6543</td>
                        <td>mariana.costa@example.com</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mariana Costa</td>
                        <td>987-65-4321</td>
                        <td>555-987-6543</td>
                        <td>mariana.costa@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;
