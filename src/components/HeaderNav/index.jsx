import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="member">
        <Link to="/member">成员介绍</Link>
      </Menu.Item>
    </Menu>
  );
};
export default HeaderNav;
