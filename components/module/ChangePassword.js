import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function ChangePassword() {
  const router = useRouter();
  let [typeCurrentPw, setTypeCurrentPw] = useState(false);
  const [curPw, setCurPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [repNewPw, setRepNewPw] = useState("");
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

  let idUser, token;
  if (process.browser) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  const handleTypeCurrentPw = (e) => {
    setTypeCurrentPw(!typeCurrentPw);
    // console.log(typeCurrentPw);
  };

  const handleChangePw = (e) => {
    e.preventDefault();
    if (newPw !== repNewPw) {
      Swal.fire({
        title: "Info!",
        text: "Your new password and repeat new password must same",
        icon: "inf",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379f4;",
      });
    } else {
      const dataPassword = { oldpassword: curPw, password: newPw };
      axios
        .patch(`${URLAPI}changePassword/${idUser}`, dataPassword, {
          withCredentials: true,
        })
        .then((res) => {
          router.push("/profile");
          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379f4;",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#a4a7b4",
          });
        });
    }
  };

  return (
    <div className="card shadow border-0 radius-12 h-100">
      <div className="card-body">
        <h5 className="font-weight-bold mb-3">Change Password</h5>
        <p className="text-muted mb-5">
          You must enter your current password and then <br />
          type your new password twice
        </p>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="input-group input-group-lg mb-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-muted bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type={typeCurrentPw ? "text" : "password"}
                    className="form-control text-muted border-top-0 border-left-0 border-right-0 rounded-0"
                    placeholder="Current password"
                    autocomplete="new-password"
                    onChange={(e) => setCurPw(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <span
                        className="text-muted"
                        onClick={(e) => handleTypeCurrentPw(e)}
                      >
                        {typeCurrentPw ? (
                          <i className="fas fa-eye"></i>
                        ) : (
                          <i className="fas fa-eye-slash"></i>
                        )}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="input-group input-group-lg mb-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-muted bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type={typeCurrentPw ? "text" : "password"}
                    className="form-control text-muted border-top-0 border-left-0 border-right-0 rounded-0"
                    placeholder="New password"
                    autocomplete="new-password"
                    onChange={(e) => setNewPw(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <span
                        className="text-muted"
                        onClick={(e) => handleTypeCurrentPw(e)}
                      >
                        {typeCurrentPw ? (
                          <i className="fas fa-eye"></i>
                        ) : (
                          <i className="fas fa-eye-slash"></i>
                        )}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="input-group input-group-lg">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-muted bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <i className="fas fa-lock"></i>
                    </span>
                  </div>
                  <input
                    type={typeCurrentPw ? "text" : "password"}
                    className="text-muted form-control border-top-0 border-left-0 border-right-0 rounded-0"
                    placeholder="Repeat new password"
                    autocomplete="new-password"
                    onChange={(e) => setRepNewPw(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <span
                        className="text-muted"
                        onClick={(e) => handleTypeCurrentPw(e)}
                      >
                        {typeCurrentPw ? (
                          <i className="fas fa-eye"></i>
                        ) : (
                          <i className="fas fa-eye-slash"></i>
                        )}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="py-5">
                  <button
                    type="submit"
                    className="btn btn-block font-weight-bold radius-12 btn-lg btn-blue"
                    disabled={curPw && newPw && repNewPw ? false : true}
                    onClick={handleChangePw}
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          input:focus {
            border: 1px solid #ced4da;
            box-shadow: none;
          }
          .btn-blue {
            background-color: #6379f4;
            color: white;
          }
          .btn-blue:hover {
            background-color: #5265cf;
            color: white;
          }
          .btn-blue:disabled {
            background-color: #dadada;
            color: #88888f;
          }
          .btn-blue:disabled:hover {
            background-color: #dadada;
            color: #88888f;
          }
        `}
      </style>
    </div>
  );
}

export default ChangePassword;
