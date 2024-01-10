import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./components.css";
import Select from "react-select";

const options = [
  { value: "manufacture1", label: "Switch" },
  { value: "manufacture2", label: "Socket" },
  { value: "manufacture3", label: "Fan Plate" },
  { value: "manufacture4", label: "Iron" },
];

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
          manufactureItem: Yup.string().required(
            "Enter The Manufacture Items Here!"
          ),
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
                  className="form-control w-50 "
                  type="text"
                  name="productName"
                  placeholder="Enter the name of the product"
                />
                <ErrorMessage
                  name="productName"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <label htmlFor="sku">SKU</label>
                <Field
                  className="form-control  w-50"
                  type="text"
                  name="sku"
                  placeholder="Enter SKU of the product"
                />
                <ErrorMessage name="sku" component="div" className="error" />
              </div>
              <div>
                <Field
                  as="select"
                  name="category"
                  className="form-select"
                  aria-label="Select Category Items"
                >
                  <option>Select the Category</option>
                  <option value="category1">Switch</option>
                  <option value="category2">Socket</option>
                  <option value="category3">Fan Plate</option>
                  <option value="category4">Iron</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="error"
                />
              </div>
              <div>
                <Field
                  as="select"
                  name="series"
                  className="form-select mb-2"
                  aria-label="Select series Items"
                >
                  <option>Select the Series</option>
                  <option value="series1">Switch</option>
                  <option value="series2">Socket</option>
                  <option value="series3">Fan Plate</option>
                  <option value="series4">Iron</option>
                </Field>
                <ErrorMessage name="series" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <Field
                  className="form-control  w-50"
                  type="text"
                  name="price"
                  placeholder="Enter Price of the product"
                />
                <ErrorMessage name="price" component="div" className="error" />
              </div>
              <div>
                <label htmlFor="stock">Stock</label>
                <Field
                  className="form-control  w-50"
                  type="text"
                  name="stock"
                  placeholder="Enter Stock of the product"
                />
                <ErrorMessage name="stock" component="div" className="error" />
              </div>
              <div>
                <h5 style={{ marginTop: "20px", marginLeft: "5px" }}>
                  Add Manufacture Items:
                </h5>
                <Field name="manufactureItem"
                >
                  {({ field, form }) => {
                    const handleChange = (selectedOption) => {
                      form.setFieldValue(
                        field.name,
                        selectedOption ? selectedOption.value : "" // Set value as string or empty string
                      );
                    };

                    return (
                      <Select
                      className="form-select"
                        {...field}
                        options={options}
                        onChange={handleChange}
                        onBlur={() => form.setFieldTouched(field.name, true)}
                        placeholder="Select Manufacture Items"
                        isSearchable={true}
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="manufactureItem"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            {submitted ? (
              <div
                className="modal-footer"
                style={{ backgroundColor: "#ecebeb" }}
              >
                <p>Your product is entered successfully</p>
                <span>&#10004;</span>
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
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
