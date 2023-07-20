import Avatar from '../../../assets/images/avatar.png'
import './Header-style.scss'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="navList">
                    <li className="navList__listItem">
                        <span className="underlineItem">Accueil</span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">
                            <a
                                href="#aProposAnchor"
                                className="underlineItem__link">
                                A propos
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">
                            <a
                                href="#competencesAnchor"
                                className="underlineItem__link">
                                Compétences
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem navList__listItem--avatar">
                        <img
                            src={Avatar}
                            alt="Avatar représentant Anthony Tur, développeur Web"
                            className="avatar"
                        />
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">
                            <a
                                href="#realisationsAnchor"
                                className="underlineItem__link">
                                Portfolio
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">
                            <a
                                href="#servicesAnchor"
                                className="underlineItem__link">
                                Services
                            </a>
                        </span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
