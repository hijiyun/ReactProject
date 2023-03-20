import React from "react";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
    return (
    <>
        <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
        <div className="sidebar-item">Admin Account</div>
        <Nav.Item className="sidebar-item">Product</Nav.Item>
        <Nav.Item className="sidebar-item">Order</Nav.Item>
        <Nav.Item className="sidebar-item">Link</Nav.Item>
        </Nav>
    </>
    );
};

export default Sidebar;
