import React, { useEffect, useState } from 'react';
import '../styles/pages/Projects.css';
import { LaptopMockup, AndroidMockup } from './DeviceMockup';

const ProjectModal = ({ project, index = 0, setIndex, onClose, modalIsMobile = false, isSoutenances = false }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const imgs = project.screenshots && project.screenshots.length
      ? project.screenshots
      : project.screenshot ? [project.screenshot] : [];

    const load = async () => {
      setLoading(true);
      try {
        const promises = imgs.map((p) => import(`../assets/${p}`).then(m => m.default || m));
        const results = await Promise.all(promises);
        if (mounted) setImages(results);
      } catch (err) {
        console.error('Failed to load modal images', err);
        if (mounted) setImages([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, [project]);

  const idx = Math.max(0, Math.min(index, images.length - 1));

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(images.length - 1, i + 1));

  const overlayClass = `modal-overlay ${modalIsMobile ? 'modal--mobile' : ''} ${isSoutenances ? 'modal--soutenances' : ''}`.trim();

  return (
    <div className={overlayClass} onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fermer">×</button>
        <div className="modal__content">
          <div className="modal__mockup">
            <div className="modal__nav modal__nav--prev" onClick={prev} aria-hidden="true">‹</div>
            <div className="modal__nav modal__nav--next" onClick={next} aria-hidden="true">›</div>

            {loading ? (
              <div className="modal__loading">Chargement des images…</div>
            ) : (
              <>
                {images.length > 0 && (
                  <div className="modal__thumbs" role="tablist" aria-label="Miniatures">
                    {images.map((s, i) => (
                      <button key={i} type="button" className={`modal__thumb ${i === idx ? 'modal__thumb--active' : ''}`} onClick={() => setIndex(i)} aria-label={`Voir Capture ${i + 1}`}>
                        <img src={s} alt={`Miniature ${i + 1}`} />
                      </button>
                    ))}
                  </div>
                )}

                <div className="modal__image">
                  {images[idx] ? (
                    <img src={images[idx]} alt={`Capture — ${project.title}`} />
                  ) : (
                    <div className="modal__placeholder">Pas d'image</div>
                  )}
                </div>

                {project.type === 'web' ? (
                  <div className="modal__device--laptop">
                    <LaptopMockup imgSrc={images[idx]} title={project.title} />
                  </div>
                ) : (
                  <div className="modal__device--phone-full">
                    <AndroidMockup imgSrc={images[idx]} title={project.title} />
                  </div>
                )}

                {images.length > 1 && (
                  <div className="modal__pager">{idx + 1} / {images.length}</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
