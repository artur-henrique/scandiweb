import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

const AddProduct = () => {
    return (
        <>
            <Header 
                title="Product Add"
                btnTitle1="Save"
                btnTitle2="Cancel"
            />
            <Form />
            <Footer />
        </>
    )
}

export default AddProduct;