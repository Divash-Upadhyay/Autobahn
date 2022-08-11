import * as types from "./actionTypes";
import Axios from "axios";

const fetchDataRequest = (payload) => {
  return {
    type: types.FETCH_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: types.FETCH_DATA_FAILURE,
    payload,
  };
};

const fetchData = (page) => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    console.log("page", page);

    Axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _page: page,
        _limit: 10,
      },
    })
      .then((r) => dispatch(fetchDataSuccess(r.data)))
      .catch((e) => dispatch(fetchDataFailure(e.data)));
  };
};

export { fetchData };
