import './Collapse.scss'
import arrow from '../../assets/images/arrow.webp'
import { useState } from 'react'

export default function Collapse({ categorie, skills, initialOpen }) {
    const [isOpen, setIsOpen] = useState(initialOpen)

    return (
        <div className="collapse">
            <button
                className={`collapse__button ${isOpen ? '' : 'buttonRadius'}`}
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className="collapse__button__title">{categorie}</h3>
                <img
                    className={`collapse__button__arrow--${
                        isOpen ? 'top' : 'down'
                    }`}
                    src={arrow}
                    alt="Flèche permettant l'ouverture et la fermeture de l'ensemble de compétences"
                />
            </button>
            <div className={`skillBox--${isOpen ? 'open' : 'closed'}`}>
                {skills.map(({ skill, level, index }) => (
                    <div
                        key={`${skill}-${index}`}
                        className={`skillBox__skill--${
                            isOpen ? 'open' : 'closed'
                        }`}>
                        {isOpen && (
                            <h4 className="skillBox__skill__title">{skill}</h4>
                        )}
                        {isOpen && (
                            <div className="skillBox__skill__progressBar">
                                <div
                                    className="skillBox__skill__progressBar--level"
                                    style={{ width: `${level}` }}></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
