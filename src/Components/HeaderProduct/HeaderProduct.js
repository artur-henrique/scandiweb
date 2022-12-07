import { useNavigate } from 'react-router-dom';
import './HeaderProduct.css';



const HeaderProduct = (props) => {
    const navigate = useNavigate();

    async function registerProduct(product) {
        const response = await fetch('http://localhost:8080', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        const ok = await response.ok;
        
        if (!ok) {
            const json = await response.json();
            if(json === 1062) {
                props.setMessage('Duplicate product');
                handleInvalid();
            }
        } else {
            handleResetStates();
            navigate('/');
        }

    }

    function handleResetStates() {
        props.setSku('');
        props.setName('');
        props.setPrice('');
        props.setType('');
        props.setBookWeight('');
        props.setDvdSize('');
        props.setFurnitureHeight('');
        props.setFurnitureWidth('');
        props.setFurnitureLength('');
    }

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
    
        if (!props.sku || !props.name || !props.price || isNaN(props.price) || !props.type) {
            props.setMessage('Please, submit required data.');
            return handleInvalid();
        }
    
        if (props.type === 'book') {
            if (!props.bookWeight || isNaN(props.bookWeight)) {
                props.setMessage('Book weight must be a number.');
                return handleInvalid();
            } else {
                Object.assign(data, { attribute: props.bookWeight });
            }
        }
    
        if (props.type === 'dvd') {
            if (!props.dvdSize || isNaN(props.dvdSize)) {
                props.setMessage('DVD size must be a number.');
                return handleInvalid();
            } else {
                Object.assign(data, { attribute: props.dvdSize });
            }
        }
    
        if (props.type === 'furniture') {
            if (!props.furnitureHeight || isNaN(props.furnitureHeight) || !props.furnitureWidth || isNaN(props.furnitureWidth) || !props.furnitureLength || isNaN(props.furnitureLength)) {
                props.setMessage('Furniture dimensions must be filled with centimeters (number).');
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
                <li id={props.btnID}><button onClick={() => navigate('/')}>{props.btnTitle2}</button></li>
            </ul>
            </div>
            <hr/>
            
        </header>
    )
}

export default HeaderProduct;