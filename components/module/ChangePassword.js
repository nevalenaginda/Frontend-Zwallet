import React from "react";

function ChangePassword() {
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
                    type="password"
                    className="form-control text-muted border-top-0 border-left-0 border-right-0 rounded-0"
                    placeholder="Current password"
                    autocomplete="new-password"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <span className="text-muted">
                        <i className="fas fa-eye-slash"></i>
                        {/* <i className="fas fa-eye"></i> */}
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
                    type="password"
                    className="form-control text-muted border-top-0 border-left-0 border-right-0 rounded-0"
                    placeholder="New password"
                    autocomplete="new-password"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <span className="text-muted">
                        <i className="fas fa-eye-slash"></i>
                        {/* <i  className="fas fa-eye"></i> */}
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
                    type="password"
                    className="text-muted form-control border-top-0 border-left-0 border-right-0 rounded-0"
                    placeholder="Repeat new password"
                    autocomplete="new-password"
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text bg-white border-top-0 border-left-0 border-right-0 rounded-0">
                      <span className="text-muted">
                        <i className="fas fa-eye-slash"></i>
                        {/* <i className="fas fa-eye"></i> */}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="py-5">
                  <button
                    type="submit"
                    className="btn btn-block font-weight-bold radius-12 btn-lg btn-gray text-dark"

                    //   disabled="form.old && form.new && form.repeat ? false : true"
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
        `}
      </style>
    </div>
  );
}

export default ChangePassword;
