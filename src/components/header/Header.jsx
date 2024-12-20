import React from 'react'
import "./header.scss";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__box"></div>
            <div className="container">
                <h1 className="header__title"><span>Станьте партнером Hubert</span> Зарабатывайте на монтаже котлов от 50 000 рублей в месяц дополнительно</h1>
                <p className="header__txt">и легко выводите бонусы себе на карту <span>1 бонус = 1 рубль</span></p>
                <div className="header__extra-box">
                    <img src="3.png" alt="" />
                    <p className="header__text">Только <span>первым 1000 человек бонус 3000</span> р сразу после регистрации!</p>
                </div>
                <a href='' className="header__link">Начать зарабатывать</a>
            </div>
        </div>
    )
}

export default Header