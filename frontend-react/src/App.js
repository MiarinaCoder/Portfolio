import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Skills from "./pages/Skills";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />  
      <main>
        <About />
        {/* <Projects />
        <Skills />
        <Contact /> */}
      </main>
    </>
  );
}

export default App;
