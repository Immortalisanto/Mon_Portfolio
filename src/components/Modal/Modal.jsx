import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import cross from '../../assets/images/cross.png'
import './Modal.scss'

export default function Modal({ title, tags, description, image, onClose }) {
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
                <div className="modalContent__tags">{tags}</div>
                <div className="modalContent__descriptionBox">
                    <p className="description">{description}</p>
                </div>
                <img
                    className="modalContent__image"
                    src={image}
                    alt={title}
                />
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}
