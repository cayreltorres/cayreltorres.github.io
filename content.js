// ====== TOUT TON CONTENU EST ICI : modifie uniquement ce fichier ======
// Contenu issu de ton CV (version espagnole). Les passages marqués "À COMPLÉTER" sont à enrichir par toi.
window.CONTENT = {
  name: "Camilo Cayrel Torres",
  school: "ENSEEIHT",
  year: "MF2E",
  linkedin: "https://www.linkedin.com/in/camilo-cayrel-torres-390929335",
  cv: { fr: "assets/CV_FR.pdf", en: "assets/CV_EN.pdf" },
  photo: "assets/photo_profil.jpeg",

  /* ======================= FRANÇAIS ======================= */
  fr: {
    nav: { home: "Accueil", education: "Formation", projects: "Projets", mobility: "Mobilité",
           civic: "Engagement", sports: "Sports", career: "Carrière" },
    cvLabel: "CV (FR)",
    home: {
      title: "Bonjour, je suis Camilo Cayrel Torres",
      subtitle: "Élève-ingénieur à l'ENSEEIHT (Toulouse INP) — Mécanique des Fluides, Énergétique et Environnement",
      intro: "Je me spécialise en mécanique des fluides, énergie et environnement. J'ai une formation en dynamique des fluides, transferts thermiques et calcul numérique (CFD, Python, MATLAB), ainsi qu'une base en génie électrique et électronique. Je recherche un stage de recherche de Master 1 du 7 juin au 10 septembre 2027 dans un laboratoire de l'UNAM (Mexique), afin d'appliquer et d'approfondir mes compétences dans le domaine des énergies renouvelables.",
      skillsTitle: "Compétences clés",
      skills: ["ANSYS Fluent", "CFD", "Python", "MATLAB", "EDP", "Différences finies",
               "Turbulence", "Transferts thermiques", "Électronique de puissance", "Traitement du signal"],
      interestsTitle: "Centres d'intérêt",
      interests: "Sport (VTT, vélo, course à pied), musique (violon, contrebasse, guitare, piano, jazz), géopolitique et écologie, voyages en autonomie.",
      languagesTitle: "Langues",
      languages: "Français (natif) · Espagnol (natif) · Anglais (professionnel complet) · Italien (notions)"
    },
    education: {
      title: "Formation",
      intro: "Du cycle préparatoire à l'école d'ingénieurs, avec une orientation vers la mécanique des fluides appliquée aux énergies renouvelables.",
      items: [
        { title: "Diplôme d'ingénieur — Mécanique des Fluides, Énergétique et Environnement · ENSEEIHT, Toulouse INP",
          date: "09/2025 – présent",
          text: "2e année : changement d'orientation motivé par l'intérêt pour la dynamique des fluides appliquée aux énergies renouvelables. 1re année : spécialisation Électronique, Génie Électrique et Automatique. Bureaux d'études, projets numériques et de conception, travaux pratiques." },
        { title: "Cycle préparatoire d'ingénieur · Prépa t², Toulouse INP (Labège)",
          date: "09/2023 – 06/2025",
          text: "Cycle préparatoire intégré, avec notamment un projet d'étude sur les centrales marémotrices et la transition énergétique." }
      ]
    },
    projectsTitle: "Projets (du plus récent au plus ancien)",
    projects: [
      { id: "projet-numerique-recherche", sort: "2027-06", date: "02/2027 – 06/2027 (à venir)",
        title: "Projets numérique et de recherche en mécanique des fluides",
        summary: "Programme de deuxième année à l'ENSEEIHT : un projet numérique et un projet de recherche en mécanique des fluides.",
        tags: ["Mécanique des fluides", "CFD", "Recherche"],
        context: "Programme de deuxième année à l'ENSEEIHT : un projet numérique et un projet de recherche en mécanique des fluides (février – juin 2027).",
        role: "", methods: "", results: "", lessons: "",   // À COMPLÉTER quand le projet avance
        images: [], link: "" },
      { id: "objet-connecte", sort: "2026-05", date: "03/2026 – 05/2026",
        title: "Conception d'un objet connecté : capteur de fréquence cardiaque",
        summary: "Projet de conception d'un dispositif connecté à l'ENSEEIHT : un capteur de fréquence cardiaque.",
        tags: ["Électronique", "Objet connecté", "Capteur"],
        context: "Projet de conception d'un objet connecté à l'ENSEEIHT : conception d'un capteur de fréquence cardiaque.",
        role: "", methods: "", results: "", lessons: "",   // À COMPLÉTER : ton rôle, tes choix techniques, résultats
        images: [], link: "" },
      { id: "expedition-danube", sort: "2025-07", date: "07/2025",
        title: "Expédition à vélo en solitaire et étude de terrain le long du Danube",
        summary: "Un mois de la source du Danube jusqu'à Budapest, financé par la Fondation Zellidja, entre aventure et étude de terrain.",
        tags: ["Vélo", "Étude de terrain", "Ressources naturelles", "Fondation Zellidja"],
        context: "Expédition à vélo en solitaire d'un mois, de la source du Danube jusqu'à Budapest, financée par la Fondation Zellidja.",
        role: "Projet mené seul : préparation, itinéraire, déplacement et étude de terrain.",
        methods: "Étude de terrain sur l'exploitation des ressources naturelles le long du fleuve, combinée à l'aventure à vélo.",
        results: "", lessons: "",   // À COMPLÉTER : constats de l'étude, rapport Zellidja, ce que tu en retiens
        images: [], link: "" },
      { id: "centrales-maremotrices", sort: "2025-04", date: "03/2025 – 04/2025",
        title: "Centrales marémotrices et transition énergétique (Prépa t²)",
        summary: "Modèle Python du niveau d'eau, maquette physique bassin/turbine et analyse des cycles d'exploitation.",
        tags: ["Python", "Jupyter", "Énergies renouvelables", "Maquette"],
        context: "Projet d'étude sur les centrales marémotrices dans le cadre de la transition énergétique, en Prépa t².",
        role: "",
        methods: "Modèle sous Jupyter Notebook (Python) pour simuler le niveau d'eau et optimiser le rendement. Conception d'une maquette physique (bassin / turbine) et analyse des contraintes mécaniques (couple résistant). Analyse des cycles d'exploitation (pompage, simple / double effet) et des impacts environnementaux.",
        results: "", lessons: "",   // À COMPLÉTER : résultats du modèle, ce que tu as appris
        images: [], link: "" }
    ],
    mobility: {
      title: "Mobilité internationale",
      intro: "Un projet de recherche au Mexique et une expérience de voyage en autonomie à travers l'Europe.",
      items: [
        { title: "Stage de recherche de Master 1 — UNAM (Mexique)", date: "07/06/2027 – 10/09/2027 (projet)",
          text: "Je recherche un stage de recherche dans un laboratoire de l'UNAM pour appliquer mes compétences en mécanique des fluides et calcul numérique aux énergies renouvelables, et approfondir ce domaine." },
        { title: "Expédition à vélo le long du Danube", date: "07/2025",
          text: "Un mois en autonomie, de la source du Danube jusqu'à Budapest, financé par la Fondation Zellidja." },
        { title: "Voyage d'un mois à travers l'Europe", date: "été 2024",
          text: "Voyage planifié et réalisé en autonomie, autofinancé." }
      ]
    },
    civic: {
      title: "Engagement citoyen & développement durable",
      intro: "Une conscience globale nourrie par l'actualité, l'écologie et les énergies renouvelables.",
      items: [
        { title: "Conscience globale", date: "au quotidien",
          text: "Je lis l'actualité tous les jours, avec un intérêt particulier pour la géopolitique et l'écologie." },
        { title: "Énergies renouvelables", date: "",
          text: "Mon orientation en mécanique des fluides est motivée par les énergies renouvelables : projet sur les centrales marémotrices, puis projet de stage à l'UNAM." },
        { title: "Ressources naturelles le long du Danube", date: "07/2025",
          text: "Étude de terrain sur l'exploitation des ressources naturelles, menée pendant mon expédition à vélo." }
      ]
    },
    sports: {
      title: "Sports & musique",
      intro: "Le sport et la musique sont deux piliers de mon équilibre.",
      items: [
        { title: "VTT, vélo et course à pied", date: "",
          text: "Entraîneur de VTT certifié, cycliste et coureur à pied." },
        { title: "Musique et jazz", date: "",
          text: "Violoniste, contrebassiste, guitariste et pianiste. J'aime particulièrement le jazz." }
      ]
    },
    career: {
      title: "Développement de carrière",
      intro: "Stages et expériences professionnelles, et projet professionnel.",
      items: [
        { title: "Stagiaire de production — CIRTEM (Sainte-Foy-d'Aigrefeuille)", date: "06/2026 – 07/2026",
          text: "Stage de 8 semaines dans l'unité de production de CIRTEM, entreprise spécialisée en électronique de puissance. Montage et câblage de modules électriques, travail de magasinier, relecture des fiches d'instructions de montage et tests de cartes électroniques." },
        { title: "Stagiaire en médiation scientifique — CERFACS (Toulouse)", date: "04/2025 – 06/2025",
          text: "Centre Européen de Recherche et de Formation Avancée en Calcul Scientifique, au sein de l'équipe de recherche climat et environnement GLOBC. Création de supports de présentation pour un public scientifique et d'un notebook pédagogique Python sur l'attracteur de Lorenz." },
        { title: "Employé de cuisine — Buron de l'Aubrac (Aubrac)", date: "07/2023",
          text: "Emploi saisonnier en restaurant." },
        { title: "Projet professionnel", date: "2027 →",
          text: "Mécanique des fluides, énergie et environnement : d'abord un stage de recherche de Master 1 à l'UNAM sur les énergies renouvelables, pour approfondir ce domaine." }
      ]
    },
    labels: { back: "← Retour aux projets", context: "Contexte", role: "Mon rôle", methods: "Méthodes & outils",
              results: "Résultats", lessons: "Enseignements", link: "Voir le projet", notFound: "Page introuvable." },
    copyright: "© Camilo Cayrel Torres — ENSEEIHT"
  },

  /* ======================= ENGLISH ======================= */
  en: {
    nav: { home: "Home", education: "Education", projects: "Projects", mobility: "Mobility",
           civic: "Engagement", sports: "Sports", career: "Career" },
    cvLabel: "CV (EN)",
    home: {
      title: "Hi, I'm Camilo Cayrel Torres",
      subtitle: "Engineering student at ENSEEIHT (Toulouse INP) — Fluid Mechanics, Energy and Environment",
      intro: "I specialise in fluid mechanics, energy and the environment. My training covers fluid dynamics, heat transfer and numerical computation (CFD, Python, MATLAB), along with a foundation in electrical and electronic engineering. I am looking for a Master 1 research internship from 7 June to 10 September 2027 in a UNAM research laboratory (Mexico), to apply and deepen my skills in renewable energy.",
      skillsTitle: "Key skills",
      skills: ["ANSYS Fluent", "CFD", "Python", "MATLAB", "PDEs", "Finite differences",
               "Turbulence", "Heat transfer", "Power electronics", "Signal processing"],
      interestsTitle: "Interests",
      interests: "Sports (mountain biking, cycling, running), music (violin, double bass, guitar, piano, jazz), geopolitics and ecology, independent travel.",
      languagesTitle: "Languages",
      languages: "French (native) · Spanish (native) · English (full professional proficiency) · Italian (basic)"
    },
    education: {
      title: "Education",
      intro: "From the preparatory cycle to engineering school, with a focus on fluid mechanics applied to renewable energy.",
      items: [
        { title: "Engineering degree — Fluid Mechanics, Energy and Environment · ENSEEIHT, Toulouse INP",
          date: "09/2025 – present",
          text: "2nd year: change of track motivated by an interest in fluid dynamics applied to renewable energy. 1st year: specialisation in Electronics, Electrical Engineering and Automation. Design offices, digital and design projects, practical work." },
        { title: "Engineering preparatory cycle · Prépa t², Toulouse INP (Labège)",
          date: "09/2023 – 06/2025",
          text: "Integrated preparatory cycle, including a study project on tidal power plants and the energy transition." }
      ]
    },
    projectsTitle: "Projects (most recent first)",
    projects: [
      { id: "projet-numerique-recherche", sort: "2027-06", date: "02/2027 – 06/2027 (upcoming)",
        title: "Numerical and research projects in fluid mechanics",
        summary: "Second-year programme at ENSEEIHT: a numerical project and a research project in fluid mechanics.",
        tags: ["Fluid mechanics", "CFD", "Research"],
        context: "Second-year programme at ENSEEIHT: a numerical project and a research project in fluid mechanics (February – June 2027).",
        role: "", methods: "", results: "", lessons: "",
        images: [], link: "" },
      { id: "objet-connecte", sort: "2026-05", date: "03/2026 – 05/2026",
        title: "Design of a connected device: heart-rate sensor",
        summary: "Design project of a connected device at ENSEEIHT: a heart-rate sensor.",
        tags: ["Electronics", "Connected device", "Sensor"],
        context: "Design project of a connected object at ENSEEIHT: design of a heart-rate sensor.",
        role: "", methods: "", results: "", lessons: "",
        images: [], link: "" },
      { id: "expedition-danube", sort: "2025-07", date: "07/2025",
        title: "Solo cycling expedition and field study along the Danube",
        summary: "One month from the source of the Danube to Budapest, funded by the Zellidja Foundation, combining adventure and field research.",
        tags: ["Cycling", "Field study", "Natural resources", "Zellidja Foundation"],
        context: "One-month solo cycling expedition from the source of the Danube to Budapest, funded by the Zellidja Foundation.",
        role: "Solo project: preparation, route, travel and field study.",
        methods: "Field study on the exploitation of natural resources along the river, combined with the cycling adventure.",
        results: "", lessons: "",
        images: [], link: "" },
      { id: "centrales-maremotrices", sort: "2025-04", date: "03/2025 – 04/2025",
        title: "Tidal power plants and the energy transition (Prépa t²)",
        summary: "Python water-level model, physical basin/turbine mock-up and analysis of operating cycles.",
        tags: ["Python", "Jupyter", "Renewable energy", "Mock-up"],
        context: "Study project on tidal power plants and the energy transition, at Prépa t².",
        role: "",
        methods: "Jupyter Notebook (Python) model to simulate the water level and optimise efficiency. Design of a physical mock-up (basin / turbine) and analysis of mechanical constraints (resisting torque). Analysis of operating cycles (pumping, single / double effect) and environmental impacts.",
        results: "", lessons: "",
        images: [], link: "" }
    ],
    mobility: {
      title: "International mobility",
      intro: "A research project in Mexico and independent travel experience across Europe.",
      items: [
        { title: "Master 1 research internship — UNAM (Mexico)", date: "7 Jun 2027 – 10 Sep 2027 (planned)",
          text: "I am looking for a research internship in a UNAM laboratory to apply my skills in fluid mechanics and numerical computation to renewable energy, and to deepen this field." },
        { title: "Cycling expedition along the Danube", date: "07/2025",
          text: "One month of independent travel, from the source of the Danube to Budapest, funded by the Zellidja Foundation." },
        { title: "One-month trip across Europe", date: "summer 2024",
          text: "Independently planned and carried out, self-funded." }
      ]
    },
    civic: {
      title: "Civic engagement & sustainability",
      intro: "A global awareness fed by current affairs, ecology and renewable energy.",
      items: [
        { title: "Global awareness", date: "daily",
          text: "I read the news every day, with a particular focus on geopolitics and ecology." },
        { title: "Renewable energy", date: "",
          text: "My move towards fluid mechanics is driven by renewable energy: a tidal power study project, then my internship project at UNAM." },
        { title: "Natural resources along the Danube", date: "07/2025",
          text: "Field study on the exploitation of natural resources, carried out during my cycling expedition." }
      ]
    },
    sports: {
      title: "Sports & music",
      intro: "Sport and music are two pillars of my balance.",
      items: [
        { title: "Mountain biking, cycling and running", date: "",
          text: "Certified mountain-bike coach, cyclist and runner." },
        { title: "Music and jazz", date: "",
          text: "Violinist, double bassist, guitarist and pianist. I especially enjoy jazz." }
      ]
    },
    career: {
      title: "Career development",
      intro: "Internships and work experience, and career project.",
      items: [
        { title: "Production intern — CIRTEM (Sainte-Foy-d'Aigrefeuille)", date: "06/2026 – 07/2026",
          text: "8-week internship in the production unit of CIRTEM, a company specialising in power electronics. Assembly and wiring of electrical modules, warehouse work, review of assembly instruction sheets and testing of electronic boards." },
        { title: "Science communication intern — CERFACS (Toulouse)", date: "04/2025 – 06/2025",
          text: "European Centre for Research and Advanced Training in Scientific Computing, in the GLOBC climate and environment research team. Creation of presentation materials for a scientific audience and of an educational Python notebook on the Lorenz attractor." },
        { title: "Restaurant kitchen staff — Buron de l'Aubrac (Aubrac)", date: "07/2023",
          text: "Seasonal restaurant job." },
        { title: "Career project", date: "2027 →",
          text: "Fluid mechanics, energy and environment: first a Master 1 research internship at UNAM on renewable energy, to deepen this field." }
      ]
    },
    labels: { back: "← Back to projects", context: "Context", role: "My role", methods: "Methods & tools",
              results: "Results", lessons: "Lessons learned", link: "See the project", notFound: "Page not found." },
    copyright: "© Camilo Cayrel Torres — ENSEEIHT"
  }
};
