import { useState } from "react";
import style from './clicker.module.css';
import Title from "../title/title";

function Clicker() {
    const [clickCount, setClickCount] = useState(0);
    const [fontColor, setFontColor] = useState("black");
    const gradientColors = {
        1: "#00FF00",
        2: "#33FF00",
        3: "#66FF00",
        4: "#99FF00",
        5: "#CCFF00",
        6: "#FFCC00",
        7: "#FF9900",
        8: "#FF6600",
        9: "#FF3300",
        10: "#FF0000"
    };

    const handleClick = () => {
        const newClickCount = clickCount === 10? 0 : clickCount + 1;
        setClickCount(newClickCount);
        setFontColor(gradientColors[newClickCount]);
    };
    return (
        <>
        <Title title={"Кликер"} discription={"Можно щелкать до 10"}/>
        <div className={style.clicker}>
            <h2 className={style.clicker_display} style={{color: fontColor}}>{clickCount}</h2>
            <button className={style.clicker_button} onClick={handleClick}>Жми</button>
        </div>
        <hr />
        </>
    )
}
export default Clicker;