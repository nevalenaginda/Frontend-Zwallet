import React from "react";
import { useRouter } from "next/router";

function ManagePhoneNumber() {
  const router = useRouter();

  return (
    <div className="card shadow border-0 radius-12 h-100">
      <div className="card-body">
        <h5 className="font-weight-bold">Manage Phone Number</h5>
        <p className="text-muted">
          You can only delete the phone number and then
          <br />
          you must add another phone number.
        </p>
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <p className="text-muted">Primary</p>
                {router.query.phone ? (
                  <h5 className="m-0 font-weight-bold">{router.query.phone}</h5>
                ) : (
                  <h5 className="m-0 font-weight-bold"></h5>
                )}
              </div>
              <div className="align-self-center">
                <spam
                  className="text-decoration-none pointer bg-white"
                  style={{ background: "white" }}
                >
                  <h2 className="m-0 text-muted">
                    <i className="fas fa-trash-alt"></i>
                  </h2>
                </spam>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagePhoneNumber;
