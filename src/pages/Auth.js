import {
  Row,
  Typography,
  Form,
  Input,
  Col,
  Button,
  Divider,
  message,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, signup, login } from "../actions/authActions";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [active, setActive] = useState("login");
  const [emailVerify, setEmailVerify] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const formRef = useRef(null);
  const onFinish = (values) => {
    if (active === "login") {
      dispatch(login(values.email, values.password));
    } else {
      dispatch(signup(values.name, values.email, values.password));
    }
  };
  const handleSignUp = () => {
    if (active !== "signup") {
      return;
    }
    formRef.current.submit();
  };
  const handleLogin = () => {
    if (active !== "login") {
      return;
    }
    formRef.current.submit();
  };

  useEffect(() => {
    if (error) {
      if (error.includes("Email not verified")) {
        setEmailVerify(true);
      }
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
    <div className="auth-container">
      <div className="auth-inner">
        <Typography.Title level={3}>Login or Sign up</Typography.Title>
        <Row className="auth-form">
          <Form
            ref={formRef}
            className="ant-row"
            onFinish={onFinish}
            onFinishFailed={(errorInfo) => {
              console.log("Failed:", errorInfo);
            }}
            autoComplete="off"
          >
            {active == "signup" && (
              <Col span={20}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  {/* <p className="labels">Name</p> */}
                  <Input placeholder="Name" />
                </Form.Item>
              </Col>
            )}
            <Col span={20}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                {/* <p className="labels">E-mail</p> */}
                <Input type="email" placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                style={{ marginBottom: "0" }}
              >
                {/* <p className="labels">Password</p> */}
                <Input type="password" placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={20} className="email-senders">
              <Form.Item>
                {emailVerify && (
                  <a className="verify-email" onClick={()=> navigate('/auth/requestToken')}>Request email token</a>
                )}
                {!emailVerify && (
                  <a className="forgot-password" onClick={()=> navigate('/auth/forgot-password')}>Forgot password?</a>
                )}
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item>
                <div className="auth-buttons">
                  {active == "login" ? (
                    <Button
                      className="authBtn activeBtn"
                      type={active == "login" ? "primary" : "button"}
                      onClick={handleLogin}
                      loading={loading}
                      // htmlType="submit"
                    >
                      Login
                    </Button>
                  ) : (
                    <Button
                      className="authBtn "
                      type={active == "login" ? "primary" : "button"}
                      onClick={() => {
                        setActive("login");
                      }}
                    >
                      Login
                    </Button>
                  )}
                  {active == "signup" ? (
                    <Button
                      className="authBtn activeBtn"
                      type={active == "signup" ? "primary" : "button"}
                      onClick={handleSignUp}
                      loading={loading}
                    >
                      SignUp
                    </Button>
                  ) : (
                    <Button
                      className="authBtn"
                      type={active == "signup" ? "primary" : "button"}
                      onClick={() => {
                        setActive("signup");
                      }}
                    >
                      SignUp
                    </Button>
                  )}
                </div>
              </Form.Item>
            </Col>
          </Form>
          <Divider>OR</Divider>
          <Col span={20}>
            <Button className="btnGoogle">
              <img src="/assets/icons/google.png" alt="google" />{" "}
              <span>Continue with Google</span>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Auth;
