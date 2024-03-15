import React, { FC } from "react";
import s from './OneNews.module.css';

interface OneNewsProps {
    name: string
}

const OneNews: FC<OneNewsProps> = (props) => {
    return (
        <div className={s.newsDiv}>
            <div className={s.border}>
                <div className={s.img}>
                    <p>{props?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default OneNews