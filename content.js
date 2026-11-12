// ====== TOUT TON CONTENU EST ICI : modifie uniquement ce fichier ======
window.CONTENT = {
  name: "Camilo Cayrel Torres",
  school: "ENSEEIHT",
  year: "MF2E",
  linkedin: "https://www.linkedin.com/in/camilo-cayrel-torres-390929335",
  cv: { fr: "assets/CV_FR.pdf", en: "assets/CV_EN.pdf" },
  photo: "assets/photo.jpg",
  contact: { accessKey: "19e96e25-0678-4dc6-b807-dbaed064b76b" },
  showFlags: true,

  // Déclaration des images par section (dans assets/)
  photos: {
    // --- Projets ---
    "projet-numerique-recherche": ["assets/projets/numerique.jpg"],
    "objet-connecte":            ["assets/projets/objet-connecte-1.jpg"],
    "expedition-danube":         ["assets/projets/danube-1.jpg"],
    "centrales-maremotrices":    ["assets/projets/maremotrice-1.jpg"],
    // --- Mobilité ---
    "mob-unam":                  ["assets/mobilite/unam-mexique.jpg"],
    "mob-danube":                ["assets/projets/danube-1.jpg"],
    "mob-europe":                ["assets/mobilite/europe-2024-1.jpg"],
    "mob-future":                ["assets/mobilite/international-projets.jpg"],
    // --- Engagement ---
    "civ-monde":                 ["assets/engagement/conscience-globale.jpg"],
    "civ-energies":              ["assets/projets/maremotrice-2.jpg"],
    "civ-danube":                ["assets/projets/danube-3.jpg"],
    // --- Activités ---
    "hob-sport":                 ["assets/loisirs/velo-1.jpg"],
    "hob-music":                 ["assets/loisirs/musique-1.jpg"],
    "hob-travel":                ["assets/loisirs/voyage-autonomie.jpg"]
  },

  interestImages: {
    sport:   "assets/interets/sport.jpg",
    music:   "assets/interets/musique.jpg",
    travel:  "assets/interets/voyages.jpg",
    world:   "assets/interets/actualite.jpg"
  },

  /* ======================= FRANÇAIS ======================= */
  fr: {
    nav: { home: "Accueil", education: "Ingénierie", projects: "Projets", mobility: "Mobilité",
           civic: "Engagement", hobbies: "Activités", career: "Carrière", contact: "Contact" },
    cvLabel: "CV (FR)",
    home: {
      title: "Bonjour, je suis Camilo Cayrel Torres",
      subtitle: "Élève-ingénieur à l'ENSEEIHT (Toulouse INP) — Mécanique des Fluides, Énergétique et Environnement",
      intro: "Je me spécialise en mécanique des fluides, énergie et environnement. J'ai une formation en dynamique des fluides, transferts thermiques et calcul numérique (CFD, Python, MATLAB), ainsi qu'une base en génie électrique et électronique. Je recherche un stage de recherche de Master 1 du 7 juin au 10 septembre 2027 dans un laboratoire de l'UNAM (Mexique), afin d'appliquer et d'approfondir mes compétences dans le domaine des énergies renouvelables.",
      skillsTitle: "Compétences clés",
      skills: ["ANSYS Fluent", "CFD", "Python", "MATLAB", "EDP", "Différences finies",
               "Turbulence", "Transferts thermiques", "Électronique de puissance", "Traitement du signal"],
      interestsTitle: "Centres d'intérêt",
      more: "En savoir plus →",
      interests: [
        { id: "sport", href: "#hobbies", icon: "🚵", title: "Sport & Dépassement", text: "Entraîneur de VTT certifié, cycliste et coureur à pied." },
        { id: "music", href: "#hobbies", icon: "🎻", title: "Musique & Expression", text: "Violon, contrebasse, guitare et piano. Passion pour le jazz." },
        { id: "travel", href: "#hobbies", icon: "🧭", title: "Exploration & Voyagisme alternatif", text: "Voyages en autonomie et hors des sentiers battus à travers l'Europe et le long du Danube." },
        { id: "world", href: "#civic", icon: "🌍", title: "Regard sur le monde", text: "Lecture quotidienne de l'actualité avec un intérêt pour la géopolitique et l'écologie." }
      ],
      languagesTitle: "Langues",
      languages: [
        { flag: "🇫🇷", name: "Français", level: "Natif" },
        { flag: "🇪🇸", name: "Espagnol", level: "Natif" },
        { flag: "🇬🇧", name: "Anglais", level: "Professionnel complet" },
        { flag: "🇮🇹", name: "Italien", level: "Notions" }
      ]
    },
    education: {
      title: "Ingénierie & Formation",
      intro: "Mon parcours académique et mes domaines d'expertise scientifique et technique.",
      sections: [
        {
          title: "Domaines d'expertise & Ingénierie",
          items: [
            { title: "Mécanique des Fluides & Énergétique", text: "Dynamique des fluides compressibles/incompressibles, écoulements turbulents, transferts thermiques et thermodynamique appliquée." },
            { title: "Modélisation numérique & Calcul (CFD)", text: "Résolution d'EDP, méthodes des différences finies, modélisation sous ANSYS Fluent, scripts Python & simulations MATLAB." },
            { title: "Systèmes Énergétiques & Électronique", text: "Bases solides en génie électrique, électronique de puissance, traitement du signal et conversion d'énergie." }
          ]
        },
        {
          title: "Parcours académique",
          items: [
            { title: "Diplôme d'ingénieur — MF2E · ENSEEIHT (Toulouse INP)", date: "09/2025 – présent",
              text: "2e année : Mécanique des Fluides, Énergétique et Environnement (orientation énergies renouvelables). 1re année : Électronique, Génie Électrique et Automatique." },
            { title: "Cycle préparatoire d'ingénieur · Prépa t², Toulouse INP", date: "09/2023 – 06/2025",
              text: "Formation scientifique polyvalente avec projet d'étude appliqué aux centrales marémotrices et à la transition énergétique." }
          ]
        }
      ]
    },
    projectsTitle: "Projets d'ingénierie & de recherche",
    projects: [
      { id: "projet-numerique-recherche", sort: "2027-06", date: "02/2027 – 06/2027 (à venir)",
        title: "Projets numérique et de recherche en mécanique des fluides",
        summary: "Programme de deuxième année à l'ENSEEIHT : un projet numérique et un projet de recherche en mécanique des fluides.",
        tags: ["Mécanique des fluides", "CFD", "Recherche"],
        context: "Programme de deuxième année à l'ENSEEIHT (février – juin 2027).",
        role: "", methods: "", results: "", lessons: "", images: [], link: "" },
      { id: "objet-connecte", sort: "2026-05", date: "03/2026 – 05/2026",
        title: "Conception d'un objet connecté : capteur de fréquence cardiaque",
        summary: "Projet de conception d'un dispositif connecté à l'ENSEEIHT : un capteur de fréquence cardiaque.",
        tags: ["Électronique", "Objet connecté", "Capteur"],
        context: "Projet d'électronique et systèmes embarqués à l'ENSEEIHT.",
        role: "", methods: "", results: "", lessons: "", images: [], link: "" },
      { id: "expedition-danube", sort: "2025-07", date: "07/2025",
        title: "Expédition à vélo en solitaire et étude de terrain le long du Danube",
        summary: "Un mois de la source du Danube jusqu'à Budapest, financé par la Fondation Zellidja, entre aventure et étude de terrain.",
        tags: ["Vélo", "Étude de terrain", "Ressources naturelles", "Zellidja"],
        context: "Expédition sponsorisée d'un mois en autonomie.",
        role: "Chef de projet, réalisation de l'itinéraire et étude de terrain.",
        methods: "Étude d'impact environnemental et gestion des ressources en eau le long du fleuve.",
        results: "", lessons: "", images: [], link: "" },
      { id: "centrales-maremotrices", sort: "2025-04", date: "03/2025 – 04/2025",
        title: "Centrales marémotrices et transition énergétique (Prépa t²)",
        summary: "Modèle Python du niveau d'eau, maquette physique bassin/turbine et analyse des cycles d'exploitation.",
        tags: ["Python", "Jupyter", "Énergies renouvelables", "Maquette"],
        context: "Projet d'étude sur les énergies marines renouvelables.",
        role: "", methods: "Modélisation sous Python (Jupyter) et réalisation d'une maquette d'essai.",
        results: "", lessons: "", images: [], link: "" }
    ],
    mobility: {
      title: "Mobilité internationale",
      intro: "Entre expériences d'itinérance en autonomie et projets de recherche à l'étranger.",
      sections: [
        {
          title: "Expériences réalisées",
          items: [
            { id: "mob-danube", href: "#/projects/expedition-danube", title: "Expédition Danube — Traversée de l'Europe centrale", date: "07/2025",
              text: "Traversée de l'Allemagne, Autriche, Slovénie et Hongrie à vélo en solitaire (1 mois), avec bourse d'étude de terrain Zellidja." },
            { id: "mob-europe", title: "Voyage en autonomie à travers l'Europe", date: "Été 2024",
              text: "Voyage en totale autonomie à travers plusieurs pays européens, axé sur le voyage alternatif et l'immersion." }
          ]
        },
        {
          title: "Projets & Ambitions futures",
          items: [
            { id: "mob-unam", title: "Stage de recherche M1 — UNAM (Mexique)", date: "06/2027 – 09/2027 (Projet)",
              text: "Objectif : intégrer un laboratoire de recherche à l'UNAM à Mexico pour travailler sur la dynamique des fluides appliquée aux énergies renouvelables." },
            { id: "mob-future", title: "Perspectives internationales & Master 2", date: "2027 – 2028",
              text: "Volonté d'effectuer le projet de fin d'études ou un semestre académique à l'étranger dans le secteur des technologies énergétiques durables." }
          ]
        }
      ]
    },
    civic: {
      title: "Engagement citoyen & Développement durable",
      intro: "Une conscience globale nourrie par l'écologie, les énergies renouvelables et l'actualité.",
      items: [
        { id: "civ-monde", title: "Conscience globale & Veille sociétale", date: "au quotidien",
          text: "Suivi quotidien de l'actualité internationale, géopolitique et des enjeux climatiques globaux." },
        { id: "civ-energies", href: "#/projects/centrales-maremotrices", title: "Transition énergétique & Énergies propres", date: "En continu",
          text: "Orientation d'ingénierie ciblée sur l'impact écologique : projets d'études marémoteurs et stage UNAM." },
        { id: "civ-danube", href: "#/projects/expedition-danube", title: "Preservation des ressources en eau", date: "07/2025",
          text: "Étude de terrain dédiée à la gestion du Danube et à la sensibilisation aux écosystèmes fluviaux." }
      ]
    },
    hobbies: {
      title: "Activités & Passions",
      intro: "Mes centres d'intérêt au-delà de l'ingénierie : sport, musique et exploration.",
      items: [
        { id: "hob-travel", href: "#/projects/expedition-danube", title: "Voyages en autonomie & Exploration", date: "Régulier",
          text: "Voyager autrement, hors des sentiers battus et en autonomie totale (bikepacking, itinéraires engagés) pour privilégier l'immersion terrain et la sobriété." },
        { id: "hob-sport", href: "#/projects/expedition-danube", title: "Sport : VTT, Vélo & Course à pied", date: "Pratique régulière",
          text: "Entraîneur certifié de VTT. Cyclisme sur longue distance et course à pied pour le dépassement de soi." },
        { id: "hob-music", title: "Pratique musicale & Jazz", date: "Passion",
          text: "Pratique du violon, de la contrebasse, de la guitare et du piano, avec une prédilection pour l'improvisation jazz." }
      ]
    },
    career: {
      title: "Parcours professionnel & Ambitions",
      intro: "Mes expériences professionnelles sur le terrain et ma vision de carrière.",
      sections: [
        {
          title: "Expériences professionnelles",
          items: [
            { logo: "assets/entreprises/cirtem.png", title: "Stagiaire de production — CIRTEM", date: "06/2026 – 07/2026",
              company: "CIRTEM (Sainte-Foy-d'Aigrefeuille)",
              text: "Électronique de puissance. Montage et câblage de modules électriques, gestion de stock, relecture de fiches de montage et tests de cartes électroniques." },
            { logo: "assets/entreprises/cerfacs.png", title: "Stagiaire en médiation scientifique — CERFACS", date: "04/2025 – 06/2025",
              company: "CERFACS — Équipe Climat & Environnement GLOBC (Toulouse)",
              text: "Création de supports de vulgarisation scientifique et développement d'un notebook pédagogique Python sur l'attracteur de Lorenz." },
            { logo: "assets/entreprises/buron.png", title: "Employé de restauration — Buron de l'Aubrac", date: "07/2023",
              company: "Buron de l'Aubrac",
              text: "Expérience saisonnière exigeante développant le travail en équipe et la gestion du stress." }
          ]
        },
        {
          title: "Projet de carrière & Ambitions",
          items: [
            { logo: "assets/entreprises/unam.png", title: "Stage de recherche — Énergies renouvelables", date: "Été 2027",
              company: "Laboratoire UNAM / Recherche appliquée",
              text: "Application de la mécanique des fluides et de la CFD aux systèmes de captage d'énergies renouvelables au Mexique." },
            { logo: "assets/entreprises/ing.png", title: "Ingénieur R&D / Chef de projet Énergie", date: "Horizon 2028+",
              company: "Secteur de l'Énergie & de l'Environnement",
              text: "Concevoir des solutions fluides/thermiques efficientes pour décarboner la production d'énergie et optimiser les ressources technologiques." }
          ]
        }
      ]
    },
    contact: {
      title: "Me contacter",
      intro: "Une question, une opportunité de stage ou une idée de collaboration ? Écris-moi !",
      name: "Ton nom", email: "Ton e-mail", message: "Ton message",
      send: "Envoyer le message", sending: "Envoi en cours…",
      success: "Message envoyé, merci !", error: "L'envoi a échoué.",
      captcha: "Merci de cocher la vérification anti-robot.",
      tooFast: "Merci de patienter avant d'envoyer.", unavailable: "Formulaire non disponible.",
      note: "Message sécurisé via Web3Forms.", linkedin: "Écris-moi sur LinkedIn", cta: "Me contacter →"
    },
    labels: { back: "← Retour aux projets", context: "Contexte", role: "Mon rôle", methods: "Méthodes & outils",
              results: "Résultats", lessons: "Enseignements", link: "Voir le projet", seeProject: "Voir la fiche →", notFound: "Page introuvable." },
    copyright: "© Camilo Cayrel Torres — ENSEEIHT"
  },

  /* ======================= ENGLISH ======================= */
  en: {
    nav: { home: "Home", education: "Engineering", projects: "Projects", mobility: "Mobility",
           civic: "Engagement", hobbies: "Activities", career: "Career", contact: "Contact" },
    cvLabel: "CV (EN)",
    home: {
      title: "Hi, I'm Camilo Cayrel Torres",
      subtitle: "Engineering student at ENSEEIHT (Toulouse INP) — Fluid Mechanics, Energy and Environment",
      intro: "I specialise in fluid mechanics, energy and the environment. My training covers fluid dynamics, heat transfer and numerical computation (CFD, Python, MATLAB), along with a foundation in electrical and electronic engineering. I am looking for a Master 1 research internship from 7 June to 10 September 2027 in a UNAM research laboratory (Mexico).",
      skillsTitle: "Key skills",
      skills: ["ANSYS Fluent", "CFD", "Python", "MATLAB", "PDEs", "Finite differences",
               "Turbulence", "Heat transfer", "Power electronics", "Signal processing"],
      interestsTitle: "Interests",
      more: "Read more →",
      interests: [
        { id: "sport", href: "#hobbies", icon: "🚵", title: "Sport & Endurance", text: "Certified mountain-bike coach, cyclist and runner." },
        { id: "music", href: "#hobbies", icon: "🎻", title: "Music & Expression", text: "Violin, double bass, guitar and piano. Passion for jazz." },
        { id: "travel", href: "#hobbies", icon: "🧭", title: "Off-the-beaten-track travel", text: "Independent travel across Europe and cycling along the Danube." },
        { id: "world", href: "#civic", icon: "🌍", title: "Global View", text: "Daily news reader with a focus on geopolitics and ecology." }
      ],
      languagesTitle: "Languages",
      languages: [
        { flag: "🇫🇷", name: "French", level: "Native" },
        { flag: "🇪🇸", name: "Spanish", level: "Native" },
        { flag: "🇬🇧", name: "English", level: "Full professional proficiency" },
        { flag: "🇮🇹", name: "Italian", level: "Basic" }
      ]
    },
    education: {
      title: "Engineering & Education",
      intro: "Academic background and core engineering expertise.",
      sections: [
        {
          title: "Engineering Expertise",
          items: [
            { title: "Fluid Mechanics & Energy", text: "Compressible/incompressible dynamics, turbulence, heat transfer, and applied thermodynamics." },
            { title: "Numerical Modeling (CFD)", text: "PDE solving, finite differences, ANSYS Fluent modeling, Python & MATLAB simulations." },
            { title: "Energy Systems & Electronics", text: "Electrical engineering foundations, power electronics, and signal processing." }
          ]
        },
        {
          title: "Academic Background",
          items: [
            { title: "Engineering Degree — MF2E · ENSEEIHT (Toulouse INP)", date: "09/2025 – present",
              text: "Year 2: Fluid Mechanics, Energy & Environment (Renewable Energy focus). Year 1: Electronics, Electrical Engineering & Automation." },
            { title: "Engineering Preparatory Cycle · Prépa t², Toulouse INP", date: "09/2023 – 06/2025",
              text: "Multidisciplinary scientific training including a study project on tidal power plants." }
          ]
        }
      ]
    },
    projectsTitle: "Engineering & Research Projects",
    projects: [
      { id: "projet-numerique-recherche", sort: "2027-06", date: "02/2027 – 06/2027 (upcoming)",
        title: "Numerical and research projects in fluid mechanics",
        summary: "Second-year programme at ENSEEIHT: a numerical project and a research project in fluid mechanics.",
        tags: ["Fluid mechanics", "CFD", "Research"], context: "", role: "", methods: "", results: "", lessons: "", images: [], link: "" },
      { id: "objet-connecte", sort: "2026-05", date: "03/2026 – 05/2026",
        title: "Design of a connected device: heart-rate sensor",
        summary: "Design project of a connected device at ENSEEIHT: a heart-rate sensor.",
        tags: ["Electronics", "Connected device", "Sensor"], context: "", role: "", methods: "", results: "", lessons: "", images: [], link: "" },
      { id: "expedition-danube", sort: "2025-07", date: "07/2025",
        title: "Solo cycling expedition and field study along the Danube",
        summary: "One month from the source of the Danube to Budapest, funded by the Zellidja Foundation.",
        tags: ["Cycling", "Field study", "Natural resources"], context: "", role: "", methods: "", results: "", lessons: "", images: [], link: "" },
      { id: "centrales-maremotrices", sort: "2025-04", date: "03/2025 – 04/2025",
        title: "Tidal power plants and the energy transition (Prépa t²)",
        summary: "Python water-level model, physical basin/turbine mock-up and analysis of operating cycles.",
        tags: ["Python", "Jupyter", "Renewable energy"], context: "", role: "", methods: "", results: "", lessons: "", images: [], link: "" }
    ],
    mobility: {
      title: "International Mobility",
      intro: "From solo expeditions to international research plans.",
      sections: [
        {
          title: "Completed Experiences",
          items: [
            { id: "mob-danube", href: "#/projects/expedition-danube", title: "Danube Expedition — Central Europe Crossing", date: "07/2025",
              text: "1-month solo cycling journey through Germany, Austria, Slovenia and Hungary with Zellidja grant." },
            { id: "mob-europe", title: "Independent European Travel", date: "Summer 2024",
              text: "Self-funded independent travel focusing on cultural immersion and off-the-beaten-track routes." }
          ]
        },
        {
          title: "Future Plans & Ambitions",
          items: [
            { id: "mob-unam", title: "M1 Research Internship — UNAM (Mexico)", date: "06/2027 – 09/2027 (Planned)",
              text: "Joining a UNAM laboratory in Mexico City to work on fluid mechanics applied to renewable energy." },
            { id: "mob-future", title: "Master 2 & International Perspectives", date: "2027 – 2028",
              text: "Aiming to conduct the final thesis or a semester abroad in sustainable energy technologies." }
          ]
        }
      ]
    },
    civic: {
      title: "Civic Engagement & Sustainability",
      intro: "Global awareness fed by ecology, renewable energy and world news.",
      items: [
        { id: "civ-monde", title: "Global Awareness", date: "Daily",
          text: "Daily reading on geopolitics, international news, and climate challenges." },
        { id: "civ-energies", href: "#/projects/centrales-maremotrices", title: "Energy Transition", date: "Ongoing",
          text: "Engineering focus on sustainability: tidal power study and UNAM internship project." },
        { id: "civ-danube", href: "#/projects/expedition-danube", title: "Water Resources Study", date: "07/2025",
          text: "Field research on river ecosystem management along the Danube." }
      ]
    },
    hobbies: {
      title: "Activities & Interests",
      intro: "Personal pursuits: sport, music, and exploration.",
      items: [
        { id: "hob-travel", href: "#/projects/expedition-danube", title: "Off-the-beaten-path Travel & Exploration", date: "Regular",
          text: "Independent traveling, bikepacking, and exploring remote areas with a focus on self-reliance." },
        { id: "hob-sport", href: "#/projects/expedition-danube", title: "Sport: Mountain Biking & Cycling", date: "Regular",
          text: "Certified MTB coach. Long-distance cycling and endurance running." },
        { id: "hob-music", title: "Music & Jazz", date: "Passion",
          text: "Violin, double bass, guitar, and piano player, with a passion for jazz improvisation." }
      ]
    },
    career: {
      title: "Career Path & Goals",
      intro: "Work experience and career vision.",
      sections: [
        {
          title: "Work Experience",
          items: [
            { logo: "assets/entreprises/cirtem.png", title: "Production Intern — CIRTEM", date: "06/2026 – 07/2026",
              company: "CIRTEM", text: "Power electronics manufacturing, module assembly, stock handling, and test procedures." },
            { logo: "assets/entreprises/cerfacs.png", title: "Science Communication Intern — CERFACS", date: "04/2025 – 06/2025",
              company: "CERFACS (GLOBC Team)", text: "Scientific outreach and creation of a Python notebook on the Lorenz attractor." },
            { logo: "assets/entreprises/buron.png", title: "Kitchen Staff — Buron de l'Aubrac", date: "07/2023",
              company: "Buron de l'Aubrac", text: "Seasonal restaurant job developing teamwork under pressure." }
          ]
        },
        {
          title: "Career Vision & Ambitions",
          items: [
            { logo: "assets/entreprises/unam.png", title: "Research Internship — Renewable Energy", date: "Summer 2027",
              company: "UNAM Lab", text: "Applying CFD and fluid mechanics to renewable energy devices." },
            { logo: "assets/entreprises/ing.png", title: "R&D / Energy Project Engineer", date: "2028+",
              company: "Energy & Environment Sector", text: "Developing efficient fluid/thermal solutions to decarbonise energy systems." }
          ]
        }
      ]
    },
    contact: {
      title: "Contact Me", intro: "Feel free to reach out!",
      name: "Your name", email: "Your email", message: "Your message",
      send: "Send message", sending: "Sending…", success: "Message sent!", error: "Failed to send.",
      captcha: "Please complete the captcha.", tooFast: "Please wait.", unavailable: "Form unavailable.",
      note: "Secure form.", linkedin: "LinkedIn profile", cta: "Contact me →"
    },
    labels: { back: "← Back to projects", context: "Context", role: "My role", methods: "Methods",
              results: "Results", lessons: "Lessons learned", link: "See project", seeProject: "View →", notFound: "Not found." },
    copyright: "© Camilo Cayrel Torres — ENSEEIHT"
  }
};
