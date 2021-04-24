import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

function ContacInfo() {
  const [dataAllUser, setAllDataUser] = useState({});
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

  let idUser, token;
  if (process.browser) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    axios
      .get(`${URLAPI}allUser/${idUser}`, {
        headers: { token },
      })
      .then((res) => {
        console.log(res.data);
        setAllDataUser(res.data);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  }, []);

  return (
    <div>
      <div className="card shadow border-0 radius-12">
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="font-weight-bold">Contacts Info</h5>
            <Link href="">
              <a className="text-blue text-decoration-none font-weight-bold">
                See all
              </a>
            </Link>
          </div>
          <div className="h-content overflow-auto">
            {dataAllUser.data
              ? dataAllUser.data.map((itm, idx) => {
                  return (
                    <div className="d-flex mb-2">
                      <img
                        className="img-people radius-12 mr-2"
                        src={`${urlImg}/images/${itm.image}`}
                        alt=""
                      />
                      <div className="align-self-center">
                        <h6 className="font-weight-bold">{itm.name}</h6>
                        <p className="text-muted m-0">{itm.phone}</p>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
      <style jsx>{`
        .h-content {
          height: 30vh;
        }
        .img-people {
          width: 75px;
          height: 75px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}

export default ContacInfo;
