import { authConstants } from "../constants/authConstants";
import { getToken } from "../hooks/auth";
const token = getToken();
const userData = JSON.parse(localStorage.getItem("user"));
export const authReducer = (
  state = {
    user: token && userData ? { jwtToken: token, userData: userData } : null,
    isAuthenticated: token ? true : false,
  },
  action
) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
    case authConstants.SIGNUP_REQUEST:
    case authConstants.LOGOUT_REQUEST:
    case authConstants.REQUEST_TOKEN_REQUEST:
    case authConstants.VERIFY_EMAIL_REQUEST:
    case authConstants.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case authConstants.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case authConstants.LOGIN_FAILURE:
    case authConstants.SIGNUP_FAILURE:
    case authConstants.LOGOUT_FAILURE:
    case authConstants.REQUEST_TOKEN_FAILURE:
    case authConstants.VERIFY_EMAIL_FAILURE:
    case authConstants.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case authConstants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case authConstants.REQUEST_TOKEN_SUCCESS:
    case authConstants.VERIFY_EMAIL_SUCCESS:
    case authConstants.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
