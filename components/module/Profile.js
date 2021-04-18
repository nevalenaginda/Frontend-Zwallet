import React, { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
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
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="py-3">
            <div className="container d-flex justify-content-center mb-2">
              {dataUser.image ? (
                <img
                  className="img-people"
                  src={`${urlImg}/images/${dataUser.image}`}
                  alt=""
                />
              ) : (
                <img
                  className="img-people"
                  src={require("../../assets/images/default-user.svg")}
                  alt=""
                />
              )}
            </div>
            <p className="text-center">
              <input
                type="file"
                accept="image/png/jpg"
                id="fileUpload"
                className="d-none"
              />
              <span className="text-muted pointer">
                <i className="fas fa-pencil-alt"></i> Edit
              </span>
            </p>
            <div className="container text-center">
              {dataUser.name ? (
                <h4 className="font-weight-bold">{dataUser.name}</h4>
              ) : (
                <h4 className="font-weight-bold"></h4>
              )}
              {dataUser.phone ? (
                <p className="text-muted m-0">{dataUser.phone}</p>
              ) : (
                <p className="text-muted m-0"></p>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .img-people {
          width: 75px;
          height: 75px;
          border-radius: 12px;
          object-fit: cover;
        }
        div.card {
          border-radius: 15px;
        }
      `}</style>
    </div>
  );
}

export default Profile;
