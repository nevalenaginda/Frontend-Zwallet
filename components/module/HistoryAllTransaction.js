import React, { useState, useEffect } from "react";
import toRupiah from "../../helpers/curencyToIDR";
import axios from "axios";

// modal
import Moment from "moment";
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

function HistoryAllTransaction() {
  const [dataAllUser, setAllDataUser] = useState({});
  const [message, setMessage] = useState("");
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

  let idUser, token;
  if (process.browser) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }
  const getData = () => {
    axios
      .get(`${URLAPI}history/${idUser}?limit=1000&sort=asc`, {
        headers: { token },
      })
      .then((res) => {
        console.log(res.data);
        setAllDataUser(res.data);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
        setAllDataUser({});
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // modal
  const [detailHistory, setDetailHistory] = useState({});
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (data) => {
    setDetailHistory(data);
    console.log("ini", data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const btaccept = (id) => {
    const data = {
      id,
      token,
    };
    setOpen(false);
    axios
      .post(`${URLAPI}transferSuccess/${id}`, data, { headers: { token } })
      .then((response) => {
        setOpen(false);
        getData();
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const btcancelUser = (id) => {
    const data = {
      id,
      token,
    };
    setOpen(false);
    axios
      .post(`${URLAPI}transferCancel/${id}`, data, { headers: { token } })
      .then((response) => {
        getData();
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const btcancelTarget = (id) => {
    const data = {
      id,
      token,
    };
    setOpen(false);
    axios
      .post(`${URLAPI}transferCancel/${id}`, data, { headers: { token } })
      .then((response) => {
        getData();
        Swal.fire({
          icon: "success",
          title: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Failed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const changeTime = (time) => {
    return Moment(time).format("MMMM DD, YYYY - HH.mm");
  };

  // end modal

  return (
    <div className="card card-lg h-on-lg border-0 shadow">
      <div className="card-body p-0 p-lg-4">
        <div className="container h-100 d-flex flex-column">
          <div>
            <div className="d-none d-lg-block">
              <h5 className="font-weight-bold">Transaction History</h5>
            </div>
            <h6 className="font-weight-bold text-muted mb-3">This Week</h6>
          </div>
          {/* <!-- Item --> */}

          {message !== "Data unavailable" ? (
            <div className="pembungkus looping h-content overflow-auto">
              <div className="text-decoration-none text-dark ">
                {/* Looping disini */}
                {dataAllUser.data
                  ? dataAllUser.data.map((itm, idx) => {
                      return (
                        <div
                          className="card shadow border-0 mb-3 pointer"
                          onClick={(event) => handleOpen(itm)}
                          key={idx}
                        >
                          <div className="card-body h-100">
                            <div className="d-flex">
                              <div className="row align-self-center w-100">
                                <div className="col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center">
                                  {itm.to_id !== idUser ? (
                                    <img
                                      className="imgCenter"
                                      src={`${urlImg}/images/${itm.to_image}`}
                                    />
                                  ) : (
                                    <img
                                      className="imgCenter"
                                      src={`${urlImg}/images/${itm.from_image}`}
                                    />
                                  )}
                                </div>
                                <div className="col d-flex">
                                  <div className="align-self-center w-100">
                                    <div className="d-flex justify-content-between">
                                      <div>
                                        {itm.to_id !== idUser ? (
                                          <h5 className="font-weight-bold m-0">
                                            {itm.to_name}
                                          </h5>
                                        ) : (
                                          <h5 className="font-weight-bold m-0">
                                            {itm.from_name}
                                          </h5>
                                        )}

                                        {/* <p className="text-muted m-0">{{ itm.notes }}</p> */}
                                        {itm.status === 1 ? (
                                          <p className="text-muted m-0">
                                            Pending
                                          </p>
                                        ) : itm.status === 2 ? (
                                          <p className="text-muted m-0">
                                            Transfer
                                          </p>
                                        ) : itm.status === 3 ? (
                                          <p className="text-muted m-0">
                                            Cancel
                                          </p>
                                        ) : (
                                          <p className="text-muted m-0">
                                            Top Up
                                          </p>
                                        )}
                                      </div>
                                      <div>
                                        {itm.status === 1 ? (
                                          <h5 className="font-weight-bold c-pending">
                                            Rp{toRupiah(itm.amount)}
                                          </h5>
                                        ) : itm.status === 2 &&
                                          itm.to_id !== idUser ? (
                                          <h5 className="font-weight-bold c-transfer">
                                            -Rp{toRupiah(itm.amount)}
                                          </h5>
                                        ) : itm.status === 2 ? (
                                          <h5 className="font-weight-bold text-success">
                                            +Rp{toRupiah(itm.amount)}
                                          </h5>
                                        ) : itm.status === 3 ? (
                                          <h5 className="font-weight-bold c-cancel">
                                            Rp{toRupiah(itm.amount)}
                                          </h5>
                                        ) : (
                                          <h5 className="font-weight-bold c-topup">
                                            +Rp{toRupiah(itm.amount)}
                                          </h5>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
          ) : (
            <div className="h-100 d-flex">
              <div className="align-self-center w-100 text-center">
                <div>
                  <img
                    src={require("../../assets/images/notransaction.png")}
                    alt=""
                  />
                  <h4 className="font-weight-bold my-3">It's Clear!</h4>
                  <p className="text-muted">
                    You've never done a transaction so far
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* {a=='a'?('m'):('b')} */}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="row">
            <div className="col-4">
              {detailHistory.to_id !== idUser ? (
                <img
                  className="imageHistory"
                  src={`${urlImg}/images/${detailHistory.to_image}`}
                />
              ) : (
                <img
                  className="imageHistory"
                  src={`${urlImg}/images/${detailHistory.from_image}`}
                />
              )}
            </div>
            <div className="col d-flex">
              <div className="align-self-center">
                {detailHistory.to_id !== idUser ? (
                  <h5 className="font-weight-bold">{detailHistory.to_name}</h5>
                ) : (
                  <h5 className="font-weight-bold">
                    {detailHistory.from_name}
                  </h5>
                )}

                {detailHistory.to_id !== idUser ? (
                  <p className="text-muted m-0">{detailHistory.to_phone}</p>
                ) : (
                  <p className="text-muted m-0">{detailHistory.from_phone}</p>
                )}
              </div>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="d-flex justify-content-between mb-2">
              <h6 className="m-0">Amount</h6>
              {detailHistory.status === 1 ? (
                <h6 className="m-0 c-pending font-weight-bold">
                  +Rp{toRupiah(detailHistory.amount)}
                </h6>
              ) : detailHistory.status === 2 &&
                detailHistory.to_id !== idUser ? (
                <h6 className="m-0 c-transfer font-weight-bold">
                  -Rp{toRupiah(detailHistory.amount)}
                </h6>
              ) : detailHistory.status === 2 ? (
                <h6 className="m-0 text-success font-weight-bold">
                  +Rp{toRupiah(detailHistory.amount)}
                </h6>
              ) : detailHistory.status === 3 ? (
                <h6 className="m-0 c-cancel font-weight-bold">
                  Rp{toRupiah(detailHistory.amount)}
                </h6>
              ) : (
                <h6 className="m-0 c-topup font-weight-bold">
                  +Rp{toRupiah(detailHistory.amount)}
                </h6>
              )}
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <h6 className="m-0">Date & Time</h6>
              <h6 className="m-0">{changeTime(detailHistory.created_at)}</h6>
            </div>
            <hr />
            <div className="mb-4">
              <h6 className="m font-weight-bold">Notes :</h6>
              <h6 className="m-0">{detailHistory.notes}</h6>
            </div>
            <div className="mb-2">
              {detailHistory.status === 1 ? (
                <h6 className="m font-weight-bold">Selection</h6>
              ) : (
                ""
              )}
              {detailHistory.status === 1 && detailHistory.to_id === idUser ? (
                <button
                  onClick={(e) => btcancelTarget(detailHistory.id)}
                  className="btn btn-danger mr-2"
                >
                  Reject
                </button>
              ) : (
                ""
              )}
              {detailHistory.status === 1 && detailHistory.to_id === idUser ? (
                <button
                  onClick={(e) => btaccept(detailHistory.id)}
                  className="btn btn-success"
                >
                  Accept
                </button>
              ) : (
                ""
              )}

              {detailHistory.status === 1 && detailHistory.to_id !== idUser ? (
                <button
                  onClick={(e) => btcancelUser(detailHistory.id)}
                  className="btn btn-warning"
                >
                  Cancel
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        @media screen and (max-width: 992px) {
          .card-lg {
            background-color: transparent !important;
            box-shadow: none !important;
          }
        }
        .h-content {
          height: calc(90vh - 12rem);
        }
        .imgCenter {
          object-fit: cover;
          border-radius: 15px;
          height: 60px;
          width: 60px;
        }
        div.card {
          border-radius: 15px;
        }
        .c-transfer,
        .c-cancel {
          color: red;
        }
        .c-pending {
          color: orange;
        }
        .c-topup {
          color: #6379f4;
        }
        .imageHistory {
          height: 150px;
          width: 100%;
          object-fit: cover;
          border-radius: 15px;
        }
        @media screen and (min-width: 992px) {
          .h-on-lg {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}

export default HistoryAllTransaction;
