import * as types from "./actionTypes";
const initialState = {
  products: [],
  loading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
        error: "",
      };
    case types.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
