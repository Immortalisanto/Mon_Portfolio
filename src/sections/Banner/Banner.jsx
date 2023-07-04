import './Banner.scss'
import bannerDesktop from '../../assets/images/banner-desktop.jpg'

export default function Banner() {
    return (
        <section className="banner">
            <img
                src={bannerDesktop}
                alt="Représente un ordinateur portable affichant des lignes de code à l'écran. Cet ordinateur est posé sur un bureau décoré de diverses plantes."
                className="banner__image"
            />
            <div className="welcomeTextAndContactButtonContainer">
                <div className="banner__welcomeText">
                    <h1 className="banner__welcomeText--title">
                        <span>Bonjour !</span>
                        <span>Je suis Anthony Tur,</span>
                        <span>développeur web - Intégrateur</span>
                    </h1>
                </div>

                <button className="banner__contactButton">Me contacter</button>
            </div>
        </section>
    )
}
