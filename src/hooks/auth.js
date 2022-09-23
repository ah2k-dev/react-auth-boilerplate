import { useSelector } from "react-redux";

export const useAuth = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (isAuthenticated) {
    return true;
  } else {
    return false;
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    return false;
  }
};
