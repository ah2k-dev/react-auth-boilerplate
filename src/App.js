import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Dashboard from "./pages/Dashboard.js";
import LandingPage from "./pages/LandingPage.js";
import AuthRoute from "./protected-routes/AuthRoute.js";
import InitialLayout from "./components/layout/InitialLayout.js";
import Auth from "./pages/Auth.js";
import AuthLayout from "./components/layout/AuthLayout.js";
import RequstToken from "./pages/RequstToken.js";
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
            </Route>
          </Route>
          <Route
            path="/dashboard"
            element={<AuthRoute Component={Dashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
