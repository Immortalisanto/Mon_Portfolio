import { useState, useEffect } from 'react'
import './BackToTopButton.scss'
import arrow from '../../assets/images/arrow.webp'

export default function BackToTopButton() {
    const [showButton, setShowButton] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 1000) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0 })
    }

    return (
        <div
            className={`backToTopButton ${showButton ? 'show' : 'hidden'}`}
            onClick={scrollToTop}>
            <div className="backToTopButton__arrowDiv">
                <img
                    className="backToTopButton__arrowDiv__arrow"
                    src={arrow}
                    alt="Flèche permettant de remonter en haut de la page"
                />
            </div>
        </div>
    )
}
