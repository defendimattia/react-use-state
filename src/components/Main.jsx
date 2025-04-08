import MainButton from "./MainButton"
import langList from "../data/languages"

export default function Main() {
    return (
        <div className="buttons-container">
            {langList.map(lang => {
                return <MainButton key={lang.id} obj={lang}/>
            })}
        </div>
    )

}