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
        const { sku, name, price, type } = props;

        if (!sku || !name || !price || !type) {
            props.setMessage('Please, submit required data.');
            return handleInvalid();
        }

        if (isNaN(price)) {
            props.setMessage('Price must be a number.');
            return handleInvalid();
        }

        if (price < 0) {
            props.setMessage('Price must be greater than 0.');
            return handleInvalid();
        }
    
        if (type === 'book') {
            const { bookWeight } = props;
            if (!bookWeight) {
                props.setMessage('Book weight must be filled.');
                return handleInvalid();
            }

            if (isNaN(bookWeight)) {
                props.setMessage('Book weight must be a number.');
                return handleInvalid();
            }

            Object.assign(data, { attribute: bookWeight });
        }
    
        if (props.type === 'dvd') {
            const { dvdSize } = props;

            if (!dvdSize || isNaN(dvdSize)) {
                props.setMessage('DVD size must be a number.');
                return handleInvalid();
            } else {
                Object.assign(data, { attribute: dvdSize });
            }
        }
    
        if (props.type === 'furniture') {
            const { furnitureHeight, furnitureWidth, furnitureLength } = props;

            if (!furnitureHeight || isNaN(furnitureHeight) || !furnitureWidth || isNaN(furnitureWidth) || !furnitureLength || isNaN(furnitureLength)) {
                props.setMessage('Furniture dimensions must be filled with number (in centimeters).');
                return handleInvalid();
            } else {
                Object.assign(data, { attribute: `${furnitureHeight}x${furnitureWidth}x${furnitureLength}` });
            }
        }
        
        Object.assign(data, { sku, name, price: Number(price), type });
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