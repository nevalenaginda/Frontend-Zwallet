import React from "react";
import PinInput from "react-pin-input";
function CardChangePin() {
  return (
    <div className="card shadow border-0 radius-12 h-100">
      <div className="card-body">
        <div v-else className="h-100">
          <h5 className="font-weight-bold text-secondary mb-3">Change PIN</h5>

          <p className="text-muted">
            Enter your current 6 digits Zwallet PIN below to <br />
            continue to the next steps.
          </p>
          <div className="my-auto">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-md-8">
                <form>
                  <div className="px-5">
                    <div className="pt-4 input-wrapper"></div>
                    <PinInput
                      length={6}
                      focus
                      // disabled
                      secret
                      initialValue=""
                      inputStyle={{
                        border: "1px solid rgba(169, 169, 169, 0.6)",
                        borderRadius: "10px",
                      }}
                      inputFocusStyle={{
                        borderColor: " #6379f4",
                      }}
                      //   ref={(p) => (this.pin = p)}
                      type="numeric"
                      //   onChange={this.onChange}
                    />
                    <div className="pt-5">
                      <button
                        className="btn btn-block btn-lg radius-12 btn-gray text-dark"
                        // className="
                        //   code.length < 6 ? 'btn-gray text-dark' : 'btn-blue'
                        // "
                        disabled
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
      </div>
      <style jsx>
        {`
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

export default CardChangePin;
