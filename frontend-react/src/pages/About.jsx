import React from "react";
import "../styles/pages/About.css"; 
import profileImg from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
       <div className="about-image">
          <img src={profileImg} alt="Portrait de Miarina" />
        </div>

      <div className="about-content">
        <h1>Salut, je suis <span className="highlight">SENDRAMIARINA Hasinirina Marie Josia</span></h1>
        <h2>Développeuse web et mobile</h2>
        <p>
          Passionnée par la création d’expériences numériques modernes, 
          j’aime concevoir des applications web et mobiles simples, rapides 
          et élégantes. Mon objectif est de transformer des idées en projets 
          concrets et utiles.
        </p>
        <a href="#projects" className="btn-primary">
          Voir mes projets
        </a>
      </div>
      </div>
    </section>
  );
};

export default About;
