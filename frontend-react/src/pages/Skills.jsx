import React from "react";
import "../styles/pages/Skills.css";
import SkillCard from "../components/SkillCard";
// Importe toutes tes icônes pour le frontend
import htmlIcon from "../assets/skills/icons8_html_5_32.png";
import cssIcon from "../assets/skills/icons8_css3_32.png";
import jsIcon from "../assets/skills/icons8_javascript_32.png";
import reactIcon from "../assets/skills/icons8_react_32.png";

// Importe toutes tes icônes pour le FRAMEWORK
import nextIcon from "../assets/skills/favicon.png";
import expressIcon from "../assets/skills/EXPRESSJS.png";

// Importe toutes tes icônes pour le backend
import pythonIcon from "../assets/skills/icons8_python_32.png";
import javaIcon from "../assets/skills/icons8_java_32.png";
import phpIcon from "../assets/skills/icons8_php_logo_32.png";
import nodeIcon from "../assets/skills/icons8_nodejs_32.png";

// Importe toutes tes icônes pour le base de donnees
import mysqlIcon from "../assets/skills/mysql.png";
import pgIcon from "../assets/skills/icons8_postgresql_32.png";

// Importe toutes tes icônes pour l'outil
import vsIcon from "../assets/skills/code.ico";
import postmanIcon from "../assets/skills/icon.png";
import gitIcon from "../assets/skills/icons8_git_32.png";
import npmIcon from "../assets/skills/icons8_npm_32.png";

//Importe toutes tes icônes pour le design
import figmaIcon from "../assets/skills/figma.png";
import canvaIcon from "../assets/skills/canva.png";

//importe toutes tes icônes pour la modélisation
import umlIcon from "../assets/skills/uml.png";
import meriseIcon from "../assets/skills/merise.jfif";

//importe toutes tes icônes pour le deploiement
import netlifyIcon from "../assets/skills/netlify.png";
import vercelIcon from "../assets/skills/favicon.ico";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", color: "#E34F26", icon: htmlIcon },
    { name: "CSS", color: "#1572B6", icon: cssIcon },
    { name: "JavaScript", color: "#F7DF1E", icon: jsIcon },
    { name: "React JS/TS", color: "#61DAFB", icon: reactIcon },
  ];

  const frameworkSkills = [
    { name: "Express JS", color: "#E34F26", icon: expressIcon }, // Remplace par ton icône
    { name: "Next JS", color: "#1572B6", icon: nextIcon },
  ];

  const backendSkills = [
    { name: "Node JS", color: "#339933", icon: nodeIcon },
    { name: "Python", color: "#3776AB", icon: pythonIcon },
    { name: "PHP", color: "#777BB4", icon: phpIcon },
    { name: "Java", color: "#007396", icon: javaIcon },
  ];

  const databaseSkills = [
    { name: "MySQL", color: "#339933", icon: mysqlIcon },
    { name: "PostgreSQL", color: "#3776AB", icon: pgIcon },
  ];

  const toolSkills = [
    { name: "Git & GitHub", color: "#E34F26", icon: gitIcon },
    { name: "NPM", color: "#1572B6", icon: npmIcon },
    { name: "Postman (tests d'API)", color: "#F7DF1E", icon: postmanIcon },
    { name: "Visual Studio Code", color: "#61DAFB", icon: vsIcon },
  ];

  const designSkills = [
    { name: "Figma", color: "#E34F26", icon: figmaIcon },
    { name: "Canva", color: "#1572B6", icon: canvaIcon },
  ];

  const modelisationSkills = [
    { name: "UML (Visual Paradigm)", color: "#339933", icon: umlIcon },
    { name: "Merise", color: "#3776AB", icon: meriseIcon }
  ];

  const deploiementSkills = [
    { name: "Netlify", color: "#F7DF1E", icon: netlifyIcon },
    { name: "Vercel", color: "#61DAFB", icon: vercelIcon }
  ];

  // SkillCard extracted to src/components/SkillCard.jsx

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>

        <div className="skills-grid">
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="5.5" rx="1.2" />
                  <rect x="2" y="10" width="20" height="5.5" rx="1.2" />
                  <rect x="2" y="17" width="20" height="3" rx="1" />
                  <circle cx="18.5" cy="5.5" r="0.9" />
                  <circle cx="18.5" cy="12.5" r="0.9" />
                </svg>
              </div>
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              {backendSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <h3>Frameworks</h3>
            </div>
            <div className="skills-list">
              {frameworkSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <h3>Base de Données</h3>
            </div>
            <div className="skills-list">
              {databaseSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2.5" y="7" width="19" height="10" rx="1.5" />
                  <rect x="7" y="3.5" width="10" height="3" rx="1" />
                  <line x1="9" y1="11" x2="9" y2="15" />
                  <line x1="15" y1="11" x2="15" y2="15" />
                </svg>
              </div>
              <h3>Outils & Workflow</h3>
            </div>
            <div className="skills-list">
              {toolSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.6 13.7A8 8 0 1 1 10.3 3.4 3 3 0 0 0 13 6a3 3 0 0 0 3 3 3 3 0 0 0 3-3 8 8 0 0 1 1.6 7.7z" />
                  <circle cx="12" cy="10" r="1" />
                  <circle cx="8" cy="12" r="1" />
                  <circle cx="16" cy="14" r="1" />
                </svg>
              </div>
              <h3>Design</h3>
            </div>
            <div className="skills-list">
              {designSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="6" r="2" />
                  <circle cx="18" cy="6" r="2" />
                  <circle cx="12" cy="16" r="2" />
                  <path d="M8 6h8" />
                  <path d="M12 8v6" />
                </svg>
              </div>
              <h3>Modélisation</h3>
            </div>
            <div className="skills-list">
              {modelisationSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <div className="category-header">
              <div className="category-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.39 18.39A5 5 0 0 0 16 13h-1.26A8 8 0 1 0 4 19" />
                  <polyline points="8 12 12 8 16 12" />
                  <line x1="12" y1="16" x2="12" y2="8" />
                </svg>
              </div>
              <h3>Deploiement</h3>
            </div>
            <div className="skills-list">
              {deploiementSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles extracted to src/styles/pages/Skills.css */}
    </section>
  );
};

export default Skills;        