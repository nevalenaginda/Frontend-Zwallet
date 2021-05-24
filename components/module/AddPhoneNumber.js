import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

function AddPhoneNumber() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const { user: dataUser } = useSelector((state) => state.user);

  const handleAddPhoneNumber = (e) => {
    e.preventDefault();
    const data = { phone: `+62${phoneNumber}` };
    dispatch(updateUser(data, dataUser.id))
      .then((res) => {
        dispatch(getUser());

        Swal.fire({
          title: "Success!",
          text: "Success add phone number",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/profile");
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Failed add phone number",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div className="card shadow border-0 radius-12 h-100">
      <div className="card-body d-flex align-items-start flex-column">
        <div>
          <h5 className="font-weight-bold">Add Phone Number</h5>
          <p className="text-muted">
            Add at least one phone number for the transfer <br />
            ID so you can start transferring your money to
            <br />
            another user
          </p>
        </div>
        <div className="my-auto w-100">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <form onSubmit={handleAddPhoneNumber}>
                <div className="input-group mb-5">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white border-left-0 border-right-0 border-top-0 rounded-0">
                      <i className="mr-2 text-muted"></i>
                      +62
                    </span>
                  </div>
                  <input
                    type="number"
                    placeholder="Enter your phone number"
                    className="border-top-0 border-left-0 border-right-0 rounded-0 form-control"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn rounded-12 btn-lg btn-block btn-blue radius-12"
                  onClick={handleAddPhoneNumber}
                  disabled={phoneNumber.length < 3 ? true : false}
                >
                  Add Phone Number
                </button>
              </form>
            </div>
          </div>
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
          input:focus {
            border-color: lightgray !important;
            box-shadow: none;
          }
        `}
      </style>
    </div>
  );
}

export default AddPhoneNumber;
