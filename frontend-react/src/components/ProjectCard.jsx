import React, { useState, useEffect } from 'react';
import { LaptopMockup, AndroidMockup } from './DeviceMockup';

const ProjectCard = ({ project, openModal }) => {
  const isWeb = project.type === 'web';
  const hasCodeUrl = !!project.codeUrl && project.codeUrl !== "#";
  const [previewSrc, setPreviewSrc] = useState(null);

  useEffect(() => {
    let mounted = true;
    const loadPreview = async () => {
      if (!project.screenshot) return;
      try {
        const mod = await import(`../assets/${project.screenshot}`);
        if (mounted) setPreviewSrc(mod.default || mod);
      } catch (err) {
        // fail silently, preview will stay empty
        console.warn('Preview image failed to load', project.screenshot, err);
      }
    };
    loadPreview();
    return () => { mounted = false; };
  }, [project.screenshot]);

  return (
    <article className="project-card">
      {isWeb ? (
        <LaptopMockup imgSrc={previewSrc} title={project.title} />
      ) : (
        <AndroidMockup imgSrc={previewSrc} title={project.title} />
      )}

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <span className={`project-card__badge project-card__badge--${project.type}`}>
            {isWeb ? 'Web' : 'Mobile'}
          </span>
        </div>

        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tags" aria-label="Technologies utilisées">
          {project.tags.map((tag) => (
            <li key={tag} className="project-card__tag">{tag}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <button
            onClick={() => openModal(project)}
            className="project-card__btn project-card__btn--primary"
            aria-label={`Voir captures de ${project.title}`}
          >
            Voir Captures
          </button>

          {hasCodeUrl ? (
            <a
              href={project.codeUrl}
              className="project-card__btn project-card__btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code source
            </a>
          ) : (
            <button
              type="button"
              className="project-card__btn project-card__btn--outline project-card__btn--disabled"
              disabled
              aria-label={`Code source privé pour ${project.title}`}
            >
              Code source privé
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
