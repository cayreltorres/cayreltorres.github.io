// ====== TOUT TON CONTENU EST ICI : modifie uniquement ce fichier ======
window.CONTENT = {
  name: "Camilo Cayrel Torres",
  school: "ENSEEIHT",
  year: "MF2E",                                    // ta filière / année
  linkedin: "https://www.linkedin.com/in/camilo-cayrel-torres-390929335",
  cv: { fr: "assets/CV_FR.pdf", en: "assets/CV_EN.pdf" },
  photo: "assets/photo.jpg",                      // mets ta photo dans le dossier assets

  fr: {
    nav: { home: "Accueil", projects: "Projets", mobility: "Mobilité", civic: "Engagement", sports: "Sports", career: "Carrière" },
    cvLabel: "CV (FR)",
    home: {
      title: "Bonjour, je suis Prénom Nom",
      subtitle: "Étudiant ingénieur à l'ENSEEIHT — filière ...",
      intro: "Écris ici 3-4 phrases : qui tu es, ce que tu étudies, ce que tu cherches (stage, mobilité, emploi).",
      skillsTitle: "Compétences clés",
      skills: ["Python", "C / C++", "Matlab", "Gestion de projet"],
      interestsTitle: "Centres d'intérêt",
      interests: "Musique, randonnée, ..."
    },
    projectsTitle: "Projets (du plus récent au plus ancien)",
    projects: [
      { id: "projet-1", date: "2026", title: "Titre du projet 1", summary: "Une phrase de résumé.",
        tags: ["Python", "IA"], context: "Contexte / problème.", role: "Ton rôle.", methods: "Méthodes et outils.",
        results: "Résultats.", lessons: "Ce que tu as appris.", images: [], link: "" },
      { id: "projet-2", date: "2025", title: "Titre du projet 2", summary: "Une phrase de résumé.",
        tags: ["C", "Systèmes embarqués"], context: "", role: "", methods: "", results: "", lessons: "", images: [], link: "" }
    ],
    mobility: {
      title: "Mobilité internationale",
      intro: "Présente ton projet de mobilité (ou ta mobilité réalisée).",
      items: [
        { title: "Pays / Université / Entreprise", date: "2027", text: "Description, motivations, apprentissages." }
      ]
    },
    civic: {
      title: "Engagement citoyen & développement durable",
      intro: "Associations, bénévolat, actions écoresponsables.",
      items: [
        { title: "Nom de l'association", date: "2025-2026", text: "Ton rôle et ce que tu as réalisé." }
      ]
    },
    sports: {
      title: "Sports & autres activités",
      intro: "Sports pratiqués, niveau, compétitions, activités artistiques.",
      items: [
        { title: "Sport / activité", date: "depuis 2015", text: "Niveau, résultats, ce que ça t'apporte." }
      ]
    },
    career: {
      title: "Développement de carrière",
      intro: "Projet professionnel (PPP), stages, rôles modèles et projets de mobilité envisagés.",
      items: [
        { title: "Stage S6 — Entreprise", date: "2026", text: "Mission, contexte, résultats chiffrés, compétences acquises (méthode STAR)." },
        { title: "Stage S8 — Entreprise", date: "2027", text: "Mission, contexte, résultats chiffrés, compétences acquises (méthode STAR)." },
        { title: "Rôle modèle 1 — Métier / profil", date: "", text: "Ce que ce parcours t'apprend, compétences clés, lien avec ton projet." },
        { title: "Mon projet professionnel (PPP)", date: "", text: "Ta proposition de valeur unique : présent, bref passé, futur visé." }
      ]
    },
    labels: { back: "← Retour aux projets", context: "Contexte", role: "Mon rôle", methods: "Méthodes & outils",
              results: "Résultats", lessons: "Enseignements", link: "Voir le projet", notFound: "Page introuvable." },
    copyright: "© Prénom Nom — ENSEEIHT"
  },

  en: {
    nav: { home: "Home", projects: "Projects", mobility: "Mobility", civic: "Engagement", sports: "Sports", career: "Career" },
    cvLabel: "CV (EN)",
    home: {
      title: "Hi, I'm First Last",
      subtitle: "Engineering student at ENSEEIHT — ... track",
      intro: "Write 3-4 sentences here: who you are, what you study, what you are looking for.",
      skillsTitle: "Key skills",
      skills: ["Python", "C / C++", "Matlab", "Project management"],
      interestsTitle: "Interests",
      interests: "Music, hiking, ..."
    },
    projectsTitle: "Projects (most recent first)",
    projects: [
      { id: "projet-1", date: "2026", title: "Project 1 title", summary: "One-sentence summary.",
        tags: ["Python", "AI"], context: "Context / problem.", role: "Your role.", methods: "Methods and tools.",
        results: "Results.", lessons: "What you learned.", images: [], link: "" },
      { id: "projet-2", date: "2025", title: "Project 2 title", summary: "One-sentence summary.",
        tags: ["C", "Embedded systems"], context: "", role: "", methods: "", results: "", lessons: "", images: [], link: "" }
    ],
    mobility: {
      title: "International mobility",
      intro: "Describe your mobility project (or completed mobility).",
      items: [{ title: "Country / University / Company", date: "2027", text: "Description, motivations, lessons." }]
    },
    civic: {
      title: "Civic engagement & sustainability",
      intro: "Associations, volunteering, eco-friendly actions.",
      items: [{ title: "Association name", date: "2025-2026", text: "Your role and achievements." }]
    },
    sports: {
      title: "Sports & other activities",
      intro: "Sports, level, competitions, artistic activities.",
      items: [{ title: "Sport / activity", date: "since 2015", text: "Level, results, what it brings you." }]
    },
    career: {
      title: "Career development",
      intro: "Career project (PPP), internships, role models and planned mobility projects.",
      items: [
        { title: "S6 internship — Company", date: "2026", text: "Mission, context, quantified results, skills gained (STAR method)." },
        { title: "S8 internship — Company", date: "2027", text: "Mission, context, quantified results, skills gained (STAR method)." },
        { title: "Role model 1 — Job / profile", date: "", text: "What this path teaches you, key skills, link with your project." },
        { title: "My career project (PPP)", date: "", text: "Your unique value proposition: present, brief past, targeted future." }
      ]
    },
    labels: { back: "← Back to projects", context: "Context", role: "My role", methods: "Methods & tools",
              results: "Results", lessons: "Lessons learned", link: "See the project", notFound: "Page not found." },
    copyright: "© First Last — ENSEEIHT"
  }
};
