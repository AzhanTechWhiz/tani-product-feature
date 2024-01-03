import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./components.css";

const MyComponent = () => {
    const [show, setShow] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleClose = () => {
        setShow(false);
        setSubmitted(false);
    };
    
    const handleSubmit = () => {

        setSubmitted(true);
        setTimeout(() => {
            handleClose(); 
        }, 2000);
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
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter the name of the product"
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter SKU of the product"
                        />
                        <select className="form-select mb-2" aria-label="Select Category">
                            <option>Select a Category of the product</option>
                            <option value="category1">Switch</option>
                            <option value="category2">Breaker</option>
                            <option value="category3">Fan</option>
                            <option value="category4">LED Bulb</option>
                        </select>
                        <select className="form-select mb-2" aria-label="Select Series">
                            <option>Select a Series of the product</option>
                            <option value="series1">Royal Gold</option>
                            <option value="series2">Royal White</option>
                            <option value="series3">Timber</option>
                            <option value="series4">Platinum</option>
                        </select>
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter Price of the product"
                        />
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Enter Stock of the product"
                        />
                        <h5 style={{marginTop : '20px' , marginLeft : '5px'}}>Add Manufacture Items:</h5>
                        <select style={{marginTop : '20px'}} className="form-select mb-2" aria-label="Select Manufacture Items">
                            <option>Manufacture Items</option>
                            <option value="manufacture1">Switch</option>
                            <option value="manufacture2">Socket</option>
                            <option value="manufacture3">Fan Plate</option>
                            <option value="manufacture4">Iron</option>
                        </select>
                    </div>
                </Modal.Body>
                {submitted ? (
                    <div className="modal-footer" style={{ backgroundColor: "#ecebeb" }}>
                        <p>Your product is entered successfully</p>
                        <span>&#10004;</span>
                    </div>
                ) : 
                (
                    <div className="modal-footer" style={{ backgroundColor: "#ecebeb" }}>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>
                )}
            </Modal>
        </>
    );
};

export default MyComponent;
