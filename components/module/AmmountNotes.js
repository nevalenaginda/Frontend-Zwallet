import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDataTarget } from "../../configs/redux/actions/transfer";
import NumberFormat from "react-number-format";
import toRupiah from "../../helpers/curencyToIDR";

function AmmountNotes() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { transfer, dataTarget } = useSelector((state) => state.transfer);
  const { user } = useSelector((state) => state.user);

  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const [dataTransfer, setDataTrasnfer] = useState({ amount: "", notes: "" });

  const handleContinue = () => {
    console.log(dataTransfer);
    dispatch({
      type: "INSERT_DATA_TRANSEFR",
      action:
        ((transfer.from_id = user.id),
        (transfer.amount = dataTransfer.amount),
        (transfer.status = "1"),
        (transfer.notes = dataTransfer.notes),
        (transfer.balanceLeft = user.balance - dataTransfer.amount)),
    });
    router.push({
      pathname: "/transfer/detail",
    });
  };

  // number input function
  const withValueLimit = (inputObj) => {
    const { value } = inputObj;

    if (value < parseInt(user.balance) + 1) return inputObj;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "amount") {
      if (value.match(",")) {
        setDataTrasnfer({
          ...dataTransfer,
          amount: value.split("Rp")[1].replace(",", ""),
        });
      } else {
        setDataTrasnfer({ ...dataTransfer, amount: value.split("Rp")[1] });
      }
    } else {
      setDataTrasnfer({ ...dataTransfer, [id]: value });
    }
  };

  //get data target
  useEffect(() => {
    if (!transfer.to_id) {
      router.push("/dashboard");
    } else {
      dispatch(getDataTarget(transfer.to_id));
    }
  }, [dispatch, transfer]);

  return (
    <div className="">
      <div className="container d-flex d-lg-none mb-3 ">
        <Link href="/transfer">
          <div className="text-dark mr-3">
            <h5 className="m-0 font-weight-bold align-self-center">
              <i className="fas fa-arrow-left"></i>
            </h5>
          </div>
        </Link>
        <h5 className="m-0 align-self-center font-weight-bold">Transfer</h5>
      </div>
      <div className="card border-0 shadow card-lg">
        <div className="card-body">
          <h5 className="font-weight-bold d-none d-lg-block">Transfer Money</h5>
          <div className="card border-0 shadow mb-4">
            <div className="card-body d-flex">
              <div className="align-self-center d-flex">
                {dataTarget.image ? (
                  <img
                    className="img-people mr-4"
                    src={`${urlImg}/images/${dataTarget.image}`}
                    alt=""
                  />
                ) : (
                  <img
                    className="img-people mr-4"
                    src={require("../../assets/images/default-user.svg")}
                    alt=""
                  />
                )}
                {dataTarget.name && dataTarget.phone ? (
                  <div className="align-self-center">
                    <h5 className="font-weight-bold">{dataTarget.name}</h5>
                    <small className="text-muted m-0">{dataTarget.phone}</small>
                  </div>
                ) : (
                  <div className="align-self-center">
                    <h5 className="font-weight-bold"></h5>
                    <small className="text-muted m-0"></small>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <p className="text-muted d-none d-lg-block">
              Type the amount you want to transfer and then
              <br />
              press continue to the next steps.
            </p>

            {dataTarget && (
              <NumberFormat
                prefix={"Rp"}
                placeholder="Rp0"
                className="box-shadow-none form-control form-control-lg text-center border-0  font-weight-bold mb-3"
                onChange={handleChange}
                id="amount"
                name="amount"
                isAllowed={withValueLimit}
                disabled={dataTarget.balance === 0 ? true : false}
              />
            )}
            {dataTarget.balance ? (
              <p className="font-weight-bold text-center mb-5">
                Rp{toRupiah(user.balance)} available
              </p>
            ) : (
              <p className="font-weight-bold text-center mb-5"></p>
            )}

            <div className="row w-100 d-flex justify-content-center">
              <div className="col-lg-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text border-top-0 border-left-0 bg-white rounded-0">
                      <i className="fas fa-pencil-alt" aria-hidden="true"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control border-top-0 border-left-0 border-right-0 bg-white rounded-0"
                    placeholder="Add some notes"
                    name="notes"
                    id="notes"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5 d-flex justify-content-end">
            <button
              className="btn btn-lg btn-blue radius-12"
              onClick={handleContinue}
            >
              <small className="p-3">Continue</small>
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 992px) {
          .card-lg {
            box-shadow: none !important;
          }
        }
        .btn-blue {
          background-color: #6379f4;
          color: white;
        }

        .btn-blue:hover {
          background-color: #5365c9;
          color: white;
        }
        input.font-weight-bold.border-0 {
          font-size: 32px;
        }
        .img-people {
          width: 50px;
          height: 50px;
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
        .box-shadow-none {
          box-shadow: none !important;
        }
      `}</style>
    </div>
  );
}

export default AmmountNotes;
