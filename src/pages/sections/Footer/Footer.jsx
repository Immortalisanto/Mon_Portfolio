/* eslint-disable jsx-a11y/anchor-is-valid */
import logoLinkedIn from '../../../assets/images/linkedIn.webp'
import logoGithub from '../../../assets/images/github.webp'
import './Footer-style.scss'
import Modal from '../../../components/Modal/Modal'
import { useState } from 'react'
import React from 'react'

export default function Footer() {
    const [isModalPrivacyPolicyOpen, setIsModalPrivacyPolicyOpen] =
        useState(false)

    const handleIsModalPrivacyPolicyOpen = () => {
        setIsModalPrivacyPolicyOpen(!isModalPrivacyPolicyOpen)
    }

    const [isModalLegalNoticeOpen, setIsModalLegalNoticeOpen] = useState(false)

    const handleIsModalLegalNoticeOpen = () => {
        setIsModalLegalNoticeOpen(!isModalLegalNoticeOpen)
    }

    return (
        <footer className="footer">
            <div className="footer__logo">
                <a
                    href="https://www.linkedin.com/in/anthony-tur-438b44165/"
                    title="Visiter mon profil LinkedIn"
                    target="blank">
                    <img
                        src={logoLinkedIn}
                        alt="Logo LinkedIn, possibilité de cliquer pour être redirigé vers le profil LinkedIn d'Anthony Tur"
                        className="footer__logo--linkedIn logo"
                    />
                </a>
                <a
                    href="https://github.com/Immortalisanto"
                    target="blank"
                    title="Visiter mon profil Github">
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
                    <span
                        className="underlineItem linksLegalInformations"
                        onClick={handleIsModalPrivacyPolicyOpen}>
                        Politique de confidentialité
                    </span>
                </p>
                {isModalPrivacyPolicyOpen && (
                    <Modal
                        onClose={handleIsModalPrivacyPolicyOpen}
                        title="Politique de confidentialité"
                        description={
                            <div className="privacyPolicyModal">
                                <p className="privacyPolicyModal__maj">
                                    Dernière mise à jour : 26 Juillet 2023
                                </p>
                                <p className="privacyPolicyModal__text">
                                    Je donne une grande importance à la
                                    confidentialité de vos données. Cette
                                    politique de confidentialité décrit comment
                                    je collecte, utilise et protège les
                                    informations personnelles que vous me
                                    fournissez via mon formulaire de contact.
                                </p>
                                <h4 className="privacyPolicyModal__title">
                                    Collecte des informations personnelles :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Lorsque vous utilisez mon formulaire de
                                    contact, je vous demande de fournir les
                                    informations suivantes :
                                </p>
                                <ul className="privacyPolicyModal__list">
                                    <li>Adresse e-mail (obligatoire)</li>
                                    <li>Nom (obligatoire)</li>
                                    <li>Prénom</li>
                                    <li>Numéro de téléphone</li>
                                </ul>
                                <h4 className="privacyPolicyModal__title">
                                    Utilisation des informations personnelles :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Les informations personnelles que vous me
                                    fournissez via mon formulaire de contact
                                    seront utilisées uniquement dans le but de
                                    vous répondre et de vous contacter
                                    concernant votre demande. Je ne les
                                    utiliserai en aucun cas à des fins
                                    commerciales ni ne les partagerai avec des
                                    tiers sans votre consentement explicite.
                                </p>
                                <h4 className="privacyPolicyModal__title">
                                    Stockage des données :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Les données que vous fournissez via mon
                                    formulaire de contact peuvent être stockées
                                    dans ma base de données de manière
                                    sécurisée. Je prends des mesures pour
                                    protéger vos informations personnelles
                                    contre tout accès non autorisé ou
                                    utilisation abusive.
                                </p>
                                <h4 className="privacyPolicyModal__title">
                                    Durée de conservation :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Je conserverai vos informations personnelles
                                    aussi longtemps que nécessaire pour répondre
                                    à votre demande et pour des raisons légales
                                    et comptables.
                                </p>
                                <h4 className="privacyPolicyModal__title">
                                    Vos droits :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Vous avez le droit d'accéder aux
                                    informations personnelles que je détiens à
                                    votre sujet et de les corriger si elles sont
                                    inexactes. Vous pouvez également demander la
                                    suppression de vos données personnelles de
                                    ma base de données en me contactant à
                                    l'adresse turanthony.webdev@gmail.com.
                                </p>
                                <h4 className="privacyPolicyModal__title">
                                    Sécurité :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Je prends la sécurité de vos données
                                    personnelles très au sérieux et mets en
                                    place des mesures techniques et
                                    organisationnelles appropriées pour les
                                    protéger.
                                </p>
                                <h4 className="privacyPolicyModal__title">
                                    Modification de la politique de
                                    confidentialité :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Je peux mettre à jour cette politique de
                                    confidentialité de temps à autre. Toute
                                    modification sera affichée sur cette page et
                                    la date de la dernière mise à jour sera
                                    indiquée en haut de la politique.
                                </p>
                                <h4 className="privacyPolicyModal__title">
                                    Contact :
                                </h4>
                                <p className="privacyPolicyModal__text">
                                    Si vous avez des questions concernant cette
                                    politique de confidentialité ou si vous
                                    souhaitez exercer vos droits en matière de
                                    protection des données, veuillez me
                                    contacter à l'adresse
                                    turanthony.webdev@gmail.com.
                                </p>
                            </div>
                        }
                    />
                )}
                <p className="footer__legalInformations--legalNotice legalInformation">
                    <span
                        className="underlineItem linksLegalInformations"
                        onClick={handleIsModalLegalNoticeOpen}>
                        Mentions légales
                    </span>
                </p>
                {isModalLegalNoticeOpen && (
                    <Modal
                        onClose={handleIsModalLegalNoticeOpen}
                        title="Mentions légales"
                        description={
                            <div className="legalNoticeModal">
                                <h4 className="legalNoticeModal__title">
                                    Éditeur du site :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    Anthony TUR, domicilié à Route de Lambesc,
                                    13330 Pélissanne.
                                    <br />
                                    Adresse e-mail : turanthony.webdev@gmail.com
                                </p>
                                <h4 className="legalNoticeModal__title">
                                    Responsable de la publication :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    Anthony TUR
                                </p>
                                <h4 className="legalNoticeModal__title">
                                    Hébergeur du site :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    (A remplir)
                                </p>
                                <h4 className="legalNoticeModal__title">
                                    Propriété intellectuelle :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    Le contenu du site, y compris le logo, est
                                    protégé par le droit d'auteur et est la
                                    propriété exclusive d'Anthony TUR.
                                </p>
                                <h4 className="legalNoticeModal__title">
                                    Collecte des données personnelles :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    Les informations collectées à travers le
                                    formulaire de contact (adresse e-mail, nom,
                                    prénom, numéro de téléphone) sont utilisées
                                    dans le seul but de pouvoir répondre aux
                                    demandes des visiteurs. Ces informations ne
                                    seront en aucun cas partagées avec des tiers
                                    et seront stockées de manière sécurisée dans
                                    une base de données chiffrée.
                                </p>
                                <h4 className="legalNoticeModal__title">
                                    Cookies :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    Le site n'utilise pas de cookies.
                                </p>
                                <h4 className="legalNoticeModal__title">
                                    Exonération de responsabilité :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    Ce site est un simple portfolio présentant
                                    les travaux et compétences d'Anthony TUR en
                                    tant que développeur web. Bien que je m'
                                    fforce de fournir des informations exactes
                                    et à jour, je ne peux garantir l'exactitude
                                    et l'exhaustivité du contenu du site. En
                                    conséquence, je décline toute responsabilité
                                    pour tout dommage résultant de l'utilisation
                                    du site.
                                </p>
                                <h4 className="legalNoticeModal__title">
                                    Loi applicable et juridiction compétente :
                                </h4>
                                <p className="legalNoticeModal__text">
                                    Le présent site et les présentes mentions
                                    légales sont soumis au droit français. En
                                    cas de litige, les tribunaux français seront
                                    compétents. Ces mentions légales peuvent
                                    être modifiées à tout moment sans préavis.
                                    Je vous recommande de les consulter
                                    régulièrement pour vous tenir informé des
                                    éventuelles mises à jour.
                                </p>
                            </div>
                        }
                    />
                )}
            </div>
        </footer>
    )
}
