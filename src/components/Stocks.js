import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./components.css";


export default function ProductManagement() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [editValues, setEditValues] = useState({ productName: '', productQuantity: '' });

    const formValidation = Yup.object().shape({
        productName: Yup.string().required('Product name is required !'),
        productQuantity: Yup.string().required('Product Type is required !'),
    });

    const onSubmit = (values, { resetForm }) => {
        const { productName, productQuantity } = values;

        if (productName.trim() === '' || productQuantity.trim() === '') {
            return;
        }

        const newProduct = {
            ProductName: productName,
            ProductQuantity: productQuantity,
        };

        if (editingProduct !== null) {
            const updatedProducts = [...products];
            updatedProducts[editingProduct] = newProduct;
            setProducts(updatedProducts);
            setEditingProduct(null);
            setEditValues({ productName: '', productQuantity: '' }); // Clear editing values
        } else {
            setProducts([...products, newProduct]);
        }

        resetForm();
    };
    

    const onDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    const onEditProduct = (index) => {
        const productToEdit = products[index]; 
        setEditValues({
            productName: productToEdit.ProductName,
            productQuantity: productToEdit.ProductQuantity,
        });
        setEditingProduct(index);
    };

    return (
        <div>
            <div className="container text-center">
                <div className="row align-items-start">
                    <h1 style={{ textAlign: "center", marginBottom: "30px", color: "white" }}>Product SOFTWARE :- </h1>
                    <div className="col">
                        <Formik
                            initialValues={{
                                productName: '',
                                productQuantity: '',
                            }}
                            validationSchema={formValidation}
                            onSubmit={onSubmit}
                        >
                            {({ values, handleChange, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="fields">
                                        <Field className="unique-input" type="text" name="productName" placeholder="Enter product name" value={values.productName} onChange={handleChange} />
                                        <ErrorMessage name="productName" component="div" className="error-msg" />
                                    </div>
                                    <div className="fields">
                                        <Field className='unique-input' type="text" name="productQuantity" placeholder="Enter product type" value={values.productQuantity} onChange={handleChange} />
                                        <ErrorMessage name="productQuantity" component="div" className="error-msg" />
                                    </div>
                                    <button type="submit" className="unique-button-submit">SUBMIT</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className="col">
                        <div className="container text-center">
                            <div id="process">
                                <input className='unique-input' type="text" id="searchInput" placeholder="Enter Product name :" />
                                <button className='unique-button' style={{ marginLeft: "20px", }}>Search Your Product</button>
                            </div>
                        </div>
                        <p id="list"></p>
                        <div id="ProductsList">
                            {products.map((product, index) => {
                                return (
                                    <div className='items' key={index}>
                                        <h2 style={{ color: 'black' }}>{product.ProductName}</h2>
                                        <h3 style={{ color: 'black' }}>{product.ProductQuantity}</h3>
                                        <button className='unique-button' onClick={() => onEditProduct(index)}>Edit</button>
                                        <button className='unique-button' onClick={() => onDeleteProduct(index)}>Delete</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


