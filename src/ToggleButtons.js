import React from "react";
import styled from "styled-components";

const ToggleButtons = ({ darkMode, lightMode, background }) => {
  return (
    <Wrapper>
      <aside className={`${background === "dark" ? null : "light-bg"}`}>
        <button
          type="button"
          onClick={darkMode}
          className={`${background === "dark" ? "selected" : null}`}
        >
          dark
        </button>
        <button
          type="button"
          onClick={lightMode}
          className={`${background === "light" ? "selected" : null}`}
        >
          light
        </button>
      </aside>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  aside {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    height: 100vh;
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    button {
      height: 50px;
      width: 50px;
      background-color: rgb(200, 230, 255);
      border: none;
      border-radius: 50%;
      color: rgb(0, 0, 100);
      margin: 5px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.5);
      }
    }
    .selected {
      outline: 2px solid rgb(0, 0, 100);
    }
  }
`;

export default ToggleButtons;
