import style from './title.module.css'
import { useState } from 'react'

function Title({ title, discription}) {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible)
    }
    const handleMouseLeave = () => {
        if(isVisible)
            setIsVisible(false);
    }
    return (
        <>
        <div className={style.title_wrap}>
            <h2 className={`${style.title} ${!isVisible? style.hidden : ""}`} onClick={handleClick} onMouseLeave={handleMouseLeave}>{title}</h2>
            <p className={`${style.discription} ${!isVisible? style.hidden : ""}`}>{discription}</p>
        </div>
        </>
    )
}

export default Title