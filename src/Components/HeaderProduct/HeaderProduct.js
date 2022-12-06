import './HeaderProduct.css';

async function registerProduct(product) {
    fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
}

const Header = (props) => {

    function handleInvalid() {
        props.setInvalid(true);
        clearTimeout(props.timeoutRef.current);
        props.timeoutRef.current = setTimeout(() => {
            props.setInvalid(false);
        }, 2000);
    }
    
    function handleSubmit (e) {
        e.preventDefault();
        const data = {};
    
        if (!props.sku || !props.name || !props.price || !props.type) {
            return handleInvalid();
        }
    
        if (props.type === 'book') {
            if (!props.bookWeight || isNaN(props.bookWeight)) {
                return handleInvalid();
            } else {
                Object.assign(data, { attribute: props.bookWeight });
            }
        }
    
        if (props.type === 'dvd') {
            if (!props.dvdSize || isNaN(props.dvdSize)) {
                return handleInvalid();
            } else {
                Object.assign(data, { attribute: props.dvdSize });
            }
        }
    
        if (props.type === 'furniture') {
            if (!props.furnitureHeight || isNaN(props.furnitureHeight) || !props.furnitureWidth || isNaN(props.furnitureWidth) || !props.furnitureLength || isNaN(props.furnitureLength)) {
                return handleInvalid();
            } else {
                Object.assign(data, { attribute: `${props.furnitureHeight}x${props.furnitureWidth}x${props.furnitureLength}` });
            }
        }
        const { sku, name, price, type } = props;
        Object.assign(data, { sku, name, price, type });
        registerProduct(data);
    }

    return (
        <header>
            <div className="header">
            <h1>{props.title}</h1>
            <ul className="listAction">
                <li><button onClick={handleSubmit} >{props.btnTitle1}</button></li>
                <li id={props.btnID}><button onClick={props.callbackFunc}>{props.btnTitle2}</button></li>
            </ul>
            </div>
            <hr/>
            
        </header>
    )
}

export default Header;