import Product from '../Product/Product';
import './ProductList.css';

const ProductList = ({data}) => {
    return (
        <main>
            <ul className="product-list">
                {data.map(data => 
                    <li className="product" key={data.sku}><Product data={data} /></li>    
                )}
            </ul>
        </main>
    )
}

export default ProductList;