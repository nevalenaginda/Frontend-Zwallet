import React, { useEffect, useState } from "react";
import Link from "next/link";
import AsideLeft from "../../components/module/AsideLeft";
import Router from "next/Router";
import axios from "axios";
import Swal from "sweetalert2";

function resetPassword() {
  const [email, setEmail] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    const data = { email };
    axios
      .post(`${URLAPI}forgotPassword`, data, {
        withCredentials: true,
      })
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379f4;",
        }).then((result) => {
          if (result.isConfirmed) {
          }
          setEmail("");
        });
      })
      .catch((err) => {
        console.log(err.response.data.message);
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#a4a7b4",
        });
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      Router.push("/dashboard");
    }
  }, []);

  return (
    <div>
      <div className="row min-vh-100 no-gutters">
        <div className="col-lg-7 bg-blue min-vh-100 bg-accent overflow-auto d-none d-lg-flex px-5">
          <AsideLeft />
        </div>
        <div className="col min-vh-100 overflow-auto d-lg-flex px-lg-5 phone-brand">
          <div>
            <div className="d-flex d-lg-none h-brand">
              <h3 className="font-weight-bold w-100 align-self-center m-0 text-center text-blue">
                Zwallet
              </h3>
            </div>
          </div>
          <div className="align-self-center bg-white h-content round py-5 py-lg-0">
            <div className="container">
              <div className="px-4">
                {/* <!-- For desktop --> */}
                <div className="d-none d-lg-block">
                  <h4 className="font-weight-bold">
                    Did You Forgot Your Password? Don’t Worry, You Can Reset
                    Your Password In a Minutes.
                  </h4>
                  <p className="text-muted">
                    To reset your password, you must type your e-mail and we
                    will send a link to your email and you will be directed to
                    the reset password screens.
                  </p>
                </div>
                {/* <!-- End of for desktop --> */}

                {/* <!-- For mobile < md --> */}
                <div className="d-block d-lg-none text-center mb-5">
                  <h4 className="font-weight-bold">Reset Password</h4>
                  <p className="text-muted">
                    Enter your Zwallet e-mail so we can send you a password
                    reset link.
                  </p>
                </div>
                {/* <!-- End Of for mobile < md --> */}
                <div className="mt-md-5">
                  <form onSubmit={onSubmitHandler}>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                          id="basic-addon1"
                        >
                          <i className="far fa-envelope"></i>
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                        placeholder="Enter your e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block"
                        style={{ borderRadius: "12px" }}
                      >
                        Confirm
                      </button>
                    </div>
                  </form>
                  <p className="text-center pt-4">
                    Have memorized your password ? Let's back to
                    <Link href="/auth/login">
                      <a className="text-decoration-none"> Login</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .phone-brand {
              background-color: ghostwhite;
            }
            .h-content {
              height: calc(100vh - 75px);
              box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
            }
          }
          input:focus {
            border-color: blue !important;
            box-shadow: none !important;
            outline: 0 none !important;
          }
          .h-brand {
            height: 100px;
          }
          .round {
            border-radius: 25px 25px 0px 0px;
          }
        `}
      </style>
    </div>
  );
}

export default resetPassword;
