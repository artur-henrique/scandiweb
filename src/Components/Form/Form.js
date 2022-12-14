import './Form.css';

const Form = (props) => {

    return (
        <form id="product_form">
            { props.invalid && <p className="invalid-data">{props.message}</p>}
            <div>
                <label htmlFor="sku">SKU</label>
                <input className='form-control' onChange={(e) => props.setSku(e.target.value)} value={props.sku} type="text" id="sku" required />
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input className='form-control' onChange={(e) => props.setName(e.target.value)} value={props.name} type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="price">Price ($)</label>
                <input className='form-control' onChange={(e) => props.setPrice(e.target.value)} value={props.price} type="number" id="price" required />
            </div>

            <div>
                <label htmlFor="productType">Type Switcher</label>
                <select className='form-select d-inline mb-12' onChange={(e) => {
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
                        <input className='form-control' onChange={(e) => props.setDvdSize(e.target.value)} value={props.dvdSize}  type="number" id="size" required />
                    </div>
                    <small>* Please, provide size in MB.</small>
                </>
            }


            {props.type === 'furniture' &&
                <>
                    <div>
                        <label htmlFor="height">Height (CM)</label>
                        <input className='form-control' onChange={(e) => props.setFurnitureHeight(e.target.value)} value={props.furnitureHeight}  type="number" id="height" required />
                    </div>
                    <div>
                        <label htmlFor="width">Width (CM)</label>
                        <input className='form-control' onChange={(e) => props.setFurnitureWidth(e.target.value)} value={props.furnitureWidth}  type="number" id="width" required />
                    </div>
                    <div>
                        <label htmlFor="length">Length (CM)</label>
                        <input className='form-control' onChange={(e) => props.setFurnitureLength(e.target.value)} value={props.furnitureLength}  type="number" id="length" required />
                    </div>
                    <small>* Please, provide dimensions in centimeters.</small>
                </>
            }

            {props.type === 'book' &&
                <>
                    <div>
                        <label htmlFor="weight">Weight (KG)</label>
                        <input className='form-control' onChange={(e) => props.setBookWeight(e.target.value)} value={props.bookWeight}  type="number" id="weight" required />
                    </div>
                    <small>* Please, provide weight in KG.</small>
                </>
            }

        </form>
    )
}

export default Form;