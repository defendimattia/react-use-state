export default function MainButton({ obj, onClick }) {

    return (<button onClick={onClick}>{obj.title}</button>)
}