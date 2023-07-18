import bookiCarousel from '../assets/worksImages/desktop/carousel/booki.jpg'
import sophieBluelCarousel from '../assets/worksImages/desktop/carousel/sophie-bluel.jpg'
import ninaCarducciCarousel from '../assets/worksImages/desktop/carousel/nina-carducci.jpg'
import kasaCarousel from '../assets/worksImages/desktop/carousel/kasa.jpg'
import monVieuxGrimoireCarousel from '../assets/worksImages/desktop/carousel/mon-vieux-grimoire.jpg'
import monPortfolioCarousel from '../assets/worksImages/desktop/carousel/mon-portfolio.jpg'

export const RealisationsData = [
    {
        index: 0,
        image: bookiCarousel,
        title: 'Booki',
        description:
            "Création de la page d'accueil d'une agence de voyage. Code créé de zéro. Intégration du contenu à partir d'une maquette Figma. Site web entièrement responsive, s'adapte sur mobile et tablette. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['HTML', 'CSS', 'Figma'],
    },
    {
        index: 1,
        image: sophieBluelCarousel,
        title: 'Sophie Bluel',
        description:
            "Transformation d'un site web 'statique' vers un type 'dynamique'. Conception du portfolio d'une architecte d'intérieur, possibilité de connexion de l'administrateur pour modifier le contenu de la galerie (Ajout et Suppression) en communiquant avec une API. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['Javascript', 'Figma'],
    },
    {
        index: 2,
        image: ninaCarducciCarousel,
        title: 'Nina Carducci',
        description:
            "Débogage et optimisation d'un site d'une photographe. Optimisation globale du site (performances et bonnes pratique SEO), mise en place d'un référencement local, des métas pour les réseaux sociaux ainsi que des modifications pour améliorer l'accessibilité du site. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['Lighthouse', 'Wave', 'Rich Snippet', 'Photoshop', 'W3C'],
    },
    {
        index: 3,
        image: kasaCarousel,
        title: 'Kasa',
        description:
            "Création d'une application web de location immobilière. Utilisation de la bibliothèque React. Code créé de zéro. Ajout d'animations CSS. Intégration du contenu à partir d'une maquette Figma. Site web entièrement responsive, s'adapte sur mobile et tablette. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['HTML', 'CSS', 'React', 'Figma'],
    },
    {
        index: 4,
        image: monVieuxGrimoireCarousel,
        title: 'Mon vieux grimoire',
        description:
            "Développement du back-end d'un site de notation de livres. Mise en oeuvre des opérations CRUD. Utilisation d'une base de données MongoDB. Mise en place d'une API sécurisée avec Express. Projet réalisé durant le parcours de formation 'Développeur Web' chez Openclassrooms.",
        tags: ['Node.js', 'Express', 'MongoDB'],
    },
    {
        index: 5,
        image: monPortfolioCarousel,
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
            'MongoDB',
        ],
    },
]
