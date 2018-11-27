import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";

import { addSelling } from "../sellingActions";
import validate from "../../../app/config/validation";

import Button from "../../../app/components/Button/Button";
import DropDown from "../../../app/components/Form/DropDown/DropDown";
import TextInput from "../../../app/components/Form/TextInput/TextInput";
import Grid from "../../../app/components/Grid/Grid";

import AddToSellingForm from "./AddItemForm/AddItemForm";

class Selling extends Component {
  state = {
    items: [],
    itemsError: false,
    currentSelectedItem: {}
  };
  deleteItem = id => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };
  updateItem = item => {
    this.setState({
      items: this.state.items.map(i => {
        if (i.id === item.id) {
          return item;
        }
        return i;
      })
    });
  };
  setItem = id => {
    const currentSelectedItem = this.state.items.find(i => i.id === id);
    this.setState({
      currentSelectedItem
    });
    console.log(currentSelectedItem);
  };
  handleItemAdd = item => {
    const newItems = [...this.state.items, item];
    this.setState({
      items: newItems
    });
    let total = 0;
    for (let item of newItems) {
      total += item.price;
    }
    console.log(total);
    this.props.change("total", total);
  };
  handleSellItem = values => {
    if (this.state.items.length < 1) {
      return this.setState({
        itemsError: true
      })
    }
    values.items = this.state.items;
    values.soldDate = new Date().toLocaleDateString();
    this.props.addSelling(values, this.props.history);
  };
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row columns={4}>
            <Grid.Column span={3}>
              <form>
                <Field
                  name="cust_name"
                  type="tetxt"
                  label="Customer Name"
                  component={TextInput}
                />
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Field
                        name="address"
                        type="text"
                        label="Customer Address"
                        component={TextInput}
                      />
                    </Grid.Column>
                    <Grid.Column>
                      <Field
                        name="contact"
                        type="number"
                        label="Customer Phone"
                        component={TextInput}
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                {this.state.items.length > 0 && (
                  <div>
                    <div className="order__header">
                      <h3>Code</h3>
                      <h3>Weight</h3>
                      <h3>Loss</h3>
                      <h3>Name</h3>
                      <h3>Delete</h3>
                    </div>
                    {this.state.items.map(item => (
                      <div
                        className="order__item"
                        style={{ background: "#441678" }}
                        onClick={() => this.setItem(item.id)}
                      >
                        <h3>{item.code}</h3>
                        <h3>{item.finalWt}</h3>
                        <h3>{item.loss}</h3>
                        <h3>{item.name}</h3>
                        <h3
                          style={{ cursor: "pointer" }}
                          onClick={() => this.deleteItem(item.id)}
                        >
                          <FaTrash />
                        </h3>
                      </div>
                    ))}
                  </div>
                )}
                {this.state.itemsError && <p className="error">At Least One Item Is Required</p>}
                <Field
                  name="total"
                  disabled={true}
                  type="number"
                  label="Total"
                  component={TextInput}
                />
              </form>
            </Grid.Column>
            <Grid.Column>
              <AddToSellingForm
                updateItem={this.updateItem}
                initialValues={this.state.currentSelectedItem}
                handleItemAdd={this.handleItemAdd}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button
          type="submit"
          btnStyle="primary"
          onClick={this.props.handleSubmit(this.handleSellItem)}
        >
          Sell Item
        </Button>
      </div>
    );
  }
}

const mapState = (state, props) => {
  const id = props.match.params.id;
  let selling = {};
  if (id) {
    selling = state.sellings.sellings.find(selling => selling.id === id);
  }
  return {
    initialValues: selling === undefined ? {} : selling,
    customers: state.customers.customers.map(customer => ({
      id: customer.id,
      label: customer.name,
      value: customer.name
    })),
    sellingItems: state.config.sellingItems
  };
};

const actions = { addSelling };

export default connect(
  mapState,
  actions
)(
  reduxForm({
    form: "sellingForm",
    enableReinitialize: true,
    validate: validate.sellingForm
  })(Selling)
);
