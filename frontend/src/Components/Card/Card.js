import './Card.css';

function Card(props) {

    return (
        <div className='card-main'>
            <span className='report-title'>
                Média de Idade dos Clientes
            </span> {/*props.title*/}
            <span className='report-result'>
                35 anos
            </span> {/*props.result*/}
        </div>
    )
}

export default Card;
