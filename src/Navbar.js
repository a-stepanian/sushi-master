import React, { useEffect } from "react";
import styled from "styled-components";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  useEffect(() => {
    const button = document.querySelector(".toggle-btn");
    const topChopstick = document.querySelector(".top");
    const bottomChopstick = document.querySelector(".bottom");
    setTimeout(() => {
      button.classList.add("animate-button");
    }, 500);

    setTimeout(() => {
      topChopstick.classList.add("animate-top");
      bottomChopstick.classList.add("animate-bottom");
    }, 1000);

    setTimeout(() => {
      topChopstick.classList.remove("animate-top");
      bottomChopstick.classList.remove("animate-bottom");
      button.classList.remove("animate-button");
    }, 2000);
  }, []);

  return (
    <Wrapper>
      <h1>Sushi Master</h1>
      <button
        type="button"
        onClick={toggleMenu}
        className={`${
          isMenuOpen ? "toggle-btn light-red-background" : "toggle-btn"
        }`}
      >
        <div
          className={`${
            isMenuOpen ? "chopstick top top-clicked" : "chopstick top"
          }`}
        ></div>
        <div
          className={`${
            isMenuOpen ? "chopstick bottom bottom-clicked" : "chopstick bottom"
          }`}
        ></div>
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  padding: 0.5rem;
  h1 {
    font-family: "Smooch", cursive;
    color: var(--light-red);
    font-size: 2rem;
    font-weight: 100;
    text-shadow: 2px 2px 4px var(--dark-red);
  }

  button {
    height: 80px;
    width: 80px;
    padding: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 3px;
    background-color: var(--dark-red);
    position: relative;
    transition: transform 0.5s, background-color 0.5s, outline 0.2s;
    &:hover {
      cursor: pointer;
      outline: 3px solid var(--yellow);
    }

    .chopstick {
      position: absolute;
      text-align: center;
      height: 0;
      transition: 0.5s;
    }
    .top {
      border-bottom: 5px solid var(--yellow);
      border-left: 60px solid transparent;
      top: 27px;
      left: 10px;
    }
    .bottom {
      border-top: 5px solid var(--yellow);
      border-left: 60px solid transparent;
      top: 47px;
      left: 10px;
    }
    .top-clicked {
      top: 37px;
      transform: rotate(-35deg);
      border-bottom: 5px solid var(--dark-red);
    }
    .bottom-clicked {
      top: 37px;
      transform: rotate(35deg);
      border-top: 5px solid var(--dark-red);
    }
  }

  .animate-button {
    outline: 3px solid var(--yellow);
    transform: scale(3) translateX(-50%) translateY(50%);
  }

  .animate-top {
    animation: chop-top 0.5s infinite;
  }
  .animate-bottom {
    animation: chop-bottom 0.5s infinite;
  }

  .light-red-background {
    background-color: var(--yellow);
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 2.4rem;
    }
  }
  @media (min-width: 786px) {
    padding: 0.5rem10%;
  }

  @keyframes chop-top {
    0% {
      top: 27px;
      transform: rotate(0);
    }
    50% {
      top: 32px;
      transform: rotate(-15deg);
    }
    100% {
      top: 27px;
      transform: rotate(0);
    }
  }
  @keyframes chop-bottom {
    0% {
      top: 47px;
      transform: rotate(0);
    }
    50% {
      top: 42px;
      transform: rotate(15deg);
    }
    100% {
      top: 47px;
      transform: rotate(0);
    }
  }
`;

export default Navbar;
