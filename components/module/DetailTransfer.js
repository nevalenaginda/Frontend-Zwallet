import React from "react";

function DetailTransfer() {
  return (
    <div className="">
      <div className="container d-flex d-lg-none py-4">
        <button className="text-dark mr-3">
          <h5 className="m-0 font-weight-bold align-self-center">
            <i icon="arrow-left"></i>
          </h5>
        </button>
        <h5 className="m-0 align-self-center font-weight-bold">Confirmation</h5>
      </div>
      <div className="card border-0 card-lg shadow py-3">
        <div className="card-body bodycard">
          <h5 className="font-weight-bold">Transfer To</h5>
          <div className="card border-0 shadow mb-4">
            <div className="card-body d-flex">
              <img
                className="img-people mr-4"
                src={require("../../assets/images/default-user.svg")}
                alt=""
              />

              <div className="align-self-center">
                <h5 className="font-weight-bold">Name</h5>
                <p className="text-muted m-0">Phone</p>
              </div>
            </div>
          </div>
          <h5 className="font-weight-bold">Details</h5>
          {/* <!-- Amount --> */}
          <div className="card card-body border-0 shadow mb-3">
            <p>Amount</p>
            <h5 className="m-0 font-weight-bold">Rp Sekian</h5>
          </div>
          {/* <!-- End Of Amount --> */}

          {/* <!-- Balance left --> */}
          <div className="card card-body border-0 mb-3 shadow">
            <p>Balance Left</p>
            <h5 className="m-0 font-weight-bold">Rp Sekian</h5>
          </div>
          {/* <!-- End Of Balance Left --> */}

          {/* <!-- Date --> */}
          <div className="card card-body mb-3 border-0 shadow">
            <p>Date & Time</p>
            <div className="input-group">
              <h5 className="m-0 font-weight-bold">date transfer</h5>
            </div>
          </div>
          {/* <!-- End Of Date --> */}

          {/* <!-- Note --> */}
          <div className="card card-body mb-5 border-0 shadow">
            <p>Notes</p>
            <div className="input-group">
              <h5 className="m-0 font-weight-bold">detail transfer</h5>
            </div>
          </div>
          {/* <!-- End Of Note --> */}
          <div className="d-flex justify-content-end">
            <button className="btn btn-blue btn-lg radius-12 d-none d-lg-block">
              <small className="p-3 font-weight-bold"> Continue </small>
            </button>
            <button className="btn btn-blue btn-lg radius-12 btn-block d-lg-none d-block">
              <small className="p-3 font-weight-bold"> Continue </small>
            </button>
          </div>
        </div>
        {/* <ModalPin /> */}
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .card-lg {
              box-shadow: none !important;
            }
            .card-lg .bodycard {
              padding: 0 !important;
            }
          }
          .img-people {
            width: 100px;
            height: 100px;
            border-radius: 12px;
            object-fit: cover;
          }
          div.card {
            border-radius: 15px;
          }
          .bg-gray {
            background-color: #ebecec;
          }
          .bg-gray:focus {
            background-color: #ebecec;
          }
          input:focus {
            box-shadow: none;
          }
          .btn-blue {
            background-color: #6379f4;
            color: white;
          }

          .btn-blue:hover {
            background-color: #5365c9;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default DetailTransfer;
