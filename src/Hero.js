import React from "react";
import styled from "styled-components";

const Hero = ({ background }) => {
  return (
    <Wrapper>
      {/* dark red background left */}
      <div
        className={`${
          background === "dark" ? "dark-bcg" : "dark-bcg slide-left"
        }`}
      >
        <h2>
          GET YOUR <br />
          SUSHI FIX
        </h2>
      </div>

      {/* light red background center */}
      <div
        className={`${
          background === "dark" ? "light-bcg" : "light-bcg slide-left"
        }`}
      ></div>

      {/* yellow background center */}
      <div
        className={`${
          background === "dark" ? "yellow-bcg" : "yellow-bcg slide-left"
        }`}
      ></div>

      <img
        className={`${background === "dark" ? "img" : "img slide-and-rotate"}`}
        src="sushi.png"
        alt="logo"
      />
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
    display: flex;
    align-items: flex-end;
    h2 {
      font-size: 2.4rem;
      margin-left: 5%;
      margin-bottom: 15vh;
      color: var(--light-red);
      font-family: "Playfair Display", serif;
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

  .yellow-bcg {
    position: fixed;
    right: -125%;
    height: 100vh;
    width: 75%;
    background-color: var(--dark-red);
    transition: transform 0.8s;
  }
  .img {
    max-width: 50vw;
    max-height: 100vh;
    z-index: 1;
    position: fixed;
    top: calc(50vh - 25vw);
    right: 12.5%;
    transition: 0.8s;
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

  @media (min-width: 768px) {
    .dark-bcg {
      h2 {
        font-size: 5rem;
      }
    }
`;

export default Hero;
