import './Search.css';

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
                <span>
                    {props.addButton}
                </span>
            </button> {/*props.object*/}
        </div>
    )
}

export default Search;
