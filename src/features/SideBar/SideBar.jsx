import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaEye, FaPlus, FaWrench } from "react-icons/fa";

import Sidebar from "../../app/components/SideBar/SideBar";
import Collapse from "../../app/components/Collapse/Collapse";
import { H3 } from "../../app/components/Heading/Heading";

import "./SideBar.css";

class SideBar extends Component {
  render() {
    const { sidebar, h3, collapseContent } = styles;
    return (
      <Sidebar style={sidebar}>
        <Sidebar.Header>
          <H3 style={h3}>Rohan</H3>
        </Sidebar.Header>
        <Sidebar.Content>
          <Collapse>
            <Collapse.Trigger>
              <div className="TriggerItem">
                <FaUser /> &nbsp;&nbsp; Customers
              </div>
            </Collapse.Trigger>
            <Collapse.Content style={collapseContent}>
              <NavLink to="/customers/view">
                <div className="subItem">
                  <FaEye /> &nbsp;&nbsp; View
                </div>
              </NavLink>

              <NavLink to="/customers/register">
                <div className="subItem">
                  &nbsp;
                  <FaPlus /> &nbsp;&nbsp; Register
                </div>
              </NavLink>
            </Collapse.Content>
          </Collapse>
          <Collapse>
            <Collapse.Trigger>
              <div className="TriggerItem">
                <FaWrench /> &nbsp;&nbsp; Workers
              </div>
            </Collapse.Trigger>
            <Collapse.Content style={collapseContent}>
              <NavLink to="/workers/view">
                <div className="subItem">
                  <FaEye /> &nbsp;&nbsp; View
                </div>
              </NavLink>

              <NavLink to="/workers/register">
                <div className="subItem">
                  &nbsp;
                  <FaPlus /> &nbsp;&nbsp; Register
                </div>
              </NavLink>
            </Collapse.Content>
          </Collapse>
        </Sidebar.Content>
      </Sidebar>
    );
  }
}

const styles = {
  sidebar: {
    borderRadius: "4px"
  },
  h3: {
    width: "190px",
    borderBottom: "1px solid #fff",
    marginBottom: "2rem"
  },
  collapseContent: {
    marginLeft: "2rem"
  }
};

export default SideBar;
