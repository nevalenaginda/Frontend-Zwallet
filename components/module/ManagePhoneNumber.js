import React from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, getUser } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

function ManagePhoneNumber({ phone }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user: dataUser } = useSelector((state) => state.user);
  const handleDeletePhone = (e) => {
    e.preventDefault();
    const data = { phone: "" };
    dispatch(updateUser(data, dataUser.id))
      .then((res) => {
        dispatch(getUser());

        Swal.fire({
          title: "Success!",
          text: "Success delete phone number",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/profile");
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: "Failed delete phone number",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div className="card shadow border-0 radius-12 h-100">
      <div className="card-body">
        <h5 className="font-weight-bold">Manage Phone Number</h5>
        <p className="text-muted">
          You can only delete the phone number and then
          <br />
          you must add another phone number.
        </p>
        <div className="card shadow border-0">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <p className="text-muted">Primary</p>
                {phone ? (
                  <h5 className="m-0 font-weight-bold">{phone}</h5>
                ) : (
                  <h5 className="m-0 font-weight-bold"></h5>
                )}
              </div>
              <div className="align-self-center">
                <span
                  className="text-decoration-none pointer bg-white"
                  style={{ background: "white" }}
                  onClick={handleDeletePhone}
                >
                  <h2 className="m-0 text-muted">
                    <i className="fas fa-trash-alt"></i>
                  </h2>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagePhoneNumber;
