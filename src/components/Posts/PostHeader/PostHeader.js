import React from "react";
import styled from "styled-components";
import { EllipsisOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { StylePostHeader } from "../..";

const Span = styled.span`
  color: #949494;
`;
const SpanWithPoint = styled.span`
    color: #949494;
    &:before {
        content: '\00A7';
      }
`;

const PostHeader = ({ id, onDelete, setEditMode }) => {
  const menu = (
    <Menu style={{ marginLeft: "320px" }}>
      <Menu.Item key="0">
        <div onClick={() => setEditMode(true)}>Edit</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <div onClick={() => onDelete(id)}>Delete</div>
      </Menu.Item>
    </Menu>
  );
  return (
    <StylePostHeader>
      User Name
      <Span>@user.name</Span>
      <SpanWithPoint>20 Feb 2021 </SpanWithPoint>
      <Dropdown overlay={menu} trigger={["click"]}>
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {" "}
          <EllipsisOutlined
            style={{ marginLeft: "380px", fontSize: "24px", color: "black" }}
          />
        </a>
      </Dropdown>
    </StylePostHeader>
  );
};

export default PostHeader;
