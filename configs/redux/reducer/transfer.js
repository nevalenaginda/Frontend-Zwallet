const initialState = {
  transfer: {},
  dataTarget: {},
  loading: false,
  message: "",
  status: "success",
};

const transferReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_DATA_TRANSFER":
      return {
        ...state,
        user: action.payload,
      };
    case "TRANSFER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "TRANSFER_SUCCESS":
      return {
        ...state,
        loading: false,
        status: "success",
      };
    case "TRANSFER_FAILURE":
      return {
        ...state,
        loading: false,
        message: action.payload,
        status: "failed",
      };
    case "GET_DATA_TARGET":
      return {
        ...state,
        dataTarget: action.payload,
        message: action.message,
      };
    case "GET_DATA_TARGET":
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};

export default transferReducer;
