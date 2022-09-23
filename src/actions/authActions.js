import { authConstants } from "../constants/authConstants";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8001";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: authConstants.LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post("/auth/login", { email, password }, config);
    dispatch({
      type: authConstants.LOGIN_SUCCESS,
      payload: res.data,
    });
    localStorage.setItem("token", res.data.token);
  } catch (error) {
    dispatch({
      type: authConstants.LOGIN_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: authConstants.SIGNUP_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post(
      "/auth/register",
      { name, email, password },
      config
    );
    dispatch({
      type: authConstants.SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: authConstants.SIGNUP_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    await axios.get("/auth/logout", config);
    dispatch({
      type: authConstants.LOGOUT_SUCCESS,
    });
    localStorage.removeItem("token");
  } catch (error) {
    dispatch({
      type: authConstants.LOGOUT_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: authConstants.CLEAR_ERRORS,
  });
};
