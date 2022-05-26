import React from "react";
import styled from "styled-components";
import MainMenu from "./MainMenu";

const Hero = ({ isMenuOpen }) => {
  return (
    <Wrapper>
      {/* dark red background left */}
      <div className={`${isMenuOpen ? "dark-bcg slide-left" : "dark-bcg"}`}>
        <h2>
          GET <br />
          YOUR <br />
          <span>SUSHI</span> FIX
        </h2>
        <img
          className={`${isMenuOpen ? "img slide-and-rotate" : "img"}`}
          src="sushi.png"
          alt="logo"
        />
        <MainMenu isMenuOpen={isMenuOpen} />
      </div>

      {/* light red background center */}
      <div
        className={`${isMenuOpen ? "light-bcg slide-left" : "light-bcg"}`}
      ></div>

      {/* yellow background center */}
      <div
        className={`${isMenuOpen ? "open-red-bar slide-left" : "open-red-bar"}`}
      ></div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 100vh;

  .dark-bcg {
    position: fixed;
    right: 25%;
    height: 100vh;
    width: 75%;
    background-color: var(--dark-red);
    transition: transform 0.8s;
    z-index: 1;

    h2 {
      position: absolute;
      bottom: 5%;
      right: 25%;
      font-size: 2.4rem;
      margin-left: 5%;
      margin-bottom: 15vh;
      color: var(--light-red);
      font-family: "Playfair Display", serif;
      span {
        color: var(--yellow);
      }
    }
    .img {
      width: 50%;
      position: absolute;
      top: 25%;
      right: -25%;
      transition: 0.8s;
    }
  }

  .light-bcg {
    position: fixed;
    right: -50%;
    height: 100vh;
    width: 75%;
    background-color: var(--light-red);
    transition: transform 0.8s;
  }

  .open-red-bar {
    position: fixed;
    right: -125%;
    height: 100vh;
    width: 75%;
    background-color: var(--dark-red);
    transition: transform 0.8s;
  }

  .slide-left {
    transform: translateX(-100%);
  }
  .slide-left-more {
    transform: translateX(-200%);
  }
  .slide-and-rotate {
    right: 80%;
    transform: rotate(180deg);
  }

  @media (min-width: 480px) and (min-height: 480px) {
    .dark-bcg {
      h2 {
        font-size: 3.5rem;
      }
    }
  @media (min-width: 768px) and (min-height: 480px) {
    .dark-bcg {
      h2 {
        font-size: 6rem;
      }
    }
`;

export default Hero;
