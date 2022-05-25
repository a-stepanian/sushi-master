import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Wrapper>
      <h1>Logo</h1>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  color: white;
`;

export default Navbar;
