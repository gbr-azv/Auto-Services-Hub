import './Header.css';

import { FaUserCircle  } from 'react-icons/fa';

function Header(props) {

    return (
        <div className='header-main'>
            <div>
                <span className='object-name'>
                    Clientes {/* {props.object} */}
                </span>
                <span>
                    (50 itens cadastrados) {/* {props.total} itens cadastrados */}
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
