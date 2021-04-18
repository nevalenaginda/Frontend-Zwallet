import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

function PersonalInfo() {
  const [dataUser, setDataUser] = useState({});
  let idUser, token;
  if (process.browser) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

    axios
      .get(`${URLAPI}user/${idUser}`, { headers: { token } })
      .then((res) => {
        console.log(res.data.data);
        setDataUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        setDataUser({});
      });
  }, []);

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
                {dataUser.name ? (
                  <h5 className="font-weight-bold m-0">{dataUser.name}</h5>
                ) : (
                  <h5 className="font-weight-bold m-0"></h5>
                )}
              </div>
            </div>
            <div className="card border-0 shadow mb-3">
              <div className="card-body">
                <p className="text-muted">Verified E-mail</p>
                {dataUser.email ? (
                  <h5 className="font-weight-bold m-0">{dataUser.email}</h5>
                ) : (
                  <h5 className="font-weight-bold m-0"></h5>
                )}
              </div>
            </div>
            <div className="card border-0 shadow mb-3">
              <div className="card-body">
                <p className="text-muted">Phone Number</p>
                <div className="d-flex justify-content-between">
                  {dataUser.phone ? (
                    <h5 className="font-weight-bold m-0">{dataUser.phone}</h5>
                  ) : (
                    <h5 className="font-weight-bold m-0"></h5>
                  )}

                  <Link
                    href={{
                      pathname: "/profile/manage-phone-number",
                      query: { phone: dataUser.phone },
                    }}
                  >
                    <a className="text-blue text-decoration-none font-weight-bold">
                      Manage
                    </a>
                  </Link>
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
