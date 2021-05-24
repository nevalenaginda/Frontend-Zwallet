import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function SearchReceiver() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const router = useRouter();

  const { transfer } = useSelector((state) => state.transfer);
  const { user } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("Data unavailable");
  const [dataAllUser, setAllDataUser] = useState({});
  const [searchName, setSearchName] = useState("");

  let [queryLimit, setQueryLimit] = useState("4");
  let [queryPage, setQueryPage] = useState("1");
  let [totalPage, setTotalPage] = useState("1");
  let [queryOrder, setQueryOrder] = useState("asc");
  let [queryParam, setQueryParam] = useState("name");

  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;

  let idUser;
  if (process.browser) {
    idUser = localStorage.getItem("id");
  }

  const param = [
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Balance",
      value: "balance",
    },
    {
      label: "Phone Number",
      value: "phone",
    },
  ];

  const order = [
    {
      label: "Ascending",
      value: "asc",
    },
    {
      label: "Descending",
      value: "desc",
    },
  ];

  const limit = [
    {
      label: "Limit 4",
      value: "4",
    },
    {
      label: "Limit 8",
      value: "8",
    },
    {
      label: "Limit 12",
      value: "12",
    },
  ];

  const handleClickCard = (id) => {
    router.push({
      pathname: "/transfer/amount-and-note",
      scroll: false,
    });
    dispatch({
      type: "INSERT_DATA_TRANSEFR",
      action: (transfer.to_id = id),
    });
  };

  const handleChangePage = (item, i) => {
    setQueryPage(i);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (searchName !== "") {
        router.push(
          {
            pathname: "/transfer",
            query: {
              search: searchName,
              param: queryParam,
              sort: queryOrder,
              page: queryPage,
              limit: queryLimit,
            },
          },
          undefined,
          { scroll: false }
        );
      } else {
        router.push(
          {
            pathname: "/transfer",
            query: {
              param: queryParam,
              sort: queryOrder,
              page: queryPage,
              limit: queryLimit,
            },
            scroll: false,
          },
          undefined,
          { scroll: false }
        );
      }

      axios
        .get(
          `${URLAPI}allUser/${idUser}?search=${searchName}&page=${queryPage}&limit=${queryLimit}&param=${queryParam}&sort=${queryOrder}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
          setAllDataUser(res.data);
          setMessage(res.data.message);
          setIsLoading(false);
          setTotalPage(res.data.pagination.totalPage);
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.response.data.message);
          setAllDataUser({});
          setIsLoading(false);
          setTotalPage(1);
          setQueryPage(1);
        });
    }, 500);
  }, [searchName, queryLimit, queryOrder, queryParam, queryPage]);

  return (
    <div>
      <div className="h-100">
        {/* Mobile */}
        <div className="container d-flex d-lg-none py-4">
          <Link href={"/dashboard"}>
            <a className=" text-dark mr-3 m-0 font-weight-bold align-self-center h5">
              <i className="fas fa-arrow-left"></i>
            </a>
          </Link>
          <h5 className="m-0 align-self-center font-weight-bold">
            Find Receiver
          </h5>
        </div>
        {/* Web */}
        <div className="card border-0 shadow">
          <div className="card-body">
            <h5 className="d-none d-lg-block font-weight-bold">
              Search Receiver
            </h5>
            <div className="d-flex align-items-start flex-column">
              {/* Input */}
              <div className="py-4 px-1 input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text rounding border-0">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Search receiver here"
                  className="form-control border-0 bg-gray rounding"
                  value={searchName}
                  onChange={(e) => {
                    setSearchName(e.target.value);
                    setQueryPage(1);
                  }}
                />
              </div>
              {/* Result Search */}

              {isLoading ? (
                <div className="py-auto text-center w-100 h-content">
                  {/* When loading*/}
                  <div className="align-self-center h-100">
                    <div className="spinner-grow text-blue">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <h3 className="font-weight-bold">Wait a moment...</h3>
                    <p className="text-muted m-0">Loading process</p>
                  </div>
                </div>
              ) : (
                <div className="w-100  h-content overflow-auto">
                  {/* When data available */}
                  {message !== "Data unavailable" ? (
                    <div className="text-decoration-none text-dark">
                      {dataAllUser.data.map((itm, idx) => {
                        return (
                          <div
                            className="container pointer"
                            key={idx}
                            onClick={(e) => handleClickCard(itm.id)}
                          >
                            {/* Data Hasil Pencarian Dalam balon */}
                            {/* 1 */}
                            <div className="row item mb-3">
                              <div className="col-4 col-md-3 col-lg-2">
                                {itm.image ? (
                                  <img
                                    src={`${urlImg}/images/${itm.image}`}
                                    className=" img-people"
                                    alt="#"
                                  />
                                ) : (
                                  <img
                                    src={require("../../assets/images/default-user.svg")}
                                    className=" img-people"
                                    alt="#"
                                  />
                                )}
                              </div>
                              <div className="col d-flex">
                                <div className="align-self-center">
                                  {itm.name ? (
                                    <h5 className="font-weight-bold">
                                      {itm.name}
                                    </h5>
                                  ) : (
                                    <h5 className="font-weight-bold"></h5>
                                  )}
                                  {itm.phone ? (
                                    <p className="text-muted m-0">
                                      {itm.phone}
                                    </p>
                                  ) : (
                                    <p className="text-muted m-0"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div>
                      <div className="container">
                        <div className="text-center mt-5">
                          <img
                            className="imageNodata mb-3"
                            src={require("../../assets/images/nodata.svg")}
                            alt=""
                          />
                          <h3 className="font-weight-bold">Oops...</h3>
                          <p className="text-muted">
                            the recipient you are looking for wasn't found
                          </p>
                        </div>
                      </div>
                      {/* End data available */}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="row mb-1 justify-content-center">
            <div className={classes.root}>
              <Pagination
                page={parseInt(queryPage)}
                defaultPage={1}
                onChange={handleChangePage}
                count={parseInt(totalPage)}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
          <div className="row mt-2 mb-3 justify-content-center">
            <div className="col-sm-11 pt-3 pt-md-0 col-md-3">
              <select
                onChange={(event) => setQueryParam(event.target.value)}
                className="w-100 custom-select font-weight-normal"
              >
                {param.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-11 pt-3 pt-md-0 col-md-3">
              <select
                onChange={(event) => {
                  setQueryOrder(event.target.value);
                }}
                className="w-100 custom-select"
              >
                {order.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-sm-11 pt-3 pt-md-0 col-md-3">
              <select
                onChange={(event) => {
                  setQueryLimit(event.target.value);
                }}
                className="w-100 custom-select"
              >
                {limit.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media screen and (max-width: 992px) {
          .shadow {
            box-shadow: none !important;
          }
          .h-100 .card-body {
            padding: 0% !important;
          }
        }
        .imageNodata {
          object-fit: cover;
          height: 100px;
          width: 100px;
        }
        .h-content {
          height: calc(80vh - 12rem);
        }
        .img-people {
          height: 90px;
          width: 90px;
          object-fit: cover;
          border-radius: 12px;
        }
        .item {
          min-height: 80px;
          margin-bottom: 0.75rem;
        }
        .rounding {
          border-radius: 12px;
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
        .f-normal {
          font-size: 25px;
        }
      `}</style>
    </div>
  );
}

export default SearchReceiver;
