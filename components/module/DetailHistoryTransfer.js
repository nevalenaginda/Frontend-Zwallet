import React from "react";
import { useRouter } from "next/router";
import toRupiah from "../../helpers/curencyToIDR";
import changeTime from "../../helpers/changeTime";

function DetailHistoryTransfer({ details }) {
  const router = useRouter();

  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  return (
    <div className="">
      <div className="card border-0 shadow card-lg py-4">
        {details === null ? (
          <div className="card-body body-card">
            <div className="transfer d-flex flex-column justify-content-between p-5"></div>
            <h1 className="mt-4">Transactions not found</h1>
            <p className="text-center mt-4">
              We could not find the transaction data you requested, we recommend
              that you check <br /> that the data you requested is correct and
              try again.
            </p>
            <div className="d-flex justify-content-end pt-5">
              <button
                className="btn btn-blue radius-12 px-3 py-2 font-weight-bold btn-block d-block d-lg-none"
                onClick={(e) => router.push("/dashboard")}
              >
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
        ) : (
          <div className="card-body body-card">
            <div className="d-flex justify-content-center">
              <div>
                <h3 className="font-weight-bold">History Transfer</h3>
              </div>
            </div>
            <div className="card shadow border-0 mb-3">
              <div className="card-body mb-3">
                <p>Transfer to</p>
                <div className=" d-flex ">
                  {details.to_image && (
                    <img
                      className="img-people mr-4"
                      src={`${urlImg}/images/${details.to_image}`}
                      alt=""
                    />
                  )}

                  <div className="align-self-center">
                    {details.to_name && (
                      <h5 className="font-weight-bold">{details.to_name}</h5>
                    )}
                    {details.to_phone && (
                      <p className="text-muted m-0">{details.to_phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 mb-3">
              <div className="card-body mb-3">
                <p>From</p>
                <div className=" d-flex ">
                  {details.from_image && (
                    <img
                      className="img-people mr-4"
                      src={`${urlImg}/images/${details.from_image}`}
                      alt=""
                    />
                  )}

                  <div className="align-self-center">
                    {details.from_name && (
                      <h5 className="font-weight-bold">{details.from_name}</h5>
                    )}
                    {details.from_phone && (
                      <p className="text-muted m-0">{details.from_phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow border-0 mb-3">
              <div className="card-body">
                <p>Amount</p>
                {details.amount && (
                  <h5 className="font-weight-bold m-0">
                    Rp{toRupiah(details.amount)}
                  </h5>
                )}
              </div>
            </div>

            <div className="card shadow border-0 mb-3">
              <div className="card-body">
                <p>Date & Time</p>
                {details.created_at && (
                  <h5 className="font-weight-bold m-0">
                    {changeTime(details.created_at)}
                  </h5>
                )}
              </div>
            </div>
            <div className="card shadow border-0 mb-4">
              <div className="card-body">
                <p>Notes</p>
                {details.notes && (
                  <h5 className="font-weight-bold m-0">{details.notes}</h5>
                )}
              </div>
            </div>

            <div className="d-flex justify-content-end pt-5">
              <button
                className="btn btn-blue radius-12 px-3 py-2 font-weight-bold btn-block d-block d-lg-none"
                onClick={(e) => router.push("/dashboard")}
              >
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
        )}
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

export default DetailHistoryTransfer;
