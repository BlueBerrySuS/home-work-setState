import { useState } from "react";
import style from "./user-form.module.css";
import Title from "../title/title";

function UserForm() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const handleNameInput = (value) => {
        setUserName(value)
    };
    const handleEmailInput = (value) => {
        setUserEmail(value)
    };
    return (
        <>
        <Title title={"Форма"} discription={"Можно ввожить данные, которые динамично выведяться на странице"}/>
        <div className={style.input_container}>
            <input className={style.input} type="text" placeholder="Введите имя" value={userName} onChange={e => handleNameInput(e.target.value)}/>
            <input className={style.input} type="text" placeholder="Введите Email" value={userEmail} onChange={e => handleEmailInput(e.target.value)}/>
        </div>
        <div>
            <h2>Имя: <span className={style.data_text}>{userName}</span></h2>
            <h2>Email: <span className={style.data_text}>{userEmail}</span></h2>
        </div>
        <hr />
        </>
    )
}

export default UserForm;