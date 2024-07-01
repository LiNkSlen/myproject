import React, { useState } from "react";
import styles from "./Header.module.scss";
import { PiBowlSteamLight } from "react-icons/pi";
import { IoBasketOutline } from "react-icons/io5";
import lgo from "../../assets/logo.png";
import Orders from "../Orders";

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    const showOrders = (props) => {
        let summa = 0;
        props.orders.forEach(el => summa += Number.parseFloat(el.price))
        return (
            <>
                {props.orders.map(el => (
                    <Orders key={el.id} item={el} onDelete={props.onDelete} />
                ))}
                <p className={styles.summa}>Итого: {new Intl.NumberFormat().format(summa)} ₽</p>
            </>
        );
    }

    const showNothing = () => {
        return (
            <div className={styles.empty}>
                <h2>Товары в корзине отсутствуют!</h2>
            </div>
        );
    }

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
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
                </div>
            )}
            <div className={styles.presention}></div>
        </header>
    );
}