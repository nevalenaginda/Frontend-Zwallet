import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import PinInput from "react-pin-input";

function pin() {
  const router = useRouter();
  const [statePin, setStatePin] = useState("");
  const [stateProcess, setStateProcess] = useState("input");

  const handleChangePinValue = (value) => {
    setStatePin(value);
  };

  const onSubmitPin = (event) => {
    event.preventDefault();
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    console.log(id);
    const dataPin = { pin: statePin };
    console.log(dataPin);
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    setStateProcess("loading");
    axios
      .patch(`${URLAPI}user/${id}`, dataPin, {
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
          setStateProcess("success");
          if (result.isConfirmed) {
            router.push("/dashboard");
          } else {
            router.push("/dashboard");
          }
        });
      })
      .catch((err) => {
        setStateProcess("input");
        setStatePin("");
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#a4a7b4",
        });
      });
  };

  return (
    <div>
      <div className="row min-vh-100 no-gutters">
        <div className="col-7 bg-blue bg-accent overflow-auto d-none d-lg-flex px-5">
          <div className="container align-self-center">
            <h3 className="font-weight-bold text-white">ZWallet</h3>
            <div className="text-center">
              <img
                style={{ height: "400px" }}
                src={require("../../assets/images/phone.svg")}
              />
            </div>
            <h5 className="font-weight-bold text-white">
              App that Covering Banking Needs.
            </h5>
            <div className="pr-5">
              <p className="text-light">
                Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered inZwallet everyday with
                worldwide users coverage.
              </p>
            </div>
          </div>
        </div>
        <div className="col overflow-auto d-flex">
          {stateProcess === "input" ? (
            <div className="container align-self-center">
              <div className="px-5">
                <h4 className="font-weight-bold">
                  Secure Your Account, Your Wallet, and Your Data With 6 Digits
                  PIN That You Created Yourself.
                </h4>
                <p className="text-muted">
                  Create 6 digits pin to secure all your money and your data in
                  Zwallet app. Keep it secret and don’t tell anyone about your
                  Zwallet account password and the PIN.
                </p>
                <form>
                  <div className="px-0 px-sm-5">
                    <div className="pt-4 text-center">
                      <PinInput
                        length={6}
                        focus
                        secret
                        inputStyle={{
                          border: "1px solid rgba(169, 169, 169, 0.6)",
                          borderRadius: "10px",
                          width: "10%",
                          minWidth: "30px",
                        }}
                        inputFocusStyle={{
                          borderColor: " #6379f4",
                        }}
                        type="numeric"
                        onChange={handleChangePinValue}
                      />
                    </div>
                    <div className="pt-5">
                      <button
                        className="btn btn-block btn-blue radius-12"
                        type="submit"
                        onClick={onSubmitPin}
                        disabled={statePin.length < 6}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : stateProcess === "loading" ? (
            <div className="container align-self-center text-center">
              <div className="spinner-grow text-blue" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <h4 className="font-weight-bold pt-2">Please wait</h4>
              <p className="text-muted">
                We're verifying your PIN for safety reason
              </p>
            </div>
          ) : (
            <div className="container align-self-center">
              <div className="px-5 mx-3">
                <h1 className="font-weight-bold display-4 text-success">
                  <i className="fas fa-check-circle"></i>
                </h1>
                <h4 className="font-weight-bold pt-3">
                  Your PIN Was Successfully Created
                </h4>
                <p className="text-muted pt-3">
                  Your PIN was successfully created and you can now access all
                  the features in Zwallet. Login to your new account and start
                  exploring!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
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
          .bg-accent {
            background-image: url("/assets/Vector1.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position-y: 50px;
          }
          input:focus {
            border-color: blue !important;
            box-shadow: none !important;
            outline: 0 none !important;
          }
        `}
      </style>
    </div>
  );
}

export default pin;
