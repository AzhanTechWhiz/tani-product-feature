import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./components.css";

const Products = () => {
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="form-container container ">
            <h1>Add Product</h1>
            <Formik
                initialValues={{
                    productName: "",
                    sku: "",
                    category: "",
                    series: "",
                    price: "",
                    stock: "",
                    manufactureItem: "",
                    description: "",
                    weight: "",
                    dimensions: {
                        length: "",
                        width: "",
                        height: "",
                    },
                }}
                validationSchema={Yup.object({
                    productName: Yup.string().required("Product name is Required!"),
                    sku: Yup.string().required("SKU is Required!"),
                    category: Yup.string().required("Category is Required!"),
                    series: Yup.string().required("Series Is Required!"),
                    price: Yup.string().required("Enter The Price Here!"),
                    stock: Yup.string().required("Enter The Stock Here!"),
                    manufactureItem: Yup.string().required("Enter The Manufacture Items Here!"),
                    description: Yup.string().required("Description is Required!"),
                    weight: Yup.number().required("Weight is Required!"),
                    dimensions: Yup.object().shape({
                        length: Yup.number().required("Length is Required!"),
                        width: Yup.number().required("Width is Required!"),
                        height: Yup.number().required("Height is Required!"),
                    }),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setSubmitted(true);
                    setTimeout(() => {
                        resetForm();
                        setSubmitted(false);
                    }, 2000);
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <div>
                                <label htmlFor="productName">Product Name</label>
                                <Field
                                className="form-control"
                                    type="text"
                                    name="productName"
                                    placeholder="Enter the name of the product"
                                />
                                <ErrorMessage name="productName" component="div" className="error" />
                            </div>
                            <div >
                                <label htmlFor="sku">SKU</label>
                                <Field
                                className="form-control"
                                    type="text"
                                    name="sku"
                                    placeholder="Enter SKU of the product"
                                />
                                <ErrorMessage name="sku" component="div" className="error" />
                            </div>
                            <div>
                                    <Field
                                        as="select"
                                        name="manufactureItem"
                                        className="form-select"
                                        aria-label="Select Manufacture Items"
                                    >
                                        <option>Manufacture Items</option>
                                        <option value="manufacture1">Switch</option>
                                        <option value="manufacture2">Socket</option>
                                        <option value="manufacture3">Fan Plate</option>
                                        <option value="manufacture4">Iron</option>
                                    </Field>
                                    <ErrorMessage name="manufactureItem" component="div" className="error" />
                                </div>
                            <div>
                                    <Field
                                        as="select"
                                        name="manufactureItem"
                                        className="form-select mb-2"
                                        aria-label="Select Manufacture Items"
                                    >
                                        <option>Manufacture Items</option>
                                        <option value="manufacture1">Switch</option>
                                        <option value="manufacture2">Socket</option>
                                        <option value="manufacture3">Fan Plate</option>
                                        <option value="manufacture4">Iron</option>
                                    </Field>
                                    <ErrorMessage name="manufactureItem" component="div" className="error" />
                                </div>
                            <div>
                                <label htmlFor="price">Price</label>
                                <Field
                                className="form-control"
                                    type="text"
                                    name="price"
                                    placeholder="Enter Price of the product"
                                />
                                <ErrorMessage name="price" component="div" className="error" />
                            </div>
                            <div>
                                <label htmlFor="stock">Stock</label>
                                <Field
                                className="form-control"
                                    type="text"
                                    name="stock"
                                    placeholder="Enter Stock of the product"
                                />
                                <ErrorMessage name="stock" component="div" className="error" />
                            </div>
                            <div>
                            <h5 style={{ marginTop: '20px', marginLeft: '5px' }}>Add Manufacture Items:</h5>
                                    <Field
                                        as="select"
                                        name="manufactureItem"
                                        className="form-select mb-2"
                                        aria-label="Select Manufacture Items"
                                    >
                                        <option>Manufacture Items</option>
                                        <option value="manufacture1">Switch</option>
                                        <option value="manufacture2">Socket</option>
                                        <option value="manufacture3">Fan Plate</option>
                                        <option value="manufacture4">Iron</option>
                                    </Field>
                                    <ErrorMessage name="manufactureItem" component="div" className="error" />
                                </div>
                            
                           
                        </div>

                        {submitted ? (
                            <div className="modal-footer" style={{ backgroundColor: "#ecebeb" }}>
                                <p>Your product is entered successfully</p>
                                <span>&#10004;</span>
                            </div>
                        ) : (
                            <div className="modal-footer" style={{ backgroundColor: "#ecebeb" }}>
                                <button style={{ width: '30%' }} type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Products;
