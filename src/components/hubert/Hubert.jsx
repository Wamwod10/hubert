import React, { useState } from 'react';
import "./hubert.scss"

const Hubert = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('50 WC Одноконтурный. Настенный');

    const options = ['50 WC Одноконтурный. Настенный', '40 Одноконтурный. Настенный', '30 Одноконтурный. Настенный', '20 Одноконтурный. Настенный', '10 Одноконтурный. Настенный'];

    const handleOptionClick = (option) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    const rubl = [
        {
            id: 1,
            rubltitle: "ВАШ ЗАРАБОТОК НА РАЗНИЦЕ В ЦЕНЕ:",
            rublprice: "10 000 рублей"
        }, {
            id: 2,
            rubltitle: "ВАША ВЫПЛАТА ОТ HUBERT ЗА РЕГИСТРАЦИЮ:",
            rublprice: "5 000 рублей"
        }, {
            id: 3,
            rubltitle: "ВАШ ПРИВЕТСТВЕННЫЙ БОНУС ЗА РЕГИСТРАЦИЮ:",
            rublprice: "3 000 рублей"
        }, {
            id: 4,
            rubltitle: "ВАШ ДОХОД С КОТЛОВ HUBERT:",
            rublprice: "18 000 рублей"
        },
    ]


    return (
        <div className='hubert'>
            <div className="container">
                <h2 className="hubert__title">Сколько вы <span>можете зарабатывать</span> c Hubert?</h2>
                <div className="hubert__box">
                    <div className="hubert__box-first">
                        <h2 className="hubert__box-title"><span>заполните поля калькулятора ниже и</span>  посчитайте прямо сейчас сколько вы заработаете с котлов </h2>
                        <h3 className="hubert__about-title">Выберите название котла</h3>
                        <div className="dropdown" onClick={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                            <div className="dropdown__selected">{selectedValue}</div>
                            {isOpen && (
                                <ul className="dropdown__list">
                                    {options.map((option, index) => (
                                        <li key={index} className="dropdown__item" onClick={() => handleOptionClick(option)}>{option}</li>))}
                                </ul>
                            )}
                        </div>
                        <h3 className="hubert__about-title">Сколько котлов вы планируете установить за месяц?</h3>
                        <input type="number" className='hubert__input' placeholder='Введите количество' />
                    </div>
                    <div className="hubert__box-second">
                        {rubl.map((item) => (
                            <div key={item.id} className="hubert__second-div">
                                <h3 className="hubert__second-title">{item.rubltitle}</h3>
                                <p className="hubert__second-txt">{item.rublprice}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <a href="" className="card__link hubert__link">Начать зарабатывать</a>
            </div>
        </div>
    )
}

export default Hubert