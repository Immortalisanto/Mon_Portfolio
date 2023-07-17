import './Banner.scss'
import bannerDesktopParallax from '../../assets/images/banner-desktop-xl.jpg'
import Button from '../../components/Button/Button.jsx'
import { ParallaxBanner } from 'react-scroll-parallax'

export default function Banner() {
    return (
        <section className="banner">
            <ParallaxBanner
                layers={[{ image: bannerDesktopParallax, speed: -35 }]}
                className="banner__parallaxBanner"
            />
            <div className="welcomeTextAndContactButtonContainer">
                <div className="banner__welcomeText">
                    <h1 className="banner__welcomeText--title">
                        <span>Bonjour !</span>
                        <span>Je suis Anthony Tur,</span>
                        <span>développeur web - Intégrateur</span>
                    </h1>
                </div>

                <Button text="Me contacter" />
            </div>
        </section>
    )
}
