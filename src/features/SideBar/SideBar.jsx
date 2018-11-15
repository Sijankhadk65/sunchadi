import React, { Component } from "react";

import Sidebar from "../../app/components/SideBar/SideBar";

class SideBar extends Component {
  render() {
    return (
      <Sidebar>
        <Sidebar.Header>Header</Sidebar.Header>
        <Sidebar.Content>Content</Sidebar.Content>
        <Sidebar.Footer>Footer</Sidebar.Footer>
      </Sidebar>
    );
  }
}

export default SideBar;
