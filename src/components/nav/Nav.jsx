import React from 'react'
import "./nav.scss";

const Nav = () => {
  return (
    <div className='nav'>
        <div className="container">
            <div className="nav__box">
                <a href="" className="nav__logo"><img src="1.png" alt="" /></a>
                <ul className="nav__list">
                    <li className="nav__item"><a href="" className="nav__link">Каталог</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Условия сотрудничества</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Выгоды</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Почему Hubert?</a></li>
                    <li className="nav__item"><a href="" className="nav__link">Контакты</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav