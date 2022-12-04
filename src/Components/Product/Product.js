import formatter from '../../utils/formatter';

import './Product.css';

const Product = ({data}) => {
    return (
        <>
            <input type="checkbox" className="delete-checkbox" />
            <p>{data.sku}</p>
            <p>{data.name}</p>
            <p>{formatter.format(data.price)}</p>
            {data.type === 'furniture' && <p>Dimension: {data.attribute}</p>}
            {data.type === 'book' && <p>Weight: {data.attribute}</p>}
            {data.type === 'dvd' && <p>Size: {data.attribute}</p>}
        </>
    )
}

export default Product;