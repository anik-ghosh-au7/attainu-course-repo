import React from "react";
import { Card } from "semantic-ui-react";

const Page2 = ({ name, age }) => {
  return (
    <div>
      <h3>Page 2</h3>
      <Card fluid>
        <Card.Content>
          <Card.Header>Name : </Card.Header>
          <Card.Meta>{name}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Header>Age : </Card.Header>
          <Card.Meta>{age}</Card.Meta>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Page2;
