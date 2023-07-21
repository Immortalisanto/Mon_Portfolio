import './Competences.scss'
import Button from '../../../components/Button/Button'
import CV from '../../../assets/images/CV.png'
import Collapse from '../../../components/Collapse/Collapse'
import { CompetencesData } from '../../../data/CompetencesData'
import CVPDF from '../../../assets/CV.pdf'

export default function Competences() {
    return (
        <section
            className="competences"
            id="competencesAnchor">
            <h2 className="competences__title">Mes compétences</h2>
            <p className="competences__text">
                Je suis résolu à développer mes compétences en développement web
                en explorant de nouveaux domaines d'expertise et en restant à
                l'affût des dernières avancées technologiques.
            </p>
            <div className="collapsesAndCV">
                <div className="collapses">
                    {CompetencesData.map(({ categorie, skills, index }) => (
                        <Collapse
                            key={`${categorie}-${index}`}
                            categorie={categorie}
                            skills={skills}
                            initialOpen={index === 0 ? true : false}
                        />
                    ))}
                </div>
                <div className="CV">
                    <img
                        className="CV__image"
                        src={CV}
                        alt="Curriculum Vitae d'Anthony Tur"
                    />
                    <a
                        href={CVPDF}
                        download>
                        <Button text="Télécharger" />
                    </a>
                </div>
            </div>
        </section>
    )
}
