import './Collapse.scss'
import arrow from '../../assets/images/arrow.png'
import { useState } from 'react'

export default function Collapse({ categorie, skills }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapse">
            <button
                className="button"
                onClick={() => setIsOpen(!isOpen)}>
                <h3 className="button__title">{categorie}</h3>
                <img
                    className="button__arrow"
                    src={arrow}
                    alt="Flèche permettant l'ouverture et la fermeture de l'ensemble de compétences"
                />
            </button>
            <div className={`skillBox ${isOpen ? '' : 'displayNone'}`}>
                {skills.map(({ skill, level, index }) => (
                    <div
                        key={`${skill}-${index}`}
                        className="skillBox_skill">
                        <h4 className="skill__title">{skill}</h4>
                        <div className="skill__progressBar">
                            <div
                                className="skill__progressBar--level"
                                width={level}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
