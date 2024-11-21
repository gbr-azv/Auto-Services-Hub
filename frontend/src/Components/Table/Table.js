import { tableHeaders, renderRows } from '../../utils/tableConfig';

import './Table.css';

function Table(props) {

    return (
        <div className="table-main">
            <table className="table-layout">
                <colgroup>
                    <col style={{ width: '5%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '25%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '25%' }} />
                </colgroup>
                <thead>
                    {tableHeaders[props.object]}
                </thead>
                <tbody>
                    {renderRows(props.data, props.object)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
