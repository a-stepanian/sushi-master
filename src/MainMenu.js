import React from "react";
import styled from "styled-components";

const MainMenu = ({ isMenuOpen }) => {
  return (
    <Wrapper>
      <button type="button" className={`${isMenuOpen && "show-btn"}`}>
        Sushi
      </button>
      <button type="button" className={`${isMenuOpen && "show-btn"}`}>
        Sashimi
      </button>
      <button type="button" className={`${isMenuOpen && "show-btn"}`}>
        Ramen
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  right: -75%;
  top: 50%;
  display: flex;
  flex-direction: column;

  button {
    background-color: transparent;
    border: none;
    opacity: 0;
    transition: opacity 0.8s, transform 0.8s, color 0.2s;
    font-family: "Smooch", cursive;
    color: var(--dark-red);
    font-size: 3rem;
    font-weight: 100;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
  button:nth-of-type(1) {
    transform: translateX(-20px);
  }
  button:nth-of-type(3) {
    transform: translateX(-10px);
  }
  .show-btn {
    opacity: 1;
    &:hover {
      cursor: pointer;
      color: var(--yellow);
    }
  }
  .show-btn:nth-of-type(1) {
    transform: translateX(10px);
  }
  .show-btn:nth-of-type(2) {
    transform: translateX(60px);
  }
  .show-btn:nth-of-type(3) {
    transform: translateX(80px);
  }

  @media (min-width: 768px) {
    top: 25%;
    button {
      font-size: 4rem;
    }
  }
`;
export default MainMenu;
