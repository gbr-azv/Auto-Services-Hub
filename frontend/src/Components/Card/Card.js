import './Card.css';

function Card(props) {

    return (
        <div className='card-main'>
            <span className='report-title'>
                Relatório
            </span> {/*props.title*/}
            <span className='report-result'>
                Informações
            </span> {/*props.result*/}
        </div>
    )
}

export default Card;
