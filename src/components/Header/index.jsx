import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header>
            <div>
                <span className={styles.logo}>Chinese tea shop</span>
            </div>
            <div className={styles.presention}></div>
        </header>
    );
}