import './ServiceBox.scss'

export default function ServiceBox({ title, description, tags }) {
    return (
        <div className="serviceBox">
            <h3 className="serviceBox__title">{title}</h3>
            <p className="serviceBox__text">{description}</p>
            <div className="serviceBox__tags">{tags}</div>
        </div>
    )
}
