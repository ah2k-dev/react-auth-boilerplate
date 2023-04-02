// import { Button, Form, Input, Typography, message, Spin } from "antd";
// import React, { useEffect, useState } from "react";
// import "../styles/pages/login.css";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, login } from "../actions/authActions";
// import { useNavigate } from "react-router-dom";
// import { getToken } from "../hooks/auth";
// import { GoogleLogin } from "@react-oauth/google";
// import { signInWithGoogle } from "../services/firebase";
// import firebase from "../services/firebase";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = getToken();
//   const { loading, error, isAuthenticated } = useSelector(
//     (state) => state.auth
//   );
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       setUser(user);
//       console.log(user);
//     });
//   }, []);
//   const onFinish = (values) => {
//     dispatch(login(values.email, values.password));
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
//     if (isAuthenticated) {
//       navigate("/dashboard");
//     }
//   }, [dispatch, error, navigate, token]);

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
//         Login
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
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please input your email!",
//             },
//           ]}
//         >
//           <Input type="email" />
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
//           <Input type="password" />
//         </Form.Item>
//         <Form.Item
//           className="ant-col-16"
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             Login
//           </Button>
//           <Link
//             to="/signup"
//             style={{
//               marginLeft: "100px",
//               color: "black",
//             }}
//           >
//             Don't have an account? Sign Up
//           </Link>
//         </Form.Item>
//         <Form.Item className="ant-col-16">
//           <Button onClick={signInWithGoogle}>Sign in with google</Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Login;
