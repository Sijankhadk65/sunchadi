import React, { Component } from "react";

class SideBar extends Component {
  static Header = ({ children }) => (
    <div className="sidebar__header">{children}</div>
  );
  static Content = ({ children }) => (
    <div className="sidebar__content">{children}</div>
  );
  static Footer = ({ children }) => (
    <div className="sidebar__footer">{children}</div>
  );
  render() {
    const { children } = this.props;
    return <div className="sidebar">{children}</div>;
  }
}

export default SideBar;
