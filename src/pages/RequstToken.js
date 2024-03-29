import { Button, Col, Form, Input, Row, Typography, message } from "antd";
import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, requestToken } from "../actions/authActions";

const RequstToken = () => {
  const { path } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const onFinish = async (values) => {
    console.log(values);
    let type;
    if (path === "/auth/requestToken") {
      type = "request";
    } else {
      type = "reset";
    }
    const res = await dispatch(requestToken(values.email, type));
    if (res) {
      if (type === "request") {
        navigate("/auth/verifyEmail/" + values.email);
      } else {
        navigate("/auth/resetPassword/" + values.email);
      }
    }
  };

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
    <div className="auth-container">
      <BackButton />
      <div className="auth-inner">
        <Typography.Title level={3}>Find your Account</Typography.Title>
        <Typography.Paragraph>
          Enter your email address and we'll send you a link to get back into
          your account.
        </Typography.Paragraph>
        <Row className="auth-form">
          <Form
            className="ant-row"
            onFinish={onFinish}
            onFinishFailed={(errorInfo) => {
              console.log("Failed:", errorInfo);
            }}
            style={{ width: "100%" }}
            autoComplete="off"
          >
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
                <Input type="email" placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="activeBtn"
                  loading={loading}
                >
                  Send Link
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </div>
    </div>
  );
};

export default RequstToken;
