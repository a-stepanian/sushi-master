import React from "react";
import styled from "styled-components";

const Hero = ({ background }) => {
  return (
    <Wrapper>
      <div
        className={`${
          background === "dark" ? "dark-bcg" : "dark-bcg slide-left"
        }`}
      ></div>
      <div
        className={`${
          background === "dark" ? "light-bcg" : "light-bcg slide-left"
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
const Wrapper = styled.main`
  height: 100vh;
  .dark-bcg {
    position: fixed;
    right: 25%;
    height: 100vh;
    width: 75%;
    background-color: var(--dark-red);
    transition: transform 0.8s;
  }
  .light-bcg {
    position: fixed;
    right: -50%;
    height: 100vh;
    width: 75%;
    background-color: var(--light-red);
    transition: transform 0.8s;
  }
  .img {
    width: 50%;
    z-index: 1;
    position: fixed;
    top: 12.5%;
    right: 12.5%;
    transition: 0.8s;
  }
  .slide-left {
    transform: translateX(-100%);
  }
  .slide-and-rotate {
    right: 80%;
    transform: rotate(180deg);
  }
`;

export default Hero;
