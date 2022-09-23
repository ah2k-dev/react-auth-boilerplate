import { Button, Layout, message, Typography } from "antd";
import React, { useEffect } from "react";
import { useAuth } from "../hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, logout } from "../actions/authActions";
const Header = () => {
  const auth = useAuth();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  useEffect(() => {
    if (error) {
      message.error({
        content: error,
        style: {
          marginTop: "10vh",
        },
      });
      dispatch(clearErrors());
    }
  }, [error, dispatch]);

  return (
    <Layout.Header
      style={{
        backgroundColor: "#000",
        display: "flex",
        justifyContent: auth ? "space-between" : "center",
        alignItems: "center",
        height: "60px",
      }}
    >
      <Typography.Title
        level={1}
        style={{ color: "white", paddingTop: "10px" }}
      >
        Deep Statistics
      </Typography.Title>
      {auth && (
        <Button
          onClick={() => dispatch(logout())}
          style={{
            backgroundColor: "transparent",
            color: "white",
            border: "none",
          }}
        >
          <img src="/assets/icons/logout.png" alt="logout" width="30px" />
        </Button>
      )}
    </Layout.Header>
  );
};

export default Header;
