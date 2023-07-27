import './Competences.scss'
import Button from '../../../components/Button/Button'
import CV from '../../../assets/images/CV.png'
import Collapse from '../../../components/Collapse/Collapse'
import { CompetencesData } from '../../../data/CompetencesData'

export default function Competences() {
    const downloadCV = () => {
        window.location.href = 'http://localhost:4000/api/download/cv'
    }

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
                            className="collapses__collapse"
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
                    <span onClick={downloadCV}>
                        <Button text="Télécharger" />
                    </span>
                </div>
            </div>
        </section>
    )
}
