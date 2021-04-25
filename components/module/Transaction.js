import React, { useEffect, useState } from "react";
import Link from "next/link";
import toRupiah from "../../helpers/curencyToIDR";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllHistory,
  getDetailHistory,
} from "../../configs/redux/actions/history";

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

function TransactionHistory() {
  const dispatch = useDispatch();
  const { message, allHistory } = useSelector((state) => state.history);
  const [detailHistory, setDetailHistory] = useState({});
  const [isLoading, setLoading] = useState(false);
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

  let idUser, token;
  if (process.browser) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    dispatch(getAllHistory(idUser, 10));
  }, [dispatch]);
  // console.log(allHistory);
  // modal
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (idx) => {
    setLoading(true);
    dispatch(getDetailHistory(idx))
      .then((res) => {
        setLoading(false);
        setDetailHistory(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        setLoading(false);
      });
    // console.log("ini", data);
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
      .post(`${URLAPI}transferSuccess/${id}`, data, {
        withCredentials: true,
      })
      .then((response) => {
        setOpen(false);
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
      .post(`${URLAPI}transferCancel/${id}`, data, {
        withCredentials: true,
      })
      .then((response) => {
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

  const btcancelTarget = (id) => {
    const data = {
      id,
      token,
    };
    setOpen(false);
    axios
      .post(`${URLAPI}transferCancel/${id}`, data, {
        withCredentials: true,
      })
      .then((response) => {
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

  const changeTime = (time) => {
    return Moment(time).format("MMMM DD, YYYY - HH.mm");
  };

  // end modal

  return (
    <div className="h-100">
      <div className="card shadow bg-0 border-0 h-100">
        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between pb-0 mb-3">
            <h5 className="font-weight-bold">Transaction History</h5>
            <Link href={"/history"}>
              <a className="text-blue text-decoration-none">See All</a>
            </Link>
          </div>
          {/* <!-- Item --> */}
          {message !== "Data unavailable" ||
          message === "Get all history success" ? (
            <div className="container py-2 h-trans overflow-auto">
              {/* Looping disini */}
              <div className="text-dark text-decoration-none ">
                {/* <!-- for desktop --> */}
                {allHistory.data
                  ? allHistory.data.map((itm, idx) => {
                      return (
                        <div
                          className="d-none d-lg-flex row no-gutters min-item mb-2 py-auto pointer"
                          key={idx}
                          onClick={(event) => handleOpen(itm.id)}
                        >
                          <div className="col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center">
                            <div className="align-self-center">
                              {!itm.to_image || !itm.from_image ? (
                                <img
                                  className="imgCenter"
                                  src={`${urlImg}/images/default.png`}
                                  alt=""
                                />
                              ) : itm.to_id !== idUser ? (
                                <img
                                  className="imgCenter"
                                  src={`${urlImg}/images/${itm.to_image}`}
                                  alt=""
                                />
                              ) : (
                                <img
                                  className="imgCenter"
                                  src={`${urlImg}/images/${itm.from_image}`}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                          <div className="col d-flex ml-2 justify-content-between">
                            <div className="align-self-center">
                              {itm.to_id !== idUser ? (
                                <h5 className="font-weight-bold m-0">
                                  {itm.to_name}
                                </h5>
                              ) : (
                                <h5 className="font-weight-bold m-0">
                                  {itm.from_name}
                                </h5>
                              )}

                              {itm.status === 1 ? (
                                <p className="text-muted m-0">Pending</p>
                              ) : itm.status === 2 ? (
                                <p className="text-muted m-0">Transfer</p>
                              ) : itm.status === 3 ? (
                                <p className="text-muted m-0">Cancel</p>
                              ) : (
                                <p className="text-muted m-0">Top Up</p>
                              )}
                              {/* <!-- SHOW BUTTON --> */}
                              {/* <!-- show target --> */}
                            </div>
                            <div className="align-self-center">
                              {itm.status === 1 ? (
                                <h6 className="font-weight-bold c-pending">
                                  Rp{toRupiah(itm.amount)}
                                </h6>
                              ) : itm.status === 2 && itm.to_id !== idUser ? (
                                <h6 className="font-weight-bold c-transfer">
                                  -Rp{toRupiah(itm.amount)}
                                </h6>
                              ) : itm.status === 2 ? (
                                <h6 className="font-weight-bold text-success">
                                  +Rp{toRupiah(itm.amount)}
                                </h6>
                              ) : itm.status === 3 ? (
                                <h6 className="font-weight-bold c-cancel">
                                  Rp {toRupiah(itm.amount)}
                                </h6>
                              ) : (
                                <h6 className="font-weight-bold c-topup">
                                  +Rp{toRupiah(itm.amount)}
                                </h6>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}

                {/* <!-- End of for desktop --> */}
                {/* <!-- For mobile! --> */}
                {allHistory.data
                  ? allHistory.data.map((itm, idx) => {
                      return (
                        <div
                          className="d-flex d-lg-none row pointer"
                          onClick={(event) => handleOpen(itm.id)}
                          key={idx}
                        >
                          <div className="card w-100 mb-2 shadow border-0 h-content">
                            <div className="card-body">
                              <div className="row no-gutters">
                                <div className="col-4 col-sm-3 col-md-2 imgCenter d-flex justify-content-center">
                                  <div className="align-self-center">
                                    {!itm.to_image || !itm.from_image ? (
                                      <img
                                        className="imgCenter"
                                        src={`${urlImg}/images/default.png`}
                                        alt=""
                                      />
                                    ) : itm.to_id !== idUser ? (
                                      <img
                                        className="imgCenter"
                                        src={`${urlImg}/images/${itm.to_image}`}
                                        alt=""
                                      />
                                    ) : (
                                      <img
                                        className="imgCenter"
                                        src={`${urlImg}/images/${itm.from_image}`}
                                        alt=""
                                      />
                                    )}
                                  </div>
                                </div>
                                <div className="col d-flex ml-2 justify-content-between">
                                  <div className="align-self-center">
                                    {itm.to_id !== idUser ? (
                                      <h5 className="font-weight-bold m-0">
                                        {itm.to_name}
                                      </h5>
                                    ) : (
                                      <h5 className="font-weight-bold m-0">
                                        {itm.from_name}
                                      </h5>
                                    )}

                                    {itm.status === 1 ? (
                                      <p className="text-muted m-0">Pending</p>
                                    ) : itm.status === 2 ? (
                                      <p className="text-muted m-0">Transfer</p>
                                    ) : itm.status === 3 ? (
                                      <p className="text-muted m-0">Cancel</p>
                                    ) : (
                                      <p className="text-muted m-0">Top Up</p>
                                    )}
                                  </div>
                                  <div className="align-self-center">
                                    {itm.status === 1 ? (
                                      <h6 className="font-weight-bold c-pending">
                                        Rp{toRupiah(itm.amount)}
                                      </h6>
                                    ) : itm.status === 2 &&
                                      itm.to_id !== idUser ? (
                                      <h6 className="font-weight-bold c-transfer">
                                        -Rp{toRupiah(itm.amount)}
                                      </h6>
                                    ) : itm.status === 2 ? (
                                      <h6 className="font-weight-bold text-success">
                                        +Rp{toRupiah(itm.amount)}
                                      </h6>
                                    ) : itm.status === 3 ? (
                                      <h6 className="font-weight-bold c-cancel">
                                        Rp {toRupiah(itm.amount)}
                                      </h6>
                                    ) : (
                                      <h6 className="font-weight-bold c-topup">
                                        +Rp{toRupiah(itm.amount)}
                                      </h6>
                                    )}
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
            <div className="text-center py-2 d-flex h-100">
              <div className="align-self-center w-100">
                <div className="">
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

          {/* <!-- End Of Item --> */}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {isLoading ? (
          <div style={modalStyle} className={classes.paper}>
            <div className="row  w-100">
              <div className="col h-100">
                <div className="py-auto text-center">
                  {/* When loading*/}
                  <div className="align-self-center ">
                    <div className="spinner-grow text-blue">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <h3 className="font-weight-bold">Wait a moment...</h3>
                    <p className="text-muted m-0">Loading process</p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        ) : (
          <div style={modalStyle} className={`mx-auto ${classes.paper}`}>
            <div className="row ``">
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
                    <h5 className="font-weight-bold">
                      {detailHistory.to_name}
                    </h5>
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
                {detailHistory.status === 1 &&
                detailHistory.to_id === idUser ? (
                  <button
                    onClick={(e) => btcancelTarget(detailHistory.id)}
                    className="btn btn-danger mr-2"
                  >
                    Reject
                  </button>
                ) : (
                  ""
                )}
                {detailHistory.status === 1 &&
                detailHistory.to_id === idUser ? (
                  <button
                    onClick={(e) => btaccept(detailHistory.id)}
                    className="btn btn-success"
                  >
                    Accept
                  </button>
                ) : (
                  ""
                )}

                {detailHistory.status === 1 &&
                detailHistory.to_id !== idUser ? (
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
        )}
      </Modal>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .shadow {
              box-shadow: none !important;
            }
            div.bg-0.card {
              background-color: transparent;
            }
          }
          .imgCenter {
            object-fit: cover;
            border-radius: 15px;
            height: 60px;
            width: 60px;
          }
          .min-item {
            min-height: 75px;
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
          .h-content {
            height: 100px;
          }

          .imageHistory {
            height: 159px;
            width: 100%;
            object-fit: cover;
            border-radius: 15px;
          }
          .h-trans {
            height: 260px;
          }
        `}
      </style>
    </div>
  );
}

export default TransactionHistory;
