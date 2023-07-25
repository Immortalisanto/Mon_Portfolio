import Avatar from '../../../assets/images/avatar.png'
import './Header-style.scss'
import { useEffect, useState } from 'react'
import useWindowSize from '../../../assets/hooks/useWindowSize'

export default function Header() {
    // detect screen size
    const [screenWidth, setScreenWidth] = useState()

    const windowWidth = useWindowSize().width

    // detect scroll
    useEffect(() => {
        const header = document.getElementById('header')
        const avatar = document.getElementById('avatar')
        const burger = document.getElementById('burger')

        if (windowWidth <= 850) {
            setScreenWidth('small')
        } else {
            setScreenWidth('large')
        }

        const handleScroll = () => {
            //apply new style for header
            if (screenWidth === 'small' && window.scrollY > 420) {
                header.style.backgroundColor = 'rgba(125, 194, 165, 0.6)'
                header.style.height = '60px'
                avatar.style.width = '60px'
                avatar.style.height = '60px'
                burger.style.top = '0.5rem'
            } else if (screenWidth === 'small' && window.scrollY <= 420) {
                header.style.backgroundColor = 'rgba(125, 194, 165, 1)'
                header.style.height = '80px'
                avatar.style.width = '80px'
                avatar.style.height = '80px'
                burger.style.top = '1rem'
            } else if (screenWidth === 'large') {
                header.style.backgroundColor = 'rgba(125, 194, 165, 1)'
                header.style.height = '80px'
                avatar.style.width = '160px'
                avatar.style.height = '160px'
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [screenWidth, windowWidth])

    // menu hamburger on mobile
    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <header
            className="header"
            id="header">
            <a href="#root">
                <img
                    src={Avatar}
                    alt="Avatar représentant Anthony Tur, développeur Web"
                    className="avatar"
                    id="avatar"
                />
            </a>
            <nav className={`nav ${showLinks ? 'showNav' : 'hiddenNav'}`}>
                <ul className="navList">
                    <li className="navList__listItem item1">
                        <span className="underlineItem">
                            <a
                                href="#root"
                                className="underlineItem__link"
                                onClick={
                                    screenWidth === 'small'
                                        ? handleShowLinks
                                        : null
                                }>
                                Accueil
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem item2">
                        <span className="underlineItem">
                            <a
                                href="#aProposAnchor"
                                className="underlineItem__link"
                                onClick={
                                    screenWidth === 'small'
                                        ? handleShowLinks
                                        : null
                                }>
                                A propos
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem  item3">
                        <span className="underlineItem">
                            <a
                                href="#competencesAnchor"
                                className="underlineItem__link"
                                onClick={
                                    screenWidth === 'small'
                                        ? handleShowLinks
                                        : null
                                }>
                                Compétences
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem navList__listItem--hidden"></li>
                    <li className="navList__listItem  item4">
                        <span className="underlineItem">
                            <a
                                href="#realisationsAnchor"
                                className="underlineItem__link"
                                onClick={
                                    screenWidth === 'small'
                                        ? handleShowLinks
                                        : null
                                }>
                                Portfolio
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem  item5">
                        <span className="underlineItem">
                            <a
                                href="#servicesAnchor"
                                className="underlineItem__link"
                                onClick={
                                    screenWidth === 'small'
                                        ? handleShowLinks
                                        : null
                                }>
                                Services
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem  item6">
                        <span className="underlineItem">
                            <a
                                href="#contactAnchor"
                                className="underlineItem__link"
                                onClick={
                                    screenWidth === 'small'
                                        ? handleShowLinks
                                        : null
                                }>
                                Contact
                            </a>
                        </span>
                    </li>
                </ul>
                <button
                    className="nav__burger"
                    id="burger"
                    onClick={handleShowLinks}>
                    <span className="burgerBar"></span>
                </button>
            </nav>
        </header>
    )
}
