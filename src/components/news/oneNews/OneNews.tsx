import React, { FC } from "react";
import s from './OneNews.module.css';

interface OneNewsProps {
    name?: string,
    text?: string,
    img?: string,
}

const OneNews: FC<OneNewsProps> = (props) => {
    return (
        <div className={s.newsDiv}>
            <div className={s.border}>
                <div className={s.img} >
                   <img src={props.img} alt={props.name}/>
                </div>
            </div>
        </div>
    )
}

export default OneNews