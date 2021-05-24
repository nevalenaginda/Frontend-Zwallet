import axios from "axios";

let idUser;
if (process.browser) {
  idUser = localStorage.getItem("id");
}

export const getAllHistory = (id, limit = 3, sort = "desc") => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    dispatch({
      type: "REQUEST_ALL_HISTORY",
    });
    axios
      .get(`${URLAPI}history/${id}?limit=${limit}&sort=${sort}`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch({
          type: "REQUEST_ALL_HISTORY_SUCCESS",
          payload: res.data,
          message: res.data.message,
        });
        resolve(res);
      })
      .catch((err) => {
        dispatch({
          type: "REQUEST_ALL_HISTORY_FAILURE",
          message: err.response.data.message,
        });
        reject(err);
      });
  });
};

export const getAllNotifications = (idUser) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    dispatch({
      type: "REQUEST_ALL_NOTIFICATIONS",
    });
    axios
      .get(`${URLAPI}notifications/${idUser}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.code !== 404) {
          dispatch({
            type: "REQUEST_ALL_NOTIFICATIONS_SUCCESS",
            payload: res.data.pagination.totalData,
            message: res.data.message,
          });
        } else {
          dispatch({
            type: "REQUEST_ALL_NOTIFICATIONS_FAILURE",
            message: err.response.data.message,
            payload: 0,
          });
        }

        resolve(res);
      })
      .catch((err) => {
        dispatch({
          type: "REQUEST_ALL_NOTIFICATIONS_FAILURE",
          message: err.response.data.message,
          payload: 0,
        });
        reject(err);
      });
  });
};

export const getDetailHistory = (id) => (dispatch) => {
  return new Promise((resolve, reject) => {
    const URLAPI = process.env.NEXT_PUBLIC_URL_API_WITH_SLASH;
    axios
      .get(`${URLAPI}detailHistory/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getAllNotifications(idUser));
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
