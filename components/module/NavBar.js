import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function NavBar() {
  const router = useRouter();

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
    <nav className={`bg-white shadow h-navbar`}>
      <div className={`container d-flex h-100`}>
        <div className={`row w-100 d-flex`}>
          <div
            className={`col align-self-center pointer`}
            onClick={(e) => router.push("/dashboard")}
          >
            <h3 className={`text-blue font-weight-bold m-0`}>Zwallet</h3>
          </div>
          <div className="col align-self-center d-none d-md-block">
            <div className="d-flex justify-content-end">
              {dataUser.image ? (
                <img
                  className={`img-user align-self-center bg-dark mr-3`}
                  src={`${urlImg}/images/${dataUser.image}`}
                ></img>
              ) : (
                ""
              )}
              <div className="align-self-center">
                {dataUser.name ? (
                  <h5 className="font-weight-bold m-0">{dataUser.name}</h5>
                ) : (
                  ""
                )}
                {dataUser.phone ? (
                  <small className="text-muted">{dataUser.phone}</small>
                ) : (
                  ""
                )}
              </div>
              <h3 className="far fa-bell  ml-3 align-self-center text-muted m-0"></h3>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .img-user {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          object-fit: cover;
        }
        .h-navbar {
          height: 100px;
          border-radius: 0px 0px 20px 20px;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
