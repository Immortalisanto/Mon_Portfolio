import './Button.scss'

export default function Button({ text }) {
    return (
        <button className="button">
            <span className="button__text">{text}</span>
        </button>
    )
}
