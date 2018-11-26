import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem/ListItem";
import { H1 } from "../../../../app/components/Heading/Heading";

class Items extends Component {
  render() {
    const { items } = this.props;
    const itemList = items.map(item => (
      <ListItem key={item.id} {...item} />
    ));
    return (
      <div>
        <H1 center>Items</H1>
        <div>{itemList}</div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    items: state.config.items
  };
};

const actions = {};

export default connect(
  mapState,
  actions
)(Items);
