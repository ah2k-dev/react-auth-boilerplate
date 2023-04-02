import { Button, Col, Layout, message, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, logout } from "../../actions/authActions";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { error } = useSelector((state) => state.auth);
  

  return (
    <Row className="header-container" justify="space-between" align="middle">
      <Col span={7} className="header-left">
        <Typography.Title level={3}>{"{App logo}"}</Typography.Title>
      </Col>
      <Col span={7} className="header-middle"></Col>
      <Col span={7} className="header-right">
        {auth ? (
          <></>
        ) : (
          <a onClick={() => navigate("/auth")}>
            <FaUserAlt className="header-icons" />
          </a>
        )}
      </Col>
    </Row>
  );
};

export default Header;
