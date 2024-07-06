import React from "react";
import styles from "./Footer.module.scss";


export default function Footer() {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.flex}>
                    <div className={styles.forma}>
                        <form>
                            <h2> Форма обращения</h2>
                            <br />
                            <input type="text" placeholder="Имя*" />
                            <br /><br />
                            <input type="email" placeholder="email*" />
                            <br /><br />
                            <input type="text" placeholder="Телефон*" />
                            <br /><br />
                            <textarea cols={30} rows={10}></textarea>
                            <br /><br />
                            <input type="submit" placeholder="Отправить" />
                            <br /><br />
                        </form>
                    </div>
                </div>
                Все права защищены - 2024 &copy;
            </div>
        </footer>
    )
}