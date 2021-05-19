import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import AsideLeft from "../../components/module/AsideLeft";
import Input from "../../components/base/Input";
import Button from "../../components/base/Button";
import Layout from "../../components/base/Layout";

function login() {
  const router = useRouter();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const handleFormLogin = (event) => {
    const newData = { ...dataLogin };
    newData[event.target.name] = event.target.value;
    setDataLogin(newData);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .post(`${URLAPI}login`, dataLogin, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        if (res.data.pin === true) {
          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379f4;",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/dashboard");
            } else {
              router.push("/dashboard");
            }
          });
        } else {
          Swal.fire({
            title: "Success!",
            text: res.data.message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#6379f4;",
          }).then((result) => {
            if (result.isConfirmed) {
              router.push("/auth/pin");
            } else {
              router.push("/auth/pin");
            }
          });
        }
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
      router.push("/dashboard");
    }
  }, []);

  return (
    <Layout title={"Login"}>
      <div>
        <div className="row min-vh-100 no-gutters">
          <div className="col-7 bg-blue min-vh-100 bg-accent overflow-auto d-none d-lg-flex px-5">
            <AsideLeft />
          </div>
          <div className="col w-100 min-vh-100 overflow-auto d-flex px-lg-5 phone-brand">
            <div className="w-100 align-self-lg-center">
              <div className="d-flex d-lg-none h-brand">
                <h3 className="font-weight-bold w-100 align-self-center m-0 text-center text-blue">
                  Zwallet
                </h3>
              </div>
              <div className="align-self-center w-100">
                {/* <!-- Desktop view --> */}
                <div className="d-none d-lg-block">
                  <div className="py-5 px-2 pr-5">
                    <h4 className="font-weight-bold">
                      Start Accessing Banking Needs With All Devices and All
                      Platforms With 30.000+ Users
                    </h4>
                    <p className="text-muted">
                      Transfering money is easier than ever, you can access
                      Zwallet wherever you are. Desktop, laptop, mobile phone?
                      we cover all of that for you!
                    </p>
                  </div>
                </div>
                {/* <!-- End Of Desktop View --> */}

                {/* <!-- <= MD view --> */}
                <div className="d-flex d-lg-block">
                  <div className="align-self-center w-100">
                    <div className="bg-white round h-content">
                      <div className="py-5 d-block d-lg-none">
                        <h4 className="font-weight-bold text-center">Login</h4>
                        <p className="text-muted text-center">
                          Login to your existing account to access <br />
                          all the features in Zwallet
                        </p>
                        {/* <!-- <= End Of MD view --> */}
                      </div>
                      <div className="container">
                        <div className="my-2 m-lg-0 p-lg-0 px-4">
                          <form onSubmit={onSubmitHandler}>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                                  id="basic-addon1"
                                >
                                  <i className="far fa-envelope"></i>
                                </span>
                              </div>
                              <Input
                                type="email"
                                className="form-control border-top-0 border-left-0 border-right-0 rounded-0"
                                placeholder="Enter your e-mail"
                                name="email"
                                onChange={handleFormLogin}
                                required
                              />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0"
                                  id="basic-addon1"
                                >
                                  <i className="fas fa-lock"></i>
                                </span>
                              </div>
                              <Input
                                type="password"
                                className="border-top-0 border-left-0 border-right-0 rounded-0"
                                placeholder="Enter your password"
                                name="password"
                                onChange={handleFormLogin}
                              />
                              <div className="input-group-append">
                                <span
                                  className="input-group-text bg-white border-top-0 border-left-0 border-right-0"
                                  id="basic-addon1"
                                >
                                  <span className="text-decoration-none text-dark">
                                    {/* <i className="fas fa-eye"></i> */}
                                    <i className="fas fa-eye-slash"></i>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <h6 className="font-weight-bold text-right">
                              <Link href="/auth/forgot-password">
                                <a className="text-decoration-none text-muted">
                                  Forgot password?
                                </a>
                              </Link>
                            </h6>
                            <Button
                              type="submit"
                              className="btn btn-secondary btn-block"
                              style={{ borderRadius: "12px" }}
                            >
                              Login
                            </Button>
                          </form>
                          <p className="text-center pt-4">
                            Don’t have an account? Let’s
                            <Link href="/auth/register">
                              <a className="text-decoration-none"> Sign Up</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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
          .round {
            border-radius: 25px 25px 0px 0px;
          }
          .h-brand {
            height: 100px;
          }
        `}
      </style>
    </Layout>
  );
}

export default login;
