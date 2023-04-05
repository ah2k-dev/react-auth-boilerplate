import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../actions/authActions";
import { Button, Col, Form, Input, Row, Typography, message } from "antd";
import BackButton from "../components/BackButton";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  const onFinish = async (values) => {
    if (values.password !== values.confirmPassword) {
      message.error({
        content: "Passwords do not match",
        style: {
          marginTop: "10vh",
        },
      });
      return;
    }
    const res = await dispatch(resetPassword(values.token, email, values.password));
    if (res) {
      console.log(res);
      navigate("/auth");
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
        <Typography.Title level={3}>Reset Password</Typography.Title>
        <Typography.Paragraph>
          Enter the token that has been sent to your email. If you haven't
          received the email, please check your spam folder.
        </Typography.Paragraph>
        <Typography.Paragraph
          style={{
            color: "red",
          }}
        >
          Note: The token will expire in 10 minutes.
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
                name="token"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input type="number" placeholder="Token" />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input type="password" placeholder="Confirm Password" />
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
                  Verify
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Row>
      </div>
    </div>
  );
};

export default ResetPassword;
