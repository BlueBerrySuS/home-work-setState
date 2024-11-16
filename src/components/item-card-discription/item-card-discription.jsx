import { useState } from "react";
import style from './item-card-discription.module.css'

function ItemCardDicription({ item }) {
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = () => {
        setIsVisible(!isVisible);
    }
    const checkFunc = (data) => {
        return data !== ""? data : "------"; 
    }
    return (
        <div className={style.discription_wrap}>
            <ul className={`${style.discription} ${!isVisible && style.hidden}`}>
                <li><p>status: {checkFunc(item.status)}</p></li>
                <li><p>species: {checkFunc(item.species)}</p></li>
                <li><p>type: {checkFunc(item.type)}</p></li>
                <li><p>gender: {checkFunc(item.gender)}</p></li>
                <li><p>origin: {checkFunc(item.origin.name)}</p></li>
                <li><p>location: {checkFunc(item.location.name)}</p></li>
            </ul>
            <button className={style.button}onClick={handleClick}>
                {isVisible? "Скрыть описание" : "Показать описание"}
            </button>
        </div>
    )
}

export default ItemCardDicription;