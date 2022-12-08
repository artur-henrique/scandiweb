import { useState, useEffect } from "react";
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";


const Home = () => {
    const [ deleteProductCount, setDeleteProductCount ] = useState(0);

    const [ data, setData ] = useState([]);
    
    useEffect(() => {
        async function getData() {
            const response = await fetch('http://localhost:8080');
            const data = await response.json();
            setData(data);
        }
        getData();
    }, []);
    
    function fetchDelete() {
        const nodeCheckboxes = document.querySelectorAll('.delete-checkbox');
        const arrCheckboxes = [...nodeCheckboxes].filter(product => product.checked);
        const skuList = arrCheckboxes.map(checkEl => {
            return {
                sku: checkEl.nextSibling.innerText
            }
        });
        console.log(skuList);
        
        skuList.forEach(async (product) => {
            await fetch('http://localhost:8080', {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            })
        });

        setDeleteProductCount(deleteProductCount + 1);
    }

    return (
        <>
            <Header 
                title="Product List"
                btnTitle1="ADD"
                btnTitle2="MASS DELETE"
                btnID="delete-product-btn"
                callbackFunc={fetchDelete}
            />
            <ProductList 
                data={data}
            />
        </>
    )
}

export default Home;