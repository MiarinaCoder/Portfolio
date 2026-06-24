import React, { useState, useEffect } from "react";
import "../styles/components/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ];

  // Navbar qui change au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "projects", "contact"];

      // Trouver la section la plus proche du haut
      let current = "";
      let minDistance = Infinity;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (rect.top <= 150 && distance < minDistance) {
          minDistance = distance;
          current = id;
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={closeMenu}>
            <span className="logo-dot"></span>Miarina
          </a>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className={activeSection === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
