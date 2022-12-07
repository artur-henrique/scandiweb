import { useState, useRef } from 'react';

import HeaderProduct from '../HeaderProduct/HeaderProduct';
import Form from '../Form/Form';

const AddProduct = () => {
    const timeoutRef = useRef();

    const [ invalid, setInvalid ] = useState(false);
    const [ message, setMessage ] = useState('Please, submit required data');
 
    const [ sku, setSku ] = useState('');
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ type, setType ] = useState('');
    const [ bookWeight, setBookWeight ] = useState('');
    const [ dvdSize, setDvdSize ] = useState('');
    const [ furnitureHeight, setFurnitureHeight ] = useState('');
    const [ furnitureWidth, setFurnitureWidth ] = useState('');
    const [ furnitureLength, setFurnitureLength ] = useState('');

    return (
        <>
            <HeaderProduct 
                title="Product Add"
                btnTitle1="Save"
                btnTitle2="Cancel"
                timeoutRef={timeoutRef}

                message={message}
                setMessage={setMessage}
                invalid={invalid}
                setInvalid={setInvalid}
                sku={sku}
                setSku={setSku}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                type={type}
                setType={setType}
                bookWeight={bookWeight}
                setBookWeight={setBookWeight}
                dvdSize={dvdSize}
                setDvdSize={setDvdSize}
                furnitureHeight={furnitureHeight}
                setFurnitureHeight={setFurnitureHeight}
                furnitureWidth={furnitureWidth}
                setFurnitureWidth={setFurnitureWidth}
                furnitureLength={furnitureLength}
                setFurnitureLength={setFurnitureLength}
            />
            <Form
                message={message}
                setMessage={setMessage}
                invalid={invalid}
                setInvalid={setInvalid}
                sku={sku}
                setSku={setSku}
                name={name}
                setName={setName}
                price={price}
                setPrice={setPrice}
                type={type}
                setType={setType}
                bookWeight={bookWeight}
                setBookWeight={setBookWeight}
                dvdSize={dvdSize}
                setDvdSize={setDvdSize}
                furnitureHeight={furnitureHeight}
                setFurnitureHeight={setFurnitureHeight}
                furnitureWidth={furnitureWidth}
                setFurnitureWidth={setFurnitureWidth}
                furnitureLength={furnitureLength}
                setFurnitureLength={setFurnitureLength}
            />
        </>
    )
}

export default AddProduct;