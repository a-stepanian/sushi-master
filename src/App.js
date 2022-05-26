import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <>
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <Hero isMenuOpen={isMenuOpen} />
    </>
  );
}

export default App;
