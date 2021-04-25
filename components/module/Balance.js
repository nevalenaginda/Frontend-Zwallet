import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../configs/redux/actions/user";
import { getAllHistory } from "../../configs/redux/actions/history";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Swal from "sweetalert2";
import toRupiah from "../../helpers/curencyToIDR";

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
    border: "2px solid #ffff",
    borderRadius: "12px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Balance() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user: dataUser } = useSelector((state) => state.user);
  const [dataBalance, setBalance] = useState(0);
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

  const handleTopUp = (event) => {
    event.preventDefault();

    if (dataBalance < 5000) {
      setOpen(false);
      Swal.fire({
        title: "Info!",
        text: "Minimum top up Rp5.000",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#6379f4;",
      });
    } else {
      const data = {
        amount: dataBalance,
      };
      axios
        .post(`${URLAPI}topUp/${dataUser.id}`, data, {
          withCredentials: true,
        })
        .then((res) => {
          dispatch(getUser());
          dispatch(getAllHistory(dataUser.id));
          setBalance(0);
          setOpen(false);
          Swal.fire({
            icon: "success",
            title: "Top Up Success",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err);
          setBalance(0);
          setOpen(false);
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };
  // modal setup
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBalance(0);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title" className="text-center font-weight-bold">
        Top Up
      </h2>
      <label for="form-balance" className="font-weight-bold  h4">
        Nominal
      </label>
      <form onSubmit={handleTopUp}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text font-weight-bold bg-white">
              Rp.
            </span>
          </div>
          <input
            className="form-control"
            id="form-balance"
            type="number"
            value={dataBalance}
            placeholder={dataUser.balance ? dataUser.balance : ""}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-block bt-blue radius-12 f-white mt-3"
          onClick={handleTopUp}
        >
          Top Up
        </button>
        <button
          type="submit"
          className="btn btn-block btn-danger radius-12 f-white mt-3"
          onClick={handleClose}
        >
          Cancel
        </button>
      </form>
    </div>
  );

  return (
    <div>
      <div className={`card border-0 shadow text-white blue card`}>
        <div className="card-body">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div>
                <p>Balance</p>
                {dataUser.balance ? (
                  <h3 className="font-weight-bold">
                    Rp{toRupiah(dataUser.balance)}
                  </h3>
                ) : (
                  <h3 className="font-weight-bold"></h3>
                )}
                {dataUser.phone ? (
                  <p className="m-0">{dataUser.phone}</p>
                ) : (
                  <p className="m-0"></p>
                )}
              </div>
              <div className="d-none d-lg-flex">
                <div className="align-self-center">
                  <button
                    className="btn btn-block btn-outline-light"
                    onClick={(e) => router.push("/transfer")}
                  >
                    <i className="fas fa-arrow-up  mr-2"></i> Transfer
                  </button>
                  <button
                    className="btn btn-block btn-outline-light"
                    onClick={handleOpen}
                  >
                    <i className="fas fa-plus mr-2"></i> Top Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* btn mobile */}
      <div className="my-4 d-flex d-lg-none row">
        <div className="col">
          <button
            className=" radius-12 btn btn-gray btn-block "
            onClick={(e) => router.push("/transfer")}
          >
            <div className="py-1 font-weight-bold">
              <i className="fas fa-arrow-up  mr-2 text-blue"></i>Transfer
            </div>
          </button>
        </div>
        <div className="col">
          <button
            className=" radius-12 btn btn-gray btn-block "
            onClick={handleOpen}
          >
            <div className="py-1 font-weight-bold">
              <i className="fas fa-plus mr-2 text-blue"></i>Top Up
            </div>
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <style jsx>
        {`
          .blue {
            background: #6379f4;
          }
          div.card {
            border-radius: 15px;
          }

          .font-title {
            font-size: 24px;
          }
          .bt-blue {
            background: #6379f4;
          }

          .bt-blue:hover {
            color: #fff;
            background: #425be7;
          }

          .f-white {
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default Balance;
