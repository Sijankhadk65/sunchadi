import React from "react";

import Card from "../../../app/components/Card/Card";

const Customer = ({ photoURI, name, address }) => (
  <Card>
    <Card.Thumbnail thumbnail={photoURI}>{""}</Card.Thumbnail>
    <Card.Title>{name}</Card.Title>
    <Card.SubTitle>{address}</Card.SubTitle>
  </Card>
);

export default Customer;
