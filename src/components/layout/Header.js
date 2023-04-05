import {
  Button,
  Col,
  Layout,
  message,
  Row,
  Typography,
  Dropdown,
  Menu,
} from "antd";
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
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  // const items = [
  //   {
  //     key: "1",
  //     label: (
  //       <a
  //         onClick={() => {
  //           // dispatch(logout());
  //           // navigate("/auth");
  //         }}
  //       >
  //         Settings
  //       </a>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <a
  //         onClick={() => {
  //           // dispatch(logout());
  //           // navigate("/auth");
  //         }}
  //       >
  //         Logout
  //       </a>
  //     ),
  //   },
  // ];

  return (
    <Row className="header-container" justify="space-between" align="middle">
      <Col span={7} className="header-left">
        <Typography.Title level={3}>{"{App logo}"}</Typography.Title>
      </Col>
      <Col span={7} className="header-middle"></Col>
      <Col span={7} className="header-right">
        {auth ? (
          <>
            {/* <Dropdown
              overlay={
                <Menu>
                  {items.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
              placement="bottomLeft"
            >
              <a onClick={(e) => e.preventDefault()}>
                <FaUserAlt className="header-icons" />
              </a>
            </Dropdown> */}
            <a
              onClick={() =>
                isAuthenticated && user.userData.role == "admin"
                  ? navigate("/dashboard/admin")
                  : navigate("/dashboard/user")
              }
            >
              <FaUserAlt className="header-icons" />
            </a>
          </>
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
