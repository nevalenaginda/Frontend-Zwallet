import React from "react";

function AddPhoneNumber() {
  return (
    <div className="card shadow border-0 radius-12 h-100">
      <div className="card-body d-flex align-items-start flex-column">
        <div>
          <h5 className="font-weight-bold">Add Phone Number</h5>
          <p className="text-muted">
            Add at least one phone number for the transfer <br />
            ID so you can start transferring your money to
            <br />
            another user
          </p>
        </div>
        <div className="my-auto w-100">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form>
                <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white border-left-0 border-right-0 border-top-0 rounded-0">
                      <i className="mr-2 text-muted"></i>
                      +62
                    </span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="border-top-0 border-left-0 border-right-0 rounded-0 form-control"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn rounded-12 btn-lg btn-block"
                  className="btn rounded-12 btn-lg btn-block btn-gray text-muted"
                  //   className="btn-blue":btn-gray text-dark
                  // disabled="number ? false : true"
                >
                  Add Phone Number
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          input:focus {
            border-color: lightgray !important;
            box-shadow: none;
          }
        `}
      </style>
    </div>
  );
}

export default AddPhoneNumber;
