import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import toRupiah from "../../helpers/curencyToIDR";
import Moment from "moment";
import PinInput from "react-pin-input";
import { checkPin } from "../../configs/redux/actions/user";
import { transferProcess } from "../../configs/redux/actions/transfer";

//modal
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    heigth: 500,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// modal

function DetailTransfer() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { transfer, dataTarget } = useSelector((state) => state.transfer);
  const { user } = useSelector((state) => state.user);
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;

  const nowTime = () => {
    const dateTime = Moment().format("MMMM DD, YYYY - HH.mm");
    return dateTime;
  };

  // modal
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [loginPin, setLoginPin] = useState("");

  // const handleOpen = (data) => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    setOpen(true);
  };

  const handleLoginPin = (e) => {
    e.preventDefault();
    dispatch(checkPin({ pin: loginPin }, user.id))
      .then((res) => {
        setOpen(false);

        dispatch(transferProcess(transfer))
          .then((res) => {
            dispatch({ type: "TRANSFER_SUCCESS" });
            Swal.fire({
              title: "Success!",
              text: "Transfer Success",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
            router.push({
              pathname: "/transfer/history",
            });
          })
          .catch((err) => {
            dispatch({
              type: "TRANSFER_FAILURE",
              payload: err.response.data.message,
            });
            Swal.fire({
              title: "Error!",
              text: "Transfer Failed",
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
            router.push({
              pathname: "/transfer/history",
            });
          });
      })
      .catch((err) => {
        setOpen(false);
        Swal.fire({
          title: "Error!",
          text: "Login pin number failed. Please enter correct pin number.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#6379f4;",
        });
      });
  };

  useEffect(() => {
    if (!transfer.amount && !dataTarget.id) {
      router.push("/dashboard");
    } else {
      dispatch({
        type: "INSERT_DATA_TRANSFER",
        payload: (transfer.dateTime = nowTime()),
      });
    }
  }, [dispatch]);

  return (
    <div className="">
      <div className="container d-flex d-lg-none py-4">
        <div className="text-dark mr-3" onClick={() => router.back()}>
          <h5 className="m-0 font-weight-bold align-self-center">
            <i className="bi bi-arrow-left"></i>
          </h5>
        </div>
        <h5 className="m-0 align-self-center font-weight-bold">Confirmation</h5>
      </div>
      <div className="card border-0 card-lg shadow py-3">
        <div className="card-body bodycard">
          <h5 className="font-weight-bold">Transfer To</h5>
          <div className="card border-0 shadow mb-4">
            <div className="card-body d-flex">
              {dataTarget.image && (
                <img
                  className="img-people mr-4"
                  src={`${urlImg}/images/${dataTarget.image}`}
                  alt=""
                />
              )}
              {dataTarget.name && (
                <div className="align-self-center">
                  <h5 className="font-weight-bold">{dataTarget.name}</h5>
                  <p className="text-muted m-0">{dataTarget.phone}</p>
                </div>
              )}
            </div>
          </div>
          <h5 className="font-weight-bold">Details</h5>
          {/* <!-- Amount --> */}
          {transfer.amount && (
            <div className="card card-body border-0 shadow mb-3">
              <p>Amount</p>
              <h5 className="m-0 font-weight-bold">
                Rp {toRupiah(transfer.amount)}
              </h5>
            </div>
          )}
          {/* <!-- End Of Amount --> */}
          {/* <!-- Balance left --> */}
          {transfer.balanceLeft && (
            <div className="card card-body border-0 mb-3 shadow">
              <p>Balance Left</p>
              <h5 className="m-0 font-weight-bold">
                Rp {toRupiah(transfer.balanceLeft)}
              </h5>
            </div>
          )}
          {/* <!-- End Of Balance Left --> */}
          {/* <!-- Date --> */}
          {transfer.dateTime && (
            <div className="card card-body mb-3 border-0 shadow">
              <p>Date & Time</p>
              <div className="input-group">
                <h5 className="m-0 font-weight-bold">{transfer.dateTime}</h5>
              </div>
            </div>
          )}
          {/* <!-- End Of Date --> */}
          {/* <!-- Note --> */}
          {transfer.notes && (
            <div className="card card-body mb-5 border-0 shadow">
              <p>Notes</p>
              <div className="input-group">
                <h5 className="m-0 font-weight-bold">{transfer.notes}</h5>
              </div>
            </div>
          )}
          {/* <!-- End Of Note --> */}
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-blue btn-lg radius-12 d-none d-lg-block"
              onClick={handleContinue}
            >
              <small className="p-3 font-weight-bold"> Continue </small>
            </button>
            <button
              className="btn btn-blue btn-lg radius-12 btn-block d-lg-none d-block"
              onClick={handleContinue}
            >
              <small className="p-3 font-weight-bold"> Continue </small>
            </button>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div style={modalStyle} className={classes.paper}>
            <div>
              <div className="p-3">
                <div className="d-flex justify-content-between">
                  <h5 className="m-0 font-weight-bold">
                    Enter PIN to Transfer
                  </h5>
                </div>
                <p className="my-4 text-muted">
                  Enter your 6 digits PIN for confirmation to
                  <br />
                  continue transferring money.
                </p>

                <form>
                  <div className="w-100 d-flex justify-content-center mb-3">
                    <div className="row text-center">
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
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg radius-12 btn-blue"
                      onClick={handleLoginPin}
                      disabled={loginPin.length < 6}
                      type="submit"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .card-lg {
              box-shadow: none !important;
            }
            .card-lg .bodycard {
              padding: 0 !important;
            }
          }
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
          .img-people {
            width: 100px;
            height: 100px;
            border-radius: 12px;
            object-fit: cover;
          }
          div.card {
            border-radius: 15px;
          }
          .bg-gray {
            background-color: #ebecec;
          }
          .bg-gray:focus {
            background-color: #ebecec;
          }
          input:focus {
            box-shadow: none;
          }
          .btn-blue {
            background-color: #6379f4;
            color: white;
          }

          .btn-blue:hover {
            background-color: #5365c9;
            color: white;
          }
        `}
      </style>
    </div>
  );
}

export default DetailTransfer;
