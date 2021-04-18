import React from "react";
import Link from "next/link";
function AmmountNotes() {
  return (
    <div className="">
      <div className="container d-flex d-lg-none py-4">
        <Link href="/transfer">
          <div className="text-dark mr-3">
            <h5 className="m-0 font-weight-bold align-self-center">
              <i className="fas fa-arrow-left"></i>
            </h5>
          </div>
        </Link>
        <h5 className="m-0 align-self-center font-weight-bold">Transfer</h5>
      </div>
      <div className="card border-0 shadow card-lg my-lg-5">
        <div className="card-body">
          <h5 className="font-weight-bold d-none d-lg-block">Transfer Money</h5>
          <div className="card border-0 shadow mb-4">
            <div className="card-body d-flex">
              <div className="align-self-center d-flex">
                <img
                  className="img-people mr-4"
                  src={require("../../assets/images/default-user.svg")}
                  alt=""
                />

                <div className="align-self-center">
                  <h5 className="font-weight-bold">Name</h5>
                  <small className="text-muted m-0">Phone</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-muted d-none d-lg-block">
              Type the amount you want to transfer and then
              <br />
              press continue to the next steps.
            </p>
            <input
              className="form-control form-control-lg text-center font-weight-bold border-0 mb-3"
              type="number"
              placeholder="Rp10.000"
            />
            <p className="font-weight-bold text-center mb-5">Rp10.000</p>
            <div className="row w-100 d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text border-top-0 border-left-0 bg-white rounded-0">
                      <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control border-top-0 border-left-0 border-right-0 bg-white rounded-0"
                    placeholder="Add some notes"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 d-flex justify-content-end">
            <button className="btn btn-lg btn-blue radius-12">
              <small className="p-3">Continue</small>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 992px) {
          .card-lg {
            box-shadow: none !important;
          }
        }
        .btn-blue {
          background-color: #6379f4;
          color: white;
        }

        .btn-blue:hover {
          background-color: #5365c9;
          color: white;
        }
        input.font-weight-bold.border-0 {
          font-size: 32px;
        }
        .img-people {
          width: 50px;
          height: 50px;
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
      `}</style>
    </div>
  );
}

export default AmmountNotes;
