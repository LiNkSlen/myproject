import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header>
            <div>
                <span className={styles.logo}>Chinese tea shop</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
            </div>
            <div className={styles.presention}></div>
        </header>
    );
}