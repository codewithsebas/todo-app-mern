import axios from "axios";
import { ADDNEW_TASK, COMPLETED_TASK, GETALL_TASK, UPDATE_TASK, DELETE_TASK } from "./type";

const API_URL = "http://localhost:8000";

export const addNewTask = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}`, { data });
    dispatch({ type: ADDNEW_TASK, payload: res.data });
  } catch (error) {
    console.log("Error addNewTask API", error.message);
  }
};

export const getAllTasks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}`);
    dispatch({ type: GETALL_TASK, payload: res.data });
  } catch (error) {
    console.log("Error AllTasks API", error.message);
  }
};


export const completedTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    dispatch({ type: COMPLETED_TASK, payload: res.data });
  } catch (error) {
    console.log("Error AllTasks API", error.message);
  }
};

export const updateTask = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, { data });
    dispatch({ type: UPDATE_TASK, payload: res.data });
  } catch (error) {
    console.log("Error updateTask API", error.message);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    dispatch({type: DELETE_TASK, payload: res.data})
  } catch (error) {
    console.log('Error to delete', error.message);
  }
}