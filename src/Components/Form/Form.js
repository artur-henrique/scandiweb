import { useState } from 'react';

import './Form.css';

const Form = () => {
    const [ type, setType ] = useState(null);

    function handleChange({target}) {
        setType(target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
    }

    return (
        <form id="product_form">
            <div>
                <label for="sku">SKU</label>
                <input type="text" id="sku" required />
            </div>
            <div>
                <label for="name">Name</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label for="price">Price</label>
                <input type="text" id="price" required />
            </div>

            <div>
                <label for="productType">Type Switcher</label>
                <select onChange={handleChange} name="type" id="productType" required>
                    <option value=""></option>
                    <option value="book">Book</option>
                    <option value="dvd">DVD</option>
                    <option value="furniture">Furniture</option>
                </select>
            </div>


            {type === 'dvd' && 
                <>
                    <div>
                        <label for="size">Size (MB)</label>
                        <input type="text" id="size" required />
                    </div>
                    <small>* Please, provide size in MB.</small>
                </>
            }


            {type === 'furniture' &&
                <>
                    <div>
                        <label for="height">Height (CM)</label>
                        <input type="text" id="height" required />
                    </div>
                    <div>
                        <label for="width">Width</label>
                        <input type="text" id="width" required />
                    </div>
                    <div>
                        <label for="length">Length</label>
                        <input type="text" id="length" required />
                    </div>
                    <small>* Please, provide dimensions in centimeters.</small>
                </>
            }

            {type === 'book' &&
                <>
                    <div>
                        <label for="weight">Weight (KG)</label>
                        <input type="text" id="weight" required />
                    </div>
                    <small>* Please, provide weight in KG.</small>
                </>
            }

            <input onClick={handleSubmit} type="submit" value="Enviar" />

        </form>
    )
}

export default Form;