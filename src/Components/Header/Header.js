import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="header">
            <h1>{props.title}</h1>
            <ul className="listAction">
                <li><button>{props.btnTitle1}</button></li>
                <li id={props.btnID}><button onClick={props.callbackFunc}>{props.btnTitle2}</button></li>
            </ul>
            </div>
            <hr/>
            
        </header>
    )
}

export default Header;