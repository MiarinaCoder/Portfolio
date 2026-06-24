import React from 'react';

const ContactInfoCard = ({ icon, title, href, children }) => (
  <div className="contact-info-card">
    <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
      <div className="contact-info-icon">{icon}</div>
      <div>
        <h3 className="contact-info-title">{title}</h3>
        {href ? (
          <a className="contact-info-link" href={href} target="_blank" rel="noreferrer">{children || href}</a>
        ) : (
          <div style={{ color: '#555', fontSize: '0.875rem' }}>{children}</div>
        )}
      </div>
    </div>
  </div>
);

export default ContactInfoCard;
