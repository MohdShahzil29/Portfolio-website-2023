import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineClose } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import Menu from "../Menus/Menu";


import "./Layout.css";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Toggle controller
  const toggleController = () => {
    setToggle(!toggle);
  };

  return (
    <div className="slidebar-section">
      <div className={toggle ? "slidbar-toggle slidebar" : "slidebar"}>
        <div className="slidbar-toggle-icon">
          <p onClick={toggleController}>
            {toggle ? <AiOutlineClose /> : <CiLogin />}
          </p>
        </div>
            <Menu toggle={toggle}/>
      </div>
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
