import React from "react";
import styles from "./Item.module.scss";
import { MdOutlineShoppingBasket } from "react-icons/md";

export default function Item(props) {
    return (
        <div className={styles.item}>
            <img src={"./images/" + props.item.img} onClick={()=>props.onShowItem(props.item)}/>
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price} ₽</b>
            <div className={styles.addToCard} onClick={() => props.onAdd(props.item)}><MdOutlineShoppingBasket /></div>
        </div>
    );
}