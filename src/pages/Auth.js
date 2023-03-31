import { Row, Typography, Form, Input, Col, Button, Divider } from "antd";
import React, { useRef, useState } from "react";

const Auth = () => {
  const [active, setActive] = useState("login");
  const formRef = useRef(null);
  const onFinish = () => {};
  const handleSignUp = () => {
    console.log("called");
    if (active !== "signup") {
      return;
    }
    formRef.current.submit();
  };
  const handleLogin = () => {
    console.log("called");
    if (active !== "login") {
      return;
    }
    formRef.current.submit();
  };

  return (
    <div className="auth-container">
      <div className="auth-inner">
        <Typography.Title level={3}>Login or Sign up</Typography.Title>
        <Row className="auth-form">
          <Form
            ref={formRef}
            className="ant-row"
            onFinish={onFinish}
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
                  <p className="labels">Name</p>
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
                <p className="labels">E-mail</p>
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
              >
                <p className="labels">Password</p>
                <Input type="password" placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={20}>
              <div className="auth-buttons">
                {active == "login" ? (
                  <Button
                    className="authBtn activeBtn"
                    type={active == "login" ? "primary" : "button"}
                    onClick={handleLogin}
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
