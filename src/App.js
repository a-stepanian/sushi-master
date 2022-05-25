import { useState } from "react";
import Navbar from "./Navbar";
import ToggleButtons from "./ToggleButtons";
import Hero from "./Hero";

function App() {
  const [background, setBackground] = useState("light");

  const darkMode = () => {
    setBackground("dark");
  };

  const lightMode = () => {
    setBackground("light");
  };

  return (
    <>
      <ToggleButtons
        darkMode={darkMode}
        lightMode={lightMode}
        background={background}
      />
      <Hero background={background} />
      <Navbar />
    </>
  );
}

export default App;
