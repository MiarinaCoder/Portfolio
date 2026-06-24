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
          <h1>
            Salut, je suis <span className="highlight">Miarina</span>
          </h1>

          <h2>SENDRAMIARINA Hasinirina Marie Josia</h2>

          <h3>Développeuse web et mobile</h3>

          <p>
            Passionnée par la création d’expériences numériques modernes,
            j’aime concevoir des applications web et mobiles <strong>simples, rapides et élégantes</strong>.
            Mon objectif est de transformer vos idées en projets concrets et utiles.
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
