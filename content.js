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
    "objet-connecte":            ["assets/projets/objet-connecte-1.jpg", "assets/projets/objet-connecte-2.jpg", "assets/projets/objet-connecte-3.jpg"],
    "expedition-danube":         ["assets/projets/danube-1.jpg", "assets/projets/danube-2.jpg", "assets/projets/danube-3.jpg", "assets/projets/danube-4.jpg", "assets/projets/danube-5.jpg"],
    "centrales-maremotrices":    ["assets/projets/maremotrice-1.jpg", "assets/projets/maremotrice-2.jpg", "assets/projets/maremotrice-3.jpg", "assets/projets/maremotrice-4.jpg"],
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
    "hob-travel":                ["assets/loisirs/voyage-autonomie.jpg"],
    // --- Ingénierie ---
    "edu-fluides":               ["assets/ingenierie/fluides.jpg"],
    "edu-cfd":                   ["assets/ingenierie/cfd.jpg"],
    "edu-elec":                  ["assets/ingenierie/electronique.jpg"],
    "edu-enseeiht":              ["assets/ingenierie/enseeiht.jpg"],
    "edu-prepa":                 ["assets/ingenierie/prepa.jpg"],
    // --- Carrière ---
    "car-cirtem":                ["assets/carriere/cirtem.jpg"],
    "car-cerfacs":               ["assets/carriere/cerfacs.jpg"],
    "car-buron":                 ["assets/carriere/buron.jpg"],
    "car-unam":                  ["assets/carriere/unam.jpg"],
    "car-ing":                   ["assets/carriere/ingenieur.jpg"]
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
      skills: ["ANSYS Fluent", "CFD", "Python", "MATLAB", "C", "Méthodes numériques",
               "Turbulence", "Transferts thermiques", "Électronique RF", "Traitement du signal"],
      interestsTitle: "Centres d'intérêt",
      more: "En savoir plus →",
      interests: [
        { id: "sport", href: "#hobbies", icon: "🚵", title: "Sport", text: "Cyclisme et course à pied." },
        { id: "music", href: "#hobbies", icon: "🎻", title: "Musique", text: "Multi-instrumentiste. Passion pour le jazz." },
        { id: "travel", href: "#hobbies", icon: "🧭", title: "Exploration & Voyagisme alternatif", text: "Voyages en autonomie et hors des sentiers battus à travers l'Europe." },
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
            { id: "edu-fluides", title: "Mécanique des Fluides & Énergétique", text: "Dynamique des fluides compressibles/incompressibles, écoulements turbulents, transferts thermiques et thermodynamique appliquée." },
            { id: "edu-cfd", title: "Modélisation numérique & Calcul (CFD)", text: "Résolution d'EDP, méthodes numériques, modélisation sous ANSYS Fluent, scripts Python, MATLAB & C." },
            { id: "edu-elec", title: "Systèmes Énergétiques & Électronique", text: "Bases solides en génie électrique, électronique RF, semi-conducteurs, traitement du signal et conversion d'énergie." }
          ]
        },
        {
          title: "Parcours académique",
          items: [
            { id: "edu-enseeiht", logo: "assets/entreprises/enseeiht.png", title: "Diplôme d'ingénieur — MF2E · ENSEEIHT", company: "ENSEEIHT (Toulouse INP)", date: "09/2025 – présent",
              text: "2e année : Mécanique des Fluides, Énergétique et Environnement (orientation énergies renouvelables, sciences de l'environnement & biotechnologies). 1re année : Électronique, Génie Électrique et Automatique." },
            { id: "edu-prepa", logo: "assets/entreprises/toulouse-inp.png", title: "Cycle préparatoire d'ingénieur — Prépa t²", company: "Prépa Toulouse Transitions, Toulouse INP", date: "09/2023 – 06/2025",
              text: "Formation scientifique polyvalente avec projet d'étude appliqué aux centrales marémotrices et à la transition énergétique et du métier d'ingénieur." }
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
        role: "", methods: "", results: "", lessons: "", images: [], links: [], link: "" },
      { id: "objet-connecte", sort: "2026-05", date: "03/2026 – 05/2026",
        title: "Conception d'un objet connecté : capteur de fréquence cardiaque",
        summary: "Projet de conception d'un dispositif connecté à l'ENSEEIHT : un capteur de fréquence cardiaque.",
        tags: ["Électronique", "Objet connecté", "Capteur"],
        context: "Projet d'électronique et systèmes embarqués à l'ENSEEIHT : concevoir, réaliser et valider un objet connecté mesurant la fréquence cardiaque, de la chaîne de mesure au service connecté.",
        role: "Conception électronique, prototypage et rédaction du rapport du projet.",
        methods: "Chaîne d'acquisition du signal cardiaque (capteur optique), microcontrôleur, transmission sans fil et traitement/tracé des mesures.",
        results: "",
        lessons: "",
        images: ["assets/projets/objet-connecte-1.jpg", "assets/projets/objet-connecte-2.jpg", "assets/projets/objet-connecte-3.jpg"],
        links: [{ url: "assets/projets/rapport-objet-connecte.pdf", label: "📄 Lire le rapport du projet (PDF)" }],
        link: "" },
      { id: "expedition-danube", sort: "2025-07", date: "07/2025",
        title: "Expédition à vélo en solitaire et étude de terrain le long du Danube",
        summary: "Un mois et ~1500 km à vélo le long du Danube, de sa source (Donaueschingen, Allemagne) à Budapest (Hongrie), financé par la Fondation Zellidja, entre aventure en autonomie et étude de terrain.",
        tags: ["Vélo", "Étude de terrain", "Ressources naturelles", "Zellidja"],
        context: "Premier voyage Zellidja (bourse de la Fondation de France) : 31 jours en solitaire, du 1er au 31 juillet 2025, à travers l'Allemagne, l'Autriche, la Slovaquie et la Hongrie, en suivant l'EuroVélo 6.",
        role: "Voyageur boursier Zellidja, en autonomie complète : itinéraire, budget, hébergements (Warmshowers, Workaway), journal de route quotidien et bilan carbone du voyage.",
        methods: "Étude de terrain en trois volets — l'agriculture (cultures et filière biogaz), l'énergie (hydraulique, thermique, chauffage urbain) et la viticulture dans la Wachau — nourrie par mes observations, mes rencontres (agriculteurs, viticulteurs, ingénieurs) et les échanges avec mes hôtes.",
        results: "Rapport d'étude « L'utilisation des ressources naturelles le long du Danube » et journal de route remis à la Fondation Zellidja ; ~1500 km parcourus en 31 jours.",
        lessons: "Immersion multiculturelle et pratique de l'allemand au fil des hébergements solidaire ; compréhension de la gestion de l'eau, de l'agriculture et de l'énergie à l'échelle d'un bassin fluvial international : le Danube est à la fois ressource, voie de transport et objet de tensions environnementales.",
        images: ["assets/projets/danube-1.jpg", "assets/projets/danube-2.jpg", "assets/projets/danube-3.jpg", "assets/projets/danube-4.jpg", "assets/projets/danube-5.jpg"],
        links: [{ url: "assets/projets/rapport-zellidja-danube.pdf", label: "📄 Lire le rapport de voyage Zellidja (PDF)" }],
        link: "" },
      { id: "centrales-maremotrices", sort: "2025-04", date: "03/2025 – 04/2025",
        title: "Centrales marémotrices et transition énergétique (Prépa t²)",
        summary: "Étude de l'énergie marémotrice : modèle Python du niveau d'eau et rendement de la centrale de la Rance, maquette physique bassin/turbine et analyse critique des cycles d'exploitation.",
        tags: ["Python", "Jupyter", "Énergies renouvelables", "Maquette"],
        context: "Projet d'étude de deuxième année de Prépa t² (Toulouse INP), en groupe de six encadré par Olivier Thual, autour de la problématique : « À long terme, l'énergie marémotrice peut-elle devenir une source viable et significative dans le mix énergétique ? »",
        role: "Co-rédaction du rapport et développement du notebook Jupyter de modélisation du fonctionnement de la centrale marémotrice de la Rance.",
        methods: "Recherche documentaire (origine des marées, conditions d'implantation, histoire de la Rance), modèle numérique simplifié sous Python/Jupyter (cycles simple effet, double effet et pompage, marnage, turbine) et réalisation d'une maquette physique bassin/turbine avec groupe hélice-alternateur.",
        results: "Un modèle paramétrique reliant marnage et caractéristiques de turbine à l'énergie produite, une maquette pédagogique et un bilan critique : le potentiel mondial (~380 TWh/an, soit ~2 % de l'électricité mondiale) reste limité ; la Rance (240 MW) alimente l'équivalent d'une ville comme Lille.",
        lessons: "L'énergie marémotrice est prévisible mais intermittente, et freinée par ses impacts environnementaux (envasement de l'estuaire, faune aquatique), la corrosion et les coûts : une brique du mix énergétique plutôt qu'une source unique.",
        images: ["assets/projets/maremotrice-1.jpg", "assets/projets/maremotrice-2.jpg", "assets/projets/maremotrice-3.jpg", "assets/projets/maremotrice-4.jpg"],
        links: [
          { url: "assets/projets/rapport-centrales-maremotrices.pdf", label: "📄 Lire le rapport du projet (PDF)" },
          { url: "assets/projets/maremotrices-notebook.ipynb", label: "🐍 Ouvrir le notebook Jupyter" }
        ],
        link: "" }
    ],
    mobility: {
      title: "Mobilité internationale",
      intro: "Ma roadmap internationale : des voyages en autonomie vers la recherche à l'étranger.",
      sections: [
        {
          title: "Étape 1 · Réalisé — Été 2024 · S'ouvrir à l'Europe",
          items: [
            { id: "mob-europe", title: "Voyage en autonomie à travers l'Europe — Programme DiscoverEU", date: "Été 2024",
              text: "Voyage à travers plusieurs pays européens avec le programme de l'Union Européenne DiscoverEU : déplacements en train, rencontres entre jeunes européens et découverte du voyage en autonomie, en Europe centrale." }
          ]
        },
        {
          title: "Étape 2 · Réalisé — Été 2025 · Prendre l'autonomie",
          items: [
            { id: "mob-danube", href: "#/projects/expedition-danube", title: "Le Danube à vélo — Étude de l'utilisation des ressources naturelles le long du fleuve", date: "07/2025",
              text: "Traversée de l'Europe centrale à vélo en solitaire (1500 km en 31 jours, de la source du Danube à Budapest) avec un sujet d'étude en trois volets (agriculture, énergie, viticulture), financé par l'association Zellidja." }
          ]
        },
        {
          title: "Étape 3 · Projet — Été 2027 · Faire de la recherche à l'international",
          items: [
            { id: "mob-unam", title: "Stage de recherche M1 — UNAM (Mexique)", date: "06/2027 – 09/2027 (Projet)",
              text: "Objectif : intégrer un laboratoire de recherche à l'UNAM à Mexico pour travailler sur la dynamique des fluides appliquée aux énergies renouvelables, à l'environnement, ou aux biotechnologies." }
          ]
        },
        {
          title: "Étape 4 · Horizon 2027-2028 — Construire une carrière internationale",
          items: [
            { id: "mob-future", title: "Perspectives internationales & Master 2", date: "2027 – 2028",
              text: "Volonté d'effectuer le projet de fin d'études, ou de me tourner vers un contrat de début de carrière à l'étranger dans le secteur des technologies énergétiques durables." }
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
          text: "Orientation d'ingénierie ciblée sur l'impact écologique : projets d'études marémoteurs et stage à l'UNAM." },
        { id: "civ-danube", href: "#/projects/expedition-danube", title: "Atelier réparation associatif", date: "07/2025",
          text: "Membre de l'association Frouzins Iniciatives citoyennes avec laquelle j'ai appris à réparer des vélos. Chacun est libre de venir avec son vélo ou son objet défectueux pour apprendre à le réparer gratuitement pour donner une seconde vie à son bien. " }
      ]
    },
    hobbies: {
      title: "Activités & Passions",
      intro: "Mes centres d'intérêt au-delà de l'ingénierie : sport, musique et exploration.",
      items: [
        { id: "hob-travel", href: "#/projects/expedition-danube", title: "Voyages en autonomie & Exploration", date: "Régulier",
          text: "Voyager autrement, hors des sentiers battus et en autonomie (bikepacking, itinéraires engagés) pour privilégier l'immersion culturelle et la sobriété." },
        { id: "hob-sport", href: "#/projects/expedition-danube", title: "Sport : Cyclisme & Course à pied", date: "Pratique régulière",
          text: "Éducateur VTT certifié de la Fédération Française de Cyclisme (FFC). Défis cyclistes longue distance, entraînement et compétitions de course à pied tout au long de l'année." },
        { id: "hob-music", title: "Pratique musicale & Jazz", date: "Passion",
          text: "Pratique du violon, de la contrebasse, de la guitare et du piano, avec une passion pour le jazz et les musiques improvisées." }
      ]
    },
    career: {
      title: "Parcours professionnel & Ambitions",
      intro: "Mes expériences professionnelles sur le terrain et ma vision de carrière.",
      sections: [
        {
          title: "Expériences professionnelles",
          items: [
            { id: "car-cirtem", logo: "assets/entreprises/cirtem.png", title: "Stagiaire de production — CIRTEM", date: "06/2026 – 07/2026",
              company: "CIRTEM (Sainte-Foy-d'Aigrefeuille)",
              text: "Stage ouvrier de 8 semaines au sein de la chaîne de production d'une entreprise spécialisée dans l'électronique de puissance. Montage et câblage de modules électriques, rangement en magasin, révision de fiches d'instruction de montage et test de cartes électroniques." },
            { id: "car-cerfacs", logo: "assets/entreprises/cerfacs.png", title: "Stagiaire en médiation scientifique — CERFACS", date: "28/04/2025 – 13/06/2025",
              company: "CERFACS — Équipe Climat & Environnement GLOBC (Toulouse)",
              text: "Stage de médiation scientifique de 6 semaines au Centre Européen de Recherche et de Formation Avancée en Calcul Scientifique, au sein de l'équipe GLOBC de l'UMR CECI (avec le CNRS et l'IRD). Création de supports de présentation pédagogiques de thèses de doctorat destinés à un public scientifique non spécialiste (lycée à L2), réalisation de supports auxiliaires sur la modélisation du climat (variabilité interne, réanalyses, sensibilité climatique) et participation aux séminaires de l'équipe. Première immersion dans le monde de la recherche et le calcul haute performance (HPC).",
              links: [{ url: "assets/carriere/rapport-stage-cerfacs.pdf", label: "📄 Lire le rapport de stage (PDF)" }] },
            { id: "car-buron", logo: "assets/entreprises/buron.png", title: "Employé de restauration — Buron de l'Aubrac", date: "07/2023",
              company: "Buron de l'Aubrac",
              text: "Expérience saisonnière exigeante développant le travail en équipe et la gestion du stress." }
          ]
        },
        {
          title: "Projet de carrière & Ambitions",
          items: [
            { id: "car-unam", logo: "assets/entreprises/unam.png", title: "Stage de recherche — Énergies renouvelables", date: "Été 2027",
              company: "Laboratoire UNAM / Recherche appliquée",
              text: "Application de la mécanique des fluides et de la CFD aux systèmes de captage d'énergies renouvelables au Mexique." },
            { id: "car-ing", logo: "assets/entreprises/ing.png", title: "Ingénieur R&D / Chef de projet Énergie", date: "Horizon 2028+",
              company: "Secteur de l'Énergie & de l'Environnement",
              text: "Concevoir des solutions fluides/thermiques efficientes pour décarboner la production d'énergie et optimiser les ressources technologiques." }
          ]
        }
      ]
    },
    contact: {
      title: "Me contacter",
      intro: "Une question, une opportunité de stage ou une idée de collaboration ? N'hésitez pas à m'écrire.",
      name: "Votre nom", email: "Votre e-mail", message: "Votre message",
      send: "Envoyer le message", sending: "Envoi en cours…",
      success: "Message envoyé, merci !", error: "L'envoi a échoué.",
      captcha: "Merci de cocher la vérification anti-robot.",
      tooFast: "Merci de patienter avant d'envoyer.", unavailable: "Formulaire non disponible.",
      note: "Message sécurisé via Web3Forms.", linkedin: "M'écrire sur LinkedIn", cta: "Me contacter →"
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
            { id: "edu-fluides", title: "Fluid Mechanics & Energy", text: "Compressible/incompressible dynamics, turbulence, heat transfer, and applied thermodynamics." },
            { id: "edu-cfd", title: "Numerical Modeling (CFD)", text: "PDE solving, finite differences, ANSYS Fluent modeling, Python & MATLAB simulations." },
            { id: "edu-elec", title: "Energy Systems & Electronics", text: "Electrical engineering foundations, power electronics, and signal processing." }
          ]
        },
        {
          title: "Academic Background",
          items: [
            { id: "edu-enseeiht", logo: "assets/entreprises/enseeiht.png", title: "Engineering Degree — MF2E · ENSEEIHT", company: "ENSEEIHT (Toulouse INP)", date: "09/2025 – present",
              text: "Year 2: Fluid Mechanics, Energy & Environment (Renewable Energy focus). Year 1: Electronics, Electrical Engineering & Automation." },
            { id: "edu-prepa", logo: "assets/entreprises/toulouse-inp.png", title: "Engineering Preparatory Cycle — Prépa t²", company: "Prépa Toulouse Transitions, Toulouse INP", date: "09/2023 – 06/2025",
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
        tags: ["Fluid mechanics", "CFD", "Research"], context: "", role: "", methods: "", results: "", lessons: "", images: [], links: [], link: "" },
      { id: "objet-connecte", sort: "2026-05", date: "03/2026 – 05/2026",
        title: "Design of a connected device: heart-rate sensor",
        summary: "Design project of a connected device at ENSEEIHT: a heart-rate sensor.",
        tags: ["Electronics", "Connected device", "Sensor"],
        context: "Electronics and embedded systems project at ENSEEIHT: designing, building and validating a connected device measuring heart rate, from the sensing chain to the connected service.",
        role: "Electronics design, prototyping and project report writing.",
        methods: "Heart-rate signal acquisition chain (optical sensor), microcontroller, wireless transmission and data processing/plotting.",
        results: "",
        lessons: "",
        images: ["assets/projets/objet-connecte-1.jpg", "assets/projets/objet-connecte-2.jpg", "assets/projets/objet-connecte-3.jpg"],
        links: [{ url: "assets/projets/rapport-objet-connecte.pdf", label: "📄 Read the project report (PDF)" }],
        link: "" },
      { id: "expedition-danube", sort: "2025-07", date: "07/2025",
        title: "Solo cycling expedition and field study along the Danube",
        summary: "One month and ~1500 km by bike along the Danube, from its source (Donaueschingen, Germany) to Budapest (Hungary), funded by the Zellidja Foundation, between solo adventure and field study.",
        tags: ["Cycling", "Field study", "Natural resources", "Zellidja"],
        context: "First Zellidja journey (grant from the Fondation de France): 31 days travelling solo, 1–31 July 2025, across Germany, Austria, Slovakia and Hungary along the EuroVelo 6 route.",
        role: "Zellidja grant-funded traveller, fully self-reliant: route, budget, accommodation (Warmshowers, Workaway), daily travel journal and travel carbon footprint.",
        methods: "Field study in three parts — agriculture (crops and the biogas industry), energy (hydropower, thermal plants, district heating) and winegrowing in the Wachau — based on my own observations, meetings (farmers, winemakers, engineers) and conversations with hosts.",
        results: "Study report 'The use of natural resources along the Danube' and a travel journal submitted to the Zellidja Foundation; ~1500 km covered in 31 days.",
        lessons: "Multicultural immersion and German practice through hospitality homestays; understanding of water, agricultural and energy management at the scale of an international river basin: the Danube is at once a resource, a transport route and a source of environmental tension.",
        images: ["assets/projets/danube-1.jpg", "assets/projets/danube-2.jpg", "assets/projets/danube-3.jpg", "assets/projets/danube-4.jpg", "assets/projets/danube-5.jpg"],
        links: [{ url: "assets/projets/rapport-zellidja-danube.pdf", label: "📄 Read the Zellidja travel report (PDF)" }],
        link: "" },
      { id: "centrales-maremotrices", sort: "2025-04", date: "03/2025 – 04/2025",
        title: "Tidal power plants and the energy transition (Prépa t²)",
        summary: "A study of tidal energy: Python model of the water level and output of the Rance tidal power plant, physical basin/turbine mock-up and critical analysis of operating cycles.",
        tags: ["Python", "Jupyter", "Renewable energy", "Mock-up"],
        context: "Second-year study project at Prépa t² (Toulouse INP), in a team of six supervised by Olivier Thual, around the question: 'In the long run, can tidal energy become a viable and significant source in the energy mix?'",
        role: "Co-author of the report and developer of the Jupyter notebook modelling the operation of the Rance tidal power plant.",
        methods: "Documentary research (origin of tides, siting conditions, history of the Rance plant), a simplified numerical model in Python/Jupyter (simple-effect, double-effect and pumping cycles, tidal range, turbine) and the construction of a physical basin/turbine mock-up with a propeller-alternator unit.",
        results: "A parametric model linking tidal range and turbine characteristics to energy output, an educational mock-up and a critical assessment: the global potential (~380 TWh/year, about 2% of world electricity) remains limited; the Rance plant (240 MW) powers the equivalent of a city like Lille.",
        lessons: "Tidal energy is predictable but intermittent, and held back by its environmental impacts (estuary silting, aquatic wildlife), corrosion and costs: a building block of the energy mix rather than a sole source.",
        images: ["assets/projets/maremotrice-1.jpg", "assets/projets/maremotrice-2.jpg", "assets/projets/maremotrice-3.jpg", "assets/projets/maremotrice-4.jpg"],
        links: [
          { url: "assets/projets/rapport-centrales-maremotrices.pdf", label: "📄 Read the project report (PDF)" },
          { url: "assets/projets/maremotrices-notebook.ipynb", label: "🐍 Open the Jupyter notebook" }
        ],
        link: "" }
    ],
    mobility: {
      title: "International Mobility",
      intro: "My international roadmap: from independent journeys to research abroad.",
      sections: [
        {
          title: "Step 1 · Done — Summer 2024 · Opening up to Europe",
          items: [
            { id: "mob-europe", title: "Independent European Travel — DiscoverEU", date: "Summer 2024",
              text: "Travel across several European countries with the European Union's DiscoverEU programme: train travel, meetings between young Europeans and a first experience of independent travel around Central Europe." }
          ]
        },
        {
          title: "Step 2 · Done — Summer 2025 · Gaining independence",
          items: [
            { id: "mob-danube", href: "#/projects/expedition-danube", title: "Danube Expedition — A field study of natural resource use along the river", date: "07/2025",
              text: "A 1-month solo cycling journey through Central Europe (1500 km from the source of the Danube to Budapest), with a three-part field study (agriculture, energy, winegrowing), funded by the Zellidja Foundation." }
          ]
        },
        {
          title: "Step 3 · Planned — Summer 2027 · Doing research abroad",
          items: [
            { id: "mob-unam", title: "M1 Research Internship — UNAM (Mexico)", date: "06/2027 – 09/2027 (Planned)",
              text: "Goal: join a research laboratory at UNAM in Mexico City to work on fluid mechanics applied to renewable energy, the environment, or biotechnologies." }
          ]
        },
        {
          title: "Step 4 · Horizon 2027-2028 — Building an international career",
          items: [
            { id: "mob-future", title: "Master 2 & International Perspectives", date: "2027 – 2028",
              text: "Aiming to carry out my final degree project abroad, or to start my career internationally in the sustainable energy technologies sector." }
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
            { id: "car-cirtem", logo: "assets/entreprises/cirtem.png", title: "Production Intern — CIRTEM", date: "06/2026 – 07/2026",
              company: "CIRTEM", text: "Power electronics manufacturing, module assembly, stock handling, and test procedures." },
            { id: "car-cerfacs", logo: "assets/entreprises/cerfacs.png", title: "Science Communication Intern — CERFACS", date: "28/04/2025 – 13/06/2025",
              company: "CERFACS (GLOBC Team)",
              text: "A 6-week science communication internship CERFACS, in the GLOBC team of the CECI joint research unit (with CNRS and IRD). Creating educational presentation materials for PhD theses aimed at a non-specialist scientific audience, producing auxiliary materials on climate modelling, and attending team seminars. A first immersion in the research world and high-performance computing (HPC).",
              links: [{ url: "assets/carriere/rapport-stage-cerfacs.pdf", label: "📄 Read the internship report (PDF)" }] },
            { id: "car-buron", logo: "assets/entreprises/buron.png", title: "Kitchen Staff — Buron de l'Aubrac", date: "07/2023",
              company: "Buron de l'Aubrac", text: "Seasonal restaurant job developing teamwork under pressure." }
          ]
        },
        {
          title: "Career Vision & Ambitions",
          items: [
            { id: "car-unam", logo: "assets/entreprises/unam.png", title: "Research Internship — Renewable Energy", date: "Summer 2027",
              company: "UNAM Lab", text: "Applying CFD and fluid mechanics to renewable energy devices." },
            { id: "car-ing", logo: "assets/entreprises/ing.png", title: "R&D / Energy Project Engineer", date: "2028+",
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
