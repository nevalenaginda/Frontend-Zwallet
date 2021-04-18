import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import toRupiah from "../../helpers/curencyToIDR";
import Moment from "moment";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ open, handleClose, detailHistory }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;

  let idUser, token;
  if (process.browser) {
    idUser = localStorage.getItem("id");
    token = localStorage.getItem("token");
  }

  const btaccept = (id) => {
    console.log(id);
  };
  const btcancelUser = (id) => {
    console.log(id);
  };

  const btcancelTarget = (id) => {
    console.log(id);
  };

  const changeTime = (time) => {
    return Moment(time).format("MMMM DD, YYYY - HH.mm");
  };
  //   const [open, setOpen] = React.useState(false);

  //   const handleOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div style={modalStyle} className={classes.paper}>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      {detailHistory.to_id ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
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
              <h5 className="m-0">Amount</h5>
              {detailHistory.status === 1 ? (
                <h5 className="m-0 c-pending font-weight-bold">
                  +Rp{toRupiah(detailHistory.amount)}
                </h5>
              ) : detailHistory.status === 2 &&
                detailHistory.to_id !== idUser ? (
                <h5 className="m-0 c-transfer font-weight-bold">
                  -Rp{toRupiah(detailHistory.amount)}
                </h5>
              ) : detailHistory.status === 2 ? (
                <h5 className="m-0 text-success font-weight-bold">
                  +Rp{toRupiah(detailHistory.amount)}
                </h5>
              ) : detailHistory.status === 3 ? (
                <h5 className="m-0 c-cancel font-weight-bold">
                  Rp{toRupiah(detailHistory.amount)}
                </h5>
              ) : (
                <h5 className="m-0 c-topup font-weight-bold">
                  +Rp{toRupiah(detailHistory.amount)}
                </h5>
              )}
            </div>
            <hr />
            <div className="d-flex justify-content-between mb-2">
              <h5 className="m-0">Date & Time</h5>
              <h5 className="m-0">{changeTime(detailHistory.created_at)}</h5>
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
        </Modal>
      ) : (
        ""
      )}

      <style jsx>{`
        .imageHistory {
          height: 100%;
          width: 100%;
          object-fit: cover;
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
      `}</style>
    </div>
  );
}
