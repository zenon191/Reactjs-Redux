import { ActionTypes } from "../constants/constants";
import axios from "axios";

export const setData = (startDate, endDate) => {
  let url = `http://localhost:8080/device_summary?from=${startDate}to=${endDate}`;
  
  return dispatch => {
    dispatch({ type: ActionTypes.SHOW_LOADING_PIECHART, isLoading: true });
    axios
      .get(url)
      .then(e => {
        dispatch({
          type: ActionTypes.SHOW_DATA,
          data: e.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: ActionTypes.HIDE_LOADING_PIECHART,
          isLoading: false
        });
      });
  };
};
