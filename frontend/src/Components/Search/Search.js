import './Search.css';

import { Link } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa';

function Search(props) {

    return (
        <div className='search-main'>
            <input 
                type="text" 
                placeholder={`Pesquisar por ${props.placeholder}`}
                className='search-input'
            /> {/*props.object*/}
            <button 
                type='button' 
                className='search-button'
            >
                <FaPlus className='plus-icon'/>
                <Link to={props.link}>{props.addButton}</Link>
            </button> {/*props.object*/}
        </div>
    )
}

export default Search;
