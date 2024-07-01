import React from "react";
import styles from "./Categories.module.scss"

export default function Categories(props) {
    const categories = [
        {
            key: "all",
            name: "Все"

        },
        {
            key: "Улун",
            name: "Улун"
        },
        {
            key: "Зелёный чай",
            name: "Зелёный чай"
        },
        {
            key: "Красный чай",
            name: "Красный чай"
        },
        {
            key: "Жёлтый чай",
            name: "Жёлтый чай"
        }
    ];
    return (
        <div className={styles.categories}>
            {categories.map(el => (
                <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name} </div>
            ))}
        </div>
    );
}