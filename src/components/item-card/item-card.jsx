import { useEffect, useState } from "react";
import style from "./item-card.module.css";
import ItemCardDicription from "../item-card-discription/item-card-discription";


function ItemCard({ id }) {
    const [item,setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const json = await response.json();
                setItem(json);
            } catch(error) {
                console.log(`Ошибка загрузки данных: ${error}`);
            }
        }
        if(id) fetchData();
    }, [id])


    return (
        <>
        {item && <div key={id} className={style.item_card}>
            <img className={style.item_image} src={item.image} alt="" />
            <div className={style.item_title_wrap}>
                <h2 className={style.item_title}>{item.name}</h2>
                <ItemCardDicription item={item}/>
            </div>
            <button onClick={handleClick}>
                {!isVisible && "Показать описание"}
                {isVisible && "Показать описание"}
            </button>
        </div>}
        </>
    ) 
}

export default ItemCard;