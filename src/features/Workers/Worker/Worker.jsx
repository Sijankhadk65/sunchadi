import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import './Worker.css'

import { deleteWorker, updateWorker } from "../workerActions";
import validate from "../../../app/config/validation";

import Loader from "../../../app/common/Loader/Loader";
import Grid from "../../../app/components/Grid/Grid";
import Button from "../../../app/components/Button/Button";
import TextInput from "../../../app/components/Form/TextInput/TextInput";
import { H1, H2, H3 } from '../../../app/components/Heading/Heading';
import Collapse from '../../../app/components/Collapse/Collapse'
import Div from "../../../app/common/Div/Div";

class Worker extends Component {
  handleWorkerUpdate = values => {
    this.props.updateWorker({
      ...values,
      id: this.props.initialValues.id,
      history: this.props.initialValues.history
    }, this.props.history);
  };
  render() {
    const { initialValues, deleteWorker, handleSubmit, loading } = this.props;
    if (loading) {
      return <Loader message="Processing Action..." />;
    }
    if (initialValues === null) {
      return <Loader message="Loading Worker..." />;
    }
    const { id, photoURI } = initialValues;
    return <Div>
        <Grid gutterWidth="5rem">
          <Grid.Row columns={2}>
            <Grid.Column>
              <img src={photoURI || '/customer.jpeg'} alt="worker" style={{ width: "100%", borderRadius: "4px" }} />
            <Button type="button" btnStyle="danger" onClick={() => deleteWorker(id, this.props.history)}>
              Delete Worker
              </Button>
            </Grid.Column>
            <Grid.Column>
              <form>
                <Field name="name" type="text" label="Worker Name" component={TextInput} />
                <Field name="address" type="text" label="Worker Adderss" component={TextInput} />
                <Field name="phone" type="number" label="Worker Phone" component={TextInput} />
                <Field name="age" type="number" label="Worker Age" component={TextInput} />
              </form>
              <Button type="submit" btnStyle="primary" onClick={handleSubmit(this.handleWorkerUpdate)}>
                Update Worker
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <H1>Work Records</H1>
        {this.props.initialValues.history && this.props.initialValues.history.map(
          h => (
            <Collapse>
              <Collapse.Trigger>
                <div className="list_trigger">
                  Start Date <span className="mark">{h.startDate}</span>
                  Complete Date <span className="mark">{h.completeDate}</span> <span style={{ fontSize: '1.5rem' }}>&#43;</span>
                </div>
              </Collapse.Trigger>
              <Collapse.Content>
                <ul className="list">
                  {h.items.map((item, index) => (
                    <h3>Work</h3>
                  ))}
                </ul>
              </Collapse.Content>
            </Collapse>
          )
        )}
      </Div>;
  }
}

const mapState = (state, props) => {
  const workers = state.workers.workers;
  const loading = state.async.loading;
  const id = props.match.params.id;
  console.log(id)
  let worker = null;
  if (workers.length > 0) {
    worker = workers.find(c => (c.id === id));
  }
  console.log(worker)
  return {
    initialValues: worker === undefined ? {} : worker,
    loading
  };
};

const actions = {
  deleteWorker,
  updateWorker
};

export default connect(
  mapState,
  actions
)(
  reduxForm({
    form: "updateCustomer",
    enableReinitialize: true,
    validate: validate.registerCustomerValidation
  })(Worker)
);
