import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h1>Sushi Master</h1>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  h1 {
    padding-left: 0.5rem;
    font-family: "Smooch", cursive;
    color: var(--yellow);
    font-size: 1.6rem;
    font-weight: 100;
  }
`;

export default Navbar;
