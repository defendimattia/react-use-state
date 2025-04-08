import MainButton from "./MainButton"
import langList from "../data/languages"
import MainDescription from "./MainDescription"
import { useState } from "react"

export default function Main() {
    const [selectedId, setSelectedId] = useState(null)
    const toggleID = (id) => { setSelectedId(prev => prev === id ? null : id) }



    return (
        <>
            <div className="buttons-container">
                {langList.map(lang => {
                    return <MainButton key={lang.id} obj={lang} onClick={() => toggleID(lang.id)} />
                })}
            </div>
            <div className="text-container">
                {langList.map(lang => {
                    return selectedId === lang.id && <MainDescription text={lang.description} />
                })}
                
            </div>

        </>
    )
}