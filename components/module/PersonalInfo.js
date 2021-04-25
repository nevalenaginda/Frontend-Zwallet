import React from "react";
import Router from "next/router";

function PersonalInfo({ name, email, phone }) {
  const handlePhone = (e) => {
    e.preventDefault();
    if (phone.length < 3) {
      Router.push("/profile/add-phone-number");
    } else {
      Router.push("/profile/manage-phone-number");
    }
  };
  return (
    <div>
      <div className="card border-0 shadow radius-12">
        <div className="card-body">
          <h5 className="font-weight-bold mb-4">Personal Information</h5>
          <p className="text-muted">
            We got your personal information from the sign <br />
            up process. If you want to make changes on <br />
            your information, contact our support.
          </p>
          <div className="py-3">
            <div className="card border-0 shadow mb-3">
              <div className="card-body">
                <p className="text-muted">Username</p>
                {name ? (
                  <h5 className="font-weight-bold m-0">{name}</h5>
                ) : (
                  <h5 className="font-weight-bold m-0"></h5>
                )}
              </div>
            </div>
            <div className="card border-0 shadow mb-3">
              <div className="card-body">
                <p className="text-muted">Verified E-mail</p>
                {email ? (
                  <h5 className="font-weight-bold m-0">{email}</h5>
                ) : (
                  <h5 className="font-weight-bold m-0"></h5>
                )}
              </div>
            </div>
            <div className="card border-0 shadow mb-3">
              <div className="card-body">
                <p className="text-muted">Phone Number</p>
                <div className="d-flex justify-content-between">
                  {phone ? (
                    <h5 className="font-weight-bold m-0">{phone}</h5>
                  ) : (
                    <h5 className="font-weight-bold m-0"></h5>
                  )}

                  <a
                    className="text-blue text-decoration-none font-weight-bold"
                    onClick={handlePhone}
                  >
                    {phone.length < 3 ? "Add" : "Manage"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
