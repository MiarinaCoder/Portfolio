import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />  
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </>
  );
}

export default App;
