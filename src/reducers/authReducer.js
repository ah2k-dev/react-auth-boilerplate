import { authConstants } from "../constants/authConstants";
import { getToken } from "../hooks/auth";
const token = getToken();
export const authReducer = (
  state = { user: null, isAuthenticated: token ? true : false },
  action
) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
    case authConstants.SIGNUP_REQUEST:
    case authConstants.LOGOUT_REQUEST:
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
    default:
      return state;
  }
};
