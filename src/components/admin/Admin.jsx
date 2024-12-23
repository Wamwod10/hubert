import React from 'react'
import "./admin.scss";

const Admin = () => {
    return (
        <div className="admin">
            <div className="container">
                <div className="admin__box">
                    <img src="16.png" alt="" />
                    <div className="admin__box-div">
                        <div className="admin__box-flex">
                            <h2 className="admin__title">Павел Липунов</h2>
                            <a href="#!" className="admin__link">Основатель компании</a>
                        </div>
                        <p className="admin__txt">С момента окончания института в 90-х годах у меня была цель — создать идеальный газовый котёл, который отвечает особенностям нашего климата и условиям эксплуатации. В 2001 году в лаборатории я разработал первый котёл Hubert, который положил начало нашему делу.</p>
                        <p className="admin__txt">Для меня «Сделано в России» – это не просто слова, а принцип, основанный на страсти к качеству. На протяжении 20 лет мы ежедневно работаем над улучшением нашего продукта, проверем каждый котёл и предоставляем 5 лет гарантии.</p>
                        <p className="admin__txt">Моя миссия — создавать котлы «с теплом к людям» – простые в установке и надёжные в работе. Мы знаем, что тепло в каждом доме начинается с качественного оборудования, и продолжаем трудиться, чтобы создавать лучшие газовые котлы в мире.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin