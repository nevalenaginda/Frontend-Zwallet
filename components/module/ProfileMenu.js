import React from "react";
import { useRouter } from "next/router";
function ProfilMenu() {
  const router = useRouter();

  const handleLogOut = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    router.push("/auth/login");
  };

  return (
    <div className="card shadow border-0 h-100">
      <div className="card-body d-flex align-items-start flex-column">
        <button
          onClick={(e) => router.push("/profile/personal-information")}
          className="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto"
        >
          <span className="d-flex justify-content-between font-weight-bold">
            <small className="font-weight-bold align-self-center">
              Personal Information
            </small>
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
        <button
          className="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto"
          onClick={(e) => router.push("/profile/change-password")}
        >
          <span className="d-flex justify-content-between font-weight-bold">
            <small className="font-weight-bold align-self-center">
              Change Password
            </small>
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
        <button
          className="btn btn-gray btn-block btn-lg radius-12 h-50 mb-auto"
          onClick={(e) => router.push("/profile/change-pin")}
        >
          <span className="d-flex justify-content-between font-weight-bold">
            <small className="font-weight-bold align-self-center">
              {" "}
              Change PIN{" "}
            </small>
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
        <button
          className="btn btn-gray btn-block btn-lg h-50 radius-12"
          onClick={handleLogOut}
        >
          <span className="d-flex justify-content-start font-weight-bold">
            <small className="font-weight-bold align-self-center">
              {" "}
              Logout{" "}
            </small>
          </span>
        </button>
      </div>

      <style>
        {`
          div.card {
            border-radius: 15px;
          }
        `}
      </style>
    </div>
  );
}

export default ProfilMenu;
