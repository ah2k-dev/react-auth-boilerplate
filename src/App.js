import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Dashboard from "./pages/Dashboard.js";
import LandingPage from "./pages/LandingPage.js";
import AuthRoute from "./protected-routes/AuthRoute.js";
import InitialLayout from "./components/layout/InitialLayout.js";
import Auth from "./pages/Auth.js";
import AuthLayout from "./components/layout/AuthLayout.js";
import RequstToken from "./pages/RequstToken.js";
import DashboardLayout from "./components/layout/DashboardLayout.js";
import AdminDashboard from "./pages/admin/AdminDashboard.js";
import UserDashboard from "./pages/user/UserDashboard.js";
import VerifyEmail from "./pages/VerifyEmail.js";
import ResetPassword from "./pages/ResetPassword.js";
// import * as dotenv from "dotenv";
// dotenv.config();
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthLayout />}>
              <Route path="/auth" element={<Auth />} />
              <Route path="/auth/requestToken" element={<RequstToken />} />
              <Route path="/auth/forgot-password" element={<RequstToken />} />
              <Route
                path="/auth/verifyEmail/:email"
                element={<VerifyEmail />}
              />
              <Route
                path="/auth/resetPassword/:email"
                element={<ResetPassword />}
              />
            </Route>
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
