import './APropos.scss'
import { AProposData } from '../../../data/AProposData'
import InformationBox from '../../../components/InformationBox/InformationBox'

export default function APropos() {
    return (
        <section
            className="aPropos"
            id="aProposAnchor">
            <h2 className="aPropos__title">A propos de moi</h2>
            <div className="aPropos__text">
                <p>
                    Avec plus de 10 années d'expérience dans le commerce en
                    magasin, j'ai gravi tous les échelons hiérarchiques,
                    développant ainsi une solide expertise. J'ai acquis des
                    compétences essentielles comme l'organisation, l'autonomie,
                    l'empathie et la rigueur, qui ont été des atouts majeurs
                    dans ma progression.
                </p>
                <p>
                    Une période de réflexion personnelle m'a conduit à une
                    reconversion vers ma passion pour la technologie. C'est avec
                    détermination et une perspective renouvelée que j'ai choisi
                    de me diriger vers le{' '}
                    <strong className="aPropos__text--highlight">
                        développement web
                    </strong>
                    . J'ai suivi une formation en ligne chez{' '}
                    <a
                        href="https://openclassrooms.com/fr/"
                        className="aPropos__text--link"
                        target="blank"
                        title="Visiter le site d'OpenClassrooms">
                        <strong className="aPropos__text--highlight">
                            Openclassrooms
                        </strong>
                    </a>
                    , une plateforme reconnue dans le domaine de l'apprentissage
                    en ligne.
                </p>
                <p>
                    À travers ce portfolio, je partage{' '}
                    <a
                        href="#realisationsAnchor"
                        className="aPropos__text--link">
                        <strong className="aPropos__text--highlight">
                            mes réalisations
                        </strong>
                    </a>{' '}
                    et mon évolution en tant que développeur web. Je combine mes
                    connaissances du commerce avec mes compétences en
                    développement web pour apporter une perspective unique à mes
                    projets.
                </p>
                <p>
                    En utilisant les langages{' '}
                    <strong className="aPropos__text--highlight">HTML</strong>,{' '}
                    <strong className="aPropos__text--highlight">CSS</strong> et{' '}
                    <strong className="aPropos__text--highlight">
                        JavaScript
                    </strong>
                    , je crée des expériences web convaincantes et captivantes.
                    J'apporte une attention minutieuse à la résolution de
                    problèmes et je veille à soigner chaque détail pour offrir
                    des résultats de qualité.
                </p>
            </div>
            <div className="aPropos__boxes">
                {AProposData.map(({ index, title, description }) => (
                    <InformationBox
                        key={`${title}-${index}`}
                        title={title}
                        description={description.map((paragraph, index) => (
                            <p
                                key={`${index}-${paragraph
                                    .slice(0, 10)
                                    .replaceAll(' ', '&')}`}
                                className="informationBox__description__paragraph">
                                {paragraph}
                            </p>
                        ))}
                    />
                ))}
            </div>
        </section>
    )
}
