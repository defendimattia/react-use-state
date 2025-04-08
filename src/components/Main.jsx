import MainButton from "./MainButton"
import langList from "../data/languages"
import MainDescription from "./MainDescription"

export default function Main() {
    return (
        <>
            <div className="buttons-container">
                {langList.map(lang => {
                    return (
                        <>
                            <MainButton key={lang.id} obj={lang} />
                            <MainDescription display={false} text={lang.description}/>
                        </>
                    )
                })}
            </div>

        </>
    )
}