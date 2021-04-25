import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../configs/redux/actions/user";
import { getAllNotifications } from "../../configs/redux/actions/history";

function NavBar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const { user: dataUser } = useSelector((state) => state.user);
  const { totalNotif } = useSelector((state) => state.history);

  let token, idUser;
  if (process.browser) {
    token = localStorage.getItem("token");
    idUser = localStorage.getItem("id");
    if (!token) {
      router.push("/auth/login");
    }
  }

  useEffect(() => {
    dispatch(getUser()).then((res) => {
      dispatch(getAllNotifications(idUser));
    });
  }, [dispatch]);

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
                  className={`img-user align-self-center bg-dark mr-3 pointer`}
                  src={`${urlImg}/images/${dataUser.image}`}
                  onClick={(e) => router.push("/profile")}
                ></img>
              ) : (
                ""
              )}
              <div
                className="align-self-center pointer"
                onClick={(e) => router.push("/profile")}
              >
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
              <h3 className="far fa-bell  ml-3 align-self-center text-muted m-0 pointer"></h3>{" "}
              {totalNotif > 0 ? (
                <span className="badge badge-danger" style={{ height: "20px" }}>
                  {totalNotif}
                </span>
              ) : (
                ""
              )}
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
