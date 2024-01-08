import React from "react";

export default function Manufacturing() {
  return (
    <>
      <div style={{ padding: "40px" }}>
        <h1>Manufacture Items :</h1>
        <hr className="line" />
        <div className="">
          <div className="">
            <div className="row align-items-center ">
              <div className="col-2">
              <h4 className="fw-bold my-4">8 + 2</h4>
              </div>
              <div className="col-4">
              <input
                type="text"
                name="Manufacture Items"
                className="form-control mb-2"
                placeholder="Enter Here :"
              />
              </div>
              <div className="col-2">
              <h4 className="fw-bold my-4">Pieces</h4>
              </div>
            </div>
            <div className="row align-items-center ">
              <div className="col-2">
              <h4 className="fw-bold my-4">6 + 2</h4>
              </div>
              <div className="col-4">
              <input
                type="text"
                name="Manufacture Items"
                className="form-control mb-2"
                placeholder="Enter Here :"
              />
              </div>
              <div className="col-2">
              <h4 className="fw-bold my-4">Pieces</h4>
              </div>
            </div>
            <div className="row align-items-center ">
              <div className="col-2">
              <h4 className="fw-bold my-4">Switches</h4>
              </div>
              <div className="col-4">
              <input
                type="text"
                name="Manufacture Items"
                className="form-control mb-2"
                placeholder="Enter Here :"
              />
              </div>
              <div className="col-2">
              <h4 className="fw-bold my-4">Pieces</h4>
              </div>
            </div>
            <div className="row align-items-center ">
              <div className="col-2">
              <h4 className="fw-bold my-4">LED Bulb</h4>
              </div>
              <div className="col-4">
              <input
                type="text"
                name="Manufacture Items"
                className="form-control mb-2"
                placeholder="Enter Here :"
              />
              </div>
              <div className="col-2">
              <h4 className="fw-bold my-4">Pieces</h4>
              </div>
            </div>
          </div>
        </div>
            <button className="btn btn-primary px-5 my-5 py-2 rounded-pill">SUBMIT</button>
      </div>
    </>
  );
}
