import React, { useState, useEffect, lazy, Suspense } from "react";
import "../styles/pages/Projects.css";
import ProjectCard from "../components/ProjectCard";

const ProjectModal = lazy(() => import("../components/ProjectModal"));

/*
  Images are referenced by path strings relative to src/assets.
  The modal and project card will dynamically import the files when needed.
*/
const projectsData = [
  {
    id: 1,
    type: "web",
    title: "Gestion des pointages",
    description:
      "Application web de gestion des pointages et des congés des employés permettant de suivre en temps réel les heures de travail, les absences et les demandes de congés. Elle automatise le calcul du temps travaillé, la gestion des rattrapages d’heures et améliore la transparence du suivi des employés.Le système enregistre les connexions et déconnexions afin de calculer automatiquement la durée de travail quotidienne et hebdomadaire. Il gère également les absences (planifiées ou détectées), les demandes de congés avec suivi de statut, ainsi que le rattrapage des heures manquantes. Il s’appuie sur des procédures stockées, des triggers et des vues pour optimiser le traitement et l’analyse des données.",
    tags: ["Node.js", "Next.js", "Express", "MySQL"],
    screenshot: "web-gestion-des-pointages-des-employes/connex.PNG",
    screenshots: [
      "web-gestion-des-pointages-des-employes/connex.PNG",
      "web-gestion-des-pointages-des-employes/tabeauDeBord.PNG",
      "web-gestion-des-pointages-des-employes/absence.PNG",
      "web-gestion-des-pointages-des-employes/penalite.PNG",
      "web-gestion-des-pointages-des-employes/conge1.PNG",
    ],
    codeUrl: "https://github.com/MiarinaCoder/gestionDePointageConge.git",
  },
  {
    id: 2,
    type: "mobile",
    title: "Gestion de factures (mobile)",
    description:
      "Application mobile de gestion de factures permettant de répartir automatiquement les coûts d’eau et d’électricité entre plusieurs consommateurs selon leur consommation. Elle facilite l’envoi des parts par message et centralise l’historique des factures pour un suivi clair et transparent des charges.",
    tags: ["Flutter", "Firebase", "SQlite"],
    screenshot: "mobile-gestion-facture/1.jpg",
    screenshots: [
      "mobile-gestion-facture/1.jpg",
      "mobile-gestion-facture/4.jpg",
      "mobile-gestion-facture/3.jpg",
      "mobile-gestion-facture/5.jpg",
      "mobile-gestion-facture/6.jpg",
      "mobile-gestion-facture/7.jpg",
    ],
    codeUrl: null,
    privateRepo: true, // Projet privé : pas de lien GitHub public
  },
  {
    id: 3,
    type: "web",
    title: "Gestion des soutenances",
    description:
      "Application web destinée à gérer les soutenances des étudiants en centralisant les informations relatives aux étudiants, professeurs, organismes d’accueil et jurys. Elle permet d’enregistrer et de suivre les soutenances, les notes obtenues ainsi que les membres du jury pour chaque année universitaire. Le système intègre des fonctionnalités de recherche d’étudiants, de suivi des effectifs par niveau d’étude, de consultation des résultats et de génération automatique des procès-verbaux de soutenance au format PDF, facilitant ainsi la gestion administrative et académique des soutenances.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    screenshot: "web-gestion-des-soutenances/liste-etudiants.png",
    screenshots: [
      "web-gestion-des-soutenances/liste-etudiants.png",
      "web-gestion-des-soutenances/liste-prof.png",
      "web-gestion-des-soutenances/liste-organisme.png",
      "web-gestion-des-soutenances/soutenance1.png",
      "web-gestion-des-soutenances/liste-entre-deux-dates.png",
      "web-gestion-des-soutenances/liste-non-soutenus.png",
    ],
    codeUrl: "https://github.com/MiarinaCoder/GestionDeNoteAvecPHP_HTML_CSS.git",
  },
  {
    id: 4,
    type: "mobile",
    title: "gestion de rendez-vous avec directeur",
    description:
      "Application mobile de gestion de rendez-vous permettant aux utilisateurs de soumettre des demandes de rendez-vous auprès d’un directeur. Le directeur peut consulter, modifier, accepter ou refuser les demandes. Les rendez-vous acceptés sont ensuite affichés dans un calendrier intégré, permettant un suivi clair et organisé des engagements.",
    tags: ["Flutter", "PHP", "MySQL"],
    screenshot: "mobile-gestion-rendez-vous/1-login.jpeg",
    screenshots: [
      "mobile-gestion-rendez-vous/1-login.jpeg",
      "mobile-gestion-rendez-vous/2-page-accueil-avec-nom.jpeg",
      "mobile-gestion-rendez-vous/3-menu.jpeg",
      "mobile-gestion-rendez-vous/4-liste-rdv-vue-de-createur-de-rdv.jpeg",
      "mobile-gestion-rendez-vous/5-creer-rdv.jpeg",
      "mobile-gestion-rendez-vous/6-login-directeur.jpeg",
      "mobile-gestion-rendez-vous/8-rdv-attente.jpeg",
      "mobile-gestion-rendez-vous/9-rdv-accepte.jpeg",
      "mobile-gestion-rendez-vous/calendrier-pour-directeur.jpeg",
    ],
    codeUrl: "https://github.com/MiarinaCoder/flutter_gestionRendezVous.git",
  },
  {
    id: 5,
    type: "web",
    title: "Portfolio",
    description:
      "Portfolio web présentant une sélection de projets complets, web et mobile, accompagnés de captures d'écran, descriptions métier et fiches techniques. Il permet aux recruteurs et clients d'évaluer rapidement les compétences techniques à travers des réalisations concrètes, chaque projet étant détaillé avec son contexte d'utilisation, ses fonctionnalités principales, ses choix d'architecture et les technologies employées. Le site s'organise autour de quatre sections accessibles par ancrage : À propos, Compétences, Projets et Contact. Chaque fiche projet met en valeur visuellement les captures d'écran grâce à des mockups responsives (ordinateur portable et smartphone) reproduisant l'environnement d'utilisation réel, avec une galerie modale permettant de consulter chaque interface en grand format. L'interface privilégie la lisibilité et une navigation rapide afin de faciliter l'évaluation du travail présenté.",
    tags: ["react", "EmailJS", "CSS"],
    screenshot: "web-portfolio/1-about.png",
    screenshots: [
      "web-portfolio/1-about.png",
      "web-portfolio/2-competences.png",
      "web-portfolio/3-projets.png",
      "web-portfolio/4-contact.png",
    ],
    codeUrl: "#",
  },
];

