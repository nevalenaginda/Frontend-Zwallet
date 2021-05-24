import axios from "axios";

export const getUser = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .get(`${URLAPI}profile`, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
        dispatch({
          type: "GET_USER",
          payload: res.data.data,
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateUser = (data, id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .patch(`${URLAPI}user/${id}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getUser());
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const checkPin = (data, id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .post(`${URLAPI}loginPIN/${id}`, data, {
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
