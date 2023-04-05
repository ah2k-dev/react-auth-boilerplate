import { Row, Col } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
const AuthLayout = () => {
  return (
    <Row className="auth-layout-container">
      <Col span={11} className="auth-layout-left">
        <Outlet />
      </Col>
      <Col span={13} className="auth-layout-right"></Col>
    </Row>
  );
};

export default AuthLayout;