const FILTERS = ["Tous", "Web", "Mobile"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [modalProject, setModalProject] = useState(null);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalIsMobile, setModalIsMobile] = useState(false);

  const filtered = projectsData.filter((p) =>
    activeFilter === "Tous" ? true : p.type === activeFilter.toLowerCase(),
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") return setModalProject(null);
      if (!modalProject) return;
      if (e.key === "ArrowLeft") setModalIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setModalIndex((i) => i + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalProject]);

  useEffect(() => {
    if (!modalProject) return;
    const check = () => setModalIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [modalProject]);

  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  useEffect(() => setModalIndex(0), [modalProject]);

  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <h2 className="projects__title">Projets</h2>
      </div>

      <div
        className="projects__filters"
        role="list"
        aria-label="Filtrer les projets"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            role="listitem"
            className={`projects__filter-btn${activeFilter === f ? " projects__filter-btn--active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} openModal={openModal} />
        ))}
      </div>

      {modalProject && (
        <Suspense fallback={<div className="modal-loading">Chargement...</div>}>
          <ProjectModal
            project={modalProject}
            index={modalIndex}
            setIndex={setModalIndex}
            onClose={closeModal}
            modalIsMobile={modalIsMobile}
            isSoutenances={modalProject.id === 3}
          />
        </Suspense>
      )}
    </section>
  );
};

export default Projects;
