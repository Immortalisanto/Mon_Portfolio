import bookiCarousel from '../assets/worksImages/carousel/booki.webp'
import sophieBluelCarousel from '../assets/worksImages/carousel/sophie-bluel.webp'
import ninaCarducciCarousel from '../assets/worksImages/carousel/nina-carducci.webp'
import kasaCarousel from '../assets/worksImages/carousel/kasa.webp'
import monVieuxGrimoireCarousel from '../assets/worksImages/carousel/mon-vieux-grimoire.webp'
import monPortfolioCarousel from '../assets/worksImages/carousel/mon-portfolio.webp'
import booki1Desktop from '../assets/worksImages/booki/desktop/booki1.webp'
import booki2Desktop from '../assets/worksImages/booki/desktop/booki2.webp'
import booki1Mobile from '../assets/worksImages/booki/mobile/booki1.webp'
import booki2Mobile from '../assets/worksImages/booki/mobile/booki2.webp'
import kasa1Desktop from '../assets/worksImages/kasa/desktop/kasa1.webp'
import kasa2Desktop from '../assets/worksImages/kasa/desktop/kasa2.webp'
import kasa3Desktop from '../assets/worksImages/kasa/desktop/kasa3.webp'
import kasa1Mobile from '../assets/worksImages/kasa/mobile/kasa1.webp'
import kasa2Mobile from '../assets/worksImages/kasa/mobile/kasa2.webp'
import kasa3Mobile from '../assets/worksImages/kasa/mobile/kasa3.webp'
import portfolio1Desktop from '../assets/worksImages/mon_portfolio/desktop/monPortfolio1.webp'
import portfolio1Mobile from '../assets/worksImages/mon_portfolio/mobile/monPortfolio1.webp'
import monVieuxGrimoire1Desktop from '../assets/worksImages/mon_vieux_grimoire/desktop/monVieuxGrimoire1.webp'
import monVieuxGrimoire2Desktop from '../assets/worksImages/mon_vieux_grimoire/desktop/monVieuxGrimoire2.webp'
import monVieuxGrimoire1Mobile from '../assets/worksImages/mon_vieux_grimoire/mobile/monVieuxGrimoire1.webp'
import monVieuxGrimoire2Mobile from '../assets/worksImages/mon_vieux_grimoire/mobile/monVieuxGrimoire2.webp'
import ninaCarducci1Desktop from '../assets/worksImages/nina_carducci/desktop/ninaCarducci1.webp'
import ninaCarducci2Desktop from '../assets/worksImages/nina_carducci/desktop/ninaCarducci2.webp'
import ninaCarducci3Desktop from '../assets/worksImages/nina_carducci/desktop/ninaCarducci3.webp'
import ninaCarducci1Mobile from '../assets/worksImages/nina_carducci/mobile/ninaCarducci1.webp'
import ninaCarducci2Mobile from '../assets/worksImages/nina_carducci/mobile/ninaCarducci2.webp'
import ninaCarducci3Mobile from '../assets/worksImages/nina_carducci/mobile/ninaCarducci3.webp'
import sophieBluel1Desktop from '../assets/worksImages/sophie_bluel/desktop/sophieBluel1.webp'
import sophieBluel2Desktop from '../assets/worksImages/sophie_bluel/desktop/sophieBluel2.webp'
import sophieBluel3Desktop from '../assets/worksImages/sophie_bluel/desktop/sophieBluel3.webp'
import sophieBluel4Desktop from '../assets/worksImages/sophie_bluel/desktop/sophieBluel4.webp'
import sophieBluel1Mobile from '../assets/worksImages/sophie_bluel/mobile/sophieBluel1.webp'
import sophieBluel2Mobile from '../assets/worksImages/sophie_bluel/mobile/sophieBluel2.webp'
import sophieBluel3Mobile from '../assets/worksImages/sophie_bluel/mobile/sophieBluel3.webp'
import sophieBluel4Mobile from '../assets/worksImages/sophie_bluel/mobile/sophieBluel4.webp'

