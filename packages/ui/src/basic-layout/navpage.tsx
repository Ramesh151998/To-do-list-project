import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Layout, Menu, Modal, Popconfirm, theme } from "antd";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LoginComponent } from "../common";

const { Sider, Header, Content } = Layout;

const NavPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [visible, setVisible] = useState(false);

  function handleLogout() {
    setVisible(true);
  }

  function handleOk() {
    window.location.href = "/";
  }

  function handleCancel() {
    setVisible(false);
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={200}>
        <Menu theme="dark" mode="inline" style={{ marginTop: "20%" }}>
          <Menu.SubMenu key="login" icon={<UserOutlined />} title="To Do List">
            <Menu.Item key="loginform">
              <Link to="/navpage">
                <UserOutlined />
                <span>Name</span>
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item
            icon={<LogoutOutlined style={{ transform: 'rotate(270deg)' }} />}
            onClick={handleLogout}
          >
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ background: colorBgContainer, padding: 0 }}>
          <Menu mode="horizontal" style={{ display: "block" }}>
            <Menu.Item style={{ float: "left" }}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Menu.Item>
            <div style={{ textAlign: 'left' }}>
              <Modal
                title="Confirm Logout"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Yes"
                cancelText="No"
              >
                <p>Are you sure you want to log out?</p>
              </Modal>
            </div>
          </Menu>
        </Header>
        <Content
          style={{
            background: colorBgContainer,
            margin: "24px 16px",
            padding: 18,
            minHeight: 600,
          }}
        >
          <LoginComponent />

        </Content>
      </Layout>
    </Layout>
  );
};

export default NavPage;
