import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Div from "../../app/common/Div/Div";
import Grid from "../../app/components/Grid/Grid";

import SideBar from "../../features/SideBar/SideBar";
import Login from "../../features/Login/Login";
import Customers from "../../features/Customers/Customer";
import Workers from "../../features/Workers/Workers";

class App extends Component {
  render() {
    return (
      <Div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
        <Route
          exact
          path="/(.+)"
          render={() => (
            <Grid>
              <Grid.Row columns={4} gutterWidth="0rem">
                <Grid.Column>
                  <SideBar />
                </Grid.Column>
                <Grid.Column>
                  <Switch>
                    <Route path="/customers" component={Customers} />
                    <Route path="/workers" component={Workers} />
                  </Switch>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        />
      </Div>
    );
  }
}

export default App;
