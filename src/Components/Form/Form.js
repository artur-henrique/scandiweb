import './Form.css';

const Form = (props) => {

    return (
        <form id="product_form">
            { props.invalid && <p className="invalid-data">{props.message}</p>}
            <div>
                <label htmlFor="sku">SKU</label>
                <input onChange={(e) => props.setSku(e.target.value)} value={props.sku} type="text" id="sku" required />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={(e) => props.setName(e.target.value)} value={props.name} type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input onChange={(e) => props.setPrice(e.target.value)} value={props.price} type="text" id="price" required />
            </div>

            <div>
                <label htmlFor="productType">Type Switcher</label>
                <select onChange={(e) => {
                    props.setType(e.target.value);
                    props.setBookWeight('');
                    props.setDvdSize('');
                    props.setFurnitureHeight('');
                    props.setFurnitureWidth('');
                    props.setFurnitureLength('');
                }} 
                name="type" id="productType" required>
                    <option value=""></option>
                    <option value="book">Book</option>
                    <option value="dvd">DVD</option>
                    <option value="furniture">Furniture</option>
                </select>
            </div>


            {props.type === 'dvd' && 
                <>
                    <div>
                        <label htmlFor="size">Size (MB)</label>
                        <input onChange={(e) => props.setDvdSize(e.target.value)} value={props.dvdSize}  type="text" id="size" required />
                    </div>
                    <small>* Please, provide size in MB.</small>
                </>
            }


            {props.type === 'furniture' &&
                <>
                    <div>
                        <label htmlFor="height">Height (CM)</label>
                        <input onChange={(e) => props.setFurnitureHeight(e.target.value)} value={props.furnitureHeight}  type="text" id="height" required />
                    </div>
                    <div>
                        <label htmlFor="width">Width (CM)</label>
                        <input onChange={(e) => props.setFurnitureWidth(e.target.value)} value={props.furnitureWidth}  type="text" id="width" required />
                    </div>
                    <div>
                        <label htmlFor="length">Length (CM)</label>
                        <input onChange={(e) => props.setFurnitureLength(e.target.value)} value={props.furnitureLength}  type="text" id="length" required />
                    </div>
                    <small>* Please, provide dimensions in centimeters.</small>
                </>
            }

            {props.type === 'book' &&
                <>
                    <div>
                        <label htmlFor="weight">Weight (KG)</label>
                        <input onChange={(e) => props.setBookWeight(e.target.value)} value={props.bookWeight}  type="text" id="weight" required />
                    </div>
                    <small>* Please, provide weight in KG.</small>
                </>
            }

        </form>
    )
}

export default Form;