import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function token() {
  const router = useRouter();

  const [status, setStatus] = useState("loading");
  useEffect(() => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    setTimeout(() => {
      axios
        .get(`${URLAPI}activate/${router.query.token}/${router.query.email}`)
        .then(() => {
          setStatus("ok");
        })
        .catch((err) => {
          console.log(err);
          setStatus("failed");
        });
    }, 3000);
  }, [router.query.token, router.query.email]);

  return (
    <div className="container min-vh-100">
      {/* <!-- Loading Activation --> */}
      {status === "loading" ? (
        <div>
          <div className="d-flex justify-content-center min-vh-100">
            <div className="align-self-center text-center">
              <div className="spinner-border mb-3 text-blue" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <h3 className="m-0">Please Wait</h3>
              <p className="m-0">Activating Account</p>
            </div>
          </div>
        </div>
      ) : status === "ok" ? (
        <div className="min-vh-100 d-flex justify-content-center">
          <div className="align-self-center">
            <h1 className=" text-muted">
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </h1>
            <h4>OK!</h4>
            <p>Your activation success!</p>
            <button
              type="button"
              className="btn btn-primary text-center"
              onClick={(e) => router.push("/login")}
            >
              Take me to login page
            </button>
          </div>
        </div>
      ) : status === "failed" && router.query.email !== undefined ? (
        <div className="min-vh-100 d-flex justify-content-center">
          <div className="align-self-center">
            <h1 className="text-muted">
              <i className="fa fa-frown" aria-hidden="true"></i>
            </h1>
            <h4>Something not good</h4>
            <p>
              Maybe, your token was expired or typo. Dont make any unique for
              token that requested for activation
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="d-flex justify-content-center min-vh-100">
            <div className="align-self-center text-center">
              <div className="spinner-border mb-3 text-blue" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <h3 className="m-0">Please Wait</h3>
              <p className="m-0">Activating Account</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default token;
