import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Div from "../../app/common/Div/Div";
import { appName } from "../config/appConfig";

import { H1 } from "../../app/components/Heading/Heading";
import Grid from "../../app/components/Grid/Grid";
import SideBar from "../../features/SideBar/SideBar";
import Login from "../../features/Login/Login";
import Customers from "../../features/Customers/Customers/Customers";
import Customer from "../../features/Customers/Customer/Customer";
import RegisterCustomer from "../../features/Customers/RegisterCustomer/RegisterCustomer";
import Workers from "../../features/Workers/Workers/Workers";
import Worker from '../../features/Workers/Worker/Worker'
import RegisterWorker from '../../features/Workers/RegisterWorker/RegisterWorker'

class App extends Component {
  render() {
    return <Div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
        <Route exact path="/(.+)" render={() => <Div>
          <Grid gutterWidth="0rem" style={{ margin: "1.5rem 3rem", fontSize: "1.3rem" }}>
            <Grid.Row columns={4}>
              <Grid.Column>
                <H1>{appName}</H1>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid gutterWidth="4rem" style={{ margin: "3rem" }}>
            <Grid.Row columns={4}>
              <Grid.Column>
                <SideBar />
              </Grid.Column>
              <Grid.Column span={3} style={{ padding: "0 4rem" }}>
                <Switch>
                  <Route path="/customers/view/:id" component={Customer} />
                  <Route path="/workers/view/:id" component={Worker} />
                  <Route path="/customers/view" component={Customers} />
                  <Route path="/workers/view" component={Workers} />
                  <Route path="/customers/register" component={RegisterCustomer} />
                  <Route path="/workers/register" component={RegisterWorker} />
                </Switch>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Div>} />
      </Div>;
  }
}

export default App;
