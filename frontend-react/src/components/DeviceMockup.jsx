import React from 'react';

export const LaptopMockup = ({ imgSrc, title }) => (
  <div className="device-wrap device-wrap--laptop">
    <div className="laptop">
      <div className="laptop__lid">
        <div className="laptop__cam" aria-hidden="true" />
        <div className="laptop__screen">
          {imgSrc ? (
            <img src={imgSrc} alt={`Capture — ${title}`} className="device__screenshot device__screenshot--fit" />
          ) : (
            <div className="device__placeholder">Capture à ajouter</div>
          )}
        </div>
      </div>
      <div className="laptop__base"><div className="laptop__notch" aria-hidden="true"/></div>
      <div className="laptop__foot" aria-hidden="true" />
    </div>
  </div>
);

export const AndroidMockup = ({ imgSrc, title }) => (
  <div className="device-wrap device-wrap--phone">
    <div className="phone">
      <div className="phone__top" aria-hidden="true" />
      <div className="phone__screen" role="img" aria-label={`Capture d'écran — ${title}`}>
        {imgSrc ? (
          <img src={imgSrc} alt={`Capture — ${title}`} className="device__screenshot device__screenshot--fit" />
        ) : (
          <div className="device__placeholder">Capture à ajouter</div>
        )}
      </div>
    </div>
  </div>
);

// export default { LaptopMockup, AndroidMockup };
