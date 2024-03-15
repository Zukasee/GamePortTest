import React from "react";
import OneNews from "./oneNews/OneNews";

const news = [
    {
        name: 'Первый заказ',
        img: '',
        text: '',
        timePost: ''
    },
    {
        name: 'Приведи друга',
        img: '',
        text: '',
        timePost: ''
    },
    {
        name: 'Накопительная система',
        img: '',
        text: '',
        timePost: ''
    },
    {
        name: 'Турнир по Dota2',
        img: '',
        text: '',
        timePost: ''
    },
    {
        name: 'Турнир по Source2',
        img: '',
        text: '',
        timePost: ''
    },
]

const News = () => {
    return (
        <>
            {news.map((item) => (
                <OneNews name={item.name}/>
            ))}
        </>
    )
}

export default News