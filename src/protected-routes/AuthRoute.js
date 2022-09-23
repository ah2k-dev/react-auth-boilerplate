import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth.js";

const AuthRoute = ({ Component }) => {
  const isAuthenticated = useAuth();
  if (!isAuthenticated) {
    console.log("not authenticated");
    return <Navigate to="/" />;
  }
  return <Component />;
};

export default AuthRoute;
