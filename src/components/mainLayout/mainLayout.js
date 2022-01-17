import React from "react";
import { Row, Col } from "antd";
import Sidebar from "../Sidebar/Sidebar";

function MainLayout(props) {
  return (
    <Row style={{ height: "100vh" }}>
      <Col span={7}>
        <Sidebar />
      </Col>
      <Col span={10}>{props.children}</Col>
      <Col span={7}></Col>
    </Row>
  );
}

export default MainLayout;
