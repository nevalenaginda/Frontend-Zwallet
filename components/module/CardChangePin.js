import React, { useState } from "react";
import PinInput from "react-pin-input";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
function CardChangePin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [pinCorrect, setPinCorret] = useState(false);
  const [loginPin, setLoginPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

  let idUser, token;
  if (process.browser) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  const handleLoginPin = (e) => {
    e.preventDefault();

    setIsLoading(true);
    axios
      .post(
        `${URLAPI}loginPIN/${idUser}`,
        { pin: loginPin },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setIsLoading(false);
        setPinCorret(true);
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setPinCorret(false);
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleNewPin = (e) => {
    e.preventDefault();

    setIsLoading(true);
    axios
      .patch(
        `${URLAPI}user/${idUser}`,
        { pin: newPin },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setIsLoading(false);
        router.push("/profile");
        setPinCorret(false);
        Swal.fire({
          title: "Success!",
          text: "Change pin success.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        setPinCorret(true);
        Swal.fire({
          title: "Error!",
          text: "Change pin failed",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="card shadow border-0 radius-12 h-100">
      <div className="card-body">
        {isLoading ? (
          <div className="d-flex justify-content-center h-100">
            <div className="align-self-center text-center">
              <div className="spinner-grow text-blue mb-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <h4 className="font-weight-bold text-muted">Please wait...</h4>
              <p className="text-muted">We're igniting the process</p>
            </div>
          </div>
        ) : (
          <div className="h-100">
            {" "}
            {pinCorrect ? (
              <div v-else className="h-100">
                <h5 className="font-weight-bold text-secondary mb-3">
                  Change PIN
                </h5>

                <p className="text-muted">
                  Type your 6 digits security PIN to use in <br />
                  Zwallet.
                </p>
                <div className="my-auto">
                  <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-8">
                      <form>
                        <div className="px-5">
                          <div className="pt-4 input-wrapper">
                            <PinInput
                              length={6}
                              focus
                              secret
                              initialValue=""
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
                              onChange={(value) => setNewPin(value)}
                            />
                          </div>
                          <div className="pt-5">
                            <button
                              className="btn btn-block btn-lg radius-12 btn-blue"
                              onClick={handleNewPin}
                              disabled={newPin.length < 6}
                              type="submit"
                            >
                              Change Pin
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div v-else className="h-100">
                <h5 className="font-weight-bold text-secondary mb-3">
                  Change PIN
                </h5>

                <p className="text-muted">
                  Enter your current 6 digits Zwallet PIN below to <br />
                  continue to the next steps.
                </p>
                <div className="my-auto">
                  <div className="row d-flex justify-content-center text-center">
                    <div className="col-md-8">
                      <form>
                        <div className="px-5">
                          <div className="pt-4 input-wrapper">
                            <PinInput
                              length={6}
                              focus
                              secret
                              initialValue=""
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
                              onChange={(value) => setLoginPin(value)}
                            />
                          </div>
                          <div className="pt-5">
                            <button
                              className="btn btn-block btn-lg radius-12 btn-blue "
                              onClick={handleLoginPin}
                              disabled={loginPin.length < 6}
                              type="submit"
                            >
                              Continue
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}{" "}
          </div>
        )}
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
          input:focus {
            border-color: blue !important;
            box-shadow: none !important;
            outline: 0 none !important;
          }
          input-wrapper {
            width: 100%;
            display: flex !important;
            justify-content: space-between;
          }
        `}
      </style>
    </div>
  );
}

export default CardChangePin;
