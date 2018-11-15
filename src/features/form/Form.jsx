import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

const Input = ({ input, type, placeholder }) => (
  <input {...input} placeholder={placeholder} type={type} />
);

class Form extends Component {
  handleSubmit = values => {
    console.log(values);
  };
  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
        <style>
          {`
            input {
              display: block;
              margin: 5em;
            }
          `}
        </style>

        <Field
          name="fullname"
          type="text"
          placeholder="Full Name"
          component={Input}
        />
        <Field
          name="email"
          type="email"
          placeholder="Email"
          component={Input}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={Input}
        />
        <Field
          name="address"
          type="text"
          placeholder="Address"
          component={Input}
        />
        <Field
          name="phone"
          type="number"
          placeholder="Phone"
          component={Input}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "example",
  enableReinitialize: true
})(Form);
