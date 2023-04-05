import { message } from "antd";
import { authConstants } from "../constants/authConstants";
import custAxios from "../services/axiosConfig";

export const signup = (name, email, password) => async (dispatch) => {
  dispatch({
    type: authConstants.SIGNUP_REQUEST,
  });
  try {
    const res = await custAxios.post("/auth/register", {
      name,
      email,
      password,
    });
    dispatch({
      type: authConstants.SIGNUP_SUCCESS,
      payload: res.data.data,
    });
    message.success({
      content: "Signup Successful",
      style: {
        marginTop: "10vh",
      },
    });
    return true;
  } catch (error) {
    dispatch({
      type: authConstants.SIGNUP_FAILURE,
      payload: error.response.data.message || "Server Error",
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: authConstants.LOGIN_REQUEST,
  });
  try {
    const res = await custAxios.post("/auth/login", {
      email,
      password,
    });
    if (res) {
      localStorage.setItem("token", res.data.data.jwtToken);
      localStorage.setItem("user", JSON.stringify(res.data.data.userData));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: res.data.data,
      });
      message.success({
        content: "Login Successful",
        style: {
          marginTop: "10vh",
        },
      });
      return true;
    }
  } catch (error) {
    dispatch({
      type: authConstants.LOGIN_FAILURE,
      payload: error.response.data.message || "Server Error",
    });
  }
};

export const requestToken = (email, type) => async (dispatch) => {
  dispatch({
    type: authConstants.REQUEST_TOKEN_REQUEST,
  });
  try {
    let res;
    if (type == "request") {
      res = await custAxios.post("/auth/requestEmailToken", {
        email,
      });
    } else {
      res = await custAxios.post("/auth/forgotPassword", {
        email,
      });
    }
    if (res) {
      dispatch({
        type: authConstants.REQUEST_TOKEN_SUCCESS,
      });
      message.success({
        content: res?.data?.message,
        style: {
          marginTop: "10vh",
        },
      });
    }
  } catch (error) {
    dispatch({
      type: authConstants.REQUEST_TOKEN_FAILURE,
      payload: error.response.data.message || "Server Error",
    });
  }
};

export const verifyEmail = (token, email) => async (dispatch) => {
  dispatch({
    type: authConstants.VERIFY_EMAIL_REQUEST,
  });
  console.log(email, token);
  try {
    const res = await custAxios.post("/auth/verifyEmail", {
      emailVerificationToken: token,
      email,
    });
    if (res) {
      dispatch({
        type: authConstants.VERIFY_EMAIL_SUCCESS,
      });
      message.success({
        content: res?.data?.message,
        style: {
          marginTop: "10vh",
        },
      });
      return true;
    }
  } catch (error) {
    dispatch({
      type: authConstants.VERIFY_EMAIL_FAILURE,
      payload: error.response.data.message || "Server Error",
    });
  }
};

export const resetPassword = (token, email, password) => async (dispatch) => {
  dispatch({
    type: authConstants.RESET_PASSWORD_REQUEST,
  });
  try {
    const res = await custAxios.put("/auth/resetPassword", {
      passwordResetToken: token,
      email,
      password,
    });
    if (res) {
      dispatch({
        type: authConstants.RESET_PASSWORD_SUCCESS,
      });
      message.success({
        content: res?.data?.message,
        style: {
          marginTop: "10vh",
        },
      });
      return true;
    }
  } catch (error) {
    dispatch({
      type: authConstants.RESET_PASSWORD_FAILURE,
      payload: error.response.data.message || "Server Error",
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: authConstants.CLEAR_ERRORS,
  });
};
