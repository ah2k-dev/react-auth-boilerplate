import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import BackButton from "../components/BackButton";

const RequstToken = () => {
  const onFinish = (values) => {
    console.log(values);
  };
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
                <Button type="primary" htmlType="submit" className="activeBtn">
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
