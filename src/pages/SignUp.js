// import React, { useEffect } from "react";
// import { Button, Form, Input, Typography, message, Spin } from "antd";
// import "../styles/pages/login.css";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, signup } from "../actions/authActions";
// const SignUp = () => {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);
//   const onFinish = (values) => {
//     dispatch(signup(values.name, values.email, values.password));
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log("Failed:", errorInfo);
//   };
//   useEffect(() => {
//     if (error) {
//       message.error({
//         content: error,
//         style: {
//           marginTop: "10vh",
//         },
//       });
//       dispatch(clearErrors());
//     }
//   }, [dispatch, error]);

//   return loading ? (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "90vh",
//       }}
//     >
//       <Spin size="large" />
//     </div>
//   ) : (
//     <div className="login">
//       <Typography.Title
//         level={1}
//         style={{
//           margin: "20px auto",
//           padding: "20px 0",
//         }}
//       >
//         Sign Up
//       </Typography.Title>
//       <Form
//         className="ant-row"
//         style={{
//           width: "40%",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           className="ant-col-16"
//           name="name"
//           rules={[
//             {
//               required: true,
//               message: "Please input your email!",
//             },
//           ]}
//         >
//           <Input placeholder="Name" />
//         </Form.Item>
//         <Form.Item
//           className="ant-col-16"
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please input your email!",
//             },
//           ]}
//         >
//           <Input type="email" placeholder="Email" />
//         </Form.Item>
//         <Form.Item
//           className="ant-col-16"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Please input your password!",
//             },
//           ]}
//         >
//           <Input type="password" placeholder="Password" />
//         </Form.Item>
//         <Form.Item
//           className="ant-col-16"
//           style={{
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             Sign Up
//           </Button>
//           <Link
//             to="/"
//             style={{
//               marginLeft: "70px",
//               color: "black",
//             }}
//           >
//             Already have an account? Sign In
//           </Link>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default SignUp;
