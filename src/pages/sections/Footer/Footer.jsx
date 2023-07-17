/* eslint-disable jsx-a11y/anchor-is-valid */
import logoLinkedIn from '../../../assets/images/linkedIn.png'
import logoGithub from '../../../assets/images/github.png'
import './Footer-style.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <a href="#">
                    <img
                        src={logoLinkedIn}
                        alt="Logo LinkedIn, possibilité de cliquer pour être redirigé vers le profil LinkedIn d'Anthony Tur"
                        className="footer__logo--linkedIn logo"
                    />
                </a>
                <a href="#">
                    <img
                        src={logoGithub}
                        alt="Logo Github, possibilité de cliquer pour être redirigé vers le profil github d'Anthony Tur"
                        className="footer_logo-github logo"
                    />
                </a>
            </div>
            <p className="footer__copyright">Copyright © 2023 - Anthony Tur</p>
            <div className="footer__twoLinksForLegalInformations">
                <p className="footer__legalInformations--privacyPolicy legalInformation">
                    <a
                        href="#"
                        className="linksLegalInformations">
                        <span className="underlineItem">
                            Politique de confidentialité
                        </span>
                    </a>
                </p>
                <p className="footer__legalInformations--legalNotice legalInformation">
                    <a
                        href="#"
                        className="linksLegalInformations">
                        <span className="underlineItem">Mentions légales</span>
                    </a>
                </p>
            </div>
        </footer>
    )
}
