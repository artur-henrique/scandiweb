import { useNavigate } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <header>
            <div className="header">
            <h1>{props.title}</h1>
            <ul className="listAction">
                <li><button className='btn btn-light' onClick={() => navigate('/addproduct')} >{props.btnTitle1}</button></li>
                <li id={props.btnID}><button className='btn btn-danger' onClick={props.callbackFunc}>{props.btnTitle2}</button></li>
            </ul>
            </div>
            <hr/>
            
        </header>
    )
}

export default Header;