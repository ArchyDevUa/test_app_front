import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  MailOutlined,
  UsergroupAddOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";


const Sidebar = () => {
  return (
        <Menu
          style={{
            marginLeft: "8em",
            fontSize: "20px",
            fontWeight: "bold",
            verticalAlign: "-10px",
            border: "none"
          }}
          mode="vertical"
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<MailOutlined />}>
            Messages
          </Menu.Item>
          <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="4" icon={<ProfileOutlined />}>
            Profile
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
  );
};

export default Sidebar;
