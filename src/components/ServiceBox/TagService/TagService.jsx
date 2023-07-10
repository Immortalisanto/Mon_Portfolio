import './TagService.scss'

export default function TagService({ tag }) {
    return (
        <div className="tagService">
            <p className="tagService__ability">{tag}</p>
        </div>
    )
}
