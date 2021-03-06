import { ActionTypes } from "../constants/constants";
import axios from "axios";
import _ from "lodash";

export const setDevice = (listDevice = [], startDate, endDate) => {
  let url = `http://localhost:8080/device_summary_choose_device?from=${startDate}to=${endDate}`;
  return dispatch => {
    dispatch({ type: ActionTypes.SHOW_LOADING_PIECHART, isLoading: true });
    axios
      .get(url)
      .then(e => {
        dispatch({
          type: ActionTypes.SHOW_DATA,
          data: _.isEqual(listDevice.length, 0) ? e.data : listDevice,
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
