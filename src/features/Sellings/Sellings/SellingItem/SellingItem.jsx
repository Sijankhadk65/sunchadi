import React from "react";
import { withRouter } from "react-router-dom";

import "./SellingItem.css";

import Collapse from "../../../../app/components/Collapse/Collapse";
import { H3 } from "../../../../app/components/Heading/Heading";

export default withRouter(({ selling }) => {
  const { cust_name, soldDate, total, items } = selling;
  return (
    <div>
      <Collapse>
        <Collapse.Trigger>
          <div className="order__item" style={{ background: "#441678" }}>
            <h3>{cust_name}</h3>
            <h3>{soldDate}</h3>
            <h3>{total}</h3>
          </div>
        </Collapse.Trigger>
        <Collapse.Content>
          <div className="order__info">
            {items.map((item, index) => (
              <div>
                <H3 center>Item {index + 1}</H3>
                <table key={item.id} className="order__info--table">
                  <tbody>
                    <tr>
                      <td>Item Name</td>
                      <th>{item.name}</th>
                    </tr>
                    <tr>
                      <td>Item Code</td>
                      <th>{item.code}</th>
                    </tr>
                    <tr>
                      <td>Item Weight</td>
                      <th>{item.finalWt}</th>
                    </tr>
                    <tr>
                      <td>Item Loss</td>
                      <th>{item.loss}</th>
                    </tr>

                    <tr>
                      <td>Item Wage</td>
                      <th>{item.wages}</th>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <th>{item.price}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </Collapse.Content>
      </Collapse>
    </div>
  );
});
