import React, { useState } from "react";
import { useRouter } from "next/router";

function HistoryTransfer() {
  const router = useRouter();
  const [role, setRole] = useState("failed");

  return (
    <div className="">
      <div className="card border-0 shadow card-lg py-4">
        <div className="card-body body-card">
          {role === "success" ? (
            <div className="d-flex justify-content-center">
              <div>
                <h1 className="text-success text-center">
                  <i className="bi bi-check-circle-fill"></i>
                </h1>
                <h5 className="font-weight-bold">Transfer Success</h5>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <div>
                <h1 className="text-danger text-center">
                  <i className="bi bi-x-circle-fill"></i>
                </h1>
                <h5 className="font-weight-bold text-center">
                  Transfer Failed
                </h5>
                <h6 className="font-weight-bold text-muted text-center">
                  failed reason
                </h6>
              </div>
            </div>
          )}

          <div className="card shadow border-0 mb-3">
            <div className="card-body">
              <p>Amount</p>
              <h5 className="font-weight-bold m-0">Rp sekian</h5>
            </div>
          </div>
          <div className="card shadow border-0 mb-3">
            <div className="card-body">
              <p>Balance Left</p>
              <h5 className="font-weight-bold m-0">Rp sekian</h5>
            </div>
          </div>
          <div className="card shadow border-0 mb-3">
            <div className="card-body">
              <p>Date & Time</p>
              <h5 className="font-weight-bold m-0">date</h5>
            </div>
          </div>
          <div className="card shadow border-0 mb-4">
            <div className="card-body">
              <p>Notes</p>
              <h5 className="font-weight-bold m-0"> notes </h5>
            </div>
          </div>
          <h5 className="font-weight-bold">Transfer to</h5>
          <div className="card shadow border-0">
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
          <div className="d-flex justify-content-end pt-5">
            <button className="btn btn-gray mr-2 text-dark radius-12 px-3 py-2 font-weight-bold d-none d-lg-block">
              <i className="bi bi-share"></i>
            </button>
            <button className="btn btn-gray mr-2 text-blue radius-12 px-3 py-2 font-weight-bold d-none d-lg-block">
              <i className="bi bi-cloud-arrow-down"></i>
              Download PDF
            </button>
            <button className="btn btn-blue radius-12 px-3 py-2 font-weight-bold btn-block d-block d-lg-none">
              Back to Home
            </button>
            <button
              className="btn btn-blue radius-12 px-3 py-2 font-weight-bold d-lg-block d-none"
              onClick={(e) => router.push("/dashboard")}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .card-lg {
              box-shadow: none !important;
            }
            .body-card {
              padding: 0;
            }
          }
          .card {
            border-radius: 12px;
          }
          .img-people {
            width: 100px;
            height: 100px;
            border-radius: 12px;
            object-fit: cover;
          }
          .btn-blue {
            background-color: #6379f4;
            color: white;
          }

          .btn-blue:hover {
            background-color: #5365c9;
            color: white;
          }
          .text-blue {
            color: #6379f4;
          }
        `}
      </style>
    </div>
  );
}

export default HistoryTransfer;
