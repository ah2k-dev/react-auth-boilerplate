import { Row, Col } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = () => {
  return (
    <Row className="auth-layout-container">
      <Col span={11} className="auth-layout-left">
        <Outlet />
      </Col>
      <Col span={13} className="auth-layout-right">

      </Col>
    </Row>
  );
};

export default AuthLayout;
