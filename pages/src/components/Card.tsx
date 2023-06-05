import React, { useState } from 'react'
import '../App.css';
import Button from './Button';

function Card() {
    const now = new Date();
    var month = now.getMonth() + 1;
    var date;
    var text;

    type Text = {
        date: string;
        text: string;
    };

    const texts: Text[] = [
        { date: "3月11日", text: "長い文章" },
        { date: "3月12日", text: "長い文章" },
        { date: "3月13日", text: "長い文章" },
    ];

    const [num, setNum] = useState(month)
    const increment = () => {
        setNum(num => ++num)
    }
    const decrement = () => {
        setNum(num => num - 1)
    }

    if (date == null) {
        date = "4";
    } else {
        date = "8";
    }

    return (
        <div className="Card">
            {texts.map((text) => {
                return (
                    <div key={text.date}>
                        <p>now {num} 月desu.</p>
                        <p>
                            <Button onClick={decrement} label={"前"} state="secondary" />
                            <Button onClick={increment} label={"次"} state="secondary" />
                        </p>
                        <p>{text.date} あなたのお名前は{text.text}desu. </p>
                    </div>
                );
            })}
        </div >
    )
};

export default Card