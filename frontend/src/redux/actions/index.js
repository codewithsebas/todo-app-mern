import axios from "axios";
import { ADDNEW_TASK } from "./type";

const API_URL = "http://localhost:8000";

export const  addNewTask = (data) => async(dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/tasks`, { data });
    dispatch({type: ADDNEW_TASK, payload: res.data})
  } catch (error) {
    console.log("Error addNewTask API", error.message);
  }
};
