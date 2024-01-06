import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./components.css";

const MyComponent = () => {
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleClose = () => {
        setShow(false);
        setSubmitted(false);
    };

    return (
        <>
            <Button variant="primary" className="add-product" onClick={() => setShow(true)}>
                Add Products
            </Button>

            <Modal
                style={{ padding: "30px", borderRadius: "130px" }}
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton style={{ backgroundColor: "#ecebeb" }}>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "#ecebeb" }}>
                    <Formik
                        initialValues={{
                            productName: "",
                            sku: "",
                            category: "",
                            series: "",
                            price: "",
                            stock: "",
                            manufactureItem: "",
                        }}
                        validationSchema={Yup.object({
                            productName: Yup.string().required("Product name is Required !"),
                            sku: Yup.string().required("SKU is Required !"),
                            category: Yup.string().required("Category is Required !"),
                            series: Yup.string().required("Series Is Required !"),
                            price: Yup.string().required("Enter The Price Here !"),
                            stock: Yup.string().required("Enter The Stock Here !"),
                            manufactureItem: Yup.string().required("Enter The Manufacture Items Here !"),
                        })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitted(true);
                            setTimeout(() => {
                                handleClose();
                                resetForm();
                                setSubmitted(false);
                            }, 2000);
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="mb-3">
                                    <Field
                                        type="text"
                                        name="productName"
                                        className="form-control mb-2"
                                        placeholder="Enter the name of the product"
                                    />
                                    <ErrorMessage name="productName" component="div" className="error" />

                                    <Field
                                        type="text"
                                        name="sku"
                                        className="form-control mb-2"
                                        placeholder="Enter SKU of the product"
                                    />
                                    <ErrorMessage name="sku" component="div" className="error" />

                                    <Field
                                        as="select"
                                        name="category"
                                        className="form-select mb-2"
                                        aria-label="Select Category of the product"
                                    >
                                        <option value="">Select a Category of the product</option>
                                        <option value="category1">Switch</option>
                                        <option value="category2">Breaker</option>
                                        <option value="category3">Fan</option>
                                        <option value="category4">LED Bulb</option>
                                    </Field>
                                    <ErrorMessage name="category" component="div" className="error" />

                                    <Field
                                        as="select"
                                        name="series"
                                        className="form-select mb-2"
                                        aria-label="Select Series of the product"
                                    >
                                        <option>Select a Series of the product</option>
                                        <option value="series1">Royal Gold</option>
                                        <option value="series2">Royal White</option>
                                        <option value="series3">Timber</option>
                                        <option value="series4">Platinum</option>
                                    </Field>
                                    <ErrorMessage name="series" component="div" className="error" />

                                    <Field
                                        type="text"
                                        name="price"
                                        className="form-control mb-2"
                                        placeholder="Enter Price of the product"
                                    />
                                    <ErrorMessage name="price" component="div" className="error" />

                                    <Field
                                        type="text"
                                        name="stock"
                                        className="form-control mb-2"
                                        placeholder="Enter Stock of the product"
                                    />
                                    <ErrorMessage name="stock" component="div" className="error" />

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

                                {submitted ? (
                                    <div className="modal-footer" style={{ backgroundColor: "#ecebeb" }}>
                                        <p>Your product is entered successfully</p>
                                        <span>&#10004;</span>

                                    </div>
                                ) : (
                                    <div className="modal-footer" style={{ backgroundColor: "#ecebeb" }}>
                                        <button style={{width : '30%'}} type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default MyComponent;
