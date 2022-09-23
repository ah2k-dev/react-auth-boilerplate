import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Dashboard from "./pages/Dashboard.js";
import Header from "./components/Header.js";
import AuthRoute from "./protected-routes/AuthRoute.js";
function App() {
  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Header />
      <Layout.Content
        style={{
          backgroundColor: "#efefef",
          height: `calc(100vh - 60px)`,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={<AuthRoute Component={Dashboard} />}
            />
          </Routes>
        </BrowserRouter>
      </Layout.Content>
    </Layout>
  );
}

export default App;
