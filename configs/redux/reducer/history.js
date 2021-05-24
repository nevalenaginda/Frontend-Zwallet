const initialState = {
  allHistory: [],
  detailHistory: {},
  totalNotif: "0",
  loading: false,
  loadingNotif: false,
  message: "Data unavailable",
  messageNotif: "",
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_ALL_HISTORY":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST_ALL_HISTORY_SUCCESS":
      return {
        ...state,
        loading: false,
        allHistory: action.payload,
        message: action.message,
      };
    case "REQUEST_ALL_HISTORY_FAILURE":
      return {
        ...state,
        loading: false,
        allHistory: [],
        message: action.message,
      };
    case "REQUEST_ALL_NOTIFICATIONS":
      return {
        ...state,
        loadingNotif: true,
      };
    case "REQUEST_ALL_NOTIFICATIONS_SUCCESS":
      return {
        ...state,
        loadingNotif: false,
        totalNotif: action.payload,
        messageNotif: action.message,
      };
    case "REQUEST_ALL_NOTIFICATIONS_FAILURE":
      return {
        ...state,
        loadingNotif: false,
        messageNotif: action.message,
        totalNotif: action.payload,
      };
    default:
      return state;
  }
};

export default historyReducer;
