import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function SideBar() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleLogOut = (event) => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    router.push("/login");
  };
  return (
    <div className="h-100">
      <div className="card border-0 shadow h-100  card">
        <div className="card-body p-0">
          <div className="h-100">
            <div className="h-100 d-flex align-item-start flex-column">
              <div className={`h-side`}>
                <div
                  className={`container mt-5 text-muted ${
                    router.asPath === "/dashboard"
                      ? "active"
                      : router.asPath === "/history"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link href={"/dashboard"}>
                    <h5 className={`m-0 mx-3 pointer d-flex`}>
                      <i className="fas fa-border-all mr-2"></i>Dashboard
                    </h5>
                  </Link>
                </div>
                <div
                  className={`container mt-5 text-muted ${
                    router.asPath.includes("/transfer") ? "active" : ""
                  }`}
                >
                  <Link href={"/transfer"}>
                    <h5 className={`m-0 mx-3 pointer d-flex`}>
                      <i className="fas fa-arrow-up  mr-2"></i>
                      Transfer
                    </h5>
                  </Link>
                </div>

                <div
                  className={`container mt-5 text-muted ${
                    "/topup" === router.asPath ? "active" : ""
                  }`}
                >
                  <Link href={"/topup"}>
                    <h5 className={`m-0 mx-3 pointer d-flex`}>
                      <i className="fas fa-plus mr-2"></i>Top Up
                    </h5>
                  </Link>
                </div>

                <div
                  className={`container mt-5 text-muted ${
                    router.asPath.includes("/profile") ? "active" : ""
                  }`}
                >
                  <Link href={"/profile"}>
                    <h5 className={`m-0 mx-3 pointer d-flex`}>
                      <i className="far fa-user d-flex mr-2"></i>Profile
                    </h5>
                  </Link>
                </div>
              </div>
              <div
                className=" container pb-4 mt-auto text-muted "
                onClick={handleLogOut}
              >
                <h5 className={`align-items-end mx-3 pointer d-flex`}>
                  <i className="fas fa-sign-out-alt mr-2"></i>Logout
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .active {
            border-left: solid #6379f4;
            color: #6379f4 !important;
          }
          div.card {
            border-radius: 15px;
          }
          .pointer {
            cursor: pointer;
          }

          .font-title {
            font-size: 24px;
          }
          .bt-blue {
            background: #6379f4;
          }

          .bt-blue:hover {
            color: #fff;
            background: #425be7;
          }

          .f-white {
            color: #fff;
          }
          .h-side {
            height: 400px;
          }
        `}
      </style>
    </div>
  );
}

export default SideBar;
