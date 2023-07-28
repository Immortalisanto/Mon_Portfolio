import './Banner.scss'
import bannerDesktopParallaxXL from '../../../assets/images/banner-desktop-xl.webp'
import bannerDesktopParallaxL from '../../../assets/images/banner-desktop-l.webp'
import Button from '../../../components/Button/Button.jsx'
import { ParallaxBanner } from 'react-scroll-parallax'
import useWindowSize from '../../../assets/hooks/useWindowSize'
import { useEffect, useState } from 'react'

export default function Banner() {
    // detect screen size
    const [screenWidth, setScreenWidth] = useState()
    const windowWidth = useWindowSize().width

    useEffect(() => {
        if (windowWidth <= 1024) {
            setScreenWidth('small')
        } else {
            setScreenWidth('large')
        }
    }, [windowWidth])

    return (
        <section className="banner">
            <ParallaxBanner
                layers={[
                    {
                        image:
                            screenWidth === 'small'
                                ? bannerDesktopParallaxL
                                : bannerDesktopParallaxXL,
                        speed: -35,
                    },
                ]}
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

                <a
                    href="#contactAnchor"
                    className="bannerButtonLink">
                    <Button text="Me contacter" />
                </a>
            </div>
        </section>
    )
}
