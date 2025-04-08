export default function MainDescription({ display, text }) {
    return (
        <>
            {display && <div className="description-text">
                <p>{text}</p>
            </div>}
        </>
    )
}