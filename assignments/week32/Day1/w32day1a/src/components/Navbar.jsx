import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Header as="h3" block>
      <Div>Where in the world?</Div>
    </Header>
  );
};

const Div = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 40px;
`;

export default Navbar;
