import { useState } from "react";
import style from './item-card-discription.mosule.css'

function ItemCardDicription({ item }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }
    return (
        <>
        <ul className={`${style.discription} ${!isVisible && style.hidden}`}>
            <li><p>status: {item.status}</p></li>
            <li><p>species: {item.species}</p></li>
            <li><p>type: {item.type !== ""? item.type : "------"}</p></li>
            <li><p>gender: {item.gender}</p></li>
            <li><p>origin: {item.origin.name}</p></li>
            <li><p>location: {item.location.name}</p></li>
        </ul>
        <button>
            {!isVisible && "Показать описание"}
            {isVisible && "Показать описание"}
        </button>
        </>
    )
}

export default ItemCardDicription;