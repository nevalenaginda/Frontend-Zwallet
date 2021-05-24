import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import AsideLeft from "../../components/module/AsideLeft";

function register() {
  const router = useRouter();

  const [dataSignUp, setDataSignUp] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .post(`${URLAPI}register`, dataSignUp, {
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
            router.push("/auth/login");
          } else {
            router.push("/auth/login");
          }
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
  };

  const handleFormSignUp = (event) => {
    const newData = { ...dataSignUp };
    newData[event.target.name] = event.target.value;
    setDataSignUp(newData);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/dashboard");
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
                    Start Accessing Banking Needs With All Devices and All
                    Platforms With 30.000+ Users
                  </h4>
                  <p className="text-muted">
                    Transfering money is easier than ever, you can access
                    Zwallet wherever you are. Desktop, laptop, mobile phone? we
                    cover all of that for you!
                  </p>
                </div>
                {/* <!-- End of for desktop --> */}

                {/* <!-- For mobile < md --> */}
                <div className="d-block d-lg-none text-center mb-5">
                  <h4 className="font-weight-bold">Sign Up</h4>
                  <p className="text-muted">
                    Create your account to access Zwallet.
                  </p>
                </div>
                {/* <!-- End Of for mobile < md --> */}
                <div>
                  <form onSubmit={onSubmitHandler}>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                          id="basic-addon1"
                        >
                          <i className="far fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                        placeholder="Enter your username"
                        name="name"
                        onChange={handleFormSignUp}
                        required
                      />
                    </div>
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
                        name="email"
                        onChange={handleFormSignUp}
                        required
                      />
                    </div>
                    <div className="input-group mb-4">
                      <div className="input-group-prepend">
                        <span
                          className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                          id="basic-addon1"
                        >
                          <i className="fas fa-lock"></i>
                        </span>
                      </div>
                      <input
                        type="password"
                        className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleFormSignUp}
                        required
                      />
                      <div className="input-group-append">
                        <span
                          className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                          id="basic-addon1"
                        >
                          <span className="text-decoration-none text-dark">
                            {/* <i className="fas fa-eye" ></i> */}
                            <i className="fas fa-eye-slash"></i>
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block"
                        style={{ borderRadius: "12px" }}
                        onClick={onSubmitHandler}
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <p className="text-center pt-4">
                    Already have an account? Let's
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

export default register;
