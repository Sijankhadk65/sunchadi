import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import validate from '../../../app/config/validation'

// import Grid from '../../../app/components/Grid/Grid'

class Selling extends Component {
  render() {
    return (
      <div>
        <h3>Selling Section</h3>
      </div>
    )
  }
}

const mapState = state => {

}

const actions = {

}

export default connect(mapState, actions)(
  reduxForm({
    form: 'sellingForm',
    enableReinitialize: true,
    validate: validate.sellingValidation
  })(Selling)
)