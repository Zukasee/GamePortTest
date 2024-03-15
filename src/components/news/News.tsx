import React from "react";
import OneNews from "./oneNews/OneNews";
import first from "../../fonts/forNews/freeHour2.jpg";
import friend from "../../fonts/forNews/frind.jpg";
import sale from "../../fonts/forNews/sale.png";
import dota from "../../fonts/forNews/freeHour.jpg";
import cs from "../../fonts/forNews/cs.png";

const news = [
    {
        name: 'Первый заказ',
        img: first,
        text: 'sfdggsakd',
        timePost: ''
    },
    {
        name: 'Приведи друга',
        img: friend,
        text: 'dkjfdsl',
        timePost: ''
    },
    {
        name: 'Накопительная система',
        img: sale,
        text: 'dsfjkdjksf',
        timePost: ''
    },
    {
        name: 'Турнир по Dota2',
        img: dota,
        text: 'dsjfhksd',
        timePost: ''
    },
    {
        name: 'Турнир по Source2',
        img: cs,
        text: 'dsklcz;ck',
        timePost: ''
    },
]

const News = () => {
    return (
        <>
            {news.map((item) => (
                <OneNews name={item.name} img={item.img}/>
            ))}
        </>
    )
}

export default News