export const RealisationsData = [
    {
        index: 0,
        cover: bookiCarousel,
        title: 'Booki',
        description:
            "Création de la page d'accueil d'une agence de voyage. Code créé de zéro. Intégration du contenu à partir d'une maquette Figma. Site web entièrement responsive, s'adapte sur mobile et tablette. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['HTML', 'CSS', 'Figma'],
        github: 'https://github.com/Immortalisanto/GH-Booky.git',
        imagesDesktop: [booki1Desktop, booki2Desktop],
        imagesMobile: [booki1Mobile, booki2Mobile],
    },
    {
        index: 1,
        cover: sophieBluelCarousel,
        title: 'Sophie Bluel',
        description:
            "Transformation d'un site web 'statique' vers un type 'dynamique'. Conception du portfolio d'une architecte d'intérieur, possibilité de connexion de l'administrateur pour modifier le contenu de la galerie (Ajout et Suppression) en communiquant avec une API. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['Javascript', 'Figma'],
        github: 'https://github.com/Immortalisanto/Projet-JS.git',
        imagesDesktop: [
            sophieBluel1Desktop,
            sophieBluel2Desktop,
            sophieBluel3Desktop,
            sophieBluel4Desktop,
        ],
        imagesMobile: [
            sophieBluel1Mobile,
            sophieBluel2Mobile,
            sophieBluel3Mobile,
            sophieBluel4Mobile,
        ],
    },
    {
        index: 2,
        cover: ninaCarducciCarousel,
        title: 'Nina Carducci',
        description:
            "Débogage et optimisation d'un site d'une photographe. Optimisation globale du site (performances et bonnes pratique SEO), mise en place d'un référencement local, des métas pour les réseaux sociaux ainsi que des modifications pour améliorer l'accessibilité du site. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['Lighthouse', 'Wave', 'Rich Snippet', 'Photoshop', 'W3C'],
        github: 'https://github.com/Immortalisanto/nina_carducci.git',
        imagesDesktop: [
            ninaCarducci1Desktop,
            ninaCarducci2Desktop,
            ninaCarducci3Desktop,
        ],
        imagesMobile: [
            ninaCarducci1Mobile,
            ninaCarducci2Mobile,
            ninaCarducci3Mobile,
        ],
    },
    {
        index: 3,
        cover: kasaCarousel,
        title: 'Kasa',
        description:
            "Création d'une application web de location immobilière. Utilisation de la bibliothèque React. Code créé de zéro. Ajout d'animations CSS. Intégration du contenu à partir d'une maquette Figma. Site web entièrement responsive, s'adapte sur mobile et tablette. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['HTML', 'CSS', 'React', 'Figma'],
        github: 'https://github.com/Immortalisanto/kasa_project.git',
        imagesDesktop: [kasa1Desktop, kasa2Desktop, kasa3Desktop],
        imagesMobile: [kasa1Mobile, kasa2Mobile, kasa3Mobile],
    },
    {
        index: 4,
        cover: monVieuxGrimoireCarousel,
        title: 'Mon vieux grimoire',
        description:
            "Développement du back-end d'un site de notation de livres. Mise en oeuvre des opérations CRUD. Utilisation d'une base de données MongoDB. Mise en place d'une API sécurisée avec Express. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/Immortalisanto/mon_vieux_grimoire.git',
        imagesDesktop: [monVieuxGrimoire1Desktop, monVieuxGrimoire2Desktop],
        imagesMobile: [monVieuxGrimoire1Mobile, monVieuxGrimoire2Mobile],
    },
    {
        index: 5,
        cover: monPortfolioCarousel,
        title: 'Mon portfolio',
        description:
            "Conception de mon portfolio dans le but de présenter mes différents projets ainsi que mes compétences. Création d'une maquette Figma par mes soins, puis intégration du site responsive via React et SASS. Mise en place d'une API sécurisée et d'une base de données pour la persistance des données et l'envoi d'emails. Plusieurs animations CSS intégrées comme l'effet 'Parallax'.",
        tags: [
            'HTML',
            'SASS',
            'React',
            'Figma',
            'Node.js',
            'Express',
            'Lighthouse',
            'Wave',
            'Photoshop',
            'W3C',
        ],
        github: 'https://github.com/Immortalisanto/Mon_Portfolio.git',
        imagesDesktop: [portfolio1Desktop],
        imagesMobile: [portfolio1Mobile],
    },
]
