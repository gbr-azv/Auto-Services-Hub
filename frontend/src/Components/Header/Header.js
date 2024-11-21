import './Header.css';

import { FaUserCircle  } from 'react-icons/fa';

function Header(props) {

    return (
        <div className='header-main'>
            <div className='object-counter'>
                <span className='object-name'>
                    {props.title}
                </span>
                <span>
                    ({props.counter} itens cadastrados)
                </span>
            </div>
            <div className='user-icon-info'>
                <FaUserCircle className='user-icon'/>
                <div className='user-info'>
                    <span className='user-name'>
                        Carlos Alberto {/* {props.userName} */}
                    </span>
                    <span>
                        carlos.alberto@example.com {/* {props.userEmail} */}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;
