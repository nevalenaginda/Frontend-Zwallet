import axios from "axios";
import { getAllHistory } from "./history";
export const transferProcess = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .post(`${URLAPI}transferProcess/${data.from_id}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getAllHistory(data.from_id));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const transferSuccess = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .post(`${URLAPI}transferSuccess/${data.id}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

export const getDataTarget = (id) => (dispatch) => {
  const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
  axios
    .get(`${URLAPI}user/${id}`, {
      withCredentials: true,
    })
    .then((res) => {
      dispatch({
        type: "GET_DATA_TARGET",
        payload: res.data.data,
        message: res.data.message,
      });
    })
    .catch((err) => {
      dispatch({ type: "GET_DATA_TARGET", message: err.res.data.message });
    });
};
