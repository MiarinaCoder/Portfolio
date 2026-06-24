import React from 'react';

const SkillCard = ({ name, color, icon }) => (
  <div className="skill-card">
    <div className="skill-icon" style={{ backgroundColor: color }}>
      {icon ? (
        <img src={icon} alt={name} className="skill-icon-img" />
      ) : (
        <div className="skill-dot" />
      )}
    </div>
    <h3>{name}</h3>
  </div>
);

export default SkillCard;
