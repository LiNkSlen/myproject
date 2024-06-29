import React, { useState } from "react";
import styles from "./Header.module.scss";
import { PiBowlSteamLight } from "react-icons/pi";
import { IoBasketOutline } from "react-icons/io5";
import lgo from "../../assets/logo.png";

export default function Header() {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <img src={lgo} className={styles.lgo} />
                <PiBowlSteamLight className={styles.icon} />
                <span className={styles.logo}>Chinise tea shop</span>
                <ul className={styles.nav}>
                    <li>О нас</li>
                    <li>Контакты</li>
                    <li>Личный кабинет</li>
                </ul>
                <IoBasketOutline onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`} />
            </div>
            
            {cartOpen && (
                <div className={styles.shopCart}>

                </div>
            )}
            <div className={styles.presention}></div>
        </header>
    );
}