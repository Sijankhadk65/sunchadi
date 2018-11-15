import React, { Component } from "react";

class Grid extends Component {
  static Row = props => {
    if (!props.columns)
      throw new Error("You must specify number of columns in grid!");
    props.gutterWidth &&
      document.documentElement.style.setProperty(
        "--gutter-width",
        props.gutterWidth
      );
    const children = React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        columns: props.columns
      });
    });
    return <div className="row">{children}</div>;
  };
  static Column = ({ children, span, columns }) => (
    <div className={`col-${span || 1}-of-${columns}`}>{children}</div>
  );
  render() {
    const { children } = this.props;
    return <div className="grid">{children}</div>;
  }
}

export default Grid;
