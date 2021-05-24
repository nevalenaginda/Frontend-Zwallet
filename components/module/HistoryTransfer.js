import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import toRupiah from "../../helpers/curencyToIDR";

function HistoryTransfer() {
  const router = useRouter();
  const [role, setRole] = useState("failed");
  const { status, message, transfer, dataTarget } = useSelector(
    (state) => state.transfer
  );
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;

  useEffect(() => {
    if (!transfer.amount && !dataTarget.id) {
      router.push("/dashboard");
    } else {
      setRole(status);
    }
  }, [role]);

  //if reload push to transfer
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
                  {message}
                </h6>
              </div>
            </div>
          )}

          <div className="card shadow border-0 mb-3">
            <div className="card-body">
              <p>Amount</p>
              {transfer.amount && (
                <h5 className="font-weight-bold m-0">
                  Rp {toRupiah(transfer.amount)}
                </h5>
              )}
            </div>
          </div>
          <div className="card shadow border-0 mb-3">
            <div className="card-body">
              <p>Balance Left</p>
              {transfer.balanceLeft && (
                <h5 className="font-weight-bold m-0">
                  Rp {toRupiah(transfer.balanceLeft)}
                </h5>
              )}
            </div>
          </div>
          <div className="card shadow border-0 mb-3">
            <div className="card-body">
              <p>Date & Time</p>
              {transfer.dateTime && (
                <h5 className="font-weight-bold m-0">{transfer.dateTime}</h5>
              )}
            </div>
          </div>
          <div className="card shadow border-0 mb-4">
            <div className="card-body">
              <p>Notes</p>
              {transfer.notes && (
                <h5 className="font-weight-bold m-0">{transfer.notes}</h5>
              )}
            </div>
          </div>
          <h5 className="font-weight-bold">Transfer to</h5>
          <div className="card shadow border-0">
            <div className="card-body d-flex">
              {dataTarget.image && (
                <img
                  className="img-people mr-4"
                  src={`${urlImg}/images/${dataTarget.image}`}
                  alt=""
                />
              )}

              <div className="align-self-center">
                {dataTarget.name && (
                  <h5 className="font-weight-bold">{dataTarget.name}</h5>
                )}
                {dataTarget.phone && (
                  <p className="text-muted m-0">{dataTarget.phone}</p>
                )}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end pt-5">
            <button className="btn btn-gray mr-2 text-dark radius-12 px-3 py-2 font-weight-bold d-none d-lg-block">
              <i className="bi bi-share"></i>
            </button>
            <button className="btn btn-gray mr-2 text-blue radius-12 px-3 py-2 font-weight-bold d-none d-lg-block">
              <i className="bi bi-cloud-arrow-down"></i> &nbsp; Download PDF
            </button>
            <button className="btn btn-blue radius-12 px-3 py-2 font-weight-bold btn-block d-block d-lg-none" onClick={(e) => router.push("/dashboard")}>
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
