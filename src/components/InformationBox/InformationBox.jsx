import './InformationBox.scss'

export default function InformationBox({ title, description }) {
    return (
        <div className="informationBox">
            <h3 className="informationBox__title">{title}</h3>
            <div className="informationBox__description">{description}</div>
        </div>
    )
}
