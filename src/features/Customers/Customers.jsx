import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import Grid from "../../app/components/Grid/Grid";
import Loader from "../../app/components/Loader/Loader";
import Input from "../../app/components/Input/Input";
import { H1 } from "../../app/components/Heading/Heading";

import Customer from "./Customer/Customer";

import { searchCustomer, fetchCustomers } from "./customerActions";

class Customers extends Component {
  state = {
    term: ''
  }
  componentDidMount() {
    this.props.fetchCustomers();
  }

  render() {
    const { term } = this.state
    let { customers, searchedCustomers, loading, error } = this.props;
    if (loading) {
      return (
        <Loader>
          <Loader.Content>
            <img
              src="/gold.jpg"
              alt="Gold"
              style={{ width: "15rem", borderRadius: "50%" }}
            />
            <H1> Rs. 22000 / 10gm</H1>
          </Loader.Content>
          <Loader.Spinner />
        </Loader>
      );
    }
    if (searchedCustomers.length > 0) {
      customers = searchedCustomers;
    }

    let customersGrid = customers.map(
      ({ id, photoURI, name, address }) => (
        <Grid.Column key={id}>
          <Customer photoURI={photoURI} name={name} address={address} />
        </Grid.Column>
      )
    );

    if (term !== '' && searchedCustomers.length < 1) {
      customersGrid = []
    }

    if (customersGrid.length < 1) {
      customersGrid =  <div>No Customers</div>;
    }

    if (error) {
      return <div>Inernet Connection Error</div>;
    }

    
    return (
      <Grid gutterWidth="25rem">
        <Input onChange={e => {
          this.setState({ term: e.target.value });
          this.props.searchCustomer(e.target.value)
        }} />
        <Grid.Row columns={4}>{customersGrid}</Grid.Row>
      </Grid>
    );
  }
}

const customer = {
  name: "Shashi Gyawali",
  phone: "9826405548",
  address: "Kalikanagar, Butwal",
  history: [
    {
      billNo: 512,
      items: [
        {
          name: "Pendent",
          price: 22000,
          quantity: 1
        }
      ],
      purchaseDate: new Date().toLocaleDateString()
    }
  ]
};

const mapState = ({
  customers: { customers, searchedCustomers },
  async: { loading, error }
}) => ({
  customers,
  searchedCustomers,
  loading,
  error
});

const actions = {
  searchCustomer,
  fetchCustomers
};

export default connect(
  mapState,
  actions
)(Customers);
