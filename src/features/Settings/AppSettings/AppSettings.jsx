import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";

import Items from "./Items/Items";
import AddItem from "./AddItem/AddItem";

import Grid from "../../../app/components/Grid/Grid";

class AppSettings extends Component {
  render() {
    return (
      <Grid gutterWidth="3rem">
        <Grid.Row columns={4}>
          <Grid.Column span={3}>
            <Switch>
              <Redirect exact from="/settings/app" to="/settings/app/items" />
              <Route path="/settings/app/item/:id" component={AddItem} />
              <Route path="/settings/app/item/" component={AddItem} />
              <Route path="/settings/app/items" component={Items} />
            </Switch>
          </Grid.Column>
          <Grid.Column>
            <ul>
              <li>
                <Link to="/settings/app/item">Add Item</Link>
              </li>
              <li>
                <Link to="/settings/app/items">Items</Link>
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AppSettings;
