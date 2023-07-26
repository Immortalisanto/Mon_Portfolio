import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import cross from '../../assets/images/cross.png'
import githubLogo from '../../assets/images/github.png'
import './Modal.scss'

export default function Modal({
    title,
    tags,
    description,
    image,
    onClose,
    github,
}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return createPortal(
        <div className="modal">
            <div className="modalContent">
                <img
                    className="modalContent__cross"
                    src={cross}
                    alt="Une croix pour fermer la modale"
                    onClick={onClose}
                />
                <h3 className="modalContent__title">{title}</h3>
                <div
                    className="modalContent__tags"
                    style={{ display: tags ? 'flex' : 'none' }}>
                    {tags}
                </div>
                <a
                    className="modalContent__github"
                    href={github}
                    target="blank"
                    title={`Visiter le projet ${title}`}>
                    <img
                        className="modalContent__github__logo"
                        src={githubLogo}
                        alt="Lien dirigeant vers le projet github"
                    />
                </a>
                <div className="modalContent__descriptionBox">
                    <div className="description">{description}</div>
                </div>
                <img
                    className="modalContent__image"
                    src={image}
                    style={{ display: image ? 'block' : 'none' }}
                    alt={title}
                />
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}
