import { Button } from "antd";
import React from "react";
// import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHome } from "react-icons/ai";

const DashboardButton = () => {
  const { user, isAuthentiated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleClick = () => {
    if (user.userData) {
      if (user.userData.role === "admin") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/user");
      }
    }
  };
  return (
    // isAuthentiated && (
      <Button className="backBtn" style={{
        top: "10vh !important",
      }} onClick={handleClick}>
        {/* <RiArrowGoBackLine /> */}
        <AiOutlineHome />
      </Button>
    // )
  );
};

export default DashboardButton;
