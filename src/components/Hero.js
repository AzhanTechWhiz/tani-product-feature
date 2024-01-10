import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const MyComponent = () => {
    return (
        <Link to="/add-product">
            <Button variant="primary" className="add-product">
                Add Products
            </Button>
        </Link>
    );
};

export default MyComponent;
